/* start module: gg_arch */
$pyjs.loaded_modules['gg_arch'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gg_arch'].__was_initialized__) return $pyjs.loaded_modules['gg_arch'];
	var $m = $pyjs.loaded_modules["gg_arch"];
	$m.__repr__ = function() { return "<module: gg_arch>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gg_arch';
	$m.__name__ = __mod_name__;


	$m['Boardgame'] = $p['___import___']('boardgame.Boardgame', null, null, false);
	$m['Gamepiece'] = $p['___import___']('gamepiece.Gamepiece', null, null, false);
	$m['gameCell'] = $p['___import___']('gamecell.gameCell', null, null, false);
	return this;
}; /* end gg_arch */


/* end module: gg_arch */


/*
PYJS_DEPS: ['boardgame.Boardgame', 'boardgame', 'gamepiece.Gamepiece', 'gamepiece', 'gamecell.gameCell', 'gamecell']
*/
