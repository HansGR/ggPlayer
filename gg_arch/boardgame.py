# Copyright 2013 Hans Rinderknecht
#
# This file is part of ggPlayer.
# ggPlayer is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# ggPlayer is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with ggPlayer.  If not, see <http://www.gnu.org/licenses/>.

class Boardgame(object):
    """Common boardgame class

    The basic class for a boardgame object.
    Specific games (including boards, pieces, and rulesets) will be created as subclasses of this object.

    Attributes:
        board (dict):  Game board definition.  board[cell.name]: gameCell object
        state (dict):  Current state definition.  state[cell.name]: list of gamepiece.ID currently in cell
        history (list):  History of executed moves, appended from end
        pieces (list):  List of Gamepiece objects.  pieces[gamepiece.ID] = gamepiece 
        gamename (str):  Name of the game (for reference only)
        boardtype (str):  Name of the board type (for reference only)
        num_players (int):  Number of players
    """

    board = {}  
    state = {}  
    history = [] 
    pieces = []  
    gamename = ''
    boardtype = '' 
    num_players = 0 

    def __init__(self, gamename):
        """Constructor for the boardgame object

        :param gamename:  The name of the game
        :type gamename:  str

        """
        self.gamename = gamename

    def getBoard(self):
        """Return the current state of the board"""
        return self.board

    def getHistory(self):
        """Return the history of executed moves"""
        return self.history

    def make_move(self, piece, cell):
        """Check if a proposed move is legal; modify the game state and history

        :param piece: The piece to be moved.
        :type piece: :class:Gamepiece object
        :param cell:  The destination cell of the piece.
        :type cell: :class:gameCell object
        :returns:  bool -- true, if successful
            
        """
        # make_move goes through the following steps:
        # 0. Verify piece_ID is legal to be moved this turn (belongs to Player)
        # 1. Calculate all legal cells for piece_ID; confirm cell_ID is one of the legal cells
        # 2. Check resulting state of gameboard to verify it is legal (e.g. not putting self into check)
        # 3. Trigger actions associated with the move (kill attacked piece, promote pawn, switch to other player's turn, etc)
        # 4. Return true when complete; return false, otherwise.
        #Window.alert("called")
        flag = True
        if self.isLegalMove(piece, cell):
            testState = self.newState(piece, cell)
            legal, event, args = self.isLegalState(testState)
            if legal:
                self.state = testState
                self.pieces[piece.ID].location = cell.name
                movecode = piece.name + cell.name
                self.history.append(movecode)
                if event!=[]:
                    self.doEvent(event, args)
            else: flag = False
        else: flag = False

        return flag

    def newState(self, piece, cell):
        """Generic new state from moving piece to cell

        :param piece: The piece to be moved.
        :type piece: :class:Gamepiece object
        :param cell:  The destination cell of the piece.
        :type cell: :class:gameCell object
        :returns:  newState, a state for this game
            
        """
        newState = self.state
        newState[piece.location].remove(piece.ID)
        newState[cell.name].append(piece.ID)
        return newState


    def isLegalMove(self, piece, cell):
        """Determine if moving piece to cell is a legal move"""
        legalMoves = self.getLegalMoves(piece)
        if cell.name in legalMoves:
            return True
        else:
            return False

    def getLegalMoves(self, piece):
        """Generic list of legal moves for a piece"""
        return self.board.keys()

    def isLegalState(teststate):
        """Generic determine if board state is legal"""
        return True, [], []

    def doEvent(self, event, args):
        """Generic execute an event precipitated by a move (e.g. king in check, kill piece, ..."""
        return True
