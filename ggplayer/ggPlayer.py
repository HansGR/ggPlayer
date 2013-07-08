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
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas.ui.FocusPanel import FocusPanel
from pyjamas.ui.DockPanel import DockPanel
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

BOARDWIDTH = 600
BOARDHEIGHT = 600
LIGHT = Color.Color('#FDE6BE')
DARK = Color.Color('#695532')

class GameCanvas(GWTCanvas):
    def __init__(self, w, h, gametype):
        GWTCanvas.__init__(self, w, h)
                       
        self.setSize(w,h)
        self.setStyleName('drophere')
        self.setStyleAttribute('position', 'relative')
        
        self.width = w
        self.height = h
        self.gametype = gametype
        self.images = []
        self.img_dict = []
        self.loadGame()
            
        self.run = False

    def loadGame(self):
        if self.gametype == 'Chess':
            self.game = Chess()
            self.boardtype = self.game.boardtype
            images = ['./images/Chess/pw.svg', './images/Chess/pb.svg',
                  './images/Chess/Nw.svg', './images/Chess/Nb.svg',
                  './images/Chess/Bw.svg', './images/Chess/Bb.svg',
                  './images/Chess/Rw.svg', './images/Chess/Rb.svg',
                  './images/Chess/Qw.svg', './images/Chess/Qb.svg',
                  './images/Chess/Kw.svg', './images/Chess/Kb.svg']
            for x in range(self.game.num_players):
                self.img_dict.append({})
        else:
            self.boardtype = '8x8checker'
            images = ['./images/Chess/pw.svg']
        loadImages(images, self)
        

    def onImagesLoaded(self, imagesHandles):
        print "loaded images", imagesHandles
        #Window.alert("loaded images:")
        #Window.alert(str(self.gametype))
        #self.drawImage(self.Pw, self.width/8, self.height/8)
        self.img_dict[0]['p'] = imagesHandles[0]
        self.img_dict[1]['p'] = imagesHandles[1]
        self.img_dict[0]['N'] = imagesHandles[2]
        self.img_dict[1]['N'] = imagesHandles[3]
        self.img_dict[0]['B'] = imagesHandles[4]
        self.img_dict[1]['B'] = imagesHandles[5]
        self.img_dict[0]['R'] = imagesHandles[6]
        self.img_dict[1]['R'] = imagesHandles[7]
        self.img_dict[0]['Q'] = imagesHandles[8]
        self.img_dict[1]['Q'] = imagesHandles[9]
        self.img_dict[0]['K'] = imagesHandles[10]
        self.img_dict[1]['K'] = imagesHandles[11]

        print "resize", self.width, self.height
        self.resize(self.width, self.height)
        self.reset()
        self.run = True

    def reset(self):
        self.drawBoard()
        self.initPieces()

    def drawBoard(self):
        # draw the cells
        for i in self.game.board.keys():
            self.drawCell(i,[LIGHT, DARK])
##	      self.restoreContext()
            
    def drawCell(self,cell,colors):
        path, pathtype = self.game.board[cell].getPath()
        self.beginPath()
        self.moveTo(path[0][0],path[0][1])
        for j in range(len(pathtype)):
            if pathtype[j]=='line':
                xi = int(path[j+1][0]*self.width)
                yi = int(path[j+1][1]*self.height)
                self.lineTo(xi,yi)
            elif pathtype[j]=='arc':
                x1 = int(path[j+1][0]*self.width)
                y1 = int(path[j+1][1]*self.height)
                x2 = int(path[j+1][2]*self.width)
                y2 = int(path[j+1][3]*self.height)
                r  = int(path[j+1][4]*self.width)
                self.arcTo(x1,y1,x2,y2,r)
            elif pathtype[j]=='quad':
                pass
            elif pathtype[j]=='bezier':
                pass
            else:
                pass
        self.closePath()
        self.setFillStyle(colors[self.game.board[cell].color])
        self.fill()
        
    def initPieces(self):
        #Window.alert("Drawing Pieces")
        #img_size = (45, 45)
        for i in self.game.state.keys():
            if self.game.state[i]!='none':
                #Window.alert("Drawing "+str(self.game.state[i]))
                self.drawPiece(self.game.pieces[self.game.state[i]],self.game.board[i])

    def drawPiece(self, gamepiece, cell):
        img = self.img_dict[gamepiece.Player][gamepiece.Name]
        #Window.alert(cell.name)
        xi,yi = cell.getPos()
        x = int(xi*self.width)
        y = int(yi*self.height)
        #Window.alert(str(x)+" "+str(y))
        wi,hi = cell.getSize()
        w = int(wi*self.width)
        h = int(wi*self.height)
        self.drawImage(img, 0, 0, 45, 45, x, y, w, h)
            
def greet(fred):
    fred.setText("thanks for playing!")
    Window.alert("Test run!")

if __name__ == '__main__':
    pyjd.setup("public/ggPlayer.html")
    #b = Button("Click me", greet, StyleName='teststyle')
    #h = HTML("<b>Welcome to gg Player!</b> (html)", StyleName='teststyle')

    game = GameCanvas(BOARDWIDTH,BOARDHEIGHT,'Chess')

    #game2 = GWTCanvas(BOARDWIDTH,BOARDHEIGHT)
    #game2.setFillStyle(DARK)
    #game2.fillRect(0,0,BOARDWIDTH/2,BOARDHEIGHT/2)
    #Window.alert(str(game2.getCoordWidth()))
    
    #panel = FocusPanel(Widget=game)
    dock = DockPanel(HorizontalAlignment=HasAlignment.ALIGN_CENTER,Spacing=10)
    dock.add(game, DockPanel.CENTER)

    #l = Label("Hello World (label)", StyleName='teststyle')
    #base = HTML("Hello from %s" % pygwt.getModuleBaseURL(),StyleName='teststyle')

    #RootPanel().add(b)
    #RootPanel().add(h)
    RootPanel().add(dock)
    
    #RootPanel().add(base)
    pyjd.run()
