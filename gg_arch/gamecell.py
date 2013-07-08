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
    '''Common game cell object.  [x,y] and [width, height] are fractions of the canvas size.'''

    def __init__(self, name, color, shape='rect', params=[0,0,1,1]):
        self.name = name
        self.shape = shape
        self.params = params
        self.color = color

    def getPath(self):
        if self.shape=='rect':
            x = self.params[0]
            y = self.params[1]
            w = self.params[2]
            h = self.params[3]
            path = ([x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y])
            pathtype = ('line','line','line','line')
        return path, pathtype

    def getPos(self):
        if self.shape=='rect':
            return self.params[0], self.params[1]

    def getSize(self):
        if self.shape=='rect':
            return self.params[2], self.params[3]
