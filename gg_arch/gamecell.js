/* start module: gamecell */
$pyjs.loaded_modules['gamecell'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gamecell'].__was_initialized__) return $pyjs.loaded_modules['gamecell'];
	var $m = $pyjs.loaded_modules["gamecell"];
	$m.__repr__ = function() { return "<module: gamecell>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gamecell';
	$m.__name__ = __mod_name__;


	$m['gameCell'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gamecell';
		$method = $pyjs__bind_method2('__init__', function(name, color, shape, params) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
				shape = arguments[3];
				params = arguments[4];
			}
			if (typeof shape == 'undefined') shape=arguments.callee.__args__[5][1];
			if (typeof params == 'undefined') params=arguments.callee.__args__[6][1];

			self.$$name = name;
			self.shape = shape;
			self.params = params;
			self.color = color;
			return null;
		}
	, 1, [null,null,['self'],['name'],['color'],['shape', 'rect'],['params', $p['list']([0, 0, 1, 1])]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getPath', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add4,h,pathtype,$add2,$add3,$add1,$add6,$add7,w,$add5,y,x,$add8,path;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'shape'), 'rect'))) {
				x = $p['getattr'](self, 'params').__getitem__(0);
				y = $p['getattr'](self, 'params').__getitem__(1);
				w = $p['getattr'](self, 'params').__getitem__(2);
				h = $p['getattr'](self, 'params').__getitem__(3);
				path = $p['tuple']([$p['list']([x, y]), $p['list']([$p['__op_add']($add1=x,$add2=w), y]), $p['list']([$p['__op_add']($add3=x,$add4=w), $p['__op_add']($add5=y,$add6=h)]), $p['list']([x, $p['__op_add']($add7=y,$add8=h)]), $p['list']([x, y])]);
				pathtype = $p['tuple'](['line', 'line', 'line', 'line']);
			}
			return $p['tuple']([path, pathtype]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPath'] = $method;
		$method = $pyjs__bind_method2('getPos', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'shape'), 'rect'))) {
				return $p['tuple']([$p['getattr'](self, 'params').__getitem__(0), $p['getattr'](self, 'params').__getitem__(1)]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPos'] = $method;
		$method = $pyjs__bind_method2('getSize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'shape'), 'rect'))) {
				return $p['tuple']([$p['getattr'](self, 'params').__getitem__(2), $p['getattr'](self, 'params').__getitem__(3)]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSize'] = $method;
		$method = $pyjs__bind_method2('isInCell', function(xcoord, ycoord) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xcoord = arguments[1];
				ycoord = arguments[2];
			}
			var $add12,h,$and3,$and4,$add10,w,$and1,y,x,$add9,$and2,$add11;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'shape'), 'rect'))) {
				x = $p['getattr'](self, 'params').__getitem__(0);
				y = $p['getattr'](self, 'params').__getitem__(1);
				w = $p['getattr'](self, 'params').__getitem__(2);
				h = $p['getattr'](self, 'params').__getitem__(3);
				return ($p['bool']($and1=((($p['cmp'](xcoord, x))|1) == 1))?($p['bool']($and2=($p['cmp'](xcoord, $p['__op_add']($add9=x,$add10=w)) == -1))?($p['bool']($and3=((($p['cmp'](ycoord, y))|1) == 1))?($p['cmp'](ycoord, $p['__op_add']($add11=y,$add12=h)) == -1):$and3):$and2):$and1);
			}
			return false;
		}
	, 1, [null,null,['self'],['xcoord'],['ycoord']]);
		$cls_definition['isInCell'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('gameCell', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gamecell */


/* end module: gamecell */


