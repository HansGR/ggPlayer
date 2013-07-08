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
		$cls_definition['state'] = $p['dict']([]);
		$cls_definition['history'] = $p['list']([]);
		$cls_definition['pieces'] = $p['list']([]);
		$cls_definition['boardtype'] = '';
		$cls_definition['board'] = $p['dict']([]);
		$cls_definition['num_players'] = 0;
		$method = $pyjs__bind_method2('__init__', function(game) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}

			self.game = game;
			return null;
		}
	, 1, [null,null,['self'],['game']]);
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
		$method = $pyjs__bind_method2('make_move', function(piece_ID, cell_ID) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				piece_ID = arguments[1];
				cell_ID = arguments[2];
			}

			return 0;
		}
	, 1, [null,null,['self'],['piece_ID'],['cell_ID']]);
		$cls_definition['make_move'] = $method;
		$method = $pyjs__bind_method2('getCellIndex', function(cell_name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cell_name = arguments[1];
			}

			return self['state']['find'](cell_name);
		}
	, 1, [null,null,['self'],['cell_name']]);
		$cls_definition['getCellIndex'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Boardgame', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end boardgame */


/* end module: boardgame */


