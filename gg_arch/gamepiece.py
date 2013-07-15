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

class Gamepiece(object):
    """Common boardgame piece object

    Attributes:
        player (int):  The player who owns the piece
        name (str):  The name of the piece, used to define legal behavior
        ID (int):  The unique ID of the piece
        location (str):  The name of the cell where the piece currently is (default 'none')
    """

    def __init__(self, player, name, ID, location="none"):
        """Initialize the gamepiece

        :param player: Player who owns this piece
        :type player:  int
        :param name:  Name of the piece
        :type name:  str
        :param ID:  ID of the piece
        :type ID:  int
        :param location:  The name of the cell where the piece currently is (default 'none')
        :type location:  str
        
        """
        self.player = player
        self.name = name
        self.ID = ID
        self.location = location
