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

from gg_arch import Boardgame, Gamepiece, gameCell

class Chess (Boardgame):
    'Generic chess class'
    boardtype = '8x8checker'
    num_players = 2
    
    def __init__(self):
        # Construct the board
        ranks = '12345678'
        files = 'abcdefgh'
        for i in range(8):
            for j in range(8):
                x = float(j)/8
                y = (7-float(i))/8
                w = 0.125
                h = 0.125
                color = (i+j+1)%2
                self.board[files[j]+ranks[i]] = gameCell(files[j]+ranks[i],color,'rect',[x,y,w,h])
                self.state[files[j]+ranks[i]] = []
           
        # Construct the armies
        army = 'ppppppppRRNNBBQK'
        whiteArmy = [Gamepiece(0,army[x],x) for x in range(0,16)]
        blackArmy = [Gamepiece(1,army[x],x+16) for x in range(0,16)]
        self.pieces = tuple(whiteArmy + blackArmy)

        # Initialize the board state
        whitePawns = [[files[x]+'2',x] for x in range(8)]
        blackPawns = [[files[x]+'7',x+16] for x in range(8)]
        order = [8,10,12,14,15,13,11,9]  # RNBQKBNR
        whiteHome = [[files[x]+'1',order[x]] for x in range(8)]
        blackHome = [[files[x]+'8',order[x]+16] for x in range(8)]
        
        stateInit = whitePawns + whiteHome + blackPawns + blackHome 

        for i in range(len(stateInit)):
            self.state[stateInit[i][0]].append(stateInit[i][1])
            self.pieces[stateInit[i][1]].location = stateInit[i][0]

        # Define game-specific state variables
        self.state['player'] = 0
        return

    def getLegalMoves(self, piece):
        """Get a list of the legal moves for a given piece

        :param piece:  piece to get legal moves for
        :type piece:  Gamepiece object
        
        :return legalMoves:  list of cell names where the piece may move
        :type legalMoves:  list
        """
        current = piece.location
        #[file_index,row_index] = self.getFileRow(cell_current)
        legalMoves = []
        if self.state['player']!=piece.player:
            return legalMoves

        # Pawns
        if piece.name == 'p':  
            dir_player = ['N','S']
            flag, forward = self.getNextCell(current,dir_player[piece.player])
            if flag and self.state[forward]==[]:
                legalMoves.append(forward)
            home = ['2','7']
            if current[1] == home[piece.player]:
                flag, forward_2 = self.getNextCell(forward,dir_player[piece.player])
                if flag and self.state[forward_2]==[]:
                    legalMoves.append(forward_2)
            flag, capture_E = self.getNextCell(current,dir_player[piece.player]+'E')
            if flag and self.state[capture_E]!=[]:
                if self.pieces[self.state[capture_E][0]].player!=piece.player:
                    legalMoves.append(capture_E)
            flag, capture_W = self.getNextCell(current,dir_player[piece.player]+'W')
	    if flag and self.state[capture_W]!=[]:
                if self.pieces[self.state[capture_W][0]].player!=piece.player:
                    legalMoves.append(capture_W)
        # Sliders
        elif piece.name == 'R':
            for direction in ['N','S','E','W']:
                flag, nextcell = self.getNextCell(current,direction)
                while flag==True:
                    if self.state[nextcell]==[]:
                        legalMoves.append(nextcell)
                        flag, nextcell = self.getNextCell(nextcell,direction)
                    elif self.pieces[self.state[nextcell][0]].player!=piece.player:
                        legalMoves.append(nextcell)
                        flag = False
                    else:
                        flag = False

        elif piece.name == 'B':
            for direction in ['NE','NW','SE','SW']:
                flag, nextcell = self.getNextCell(current,direction)
                while flag==True:
                    if self.state[nextcell]==[]:
                        legalMoves.append(nextcell)
                        flag, nextcell = self.getNextCell(nextcell,direction)
                    elif self.pieces[self.state[nextcell][0]].player!=piece.player:
                        legalMoves.append(nextcell)
                        flag = False
                    else:
                        flag = False
                        
        elif piece.name == 'Q':
            for direction in ['N','NE','E','SE','S','SW','W','NW']:
                flag, nextcell = self.getNextCell(current,direction)
                while flag==True:
                    if self.state[nextcell]==[]:
                        legalMoves.append(nextcell)
                        flag, nextcell = self.getNextCell(nextcell,direction)
                    elif self.pieces[self.state[nextcell][0]].player!=piece.player:
                        legalMoves.append(nextcell)
                        flag = False
                    else:
                        flag = False

        # Hoppers
        elif piece.name == 'N':
            hops = [2,1]
            perpdir = [['NS','EW'],['EW','NS']]
            for directions in perpdir:
                for dx in directions[0]:
                    for dy in directions[1]:
                        flag = True
                        i = 0
                        j = 0
                        nextcell = current
                        while flag and i<hops[0]:
                            flag, nextcell = self.getNextCell(nextcell,dx)
                            i += 1
                        while flag and j<hops[1]:
                            flag, nextcell = self.getNextCell(nextcell,dy)
                            j += 1
                        if flag and (self.state[nextcell]==[] or self.pieces[self.state[nextcell][0]].player!=piece.player):
                            legalMoves.append(nextcell)

        # King
        elif piece.name == 'K':
             for direction in ['N','NE','E','SE','S','SW','W','NW']:
                flag, nextcell = self.getNextCell(current,direction)
                if flag and self.state[nextcell]==[]:
                    legalMoves.append(nextcell)
                elif flag and self.pieces[self.state[nextcell][0]].player!=piece.player:
                    legalMoves.append(nextcell)
                    
        else:
            legalMoves = self.board.keys()

        return legalMoves
            
           
    def getNextCell(self,cellname,direction):
        """Given a cell name, find the next cell in some direction

        :param cellname:  name of current cell
        :type cellname:  string
        :param direction:  direction to find next cell: one of N,S,E,W,NW,NE,SW,SE
        :type direction:  string

        :return newcell:  name of cell in that direction (none if empty)
        :type newcell:  string
        """
        files = 'abcdefgh'
        thisfile = files.find(cellname[0])
        thisrank = int(cellname[1])
        nextrank = thisrank;
        nextfile = thisfile;
        flag = thisfile>=0 and thisrank>=1 and thisrank<=8
        
        if (direction.find('N')>=0):
            if (thisrank<=7):
                nextrank += 1
            else: flag = False
        
        if (direction.find('S')>=0):
            if (thisrank>=2):
                nextrank -= 1
            else: flag = False
        
        if (direction.find('E')>=0):
            if (thisfile<=6):
                nextfile += 1
            else: flag = False
        
        if (direction.find('W')>=0):
            if (thisfile>=1):
                nextfile -= 1
            else: flag = False

        outcell = files[nextfile]+str(nextrank)
        return flag, outcell

    def newState(self, piece, cell):
        """Generic new state from moving piece to cell

        :param piece: The piece to be moved.
        :type piece: :class:Gamepiece object
        :param cell:  The destination cell of the piece.
        :type cell: :class:gameCell object
        :returns:  newState, a state for this game
            
        """
        newState = Boardgame.newState(self, piece, cell)
        newState['player'] += 1
        newState['player'] %= 2
        return newState

    def isLegalState(self,teststate):
        """Determine if board state is legal, or has precipitated events

        :param teststate:  state of the board to be tested
        :type teststate:  game state dictionary

        :return isLegal:  Legality of the state
        :type isLegal:  bool
        :return event:  events to trigger
        :type event:  list
        :return event_args:  arguments to go with events
        :type event_args:  list
        """
        isLegal = True
        event = []
        event_args = []
        
        newplayer = teststate['player']
        oldplayer = (newplayer +1)%2

        # ILLEGAL STATES:
        # Look for oldplayer is in check
