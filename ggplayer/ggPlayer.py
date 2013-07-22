## Copyright 2013 Hans Rinderknecht

## This file is part of ggPlayer.

## ggPlayer is free software: you can redistribute it and/or modify
## it under the terms of the GNU General Public License as published by
## the Free Software Foundation, either version 3 of the License, or
## (at your option) any later version.

## ggPlayer is distributed in the hope that it will be useful,
## but WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
## GNU General Public License for more details.

## You should have received a copy of the GNU General Public License
## along with ggPlayer.  If not, see <http://www.gnu.org/licenses/>.

import pyjd # this is dummy in pyjs.
from pyjamas import DOM

from pyjamas.ui.RootPanel import RootPanel, RootPanelCls, manageRootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas.ui.FocusPanel import FocusPanel
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui import HasAlignment
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas.Canvas.GWTCanvas import GWTCanvas
from pyjamas.Canvas.ImageLoader import loadImages
from pyjamas.Canvas import Color
from pyjamas.ui.Image import Image

#from pyjamas.Canvas2D import Canvas, CanvasImage, ImageLoadListener
from pyjamas.Timer import Timer
from pyjamas.ui.Widget import Widget
from pyjamas import Window
from pyjamas.ui import Event
from pyjamas.ui import KeyboardListener
from pyjamas.ui.KeyboardListener import KeyboardHandler
from pyjamas.ui.ClickListener import ClickHandler

from pyjamas.dnd import makeDraggable
from pyjamas.ui.DragWidget import DragWidget, DragContainer
from pyjamas.ui.DropWidget import DropWidget
from pyjamas.dnd import getTypes

import math
import pygwt
import random

# add the games to the path
from chess import Chess

# Define constants in the program
BOARDWIDTH = 600
BOARDHEIGHT = 600
GAMENAME = 'Chess'
LIGHT = Color.Color('#FDE6BE')
DARK = Color.Color('#695532')
COLORS = [LIGHT,DARK]
SELECT = Color.Color('#FF0000')

class GameCanvas(GWTCanvas):
    """Canvas containing the gameboard

    Attributes:
        width (int):  Width of the board in pixels
        height (int):  Height of the board in pixels
        gametype (str):  Type of game to play
        images (list):  Location of gamepiece images (relative URL)
        img_dict (list):  Dictionary of image handles for each player [player] = {piece.name: handle}
        game (Boardgame object):  The active game in this canvas
        
    """
    
    def __init__(self, w, h, game):
        """ Initialize and resize the canvas; load the game.

        :param w:  The width of the canvas in pixels
        :type w: int
        :param h:  The height of the canvas in pixels
        :type h: int
        
        """
        GWTCanvas.__init__(self, w, h)
        
        self.setSize(w,h)
        self.setStyleName('drophere')
        self.setStyleAttribute('position', 'relative')
        
        self.width = w
        self.height = h
        self.images = []
        self.img_dict = []
        for x in range(game.num_players):
            self.img_dict.append({})
            
        self.run = False
        self.resize(self.width, self.height)
        self.run = True
        

    def reset(self, game):
        """Redraw the board and initialize the pieces"""
        self.drawBoard(game)
        self.initPieces(game)

    def drawBoard(self, game):
        """Draw all cells in the board"""
        # draw the cells
        for cell in game.board.values():
            self.drawCell(cell,COLORS)

    def drawCellPath(self, gamecell):
        """Helper function, draw the border path of a cell"""
        path, pathtype = gamecell.getPath()
        path = [[a*self.width,b*self.height] for a,b in path]
        
        self.beginPath()
        self.moveTo(path[0][0],path[0][1])
        for j in range(len(pathtype)):
            if pathtype[j]=='line':
                xi = int(path[j+1][0])
                yi = int(path[j+1][1])
                self.lineTo(xi,yi)
            elif pathtype[j]=='arc':
                x1 = int(path[j+1][0])
                y1 = int(path[j+1][1])
                x2 = int(path[j+1][2])
                y2 = int(path[j+1][3])
                r  = int(path[j+1][4])
                self.arcTo(x1,y1,x2,y2,r)
            elif pathtype[j]=='quad':
                pass
            elif pathtype[j]=='bezier':
                pass
            else:
                pass
        self.closePath()
        
    def drawCell(self,gamecell,colors):
        """Draw a cell in the board

        :param cell:  gamecell to draw
        :type cell:  gamecell object
        :param colors:  Cell colors used in this board
        :type colors:  list
        
        """
        self.drawCellPath(gamecell)
        self.setFillStyle(colors[gamecell.color])
        self.fill()

    def drawSelection(self, gamecell):
        """Draw a selection around the stated cell"""
        self.drawCellPath(gamecell)
        self.setStrokeStyle(SELECT)
        self.stroke()

    def initPieces(self, game):
        """Draw all pieces on their position in state"""
        #Window.alert("Drawing Pieces")
        for i in game.board.keys():
            for j in game.state[i]:
                self.drawPiece(game.pieces[j],game.board[i])

    def drawPiece(self, gamepiece, cell):
        """Draw a piece in a cell

        :param gamepiece:  Piece to be drawn
        :type gamepiece:  gamepiece object
        :param cell:  Cell in which to draw the piece
        :type cell:  gamecell object
        """
        img = self.img_dict[gamepiece.player][gamepiece.name]
        #Window.alert(cell.name)
        xi,yi = cell.getPos()
        x = int(xi*self.width)
        y = int(yi*self.height)
        #Window.alert(str(x)+" "+str(y))
        wi,hi = cell.getSize()
        w = int(wi*self.width)
        h = int(wi*self.height)
        self.drawImage(img, 0, 0, 45, 45, x, y, w, h)
        

