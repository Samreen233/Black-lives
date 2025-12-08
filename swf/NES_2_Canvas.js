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


(lib.xzside1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A3A3A3","#DFDFDF","#D1D1D3","#C3C5C4"],[0.035,0.251,0.58,1],-0.1,-138.1,-0.1,138.1).s().p("AgGVmMAAAgrLIANAAMAAAArLg");
	this.shape.setTransform(13.7,138.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#6B696A","#FEFFFD","#C2C6C7","#999D9E"],[0.035,0.251,0.58,1],0.1,-138.1,0.1,138.1).s().p("AgHVmMAAAgrLIAPAAMAAAArLg");
	this.shape_1.setTransform(12.2,138.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EFEFED","#FEFEFC","#D7DBDA","#ADB1B2"],[0.035,0.251,0.58,1],-0.1,-138.2,-0.1,138.2).s().p("AgoVmMAAAgrLIBRAAMAAAArLg");
	this.shape_2.setTransform(7.3,138.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#6B696A","#FEFFFD","#C2C6C7","#6A6E6F"],[0.035,0.251,0.58,1],0,-138.1,0,138.1).s().p("AgHVmMAAAgrLIAPAAMAAAArLg");
	this.shape_3.setTransform(2.4,138.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8C8D88","#E0DFDD","#4D4F4E","#464A4B"],[0,0.251,0.58,1],0.1,-138.1,0.1,138.1).s().p("AgHVmMAAAgrLIAPAAMAAAArLg");
	this.shape_4.setTransform(0.8,138.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.xzside1, new cjs.Rectangle(0,0,14.3,276.4), null);


(lib.xzdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6F6E").s().p("A9jAIIAAgPMA7HAAAIAAAPg");
	this.shape.setTransform(189.2,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D5D4").s().p("A9jAIIAAgPMA7HAAAIAAAPg");
	this.shape_1.setTransform(189.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5A5A5").s().p("A9jAFIAAgJMA7HAAAIAAAJg");
	this.shape_2.setTransform(189.2,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A9B2AF","#EBEBEB","#D0D0D0"],[0.035,0.58,1],-189.2,0,189.3,0).s().p("A9jArIAAhVMA7HAAAIAABVg");
	this.shape_3.setTransform(189.2,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A6A8A7").s().p("A9jAHIAAgNMA7HAAAIAAANg");
	this.shape_4.setTransform(189.2,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.xzdown, new cjs.Rectangle(0,0,378.5,14.2), null);


(lib.xdup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AeEAwIAAgBQAAgFgDgBIgFgCMg8IAAAQAAABgGADIAAhaMA8lAAAIAABfg");
	this.shape.setTransform(194.1,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9C9C9").s().p("A9wAIQgIgCAAgIQADgDAFgCIAXAAIABACIAGABMA7IAAAQADADAAABIgDAIg");
	this.shape_1.setTransform(191.3,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A8A0").s().p("A94AIQgIgCAAgHIAAgBQAIgEAAgBMA7xAAAIAGAEIABACIABABIgCAIIgGAAg");
	this.shape_2.setTransform(194.1,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8E86").s().p("A+DAIQgJgBAAgJIACgBQAHgDAAgBMA8IAAAIAFABQACABAAAFIAAABQAAAEgDACIAAABIgCgCIgGgEMg7xAAAQAAABgIAEIAAABg");
	this.shape_3.setTransform(193.3,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99999B").s().p("AdRAIMg7HAAAIgGgBIgBgCIgBgFQAAgFACgCIAGAAMA7tAAAIAGABQACABAAAFQAAAFgDACIgFABg");
	this.shape_4.setTransform(194.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.xdup, new cjs.Rectangle(0,0,388.1,14.6), null);


(lib.vf4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],11.6,-4.5,-11.5,18.6).ss(1,1,1).p("ABIAJIBWAAIAACUIkJAAQgyAAAAgyIAAkHICWAAIAABWQAABPBPAAg");
	this.shape.setTransform(15.8,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],-15.5,9.8,6.8,-12.5).s().p("AhrCdQgyAAAAgyIAAkHICWAAIAABWQAABPBPAAIBWAAIAACUg");
	this.shape_1.setTransform(15.8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vf4, new cjs.Rectangle(-1,-1,33.7,33.4), null);


(lib.vf3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],18.6,-4.5,-4.5,18.6).ss(1,1,1).p("ACdBsQAAAygyAAIkHAAIAAiWIBWAAQBPAAAAhPIAAhWICUAAg");
	this.shape.setTransform(15.7,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],-10.6,11.7,11.8,-10.6).s().p("AicCeIAAiWIBWAAQBPAAAAhPIAAhWICUAAIAAEJQAAAygyAAg");
	this.shape_1.setTransform(15.7,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vf3, new cjs.Rectangle(-1,-1,33.4,33.7), null);


(lib.vf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],11.6,-11.5,-11.5,11.6).ss(1,1,1).p("ACeCdIiWAAIAAhWQAAhPhPAAIhWAAIAAiUIEJAAQAyAAAAAyg");
	this.shape.setTransform(15.8,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],-10.7,7.1,11.7,-15.1).s().p("AAICdIAAhWQAAhPhPAAIhWAAIAAiUIEJAAQAyAAAAAyIAAEHg");
	this.shape_1.setTransform(15.8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vf2, new cjs.Rectangle(-1,-1,33.7,33.4), null);


(lib.vf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],6.3,-15.5,-16.7,7.6).ss(1,1,1).p("AidCdICWAAIAAhWQAAhPBPAAIBWAAIAAiUIkJAAQgyAAAAAyg");
	this.shape.setTransform(15.8,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#222222","#333333","#3B3B3B","#7B7B7B","#666666"],[0.035,0.302,0.502,0.839,1],-7.9,13.8,7.9,-13.6).s().p("AidCdIAAkHQAAgyAyAAIEJAAIAACUIhWAAQhPAAAABPIAABWg");
	this.shape_1.setTransform(15.8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vf1, new cjs.Rectangle(-1,-1,33.7,33.4), null);


(lib.ovalforshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ApVCUQj3g9AAhXQAAhWD3g+QD4g9FdAAQFeAAD4A9QD3A+AABWQAABXj3A9Qj4A+leAAQldAAj4g+g");
	this.shape.setTransform(84.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ovalforshadow, new cjs.Rectangle(0,0,169,42), null);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vf4();
	this.instance.parent = this;
	this.instance.setTransform(-533.9,304.6,1,1,0,0,0,15.8,15.7);

	this.instance_1 = new lib.vf3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(421,304.4,1,1,0,0,0,15.7,15.8);

	this.instance_2 = new lib.vf2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(420.8,-138.3,1,1,0,0,0,15.8,15.7);

	this.instance_3 = new lib.vf1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-533.9,-138.3,1,1,0,0,0,15.8,15.7);

	this.instance_4 = new lib.xzside1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(429.1,88.5,1,1.557,0,0,180,7.2,138.2);

	this.instance_5 = new lib.xzside1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-542.5,85,1,1.539,0,0,0,7.2,138.2);

	this.instance_6 = new lib.xzdown();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-64.6,311.7,2.488,1,0,0,0,189.2,7.1);

	this.instance_7 = new lib.xdup();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-58.2,-146.7,2.439,1,0,0,0,194.1,7.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0D0D").s().p("EhH9AiMQiKAAAAhyMAAAhAzQAAhyCKAAMCP7AAAQCKAAAAByMAAABAzQAAByiKAAg");
	this.shape.setTransform(-58.2,82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9D9CF").s().p("EhKRAkLQiLAAAAh2MAAAhEpQAAh2CLAAMCUkAAAQCKAAAAB2MAAABEpQAAB2iKAAgEhKggf+MAAABAzQABByCKAAMCP7AAAQCKAAAAhyMAAAhAzQAAhyiKAAMiP7AAAQiKAAgBByg");
	this.shape_1.setTransform(-55.7,79.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_8 = new lib.xzside1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-411.8,426.1,2.147,1.258,0,180,0,7.2,138.2);

	this.instance_9 = new lib.xzside1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(314.4,426.1,2.147,1.258,0,180,0,7.2,138.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.board, new cjs.Rectangle(-550.2,-154.5,987.4,754.4), null);


// stage content:
(lib.NES_2_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:8,step1:10,step2:12,step3:14,step4:16,step5:18,step6:20,step7:22,step8:24,step9:26,step10:28});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(2).call(this.frame_10).wait(2).call(this.frame_12).wait(2).call(this.frame_14).wait(2).call(this.frame_16).wait(2).call(this.frame_18).wait(2).call(this.frame_20).wait(2).call(this.frame_22).wait(2).call(this.frame_24).wait(2).call(this.frame_26).wait(2).call(this.frame_28).wait(4));

	// Layer 4
	this.instance = new lib.ovalforshadow();
	this.instance.parent = this;
	this.instance.setTransform(229.6,327.2,2.643,0.25,0,-43.9,-0.2,84.4,20.9);
	this.instance.alpha = 0.121;
	this.instance.filters = [new cjs.BlurFilter(13, 20, 1), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-100, 0, 0, 0))];
	this.instance.cache(-2,-2,173,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// Layer 25
	this.instance_1 = new lib.board();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.2,-32.7,0.491,0.597,180,0,0,89.3,239.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(515.5,76.9,487.5,593.6);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;