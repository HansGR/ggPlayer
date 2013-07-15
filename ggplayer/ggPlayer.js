/* start module: ggPlayer */
$pyjs.loaded_modules['ggPlayer'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ggPlayer'].__was_initialized__) return $pyjs.loaded_modules['ggPlayer'];
	var $m = $pyjs.loaded_modules["ggPlayer"];
	$m.__repr__ = function() { return "<module: ggPlayer>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ggPlayer';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', null, null, false);
	$m['makeDraggable'] = $p['___import___']('pyjamas.dnd.makeDraggable', null, null, false);
	$m['DragWidget'] = $p['___import___']('pyjamas.ui.DragWidget.DragWidget', null, null, false);
	$m['DragContainer'] = $p['___import___']('pyjamas.ui.DragWidget.DragContainer', null, null, false);
	$m['DropWidget'] = $p['___import___']('pyjamas.ui.DropWidget.DropWidget', null, null, false);
	$m['getTypes'] = $p['___import___']('pyjamas.dnd.getTypes', null, null, false);
	$m['math'] = $p['___import___']('math', null);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$m['random'] = $p['___import___']('random', null);
	$m['Chess'] = $p['___import___']('chess.Chess', null, null, false);
	$m['BOARDWIDTH'] = 600;
	$m['BOARDHEIGHT'] = 600;
	$m['GAMENAME'] = 'Chess';
	$m['LIGHT'] = $m['Color']['Color']('#FDE6BE');
	$m['DARK'] = $m['Color']['Color']('#695532');
	$m['COLORS'] = $p['list']([$m['LIGHT'], $m['DARK']]);
	$m['GameCanvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ggPlayer';
		$method = $pyjs__bind_method2('__init__', function(w, h, gametype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
				h = arguments[2];
				gametype = arguments[3];
			}

			$m['GWTCanvas']['__init__'](self, w, h);
			self['setSize'](w, h);
			self['setStyleName']('drophere');
			self['setStyleAttribute']('position', 'relative');
			self.width = w;
			self.height = h;
			self.gametype = gametype;
			self.images = $p['list']([]);
			self.img_dict = $p['list']([]);
			self['loadGame']();
			self.run = false;
			return null;
		}
	, 1, [null,null,['self'],['w'],['h'],['gametype']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('loadGame', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,images,x,$iter1_idx;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'gametype'), 'Chess'))) {
				self.game = $m['Chess']();
				self.boardtype = $p['getattr']($p['getattr'](self, 'game'), 'boardtype');
				images = $p['list'](['./images/Chess/pw.svg', './images/Chess/pb.svg', './images/Chess/Nw.svg', './images/Chess/Nb.svg', './images/Chess/Bw.svg', './images/Chess/Bb.svg', './images/Chess/Rw.svg', './images/Chess/Rb.svg', './images/Chess/Qw.svg', './images/Chess/Qb.svg', './images/Chess/Kw.svg', './images/Chess/Kb.svg']);
				$iter1_iter = $p['range']($p['getattr']($p['getattr'](self, 'game'), 'num_players'));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					x = $iter1_nextval.$nextval;
					self['img_dict']['append']($p['dict']([]));
				}
			}
			else {
				self.boardtype = '8x8checker';
				images = $p['list'](['./images/Chess/pw.svg']);
			}
			$m['loadImages'](images, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['loadGame'] = $method;
		$method = $pyjs__bind_method2('onImagesLoaded', function(imagesHandles) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagesHandles = arguments[1];
			}

			$p['printFunc'](['loaded images', imagesHandles], 1);
			$p['getattr'](self, 'img_dict').__getitem__(0).__setitem__('p', imagesHandles.__getitem__(0));
			$p['getattr'](self, 'img_dict').__getitem__(1).__setitem__('p', imagesHandles.__getitem__(1));
			$p['getattr'](self, 'img_dict').__getitem__(0).__setitem__('N', imagesHandles.__getitem__(2));
			$p['getattr'](self, 'img_dict').__getitem__(1).__setitem__('N', imagesHandles.__getitem__(3));
			$p['getattr'](self, 'img_dict').__getitem__(0).__setitem__('B', imagesHandles.__getitem__(4));
			$p['getattr'](self, 'img_dict').__getitem__(1).__setitem__('B', imagesHandles.__getitem__(5));
			$p['getattr'](self, 'img_dict').__getitem__(0).__setitem__('R', imagesHandles.__getitem__(6));
			$p['getattr'](self, 'img_dict').__getitem__(1).__setitem__('R', imagesHandles.__getitem__(7));
			$p['getattr'](self, 'img_dict').__getitem__(0).__setitem__('Q', imagesHandles.__getitem__(8));
			$p['getattr'](self, 'img_dict').__getitem__(1).__setitem__('Q', imagesHandles.__getitem__(9));
			$p['getattr'](self, 'img_dict').__getitem__(0).__setitem__('K', imagesHandles.__getitem__(10));
			$p['getattr'](self, 'img_dict').__getitem__(1).__setitem__('K', imagesHandles.__getitem__(11));
			$p['printFunc'](['resize', $p['getattr'](self, 'width'), $p['getattr'](self, 'height')], 1);
			self['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['reset']();
			self.run = true;
			return null;
		}
	, 1, [null,null,['self'],['imagesHandles']]);
		$cls_definition['onImagesLoaded'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['drawBoard']();
			self['initPieces']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('drawBoard', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,cell,$iter2_idx,$iter2_array;
			$iter2_iter = self['game']['board']['values']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				cell = $iter2_nextval.$nextval;
				self['drawCell'](cell, $m['COLORS']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawBoard'] = $method;
		$method = $pyjs__bind_method2('drawCell', function(gamecell, colors) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gamecell = arguments[1];
				colors = arguments[2];
			}
			var xi,$iter4_type,y1,y2,$iter4_iter,$iter4_idx,r,yi,$add14,$add10,$add11,$add12,$add13,x2,path,x1,$iter4_nextval,j,pathtype,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$iter4_array,$add8,$add9;
			var $tupleassign1 = $p['__ass_unpack'](gamecell['getPath'](), 2, null);
			path = $tupleassign1[0];
			pathtype = $tupleassign1[1];
			path = function(){
				var a,$iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,b,$iter3_iter,$iter3_array,$mul4,$mul3,$mul2,$mul1;
	$collcomp1 = $p['list']();
			$iter3_iter = path;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
				a = $tupleassign2[0];
				b = $tupleassign2[1];
				$collcomp1['append']($p['list']([(typeof ($mul1=a)==typeof ($mul2=$p['getattr'](self, 'width')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), (typeof ($mul3=b)==typeof ($mul4=$p['getattr'](self, 'height')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))]));
			}

	return $collcomp1;}();
			self['beginPath']();
			self['moveTo'](path.__getitem__(0).__getitem__(0), path.__getitem__(0).__getitem__(1));
			$iter4_iter = $p['range']($p['len'](pathtype));
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				j = $iter4_nextval.$nextval;
				if ($p['bool']($p['op_eq'](pathtype.__getitem__(j), 'line'))) {
					xi = $p['float_int'](path.__getitem__($p['__op_add']($add1=j,$add2=1)).__getitem__(0));
					yi = $p['float_int'](path.__getitem__($p['__op_add']($add3=j,$add4=1)).__getitem__(1));
					self['lineTo'](xi, yi);
				}
				else if ($p['bool']($p['op_eq'](pathtype.__getitem__(j), 'arc'))) {
					x1 = $p['float_int'](path.__getitem__($p['__op_add']($add5=j,$add6=1)).__getitem__(0));
					y1 = $p['float_int'](path.__getitem__($p['__op_add']($add7=j,$add8=1)).__getitem__(1));
					x2 = $p['float_int'](path.__getitem__($p['__op_add']($add9=j,$add10=1)).__getitem__(2));
					y2 = $p['float_int'](path.__getitem__($p['__op_add']($add11=j,$add12=1)).__getitem__(3));
					r = $p['float_int'](path.__getitem__($p['__op_add']($add13=j,$add14=1)).__getitem__(4));
					self['arcTo'](x1, y1, x2, y2, r);
				}
				else if ($p['bool']($p['op_eq'](pathtype.__getitem__(j), 'quad'))) {
				}
				else if ($p['bool']($p['op_eq'](pathtype.__getitem__(j), 'bezier'))) {
				}
				else {
				}
			}
			self['closePath']();
			self['setFillStyle'](colors.__getitem__($p['getattr'](gamecell, 'color')));
			self['fill']();
			return null;
		}
	, 1, [null,null,['self'],['gamecell'],['colors']]);
		$cls_definition['drawCell'] = $method;
		$method = $pyjs__bind_method2('initPieces', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter6_idx,i,$iter5_idx,j,$iter6_type,$iter6_array,$iter5_iter,$iter5_array,$iter5_type,$iter6_iter,$iter6_nextval;
			$iter5_iter = self['game']['board']['keys']();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				i = $iter5_nextval.$nextval;
				$iter6_iter = $p['getattr']($p['getattr'](self, 'game'), 'state').__getitem__(i);
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
					j = $iter6_nextval.$nextval;
					self['drawPiece']($p['getattr']($p['getattr'](self, 'game'), 'pieces').__getitem__(j), $p['getattr']($p['getattr'](self, 'game'), 'board').__getitem__(i));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initPieces'] = $method;
		$method = $pyjs__bind_method2('drawPiece', function(gamepiece, cell) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gamepiece = arguments[1];
				cell = arguments[2];
			}
			var yi,$mul11,xi,w,img,$mul10,h,$mul8,wi,y,hi,$mul9,x,$mul7,$mul6,$mul5,$mul12;
			img = $p['getattr'](self, 'img_dict').__getitem__($p['getattr'](gamepiece, 'player')).__getitem__($p['getattr'](gamepiece, '$$name'));
			var $tupleassign3 = $p['__ass_unpack'](cell['getPos'](), 2, null);
			xi = $tupleassign3[0];
			yi = $tupleassign3[1];
			x = $p['float_int']((typeof ($mul5=xi)==typeof ($mul6=$p['getattr'](self, 'width')) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
			y = $p['float_int']((typeof ($mul7=yi)==typeof ($mul8=$p['getattr'](self, 'height')) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
			var $tupleassign4 = $p['__ass_unpack'](cell['getSize'](), 2, null);
			wi = $tupleassign4[0];
			hi = $tupleassign4[1];
			w = $p['float_int']((typeof ($mul9=wi)==typeof ($mul10=$p['getattr'](self, 'width')) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)));
			h = $p['float_int']((typeof ($mul11=wi)==typeof ($mul12=$p['getattr'](self, 'height')) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)));
			self['drawImage'](img, 0, 0, 45, 45, x, y, w, h);
			return null;
		}
	, 1, [null,null,['self'],['gamepiece'],['cell']]);
		$cls_definition['drawPiece'] = $method;
		var $bases = new Array($m['GWTCanvas']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GameCanvas', $p['tuple']($bases), $data);
	})();
	$m['GamePlayer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ggPlayer';
		$method = $pyjs__bind_method2('__init__', function(width, height, gametype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
				gametype = arguments[3];
			}

			$pyjs_kwargs_call($m['DockPanel'], '__init__', null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), Spacing:10}, self]);
			self.GC = $m['GameCanvas'](width, height, gametype);
			self.b = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'teststyle'}, 'Make Move', self]);
			self.cell1 = $pyjs_kwargs_call(null, $m['TextBox'], null, null, [{StyleName:'boxStyle'}]);
			self.cell2 = $pyjs_kwargs_call(null, $m['TextBox'], null, null, [{StyleName:'boxStyle'}]);
			self.cellPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{VerticalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE')}]);
			self['cellPanel']['add']($p['getattr'](self, 'cell1'));
			self['cellPanel']['add']($p['getattr'](self, 'cell2'));
			self.mover = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER')}]);
			self['mover']['add']($p['getattr'](self, 'cellPanel'));
			self['mover']['add']($p['getattr'](self, 'b'));
			self['add']($p['getattr'](self, 'GC'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['add']($p['getattr'](self, 'mover'), $p['getattr']($m['DockPanel'], 'EAST'));
			return null;
		}
	, 1, [null,null,['self'],['width'],['height'],['gametype']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter7_idx,origcell,$iter7_nextval,didMove,$and1,$iter7_array,j,cell,$iter7_type,cell2_txt,$sub2,cell1_txt,$sub1,piece,$and2,$iter7_iter;
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'b')))) {
				cell1_txt = self['cell1']['getText']();
				cell2_txt = self['cell2']['getText']();
				if ($p['bool'](($p['bool']($and1=cell1_txt)?$p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'board').__contains__(cell2_txt):$and1))) {
					piece = $p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'pieces').__getitem__($p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'state').__getitem__(cell1_txt).__getitem__($p['__op_sub']($sub1=$p['len']($p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'state').__getitem__(cell1_txt)),$sub2=1)));
					origcell = $p['getattr'](piece, 'location');
					cell = $p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'board').__getitem__(cell2_txt);
					didMove = self['GC']['game']['make_move'](piece, cell);
					if ($p['bool'](didMove)) {
						self['GC']['drawCell']($p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'board').__getitem__(origcell), $m['COLORS']);
						$iter7_iter = $p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'state').__getitem__(origcell);
						$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
						while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
							j = $iter7_nextval.$nextval;
							self['GC']['drawPiece']($p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'pieces').__getitem__(j), $p['getattr']($p['getattr']($p['getattr'](self, 'GC'), 'game'), 'board').__getitem__(origcell));
						}
						self['GC']['drawPiece'](piece, cell);
					}
				}
				else {
					$m['Window']['alert']('cell names not recognized!');
				}
				self['cell1']['setText']('');
				self['cell2']['setText']('');
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['DockPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GamePlayer', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('public/ggPlayer.html');
		$m['Player'] = $m['GamePlayer']($m['BOARDWIDTH'], $m['BOARDHEIGHT'], $m['GAMENAME']);
		$m['RootPanel']()['add']($m['Player']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end ggPlayer */


/* end module: ggPlayer */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'pyjamas.Canvas.Color', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.Window', 'pyjamas.ui.Event', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.dnd.makeDraggable', 'pyjamas.dnd', 'pyjamas.ui.DragWidget.DragWidget', 'pyjamas.ui.DragWidget', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DropWidget.DropWidget', 'pyjamas.ui.DropWidget', 'pyjamas.dnd.getTypes', 'math', 'pygwt', 'random', 'chess.Chess', 'chess']
*/