##        for piece in self.pieces:
##            legalMoves = []
##            if piece.player == newplayer:
##                legalMoves.append(self.getLegalMoves(piece))
##        if self.pieces[oldplayer*16+15].location in legalMoves:
##            isLegal = False
        
        # LEGAL STATES with EVENTS:
        # Look for capture
        for cell in teststate.keys():
            if cell != 'player':
                if len(teststate[cell])>1:
                    event.append('capture')
                    event_args.append(cell)

        # Look for pawn promotion
        rplayer = {'8': 0,'1': 1}
        for f in 'abcdefgh':
            for r in '18':
                cell = f+r
                if len(teststate[cell])>0:
                    cellpiece = self.pieces[teststate[cell][len(teststate[cell])-1]]
                    if cellpiece.name == 'p' and cellpiece.player == rplayer[r]:
                        event.append('pawnup')
                        event_args.append(cellpiece.ID)
            
        # Look for check

        # Look for checkmate
        
        return isLegal, event, event_args

    def doEvent(self, event, args):
        """Execute an event precipitated by a move"""
        for i in range(len(event)):
            if event[i]=='capture':
                killed = self.state[args[i]].pop(0)
                self.pieces[killed].location = ''
            elif event[i]=='pawnup':
                #Need to figure out how to ask what type to replace as at GUI level
                self.pieces[args[i]].name = 'Q'
        return True

    def whichCell(self, x, y):
        """Return which cell ID contains the geometric coordinates [x,y].

        A more efficient overwrite of the default function which queries each cell until it gets a result.

        :param x:  x coordinate query relative to board; range [0,1]
        :type x:  float
        :param y:  y coordinate query relative to board; range [0,1]
        :type y:  float
        
        """
        files = 'abcdefgh'
        ranks = '87654321'
        return files[int(x*8)]+ranks[int(y*8)]
