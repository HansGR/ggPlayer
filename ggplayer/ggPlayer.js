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
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
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
	$m['LIGHT'] = $m['Color']['Color']('#FDE6BE');
	$m['DARK'] = $m['Color']['Color']('#695532');
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
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$iter2_array;
			$iter2_iter = self['game']['board']['keys']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				i = $iter2_nextval.$nextval;
				self['drawCell'](i, $p['list']([$m['LIGHT'], $m['DARK']]));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawBoard'] = $method;
		$method = $pyjs__bind_method2('drawCell', function(cell, colors) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cell = arguments[1];
				colors = arguments[2];
			}
			var xi,$add12,x1,$iter3_type,x2,$mul6,y1,y2,$iter3_idx,r,$iter3_iter,yi,$mul8,$add13,$add10,$add11,$mul9,$iter3_array,$mul7,path,$mul5,$mul4,$mul3,$mul2,$mul1,$add14,$mul14,$mul13,$mul12,$mul11,$mul10,j,pathtype,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$iter3_nextval;
			var $tupleassign1 = $p['__ass_unpack']($p['getattr']($p['getattr'](self, 'game'), 'board').__getitem__(cell)['getPath'](), 2, null);
			path = $tupleassign1[0];
			pathtype = $tupleassign1[1];
			self['beginPath']();
			self['moveTo'](path.__getitem__(0).__getitem__(0), path.__getitem__(0).__getitem__(1));
			$iter3_iter = $p['range']($p['len'](pathtype));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				j = $iter3_nextval.$nextval;
				if ($p['bool']($p['op_eq'](pathtype.__getitem__(j), 'line'))) {
					xi = $p['float_int']((typeof ($mul1=path.__getitem__($p['__op_add']($add1=j,$add2=1)).__getitem__(0))==typeof ($mul2=$p['getattr'](self, 'width')) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
					yi = $p['float_int']((typeof ($mul3=path.__getitem__($p['__op_add']($add3=j,$add4=1)).__getitem__(1))==typeof ($mul4=$p['getattr'](self, 'height')) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)));
					self['lineTo'](xi, yi);
				}
				else if ($p['bool']($p['op_eq'](pathtype.__getitem__(j), 'arc'))) {
					x1 = $p['float_int']((typeof ($mul5=path.__getitem__($p['__op_add']($add5=j,$add6=1)).__getitem__(0))==typeof ($mul6=$p['getattr'](self, 'width')) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)));
					y1 = $p['float_int']((typeof ($mul7=path.__getitem__($p['__op_add']($add7=j,$add8=1)).__getitem__(1))==typeof ($mul8=$p['getattr'](self, 'height')) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)));
					x2 = $p['float_int']((typeof ($mul9=path.__getitem__($p['__op_add']($add9=j,$add10=1)).__getitem__(2))==typeof ($mul10=$p['getattr'](self, 'width')) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)));
					y2 = $p['float_int']((typeof ($mul11=path.__getitem__($p['__op_add']($add11=j,$add12=1)).__getitem__(3))==typeof ($mul12=$p['getattr'](self, 'height')) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)));
					r = $p['float_int']((typeof ($mul13=path.__getitem__($p['__op_add']($add13=j,$add14=1)).__getitem__(4))==typeof ($mul14=$p['getattr'](self, 'width')) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14)));
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
			self['setFillStyle'](colors.__getitem__($p['getattr']($p['getattr']($p['getattr'](self, 'game'), 'board').__getitem__(cell), 'color')));
			self['fill']();
			return null;
		}
	, 1, [null,null,['self'],['cell'],['colors']]);
		$cls_definition['drawCell'] = $method;
		$method = $pyjs__bind_method2('initPieces', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var i,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = self['game']['state']['keys']();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				i = $iter4_nextval.$nextval;
				if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'game'), 'state').__getitem__(i), 'none'))) {
					self['drawPiece']($p['getattr']($p['getattr'](self, 'game'), 'pieces').__getitem__($p['getattr']($p['getattr'](self, 'game'), 'state').__getitem__(i)), $p['getattr']($p['getattr'](self, 'game'), 'board').__getitem__(i));
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
			var yi,$mul16,$mul15,xi,img,h,wi,$mul18,$mul17,hi,$mul19,w,y,x,$mul22,$mul20,$mul21;
			img = $p['getattr'](self, 'img_dict').__getitem__($p['getattr'](gamepiece, 'Player')).__getitem__($p['getattr'](gamepiece, 'Name'));
			var $tupleassign2 = $p['__ass_unpack'](cell['getPos'](), 2, null);
			xi = $tupleassign2[0];
			yi = $tupleassign2[1];
			x = $p['float_int']((typeof ($mul15=xi)==typeof ($mul16=$p['getattr'](self, 'width')) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)));
			y = $p['float_int']((typeof ($mul17=yi)==typeof ($mul18=$p['getattr'](self, 'height')) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)));
			var $tupleassign3 = $p['__ass_unpack'](cell['getSize'](), 2, null);
			wi = $tupleassign3[0];
			hi = $tupleassign3[1];
			w = $p['float_int']((typeof ($mul19=wi)==typeof ($mul20=$p['getattr'](self, 'width')) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20)));
			h = $p['float_int']((typeof ($mul21=wi)==typeof ($mul22=$p['getattr'](self, 'height')) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22)));
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
	$m['greet'] = function(fred) {

		fred['setText']('thanks for playing!');
		$m['Window']['alert']('Test run!');
		return null;
	};
	$m['greet'].__name__ = 'greet';

	$m['greet'].__bind_type__ = 0;
	$m['greet'].__args__ = [null,null,['fred']];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('public/ggPlayer.html');
		$m['game'] = $m['GameCanvas']($m['BOARDWIDTH'], $m['BOARDHEIGHT'], 'Chess');
		$m['dock'] = $pyjs_kwargs_call(null, $m['DockPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), Spacing:10}]);
		$m['dock']['add']($m['game'], $p['getattr']($m['DockPanel'], 'CENTER'));
		$m['RootPanel']()['add']($m['dock']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end ggPlayer */


/* end module: ggPlayer */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'pyjamas.Canvas.Color', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.Window', 'pyjamas.ui.Event', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.dnd.makeDraggable', 'pyjamas.dnd', 'pyjamas.ui.DragWidget.DragWidget', 'pyjamas.ui.DragWidget', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DropWidget.DropWidget', 'pyjamas.ui.DropWidget', 'pyjamas.dnd.getTypes', 'math', 'pygwt', 'random', 'chess.Chess', 'chess']
*/
