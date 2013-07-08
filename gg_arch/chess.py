from boardgame import Boardgame
from gamepiece import Gamepiece
from gamecell import gameCell

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
                self.state[files[j]+ranks[i]] = 'none'
           
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
            self.state[stateInit[i][0]] = stateInit[i][1]
        return

##    def getLegalMoves(self, piece_ID):
##        current = self.getLocation(piece_ID)
##        [file_index,row_index] = self.getFileRow(cell_current)
##        legalMoves = [];
##        switch self.pieces(piece_ID).name
##            case 'p'
##                if self.state(self.getCellID(file_index,row_index+1))=='':
##					legalMoves.append(self.getCellName(file_index,row_index+1)
##				
##				if self.state(self.getCellID(file_index+1,row_index+1))!='':
##					legalMoves.append(self.getCellName(file_index+1,row_index+1)
##				if self.state(self.getCellID(file_index-1,row_index+1))!='':
##					legalMoves.append(self.getCellName(file_index-1,row_index+1)
##            case 'R'
##
##            case 'N'
##
##            case 'B'
##
##            case 'Q'
##
##            case 'K'
