/* start module: gamepiece */
$pyjs.loaded_modules['gamepiece'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gamepiece'].__was_initialized__) return $pyjs.loaded_modules['gamepiece'];
	var $m = $pyjs.loaded_modules["gamepiece"];
	$m.__repr__ = function() { return "<module: gamepiece>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gamepiece';
	$m.__name__ = __mod_name__;


	$m['Gamepiece'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gamepiece';
		$method = $pyjs__bind_method2('__init__', function(player, name, ID, location) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				player = arguments[1];
				name = arguments[2];
				ID = arguments[3];
				location = arguments[4];
			}
			if (typeof location == 'undefined') location=arguments.callee.__args__[6][1];

			self.player = player;
			self.$$name = name;
			self.ID = ID;
			self.location = location;
			return null;
		}
	, 1, [null,null,['self'],['player'],['name'],['ID'],['location', 'none']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Gamepiece', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gamepiece */


/* end module: gamepiece */


