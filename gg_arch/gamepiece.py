class Gamepiece(object):
    'Common boardgame piece class'

    def __init__(self, Player, name, ID):
        self.Player = Player
        self.Name = name
        self.ID = ID
