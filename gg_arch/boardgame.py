class Boardgame(object):
    'Common boardgame class'
    state = {} # Dictionary, cell name: current piece
    history = [] #list of moves
    pieces = []  #list of Gamepiece objects
    boardtype = '' #string describing board type
    board = {}  # Dictionary, cell name: GameCell object
    num_players = 0 #number of players
    
    def __init__(self, game):
        self.game = game

    def getBoard(self):
        'Return the current state of the board'
        return self.board

    def getHistory(self):
        'Return the history of executed moves'
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

    
