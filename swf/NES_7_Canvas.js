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


(lib.ssd1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg52AfHUgHFgmyAGlgfJUA7jAFOA8LgFOUABRA9HgJfAPvQtfAztfAAUgqBAAAgqBgHug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ssd1, new cjs.Rectangle(-393.8,-248.5,787.6,497), null);


(lib.ssd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg52AfHUgHFgmyAGlgfJUA7jAFOA8LgFOUABRA9HgJfAPvQtfAztfAAUgqBAAAgqBgHug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ssd, new cjs.Rectangle(-393.8,-248.5,787.6,497), null);


(lib.letterb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DADBDE","#FFFFFF"],[0,1],-41.9,86.6,-12.8,12.9).s().p("AP6TtMgwogVdIABgCQjRhbigmjQhwknhIl/IAEgBMBSpAdNQkKDbkTCvQodFYlPAAQh3AAhdgrg");
	this.shape.setTransform(264.7,130.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.letterb, new cjs.Rectangle(0,0,529.5,260.9), null);


(lib.lettera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DADBDE","#FFFFFF"],[0,1],222.6,521.5,42.4,-255.8).s().p("Eg8XAKJIgEABQjbyUCm/MMB7pAWuUgSBAlxgWGASOg");
	this.shape.setTransform(399.3,252);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lettera, new cjs.Rectangle(0,0,798.6,503.9), null);


(lib.pagecurl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#FFFFFF","rgba(204,204,204,0)"],[0,0.29,1],-11.6,-12,-9.7,0).s().p("AnygTQACghAwgDIADAAQAWgBAUAIQAUAIASAMQCdgQLEg2IvnDFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pagecurl2, new cjs.Rectangle(-50,-9.9,100.1,19.8), null);


(lib.curl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","rgba(255,255,255,0)","rgba(204,204,204,0)"],[0,0.29,1],-0.6,-1.3,-0.5,0).s().p("AmuAPQgUgIgWAAIOxgpQrEA1idAQQgSgMgUgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#999999","#FFFFFF","#CCCCCC"],[0,0.29,1],1,-2.1,1.2,0.9).s().p("AmuAPQgUgIgWAAIOxgpQrEA1idAQQgSgMgUgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.curl1, new cjs.Rectangle(-47.3,-3.5,94.7,7), null);


(lib.curly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pagecurl2();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,2.63,2.63);

	this.instance_1 = new lib.curl1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.1,-16.8,2.63,2.63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.curly, new cjs.Rectangle(-131.6,-26,263.3,52), null);


(lib.paper_GS_anim_page_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 2
	this.instance = new lib.curly();
	this.instance.parent = this;
	this.instance.setTransform(-198.1,-473.3,1,3.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.56,scaleY:2.06,x:-257.1,y:-516.1,alpha:0.051},6).to({_off:true},1).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhFlQAEl0CpAFMAmhgGZMBS/AAAMAAABRtg");
	this.shape.setTransform(67.2,-308.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhG+QAekzBcAJMAkPgGFMBWEAAAMAAABRtg");
	this.shape_1.setTransform(67.2,-308.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAg4KIAAgLIAHAAIAAv3QAjkNBaASMAgpgFmMBZgAAAMAAABRtg");
	this.shape_2.setTransform(67.2,-308.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAg4qIABAAIAAxAQApjNBUALIeBlBMBcOAAAMAAABRtg");
	this.shape_3.setTransform(67.2,-308.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg+EAo3MAAAg8lIgEg5IAAs9QAhi0BSAJIbKknMBfUAAAMAAABRtg");
	this.shape_4.setTransform(67,-308.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg+EAo3MAAAg+tQgVujBVgWIYzkHMBiaAAAMAAABRtg");
	this.shape_5.setTransform(67,-308.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Eg+DAo3MAAAhA+QgWtYBQAWIVcjtMBl2AAAMAAABRtg");
	this.shape_6.setTransform(66.9,-308.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhRtMB8NAAAMAAABRtg");
	this.shape_7.setTransform(67.2,-308.3);

	this.instance_1 = new lib.ssd();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.9,-239.8);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.lettera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.1,-83,1,1,0,0,0,399.3,252);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.letterb();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.3,72.2,1,1,0,0,0,264.7,130.4);
	this.instance_3.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.3,-569.7,795,523);


(lib.GS_paper_anim_paper_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 2
	this.instance = new lib.curly();
	this.instance.parent = this;
	this.instance.setTransform(-257.1,-516.1,0.556,2.061);
	this.instance.alpha = 0.051;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleX:1,scaleY:3.71,x:-198.1,y:-473.3,alpha:1},6).wait(2));

	// Layer 1
	this.instance_1 = new lib.letterb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.3,72.2,1,1,0,0,0,264.7,130.4);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.lettera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.1,-83,1,1,0,0,0,399.3,252);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.ssd1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.9,-239.8);
	this.instance_3.alpha = 0.801;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhRtMB8NAAAMAAABRtg");
	this.shape.setTransform(67.2,-308.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg+DAo3MAAAhA+QgWtYBQAWIVcjtMBl2AAAMAAABRtg");
	this.shape_1.setTransform(66.9,-308.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg+EAo3MAAAg+tQgVujBVgWIYzkHMBiaAAAMAAABRtg");
	this.shape_2.setTransform(67,-308.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg+EAo3MAAAg8lIgEg5IAAs9QAhi0BSAJIbKknMBfUAAAMAAABRtg");
	this.shape_3.setTransform(67,-308.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAg4qIABAAIAAxAQApjNBUALIeBlBMBcOAAAMAAABRtg");
	this.shape_4.setTransform(67.2,-308.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAg4KIAAgLIAHAAIAAv3QAjkNBaASMAgpgFmMBZgAAAMAAABRtg");
	this.shape_5.setTransform(67.2,-308.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhG+QAekzBcAJMAkPgGFMBWEAAAMAAABRtg");
	this.shape_6.setTransform(67.2,-308.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhFlQAEl0CpAFMAmhgGZMBS/AAAMAAABRtg");
	this.shape_7.setTransform(67.2,-308.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280,-78.2,535,304);


// stage content:
(lib.NES_7_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:9,step1:35,step2:61,step3:87,step4:113,step5:139,step6:165,step7:192,step8:218,step9:244,step10:270,step11:296});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this.stop();
	}
	this.frame_87 = function() {
		this.stop();
	}
	this.frame_113 = function() {
		this.stop();
	}
	this.frame_139 = function() {
		this.stop();
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_192 = function() {
		this.stop();
	}
	this.frame_218 = function() {
		this.stop();
	}
	this.frame_244 = function() {
		this.stop();
	}
	this.frame_270 = function() {
		this.stop();
	}
	this.frame_296 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(26).call(this.frame_35).wait(26).call(this.frame_61).wait(26).call(this.frame_87).wait(26).call(this.frame_113).wait(26).call(this.frame_139).wait(26).call(this.frame_165).wait(27).call(this.frame_192).wait(26).call(this.frame_218).wait(26).call(this.frame_244).wait(26).call(this.frame_270).wait(26).call(this.frame_296).wait(17));

	// Dice
	this.instance = new lib.GS_paper_anim_paper_start();
	this.instance.parent = this;
	this.instance.setTransform(565.9,92.3,0.986,0.736,180);

	this.instance_1 = new lib.paper_GS_anim_page_end();
	this.instance_1.parent = this;
	this.instance_1.setTransform(565.9,92.3,0.986,0.736,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(16).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(15).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14).to({_off:false},0).to({_off:true},12).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({_off:true},15).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},14).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false},0).to({_off:true},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(852.9,248.2,528,235);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 31,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;