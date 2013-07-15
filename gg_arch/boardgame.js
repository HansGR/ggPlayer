/* start module: boardgame */
$pyjs.loaded_modules['boardgame'] = function (__mod_name__) {
	if($pyjs.loaded_modules['boardgame'].__was_initialized__) return $pyjs.loaded_modules['boardgame'];
	var $m = $pyjs.loaded_modules["boardgame"];
	$m.__repr__ = function() { return "<module: boardgame>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'boardgame';
	$m.__name__ = __mod_name__;


	$m['Boardgame'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'boardgame';
		$cls_definition['board'] = $p['dict']([]);
		$cls_definition['state'] = $p['dict']([]);
		$cls_definition['history'] = $p['list']([]);
		$cls_definition['pieces'] = $p['list']([]);
		$cls_definition['gamename'] = '';
		$cls_definition['boardtype'] = '';
		$cls_definition['num_players'] = 0;
		$method = $pyjs__bind_method2('__init__', function(gamename) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gamename = arguments[1];
			}

			self.gamename = gamename;
			return null;
		}
	, 1, [null,null,['self'],['gamename']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getBoard', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'board');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBoard'] = $method;
		$method = $pyjs__bind_method2('getHistory', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'history');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHistory'] = $method;
		$method = $pyjs__bind_method2('make_move', function(piece, cell) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				piece = arguments[1];
				cell = arguments[2];
			}
			var $add2,args,movecode,legal,flag,$add1,testState,event;
			flag = true;
			if ($p['bool'](self['isLegalMove'](piece, cell))) {
				testState = self['newState'](piece, cell);
				var $tupleassign1 = $p['__ass_unpack'](self['isLegalState'](testState), 3, null);
				legal = $tupleassign1[0];
				event = $tupleassign1[1];
				args = $tupleassign1[2];
				if ($p['bool'](legal)) {
					self.state = testState;
					$p['getattr'](self, 'pieces').__getitem__($p['getattr'](piece, 'ID')).location = $p['getattr'](cell, '$$name');
					movecode = $p['__op_add']($add1=$p['getattr'](piece, '$$name'),$add2=$p['getattr'](cell, '$$name'));
					self['history']['append'](movecode);
					if ($p['bool'](!$p['op_eq'](event, $p['list']([])))) {
						self['doEvent'](event, args);
					}
				}
				else {
					flag = false;
				}
			}
			else {
				flag = false;
			}
			return flag;
		}
	, 1, [null,null,['self'],['piece'],['cell']]);
		$cls_definition['make_move'] = $method;
		$method = $pyjs__bind_method2('newState', function(piece, cell) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				piece = arguments[1];
				cell = arguments[2];
			}
			var newState;
			newState = $p['getattr'](self, 'state');
			newState.__getitem__($p['getattr'](piece, 'location'))['remove']($p['getattr'](piece, 'ID'));
			newState.__getitem__($p['getattr'](cell, '$$name'))['append']($p['getattr'](piece, 'ID'));
			return newState;
		}
	, 1, [null,null,['self'],['piece'],['cell']]);
		$cls_definition['newState'] = $method;
		$method = $pyjs__bind_method2('isLegalMove', function(piece, cell) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				piece = arguments[1];
				cell = arguments[2];
			}
			var legalMoves;
			legalMoves = self['getLegalMoves'](piece);
			if ($p['bool'](legalMoves.__contains__($p['getattr'](cell, '$$name')))) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self'],['piece'],['cell']]);
		$cls_definition['isLegalMove'] = $method;
		$method = $pyjs__bind_method2('getLegalMoves', function(piece) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				piece = arguments[1];
			}

			return self['board']['keys']();
		}
	, 1, [null,null,['self'],['piece']]);
		$cls_definition['getLegalMoves'] = $method;
		$method = $pyjs__bind_method2('isLegalState', function() {
			if (this.__is_instance__ === true) {
				var teststate = this;
			} else {
				var teststate = arguments[0];
			}

			return $p['tuple']([true, $p['list']([]), $p['list']([])]);
		}
	, 1, [null,null,['teststate']]);
		$cls_definition['isLegalState'] = $method;
		$method = $pyjs__bind_method2('doEvent', function(event, args) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				args = arguments[2];
			}

			return true;
		}
	, 1, [null,null,['self'],['event'],['args']]);
		$cls_definition['doEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Boardgame', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end boardgame */


/* end module: boardgame */


