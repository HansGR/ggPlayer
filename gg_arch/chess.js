/* start module: chess */
$pyjs.loaded_modules['chess'] = function (__mod_name__) {
	if($pyjs.loaded_modules['chess'].__was_initialized__) return $pyjs.loaded_modules['chess'];
	var $m = $pyjs.loaded_modules["chess"];
	$m.__repr__ = function() { return "<module: chess>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'chess';
	$m.__name__ = __mod_name__;


	$m['Boardgame'] = $p['___import___']('gg_arch.Boardgame', null, null, false);
	$m['Gamepiece'] = $p['___import___']('gg_arch.Gamepiece', null, null, false);
	$m['gameCell'] = $p['___import___']('gg_arch.gameCell', null, null, false);
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
					$p['getattr'](self, 'state').__setitem__($p['__op_add']($add9=files.__getitem__(j),$add10=ranks.__getitem__(i)), $p['list']([]));
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
				$p['getattr'](self, 'state').__getitem__(stateInit.__getitem__(i).__getitem__(0))['append'](stateInit.__getitem__(i).__getitem__(1));
				$p['getattr'](self, 'pieces').__getitem__(stateInit.__getitem__(i).__getitem__(1)).location = stateInit.__getitem__(i).__getitem__(0);
			}
			$p['getattr'](self, 'state').__setitem__('player', 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getLegalMoves', function(piece) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				piece = arguments[1];
			}
			var $iter10_nextval,$and14,dx,capture_E,$iter14_array,perpdir,$add37,$iter12_array,$iter10_array,dy,dir_player,$and15,home,capture_W,$iter10_iter,$iter15_idx,$or1,$iter13_array,$iter15_iter,$iter16_type,hops,$iter16_iter,j,current,$iter12_nextval,$iter11_iter,forward,$iter16_nextval,$iter11_idx,$and18,$iter13_type,$and8,$and9,direction,nextcell,$iter14_type,$or2,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and12,$and13,flag,legalMoves,$and16,$and17,$iter14_iter,$iter11_array,directions,$iter11_nextval,forward_2,$iter14_idx,$iter14_nextval,$iter16_array,$iter16_idx,$add38,$add39,$iter13_nextval,$add40,$iter13_iter,i,$add33,$iter12_type,$iter11_type,$add36,$and10,$add34,$add35,$iter12_iter,$and11,$iter15_nextval,$iter15_type,$iter10_type,$iter12_idx,$iter10_idx,$iter15_array,$iter13_idx;
			current = $p['getattr'](piece, 'location');
			legalMoves = $p['list']([]);
			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'state').__getitem__('player'), $p['getattr'](piece, 'player')))) {
				return legalMoves;
			}
			if ($p['bool']($p['op_eq']($p['getattr'](piece, '$$name'), 'p'))) {
				dir_player = $p['list'](['N', 'S']);
				var $tupleassign1 = $p['__ass_unpack'](self['getNextCell'](current, dir_player.__getitem__($p['getattr'](piece, 'player'))), 2, null);
				flag = $tupleassign1[0];
				forward = $tupleassign1[1];
				if ($p['bool'](($p['bool']($and1=flag)?$p['op_eq']($p['getattr'](self, 'state').__getitem__(forward), $p['list']([])):$and1))) {
					legalMoves['append'](forward);
				}
				home = $p['list'](['2', '7']);
				if ($p['bool']($p['op_eq'](current.__getitem__(1), home.__getitem__($p['getattr'](piece, 'player'))))) {
					var $tupleassign2 = $p['__ass_unpack'](self['getNextCell'](forward, dir_player.__getitem__($p['getattr'](piece, 'player'))), 2, null);
					flag = $tupleassign2[0];
					forward_2 = $tupleassign2[1];
					if ($p['bool'](($p['bool']($and3=flag)?$p['op_eq']($p['getattr'](self, 'state').__getitem__(forward_2), $p['list']([])):$and3))) {
						legalMoves['append'](forward_2);
					}
				}
				var $tupleassign3 = $p['__ass_unpack'](self['getNextCell'](current, $p['__op_add']($add33=dir_player.__getitem__($p['getattr'](piece, 'player')),$add34='E')), 2, null);
				flag = $tupleassign3[0];
				capture_E = $tupleassign3[1];
				if ($p['bool'](($p['bool']($and5=flag)?!$p['op_eq']($p['getattr'](self, 'state').__getitem__(capture_E), $p['list']([])):$and5))) {
					if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'pieces').__getitem__($p['getattr'](self, 'state').__getitem__(capture_E).__getitem__(0)), 'player'), $p['getattr'](piece, 'player')))) {
						legalMoves['append'](capture_E);
					}
				}
				var $tupleassign4 = $p['__ass_unpack'](self['getNextCell'](current, $p['__op_add']($add35=dir_player.__getitem__($p['getattr'](piece, 'player')),$add36='W')), 2, null);
				flag = $tupleassign4[0];
				capture_W = $tupleassign4[1];
				if ($p['bool'](($p['bool']($and7=flag)?!$p['op_eq']($p['getattr'](self, 'state').__getitem__(capture_W), $p['list']([])):$and7))) {
					if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'pieces').__getitem__($p['getattr'](self, 'state').__getitem__(capture_W).__getitem__(0)), 'player'), $p['getattr'](piece, 'player')))) {
						legalMoves['append'](capture_W);
					}
				}
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](piece, '$$name'), 'R'))) {
				$iter10_iter = $p['list'](['N', 'S', 'E', 'W']);
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined') {
					direction = $iter10_nextval.$nextval;
					var $tupleassign5 = $p['__ass_unpack'](self['getNextCell'](current, direction), 2, null);
					flag = $tupleassign5[0];
					nextcell = $tupleassign5[1];
					while ($p['bool']($p['op_eq'](flag, true))) {
						if ($p['bool']($p['op_eq']($p['getattr'](self, 'state').__getitem__(nextcell), $p['list']([])))) {
							legalMoves['append'](nextcell);
							var $tupleassign6 = $p['__ass_unpack'](self['getNextCell'](nextcell, direction), 2, null);
							flag = $tupleassign6[0];
							nextcell = $tupleassign6[1];
						}
						else if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'pieces').__getitem__($p['getattr'](self, 'state').__getitem__(nextcell).__getitem__(0)), 'player'), $p['getattr'](piece, 'player')))) {
							legalMoves['append'](nextcell);
							flag = false;
						}
						else {
							flag = false;
						}
					}
				}
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](piece, '$$name'), 'B'))) {
				$iter11_iter = $p['list'](['NE', 'NW', 'SE', 'SW']);
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval).$nextval) != 'undefined') {
					direction = $iter11_nextval.$nextval;
					var $tupleassign7 = $p['__ass_unpack'](self['getNextCell'](current, direction), 2, null);
					flag = $tupleassign7[0];
					nextcell = $tupleassign7[1];
					while ($p['bool']($p['op_eq'](flag, true))) {
						if ($p['bool']($p['op_eq']($p['getattr'](self, 'state').__getitem__(nextcell), $p['list']([])))) {
							legalMoves['append'](nextcell);
							var $tupleassign8 = $p['__ass_unpack'](self['getNextCell'](nextcell, direction), 2, null);
							flag = $tupleassign8[0];
							nextcell = $tupleassign8[1];
						}
						else if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'pieces').__getitem__($p['getattr'](self, 'state').__getitem__(nextcell).__getitem__(0)), 'player'), $p['getattr'](piece, 'player')))) {
							legalMoves['append'](nextcell);
							flag = false;
						}
						else {
							flag = false;
						}
					}
				}
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](piece, '$$name'), 'Q'))) {
				$iter12_iter = $p['list'](['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']);
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval).$nextval) != 'undefined') {
					direction = $iter12_nextval.$nextval;
					var $tupleassign9 = $p['__ass_unpack'](self['getNextCell'](current, direction), 2, null);
					flag = $tupleassign9[0];
					nextcell = $tupleassign9[1];
					while ($p['bool']($p['op_eq'](flag, true))) {
						if ($p['bool']($p['op_eq']($p['getattr'](self, 'state').__getitem__(nextcell), $p['list']([])))) {
							legalMoves['append'](nextcell);
							var $tupleassign10 = $p['__ass_unpack'](self['getNextCell'](nextcell, direction), 2, null);
							flag = $tupleassign10[0];
							nextcell = $tupleassign10[1];
						}
						else if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'pieces').__getitem__($p['getattr'](self, 'state').__getitem__(nextcell).__getitem__(0)), 'player'), $p['getattr'](piece, 'player')))) {
							legalMoves['append'](nextcell);
							flag = false;
						}
						else {
							flag = false;
						}
					}
				}
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](piece, '$$name'), 'N'))) {
				hops = $p['list']([2, 1]);
				perpdir = $p['list']([$p['list'](['NS', 'EW']), $p['list'](['EW', 'NS'])]);
				$iter13_iter = perpdir;
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval).$nextval) != 'undefined') {
					directions = $iter13_nextval.$nextval;
					$iter14_iter = directions.__getitem__(0);
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval).$nextval) != 'undefined') {
						dx = $iter14_nextval.$nextval;
						$iter15_iter = directions.__getitem__(1);
						$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
						while (typeof($p['__wrapped_next']($iter15_nextval).$nextval) != 'undefined') {
							dy = $iter15_nextval.$nextval;
							flag = true;
							i = 0;
							j = 0;
							nextcell = current;
							while ($p['bool'](($p['bool']($and9=flag)?($p['cmp'](i, hops.__getitem__(0)) == -1):$and9))) {
								var $tupleassign11 = $p['__ass_unpack'](self['getNextCell'](nextcell, dx), 2, null);
								flag = $tupleassign11[0];
								nextcell = $tupleassign11[1];
								i = $p['__op_add']($add37=i,$add38=1);
							}
							while ($p['bool'](($p['bool']($and11=flag)?($p['cmp'](j, hops.__getitem__(1)) == -1):$and11))) {
								var $tupleassign12 = $p['__ass_unpack'](self['getNextCell'](nextcell, dy), 2, null);
								flag = $tupleassign12[0];
								nextcell = $tupleassign12[1];
								j = $p['__op_add']($add39=j,$add40=1);
							}
							if ($p['bool'](($p['bool']($and13=flag)?($p['bool']($or1=$p['op_eq']($p['getattr'](self, 'state').__getitem__(nextcell), $p['list']([])))?$or1:!$p['op_eq']($p['getattr']($p['getattr'](self, 'pieces').__getitem__($p['getattr'](self, 'state').__getitem__(nextcell).__getitem__(0)), 'player'), $p['getattr'](piece, 'player'))):$and13))) {
								legalMoves['append'](nextcell);
							}
						}
					}
				}
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](piece, '$$name'), 'K'))) {
				$iter16_iter = $p['list'](['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']);
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval).$nextval) != 'undefined') {
					direction = $iter16_nextval.$nextval;
					var $tupleassign13 = $p['__ass_unpack'](self['getNextCell'](current, direction), 2, null);
					flag = $tupleassign13[0];
					nextcell = $tupleassign13[1];
					if ($p['bool'](($p['bool']($and15=flag)?$p['op_eq']($p['getattr'](self, 'state').__getitem__(nextcell), $p['list']([])):$and15))) {
						legalMoves['append'](nextcell);
					}
					else if ($p['bool'](($p['bool']($and17=flag)?!$p['op_eq']($p['getattr']($p['getattr'](self, 'pieces').__getitem__($p['getattr'](self, 'state').__getitem__(nextcell).__getitem__(0)), 'player'), $p['getattr'](piece, 'player')):$and17))) {
						legalMoves['append'](nextcell);
					}
				}
			}
			else {
				legalMoves = self['board']['keys']();
			}
			return legalMoves;
		}
	, 1, [null,null,['self'],['piece']]);
		$cls_definition['getLegalMoves'] = $method;
		$method = $pyjs__bind_method2('getNextCell', function(cellname, direction) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cellname = arguments[1];
				direction = arguments[2];
			}
			var nextfile,$add41,thisrank,$and21,$and20,$add46,$add45,$add44,$add43,$add42,thisfile,outcell,nextrank,$sub3,$sub6,$sub5,$sub4,files,flag,$and19;
			files = 'abcdefgh';
			thisfile = files['find'](cellname.__getitem__(0));
			thisrank = $p['float_int'](cellname.__getitem__(1));
			nextrank = thisrank;
			nextfile = thisfile;
			flag = ($p['bool']($and19=((($p['cmp'](thisfile, 0))|1) == 1))?($p['bool']($and20=((($p['cmp'](thisrank, 1))|1) == 1))?($p['cmp'](thisrank, 8) < 1):$and20):$and19);
			if ($p['bool'](((($p['cmp'](direction['find']('N'), 0))|1) == 1))) {
				if ($p['bool'](($p['cmp'](thisrank, 7) < 1))) {
					nextrank = $p['__op_add']($add41=nextrank,$add42=1);
				}
				else {
					flag = false;
				}
			}
			if ($p['bool'](((($p['cmp'](direction['find']('S'), 0))|1) == 1))) {
				if ($p['bool'](((($p['cmp'](thisrank, 2))|1) == 1))) {
					nextrank = $p['__op_sub']($sub3=nextrank,$sub4=1);
				}
				else {
					flag = false;
				}
			}
			if ($p['bool'](((($p['cmp'](direction['find']('E'), 0))|1) == 1))) {
				if ($p['bool'](($p['cmp'](thisfile, 6) < 1))) {
					nextfile = $p['__op_add']($add43=nextfile,$add44=1);
				}
				else {
					flag = false;
				}
			}
			if ($p['bool'](((($p['cmp'](direction['find']('W'), 0))|1) == 1))) {
				if ($p['bool'](((($p['cmp'](thisfile, 1))|1) == 1))) {
					nextfile = $p['__op_sub']($sub5=nextfile,$sub6=1);
				}
				else {
					flag = false;
				}
			}
			outcell = $p['__op_add']($add45=files.__getitem__(nextfile),$add46=$p['str'](nextrank));
			return $p['tuple']([flag, outcell]);
		}
	, 1, [null,null,['self'],['cellname'],['direction']]);
		$cls_definition['getNextCell'] = $method;
		$method = $pyjs__bind_method2('newState', function(piece, cell) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				piece = arguments[1];
				cell = arguments[2];
			}
			var $add48,$add47,newState,$mod4,$mod3;
			newState = $m['Boardgame']['newState'](self, piece, cell);
			newState.__setitem__('player', $p['__op_add']($add47=newState.__getitem__('player'),$add48=1));
			newState.__setitem__('player', (typeof ($mod3=newState.__getitem__('player'))==typeof ($mod4=2) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4)));
			return newState;
		}
	, 1, [null,null,['self'],['piece'],['cell']]);
		$cls_definition['newState'] = $method;
		$method = $pyjs__bind_method2('isLegalState', function(teststate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				teststate = arguments[1];
			}
			var $add50,newplayer,$add49,oldplayer,event_args,$mod5,$mod6,isLegal,event;
			isLegal = true;
			event = $p['list']([]);
			event_args = $p['list']([]);
			newplayer = teststate.__getitem__('player');
			oldplayer = (typeof ($mod5=$p['__op_add']($add49=newplayer,$add50=1))==typeof ($mod6=2) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6));
			return $p['tuple']([isLegal, event, event_args]);
		}
	, 1, [null,null,['self'],['teststate']]);
		$cls_definition['isLegalState'] = $method;
		$method = $pyjs__bind_method2('whichCell', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var files,$add51,$add52,ranks,$mul4,$mul3,$mul2,$mul1;
			files = 'abcdefgh';
			ranks = '87654321';
			return $p['__op_add']($add51=files.__getitem__($p['float_int']((typeof ($mul1=x)==typeof ($mul2=8) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))),$add52=ranks.__getitem__($p['float_int']((typeof ($mul3=y)==typeof ($mul4=8) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))));
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['whichCell'] = $method;
		var $bases = new Array($m['Boardgame']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Chess', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end chess */


/* end module: chess */


/*
PYJS_DEPS: ['gg_arch.Boardgame', 'gg_arch', 'gg_arch.Gamepiece', 'gg_arch.gameCell']
*/
