(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.rubber2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B46C3D","#956344","rgba(10,20,25,0.62)"],[0,1,1],-37.3,0,37.4,0).s().p("AlhAzQgUAAAAgUIAAg9QAAgUAUAAILDAAQAUAAAAAUIAAA9QAAAUgUAAg");
	this.shape.setTransform(37.4,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AlBA8QgUAAAAgUIAAhPQAAgUAUAAIKDAAQAUAAAAAUIAABPQAAAUgUAAg");
	this.shape_1.setTransform(37.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.rubber2, new cjs.Rectangle(0,0,74.8,20.2), null);


(lib.texttees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvTATOQgUAAAAgUIAAiAQAAgUAUAAMAuZAAAIAACogEgvTAMEQgUAAAAgUIAAiAQAAgUAUAAMBenAAAQAUAAAAAUIAACAQAAAUgUAAgEgvTAE5QgUAAAAgUIAAiAQAAgUAUAAMBenAAAQAUAAAAAUIAACAQAAAUgUAAgEgvTgCQQgUAAAAgUIAAiAQAAgUAUAAMBenAAAQAUAAAAAUIAACAQAAAUgUAAgEgvTgJbQgUAAAAgUIAAiAQAAgUAUAAMBenAAAQAUAAAAAUIAACAQAAAUgUAAgEgvTgQlQgUAAAAgUIAAiAQAAgUAUAAMBenAAAQAUAAAAAUIAACAQAAAUgUAAg");
	this.shape.setTransform(304.8,123);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.texttees, new cjs.Rectangle(0,0,609.7,246.1), null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#625A39","rgba(161,150,105,0)","rgba(10,20,25,0.62)"],[0,1,1],0.3,-57.7,0.3,49.2).s().p("EhTmAKEIAA0IMCnNAAAIAAUIg");
	this.shape.setTransform(535.1,64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,1070.2,128.9), null);


(lib.rubber1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.141)","rgba(252,252,252,0)","rgba(10,20,25,0.62)"],[0,1,1],1.1,13.5,0.5,-15).s().p("AlfiLIK/AAIAAAiQAAAIgZAHQk6CQlfBUIgNACg");
	this.shape.setTransform(36.7,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B46C3D","#956344","rgba(10,20,25,0.62)"],[0,1,1],-37,0,37.1,0).s().p("AleCbQgOAAgEgJQgCgFAAgGIAAkNQAAgUAUAAIK9AAQAUAAAAAUIAAENQAAAUgUAAg");
	this.shape_1.setTransform(37.1,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.rubber1, new cjs.Rectangle(0,0,74.2,31.1), null);


(lib.panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4DFC2").s().p("EhTmAKDIAA0EMCnNAAAIAAUEg");
	this.shape.setTransform(535.1,84.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBA9D").s().p("EhTmAAUIAAgnMCnNAAAIAAAng");
	this.shape_1.setTransform(535.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B0A57D").s().p("EhTmAAyIAAhjMCnNAAAIAABjg");
	this.shape_2.setTransform(535.1,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A19669").s().p("EhTmAAeIAAg7MCnNAAAIAAA7g");
	this.shape_3.setTransform(535.1,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.panel, new cjs.Rectangle(0,0,1070.2,148.6), null);


(lib.hy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FAFCFC","#636B72","#F3F5F5"],[0,0.6,1],0.1,-55.5,0.1,55.5).ss(0.5,1,1).p("AQbIHMgg1AAAIAAwNMAg1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5E6872","#CED5DC","#D0DDE1","#697A85","#CCD5D8"],[0.047,0.38,0.541,0.776,1],0,48.7,0,-48.7).s().p("AwZIHIAAwNMAgzAAAIAAQNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hy5, new cjs.Rectangle(-106,-52.9,212.1,105.9), null);


(lib.hy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121D29").s().p("AwLH7IAAv1MAgXAAAIAAP1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hy4, new cjs.Rectangle(-103.6,-50.7,207.2,101.5), null);


(lib.hy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#415832").s().p("Av2HnIAAvNIftAAIAAPNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hy3, new cjs.Rectangle(-101.5,-48.7,203.1,97.5), null);


(lib.hy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6B805A","rgba(10,20,25,0.639)","rgba(10,20,25,0.62)"],[0,1,1],-0.2,-45.6,-0.2,46.3).s().p("AuAHZQhlgBABhjIAArpQgBhjBlgBIcBAAQBlABgBBjIAALpQABBjhlABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hy2, new cjs.Rectangle(-99.7,-47.2,199.5,94.5), null);


(lib.hy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.086)","rgba(255,255,255,0)"],[0,0.588],40,-45.6,40,46.3).s().p("AnvHZQhkgBAAhjIAArpQAAhjBkgBIRDAAQjwH/kdGyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hy1, new cjs.Rectangle(-59.5,-47.2,119.1,94.5), null);


(lib.chalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak2AwQg3gwA3gvIJ5AAQAfAvgfAwg");
	this.shape.setTransform(33.9,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.chalk, new cjs.Rectangle(0,0,67.7,9.6), null);


(lib.rubber3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(2));

	// Layer 1
	this.instance = new lib.rubber1();
	this.instance.parent = this;
	this.instance.setTransform(35.7,18.7,1,1,0,0,0,37.1,15.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:72.5,guide:{path:[35.6,18.7,-336.5,-142.1,-708.7,-302.8]}},9).to({regY:15.6,guide:{path:[-708.7,-302.8,-709.3,-303.1,-709.9,-303.3]}},1).to({regY:15.5,rotation:0,guide:{path:[-709.2,-304.8,-673.3,-312.7,-637.4,-320.5,-670.5,-264.3,-703.6,-208,-597,-269.2,-490.4,-330.3,-548.5,-217,-606.5,-103.6,-467.2,-202.2,-327.8,-300.7,-377.3,-203.1,-426.7,-105.4,-313.1,-144.9,-199.4,-184.3,-191.9,-135.2,-184.4,-86,-141.1,-96.2,-97.8,-106.4,-30.9,-44.1,36,18.3]}},19).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_1 = new lib.texttees();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-443.6,-242.1,0.625,0.625,0,0,0,304.8,123);
	this.instance_1.alpha = 0.68;
	this.instance_1.filters = [new cjs.BlurFilter(118, 69, 1)];
	this.instance_1.cache(-2,-2,614,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0},7).to({_off:true},1).wait(8));

	// Layer 4
	this.instance_2 = new lib.texttees();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-395.5,-167.6,1,1,0,0,0,304.8,123);
	this.instance_2.alpha = 0.301;
	this.instance_2.filters = [new cjs.BlurFilter(108, 108, 1)];
	this.instance_2.cache(-2,-2,614,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-396.3,y:-165.6},19).to({alpha:0},8).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-808.3,-398.6,896.9,469);


(lib.kl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hy1
	this.instance = new lib.hy1();
	this.instance.parent = this;
	this.instance.setTransform(-40.6,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hy2
	this.instance_1 = new lib.hy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hy3
	this.instance_2 = new lib.hy3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hy4
	this.instance_3 = new lib.hy4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hy5
	this.instance_4 = new lib.hy5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.kl2, new cjs.Rectangle(-105.3,-96.8,210.6,104.4), null);


(lib.add_road_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kl2();
	this.instance.parent = this;
	this.instance.setTransform(0,4.7,3.28,3.28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.add_road_banner, new cjs.Rectangle(-345.3,-312.8,690.7,342.3), null);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(535.1,545.9,1,1,0,0,0,535.1,64.5);

	this.instance_1 = new lib.chalk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(947.8,456.3,1,1,0,0,0,33.9,4.8);

	this.instance_2 = new lib.panel();
	this.instance_2.parent = this;
	this.instance_2.setTransform(535.1,535.7,1,1,0,0,0,535.1,74.3);

	this.instance_3 = new lib.add_road_banner();
	this.instance_3.parent = this;
	this.instance_3.setTransform(537.1,460.5,1.535,1.359,0,0,0,1.3,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.board, new cjs.Rectangle(0,-1.1,1070.2,611.4), null);


// stage content:
(lib.chalk_board_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:9,step1:29,step2:49,step3:69,step4:89,step5:109,step6:130,step7:149,step8:169,step9:190,step10:209});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.stop();
	}
	this.frame_130 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_190 = function() {
		this.stop();
	}
	this.frame_209 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(20).call(this.frame_29).wait(20).call(this.frame_49).wait(20).call(this.frame_69).wait(20).call(this.frame_89).wait(20).call(this.frame_109).wait(21).call(this.frame_130).wait(19).call(this.frame_149).wait(20).call(this.frame_169).wait(21).call(this.frame_190).wait(19).call(this.frame_209).wait(20));

	// Layer 6
	this.instance = new lib.rubber3();
	this.instance.parent = this;
	this.instance.setTransform(662.7,325.7,1,1,0,0,0,37.1,15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},19).wait(1).to({_off:false},0).to({_off:true},19).wait(1).to({_off:false},0).to({_off:true},19).wait(1).to({_off:false},0).to({_off:true},19).wait(1).to({_off:false},0).to({_off:true},19).wait(1).to({_off:false},0).to({_off:true},20).wait(1).to({_off:false},0).to({_off:true},18).wait(1).to({_off:false},0).to({_off:true},19).wait(1).to({_off:false},0).to({_off:true},20).wait(1).to({_off:false},0).to({_off:true},18).wait(1).to({_off:false},0).wait(19));

	// Layer 7
	this.instance_1 = new lib.rubber2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(663,335.6,1,1,0,0,0,37.4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},10).wait(19).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(19));

	// Layer 3
	this.instance_2 = new lib.board();
	this.instance_2.parent = this;
	this.instance_2.setTransform(335.1,194.3,1,1,0,0,0,535.1,304.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335,213.6,1070.2,611.5);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;