class GamePlayer(DockPanel):
    """ The GamePlayer widget, containing game canvas and controls

    Attributes:
        GC (GameCanvas):  The GameCanvas object, containing game canvas and active game
        b (Button):  The button for submitting moves
        cell1 (TextBox):  Origin cell for a piece move
        cell2 (TextBox):  Destination cell for a piece move
        cellPanel (HorizontalPanel):  Panel containing cell1 and cell2
        mover (VerticalPanel):  Panel containing cellPanel and b
        selectedCell (list):  list of cell IDs that are currently selected
        
    Note:
        it might be a good idea to move the game proper out of the GameCanvas object
        - references and game-functions are kind of long
    """
    selectedCell = []
    
    def __init__(self, width, height, gametype):
        """Initialize the GameCanvas and construct the layout

        :param width:  width of the game canvas in pixels
        :type width:  int
        :param height:  height of the game canvas in pixels
        :type height:  int
        :param gametype:  type of game to be loaded
        :type gametype:  str
        """
        DockPanel.__init__(self,HorizontalAlignment=HasAlignment.ALIGN_CENTER,Spacing=10)
        
        if gametype == 'Chess':
            self.game = Chess()
            self.boardtype = self.game.boardtype
            self.images = []
            for i in self.game.pieces:
                self.images.append('./images/Chess/'+str(i.player)+str(i.name)+'.svg')
            self.images = list(set(self.images))  #eliminate duplicates
            
        self.GC = GameCanvas(width, height, self.game)
        loadImages(self.images, self)
        self.GC.addMouseListener(self)
        
        self.b = Button("Make Move", self, StyleName='teststyle')
        self.cell1 = TextBox(StyleName='boxStyle')
        self.cell2 = TextBox(StyleName='boxStyle')

        self.cellPanel = HorizontalPanel(VerticalAlignment=HasAlignment.ALIGN_MIDDLE)
        self.cellPanel.add(self.cell1)
        self.cellPanel.add(self.cell2)

        self.mover = VerticalPanel(HorizontalAlignment=HasAlignment.ALIGN_CENTER)
        self.mover.add(self.cellPanel)
        self.mover.add(self.b)
    
        self.add(self.GC, DockPanel.CENTER)
        self.add(self.mover, DockPanel.EAST)


    def GUImove(self, piece, cell):
        """Execute a move in the game; redraw the board"""
        origcell = piece.location
        didMove = self.game.make_move(piece, cell)
        if didMove:
            self.GC.drawCell(self.game.board[origcell], COLORS)
            for j in self.game.state[origcell]:
                self.GC.drawPiece(self.game.pieces[j], self.game.board[origcell])
            self.GC.drawPiece(piece, cell)
                    

    def onMouseUp(self, sender, x, y):
        mousex = float(x)/BOARDWIDTH
        mousey = float(y)/BOARDHEIGHT
        clickcell = self.game.whichCell(mousex,mousey)
        clickpieceID = self.game.state[clickcell]
        #If no cell is selected, make this cell selected.
        if len(self.selectedCell)==0:
            #If piece on this cell is not active or no piece on this cell, don't select
            if len(clickpieceID)==0:
                pass
            elif self.game.pieces[clickpieceID[len(clickpieceID)-1]].player!=self.game.state['player']:
                pass
            else:
                self.selectedCell.append(clickcell)
        #If this cell is selected, unselect this cell
        elif self.selectedCell[0]==clickcell:
            self.selectedCell.remove(clickcell)
            self.GC.drawCell(self.game.board[clickcell], COLORS)
            for j in self.game.state[clickcell]:
                self.GC.drawPiece(self.game.pieces[j], self.game.board[clickcell])
        #If another cell is selected, query piece on that cell, call GUImove, clear selected
        else:
            piecelist = self.game.state[self.selectedCell.pop()]
            piece = self.game.pieces[piecelist[len(piecelist)-1]]
            cell = self.game.board[clickcell]
            self.GUImove(piece, cell)
        for i in self.selectedCell:
            self.GC.drawSelection(self.game.board[i])
        
    def onClick(self,sender):
        """Call function for the text/button-based move controller"""
        if sender == self.b:
            cell1_txt = self.cell1.getText()
            cell2_txt = self.cell2.getText()
            #Window.alert(str(cell1_txt))
            if cell1_txt and cell2_txt in self.game.board:
                piece = self.game.pieces[self.game.state[cell1_txt][len(self.game.state[cell1_txt])-1]]
                cell = self.game.board[cell2_txt]
                self.GUImove(piece, cell)
            else:
                Window.alert("cell names not recognized!")
            self.cell1.setText("")
            self.cell2.setText("")

    def onImagesLoaded(self, imagesHandles):
        """Associate the correct image handle with each piece type

        :param imageHandles:  handles for the images in self.images
        :type imageHandles:  list
        
        """
        #Window.alert("loading images")
        for i in self.images:
            substr = i.split('/')
            img = substr.pop()
            p = int(img[0])
            name = img[1:img.find('.')]
            self.GC.img_dict[p][name] = imagesHandles[self.images.index(i)]
            
        self.GC.reset(self.game)


if __name__ == '__main__':
    pyjd.setup("public/ggPlayer.html")
    #h = HTML("<b>Welcome to gg Player!</b> (html)", StyleName='teststyle')
    #Window.alert(str(game2.getCoordWidth()))

    #Player = GameCanvas(BOARDWIDTH,BOARDHEIGHT,GAMENAME)
    Player = GamePlayer(BOARDWIDTH,BOARDHEIGHT,GAMENAME)
    #panel = FocusPanel(Widget=game)
    #dock = DockPanel(HorizontalAlignment=HasAlignment.ALIGN_CENTER,Spacing=10)
    #dock.add(game, DockPanel.CENTER)
    #dock.add(b, DockPanel.EAST)

    #l = Label("Hello World (label)", StyleName='teststyle')
    #base = HTML("Hello from %s" % pygwt.getModuleBaseURL(),StyleName='teststyle')

    #RootPanel().add(b)
    #RootPanel().add(h)
    RootPanel().add(Player)
    
    #RootPanel().add(base)
    pyjd.run()
