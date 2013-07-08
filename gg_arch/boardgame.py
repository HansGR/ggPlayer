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
"""@package boardgame
Package containing the common classes for the gg architecture.  
"""
class Boardgame(object):
    """
    Common boardgame class
	
    This is an example of the basic class for a boardgame object.  Specific games (including boards, pieces, and rulesets) will be created as subclasses of this object.
    """
    state = {} # Dictionary, cell name: current piece
    history = [] #list of moves
    pieces = []  #list of Gamepiece objects
    boardtype = '' #string describing board type
    board = {}  # Dictionary, cell name: GameCell object
    num_players = 0 #number of players
    
    def __init__(self, game):
	"""Initializes the boardgame object"""
        self.game = game

    def getBoard(self):
        """Return the current state of the board"""
        return self.board

    def getHistory(self):
        """Return the history of executed moves"""
        return self.history
    
    def make_move(self, piece_ID, cell_ID):
        # make_move goes through the following steps:
        # 0. Verify piece_ID is legal to be moved this turn (belongs to Player)
        # 1. Calculate all legal cells for piece_ID; confirm cell_ID is one of the legal cells
        # 2. Check resulting state of gameboard to verify it is legal (e.g. not putting self into check)
        # 3. Trigger actions associated with the move (kill attacked piece, promote pawn, switch to other player's turn, etc)
        # 4. Return true when complete; return false, otherwise.  
        return 0
    
    def getCellIndex(self, cell_name):
        return self.state.find(cell_name)  # correct array function?

    
