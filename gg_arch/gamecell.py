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

class gameCell(object):
    """Common game cell object.  

    Attributes:
        name (str):  The name of the cell
        shape (str):  The shape of the cell (used for internal methods)
        params (list):  Parameters defining the location and shape of the cell, interpreted depending on 'shape'
        color (int):  The color index of the cell (actual colors defined based on index when drawing).
        
    .. note:
        All dimensions (location, width, etc.) are given as a fraction of the canvas size.
        Horizontal dimensions scale with canvas width; vertical dimensions scale with canvas height.
    """

    def __init__(self, name, color, shape='rect', params=[0,0,1,1]):
        """Initialize the cell

        :param name: Name of the cell
        :type name: str
        :param shape: Shape of the cell
        :type shape: str
        :param params: Parameters defining location and shape of the cell
        :type params: list
        :param color: Color index of the cell
        :type color: int

        """
        self.name = name
        self.shape = shape
        self.params = params
        self.color = color

    def getPath(self):
        """Get the path defining the outer boundary of the cell

        :returns:  path -- tuple of lists containing the path parameters (length m)
                   pathtype -- tuple of path types for interpreting 'path' (length (m-1))

        .. note:
            Path depends on the parameter 'shape'.  Exotic shapes will require new definitions.
        """
        if self.shape=='rect':
            x = self.params[0]
            y = self.params[1]
            w = self.params[2]
            h = self.params[3]
            path = ([x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y])
            pathtype = ('line','line','line','line')
        return path, pathtype

    def getPos(self):
        """Get the position of the cell.  Interpretation depends on :attr:shape.
        """
        if self.shape=='rect':
            return self.params[0], self.params[1]

    def getSize(self):
        """Get the size of the cell.  Interpretation depends on :attr:shape.
        """
        if self.shape=='rect':
            return self.params[2], self.params[3]

    def isInCell(self, xcoord, ycoord):
        """Return True if the coordinates [x,y] are within the cell"""
        if self.shape=='rect':
            x = self.params[0]
            y = self.params[1]
            w = self.params[2]
            h = self.params[3]
            return (xcoord>=x) and (xcoord<(x+w)) and (ycoord>=y) and (ycoord<(y+h))
        
        return False
