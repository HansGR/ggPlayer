/* start module: chess */
$pyjs.loaded_modules['chess'] = function (__mod_name__) {
	if($pyjs.loaded_modules['chess'].__was_initialized__) return $pyjs.loaded_modules['chess'];
	var $m = $pyjs.loaded_modules["chess"];
	$m.__repr__ = function() { return "<module: chess>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'chess';
	$m.__name__ = __mod_name__;


	$m['Boardgame'] = $p['___import___']('boardgame.Boardgame', null, null, false);
	$m['Gamepiece'] = $p['___import___']('gamepiece.Gamepiece', null, null, false);
	$m['gameCell'] = $p['___import___']('gamecell.gameCell', null, null, false);
	$m['Chess'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'chess';
		$cls_definition['boardtype'] = '8x8checker';
		$cls_definition['num_players'] = 2;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add31,color,$iter9_iter,whiteArmy,$iter1_iter,$mod1,$mod2,$iter2_type,$add29,army,whiteHome,$iter2_iter,$add3,$iter9_nextval,$iter9_idx,$add27,blackPawns,$iter1_array,stateInit,$sub2,$sub1,$iter9_type,$add7,files,$iter1_nextval,$add4,$add28,$add14,$add32,$iter2_idx,blackArmy,$add10,$add13,$div2,$div3,whitePawns,$div1,$div4,$iter2_nextval,$iter1_type,blackHome,ranks,h,$add30,j,$iter9_array,$add2,i,$add1,$add6,$iter1_idx,w,$add5,y,x,$add8,$add9,order,$iter2_array;
			ranks = '12345678';
			files = 'abcdefgh';
			$iter1_iter = $p['range'](8);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				i = $iter1_nextval.$nextval;
				$iter2_iter = $p['range'](8);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					j = $iter2_nextval.$nextval;
					x = (typeof ($div1=$p['float'](j))==typeof ($div2=8) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
					y = (typeof ($div3=$p['__op_sub']($sub1=7,$sub2=$p['float'](i)))==typeof ($div4=8) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4));
					w = 0.125;
					h = 0.125;
					color = (typeof ($mod1=$p['__op_add']($add3=$p['__op_add']($add1=i,$add2=j),$add4=1))==typeof ($mod2=2) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2));
					$p['getattr'](self, 'board').__setitem__($p['__op_add']($add7=files.__getitem__(j),$add8=ranks.__getitem__(i)), $m['gameCell']($p['__op_add']($add5=files.__getitem__(j),$add6=ranks.__getitem__(i)), color, 'rect', $p['list']([x, y, w, h])));
					$p['getattr'](self, 'state').__setitem__($p['__op_add']($add9=files.__getitem__(j),$add10=ranks.__getitem__(i)), 'none');
				}
			}
			army = 'ppppppppRRNNBBQK';
			whiteArmy = function(){
				var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,$iter3_iter,$iter3_array,x;
	$collcomp1 = $p['list']();
			$iter3_iter = $p['range'](0, 16);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				x = $iter3_nextval.$nextval;
				$collcomp1['append']($m['Gamepiece'](0, army.__getitem__(x), x));
			}

	return $collcomp1;}();
			blackArmy = function(){
				var $add12,$iter4_nextval,$collcomp2,$iter4_idx,$add11,$iter4_type,$iter4_array,x,$iter4_iter;
	$collcomp2 = $p['list']();
			$iter4_iter = $p['range'](0, 16);
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				x = $iter4_nextval.$nextval;
				$collcomp2['append']($m['Gamepiece'](1, army.__getitem__(x), $p['__op_add']($add11=x,$add12=16)));
			}

	return $collcomp2;}();
			self.pieces = $p['tuple']($p['__op_add']($add13=whiteArmy,$add14=blackArmy));
			whitePawns = function(){
				var $iter5_nextval,x,$iter5_idx,$collcomp3,$add15,$add16,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
			$iter5_iter = $p['range'](8);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				x = $iter5_nextval.$nextval;
				$collcomp3['append']($p['list']([$p['__op_add']($add15=files.__getitem__(x),$add16='2'), x]));
			}

	return $collcomp3;}();
			blackPawns = function(){
				var $iter6_idx,$iter6_type,$add20,$collcomp4,$iter6_array,$add17,x,$iter6_iter,$add18,$add19,$iter6_nextval;
	$collcomp4 = $p['list']();
			$iter6_iter = $p['range'](8);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				x = $iter6_nextval.$nextval;
				$collcomp4['append']($p['list']([$p['__op_add']($add17=files.__getitem__(x),$add18='7'), $p['__op_add']($add19=x,$add20=16)]));
			}

	return $collcomp4;}();
			order = $p['list']([8, 10, 12, 14, 15, 13, 11, 9]);
			whiteHome = function(){
				var $add22,$iter7_nextval,$add21,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,x,$iter7_type;
	$collcomp5 = $p['list']();
			$iter7_iter = $p['range'](8);
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				x = $iter7_nextval.$nextval;
				$collcomp5['append']($p['list']([$p['__op_add']($add21=files.__getitem__(x),$add22='1'), order.__getitem__(x)]));
			}

	return $collcomp5;}();
			blackHome = function(){
				var $iter8_idx,$collcomp6,$iter8_type,$iter8_array,$add24,$add26,$iter8_iter,$iter8_nextval,x,$add25,$add23;
	$collcomp6 = $p['list']();
			$iter8_iter = $p['range'](8);
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
				x = $iter8_nextval.$nextval;
				$collcomp6['append']($p['list']([$p['__op_add']($add23=files.__getitem__(x),$add24='8'), $p['__op_add']($add25=order.__getitem__(x),$add26=16)]));
			}

	return $collcomp6;}();
			stateInit = $p['__op_add']($add31=$p['__op_add']($add29=$p['__op_add']($add27=whitePawns,$add28=whiteHome),$add30=blackPawns),$add32=blackHome);
			$iter9_iter = $p['range']($p['len'](stateInit));
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
				i = $iter9_nextval.$nextval;
				$p['getattr'](self, 'state').__setitem__(stateInit.__getitem__(i).__getitem__(0), stateInit.__getitem__(i).__getitem__(1));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Boardgame']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Chess', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end chess */


/* end module: chess */


/*
PYJS_DEPS: ['boardgame.Boardgame', 'boardgame', 'gamepiece.Gamepiece', 'gamepiece', 'gamecell.gameCell', 'gamecell']
*/