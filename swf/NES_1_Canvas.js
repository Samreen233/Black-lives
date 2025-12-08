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


(lib.reporter_clip4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVQgEgOgHgLIgKgeQgKgUgFgVIAJg3QAEglAOgiQA2g0BLgDQAvAJAkAfQANAdAEAgIAFAeQACAogCAoQgHAfgLAeQgFAVgJATQgNAMgPAJQAnAUAkAdQANAEANABQAgAEAhAHQAaANAZAUQARAKAQANQALASAHAVQAOAfAFAiQgKAogFAoIARB/g");
	this.shape.setTransform(3.8,-20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmOF/IAbhlQANglAGgnIAAg3QAEgZAOgVQAKgUANgTQASgPAVgMQAagRAegKQAmgEAlgIQATgNAQgRQAXgQAVgUQAIgSgBgVQgEgOgGgLIgLgeQgKgTgEgWIAIg3QAEgkAOgjQA2g0BLgDQAvAJAlAfQAMAdAEAgIAFAeQABAmgBAmQgGAggMAhQgHAXgMAVQgLAIgMADIAUAMQAaAXAeAUQALADAOACQAhAEAgAHQAVAKATAPQAgAUAXAeQASApAIAsQgKAogFAoIARB/g");
	this.shape_1.setTransform(3.8,-20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVQgEgOgHgLIgKgeQgKgUgFgVIAJg3QAEglAOgiQA2g0BLgDQAvAJAkAfQANAdAEAgIAFAeQABAmgBAmQgGAggMAhQgGAYgMAUQgLAIgNADIAUALQAaAZAdATQANAEANABQAgAEAhAHQAVAKATAPQAgAUAXAeQASApAIAsQgKAogFAoIARB/g");
	this.shape_2.setTransform(3.8,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVQgEgOgHgLIgKgeQgLgWgEgYQADgXAGgWQAEgnAOglQA2g0BLgDQAvAJAkAfQANAdAEAgIAFAeQACAogCAoQgHAfgLAeQgFAVgJATQgNAMgPAJQAnAUAkAdQANAEANABQAgAEAhAHQATAJAQANQAaAQAXASQALASAHAVQAOAfAFAiQgKAogFAoIARB/g");
	this.shape_3.setTransform(3.8,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVQgEgOgHgLIgHgZQgOgbgCgdIAIgtQACgcAJgbQAzhBBUgGQAvAJAkAfQAOAdAEAgQAJBPgSBNQgJAigPAeQgLAGgMAGQAnAUAkAdQANAEANABQAgAEAhAHQATAJAQANQAaAQAXASQALASAHAVQAOAfAFAiQgKAogFAoIARB/g");
	this.shape_4.setTransform(3.8,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVQgEgOgHgLIgHgZQgOgbgCgdIAIgtQABgdAKgaQAxg/BQgIQAzAIAmAgQANAaAEAeIAFAjQACArgCAqQgGAagJAZQgIAdgOAZQgLAGgMAGQAnAUAkAdQANAEANABQAgAEAhAHQATAJAQANQAaAQAXASQALASAHAVQAOAfAFAiQgKAogFAoIARB/g");
	this.shape_5.setTransform(3.8,-20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVIgPgtQgMgTgDgWIAEhBQALhFA3gtQAagIAcgEIAUAAQAyALAnAdQAOAaADAeIAIAyIgDAUIAAAtQgGAigMAgQgFAVgJATQgKAJgNAHIBGAxIBbAQIBUA4IAjBUIgNBkIARB/g");
	this.shape_6.setTransform(3.8,-20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AmOF9IAbhlQANglAFgmIAAg4QAFgZAOgUQAKgVANgTQASgPAVgMQAagRAdgKQAngEAlgHQATgNAQgRQAXgRAVgTQAIgTgBgVIgehVQAAgaAEgZIAAgZQABgSAIgRQARgnAjgaQATgIAUgEQA9gEA3AbQAYAbAGAlIAKBCIgFAZIADAUQgCAUgGAUIgNAjQgFAagRAWIgKADQAeAfAjAYQANADANABQAgAEAhAHQATAJAQAOQAfASAYAYIAMAeQAOAfAFAiQgKApgFAoIARB+g");
	this.shape_7.setTransform(3.8,-20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVIgehWQAAgZAEgZIAAgZQAMg3AngnQAagOAcgEIAUgEIAfAFQAjAHAeATQAUAbAFAhIAKBBIgBAjQgHAzgSAyQgGASgKAQIgIABIAjAlIAjAVIBRANIBUA4IASAnIATBBIgPBLIARCEg");
	this.shape_8.setTransform(3.8,-20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAXgRAVgTQAIgSgBgVIgVg9QgHgMgCgNQAAgaAEgYIAAgZQAMg3AngnQAagOAcgEIAUgEIAfAFQAmAIAgAWQASAZADAfQAHAvACAxQgHAzgQAxQgGAVgNASIgIABIAjAlIAjAVIBRANIBUA4IASAnIATBBIgPBLIARCEg");
	this.shape_9.setTransform(3.8,-20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAcgUAVgZQACgPAAgPQgDgNgGgMIgMgkQgHgMgCgNQAAgZAEgZQACgwAUgqQAjglAwgJIAZgFIAUAEQAjAGAfARQASAQALAWIALBHQACAjgCAkQgHAggLAhQgKAjgWAeQAdAYAfAVQANAEANABQAgAEAhAHQATAJAQANQAjAVAZAgQASApAIAsQgKAogFAoIARB/g");
	this.shape_10.setTransform(3.8,-20.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngDAlgIQATgNAQgRQAcgUAVgZQACgPAAgPQgNgpgQgnQgCgbAFgYIAAgeQAHgjAPgeQAjgkAwgKIAZgFIAaAFQAkAIAgATQAWAhAFApIAFAeQACAmgCAlQgHAggLAdQgGAXgJAWQgHALgKAJQAdAYAfAVQANAEANABQAgAEAhAHQATAJAQANQAjAVAZAgQASApAIAsQgKAogFAoIARB/g");
	this.shape_11.setTransform(3.8,-20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AmOF+IAbhlQANglAFgmIAAg4QAFgZAOgUQAKgVANgTQASgPAVgMQAagRAdgKQAngEAlgHQATgNAQgRIAkgdQAHgFAFgGQADgSAAgSQgQgwgOgwIAEgoQAJhQA+gxQAQgFASgCQAPgDAQAAQAvAGApAYQASAYAGAeQAFAWADAXIAABHQgHAwgQAvQgIAYgTAMQAcAcAgAWQANADANABQAgAEAhAHQATAJAQAOQAfASAYAYIAMAeQAOAfAFAiQgKAogFApIARB+g");
	this.shape_12.setTransform(3.8,-20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AmOF6IAbhmQANglAFgmIAAg4QAFgYAOgVQAKgVANgTQASgPAVgLQAagRAdgLQAngEAlgHQATgNAQgRIAkgdQAHgFAFgGQADgRAAgSQgEgOgFgMIgIgeQgJgTgEgVIAEgZIAAgeQAIgvAYgnQBOguBbAZIAYAMQAVAfAFAmIAIAzQAAAPgDAPIAAAoQgHAdgLAbQgHAjgZAUQAcAcAgAWQANAEANABQAgAEAhAGQATAJAQAOQAfASAYAYIAMAeQAOAgAFAiQgKAogFAoIARB/g");
	this.shape_13.setTransform(3.8,-20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAg4QAFgZAOgUQAKgVANgTQASgPAVgLQAagRAdgLQAngEAlgHQATgNAQgRIAkgdQAHgFAFgGQADgRAAgSQgEgOgFgMIgPgtQgEgZACgZQADg1ASgwQA7g0BRACQAPACAPAGQASAHAQALQAaAtAFA3QAEARABASIgFAZIAAAZQgGAhgMAhQgGAUgJAUQgHAIgKACQAcAcAgAWQANADANABQAgAEAhAHQATAJAQAOQAfASAYAYIAMAeQAOAgAFAiQgKAogFAoIARB/g");
	this.shape_14.setTransform(3.8,-20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAgzQAEgbAPgXQAKgVANgTQASgPAVgMQAagQAdgLQAngEAlgHQATgNAQgRIAoggQAPghgNgkQgLgggGghIAAgyIAFgaQAFgiARgfQAUgSAYgNQASgIAVgCIAzAAQAPADAPAGQAVAJARANQATAeAFAjQAFAZADAaIgCAtQgBAZgHAZIgNAoQgGAYgNAUIgNACQAcAcAgAWQANADANABQAgAEAhAHQATAJAQAOQAfASAYAYIAMAeQAOAfAFAjQgKAogFAoIARB/g");
	this.shape_15.setTransform(3.8,-20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAgzQAEgbAPgXQAKgVANgTQASgPAVgMQAagQAdgLQAngEAlgHQATgNAQgRIAoggQANgWgDgaQgPgrgKgrIAAguIAFgZIACgZQAUgwAsgcQASgIAVgCIAzAAQAaAGAYANQANAGALALQANAaAFAdQANBSgSBPQgMAngRAjIgIACQAbAhAmATIBRANQATAJAQAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLIARCEg");
	this.shape_16.setTransform(3.8,-20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAgzQAEgbAPgXQAKgVANgTQALgKANgHQAbgSAdgOIBagQQATgNAQgRQAagTAWgVIAEgUQgBgVgHgUQgNgjgGgjIAAgjIAFgZIAAgVQASg2AwggQASgIAVgCIAuAAQA6AOAjAvIAEAZQAFAZADAZIAAA9QgIAxgRAvQgGAXgTAMQAbAhAmATIBRANQATAJAQAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLIARCEg");
	this.shape_17.setTransform(3.8,-20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAgyQAEgcAPgXQAKgVANgTQASgPAVgLQAagRAdgLQAngEAlgHQATgNAQgRIAoggQAPgZgFgcQgPgogKgpQABgfAEgdQABgaAGgZQAUgjAigYQArgOAvADQArAIAkAbQARAeAEAjQAHA3gCA4QgFAagKAZQgKAogZAjQAbAVAcATQANADANABQAgAFAhAGQATAJAQAOQAfASAYAYIAMAeQAOAgAFAiQgKAogFAoIARB/g");
	this.shape_18.setTransform(3.8,-20.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAgyQAEgcAPgXQAKgVANgTQASgPAVgLQAagRAdgLQAngEAlgHQATgNAQgRIAoggQANgUABgXIgMgfQgKgegHgeQABgfAEgdQAHg9AsgsQAvgSA1ACQARACASAGQAmARAUAjIAJAtQAGAcABAcQgDATgBAVQgFAlgNAiQgGAWgIAXQgIALgKAJQAbAVAcATQANADANABQAgAEAhAHQATAJAQAOQAfASAYAYIAMAeQAOAgAFAiQgKAogFAoIARB/g");
	this.shape_19.setTransform(3.8,-20.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAg4QAFgZAOgUQAKgVAMgTQASgPAWgLQAagRAdgLIBCgIQAZgMAUgVQAagTAWgVIAEgUQADgKgBgKIgMgaQgOgqgDgrIAFgtQALg3AogoQAvgSA0ACQAwAJAkAfQANAaAEAdIAKA4IgFAeIAAAjQgEAYgJAWQgKArgbAbQAZAZAeAUQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAgAFAiQgKAqgFArIARB6g");
	this.shape_20.setTransform(3.9,-20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QACgfARgZQAKgVAMgTQALgKAOgHQAagSAdgOQAogJApgFQAegPAZgZQAVgQARgQQAJgcgKgcQgNgjgHgjQgBghAEggQAWhXBTgeIAtAAQASADARAGQAQAFAPAIQAhArAHA4QAEAXABAXIgFAtQgGAigNAgQgGAcgPAZIgKACQAZAZAeAUQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_21.setTransform(3.9,-20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QACgfARgZQAKgVAMgTQALgKAOgHQAagSAdgOQAogJApgFQAegPAZgZQAVgQARgQQAJgcgKgcQgKgbgGgcQgDghACggQABgdAGgbQAZgvAwgXQAOgFAQgBIAoAAQAzALAmAjQAIATADAVQAHAbAEAdQAAAogFAoQgIAfgLAdQgFAbgQAWIgKACQAZAZAeAUQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_22.setTransform(3.9,-20.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAgzQADgbAQgXQAKgVAMgTQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAbgYQAIgEAIgHIAGgaQAAgTgJgQQgLgigEgkQgChFAYg+QANgOAQgLQAOgJAPgGQARgFASgBIAjAAQArAJAkAXQATAbAFAgQAFAXADAWIAAA4QgIA2gTA0QgFASgKAPIgNACQAZAZAeAUQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_23.setTransform(3.9,-20.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAgzQADgbAQgXQAKgVAMgTQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIArgkIAGgZQAAgTgIgQQgMgigEgkQgBg+ARg7QA4g1BOgDQArAJAkAXQASAZAGAdQAHAgAEAiIgDAyQgIAxgRAvQgGAXgTAMQAYAfAkAQIBRANQASAJARAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLQADAgAHAhIAHBDg");
	this.shape_24.setTransform(3.9,-20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAbgYIAMgIQAOgdgKgeQgNglgFgmQgCg2AMg0QA2hDBWgEQArAJAkAXQAVAgAGAlIAIAzIgDAjQgBAngNAkQgKArgaAcQAYAfAkAQIBRANQASAJARAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLQADAgAHAhIAHBDg");
	this.shape_25.setTransform(3.9,-20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAbgYIAMgIQAOgdgKgeQgNglgFgmQgBgnAFglIADgUQAzhLBcgGQAuAKAmAaQASAhAGAlIAIAzIgFAZIAAAeQgGAigMAgQgGAWgJAXQgIALgJAJIAyAjQAMADANABQAhAEAhAHQASAJARAOQAjAVAYAfQATAqAIAsQgKAqgFArIARB6g");
	this.shape_26.setTransform(3.9,-20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAbgYIAMgIQAOgdgKgeIgJgjQgHgUgCgUQAAhcA4hEQAOgHAPgDQARgFASgCIAeAAQAuAKAmAaQASAhAGAlQAGAcACAcIgFAjQgCAkgMAjQgJAggOAfIgNAHQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_27.setTransform(3.9,-20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAbgYIAMgIQAOgfgLghQgMgigFgkQAAhcA4hEQAOgHAPgDQARgFASgCIAeAAQAVAEAUAHQAlAQAVAiIAJAoQAIAgAAAiIgFAyQgGAigMAfQgHAdgPAYIgKADQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_28.setTransform(3.9,-20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAbgYIAMgIQAOgfgLghQgLgjgGgjQAAgkAFgjQAEgdAMgaQA3gvBKgEQAxALAoAeQANAaAGAdQAIAoAAApQgDApgKAoQgMAwgeAgQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_29.setTransform(3.9,-20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAnggQAPgfgMghQgLgggGghQAAgkAFgjQACgUAFgUQA1hBBVgGQAVAEAUAHQAaALAWATQALARADASQAIAeAFAeIgBA+QgHAzgSAxQgFAUgLASIgNACQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_30.setTransform(3.9,-20.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAnggQAPgfgMghQgLgggGghQAAgkAFgjQAFgiARgfQA1grBGgDQAxALAoAeQALARAEAUQAJAkAHAmIgEAjQAAAegGAeIgRAuQgFAXgOAUIgNACQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_31.setTransform(3.9,-20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUQAXgRAVgTQAJgdgJgfQgOgsgFguIAFgoQACgYAGgWQAyhABSgHQA4ALArAjQAKATAEAVQAHAhAFAhIgEAoQgGA2gRA0QgGAUgMARQgHADgHAAQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_32.setTransform(3.9,-20.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUQAXgRAVgTQAJgdgJgfQgOgsgFguIAFgoQAFgmARghQAzgqBDgEQAxAJAqAbQAVAiAGApIAIApIgFAtQAAAcgGAbIgNAaQgGAfgPAaIgKADQAWAcAhAOIBRANQASAJARAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLQADAgAHAhIAHBDg");
	this.shape_33.setTransform(3.9,-20.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAg4QAFgZAOgUQAKgVAMgTQALgKAOgHQAagSAdgOIBbgQQATgNAQgRIAjgeQAKgGAIgJQADgPAAgQIgahfQAAgcAFgcQAEgoASgjQAiggAsgKQAUgEAUAAQAxAJAqAbQAVAdAFAkIAJAuQgBAUgEAUIAAAoQgHAcgMAbQgGAdgPAYIgKADQAWAcAhAOIBRANQASAJARAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLQADAgAHAhIAHBDg");
	this.shape_34.setTransform(3.9,-20.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgmIAAg4QAFgZAOgUQAKgVAMgTQALgKAOgHQAagSAdgOIBbgQQATgNAQgRIAjgeQAKgHAIgIQADgPAAgQIgahfQABgaAEgZQAFgxAagpQAdgXAjgHQBJgGA/AkQATAZAFAeQAKAlABAnIgFAeIAAAjQgFAVgIATQgJAigOAeIgOAHQAVATAYAQQAMAEANAAQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAiQgKArgFArIARB5g");
	this.shape_35.setTransform(3.9,-20.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QACgfARgZQAKgVAMgTQALgKAOgHQAagRAdgPQAogIApgEQAhgTAbgcQAVgQARgQQAFgZgGgZQgOgqgIgsQABgSAEgRQAIhDAwgvQAjgMAnAAIAkAAQAUAFAUAJQAbAPAQAaIAGAfQAIAYADAaIgFBWQgDAYgKAVQgJArgcAbQAVAUAYAQQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_36.setTransform(3.9,-20.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQALgKAOgHQAagRAdgPIBbgPQATgOAQgRIAjgdQAKgHAIgJQAEgPgBgPQgKgtgMguIgEgUIAFgZQACgiAIggQAHgQAKgOQAtgiA6gBIAkAAQAzAPAgAoIAOA9QAEAUACAUIgGAeIABAUQgDAagIAZIgPAtQgEATgNAOIgKACQAVAUAYAQQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_37.setTransform(3.9,-20.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QACgeARgZQAKgWAMgTQALgJAOgHQAagSAdgOQAogJApgEQAhgTAbgcQAVgQARgQQAHgZgIgZQgLgegGgeQgCguAGgtQAHggAQgcQA9gnBOADQAPADAPAGQAUAJASAOQANASAGAVQAKAlAGAmIgDAZIAAAaQgDAhgLAgQgLAvgeAdQAVATAYAQQAMAEANAAQAhAEAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_38.setTransform(3.9,-20.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgTQAGgQAKgPQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgTIAoggQAOgUAAgYIgIgUQgMgjgEgkQgBhHAchAQA9gnBOADQAoAMAhAYQAMAVAFAYIAPBGIgFAaIAAAZQgDAfgLAdQgIAWgGAXQgDANgGAMQgIAFgKABQAVATAYAQQAMAEANAAQAhAEAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_39.setTransform(3.9,-20.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgPAKgPQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgUIAoggQAOgTAAgYIgIgUQgMgjgEgkQgBg8ARg4QA9g6BZADQAwAOAjAkQAFAPACAQQAKAgAFAhIgFAeIAAAkQgHAhgLAgIgPAyQgJAKgNAAQAVAUAYAQQAMADANABQAhAEAhAHQASAJARANQAeATAZAXIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_40.setTransform(3.9,-20.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgPAKgPQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgUIAoggQAOgTAAgYIgJgZQgLgjgEgkQABghAEggQADgYAIgWQA6g5BWACQA0ANAlAlQAJAbAFAdIAIAjQgBAVgEATIAAAfQgIAugRAsQgEASgLAPIgKACIAAAKQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_41.setTransform(3.9,-20.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnQgBgfABgdQAJgbAQgYQAJgVARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbIAEgoQgCgLgFgJIgLgjQgIgrABgrQAHg1AcgrQAkgZAsgFQAvgBAsAPQAVALARAPQAMAYAEAbQAIAYADAaQgBAXgEAWIAAApQgIAcgKAbQgGAagIAXQgIAFgKABIAAAKQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_42.setTransform(3.9,-20.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnQgBgfABgdQAJgbAQgYQAJgVARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbIADgeQABgRgHgNIgLgjQgHghAAghIAFgoQAGgqAYgiQAggXAmgHQBGgBA9AhQATAcAIAkQAJAigBAkIgFAjQABAVgCAUIgQAoQgGAagKAXQgIAJgJAHQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_43.setTransform(3.9,-20.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnQgBgfABgdQAJgbAQgYQAJgVARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbIADgeQgCgagKgYQgMgwAAgwQAIg3AbguQAggWAmgIQBGgBA9AhQATAYAEAeQAMAlADAmIgIAtQABASgCASIgOAjQgHAcgKAbQgIAJgKAGQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_44.setTransform(3.9,-20.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AmOF4IAbhlQANglAFgnQgBgeABgeQAJgbAQgXQAJgWARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbQAEgZgBgZQgPgogJgoQAAgiAFggQAGgsAYglQAMgJAOgHQBIgUBJAUQAVALARAQQALAQADATQAIAdAFAfQADAMABANIgJAkIAAAoQgFASgIARQgIAfgLAeQgIAIgKAHQAYAPAaANIBRAMQASAJARANQAjAVAYAgQATApAIAsQgKArgFArIARB5g");
	this.shape_45.setTransform(3.9,-20);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnQgBgfABgdQAJgbAQgYQAJgVARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbIAEgoQgDgNgFgMQgQg0gBg2IAFgZQAGgpAVgjQAlgdAugGQAvgBAsAPQAVALARAPQAMAWAFAYIAPBBIgIAoIADAVQgCARgEASIgMAZIgLAjQgBAPgHAOIgSALQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_46.setTransform(3.9,-20.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgPAKgPQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgUIAegYIAPgIQAOgfgMggQgLgjgGgkQAAgcAFgbQAKhBAzgoQAtgMAxABQAyANAnAgQAJAUAEAVQAJAdAFAfIgFAyQgEAqgOAnIgOA3QgLAKgMAFQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_47.setTransform(3.9,-20.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgPAKgPQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgUIAegYIAPgIQAOgfgMggQgLgjgGgkQABgZAEgZQAFgtAWgnQA5gmBHABQAyANAnAgQALAYAFAbQAHAWAEAXIgFAyQgBAngMAlIgQAtIgDAUQgLAKgMAFQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_48.setTransform(3.9,-20.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgPAKgPQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAmgcQAIgvgTgwIgFgeQgCgaAFgYQAEgqASgnQA5guBMABQASAEASAGQAeANAXAWQAKATAEAWQAIAbAFAcQgBAXgEAWIAAAfQgDAagKAYIgTBFQgIAFgKABIAAALIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_49.setTransform(3.9,-20.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAZgUIAOgIQAHgOgBgPQgJgngLglIgFgjIAJg8QAFgeANgaQA5gtBMAAQASAEASAGQAYAJAVAQQATAZAFAfQAIAYADAaIgFBRQgIAogPAoQgDARgGARQgIAFgKABIAAALIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_50.setTransform(3.9,-20.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAZgUIAOgIQAHgOgBgPQgJgpgLgoQgDgUAAgUIAHgyQAFgeANgaQA5gtBMAAQA2AOApAkQAHATADAWQAIAYADAaQgBAcgEAbIAAAkQgFAUgIAUIgKAjQgCAPgHAOQgIAIgKADQARAOASAMQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_51.setTransform(3.9,-20.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAZgUIAOgIQAIgSgDgVQgMgqgHgsQAAg4AMg3QA2g/BVgCQAUADAUAHQAhAOAaAaQAGAPACAQQAMAnAEApIgIAjIAAAkQgEAVgJATIgKAjQgCAPgHAOQgIAIgKADQARAOASAMQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_52.setTransform(3.9,-20.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAZgUIAOgIQALgagJgcQgMgjgEgkQAAhWAuhEQAQgKASgFQAUgFAUgCIAfAAQAwALAoAaQAPAUAEAYIASBLQgDASgFARQgCASAAASQgJAogOAoIgFAZQgJAMgNAJIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_53.setTransform(3.9,-20.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAngcQAIgSABgVIgHgPQgMgjgEgkQAAg+ATg7QAJgQANgMIAngUQAUgFAUgCIAZAAQAzAKArAbQAVAkAIArIAIAjQgCAUgGAUQgCAXAAAXQgEAVgJATIgKAjQgCAPgHAOIgSAMIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_54.setTransform(3.9,-20.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAngcQAIgTADgUIgIgMIgFgSQgJgbgDgdQAAg+ATg7QAJgQANgMIAngUQAUgFAUgCIAZAAQAiAGAgANQASAJAPANQARAhAHAlQAHAWABAXQgGAZgCAZQAAAfgKAeQgJAWgGAXQgBANgEAMQgJAKgNAGIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_55.setTransform(3.9,-20.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWIAfgYIANgIQAKgSABgVIgJgUQgNgjgDgkQAChbA7hAQASgJAVgDQAUgEAUAAQA5AJAvAgQAQAcAFAgQAHAWAEAXQgBAXgEAWIAAAfQgFAXgIAWIgPAtIgFAZQgJAKgNAGIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_56.setTransform(3.9,-20.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWIAfgYIANgIQAKgSABgVIgJgUQgMgjgEgkQAChbA7hAQASgJAVgDQAUgEAUAAQA5AJAvAgQAJAMAHAMIACAVQAJAbAFAcQgBAXgEAWIAAApQgMAqgPApQAAAPgFAQQgIAFgKABQAOAPAQALQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_57.setTransform(3.9,-20.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgUIAtggQAOgTABgYIgJgUQgKgcgGgcIAAgjIAFgoQAIgtAcgkQAagTAhgGIAZgFQAPAAAPADQAdAFAbALQAVAKASAQQAJAUADAVQAJAbAFAcQgBAegEAeIAAAfQgGAcgLAbIgKAXQAAAPgFAQQgIAFgKABQAOAPAQALQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_58.setTransform(3.9,-20.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWQAjgWAUgiQgBgTgIgQQgKgegGgfQAAghAFggQAGgsAZglQAcgWAkgIIAZgFQAPAAAPADQAdAFAbALQAVAKASAQQALAYAEAbQAKAgAEAhIgFANIgDAbIAAAfQgFAUgIAUIgKAjIgEAZQgGAMgMADQAyAjBCAGQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_59.setTransform(3.9,-20.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWQAjgWAUgiQgBgTgIgQQgKgegGgfQAAghAFggQAHgsAYglQAegXAngHIAZgFIAZAEQAdAEAbALQAVAKASAQQAKAWAFAYQAJAgAFAhQAAAMgFAGIgDAbIAAAkQgKAjgNAjIgEAZQgGAMgMADQAyAjBCAGQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_60.setTransform(3.9,-20.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWQAjgWAUgiQgBgTgIgQQgKgegGgfQAAgeAFgeQAHgvAZgnQAegXAmgHIAZgFIAfAFQArAIAlAYQAWAhAHApQAIAZADAZIgKAoQAAAXgBAXIgWBBIgEAZIgSAVQARAKASAIIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_61.setTransform(3.9,-20.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWQAjgWAUgiQgBgTgIgQQgKghgGghQAAgcAFgbQAJg1AggpQAdgRAjgFIAZgFIAaAFQAxAJAoAfQALATADAWQALAiAGAkQgEAXgGAWIAAApQgKAjgNAjQgCAPgCAOQgIAIgKAEQALALAOAJQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_62.setTransform(3.9,-20.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AmOF5IAbhlQANglAFgnIAAg3QAFgZAOgUQAKgWAMgTQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWQAjgWAUgiQgCgVgJgTQgJghgFghQABgXAEgWQAIg4AigrQAdgRAigFQAPgDAPAAQA9AJAxAjQANAVADAYQAJAeAGAeQgDAcgHAcIAAAjQgDANgFAMIgPAtIgEAeQgIAHgKAEQALALAOAJQAMAEANABQAhADAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_63.setTransform(3.9,-20.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AmOF5IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgTQAGgQAKgPQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgTIAkgcIANgJQAPgcgMgfQgLgjgGgkQABgXAEgWQAIg1AhgrQAfgVAmgEIAPgDIAzAFQAmAOAfAZQANAVAEAYQAJAeAFAeQgDAcgHAcIAAAjQgDANgFAMIgMAoQgCASgFASQgIAIgKACQALALAOAJQAMAEANABQAhADAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_64.setTransform(3.9,-20.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AmOF4IAbhlQAMghAGghIAAg3QAAgNACgNQAKgUANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgIQAagUAYgXIAsggQAJgcgLgbQgLgkgGgjQABgVAEgTQAIg/ArgvQA2gUA9AEQAUAEAUAKQAdAPAUAaQAIAYAFAbQAHAbABAcIgHAXQgDAYAAAXQgHAlgNAiQgBAUgGASQgIAGgKABQALAMAOAIQAMAEANACQAhADAhAGQASAJARAOQAeASAZAYIAMAeQAOAgAFAiQgKArgFAqIARB6g");
	this.shape_65.setTransform(3.9,-20);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AmOF4IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAagUAYgXIAsggQAJgcgLgcQgLgigGgkQABgSAEgRQAHhCAsgxQA0gTA5ADQA4AOAnApQAIAYAFAbQAHAaABAdQgFASgCATQADATgDATIgUA9IgEAIIAAARIgGASIgIAGIgKABQALAMAOAIQAMAEANABQAhADAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_66.setTransform(3.9,-20);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AmOF3IAbhlQANglAFgmIAAgzQADgbAQgXQAKgVAMgTQASgPAWgMQAagQAdgLQAmgEAmgHQAQgLAOgOQAWgUAYgSQAWgQADgcIgJgYQgKgggFghIADgZIAAgaQAIgxAcgpQAjgZAsgFQAvgBAsAPQAVAKASAQQAQAcAHAgQAFAUADAVIAAAtIgKAAQAEA6gWA6QgBAXgMATQgHADgHAAQALAMAOAIQAMAEANABQAhADAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAiQgKArgFArIARB5g");
	this.shape_67.setTransform(3.9,-19.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AmOF4IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAagUAYgXIAsggQAJgcgLgcQgLgjgGgjQABgVAEgTQAIg/ArgvQA0gTA5ADQA4APAnAoQAIAbAFAcQAHAZABAaIgKAoIAAApQgJAdgLAfQgBATgGATQgIAGgKABQALAMAOAIQAMAEANABQAhADAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_68.setTransform(3.9,-20);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AmOF4IAbhmQANglAFgmIAAg4QAFgZAOgUQAKgVAMgTQASgPAWgLQAagRAdgLQAmgEAmgHQAYgRAVgWQAjgWAUgiQgCgWgJgTQgKgigEgkIAFgtQAKg7ApgpQA0gTA5ADQAgAHAdAQQANAHALAKQAKAVAFAYQAKAhAGAhQgCAUgGAUQgCAPAAAPQgIAsgPAqIgEAeQgIAIgKACQALAMAOAIQAMAEANABQAhADAhAHQASAJARAOQAeASAZAYIAMAeQAOAgAFAiQgKAqgFArIARB6g");
	this.shape_69.setTransform(3.9,-20);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AmOF5IAbhlQANglAFgnIAAg3QAFgZAOgUQAKgWAMgTQASgPAWgLQAagRAdgLQAmgDAmgHQAYgSAVgWQAjgWAUgiQgBgTgIgQQgKgbgGgcQgBgkAFgjQAIgsAYgkQAhgYApgHIAPgDIAyAFQAtAQAiAhQAGAOACAQQAJAdAFAfIADAUIgFAJIgDAbIAAAjQgDANgFAMIgJAeIgGAPQgBAUgIATIgNAHQALALAOAJQAMAEANABQAhADAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_70.setTransform(3.9,-20.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnIAAgyQADgcAQgXQAKgVAMgTQASgPAWgLQAagRAdgLQAwgDArgRIAjgiQAlgXAOgnQgEgKgFgHQgLgdgGgeIAAgtQAFgyARguQAjgjAwgKIAZgFIAZAFQAvAIAnAbQAPAVAFAZQAJAdAGAfQgBAcgEAbIAAAfQgJAjgOAjQgBAWgMAVIgJACQAyAjBCAGQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_71.setTransform(3.9,-20.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnIAAgyQADgcAQgXQAKgVAMgTQASgPAWgLQAagRAdgLQAwgDArgRIAjgiQAmgXAMgnIgJgUQgKgcgGgcIAAgjQADhHAng6QAagRAggFIAZgFQANAAANADIAeAEIAZAMQAYALAUAUQAGAPACAQIASBLIgKAtIAAApQgDANgFAMIgPAtIgEAdQgIAFgKABQAOAPAQALQAMADANABQAhAEAhAHQASAJARANQAeASAZAYIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_72.setTransform(3.9,-20.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAngcQAHgNgBgQQgIgmgMgmQgEgSgBgRIAFgZQAEg6AggvQAmgYAugHIAUAAQAaADAZAIQAaAMAXARQAOAXAGAcQAKAiAEAkIgIAoIAAAaQgJAqgOArQgBANgEALQgKAKgMAHIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_73.setTransform(3.9,-20.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAagUAYgYIAZgUIAOgIQAJgegLgdQgOgtgDguIAFgZIAAgUQAHggAPgdQA0grBHgCQAlAHAiAQQAQAJAMANQAJAUAEAVQAJAbAFAcQgBAegEAeIAAAfQgFAUgIAUIgKAjQgDAPgGAPQgIAJgKAHIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_74.setTransform(3.9,-20.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AmOF6IAbhlQAMghAGghIAAg3QAAgNACgMQAKgVANgUQAGgQAKgOQASgPAWgLQAagRAdgLQAmgDAmgHQAVgQATgUIAegYIAPgIQALgUgCgXIgHgUQgMgjgFgkQABgfAEgdQAGgpAVgjQA3giBFgBQAiAHAfAQQANAHAKAKQALARADATQALAlAHAmIgFAeIAAAZQgJA1gSAzQgBANgEANQgIAFgKABIAAALIAtAXIBWANQAXAOAWARQAWANASATIAMAeQAOAgAFAiQgKArgFArIARB5g");
	this.shape_75.setTransform(3.9,-20.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AmOF5IAbhlQANglAFgnQgBgeABgeQAJgbAQgXQAJgWARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbIADgeQABgQgHgOIgLgjQgIgoABgpQAHg3AcguQAcgTAggHQA+gHA7AXQAPAJANAMQAKASAEAWQAIAbAFAcQADAMABANIgJApQABAWgCAXIgRAtIgJApQgLAJgMAGQAYAPAaANIBRAMQASAJARANQAjAVAYAgQATApAIAsQgKArgFArIARB5g");
	this.shape_76.setTransform(3.9,-20.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnQgBgfABgdQAJgbAQgYQAJgVARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbIADgeQABgRgHgNQgJgZgHgaQgDgeABgeQAEgwASgrQAjgjAwgKIAoAAQAwAGAqAaQAMAMAIAQIAAAMIAIAdQAFATADAVQgBAXgEAWIAAApQgGAcgLAbQgFAagKAXIgSAQQAYAQAaANIBRAMQASAJARANQAjAVAYAfQATAqAIAsQgKArgFArIARB5g");
	this.shape_77.setTransform(3.9,-20.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AmOF6IAbhlQANglAFgnQgBgeABgeQAJgbAQgXQAJgWARgRIAogYQAVgNAYgJQAmgDAmgHQAqgnAxgbQADgXAAgWIgWg8IgHgzIAFgZQADghAJggQAbgpAugSQAWgDAXABQAcAAAcAHQAaAIAWARQANASAGAVIANAyQAEAPABAPIgFApIAAAeQgKAmgOAlQgCARgGARQgIAFgKACIAAAKQAYAPAaANIBRAMQASAJARANQAjAVAYAgQATApAIAsQgKArgFArIARB5g");
	this.shape_78.setTransform(3.9,-20.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAg4QAFgZAOgUQAKgVAMgTQASgPAWgMQAagQAdgLQAmgEAmgHQAQgLAOgOIAogjQAKgGAIgJQAEgPgBgQQgOgvgMgwQABgdAEgbQAFguAagnQAhgZApgFIAZgGIAaAEQAsAJAkAcQAOATADAVQAKAlAGAnIgEAoQgFAugPAtIgMAsQgJAJgNACQAVAUAYAPQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_79.setTransform(3.9,-20.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAg4QAFgZAOgUQAKgVAMgTQALgKAOgHQAagSAdgOIBbgQQATgNAQgRIAjgdQAKgHAIgJQADgPAAgQQgOgvgMgwQABghAEghQADgaAIgYQA1g3BMgGQAxAJAqAbQAUAgAHAmIAIAkQgBAbgEAcIAAAjQgIAcgLAcQgEAXgJAVQgIAGgKAAQAWAcAhAOIBRANQASAJARAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLQADAgAHAhIAHBDg");
	this.shape_80.setTransform(3.9,-20.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmIAAg4QAFgZAOgUQAKgVAMgTQALgKAOgHQAagSAdgOIBbgQQATgNAQgRIAjgdQAKgHAIgJQADgPAAgQQgEgNgFgMQgMgigFgkIAAgzIAFgZQAGggAQgbQA2goBFgCQAvAKAnAaQAOATADAVIAHAPIALA9IgFAZIAAAeQgFAngOAkQgEAZgJAVQgKAJgNABQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_81.setTransform(3.9,-20.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUIAjgbQAUgggNglQgMgggFghQgChLAchCQAYgWAegMQARgFASgCIAjAAQAuAKAnAaQARAbAGAhQAHAbAEAdIgDAjQgBAngNAkQgJAvggAdQAXAXAbARQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_82.setTransform(3.9,-20.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AmOF9IAbhmQAMggAGghIAAg3QAAgNACgNQAKgVANgTQAGgQAKgOQASgPAWgMQAagQAdgLQAmgEAmgHQAVgPATgUQAXgRAUgSQAKgcgKgcQgLgdgHgfQgEgSgBgRIAFgZQAEg4AggtQASgOAWgIQAPgHATgCIAtAAQAsALAjAZQAQAZAFAeQAHAbAEAdQgBAXgEAWIAAAjQgFAVgJAUQgGAigQAdQgHACgHAAQAYAfAkAQIBRANQASAJARAOQAaAPAXASQALASAHAVQAOAfAFAjIgPBLQADAgAHAhIAHBDg");
	this.shape_83.setTransform(3.9,-20.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AmOF5IAbhmQANglAFgmQgBgfABgeQAJgaAQgYQAJgVARgSIAogXQAVgNAYgJQAmgEAmgHQAngjAugZQAFgagBgYIgJgVQgSgzgCg2IAFgZQADggALgdQBRhCBqAZQASAIAPANQAKARADASIAHAPIAKA4QAAAUgDAUIAAAjQgHAfgLAeQgGAdgQAYQgIACgHAAQAZAZAeAUQAMAEANABQAhAEAhAGQASAJARAOQAeASAZAYIAMAeQAOAgAFAiQgKArgFAqIARB6g");
	this.shape_84.setTransform(3.9,-20.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AmOF9IAbhmQANglAFgmQgBgfABgeQAJgbAQgXQAJgWARgRIAogXQAVgOAYgIQAmgEAmgHQAngjAugZQAEgYAAgWIgbhQQgDghABghQAHgtAUgnQAigfAsgLIAtAAQArAGAlAVQAVAdAGAjQAGAWADAXIAAA9QgBAXgGAWIgLAeQgHAegPAYIgPAHQAZAZAeAUQAMADANABQAhAEAhAHQASAJARAOQAeASAZAYIAMAeQAOAfAFAjQgKAqgFArIARB6g");
	this.shape_85.setTransform(3.9,-20.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AmOF+IAbhlQANglAFgmIAAgzQADgcAQgWQAKgVAMgUQASgOAWgMQAagRAdgLQAmgDAmgHQAVgQATgTQAXgRAUgSIAEgUQgBgVgHgUQgNgjgGgkIAAgtQAFg0AagrQAjgcAsgIIAZgDIAPADQArAFAkAWQAWAhAHApQAHAeABAfIgEAUQAAAZgDAZIgOAtQgGAbgOAVQgJADgKAAQAcAcAgAWQAMADANABQAhAEAhAHQASAJARANQAeATAZAYIAMAeQAOAfAFAiQgKArgFArIARB5g");
	this.shape_86.setTransform(3.9,-20.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQASgPAWgLQAagRAdgLQAmgDAmgIQAQgKAOgOIAegaQANgJAKgLQAEgPgBgPIgahbQgBggABghQAKhCAzgsQAVgJAXgCIAZgFIAZAFQApAGAjAYQAOAVAGAZQAJAgAFAhIgEAeIAAAuQgHAegMAeQgEAVgJATQgKAJgNACQAcAcAgAVQAMAEANABQAhAEAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_87.setTransform(3.9,-20.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQASgPAWgLQAagRAdgLQAmgDAmgIQAVgPATgTQAYgSATgSQADgRgBgSQgNgqgMgsIAAhGQADgjAOgfQAlgnAzgMQAPgEAPAAIAZAFQAgAGAdAQQAXAZAGAiQAHAYAEAaIAAA9QgFAmgOAlQgFAcgNAaQgJAFgJACQAcAcAgAVQAMAEANABQAhAEAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_88.setTransform(3.9,-20.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgVQAKgVAMgTQASgPAWgLQAagRAdgLQAmgDAmgIQAVgPATgTQAYgSATgSQADgRgBgSIgXhGIgGguIAEgoQABgdAKgbQAtg1BFgMIAUAAQAyALAnAdQAOAdAEAgQANBJgOBJQgLArgTAkIgPAHQAcAcAgAVQAMAEANABQAhAEAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_89.setTransform(3.9,-20.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AmOF/IAbhlQANglAFgnIAAg3QAFgZAOgUQAKgWAMgTQASgPAWgLQAagRAdgLQAmgDAmgIQAVgPATgTQAYgSATgSQADgRgBgSIgLgeQgQgvgDgxIAFgeQACgiAOgfQAJgMAKgJIAVgSQAVgJAXgEQAWgEAXAAQAoAIAkATQAUAXAHAfQAHAgAGAhIgCAuQgFArgOAqQgGAYgKAUQgLAHgMAAQAeAeAjAYQAMAEANABQAhAEAhAHQASAJARANQAeATAZAXIAMAfQAOAfAFAiQgKArgFArIARB5g");
	this.shape_90.setTransform(3.9,-20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},34).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(26));

	// Layer 3
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ah7IQQgGgJAAgJIABgIIgagXQgBgUADgVIgShLQgBgfgGgeQgLgbgHgcIggjPIgQgZQgKghgDgkIAAhHQAFgoALgoIAJgUIABgQQADgYACgaIgaAFQgcgBgbgHIgygJQgRgGgOgLQgNgHgKgKQgMgVAAgYIAAgtQAAgNACgMIARgjIANg0IMZAAIAAABIAFAaIAAAjQALA3AEA4QgEAUgIARIgSAJQggANghgBQgYgMgWgQIAABLQAIAzAQAyQAIA3gCA4IgMBAQgKAMgHANIgfDKQgHAfgMAdQgFAegBAfQgFAZgHAZQgHARAAASQAEASgDARIgWAQQgGAQgCANQgGAFgHACQgZAFgZgBQgLgCgIgFIgDgcQgGgSgHgRQgbhPAChTQAIg6AHg5IgFAAIgWAoIgTAMIgRgMIgRgoIgFAAIAOCCIAAA9QgHApgPAnQgJAUgHAVIgDAcQgIAFgKACIgKABQgdAAgZgMg");
	this.shape_91.setTransform(3.2,70.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-59,84.7,183.9);


(lib.reporter_clip3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjQIVQgDgKgKgIIgJAAQgMACgLgDQgVgRgPgUQgzhCgQhNQAPhDAXhAIAui3IACghQAHgiAVgbIAdgPQASgLAWgFIAiAAIAAgtQAGgXADgXQgJghgPgeIgEgnQgGgOgEgPQADghANgeIAOgoIAjg/QAggbAogMIAtAOQAVgJAZgEQAOAGAPAIQARAJAPAMQAZAnANAsIAPAdIAHAiQAIAfACAgIAEAzQgDAXgBAXQAKAlAFAlQgDAMgGALQBUAXAaBPQAAAXAEAWIAAAXQAGAoAJAoIANBEQALAmAHAlIgIAzQgfA2gvArQgSARgMASQgBALAHALIAMAcg");
	this.shape.setTransform(9.9,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjQIVQgDgKgKgIIgJAAQgMACgLgDQgVgRgPgUQgzhCgQhNQAPhDAXhAIAui3IACghQAHgiAVgbIAdgPQASgLAWgFIAiAAIAAgzQAGgWABgYQgJgdgNgcIgEgnQgGgOgEgPQADghANgeIAOgoIAjg/QAggbAogMIAtAOQAVgJAZgEQAOAGAPAIQARAJAPAMQAYAnAOAsIAPAdIAHAiQAIAfACAgIAEAzQgDAXgBAXQAKAlAFAlQgDAMgGALQBUAXAaBPQAAAXAEAWIAAAXQAGAoAJAoIANBEQALAmAHAlIgIAzQgfA2gvArQgSARgMASIAAABIAAAxg");
	this.shape_1.setTransform(9.9,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAZIAAgxQAAALAHAKIAKAcg");
	this.shape_2.setTransform(34.8,72);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjQIVQgDgKgKgIIgJAAQgMACgLgDQgVgRgPgUQgzhCgQhNQAPhDAXhAIAui3IACghQAHgiAVgbIAdgPQASgLAWgFIAiAAIAAgzQAGgWABgYQgJgdgNgcIgEgnQgGgOgEgPQADghANgeIAOgoIAjg/QAggbAogMIAtAOQAVgJAZgEQAOAGAPAIQARAJAPAMQAYAnAOAsIAMAXQAQAyAEA1IAEAzQgDAXgBAXIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQAQALALARQAIAfgBAfIAGAcIAAAXQAGAoAJAoIANBEQALAmAHAlIgIAzQgfA2gvArQgSARgMASQgBALAHALIAMAcg");
	this.shape_3.setTransform(9.9,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgVgRgPgUQgzhCgQhNQAPhDAXhAIAui3IACghQAHgiAVgbIAdgPQASgLAWgEIAiAAIAAg0QAGgWABgXQgKgegMgbIgEgoIgKgdQADghANgeQAhhaBNgzQAUAAAUAHIAQAGQAVgJAZgEQAOAGAPAJQARAIAPAMQAYAnAOAsIAMAXQAQAyAEA1IAEAzQgDAXgBAXIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQAQAMALAQQAGAfABAfIAGAcIAAAXQAGAoAJAoIANBFQALAmAHAkIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_4.setTransform(9.9,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgZgWgTgbQgtg8gOhHQAPhDAXhAIAui3IACghQAHgiAVgbIAdgPQASgLAWgEIAiAAIAAg0QAGgWABgXQgKgegMgbIgEgoIgKgdQABgiAPgdQAhhaBNgzQAUAAAUAHIAQAGIAdgLQAYABAWAMQARAIAPAMQAQAXAKAaQAgBNAMBTIAEAzQgDAXgBAXIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_5.setTransform(9.9,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgVgRgPgUQgzhCgQhNQAMg6AVg4QARhBAPhCQAMgoAJgoQABgcAJgcIAJgVQAMgJAPgGIAWgNQAfgIAgAAIAAg0QAGgWABgXQgKgegMgbIgEgoIgKgdQABgiAPgdQAhhaBNgzQAUAAAUAHIAQAGIAdgLQAYABAWAMQARAIAPAMQAPAXALAaQAgBNAMBTIAEAzQgDAXgBAXIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_6.setTransform(9.9,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgZgWgTgbQgtg8gOhHQAMg6AVg4QARhBAPhCQAMgoAJgoQACgcAHgcQAEgMAGgJQAMgJAPgGIAWgNQAfgIAgAAIAAg0IAHgcQgDgigPgdQgFgXgDgXIgKgcQADgtATgpQAghQBIgsQAaACAZAJQARgDARgGQAYABAWAMQARAIAPAMQAPAXALAaQAgBQAMBWIADAtIgDAuIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_7.setTransform(9.9,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgVgRgPgUQgzhCgQhNQAMg6AVg4QARhBAPhCQAMgoAJgoQACgcAHgcQAEgMAGgJQAMgJAPgGIAWgNQAfgIAgAAIAAg0QAFgUACgVQgJgdgNgbIgEgoIgIgRQgDgUABgUQAIgdAOgcQAghQBIgsQAaACAZAJQARgDARgGQAYABAWAMQAmAaAUArQAgBQAMBWIADAtIgDAuIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_8.setTransform(9.9,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgZgWgTgbQgtg8gOhHQAMg6AVg4QARhBAPhCQAMgoAJgoQACgcAHgcQAEgMAGgJQAMgJAPgGIAWgNQAfgIAgAAIAAg0QAFgUACgVQgJgdgNgbIgEgoIgIgRQgDgUABgUQAIgdAOgcQAghQBIgsQAaACAZAJQARgDARgGQARgBARAIQApAWAYAqIASAzIAMAXQAPAyAEA1IADAtIgDAuIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_9.setTransform(9.9,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgZgWgTgbQgtg8gOhHQAMg6AVg4QARhBAPhCQAMgoAJgoQACgcAHgcQAEgMAGgJQAMgJAPgGIAWgNQAfgIAgAAIAAg0QAFgUACgVQgJgdgNgbIgEgiQgJgfgBggQAIgdAOgcQAfhRBJgrQAaACAZAJQARgDARgGQAYABAWAMQAmAaATArIAOAoIAMAXQAPAyAEA1IADAtQgDAaAAAaIAPA5QgCASgHAQQApAEAhAZQANAKAKAMQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_10.setTransform(9.9,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjRIVQgOgRgYgBQgKgEgIgHQgSgSgPgWQgtg8gNhHQAMg6AVg4QARhBAPhCQAMgoAJgoQACgcAHgcQAEgMAGgJQAMgJAPgGIAWgNQAfgIAgAAIAAg0QAFgUACgVQgJgdgNgbIgEgiIgMgiQACghAMgeQAiheBQg1QAaACAZAJQARgDARgGQAYABAWAMQAmAaATArIAOAoIAMAXQAPAyAEA1IADAtQgDAaAAAaIANAzQAAAUgHAUQAUABAUAGQAgASAZAaQALAlAAAlIAGAcIAAAXQAGAlAJAlIANBFQALAmAHAkIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_11.setTransform(9.9,21.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgZgWgTgbQgtg8gOhHQAMg6AVg4QARhBAPhCQAMgoAJgoQACgcAHgcQAEgMAGgJQAMgJAPgGIAWgNQAfgIAgAAIAAg0QAFgUACgVQgJgdgNgbIgEgiQgJgfgBggQAIgdAOgcQAfhRBJgrQAaACAZAJQARgDARgGQAYABAWAMQAmAaATArIAOAoIAMAXQAPAyAEA1IADAtQgDAaAAAaIAPA5QgCASgHAQQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_12.setTransform(9.9,21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgVgRgPgUQgzhCgQhNQAMg6AVg4QARhBAPhCQAMgoAJgoQACgcAHgcQAEgMAGgJQAMgJAPgGIAWgNQAfgIAgAAIAAguQAFgdABgcQgKgYgLgWIgEgoIgIgRQgDgUABgUQAEgPAGgNIAehFQAdg4A5gcQAaACAZAJQARgDARgGQAYABAWAMQAmAaAUArQAgBQAMBWIADAtIgDAuIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_13.setTransform(9.9,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgVgRgPgUQgZgigVgjQgOgYgHgbQAHhGAahDQARhBAPhCQAMgoAJgoQABgcAJgcIAJgVQAMgJAPgGQASgLAVgJQAXgCAXABIAAg0QAGgWABgXQgKgegMgbIgEgoIgKgdQABgiAPgdQAhhaBNgzQAUAAAUAHIAQAGIAdgLQAYABAWAMQARAIAPAMQAQAXAKAaQAgBNAMBTIAEAzQgDAXgBAXIAHAoQAHAQABASQgDAMgGALQAoAFAiAYQANAJAKANQAKAiABAiIAGAzQAFAoAKAoIAPBQQAKAfAGAgIgIAzQgfA2gvArQgSARgMASIAAABIAAAyg");
	this.shape_14.setTransform(9.9,21.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjQIVQgDgKgKgIIgJAAQgMACgLgDQgVgRgPgUQgZgigVgjQgOgYgHgbQAJhPAdhLIAui3IACghQAHgiAVgbIAdgPQASgLAWgFIAiAAIAAgtQAGgXADgXQgJghgPgeIgEgnQgGgOgEgPQADghANgeIAOgoIAjg/QAggbAogMIAtAOQAVgJAZgEQAOAGAPAIQARAJAPAMQAZAnANAsIAPAdIAHAiQAIAfACAgIAEAzQgDAXgBAXQAKAlAFAlQgDAMgGALQBUAXAaBPQAAAXAEAWIAAAXQAGAoAJAoIANBEQALAmAHAlIgIAzQgfA2gvArQgSARgMASIAAABIAAAxg");
	this.shape_15.setTransform(9.9,21.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjQIVQgDgLgKgIIgJABQgMABgLgDQgVgQgPgVQgZghgVgjQgOgZgHgbQAHhGAahDIAzjIIACghQAHgiAVgbIAdgPQASgLAWgEIAiAAQgBgaADgZQAGgUAEgUQgIgegPgcQgFgXgDgWIgKgdQACgjAOghQAhhYBNgvQAUgCAUAHQAFAEAHACQATgEATgHQAMAAALAEQAbAMAXASQAZAnANAtIATAoQAKA+AHA/QAAARgEARIAAAXIAHAoQAHAQABASQgDAMgGALQAoAGAiAYIAVARQAHANAEAPQAGAQAAARQgCAfAEAgQAGAnAJAoIANBFQALAmAHAkIgIA0QgfA1gvAsQgSAQgMASIAAABIAAAyg");
	this.shape_16.setTransform(9.9,21.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjPIVQgFgKgJgIIgVAAQgcgNgTgZQgZgigVgjQgOgYgHgbQAHhHAahCQARhCAPhBIAThFIACghQAahEBHgYIAoAAQgDgcADgcQAFgXABgXIgJgdIgSgcIgEgiQgJggABgfIAOgiQAjhfBWgqQAPAAAOAFIAMAHIAmgLQAQABANAIQAXAKAVAQQAbApAOAwIAQAiIADAdQAHAnADApIAEAiQgDAWgBAXQAHAdAIAdQAAARgEARQAmAHAfAWIAVASQAKAVAHAXQABAOgDAOIAEAcIAAAXQAGAoAJAoIAVBsQAGARAEASIgIAzQgfA2gvArQgSARgMASIAAABIAAAxg");
	this.shape_17.setTransform(9.9,21.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjPIVQgFgKgJgIIgVAAQgcgNgTgZQgZgigVgjQgOgYgHgbQAHhHAahCIAjiPQALgiAHgiIAAgWQAHgbAMgYQAOgOASgJQATgMAVgGIAuAAQgCgfADgfQAHgRADgSQgKgdgRgcIgRhEQACgkAMggQANguAZgoQAngqA4gJIAhAJQASgCAQgGQArAKAkAdQAYArAMAwQAKATAHAVIAAAWIAPBhIgCAjIAEAWIABAjIAKAiIgGAXQAmAHAfAWIAVASQAKAVAHAXQACAQgBARIABAuQAGAoAJAoIAPBWQAKAcAGAdIgIAzQgfA2gvArQgSARgMASIAAABIAAAxg");
	this.shape_18.setTransform(9.9,21.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AjPIWQgOgSgZAAQgNgGgKgKQglgqgcgxQgOgYgHgbQAHhHAahCIAjiPQALgiAHgiIAAgWQAHgbAMgYQAOgOASgJQATgMAVgGIAuAAQAAglAHglQAHgNABgPQgLgYgOgWQgLgcgGgdIgFgzIAKgdQAihjBaguQAaADATAIQAagFAZgCIASAJQAXALAUASQAUAgANAlQANAhAIAjIALBWIAGBnQAJAlgEAlQAVADAUAHQAaARAXAUQAGAKADALQAKAvAAAyQADAcAHAcIAUBzIAOAzQAAARgEARIgCAXQgbAwgoAmQgXAWgSAYIAAABIAAAxg");
	this.shape_19.setTransform(9.8,21);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AjRIXQgUgUghgEQgOgPgMgRQgZgigVgjQgOgYgHgbQAGhHAbhCIAliaQAKgaAGgZIAAgcQAHgbAMgYQAOgOASgJQATgMAVgGIA0AAIAAgzQAHgdACgcQgPgegRgbIgCgRQgJglgBglQAHgnAOgkQAKgbARgYQAMgMAOgKQAigXApgFIAhAKQAXgDAWgBQBAAiAgBDIATBFIABAzIAKAzIAAAjIAGAnQgBAUACAVQAKAZgGAaQAYAEAWAIQA0AmALA/IAAA0QADAcAHAcIAUBzIAOAzQAAARgEARIgCAXQgbAwgoAmQgXAWgSAYIAAABIAAAxg");
	this.shape_20.setTransform(9.8,20.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AjRIXQgUgVghgDQgTgUgRgYQgkgzgVg5QAJhSAdhOQAPg2AMg2QANgoAIgoIAAgWQAHgbAMgYQAOgOASgJQATgMAVgGIA0AAIAAgnQAIglAGggQgNgbgSgYQgHgSgBgQIgIgSQgDgXABgWQARhbA/hBQAOgIAPgHQATgEAVgBIAnAKQATgDAUgBIASAJQAVAJATAPQAOASAJAWQAMAWAIAXIAEAXQAKAfAGAgIgDAeIAIAmIAGBiQADAUAGATQACAPAHANQAPAIASAFQAaASAXAVIAOAzIAABEQAGAoAJAoIAPBWQALAiADAiQgHAugZAoIg6A5QgOANgKAQIAAABIAAAxg");
	this.shape_21.setTransform(9.8,20.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AjQIYQgJgRgSgGQgOAAgNgCIgogxQgsg/gJhKQAPhAAXg+QAPg2AMg2IATg/IACghQAIgiAPgcQA5glBEACIAAg5QAIgdACgdQgNgYgRgVQgHgUgDgUIgHgRIADgXIgEgdIAMhEIASgdQAmguA4gSQANgDAPABIAiAJQATgDAUgBIAuAXQAZAYAQAfIAOAdIAEAdQAKAkAGAmIAAAiIALBWIAAAoQADAWAGAXQACAMAHAKQAPAIASAFQAaASAXAVQAFALACAMQAGAwABAwQAGAoAJAoIAPBWQALAiADAiIgFAoQgLAYgQAWIg6A5QgOANgKAQIAAABIAAAyg");
	this.shape_22.setTransform(9.8,20.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjQIYQgJgQgSgGQgOAAgNgCIgogyQgsg+gJhLQAPhAAXg9QAPg2AMg3IATg+IACgiQAIghAPgdQA5gkBEABQABglAGglQAFgUABgUQgOgbgTgYQgJgZgFgbQgBgqABgrQAPhDA1gtQAZgLAbgEIAXgEQAQADARAGQAVgBATgDQAPAEAOAIQAOAFANAIQASAUANAYQALAQAIASQAGAcAEAdQAKAlADAlQgDARAAASQAHAtAEAuQACAdAHAcQACAMAHAKQAPAIASAFQAaARAXAWQAQA2gCA7IAeCsQALAiADAiIgFAoQgLAYgQAWIg6A5QgOANgKAPIAAACIAAAxg");
	this.shape_23.setTransform(9.8,20.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AjSIYQgWgXgkgGQgVgXgQgbQgqg8gIhIQAShIAahGIAahtQANgkAIgmIAAgWQAIgfAVgYIAdgOQANgHAPgEQApAEAWgaIAAgjQAFgcACgdQgNgfgUgaQgOgvAAgyIAAguQgBgOADgOQAMgWASgRQAmgkAygPIAcgBQAVAFAYACIAXgCQAeAJAbAQQAMAMAJAPQAUAeAOAgIACAjQALAqAGArIgFAdIAOBVIgDAdQADAUAGAUIAFARQAWAPAbAKQATAPASARQAMAeACAgQAFBiATBgIAUBWIgFAzQgUAogeAiIguAoQgIAIgFAJQACARAJASIAGAQg");
	this.shape_24.setTransform(9.8,20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjSIYQgWgXgjgGQgVgXgRgbQgcgqgUgsQgDgZABgaQAPg9AXg7IAuimQAHg1AUgwQAMgMAOgHQAWgMAYgEQAlADAUgZIAAgjQAGgeADgbQgQgggUgfQgMgtgBguIAAguQAIgmAageQAygsBBgHIAZAHIAwgBQAMAEALAGIAcAOQAXAZASAeQALATAFAVIAAAXIAKAdQAIAngFAoQAAASAEARQAHAkAFAmQgBAaAEAZIAFAXQAWAPAbAKQAUAPARARQALAbADAdIAAA5IAkDIIAIAdIgGAzQgVAsgiAkIgoAiQgIAIgFAJQACARAJASIAGAQg");
	this.shape_25.setTransform(9.7,20.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjQIYIgCgFQgGgIgHgHQgXgCgVgHQgVgXgRgbQgcgqgUgsQgDgZABgaQAPg9AXg7IAuimQAHg1AUgwQAMgMAOgHQAWgMAYgEQAlADAUgZIAAgoQAHgcADgYQgKgVgPgTQgKgTgFgVIgIgXIAEgcIgDgRIADg/QAMgqAhgcIATgUIAbgJQAOgGAPgDQAjABAkAGIAZgCQAXAGAWANQAdAbASAiIAOAdIAEAcQAMAzADA0QgBAZABAaIAMA/QgBAdAEAcIAFAXQAWAPAbAKQAUAPARARQAMAeACAgQAGBiATBgIATBWIgGAzQgUAtgjAjIgoAiQgIAIgFAJQACARAJASIAGAQg");
	this.shape_26.setTransform(9.7,20.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjOIYIgDgFQgGgIgHgHQgXgCgVgHQgVgXgRgbQgjg0gRg5IADgcQAThFAZhEIAniVQAHg1AUgwQAMgMAPgHQAVgMAYgEQAlADAVgZIAAgoQAHgaACgaQgOgbgRgYQgGgRgDgRIgIgSQABgWADgXIAAgoQAUhQBIgqQAQgHASgCQAZABAZAEIAoAAQAPADAOAIIAcAOQAOAOAKASQAOAWAMAYQAIAlAFAlIAGAuIAAA5IALBEQAAAgAFAfQAAAMADALQAWAPAbAKIAmAgQAMAeACAgIAAAoIALBEQAIA8ALA8IANA0IgFAzQgXAwgmAmQgcAUgUAZIAAAzg");
	this.shape_27.setTransform(9.6,20.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAZIAAgxQACARAJAQIAGAQg");
	this.shape_28.setTransform(34.8,71.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AjOIYIgDgFQgGgIgHgHQgXgCgWgHQgUgXgRgbQgjg0gRg5IADgcQAThFAZhEIAniVQAIg0ATgxQAMgMAPgHQATgKAVgGQAoABAXgdIABguQAIgUAAgUQgOgbgRgYQgLgigCgjIAAgtIAGgjIAAgWQAKgaATgUQAngmA0gNQAZABAZAEIAuAAQASAFAQAKIAXAPQAVAaAOAeIAOAcIAEAoQAIAlAFAmIgDAiQAGAqAFArIAAAoQAHAZgBAbQAyAQAnAjQAQAugCAyIAeDCIANA0IgDAcQgGAkgTAhQgXAagbAXQgVAQgPAUIAAACIAAAxg");
	this.shape_29.setTransform(9.6,20.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjRIYQgZgYgmgKQgTgYgQgbQghgwgQg3IAEgiQAPg6AWg4QAQg5ANg5IAWhFIACghQAHgbAMgYQAMgMAPgHIAcgOIBFgHIAGgjIAAgWQAIgaABgaQgOgagRgZQgMgtgBguIAGguQABgaAHgaQAsg6BEgVIBDAFIAXAAQA8ATAgA3QALAUAJAUIAEAjQAJAeAHAgQgBAPgDAOQAAAUAEAUIAFBsQAGAXAEAXIgEAGQAyAQAnAjQAQAugCAyIAeDCIANA0IgDAcQgGAkgTAhQgaAdgdAaQgTANgMARIAAACIAAAxg");
	this.shape_30.setTransform(9.6,20.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjPIYQgZgYgmgKQgTgYgQgbQghgwgRg3IAEgiQAPg6AXg4QAOgzAMg0IAZhQIACghQADgPAGgOIAKgWQAMgLAPgIQAugVAzAAIAHhFQAJgTgBgVQgPgagQgZQgMgqgBgsQADggAHgfIAEgiQAHgMAJgLQAnguA5gQQAZABAZAEIAiAAQAwAHAkAhQALATAJAVQAIAQAGASIAEAjIAIARIAHAtIgBAdQgBAfACAgIAGAoQgBAaADAZQAJAWgFAYQAaAHAZAMQAnAeAQAvIgDAcQABAYAEAWQAHBIAMBHQAOA4ABA6QgUA+gwAuQgZATgRAVIAAACIAAAxg");
	this.shape_31.setTransform(9.4,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjMIYQgIgNgNgIQgUgBgTgHQgVgXgQgbQgjg0gSg5IAEgiQAOg6AYg4QARg8APg8IATg/IACghQAIgiAUgbIAdgOQASgLAWgFIAuAAIAHhFIAIgRQgIgogXgiIgEgXQgHgfgCggQADgdAGgcQADgUAFgUQAqhABIgVIBPAFQAwAHAkAhQAOAZAMAbQAIAWAEAXQAJAlAGAlIAAA/IAGAdIAAAXIAGAiQgEAQAAASQAGAZADAbQAjAFAcAWIAVASQAKAWAHAXQAAASgEAQIAGAoQAGBIANBHQAQA+gDA/QgYA7gwAsQgVAPgPATIAAACIAAAxg");
	this.shape_32.setTransform(9.3,20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjMIYQgIgNgMgIQgUgBgTgHQgVgXgRgbQgig0gTg5QABgRADgRQAKgpARgnQAYhMAThOQAMglAJglQADgpAVglQAPgMASgHIAdgPQAbgCAeABQABgjAHgiQAGgOACgOQgNghgSgeIgEgdIgIgXQgCgZABgaQAGgaAJgZIADgdQAIgPAMgNQAug1BFgEIAcAFQAZgDAbAAQALAFALAIQAVALARAPQAJANAGAOIAUAuIADAXQALAnAFAoIAFBtQAFAZABAaIgDAXQAGAZADAbQAiAFAdAWIAVASQAJAWAIAXQABAOgDAOQAAAUAEAUIAAAdIASB4QAQA+gCA/QgZA7gvAsQgWAQgPASIAAACIAAAxg");
	this.shape_33.setTransform(9.3,20.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AjMIYIgPgcQgTAHgVgEQgSgTgQgYQgng5gWg/QABgOADgOQAMg1AUgyQAYhKARhKQALggAHgfQADgpAVglQAPgMASgHIAdgPQAbgCAeABQABgjAHgiQAIgTgBgVQgPgagPgZIgEgdQgHgYgCgaQAThzBZhEQAUgEATgCIAuALIAcgGQAPADAOAIQAXAMAUASIAPAcQAOAhAJAjQALAoAFAoIAAAdIAFAiIAAAoIAGAiIAAAoIAGA0QAmAGAeAaQALAIAJALIAFARQAHASADAVIgEAXIAEAcQAFBLANBKQAQA+gCA/QgZA7gvAsQgWAQgPASIAAACIAAAxg");
	this.shape_34.setTransform(9.3,20.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AjMIWIgPgcQgTAHgVgEQgSgTgQgYQgng5gWg/QABgOADgOQAMg1AUgyQAWhDAQhGIATg5QADgRgBgQQADgTAIgPQAFgPAIgNQAPgLASgIIAdgOQAbgDAeABQAAgjAIgiQAGgOADgOQgNgkgUghQgQhbAhhWQApg6BDgYQAXACAVAKQAUgBAUgDQApALAfAdQAVAjAOAnIACAXIAKAXIAHAtIgDAYIAIAtIAAAiIAGAiIAAAuIAJAdIgDAXQAmAHAeAZQALAIAJALIAFARQAHATADAUIgEAXIAEAdQAEA5ALA5IADAiQAQA+gCA/QgZA7gvAsQgWARgPASIAAABIAAAxg");
	this.shape_35.setTransform(9.3,21);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AjMIVQgLgOgPgIQgRAAgQgIQgVgXgRgbQgigzgTg5QABgUAEgUQAQg3AVg2IAmiPQAJgWAGgXQADgsAVgoQAPgLASgIIAdgOQAbgDAeABQAAgmAIgkQAGgOADgPQgMgegTgbQgGgWgDgYQgFgWAAgXQADgPAGgOIAUg5QAQgZAXgVQATgUAbgKQATgIAUAAIAiAOIAigEQAmAIAdAaQATAeAPAhIAIAoQAIASADAWIAAAiIAJAoIACAzIAGAjIAAAoIAKAcQgBAOgDAPQAmAHAeAZQALAIAJALIAFARQAGARAEARIgEAcIAEAdQAFBKANBKQAQA+gCBAQgZA6gvAsIgXAVQgJAFgFAJQAAAMAHAKIALAdg");
	this.shape_36.setTransform(9.3,21.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AjMITQgbgWgggJQgUgWgSgbQgigzgTg5QABgSADgRQAMgyAUgvQAVhEARhFIAMgoQAFgOAEgOQADgsAVgoQAPgLASgIIAdgOQAegDAhABQgIglAKglQAHgQAEgPQgOgcgTgbQgKgcgEgdQALhUAyhGQAigiAvgMQAWAGAXAJIAXgDQAhADAeAQQAUAWAPAbIAPAdIAHAoQAIASADAWIAAAiIAJAoIAIBKIAAAoIAKAdQAAARgEARQAmAHAeAZQALAIAJALIAFARQAGARAEARIgEAcIAEAdQAEA5ALA5IADAiQAQA+gCBAQgZA6gvAsIgXAVQgJAFgFAJQAAAMAHAKIALAdg");
	this.shape_37.setTransform(9.3,21.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjMITQgbgWgggJQgUgWgSgbQgigzgTg5QABgUADgUQAMgvAUgtQAVhEARhFQANgiAIgiQADgsAWgoQAPgMARgHIAdgOQAbgDAeABQgBgaADgZQAJgbAFgZQgNgfgSgaIgEgXQgGgXgDgWQABgbAKgZQAMgkASggQArg1A/gQIAoAPIAogDQAnAKAbAeQARAYAMAbIAIAoQAHAQAEASIAAAiIAJAuQAGAqACAsQgBAXADAWIAIASQAAARgEARIAiAHQAPAJAOALIAVASQAUA2gBA8QAEA5ALA5IADAiQAQA+gCBAQgZA6gvAsIgXAVQgJAFgFAJQAAAMAHAKIALAdg");
	this.shape_38.setTransform(9.3,21.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjNITQgbgWgggJQgUgWgSgbQgVgigSgiQgJgUgFgUQABgUADgUQAMgvAUgtQAVhEARhFQANgiAIgiQADgsAWgoQAPgMARgHIAdgOQAbgDAeABQgBgaADgZQAJgbAFgZQgNgfgSgaIgEgXQgGgXgDgWIABgdIAchEQAshFBKgXIAuAPQAPgFATgCQAqAPAeAiQAVApAKAtIAKAXIAHA/QAHAnADAoIABA/IAKAjQAAARgEARQAmAHAeAZQAOAKAJAPQAMAxAAA1QAEA5ALA5IADAiQAJAlAHAlQABAmgJAkQgXAmggAfIgcAbQgMAIgIALIAAABIAAAyg");
	this.shape_39.setTransform(9.4,21.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjNITQgbgWgggIQgUgXgSgbQgVghgSgjQgJgUgFgUQABgUADgUQAMgvAUgsQAWhEAQhFQANgjAIgiQADgsAWgoQAPgMARgHIAdgOQAbgDAeABQgBgdADgcQAIgXAEgXQgNgegQgbIgEgWQgJgmABglIAchEQAohABEgbQANgBAOACQAOAHAPAFIAcgIQAPADAOAHQAZAJASAVQAYArANAwIAKAXQAFAgACAfIAKBFIABBQIAKAiQAAARgEARQAXAEAXAJIAWATQAMAIAIALQAJAZAGAaIAABQIASB9QAOA4ACA6QgQA4gpApQgaAcgfASIAAA5g");
	this.shape_40.setTransform(9.4,21.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAcIAAg3IASA3g");
	this.shape_41.setTransform(34.5,71.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AjNIUQgbgXghgIQgUgWgRgbQgVghgSgjQgJgUgFgUQABgUADgUQAMgvAUgtQAWhDAQhGQANgiAIgiQADgsAWgoQAPgMARgHIAdgOQAbgDAeABQgBgdADgcQAHgUAEgUQgLghgRgeIgNg/QACgdALgcIAQgtQAig4A4ggQARgHARABIAXAJIAJAGIAegHQAtAJAhAfQAZArAMAwQAKAWAHAYIAAAcIAFAjIAAAXIAGAcIgCATIAEBDIAIAXQAAARgEARQAXAEAXAJIAWATQAMAIAIALQAJAZAGAaIAABPIASB+QAOA4ACA6QgQA4gpApQgaAcgfASIAAA5g");
	this.shape_42.setTransform(9.4,21.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AjKIVQgcgYghgHQgVgWgPgbQgjgzgSg5QAAgUAEgUQAMgvAUgtQAVhEARhFQAMgiAJgiQADgsAVgoQAPgMASgHIAdgOQAbgDAeABQgBghACgeQAIgQAEgSQgNgigRgdIgDgcQgIgcABgeQAFgSAIgQIAOgoQAMgYARgVQAMgSAQgPQAQgJASgGQANgHAOgBQAPADAOAHIAJAHIAfgHQAsAGAiAeQAWAnANAtQAMAbAGAeIAJBKQACAtABAuQgBASACARQAGANAEAPIgGAdQAYAEAWAJIAXATQALAIAJALQAKAbAEAdIAABKIARBzQASBPgIBQQgVAjgdAcQgZAcggASIAAA5g");
	this.shape_43.setTransform(9.1,21.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AjLIVQgcgYghgHQgTgWgRgbQgVgigSgiQgJgUgFgUQAAgUAEgUQAMgvAUgtQAVhEARhFQAMgiAJgiQADgsAVgoQAPgMASgHIAdgOQAbgDAeABIAAgzQAJgbAAgfQgKgYgOgVQgDgRgCgRQgHgfABggIAOgiQAlhbBTgtQAaAFAYAKQAPgCAOgFQASgBAQAIIAdAOQAaAdAPAmIALAoIAOAcQADARgBARQAGAkAEAlQgBAxADAyIALAtIgGAdQAYAEAWAJIAXATQALAIAJALQAKAbAEAdIAAA5QAEArAIArIANBWQAMA7gKA8QgUAjgeAcQgZAcggASIAAA5g");
	this.shape_44.setTransform(9.2,21.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AjLIVQgcgYghgHQgTgWgRgbQgVgigSgiQgJgUgFgUQAAgUAEgUQAMgvAUgtQAVhEARhFQAMgiAJgiQADgsAVgoQAPgMASgHIAdgOQAbgDAeABQgBghACgeQAJgSgBgWQgMgbgNgYIgDgiQgIgfABggIAOgiQAfhPBCgxQATgIAUAAIAiAOQASgDARgGQAPACANAIQAVAJATAOQAcAtANA1IAOAcQAGAfACAgIAGAiIAABWQgBAQACASQAGAQAEASIgGAdQAYAEAWAJIAXATQALAIAJALQAKAbAEAdIAAA5QAEArAIArIANBWQAMA7gKA8QgUAjgeAcQgZAcggASIAAA5g");
	this.shape_45.setTransform(9.2,21.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AjNIVQgbgXghgIQgUgWgRgbQgVghgSgjQgJgUgFgUQABgUADgUQAMgvAUgtQAWhDAQhGQANgiAIgiQADgsAWgoQAPgMARgHIAdgOQAZgDAaABIAIhFQAGgNACgPQgLgegOgbIgDgiQgIgfAAggIASgoIAEgRQANgbASgZIAUgcQAZgVAfgMQAWgBAXAIIARAGIAcgJQAhAIAeAUQAgAsAOA2IAPAcQAFAcACAdIAGAjIAABhQAAARACARQAGARAEARQgEAPgIAOQAbADAZAKIAWATQAMAIAIALQALAeAEAgIAABEIASB4QAMA5AEA5QgDAVgFATQgUAjgdAcQgaAcgfASIAAA5g");
	this.shape_46.setTransform(9.4,21.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AjNIVQgbgXghgHQgUgXgRgbQgVghgSgjQgJgTgFgVQABgUADgUQAMgvAUgsQAWhEAQhFQANgjAIgiQADgsAWgoQAPgLARgIIAdgOQAZgDAaABQABgjAHghQAEgLADgMQgMgngOgjIgCgjIgIgRIABgiQAIgUAKgUIAKgcQAJgSAMgRQAegtAygVQATgDAUAHQAKAFANADIAcgIQAhAHAeATQAhAsANA3IAPAdIADAcQAIAiACAjQgCA5ACA5IAKAiQAAAVgKATQAbADAZAKIAWATQAMAIAIALQALAeAEAgIAABFIASB4QAMA4AEA6QgDAUgFAUQgUAigdAcQgaAcgfASIAAA5g");
	this.shape_47.setTransform(9.4,21.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AjNIVQgbgYghgHQgVgWgQgbQgig0gTg4QABgUADgUQAMgvAUgtQAWhEAQhFQANgiAIgiQADgsAWgoQAPgMARgHIAdgOQAZgDAaABQAAgXACgXQAHgXAFgWQgMgngNgkIgCgiQgGgNgCgPQAGghANgeIAKgdQALgUAOgUQAcgqAwgTQAdABAbAKQARgCARgFQAYABAWAMQAqAlATA1IADAXIAPAcQAKA7ACA9IADAXIgHAoQACAUAEAUQAGAQACASQgDAPgHAOQAbADAZAKIAWATQAMAIAIALQALAeAEAgIAABEIASB4QAMA5AEA5QgDAVgFATQgUAjgdAcQgaAcgfASIAAA5g");
	this.shape_48.setTransform(9.4,21.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AjNIVQgbgXghgHQgVgWgQgbQgigzgTg6QABgUADgTQAMgvAUgtQAWhEAQhFQANgiAIgiQADgtAWgnQAPgMARgHIAdgOQAZgDAaABQAAgXACgXQAHgVAFgVQgLgogOgmIgCgiQgGgNgCgQQAGggANgeQAnhbBTgoQAUACATAIQAXgCAXgGQAaAIAZAOQAnAsANA5IAPAdQAFATABAUIAKBtIgHAoQACAUAEAUQAGAQACASQgDAPgHAOQAbADAZAKIAWATQAMAIAIALQALAeAEAgIAABEIARByQAMA8AFA8QgOA7grAsQgaAcgfASIAAA4g");
	this.shape_49.setTransform(9.4,21.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AjNIVQgbgXghgHQgUgWgRgbQgVgigSgiQgJgUgFgVQABgUADgTQAMgvAUgtQAWhEAQhFQANgiAIgiQADgtAWgnQAPgMARgHIAdgOQAZgDAaABQgBgaADgZQAHgUADgVIgXhKIgCgiQgGgNgCgQQAGghAOgdQAmhbBTgoIAWABIATALIAmgLQAVACATAJIAgAYQAaApAMAwQANAfAKAgQAEAtAAAuIADAXIgHAiIAOBWQgEAMgGALQAbADAZAKIAWATQAMAIAIALQAJAZAGAaIAABPIASB+QAOA4ACA6QgQA3gpAqQgaAcgfASIAAA4g");
	this.shape_50.setTransform(9.4,21.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AjNIWQgbgVgggJQgUgXgSgaQgVgigSgiQgJgUgFgVQABgUADgTQAMgvAUgtQAWhEAQhFQANgiAIgiQADgtAWgnQAPgMARgHIAdgOQAZgDAaABQgBgaADgZQAHgUADgVQgJgggMgeIgCgdIgKgiQACgUAEgUQAGgSAIgQIATguIAUgdQANgVASgRQAdgSAhgDQALAEAKAGIAJAFIAPgFQAOgGAPgBQAhAKAeAUQAKAMAHAOQAPAfAJAgIANAdQAIAdAEAeQADAPABARIgCAoIADAXIgGAoQAIAoAFAoQgEAMgGALQAbADAZAKIAWATQAMAIAIALQAJAZAGAaIAABPIASB+QAOA4ACA6QgQA3gpAqQgaAcgfASIAAA4g");
	this.shape_51.setTransform(9.4,21);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AjNIXQgbgWgggJQgUgWgSgbQgVgigSgiQgJgUgFgUQABgUADgUQAMgvAUgtQAVhEARhFQANgiAIgiQADgtAWgnQAPgMARgHIAdgOQAZgDAaABQgBgaADgZQAGgSAEgRQgIgjgNghIgEgoIgIgRQgBgMADgLIAEgdIAOgcQAghPBCgxQARgGARABQALADAKAGIAJAGIAPgGQAUgHAUABQA3AdAdA3IAJAoIANAXIAMAuQADAqgBArIADAXIgGAiIANBWQgEAMgGALQApAFAhAbQAOAKAJAPQAMAuAAAyQAGA/AKA+IACAdQAJAlAHAlQABAmgJAkQgXAmggAfIgcAbQgMAIgIALIAAABIAAAyg");
	this.shape_52.setTransform(9.4,21);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AjMIXQgbgWgggJQgUgWgSgbQgigzgTg5QABgUADgUQAMgvAUgtQAVhEARhFIAMgoQAFgOAEgOIAAgWQAIghARgdQAPgMARgHIAdgOQAYgDAbABQgBgaADgZQAHgXABgXQgJgegKgbIgEgoIgIgRQgBgMADgLIAEgdIAOgcQAghPBCgxQARgGARABQALADAKAGIAJAGIAPgGQAUgHAUABQAyAYAcAxIAPAzQAMAfALAgQAFAtgBAuIADAXIgHAiIAOBWQgEAMgGALQAbADAZAKIAWATQAOAKAJAPQAMAuAAAyQAGA/AKA+IACAdQAQA+gCBAQgZA6gvAsIgXAVQgJAFgFAJQAAALAHALIALAdg");
	this.shape_53.setTransform(9.3,21);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AjMIVQgbgVgggJQgUgXgSgaQgigzgTg6QABgWAFgXQANgsARgqQAVhEARhFIAMgoQAFgOAEgOIAAgWQAIghARgdQAPgMARgHIAdgOQAYgDAbABQgBgaADgZQAGgVACgUQgCgRgFgRQgJgQgFgSIgCgiQgHgQgCgTQAGghAPgdQAhhSBHgwQAWgDAXAHIANAHIAPgFQAOgGAPgBQAXAFAXANQAqAuAQA9IAOAdIADAWIAHARIAAARQADAuAAAuIgEAtQAJAmAFAlQgEAMgGALQApAFAhAbQALAIAJALIAPAzIAAAzQAGA+AKA/IACAdQAQA+gCA/QgZA7gvAsIgXAVQgJAFgFAJQAAALAHALIALAcg");
	this.shape_54.setTransform(9.3,21.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AjOIVQgbgVghgJQgUgXgRgaQgig0gTg5QABgUAEgUQAMgvATgsQAVhEARhFIALgoQAGgOAEgPQADgsAVgnQAPgMASgIIAdgOQAYgDAbABIAAgtQAGgXADgXQgCgSgEgQQgJgQgFgSIgCgjIgIgRQgBgUABgUIATgoIAJgcIAZgoQAbgpAsgUQAWgDAXAHIAMAHIAWgHQAWgIAXAJQAXANAVAQQAZAqAMAwIAOAcIAEAXIAHARIAAARQADAuAAAuIgEAtQAIAlAFAlQgDAMgGALQApAGAhAbQALAHAJAMIAMAnQACAUgDAUIADAWIAAAdIAGAcQAFAxAIAxIASBVQgDAfgHAgQgfAugpAoQgSAMgNAQIAAACIAAAxg");
	this.shape_55.setTransform(9.5,21.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgHAZIAAgxQAAALAGAKQAFANAFAPg");
	this.shape_56.setTransform(34.8,72);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AjOIVQgLgOgQgIQgQAAgRgHQgUgYgRgaQgig0gTg5QABgUAEgUQAQg3AVg1IAmiPQAJgXAGgXQADgsAVgnQAPgMASgIIAdgOQAYgDAbABIAAgtQAGgXADgXQgCgSgEgQQgJgQgFgSIgCgjIgIgRQgBgUABgUIATgoQAhhTBIguQAWgDAXAHIAMAHIAWgHQAWgIAXAJQAqAZAZAqIAQA5IAMAXQALAtADAuIAABFQgEAQAAASQAJAlAEAlQgDAMgGALQApAGAhAbQALAHAJAMIAMAnQACAUgDAUIADAWIAAAdIAGAcQAFAxAIAxIASBVQgDAfgHAgQgfAugpAoQgSAMgNAQIAAACIAAAxg");
	this.shape_57.setTransform(9.5,21.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AjOIXIgPgcQgUAHgUgEQgTgUgPgXQgng5gWg/QAAgOAEgOQALg1AVgyQAWhEAQhFIATg5QACgRAAgRQACgSAIgQQAFgPAJgMQAPgMASgIIAdgOQAYgCAbAAIAAgtQAFgXACgXIgDgcQgJgRgGgSIgCgoIgJgWQABgiANgdQAXg5Agg0QAWgTAcgLQALgFAMgCIAcAJIAMAHIAQgGQARgGARABQBIAmAYBQIAQAiIAEAXQAJAhABAjIAABFQgEAQAAASQALAxgHAwQApAGAhAbQALAIAJALIAMAnQACARgEARIAEAcIAAAdQAGAuAJAtIAEAjIASBVQgDAfgHAgQgfAugpAoQgSAMgNAQIAAACIAAAxg");
	this.shape_58.setTransform(9.5,20.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AjOIXIgPgcQgUAHgUgEQgTgUgPgXQgng5gWg/QAAgOAEgOQALg1AVgyQAXhKAShLQAKgfAIgfQADgqAVgkQAPgMASgIIAdgOQAYgCAbAAIAAgtQAFgXACgXIgEgcIgNgXQgCgUABgUIgLgdIAAgcQAHgeAOgbQAUgwAcgsQAWgTAcgLQALgFAMgCIAcAJIAMAHIAQgGQAQgGASABQAVAHATANQALAGAKAIIAIAPQAQAhALAkIAQAiQAGAWACAYIAGAcIAABFIgGAuIAFAWQAHAogGAoQApAGAhAbQALAIAJALIAMAnQACARgEARIAEAcIAAAdIAGAcQAFAxAIAxIASBVQgDAfgHAgQgfAugpAoQgSAMgNAQIAAACIAAAxg");
	this.shape_59.setTransform(9.5,20.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AjNIXQgIgOgMgIQgUgBgTgHQgVgXgRgbQgigzgTg5QABgUAEgUQAPg4AWg1QAUhHAShIQAJgZAGgaQAEgpAUglQAPgLASgIIAdgOQAZgDAaABIAAguIAHgiQABgVgFgTIgMgXQgDgRABgRIgLgoQADgpARgnQAUgwAegrQAWgUAbgLQANgGAPABIAXAIQAFAFAIACQAWgJAcgDIAtAXQAjAqAPA1IARAoQAMA+ABBAQgEAcgCAdQAMAxgGAwQAbAHAZAMIAmAgQAMAcAHAdIgEAiIAEAXIAAAcIASB4QAOA4ACA6QgUA/gxAuIgWAUQgMAIgIAMIAAABIAAAyg");
	this.shape_60.setTransform(9.4,21);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AjMIXQgIgOgMgIQgUAAgTgHQgVgYgRgaQgig0gTg5QABgUAEgUQAPg3AWg1QAUhIAShHQAJgaAGgZQADgqAVgkQAPgMASgIIAdgOQAYgCAbAAQgBgoAIgnQAAgSgDgRIgNgcIgEgoQgIgcgBgdQAHgeANgbQAghOBDgsIASgHQAaAIAeAFQASgIAWAAIAtAXQAjApAPA2IARAoQAOBEgBBFQgFAZgBAaQALAvgFAyQAmAFAfAXIAVASQAJAWAIAXQAAARgDARIAFAoQAGBIAMBHQAQA+gCA/QgZA7gvAsQgWAPgPATIAAACIAAAxg");
	this.shape_61.setTransform(9.3,20.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AjNIXQgIgOgNgIQgTAAgUgHQgUgYgRgaQgjg0gSg5QABgUAEgUQAKgmAPgkQAZhNAThNQAMgmAJgkQACgmARgkQAMgLAPgHQATgLAVgJQAYgCAbAAQgFgfAHgfQAFgRAAgSQgIgXgJgWIgDgdQgJglgBglQAIgbANgYQAbhCAxgxIAogOQAOABAOAHIANAIIAsgNQAPADANAHQASAIAQALQAcAnAOAuIANAdQANAsAHAvIgCAeIACAhQgFAZgBAaQALAugFAuQAaAHAZALIAmAhQANAbAFAdIgEAXIAFAoQAGBIANBHQAOA4ABA6QgTA+gxAuQgZATgRAVIAAACIAAAxg");
	this.shape_62.setTransform(9.4,20.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AjPIXQgZgYgmgKQgTgZgQgaQghgxgRg2QABgUAEgUQAKgmAPgkQAWhEAQhFQAQguALgtQACgmARgkQAMgLAPgHQArgUAwgCQgBgxAIgwQgIgXgJgWIgHguIgJgcQABgSADgRQAJgXALgWIAEgSQALgYAPgVQASgeAcgWIAogOQAOABAOAHIANAIIAPgGQAOgFAPgCQAPADANAHQASAIAQALQAcAnAOAuQAVA7AMA9IgEAdIAEAiQgFAZgBAaQALAugFAuQAaAHAZALIAmAhQANAbAFAdIgEAXIAFAoQAGBHANBIQAOA4ABA6QgTA+gxAuQgZATgRAVIAAACIAAAxg");
	this.shape_63.setTransform(9.4,20.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AjPIVQgZgYgmgKQgTgYgQgbQghgwgRg3QABgUAEgTQAPg4AWg1QAUhHAShIQAJgZAGgaQACgmARgjQAMgMAPgHQArgSAwgDQgBgxAIgwQgIgYgKgWQgEgXgCgWIgJgdIADgdQAGgUAJgTQAlhfBVgqIAWABIATALIAPgFQAOgGAPgBQAPACANAIQAYALAUASQAVAmALAqIAOAdQAMAnAFApIgEAoQAEAQAAASIgGAkIANBIQgBAPgEAOQAyAQAnAjQAMAbAEAeIgDAiIAGAcIAAAXIAYCPQALAsgBAvQgUA+gwAuQgZATgRAWIAAABIAAAxg");
	this.shape_64.setTransform(9.4,21.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AjRIVQgZgYglgKQgTgYgRgbQghgwgQg3IAEgiQANgxATgwQARg8APg8QAPgtAMguQACgmARgjQAMgMAOgHIAdgOIA/gHQgGgoANgmIgEgfIgOgiIgIgzIgIgSQAAgLADgLQADgVAHgTQAMggAOgfIATgdQAZgkApgTQAWgDAWAHIANAHIAQgFQAOgGAOgBQAYAFAWANQApArASA6IANAdQAJAbADAcIAFAZIgDAoQADAQAAASIgFAkIANBIQgBAPgFAOQAyAQAoAjQAPAugCAyIAeDDQAIAbAFAeQgFAwgXArQgZAegeAZQgSANgMASIAAABIAAAxg");
	this.shape_65.setTransform(9.5,21.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AjOIVIgDgFQgGgJgHgGQgXgCgWgHQgQgSgNgVIgjg5QgTghgGgkQAOhJAbhFQAQg5ANg5IAWhFIACghQAHgbAMgZQAZgTAegNQAbgBAYgJQAHgRABgVQAIgZACgaQgJghgMgeIgEgoIgIgRQgBgMADgLQAHgdALgcQAehJA5gzQAZgIAZADIAZALIAVgHQAXgIAXAJQAXALAUARQAZArAOAwQARAjAIAnIABBEQAEARAAASIgGAkIAOBIQgCAOgEAPQAyAQAnAjQAQAtgCAzIAeDCIANAzIgDAdQgGAkgTAgQgaAegdAaQgTAMgMASIAAACIAAAxg");
	this.shape_66.setTransform(9.6,21.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AjOIVIgDgFQgGgIgHgHQgXgBgVgIQgVgXgRgbQgjgzgRg6QABgUAEgTQAIgeALgbQAPguALguIAqiUIACgcQAEgVAJgTQAdghAsgNIAXAAQALgCAJgJQADgRAAgRQAKgegBghIgTgzIgEgoIgJgXQACghAOgeQAdhJA0g5QAdgNAgACIAZALIAPgFQAOgGAPgBQAkAMAeAYQAaApAMAwIAOAdIAEAWIAHAXIACBKIAEAdIgHAoIAPBEQgCAPgEAOQAyAQAnAjQAPAugBAyIAeDDIANAzIgDAcQgGAlgTAgQgaAegdAZQgTANgMASIAAABIAAAxg");
	this.shape_67.setTransform(9.6,21.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AjOIXIgDgFQgGgJgHgGQgXgCgVgHQgVgYgRgaQgjg0gRg5IADgcQAThGAZhDIAniVQAHg1AUgxQAMgLAPgHIAcgOQAegDAhABQgIgZAEgaQAIgWACgYQgIgegNgbQgDgRABgRQgHgXgEgXQAGghAOgeIAKgcQAOgbAQgZQAIgOAMgMQASgNAVgIIASgHQAQACARAIIAJAGQARgEAUgHQAbABAYAOQAlAeASAsIAKAoIANAXIAEAXIAGARQADAoAAAoIADAXIgGAuIAPBKIgGAXQAyAQAnAjQAPAtgBAzIAeDCIANAzIgDAdQgGAkgTAgQgXAbgbAXQgVAQgPAUIAAACIAAAxg");
	this.shape_68.setTransform(9.6,20.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AjQIXIgDgFQgFgJgHgGQgYgCgVgHQglgsgcg0QgPgYgHgcQAGhMAchIQAUhEAQhFIAOgoQAGg1AVgxQALgLAPgHIAdgOQAbgDAeABQgBgaACgZQAHgUADgUQgIghgNgeIgBgiIgLgdIAAgcQAEgWAKgSQAWg6AhgzQAWgTAcgLQALgFAMgCQANADAOAHIAKAGQAPgEAPgHQASgCARAHQAaANAXAQIAHAPQASAkAMAnIAOAcQAFAWADAYQAHA7gCA9IgDAXQAIAnAFAoIAAAMQAWAPAaAJIAmAhQALAbACAdIAAA5IAMA5QAHA8ALA8IAOAzIgGA0QgVAsgiAkIgoAiQgIAHgFAKQgBAMAHALIAMAcg");
	this.shape_69.setTransform(9.8,20.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AjQIVIgDgGQgFgIgHgGQgYgCgVgHQglgtgcgzQgPgZgHgbQAGhMAchIQAUhFAQhEIAOgoQAGg1AVgxQALgLAPgHIAdgOQAbgDAeABQgBgdACgcQAIgTAAgVIgGgdIgNgXQgCgRABgRIgMgoQgBgRADgRIANgdQAUg1AegxQApglA1gBIATALQAKgCALgFQAQgGASACIAuAWQAjAqAPA2IAQAiQAFAWADAYQAHA7gCA8IgDAXQAIAoAFAoIAAAMQAWAPAaAJQAoAhALAyIAAA/IATByIAZByIgGA0QgVAsgiAjIgoAjQgIAHgFAKQgBAMAHALIAMAcg");
	this.shape_70.setTransform(9.8,21.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AjSIVQgWgYgkgFQglgtgcgzQgPgZgHgbQAGhMAchIQAUhFAQhEIAOgoQAGg1AVgxQALgLAPgHIAdgOQAbgDAeABIAAguQAFgXADgWQgBgSgEgRIgNgXQgCgRABgRIgKgcQgDgSABgRQAGgXAKgWQARgpAWgnQAIgPALgOQAngbAuABIATALIAPgGQATgHAVACQAxAWAeAsQAJAZAHAbIARAoQAQBLgDBPIgEAcQAJAoAFAoIAAAMQAWAPAaAJQAoAhALAyIAAA/IATByIAZByIgGA0QgVAsgiAjIgoAjQgIAHgFAKQgBAMAHALIAMAcg");
	this.shape_71.setTransform(9.8,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_4}]},1).to({state:[{t:this.shape_2},{t:this.shape_5}]},1).to({state:[{t:this.shape_2},{t:this.shape_6}]},1).to({state:[{t:this.shape_2},{t:this.shape_7}]},1).to({state:[{t:this.shape_2},{t:this.shape_8}]},1).to({state:[{t:this.shape_2},{t:this.shape_9}]},1).to({state:[{t:this.shape_2},{t:this.shape_10}]},1).to({state:[{t:this.shape_2},{t:this.shape_11}]},1).to({state:[{t:this.shape_2},{t:this.shape_11}]},1).to({state:[{t:this.shape_2},{t:this.shape_11}]},1).to({state:[{t:this.shape_2},{t:this.shape_10}]},1).to({state:[{t:this.shape_2},{t:this.shape_12}]},1).to({state:[{t:this.shape_2},{t:this.shape_13}]},1).to({state:[{t:this.shape_2},{t:this.shape_14}]},1).to({state:[{t:this.shape_2},{t:this.shape_15}]},1).to({state:[{t:this.shape_2},{t:this.shape_16}]},1).to({state:[{t:this.shape_2},{t:this.shape_17}]},1).to({state:[{t:this.shape_2},{t:this.shape_18}]},1).to({state:[{t:this.shape_2},{t:this.shape_19}]},1).to({state:[{t:this.shape_2},{t:this.shape_20}]},1).to({state:[{t:this.shape_2},{t:this.shape_21}]},1).to({state:[{t:this.shape_2},{t:this.shape_22}]},1).to({state:[{t:this.shape_2},{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_2},{t:this.shape_29}]},1).to({state:[{t:this.shape_2},{t:this.shape_30}]},1).to({state:[{t:this.shape_2},{t:this.shape_31}]},1).to({state:[{t:this.shape_2},{t:this.shape_32}]},1).to({state:[{t:this.shape_2},{t:this.shape_33}]},1).to({state:[{t:this.shape_2},{t:this.shape_34}]},1).to({state:[{t:this.shape_2},{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_2},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_42}]},1).to({state:[{t:this.shape_41},{t:this.shape_43}]},1).to({state:[{t:this.shape_41},{t:this.shape_44}]},1).to({state:[{t:this.shape_41},{t:this.shape_45}]},1).to({state:[{t:this.shape_41},{t:this.shape_46}]},1).to({state:[{t:this.shape_41},{t:this.shape_47}]},1).to({state:[{t:this.shape_41},{t:this.shape_48}]},1).to({state:[{t:this.shape_41},{t:this.shape_49}]},1).to({state:[{t:this.shape_41},{t:this.shape_50}]},1).to({state:[{t:this.shape_41},{t:this.shape_51}]},1).to({state:[{t:this.shape_2},{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_57}]},1).to({state:[{t:this.shape_56},{t:this.shape_58}]},1).to({state:[{t:this.shape_56},{t:this.shape_59}]},1).to({state:[{t:this.shape_2},{t:this.shape_60}]},1).to({state:[{t:this.shape_2},{t:this.shape_61}]},1).to({state:[{t:this.shape_2},{t:this.shape_62}]},1).to({state:[{t:this.shape_2},{t:this.shape_63}]},1).to({state:[{t:this.shape_2},{t:this.shape_64}]},1).to({state:[{t:this.shape_2},{t:this.shape_65}]},1).to({state:[{t:this.shape_2},{t:this.shape_66}]},1).to({state:[{t:this.shape_2},{t:this.shape_67}]},1).to({state:[{t:this.shape_2},{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).wait(80));

	// Layer 3
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AiiGFQAAgVgMgQQgXgBgcABQgHgGgEgIIgEgLQAKgWAOgTIgMgzIgIhQQACg8gCg8IgGgsQACg3gCg2QgEgggJgfQgMgbgDgeQAFgcAPgXQAJgaANgZQAPgRAMgRIAAgOIHSAAIAGAZQAAAjgKAiIgDAcIgRAxIgVAPQgVASgRAVQgHAZgDAaQgTA4gNA5QgHAsgRAqIgmA+IgkBWIgTAdIgFAcIgNAdQgCAQgLALIgLABIAAgiQg0AFgQgnIARgdQAAgSgKgQQgDgPADgNIAZhWIACgcIANg/IAZgtIAYg/IgigGIg5AAIAADeIgGAiIAAAXIgNBQIgSAiIgEAjIgOAcIgHAig");
	this.shape_72.setTransform(9.3,113.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-32.2,71.4,184.4);


(lib.reporter_clip2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjDHyIAHgsIAAhKIgOhZIgJAPQAAARAEARQAAAegFAeQgDASgJAQQgPALgSAGQgRAFgSADQgfgGgcgPQgOgPgIgSQgPgagIgdQABgaAFgYQAKgfAQgcIAIgeIAmhUQARgvAMgvQAIg5AZgzQAQgNASgLIAegVQAsgNAtgJQAegYAigTIAAgPQgagDgXgMQgFgJAAgKIgPhGQABgbAEgbQgBgSACgRQAIgXAKgWQAFgPAHgPQAcgUAjgJQBRABA8A1QAKAYACAaIAFAZQgBARgEARIgCAUQgOAmgQAlQgEARAIAQQAIAFAIADIAMAKQAcAaAfAUIBVARQAXANAVARQAQAJANAMIAdBNQgEAcgHAfQgFAlADAmIAFAeIAAAnIAFAeIAAAZIAKBAIgEAZQgDAXgFAWQgKAKgNAFQgaANgcACQgSgGgRgJIAGBKIAEAOg");
	this.shape.setTransform(-263.4,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai8HrIAAgsIAAhKIgOhZQgIALgCANIAFAZIAAAZQgDAkgOAhQgPALgSAGQgpALgmgRIgPgHQgOgPgIgSQgPgagIgdQABgaAFgYQAIgdAPgZIALgjIANgZIAjhUQALgiAIgjQAHgtAQgsIAKgTQATgPAUgMQAUgRAYgKQApgEAngOIAegbQAQgKAIgQQgdgDgYgMQgIgZgCgdQgHgbABgcQADgPAAgOIgCgZQAGgaAMgYQAHgbATgVQCJghBGB0IAAA7QgLAugUAsQgGATAIATIARAIQAiAfAlAZQAlAIAmAFQAhARAfAZIATANIAdBOQgEAbgHAfQgFAlADAmIAFAeIAAAnIAFAeIAAAZIAKBAIgEAZQgDAXgFAWQgKAKgNAFQgaANgcACQgSgGgRgJIAGBKIAEAOg");
	this.shape_1.setTransform(-263.4,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAWIAHgrIAAArg");
	this.shape_2.setTransform(-282.7,71.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai8HwIAAgsQAAhTgOhQIgFAAIgFAYIAFAeQAAAygVArQgOAJgPAEQgbAJgcgCIgYgNQgNgGgLgJQgKgRgIgSQgRgcgBggIAFgZIACgTQAMgaANgYIAIgeIAmhUQARgvAMgvQADgeAGgdIAMgZQAFgNAHgLQASgPAVgMQAUgRAYgKQAjgEAjgJQAegYAigTQgEgHgHgFQgXgHgUgHQgGgQgBgRIgNg8IAFgsQgBgYACgVIASgoQAGgVAPgTQBBgfBIARQAiANAYAaQATA3gCA7QgNAugUAsQgEAUAIASIARAIQAiAfAlAZQArAIAqAJQAcARAaAVIATANIAIAXQALAbAHAbIgPBeIAKBLIAAAiIAFAZIAAAeIAKBAQgCARgDASQgEAVgIASQgIAHgKAEQgcAOgfAAQgQgIgOgLIAAAeIAFAYIABAZIAEAOg");
	this.shape_3.setTransform(-263.4,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCAWQACgKAAgJIADgYIAAArg");
	this.shape_4.setTransform(-282.6,71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ai8HyIAAgsQAAhSgOhRIgFAAIgFAYIAFAeQgBAvgQAqQgPAMgSAFIgeAIQgVAAgSgKQgWgJgRgPIgNgeQgMgTgGgVQAAgXAFgWIACgTQAMgaANgYIAEgUIANgZQAWgzASg1QAMgiAIgjQABgYAGgZIAMgZQAGgPAKgNIAUgNQAcgWAfgPQApgEAngOIAZgXQAQgMAIgSQgmABgVgZIAAgUQgJgogBgoIADgYQgDgRABgSQAIgXAKgWQAHgYAOgUQArgZAyAAQA+AKAtAsQAPAhACAlIAAAdQgFAfgLAdQgNAZgJAZIADAiQAMAAALACIA+A1QApALArAFQAdAOAZAUQAQALANANQAHARAGASQALAaACAcIgPBKQABASADARIAGA2IAAAeIAFAZIAAAeIAKA7IgEAZQgDAUgFAUQgIANgPAHQgcAOgfAAQgQgIgOgLIAGBKIAFATg");
	this.shape_5.setTransform(-263.4,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai7HyIAAgsQAAhSgPhRIgEAAIgHAVIAHAhQAAAygVArQgQAKgSAFQgUAGgUAAIgUgHQgVgIgRgOQgJgPgHgPQgSgegCgjIAFgZIACgTQAMgaANgYIAEgUIAdhFQARgoAOgoQAJgbAEgbQgBgSACgQIAZg3QANgMAQgJQAbgWAggPQAhgEAggHIBAgtIAAgKQgigFgcgOQgDgKABgKQgDghgHggQABgUAEgUIgEgiQAHgcAMgbIAGgIQABgLAEgLQAjggAwgHQBcAHAxBNIACAZQABAggBAgQgIAfgOAdIgMAZQgCAUAMARIAMAEIAWAOQAVAVAYASQApAKArAGQAcAPAaATQANAJALAKQAHAMAFANIARAtQACAQgDASQgIAggEAgIAKBeIAAAZIAFAeIAAAZIAFAoQADAOAAAPIgHAoQgCAMgGAMQgIAHgKAEQgdAOgeAAQgQgIgOgLIAGBKIAFATg");
	this.shape_6.setTransform(-263.5,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ai7HyIAAgsQAAhSgPhRIgEAAIgHAVIAHAhQAAAygVArQg6Abg9gWQgTgTgKgYQgSgegCgjIAFgZIACgTQAMgaANgYIAEgUIAMgZIAphoQAOglAGglQgBgSACgQIAMgZQAGgPAHgPQANgMAQgJQAbgWAggPQAhgEAggHIBAgtIAAgKIgZgFQgUAAgSgLQgGgQACgRIgKg3IAGgjIgGgYIAEgeIAehLQAwghA7gBQBHAQApA6QAIAqgBAqQgIAqgSAmQgMAXAFAaQAKAJALADIAWAOQAVAVAYASQApAKArAGQAPAHAOAKQAgAUAXAaIAGAUQANAdAGAeQgIAngHAoIAKB8IAFAeIAAAUIAFAoQADAOAAAPIgHAoQgCANgGALQgIAGgKAFQgfAPgigDQgKgIgJgJQgGAcAGAaIAAAng");
	this.shape_7.setTransform(-263.5,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADpAWIAAgmIAIAmgAjwAWQACgKABgJIAEgYIAAArg");
	this.shape_8.setTransform(-258.9,71.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ai7HyIAAgsIgEhoIgLg7IgEAAIgHAVIAHAmQgBAjgJAjIgIARQgPAJgRAHQg1AJgugbQgMgRgIgSQgTgegBgjIAFgZQABgPAEgOIAXgoIAEgZIALgUIANgiQAPglANgmQAOglAGglQAFgsAVgoQALgKANgJQAfgXAhgQQAhgEAggHQAfgXAhgWIAAgFIgZgIQgdAAgPgVIAAgUIgFgeQgGgZgCgZIAGgPIgDgiQAFgXAIgWQAJggATgaQAbgQAfgGIAUgEQBEAGA1ArQAUA5gDA+QgGAigPAfQgHAMgGANQgCAUAMARIAMAEIAbAPQAVAUAYASQApAKArAGQASAIARAMQAXAQAUARQAKAWAIAXIALAeQABAOgDAPQgIAfgDAhIAKCBIAFAeIAAAUIAIAxQgBAZgGAZIgDAUQgLANgRAHQgdAPgfgDQgKgIgJgJIgFAZIANBEg");
	this.shape_9.setTransform(-263.5,23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ai7HwIAAgsIgEhoIgKg7IgFAAIgHAVIAHAmQgBAjgJAjIgIARQgaAQgfAGQgwgDgjgfIgNgZQgJgOgHgQQgDgRABgSIAFgZIACgTIAUgoIAKgjIAMgUIAihUIAahjIACgdQAFgQAHgOQAFgNAHgMQALgKANgJQAVgQAYgOQApgLArgJQAdgZAjgUIAAgFIgsgIQgNgCgLgGQgGgIAAgKIgCgeIgLg3QABgNAFgMIgDgdQAHgeAMgeQAGgYAPgUQAdgUAjgGQBQgCA9A0QAQAtABAyQgEAjgMAiQgQAZgEAeIAGAYIAFgDIAZANIA8AtIBUAQIBOA1IAdBLIgNBYIAXDpIgEAoIgLAmIgNAIIgsAOIgUADIgegSIAGBKIAFATg");
	this.shape_10.setTransform(-263.5,24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ai7HwIAAgnIAAhLIgOheIgFAAIgHAVIAHAnQgBAjgJAiIgIASQgPAJgRAIQg6AIgughQgKgPgHgPQgJgOgHgPQgDgSABgRIAFgZIACgUIAUgoIAKgiQAihMAbhOIANhTIALgZQAGgQALgNQAVgSAYgPQAQgLASgIQAjgFAjgJQAQgLAOgNIAdgZIg2gHIgKgFQgKgUABgXIgGgZIAAgOQgGgQgDgOQAFgPAJgPIgFAAQgFgKACgKQAEgXAIgWIAMgcQABgLAEgKQAigeAsgFIAnAAQBVASAdBRIAAA3QgDAhgNAfQgKARgIASQgBAUAFAUIAUgFQALAMAOAJQAbAZAgARQApAFAnAJQAXANAWARQAOAKANAMQAIARAGASQAIATAFAUQgDApgHArIAAAnIAXDHIgDAZQgDAZgHAXQgJAIgLAFQgaANgcAAQgTgFgQgKIAGBLIAFATg");
	this.shape_11.setTransform(-263.5,24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAUIAFgnIAAAng");
	this.shape_12.setTransform(-282.6,71.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ai7HwIAAgnIAAhLIgOhjIgFAAIgBAPIgGALQACAVAFAXQgBAZgEAYQgDASgJAPQgRANgVAFQgRAHgSACQgNgDgMgGQgUgIgSgOQgJgOgHgPQgTgggBglIAFgZIACgUIAVgoIAHgdIANgZQAVg0ARg0QAMgjAHgjIAAgYQACgNAGgLQAKgbAQgXQAVgRAYgPQALgJANgHIBQgRQATgNAQgQQAKgKAJgKQgWAAgWgEQgQgBgMgKQgCgKABgKQgBgbgEgbIgKgZQADgQAGgOIgDgUQAFgeAKgdIALgZQADgNAGgLQAcgWAjgJQBVgDA/A1QAMAaACAcIAFAZQAAAPgDAPIgDAZQgIAWgLAWIgNAZIAEAjQAJgBAJADIAMAKIAYANQASASAWAPQArAKAuAHQASAJARANIAjAYQALAPAFASQALAYAHAZQgEAmgIAnQADArAEArIAFAtIAAAZIANBZQgCAWgEAXQgCAPgGANQgNALgQAGQgLAGgNADQgegBgZgOIAGBLIAFATg");
	this.shape_13.setTransform(-263.5,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ai7HwIAAgnIgEhoIgKhGIgFAAIgGAoIAGAZIgFA2IgMAhIgrAVIgeAGIgZgJIgmgVIgig8IgCgnIAFgZIACgUIAVgoIAHgdIANgZIAmhoIAThGIABgiIAZg6IBNg2IBGgNIBAgrIAAgFIgsgFQgWgDgMgRIADgZIgGgeQgFgTgHgPQADgPAIgMQgBgLgDgMIACgUQAJgkAOghQAEgOAIgLQAhgZApgFIAnAAQBGAOAlA9IADATQAFAggBAhQgFAcgLAbIgQAdQgEAVAHASIASAHIALALIAUAJQAZAZAjARIBPAOQAUAMAUAPQAPAKANALQAHANAFAQQANAdAGAdQgJAqgGArIAKBFIAFAyIAAAZIAFAYIACAZQAEAUACAUIgIAtQgBAMgFALQgJAIgKAEQgcAOgfgBIgegOIAGBLIAFATg");
	this.shape_14.setTransform(-263.5,24);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ai5HwIAAgnIgFhoIgKhGIgFAAQgEAUgCAUIAGAZQAAAbgFAbQgCASgKAPQgPAMgSAGQgVAIgXABIgUgIQgZgJgSgSIgeg3QgCgTABgUIAFgZIABgUIAWgoIAGgdIANgZQAZg9AUg/QAIgbAEgcQABgeAMgcQAFgPAIgOQASgPAUgNQATgPAVgLQAigGAjgHQAQgKAOgNIAegZIgyAAIgWgLIgIhKIgOgYIALgbIgBgRIgFgBIALg3IAPgmIABgLQAIgRAOgMQAjgSAogDQA4AAAyAaQAeAqAHAzQAAAmgHAlIgRAnQgIAMgDANIAFAeIATACIALAKIAYAMIAtAiIBLANIA2AeIAdAUIAkBWIgPBkIAKA7IAAAZIAFAZIAKCGIgHAnIgSARIgyASIgtgPIAHBLIAEATg");
	this.shape_15.setTransform(-263.7,24);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ai5HwIAAgnIAAhGIgPhoIgFAAIgGAoIAGAeQgBAZgEAYQgCASgKAPQgRAPgUAGQgWAGgXAAQghgLgagYIgMgZQgKgOgHgQQgCgTABgUIAFgZIABgUIAWgoIAGgdIANgZIAOgoQANgiALgjQAMgjAHgjIAAgYQADgMAFgMQAHgVALgSQASgPAUgNQAVgQAYgKQAhgFAfgIQAZgQAUgWQgUgCgUgDQgNgBgJgJQgDgPACgPIgGgZQABgMgDgMQgJgIgEgMQAEgNAHgLIAFgIIgFgNQgCgNABgMQAEgZAHgZIAKgXQABgKAEgLQAXgWAegKQAngJAnABQASADARAGIAZAMQAuA8gBBOQgGAkgOAhIgJAUQgCAVAMAQIAMAEIAMALIATAJQAWATAXARQAnAKApAEQAfANAcAUQAPAJAMAMQAMAXAHAaQAJASABAUIgLBBQAAAeAFAdIAKBaQAGA2AEA3IgFAjQgCAOgFAOQgLAHgMAFQgdAOgfgCQgKgIgKgKIgFAeIAOBFg");
	this.shape_16.setTransform(-263.7,24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ai5HuIAAgnIAAhFIgPhoIgFAAIgGAnIAGAjQgBAUgDAUQgDAXgOAUQgPAKgSAGQg3AIgtggQgJgPgHgPIgQgZQgDgWABgXIAHgsIAVgoIADgUIAQgjIAOgnQAKgbAJgcQAMgiAHgjQAEgpAPgmQAEgMAHgLQATgPAUgNQARgNASgKIBKgRQAWgOASgTQgdABgZgIQgGgNABgPIgJgdIAEgeIgKgBQgLgWARgZIAAgNIgGgEIAAgdQAGgfAKgdIAFgIIABgRQAUgXAbgMQAugPAvAFIAUACIAZAMQANAHAMAJQAfA8gBBFQgJAqgTAmQgCAXAPATQAHACAIAAIAAAPIAYADIAyAnIBBANIATABIBOAyIAgBOIgKBOIAAAeIAUCuIAFAZIgFBAIgFAYIgPALIgtAPIgUADIgZgSIgFAeIAOBEg");
	this.shape_17.setTransform(-263.7,24.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ai5HtIAAgnIAAhFIgPhjIgFAAIgIAdIAIAoQgBAUgDAUQgDAXgOAUQgPAKgSAGQg2AIgsgdQgKgOgHgOQgKgPgIgPQgCgWABgXQACgUAEgTIAWgtIADgUIAQgjQATgvAOgvQAMgiAHgjIABgnQAHgVAKgTIAIgTQANgMAPgKQAcgWAggPIAygIIAsgXIAAgFQgdgBgXgPQgDgQABgSQgDgUgFgTQgIgJgJgGIANgeIAHgeIgKAAIAGg2IAKgjIAFgIIABgRQAMgQAPgMQAygVA3AAQBPAVAdBOQADAqgFAqQgOAggJAhIAFAiQAJAAAKADIALAKIAPAFQAMAHAMAKQANANARAKQAqAIAqAFQAdAOAaAUQAMAHALAJQAIANAFAPQALAbAIAcQgFAjgHAlIAHBCIAAAeIAPByQAEAdABAeIgFAZQgBAMgGAMQgNAKgPAHQgOAGgQADQgaABgTgQIgFAeIAOBEg");
	this.shape_18.setTransform(-263.7,24.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ai5HtIAAgnIAAhFIgPhjIgFAAIgIAdIAIAoQgBAXgEAWQgCASgKAQQhAAjhDgfQgNgQgIgRQgKgPgIgPQgCgWABgXQACgUAEgTIAWgtIADgUQAahCAXhEQAMgiAHgjQgBgSACgQIAMgeQAFgPAIgOQANgMAPgKQAcgXAggOQAhgEAfgKQALgIAJgJIgngLIgNg/IADgUIgKgBIgIgFQADgaALgVQgEgOgHgNIAKAFIgIgUQACgUAGgTIALghQADgRALgPQAhgaApgIIAZgFQAPgBAOAEQA1AMAiAsQAJAWADAXQAEAdABAeQgIAhgMAgIgIAPQABAUANARIAMAEIAMALIAYALQAVATAYAPQAWAFAXACIAZAFIAOABQAbAOAcAUQAMAHALAJIAeBJQABAQgEASQgEAbgCAbIABAoIAPCBQAHAsADAtIgFAZQgBAPgGAOQgJAHgJAFQgfAOgigCIgZgNIAAAeIAFAYIACAZIAEATg");
	this.shape_19.setTransform(-263.7,24.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ai5HrIAAgnIAAhGIgPhjIgFAAIgIAeIAIAoQAAAUgEATQgDAVgKASQgRAPgUAHQgPAGgPADQgQgCgOgHQgTgGgQgLQgJgLgHgNQgMgTgKgVQgCgWABgWQACgUAEgUIAWgtIADgTQAahDAXhDQAMgjAHgjIAAgdQACgMAGgMQAHgVALgSQANgNAPgKQAcgWAggOQAtgEAigbQgVAAgRgMQgCgLABgMIgJgeQABgNADgMIgTgGIAIghIACggIgGgDIAAgFIAFAAQgEgLAAgTIARg7QAEgYARgSQAngXAugFQA2gBAxAbQAaAlAJAuQABAggBAhQgKAggOAgQAAAVAOAQIANAEIAMALIAPAFIAdAYQAMAKANAHIBUANQASAJARAMQAYANATATQAKAVAIAYQAJAQAFASIgLA7QgDAMgBANIAKBFQADAvAHAvQAHAtADAtIgFAZQgCAPgGANQgIAHgJAEQgdAPgfgBQgNgFgMgJQgFAcAFAbIAAAsg");
	this.shape_20.setTransform(-263.7,24.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ADpAWIAAgrIAHArgAjvAWIAHgmIAAAmg");
	this.shape_21.setTransform(-259,71.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ai5HtIAAgnIAAhGIgPheIgFAAIgGAUIAGAsIgFAtIgMAlIgmATIgiAJIgZgJIgngVIgkhGIAAgiIAHgoIAWgtIADgUIBCi8IACgjIANgxIAMgYIBKg1IBKgRIAZgUQgYABgTgMQgFgRABgQIgGgUQgBgNAEgMIgYgKIAOgjIAFgdIgJAAIAAgeQAGgjAMgjQAEgSAMgQQAOgJAQgHQAYgLAagDQAOgEAPAAQAsAHAnAXQAdAnAHAxIAAAyQgFAcgLAaQgMAbANAbIASAHIAbAQQAZAWAdASIBUAOQASAJARAMQAXAPAUARQAKAVAIAXQAHAPAFAPQgBAMgCAMIgHAtQgDAMAAAMIATCkQAHAlADAmIgEAiQgCAPgFANIgXAPQgdANgfgEIgUgMQgFAcAFAbIAAAsg");
	this.shape_22.setTransform(-263.7,24.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ai5HrIAAgnIAAhFIgPheIgFAAIgGATQABAXAFAWQgBAWgEAXQgDAUgJASQgRAMgVAGQgTAHgUABIgUgHQgZgJgSgSIgOgZQgNgSgFgWIAAgjQADgUAEgTIAWgtIADgUQAehMAahOQAIgdAEgeQABgfAMgcQAFgNAHgMQAOgMAPgJQAVgSAYgOIBKgQQAQgLAOgOQgaABgWgNQgHgQADgRIgGgTQgBgOAEgLQgKgEgHgHQgCgSAJgQQACgNAAgNIgGgEIAAgFIAFAAQgEgLAAgSIARg8QAEgXARgRQASgNAWgGQBHgQBDAaQAmAqAHA5IAAAxQgJAkgPAiQgBAWAFAWQAcAFAaAQQAXAVAbAQIBUANQAWANAXAQQAPAJAOALQAKASAHAVQAMAXADAbQgJAugCAvIAKA3IAJBjIAKA3QAAAZgEAYQgBARgGAQQgLAHgMAGQgdAOgfgDIgUgMQgFAcAFAaIAAAsg");
	this.shape_23.setTransform(-263.7,24.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ai5HwIAAgnIAAhGIgPheIgFAAIgGAUQABAWAFAXQgBAWgEAWQgDAUgJASQgTAPgXAGQgSAFgRABIgUgIQgZgJgSgSIgOgZQgNgSgFgVIAAgjQADgUAEgUIAWgtIADgYIALgUQAbhFAUhGQAHgjADgiQAEgUAJgTQAEgOAIgLQAOgMAPgKQAVgRAYgOQAogHAngMQATgPAQgRIgjAAQgSgFgKgPIABgUIgGgZIAAgUIgPgUQABgNAHgLQAEgTgIgQIAGgCQgEgNACgPIAQg2QACgVANgSQAkgYArgIQAOgDAPgBIAYAFQAhAGAbATQAdAjAHAsQAEAZgBAZQgGAjgNAiIgJAUQAAAUAEAUQAcAFAaAQQATARAVAQQAuAKAwAHQAWAMAXAQQAPAJAOAMQAKASAHAVQAKAWAGAWQgIAwgEAzIAKA2IAJBjIAKA3QAAAZgEAZQgBARgGAQQgLAHgMAFQgaANgdAAQgNgGgMgIQgFAcAFAbIAAAsg");
	this.shape_24.setTransform(-263.7,24);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ai5HtIAAgnIAAhFIgPhfIgFAAIgGAUQABAXAFAWQgBAWgEAXQgDATgJASQgRAOgVAGQgWAHgWgBIgUgIQgQgFgOgLQgMgQgKgTQgOgUgEgYIAAgeQADgaAIgYIAQgcIAFgfQAWgxATgyQALgjAJgjIACgZQAGgqAPgpQAUgaAcgSQAQgNATgLIBKgQQAYgSAVgWIgtgFIgSgHIgFgwIAEgFIgGAAQgDgLgBgNQgMgMgBgSQAIgOAGgOIgFgPQgCgQACgQQAGgZAJgYIAFgJQAAgKAEgLQAQgTAXgMQBOgUBLAcQAnArAFA7IAAAtQgHAegMAeIgJATQAAAUAEAUQAjAIAdAWQANAOARALQAMAEANABIAZAFQAcACAaAJIAoAbQAMAHALAKQALASAHAVQAMAcACAfQgHAkgDAmQAEAeAGAdIAAAZIAJBBIACAZQAHAfABAhIgEAeQgBARgGAQIgOAHQgXANgaAGQgYgEgVgKIAQBig");
	this.shape_25.setTransform(-263.7,24.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ai5HpIAAgiIAAhLIgPheIgFAAIgGAUQABAWAFAXQgBAWgEAWQgCAUgKASQgRANgVAHQgWAHgWgBIgUgIQgQgGgOgKQgMgRgKgSQgOgUgEgYIAAgeQADgUAEgUIAWgtIADgTQAehMAahOQAHggAFghIABgYIAUgxQAPgOASgNQAVgRAYgOIBKgRQAagVAdgSIAAgFIg3gEIgSgIIAAgeIgJgwIgMgYIALgYIAAgNIgGgDIABgeQAIgeAKgdQAGgaATgTQCKgpBPBuQAEAtgFAtQgGAUgIATQgJAOgFAQIAFAjQAMgBALACIAHAHIAYANQATASAVAPQAuAKAwAHQAWAMAXAQQAPAJAOAMQAKASAHAVQAKAWAGAWIgGAdQgGAiAAAkIAKA2IAJBjIAKA3QAAAZgEAZQgBARgGAQQgLAHgMAFQgdAOgfgCIgUgNIgFAZIAOBKg");
	this.shape_26.setTransform(-263.7,24.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCARIAFghIAAAhg");
	this.shape_27.setTransform(-282.6,71.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ai5HwIAAgnIAAhFIgPhfIgFAAIgGAUQABAWAFAXQgBAWgEAXQgCATgKASQgRANgVAHQg1AIgtgfQgKgPgIgPQgOgUgEgYIAAgeQADgUAEgUIAWgsIADgUQArhpAZhtIAAgSQAEgVAJgTQAEgOAIgLQASgQAVgNQAQgOATgKIBKgQQATgOAQgQQALgKAJgKIgyAAQgNgCgJgJQgDgQABgSIgIgsQgHgKgEgKQAEgPAGgOIgEgVQAFgpAOgmIAGgZQAPgTAWgMQAwgQAyACQAmAIAgAWQARAXALAbIABAZIAGAYQgBAegGAeQgIAWgKAXQgLAVAIAXQAKAIALAEIAVAOQAdAXAfATIBUANQAWAMAXAQQASALAOAOQAIARAGASQAKATAGAVQgCASgEAUQgHAgABAhIAKA2IAJBkQAHAkADAmIgEAeQgBARgGAQQgLAHgMAFQgaANgdAAQgNgFgMgIIgFAYIAOBKg");
	this.shape_28.setTransform(-263.7,24);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ai5HwIAAgnIAAhGIgPheIgFAAIgGAUQABAWAFAXQgBAWgEAWQgDAUgJASQgRAMgVAGQgTAHgUACIgUgIQgZgJgSgSIgOgZQgNgSgFgVIAAgjQADgUAEgUIAWgtIADgTQAghRAahTIAKgoIAAgdQAEgUAJgTQAFgNAHgLQAOgMAPgLQAVgRAYgOIBKgRQAagVAdgSIAAgFQgiABgegJQgHgRAAgUIgGgUIgBgUIgLgYQADgQAIgNIgHgaQABgcAIgbIAKgdQACgNAGgMQA6gpBJABQAmAIAgAWQAYAhAGApQAEAbABAcQgIAjgOAiQgLAYAFAaQAJAIAMADIAHAHIAUAJQAZAWAdATIBUANQAWAMAXAQQAPAJAOAMQAKASAHAVQAMAXADAZQgJAvgCAwIAKA2IAJBjQAHAlADAmIgEAeQgBARgGAQQgLAHgMAFQgdAPgfgDIgUgNIgFAZIAOBKg");
	this.shape_29.setTransform(-263.7,24);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ai5HwIAAgnIAAhGIgPheIgFAAIgGAUIAGAtIgFAsIgMAlIgmATIgiAJIg3gWIgVgcIgWgoIgCgsIAHgoIAWgtIADgTIAxiGIAThGIABgnIAYg1IBKg2IBPgTIAoglIgtgFIgNgHIgBgmIgIgoIgLgTIAKgdIAEgVQgLgFAAgPQAEgcAIgbIAKgSQAAgKADgLQATgWAagLQApgMArAAQArAJAjAaQAUAdAFAjIAGAeQgBAhgGAgQgPAfgIAhQAAANAGALQAJAFAJADIAaAPQAZAXAdASIBUANQAZAOAZARQAQAJAMANQAKAVAIAYQAJATADATIgKA8QgDAMAAANIATCeQAIAtACAtIgEAZQgCAOgFAOIgXAOQgdANgfgDIgUgNIgFAZIAOBKg");
	this.shape_30.setTransform(-263.7,24);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ai5HwIAAgnIAAhGIgPhjIgFAAIgIAeIAIAoIgFAsIgMAiIgmAWIgdAJIgegJIgegNIgrhEIgCgsIAHgoIAWgtIADgTIAQgjIAhhjIAThGIABgiIAZg6IAcgXIA8gkIBAgOIAjggIgsgHIgPhOIgKgUIAGgzIgHgDIAAgFIAFAAIgFgUIAFgUIAPgsIADgUQAIgRAOgMQAVgLAYgHIAogIQAiACAiAMQASAIAQANQAVAgAFAlQAFAeAAAeQgIAhgMAfQgHAMgDANQADASAMAOQAHADAIAAIAAAPQAJgBALADQAaAWAcATQAWAEAXACIAZAFIAOABQAbAPAcATQAMAHALAKIANAhQANAaAFAbQgHAqgEArIAQCeIAKA8QAAAcgEAbQgBAOgGAOQgJAIgJAEQggAOghgCQgLgFgJgIIgFAZIAOBKg");
	this.shape_31.setTransform(-263.7,24);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ai5HrIAAgiIAAhLIgPhjIgFAAIgIAeIAIAoQgBATgDAUQgDAYgOATQgPALgSAGQg2AHgsgdQgKgNgHgPQgKgPgIgPQgCgVABgXQACgVAEgTIAWgtIADgTIAMgZIASgyQAYg8AOhAIAAgdQAGgZAMgYIAIgTQAUgSAXgPQAVgQAYgKQAggFAggIQAQgLAOgMIgegIQgOgQABgVIgHgtIgJgUQABgUAEgTQgGgXgDgWQAHgeALgdQACgWANgSQAQgNATgJQBRgVBMAiQAgAuAEA5IAAAZQgEAjgNAiQgIARgBATQADAMAJAJIANAFIALAKIATAJQAVAUAYARQAqAHAqAGQAdAOAaATQAMAHALAKQAIANAFAPQALAaAIAcQgFAkgHAkIAHBMQADAmAHAlIAAAUQAGApAEArIgFAoQgBAMgGALQgNALgPAGQgnAOgkgUIgFAZIAOBKg");
	this.shape_32.setTransform(-263.7,24.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ai5HtIAAgnIAAhKIgPhjIgFAAIgGAnIAGAjQgBAUgDAUQgDAXgOAUQgPAKgSAGQg3AHgtgfQgJgPgHgPQgKgPgHgPQgCgUABgUQACgUAEgTIAWgtIADgUIAQgjIAOgnQARgtAOgtQAHgbAFgbIAAgTQAKgiAQgdQASgPAUgNQAVgQAYgLQAzgFAmgfIgPgBIgKgFIgHgJIgCgjIgIgiQgFgMgCgNIABguQgEgRgCgQQAFgfALgdIAFgIQAAgNAFgOQAOgQATgKQArgRAugBQAnAHAjATQAdAnAGAxIAFAZQgBAYgGAZIgNAoQgLASAGAWQAKAMANAEIAVAQQAYAUAaATQATAGAVACIAZAFIATABQAdAOAaAUQARAKAMAOIALAeQANAbADAbQgJAxgCAyIAPCBQAIA2ACA3QgFAZgHAXIgNAIQggAPghACQgOgIgLgKIgFAZIAOBJg");
	this.shape_33.setTransform(-263.7,24.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ai7HtIAAgnIAAhKIgOheIgFAAIgGAiIAGAZIgFA3IgMAhIghASIgyAHIgPgGIgmgWIgig8IgCgoIAFgZIACgTIAVgoIAIgeIAyiBIAThFIABgiIAZg6IBTg3IBKgSIAPgNQgSgGgKgOQgCgRAAgSQgRg2AHg3IgKAAIACgnQAGgaAIgYIAGgIIAAgRQAFgLAIgIQAkgXArgJQAMgDANAAIAYAFQAaAEAXAMQAjAjAKAwQABAggBAgQgEAcgLAbQgJAQAAATIAFAYQASABAMAMIAYAOQASARAWAOQAkAJAmAEQAaAKAYARQARALARAMQAKAPAGASQAMAbAHAcIgEATQgIAngDAoIAKA8IAFBFIANBZQgCAUgEAUIgEAZQgHAKgLAGQgfARghABIgZgOIgFAZIANBEg");
	this.shape_34.setTransform(-263.5,24.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ai7HrIAAgnIAAhLIgPheIgEAAIgHAVIAHAnQgBAbgFAbQgDASgIAPQgSANgUAFQgPAGgPADQglgJgfgXQgKgPgIgSQgRgbgBggIAFgZIACgZIAVgoIAJgiIALgUIANgjQAUgxARgyIAMhTIAMgZQAFgOAIgLQALgKANgJQAcgWAfgPQAzgEAmgdQgTgDgJgRIAAgeIgPgyQgCgTABgUIABgRIgGgcQAGggAKghIAFgIQABgKADgLQAUgZAegMQA9gRA+ASQAMAFALAHQAfAnAFAxIAAA8QgGAZgJAYQgNAbAKAbIArAbQAXAVAbARQApAJArAHQAVAKASAPQASALAQAOQAHALAFANQAMAaAHAcQgEAngIAmQACApAFAoIAKByIAIAyIgDAZQgCAUgFATQgJAOgOAHQgfAPgigDIgTgNIgFAZIANBFg");
	this.shape_35.setTransform(-263.5,24.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ai8HrIAAgsIAAhKIgPhaIgFAAIgHAWIAHAhQAAAbgEAcQgCARgJAQQgQANgTAGQg1AKgugcQgMgQgIgSQgLgRgHgSQgBgZAFgZQAAgRAFgSIAXgnIADgUIAQgjQAZg9AVg/QAHgUAEgUIAAgXQADgVAKgTQAHgVAOgRIAUgNQAcgWAggPQAjgEAigKQALgIAJgJQgZgNgDgbQgGgogKgnIADgoIgGgZIAEgeQAGgUAIgTIAGgJQAAgMAFgOQAXgVAegKQBPgPBFApQARAZAIAeIAAAUIAFAYQgCASgDARIgCAUQgWAsAFAtQAKAIAMAEIAVAOQAVAVAYASQApAJArAGQAQAHAOALQAaAQAXAUQALAVAIAYQAHAUAFATIgEAOQgIAjgDAjIAKB8IAFAeIAAAUIAJA7IgEAeQgEAXgIAUQgLAHgMAFQgbANgcAAQgOgIgLgKIgFAYIAFAZIACAZIAEATg");
	this.shape_36.setTransform(-263.4,24.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ai8HtIAAgsIAAhPIgPhUIgJAPQAAAPAEAOIAAAeQgCAkgPAhQgOAMgTAFQgRAFgRADQgagFgYgLQgKgIgIgKQgLgOgHgQQgKgRgHgSQgBgeAHgdQADgQAFgOIARgeIAEgUIAdhFQAUgvARgwQAHgbAEgaIACgZIAOgjQAVgeAhgTQATgOAVgKQAsgEAogRQAJgJAGgLQgVgCgJgSIAAgUIgNg2QgDgZABgZIABgUQgEgMAAgMQAHgfALgdQAGgbATgVQAQgJATgGQATgGAUAAQA5gBAyAbQAbAnAEAxQABAogHAnIgXA3QABASAJAPIASAIQAVAQAUARQANANARAKQAkAIAmAFQAYALAVAQQAUANASAPIANAhQAKAWAHAXQgEAcgIAeQgDAbABAcIAFAtIAAAiIAFAeIAAAeIAKBAQgBAUgEAUQgCASgEARQgJALgPAEQgeAQgigEIgUgMIgDAdIAAA7gAlkGgIAOAOIgKgPg");
	this.shape_37.setTransform(-263.4,24.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ADlAeIAAg7IAMA7gAjwAeIAHgrIAAArg");
	this.shape_38.setTransform(-258.9,70.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ai8HwIAAgsIAAhQIgJhZIgFAAIgIAZIAFAtQgBAUgFATQgDAUgLASIgMAHQgfAPgiAAQgQgDgNgHQgOgGgLgJQgNgTgJgVQgMgVgGgXQABgNADgMQAEgaAIgYIAQgdIAJgeIAOgZQAYg4AUg6QAJgZAGgZIAAgUQAFgWAIgVQAHgVALgSQAOgKAPgJQAYgSAZgNQAmgFAlgHQAVgOASgTQgSgBgPgKQgHgTACgUIgPg7QABgSADgRIgEgtQAJghANgfQADgVAOgSQAigTAngHQBAAAA1AkQAWAhAFAoQABArgIAqQgNAcgKAfIAAAUQAHARAQAEQAmAjArAbQAmAFAlAIQAXAOAVARQAPAKANAMQAHAOAFAQQAMAfADAgQgLAvgEAvIAFAZIAAAoIAFAeIAAAeIAFAdQAEAjABAjIgFAZQgCARgFAQQgIAIgKAEQgTAJgUAFQgcAAgWgPIgEAeIAAA7g");
	this.shape_39.setTransform(-263.4,24);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ai+HwIAAgsIAAhUIgJhaIgFAAIgIAeIAIAtIgFAUQgEAegOAbQgPAJgRAEQgPAGgPADQgtgIghggIgNgdQgLgTgFgVQABgXAFgWIAEgZIAZgsIAIgeQAfhCAbhEQAKgbAGgcIAAgTQAEgVAKgSQAHgVAOgRIAjgYQAXgQAagKQAjgEAjgHQAXgSAVgWQgdABgPgVIAAgUIgPhFQABgSAEgRIgEgoQAHgZAKgYQAGgbAQgWQA3gdA/ADQARADARAGQATAIAQANQAjBKgMBVQgXAvgBAvQAIAIALADIARAPQAXAXAaATQAfAKAiAFIAUADQAUALATAPQASANAQAOQAKAQAGATQALAdAEAdIgIAjQgIAlABAmIAFAiIAAAjIAMCGIgMBFQgnAPgoAEQgRgHgNgMIgEAUIAFA3IAFATg");
	this.shape_40.setTransform(-263.2,24);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AjBHyIAAgnIAAheIgJhUIgFAAQgFARgBARIAGAeQgBANgDAMQgEAigSAdQgXALgaAFQgugBglgcQgIgPgFgPIgQgeQgDgWABgXQACgUAEgTQANgXANgWIAEgUIAvhjQAQgnAMgoIAIgeIACgdQAKgaAOgYQAcgaAjgUIAUgMQAmgEAlgHQAegXAigRIAAgFQgdABgYgQQgHgVABgXQgIgggCghIAFgZQgCgWABgWQAJgaALgYQAEgUANgSQAhgUAngGQAUgBAUAEIAYADQAhAOAaAYQASAmADAqIAAAZQgEAbgIAbQgNAbgLAcQgBATACAUQAQACAKALIATAMQAQASASAPQAtAOAyAJQASALAQANQASAMAQAOQAIANAFAPQAMAhAGAfQgIAkgHAmQgBAoABAoIAFAdIAAAeIAFAZIAAAjIAFAYQgBAagHAYIgEAUQgXAWgjADQgMAEgMAAQgQgIgOgLIgEAeIAFAxIAFATg");
	this.shape_41.setTransform(-262.9,23.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEAUIAJgnIAAAng");
	this.shape_42.setTransform(-282.8,71.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AjDHwIAAg2IAAhUIgKhQIgFAAIgHAWQACASAFAUQAAAPgDAPQgFAegOAbQgRAKgUAGQgRAFgSABQgNgDgMgGQgZgMgSgTIgJgZIgQgdQgCgSABgRIALg3IAWgnIAIgZIALgUIAfhBQAQgnANgoIANhEQAIgSAJgRQAHgNAJgLIAZgQQAigYApgLQAbAAAbgHIA8gvQgbgDgWgMQgHgPABgPIgFgeQgEgbgBgbIAEgUQgCgUABgUQAJgZALgYQAHgYAPgTQBHgdBNAVQASAIAQANQAVAdAGAjQADARAAASIgFAZQgCAUgEAUIgSAnQgHALgEAOIAAAjQAOAAAKAKIgEAFQAlATAhAdQAnAKAoAIQASAKARAOQAUANATARQANAbAJAfQAGAOACAPIgGAZQgKAlgDAlIAFAeQADBPAGBQIADAUIgJAjQgCAPgHANQgQAHgSABQgZAHgZgBQgNgFgMgIIgDAjIAFAyIAEATg");
	this.shape_43.setTransform(-262.7,24);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAbIADgEIAGgxIAAA1g");
	this.shape_44.setTransform(-282.8,70.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AjFHyIAAg7IAAhUIgKhFIgFAAIgEAUIAEAdQgBAegHAeQgEARgKAPQghARgnAAQgXgEgTgLQgLgGgKgIQgKgUgHgUQgOgZAAgeIAIgiQACgQAFgOIAWgjIAEgUIARgdIArhkQAOggAJggIAAgTQAGgaANgYQAIgSANgPIAUgLQAggXAlgMQAegBAdgGQAQgJAOgMQAQgNATgJIAAgKQgggEgVgUIgCgUQAAgPgBgPIgJgeQADgWAEgVIgBgfQAGgaAMgYIANgjQAdgbAmgHQBdADA3BHQAFARABASIAAAxQgHAigOAfQgNAYgGAaIAAAdIASACQANAIAMAKQASAWAXARQAvAMAvAOIAjAZQASANAPAQQAJAWAGAXQAIAVACAXQgLAngHAoIAFBoIAFAZIAAAtIAFAYQgBAUgFAUQgHAfgbAOIgUAAIgYAFQgZgDgUgMIgEAtIAFAxIAFATgAlsGWIATATIgPgUg");
	this.shape_45.setTransform(-262.5,23.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEAeIAEgUIAFgnIAAA7g");
	this.shape_46.setTransform(-282.8,70.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AjGHyIAAg7IAAhZIgEgZIAAgsIgRAQIAFASIACAUQgDA5ggAqQgWAHgXADIgUAAQgkgMgbgbIgMgjQgOgWAAgcIAIgiQACgQAGgOIAVgjIAEgUIAXgnQAZg5AXg6QAKgdAGgdIADgZQAHgPAJgPIANgYQAQgMASgJQAXgQAagMIBGgIQASgJAQgOQAXgNAMgWQgggCgVgWQgCgPABgPQgGgegDgeIAJgnIgCgeQAIgaAMgYQAHgVAOgRQArgXAyACQBXAWAcBSIAAA7QgHAigOAfQgMATgHAVIAAAiIASACQAhAfAhAcQAMADANACIAyANQAaANAXASQASAMAPAOQAMAZAGAcQAHASACAVQgJAngGAoQgBAjABAiIAFAjIAAAoIAFAZQABAjgIAiQgDALgGAJQgPALgTAAQgRAFgRAEQgYgEgVgLIgEA3IAFAxIAFATg");
	this.shape_47.setTransform(-262.4,23.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEAeIADgFIAGg2IAAA7g");
	this.shape_48.setTransform(-282.8,70.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AjIHyIAAg7IAAhZIgFgZIAAgxIgFAAIgIAZIADAYQAAAegGAeQgDASgJARQgQANgUAGQgZAGgZgCIgZgNQgNgGgLgJQgOgWgHgXIgNgZQgBgeAIgdIAEgZIAWgjIAKgeIATgiQAUgqASgrQARgnALgnIABgeQAIgSAKgRQAFgMAHgLQAUgPAXgNQATgMAVgKQAugDArgOIAogeQAGgGAAgIQgIgJgNgCQgPgFgIgNIgEgjQgGgegCgeIAHgcIgCgaQAGgaANgYQAJgYAMgVQAugbA5ADQA/ASAoAzQAHAbgBAcIAAAiQgIAngRAkQgLATgIAVQAEAaAZANQAYAZAaAXQAOAHAQADQAkAGAhAMIAtAiQAMAIAKALQALAcAIAfQAGAOABAQQgLApgHArIAKCLQABAegBAdQgGAYgOAUQgOAGgQACIgeAIQgZgCgYgIIAAAyIgEAdIAAA2g");
	this.shape_49.setTransform(-262.2,23.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ADnAeIAAg1IALA1gAjxAeIADgFIAHg2IAAA7g");
	this.shape_50.setTransform(-259.1,70.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AjJHyIAAg7IAAheIgEgZIAAgsIgFAAIgJAZIAEAdQgCA1gXAvQgNABgMAHQgcAGgbgBIgsgYQgPgSgHgVIgQgjQgCgeAIgdIAEgZIAWgjIALgeIAXgsQAag5AXg5QAIgUAEgTIACgZQAHgVAKgTQAFgMAHgLQAUgPAXgNQATgMAVgKQAogEAogHQAPgLAOgMIAYgSQgHgUgegKQgHgNAAgPIAAgUIgJgtIAJg2IACgeQAHgVAKgTQAHgVAOgRQAtgXA1ACQBPAYAfBLQABAggBAgQgOAvgWArQgKAWAHAVIAcASQAYAdAfAWIBQASQAXAOAVASQAXAPAPAVIANAtQAGANADAQQgDAPgGAOQgKAigBAkIAFAjIAFB8QgCAegSAYQgRALgSABQgPAFgOADQgWgDgSgMIgFAjIAAAjIgEAdIAAA2g");
	this.shape_51.setTransform(-262.1,23.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AjJHyIAAg7IAAhZIgEgZIAAgxIgFAAIgJAZIAEAYQgBAjgIAjQgFASgMAPQgOAHgPAEQg+AHgugpQgFgNgDgMIgQgjQgDgeAJgdIADgUQAMgXAOgWIAIgZIAXgsIAMgeQAUgpARgrQAIgXAEgVIACgZQAHgSAKgRQAFgMAHgLQAUgPAXgNQATgMAVgKIAZgBIAZgFQAPgBAPgEQAPgLAOgMIAYgSQgHgUgegKQgHgQAAgRQgHgjgCgjIAFgYIAAgjQAJgfAPgdQAHgVASgRQApgSAvACQA8AOAqAtQALAaACAdQgBAtgLAsIggA8QgCATABAUIASACQAhAeAhAdQAkALAnAHQAiARAeAYQANAIAKALQAGAMACANQALAfAIAcQgFAWgJAWQgFAZgBAZIAFAoIAAAsIAFAZQABAbgBAcQgKAbgZAQIgUADQgaAIgcgBIgPgJIgJByIAAA2g");
	this.shape_52.setTransform(-262.1,23.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AjGHyIAAgnIgFitQgHADgGAHQgCAPAEAOQACASgBARQgHAkgPAfQgSALgTADQgXAEgWgBQgLgCgJgGIgYgNQgRgWgKgaIgMgZQgCghAJgfQACgQAFgOIAWgjIAEgUIARgdIARgoQAbg4AUg6IACgYQAGgdAMgaQAIgSANgPIAogXQAXgQAbgHQApgCAmgSIAegXQAHgFAEgHQgBgKgKgEQgVgEgMgQIgMhLQABgXAEgVIAAgeQAGgaAMgYQAJgYANgVQAsgaA2ACQA8AOAqAtQAOAtgCAxQgGAkgPAiQgOAXgJAbQgCAPALAMIAOAEIAVASIAZAeIAAgjIAOACIAQAmIAFgEQAOAAAKAFIAPgBQAKACAGAFIASAJIAVAcQAbASAZAWQAGAPADAPQAKAcADAfQgJAkgGAmIAFByQAEAcAAAbQgPAVgXAMIgUADIgPAHQgbADgXgMIAAAtIgFAeIgDA7IAAA2gAloGbIANAOIgKgPg");
	this.shape_53.setTransform(-262.4,23.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ADnAbIAAg1IALA1gAjxAbIAKgmIAAAmg");
	this.shape_54.setTransform(-259.1,70.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AjFHyIAAgnIAAhjIgEgeIAAgUIgGgdIgFAAIgGAVQACATAEATQAAAPgDAPQgFAfgOAaQgRALgUAFQgRAFgSABQgNgDgMgGQgYgLgTgTIgJgZQgLgTgGgVQAAgeAIgdIADgUIASgeIAMgjIAMgUIAehAQARgqAOgqIALhAQAIgSAKgRQAGgNAKgLIAZgPQAVgQAXgNQArgFApgJQASgMARgPQARgMAIgSQgXgEgUgHQgHgNgBgPQgGghgDggIAGg7QgBgPACgPIANgeQAHgVAKgTQAagUAfgJQBvAGAvBdQACA3gNA2QgXAmgFApQAJAMAOAFQAeAYAaAdIgKhPIATACIALAlIAtABIAPAHQAQAEALANQADAMAAANQACAPAIAPQAbATAZAUQAKAcAIAgQAHAQAAASQgNAlgFAqIAFAjIAAAxIAFAZIAAAZQgoA5hPgCIAAAxIgFAeIAAAjIgEAPIAFAxIAFATg");
	this.shape_55.setTransform(-262.5,23.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AjNHyIAKgnIAAheIgKhUIgFAAIgGAiIAGAjQgBAMgDANQgEAggRAaQgQAJgSAEIgUAGQgvgHgkgeIgJgZIgQgeQgEgeAGgdIADgZQAMgXAOgWIAIgeQAlhLAehPQALhCAbg9QANgLAPgJQAagUAdgOQAmgEAkgHQASgMARgOQAUgNAKgVQglgCgSgbIAAgUIgKgyQABgXAEgVIAAgjQAJgfAOgdQAEgSANgPQAqgVAuAAQA/AJAtAtQAJAWADAXQAEARAAASIgEAYQgDAZgHAZQgOAYgKAaQgCATABAUIAZANIAiAgIAFAAIAOgUIgEgZIAAg2QAIAAAHACQANAVACAaIAXgDIAHAIQACgGAIgDQAXAGATANQAIAVgBAYQAAAKADAKIAeAZIAEAPIAUAUQAGAOAFAPQAKAcAHAaQgDARgGARQgGAWgDAXIADBGIAFAYIAAAjQAAAMgCANQgXAagjAJIgjAAQgXATAEAjIgFAeQgDAyADAxIAGAdg");
	this.shape_56.setTransform(-262.7,23.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ai+HyIAAgsIAAhUIgKhZIgFAAIgHAdQABAUAFAUQAAANgDAMQgFAegNAbQgkAUgpACQgNgDgMgHQgNgFgMgGQgPgRgHgVQgMgWgJgXQAAgPAEgPQACgXAFgVIAUgjIAJgeIANgZQAYg4AVg6IANgnIAHgiIABgZQAIgSAKgRQAGgMAKgLIAdgUQATgNAVgMIBLgNQASgMAQgOQAPgKANgMQACgHAAgIQgYAAgUgKQgGgMgBgMIgJgtQgFgmAFgkQAAgSACgRQAKgaAMgYQACgNAGgMQAKgJANgGQAagMAcgCIAUAAQAUAAATAGQASAGARAJQA3BHgMBbQgKAfgOAdQgKATACAVQANAQAVAKQAUASATAUIAAgoIAPAAIgFgdIAAg8QAIAAAHACQANAVACAbQAegBAeAEQAMACAKAKIAHAnQgBASAHARQANAJAMALQAEAMADANIAAALIAPAPIAZBIQgBAggLAgQgEAjADAjIAFAZIAAA2QAAASgHARQgLAKgMAGQgMAFgNAEQgcABgagGIAAA2IgFAeIAAA3IgEAUIAFAxIAEATg");
	this.shape_57.setTransform(-263.2,23.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ai8HyIAAgsIAAhPIgKhUIgFABQgJAcAEAeQAAAsgRAoQgOAMgTAFQgTAHgUABQgNgDgMgFQgMgFgKgHQgMgIgLgLIgYgyQgGgjAJgiQACgQAFgOIASgeIADgUIAVgsQAdhFAVhGQAHg7Aag2QANgLAPgJQAagUAdgOQAmgFAkgJQAcgXAggTIAAgPQgegEgXgPQgCgKAAgKIgPhGIAFgeIAAgnQAGgdANgaQAGgUALgSQArgaAxAAQA/AJAtAtQAOAkACAnIAAAYQgEAfgLAdIgSAjQgEAYADAZIASACIBCA1IAAg8IAPAFQgKgvAFgvIAOACIAQA1QAJgEALgBQAsgCAUAkQgBAfAIAdIAZAUQAHATAAAVQAEAMAHAMIAXBBQgDArgKAtIAAAeIAFAeIAAAxQACAPABAPQgpAvhDgHIAAAoIgFAiIAABGIgDAdIAAA7gAljGlIANAOIgKgPg");
	this.shape_58.setTransform(-263.4,23.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ai5HyIAAgiQAAhXgPhWIgFAAIgGAVIAGAmQAAAZgEAZQgCARgJARQgPAMgTAIQg9AIgwglIgLgZQgKgRgIgSQgBgZAFgZQAAgRAFgRIATgeIAHgeIAghKQANggAKghQAMgiAGgjQAEgsAWgoQANgMAQgJQAdgXAjgOQAegDAegIQAUgQATgRQAMgHANgFQgIgLgMgHQgUgCgOgOQgFgUgCgUIgIgjIAAg2QgBgUACgUIAMgeQAJgeARgZQApgXAwgBQBKAOArA8QAKA7gKA8QgIAXgKAWQgLAVACAYQAIAMAOAEIARAOQAdAaAjASIgKhGIAUAAIgFheQAHAAAHACQAKAbAMAXQAVAEAXgFQAmAYgEAxQAAAQAKAMQALAFAJAIQAFASAAAVIgCAPIAeBPQAAAigMAiQgCAUABAUIAFAZIAAAZQAHArgJApQgKAMgNAJIgPAHQgeAEgdgCIgFA2IAABVIgEAUIAFAxIAFAYg");
	this.shape_59.setTransform(-263.7,23.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ai4HyIAAgiIAAhPIgOheIgFAAQgFARgBARIAGAZQgBAcgEAbQgDARgJAQQgPALgSAHQg1AKgugbQgMgRgIgRQgNgTgHgVQABgZAEgZIACgTIAVgtIAIgeQAZg4AUg6IAWhAQACgSAAgRQACgZALgYQAFgPAIgNQANgLAPgKQAagUAdgOQAlgFAlgNIAUgSQARgMAPgOQACgGAAgIQgegBgWgSQgCgKAAgKIgPhBQABgSAEgRIgDgnQAGgaALgYQAFgSAHgRQAegYAmgKQBUACA6A5QAMAkgBAnIAAAnQgDAVgIATQgMAVgHAYIAAAUQAHARARAEIA4AuQAQAIASAEIgIgoIgBgnIAMgLIAHhUIAKAAIAPA8QAKgDAKAAQAZgEAZAIQAGAGAFAIQADAHAAAIIAAAxQAKAVASAKIAGATQABAMgBANQgGALABANQAHAZALAZQAJATABAUQgKAggHAgIAFAZIAFBZQADAMAAANQgbApgyAJIgZgFIgFAtIAABjIgDAUIAEAxIAGAYg");
	this.shape_60.setTransform(-263.8,23.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ai2HyIAAgiIAAhKIgPhjIgFAAIgGAdIAGAoQgBAXgEAWQgBASgKAQQhBAkhDggQgMgQgIgRQgNgTgHgVQgBgcAFgbIACgTIAWgtIADgUIAMgZIASgxQAZg9ANg/IACgnQAHgVAJgTIAIgTQAOgMAPgKQAbgWAggPQAegEAegHQAKgHAKgIQAdgUAPgeQgaAAgWgLQgGgNgCgPQgLgqgCgrIACgUQgCgRAAgRQAEgVAJgTIAIgSQABgLAEgLQAlghAzgGQA8ADAwAkQAaAmAEAvIAAAiQgIAmgOAlIgKAZQAAARACARQAOAAAJAKIgDAFQAiANAZAZQAWAIAXAEIgKgjIAAg2IANgGIACgYIAAg8QAIAAAHADQALAOgBASIAFAZQAJgDALAAQARgDARgCQAhAcgDAxQgBAQAHANQALAHAKAJIAFAeQgGAWgEAWIAaBGQgFAggIAkQABAoAEAoIAFAnIAAAUQgiA3hGAAIAACLIgEAjIAMA/g");
	this.shape_61.setTransform(-264,23.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ai0HyIAAgiIAAhKIgPheIgFAAIgHAYQACAUAFAUQgBAXgEAWQgCAUgKASQgPALgSAHQguALgrgTQgVgUgKgXQgNgQgFgTQgBgeAFgeIACgTIAUgnIACgQIAchKQAYg9AOg/IAAgUQAGghAMgfIAIgUQAPgOASgMQAWgSAXgOQAYgFAagDQAYgHAUgQIAZgXQAHgFAFgHQgCgKgKgEQgTgBgPgLQgJgZgDgcIgIgZIAAg7IgDgZQAFgaALgYQAGgaAPgWQAigUApgGQBfAMArBSIAFAtQgCAYgFAZIgbBGQAAARAEARIASACIAMAMIAYAQIAZAXIAyAMIgFhUIAPgeIgEgZIAJgyIANAHIAMA6IASAAIABAFIAFAAIACgFQAcgLAWAVQADAMAAANIACATQgDASACARQANAPAOAHIADANQAEAPgCAPIgMAdQAAASAIARQALAbADAbQgKAigDAjIAKBBIAAAeIAFAYQgHAigcAUQgPAGgPADQgUAAgUgDIAACQIgDAjIAMA/g");
	this.shape_62.setTransform(-264.2,23.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AiyHxIAAgiIAAhGIgPheIgEACQgJAhAJAjIgGAiQAAAPgFAPQgmAggzADQgdgIgYgSQgKgOgIgPQgNgSgFgWIAAgnQABgVAGgTIAQgeIAIgjQAZg9AUg+QAMgoAGgoIAAgUQAEgWAJgVQAGgRALgNQAQgOATgNQAUgQAZgKQAjgGAigNIAegbQAMgKAJgKQgCgLgJgEQgWgBgQgOIgVhVIAEgYIgEg3QAKgeAMgdQAEgTANgPQAbgRAggGQBIAAA8AqQAPAcAGAfIAABGQgLAqgRAqQAAARADASQAtASAoAiQAVAIAXgDQALgPgJgRIADgUQgBgXAEgUQAFgCAHAAQgIguANgrIAKAAQALAfgBAhIAaACQAVgJAWAEIAJAIIAFAKIABBGQAAAKAGAIQAMAFAJAHIAGAdQgKAegLAZQADAKAEAKQAKAWAGAWIgMBQIAMBYIAAAoQgKAjgjAPQgPADgOABIgZAAIAACLIgFAeIAFAZIAAAxg");
	this.shape_63.setTransform(-264.4,23.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("ADpAZIAAgxIACAYIAFAZgAjvAZIAHgiIAAAig");
	this.shape_64.setTransform(-259,71.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AivHyIAAgiQAAhTgUhQQgFAJgDAKQACAZAGAZQgBASgEARQgBAPgFAPQgRAWgaAJQgPAFgPADQgQgBgOgGQgWgHgSgQQgIgMgHgMQgOgWgJgXQABgVAEgWIAAgWIAWgsIADgUIAQgoIAJgdQAYhAAOhCIAAgiQAFgWAJgWQAFgPAHgNQAVgSAWgPQAOgNAQgJQAlgIAmgKQANgJALgMQATgOANgSQgCgKgKgEQgYAAgPgUIgHgoQgHgUgEgUIADgtQgEgOAAgPQAGgaAJgYIAFgIIgBgIQADgNAIgLQAegXAmgGIAZgFIAYAFQAzALAlAmQASA3gCA7QgLAtgPAtIABAiQAuATAmAiQAfAKAbgNQADgNgFgMQgCgRABgRIAGgiQAGgJADgMQgCgkAMgiIANAHIADASIAEAtQAGgEAIgBIAMABQATgGATgBQAOAMAGATQACAqgCAqQAKAAAJACQANAhgOAjQgJAOgDAPQAKAbAMAcQAAAOgEAPQgIAbgBAbIAKA3IAAAUQAIAugUApQgUANgXAFQgUAFgUgGIAACQIgFAeIAOBJg");
	this.shape_65.setTransform(-264.7,23.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ai3HwIADgTIAEg8IgUh3IgFAAQgDARAAASIAIAoIgFAeQgBAWgLAUQgOAMgTAHQg3ALgvgeQgKgNgIgPQgOgVgIgXQAAgQAEgOIAAgZQAJgcAOgaIADgZIAMgZQAZhFAThGQAFgjACgiQAFgXAJgVQAEgNAHgKIAYgTQAYgVAagPIBGgQQAfgaAhgYQgIgMgMgGQgVgBgQgQIgRhKIAAg3QgEgOAAgQQAGgZAJgYIAFgJIAEgVQAbgcAlgMQAwgCAtAJQA6AnAMBFIAAA2QgKAmgOAlQgCAWABAWQAMAAALACIARAOQAdAZAjAPQAfAGASgWQgBgNgDgMIAAg7IAMgLIAIhPIAOACIAGAXIAEAoQAKgDAKAAQAVgEATgCQAWAQABAbQgEAcACAbQAKAOAMAHQAHASAAAVQgLAZgNAYQAGAhANAlQgDASgGAUQgEAbADAcIAKA3IAAATIAFAZQgDAbgRAVIgPAIQgOAGgQADIgjAAIAACLIgFAdIAFAZIAAA2g");
	this.shape_66.setTransform(-264.6,24);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IACAZIAFAcg");
	this.shape_67.setTransform(-235.3,70.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ai4HwQAJgngCgoQgIg+gMg+IgFAAIgFAjIAKAtIgFAZIAAATQgPAlgnAPQgRAGgSAAQgUgFgUgJQgWgQgMgXQgSgZgHgdIAFgZQgBgSACgRIAWgsIADgZIAMgZIASg3QAVg/AHhCQAEgjAOghIAIgTQAQgPASgNQAXgTAagMQArgIAmgWQAcgVAPgeQgagCgWgJQgKgSgDgVQgIgbgFgbIAAgyIgEgZQAJgdALgdIABgLQAKgTASgOQAxgUA2ADQAxANAiAlQANAcADAgIAFAYQgBAcgGAbQgOAigJAjQgBANAHALIARAIIAqAfQAzAhArgeQAAgNgFgNQAAgUAEgUQAAgPALgIIAFAEIAFhaIAPAAIAFAUQgCAXAMATQAaABAcgGQAIAFAGAIQAFAGABAJQACAsgCAtQANAAAKAGIACAOQADAMAAANQgSAhgIAkIAQAoQABAPgFAOQgGAYgDAZIAFAZQAIA4ACA6QgMAfghAOQgPAEgPABIgYAAIAAA7IAFAoIAAAtIgFAYIAEAUIAAA7g");
	this.shape_68.setTransform(-264.5,24);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgDAeIAAg7IABAUIAGAng");
	this.shape_69.setTransform(-235.3,70.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Ai5HwQAKgngDgoIgTh8IgGAAIgBAUIgFALIAKAsQAAAPgEAOIAAAUQgPAlgnAQQgRAGgSABQgRgFgRgHQgagRgPgaQgRgXgHgbIAFgdQAAgSABgRIAWgtIADgYIAMgZIANgtQALggAJggQAIgcAFgbIAAgoQAFgWAJgVIAIgUQALgLAMgJQAagXAcgRQAcgGAbgFQAWgLASgRQARgPAPgPQACgIABgHQgbgBgWgKQgIgUgFgYIgNgsIADgjIgDgeQgBgPADgPIAQgsQACgNAGgMQAegaAngJIAnAAQA6AIApAqQAPAjAEAnIAAAjQgEAZgIAZIgQAnQAAATADAVQAMgBALACIARAPQAWASAXAQQATAGAVACQAXgCAOgVQAAgNgDgMIAAgeIAGghQAGgKADgLQABgkAJgiIAKAAQALAhgBAlQAJgDALAAIAngHQAdAggJAvQAAAPACAPQALAJAKAGQAHAOAAAPQgRAngNAkIAPAxIgKBPIAPBeIAAAjQggAzhDADIAABLIAFAoIAAAYIgFAZIAFAeIAAAPIAAAng");
	this.shape_70.setTransform(-264.4,24);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgDAUIAAgnIAHAng");
	this.shape_71.setTransform(-235.3,71.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ai6HwQAJgngCgoIgUh8IgFAAIgBAUIgFAMIAKArQAAAPgEAPIAAATQgHAZgTASIgmAPQglABghgQQgTgRgMgVIgRgYQgHgfAGgdIABgZIARgoIAIgiIAMgZIAhhtQAIggAFghIAAgiQADgMAFgMQAGgVAMgTQAQgOASgNQAUgSAYgLQAfgGAdgIQAVgPATgTQASgOAGgVQgSAAgQgDIgOgEQgKgRgDgVQgIgbgFgbIAAgoQgEgRgBgSQAHgeALgdQACgQAGgOQANgMAQgJQAtgQAxACQA9ARAjA1QAIAsgBAtQgJAugPArQgCASAHAQIARAIIAWAPQAXAUAbAQIAYADQARAFAQgHIARgXQABgLgFgKQgBgXAFgWQAAgJACgKQAIgEAFAEIAFhaIARAGIAIA7IAwgFIABgFQARAFALAPQADAMgBANIAAAsQgCAMAEANIAUAQQADANAAAQQgIAagPAXIgEAUQgCAJABALQAHAQAGATQgDASgFAUQgDAUABAUQAKA+AFA+QgKAkgjAPIgUAHIgigDIAABUIAFAjIgFA2IAOBPg");
	this.shape_72.setTransform(-264.3,24);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ai8HwQAKgngDgoIgTh3IgFAAIgCAPIgFALQADAWAHAWQAAAPgDAOIAAAUQgcA0g+AIQgfgIgbgTQgKgNgKgPIgOgUQgIggAGggIACgZIAQgoIADgUIAqhyIAIgnQAIgcAFgbIgDgUQAAgSAHgQQAHgaAOgXQATgRAVgPQAOgMAQgJQAigIAjgKQAfgbAigVIgFgUQgbAAgWgLQgIgUgFgYQgHgWgGgWIADgjIgDgeQAAgPACgPIAPgmQAAgNAFgNQAlghAygHQBHADAzAvQAQAmAFApIAAAeQgEAZgHAZQgJATgGAUQgBAUADAUQAMgBALACIALAKQAdAYAfASIAZACQAMACAMABQATgNAJgUIgFgUIACgeQACgRAFgQIAHgMIABgYQADgXAEgVQAIgGAJACQAGAIAAAKIAAAtIAaABIATgFIAFAEIAAgFQAVgDAMAWQABAMgBAMIAAAQIgEAUQgBARAHAQQAJAFAKACQADAUAAATQgMAagOAYQgCAMAAANIgBALIAJAcQgBATgFAUQgDAZABAZIAFAZIAFA2QAGAegHAeQgmAig3AAIAABaIAFAeIgFA2IAOBPg");
	this.shape_73.setTransform(-264.1,24);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("Ai7HwQAJgngCgoIgUh3IgFAAIgHAeQAEAVAGAXIgDAZIAAAUQgcA0g9AIQgkgHgbgXIgJgPQgTgZgIgeQABgUADgTIACgZIAMgZIANgxQAahIAUhIQAGgoABgoQAFgWAJgVQAFgNAGgMQALgMAOgJQAVgTAXgPIBKgVQAOgKALgNIAggeQADgIAAgHQgXABgVgIQgNgTgEgYQgJgYgEgZIAAgtIgFgZQAEgWAHgXIALgnQAMgQAPgMQAtgSAyABQBAAQAlA2QAIAsgBAtQgGApgPAmQgGAXAJAVQAHAFAJACIARALQAcAXAfASIAZACQARAFARgGIASgYQABgKgDgKQgBgPAAgPIAFgoIAQAAQgDguANgrIAJAAIAKBGIAVABQASgHAVgDQAHAEAGAFIAFAJIACAoQgEAYAAAVQAJANANAIQAGAQABARQgRAigNApQgBAPACAPIAGATIgJAqQAAAVACAVIAFAZIAEA7QAGAYgGAaQglAog5gBIAABfIAFAZIgFA2IAOBPg");
	this.shape_74.setTransform(-264.2,24);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ai7HwQAJgngCgoIgUh3IgFAAIgHAeQAEAVAGAXIgDAZIAAAUQgLAjgiAQQgqAMgqgOQgUgOgMgUQgTgZgIgeQABgUADgTIACgZIAMgZIANgxQAXg+ARg/QAJgiAEgjQABgkAKggQAEgOAGgLQAWgXAagTQAMgKANgIQAggJAhgHQAQgKANgOIAZgXQAHgFAEgGQgLgQgZgBQgMgJgGgOIgIgoQgKgYgCgZIAEgUQgEgWgBgXQAEgXAJgVQAFgVAIgTQAMgMAQgJQArgPAvABQBBASAkA5QAHAnAAAoQgBAXgGAWQgQAkgBAmQAIANAOADIARALIAsAjQATAHAVABIAoAEIACgOIAMgUIgFgZIALhBIAKAFIAKhZIARAGIACAYIAAAoQALgGAMAGIACAFIAGgJQAPgEAOgCQAQAKAHATQAAAQgDAOIAAAeQgBAPAGANQAJAFALACIAAAiQgNAfgQAdQgCARABASQADATACAUIgGAYIAKCLQAEARAAASQgjAvg/ACIAABkIAFAZIgFAdIAFA8IAAAng");
	this.shape_75.setTransform(-264.2,24);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ai8HwQAJgngDgoIgTh3IgFAAIgHAeQAEAWAGAWQgBANgCAMIAAAUQgPAogoAQQgRAHgRAAQgVgFgTgJQgUgOgMgUQgTgZgJgeQABgUAEgTIACgZIALgZIANgxQAbhKAUhLIAGgjIAAgoQAFgTAHgTQAEgOAGgLQAWgXAagTQAMgKANgIQAggJAggHQARgKANgOIAZgXQAHgFAEgGQgBgLgKgDQgbgBgQgUIgGgeQgJgbgGgbIADgZIgDgtQADgZAIgYIAFgJQAAgMAFgOQAOgQATgKQArgPAuABQAuAKAkAfQAQAbAFAfQAFAgABAhQgDARgEASQgLAYgHAZQgBAQADAOQAJAIAMADIAVAPQAWASAXAQQAUAFAUAAQAOAEAOgCQAIgIAFgJIAKgPIgCgyIAHgmIAMgVIADgyIAIgPIAKAAIAHAyIAVAUIACAFIAFAAIABgFIAcgPIAYAYIgEBkQANAAAKAGIAFAmQgKAYgPAVQgIAVAAAYQAEARABARQgEAVgBAXIAFA3IAAAdIAFAZIAAAUQAEAZgKAZQgnAcgxABIAABkIAFAZIgFAdIAFA8IAAAng");
	this.shape_76.setTransform(-264,24);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ai+HuQAJgngCgoIgUh3IgFAAIgGAeQADAWAGAWIgDAoQgOAtgtASQgRAGgSgBQgdgLgZgRIgigyQgIggAHggIABgZIAPgjIAFgZIAWg7QAZhMALhOQgBgUADgTIAIgUQAFgPAHgOQAMgPAQgLQAYgXAegOQAigHAfgLQAcgaAfgWQgDgLgHgHQgagCgVgPIgJgoQgIgWgFgWIABgoIgEgjQAFgZAJgYIAFgJQABgMAEgOQAXgXAegLQBSgKBCAsQAVAgAEAlIAFAZQAAAmgMAlQgLAYgDAaQABAKADAJQAJAJALACIAWAPQAZAWAeAPIAdACQANADAMAAQAKgGAHgLIAKgLQAAgVgCgYIAFgZQAAgJACgKQAIgIAFgMIAAgeQADgUAHgUIAPAAIAFBGQAMgEAMAAQAVgEATAAQAPASAAAYIgFBLQAMAAALAGIADAOQADAMgBAMQgJAVgNATQgKAVgBAYIAFAdQgCASgEAQIAMCkQgKAtguASQgUACgTgBIAABkIAFAZIgFAdIAFA8IAAAng");
	this.shape_77.setTransform(-263.9,24.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ai+HwQAJgngCgoQgJg5gLg5IgFAAIgHAZQAEAWAFAWIgCAUIAAAZQgQAqgsAQQgRAGgRgBQgegLgZgRIgRgZQgNgTgIgVQgCgZAFgYIACgZIAPgjIAFgZIAVg7QAZhMAMhOQgBgUACgUIAJgTQAEgPAHgOQANgPAPgLQAZgXAegOQAigIAegKQAcgaAggWQgDgLgIgHQgZgCgVgPIgJgoQgIgWgFgWIAAgoIgEgjQAGgZAJgYQADgSAHgRQAhgeAtgKQBEABA3AnQAUAgAFAlIAFAZQgBAmgLAlQgJATgFAUIABAoIAXABIAHAHIA2AnIBGALIAdghIgEgUIABgPIAKg1IAIgQIAAgUIAKgyIASAGIACAYIAAAoQALgGAMAGIACAFIAGgJQAhgJATAbQAAASgEARIgBAtQAIAOAMAHQAGAQAAARQgIAYgPAVQgIAVgDAYIAEAiIgEBPIALByQgLAtgtASQgUACgUgBIAABkIAFAZIgFAYIAFBBIAAAng");
	this.shape_78.setTransform(-263.9,24);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ai+HwQAJgngCgoQgJg5gLg5IgFAAIgHAZQAEAWAFAWIgCAUIAAAZQgQAqgsAQQgRAGgRgBQgegLgZgRIgRgZQgNgTgIgVQgCgZAFgYIACgZIAPgjIAFgZIAVg7QAZhMAMhOQgBgUACgUIAJgTQAEgPAHgOQANgPAPgLQAZgXAegOQAigIAegKQAcgaAggWQgEgLgHgHQgZgCgVgPIgJgoQgIgWgFgWIAAgoIgEgjQAGgZAJgYQADgSAHgRQAhgeAtgKQBEABA3AnQAUAgAFAlIAFAZQgBAmgLAlQgJATgFAUIABAoIAXABIAHAHIA2AnIBVAMIACgOIAOgYIgFgaIAKg6IAGgIIAHghQgBgXALgWIAKAAIAFBGQALgGAMAGIACAFIAFAAIABgFQARgIARgBQAQAMADAVIgFBBQAAAKAGAIIARAMQADAOgBAPQgMAfgQAdIgCAPQgDAOAAAQIADATIgEAdIAAAtIAEAZIAAAiQAMA7gaAxQgMAHgNAFQgNADgMABIgZAAIAABkIAFAZIgFAYIAFBBIAAAng");
	this.shape_79.setTransform(-263.9,24);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("Ai/HwQAKgngDgoIgUh3IgFAAIgGAeQADAWAGAWIgDAoQgNAtguASQgRAGgSgBQgdgLgZgRIgigyQgIggAHggIABgZIAPgjIAFgZIAWg7QAZhMALhOQgBgUADgUIAIgTQAFgPAHgOQAMgPAQgLQAZgWAdgPQAigIAfgKQAcgaAfgWQgDgLgHgHQgbgBgVgVIgFgeIgOgnQgCgXADgWIgDgoQADgZAIgYIAFgJIAAgQQAGgLAIgJQAtgcA2gCQA7AIArAqQANAaADAcQAEAbABAcQgEAZgIAZQgIATgFAUQAAAPADAPQAJAIALADIAWAPQAZAWAeAPIAdACQAPADAPAAQALgHAFgLQAHgKADgKIgBgoQABgZAOgSIAFADIAAg2IAKgjIAKAAQALAhgBAlIASAAIABAFIAFAAIACgFQAMgGALAGIAAgFQANgFAKAKQAGAMABAMQAAAUgCAUQgEARACASQAKANALAHQADARAAARQgNAdgQAaQgDATgBAVIADAdIgFAiIAFBBQACAsAEAtQgKAtguASQgTACgUgBIAABkIAFAZIgFAdIAFA8IAAAng");
	this.shape_80.setTransform(-263.8,24);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("Ai+HwQAJgngCgoIgUh3IgFAAIgHAeQAEAWAFAWIgCAyQgRAkgmAPQgRAHgRAAQghgKgagSIgNgUQgQgVgKgYQgCgZAFgYIACgZIAQgoIAEgUIAYhKQALggAJghQAIgdAGgeIAAgjQADgWAIgVQAEgOAGgLQANgPAPgLQAUgRAUgPQAigLAjgHQAZgRAUgVQAMgKAJgKQgBgLgKgDQgagBgRgUIgIgoQgIgWgFgWIADgUIgDg3QAHgbAJgaQABgQAIgPQAlgcAvgHQBSAFAzBBQAEAOABAPIAFAoQgBAegGAeQgPAhgDAkQAGARARAEIAMAKQAaAVAcASQAUAFAUAAQAPADAPAAQAKgGAGgLIALgLQAAgNgDgMIAAgZIAFgoIAPAAQgCgvARgqIAFAAQAMAhgCAlIAugEIAJgGIAFAAQAKAIAIALQACAYgBAaQgFAUABAUQAOAOAKAQQgDAogWAiQgFAWAAAXIAAAdQgEAdAAAeIAEAeIAAAnIAFAZIAAAUQADAMABANQghAzhBADIAABkIAFAZIgFAdIAFA8IAAAng");
	this.shape_81.setTransform(-263.9,24);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AjAHwQAJgngCgoIgUh3IgFAAIgGAeQAEAVAGAXIgEAZIAAAUQgbA0g+AIQgggGgbgTIgMgUQgQgVgLgYQgBgZAFgYIABgZIARgoIADgUIAZhKQALggAJghQAIgbAFgbIAAgoQAEgWAIgVQAEgOAGgLQAMgPAQgLQATgRAVgPIBPgXQASgPARgSQAMgKAJgKQgCgLgJgDQgRgCgRgGIgKgSIgIgoQgFgMgDgMIAAgtQgEgUgBgUQAGgcAJgaQAEgTAHgQQAlgcAugHQBXAGAxBFQAGAaABAcQABAjgIAjQgPAkgCAmQAIANAOADIARALQAYAUAaASQARAEARABIAUADQAegFANgcIgDgjQAEgWABgXIAMgLIADgmIAKgoIAOACIAGAXIAAAoQAdABAZgLIAFAAQAKAJAHAKQAEAWgBAXIgCAZQgEAMADANIAUAPQADAHAAAIQADAMAAAMQgLAXgPAWQgHARAAASIAAAsQgEAYgBAZIAFAeIAFBUQAEARgBASQgjAvg+ACIAABkIAFAZIgFAdIAFA8IAAAng");
	this.shape_82.setTransform(-263.7,24);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("Ai+HwQAJgngCgoIgUh3IgFAAIgHAeQAEAVAGAXIgDAZIAAAUQgcA0g9AIQgkgHgbgXIgJgPQgTgZgJgeQABgUAEgTIACgZIALgZIAOgxQAahIAUhIQAFgoACgoQAEgTAJgTQAFgQAHgOQALgMANgJQAVgTAYgPIBKgVQAOgKALgNIAggeQADgIAAgHQgYABgVgIQgMgTgEgYQgJgYgEgZIAAgtIgFgZQAGghAMgfQABgNAGgMQAzgpBDABQBAAQAmA2QAIAugBAwQgEAhgNAfQgJAWACAXQAIANAOADIAVAPQAaAVAdAQIAeACQARAFASgDQAIgIAHgJQAHgagBgdQAEgWAGgVQAFgHADgJIAAgZQAEgXAGgWIAOACIAGAXIAAAoQARABASgBQAOgFAQACQATAfgFApIgEAUIADAUIgEAFQANAAALAGIABAOQAFAWgKAWQgSAYgHAfIADAnIgHAnQAAAUAEAUIAAAxQALAzgLAxQgnAegygBIAABfIAFAZIgFA2IAOBPg");
	this.shape_83.setTransform(-263.9,24);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AjBHwQAKgngDgoIgTh3IgFAAIgCAPIgFALQADAWAHAWQAAAOgDAPIAAAUQgcA0g+AIQgggHgagTIgigxQgIggAGggIACgZIAQgoIADgUIAqhyIAIgnQAJgfADgdQgDgMgBgNQAFgTAJgTQAFgTALgQQATgRAVgPQAOgMAQgJQAigIAjgKQAfgcAigUIgFgUQgYABgVgIQgLgRgDgVQgKgdgGgeIABgoIgDgeQAEgZAKgYIAFgJIAAgQQAFgLAIgJQAtgdA2gBQBEAKApA3QAHAWADAWQAEAWAAAXQgCAUgEAUIgWA2QAAATAEAVQAMgBALACIALAKQAdAYAfASIAZACQAYAGAXgHQALgQAEgSIgCgZQAEgZAHgXQAGgKACgLQABglAOghIAMAKIADA3IAZAFIAAAEIAFAAIAAgEQAQgJASADQAMAKAGAPQAAAPgDAPQgCAbAAAcIgDAFQANAAAKAGIADAOQADAMgBAMQgMAcgQAbQgGATABAVIADAYQgFAWgDAWIAFAeIAAAtIAFAnQAIAkgOAiQgoAZgwgBIAABfIAFAZIgFA2IAOBPg");
	this.shape_84.setTransform(-263.6,24);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AjAHwQAJgngCgoIgUh8IgFAAIgCAUIgFALQAEAWAGAWQAAAPgDAOIAAAUQghA2hCAEQg2gagdg0QgIgeAGgdIACgZIAQgoIAJgiIALgZIAZhLIAIgnQAKgjAEgjQAAghANgeQAEgOAIgLQATgRAUgPQAOgMAQgJQAjgIAigKQAggbAhgVQgCgLgIgHQgZgDgUgOQgHgYgEgaQgJgVgEgXIAEgeQgDgUgBgUQAEgXAJgVQAFgVAIgTQAIgJAKgGQArgVAuABQA3AHAqAmQASAlAEAqQAAAmgHAlQgQAkgBAmQAIANAOADIAVAPQAYAVAaAQIAeADQAWAFAVgHIAOgTIgBgoQAEgZAGgXQAFgHADgKIAAgYQAEgXAGgWIAOACIAGAXIAAAoQALgGAMAGIACAEIAFAAIABgEQAbgJAUASQAGAXgFAWIAAAUQgFAVAPAQIAKADQAEAWgBAWQgSAigPAkQACAUADATQgFAagDAcIANCBIAAAUIgFAUQgnAkg3gCIAABaIAFAeIgFA2IAOBPg");
	this.shape_85.setTransform(-263.7,24);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AjAHwQAJgngCgoIgUh8IgFAAIgCAUIgFALIAKAsQAAAPgDAOIAAAUQgIAZgSASIgcAKQgSAGgRABQgXgHgWgKQgTgRgMgVQgRgXgGgbQABgRAEgRIABgeIAUgmIAFgfIAMgZIAYhLQAOgxAIgyIAAgjQADgMAFgMQAFgSAIgQQASgRAUgPQAXgTAbgMQAcgFAbgIQAVgOASgTQATgOAGgVQgaAAgXgLQgIgSgEgVQgJgZgEgYQgBghgDggQACgaAKgYQAFgXAIgVQA1gqBGACQA3AOAlAuQAJAdACAeIAFAZIgHAtQgPAkgIAmQAMAZAcAMQAbAXAbASIAeADQARAEASgCQAPgLAIgRIgDgZQAEgbAHgaQAGgKADgMQAAghAKgeQAHgFAHgBIAFBBQAHgEAIgBIAMAGIAhgEQAUAMAEAZIgEAUIAAAUQgEAPAEAPQAIAJAJAGQAEAOADAPQgNAlgUAhQgBAbAFAbIgIAnIADA8IAFAYIAAAZQADAZACAZQggA5hEgDIAABVIAFAjIgFA2IAPBPg");
	this.shape_86.setTransform(-263.7,24);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Ai/HwQAJgngCgoIgUh8IgFAAIgCAUIgFALIAKAsQAAAPgDAOIAAAUQgOAjgkAQQgRAHgRACQgOgDgLgGIgUgGQgXgRgNgXQgRgZgHgdIAHg8IAVgtIAEgYIALgZIANgtQAMggAIggQAIgcAGgbIAAgoQAEgTAJgTQAEgQAIgNQAQgPASgNQASgQAWgMQAlgJAlgLQAQgNAOgQQASgPAHgUQgagBgWgKQgIgSgDgVQgJgbgHgbQABgQADgOIgEgtQAIgeALgdQADgTANgPQAggVAmgFQA/AAA3AjQAZApAFAwIAAAoQgDARgEASQgLAYgJAZQgBAUADAUQAMgBALACIAzAqQAaAMAdAEQAbABARgUQACgUgBgUQAEgZAHgXQAFgHADgKIAAgiQAEgcAUgFQAGAKAAANIAAAjIAZAEIAAAFIAFAAIAAgFQAagIAWASQAFAUgEAUQgCAbABAcIgEAFQANAAALAGIACANQAEAPgCAPQgNAagPAYQgFAOAAAQQAEATABATIgFAZIAAA8IAFAdIAFBGQABAMgDANQgnAmg6ABIAABLIAFAoIAAAYIgFAZIAFAeIAAAPIAAAng");
	this.shape_87.setTransform(-263.8,24);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ai/HwIADgTIAEg8IgUh8IgFAAIgCAUIgFALIAMAwIgFAZIAAAUQgQAlgmAOQgPAGgPADQgXgHgWgJQgWgQgNgXQgSgZgGgdIAEgZQAAgSACgRIAVgtIAEgYIAMgZQAUg5APg5QAIgeADgeQgBgUACgUIAKgXQAGgSAJgQQAPgPASgNQATgQAVgMQAogKAogMIAjgkQAQgIADgSQgdgBgYgOQgHgVgEgYIgLgiIAAg3QgDgOAAgQIAMgjQAFgXAIgVQA3grBIADQA2APAiAtQAJAfACAhIAEAUQgDAZgFAZQgNAfgIAhQgBAKADAKQAKAIALADIAVAPQAXAVAbAQIBFALIANgYIgCgjIAEgyIAJgCIAHg0IAJgjQAIABAGAFQAIAZgCAdIAXAEIACAFIAFAAIACgFQAfgGARAaQAAAhgEAgIACAUIgEAFIAZAFIADAsIggBGIAIAdIgKA0IACAvIAEAZIAAAYIAGAZIAAAeIgHAjIgmAYIgZAFIgeAAIAABBIAFAoIAAAiIgFAZIAFAeIAAAPIAAAng");
	this.shape_88.setTransform(-263.8,24);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ai/HwIADgTIAEg8IgUh3IgFAAQgDARgBASIAJAnIgFAeQgBAXgLAUQgNALgPAHQg2ANgygaQgMgQgKgRQgQgXgGgaIAEgZQAAgSACgRIAVgtIAEgYIAMgZQAQgqANgrIADgTQAMglAHgmIAAgjQADgLAFgMQAFgSAIgQQAUgTAXgQQASgPAWgJQAjgHAjgMQAPgNAOgOQATgOAGgVQgagCgWgJQgJgUgEgYQgIgYgGgZQACgQADgOIgFgtQAIgeALgdQADgTANgPQAggWAmgEQBAAAA2AjQAZApAFAwIAAAoQgDARgEASIgWAxQAAAUAEAUQAwAUApAhIBFALIAMgYIgBgoIAGgXIgCgRQALgHAFgNQgDgkANgfQAHgCAHAAIAAAjIAFAYQAHgDAIAAIAIAFIAlgBQAXAZgDAnQgGAUADAUIAUAPQAFATAAAUQgGASgIARQgNASgFAWIAKAiIgKAxQAAAoAEAnIAGAZIAAAeQAEAUgHAUQgnAjg1gBIgFAyIAFAZIAABAIgFAeIAFAZIAAA2g");
	this.shape_89.setTransform(-263.8,24);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AjAHwIAEgTIADg8IgTh3IgGAAQgDARAAASIAJAoIgGAeQgBAWgKAUQgPAMgSAHQg3ALgwgeQgKgNgIgPQgOgVgHgXQAAgQADgOIAAgZQAKgcANgaIADgZIAMgZQAZhFAThGQAFgjACgiQAFgUAIgTQAFgPAIgNIAYgTQAXgVAbgPIBFgQQAfgaAigYIAAgKIgUgIQgTgBgPgLQgGgRgCgSIgNgsIAAg8IgEgZQAJgdALgdQABgKAEgLQAdgeAngKQAtgCAsAJQAvAbAVAzIAGA7IgFAjIgYBFQgCAQAEAOQAJAIAMAEQAgAaAiAYQAiAIAjAFIALgZIgBgjIAHgrIAIgQIAAgUIAPg3IAKAAIAFBBQAQgFATAAIAdABQAZAlgKAzIAAAZQAMAAALAGIAFAnQgGARgJARIgNAUQgEAMAAANQAHATACAUQgHAkgDAmIAFAZIAFA7IAFAZQgCAbgSAVIgPAIQgOAGgPADIgjAAIAACLIgFAdIAFAZIAAA2g");
	this.shape_90.setTransform(-263.7,24);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ai4HyIAAgiQAAhTgThQQgGAJgDAKQADAZAGAZQgCASgDARQgBAPgFAPQgSAWgaAJQgMAFgNADQgpgFghgZIgPgYQgPgVgIgYQABgVAEgWIAAgWIAVgsIADgUIAehUQAOgoALgoIAIgjIAAgiQAGgbAMgbQADgKAGgIQAPgOASgMIAegYQAmgMApgJQAVgPATgTQARgMAIgTIgZgFQgNAAgLgGQgIgUgEgXQgIgZgGgZIAFgjQgDgTgCgUQAHgcALgbQACgPAGgPQAggcApgGIAZgFIAYAFQASACARAEQAnAYAYAnQAHAqgBAqQgFApgQAnQgJATACAVQAIAMAOAEIAVAPQAVATAYARQAVAGAXABQATAEAOgOQAEgPgCgPQAAgbAHgaQAGgJACgMIAAgeQAEgUAGgUQAHAAAHADQAIAagCAfQAMgHANAHIAAAFIAFAAQAegLAWAaQgDAtAGAqQAJAGAKABQABAhgGAgQgTAYgEAeIALAZQAAALgEANQgIAdgBAeIAPBpQABAXgIAVQgoAig0gEIAACQIgFAZIAGA2IAGAYg");
	this.shape_91.setTransform(-263.8,23.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ai5HxIAAgiQAAhTgUhQQgFAJgDAKQADAZAFAZQgBASgEARQgBAXgOAUQggATglAHQgNgDgMgFQgPgGgPgHQgNgNgIgPQgMgRgKgSQgEgjAEgjQAIgcAOgaIAIgjQATgvASgvIAIgjQAIgYAFgaIAAgTQAGgmANgkIAHgSQALgKANgIQAegZAigRQAegFAegIIBAgwQgGgKgJgHQgZgCgSgUIgFgjQgIgZgDgZQgCglACglQADgSAHgRQAHgbANgXQAUgRAYgLIAZgCQAUgEAUADQAYAEAYAIQAoAaASArIACAZIAFAZQgBAdgGAeQgOAigJAkQAAAKACAKQAKAIALADIA+AzQAQAFASACQAZAGARgQIgBgjQAEgYAGgYQAIgLABgPQgBgiALgfIAKAAQAKAdAAAfIAFgEIAZAFIAZAAQAUAIAHAVIgDA7QABANAJAKIAIAEQAIAUgBAXIgMAiQgKAMgHANQABANAGAMQAGAPgBAOQgIAegFAdIAPBuIAAAYQgeA6hFACIAACLIgFAeIAFAYIAAAxg");
	this.shape_92.setTransform(-263.7,23.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ai5HwIAAgiIAAhFIgPheIgFABQgIAhAIAjIgFAjQgBAPgFAPQglAggzACQghgIgZgWIgOgYQgNgSgFgWIAAgoQABgUAGgTIAQgeIAJgjQAYg9AUg/QANgnAGgoIAAgUQADgWAKgWQAGgQAKgOQARgOASgMQAVgQAYgLQAkgFAhgNIAegcQAMgJAJgLQgBgKgKgEQgTgBgPgLQgGgLgCgMIgQhBQAAgPADgPIgDgxQAGgXAJgWIAFgIIAAgRQADgIAGgHQAcgWAkgIQBRgCA9A0QASA1gDA4QgEAhgMAgQgMAXAAAbQAMAOARAJQAfAaAhAUQAPAEAPABQASAFAPgKQADgUgBgZIAEgTIACgTIAIgQQADgmAHglIAOADIAGAWIAAAoIAFAAIAAgFQAMgGANADQAagBAXAOQAHAegCAiQgDANACAMQAJAJALAHQAHASgBAVQgFARgHARQgJAMgGANQAEAWAIAXIgMBIQAHBBAFBBQgIAngkARQgPADgPABIgZAAIAACLIgFAeIAFAYIAAAxg");
	this.shape_93.setTransform(-263.7,24);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Ai5HyIAAgiIAAhKIgPhZIgFABQgJAfAJAgQgBAUgEAUQgBAUgLASQglAZgtABQgdgJgYgRQgKgOgHgOQgNgTgGgVQgBgeAFgeIACgTIARgjIAKgjQAbhCAUhEQAKggAEggQACghAMgfQAGgQAKgOIAYgTQAZgUAegOQAhgFAggKQAegaAigUIgFgUQgXABgVgHQgLgUgBgXIgMgoQgCgWABgXIAAgsQAEgVAJgTQAFgVAIgTQAjgfAwgIQARgBAQAEQAaAEAYAIQAQALAOANQAaApAEAxIAAAiQgDASgEARIgWAyQgCAVABAXQAtASAnAjQAOAFAQACQARAEARgCQAIgXgCgdIAGgmQAGgJADgMQgBglAPghIAFAAQAMAcgCAgQAJgEAKABIAIAEIAXgBQAYAGALAYQgGApAGAkQAJAGALABIAFAjQgDAMgEANQgOAXgHAVIAQAoQgBALgDANQgHAbgCAbIAKBVIAAAsQAAAKgDAKQgoAkg5gBIAACLIgFAeIAFAYIAAAxg");
	this.shape_94.setTransform(-263.7,23.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ai4HyIAAgiIAAhKIgPheIgFAAIgHAYQACAUAFAUQgBAXgEAWQgCAUgKASQgRANgVAHQg2AIgtggQgJgMgGgMQgPgVgFgYIAAgjQADgZAIgYIAQgdIAFgaQAchFAXhGQAIgbAEgbQACgkALghQAGgPAHgPQAPgOASgMQAWgSAXgOQAYgFAZgDQAZgHAUgQIAZgXQAHgFAEgHQgBgKgKgEQgTgBgPgLQgGgLgCgMIgNg3IAAg7IgCgZQAFgaAKgYQAHgaAPgWQAlgVAqgFQBcANApBRIAAAUQAEARABASQgFAjgLAiQgQAgACAhQAIAIALADIALAMIAZARQATATAaAJQAbAHAYgJQgCgJgDgIQAAgPADgPQACgPgCgOQALgIAEgMQgCgnAMghIAKgDIAFAPIACAeIAaALIAHAJIAGgIQAYABARARQADAJgBALIAAAnQgBAPAHAOIARAMIAGAdQgDAXgLAVQgGAKgFAKQAFAWAKAXQAAAOgFAPQgHAbgCAbIAKBGIAAAeQAGAYgIAZQgYAYghAJQgUAAgUgDIAACLIgFAeIAFAYIAAAxg");
	this.shape_95.setTransform(-263.8,23.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("Ai3HxIAAgiIAAhLIgPheIgFAAIgGAZIAGAoIgFAsIgLAmIgmASIgoAJIgygWIgUgcIgXgoIgBgsIAGgoIAWgtIADgTIAlhaIAfh3IACgiIAUgxIBDg1IBVgWIBAgsIgFgUQgPgBgOgDIgOgDQgKgRgCgVIgOg2QAAgQADgOIgDgtQAEgUAJgTQAIgkAXgbQAYgNAagGQBLgDA9AuQATAiADAnIAAAyQgFAcgLAaIgMAZQgCAWAAAXQAmANAgAeQAlAUAqABQgEgWgBgWQACgUAEgSIAIgMIABgjQAAgXALgTQAGgCAIAAIAFA2QAGgEAJAAIALAGQAQgBARABQAcAagDAqQgDAMAAANQAOAOAOAUQAAAcgIAbIgOAVQACAJAEAKQAHAQAEASQgGAjgJAiIAKBUQADAbACAcQgkA2hEgFIAACQIgEAjIAMBAg");
	this.shape_96.setTransform(-263.9,23.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("Ai1HyIAAgiIAAhKIgPhjIgFAAIgHAdIAHAoQgBAXgEAWQgDASgJAQQgRAOgVAIQgOAFgPADQgigHgegTQgNgQgIgRQgNgTgHgVQAAgcAEgbIADgTIAVgtIAEgUIAQgjQATgvAOgvQALgiAIgjIAAgeQAEgUAJgTQAFgPAIgOQANgMAPgKQAZgUAegOQAjgGAigLQALgIAJgJQAUgPARgQQACgGABgIQgbABgWgMQgHgNgBgPIgNg3QgCgqACgqQAIgcAKgbQACgMAGgNQAxgmA/gBIAeAIQASAEARAJQA3BLgMBhQgJAZgLAZQgGAMgCANQAMAaAbAQIAtAjQAfALAhABIgFhPIANgLIAHhUIAKABQAMAOgCAUQAeAXAwAIQAKAXgDAZIAAAyQAMAAALAGIADAOQADAegLAdQgJAMABANQAMAbAEAbIgKAnQgDAbABAcQAHAvADAvQABANgCAMQgqAog9AAIAACLIgDAjIAMA/g");
	this.shape_97.setTransform(-264.1,23.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ai3HwIAAgiIAAhPIgOhjIgFAAIgGAnIAGAeQgBAZgEAZQgDASgJAQQgRAOgVAGQg3AIgsggQgKgPgHgPQgMgTgGgVQAAgZAEgZIADgTIAVgtIADgUIARgjIANgnQALgbAJgcQAMgiAGgjQAEgpAPgmQAFgMAHgLQASgPAVgNQAQgNATgKIBKgRQAVgOATgTQAPgLAEgTQgagBgWgNQgGgPAAgPIgPg8QABgSAEgRIgEgnQAHgaALgYQAHgbATgVQA+gaBCANQAjANAbAcQAPAcACAgQABAggBAgQgHAfgNAdQgGAMgEANIAAAiQAsASAkAjQAcALAfABQgGglAHglIAIgPIABgPQgBghAGggQAHAAAHACQALAZAAAcQAMgHANAHIAAAFQAggIAZAXQADAXgBAaQgCANABAMQALANANAIIAFAdQgCAUgIATQgGAMAAANQAKAYAIAZQgFAZgIAYIgCAZIAKB3QAAANgCAMQgoAqg+gCIAACLIgEAjIAMA/g");
	this.shape_98.setTransform(-263.9,24);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Ai3HyIAAgiIAAhPIgPhjIgEAAIgHAnIAHAeQgBAZgFAZQgCASgJAQQgRANgVAGQgzAIgrgbQgNgQgJgSQgMgTgGgVQAAgZAFgZIACgTIAVgtIADgUIARgjQATgxARgyQAOgqAGgqIAAgTQAFgSAIgRQAFgPAIgNQASgPAVgNQAUgQAYgLQAngFAkgNIAZgXQAOgKANgLQACgGAAgIQgagCgWgJQgJgbgEgfQgFgPgDgPIADgxQgDgUABgUIAUgwQABgLAEgLQAxgnA/AAQA+APApAxQAFAPACAPQAFAigBAjQgKApgRAnQgGARAAASQASAUAZAPQAVATAXARQAYAIAaAAIgFhKIAPgFQgHguAMgsQAHABAHAFQAIAZgCAdQAIgIAMgBIAIAFIARgBQAVAEAQAQQACAMAAAMQgBAXABAWQAHARAQAJQAFAIACALQAAAZgHAYQgEAKgCAKIASA2QgGAigJAjQABASAEARQAEAvABAvQAAASgHARQggAZgoADQgIgCgHABQgLARABAVQABA0gBA0IgFAUIAFAnIAHAig");
	this.shape_99.setTransform(-263.9,23.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("Ai4HyIAAgiIAAhPIgOheIgFAAQgFARgBARIAGAZQgBAcgEAbQgDASgJAPQgPAMgSAGQg1AKgugbQgMgQgIgSQgNgSgHgWQABgZAEgZQAAgMACgMIAVgoIAIgeQAchAAWhBIARgxQACgSAAgRQAEgeAOgdQADgJAFgJQANgLAPgKQAagUAdgOQAggFAggIQANgIAMgKQAbgSAMgbQgagBgVgNQgIgTgBgVQgIgcgFgbIAFgZQAAgRgCgRQADgdAMgaQAFgVAIgTQANgMAQgIQAogQArACQBOAWAfBIIAFAtQgBAYgGAZQgUArgIAvQALASAUAKIAxAnQAXALAbABQgHgbAFgcIADgSQAGgJACgMIAAgyQADgSAQAAQAHASABAUQALAKAPABIAHAJIAFgIQAYACATAQQAIAXgCAaQgEASAGAQIAVAMIAHAiIgMAnIATBPQgKAggHAgIAKBGIAAAsQADANAAAMQgHAUgQANQgQAJgSAEQgXAFgWgGIgFAtIAABjIgDAeIALA/g");
	this.shape_100.setTransform(-263.8,23.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Ai4HyIAAgiIAAhPIgPheIgFAAQgFARgBARIAGAZQAAAcgFAbQgDARgJAQQgTAOgYAGQgPAFgOABQgNgDgMgFQgVgIgRgNQgKgPgHgPQgNgWgHgXQABgXAEgWIACgYIAVgoIAJgjIAMgUIAWg7QAWg2AMg3IAAgdQADgNAFgMQAKgaAQgXQAWgRAXgPQALgKAOgHQAngGAogKQASgOARgQQAQgMAJgSQgagCgWgJQgJgXgDgZIgKgtQADgZAAgYIgDgPQADgaALgYQAHgXAKgWQAygjA+ABQAxAMAnAgQAWAygBA3QgBAZgFAYIgUAtQgHAOgBAQQAMAYAbANIAoAjQAVAKAYACIAAhBIAIgTIAGhQIATAHIAGAwQAHgEAIAAIAMAFIANgBQAPABAPAGQAOANABATIAABBQAMAAALAGQAHAVgBAXQgGAUgCATIAWA3QgDAagJAbQgDAbABAcIAFAeIAAAoQAEAQABASQgLAighAQQgNAEgMABIgjAAIgFAsIAABfIgDAeIAMA/g");
	this.shape_101.setTransform(-263.8,23.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("Ai5HyIAAgsIAAhKIgPhZIgFAAIgHAVIAHAmQgBAZgDAZQgDAUgKARQgPALgSAGQgOAFgOAEQgggFgdgPQgUgTgMgYQgMgTgGgVQABgXAEgWIACgYIAWgoIAIgeIAMgZIAMgiQAWg2ASg4QAFgYAEgZIABgYIAMgZQAGgPAKgOIAZgRQAVgRAYgOIBPgRQATgNAQgQQARgMAIgTQgbgDgVgMQgHgTgBgUQgJgcgFgbIAFgZIAAgiQACgaAJgYIAKgSQABgKADgMQApglA5gCQBHAKAtA2QAHAUACAUQAEAWAAAXQgEAhgMAfQgMAYgHAaIAAAiQANAAALACQAQANAPAPQAbAWAhAIIAAgtIACgWIAMgDQgHgsAHgtQAIAAAGACQALAYAAAdQAPgFAPABQAkAAATAdIAAAxQAAANAKAKIARANQAHAVgBAXIgHAOQAAASAHARQAKAZAGAYQgCARgGASQgHAfAAAhIAFAZIAAAeQAHAlgIAlIgOANQgJAHgKAFQgNAEgMABIgoAAIgFAxIAABaIgDAUIAFAxIAFAYg");
	this.shape_102.setTransform(-263.7,23.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("Ai6HyIAAgsIAAhKIgPhZIgFAAIgGAVIAGAmQAAAZgEAZQgCARgJARQgaASghAHQgwgDgjgfIgLgZQgLgRgIgSQgBgZAFgZQAAgRAFgRIATgeIAHgeIAghKQAPglALgmQAKgbAFgbIAAgYQADgNAFgMQAIgVAKgTQANgMAQgJQAdgXAjgOQAegDAegIQANgJALgLQATgPAVgKIAAgKIgUgIQgPgCgNgGQgFgJgBgJIgHgoQgIgbAAgcQADgOAAgPIgDgUQAGgdAMgaIAJgeQAegdAqgKQBNABA7AwQASAwgBA0QgCAegJAdQgRAfgHAiQACAMAJAKIAMAEQApAlAyAVIgFhBIAOgOIgEgZIAFg3QAHAAAHACQALAYAAAdQAMgFANABQAjgBAYAZQADAMgBAMIADAjQAAAHACAHQANAKALALQAFAYgFAZQAJAqAPAqIgPBeIAFAZIAAAeQAIArgKApQgKAMgNAJIgPAHQgeAEgdgCIgFA7IAABVIgEAdIAAA7g");
	this.shape_103.setTransform(-263.6,23.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("Ai7HyIAAgsIAAhKIgOhZIgFAAIgHAVIAHAhQgBAegEAeQgDARgKAPQgPAJgRAHQg1AJgugbQgMgRgIgSQgLgRgHgSQgBgfAFgdQAJgiASgeIADgUIANgZQAXg2ATg3QANgnAFgoQABgaAMgXQAIgVAOgRIAjgXQAQgNASgKIBLgPQAUgOAUgQQAQgMAIgSQgbgDgWgMQgGgMABgMIgPhBIAFgxQgBgVACgTIAOgjQAFgVALgTQAcgVAjgIQBRABA8A1QAKAbADAcQADATABAVQgFAhgLAfQgMAVgHAYIAAAnIASACIAbASIAjAgIAYAIIgFhBQAIgIAHAIIgDhPIAIgPIAKAAIAPA3QALgGAMAGIACAFIAFAAIAGgIQAdAEASAYQACAVgBAXQgBAPAHANIAWANIAHAiQgFAOAAAPQATAtAIAsQgKAggHAgIAFAjIAFBZQAAANgCAMQgVAdgkAHIgPAEIgegFIAAAeIgFAiIAABQIgEAdIAAA7g");
	this.shape_104.setTransform(-263.5,23.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("Ai7HyIAAgsIAAhKIgPhZQgFAJgDAKQABASADARQgBAcgEAbQgCASgKAQQgRANgVAGQgzAHgrgaQgOgTgIgUQgPgagDgdIAGgZIABgYQAMgaAOgYIADgUIAuhoIAJgeQALgdAHgeIAAgZQAGgcANgaQAFgNAGgLQAVgQAXgOQAPgLAPgJIBQgPQASgNAQgRQARgMAIgSQgXgEgVgHQgKgSAAgUIgKgtIADg7IgDgZQAEgVAJgTIAOgoQAcgcAngLQA+gBA4AdQAMAJAKAMQASAuAAAxQgDAmgNAkQgRAegBAjQAIAMAOAEQAaAWAZAZQAMAHANAEQgBgcABgbQAFgNAFgQQgFgmAKglIANAKIAMAtIAPgDIALAEIATgBQAdAGAKAcIAAAtQAPAWASAXIADAxIAQAtQAKAVABAXQgLAigHAeIAFAZIAAAUIAFAoIAAAxQgYAwg4AHIgYgFIAAAjIgFAiIAABLIgEAdIAAA7g");
	this.shape_105.setTransform(-263.5,23.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("Ai8HyIAAgsIAAhKIgPhZQgFAJgDAKIADAeQAAAegEAeQgDASgKAQQgPAMgSAFQgVAHgXABQgNgDgMgHQgNgFgMgGQgRgUgJgXIgMgUQgIgmAKgkQACgQAFgOIASgeIADgUIAuhoIAZhPIAIg7QAFgPAIgPQAGgPAKgNQATgOAUgMQASgOAWgKQAjgEAigHQAegZAjgUQgGgKgJgHQgXgEgPgNQgGgZgCgZIgJgeQABgXAEgWIgCgiQAFgaALgYQAHgYAOgUQAugaA0ABQBXAWAbBSQACA3gNA2QgTAigDAkQAJAMANAEQAQANAPAPIAoAeIAAgoIACgWIANgDIgJg7IAEgeQAHAAAHACQAJAXAMAWQAHADAIAAQAlgCAZAbIACATQgBAYADAVQAQAOAPAQQADAWAAAWIAMAZQALAeAJAdQAAAUgHAUQgFATgBAUIAAAoIAFAeIAABFQgkAzhFgGIAAAoIgFAiIAABGIgDAdIAAA7g");
	this.shape_106.setTransform(-263.4,23.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ai8HyIAAgsIAAhPIgKhUIgFABQgJAcAEAeQAAAmgLAlQgPATgYAHQgTAHgUABQgZgHgWgNIgQgKQgLgRgHgRIgNgZQgGgjAJgiQACgQAFgOIASgeIADgUIAVgsQAdhFAVhGIAHgjIABgYIANgeQAGgPAKgNQAQgMASgLQAVgPAYgMQAjgEAigHQAegZAjgUIAAgPQgegEgXgPQgCgKAAgKIgPhGIAFgeIAAgnQAGgdANgaQAGgUALgSQArgaAxAAQA/AJAtAtQAOAkACAnIAAAYQgEAfgLAdQgPAagIAdIAEAdIASACIBCA1IAAg8IAPAFQgKgvAFgvIAOACIAQA1QAJgEALgBQAsgCAUAkQgBAfAIAdIAZAUQAHATAAAVQAEAMAHAMIAXBBQAAAggMAfIgBA3IAFAeIAAAxQACAPABAPQgpAvhDgHIAAAoIgFAiIAABGIgDAdIAAA7gAljGlIANAOIgKgPg");
	this.shape_107.setTransform(-263.4,23.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("Ai8HyIAAgsIAAhPIgJhUIgFABQgMAXAHAZQAAAegFAeQgDASgJAQQgPALgSAGQgUAGgUACQgngLgdgcIgLgZQgQgZgEgeIAIgnQACgQAGgOIARgeIADgUIASgjQAXg1ATg4QAMgiAGgjIAAgTQAFgSAIgRQAFgPAIgOQAUgQAYgOQATgOAUgKQAkgEAigHQAUgOAUgRQAQgLAIgSQgdgEgXgPQgDgNABgMQgGgegEgeIAAhKQAEgVAJgTIAOgoQAdgfArgIQBcADA2BHQAGAWABAXIAAAnQgFAfgLAdIgRAjQgDAVABAXQAtARAjAmIAAg3IAOAAIgFgdIAAg8QAIAAAGACQANAYADAdQAJgEALgBQAjgDAbASQADAJAAAKIAFAZQgBAPADAPQAOAMANAJQAFATABAUIAMATIAPAoQAJAYADAZQgGAYgHAZQgDAWABAXIAFAZIAAAoQAEAVABAXQgQAkgnAOQgPADgOAAIgZgDIAAAnIgFAeIAABGIgEAdIAAA7g");
	this.shape_108.setTransform(-263.4,23.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("Ai8HyIAAgsIAAhPIgJhUIgFABQgLAVAGAWQAAAhgFAgQgDASgJAPQgRANgVAFQgPAFgPADQgPgDgPgGQgZgKgSgUIgLgZQgPgagFgdIAIgnQADgQAFgOIAQgeIAEgUIASgjQAWgzASg1QAOgkAGgmIAAgTQAFgTAJgQQAFgPAHgOQAUgQAYgOQATgOAUgKQAegFAegDQATgIAQgNQAYgSAPgYQgagBgWgNQgHgRABgSIgJgjQgDgWACgXIADgYIgDgUQAGgfANgdQAIgbAWgVQArgRAuABQA4AKApAnQAOAfADAiIAAAsQgFAfgLAdIgRAjQgDAVABAXIAXACIA5A1IAAgoIAOAAQgJgvAEgvQAIABAGAFQAKAaAMAUQAOADAPgFQAVAAATAKQAKANAAAQIAFAZQgBANADAMQANAKANAGQAGAUAEAUIAJANQAQAnALAoQgFAlgKAlQABASAEARIAAAUIAFAZIAAAxQADAMAAANQgbAjgtAKIgogFIAAAiIgFAeIAABGIgEAdIAAA7g");
	this.shape_109.setTransform(-263.4,23.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("Ai9HyIAAgsIAAhPIgKhUIgNAPQABAXAFAaQgCAUgFAUQgDAUgKASQgRANgVAFIgXAHQgngHgggVQgMgRgIgSQgNgYgHgaQACgMADgNQADgZAIgYIARgeIAEgUIASgjIAVg2IAMgZIAHgZQAMgdAHgeIAAgdQAGgaANgYQAFgMAHgLQASgOAVgMQATgOAVgKQAdgFAegDQATgIAQgNQAZgSAPgYQgYABgUgHQgKgSgBgUIgKg3IAAhKQAGgdAMgaQAFgSAIgRQAkgeAugEQBHAEA0AtQASA0gCA5QgFAfgLAdQgRAegBAjQAIAMAPAEIA9A1IgEgPIAMgUIgDgUIAAg7IAOACIAPA0QAPgEAKAJIAGAAIAAgFQAYgIAYAOQAHAVAEAXQgBASAHAQQANAHANAJIAEAPIAWAsQAKAbAGAbQgDAegIAdIAGBfIAFAdIADA3QgGANgMALQguAUg1gEIgFA2IAABGIgDAdIAAA7g");
	this.shape_110.setTransform(-263.3,23.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AjAHyIAAgsIAAhPIgKhUIgMAPQABAXAEAaQgCAUgEAUQgDAUgKASQgSANgUAFIgUAGQgpgFghgWQgMgRgIgSQgOgYgGgaQABgMADgNQAEgZAHgYIARgeIAJgeIANgZIAVg2IAMgZIAHgZQAMgdAIgeIAAgYQAFgdAOgaQAFgMAHgLQASgOAUgMQATgOAVgKQAegFAegDQAbgNAWgUQAOgLALgOQgbAAgVgPQgGgQgBgSIgJgtIAAhZQAEgVAJgTIAOgoQAggeAtgJQBLABA4AwQARAtAAAyQgEAmgMAkQgSAeAAAjQAIAMAOAEIA8A2IALAAIAFAEIgKg3IAAgnQAIgBAHADQAOAXAGAdIAZgCQAigGAYAXQAEATACAVQAAAJACAKQAIAHAKAEQANALAJANQAKAWAIAXQAJAYABAZIgJAiQgDAXACAWIAPByQAEAUgBAUQgYAggnAJQgeAFgdgGIgFAxIAABBIgEAdIAAA7g");
	this.shape_111.setTransform(-263,23.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AjEHyIAAgsIAAhPIgJhZIgFAAIgJAYIAGAtQgBAUgFAUQgDAUgKASQgYAQgdAFQgygCgmggIgNgeQgKgRgGgSQgCgSAEgRIAHgnIAVgoIAJgeIAvhoIAIgeQAMgdAGgeQAAgSACgQQAHgVAKgTQAFgMAHgLQAOgLAPgJQAXgRAagNQAkgEAigHQAhgaAkgTIAAgFQgagEgXgHQgKgSAAgUQgGghgEggQgBglABglQAHgcAMgbQAFgTALgQQAhgXApgGQBIADA2AuQARAyAAA2QgHAmgPAlQgNAaABAdQAIAMAOAEQAjAiApAYIgFgjIAAgeQAIAAAGADIAWAuQASAEAVgDIAUAAIAKACQAIAIAFAKQAAAUALAUQARALAQANQAIARAGASQALAdACAeQgIAhgCAkIAZCVQgBAigYAXQgPAGgPADIgPAHQgfADgcgLIgFAnIAABBIgEAdIAAA7g");
	this.shape_112.setTransform(-262.6,23.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AjGHyIAAgsIAAhPIgJhZIgFAAIgJAUQACAYAEAZQgBAUgFAUQgDAUgKASQgYAQgdAFQgygCgmggIgNgeQgMgVgGgYQABgMADgNQAEgZAIgYIAQgeIAEgUIAvhoIANgoQAMgdAGgeQAAgSACgQQAHgVAKgTQAFgMAHgLQANgLAQgJQAXgRAagNQAkgEAigHQAhgaAkgTIAAgFQgdABgYgQQgGgQAAgSQgIgegFgeIADgZIAAg2QAIgeANgcQADgRALgPQAhgWApgHQATgBAUAEIAYADQAhANAZAZQAOAaAEAdQAEAYAAAaQgFAhgLAfQgRAhgBAlQAIAMAOAEQAjAiApAYIAAgeQAKAAAIAGQAHARALAOQAJADAKABIAjAIQAMAAALAGIAMAUIAbAVQAJANAFAPQALAYAHAZQgEAjgGAiIAFAZQAFAoAIAoIAMBFQABAmgWAeQgQAHgSAFQgVAJgXAAQgTgHgQgNIgFBfIgEAUIAFAxIAFATg");
	this.shape_113.setTransform(-262.4,23.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AjLHyIAAgsIAAhPIgJhZIgFAAIgJAUQACAYAEAZQgBAUgFAUQgDAUgKASQgYAQgdAFQgygCgmggIgNgeQgMgVgGgYQABgMADgNQAEgZAIgYIAQgeIAEgUIATgjIAphtQAMgfAGghQACgkARghQAFgMAHgLQAOgLAPgJQAggWAlgNQAbgCAcgGQAcgXAkgUIAAgFIgdAAIgKgBIgKgFQgKgTAAgTIgOg8IAEhUQAJgeAMgcQABgLAEgLQAvgkA8gDQAwAIApAaQAOATAJAVIAHA3QgCAggHAgQgQAlgKAmQAAAKACAJQAKAJALADIAMAKQAaAaAcAUQAiAIAkAFQAiANAeAWQAPAJANALQAIANAFAPQAMAYAHAZIgGBKQAIBGAOBFIAOBBQgHAdgSAXIgUAGQgaAJgcACQgbgIgXgRIAABVIgEAdIAAA7g");
	this.shape_114.setTransform(-261.9,23.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("ADmAeIAAg7IAKA7gAjvAeIAHgrIAAArg");
	this.shape_115.setTransform(-259,70.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AjMHyIAAgsIAAhPIgKhZIgFAAIgIAUQABAYAFAZQgCAUgEAUQgDAUgLASQgYAQgcAFQgzgCglggIgNgeQgNgVgFgYQABgMADgNQAEgZAHgYIARgeIAEgUIAvhoIAMgoQANgdAGgeQgBgSACgQQAHgVALgTQAFgMAHgLQANgLAPgJQAYgRAagNQAjgEAigHQAigaAkgTIAAgFQgaABgXgIQgKgSAAgTIgOg8QAAgWADgXIAAgnQAJgeANgcQABgLAEgLQAugkA8gDQAxAIApAaQANATAKAVIAGA3QgBAggIAgQgPAlgKAmQgBAKADAJQAJAJAMADIAQAOQAXAYAbASQAnAJAoAHQAfAPAdAVQAMAHALAJQAIAQAIARQAJAWAGAWQgBAUgDAUIgBAYQABAhAIAgIASBeQAKAoABAoQgEAUgKASQgQAJgRAEQgbALgcAAQgcgPgWgXIAABQIgDAdIAAA7g");
	this.shape_116.setTransform(-261.8,23.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AjQHyIAAgsIAAhPIgJhUQgJAFgFAKIAGA2IgGAjQgDAUgKASQgmAVgtAAQghgKgYgYIgJgUQgPgagIgdQABgMADgNQAEgZAIgYIARgeIAIgeIAOgZIAUg2IANgZIAIgeQANgfAFghQADgkAQghQAFgMAHgLQAOgLAPgJQAXgRAagNQAkgEAigHQAhgaAkgTIAAgFQgagDgXgIQgKgSAAgUIgKgyQgCgqACgqQAIghANgeIABgMQAFgNAJgKQAwgZA2gBQAkAGAhAPQAzBKgNBdIgbBGQgCAPADAOQAKAJALADIAMAKQAaAaAdAUQAiAIAjAFQAfAMAcAUQAQAJANAMQAOAVAJAYQAIARAFARIgFA7IADAeQABAUAFAUIAeCLQAFARABASIgFAYQgBANgGAMQgPALgSABIgZALQgPACgOAAQgkgOgYgfIAABLIgDAdIAAA7g");
	this.shape_117.setTransform(-261.4,23.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AjRHyIAAgsIAAhPIgKhUQgJAFgEAKIAGA2IgGAjQgDAUgLASQgmAVgsAAQghgKgZgYIgMgZQgPgagEgdIAIgnQACgQAFgOIARgeIAEgUIASgjIAVg2IAMgZIAHgZQANgiAHgjIAAgTQAGgaANgYQAFgMAHgLQASgOAUgMQATgOAVgKQAegFAdgDQAbgNAXgUQAOgLALgOQgbAAgVgPQgGgSgCgVQgFgWgEgXIABg2QgBgcAHgbIALgZQAGgVALgTQAxgeA7ABQA2ALAnAmQAHAPADAPQAIAngCAoQgJApgQAnQgLAYAEAZQAJAJAMADIALAKQAaAaAdAUQAiAIAjAFQAgAMAcAUQAPAKAOALQAGAMAFANQANAWAKAXQAAAOgDAPQgCAYABAZQAEAVAFATIAIA3QARBCAOBEQAAAPgDAOQAAAUgHATQgLAGgMABQgfANghADIgPgGQgMgGgLgHQgOgRgNgVIAABLIgDAdIAAA7g");
	this.shape_118.setTransform(-261.3,23.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AjTHyIAAgsIAAhPIgKhUQgIAFgFAKQACAYAEAZQgCAUgEAUQgDAUgKASQgfATglAEQgqgIgfgcIgLgZQgSgfgBgiIAKgxIAVgoIAEgUIAnhZQARgqAOgrIAGgOQACgSAAgQQAGgdANgaQAEgMAHgLQATgOAUgMQATgOAVgKQAjgEAjgHIBAgtIAAgKQgYgEgUgHQgKgSAAgUQgHgegDgeIACgsQgCgSABgRQAHgXAKgWQAFgSAHgRQAigdAtgFQBIADA2AuQAHAPAFAPQAEARABASIAAAnQgJAxgVAuQgIAWAJAVQAIAFAJADIAMAKQAaAaAcAUQAtAJAtAKQAUAMATAOQAPAJANAMQAKARAIASQAJAQAFATIgEA6QABAPADAPIAiCaQAOA1ABA4QgDASgHAQQgQAGgSABIgZAMQgdADgagMQgWgWgRgbIAABGIgEAdIAAA7g");
	this.shape_119.setTransform(-261.1,23.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AjVHyIAAgsIAAhPIgJhUIgFABQgLATAGATIAAAjQgDAkgOAgQgRANgVAFIgXAHQgugIghgeIgMgZQgOgYgGgaIALhAIAWgoIADgUIASgjQAWgzATg1QANgiAGgjIAAgYQAHgYAMgVQAFgMAHgLQASgOAVgMQATgOAUgKQAkgEAigHIBBgtIAAgKQgbgEgWgMQgHgQABgRQgGgegEgeIAAhKQAEgVAJgTIAOgoQAgggAtgHQBLABA4AwQAHAPAEAPQAHAngBAoQgGAfgKAdIgRAjQgDAUAHASQAIAFAJADIAMAKQAaAaAdAUIBZATQAUAMATAOQAQAJANAMQAKATAIAVQAMAZABAdQgEATgBAUQAHAoALAoIAEAZIAmCZIgFAeIgCAmQgSAHgUABQgTAIgVAGQgegDgXgRIgfgtIAABGIgDAdIAAA7g");
	this.shape_120.setTransform(-260.9,23.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AjVHxIAAgsIAAhPIgKhVIgFACQgKAZAFAcQAAAbgEAcQgEARgJAQQgRAMgVAGQgRAFgRABQgogKgcgcIgMgYQgRgfgBgiIAKgyIAVgnIAEgUIAmhZQAOggALghQALgiADgiQAFgeAOgZQAFgMAHgLQASgPAVgMQATgNAVgKQAdgFAegDQATgIAQgOQAWgQASgUQgcAAgVgPQgHgTgBgUIgFgZQgFgPgDgPIAFgZIAAgtQAGgfANgcQADgUAOgSQAYgRAdgGQBIgGA9AlQAYAkAGAsIAAAiQgEAhgMAgQgMAXgHAaIAAAjQAMAAALACQAgAdAjAbQAiAIAjAFQAdALAaARQAPAKANALIAMAYQAKARAIASQACAggBAkQAGAtAMAtIAEAYIAYBfQAIAYAGAZQABAhgFAgIgDASQgRAHgVABQgbAJgbADQgsgXgVgtIgFAAIAABFIgDAeIAAA7g");
	this.shape_121.setTransform(-260.9,23.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AjVHyIAAgsIAAhPIgJhUIgGABQgKATAGATIAAAjQgDAkgOAgQgUAOgXAGIgZAGQgPgDgPgGQgcgMgTgXIgHgUQgOgYgGgaIALhAIAVgoIAEgUIASgjQAWgzASg1QAOgkAGgmIAAgTQAFgTAJgQQAFgPAHgOQAUgQAXgOQATgOAVgKQAkgEAigHQAfgXAhgWIAAgFQgXABgVgHQgLgPAAgSIgGgjQgHgYgBgaIAEgZQgDgRAAgRQAIgiAOgfQADgSANgPQAjgUAogGQBFAEA0AtQAPAfACAiIAAA2QgMApgQAnQgDAYABAZQAMAAALACQAgAdAiAbQAiAIAkAFQAdALAZASQAPAJAOALIAMAYQAJARAIASQACAgAAAkQADAkAKAiIAXBjQAOAsAKAuQAAAgAAAgIgCASQgQAHgRADIgeAKQgfACgcgMQgUgTgMgYIgNgPIAABGIgEAdIAAA7g");
	this.shape_122.setTransform(-260.9,23.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AjVHwIAAgsIAAhQIgKhUIgFACQgKAbAFAfQgBAsgQAmQgTAPgYAGQgPAEgOACQgNgDgMgGQgcgMgUgYIgHgUQgLgQgHgSQgBgfAHgdQADgPAFgPIARgdIAEgUIARgjQAYg4AUg6QALggAFghIAAgTQAFgSAJgQQAEgQAJgNQATgRAYgOQATgNAVgKQAmgFAkgJIAygqIgUAAQgLgCgIgFQgHgLABgMIgPhKIAAhLQAGghAMgfQADgVAOgSQAdgUAjgGQBFgCA6AlQASAbADAgQAEAbABAcQgJArgQApIgIAZIADAjQAKgBAKADIBGA4QAiAIAjAFQAdAKAaASQAPAJANAMIAMAYQAKARAIASQACAYgBAdQgBAPAAAPIATBKQANA5APA5QAIAZAGAZQABAggBAhQAAAMgCALQgLAFgMADQgdANgfADIgOgGQgQgFgOgIQgKgKgHgNQgLgRgHgSIgFAAIAABKIgDAeIAAA7g");
	this.shape_123.setTransform(-260.9,24);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AjVHwIAAgsIAAhLIgJhZIgFACQgKAbAFAfQgBAsgQAnQgUAOgXAGQgPAEgPACQgNgDgMgGQgbgMgUgYIgIgUQgNgVgGgXQACgaAGgYIADgUIAWgnIADgUIAvhpQAUg1ALg4IAAgTQAFgSAIgQQAFgQAJgNQATgRAYgOQATgNAUgKQAmgFAlgJQAVgRAXgPIgOgJQgNgCgKgJIgJgyQgHgZgEgYIADgyQgCgWADgXIAKgYQAGgYAJgVQAggbApgIQBdABA1BKQACAMAAAMIAAA8QgKAwgSAuQgBAUAEAUIASABIBIA5IBKANIAyAcIAXARIAeA6IABA1IBBEgIAABKIhBAWIgUABIgrgTIgkg6IgFAAIAABFIgFAZIAEAUIABAUIAGAdg");
	this.shape_124.setTransform(-260.9,24);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AjVHyIAAgsIAAhKIgOhZIgJAPQABARADARQAAAegEAeQgEASgJAQQgUANgXAGQgPAFgPABQgNgDgMgFQgLgFgLgHQgMgIgKgLIgLgZQgNgVgGgYQACgZAGgYQADgQAFgOIARgeIADgUIAWgsQAchFAVhGQAIg7Aag2QANgLAPgJQAagUAcgOQAmgFAlgJQAcgXAggTIAAgFQgbABgXgHQgGgNAAgPIgOg8QgCgqACgqQAIgkANggQABgLAEgLQAfgcAqgIQARgEARABQAqAGAlATQAbAeAJAnQAFAvgIAvQgJAcgLAbQgIATACAVQAIAMANAEIAbAUQAVAUAYAQQAkAIAmAFQAVAJATANQARALAQAMQAHALAFAMQAQAcADAgIAAAsQAHAlALAlIAmCVQAGARADASIAABKQgMATgXAHQgZAKgZACIgYgNQgNgEgLgHIgkgxIAABBIgFAZIAEATIABAUIAGAdgAl8GlIAOAOIgKgPg");
	this.shape_125.setTransform(-260.9,23.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AjVHyIAAgsIAAhKIgPhZIgIAPQgBAPAEAOIAAAeQgCAkgPAhQgPAMgSAFQgPAFgOADQgfgEgagPIgIgEQgRgTgJgWQgKgRgHgSQgBgeAIgdQACgQAFgOIARgeIAEgUIAehFQATgvARgwQAHgdAFgdIABgUIAOgjQAYggAjgVQAQgMATgIQAjgEAigHQAQgLAOgOQATgOAQgQQgbABgWgMQgGgJAAgJIgPhLQABgUADgUIgDgZQAEgiAOgeQAFgSAHgRQAygiA+AAQBBAPAmA2QAIAsgCAtQgIAsgSApQgLAYAJAYIARAIQAVAQAUARQANANARAKQAlAIAlAFQAaAMAYARQAMAHALAJQAHALAFAMQAOAYAGAaIAAA2QAGAlAMAlIAmCVQAFARADASIAABKQgMASgXAIQgYALgZABIgZgNQgNgEgKgHIglgxIAABBIgFAZIAEATIABAUIAHAdgAl8GlIANAOIgKgPg");
	this.shape_126.setTransform(-260.9,23.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AjVHyIAAgsIAAhKIgPhZIgIAPQgBAPAEAOIAAAeQgCAkgPAhQgPAMgSAFQgPAFgOADQgjgFgegSQgRgTgJgWQgKgRgHgSQgBgeAIgdQACgQAFgOIASgeIADgUIAehFQATgvARgwQAIg1AOgyQAHgPAJgOQAUgQAXgOQAOgLAQgJQAkgJAmgFQAUgKAPgQQATgOAQgQQgbgBgWgKQgGgJAAgJIgPhLQABgUADgUIgDgZQACgcALgaQAHgYAKgVQAygiA+AAQA8ANAnAuQANAzgDA1QgJApgRAnQgLAYAJAYIARAIQAiAfAlAZQAlAIAlAFQAaAMAYARQAMAHALAJQAHALAFAMQAOAYAGAaIAAA2QAGAnAMAoIAXBeQAQAxAHAyIAAAtQAAAPgHANIgSAIQgVALgXAHQgWgBgSgMIgPgGQgQgNgKgRIgTgUIAAA8IgFAZIAEATIABAUIAHAdg");
	this.shape_127.setTransform(-260.9,23.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AjWHyIAAgsIAAhKIgPhZIgIAPQAAARADARQABAegFAeQgDASgJAQQgPAMgSAFQgWAHgXABQgNgDgMgHQgNgFgMgGQgQgUgKgXIgMgUQgIgmAKgkQACgQAFgOIASgeIADgUIAuhoIAZhPIAIg7QAFgPAIgPQAGgPAKgNQATgOAUgMQATgOAVgKQAmgEAlgKQAagXAhgTIAAgFQgagDgXgIQgHgOAAgOQgIgegFgeQgCgqACgqQAHghAOgeQACgQAIgPQAIgHAKgFQArgSAuAAQAkAGAhAPQAYAXAOAeIACAZQAFAbAAAbQgJAsgRApQgMAbAJAaQAJAFAIADIAMAKQAbAaAgAUQAlAIAmAFQAaAMAXARQAMAHALAJQAHALAGAMQAJARAIASQACAbAAAgQABAbAFAbIAqCfQALAkAFAmIgFBGQgcAKgaANQgYACgVgKIgcgMIgNgSQgLgPgHgPIgFAAIAAA8IgFAZIAEATIABAUIAGAdg");
	this.shape_128.setTransform(-260.8,23.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AjVHyIAAgsIAAhKIgPhZIgIAPQAAARADARQABAegFAeQgDASgJAQQgPAMgSAFQgWAHgXABQgNgDgMgHQgNgFgMgGQgQgUgKgXIgMgUQgHghAHggQAAgPAEgOIAXgoIADgUIAuhoIAZhPIACgZQAFghAOgfIAMgYQANgLAQgJQAZgUAdgOQAmgEAlgKQAXgVAagQIAAgFIgUAAQghgcgDgzIgIgeIADgtQgDgRABgRQAHgaAKgYQAGgbAPgVQAegQAjgFIAZgFIAXAFQAdAEAaAMQAiAgALAuQACAygJAxQgOAdgJAfIAAAUQAHARAQAEQARANAPAPQAaAWAhALQAhAEAgAIQAUALATAOQANAHAKAJQAKAQAIARQAKATAEAVIAAA/QAJAwAMAvQAOA5AQA5QAJAaADAcQgDAZgBAZQAAAMgBALQgNAHgPAGQgaANgdAAIgsgVQgJgLgIgMIgSgUIAAA3IgFAZIAEATIABAUIAGAdg");
	this.shape_129.setTransform(-260.9,23.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AjTHwIAAgsIAAhLIgOhZQgGAJgDALIAEAoQgBAsgQAnQgPAMgSAFQgWAIgXABQgNgEgLgGQgTgHgPgNQgKgRgIgSQgKgQgGgSQgCgaAGgYQABgPAEgPIAWgnIADgUIAehGQAUgvARgvQAIg1AOgyQAHgQAIgNQAUgQAYgPQAOgLAPgJQArgIAqgJQASgPARgRQgQgDgNgIQgHgQABgSQgJglgGglQgBgmABglQAGgcAKgaQAFgYAPgUQAigTAngHQBFABA1AsQAOAcACAfIAFAZQAAAbgHAcQgNAigKAjIAAAUQALASAUAKQAkAjAvAUIA3AIQAaALAYARQAMAHALAKQAHALAFAMQAJARAIASQADAdgBAiQABAbAGAcIALAiIAaBuQALAkAFAmIAAA3QAAAMgCALQgNAGgPAGIgZAMQgdADgagNIgTgJQgSgUgRgXIAAA2IgFAZIAEAUIABAUIAGAdg");
	this.shape_130.setTransform(-261.1,24);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AjTHtIAAgsIAAhKIgPhZIgIAPQgBAPAEAOIAAAeQgCAkgPAhQgQAOgVAFQgWAGgXgBIgUgJQgNgEgMgHQgQgUgKgXQgKgRgHgSQgBgZAFgZQABgPAEgOIAXgoIADgUIAihPQAKgTAHgVIAUhFQADgjAJgiQAJgUAMgTQASgOAUgNQAQgNATgKQArgIApgKQAQgMAOgPIgKgCQgIgDgFgGQgHgSgBgUQgJgegFgeIAAg3IgDgYQAHgfAKgdIAEgUQAIgQAOgMQAqgVAvAAQAegBAdAKQAVAKARAPQASAjADAoIAAA2IgYBVIAAAUQAKASAUAKQAlAjAvATIA2AIQAbAMAXARQAMAHALAJQAHALAFAMQAKARAIASQACAnAAAsQAGAhAJAgIAsCzQACAigCAjQgHAXgXAIQgQAJgSAFQgcgBgWgNIgSgIIgNgSIgTgUIAAAyIgFAZIAEATIABAUIAHAdg");
	this.shape_131.setTransform(-261.1,24.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AjTHtIAAgsIAAhKIgOhZQgIALgCANIAFAoQgBAqgQAlQgPAMgSAFQgWAHgXABQgNgDgLgHQgTgHgPgMQgKgRgIgSQgKgRgGgSQgBgbAGgaQgBgNAFgNIAWgoIADgUIAvhoIAIgeQALggAHggIAAgTQAGgdANgaIAIgUQAPgOASgKQAVgRAXgNIBQgRQATgMAQgQQgIAAgHgCQgRgSAAgYIgShLIAFgoQgEgRAAgRQAHgaAIgYIAFgIIAAgRQAJgQAPgMQAugWA0ABQAqADAjAXQAcAnAEAxIAAAxQgJAjgNAjQgGAZAJAXIARAIQAeAcAgAZQApALArAFQAVAJATANQARALAQAMQAHALAFAMQAQAcADAgIAAA6QAHAmALAlIADAZIAUBPQAQA4ADA6IgFAZQgBAHgCAHQgKAIgMAEQgWAJgXAGQgHACgIgBIgPgLIgdgMQgQgSgOgVIAAAyIgFAZIAEATIABAUIAGAdg");
	this.shape_132.setTransform(-261.1,24.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AjSHuIAAgsIAAhLIgPhZQgFAKgDAKQAAARADASQAAAbgEAbQgDASgJAQQgRAOgVAGQgWAGgXgBIgUgJQgWgJgQgQIgNgeQgRgYgBgeIAGghIAAgRQANgZAOgYIADgUIAMgZQAXg2AUg3QALggAHghIAAgTQAGgcANgaIAIgUQAOgOASgLQAWgQAXgOQArgHAqgKQAPgMAOgPQgQgDgLgMQgDgRgBgSIgNgyQgEgOAAgPQADgSAAgRQgDgOAAgQQAIgcAKgaQACgYASgVQA6gfBBAGQAjAIAdAWQAWAkAEArIAAAyQgKAqgPAqQgDASAFARQAJAIAMADIAMAKQAXAYAaATQAqALArAGQAUAIATANQASALAPANQAHALAFAMQAQAbAEAgQgBAgABAgQAFAbAIAbIAmCkQAFARADASIgFAeIAAAZQAAAJgCAJQgPALgSAHQgWAJgWADQgNgFgMgIIgZgMIgdghIAAAsIgGAZIAFAUIABAUIAGAdg");
	this.shape_133.setTransform(-261.2,24.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AjQHsIAAgsIAAhKIgOhaQgGAKgDAKQABARADASQAAAbgEAcQgEASgJAPQgRAOgVAGQgWAGgXgBIgTgJQgWgJgQgQIgOgdQgQgZgCgeIAHghIAAgRQAMgZAOgYIADgUIANgZQAXg2ATg3QALggAHghIAAgSQAHgdAMgaIAIgUQAPgOASgLQAVgQAYgNIBPgRQAWgOASgTIgPgCQgXgSABgeQgIgegFgdIAAg3IgEgZQAJghANgfQAEgVAOgRIAXgNQBdgWBOA1QAPAeACAjQABAtgIAsQgTApAEArQAJAIALAEIAMAKQAYAXAaAUQApAKArAGQAVAJATANQARAKAQANQAHALAFAMQAQAeADAjQgBAfABAgQAFAbAIAcIASBUQAQA0AIA0IAABGQgOAVgaAIQgWAJgXAAIgdgRQgKgCgJgFIgagiIAAAtIgFAYIAEAUIABAUIAGAdg");
	this.shape_134.setTransform(-261.4,24.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AjQHuIAAgsIAAhKIgPhaIgFAAIgFAZIAFAeQAAAvgQApQgRAOgVAGQgWAGgXgBIgUgJQgWgJgQgQIgNgdQgMgTgGgVQABgZAFgXQAAgNAEgOIAXgnIADgUIAMgZQAXg2AUg3QAMgiAGgkIABgcQAIgVAKgTQAFgPALgNIAigXQAQgNATgKIBQgRQAYgQAUgWIgUgCQgXgbgCgoIgIgUIgBgZQgCgoACgoQAHgcALgaQADgYASgTQATgLAVgFQBSgLBFAtIAIAUQAFAMAEANIAAAUIAFAYQgBAcgGAbQgOAkgLAlIACAkQAMAAALACIA9A1QApAKAsAGQAaALAXARQAMAIALAJQAHALAGAMQAJATAIAVQADAqgBAuQAFAbAIAcIAaB3QAJAgAGAgQACAggCAhQgCAMgEALQgSAKgUAIQgRAHgSABQgQgFgOgJIgUgIQgRgQgHgVIgFAAIAAAtIgFAYIAEAUIABAUIAGAdg");
	this.shape_135.setTransform(-261.4,24.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AjQHvIAAgsIAAhLIgPhZIgFAAIgFAZIAFAeQAAAugQAqQgRAOgVAGQgWAGgXgBIgUgJQgWgJgQgQIgNgeQgKgOgHgPQgCgaAGgYQAAgSAFgRIAXgnIADgUIAbg8IAhhZQAJgbAEgcIABgdQAIgUAKgTIAIgUQAMgNAQgJQAbgVAggPQAjgFAjgIQAagVAcgRIAAgFIgUAAQgIAAgHgDQgQgSAAgYQgIgegFgdIAAhBQgBgPACgPIARgsQACgVAOgSQAXgPAbgIQBQgIBCAtQAOAaADAcQAEAbABAcQgGAhgLAgQgJATgEAUIAAAoIAXABIA9A1IBVARIAxAcIAXARIAeA/IACBYIA2DzIgGBTIghAQIgeAKIg/gVIgVghIgFAAIAAAnIgFAZIAEAUIABAUIAGAdg");
	this.shape_136.setTransform(-261.4,24.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AjQHwIAAgsIAAhKIgPhaIgFAAQgDARAAASQAEAjgEAjQgEAUgJASQgRAOgVAGQgUAGgUAAIgUgIQgYgJgTgSIgNgdQgKgPgHgPQgCgaAGgYQAAgSAFgRIAXgnIADgUIAbg8IAhhZQAJgbAEgcIABgcQAIgVAJgTIAIgUQAPgOATgLQAZgUAdgNQAjgEAjgJQAagVAcgRIAAgFQgXgCgUgKQgIgSAAgUQgLgpgCgrIACgUIgCgeQAHgeAMgdQACgVANgSQASgOAWgHQA6gMA3AQQAZALATAUQARAlAEAqIAAAjQgEAZgIAZQgJATgIAVQgCAYABAZQAMAAALACIA9A1QApAKAsAGQAaALAXARQAMAIALAJQALASAHAUIAMAZIACAUQgBAkABAlQAFAcAIAbIADAYIAXBkQAJAgAGAgQgBAUgEAUIgBAmQgSALgUAHQgZAJgZgDIgUgMQgPgFgNgKQgHgMgEgNIgFAAIAAAoIgFAYIAEAUIABAUIAGAdg");
	this.shape_137.setTransform(-261.4,24);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AjOHxIAAgsIAAhLIgOhZIgFAAQgDARgBASQAEAigEAjQgDAUgKATQgRAOgVAGQgTAFgUABIgVgIQgYgJgSgSIgOgeQgJgOgHgQQgCgZAFgYQAAgSAGgRIAWgoIADgUIAbg7IAhhZQAJgcAEgbIACgdQAHgUAJgTIAJgUQAPgPASgKQAZgUAegNQAigFAjgJIA7gqIAAgFQgXABgVgIQgLgPABgSQgKgqgFgqIAEgZQgDgSAAgRQAJghANggQAFgVARgRQAXgMAagFQBQgFA+AzQAOAgACAlIAAAtQgMArgQApQgCAYAAAaQAMgBAMACIA9A1QApALArAGQAaALAYARQAMAHALAJQAHALAFANQAKATAIAUIABAUQgBAnABAoQAGAbAHAbIAYByQAIAdAFAfIAAA7QAAANgDAMQgQAOgVAHQgYAKgagDIgTgLQgbgLgNgaIgFAAIAAAjIgFAZIAFAZIABAYIAFAUg");
	this.shape_138.setTransform(-261.7,23.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AjNHwIAAgsIAAhKIgPhaIgFAAIgFAZIAFAeQAAAygVArQgPAKgSAFQgUAGgUAAIgUgIQgVgHgSgPQgKgRgHgRQgRgcgBggIAFgZIABgUQAMgZAOgYIAEgUIAMgZQAXgzASg1QAOglAGgmQgBgRACgQIAZg3QAPgOASgLQAagUAdgNQAjgEAigJIA8grIAAgFQgagCgWgKQgHgPAAgSQgLgngEgoIAFgZQgDgRgBgSQAJghAOgfQAFgWAQgQQATgKAVgGQBUgIBDA0QAOAeACAjIAAA2QgLApgRAnQgCAXABAaIAXACIA9A1IBVAQIBFAsIAhBAIACBiIANA3IACATIAiCkIAAAoIgHAnIgSALIgnAOIgUAAIgwgVIgRgcIgEAAIAAAeIgGAYIAGAeIAAAPIAGAdg");
	this.shape_139.setTransform(-261.7,24);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AjNHyIAAgsIAAhKIgPhZIgFAAIgFAYIAFAeQAAAygVArQgPAKgSAFQgUAGgUAAIgUgHQgVgIgSgOQgKgRgHgSQgRgbgBghIAFgZIABgTQAMgaAOgYIAIgeQAbg9AYg/IAQgxQACgSAAgRQACgXAMgVQAHgVAOgRIAigXQAQgNATgKQAfgIAigEQAcgMAVgVQAOgLALgOIgZAAQgQgDgLgMQgDgMABgMIgQhBQACgUAEgUIgFgiQAGgaAMgYQAGgdAUgYQAhgRAlgEQBZAIAvBMIABBUQgLApgRAnQgCAXABAaIAXACIA9A1IBVAQIAsAbIAdAVIAdA8IACAxIgDAiIAQBLIACAZIAiCUIgHBUIgXAMIgxARIgegNIghgUIgHgPIgEAAIAAAZIgGAZIAGAdIAAAPIAGAdg");
	this.shape_140.setTransform(-261.7,23.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AjNHqIAAgsIAAhKIgPhZIgFAAIgFAYIAFAeQAAAygVArQgPALgSAEQgUAGgUAAIgUgHQgVgIgSgOQgKgRgHgSQgRgbgBghIAFgZIABgTQAMgaAOgYIAEgUIAMgZQAXgzASg1QANglAHglQgBgRACgRIARgjQAFgPAMgNIAUgNQAXgTAagOQAfgIAigEQAcgLAVgWQAOgLALgOQgaABgWgMQgHgQABgRIgQg8QACgSAEgRIgDgnQAFgaALgYQAGgaAPgWQCMgpBIB3QABAjgBAiQgLAngRAkQgCAXABAaQAMAAALACIA9A1QAqALArAFQASAIAQAMQAVANASAPQALARAGASIAMAZQACAYAAAZIgDAiQAGAoAKAoIANBKQAOA0AJA0QgBASgEARIAAAUQAAAKgCAJQgPAKgRAGQgYAMgaABQgNgHgMgJQgYgJgLgXIgEAAIAAAZIgGAZIAGAdIAAAPIAGAdg");
	this.shape_141.setTransform(-261.7,24.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AjLHuIAAgsIAAhLIgOhZIgFAAIgFAZIAFAeQAAAygVAqQgQALgSAFQgUAFgUABIgUgIQgVgIgRgOQgKgRgIgSQgRgbgBggIAFgZIACgUQAMgZANgYIAEgUIANgZQAWg0ASg0QANglAHgmQgBgRADgRIAQgiQAGgQALgNIAUgNQAXgSAagPQAggHAhgEQAcgMAWgVQANgMALgNQgbgCgWgNQgGgPABgPIgJgnQgFgPgBgPIAFgeIAAgoQAEgaALgXIAGgMIAAgNQAFgLAJgIQBcgmBaAvQAWAXAIAfIAAAUQAEARABASIgHAoQgMAhgOAfQgDAYABAaQAMgBALACIA+A1QAhALAkAEQAPACAPAGIAZARQAUANASARQAHAOAGAQIALAZQADAbgBAfIgDAZQAGAoAKAnIADAeIAPBKQAKAlAEAmIAAAtQAAAOgFAOQgJAIgLAEQgWALgXAHQgTAAgPgMIgdgNIgQgTIgFAtIAFAeIAAAPIAGAdg");
	this.shape_142.setTransform(-261.9,24.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AjLHxIAAgsIAAhKIgOhaIgFAAIgFAZIAFAeQAAAygVArQgQAKgSAFQgUAGgUAAIgUgIQgVgHgRgPQgKgQgIgSQgRgcgBggIAFgZIACgUQAMgZANgYIAEgUIANgZQAWgzASg1QANglAHgmQgBgQADgRIAZg3QAPgOASgLQAZgUAdgNQAjgEAjgJIA7grIAAgKQgXgEgVgIQgKgOAAgTIgFgYQgHgXgDgWIAFgZIAAgsQAFgaAKgYIAGgJIgBgHQACgKAGgJQALgMAPgJQA4gSA6ALQAPADAOAHQAgAaAQAlIADAZQAEAWAAAWQgFAhgLAgQgNAXgGAaIAAAjIAXACIA+A1IBUAQIBJAwIAdA8IACBxIANA2IADAZIAdCaIAAAoIgFAjQgoARgoAGQgPgHgOgJQgVgIgJgTIgFAAIgFAsIAFAeIAAAPIAGAdg");
	this.shape_143.setTransform(-261.9,23.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AjLHyIAAgsIAAhKIgOhZIgFAAIgFAYIAFAeQgBAvgQAqQgRAOgVAFQgWAGgXgBIgTgJQgWgIgRgQIgNgeQgMgTgGgVQAAgXAFgWIACgTQAMgaANgYIAEgUIANgZQAWgzASg1QANglAHglIACgdQAHgVAJgTQAGgPALgNIAUgNQAcgWAfgPQApgEAngOIAZgXQAQgMAIgSQgaABgWgMQgHgUgBgXIgMgyIAEgZIAAgiQAFglAOghQADgUANgSQAygcA6ACQAxALAmAhQANAXAFAbQAFAvgIAvQgPAjgNAjQgBAPADAOQAKAJALADQARANAPAPQALAMAOAKQArAOAuAFQASAIARAMQAUANASAPQALARAHASQAJATAEAVIgDBJQAHArAJAqIANBPQAOA4AFA6IgFA3QgcAKgbANQgbACgWgOQgVgLgTgPIgFAoIAFAdIAAAPIAGAdg");
	this.shape_144.setTransform(-261.9,23.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AjLHyIAAgsIAAhKIgOhZIgFAAIgFAYIAFAeQgBAvgQAqQgRANgVAGQgWAGgXgBIgTgJQgWgIgRgQIgNgeQgMgTgGgVQAAgXAFgWIACgTQAMgaANgYIAEgUIANgZQAWgzASg1QANglAHglIACgdQAHgVAJgTQAGgPALgNIAjgXQAUgQAYgLQApgEAngOIAZgXQAQgMAIgSQgPAAgOgDIgOgDQgLgUgBgXIgJgtIAAhFQAGgqARgmQADgPAJgNQAygcA6ACIAeAIQAhALAZAZQAMAYAFAaQAGAvgJAvQgGAUgJAUQgIAOgFAQIAAAUQAHARAQAEQAhAfAmAZIA3ALQAPABAPAFQARAKASANQASALAPAPQAKATAIAVIALAZIgGBOQAEAhAHAgIAlC8QgCASgDARIAAAUQgGAZgYAKQgRAJgSAGQgZgCgTgNIgYgMIgLgNIgFAoIAFAdIAAAPIAGAdg");
	this.shape_145.setTransform(-261.9,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_6}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_2},{t:this.shape_9}]},1).to({state:[{t:this.shape_2},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_14}]},1).to({state:[{t:this.shape_12},{t:this.shape_15}]},1).to({state:[{t:this.shape_12},{t:this.shape_16}]},1).to({state:[{t:this.shape_12},{t:this.shape_17}]},1).to({state:[{t:this.shape_12},{t:this.shape_18}]},1).to({state:[{t:this.shape_12},{t:this.shape_19}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_21},{t:this.shape_22}]},1).to({state:[{t:this.shape_21},{t:this.shape_23}]},1).to({state:[{t:this.shape_21},{t:this.shape_24}]},1).to({state:[{t:this.shape_12},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_12},{t:this.shape_28}]},1).to({state:[{t:this.shape_12},{t:this.shape_29}]},1).to({state:[{t:this.shape_12},{t:this.shape_30}]},1).to({state:[{t:this.shape_12},{t:this.shape_31}]},1).to({state:[{t:this.shape_27},{t:this.shape_32}]},1).to({state:[{t:this.shape_12},{t:this.shape_33}]},1).to({state:[{t:this.shape_12},{t:this.shape_34}]},1).to({state:[{t:this.shape_12},{t:this.shape_35}]},1).to({state:[{t:this.shape_2},{t:this.shape_36}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_39}]},1).to({state:[{t:this.shape_2},{t:this.shape_40}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_50},{t:this.shape_51}]},1).to({state:[{t:this.shape_50},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_42},{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_2},{t:this.shape_57}]},1).to({state:[{t:this.shape_38},{t:this.shape_58}]},1).to({state:[{t:this.shape_27},{t:this.shape_59}]},1).to({state:[{t:this.shape_27},{t:this.shape_60}]},1).to({state:[{t:this.shape_27},{t:this.shape_61}]},1).to({state:[{t:this.shape_27},{t:this.shape_62}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_27},{t:this.shape_65}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_71},{t:this.shape_75}]},1).to({state:[{t:this.shape_71},{t:this.shape_76}]},1).to({state:[{t:this.shape_71},{t:this.shape_77}]},1).to({state:[{t:this.shape_71},{t:this.shape_78}]},1).to({state:[{t:this.shape_71},{t:this.shape_79}]},1).to({state:[{t:this.shape_71},{t:this.shape_80}]},1).to({state:[{t:this.shape_71},{t:this.shape_81}]},1).to({state:[{t:this.shape_71},{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_71},{t:this.shape_87}]},1).to({state:[{t:this.shape_71},{t:this.shape_88}]},1).to({state:[{t:this.shape_67},{t:this.shape_89}]},1).to({state:[{t:this.shape_67},{t:this.shape_90}]},1).to({state:[{t:this.shape_27},{t:this.shape_91}]},1).to({state:[{t:this.shape_64},{t:this.shape_92}]},1).to({state:[{t:this.shape_64},{t:this.shape_93}]},1).to({state:[{t:this.shape_64},{t:this.shape_94}]},1).to({state:[{t:this.shape_64},{t:this.shape_95}]},1).to({state:[{t:this.shape_27},{t:this.shape_96}]},1).to({state:[{t:this.shape_27},{t:this.shape_97}]},1).to({state:[{t:this.shape_27},{t:this.shape_98}]},1).to({state:[{t:this.shape_27},{t:this.shape_99}]},1).to({state:[{t:this.shape_27},{t:this.shape_100}]},1).to({state:[{t:this.shape_27},{t:this.shape_101}]},1).to({state:[{t:this.shape_2},{t:this.shape_102}]},1).to({state:[{t:this.shape_38},{t:this.shape_103}]},1).to({state:[{t:this.shape_38},{t:this.shape_104}]},1).to({state:[{t:this.shape_38},{t:this.shape_105}]},1).to({state:[{t:this.shape_38},{t:this.shape_106}]},1).to({state:[{t:this.shape_38},{t:this.shape_107}]},1).to({state:[{t:this.shape_38},{t:this.shape_108}]},1).to({state:[{t:this.shape_38},{t:this.shape_109}]},1).to({state:[{t:this.shape_38},{t:this.shape_110}]},1).to({state:[{t:this.shape_38},{t:this.shape_111}]},1).to({state:[{t:this.shape_38},{t:this.shape_112}]},1).to({state:[{t:this.shape_2},{t:this.shape_113}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_115},{t:this.shape_116}]},1).to({state:[{t:this.shape_115},{t:this.shape_117}]},1).to({state:[{t:this.shape_115},{t:this.shape_118}]},1).to({state:[{t:this.shape_115},{t:this.shape_119}]},1).to({state:[{t:this.shape_115},{t:this.shape_120}]},1).to({state:[{t:this.shape_115},{t:this.shape_121}]},1).to({state:[{t:this.shape_115},{t:this.shape_122}]},1).to({state:[{t:this.shape_115},{t:this.shape_123}]},1).to({state:[{t:this.shape_2},{t:this.shape_124}]},1).to({state:[{t:this.shape_2},{t:this.shape_125}]},1).to({state:[{t:this.shape_2},{t:this.shape_126}]},1).to({state:[{t:this.shape_2},{t:this.shape_127}]},1).to({state:[{t:this.shape_2},{t:this.shape_128}]},1).to({state:[{t:this.shape_2},{t:this.shape_129}]},1).to({state:[{t:this.shape_2},{t:this.shape_130}]},1).to({state:[{t:this.shape_2},{t:this.shape_131}]},1).to({state:[{t:this.shape_2},{t:this.shape_132}]},1).to({state:[{t:this.shape_2},{t:this.shape_133}]},1).to({state:[{t:this.shape_2},{t:this.shape_134}]},1).to({state:[{t:this.shape_2},{t:this.shape_135}]},1).to({state:[{t:this.shape_2},{t:this.shape_136}]},1).to({state:[{t:this.shape_2},{t:this.shape_137}]},1).to({state:[{t:this.shape_2},{t:this.shape_138}]},1).to({state:[{t:this.shape_2},{t:this.shape_139}]},1).to({state:[{t:this.shape_2},{t:this.shape_140}]},1).to({state:[{t:this.shape_2},{t:this.shape_141}]},1).to({state:[{t:this.shape_2},{t:this.shape_142}]},1).to({state:[{t:this.shape_2},{t:this.shape_143}]},1).to({state:[{t:this.shape_2},{t:this.shape_144}]},1).to({state:[{t:this.shape_2},{t:this.shape_145}]},1).wait(23));

	// Layer 3
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("ABtHGIgDgZIACgjIgQgVIgShYIgEhQIAAi3IgoABIg7hNIgZgDQAGAhAIAfQARBSAVBSQASA/AEBCIgJAiQgDAUgFATQgJAJgHAMQgBAPADAPIgDAeIiLAAQgCgpAWgiIAAgFIgFAAIgchPIgCgZIgGgZIgWgtIhrlzIgEgYIAQhLIAngtIAVgiIApgtIAHgtIAAgOIHQAAIADAsIAYBjIgFAAIgFgOIgFAAIAFAxIAAAZIAFAZIgFAnIAAAUIgTAeIgGAjIAABnIgFAoIAAB3IgNA7IADAeIAAAoIgQBFIgKARIASA1IgCAZg");
	this.shape_146.setTransform(-263.9,113.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_146).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.1,-26,79.4,184.6);


(lib.reporter_clip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjpIWIABgCIABgUIAFgaIgpAAQgagHgYgLQgggKgdgOQgNgKgMgNQgRgRgDgYIADgyQAAgVAHgUIANgZIADgUIAuiTQAOgkAFgnIAAgiQAEgiATgbQALgVAQgSQAUgMAVgLIAegRIAtgHIAUAAQAjgHAagXQAMgNAOgKQAMgFAKgJIAIgdQgGgUgIgUQgMgwAAgwIAAgZQAGgmAQghQAkggAvgJIAagFIAUAEQApAIAjAYQAQAWAFAcQAIAhADAhIgCAyQgGAlgNAiQgGAlgaAYQAXAXAcARQAgAJAiAFQAPACAPAEQAVANATAQQAVANASAPQANAcALAgIALAdQABAPgFAPIgIApQgFAOgBAQIAKBMIAKCDQAIAlACAnQgEAagIAXIgNAIQgcASghAAQgfgJgYgVIAABMIAEAWg");
	this.shape.setTransform(5,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjpIWIABgCIABgUIAFgaQgYABgWgBIgogQQgsgOglgZQgWgSgIgbIADg4QAAgXAIgWIANgaIAIgjIAWg9IADgUIAbhRQAHglAAglQgBgNACgNIASgeQALgWAPgSQAWgPAYgMIAegRIAtgHIAUAAQAQgDAPgEQAXgTAWgUQATgLAOgOQADgPAAgPQgEgNgFgMQgMgjgEgkQAAhiBAhDQAdgJAggDIAUAAQAyALAnAeQANAfAFAiIAJAuQgBARgEASIAAAeQgGAggNAdQgHAggUAdQAXARAXAQQAtALAuAIQAgAQAcAXQAUANAOARIAJAZQAPAjAFAjQgMAtgFAuQAGAjAEAkIAFBfIALBHQAEAUAAAVQgEAXgIAWQgiAbgsADQgbgMgYgSIAABMIAEAWg");
	this.shape_1.setTransform(5,-10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjpIWIABgCIABgUIAFgeQgVADgUAAIgegMQgzgPgtgbQgWgSgIgbIAAgzQABgVAFgTIARgkIAximQAIgVAGgUIAAg2QAEgkATgeQAKgVAOgSIAXgNQAbgSAdgOIAzgHQAXAAAWgHIAtgqQAXgJALgXQACgYgLgVIgSg9QAAgUAEgUIAAgjQAKg3AogoQAvgSA1ABQAlAIAgATQAXAdAFAjQAGAXADAXIAAA8QgIAxgRAvQgGAYgTAMQASAUAWATQAxAQA0AHQAgAQAcAXIAdAVIAIATQANAeAKAfQgFA5gJA6QAGAjAEAkIAFBgIALBGQAEAUAAAVQgEAXgIAWQgKAJgNAGQgdAPgggBQgXgPgWgTIAABRIAEAWg");
	this.shape_2.setTransform(5,-10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjpITIABgCIABgUIAFgfIgeAAQgigFgggLQhEgWghg6IAAgeQAAgeAGgfIARgjIADgUIAchRIADgUQATg0AKg2IAAgyQADgTALgQQANgdAUgZQAXgPAagNQASgMAWgHIAUAAIAZgFQASAAASgGQAkgiAsgVIABgoQgJgngPglQgCgYAAgaIAGgpQAFgmAVggQBPgtBbAXQAMAGALAHQAXAhAFApIAJAzQgBARgEASIAAAZQgFAcgKAcQgJAjgVAfIAyAnQAPAFAPACQAfAEAeAHQATAJAQANQAeATAYAXIAfBMQACAYgHAZQgIAjgBAkQAGAgAEAhIAAAfIAFAeIAAAjIALBHQAEAUAAAVQgEAXgIAVQgIAIgKAFQgaANgeAAQgegKgZgUIAABRIAEAWg");
	this.shape_3.setTransform(5,-10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjpIYIABgBIAGg4QgZAGgagDIgPgHQhCgQg1goQgNgdABggIAAgeQAJgjAOgfIAEgVIAWhBIANg3QAQgtAIguIAAgoQAFghATgcQAJgSANgPQATgNAVgKQAZgRAegIIAUAAIAugGQANgIAMgLIAegZQASgMAPgNQADgPAAgPQgEgOgFgMIgIgeQgHgRgFgSQAAgQAEgPIAAgjQALhAAxgpQAVgJAYgCIAZgFIAZAFQAmAIAhAWQAQAXAFAbQAJA6AAA7QgGAkgNAiQgFAdgNAZIgNAHQAeAcAjAVIBRANQAdAQAbAVQAXAOAPAXIAJAaQAMAdAGAeQgKAygFA0QAGAiAEAkIAFBbIAPBbQAAAXgGAXQgCAJgEAKQgJAGgJAFQgdAOgfABQgSgHgNgMIgUgLIAABQIAFAWg");
	this.shape_4.setTransform(4.9,-10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjoIYIAAgBIAGg4IgjAFQgXgFgWgJQhHgSgsg2QgCgNAAgMQgBgnAIglIARgjIAIgpIARgtIAIgpIAchVQACgcgBgbQAEgkAUgeQAJgSAOgPQATgNAUgKIAfgSQAYgGAagBIAogGQAWgOATgSIAngdQAOgfgNghIgHgZQgIgUgFgUQAAgiAFggIAAgUQAJgkAVgeQApgcAxgHIAUAAQAvAJAmAaQASAcAFAhQAFAWAEAXIAAA4QgIAwgQAwQgHAXgUAMQANASARANQAQAPAUAIQAoAFApAIQAcAQAbAVQAQAKAOAMQANAbAJAdQAJATAFAUQgDAUgGAVQgFAbgBAcQADAkAHAjIAAAjIAFAfIAAAjIALBHQAEAWgCAXQgDATgHARQgKAJgNAGQgbAOgdAAQgagNgZgQIAABQIAFAWg");
	this.shape_5.setTransform(4.9,-10.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjpIXIABgCIAGg3IgkACIgogLQgngIglgQQgXgQgQgWQgGgPAAgPQgCgqAIgnIARgpIAEgUIAoiDQAIgXAGgXIAAg7QADgfAQgZQAKgVANgTQAPgNASgJQAWgPAYgMQAbgGAdgBQAXgDAWgIQAigjAqgTIADgpIgUg9QgGgMgDgNQgCghACggQALhAAtguQAVgJAYgEQBDgFA7AgQAYApAGAyQAEAWABAXIgCAZQgFAsgOAqQgHAggWATQAaAiAnATQApAGAoAIQAVAMAUAPQAXAPAUARQAOAaAKAeQAJATAEAUIgGAZQgHAbgEAbQAEAuAIAvQADBBAHBCQAIAjACAkQgDAXgIAVQgJAHgKAGQgdAOgfgBQgagKgZgPIAABRIAFAWg");
	this.shape_6.setTransform(4.9,-10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjoIYIAAgBIAGg9QgoAGgogMQgrgJgmgUQgagSgKgcQgCgkACgjQAKghAOggIADgUIAWhCIANg4QANgiAGglIAAg2QAFgZAOgVQALgXAQgUQAWgPAXgNQAPgKAQgIIBagNQAZgRAVgWQAUgOASgQQADgRgBgTIgJgZQgMgjgEgkQgCg+ASg7QA2g2BRgBQAvAJAkAfQANAdAFAgQAGAZAEAZIgFAfIAAAoQgGAVgIATQgHAigRAeIgNACQAbAdAiAWQAtAJAuAHQAVAMATAPQAXAPAVASQAIAOAFAQQAMAbAKAbQABAKgDAKIgKAuQgEAeADAfIAPBuIAAApIALBHQADARABASQgFAXgIAVQgIAIgJAFQgdANggABQgOgFgLgJIgagRIAABWIAFAWg");
	this.shape_7.setTransform(4.9,-10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjpIYIABgBIAGg9QgUAEgVABIhagWQgTgJgRgNQgTgMgKgUQgCgMABgNIAAgoQAEgjAOgfIAfhlIAIgoQAQgtAIguIAAgtQAFghASgbQAJgTANgPQAWgPAYgNQAOgKAQgIIAUgBIAZgFQAXgCAXgFQAYgRAVgWIAigaQAHgTAAgUQgEgOgGgMIgHgZQgIgXgGgWQACgfADgeQAKg6ApgpQAvgSA1ABQAmAHAhATQAUAYAHAfIALA8QAAAQgDAPIAAAtQgIAegLAfQgEAVgJATQgLAJgMAGIA8AsQAwAKAwAIQANAHAMAKQAfATAcAYQALAVAIAYQAMAaADAcQgIAmgGAmQAEA1AIA1IAFAuIAAAjQALA1AEA1QgEAXgIAWQgIAGgKAFQggAOghgBQgXgNgXgQIAABWIAFAWg");
	this.shape_8.setTransform(4.9,-10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjpIYIABgBIAGg9IgkAFIhGgSQgTgDgRgFIgZgSQgOgJgKgNQgGgRAAgSIAAgoQAGgpAPgjIAkiDQAQgwAHgwIAAgjQAHgpAWgiQAHgNAKgLQAagTAegOQALgIAOgFIAUgBIAZgFQAVgCAUgGQAagTAYgXQAPgKANgMQAKghgNggQgRgvgDgxIAFgeQABgfAKgeQA7g9BWABQASACARAHQAjARATAiQAFAWADAYIAHAjIgDAaIAAAjQgGAmgNAmQgEAVgJATQgKAJgNABIA8AxIBgASIBaBGIAcBZIgRBRIAKA4IAZDoIgMAsIgNAIIgoAOIgkgCIgogYIAABWIAFAWg");
	this.shape_9.setTransform(4.9,-10.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjpIYIABgBIAGg9QgVADgUAAIhBgQQgSgDgSgEQghgUgVgfQgCgMABgNIAAgyQAGgeAMgaIAJgoIAoiJQAKgeAEgeIAAgyQAEgTAKgQQAMgbATgWQAbgSAdgPQAMgIANgFIAUgBIAZgFQASgBASgEQANgJAMgMIAegYQANgNASgDIAEgeQgBgUgIgQIgOgoQgJgqACgsQAHgtAUgoQA4grBJACQAmAGAhAUQAYAhAGAqIAIAtIgDAVIAAAyQgIAegLAfQgFAXgMAVQgJAGgKAAIA8AxIBgATIBUA7IAgBUIgPBgIAKA4IAZDoIgLAsIgOAIIgoAOIgZAAIgzgaIAABMQACARAEAPg");
	this.shape_10.setTransform(4.9,-10.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjnIYIABgBIABgVQADgWACgXQg1AHg1gPIgagEQgQgGgOgLQgagSgJgdQgDgjADgkQAHgaALgYIAIgoIAWhCIAOg4QAPgpADgsQgEgSgBgRQAFgQAKgOQAOggAWgbIAegTQAYgPAbgMIAZgBIAZgFQAPgBAQgEQAogkAtgZQADgYABgVIgWg9QgJgvACgxQAHgsAXglQA0gkBAABQArAEAlAWQAVAaAGAiQALA+gCBAQgIAfgLAeQgFAdgRAYQgHACgIAAIAkAfQALALAOAJQAMADANACQAhAEAhAHQAaANAYAUQASAKARANQAKASAHAVQAMAYAHAZQgCAogKApIgDAPIAPBlQAEA9AIA8QAIAogDApQgEAPgFAOIgNAIQgWAJgXAFQgngFgggVIAABMQABARAFAPg");
	this.shape_11.setTransform(4.8,-10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjnIaIAAgWQAEgWABgXQg1AFg1gOIgZgDQgRgHgNgKQgagSgKgdQgCgmACgmQAIgYALgVIAIgpIAWhBIAEgVQAPgtALguIgDgoQgBgRADgRIARgfQAKgVAMgTQASgPAWgLQAagRAdgLIAugHQAPAAAPgEQApgkAtgZIADgpIgLgeQgLgegGgfQgCgmACglQAMg6ArgmQAYgLAagEQAPgEAPAAQAxAGAqAXQAZAnAHAvIAHAeIgDBHQgIAfgLAdQgGAdgQAZQgHACgIAAIAjAfQAMALAOAJQAMADANABQAhAEAgAHQAbAOAYATQAWAOASASIAMAfQAOAfAFAhQgKAogFApIAUCXIAAAfQALA0AEA2QgFAXgHAUQgJAGgJADQggANgigBIgugYIAABMIAAAgg");
	this.shape_12.setTransform(4.9,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AD/AQIAAgfQACAPAEAQgAkEAQIAAgBIABgUIAAAVg");
	this.shape_13.setTransform(7.7,41.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjnIbIAAgWQADgXACgXIgZAGQgagCgZgFIgegHQgSgCgSgFIgUgNQgWgPgMgWQgCgNABgMIAAguQgBgNACgMIARgkIAJgoIARgzIANg3QANglAGgnIAAg3QAEgYAOgVQAKgVANgTQASgQAVgLQAbgRAdgKQAmgEAmgIQAQgLAOgOIAjgeQAKgHAIgJQAEgPgBgPIgahbIAAg9QAJhFA0guQAVgIAYgDIAZgFIAZAFQAmAGAhAUQAUAbAHAhQAHAbAEAdIgDAZIAAAyQgIAfgLAeQgFAYgMAUQgJAGgKABQAcAcAgAWQAMAEANABQAhAEAhAHQAaAOAZATQAWANARATIANAeQAOAgAEAhQgKArgFArIAUCSIAAAeQALA1AEA2QgEAWgIAVIgSAIQggAOghgCIgugXIAABMQgBAMADANIACAHg");
	this.shape_14.setTransform(4.9,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAALIAAgBIABgUIAAAVg");
	this.shape_15.setTransform(-18.4,41.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjnIbIAAgWQADgXACgXIgZAGQgdgCgbgHIgygIQgRgHgOgKQgNgIgKgKQgMgVAAgXIAAguQgBgNACgMIARgkIAJgoIARgzIANg3QANglAGgnIAAg3QAEgYAOgVQAKgVANgTQASgPAVgLQAbgRAdgLQAmgEAmgIQAQgLAOgOIAjgeQAKgHAIgJQAEgPgBgPIgahbQgBghABggQAJg9AqgsQAZgNAegEIAZgFIAZAFQAiAFAgARQAYAcAIAkQAHAbAEAdIgDAZIAAAyQgIAfgLAeQgEAVgJAUQgKAJgNABQAcAcAgAWQAMAEANABQAhAEAhAHQAaAOAZATQAWANARATIANAeQAOAgAEAhQgKArgFArIAUCSIAAAeQAKAyAFAzQgDAagJAXIgSAIQggANghgBIgugXIAABMQgBAMADANIACAHg");
	this.shape_16.setTransform(4.9,-10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjnIbIAAgWQADgXACgXIgZAGQgdgCgbgHIgygIQgRgHgOgKQgNgIgKgKQgMgVAAgXIAAguQgBgNACgMIARgkIAJgoIARgzIANg3QANglAGgnIAAg3QAGgdARgaQAIgQAKgOQASgQAVgKQAbgRAdgLQAmgEAmgIQAQgLAOgOIAegaQANgJAKgLQAEgPgBgPIgahbQgBghABggQAKhDAzgsQAVgIAYgDIAZgFIAZAFQApAHAjAYQAQAZAGAeQAHAbAEAdIgDAZIAAAyQgIAfgLAeQgEAVgJAUQgKAJgNABQAcAcAgAWQAMAEANABQAhAEAhAHQATAJAQAOQAfASAYAYIANAeQAOAgAEAhQgKArgFArIAUCSIAAAeQAJAuAGAtQAAAdgKAaQgJAIgLAEQggANghgBIgugXIAABMQgBAMADANIACAHg");
	this.shape_17.setTransform(4.9,-10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjnIbIAAgRQADgZACgaIgZAGQgdgCgbgHIgygIQgRgHgOgKQgNgIgKgKQgMgVAAgXIAAguQgBgNACgMIARgkIAJgoIARgzIANg3QANglAGgnIAAg3QAEgYAOgVQAKgVANgTQASgPAVgLQAbgRAdgLQAmgEAmgIQAQgLAOgOIAjgeQAKgHAIgJQAEgPgBgPIgahbIAAg9QAHg/AsguQAZgNAegEIAZgFIAZAEQApAIAjAYQAOAUAGAZQAIAhAFAhIgDBLQgIAfgLAeQgEAVgJAUQgKAJgNABQAcAcAgAWQAPAEAQACIBBALQAYAOAWASQARALAQAMQALASAIAVQAJAWAIAXQgEAygKAyIAPBmIAAAUIAFAZIAAAjQALA4AEA4QgEAUgIASIgSAIQggANghgBQgZgMgVgQIAABMIAAAlg");
	this.shape_18.setTransform(4.9,-10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AD/ASIAAgkIAHAkgAkFASIABgBIABgQIAAARg");
	this.shape_19.setTransform(7.7,41.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AjsIVIAAgRQADgZACgZQgPAFgQADQgPgCgPgFIgygJQgbgDgYgOQgZgSgKgcIAAhRQAHgXALgWIADgZIAWhCIAJgoQAQgwAHgwIAAg3QAHgYANgVQAJgVANgSQATgNAUgLQATgNAWgJIBQgNQAsglAvgbIAFgjQgCgOgGgMIgPgtQgJgvACgxQAGgsAYglQBQgtBbAYIAZANQARATAFAZQAKAiAHAkQAAAQgDAPIAAAjQgGAngNAlQgFAXgNAUIgOAHIAfAZQALALAOAIQAlAIAnAFQAlAOAhAYQASAKAQANQAIANAFAQQAPAgAJAgIgEAVQgHAggCAgQAFAkAIAkIAAAUQAHAZANAVQAHAdgDAfIgEAZIAKAzQgBASgFARIgGATQgLAGgMACIgPAHQgPACgPAAQgjgDgegTIgBgJIgFAAIAABbIAAAlg");
	this.shape_20.setTransform(5.5,-10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Aj0IYIAAgRQAEgWABgXIgjAFIhggRQgQgHgOgKQgNgIgLgJQgLgVgBgYQgBghABghQAIgXALgWIAGgjIATg9IAJgpQANgnAFgpIAAgzQAHgiARgeQAJgTANgPQATgNAVgLQATgNAVgJIAPgBIAagFQAUgCAUgFQAbgTAYgZIAdgWQAOgfgNghQgMghgIggIAAgpQAAg1AVgwQANgOAQgKQAOgJARgGQATgEAUgCIAZAAQAyAKAnAeQALAWAFAXQAJAhAFAhIgDBMQgIAmgNAmIgGAUQgJAMAGANIAPAMQAMAKAOAHQAnAIApAFQAjAPAfAWQATAMAPAPQAKAUAHAVQALATAHAVQgBAMgCAMQgGAmABAmIAIAjQADANAFANIAgAbQAHASAAAVQABAZgDAZIgMAeQADAPAEAQQAEAogRAiQgMAFgNACIgaAEIgZAAQgMABgNgDQgYgPgWgSIAABvIAAAlg");
	this.shape_21.setTransform(6.2,-10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Aj+IWIAAgRQADgXACgWIgZAFQgcgCgcgFIgegHQgSgCgSgFQgmgXgQgqIACgkIgDgPQAIgkANgiIAGgfIAQgyIAJguQAUg7AEg+IgFgYQAEgTAKgRQAMgaAQgYQANgMAPgIQAdgVAggNQAmgFAmgJQAbgTAXgYIAegWQAOgdgNgeIgHgZQgKgYgEgbQgCg2AJg0QA6hIBgABQAwAOAgAlQAIAYAEAaQAGAUADAVQABAogBApQgGAWgIAXQgGAcgIAcIgMAPIAyAhIBbAOIBZA7IAjBHIACAiIgFA9IAKAeIAFgEQAPACALALIANAIQAVAZAGAiIgBAkQgBAVgKASQgJALgEAPIAKA8IgEAVQgCAMgGALQgVAMgXABQgYAIgaABQgogSgVgmIgFAAIgFAuQgCA3ACA4IAAAWg");
	this.shape_22.setTransform(7.2,-10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AD/ALIAAgVIAGAVgAkEALIAAgBIABgPIAAAQg");
	this.shape_23.setTransform(7.7,41.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AkKIWIAAgRQADgXACgWQgOAGgQAEQgXgEgXgGQgkgEgjgJQgNgHgMgKQgKgHgJgJQgMgjACgkQgBgaAGgYIAMgaIAiiNQAMgjAHgkIAAg8QADggAQgcQAIgTANgQQATgPAVgMQASgNASgJQAlgIAngGQAUgIAPgPIAogjQAMgKAIgLQAGgdgOgaIgPguIgDgUQgEgXAAgWIAFgaIAAgUQANgrAhgfQAmgRArAAIAiAAQAnAKAeAaQAOAdAHAgQAMA4gBA7QgFAagJAZQgIAngTAlIA4AhIBWANIBCAmIAXARIAoBLIgBAoIADAeQALgFANACIAMAHIAOAEIAMAKQAIADAIAFIAIATQAMAjABAlIAAATQgKAbgPAYIgHAPIAEAZIAAAuQgBAXgGAUQgSAMgVACQgaALgdADQgRgFgOgLQgdgUgQgeIgFAAIgFA4QgDA/ADA/IAAAWg");
	this.shape_24.setTransform(8.4,-10.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AD/ALIAAgVIAGAVgAkEALIABgQIAAAQg");
	this.shape_25.setTransform(7.7,41.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkUIYIAGg5QgUAEgUABIg9gKQgVgBgTgGIgagRQgNgHgKgJQgKgWgCgYIAAgyQAHgdALgbIAEgZIARg4IAShWQAKgbACgcIgDgUIAAgfQAGgiASgfQAGgPALgNQAVgQAYgNQAQgMATgKIAUgCQAigFAggKQAagUAYgZQAPgMANgNIAEgUQgBgWgJgTQgNgkgJgiIAAgkQAChHAsg2QARgJASgGQARgFASgBIAoAAQAxALAjAiQAKAbAGAdQAHAZAEAZIgFAZIAFAaQgDAWgHAXQgIAogOAjQgGAFgHABQAVAaAdASQAUAFAUACIAzAGQAaAMAZAQQAXAMAUAPQAQAXAMAbQAMASACAWIAZgDIAMAKIATAHIAAAFIAFgDQARACADARQANgCAKAHIAEAZIAMAZQACARAAATQADAWgFAXQgRAbgPAcQgBAUAEAVQgBAcgEAbQgBAVgKATQgSAIgVAEQgSAIgSAFQgWgBgSgNQgrgWgSgsIgFAAIAAAkIgFAoQgCBEACBEIAAAWg");
	this.shape_26.setTransform(9.3,-10.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCALIAAgVIAFAVg");
	this.shape_27.setTransform(33.5,41.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AkbIbIABgMQAEgWABgYQgSAHgRADIhCgNIgjgDQgfgPgZgYQgLggABghIAAgkQAIgaAKgZIAEgeIARg3IAGgkQAPg0AGg2QgEgZgBgZQAHgXAMgWQAIgSAKgRQANgNAPgJQAhgYAmgNQAigFAggJQApglAtgbIAAgoQgDgRgHgNQgLgZgIgaIgHgyIAFgeIAAgaQAvhaBpgLQAhAHAgAPQAZAbAJAlQAGAWAFAXIAAAuQACAkgJAjIgMAtQgCANgGALQgLAIgNADIA9AxIBgAOIBMAoIAlAxIAXAtIAFAAQACgcAYgMQAIABAHAEIgKAUIAUgJQAWAGAUAOIAWALIADAhQAIAWAGAXIgCAbQABAOgBAPQgPAcgQAbQgDANAAANIAAA3IgFAaQgCAagJAXQgQAJgSAEQgRAIgSAFQgYAAgWgIQgVgIgSgLQgXgcgJgkIgFAAIAAAuIgFAoIAACdIAAAWgAFZgBIgCAcIAFAAIAAgeg");
	this.shape_28.setTransform(10,-10.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AkfIbIAGg0QgUAEgUAAIg9gKQgXgBgWgGQgjgUgTghQgCgNAAgMIAAgzQAEgZAJgUIAiidQAKggAEgiQgCgmACglQAGgXANgWQAIgSANgQQATgPAWgNQARgNASgJQAsgIAqgMQAlgmAsgZIAAgeQgKgsgTgqQgJgvACgxQAIgpAXgjQA7gnBIgBQAfAGAcAQQAXAXAJAfQAPBDgBBFQgEAXgIAXQgFAagKAYQgQAMgSAIQAmAYAmAaIAtAGQAaABAZAGIAeARQAaAMAZAPQAPATANAVQAQAXAGAbIAAAZIAFAAIACgJQAIgGAEgKIgEgUQACgnAdgWQAIACAHAEIgPAeQASgNAUAEIACAJIAFgDQASACADAQIAZAAQgBAYACAVQAGAOADAQIAAAZQADAPAAAPQgQAlgUAiQgDANABAMQABAkgBAjIgGAaQgCAUgFATQgRAMgVAGQgRAJgSAEQgggBgdgLQgNgDgLgHQgaghgLgpIgFAAIAAAuIgFAoIAACsIAAAbg");
	this.shape_29.setTransform(10.4,-10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCANIAAgaIAFAag");
	this.shape_30.setTransform(33.5,41.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AkfIbIAGg0IgaAIQgbgDgcgFIg4gHQgQgHgOgKIgPgJQgTgXgBgeIAAgUQgDgaAEgZIAMgeIAIgzIAMgoIAJgzQANgtAFguIgFgtQAHgkARgiQAGgMAHgLQAQgNASgLQATgPAVgMQA0gLAxgSIAugvQAMgIAKgJQADgRAAgSQgHgagNgYQgNgjgCgkQgCgsAIgqQA3hKBfgHQAvAJAkAfQAIAUAGAVQAQBDgDBGQgGAWgHAXQgDAagLAXQgPAKgSAGIBRAyIAZABIAZAFIAUAAIBlAvIA2BPIACAZIAFAAQAJgTAGgVQgCgyAggaQAIACAHAEIgPAeQAMgIAOgDQAXAJAWAPIASAJQACASgCAUIAMAoIgBAgQABAOgBAOQgKAVgNAUQgPAfgBAiIAFAaIgJBBQAAASgHAQQgTALgVAHQgTAJgVAFQgQgBgOgFQgWgEgTgIQgQgOgKgSQgNgWgGgYIgFAAIgFBCIAACIQgCAhACAhIAAAbg");
	this.shape_31.setTransform(10.5,-10.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AkcIYIAGg0QgPAHgQADIhWgKQgzgQghgoQgCgWABgXQgEgPAAgPQAHgdAKgbIADgeIARg9IADgeQAMgrAIgrIgBgyQgDgTAAgRIAMgYQAJgYAMgVQAVgWAZgQQARgMASgKQAggIAigFQArgWAhglQAOgLALgOQAFgggPgdQgRgqgIgsQgCgpAHgoQAGgVAKgSQA+gvBOABQAmAIAfAWQARAaAGAdQAJAcAEAcQABAmgBAmQgDASgFARQgGAlgNAgIgNAHQAiAeAqAPIAUAAIAZAGIAZABQAcAMAcAQQASAHAQALQAPARANAVQAVAYADAgIAFAAQAJgRAGgSQgDgyAcgiQAIAAAIADIgLAjQAPgGAQgBQAVAHATANQAKAEAIAIQADASgDASIAMAnQAEAhgFAhQgVAhgNAmIAABbIgFAjQABAPgHAPQgQAKgTAGQgSAMgWADQgrgCgmgPQgagigOgoIgFAAIgFAoIAACOQgCAtACAtIAAAbg");
	this.shape_32.setTransform(10.2,-10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDANIAAgaIAHAag");
	this.shape_33.setTransform(33.6,41.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AkXIWIAGgvQgUAEgVABIhBgKQgSgBgSgEQgOgFgLgJQgcgTgHghIAAgfIgGgZQAHgfAMgdIAEgfIARhBIADgeQAPg6ADg7QgEgUgBgUQAJgfAPgdQAHgPAKgNQAVgSAYgOQAOgLAQgIQAvgJAsgPQAXgTATgXIAggbQADgRgBgSQgFgQgJgOQgOgggHgiIAAgtQgBgzAVgtQA9gpBLAAQAlAJAfAWQANATAGAVQAOAnAEAqIAAAUIAGAZQgCAZgFAaIgHAUIgJAuQgFAJAAALQAHAJAKAHIAPAMQAcAGAcABIAZAFIAUACQAdAMAbAQQARAHAQAKIAOATQAXAgAVAiQAEgNABgNQgDgvAcgcQAIAAAIAEIgLAfQAbgGAcAIIAMALQAMAHAKAKQAAAMgCANIANAaQACAQAAASIACAUQgCAbgQAXQgNAYgCAbQACAzgCAyIgFAaQAAAKgCAJQgRAPgWAHQgOAIgQAGQgVABgTgEQgegFgZgRQgUghgVgcIAAC2QgCArACArIAAAbg");
	this.shape_34.setTransform(9.7,-10.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AkOIWIAGgvIgUAFQgdgBgbgEIgjgFQgSgBgSgEIgUgOQgNgHgLgKQgMgYABgaIgGgpQAIgfALgdIADgkIAMgoIAIg4QAPgvAEgxIgFgoQgBgPADgOIAQgkQAIgSALgQQAXgUAagQIAZgSIAVgEQAogHAjgNIAkgnQASgOAPgQQAJgagLgZQgOgegLgeIgDgaQgHhaA2hGQAPgHAPgEQAogHApABQAwAMAfAnQAIAUAFAUQAJAeAEAfIAABHQgDASgFARQgFAqgWAiIAyAdIBgANQASAIASAJQAXALAWAMQAbAdATAjIAIgPIAMgcIAPgBIAKAEIgKAZQAMgEANAAIAMAGQAJgBAKABQARANAPAPQACAKAAALIAOAdQADAZgBAaQABAMgDANQgJASgMARQgIAWABAYIAFAeIgBBbQgPAUgYAHQgPAIgQAFQhagLgkhQIgFAAIAAC2QgCArACArIAAAbg");
	this.shape_35.setTransform(8.8,-10.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AkDIYIAFgvIgUAFQgcgBgbgEIgkgFQgSgBgRgEIgUgOQgZgPgLgbIAAgjIgFgeQAHgfAMgeIADgjIAMgpIAIg3QALgmAIgmQgCgjgDgkQAEgdAOgZQAHgTALgRQAVgRAYgPQAQgNATgKQAugHAtgPIAjgnQAggYAHgkIgghRQgGgjgBgkQABgwAUgrQAugmA8gHIAeAAQAWAEAWAJIAUAIQASAWAIAcQAUBHAABLQgFAcgJAbQgCAagLAXIgOAHIA4AnIBqARIBMApIAgAsIAYAVIgGAZQAMgIAOgBIAUAIIAOADQANALALALIAFAPIAQAVQAHAggBAhQgDASgIASQgKALgHAOQgBAMADANQAHAeAFAfIAAAjQAAANgDAMQgTAPgYAGQgZALgaACQgQgFgOgIQgrgWgRgsIgGAAIAAChQgBApABAoIAAAbg");
	this.shape_36.setTransform(7.7,-10.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Aj3IbIAGgvIgUAFQgdgBgbgEIgjgFQgSgBgSgEIgUgOQgNgHgLgKQgMgaABgdIgGgkQAIgfALgdIADgfIAah5QALgoACgoIgFguQAFgdAOgaQAIgSAKgRQAWgTAbgQIAZgSIAVgEQAngHAkgNQASgTASgUQAWgSAQgXQACgVgJgTQgOgegLgeQgGgaAAgZQgCg3ATgzQAngoA3gMQARgEASAAQApAHAlAUQATAYAIAeQARBFgCBIIgIAfQgGAlgRAfQgHADgHAAQARAVAXAQIAPALQAeAHAfAAQAtAIApAVQAaANAXATIASAeQARAZAHAfIAAAdQACANANAGIANADIAMANQASARAQATQAIATADAVIgFAfIgQAyIAKAeQAKAjACAkQgDAMgEALQgUANgYAGQgOAGgQACIgUAAQgvgVgignIAACNQgCAjACAkIAAAbg");
	this.shape_37.setTransform(6.5,-10.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjwIbIAFgwIgUAGIgZAAIhWgMQgrgRgaglQgCgXAAgXQgDgOAAgQQAHgcAKgbIADgfIARhBIADgeQAQg8ADg+QgEgRgBgSQAJgfAPgdQAIgSANgQIAkgXQAQgNATgJQAvgJAsgPQAWgTAUgXQARgOAOgNQADgRAAgSQgGgQgIgOQgOgggIgiQgBgoABgpQAMg6AxglQARgGASgEQAWgGAXAAQArAHAlATQASAWAIAcQAKAeAFAfIAAAjIAFAZQgBAPgEAQIgIAeQgFAhgOAfIgSAGIA3AsIAUADIApAEIAZAFIAPABQASAIASAKQAaANAYAPQAQARAKAWQANAUAKAUQACANgBAMIAAA3QAGAlAQAiQANAOALAQQAFAfgFAeQADARAHASQAOAnABAqQgEAXgVALIgUADQgPAGgQAFQgkgDgdgUIgageIAAC7IAAAbg");
	this.shape_38.setTransform(5.8,-10.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjpIYIAGgvQgUAEgVABIg8gKQgXgBgXgGQgNgHgMgJQgWgQgIgaIAAgaQgDgUgBgUQAHgdAKgbIAEgeIARg9IADgeIAMg3QAGgSADgSIgGhRQAHgRALgRQAIgYAOgVQAQgNASgLQAagTAegMQAhgFAggIQAggXAdgfQAOgMAMgNQAFgggQgdQgRgqgIgrQgCg6ASg2QAIgLALgJQAJgLALgIQAzgRA3ABQAmAIAfAWQAQAaAHAeQAJAdAFAfIAAA9QgFAhgJAhQgDAUgGAUQgIAIgKACQAhAlAwAOIBHAGIAeASQAjARAdAYQAMAWALAYQAJARAIASIgDATIAAAaIgFAZQAFAhALAhIAaB0QAMAiAHAkQABAmgRAfQgMAGgNADIgPAGQg5ACgigoIgFAAIAACcIAAAbg");
	this.shape_39.setTransform(5,-10.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjlIYIAGgvQgUAEgVABQgjgGgjgHIgfgEQgagOgXgTQgNggACgiQgCgZADgZIAMgfIADgZIAfiJQAIgbAFgcIgFhCQAIghAQgfIANgZQAUgRAYgOQATgOAVgKQApgGAogLQAYgUAWgZQASgNAOgNQADgHAAgHQgHgxgWgvIgDgZQgHhBATg+QAJgLALgJQA0giA/gBQApAIAjAWQAQAXAHAcQAMAiAFAkIAAA9QgEAcgJAcQgDAlgYAXIAAAKQAiAUAlAPIBBAGQAbAIAYAQQAXAMAWAQQAQATAKAZQANAVAKAYQABAPgDAOQgFAZgBAaQADAkAKAiIASBwQAMAjAHAjIgFAeQgBATgGARQgKAKgNAGQggAOgiAAQgVgGgTgJIAABgIAAAqg");
	this.shape_40.setTransform(4.7,-10.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDAVIAAgpIAHApg");
	this.shape_41.setTransform(33.6,40.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AjgIWIAFgvIgjAFIgogJQgogFgkgJIgUgQQgMgHgIgKQgNguACgyQAFgXAJgWIAkinQAIgbADgdIAAgyQgDgNAAgLQAFgNAHgMQAMgdAQgaQANgLAQgJQAYgSAagNQApgGAogLQAogmAugaIAAgpQgCgMgHgKIgUg1QgHgpAAgoQAEgrASglQBGgyBUAJQAVAGAUAKQAcAjALAtQAHAYAEAaIAAA9QgGAZgIAZQgEAcgJAcIgNAUIA3AiIAaABIAZAFIAUAAQAjAKAfAVQAXAMAUAOQAIAMAFAMQAQAgAMAiQgCAogJAsQAEAnAJAlIABAfIAJAjQACAeAEAfQAKAbAEAcQgDASgGASQgDAPgGAPQgOANgTAIQgoARgpgNIAABHIAAAqg");
	this.shape_42.setTransform(4.2,-10.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AjdIYIAGg0QgUAHgVABIgjgIQgwgFgrgWQgNgIgLgLQgNghACglIAAgkQAGgWAJgXIAGgjIARg4IAJgyQAMgmAGgmQgDghgCghQAHgXAMgVQAIgTAKgQQANgNAQgKQAYgRAagPQAggIAigFQAQgEAOgGQAVgSAUgVQASgPAPgPQADgRgBgSQgFgQgIgPIgQgoQgIg4AHg3QAFgaAMgXQAtgnA6gIIAZAAQA0AKAlAjQAJAWAFAYQAIAdAFAfIAAA9QgFAagIAYIgIAkQgEAPgHANIgIACQAIAMAMAKQAMAKAOAJQAMADANABIAZAGQAZABAZAEQAgAPAdAWQAPAJAOALQALASAHAUQAQAiADAkQgFAfgHAeIgDAPQAEAZAGAaIAPCIQAJAkAEAiIgVA9QgKAKgMAGQgbAPgdAFIgZgGQgCAkACAjIAAAbg");
	this.shape_43.setTransform(3.9,-10.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AjbIYIAFg0IgZAFQgZgBgZgFIgkgIQgVgDgTgGQgpgegKgwIAAgyQAIgbALgYIACgUIAShCIAIgzQANgnAGgpIAAg9QAEgdAPgZQAIgSAKgRQAUgRAYgOQATgOAVgKQApgGAogKQAYgSAWgXIAhgaQAIgTgBgUQgFgQgJgPIgPgoIgBgUQgFgaAAgZIAFgZQACggAOgdQA4gwBJgCQAoAHAiAUQAWAcAHAkQAIAdAFAfIgBAbIABAiQgFAagIAYQgGAdgJAbQgHAIgKACIA3AsIBgANIBaA8IAlBeIgQBXIAQCIIAAAeIAPBaIgXBGIgXAMIgyAUIgagFIAAA3IAAAlg");
	this.shape_44.setTransform(3.7,-10.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgCASIAAgkIAFAkg");
	this.shape_45.setTransform(33.6,41.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AjdIYIAGg0QgUAEgUABIgpgJQg5gKgvggQgTgtACgyQAHgeALgaIAEgZIAZhlQAQg1AIg1IAAgfQgEgPAAgOQAIgSAKgRQAKgYANgUQANgLAPgJQAYgSAbgNQAvgHAsgMQAVgRATgVQAVgRARgSQADgPAAgPQgGgRgIgOIgDgPQgLgagDgeQgCg2AJgzQA3hDBZgEQAdAGAbANQAJAEAJAIQAOAVAGAYQAMAlAFAmIAAAzQgHAtgOAuQgFAYgTALIAAAKIA3AiIBCALIAZACIA9AlIAhAbIAdBHIAHAYIgTBRIAKBHIAAAeIAFAZIAAAfIASBqIgYBCIgxAcIgzACIAAAyIAAAlg");
	this.shape_46.setTransform(3.8,-10.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AjeIYIAHg0IgkAFIhLgTQgTgCgRgEQgOgJgLgKQgLgHgIgKQgLgdACgfIgCgZQAGgfAMgeIAIgpIAMgjIAOg8QAMgoAJgpIgDgVIAAgoQADgXAMgVQALgZAQgVQAUgRAYgOQAWgOAYgJQAmgEAlgJQAUgNAQgRIAegbQAKgIAIgJQADgPgBgPQgEgOgGgMQgPglgFgnIAAg8QAHg3AmgoQAygUA4gBQAdAGAaANQANAGALAKQARAeAFAkQAGAZAEAZIAAAzQgHAmgMAmQgEAggXASIAAAKIBCAnIBGAIIBCAlIAoAgIAWA9IAJAiIgRBKIACAlIAFAZIAKBmIAAAeIANBHIgZBFIhAAeIgjgDIAAAyIAAAlg");
	this.shape_47.setTransform(3.9,-10.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AjfIYIABgBIAGg4QgRAGgTABIgegHQhagPgthHIAEgZIgEgeQAJglANgiIAiiIQANgmAGgmIAAgzQADggAQgcQAKgVAQgRIAegTQAWgPAYgMQAogGApgHQAbgTAXgZIAegWQAOgfgOghQgPglgFgnQgCgzAJgxQA1hIBbgEQAdAGAaANQANAGALAKQAOAVAEAZQAJAjAFAjIAAAoQgCAagFAZIgMAeQgFAcgNAaIgJACQAZAfAkASIBWAMQAhATAgAYQANAIALAKQALAVAHAYQAOAdADAeQgNAtgFAuQAGAjAEAkIAFBbIALA8QADANAAANIgMAjQgGASgIAQQgJAFgJADQgSAKgRAHQgXADgXgBIAAA8IAAAWg");
	this.shape_48.setTransform(3.9,-10.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AjhIYIABgBIAGg4QgUAEgVABIhLgTQgQgCgPgEQgNgJgMgKQgPgLgJgQQgCgMABgNQgDgpAEgoIARgjIAEgZIAQgzIAMgyQANgrALgrQgBgSgCgSIAAgUQAEgdAPgZQAJgVANgTQAXgSAagOQAPgKAQgIQAugHAtgJQAYgSAVgXIAegWQAKgUgBgYIgMgZQgMgggFghQgCg2AJg0QA1hHBbgFQAdAGAaANQANAGALAKQASAhAFAmQAMBEgMBEIgSA9QgEAMgGALIgIACQAWAeAhATIBHAMIAUABQANAHAMAKQAjAWAdAZQAHAPAGAQQAOAiAFAjQgLAtgGAuIAHA4IAAAjIAFAeIAAAkIAHAtQAFAUADAVQgCAPgGAPQgHAYgMAVQgLAIgMAFIgVALQgcAEgbgCIAAA8IAAAWg");
	this.shape_49.setTransform(4.1,-10.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AjhIWIAAgBIAGg4QgUAEgUABIgogLQglgHgigMQgXgQgRgUQgHgmABgqQABgVAGgUIAMgZIAIgpIARgyIAShMQAKgeAEgfIAAg2QAEgTAKgQQAMgaAQgXQAOgLAPgIQAfgUAigMQAkgDAjgIQApgkAtgZQACgagDgZQgPgngJgpQgCgpACgoQAIgnAWggQBAgnBMAKQAbAHAYANQAZAhAFAqQAGAcAEAbIgFAaIADAPIgDAUQgIAogNApQgGAVgSAJIAeAeIAaATIBVANIAuAbIAxAlIAcBHIAHAdIgSBWIAFBWIAFAeIAFBMIAKA9IgbBKIhFAbIgfgFIAAA8IAAAWg");
	this.shape_50.setTransform(4.2,-10.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AjhIYIAAgBIAGg4IgjAFIgogKQgxgKgqgYQgSgNgLgTQgCgMAAgNIAAg9QAIgaALgYIAIgpIARgyIANg4QANglAGgmIAAgyQAIgmAVghQAHgNAKgMQASgPAWgLQAVgOAZgJQAogEAogJQAZgRAVgWIAhgaQAIgTgBgVQgFgPgHgPQgQgsgCgvIAFgeQACglAPgiQA2gwBKgCQAoAIAjATQAVAcAHAkQAFAWADAXIAABCQgFAkgNAiQgGAcgNAaIgIACQAWAfAiASIBWAQQAdAOAaAUQASALAQANQAIALAEANIAQAtQAGAQADASIgUBbIAKBRIAAAkIAFAeIAAAoQAGAeAEAfQgFAXgJAWQgFAPgIAOQgLAHgNAGQgXAMgbACIgaAAIAAA3IAAAWg");
	this.shape_51.setTransform(4.2,-10.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AjhIYIAAgBIAGg4IgjAFIgogKQgxgKgqgYQgSgNgLgTQgCgMAAgNIAAg9QAIgaALgYIAIgpIARgyIANg4QANglAGgmIAAgyQAFghATgbQAJgUANgQQAXgSAbgOQAPgKAQgHIAZgBIAZgGQASgBARgFQAZgRAVgWIAhgaQAIgTgBgVQgEgNgGgMQgRgsgDgvIAFgZQgBgbAIgcQAOgfAYgYQAvgUA1gBQAoAIAjATQAWAcAGAkQAFAWADAXIAABHQgGAigMAfQgGAcgNAaIgIACQAWAeAiATQAqAJAsAHQAdAOAaAUQASALAQANQAIALAEANIAQAtQAGAQADASQgLAtgJAuIAKBRIAAAeIAFAfIAAAtQAGAeAEAfQgFAXgJAWQgFAQgIANQgLAIgNAFIgZANIgzABIAAA3IAAAWg");
	this.shape_52.setTransform(4.2,-10.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AjhIYIAAgBIAGg4QgUAEgUABIgZgJQgngIglgKQgOgHgLgKQgSgNgLgTQgCgMAAgNIAAgtQABgVAGgUIAMgZIADgUIAfhqQAOgqALgrIgChHQAGgWANgSIASgkQAagZAhgRQAPgKAQgHIAZgBIAZgGQASgBARgFQAZgRAVgWQAUgOASgQQADgRgBgTIgdhRQgBgUAFgUQAAgmAHglQAyhGBYgGQAoAIAjATQAVAaAHAgQAIA6AAA7QgHAwgQAwQgFAPgJANIgNACQAbAdAiAUQAlAIAmAFQArASAmAdQAMAIALAKQANAeALAjQAGAQADASQgNAwgHAwIAKBHIAAAjIAFAfIAAAtQAHAhADAhQgGAUgIAUQgFAQgIANQgJAHgKAEIgZAOQgbACgdAAIAAA3IAAAWg");
	this.shape_53.setTransform(4.2,-10.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AjhIYIAAgBIAGg4QgUAEgUABQghgIghgLIgjgIQgOgHgLgLQgSgMgLgTQgCgMAAgNIAAgtQAFgjAOgfIAih+IAahbIgDhBQAGgWANgSIASgkQAagZAhgRQAPgKAQgHIAZgBIAZgGQASgBARgFQAZgRAVgWQAUgOASgQQADgRgBgTIgIgUQgMgggJghQAAgVAEgUIAAgoQAFgaALgZQA0gzBNgEQAuAKAnAZQANAXAFAbQAFAXADAXIAABHQgHAwgQAwQgFAPgJANIgNACQAcAcAhAVQAlAIAmAFQArASAmAdQAMAIALAKQAIARAGASQANAjAGAiQgNAtgHAuIAKBHIAFBgQADAhAHAgQgCAdgKAbQgGATgNAPIgoAUQgbACgdAAIAAA3IAAAWg");
	this.shape_54.setTransform(4.2,-10.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AjaIYIAAg5Qg2AFg0gTQgegGgagPQgagUgJgfQgCgkACgjQAHgaALgYIAih+QAVg9AHg9QgDgRgCgRQAHgWANgSQAKgZAQgVQAYgSAagOQAPgKAQgHIAUgBIAZgGIAZgBQAjgQAagcQAVgOARgQQADgRgBgTIgHgUQgNgggIghQAAgXADgXQABgzAVgtQA1gqBHgDQAuAJAmAaQAPAXADAbQAHAfAEAeIgCAUIAAApQgGAigNAfQgGAdgQAZIgKACQAcAcAhAVQAlAIAnAFQAlAPAhAZQASALAPAOQAJARAFASQAOAjAFAiQgGAfgIAeIgGAZIAKBMIAFBgQAEAhAGAgQgCAdgKAbQgFASgKAQIgSAIQgWALgYAFIgjgCIAAA3IAAAWg");
	this.shape_55.setTransform(4.2,-10.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AD/AdIAAgWIAGAWgAkEAdIAAgCIAGg3IAAA5g");
	this.shape_56.setTransform(7.7,40.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AjiIYIABgBIAGg4QgwAGgwgQIgtgMQgOgHgMgKQgbgXgDgiIAAgyQAGggANgdIA8jUQADgUgBgVIgDgnQAHgQAKgOQAMgYAPgWQAXgSAbgOQAOgKAQgHIAVgBIAZgFQAUgBAUgGQAZgRAVgWIAegWQANgTgDgYIgdhWQAAgQAEgOIAAgaQAIhDAvgvQASgJAWgEQAYgFAaABQAoAIAkATQAUAXAHAfQAHAgAEAhIgDAVIAAAoQgGAkgMAjQgHAggZASIA8AxIBhASIBTA8IAOAjIATBGIgUBVIAKBMIAAAeIAEAfIAAAtIALBHIgMAoIgPAiIg7AZIgpgDIAAA3IAAAWg");
	this.shape_57.setTransform(4.2,-10.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AjhIXIAAgCIAGg3QgjAHgjgLQhAgOgzgmQgNgfABgjIAAgjQAHgaAMgYIAmiOQARgvAHgxIAAgxQAFgTAJgRQANgbATgXQAVgPAYgMQAPgKAQgHIAUgCIAZgFQAUgCAUgFQApgiAtgYQACgdgEgbIgPguQgHgRgEgSIADgUIAAgoQAMg9ArgsQAVgJAYgEQBAgFA5AcQAZAhAFAqIAJAtIgEAZIAAAtQgDASgHASQgKAugeAeQAdAbAgAVIBgATQAfASAdAYQAMAIAMAKQAHAQAGASQAOAjAFAjQgGAegJAfIgFAZIAKBHIAAAjIAFAeIAAAuQAHAjADAjQgGAagJAZQgEANgIAKIgTAJQgTAKgVAHQgVAAgUgEIAAA4IAAAWg");
	this.shape_58.setTransform(4.2,-10.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AjgIWIAAgWIAFgeIgoAAQgfgHgegKQgvgNglgfQgOgpACgtQAFgiAOgfIAehrQAVhBALhCIAAgxQAFgTAJgRQAOgeAXgYIAogXQAPgKAQgHIAUgCIAZgFQAUgBAUgGQApgiAtgYIADgpIgUg9QgFgMgDgNQgCghACggQAFgoARgkQBCg2BYAJQAeAKAYAUQAOAVAEAYQAHAhAFAhIgEAZIAAAtQgDASgHASQgKAugeAeIA9AwIBgATIBUA8IAgBZIgQBRIAGB+IAFAeIAAAuIAKAyIgJAzIgNAnIgTAMIgyATIgkgFIAAA4IAAAWg");
	this.shape_59.setTransform(4.2,-10.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AD/ALIAAgVIAGAVgAkEALIAAgBIABgUIAAAVg");
	this.shape_60.setTransform(7.7,41.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AjgIYIAAgWIAFgeIgZAAQgigEgggKQhBgRgngyQgCgMAAgNIAAgoQAHgpAOgjIAkiDQARgwAHgxIAAgiQAGgpAXgiQAHgOAKgLQAVgPAYgNQAPgKAQgHQAqgGArgHQATgMARgPIAsgiQANgdgKgeIgOgoQgGgPgCgPQgBgaABgZIAFgZQADggAOgdQA2gwBKgCQASADASAFQAmARAVAjIAIAuQAGAbABAcQgDAXgBAXQgGAkgMAjQgHAggZASIAjAeQAMALAOAIIBgASQAVAMATAPQAXAPAVASQAHAQAGATQAPAiAFAjQgMAtgGAuIAHA9IAAAoIAFAkIAAAoQAHAjADAkQgFAZgJAZQgDAKgFAJQgNALgQAGQgYAMgaADIgagFIAAA3IAAAWg");
	this.shape_61.setTransform(4.2,-10.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AjgIYIAAgWIAFgeIgZABQghgDghgMQhBgRgngyQgCgMAAgNIAAgyQAHgeAMgaIAehlIAIgoQARgwAHgxIAAgnQAIgmAVggQAHgOAKgLQAVgPAYgMIAfgSIBVgNQATgMARgPIAZgUQAMgIALgKIAGgYQAAgUgJgQIgHgZQgJgTgEgVIAAguIAFgZQAFgsAZglQAZgUAegJQAPgFAPgBIAeAAQASADASAFQAmARAVAjQAFAXADAXIAJAyIgGAaIAAAZQgEAcgJAbIgLAkQgIAUgSAKIAjAeQAMALAOAIIBgASQAVAMATAPQAXAPAVASQAHAOAFAQQAQAlAFAlQgKApgHApIABAoIAFAeIAAAjIAFAkIAAAoQAHAoADApQgGAXgIAWQgDALgFAKQgLAJgNAFQgPAIgPAGQgaACgZgFIAAA3IAAAWg");
	this.shape_62.setTransform(4.2,-10.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AjgIYIAAgWIAFgeQgVADgTAAIgPgGIgZgHQhHgSgsg1QgCgMAAgNQgBgpAIgoIARgoIADgUIAWhCIAIgoQARgtAHguIAAgoQAEgkAUgeQAJgSANgQQAVgPAYgNQAPgKAQgHQAqgGArgHQAdgTAbgYIAYgSQAOgfgNghIgHgZQgJgTgEgVIAAgpIAFgZIAAgUQAJgkAVgeQAZgUAegJQAPgFAPgBIAeAAQASADASAFQAPAFAPAIQAjAuAFA7QAEARACASIgGAaIAAAZQgEAagJAYQgJAogcAaIAeAZQAOAOARAKIBgASQAZAPAZATQAWAPARAUQAKAZAIAaQAJAVABAXQgKApgHApIAGBpIAFAeIAAAuIAKA4QgBAhgLAgQgEANgGANQgLAJgNAFIgUALQgfAHgegHIAAA3IAAAWg");
	this.shape_63.setTransform(4.2,-10.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AEAALIAAgVIAFAVgAkEALIABgBIABgUIAAAVg");
	this.shape_64.setTransform(7.7,41.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AjhIWIAAgWIAFgeIgZADQgVgBgUgHIgjgKQg7gTgjgvQgCgNAAgMQgBgpAIgoIARgoIADgVIAWhBIAIgpQAQgsAIgvIAAgnQAEgkATgeQAJgSANgQQAWgPAYgMIAegSQAwgGAwgLQAYgSAWgVQAPgLANgLQAHgOAAgQQgIghgNggQgGgNgDgNQABgeAEgeQABgoAPgkQAjgmAxgMQAcgCAbACQA1AMAfArQAGAWADAYIAIA3IgFAeIAAAfQgFAXgIAWQgLAmgVAhIA3AnIBgASIAzAiIAnAjIASAzIAKAsIgPA9IgCAoIAFApIAAAtIAFAkIAAAoIANBRIgZBFIgwAZIg4ACIAAAyIAAAWg");
	this.shape_65.setTransform(4.3,-10.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AjhITIAAgWIAFgeIgjAFQgVgFgUgJQgngJgkgPIgVgRQgPgNgIgSQgCgNAAgMQgBgpAIgoIARgoIADgVIAWhBIANg4QANglAGgnIAAgnQgBgNACgMQALgVAMgUQALgVAPgSQAUgMAVgKIAegSQAwgHAwgKQAWgPATgUIAhgaQAFg2gbgzQgBghAFghQAAgkALgjQA2g8BVAAQA4AOAhAuIAEAaQAGAbACAcQABApgBAoQgGAagJAYIgKAkQgGAMADANIANAPQALALAOAIQAlAIAnAFQAhALAcAVQAXAPAUASQAQAgALAmQAHAQAAASQgKAqgHAsIAAAfIAFAjIAAAjIAFAeIAAApQAJArAEArIgIAUQgGAagLAXQgLAHgMAFIgZANQgbACgdAAIAAAyIAAAWg");
	this.shape_66.setTransform(4.3,-10.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AjhIRIAAgWIAFgfIgjAFQgVgFgUgIQgngKgkgOIgVgRQgPgNgIgSQgCgNAAgNIAAgyQAKglAOgiIAhh5QAQgtAIguIAAg3QAEgZAOgUQALgVANgUQAWgSAbgNIAegRQAwgHAwgKQAWgQATgTQAUgPARgQQADgPAAgPQgQglgOgnIAFgtQADg4AYgxQA0gjBCgCQA7ARAjAxIAEAZQAGAeACAfQABAmgBAmQgGAZgJAZQgKAcABAcQAvAkA/AGQAhAKAcAWQAXAOAUATQAOAbAKAgIAMAeQAAARgHASQgJAggDAiIAAAeIAFAjIAAAfIAFAeIAAAtQAJArAEArIgGAPQgHAdgMAaQgLAHgMAFIgZANIg4ABIAAAzIAAAWg");
	this.shape_67.setTransform(4.3,-9.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AjgIRIAAgWIAFgfIgkAFQgXgFgWgIQglgKgigOIgUgRQgPgNgJgSQgCgNABgNIAAgyQAJglAOgiIAih5QAPgtAIguIAAg3QAFgZAPgUQAJgVANgUQAXgSAagNIAfgRQAwgHAwgKQAVgQATgTQAVgPARgQQADgPgBgPQgKgagNgZIgHgeIAFgZQABg0APgxQAyg0BLgEQA9APAlAzIAEAZQAGAeADAfQACA2gJA0IgPAtQgHAPAEAQQA6AmBJAIQAVALATARQAXAOAVATQANAbAKAgIAMAeQAAAUgGAUQgJAjgDAkIAFBWIAFAeIAAAtIAMBMQgEAfgMAeQgEANgIAKIgTAJQgVANgZAAIgjAAIAAApIAAAgg");
	this.shape_68.setTransform(4.3,-9.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AjhITIAAgWIAFgeQgzADgygSQgjgLgfgUQgWgSgIgbQgCghACghQAJgiAPgfIAhh/QAQgsAIgvIAAgsQgBgNACgMIASgfQAKgVANgTQAWgSAbgNIAegSQAegGAfgCQAVgEATgHQAVgSAUgTQASgNAOgNQADgPAAgQQgKgdgOgaIgGgfIAFgZQACg9AZg3QAegbAmgIIAZgFQAPAAAPAEQAuAJAhAgQAOAdADAgIAIA3IgDAaIAAAoQgEASgGARIgWBDQASAWAYAQIBgARQANAHAMAJQAgAVAcAYQAIAOAFAQIAKAeQAKAVACAXQgMAwgHAwIAFBWIAFAeIAAApIAOBRQgCASgHARQgFAYgMAUQgKAJgNAFIgUALQgeAFgfgDIAAAoIAAAgg");
	this.shape_69.setTransform(4.3,-10.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AjhIUIAAgWIAFgeQgzAEgygTQgjgLgfgUQgWgSgIgbQgCghACghQAJgiAPggIADgUIAWhBIAIgpQAQgqAIgsIAAgxQADgfAQgZQAKgVANgTQASgPAVgLQAUgNAUgKQAZgGAagBQAagEAYgIQAVgSAUgTQAcgSAJgeQgDgSgHgQIgFgUQgJgRgHgTQgBgVAFgTQABghAFghQAcg7A9gVQAjgDAjADQAOACAMAHIAZAMQAgAxADA9IAFAZIgDAjQAAAVgDAUIgRAtIgEAUQgIAPgCAQQAHALAKAJQAMALANAHIBgASQANAHAMAJQAgAUAcAZQAIANAFAQQAQAmAGAlQgMAvgHAxIAFBRIAFAeIAAAuIAFAZIACAZQAFAUACAVIgMAjQgEASgKAQQgIAHgKAFQgWAMgXAGQgVgBgUgDIAAApIAAAgg");
	this.shape_70.setTransform(4.3,-10.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AjjIUIABgCIABgUIAFgZIgpAAQgWgHgXgIQgigKgggNQgLgIgJgKQgPgNgJgRQgCgNABgMQgCgqAIgnIARgkIADgUIAWhBIAJgpQAQgtAHguIAAgsQAEgfAQgZQAKgVAMgTQAXgSAagNIAfgSQAwgIAwgJQAkghAsgWQACgdgDgbQgPgjgMgkQgBgSAEgRQADg7AYg0QBFgvBVANQAbAKAWATQATArADAwIAFAZIgCAXIACAWQgEAagIAZIgMAeQgDAPgFAQQgIALABAOIAOAPQAJAKALAIQA0AOA2AJQANAHAMAJQAgAUAcAZQAIANAEAQQARAmAFAlQgMAvgGAxIAFBRIAFAeIAAAuIANBbIgRA3QgDAKgFAJIgSAHQgYAOgbAGIgjgGIAAApIAAAgg");
	this.shape_71.setTransform(4.4,-10.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAQIAAgfQACAPADAQg");
	this.shape_72.setTransform(33.5,41.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AjjISIABgCIABgUIAFgZIgpAAQgegJgegLQgegJgagNQgTgQgPgSQgGgPAAgPQgCgsAIgqIARgkIAEgUIAWhBIAIgpQATg5AKg7IgEgnQAFgOAIgMIAUgjQAGgNAKgLQAUgMAVgKQAXgOAbgJIBHgJQAmghAwgZIADgpQgLgigQgfQgGguAKgtQACgjAOgfQBNg8BhAYQAQAGANALQAYAsADAzQADAZABAZIAAAaQgJAmgOAlIgDAUIgNAZIgCAHQASAXAYAQQAyANAzAIQAcARAcAVQAPAKAOAMQAQAhAMAmQAGAOACAPQgDAPgFAPQgKAjgCAkIAFBRIAFAeIAAAuIAKBBQAEAPAAAPIgHAQQgGAdgNAZQgJAFgJADQgSAKgRAHQgaABgZgFIAAApIAAAgg");
	this.shape_73.setTransform(4.3,-10);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AjjIVIABgCIABgUIAFgaIgpAAQgegIgegMQgegJgagMQgTgQgPgSQgGgPAAgQQgCgsAIgqIARgjIAEgUIAWhCIAIgoQATg3AKg4IAAgeQAEgjATgeQAKgSANgQQATgNAVgKQAagQAdgIIAUAAIAagFQAPAAAPgHQAhgiArgUQADgXAAgWQgVgtgNguQADgUAGgUIACgfQAMg0AmglQAVgKAYgDQA5gGA2AYQAmAvACA+QADAXABAXIAAAZQgKAxgQAvIgNAYIgCAIQASAWAYAQQAyANAzAJQAcAQAcAWQAPAJAOANQAQAhAMAlQAGAOACAQQgDARgFASQgKAjgCAkIAFAtIAAAfIAFAeIAAAoIAKBHQAEAPAAAPIgHAPQgGAdgNAZIgNAIQgUAKgUAIQgaAAgZgEIAAApIAAAgg");
	this.shape_74.setTransform(4.3,-10.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AjjIWIABgCIABgUIAFgZIgaAAQghgFgggMQgfgJgegMQgLgIgJgKQgPgNgJgRQgCgNABgMQgCgqAIgnIARgfIADgZIAXhCIAIgoIAbhRQADgegBgdQgBgNACgNQAKgVANgTQAJgTANgPQATgNAUgJQAbgRAdgIIAUAAIAugHQAagSAYgYIAegSQAFgJACgKQgHg2gXg0QABgVAGgTIABgeQAJg3AlgoQAZgNAdgFQARgEATAAQBCANAmA1IAHAuIAAATIAFAaIgEAeIACAVQgGAegLAeIgMApIgJAOIgCAHQASAWAYAQQAyAOAzAIQAcAQAcAWQAPAJAOANQAQAhAMAmQAGANACAQQgDASgFARQgKAjgCAkIAFAoIAAAfIAFAjQABApAEAoQAGAeACAeIgLAkQgEASgKAQQgLAHgMAFQgaAOgeABIgZgGIAAApIAAAgg");
	this.shape_75.setTransform(4.4,-10.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AjjIUIABgCIABgUIAFgaIgeAAQgigFgggNQgdgJgbgKQgagVgSgbQgCgNABgNQgCgpAIgoIARgeIADgZIAXhCIANg3QAQgtAIguIAAgjQABgeARgZQAKgVAOgTQAUgPAXgMQAWgNAYgJIAegCIAagFQAPAAAPgHIAjggQAcgRAQgZQgJg2gXg0QABgSAGgRIABgfQAShVBOgfQAggBAhABQANADAMAGQATAJARANQAYAuABA3IAFAZIgEAeIACAUQgHAcgKAcQgKAigRAgQAbAUAdASQAtAKAuAIQAdAQAbAWQASALAPAQQANAeALAjQAGAPACAPIgGAZQgLAngDAqIAKBbIAAA3IAFApQAGAeACAeIgLAkQgEASgKAPIgNAIQgeASgkABIgZgFIAAApIAAAgg");
	this.shape_76.setTransform(4.4,-10.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AjkITIABgBIABgVIAFgZIgZAAQglgFgigOQgdgIgbgLQgZgVgTgbQgCgNABgMQgBgkAFgjIATgoIAEgaIAtiXQAJgWAFgYIAAgxQgBgNACgMQAKgVANgUQAJgSANgQQATgMAVgKQAVgOAYgJIBMgIQAVgOATgSIAagVIAOgIQANgpgTgrIgMgUQgDgPABgPIAGguQADgrARgmQAjglAygIIAyAAQAPADAPAGQAQAHAPAKQAcAwACA5IAFAZIgEAVIACAeQgGAcgLAbQgJAjgRAfQAaAUAdATIBgATQAaAQAZAUQASAMAPAPQAIARAGATIARAxQABASgGARQgIAegGAfQABAgAEAiIAFAjIAAA9IAFAZIAAAUIAKAzQgDARgGASQgGAYgLAUQgLAIgNAFIgUAMQgdAEgbgHQgGAbABAcIAAARg");
	this.shape_77.setTransform(4.4,-10.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgBAIIAAgQIADAQg");
	this.shape_78.setTransform(33.5,42.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AjkITIABgBIABgVIAFgZIgZAAQgogFgkgOQgagJgZgKQgZgVgTgbQgCgMABgNQgBgnAHglIARgjIAih+QARgwAMgwIAAgyQgBgNACgMIASgeQAMgYAPgUQATgNAVgKQAXgQAbgIIAUAAIAzgHQANgIAMgLIAjgdQANgIALgJQAGgLABgNQgJgogUgkQgCgKAAgKIAGgzQAHhFAwgyQAtgOAyACQA6APAfAzIAHAtIAAAZIAFAaIgEAUIACAZQgFAcgKAcIgPAtQgHAMAEANQAJAKALAHQAMAJANAIQAtALAuAHQAcAPAcAWQASAMAPAQQANAeALAjQAGAPACAOIgGAaQgLAngDApQAGAmAEAmQABA4AEA4IAKAyQgDAPgFAPQgFAYgJAWQgKAJgNAHIgZAMQgeADgfgBIAAAyIAFARg");
	this.shape_79.setTransform(4.4,-10.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AjkITIABgBIABgVIAFgZIgkACQgXgFgWgJIhHgaQgkgdgJgsQgBgnAHglIARgjIAih+QARgwAMgxIAAgxQgBgNACgMIASgfQAMgXAPgVQATgMAVgKQAXgQAbgJIAUAAIAzgGQAegTAZgZQAPgKAOgLQAJgegLgeIgEgPIgQgZQgCgUAAgVIAGgZQAEg2AagvQAwgjA+AAQAzAJAmAkQAQAuABAyIAFAZIgEAPIACAaQgHAhgMAgIgGAaQgKARACASIAUAQQAMAKANAIQAtALAuAGQAcAQAcAWQASAMAPAPQANAfALAjQAHAQABASQgNAwgHAwQAGAmAEAmQABA6AEA6IAKAzQgCAQgGAOQgFAYgJAVQgKAKgNAGQgNAIgMAGIg9ABIAAAyIAEARg");
	this.shape_80.setTransform(4.4,-10.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AjkITIABgBIABgVIAFgZIgFADIgVgBIgPABQgPgEgPgIIgogPQgegJgagSQgYgXgGggIAAgqQABgWAGgWIAQgeIAJgpIAchgQASgxAIg0IAAgxQAHgWAMgTQAKgVANgSQAUgQAXgLQAYgQAbgJIAUAAIAZgEQASgBASgGQAYgRAVgWQASgMAPgNQADgPgBgQQgDgNgFgMIgEgPQgNgRgFgXQACgYADgWQAFg1AWgwQAvgmA+gCQAvAGAnAdQARAXADAcIAJBQIgEAVIACAPQAAAPgEAPIghBlIAyAiIBbARIBZBBIAgBkIgUBgIAKBMIAABCIAFAeIAAAUIAKA4IgWBGIgwAeIg9ABIAAAyIAEARg");
	this.shape_81.setTransform(4.5,-10.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AjkITIABgBIABgVIAFgZIgFADQgVACgUgCIgegNQhQgZgphCIAAg9QAKgfANgdIAJgpIAWhBIADgUQATg1AKg2IAAgsQAIgjAUgfQAIgPALgOQASgMAUgKQAYgQAbgJQAvgCAsgOQASgRARgRQASgMAPgNQADgSgBgSQgJgagPgYQgHgWABgYIAJgyQAFgoASgjQAvglA+gEQAyAHAnAhQAVAyABA4IADAaIgDAPIADAZQgGAZgJAZIgOAuQgFAIgBAJIAlAlQAxAPA0AHQATAJAQAOQAbARAXAUQALATAHAWQAOAfAEAhQgNAwgHAwQAGAmAEAmIAHB+QAGAXACAXQgEAUgHAUQgFAVgLASIgSAIQgTAMgWAFIgtgDIAAAyIAEARg");
	this.shape_82.setTransform(4.5,-10.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AjkITIABgBIABgVIAFgZIgFADQgVACgUgCIgegNQhQgZgphCIAAg9QAKgfANgdIAJgpIAmh+QAKgZAGgZIAAg3QAAgZAOgUQAOgeATgZQASgMAUgKQAUgNAVgKIBRgIQAegSAZgaQASgMAPgNQADgSgBgSQgJgagPgYQgHgWABgYIALgtIAAgUQAHghASgcQAfgdAsgHIAUgEIAZAFQAyALAiAnQAGAPABAQIAFAZIAAAoIACAVIgCAUIACAUQgFAcgLAbIgSA6QAVAYAaASQAtALAuAGQATAJAQAOQAbARAXAUQAIAMAEANQARAoAHAoQgMAugIAtIAKBMIAAAoIAFAfIAAAtQAGAeAEAfQgEAUgHAUQgDASgIAQQgLAJgMAFQgUAKgVAGQgWAAgXgDIAAAyIAEARg");
	this.shape_83.setTransform(4.5,-10.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AjdIRIAAgqIgpgCIg8gXQg8gVgjgyQgCgSABgSQAAgfAGgdIARgkIAJgoIAehlQAQgrAIgrIAAgyQAGgeARgZQAKgVAOgSQASgNAVgKQATgMAVgKIAzgHQAUgBAUgGQAYgRAVgWQASgLAPgOQADgRAAgSQgKgbgPgYQgHgTABgVIALguQAEgxAagpQAcgYAkgHQBLgCA3AwQALAWADAXQAGA/gDBAQgHAfgMAdIgNAqQAVAZAaARQAtALAuAHQATAJAQAOQAbAQAXAVQAIALAFAOQARAoAGAoQgMAtgIAuIAKBLIAAApIAFAeIAAAuQAGAeAEAeQgEAVgHAUQgDASgIAQQgIAHgKAFQgYAOgbAFIgogFIAAAzIAEARg");
	this.shape_84.setTransform(4.4,-9.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgCAVIAAgBIAFgoIAAApg");
	this.shape_85.setTransform(-18.1,40.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AjdIRIAAgqQgYAAgWgCIgjgPQhNgZgnhBIAAgZQAAgfAGgdIARgkIAJgoIARguIANg3QAQgrAIgrIAAgyQAHgdAQgaQAKgVAOgSQASgNAUgKQAUgMAVgKIAzgHQAUgBAUgGQAlggArgWQACgcgDgbQgRgegMgfQADgfAIgdQACgiALggIAIgUQAxgoBBgBQAaACAYAJQAWAOARAVQALAVACAYQAGA5gCA7QgKA2gUAzIgCAIQAVAZAaARQAtALAuAHQATAJAQAOQAaARAYAUQANAVAIAYQAMAgADAhQgLArgJArIAFAZIAFBWIAFAeIAAAzIAKA3QgDAZgIAaQgEASgLAPIgOAIQgYAOgbAFIgogFIAAAzIAEARg");
	this.shape_86.setTransform(4.5,-9.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AjdIPIAAgqQgYABgWgCIgZgMIgPgEQhKgaglg/IAAgZQAAgfAGgeIARgjIADgUIAXhCIANg4QAQgqAIgrIAAgyQAGgeARgZQALgVANgSQASgNAUgKQAUgMAVgLIAzgGQAUgBAUgGQAlggArgWIAEgjIgJgfQgPgYgKgaQABgYAIgVIACgkQANg4ApgmQARgGATgDQBAgFA4AgQAPAQAJAUIADAZQAGA5gCA7QgKA2gUAzIgCAIQAVAYAaASQAtALAuAHQAaANAYAUQASAMARAPQANAVAIAYQAMAgADAhQgGAegIAeIgGAaIAFAZIAFBWIAFAeIAAAyIAKA4QgCAVgGATQgFAVgJATQgIAHgKAFQgRAKgTAHQgcACgbgFIAAAyIAEARg");
	this.shape_87.setTransform(4.5,-9.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AjkIRIABgCIAGgoIgaAAQgigGgfgOQhHgZgjg+IAAgZIADgPQgBgXAEgWIARgkIADgUIAchRIAIgoQARgqAHgsIAAgyQAHgeARgZQAKgVANgSQASgNAUgKQAUgMAVgKIAzgHQAUgBAUgGQAYgRAVgVQASgKAPgMIAIgdQgPgngTglQgCgYAJgVQACgPAAgPQAKg6AogqQAogPAtgCQA+AOAlA0IACAUQAFAhAAAhQABAjgBAkQgMAtgSAsIgCAIQAVAZAaARQAtALAuAHQAVAKATAPQAgAVAXAdIAMAjQAMAdACAfIgRBMQACAmAFAlIAAAuIAFAZIAAA4QAHAgADAhQgEAUgHAVQgEAPgHAPQgKAKgNAGQgWALgYADQgYgEgSAIIAAA7g");
	this.shape_88.setTransform(4.5,-9.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IACAoIADARg");
	this.shape_89.setTransform(33.3,40);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AjiIRIABgCIAGgoIgaAAQgigGgfgOQhHgZgjg+IAAgZIADgPIgCgZQAJgdANgbIADgUIAchRIADgUIAbhRIAHgyIAAgjQAFgYAOgVQAKgVANgSQASgNAUgKQAUgMAVgKIAtgHIAUAAQAggHAYgXIAUgTQARgIANgOQgBg0gbgxQgBgeAJgZIAAgUQAKgzAfgnQAPgMATgIIAZgCIAagFIAUAEQAmAHAfAZQAXAlAEAsQABA1gBA1QgJAlgNAmQgFANAAANQAJANANAMQA0AYA7AIQAgAQAcAXQATANAOARQAIARAFASQAMAgADAhIgRBMQABAjAGAjIAAAzIAFAeIAAAzQAJApgEAtIgIAeQgDAMgGALQgLAIgMAFIgaANQgfACgdgGQAAAiAGAig");
	this.shape_90.setTransform(4.3,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_15},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_17}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_19},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_21}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_30},{t:this.shape_31}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_33},{t:this.shape_34}]},1).to({state:[{t:this.shape_33},{t:this.shape_35}]},1).to({state:[{t:this.shape_33},{t:this.shape_36}]},1).to({state:[{t:this.shape_33},{t:this.shape_37}]},1).to({state:[{t:this.shape_33},{t:this.shape_38}]},1).to({state:[{t:this.shape_33},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_42}]},1).to({state:[{t:this.shape_30},{t:this.shape_43}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_46}]},1).to({state:[{t:this.shape_45},{t:this.shape_47}]},1).to({state:[{t:this.shape_27},{t:this.shape_48}]},1).to({state:[{t:this.shape_27},{t:this.shape_49}]},1).to({state:[{t:this.shape_27},{t:this.shape_50}]},1).to({state:[{t:this.shape_27},{t:this.shape_51}]},1).to({state:[{t:this.shape_27},{t:this.shape_52}]},1).to({state:[{t:this.shape_27},{t:this.shape_53}]},1).to({state:[{t:this.shape_27},{t:this.shape_54}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_27},{t:this.shape_57}]},1).to({state:[{t:this.shape_27},{t:this.shape_58}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_60},{t:this.shape_61}]},1).to({state:[{t:this.shape_60},{t:this.shape_62}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_64},{t:this.shape_65}]},1).to({state:[{t:this.shape_64},{t:this.shape_66}]},1).to({state:[{t:this.shape_64},{t:this.shape_67}]},1).to({state:[{t:this.shape_13},{t:this.shape_68}]},1).to({state:[{t:this.shape_13},{t:this.shape_69}]},1).to({state:[{t:this.shape_13},{t:this.shape_70}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_72},{t:this.shape_73}]},1).to({state:[{t:this.shape_72},{t:this.shape_74}]},1).to({state:[{t:this.shape_72},{t:this.shape_75}]},1).to({state:[{t:this.shape_72},{t:this.shape_76}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_85},{t:this.shape_86}]},1).to({state:[{t:this.shape_85},{t:this.shape_87}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_90}]},1).wait(77));

	// Layer 3
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AiXGBQgGgJAAgKIABgHIgagYQgBgUADgUQgIghgJghIgBgpIgZhVIghjOIgQgaQgJgigDgkQgCgpACgoQAGgkAKgjIAIgUIABgUIABgEIIBAAIAAAEQAIArAQArIADAZQAFAqgCAsIgMBBIgRAaQgIAigDAkIgUCDQgHAegMAeQgGAeAAAfQgFAZgHAZQgHARAAATQAEARgDARIgWAQQgGARgCANQgGAFgHACQgZAFgZgBQgLgCgIgFIgDgdQgHgUgIgUIgMgZQgMgwAAgwIAAgpQAJg3AGg4IgFAAIgWApIgRAMIgRgMIgTgkIgFAAIAQB/IAAA8QgJApgPAoQgJAUgGAUIgEAdQgIAFgKACIgKAAQgdAAgZgLg");
	this.shape_91.setTransform(7.7,80);

	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-63.8,84.9,183.4);


(lib.questionn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#799FC2").s().p("AhREGQgWgWAAgfQAAgfAWgWQAWgWAfAAQAeAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgeAAQgfAAgWgWgAg5BUQgMAAgGgIQgHgIACgMQADgPAIgUQAQgmAcgZQArglAIgUQAHgQgBgQQgDgUgMgMQgNgNgSAAQgVAAgPAZQgHAMgEAMQgDAMgKAGQgKAGgMgCIhDgPQgLgCgFgJQgGgKAEgLQAGgRAKgUQAUgpAUgQQAyglBBAAQBNAAA3AoQA3AoAGBHQADAkgQAmQgQAlg8AkQgVAMgUARQgMAKAAAOQgDAKgLADQgHADgPAAg");
	this.shape.setTransform(0.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWEJQgXgXAAghQAAghAXgYQAYgYAhABQAggBAYAYQAXAYAAAhQAAAhgXAXQgYAYggAAQghAAgYgYgAg5BaQgOAAgJgLQgIgJACgOQAEgRAIgUQARgnAcgaQArgmAHgRQAGgRgBgNQgCgRgLgLQgMgMgPABQgSAAgNAWQgHALgEAMQgDAOgMAHQgNAHgNgDIhDgOQgOgDgGgMQgHgLAFgOQAGgSALgWQAUgoAVgQQAzgmBDAAQBQAAA3AoQA5ArAGBJQAEAngRAlQgRAng+AlQgXAOgQAPQgKAIgBALIAAABIAAAAQgDANgOAFQgIADgQAAg");
	this.shape_1.setTransform(-0.3,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#033072").s().p("AhWEJQgYgXAAghQAAghAYgYQAXgXAhAAQAhAAAXAXQAYAYAAAhQAAAhgYAXQgXAYghAAQghAAgXgYgAg5BaQgOAAgJgKQgIgKACgOQAEgRAIgUQARgnAcgZQArgnAHgQQAGgPgBgPQgBgRgMgMQgMgLgPAAQgSAAgNAXQgHALgDAMQgEANgMAHQgMAIgOgDIhDgOQgOgDgGgMQgHgMAFgNQAGgTALgVQAUgpAVgPQAzgnBDAAQBPAAA4ApQA5ApAHBKQADAngRAmQgRAmg9AlQgVANgTAQQgKAIgBAMIAAAAIAAABQgEANgNAFQgIACgQAAg");
	this.shape_2.setTransform(0.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.questionn, new cjs.Rectangle(-19.2,-29.3,38.4,58.7), null);


(lib.man_animationclip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah6UAIgVAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgThSIABhZIgKg5IAAhzIgFgqIAAi3IgFgqIAAisIgGgqIAAgkIgFggIAFh4IgSgbIgCgPIAAgVIAFgvIAAhXIgFgbIAFhTIgLgfIAMg6IAIgVIABgQIAFgaIAAhEIgFAAIAAAGIgPAFIgGA0IgVgFIgUAJQgaACgbgBQghgIgYgXIgagVQgYghgCgoQACgTAGgSQAFgVAIgUIAMgVIAPgvIAXgvIAvh+IACgaQAJg1AdgtQAVgQAYgNQAPgKARgIQAqgFApgJQAOgLAMgNQANgKAKgLQAAgKgEgLIgWhJQgDgaABgaIAEglIgBgUQAEguAZglQAwgeA3ADQAbABAZALQArAwAIBBQABAPAIALQAEASgDATQgNAdgTAXQgDAKgBALQAAAPAEAPQAUAUAYATQAZAYAhALQAdACAcAFQARAIAPAKQAeARAZAVIANAaQALAUAEAWIAAAvQAJAqAQAqIANA0IAXAvIAJAlIARAkQACASAAATQAEAZABAbQgVAtguAZIglAPQgPAJgRAFQgjACgggMIAFAfIAAAVIAJAVIAMA6IgKAaIgBAkIAFA6IgFAfIAABdIAFA6IgSAaIgCAkIAFAaIAABEIgFAaIAAAvIgGAqIAAC8IgFAqIAAC3IgFAqIAABuIgKA0IAAAaIAFAlIgXBhIgOAHIAYA0IACAgIgfABIgQAHIhJACIgegMIgBgOIAFg/IgTgGIgRg+IgGg0IAAiDIgFgpIAAj7IgFgqIAAheIgFglIAAg+IgGgqIAAhZIgFAAQgGA0ABA1IgGAfIAABEIgEAqQACAvgCAvIgFAfIAAEFIgFAqQACA/gCA/QgGAkgIAlIgDAVQgMAPgLALQgBAKADALQACASgDATQgZAUgkAAIgKAAgAjtmXIgPiNIgEACIgLBHIAZBEIAFAAg");
	this.shape.setTransform(-84.5,128.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah2UAIgVAAIgagJQgQgCgQABIABgaIAag6IgPgHIgThSQgBgsADgtQgGgcgEgdQABg/gBg+IgFgqIAAiDQABgigBgiIgGgqIAAiiIgFgpIAAgVIgFgvIAFgqQABgggBgfQgFgPgIgLQgDgNAAgNIAAi2QgCguAIgrIgQgFIAah9IAAheIgKhpIgQheIgFAAIAAA/IgJApIAJBEIgaBUQgUADgRAGQgXACgYgBQgOABgMgCQgSgKgNgPQgkgjgGgwQAPg0AZgwIAOgpIAXgvIAahEQAOgfAMggIAIg/QAOgeAVgbQAYgTAcgOIAVgNIBEgIQAhgOAZgaQAJgSgIgTQgNgngJgnIAAg6IAFgkIAAggQANgqAigdQAtgPAwADIAaAHQA6AuAJBNQADALAGAKQADASgCATQgFAQgJAPQgOAOgHASQgBASADASQAUAXAZATQARARAUANQAmAIAoAFQAWAKAUANQAZAOAUATIASAlQAKARAFATIAAA6QAHAgAMAfIAOA0IAcA/IADAaIASAfQAEAXAAAYQAFAVABAVIgHAVQgoAxg8AUIgbANIgaABQgVgBgVgEIAAAlIAJAWIAMA4IgBAYIgJASIAFAvIAADgIgSAaIACAaIAAB4IgKB9IAAC9IgFApIAACoIgFApIAABkIgLA0IAAAaIAFAlIgWBhIgOAHIAYA0IACAgIgfABIgQAHIhJACIgegMIgCgOIAGg/IgUgGIgQg+IgGjBIgFgqIAAj1IgGggIAAh9IgFgqIAAg0IgFglIAAhjIgFAAIAAAvIgGAfIAABEIgFAqIAAA6IgFApIAACIIgEAqIAACIQABAigBAiIgFAqQABA5gBA6QgGAkgJAlIgDAVQgMAPgKALQgBAKADALQABASgCATQgZAVgkAAIgKgBg");
	this.shape_1.setTransform(-84.9,128.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhxUAIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgXhsIAGg/IgLgqIAAicIgFggIAAjMIgFg0IAAidIgFgpIAAiiIgOgWIgCgZIAAjgIAFgfIgKgqIAMg4IAJgXIAAgUIAFgqIgFgaIAAg6IgGgaIgFhJIgQhUIgFAAIgFAaIAAAlQgIAqgOAqQgLAsgaAlQgMAIgNAFQgZALgbAEQhDgbgLhIQANgvAbgqIANgkIAjhEIARgvQATgkAPglIAJg6QALgZAPgWQAUgUAZgMQAUgNAWgLQAngFAngJQAcgWAegSQgKgXgIgYQgNghgGgjIAEhEIgEgUIAEgVQADgZALgWQAxguBEgBQArAIAiAcQAPAdAHAiIAAAaQAFAOAIAMQAEASgDATQgGASgJARQgNALgGAQQAKA0AuAiIARARQAtANAxAGQAVAKAVAPQAQAJAPAMQAQATALAWQAMAWADAZIAAAqQAJAqAPAqIAOA0IAXAvIAIAlIASAkIAAAlQAIAfgIAfQgRAagXATIgvATQgaANgbAHIgUAAIglgFIAYB9IgIAaIAAEUIgOAaIgCAbIAACHIgFAgIAABEIgFAqIAACsIgGAqIAACcIgFAqIAABeIgKA1IAAAaIAFAkIgXBiIgOAHIAZA0IABAfIgfACIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgXhoIAAicIgFgqIAAj2IgFgqIADgaIgDgfIAAg/IgFgkIAAg/IgGgqIAAhuIgFAAQACA1gCA0IgFAkIAAA1IgFAqQABAigBAhIgGAqQACBEgCBEIgFAqIAAC3IgEAqQACA3gCA2QgFAlgJAkIgDAVQgMAQgKAKQgBALACAKQACATgCATQgaAUgkAAIgKAAg");
	this.shape_2.setTransform(-85.5,128.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhfT+IgVAAIgagJQgQgCgQABIABgaIAZg6IgOgHIgThSIAChYIgLg6IAAiNIgFg5IAAj2IgFgqIAAh4IgFgfIABiIIADgQIgSgWIgCgpIAFg0IAAhnIgDggIADgfIAAgVIgJgfIAZiDIgKisIgViIIgGAAIgPBEQgNBLgtA9QgJAMgMALIgaAKQgfAMgfAAQgggNgUgbQgMgPgIgQQgCgVAAgVQAEggARgYIAggQQASgBAMgQIAlhEIA4h4IAIg0QAIgRAKgPQAMgTAQgQIBEgkIAVgCQAqgFAlgVIAggcIgfhcQgDgkACglQgCg3ATgyQA1guBGACQAiAHAcAVQAWAiAKAoIAAAUQAFARAJAPQABAXgHAYQgEAKgGAKIgRAQQgEASADATQATAbAbAWQATASAXAPQAmAIAoAGQAeAOAbATIAVANQAKALAHAOQAKASAIATQACAWAAAZQAGAyASAxIAOA0IAXAvIAIAlIASAkQAEAYgBAYIAEAUIAAAVQghA3g9AZQgXAMgYAIQghAAgegLIAFAaIAAAVIAJARIAMBDIgJAaIgBAaIAFBEIgFAfIADCcIgQAVIgDAaIAACYIgFApIAABkIgFApIAACdIgFAqIAACDIgGApIAABPIgKA0IADBJIgSBPIgJAVIARAvIACAfIh+AAQgTABgHgRQgCggAHgeIgTgHIgRhDIgFgpIAAiiIgGggIAAj1IgFggIAFgfIgFgqIAAhOIgFglIAAhJIgFgaIAAg/IgGAAQACAygCAxIgFAbIAAA5IgFAqIAAA/IgFApQACBKgCBJIgGAqIAACnIgFAqQACAxgCAyQgFAkgIAlIgDAVQgMAQgKAKQgBAKADALQABASgCATQgaAVgkAAIgJgBg");
	this.shape_3.setTransform(-87.2,128.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhOT/IgVAAIgagJQgQgCgPABIAAgaIAag6IgOgHIgXhhIAFg1IgKhTIAAitIgFgqIAAlEIgFgpIAAgvIgGgaIAAg/IAGg/IgVgkIAFgvIACjrIgNgKIAMg6IANgkIACgfIgLjRIgfiDIgHAqIgHAPQgHAqgMAqQgSAlgcAfQgQARgUAMIgVAEQgiAJgigFQgYgQgSgVQgXgbgRgfQgFgXADgYIAAgUQATgpAsgPQATgCASAEQAogQATgtIAxhZQAHgjAKghQARgcAUgXQAZgQAbgNIAagNIAVgBQAdgEAcgIQARgLAPgOIARgRIgMgjQgQgogFgsQgDgYgBgXQACgkAEglQASgpAmgaQAVgHAZgDQAQAAAPAEIAaACQAuAbAUAxIAIAvIAJAVQABASAAATQgDAQgJAPQgLAMgIAOQAJAyArAiIAPAQQApAVAwAFIAQABQAQAJAPAKQAZAOAWASQANARAJAUQANAYACAcIAAAqQAFAXAIAYQALAqAOApIARAlIAJAkIAVAvQACAVAAAVQAHAagGAbQgkAxg6AUQgcANgdAGQgYgBgXgEIABAlIANAkIAMA/IgNALIADAaIAAD/IgVAfIAFA0IAABJIgFAaIAAAlIgGAqIAACNIgFAqIAACSIgFAqIAABeIgFAqIAABJIgLAqIAGBEIgYBgIgNADIAYA5IACAgIh9AAQgUAAgGgQQgCggAHgfIgUgGIgRhDIgFgvIAAiyIgFgpIAAklIgFgqIAAhZIgGgpIAAhpIgFAAQgGAvABAvIgFAaIAAA1IgGApIAAA6IgFAaQADAPABAQIgEAgQACA5gCA6IgFApQACBKgCBJIgFApQABAwgBAvQgGAkgIAlIgEAVQgLAPgKALQgBAKADALQACASgDATQgZAVgkAAIgKgBg");
	this.shape_4.setTransform(-88.9,128.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag2UAIgWAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgLgtQgJgggCgfQAEgiABgiQgHgcgEgeIAAiSQABglgBgkIgFgqIAAjGQACgygCgyIgFgkIAAg0IgDgVIADggQACgqgCgpQgFgOgIgIQgEgNABgMIAAjBQAEgiACgiIgLgaIALg5IAJgVIAGgvQABgagBgaIgFgqQgFhNgOhLIgJg5IgJgaIgUAFIAFAVIgQAvQgMA+gjA1IgaAUQgYARgcAFIg/gCQgsgggdgtQgRgTgNgXIgKgeQgJgRgCgVIAGgfQAKgKANgHIARgNQApgIAqAIIAgAKQALAIANgFQANgSALgWQAagpAXgrIAIglQAJgWAOgTQAKgQANgOQARgKAUgIQAWgOAZgKQAkgEAlgJQAUgMAQgSIAMgNIgfhRQgCgTABgSIgGgkIADgVQgFgrANgpQATgbAcgSQARgGASgCIAagEIAVAEQApAHAfAeQAOAeAIAhIABAVIANAVQADAPgBAQQgCATgIASIgTAVQgDAbAGAeIAOACIANARIAeAZQAKAKALAJQAsALAtAGQAQAIAPAKQAZANAWAQQAMAOAGAQIARAkQADAdgBAdQAKAqAOAqIAJAkIAcA/IAIAkIASAlQACASAAATQADAXACAYQgJAdgWAXQgZAQgbALQgiAQgjAJQgagCgagDQACAYAEAXIAJAVIALA5QgDAOgGAMIgBEaQgGANgPACIAFBJIAABPIgFAaIAAAkIgFAqIAACNIgFAqIAACSIgFAqIAABeIgGAqIAAA6IgJAfIgBAqIAFAaIgXBsIgGAMIARAvIACAfIh+AAQgTABgHgQQgCggAHgfIgTgGIgJgfIgNhYIAAi3IgGgqIAAk6IgFgpIAAhPIgFgqIAAh9IgGAAQACAigCAiIgFAlIAAA0IgFAqIAAApIgFAqIAABeIgGAqQACBBgCBCIgFApQACA/gCA/IgFAqQABAqgBApQgFAlgJAkIgDAVQgMAQgKAKQgBALADAKQABATgCATQgZAUgkAAIgJAAg");
	this.shape_5.setTransform(-91.3,128.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglUAIgVAAIgagJQgQgCgQAAIABgaIAZg5IgOgHIgWhnIAFgfIAAgaIgLhKIAAk0IgEgqIAAjmIgGgpIAAiNIADgbIgSgUIAAgqIAFgqIgBjTIgKgCIAMg/IANgfIACh+IgGgaIAAgkIgFgbIAAgUIgRhfIgUg5IgSAVQgCANABANIgLAVIgIAvIgMAaQgPAigXAbIgaANQgXALgYAHQgYAAgYgHQgWgEgTgKQgPgNgKgQIgjg0QglgtgDg3IgVAAQgEgXgBgYQAEgUARgMQAjgbAsgCQAPAJAQALQAcAMAdAPIAlAeQAfg4Akg2IATg+QAVgfAdgZIBJglQAkgEAlgIQAOgJAMgLQANgJAJgNQAAgIgDgHQgIgWgKgUQgPgwgCgzIgFg1QACgVAFgVQAmg1BAgOQBFAEAsA1QAKAiAIAiIAIAMQAHARAAASQgEAWgKAUIgPAQQgDAaAJAZIAQAQQAQARARAPQARARAUAMQApAIAqAGQATAKASANQATAKASANQANARAIATQAQAbAEAfIgBApQAJAlAOAlIAMAvIAbA+IAEAVIARAlQAEASACASQAEAYABAXQgMAlgcAbQgXANgYAJQgdAOgdAKIgVAAIgkgFIAAAfIAVBUIgCAYIgIAcIAFB9IgGApIAAAvIAGAvIgTAaIgDAbIAACHIgFAbIAAA5IgFAqIAACCIgFAqIAACIIgFAqIAABuIgFAkIAAAgIgLA0IADBEIgSBOIgJAVIARAvIACAfIh+AAQgTABgHgQQgCggAIgfIgUgGIgJgfIgNhYIAAkLIgGgaIAAkaIgFgqIAAhJIgFgqIAAhZIgFAAQABAqgBAqIgGAkIAAAvIgFAqIAAAqIgFAqQABAngBAnIgFAqIAACYIgFApQABA3gBA3IgGAqQACAngCAnQgFAlgJAkIgDAVQgMAQgKAKQgBALADAKQABATgCATQgaAUgjAAIgJAAg");
	this.shape_6.setTransform(-93,128.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVUAIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgXhsIAGgaIAAgqIgLgqIAAmDIgFgkIAAjMIgFgaIAAhZIAFg5IgUggIAEgkIAAi2IAGg6IgLgaIAMhCIAIgMIAGhZIgFgqIAAgfIgci8IgTgqIgKAGIgJAKIgEAaIgRAkIgEAVQgMAkgVAgQgIANgKAMQgWAKgYAGQgWAHgUAEQgOgCgMgFQgigLgdgSQgPgUgNgWIgcgqQgkgvgMg5IAAgaIgVAKQgJgUgDgWQgDgMAGgMIAigeIAMgRQARgIATABQAbANAVAVIAZAJIAqAdQAQAMAOAPQAJANANAIQAIgDAGgHIAjg1QAMgPALgQIARg0QAWgiAegbQASgKATgIQAUgLAWgIQAqgFApgOIAegdQACgWgLgUQgOgfgKggIgGg5IADgQIgEgqQAFgvAegjQAygWA3AAQBBAaAbBEIADAaQAIAMAHATQABAbgIAZQgQAVgDAaQADANAEANIARARIAIAOIAUARQAQARAUAOQAsALAtAGQAQAIAQAKQAaAPAYATQAKARAIASQALAUAEAWIAAAvQAFAYAJAXIATBEQANAiAPAiIAJAfIARAlQACASAAATQAFAcgCAdQglA0g8AXQgcANgeAGQgYgBgXgEIAGAvIAJAVIAKA5IgIAaIgBEUIgVAlIAFBuIgFAfIAAAfIgFAqIAAA/IgFAqIAABoIgFAvIAACDIgGAqIAACHIgPBPIAFAvIgYBrIgNADIAZA5IABAfIh9AAQgTABgHgQQgCggAHgfIgTgGIgJgfIgOhYIAAluIgDgfIADgVIgFgbIAAihIgFgqIAAheIgFgvIgGAAQABAngBAnIgFAlIAAAkIgFAqIAAA0IgFAlIAABEIgGAqIAAChIgFAbIAABtIgFAqQABAlgBAkQgGAlgIAkIgDAVQgMAQgKAKQgCALADAKQACATgCATQgaAUgjAAIgKAAg");
	this.shape_7.setTransform(-94.7,128.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKUAIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgXhnIAFgfIAAglIgKg/IAAofIgFgqIAAgvIgFgkIAFggIAAhTIgPgaIgBg6IAFglIAAh3IAGhTQgHAAgHgDQABgQAEgSQANgsAGgtQABgvgBgvIgFgkQgGhFgOhDQgEgrgTgkQgWgCgGAdIgLAPQgJAVgFAVQgLAhgUAeQgLAQgOANQgSAGgSADIglAJQgkgEgggQQgQgHgPgKQgNgOgKgRIgqhEQgbgmgVgoIgHhEIgGAAIgFAPIgKAAQgJgUgGgVQANgtAsgSIAAgFIgVgGIAAgKIAQgJQAlAAAcAaQAIAPALAMIAjAKQAtAhAjAsIAZAfIAFAAIBEheIAQgvIATgaIAhgjIBOglIBKgMIAzgkIgbg6QgKgUgIgWIgBgaIgFgaIAAgVIgFgvQAhhcBlgMQBCAUAgA/IADAaIASAgQACARgBATQgKAbgOAZQAAAbALAZIAMAHIAIAPQAJAKALAJQAWAUAZAQQApAIAqAGQATAKASANQATAKASANQAMARAJATQANAYACAcIAAAgQAMAyARAxIAJAlIAcA+IADAVIASAlQAFAfACAfIAAAgQgGAVgPAPQghAbgoAPQgcAOgeAHQgYgBgXgEIAAAfQAEATAIASQAGAXADAYQABAMgDAMIgIASQABAXAEAYQABAagBAaIgFAfIAACMQgDASgSADIAFBEIAABJIgFAaIAAAgIgFAqIAABoIgFAfIAABeIgGAqIAABzIgFAqIAACIIgPBEIAFAvIgHAvIgOA0IgIAVIAQAvIACAfIh9AAQgUABgGgQQgCggAHgfIgTgGIgJgfIgOhYIAAmiIgFgvIAFgbIgFgpIAAhkIgFgpIAAiTIgFAAIAAA1IgGAfIAAA0IgFAqIAAAfIgFAqIAAAvIgGAqQACAvgCAvIgFAqQACBBgCBBIgFAqQABAqgBAqIgFAkIAABEQgGAlgIAkIgDAVQgMAQgLAKQgBALADAKQACATgDATQgZAUgjAAIgKAAg");
	this.shape_8.setTransform(-95.7,128.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWUAIguAAIgagJQgQgCgQABIABgaIAZg6IgOgHIgShSIgDgfIAEg/IgLg/IAAovIgFgpIADi3IgSggIAAgVIAFgvIAAimIAFgaIgKgqIAMg9IAIgRIAGhUIgGgaIAAgkIgKhUIAAgVIgRhZIgUgvIgKADQgPAQgHASIgSAaIgOAvQgUAkgaAeQgWALgYABIgaAGQgggBgagOQgegOgagUIhBhsQgWgfgTggQgFgQAAgPIgFgVIAAgfIgGAAIgFAPIgKAAQgPgZgGgbQAOggAcgXQAKgDALAAIAAgKIgggFIAAgLIAQgJQApAGAeAdIAOAaQAQAHATAAQALAGAKAJQAgAdAdAhQAXAhAfAZQAZgtAkgnQALgaAJgaQAsg1A/geIBjgXQANgJAMgLQAKgJAHgLQgDgOgIgNIgZg0QgFgSgBgSIgFgbIAAgUIgFgbIAAgkQAchKBRgUQAsAAAnAWQASAVANAZIAMAvIAMAQQAHARABATQgEAWgIAUQgNAQAAAUQADAQAIAPIARAQIAIAQIAZAVQARARAUANIBUANQAVALAUAOQARAJAPAMQAQATALAXQAMAVADAaIAAApQAIAoAOAnIAQA0IAWA0IAJAgIASApIABAgQAFAcgBAdQgsA4hFAYIgaANQgNABgMgBIgmgEIAGAvIAJAVIAKA6IgJAaIAACwIgGAqIAGA6IgTAaIgCAaIAAB9IgGAaIAAAgIgFApIAABzIgFAqIAABUIgFAqIAABjIgFAqIAABtIgQBUIAFAvIgHAvIgNA0IgJAVIARAvIACAgIh+AAQgTAAgHgQQgCggAHgfIgTgGIgJgeIgNhZIAAmiIgGgqIAGgqIgGgqIAAh4IgFgqIAAhyIgFAAQABAkgBAlIgFAfIAAAqIgGAqIAAAfIgFAqIAAAqIgFAkQABA3gBA3IgFAaIAACIIgGAqQABAngBAnIgFAqQAAA/gLA+QgEAYgMAVQgHACgIAAQAEAeAAAfIgCAMQgSAQgZAAIAAAAg");
	this.shape_9.setTransform(-96.4,128.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAT9IgVAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgXhsIAGgaIgBgqIgKg5IAAglIAFgfIgFhEIAAnRIgFgqIAAhOIAFg/IgNgWIgDgZIAAixIALhjIgNgCIAXh7IAAhZIgKhUIAAgVIgXh9IgTgkIgPAGIgQAZIgOAQQgOAhgLAiQgUAjgeAaQgcAIgegBIgaAGQgbgJgZgQQgUgKgRgMQgJgNgIgOIgvhOQgegpgYgrQgFgXgCgYQADgRgDgTQgFAJgHAGQgXgOgKgbQABgVAOgQQAQgZAegGQgOgRgXABQAAgIACgHQAJgGAKAAQAjACAcAYQAQAdAaARIAPAAQAbAOAVAYIASAQQAWAcAUAdQAQARAMAUIALAAQAbgqAiglIAYg5IAYgaQAQgSAVgNIAfgMQAUgLAWgHQAmgFAjgKQANgLAMgNIAMgMIgJgYQgSgfgOggIgJhJQgGgfgCggQATg7A1gcQAVgGAVgBIAqAAQAzAaAZA1IAIAfQALAUAIAWQgBAagKAaQgIAJgFAMQAAAIADAIQADASAKAQIANAJIANAXIAZATQAXAVAeAMQAiADAhAGQATAKASAMQATALASANQANAQAIAUQAOAYABAcIAAAkQAKAoAOAnIAOA0IAXA0IAJAgIARAkQAGAfABAgIAAAVQgjBFhQAaIgaANQgcABgdgFIAAAgIAVBTIgCAZIgJARIAFBJIgFAgIAACmIgUAfIAEBuIgFAfIAAAaIgFAlIAAAlIgFApIAABpIgFAfIAABZIgGA0IAABUIgFAqIAABtIgPBEIAFAvIgKA6IgOAxIgNADIAYA6IACAfIh9AAQgUABgGgRQgCggAHgeIgTgHIgJgeIgOhZIAAovIgFgqIAAhuIgFgaIAAg0IgFAAQABAigBAiIgGAfIAAAqIgFAqIAAAfIgFAaIAABfIgGAkIAABJIgFAqQACA3gCA3IgFAqQABAigBAiIgFApIAAA6QgGAkgIAlIgDAVQgMAPgLALQgBAKADALQACASgDATQgZAVgkAAIgJgBg");
	this.shape_10.setTransform(-96.7,128.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAT9IgUAAIgagJQgQgCgQABIABgaIAag6IgPgHIgWhsIAIgpIgNhUIAFg0IgFhuIAAnWIgFg1IAKhzIgTgHIgCgyIAFgqIAAihIAGgfIgLgfIAMg+IAJgRIAAgVIAFg5IgFgqIAAgfIgci8IgTgvQgWAGgKAUIgUAaIgSA0QgWApghAeIgVADQgTADgSABQgWABgUgCQgVgLgVgNQgSgKgRgNQgNgUgLgUIhOh+QgLgRgHgTIgBhEIgLAVIghglIgHgQIAfgyIAegMIAAgLIgqgKIAAgLQAKgFALgEQAqAFAeAeQAOAUAOAQQAMAEAOgBQATAHARANQAoAsAjAxQATAVAVAVQAegtAkgnQAKgXAIgYQAYghAhgYIAagMQAagNAbgKIAVgCQAggFAdgMQAQgOALgQQgDgOgHgMQgSgcgMgeIgDgfQgLgxgDgyQgBgOACgMQAphBBNgOIAVAAQA5AUAeA1IAJAlQALAQAIAVQAAAXgCAYQgKAPgHAQQADAVAIAVIARAQIARAZIAVAQQAQARAVANIBTAOQAWAKAUAOQAQAKAPALQAQATALAXQAMAVADAaIAAAvQAIAiANAiIAMAvIARAkIAlBkIACAfQAFAdgCAdQgFALgJAJQgfAggqAQQgjARgmAIIgqgFIAGAvIAJAVIALA/IgJAVIgBCWIgFAqIAABZIgOAWIgCAZIAABuIgFAaIAAAaIgFAfIAAA/IgGAqIAABZIgFAfIAABuIgFAfIAABJIgFAqIAABpIgQA+IAFAvIgJA6IgOAxIgNADIAYA6IACAfIh+AAQgTABgHgRQgBggAHgeIgUgIIgIgdIgOheIAApZIgFgqIAAi3IgGAAIAAA1IgFAfIAAAvIgFAfIgLCYQABAigBAiIgFAkIAABEIgFA1QABA0gBA0IgFAqQABAigBAiIgFAkIAAA6QgGAkgJAlIgDAVQgMAPgKALQgBAKADALQABASgCATQgZAVgkAAIgKgBg");
	this.shape_11.setTransform(-96.8,128.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDT7IgVAAIgagJQgPgDgQABIABgaIAZg5IgOgIIgXhrIAJglIgOhOIAFglIAAidIgFgaIAFg0IAAh9IgFg1IAFgfIAAhOIgFgqIAAiYIAEgvIgUgfIAGg0IAAiXIAFhEIgJgRIAYiBIAAhUIghjgIgTgqIgPAHQgKALgHANQgKAMgIAOIgTA6QgWAhgdAcQgZAIgbgBIgfAFQgUgFgRgKQghgPgcgXQgNgUgMgVIhJhzQgMgUgHgWQgBgdAGgcIgFABQgEAIgHAEQgJgCgGgGQgSgTgGgXIAagqQAPgPAOgQIgkgFIACgOQAVgJAYADQAsAaAYAuQAMgFAOAAQAfALAWAZIASARIAjAuQAWAYASAcIAGAAQAdgsAlgnIAYg6IATgVQASgVAYgPIAfgMQAUgKAWgIQAmgEAigLQAUgPANgTQgFgQgKgPQgPgZgLgbIgDgaQgLg3gDg3QAIgpAcgfQARgJATgGQAVgGAVgBIAlAAQAzAVAZA0IAJAfQALARAIAUQABAYgDAXQgKAWgDAZQADAQAJAOIAQAMIAKAUIAdAXIAWAWQAUAIAVAFQAaABAaAFQAWAKAUAOQATAKASANQANARAIATQAMATAEAXIAAAfQAGAzASAwIANAvIAXA1IAJAfIASAlQAFAeABAgIAAAVQgjBFhPAbIgaAMQgOACgNgDIgfgCIAAAkIAIAXIANA9IgLAqIAAAaIAGAaIgGAfIAAC2IgSAbIgDAZIAAB+IgKBeIAABJIgFAlIAABOIgFAfIAABpIgGAfIAABEIgFAqIAABeIgPA/IAFAvIgKA5IgOAyIgNACIAYA6IACAfIh9AAQgUABgGgRQgCgfAHgfIgTgHIgJgeIgOhZIAAp9IgFgqIAAiIIgFAAIAAA/IgFAfIAAAqIgGAaIAAAlIgFAqIAAApIgFAgIAAA+IgGAqQACAtgCAsIgFAqQACAsgCAtIgFAqIAAA+IgFAlIAAA0QgGAlgIAkIgDAVQgMAQgLAKQgBAKADALQACATgDASQgZAVgkAAIgJAAg");
	this.shape_12.setTransform(-96.4,128.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKT7IgVAAIgagJQgQgDgQABIABgaIAZg5IgOgIIgWhrIAIglIgMhJIAEgfIAAo1IgGgqIAAhoIAGg6IgOgWIgChNIAFgqIAAiMIAFgaIgKgfIAMg9IAJgSIAAgUIAFg1IgFgaIAAgkIgLhZIAAgVIgRhZIgTg0IgYAPIgIAVIgTAaIgOAvIgiA1IgQASIheAQIhOgkIhribIgRgfIgCgvIgFADQgggSgMggQAFgLAIgKIAMgVQAQgPANgRIgkAAIABgOQAVgMAZACQAWAKAUAQQANASAOAOQALABAOgCQAVAIAUANQAdAdAbAgQAWAbAbAUIBChYIASgvIAfgqIA0ghIA1gXIA5gJIAzgdQgPgmgTgjQgNgqgGgqIgIglIAAgfQAAgTAJgSQAPgZAWgUQAvgRA0AAQA1ARAdAzIAIAkIANARQAKATACAWQgNAlgHAkQAKAZATARIANAVIAZAUQAQASAUAMIBUAOQAWAKAUAOQAZAPAUAWIANAaQAKARAFAUIAAApQAIAwAQAvIAJAkIAcA/IAJAfQANAbAGAfIAAAaQAFAUgCAWQgtA7hJAaIgaAMQgOACgMgDIgggCIAVBoIADAiIgNADIAFCIIgFAoIAABzIgUAaIACAbIgDCCIgFAaIAAAgIgGApIAABZIgFAlIAAA/IgFApIAABZIgFAlIAAA5IgFAqIAABZIgQA/IAFAvIgKA5IgNAyIgOACIAZA6IACAfIh+AAQgTABgHgRQgCgfAHgfIgTgHIgJgeIgNhTIAAmYIADgfIgDjxIgGgfIAAhZIgFAAIAAA/IgFAfIAAAlIgFAkIAAAaIgGAqIAAAlIgFAfIAAA6IgFApQABAygBAyIgFAqQABAngBAnIgGAqIAAA+IgFAgIAAA0QgFAlgJAkIgDAVQgMAQgKAKQgBAKADALQABATgCASQgaAVgjAAIgJAAg");
	this.shape_13.setTransform(-95.7,128.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYT7IgVAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgXhsIALgvIgLg0IAAqIIgFgfIAFg/IAAg5IAGgbIgLgCQgOgpAJgtQgChJAChJIAFgkIAAgVIgJgSQABgWAGgXQAMgpAGgqQABgogBgnIgFgaIAAgfIgGgaIAAgVIgVh4QgIgZgSgQQgPAKgDAUIgQAaIgJAlQgMAggUAeQgKARgOAMQgZAJgbAGQgVAGgVABQgjgLghgPQgrgtglg1QgZgfgTgfIgCgaIgcgeIgQgSQAAgTANgOQAJgRAMgPIALgCIAAgGIgagFQASgWAdgDQANAFANAJIAOAHIATAVIAOgBQANgBANACQAdASAcAXIAlAoQAJAIAMgDQAPgSAOgWQAXgcAVgeIASg0QAUgcAZgXIAkgSQAZgNAcgKIAUgCQAmgGAdgUQAKgKAHgLQgDgLgHgKIgagvQgMgpgEgrIgLgvQAGg5AogoQAhgPAjgCQAagEAbAFQAsAcAWAxIAHAaIATAfQACASAAATIgUAvQADAYAMAWIANAIIANAXIAjAdIAMANQAvARA0AGQAVAKAVANQASALASANQANAQAJAUQANAYACAcIAAAkQAHAjAMAhIATA/IAXA0IAJAlIARAfQAEAYAAAXIADAlQgiBChMAaIgkAQQgLAAgKgBQgQAAgQgDIAAAlIAJAWIAMA+IgJAfIgBCxIgHBtIgMARIgCAZIAABjIgFAaIAAAbIgGAfIAAAlIgFApIAABUIgFAlIAAA5IgFAqIAABTIgFAqIAAA0IgGAqIAABPIgPA+IADBEIgSBPIgJAVIARAvIABAfIh9AAQgTABgHgRQgCggAHgeIgTgHIgJgeIgOhZIAAloIAFhEIgFglIAFgkIgFggIAAkKIgFAAIgVEAIAAAfIgFAfIAABEIgFAvIAABZIgGAqQABAlgBAkIgFAlIAAA5IgFAqIAAAqQgFAkgJAlIgDAVQgMAQgKAKQgBAKACALQACASgCATQgaAVgjAAIgKgBgAoiqmIgLgQIgDACIAOAOg");
	this.shape_14.setTransform(-94.4,128.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AguT+IgVAAIgagJQgQgDgQABIABgaIAZg5IgOgIIgWhrIAKgvIgKhEIAArxIAFgqIgUgfIAEgvIAAhiIAFggIAEhoIgHgMIgCgTIAMg4IAJgXIAAgVIAFgaIgKiNIgcidIgOgfIgaAKQAEANABAOQgGASgIASIgIAqQgMAbgQAZQgIAOgKALQgPALgQAHQgZAMgbAGIgagDQgcgCgZgLQgTgQgRgSQgogngggtIgFgKIAAgNQgbgVgKgiQAGgRALgPQAKgbAYgSQAYgCAXAIIAMAKIAOgCQAVgBAVAGQAlAXAkAYIBNh4IARg5IAqg1IBegtIA/gMIAuggIgjg+QgQgrgHguIgJgvQgBg4AlgrQAPgKAQgGQAUgHAWgDQASgCASACQAxASAdAsIAJAaIAEAVIAMAMQAJAWABAYQgIAagKAaQgBATAFASIAHAOIASAMIARAaIAaAVQAOAOASAKIBTAOQAWAKAUAOQAQAKAPALQANARAJAUQAOAVABAaIAAAkQAMAwASAvIAIAkIAcA/IAEAaIAUAqQADAUAAAWIAGAfQgEATgIARQgqApg3ATIgqARQgaAAgagDIAGA0IAHAQIANBJIgOAGIADBiIgFAlIAACRIgTAbIgCAZIAABzIgFAaIAAAbIgFAfIgQFoIgFAvIAAA6IgFAqIAABJIgQA5IAFAvIgKA/IgNAyIgOACIAZA6IACAfIh+AAQgTABgHgRQgCgfAHgfIgTgHIgJgeIgNhZIAAkPIAFgqIAAkLIgFgpIAAjHIgGAAIAAA5IgFAgIAAAkIgFAlIAAAaIgFAaIAAAgIgJBTIACAlIgEAfIAAAqIgFAlQABApgBAqIgFAqIAAA/IgGAkIAAA6IgFApIAAAlQgFAlgJAkIgDAVQgMAQgKAKQgBAKADALQABATgCASQgZAVgkAAIgJAAg");
	this.shape_15.setTransform(-92.1,128.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAgEIADgQIgFApg");
	this.shape_16.setTransform(-105.5,146.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AB8TrQgCggAIgeIgUgHIgJgeIgNhUIAAj1IAFgqIAAlZIgFgqIAAh9IgGAAIAAA0IgFAfIAAAgIgFAkIAAAbIgLBjIAABEIgFAaIAAA5IgFAlIAABOIgFAaIAABKIgFAkIAAA0IgGAbIAAAkIgKBOIgMApIgTAHQAFAZABAbQAAATgQAHIiIAAIAAgVIAMgqIAGgPIgIgVIgUheIAKg/IgKg/IAAnbIAFgqIgFhZIAAh9IAFg6IgOgXIgBg3IAEglIAAiRIAGgaIAAgVIgKgaIAah+IgLisIgXiDIgNgfQgJAJgFAMIABAVIgMAaIgEAfQgMApgVAmQgHANgKALQgWATgZAOQgNAEgNABQgXAEgYACQgdgFgXgSIgggVQgTgTgQgVIgIgQQgRgOgLgRQADgTAKgSQAFgNAIgMIAegTIA5gJQASgEATAAIAkAKIBXiXIAJgvIAXglIAWgcIBZgrIBEgMIAvglIAAgFQgOgOgIgSQgVghgJgoIgJgfIgBgVQgFgcgBgdIACgbQAhg5BAgQIAagFQAXAEAYAHQAjAbAUAoIAKAlIAQAVQADARgBATQAAALgCAKIgRAgQACAXAJAYIASAQIAMAUIApAlQAyAVA3AGQAdAOAcAUQANAHALAKQAKASAJATQALATAEAXIAAAvQAHAfAMAfIAYBPIARAkIAKAlIAQAfQADAQgBAQIAFAkQgHAxgnAhQgfAOggAKQgVALgVAHIg0gEQAEAKABALIAAAVIAJARIAMA+QgBARgJAOIgBAVQACBBgCBAIgFAqQACAtgCAsQgFAPgQABIAACiIgFAaIAAAVIgFAfIAAA6IgGApIAABEIgFAlIAAA/IgFAfIAABOIgFAaIAAA/IgFAqIAAA/IgQA+IAFAqIgJA/IgOAxIgNADIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_17.setTransform(-89.4,127.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABYTrQgBggAHgeIgUgIIgIgdIgOhZIAAjBIAFg6IAAmsIgFgqIAAg5IgFAAIAAA0IgGAfIAAAgIgFAkIAAAVIgFAqIAAAfIgFAaIAAA/IgGAlIAAA0IgFAqIAABJIgFAqIAAA0IgFAfIAAA6IgQCNIgQAnIgOADQAEAZABAbQABATgRAHIiIAAQAFgvAWgqIgOgDIgXhrIAKg5IgKgvIAAljIADgvIgDglIAFgvIAAiDIgFgfIAAhJIAKhkQgIgBgGgFQgIgnAHgrQgCg6ACg4IAFgqQgBggAGgfIgFAAQgHgRAFgTIAGggIAMgfIADgqQAAgSgDgSIgGhpQgNhZgShZIgFAAIgCAgQgJATgFAXIAAAUQgEAYgKAXQgWAxglAoQgTANgXAGQgVAJgVAGIgUgCQgRgBgPgFQgUgNgQgSQgQgOgKgRQAHg2AngnQAmgPAdgcIBBh+QAPgcAOgdIAIgvQAJgWAOgUIAJgPQASgRAWgLQAegRAhgLQAggEAegIQAZgUAbgRQgPgXgMgYQgNgXgKgYIgEgaIgHgVIABgVIgGgaQgCgVABgVQAhhOBWgQIAaAAQAwASAdAtIAOAvIARAaQACAXAAAYQgNAbgIAeQADATAJARIARARIAJAOIAjAcQAOAOARAKQAaAGAaABQAiAHAdASQAWAMAUAQQANAQAJAUQAMAVADAaIAAAkQALAyASAyIAJAkIAWAvIAJAlIASAfQAEAPABAQQAFArgJApQgpAsg6ATQgtASgxgDIAHA1IAHAPIAMBEIgNALIADA0IgGA5IAABYIgFAgIAFAkIgHAeIgNARIAABzIgLBOIAAAVIgFAqIAAA/IgFAkIAAA6IgGAqIAAA5IgFAlIAABEIgFAkIAAAvIgFAqIAAA/IgQA5IAFAqIgLBEIgMAsIgNADIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_18.setTransform(-85.8,127.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AA1TsQgCggAHgfIgTgHIgOgyIgIhuIAAg0IAFgqIAAqyIgFAAIgLCnIgJBeIAAAqIgGAaIAAA0IgFAgIAABEIgFAaIAABZIgFAqIAAAvIgGAfIAAA0IgQCNIgQAnIgPADQAFAaABAaQAAATgQAHIiIAAQAEgvAWgpQgHgBgGgCQgGgQgDgSQgNgvADgvQAFgSABgTIgKg0QgChZAChZQgCg6ACg4IAFgqIAAkqIgFgqQABgVAEgVIAChJIACgQQgHgMgKgJQgDgKABgKIAEglIAAg/IAGgjIAAhPIAFgvIgLgaIANg+IAIgVQAHgvgBgvIgGglIAAgfIgKhEIgCgaQgJgngFgoIgFAAIgKAqIAAAfQgIAlgOAlIgGAIIgCASQgLArgbAjQgpAWgwgBQgdgLgWgVQgLgegBggQADgOAGgMIASgvIAYglIANgkIAdg6IASgvIAXgvQAJgXAHgYIADglQAPghAVgdQARgOATgJQARgMATgLQAVgFAVgBIAlgJQAVgJAPgRQAKgHAHgLQgDgNgHgNIgbg5QgKgpgBgrIgFgaIAAgqQAchABHgTQAagCAZACQAtATAbArIANAvQAOAYAGAdQgEAVgIAUIgNAVQgCAVAGAVIAHAPIAMAHIANAUIAZAVQAOAOASAMQAsAKAtAGQAQAIAPALQAbAOAXAUQAIAMAFANQARAdAEAiIAAApQAJAqARAqIAMAqIAWAvIAJAkIASAlQACASgBATQAGAcgDAdQgmAxg7AVQghAOgjAFIgkAAIAFAaIABAVIAIAMIAMBCIgKAaIgBB5IgFAoIAABzIgSAbIgDAaIAABoIgKBOIAAAbIgFApIAABEIgGAaIAAA6IgFAqIAABEIgFAkIgFCIIgFAfIAABEIgQA6IAFAqIgLBEIgMAsIgOADIAZA5IACAfIh+AAIgCAAQgRAAgHgPg");
	this.shape_19.setTransform(-82.3,127.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAmTuQgBggAHgfQgLgBgJgGQgJgagFgeQgKhGAChHIAFgqIAAjGQgBgyABgxIAAg6QADgPAAgQIgDggIAAkPIgFAAIAAA0IgEAfIAAAgIgLBeIAAAVIgFAaIAAAkIgFAlIAAAvIgGAlIAABDIgFAqIAABEIgFAgIAAAvIgFApIAAAqIgRCNIgQAnIgOADQAEAaABAaQABATgRAHIiIAAQAFgvAWgpIgOgDIgJgiIgMhOIAIg1IgKg0IAAkAIAFgqIAAnBIAFg0IgOgXIgBg9IAFglIAAh8IAFg/IgJgRIALg9IAOg0IgLjMIgPhZIgFAAIAAA/IgJAqIACAfIAHAaQgDAYgGAXQgCARgKAPQgZAYghAKQgQAAgPgDIgVAAQgkgRgWgjQgQgfgDggQAKgoAPgmIAPgbIAHgaIBGisQAIgaAEgaIACgbQAHgTALgRQAHgOAKgMQATgQAXgMQAOgLARgHIBOgPQAXgOATgTIAMgNIgWgyQgWg4gBg7QgBgSgDgSQAAguAXgmQAdgYAlgHQAVgFAVgBQA6ARAiAzQAIAbAEAaIANAUQADAVgBAVQgKAbgOAZQgDAZAJAWQAWAdAcAYQANAOASAMQAeAJAhABQAkAJAgAVIAfATQAQASALAWQALAUAEAWIAAAfQAGAzASAxIAOAvIAXAvIAIAkIASAlQADAXAAAYIAEAPIAAAbQggA3g+AYQgkAPglAFIggAAIAAAfQAEATAHASQAGAXAEAYQAAAMgCAMIgIAMIAAAVQACBEgCBDIgGAqQACAqgCAqQgFAPgPAAIAACTIgLBOIAAAkIgFAqIAABEIgFAgIAAAvIgGApIAAA6IgFAfIAAA/IgFAkIAAAwIgFApIAAAvIgQA/IAFAlIgLBEIgMAsIgNADIAYA5IACAfIh+AAIgBABQgSAAgHgQg");
	this.shape_20.setTransform(-80.8,127.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAbTsQgCggAHgeQgKgCgJgGQgKgagDgdQgLhBADhCIAFgqIAAkaIADgqQgDgPAAgQIAEgaIgEg0IAAj7IgFAAIAAA0IgGAfIAAAbIgFAfIAAAVIgFAqIAAAVIgFAaIAAAfIgGAqIAAAkIgFAqIAABEIgFAlIAABJIgFAfIAAAvIgGAlIAAAvIgQCIIgQAnIgPADQAFAZABAbQAAATgQAHIiIAAQAEgvAWgqIgNgDIgXhlIAKhEIgKgqIAAjrIAFgqIAAnRIAKhPIgKgCQgNgXACgbIAGgfIAAhoIAFgkIAAgvIADgVQgBgKgGgIIgBgTQAEgdAIgbQAGgKADgMIAAgVQAEgVABgVIgFgaIAAg/IgGAAQgBA4gbAuQgMAGgMAEQgTAHgVAAQgTACgTgCQgOgIgMgKQgTgNgQgPQgXgkAAgqQADgOAGgMIAIgfIASglIADgVIBBixQAIgiAEgiIACgVIAag0QASgRAWgLQAbgTAfgJQAfgEAfgIQAcgWAegUQgLgVgHgVIgXg5QgCgTABgSQgEgPAAgQIAEgQQgEgSgBgTQAGgrAaghQAVgPAZgHQBDgLA5AkQAKAMAHAOQAKAUAFAWIAAAVQAFAOAIAIQADATgBAWQgDAQgIAPQgLAMgHAOQgCAmAXAeIAoAgQAOAOARAKIBUAOQAVAKAVAOQAQAJAPAMQANARAJAUQAMAVADAaIAAAkQAGAiANAiIATA/IAcA/IADAUIANAbQAJAWACAZIAEAkQgJAygpAhIgvARQgkAPgmAFIgfAAIAHA1IAHAPIAMBJIgPALIAFAaIAAA5IgGAgIAABIIgFAlIgCBCIgTAHIAGA5IgGAlIAAA+IgFAbIgKB9IAABEIgGAfIAAA1IgFApIAABEIgFAaIAAA1IgFApIAAAvIgFAgIAAAvIgQA/IAFAkIgLBEIgMAsIgOADIAZA6IACAfIh+AAIgCAAQgRAAgHgQgAj0mgIgFhZIgKAAIgGAlIAQA0IAFAAg");
	this.shape_21.setTransform(-79.7,127.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWTuQgCggAHgfQgLgBgJgGQgIgYgEgaQgKg/ABg/IAFgqIAAjGQgBgyABgxQAEgTABgSIgFgaIAFgqQACg/gCg+IgFglIAAhzIgFAAIgaE0IAAA6IgFAfIAABEIgGAqIAAA/IgFAfIAAAvIgFAfIAAAvIgRCIIgPAnIgPADQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgOgDIgWhhIAKhJIgLg5IAAidIAFgqIAAkkIAGggIgGhZIAAheIAGgaIABhEIgRgaIAQkPIgLgaIALg5IAJgVIAGhzIgFAAQgUAwg1AJQgSAEgTACQgTgGgRgJQgTgIgQgLQgUgYgIgfQAHg5AXg1IAIgkIAXg6IAqiIQACgVAAgVQAFgeAOgbQAHgOAKgMQASgOATgMQAPgLAQgJQAtgHAsgKQAMgJAJgMIAhgcIgghcIgBgqIgFgaIAFgfQAAgsARgoQAugoA+gCQArAFAjAbQAWAkAJAqIABAVIAIAVIABAaQABAKgCALIgiA0QgCASAEATQADAHAFAHIApAiQAPAOAQALQAfAJAgABQAfAIAbARQAYANAWAQQAKAOAHAQQAPAaAFAfIAAAlQAFAgALAfIAWBJIAXAvIAKAkIAQAgQADAXgBAYQAGAagDAaQgmAwg7AWQghANgjAGIgkAAIAFAqIAIARIANBCIgKAaIgBBzIgFApIAAB4IgTAbIgCAaIAABYIgFAbIgLBtIAAAlIgFAfIAABEIgFAlIAAApIgFAgIAAA5IgGAvIAAAvIgFAqIAAAvIgFAgIAAApIgQA/IAGAlIgMBEIgMAsIgNADIAYA5IACAfIh9AAIgCABQgSAAgGgQgAj5nDIgFgfIgEABIAEAeIAFAAg");
	this.shape_22.setTransform(-79.1,127.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASTuQgCggAIgfQgLgBgJgGQgIgYgEgaQgKg8ABg9IAFgpIAAjHQgCgvACgvIAFgaQgBgTgCgSIADgqIAAisIgFgfIAAhJIgFAAIAAAvIgGAfIAAAaIgFAfIAAAVIgFAqIAAAVIgFAaIgLCiIAAA6IgFAfIAABEIgFAqIAAAfIgFAfIAAAvIgRCIIgQAnIgPADQAFAaABAaQABATgRAHIiIAAQAEgvAWgpIgNgDIgOgyIgIg+IAJgqIgKg/IAAhZIAFgqIAAlTIAFgqIAAhzIgFgqIAIiNIgRgVIACgPIACg6IAFgkIAAhjIAFhEIgJgRIAEgeIAVheIAAhJQgVAVgaAOQhZARhAg5QgGgMgDgOQAHg2AWgzIAJgpQAWhBAUhCIASg6IABgaIAFgaIACgVIANgaQAHgQALgPQATgPAVgNQANgKAOgIQAsgHAsgKQAfgYAggXQgPghgHgjIgNgvIAEgaQgDgSgBgRQAEgDAEgJIABglQAXhKBMgUQAuAAAqASQAfAjALAvIAAAfIAKAaQABANgBANQgBARgGAPIgXAaQgOAeAJAfQAOANAQALQAUATAWAQQAvAKAvAHQATAKASANIAfATQANAQAJATIASAfQACANAAANIAAAlQAJAtARAsIAMAqIAXAvIAIAkIATAlQADAXgBAYIAEAPIAAAbQgGAUgPAQQgMANgOALQgaALgaAJQgiANgiAGIggAAIAAAfQAEATAHASQAHAXADAYQgEAagGAaQABA/gBA9IgFAgIAABjQAAAWgVAEIAACDIgFAaIgLBoIAAAqIgFAgIAAA+IgGAaIAAA1IgFAkIAABEIgFAaIAAA1IgFApIAAAvIgFAgIAAAkIgQA/IAFAlIgLBEIgMAsIgNADIAYA5IACAfIh+AAIgBABQgSAAgHgQgAgMEsIAFAAIAAg0g");
	this.shape_23.setTransform(-78.8,127.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAOTsQgBggAHgfIgUgHIgHgdIgOheIAAgqIAFglIAAkVIAFgpIAAmdIgFAAIAAAvIgFAfIAAAaIgFAgIAAAUIgLBUIAAAlIgFAkIAAAvIgFAgIAAAkIgGAqIAAAvIgFAfIAABEIgFAlIAAAkIgFAqIAAAlIgRCCIgQAoIgOACQAEAaABAbQABATgRAHIiIAAQAFgvAWgqIgOgDIgVhgIAIg/IgKhEIAAg/IAFgqIAAlJIAFgqIAAiiIgDgfIAJh4IgOgaIgCg0IAFglIAAh3IALhZIgGAAQgGgZAHgbIAGgZQAHgKACgMIAAgVQAEgSABgTIgFgaIAAgfIgFAAIgCAOQgSARgWAOIgaADIgaAJQhIgGghg+IAAgaIASg/IAMgaIADgaQAKggANgeIAlh+QAFglACgkQAFgUAJgRQAJgTANgQIAggTQARgNATgJQAqgHAqgLQAegXAggYQgHgagFgaQgIgfgGggQAAgQAEgPIgCgaIAIgVIABgaQAGghAPgeQA9gqBJAMQAXAGATAOQAcAlAJAuIgDAlQADAKADACQACAPAAAPQgFAWgMATIgWAVQgJAeABAhQAdAHAWAVQAKALAMAIQAhAJAjACQAeAIAcARIAfASQAUAUAMAZIANAbQACAWAAAZQAFAnAOAnIAQA0QAIAYAKAXIANAaIAEAaIANAVQAIAVABAVIAFA0QgMAoghAbQgbAOgeAKQgdAMgdAHIgqAAIAHA0IAHAQIANBJIgPALIAEAvIgFA0IAAA+IgFApIAABPIgTAaIgCAaIAABjIgFAaIgLBuIAAAvIgFAgIAAA0IgFAqIAAApIgGAgIAABEIgFAkIgFCDIgFAfIAAAgIgQBEIAFAfIgLBEIgMAsIgNADIAYA5IACAgIh+AAIgBAAQgSAAgHgQg");
	this.shape_24.setTransform(-78.4,127.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAPTuQgCggAHgfIgTgHIgIgeIgOhYIAFhUIAAkAIAGgqIAAmnIgGAAIgPDMIgFAfIAAAqIgGAfIAAAvIgFAgIAAApIgFAqIAAAvIgFAaIAAA/IgGAlIAAApIgVDMIgQAnIgPADQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgNgDIgOgyIgIg+IAJgqIgLg/IAAhEIAGgqIAAkFIAFgqIAAlOIAFg0IgPggIAFg+IAAhoIAFgaIABhJIADgQIgJgaIAMg9IAIgMIAGg/IgFhOIgGAAQgJAlggAXIgbAEIgPAHQgvADgqgTQgLgKgGgOQgMgWgBgZQAIgjANghIAMgaIAEgaQAHgYAKgXQALgiAIgiQAUg4AKg7QgBgTADgSQAIgSAKgSQAHgQALgOIAZgQQAUgOAWgMQApgHAqgKQAfgaAlgVQgLgngGgnQgHgbAAgaIAFgYQgCgQACgPIAIgMIABgVQAGgiAQgdQAfgcApgJQBOAEAyA7QAFAVADAVIAEAQIgFAaQADANAFANQAAASgFASQgHARgMAOIgTAQQgMAcAAAeQAlANAeAcQAZAMAcAEIAVAAQAeAIAbARQAWAMAUAQQANARAJATQANAVABAaIAAAlQAMAvASAvIAJAkIAWAvIAOAvQAMAXAIAYIAAAgIAFAfQgKAjgbAaQggATgkALQgcAMgdAHIgqAAIAGAvIAJAVIAIBGIgNADIAGAvIAAA5IgGAqIAAAuIgFAgIAABEIgSAaIgDAaIAABuIgKBDIAAAbIgFApIAAA1IgGAfIAAAvIgFAqIAAAqIgFAaIAABEIgFAkIAAAlIgFAqIAAA0IgGAfIAAAaIgPBEIAFAgIgMBEIgMAsIgNADIAZA5IABAfIh9AAIgCABQgSAAgGgQg");
	this.shape_25.setTransform(-78.5,127.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAOTsQgCggAHgfIgTgHIgIgdIgOhZIAFhPIAAjwIAGgqIAAmxIgGAAIgPDGIgFAgIAAAkIgGAlIAAAqIgFAfIAAAvIgFAqIAAAvIgFAfIAAA6IgGAkIAAAlIgVDLIgQAoIgPACQAEAaABAbQABATgQAHIiIAAQAEgvAWgqIgNgDIgWhgIAJg/IgLhEIAAg6IAGgpIAAj2IAFgqIAAlTIAKhPIgSgLIADiRIAFgkIAAg/IAFgkIgKgaIAMg6IAHgQIAHg0IAAg/IgFgaIAAgfIgGAAQgDAjgOAgQgWAUgdAJIgkAIQgUgBgRgHQgdgKgVgXQgQgqAMgqQAFgWAIgUIANgaIAEgaQAHgYAKgXIAZhOQARgvAHgvQAEgzAYgsQAUgVAZgPQAPgLARgIIBOgOQAigbAngYQgHgfgEgfIgKg1IAGgwQABgWAIgSQAFgkANggQAygvBEAEQA2ANAhAtQAGAVACAVIAEAVIgFAaQADAXACAYQgGAXgPATQgMAJgMAMQgIAZABAbQAoATAhAcQAhAJAjACQAhAJAeAUQAVAMATARIANAZQAQAlAEAqIAAAaQAJAlAPAkIAJAkIAcA/IAIAfIASAlQAEASgBATIAEAvQgNAjgdAZQgcAOgeAJQghAOgiAHIglAAIAFAlIAJAWIAMBIIgKAVIAABtIgGAkIAAA0IgFAgIAEAUIgKAuIgPAHIAGApIgGAbIAABOIgKBJIAAAaIgFAlIAAA5IgGAaIAAAvIgFAlIAAA0IgFAqIAAAvIgFAfIAAAqIgFAqIAAA0IgGAgIAAAVIgPBEIAFAfIgMBEIgMAsIgNADIAZA5IABAgIh9AAIgCAAQgSAAgGgQgAj8nAIgFgfIgEACIAEAdIAFAAg");
	this.shape_26.setTransform(-78.4,127.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASTuQgCggAIgfIgUgHIgIgeIgNheIAFhJIAAjgIAFgqIAAm8IgFAAIAAAvIgFAfIAAAVIgLBOIAAAgIgFAaIAAAfIgFAqIAAAkIgGAgIAAAvIgFAqIAAAvIgFAfIAAA0IgFAgIAAApIgWDMIgQAnIgPADQAFAaABAaQABATgRAHIiIAAQAEgvAWgpIgNgDIgJgiIgNhOIAJg6IgKgvIAAgvIAFgvIAAjmIAFgqIAAloIAGgaIABg6IgRgaIAFgvIAAg5IAFgfIAAhZIAGgaIAAgVIgJgRIADgeIAVheIAAhTIgPiIIgGAAIgCAkIAIAqQgBAVgGAVQgNAugmAZIgvAHQgdAAgXgPQgQgKgMgMQgSgdgBghIAIgfQAGgWAIgUIAMgaIAOg0QAWg8AUg9QAOgmAFgoQADgnARgiQAHgOAKgMQAMgKAOgIQAWgQAZgMQArgGApgLQALgJAKgLQATgRAXgKIgJgfIgCggQgGgdgFgcIAGglIAAgaQAHgNAFgGIAAgRQAJglAVgfQAjgaAqgGIAaAGQAoAIAgAXQAZAuACA1IgDAVIAIAVQgCAQgFAPQgHARgMAPQgOALgLAPQgHAXABAYQApATAgAcQAhAJAjABQAZAGAWAOQAZANAWAQQANAQAJATQAPAaAFAfIAAAqQAHAgAMAfIATA/IAXAvIAIAkIATAlQADAXgBAYIAEAPQgEAxgmAhQgeAOggALQgfANggAGIgfAAIAAAfIAUBUIgBAYIgIAMIgBB+IgFApIAABtIgTAbIgCBJIgFAfIAAAvIgQCIIAAA/IgFAkIAAAfIgGAgIAAA5IgFAqIAAAvIgFAfIgKC3IgQBEIAFAgIgLBEIgMAsIgNADIAYA5IACAfIh+AAIgBABQgSAAgHgQg");
	this.shape_27.setTransform(-78.8,127.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAVTuQgCggAHgfIgTgHIgIgeIgOhYIAFhKIAAjbIAGgqIAAm8IgGAAIgPCyIAAAaIgFAaIAAAfIgGAlIAAAqIgFAfIAAAvIgFAqIAAAvIgFAfIAAA1IgGAfIAAAkIgVDMIgQAnIgPADQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgNgDIgWhhIAJg5IgLhJIAAgvIAGgqIAAjRIAFgaIAAl+IAFgaIAAgqIADgaIgTgfIALhpIAAhnIAKhJIgPgGIAahoIADgvIgDgVIgFhjIgLhZIgFAAIgIA5IAFA/QgGAegLAcQgHAQgLANQgaAQgeACIgfAAQgXgDgPgRQgkgmgFg0QAJgjANghIANgaIADgVQAPgqASgqIAOgvQAUgwAKgzIACgfQAHgWALgUQAHgOAKgMQAMgKAOgIQAWgPAZgNQAqgHApgKQAegYAhgXQgKgkgGglQgFgfAAggIAEgaIgDgQIAJgUIACgbQAHgbAOgZQAggfAsgLQASACATAEQA3AKAgAvQAKAhACAjIgEAVIAIAVQABAVgHAVQgTAYgTARQgIAcABAeQApATAgAcQAmAIAoAEQAZAJAWAOIAgATQANANAJAQQARAbAIAfIAAAvQAHAgAMAfIATBEIAXAvIAJAkIARAgQAGAhABAiQAAATgCASQgRAZgXAUQgcAOgeAJIgfAKQgMAHgOAEIgqAAIACAkIAMAlIAMA/IgNALIgCAZIAAB3IgGAqIAABeIgSAgIgCAaIAABJIgGAfIAAAVIgPCNIAAA/IgGAaIAAAqIgFAkIAAAwIgFApIAAAvIgFAaIAAAqIgFAqIAAA6IgIA0IgNA5IAFAgIgJA5IgPA3IgNADIAZA5IgEAfIh4AAIgCABQgSAAgGgQg");
	this.shape_28.setTransform(-79.1,127.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAXTsQgBggAHgfIgUgHIgIgeIgNhYIAFhKIAAjWIAFgqIAAiSIACgaIgCgfIAAjxIgFAAIgQCyIAAAaIgFAaIAAAgIgFAkIAAAlIgFAfIAAA0IgFAqIAAAqIgGAfIAAA1IgFAfIAAAqIgWDGIgQAnIgOADQAEAaABAaQABATgQAHIiJAAQAFgvAWgpIgOgDIgVhhIAIg5IgKhJIAAgqIAFgqIAAjMIAFgfIAAjMIAGg0IgGgfIAAhZIAGgaIAAgvIAEgbIgRgaIAHheIAAhyIALhTIgFAAQgIgSAGgTQADgVAGgTQAGgKADgNIAFgvIgLiHQgJg4gHg2IgFAAIAAAvIgIAkIABAVIgDAQQADAOAAARQgIAjgPAhQgGANgHAMIgOAEQgMAGgOACIgqAAQgcgFgTgVQgfgrgBgzQALgsAUgoIANgqIAcg+IAOgvQAWg0ANg1IABgfQAKgfARgbQAUgTAZgOQARgNAUgKQApgGAqgLQAbgXAegTQgOg3gLg2QAAgTADgSIgDgaQADgOAGgMIABgaQAEgiASgdQA1gmBBAHQAZAFAWALQAkAoAGA1IAAAaIAJAbQACAPgDAQQgEANgGANIgYAWQgIAQgDATQAKAcAbAQIAkAgQAmALApACQAbAJAZAQQAWAMAUAQQANARAJATIAMAaQADAUgBAWQAGAwARAuIAQA0IAcA/IADAVIARAlQAHAhAAAiIAAAbQgFAUgPAQQglAbgqAQQgiANgiAHIgfAAIAHA0IAHAQIAMBJIgNAGIADBIIgGAgIAAAzIgFAfIAABkIgTAaIgCAaIAABZIgVC3IAAA+IgFAaIAAAqIgFAlIAAAvIgGAqIAAApIgFAaIAAAvIgKCOIgQA+IAFAgIgLBEIgMAsIgNADIAYA5IACAfIh+AAIgBAAQgSAAgHgPg");
	this.shape_29.setTransform(-79.3,127.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAbTrQgCggAHgeIgTgIIgJgdIgMhZIAFhJIAAjRIAEgqIAAiXIADgaIgDggIAAjwIgEAAIAAAvIgFAaIgLBoIAAAbIgFAaIAAAfIgFAlIAAAkIgGAgIAAA0IgFAqIAAApIgFAgIAAA0IgFAfIAAAqIgWDHIgQAnIgPADIAGAvIgDAZIgSAGIiDAAQAEgvAWgqIgNgDIgWhgIAJhJIgKg/IAAglIAFgfIAAjWIAFgqIAAi8IAFg/IgFgfIAAhPIAKhoIgNgVIgCgVIAAgkIAFggIAAhtIAFgaIAEg+IgJgaIAMg+IAJgRIAAgVIAFgvIgPisIgQhJIgFAAIAAA+IgJAlIABAVIgDAkIgQA/IgUAvIg1AFIgfAAQgygUgUg1QgGgSgCgSQAEgZAKgWIANglIANgVIAIgfQAOggAPgfIANgqIAMgaQAQgmALgoIADglQAMghATgdQATgQAVgMQASgNATgKIA6gJQAmgOAdgfQAIgQgGgPIgVg/QgCgaABgaIgFgaIAFggQgBgmANgjQAZgeAkgPQAdgDAgABQArAHAgAeQAQAgAJAkIAAAUIAJAbQACAMgBAOQgDAWgLAUIgRAUQgFAcAFAeQAmAVAjAiQAmALAoACQAcAIAZAQQAWAMATAQQANARAJAUIANAaQACAWAAAZQAJA1AUAzIAJAlIASAkQAIAYAFAXIAXAvQABAPgBANQAEAaABAZQgPAjgeAaQgcANgdAKIglAMQgMAGgOACIglAAIAGAvIAJAVIAMBJIgOAGIADBTIgFAaIAAA5IgFAqIAABOIgTAaIgCAaIAABZIgFAaIgLBeIAAAlIgFAqIAAAvIgFAfIAAAlIgGAkIAAAvIgFAaIAAA6IgFAkIgKCyIgQA/IAFAfIgLBEIgMAsIgOADIAZA6IACAfIh+AAIgCAAQgRAAgHgQgAADD3IgCAeIAFAAIAAgfg");
	this.shape_30.setTransform(-79.7,127.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAdTrQgCggAHgeIgTgIIgJgdIgNhUIAFhOIAAjMIAFgqIAAiXIADglIgDhEIAFgfIgFglIAAh4IgFAAIgUDhIAAAfIgGAlIAAAkIgFAgIAAA0IgFAqIAAAqIgFAfIAAA0IgGAgIAAAkIgUC8IgNAuIgTAHQAEAZABAbQABATgQAHIiIAAQAEgvAWgqQgHAAgGgDQgFgLgCgMQgJglgGgkIAJhJIgJglQgCgVAAgVIAGgvIAAjMIAFgpIAAiyIAFgfQACgwgCguQgFggAAgfIAFglIAAgaIAEgkQAAgWgMgPQgDgNABgNIAFg/QgCgvACguIAFgaIAAg0QADgOABgMQgGgKgDgQQADgWAGgUIADgUIAIgMIAGg5IAAglIgFgfIgFhOIgGgbIgBgaQgKgkgEglIgGAAIgFAlQADAOABARIgKAfIgBAgIgDAQIgCApQgKAbgOAaQgFAMgIAMIgNADQgNAGgOADQgjABghgLQgLgJgJgMQgZglgHgqQADgQAGgPQAKgdANgcIANgVIAEgVIASglQAbg+AZg/QALgfAGggIACgaIANgaQAHgRAKgOQATgRAWgLQASgNATgKIA5gJQAkgMAbgcQAJgXgNgYQgQgjgGgmQgPhpAzhVQANgHAOgFQAUgGAVgBIAfAAQBDAZAZBFIADAfIAMARQACAHAAAIQAAAegMAbQgKAMgHAOQgCALADAKQADANAGAMQAaAbAeAXIAQARQAmALAoACQAcAIAYAQQAWAMAUAQQANARAJAUQAMAVADAaIAAAkQALAvASAvIAJAlIAXAvIAIAkIASAgQAHAfAAAgIAFAaQgEAQgIAPQgnAng2ATQghAOgiAGIggAAIAFAaIABAVIAIAMIAKBQIgNACIAFAgIAAA+IgFAqIAAAuIgGAlIAABJIgSAaIgCAaIAABZIgQCDIAAAfIgFAfIAAA1IgGAfIAAAqIgFAkIAAAvIgFAqIAAAqIgFAfIAAAlIgFAqIAAA5IgIA1IgNA0IAFAfIgJA6IgPA2IgNADIAZA6IABAfIh9AAIgCAAQgSAAgGgQgAADEvIAFAAIAAg0g");
	this.shape_31.setTransform(-79.9,127.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAhTrQgCggAHgeIgTgIIgJgdIgMheIAEhEIAAjHIAFgpIAAiiIAFgaIgFg1IAFhEIgFgfIAAheIAFgqIAAgaIgFAAIAAAqIgFAaIAAAaIgPCDIAAAaIgKBOIAAAvIgGAqIAAAvIgFAfIAAA1IgFAfIAAA0IgLBeIAAAqIgQCDIgQAnIgPADIAGAvIgDAZIgSAGIiDAAQAEgvAWgqQgHAAgGgDQgHgUgFgYIgGglQgEgPAAgQQAHgfACggIgJgfQgCgVABgVIAFgvIAAjMIAFgpIAAiyIAFgfQACgwgCguQgFggAAgfIAFglIAAgaIAFgkQgBgWgMgPQgDgNABgNIAFg/QgBgqABgoIAFggIAAg0IAGgaQgHgOgEgRQAEgeAJgcIAHgQIAGg5IAAgqIgKhuIgFgaIgCgaQgKgkgEglIgFAAQgGAiAAAiQgHAcgEAdQABAlgJAlQgJAVgMAUQgFAMgIAJQgeALgfADQglgDgagZQgbgegKgnQABgWAJgUIAWg0IANgVIAOgqIAYgvIAzh+QAFgSACgSIACgaIAMgVQAIgRAKgOQATgRAWgLQAUgOAWgJQArgHApgNQALgIAKgKIAOgQQABgRgJgOQgPgdgLgdQgGgqAAgpQgFgdgBgdQAphWBlgIQA/AYAcBBIACAaQAOAXAGAdQgEAWgIAUQgJAMgFAOQgBAYAJAWIAQAMIAIAOIAkAdIARARQAlALAoACQAcAIAZAQQAVAMAUAQQANARAJAUQAOAUABAbIAAAkQAJAoAPAnIATA+IATAlIANAvIARAfQACAXAAAYQAFAggKAfQgpAng1ATQgkAPglAFIgbAAIAGAaIAAAVIAIAMIANBDIgKAaIgBBeIgFAlIAAAuIgFApIAAA/IgTAaIgCAaIAABeIgFAaIgQCtIAAAvIgFAfIAAAlIgGAkIAAAvIgFAgIAAA0IgFAlIAAAkIgFAqIAAA0IgHA1IgOA5IAFAaIgJA6IgOA2IgOADIAZA6IACAfIh+AAIgCAAQgSAAgGgQg");
	this.shape_32.setTransform(-80.3,127.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAjTrQgCggAHgeIgTgIIgJgdIgNheIAEhEIAAjMIAGgqIAAiXIADglIgDg0IAFg/IgFgfIAAhZIAFgqIAAgfIgFAAIgUDmIAAAaIgLBOIAAAvIgFAlIAAAvIgFAqIAAAvIgFAfIAAAvIgLBkIAAApIgQB+IgQAnIgPADQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgNgDIgMgsIgKhEIAJg/IgJgfIgCgqIAGgqIAAjLIAFgqIAAitIAFgkIAAhzIgFgqIAFgkIAAggIAFg0IgNgWIgCgZIAFg/IAAhNIAJhpIgBgUIgIgQIALg6IAJgVIAGg0IAAg0IgFgfIAAggIgLhEIgBgaIgOhOIgGAAIgKAkIAAAqIgJAfQgDAYACAYQgFApgUAlQgFAMgIALQgUAJgVAEIgqAAQgcgFgUgVIgUgVQgKgZgFgbQADgQAGgPIAXg0IAPgbIAMgkIAXgqIAvhuQAMgeAFggIACgVIAMgVQAKgWASgSIAfgTQAUgOAWgJQAogGAmgLQARgMAPgPIAMgMQgFgMgGgMQgSghgNgjIgCgaIgFgaIAAgaQgFgfAAggQAXg7A9gYQAZgGAbAAQA8ARAfA4IAJAqIAMARQAHATAAAVQgEATgIASIgNAVQAAAQAFAPQACALAFAJIAQAMIANATIAfAXIAQASQAmALAoACQAcAHAYARQAWAMAUAQQAJAMAIAOIASAgQACAMAAAOIAAAkQAJAoAPAnIATA+IAXAvIAIAgIASAkQADAYgBAXQAEAXgBAYQgoAzg/AXQgkAPglAFIgaAAIAFAqIAJARIAMBIIgIAQIgCAVIAABOIgFAqIAAApIgGAfIAABJIgSAaIgCAaIAABeIgGAaIAAAVIgPCYIAAAvIgGAfIAAAlIgFAkIAAAvIgFAqIAAAqIgFAfIAAAlIgFAqIAAA5IgIA1IgNA5IAFAaIgJA6IgPA2IgNADIAZA6IABAfIh9AAIgCAAQgSAAgGgQg");
	this.shape_33.setTransform(-80.5,127.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjTrQgCggAHgeIgTgIIgJgdIgNheIAEg/IAAjGIAGgqIAAiiIAFgfIAAioIgFg0IAFgqIAAgvIgFAAIAAAqIgGAaIAAAaIgOCDIAAAaIgLBOIAAAvIgFAqIAAAvIgFAgIAAA0IgFAfIAAAvIgLBkIAAApIgPBzIgNAuIgTAHQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgNgDIgKgiIgMhOIAJgqIgLhEIAAgpIAGggIAAjBIAFgqIAAisIAFglIAAiIIgEgfIAEgfIAAglIAFgvIgNgWIgCgZIAFg/IAAhIIAFgaIAAgvIAFgvIgKgaIAah+IAAg5IgFgfIAAggIgLhEIgBgaIgOhTIgGAAIgJAaIgBAkQgIAigEAiQACAYAAAXQgLAdgQAdQgFAJgGAKQglARgoAAQgOAAgNgCQgRgKgOgOQgMgKgJgLQgLgeABggQADgOAGgNIASgpIASggIANgkQAohRAlhRQAHgiAGgiQAOgeAVgbQARgNATgKQAUgNAWgKIBJgOQAUgMARgSIAMgMIgghCQgNgkgEglIAAgaIgFgaIAAglQAdhKBRgUQBGAFAqA6IAOA0IAMARQAHATAAAVQgKAfgPAbQAAAbAMAYIAQAMIAIAOIAfAYQAOANARALQAnAJAoADQATAIARALQAbAOAYAUIANAYQARAaADAgIAAAfQAIAqAQAqIAOAvIAcA+IAIAgIASAkQADAYgBAXQAEAXgBAYQgoAzg/AXQgkAPglAFIgaAAIAFAVIABAaIAIAMIAMBDIgJAaIgBBjIgFApIAAAqIgGAfIAABEIgSAaIgCAaIAABkIgQB9IAAAlIgFApIAAAqIgGAgIAAAkIgFAlIAAAvIgFApIAAAqIgFAgIAAAkIgFAqIAAA0IgIA1IgNA5IAFAaIgJA6IgPA2IgNADIAZA6IgEAfIh4AAIgCAAQgSAAgGgQg");
	this.shape_34.setTransform(-80.5,127.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAlTrQgCggAHgeIgUgIIgIgdIgOheIAFhEIAAjMIAFgqIAAiXIAEglIgEgvIAGgaIAAg0IgGgfIAAhKIAGgpIAAggIgGAAIAAAqIgFAaIAAAaIgOCDIAAAaIgLBOIAAAvIgFAqIAAAvIgFAgIAAA0IgGAfIAAAvIgKBkIAAApIgPBzIgNAuIgTAHQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgOgDIgJgiIgMhOIAJgqIgLhEIAAgpIAFggIAAjBIAGgqIAAisIAFgaIAAiDIgFglIAFgpIAAglIAFgvIgNgWIgDgZIAGg/IAAhIIAJhuIgBgUIgIgQIAah+IgLinIgViCIgFAAIgPAfQgBAXABAYIgLAqQgBANADANQAHAMAAAOQgIAQgLAPQgKAYgOAVQgUAMgYAGIgqAAQgYgEgSgPQgNgIgLgLQgSgiACgmQAIgbAMgZIAZgqIAMgfIBWi3IAIg0QAHgRALgPQAJgQAOgNIAfgTQAUgNAWgKQAlgGAkgIQAUgNARgRIAMgMIgMgdQgRgigNgiIgCgaIgFgbIAAgUQgFgdAAgdQASg7A3gcQASgFASgCIAgAAQAzANAeAtQAKAZAGAbQALAWAGAZQAAAVgHAVQgKAPgIAQIACAQQACASAHARIAQAMIAJAOIAfAYQAOANARALQAnAJAnADQAUAIARALQAbAOAXAUQAbAlAGAtIAAAfQAJAqAQAqIAOAvIAcA+IAIAgIASAkQADAYgBAXQAEAXgBAYQgoAzg/AXQgkAPglAFIgaAAIAFAVIABAaIAIAMIAMBDIgKAaIAABjIgGApIAAAqIgFAfIAABEIgSAaIgDAaIAABkIgFAaIgQCsIAAAqIgFAfIAAAlIgFAkIAAAvIgFAgIAAA0IgGAlIAAAkIgFAqIAAA0IgHA1IgOA5IAGAaIgJA6IgPA2IgNADIAYA6IACAfIh9AAIgCAAQgSAAgGgQg");
	this.shape_35.setTransform(-80.6,127.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAmToQgBgfAHgfIgUgHIgIgeIgOheIAFhEIAAjGIAFgqIAAiiIAGgaIgGgaIAGgqIAAg6IgGgvIAAg5IAGgqIAAglIgGAAIAAAqIgFAaIAAAbIgPCCIAAAaIgKBPIAAAvIgFApIAAAwIgFAfIAAA0IgGAfIAAAvIgKBkIAAAqIgPBzIgNAtIgTAHQAEAaABAaQABATgQAHIiJAAQAFgvAWgqIgOgCIgJgiIgMhPIAIgpIgKhEIAAgqIAFggIAAjBIAFgqIAAisIAGglIAAiIIgEgfIAEgfIAAglIAFgvIgQgkIAFg/IAAhTIAGgfIAAg6IAEgUIgCgVIgIgQIAbh9IAAg/IgFgaIAAgaIgNhkIgTheIgFAAQgDATgGASIgBAfIgHAgQgFARgBATIALAbQgCAXgPASQgLAagPAYQgaAPgdADIgaAFQgWgEgUgLQgsgjgHg2QAMgmATgjIASgbIAIgaIAhg+IATgvIAeg6QAJgdAEgcQAOgoAaghQARgNAUgKQAUgNAWgKIA5gJQAhgNAYgbQAEgggSgeQgRgpgFgrIAAgkIgFgbQABg0AegpQAKgHALgFQBPgXBHAiQAaAqAKAvIAKARQAHAUAAAVQgLAegOAbQgBAcAFAeQAIAAAGACIARAWIA1ApQAoALArAEQATAHASALQAVAMAVAOQANAPAJARQAKAPAHARQADAUgBAWQAFAqAPApIATA/IAcA/IAMApIAOAbQADAXgCAYIAGAkQgQAkggAZQgZAMgbAJIgkAMQgNAHgNAEIgqAAIAFAVIABAaIAIAMIAMBCIgKAaIAABjIgGAqIAAApIgFAfIAABEIgTAaIgCAbIAABjIgFAaIgQCiIAAA0IgFAqIAAAfIgFAgIAAA0IgGAaIAAA0IgFAlIAAAkIgFAqIAAA1IgHA0IgOA5IAFAaIgJA6IgOA3IgNACIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_36.setTransform(-80.8,127.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAkTuQgCggAHgfIgUgHIgIgeIgNheIAEg+IAAjMIAFgqIAAiiIAGgaIgGgaIAGgqIAAg/IgGgpIAAg/IAGgqIAAglIgGAAIgJCOIgKBTIAAAaIgGAaIgKC9IgFAfIAAA0IgGAqIAAAqIgFAfIAAAlIgFAkIAAAlIgRB9IgPAnIgPADIAFAvIgCAZIgTAGIiCAAQAEgvAWgpIgOgDIgMgsIgJhEIAJg/IgJgfIgCgqIAFgvIAAjMIAGgqIAAisIAFggIAAhzIgFgpIAFglIAAgaIAFg0IgNgaIgDgbIAGg+IAAhIIAFgbIAAgvIAFgvIgKgaIAah9IAAg6IgFgfIAAgfIgLhEIgCgaIgTheIgFAAQAAAKgDAKIgLAVQgDAXABAYQgHAYgCAXQAIANAHAOQgFAZgRAQIgUApQgWARgZAHQgPACgNgBQgPACgPgCQgQgIgPgKQgSgKgNgRQgLhQAthHIBejCIAThOQAQgbATgZQARgNAUgKQAUgNAWgKIBJgOQAcgVAdgSQgQgfgMggQgOghgFgjIAAg6QgDgPAAgQQACghANgeQAgggAtgJIAagGQAqADAkAXQAdAjALAsIACAVIANAaQADASgDASIgcA1QgBAaAMAZQAZAbAfAXQAMAKAOAJQAnAIAnAEQATAHASALQAVAMAVAPQAMAPAJARIATAfQACANgBANIAAAlQAJAnAQAnIATA/IAXAvIAIAfIASAlQADAYgBAXQAEAXgBAYQgIAPgMANIgZAWQgcAOgeAJQgiAOgiAHIgfAAIAFAVIABAaIAIAMIAMBCIgKAaIAABkIgGAoIAAAqIgFAgIAABEIgSAaIgDAaIAABjIgFAaIgQCiIAAA6IgKBjIAAA0IgFAaIAAA6IgGAkIAAAgIgFAqIAAA0IgHA0IgOA5IAGAbIgJA5IgPA3IgNADIAYA5IACAfIh9AAIgCABQgSAAgGgQg");
	this.shape_37.setTransform(-80.5,127.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAqTuQgCggAHgfIgTgHIgJgeIgOheIAFg+IAAjMIAGgqIAAiiIAFgaIgFgaIAFgfIAAhZIgFgaIAAg6IAFgqIAAgqIgFAAIgUDmIAAAbIgLBOIAAAvIgFAqIAAAvIgFAfIAAA0IgFAgIAAAvIgLBjIAAAqIgQB9IgQAnIgPADQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgNgDIgMgsIgKhEIAJg/IgJgfIgCgqIAGgqIAAjMIAFgqIAAisIAFglIAAhzIgFgpIAFglIAEhZIgMgQIgCgUIAFg6IAAhYIAFgfIAAg0IAEgVIgBgUIgIgRIALg5IAJgVIAGg0IAAg1IgRicIgZhpIgFAAIADAaIgNAgIgCAvIgLAYIAUAsIgWAgIgbA4IgHgBIgTALQgVAGgVAAQg0gEgpghQgGgMgEgOQgGgPABgQQAHgYAKgXIAOgfIASgaIBejCQAJgcAEgdQAQglAZgfQARgNATgKQAUgNAWgKQAogFAmgLQAUgOARgSIAMgNIgKgdQgSgsgKgtIAAhuQAPg6A1gdQAUgFAWgCIAZAAQBJAaAaBKIAAAVQAGAQAIAPQACAMAAAOQgEATgJASQgNAQgGAUIAAAVQAXApAoAdQAMAKAOAJQAnAIAoAEQATAHARALQAfASAZAZIANAaQANAVACAaIAAAlQAJAnAPAnIATA/IASAkIANAqIASAlQADAYgBAXQAEAUgBAWQgmA3hBAXQghAOgiAHIggAAIAFAqIAJARIAMBHIgIARIgCAUIAABOIgFAqIAAAuIgGAgIAABEIgSAaIgCAaIAABjIgGAaIgPCiIAAA6IgLBjIAAA0IgFAaIAAA6IgFAkIAAAgIgFAqIAAA0IgIA0IgNA5IAFAbIgJA5IgPA3IgNADIAZA5IABAfIh9AAIgCABQgSAAgGgQg");
	this.shape_38.setTransform(-81.2,127.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAqTrQgCggAHgeIgTgIIgJgdIgOheIAFg/IAAjGIAGgqIAAiiIAFgaIgEglIAEgVIAAhOIgFgvIAAg6IAFgpIAAglIgFAAIAAAqIgGAaIAAAaIgOCDIAAAaIgLBTIAAAvIgFAlIAAAvIgFAqIAAAqIgFAfIAAA0IgLBkIAAApIgQB+IgQAnIgPADQAEAZABAbQABATgQAHIiIAAQAEgvAWgqQgHAAgGgDQgHgUgFgYIgGglQgEgPAAgQQAHgfACggIgJgfQgCgVAAgVIAGgvIAAjMIAFgpIAAiyIAFgfQACgygCgyQgFgcAAgdIAFglIAAgaIAEgkQAAgWgMgPQgDgNABgNIAFg6IAAhXIAFgbIAAg5IAFgaQgGgOgEgRQAEgeAJgcIAHgQIAGg5IgQjBIgJggIgIg0IgJgfIgFAAQAAAPgCAQIgHAQIgBAVIgLA5QgCAIACAIQAQAPADAVQgJAOgNAIQgNAcgQAbQggASglADQgPABgPgBIgagNQgTgIgQgOQgRgjACgmIAag6IAWgfIAIgaIA6huQATghAPgjIAIg0QAIgRAKgOQANgXAUgSIAagNQAUgNAWgKQAkgGAlgIQASgKAOgOQAKgKAJgLQACgNgGgNIgYhPQgDgpABgqQACg1AVgvQANgNAQgJQBOgXBJAjQAXAhAMAoIACAfIAKAgQAAAVgGAVQgTAagMAfQABALADAKQACAKAGAJIAjAcQAPAPARAOQARAFATADIAaAFIAbABQAVAKAUANQAWAMAUAQQANARAJAUQAMAVADAaIAAAkQALAwASAuIAJAlIAcA5IACAVIAYAvQACAVAAAVQAEAXgBAYQgmA3hBAXQghAOgiAHIggAAIAFAaIABAVIAIAMIAMBDIgJAaIgBBeIgFAlIAAAuIgGApIAAA/IgSAaIgCAaIAABkIgGAaIgPCsIAAAvIgGAgIAAAkIgFAlIAAAvIgFApIAAAqIgFAgIAAAkIgFAqIAAA0IgIA1IgNA5IAFAaIgJA6IgPA2IgNADIAZA6IgEAfIh4AAIgCAAQgSAAgGgQg");
	this.shape_39.setTransform(-81.2,127.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AApTuQgCggAHgeIgTgIIgJgdIgNhZIAEhJIAAjMIAGgqIAAiXIADglIgDgaIAAjrIgGAAIAAAqIgEAaIAAAaIgKBOIAAAgIgLBeIgFB4IgFAfIAAA1IgFApIAAAqIgGAgIAAAkIgVDHIgQAnIgPADQAEAZACAbQAAATgQAHIiIAAQAEgvAWgqQgHAAgGgDQgFgLgCgMQgJglgGgkIAJhJQgHgfgDggIAAglIAFgfIAAjMIAFgqIAAixIAFggIAAhEIgFgkQgCgbACgZIAFglIAAgVIAEgkQAAgWgMgPQgDgNABgNIAFg6IAAhXIAFglIAAg0IAEgVQgFgPgEgQQAEgeAJgcIAHgQIAGg5IgQi8IgfiDIgFAAIAFAgQgEAPgHAQQgEAXAAAYIgIAcQAIARAMANQADATgKARIgQgFIgaBEIgHgCQgOAJgQAHIgVABQgVAFgUgBIgagNQgUgIgQgOQgKgPgDgQQADhHAog8IALgaIAjg/IAcg/QAPgZANgbIAKg5QALgVAPgVQAWgYAcgOQAUgOAWgJQAogGAngLQAbgXAegTQgLgXgHgYQgNgngFgoIAAgvIAFgfIAAgaQACgTAEgSQAfgsAzgNQAcgCAdACQAwAQAcApQAIAXAFAYIAAAaIAJAbIABAaQgJAdgVAXQgGAPgBAQQgBAQAEAPQAUASAZATQAPARAVAKQAaAGAbAEIAaABQAVAKAUANQAWAMAUAQQANARAJAUQANAYACAcIAAAfQAMAwARAuIAJAlIAXAvIAIAkIASAgQAGAUABAWIADAkQgJAtgkAgQgcANgeAJQghAOgiAHIggAAIAFAaIABAVIAIAMIAKBQIgNACIAFAgIAAA+IgFAqIAAAuIgGAlIAABJIgSAaIgCAaIAABZIgQCDIAAAfIgFAfIAAA1IgFAfIAAAqIgGAkIAAAvIgFAqIAAAqIgFAfIAAAlIgFAqIAAA5IgHA1IgOA0IAFAfIgJA6IgPA2IgNADIAZA6IACAfIh+AAIgCAAQgSAAgGgQgAAQD/IgBAuIAFAAIAAgvg");
	this.shape_40.setTransform(-81.1,127.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAtTuQgCggAHgfIgTgHIgJgdIgNhZIAFhJIAAjRIAFgqIAAiYIADgaIgDgfIAAjrIgFAAIgPCxIAAAbIgFAaIAAAfIgFAlIAAAkIgGAgIAAA0IgFAqIAAApIgFAgIAAA0IgFAfIAAAlIgUC8IgNAuIgUAGQAFAaABAbQABATgRAHIiIAAQAEgvAWgqIgNgDIgWhgIAJhKIgJgkIgBgqIAFgvIAAjMIAFgqIAAixIAFggIAAhJIgFgkIAAg1IAFgkIACg0IAEgQIgOgaIgCg6IAFgkIAAhjIAFgaIAAgpIAEgbIgJgaIAMg9IAIgMIAGhTIgPidIggiDIgFAAIAEAgIgOAfIAAAkQgFAQgCAQQANAUAJAWQgFAQgQAIIgFgEQgMAugjAeIgVAEQgVAFgVACQhLgVgUhHQAQg3AfgxIASgqIAZgqIAmhOQAMgXALgYIAJg0QAKgUAMgRIAJgPQAQgOATgJQAZgQAbgMQAogGAngMQAbgXAegSQgKgdgHgdQgLgigHgiIAJhjQAKgzAlgkQAWgLAZgBQAzgDAvAUQAhAlAJAyIAAAfIAKAbQABAMgCAOQgWAngSAnQgBASADASQASANAWAPQASASAXANQAaAGAbAEIAaABQAVAKAVANQAWAMATAQQANARAJATQANAYACAdQAKBSAcBQIAXAvIAIAkIAUAlQAFATgCATQAGAmgLAnQgoAng0ASQgiAOgiAHIggAAIAbCNIgQAAIAFBZIgFAaIAAA5IgFApIAABPIgTAaIgCAaIAABZIgFAaIgQCiIAAA5IgFAgIAAAkIgGAbIgFCSIgFAaIgKC3IgQA/IAFAfIgLBEIgMAsIgOADIAZA5IACAgIh+AAIgBAAQgSAAgHgQgAAVD/IgCAZIAFAAIAAgag");
	this.shape_41.setTransform(-81.5,127.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAuTwQgCggAIgfIgUgHIgIgeIgOhYIAFhKIAAjbIAFgqIAAm3IgFAAIgPCyIAAAaIgFAaIAAAgIgFAkIAAAlIgFAfIAAA0IgGAqIAAAqIgFAfIAAA1IgFAfIAAAqIgWDGIgQAnIgOADQAEAaABAaQABATgRAHIiIAAQAFgvAWgpIgOgDIgVhhIAIhJIgKg/IAAgkIAFgfIAAjXIAFgqIAAi8IAGg5IgGgfIAAhZIAGgqIAAgfIAEgbIgRgaIAHhjIAAhnIAGgbIAAgfIACgVIgIgfIAMg4IAJgXIAAgUIAGgqIgGgaIAAggIgFgqIAAgUIgXiDIgNgvIgGAAIADAfQgIAPgFAWIAAAfQgFAQAAAQQAMAVAJAUQgIASgRAJIgdA3QgcASghAFQhLgEgog7QgFgQABgPQARgyAcgsIAVgvIAZgqIA1hpQAKgkAIglQAPgeAVgaQAOgKAQgJQAZgQAcgMQAngGAngLQALgJAKgLQATgOANgSQgDgOgHgMIgDgaIgHgbQgGgagBgaIAFgaQAEhTAxg+QARgIATgEQAOgEAQABQAdADAdAHQAyAkANA+IAAAfQAGAXACAYQgDAQgHAQQgXAZgMAgQgBAQADAOQASAOAWAOQASATAYANQAMADAOABIAaAFIAaACQAQAHAPAKQAZANAWAQQAKAMAIANQASAdAGAiIAAAqQAIAiANAiIARA5IAcA/IAEAVIAVAqQADAZAAAbIAAAfQgdA6hBAWQgkARglAIIgfAAIAGA0IAIAQIAMBJIgPAKIAEAvIgFA1IAAA4IgFAqIAABUIgTAaIgCAaIAABZIgFAaIgLBeIAAAfIgFAqIAAAvIgFAfIAAAlIgFAqIAAAvIgGAaIAAA5IgFAlIgKCyIgQA+IAFAgIgLBEIgMAsIgNADIAYA5IACAfIh+AAIgBAAQgSAAgHgPg");
	this.shape_42.setTransform(-81.6,127.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAvTwQgCgfAHgfIgUgHIgIgeIgOhZIAFhJIAAjbIAFgqIAAm8IgFAAIgPCxIAAAbIgFAaIAAAfIgFAlIAAApIgFAgIAAAvIgFAqIAAAvIgGAfIAAA0IgFAgIAAAkIgWDMIgPAnIgPADQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgOgCIgVhhIAJg5IgLhKIAAgvIAFgpIAAjRIAGglIAAi8IADgfIgDiTIAFgaIADhJIgRgVIAJhuIAAhnIAKhPIgQgFIAbhjIAAgVIAFgaIgFglIAAgkIgGgaIAAgaIgMhUIgQhJIgIgaIgFAAIACAfIgMAaIgBAfQgFASgBATQAKAWALAPQgDAZgVAMQgNAZgLAZQgeAWgkAGQhKgEgpg7QgGgSACgTQAGgQAHgPIANgfIAWggIAPgkIAcgvIA0hpIALgaIAHgvQAIgRALgOQAJgRANgNIAbgOQAWgQAZgMQAkgGAlgIQATgMARgQQAOgJALgNQAAgTgHgSIgDgaIgIgfQgDg/AMg/QAEghANgdQAegfApgIIAVgDIAaAFQAhAEAeASQAhAzADA/IgCAMIAHATQAAAWgHAUQgPAWgRAUQgGAPgCAQQAAALADAKQARAOAWAOQARAQAUAOQAPAEAQABIAaAFIAaACQAQAHAQAKQAbAPAYASQAKAPAHARQAPAVAFAaIAAAvQAJAoAQAmIAOA0IAWAvIANAqIANAaQAGAfACAgIAAAaQgeA5hBAXQgkARglAIIgfAAIAHA0IAHAQIAMBJIgNAGIgDCVIgFAqIAABeIgSAaIgDAbIAABOIgFAaIAAAVIgQCNIAAA/IgFAaIAAAqIgFAkIAAAvIgFAqIAAAvIgGAaIAAAqIgFAqIAAA0IgFAfIAAAVIgQA/IAGAfIgMBEIgMAtIgNACIAYA6IACAfIh9AAIgCAAQgSAAgGgQg");
	this.shape_43.setTransform(-81.6,127.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAvTwQgCgfAHgfIgUgHIgIgeIgOhZIAFhOIAAjhIAFgpIAAm3IgFAAIgPDGIgFAgIAAAkIgFAlIAAAkIgFAgIAAAvIgFApIAAAvIgGAgIAAA0IgFAfIAAAqIgWDMIgPAnIgPADQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgOgCIgVhhIAJhJIgLg/IAAgqIAFgfIAAjhIAGgpIAAlpIAFgaIABhEIgKgMIgHgTIAFglIAAgvIAGgqIAAhSIAFg6IgJgfIAXhPIACh9IgijWIgNggIgGAAQAGAVgCAVIgHAQIgCAaIgGAlQABAQAHAPQAJAMAFAOQgCAKgFAJIgSAIQgNAYgJAaQgHAHgJAFQgWALgZAFQg4gBgvgbQgNgTgGgVQgEgTACgSIAag5IASgbIASgpIATggIA/h9QAKggAGgfQAPgiAWgcQAWgPAZgNQAPgLARgHQAkgFAlgJQAUgMAQgRIAVgRQAGgWgJgYIgEgfQgIglAAgkIAMhDQAEgkAQghQAogkA0gGIAaAFQAyAMAhAoQAMAhACAjIgDAVIAFAvQgLAkgZAbQgMAeABAhQArARAkAeQAPAEAQABIAaAFIAaACQARAHAPAKIApAYQAOANAIARQAKASAIATIACAaIAFAaIAAAVQAFAXAJAYIATA/QANAgAPAeIAKAlIAQAfQAEAYgBAXIAFAVQgGAygqAgQgjARgmANIgfAMQgXACgYAAIAAAfIAOAqIAHAqIgCAYIgIAMIgBCHIgFAqIAABjIgSAfIgDBUIgFAfIAAAlIgQCIIAAA5IgFAqIAAAfIgFAgIAAA0IgFAqIAAAvIgGAfIgKC3IgQBEIAGAfIgMBEIgMAtIgNACIAYA6IACAfIh9AAIgCAAQgSAAgGgQg");
	this.shape_44.setTransform(-81.6,127.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAuTwQgCgfAIgfIgUgHIgJgeIgNheIAFhJIAAjhIAFgpIAAm9IgFAAIgPDHIgFAfIAAAlIgFAkIAAAqIgGAgIAAAvIgFApIAAAvIgFAgIAAA0IgFAfIAAAqIgWDMIgQAnIgPADQAFAZABAbQABATgRAHIiIAAQAEgvAWgqIgNgCIgWhhIAJg/IgKhEIAAg0IAFgqIAAjbIAFglIAAltIALhZIgTgMIADh3IAFgjIAAhPIAGgaIAAgVIgJgRIAKhCIAOg6IAAhUIgFgaIAAgfIgMhZIgHgVIgRhOIgGAAIgCAfIgHAQIgKBJIAZAvIgLAaIgQgFQgGASgIATQgDAMgGALQgeAUgkAEIgaADQhRgbgLhRIAZg5IATgbIAXg0QAnhJAmhJQAIgdAEgdQAQgkAZgfQAWgQAZgMQAPgLAQgHQArgFApgOIAagYQANgKALgLQACgVgJgVIgKhEQgCgbAFgZQAGgoAIgnQAFgWAJgTQAngkA0gGIAbAFQAgAGAdARQAeAmAIAxIgDAqIAGAPQACATgHASQgRAbgUAZQgJAcABAeQArARAjAeQAnAIAoAEQAbALAZARQAQAIAOALQAVAcAPAhQACAWAAAZQAGAoAPAmIARA/IAcA5IAIAlQAMATAIAXIAAAkQAEAVABAVQgPAkggAZQgXALgYAIIgqAOQgMAGgOAFIgkAAIAAAfIALAlIAJA0IgJAfIgBB+IgFAoIAABpIgTAgIgCBDIgFAfIAAA1IgQCIIAAA+IgFAlIAAAfIgGAgIAAA5IgFAqIAAAvIgFAfIgKC3IgQBEIAFAfIgLBEIgMAtIgNACIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_45.setTransform(-81.6,127.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAvTwQgCgfAHgfIgTgHIgJgeIgNhZIAEhOIAAjrIAGgqIAAm3IgGAAIgPDHIgEAfIAAAqIgGAfIAAAvIgFAgIAAApIgFAqIAAAvIgFAaIAAA/IgGAqIAAAfIgFAgIAAApIgQCDIgQAnIgPADQAEAZACAbQAAATgQAHIiIAAQAEgvAWgqIgNgCIgWhhIAJg/IgKhEIAAg0IAFgqIAAj1IAFgqIAAlZIAKhOIgSgMIADiRIAFgkIAAg+IAFglIgKgaIAah9IAAg/IghjhIgOgqIgFAAQADAQACAQQgDANgGANQgFAZgCAbQgDANAAANQARAZAGAcQgGAMgOABIgFgDIgaBEIgHgCIgZAQIgfACIgVAEIgpgLIgggQIgQgYIgKgvIAchEIARgbIANgfIBciyIAIg0IAjg5IBUgzIBJgOIBEgyQgPgvgGgvQgEgVgBgVQAFglAJgkQAHgwAagoQAkgXApgEIAbAFQAnAIAgAXQAZAsADAyIgDAbIAGAPQABAVgGAVQgSAZgVAWQgIAbACAfQANAAANAGQAWAVAZASQAbAIAeAEIAaACQAUAHARALQAVAMAVAOQAQATALAYQAJAOAFARIAAAlQAGAoAOAmIATA/IAcA/IAIAfQAMAWAIAZIAAAlIAFAfQgPAmggAcQgaAMgbAJIgkAMQgMAGgOAFIgqAAIAFAkIAJAXIAMBHIgJAVIgBBuIgGAjIAAA1IgFAfIAFAVIgLAtIgPAHIAGAqIgGAaIAABOIgKBKIAAAfIgFAlIAAA0IgFAaIAAAvIgGAlIAAA0IgFAqIAAAvIgFAfIAAAqIgFAqIAAA0IgFAfIAAAVIgQBEIAFAfIgMBEIgMAtIgNACIAZA6IACAfIh+AAIgCAAQgSAAgGgQg");
	this.shape_46.setTransform(-81.7,127.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAvTwQgBgfAHgfIgUgHIgIgeIgOhZIAFhTIAAj7IAFgqIAAmsIgFAAIgQDLIgEAgIAAAqIgFAfIAAAvIgFAfIAAAqIgGAqIAAAvIgFAaIAAA/IgFAkIAAAqIgWDMIgQAnIgOADQAEAZABAbQABATgRAHIiIAAQAFgvAWgqIgOgCIgVhhIAIhJIgKg/IAAg0IAFglIAAkPIAFgqIAAlJIAGg1IgOgaIgCgVIAFg0IAAhSIAFgqIAAg6IAGgaIgLgfIANg6IAHgPIAGg6IgPi8IggiDIgFAAQAEAQABAQIgKAfIgLBDQAQAhAIAfQgLAJgLAHIgdA3QgVAOgZAEQgXAEgYABQgOgDgMgGQgagJgTgTQgSgjACgmIAag5IASgbIBBiHQAWglARglIAIg0QALgYAQgXQAXgYAcgOQATgOAWgJQAogGAngLQAegYAggXIgOglIgHg5QgEgVgBgVQAGglAIgkQAHgwAagnQAigWAmgGIAbAFQAqAGAiAZQAZAsADAyIgDAbIAIAaQgEASgGASQgRAWgSAUQgJAbACAfQAnAQAdAcQARAGAUACIAaAFIAaACQAVAJAVANQAWAMATAQQANARAJAUQANAYACAcIAAAfQAIAoAQAnIAOA0IAXAvIAIAfIAOAbQAKAZABAbIADAkQgJAugkAfQgbANgeAKQgiAOgiAHIggAAIAGAaIAAAVIAIAMIANBHIgKAVIgBBeIgFAlIAAAzIgFAqIAAA5IgTAaIgCAbIAABoIgLBJIAAAgIgFApIAAAvIgFAgIAAAvIgFAqIAAApIgGAgIAABEIgFAaIAAAvIgFAqIAAAvIgFAfIAAAaIgQBEIAFAfIgLBEIgMAtIgNACIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_47.setTransform(-81.7,127.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAxTwQgCggAHgfIgTgHIgJgeIgOheIAAgpIAFglIAAkKIAGgqIAAmiIgGAAIAAAvIgTDBIAAAfIgGAlIAAA0IgFAgIAAAkIgFAqIAAAvIgFAfIAAA/IgGAlIAAAkIgFAqIAAAlIgQCCIgQAnIgPADQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgNgDIgRg8IgFg0IAJg1IgLg5IAGhuIAAlJIAFgqIAAkAIAFg5IgNgaIgDgvIAGgqIAAhtIAFgaIAAgqIADgVIgHgMIgBgTIAMg4IAJgRIAAgVIAFgvIgFgqIAAgfIgGgbIAAgUIgWiDIgOgvIgFAAIAFAaQgEANgGANQgEAagCAaQgEAQgCAQQALASANANQADATgKASIgQgGQgGAWgJAUQgDAKgGAJQgbASghAFQhSgFgqhEQAGg6Afg0IAMgPIAIgbIAeg0IAhhJQAQgcANgdIAIg1QAKgTANgRIANgUQATgNAWgLQAUgNAWgKQAogFAmgMQALgJAKgLQATgRAXgKQgMghgGgjQgIgkAAglQAFgjAJghQAEgdAIgcQAfgsAzgMQARAAAPADQAaACAaAKQAtAnANA7IgEAvQADASABATQgFATgMARIgSARQgIALgEAOQgFAQACAPQAPANATAKQARARATAPQASAGATACIAaAFIAaACQAWAKAUANQATAKASANQAPATAMAWQALATADAXIAAAvQAIAgAMAfIATA+IAWAvIAJAlIAVAqQAEAZAAAbIAAAaQgfBBhKAaQgfAMggAHIgfAAIAGAvIAJAVIALBJQgMACgEAOIAGAfIAAAqIgGAaIAABDIgFAfQABAogBAnQgHAPgLALQgDAMAAAOQACA0gCA0IgKBEIAAAaIgFAqIAAAvIgGAgIAAA0IgFAqIAAApIgFAgIAABEIgFAaIAAAvIgFAqIAAA0IgGAfIAAAaQgIAigHAiIAFAgQgCAigKAiQgFAXgHAVQgGACgHABIAZA5IABAfIh9AAIgCAAQgSAAgGgPg");
	this.shape_48.setTransform(-81.9,127.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAsTuQgBggAHgfIgPgCIgNgiIgOheIAAgvIAFgqIAAkgIAFgpIAAkLIgFgfIAFgaIAAhJIgFAAIAAAvIgFAfIAAAaIgPCNIAAAfIgFAlIAAA0IgFAgIAAAkIgGAqIAAAvIgFAfIAAA/IgFAlIAAApIgWDRIgQAoIgOACQAEAaABAbQABATgRAHIiIAAQAFgvAWgqQgHgBgHgCQgFgLgCgMQgIglgGgkQACgiAGgiIgKg/QgCgiACgiIAFgqIAAjgQgCg4ACg2IAFgqIAAiIIgFgqIAFg0QABggAEgfQgBgVgMgPQgDgNABgNIAAggIAFgkQgCg/ACg+IAFgpQAAgUAGgRIgQgFIAMg6IAOgqIAAgaIADgPIgDhPIghjRIgJgaIgFAAIAFAaQgEAOgFAMQgFAdgBAdQgGAPgCAQQASAWAJAZQgKAOgNAIQgKAQgHAUQgDAJgFAJIgSAJQgVAIgVABQgSAEgTACQgOgFgMgHQgdgLgVgYQgLhQAthIIAMgfIAYgqIAmhUQAQgcANgdIADggQANgnAYgiQAQgNATgJQAYgRAcgLQAjgGAhgIQAjgcAmgXQgNgfgEgfQgJgqAAgqQAGgjAIghIAEgfQAbg9BAgMQAxgCAtATQANALAKANIAMAVQAHAhAAAjQAGAqgIAqQgPAUgQAQQgPAeABAhQAKgBALADQAcAYAdAVIBeARIAvAcQAOAIALAKQALAOAHARQALAUAHAWQACAUAAAWQALA/AWA+QAKAbANAZIANAqIASAlQAEAXgBAYIAEAVQgBAigUAcQgiAZgnAOIglAOQgMAGgOAEIgqAAIACAlIAMAkIANA/QgIAEgGAHQgCAkADAlQgCApgBApIgFAlQABAvgBAvQgFAPgQAAIAACIIgFAaIgLBpIAAAvIgFAfIAAA1IgFApIAAAqIgGAgIAABJIgFAaIAAAvIgFAqIAAA0IgFAfIAAAgIgQA+IAFAlIgLBEIgMAsIgNADIAYA5IACAgIh+AAIgBAAQgSAAgHgQg");
	this.shape_49.setTransform(-81.4,127.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAxTuQgCggAHgfQgKgBgJgGQgJgYgEgaQgKg8ABg8IAFgqIAAjCQgCgvACgvIAFgpIAAioQABgngBgnIgFgaQgCglACgkIgFAAIgXEfIADAVIgLBeIAAA6IgFAaIAABJIgFAqIAAAkIgGAgIAAAvIgQCHIgQAoIgPACQAFAaABAbQABATgRAHIiIAAQAEgvAWgqIgNgDIgWhgIAJhKIgKg0IAAhTIAFg6IAAlOIAFgqIAAheIgFgaIAAg6IAFgaIAAg0IAEgaIgSgaIAEhUIAFglIAAhdIAFg+IgJgSIAEgdIAVheIAAhUIgFgaIAAggIgNhYIgHgVIgRhPIgFAAIAFAVIgKAaQgEAdgCAdQgGAVADAVQAOANAIASQgJAVgSAQIgUAtIgIAEQgZAOgbAFQgZAAgWgCIgbgNQgVgKgPgRQgHgNgEgNQgGgSADgTQAFgQAIgPQAIgWAKgUIASgaIAIgaIBRiiQAJgdAEgdQAIgZAPgWQAJgQAOgOIApgYQAPgKARgHQAqgGApgNIAbgZQANgJALgMQADgNgFgNIgLg/QgEgVgCgUQAFglAJgkQAFggAIgfQAbgnAsgNQAxgCAtANQA0AvAGBIIgDAQQAHAVgBAaQgGASgKARQgOAMgNAQQgJAbACAeQAqASAkAdQAnAIAnAEQAcALAZARQAPAIAPALQAVAcAPAhQACAXAAAYQAHAuARArIAOA0IAcA6IAIAkQAMAUAIAWIAAAlQAEAUABAWQgPAjggAZIhpAqQgXADgYgBIAAAfIALAlIAKA0IgKAgIAACHIgGApIAABpIgSAaIgCAaIAABeIgGAaIgKBjIAAA1IgFAqIAAAvIgGAfIAAA0IgFAqIAAA/IgFAfIgFCDIgFAfIAAAlIgQA+IAFAlIgLBEIgMAsIgOADIAZA5IACAgIh+AAIgBAAQgSAAgHgQgAASEtIAFAAIAAg1g");
	this.shape_50.setTransform(-81.9,127.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAyTrQgCggAHgeQgLgCgJgGQgJgXgEgbQgKg+ABg/IAFgqIAAjHQgBgyABgxQAEgSABgTIgFgaIAFgpQAChAgCg+IgFgkIAAhzIgFAAIAAAvIgFAfIAAAaIgFAfIAAAVIgFAqIAAAVIgFAaIgFB+IgFApIAAA1IgGApIAAA/IgFAfIAAAvIgFAbIAAA0IgRCIIgPAnIgPADQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgOgDIgXhlIALhEIgLg1IAAiHIAFg6IAAkqIAGgfIgGi3IAGgaIABhJIgRgaIAFgvIAAhPIAFgeIAAhPIAGgkIgLgaIALg6IAJgVIAGg0IAAg0IgFgfIAAggIgKhEIgCgaIgTheIgFAAQgEATgGASQgFAcgBAdIgHAfQAKAWANAUQAAAUgQAKIgFgEIgOAqQgEAKgFAJQgdAPggADIgaAFQgWgFgUgLQgegOgRgbQgHgTgDgSQACgQAGgPQAQgmAVgkIAOgkIASgfIAhhKQASghAQgjQAFgaAEgaQAOghAWgdQATgRAWgLQATgOAWgJQAlgGAkgIQAigaAigYQgMgigFgiQgIgigBgiIAMhJQAGguAYglQBIgkBPAXQANAHAMAKQAaArABAzIgCAcIAGAOQACANgBANQgGAWgPATIgTARQgJAdACAhQAoASAhAcQAcAIAeAEIAaABQATAIARALQAWAMAUAPQAQATALAXQAOAYABAcIAAAfQAMAvASAvQAHAdALAdIASAkIAJAgIARAkQADAVgBAVIAFAlQgPAmggAcQgcANgdAJQgiAOgiAHIgfAAIAFAqIAIARIANBDIgKAaIgBBzIgFApIAAB4IgTAbIgCAZIAABZIgFAaIgLBuIAAAkIgFAgIAABEIgFAkIAAAqIgFAfIAAA6IgGAvIAAAvIgFAqIAAAvIgFAfIAAAqIgQA/IAGAkIgMBEIgMAsIgNADIAYA6IACAfIh9AAIgCAAQgSAAgGgQg");
	this.shape_51.setTransform(-81.9,127.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAzTuQgBggAHgfQgLgBgJgGQgJgagFgeQgKg+ACg/IAFgqIAAkqQADgPAAgQQgDgPAAgQIAFglIAAg0IgFg0IAAi3IgFAAIAAAvIgFAfIAAAaIgKBUIAAAkIgFAaIAAAgIgFAqIAAAkIgGAqIAABEIgFAkIAABEIgFAgIAAAvIgFAkIAAAvIgRCIIgQAnIgOADQAEAaABAaQABATgRAHIiIAAQAFgvAWgpIgOgDIgXhmIAKhEIgKgqIAAjmIAFgpIAAkGIAFgkIgFgqIAAh4IALhZIgLgDQgOgjAJgoQgBgyABgxIAFgpIAAg1QADgNABgNQgGgJgDgRQADgVAGgVIADgTQAFgIAEgJIAAgQQAFgfAAggIgKheQgDglgEgkQgNg0gGg0IgGAAQgDASgGASQgFAcgBAeIgHAfQAIAWANAUQABAKgCALIgXAaQgJAYgJAVQgTAIgVAGQgRACgQAAQgPABgPgBQgTgIgSgLQgXgNgNgYIgJgaQACgbALgZIAMggIAUgfIAMgfIA5h5QAQgcANgdIAIg6QAIgQAKgPQANgXAUgRIAagOQAUgNAWgKQAogGAmgLQAegaAhgVQgNgcgEgdIgNg6QAAgQAEgPIAAgaIAJgaIAIg6QAdguA0gRQBTADAzA8QAIAfADAgIgEAPQADAOAGANQACAMgCAOQgGASgKAQQgOANgNAPIgHAaQAIAgAhAQQATATAXANQAaAGAaADIAbACQAVAKAUANQAcAPAXAXIANAaQALAUAEAWIAAAfQAGArAPApIARA5IAXAvIAIAlIASAfQAGAWgBAWQAGAmgLAmQgqApg4ATQgfAMgfAHIggAAIAVBoIADAiIgNADIAFBoIgFAqIAAA5IgGAaIAEAqIgGAeIgNAbIAAA6IgFApIAAAqIgLBUIAAAkIgFAgIAABEIgFApIAAAlIgGAqIAABEIgFAfIAAAvIgFAqIAAAvIgFAfIAAAvIgQA/IAFAlIgLBEIgMAsIgNADIAYA5IACAfIh+AAIgBABQgSAAgHgQg");
	this.shape_52.setTransform(-82.1,127.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAyTuQgCggAHgfQgLgBgJgGQgJgagEgeQgLhAAChCIAFgqIAAjhQABg3gBg3IAAgUIAFglIgFgqIAAkAIgFAAIAAA0IgFAgIAAAaIgKBUIAAAkIgFAaIAAAgIgFApIAAAlIgFAqIAABEIgGAkIAABJIgFAgIAAAvIgFAkIAAAvIgRCIIgPAnIgPADQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgOgDIgXhmIALhEIgLg5IAAjRIAFg6IAAnRIAGg5IgOgaIgCgvIAFglIAAh3IALheIgGAAQgHgSAGgTIAGgfIALggIAAgaIAFgaIgFgfIAAgqIgMhoQgNg3gGg3IgFAAIgKAfIgBAaIgMBBQANAbAKAcQgHARgNAKQgOAYgDAcQgWAGgUAIIgvAGQgXgBgTgNQgWgLgTgQQgRggABgkQAFgTAJgSIAMgfIATgfIAIgaIAig/IAbg/QAOgcALgdIAIg1QAFgNAJgNQAKgSANgRQAOgKAQgJQAZgQAbgMIA1gIQAdgMAXgWIAVgRQAGgRgGgTIgQhPQAAgSADgSIgCgaIAKgaQACggAIgfQAqg0BDgGQAmAGAjARQAhAoAJA0IgEAgIAIAVQABAPgCAQQgEANgGANIgYAWQgNAbAEAdQASAOAWAOQARARATANQAPAEARABIAaAFIAaACQAQAHAPAKQAfAQAZAXIASAkQALARAEAUIAAAlQAHAtARArIATA/IASAlIAIAfIASAlQAEAXgBAYIAEAPIAAAVQgfBChJAZQgfAMggAHIgfAAIAGA0IAHAQIANBJQgIAAgGAGQgEAUAFAVQADASgBATIgFAfIAABDIgFAaIAAAqQACAdgJAaQgHACgHAAIAACdIgQCdIAAA+IgFAgIAAAvIgFAqIAAA5IgGAqIgFCIIgFAfIAAA0IgQA/IAGAlIgMBEIgMAsIgNADIAYA5IACAfIh9AAIgCABQgSAAgGgQg");
	this.shape_53.setTransform(-81.9,127.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAyTuQgCggAHgfIgUgHIgNgyIgJg/IAAhUIAFgqIAAlTIAEggIgEgpIAAkVIgFAAIAAA0IgFAfIAAAgIgKBeIAAAVIgFAaIAAAkIgFAlIAAAvIgFAlIAABDIgGAqIAABEIgFAgIAAA0IgFAqIAAApIgRCIIgPAnIgPADQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgOgDIgJgiIgMhOIAJg1IgLg0IAAj7IAFgpIAAnHIAGg0IgOgXIgCg9IAFglIAAh8IAFg/IgIgRIADgeIAVhOIAAhjIgFglIAAgVIgainIgFAAIgLAlIAAAkIgMAsIAVA9IgSAbIgRAzIg/AQIgfAAQgagFgVgPQgOgHgMgKQgVgfAAglQAKgmASgjIAQgaIAOgqIAYgqIAlhTQALgXAJgYIAJg6IAMgVQAMgVAQgTIAqgYQAPgKAQgIQArgFApgOIAagYQANgKAKgLQAAgSgGgTIgQhDQAAgTAEgSIgDgfIAIgaQACgnAQgjQAVgZAdgPIAugHIAaAGQAfAFAaARQAdAnAIAwIgCAgQACAHAEAFIACAOQAAAbgNAZIgWAWQgJATABAWQASAgAjAVQAMALAOAJQAPAEARABIAaAFIAaACQAQAIAPAKQAYANAXAQQANAQAJATQANAYACAcIAAAgQAKAqAQApIARA6IAXAvIAIAkIASAgQAEAXgBAYQADAUABAVQgfA5g/AXQgkARglAIIgfAAIAAAfQADATAIASQAGAXADAYQABAMgCAMIgIAMIgBAVQACBCgCBAIgFAqQACAsgCAtQgFAPgQAAIAACTIgLBOIAAAkIgFAqIAAA/IgFAfIAAA1IgFApIAAA6IgGAfIAAA/IgFAkIAAAwIgFApIAAAvIgQA/IAGAlIgMBEIgMAsIgNADIAYA5IACAfIh9AAIgCABQgSAAgGgQg");
	this.shape_54.setTransform(-81.9,127.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAxTrQgBggAHgeIgUgIIgOgyIgIg/IAAheIAFgqIAAqxIgFAAIAAA0IgFAfIAAAgIgGAkIAAAVIgJBUIAAAqIgFAfIAAA0IgGAlIAAA+IgFAqIAABJIgFAqIAAAqIgFAfIAAA1IgRCNIgQAnIgOADQAEAZABAbQABATgRAHIiIAAQAFgvAWgqIgOgDIgXhlIAKg/IgKg0IAAkVIAFgqIAAlUIgDgfIADgaIAChEIADgQIgTgfIACgQIAChOIAFglIAAhdIAFg0IgKgaIALg6IAJgVIAGg0IAAg0IgFgfIAAggIgLhEIgCgaIgNhOIgGAAQgGAPgEAQIAAAlIgMArQANAiAHAgQgKATgNASQgHAVgLASIgZAKQgMAFgOADIgPgBQgQABgQgBQgRgHgOgLIgegTQgOgVgHgYQgBghANgeIAfg/IAJgaIAYgvIAchEQAUglAOgpIAIg0QALgZAQgWQANgOAQgJQAbgTAfgOQAlgFAkgJQAfgZAggUIgJgaIgGggQgIgfgDgfIAAg1IAFgvQAMg4AtgjQAfgJAfABQA1AFAnAlQARAiAGAnIgDAaQAFALAHAKQAAAVgGAVIgKAVIgWAVQgKAaAIAaQAOAMARAKQATATAXAPQAbAIAeAEIAaABQATAIASALQAfARAZAaIANAaQAMAVADAaIAAAkQAMAwARAuQAHAdALAdIATAkIAIAgIASAkQACANAAANIAAAVQAEAVAAAVQgGAOgKAMQgOAQgQAOQgcANgeAKQghAPgjAFIgfAAIAFAqIAJARIAMBDIgKAaIAACDIgGAoIAABuIgSAWIgCAZIAABpIgGAfIAAAVIgFAaIAAAfIgFAqIgQElIAAA5IgFAqIAAAqIgFAfIAAA/IgQA/IAFAkIgLBEIgMAsIgNADIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_55.setTransform(-81.9,127.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAzTrQgBggAHgeIgUgIIgOgyIgIhuIAAg5IAFgqIAAqyIgFAAIgLCoIgJBeIAAApIgFAbIAAA5IgGAfIAABEIgFAaIAABUIgFAqIAAAvIgFAfIAAA6IgRCNIgQAnIgOADQAEAZABAbQABATgRAHIiIAAQAFgvAWgqQgIAAgGgDQgGgQgDgSQgNguADgwQAFgSABgSQgGgdgEgdIAAjGQgCg1ACg0IAFgpIAAi9QABgtgBgrIgFgbIAAgkIAFglIAChEQACgHgBgHQgKgJgIgSQABgdAEgdQgCgtACgrIAFgkIAAhEQADgOABgMQgGgKgDgQQADgWAFgUIAEgUIAJgRIAAgVIAFgkIgLiIQgMhEgIhEIgGACQgMAfACAjQgIAZgBAbQAMAaAFAaQgJAWgOAUIgRAqQgQABgPAIIgVABQgbABgZgCQgUgKgRgNQgOgKgMgNQgOgeAAggIAMggIAEgPQAKgWANgUIASgvIAYgvIASgvQARgiAPgiQAGgdAEgdQAOgnAaghQASgNATgKQAUgOAWgJQAngGAngLQALgJAKgLQANgKAMgMQAGgQgGgQIgShDQAAgZACgXIgHgUIAJgbQABgiAKghQAsg1BFgFQAkAFAgASQAcAhAJArQADANACANIgGAbQAIAAAGAGQABAigQAhIgSAQQgFAJgCALQAAATADARQARANAWAPQASATAYAMQAZAGAbAEIAaABQAWAKAUANQAWAMAUAQQANARAJAUQANAYACAcIAAAkQAJAoAPAnIAOAvIAWAvIAJAkIASAgQAEAPABAQQAGAugLArQgoAng1ASQghAOgjAHIgfAAIAGAvIAJAVIAJBHIgOACIAGBzIgGApIAACDIgUAkIAABpIgQCSIAABPIgFAkIAAAvIgGAqIAABEIgFAkIAAA6IgKB9IAAA6IgQA5IAFAqIgLBEIgMAsIgNADIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_56.setTransform(-82.1,127.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AA0ToQgCgfAIgfIgUgHIgJgeIgNhZIAAjGIAFg6IAAmiIgFgpIAAhEIgGAAIAAA0IgFAfIAAAgIgFAkIAAAVIgEAqIAAAfIgGAaIAAA/IgFAlIAAA5IgFAaIAABUIgFAqIAAA0IgFAfIAAA6IgUCXIgNAiIgPADQAFAaABAaQABATgRAHIiIAAQAEgvAWgqIgNgCIgXhrIAKg6IgKgvIAAnRIAFglIAAhYIgFgvIAAhZIAKheIgOgHIgGgZIAEg+IAAh3IALhfIgPAAIAahoIAAgaIADgaIgOiiIgVhpIgFAAIgFAaIAAAqIgLAqIAJAaIAHAqIgQAfIgQAvQgVAFgUAJQgPACgNgCQgSACgRgCQgUgJgQgOQgOgIgLgKQgQgagHgeQADgQAGgQIANgkIAXgqIAOgqIA3h4QAQgkAKglIADggQAHgTALgRIAOgZQAQgOATgKQAYgRAcgLQAigFAigJQARgKAOgOIAVgRQAIgTgIgWQgNgpgDgqIgFglIAFgqQAIhFA3goQASgFASAAIAuAAQBAAaAUBEIAEAfQgCAHABAIQAGAGAGAKQAAAngVAgQgHADgIgBIgEAgQAMAnAnAYQAPAPARALQAPAEAQABIAaAFIAaACQAQAHAQAKQAYANAXAQQANAQAIAUQANAYAIAcIAAAfQAHAwARAuIAOAvIAWAvIAJAgIARAkQAEAYAAAXIADAQIAAAVQgfBBhJAZQghAOgjAGIgaAAIABAkIANAlIAMA+IgNAMIADA4IgGAvIAABYIgFAaIAEAvIgHAfIgKAMIgCAZIAABeIgLBPIAAAVIgFApIAAA/IgGAlIAAA5IgFAqIAAA5IgFAlIAABEIgFAlIAAAvIgFApIAAA/IgQA6IAFApIgLBEIgMAtIgNACIAYA6IACAfIh+AAIgBAAQgSAAgHgQg");
	this.shape_57.setTransform(-82.2,127.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAyTmQgCgfAHgfIgUgHIgIgeIgOhTIAAjsIAFgpIAAluIgFgqIAAhzIgFAAIAAA0IgFAgIAAAfIgFAlIAAAaIgKBjIAAA/IgFAaIAAA/IgGApIAABKIgFAaIAABJIgFAkIAAA1IgFAaIAAAkIgLBPIgMAoIgTAHQAEAaABAaQABATgQAHIiIAAQAEgvAWgqIgOgCIgWhhIAKhEIgLg/IAAnbIAFgfIAAg1IgFgpIAAh+IAFg/IgOgWIgBgzIAFgqIAAh8IAFhEIgJgRIALhCIAOgvIAAhZIgFggIAAgaIgaiiIgGAAIgFAaIAAAqQgGAXgDAYQAKAiAEAiQgEAPgJALIgLAaIgEAUQgJAGgKACIgPAHIgbACIgaAFQgcgHgYgRQgQgLgOgNQgQgfgBgkQAFgVAJgVIAOgkIAMgVIADgQQATgqAVgpIAqhpQAHgXAEgYIABgVQAFgOAJgMQAKgWARgSIAqgYQAOgKARgIQAlgFAkgJIA/gtQgLgXgHgYQgJgagFgaIAAgaQgEgTgBgSIAFgvQAGgoAWghQAUgSAagHQBIgKA9AoQATAlAGApIgCAVQAHAKAIARQAAAbgKAZQgWAWgGAfQABAKADAJQAZAYAeAUQAMALAOAJQAnAIAnAEQATAHASALQAYANAWAQIANATQAUAfAFAlIAAAfQALAwASAuIAJAlIAcA5IAIAlIASAfQACALAAAKIAFAvQgHAygoAgQgXALgYAIQgkARglAIIggAAIAAAkQACANAHAKQAFARACASIAFAaQgBARgIAOIgBAVQACBHgCBFIgFAqQABAngBAnQgFAPgQABIAFAqIgFA0IAABEIgLBeIAAA0IgFAlIAAA/IgFApIAAA6IgGAkIAABPIgFAkIAAAvIgFAqIAAA/IgQA/IAGApIgKA/IgOAyIgNACIAYA6IACAfIh9AAIgCAAQgSAAgGgQg");
	this.shape_58.setTransform(-81.9,128.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AiUT7IgVAAIgagJQgQgDgPABIAAgaIAag5IgOgIIgWhhIAKhEIgLg5IAAoGIAFgkIgFgqIAAiNIAFg6IgOgWIgBhSIAFgqIAAhtIAFg0IgKgaIANg/IAIgVIAFheIgFgkIAAgaIgaitIgGAAIgFAaIAAAvIgJAqIAOBEIgfBUQgUgBgRAJQgNADgNgBIgaAAQgegGgWgUIgZgVQgMgWgFgZQgBgQADgPIAMgaIAIgaIARggIAKgfIAXgvIAYg/QASgnAPgnIAJg/IAMgVQAIgQAKgPQAMgKANgIQAbgTAfgOIA5gJQAkgQAbgdQAIgSgIgSQgOgkgHglIAAgVIgFgaIAFgqQAAgbAHgaQAfgxA4gNIAzAAQBHAiANBRQAAAKACAKIALAMQADAPAAAPQgEATgHASQgPAQgJAVQAHAkAhAXQASARATAPQAMAEAOADIAkAGQATAAASAGIAfASQAcAQAXAXQAOAaAMAaQACAXAAAYQAHAtARAsIAOA0IAcA6IAEAaQAMAWAKAZIACAqQAEARABATQgLAbgVAUQgrAcgzAQIgaAMQgaACgagGIAFAgIABAVIAIAMIAMBHIgJAVIgBCDIgFApIAABtIgTAWIgCAZIAAB+IgLBOIAAA6IgFApIAABEIgFAlIAAA/IgGApIAABEIgFAqIAAAvIgFAlIAABJIgQA/IAGApIgKA/IgOAyIgNACIAYA6IACAfIh9AAQgUABgGgRQgCgfAHgfIgUgHIgIgeIgOhZIAAkAIAFgpIAAk6IgFgqIAAiXIgFAAIAAA5IgFAgIAAAfIgFAkIAAAVIgFAqIAAAgIgFAaIAABJIgFAkIAAAvIgGAgIAABEIgFA0IAAA/IgFApIAAA1IgFAfIAAAvQgGAlgIAkIgEAVQgLAQgLAKQgBAKADALQACATgDASQgZAVgkAAIgKAAg");
	this.shape_59.setTransform(-81.9,128.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDgCIgBgaIAJA5g");
	this.shape_60.setTransform(-105.2,226.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AiXT3IgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgXhsIALg0IgLg/IAArxIAFgvIgSgUIgBgVIAEglIAAhiIAFggIAAhDIAEggIgHgMIgCgTIAMg4IAJgRIAAgVIAFggIgKiHIgViIIgFAAIgGBEIgIApIAOBEIggBZQgRgCgOAGIgaABIggAGQgdgKgXgVQgNgKgLgMQgVhNAmhKIAYg/IAXgvIAqhuIAOhJQAMgcASgYQAUgQAVgMQAUgNAWgKQAogGAngLQALgJAJgLIAUgQQAHgTgKgSQgMgcgFgeQABgPgCgQQgLgVAHgVIAFAAQgGgXABgYQAIgoAYgfQBQglBRAfQAkA2AABBIAQAAQABAjgIAhQgPASgKATQAAAPADAQQAWAWAcAVQASASAXAKIAwAHQASAAASAGIAvAdQANAHAMALQAKAPAIAQQANATAHAXIAAAkQALBAAWA+QANAgAPAeIAIAlIAUAlQADAMAAAOQAFAngFAnQgMAUgRARQgXAOgZAIQg7Acg9gDIAHA5IAHAQIAMBJIgOAKIAEAbIAABDIgFAlIAACRIgTAbIgCAaIAABzIgFAaIAAAaIgGAfIAAAvIgFAqIAABJIgFAqIAAA5IgFAqIAABPIgFAkIAAA0IgGAqIAABEIgPA6IAFAvIgKA+IgOAyIgNADIAZA5IABAfIh9AAQgTABgHgQQgCggAHgfIgTgHIgJgeIgOheIAAkKIAFgqIAAkKIgFgqIAAjHIgFAAIAAA6IgFAfIAAAlIgEAkIAAAaIgGAbIAAAfIgJBTIACAlIgDAfIAAAqIgFAlQABAqgBApIgGAqIAAA/IgFAkIAAA6IgFAqIAAAkQgFAlgJAkIgDAVQgMAQgKAKQgBALACAKQACATgCATQgaAUgkAAIgKAAg");
	this.shape_61.setTransform(-81.7,129);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AiST4IgVAAIgagJQgQgCgPABIAAgaIAag6IgOgHIgXhsIALgvIgLg0IAAqNIgFggIAFg0IAAg/IAFgaQgIgBgGgFQgIgnAHgsQgDhGADhGIAFgaQABgagGgYIgFgCIAah9IAAhZIgGggIAAgVIgaiSIgFAAIAAA/IgIAqIANBEIgaBYQgTADgRAGQgXADgYgBQgOAAgNgCQgRgKgOgNQgQgNgOgOQgQghABgjIAUg6IARgfIAUg6IAcg+IAlheIALhEQAHgRAJgPIANgYQAQgOATgKQAWgQAZgMQAkgGAlgIQAcgWAdgSIgdhUIgCgfQgLgbAGgZIAFAAQgHgVACgVQAThJBGgbIAzAAQAeAFAZASQAZAmAMAsIgDAfQAGAAAHADQAIAVgFAXQgCAOgFAMIgRAWQgJAaAQAYQAUASAWARQAPANARALQAPAFAQAAIAaAGIAaABQAQAIAQAKQAYANAXAPQANARAIATQAOAYABAcQAGA4ATA2IATA/IASAkIAOAvIARAgQADAXAAAYIAEAkQgLAngfAbQgaALgaAJIg1AWQgOACgMgDIgVABIgFgDIAAAkIAVBUIgKA0IAFAvIgFAgIAABiIgGAaIAGA6IgTAaIgCAaIAABoIgGAaIAAAbIgFAfIAAAkIgFAqIAABUIgFAkIAAA6IgGAqIAABTIgFAqIAAAvIgFAqIAABOIgQA/IAEBEIgTBOIgIAVIAQAvIACAgIh9AAQgUAAgGgQQgCggAHgfIgPgCIgNgiIgOheIAAlKIAFgaIAAhEIgFgfIAFgqIgFgfIAAkvIgFAAQgHB9gIB+IgFApIAAAgIgFAfIAABJIgGAvIAABZIgFAqQABAigBAiIgFAkIAAA6IgFAqIAAAqQgGAkgIAlIgEAVQgMAPgKALQgBAKADALQACASgDATQgZAVgkAAIgKgBg");
	this.shape_62.setTransform(-82.1,128.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AiRT4IgVAAIgagJQgQgCgQABIABgaIAZg6IgOgHIgWhsIAKgvIgNg/IADgkIAApJIgGggIAAg+IALhkIgTgHIgCgyIAGglIAAiWIAEgvIgKgaIAMg6IAIgVIAGg0IAAg0IgFggIAAgfIgaiYIgFAAIAAA/IgHAlIAKAkIACAgIgaBeIhZAKQgbgGgVgSQgTgPgPgSQgMgagFgbQAFgVAIgUIAJggIASgfIAIgfIAdg/IAphuQAIgXAEgYIACgaQAMghATgeQALgKAOgHQAbgUAegNQArgFApgOQARgOAOgQQAEgrgUguQABgQgCgPQgNgYAEgXIAFAAQgFhNA0g5QApgNAqAAQA/ATAdA8IAIAvQAIALAHAPQgCAmgQAhIgOACIAAAgQANAaAYARQAbAbAkARIAqAHQASAAASAFQAVALAVANQAWAOASATIANAaQAOAVABAaIAAAlQAJAnAPAnIAOAvIAcA/IAJAfQAMAZAHAcIAFAvQgGAxgpAgQgXALgYAJQgjARgmAFIgkgDIAFAaIAAAVQADAKAFAHQAFAUACAUIAGAbQgDAOgHAMIgBAVQACBGgCBGIgFApQACAogCAnQgFAPgQAAIAFA6IAABEIgFAfIAAAVIgFAaIAAAlIgGAkIAABeIgFAbIAABEIgFApIAABZIgFAaIAAA/IgFAqIAABTIgQA/IAFAvIgHAvIgNA0IgJAVIARAvIACAgIh+AAQgTAAgHgQQgCggAIgfIgUgGIgJgeIgNhZIAAl4IAFgqIgFglIAFgkIgFgvIAAiyIgGgaIAAglIgFAAIAAA/IgFAfIAAAgIgEAkIAAAgIgGAaIAAAfIgFAqIAABJIgFAqQABAsgBAtIgFAqQABAkgBAlIgFApIAAA6IgGAfIAAA1QgFAkgJAlIgDAVQgMAPgKALQgBAKADALQABASgCATQgaAVgkAAIgJgBg");
	this.shape_63.setTransform(-82.2,128.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AiST4IgVAAIgagJQgQgCgPABIAAgaIAag6IgOgHIgXhsIAJg0IgMg6IADgfIAAo0IgFgqIAAhjIAFg/IgOgXIgBhMIAFgqIAAiMIAFgaIgKggIAMg9IAIgRIAAgVIAGg0IgGgqIAAgfIgFgbIgHhJIgOhEIgFAAIAAA/IgHAlIALApIABAgIgVBZIgUAAIgbAKQgdACgcgCQgYgIgSgSQgQgPgOgQQgMgeAAghQANgxAWgtIAOgqIAcg/IAIgfIAchEQAIgcAFgdIABgVQAGgOAHgMQAIgRAKgPQATgQAWgMQATgNAXgJQAqgHApgNIAkgiQgCgcgPgeIgJg5IgKgaQABgTAEgSQgBgoAOgmQAhgmAxgKIAUgFIAaAGQAfAFAaAVQAUAcAKAjIACAfIAMAQQAGAXgDAYQgXAogBAqQAXAWAbAVQAMAMAOALQASAGATACIAaAGIAaABQAVAKAVANQAWAMAUAQQANARAIATQAOAYABAdIAAAkQAGAbAKAZIAWBKIAXAvIAJAkIARAgQAFAPABAPQAIAugOAsQgQASgSAQQgkAQgmAMQgRAJgTAFIgvgDIAUBoIADAoIgNACIAGA6IAABTIgGApIAABuIgUAaIAFAkIgGAwIAABOIgKBeIAABeIgFAfIAAA/IgGAqIAABeIgFAkIAAA6IgFAqIAABTIgQA/IAGAvIgKA6IgOAxIgNADIAYA5IACAgIh9AAQgUAAgGgQQgCggAHgfIgUgGIgIgeIgOhUIAAmXIADggIgDj1IgFggIAAhTIgFAAIAAA+IgFAgIAAAkIgFAlIAAAaIgFAqIAAAkIgFAgIAAA5IgGAqQACAygCAxIgFAqQABAngBAnIgFAqIAAA/IgFAfIAAA1QgGAkgIAlIgEAVQgLAPgLALQgBAKADALQACASgDATQgZAVgkAAIgKgBg");
	this.shape_64.setTransform(-82.1,128.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ah3T2IgvAAIgagJQgQgDgQABIABgaIAZg5IgOgHIgWhsIAIgvIgFglIgJgfIAGgvIAAiSIgGgbIAGgvIAAh9IgGgaIAGhJIAAhJIgGgqIAFiyIgCgUIgRgWIAEgpIAAiHIAKhzIgPAAIAMg/IAOgqIADgvIgDhEIgai8IgFAAIAAA/IgHAkIAMA6IgaBuIhZAKQgfgJgVgWQgRgQgNgQQgNgeABggQADgOAFgMIAOgqIAMgVIAziNQASgqAPgqIACgaQACgVAFgVQAOgfAVgaQAMgKAOgIQAWgQAZgMQAkgFAlgJIA6gnQgQgigOgiIgCggQgNgeADgbIAFAAQgFhVA+g3QAigIAiABQAUABAVAGQAmAeASAvIAIAlQAIANAHASIAAAVQgFAVgIAUQgOANgFATQAKAaAWATIAaATQAOAOARALQAPAEAQABIAbAFIAaACQAQAHAPAKQAbAPAYATQAKAOAIARQASAnACAtQAFAnAOAnIATA/IAXAvIAIAfQAMAZAIAbIACAaQAGAfgGAgQgOAXgUASQgZANgbAKQghAOgjAGIgqAAIACAvIAMAfIAMA/IgNALIADBdIgFAgIAACbIgTAbIgCAaIAACCIgFAaIAAAaIgGAgIAABZIgFApIAAA/IgFAqIAABjIgFAqIAAA0IgFAqIAABeIgPAvIgBAlIAFAaIgXBsIgGAMIARAvIACAfIh+AAQgTABgHgQQgCggAHgfIgTgGIgJgfIgNhYIAAqIIgGgqIAAh4IgFAAIAAA+IgFAgIAAAkIgEAlIAAAaIgGAqIAAAqIgFAaIAAA+IgFAqIAABZIgFAfIAABpIgGAqIAAA+IgFAqIAAAvIgOBJIgNAiIgPADQAEAeAAAfIgCAMQgSAQgZAAIAAAAg");
	this.shape_65.setTransform(-82.2,129.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AiRT2IgVAAIgagJQgQgDgQABIABgaIAZg5IgOgIIgWhrIAIglIgOhOIAGgqIAAiDIgGgqIAAg0IAGgqIAAg+IgGgqIAAhJIAGg1IgGg0IACjBIADgQIgOgRIgGgOIAAgVIAFglIAAiMIAGhJIgJgRIAYiGIAAhEIgFggIAAgaIgViNIgFAAIAAA6IgHAmIAOBCIgGAfIgWBKQgIgDgIAAIgaAIQgaABgagBQgcgKgTgWIgUgQQgUgigCgmQAFgTAHgQIAEgXIATgkIAOgvIAkheQAPglANglIAJg5QAHgZALgWQAFgNAIgMQAQgOATgKQAWgQAZgMQAlgFAkgJQAcgWAegSQgNgXgJgYIgIgPIgCggQgNghADgdIAFAAQgHgcACgeQAOgvAmgfQAogMAsABQAUAEAUAHQAjAgAQAuIACAfIATAbQACAPgEAQQgDAVgLATIgOACIAAAaQAXAoAoAdQAQAPAVAIIBDAJQAcALAZARQASAKAQANQASAbAOAeQACAWAAAZQAJA1AUAzIAJAlIAcA5IAIAlIASAfQACASAAATQAEAZABAbQgNAjgdAZIhoAnQgeABgcgGIAGAvIAIAXIAMA9IgJAfIgBC7IgEAlIAEAaIAAAaIgTAbIgCAZIAAB4IgLBfIAAA+IgFAlIAABTIgFAqIAABkIgFAkIAAA/IgFAfIAABuIgOAvIgCAkIAFAbIgXBrIgGANIARAvIACAfIh+AAQgTABgHgRQgCgfAIgfIgPgDIgOgiIgNheIAApuIgGgpIAAidIgFAAQABAigBAiIgFAfIAAAlIgEApIAAAbIgGApIAAAlIgFAfIAABEIgFAqQABAqgBAqIgFApQABAvgBAvIgFAqQABAigBAiIgGAlIAAA0QgFAlgJAkIgDAVQgMAQgKAKQgBAKADALQABATgCASQgaAVgkAAIgJAAg");
	this.shape_66.setTransform(-82.2,129.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AiST2IgVAAIgagJQgQgDgPABIAAgaIAag5IgOgIIgRhCIgGgpIAIgqIgEgqIgJglIAFg+IAAhJIgFgqIAAnRIgFglIAFgfIAFheIgTgHIgCgZIAGg+IAAihIAFggIgLgkIAMg9IAJgSIAFhTIgRinIgJgvIgFAAIAAA0IgHAhIAFAOIAAAMIALAzIgZBeIgRgCQgcAIgcAEIgqgHQgQgKgLgPIgXgVQgWgkABgqQAIggAMgeIANgaIAOgvIAXg1IATg5QASguALgwIAAgVQAOguAcgkIAggTQATgOAWgJQArgHApgNQALgIAKgKIAPgQQAEgOgIgMQgLgXgFgYQgBgSgFgSQgJgSgEgTIAHgVIABgqQAKgsAgghQAqgQAvgBQAfAHAdAQQAiAzAEA+IAQAAQABArgNAnIgOACQgCASACASQAWAdAeAXQAQARAVAKQAZAHAbADIAaACQAVAJAVANQAWAMAUAQQAMARAJAUIANAaQADAXgBAYQAIAwASAuIAMAvIAcA6IADAUQAMAaALAbIABAfIAGAaQgHAxgoAhQgeAOggAKQgZALgcADQgVAAgUgFIAGA6IAIAVIAMA+IgKAVIgBCcIgFAqIAABTIgNAWIgDAZIAABuIgFAaIAAAaIgFAgIAAA+IgFAqIAABZIgGAfIAABpIgFAfIAABPIgFApIAABpIgQA/IAGAvIgKA5IgOAyIgNACIAYA6IACAfIh9AAQgUABgGgRQgCgfAHgfIgPgDIgNgiIgOheIAApZIgFgqIAAjBIgFAAQABAigBAiIgFAfIAAAqIgFAgIgKCcIAAA/IgGAlIAABEIgFA0QABA0gBA0IgFAqQABAigBAiIgFAlIAAA5QgGAlgIAkIgEAVQgMAQgKAKQgBAKADALQACATgDASQgZAVgkAAIgKAAg");
	this.shape_67.setTransform(-82.1,129.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AiRT2IgVAAIgagJQgQgDgQABIABgaIAag5IgPgIIgWhrIAIgqIgNhjIAFglIgFheIAAnWIgFgbIAFiNIgOgWIgCg4IAFg0IAAicIAEgaIgHgMIgCgTIALg1IAKgaIADg5IgIh4IgQhuIgFAAIAAAvIgHAhIAFAOIAAAMIAMAtIgfBpIgLgLIgFAAIgCAGQgdALgfgBQgngGgageQgYgagOggQgDgdAKgcIBXjxQAJgXAIgYIAJhEIANgaQAHgQAKgPQAUgQAVgMQARgOAUgJQAqgGAqgLQALgKAJgLQANgKAKgLQAAgLgGgKQgKgUgGgWIgIgpQgHgQgFgQQACgOAGgMIABgVQAEg4AmgqQAegMAhgFIAUAAQAdAFAcAMQAQAPALAUQASAoACAsQAFgEAIAFQADAJAAALQgBAggMAcQgHACgHABIgBAkQAIAQAOAKIAlAgQAPAPAWAJIBJAJQAQAHAPAKQAbAOAYATQAKAPAIARQAQAXAEAdIAAAqQAIAiANAiIARA5IAcA/IADAVIASAkQAFAaACAbQAFAUgCAVQgiA0g6AWIgvATIgfABIgggFIACAvIAMAgIAMBDIgNAMIADB8IgFAkIAABuIgCAYIgTAHQAIBAgDBDQgHAugDAwIAAApIgGAqQACAygCAyIgFApQACAvgCAvIgFAgIAABTIgFAqQACA3gCA3QgJAfgHAgIAAAUIAFAbQgDAhgJAjIgKAnQgEAEgDAJIARAvIACAfIh+AAQgTABgHgRQgBgfAHgfIgUgHIgIgeIgOhZIAApEIgFgpIAAheIgGg/IgFAAQABAigBAiIgEAfIAAAlIgFAaIgHB/IABAjIgFAkIAAA/IgFA6QACA0gCA0IgFAqQABAkgBAlIgFAlIAAA5QgGAlgJAkIgDAVQgMAQgKAKQgBAKADALQACATgDASQgZAVgkAAIgKAAg");
	this.shape_68.setTransform(-82.2,129.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AiPT2IgVAAIgagJQgQgDgPABIAAgaIAag5IgOgIIgXhrIAGggIgLhZIAFheIgFgpIAAnRIgFgqIAAhZIAFg6IgNgWIgDgZIAAiwIAGhPIgJgWIAYiBIAAhPIgFgfIAAgaIgQhuIgFAAIAAAlIgHAhIAFAOIAAAMQAHATAGAVQgFAogPAmIgHAgQgfABgfAHQgeABgcgLQgQgOgPgQQgagegLglQABgWAGgUIAFgJIAFgXIASgpIAOgvIAXg1IAVg+QAMggAIgfIAJhEQAMgcASgYQARgPATgLQAUgPAWgKQArgFApgOIAsgpQgCgTgKgRQgLgfgHgfIgNggQABgQAHgPIABgVQAAggAMgfQAwgxBHgDQA+ATAdA8IAIApIAMARQADAJAAALQgBAggMAcQgGACgHABIgEAkQAFAJAIAIQAVAUAWARQAPAOAQALQAnAIAoAEQAbALAZARIAfATQANAQAJATQANAYACAcIAAAfQAJAoAPAnIATA+IATAlIANAvIARAfQAEAVABAVQAFAfgFAgQgiAsg1ATQgmAQgoAEIglgFIAGAvIAIAXIANA9IgLAqIAFAvIgFA5IAAChIgSAbIgDAPIAABEIAFAfIgFAfIAAAbIgFApIAAAgIgFAkIAABuIgGAqIAABZIgFAqIAABTIgFAqIAABuIgQBEIAGAvIgKA5IgOAyIgNACIAYA6IACAfIh9AAQgUABgGgRQgCgfAHgfIgUgHIgIgeIgOhTIAAoqIgFgqIAAhzIgFgaIAAg/IgGAAQABAlgBAkIgEAgIAAAkIgFAqIAAAlIgJBeIAEAaIgGAqIAAA+IgFAqQACA6gCA5IgFAqQABAigBAiIgFAqIAAA5QgGAlgIAkIgEAVQgLAQgLAKQgBAKADALQACATgDASQgZAVgkAAIgKAAg");
	this.shape_69.setTransform(-82.4,129.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AiPT2IgVAAIgagJQgPgDgQABIABgaIAZg5IgOgIIgXhrIAGggIgLhZIAAgpIAEggIgEgqIAAnRIgFgpIACiTIACgaIgUgfIAGg6IAAimIAFgvIgLgaIAMg5IAIgVIAGheIgUi9IgGAAIgBAlIgGAcIAGAOIAAAMIAMA4IgVBeIgXgCIgOAGIgfAGQgbAAgZgIQgOgKgMgNQglgngKgyQAFgVAHgTIAFgcIARgkIAOgvIAXg1IARg5QAOgiALgiIACgfQAFgiAOgdIANgaQATgQAWgMQATgOAWgJQAsgFAogOQAOgMAMgMQAKgLAIgKQgDgYgNgXIgcheQAIgJAIAJQgJhTA4g6QAjgKAmgBQA6ALAhA0QAHASAEASIACAVIAMARQADAHAAAIQAAAjgMAfIgOACIgEAkQAUAdAfAXQAMANAOALQASAGATACIAaAFIAaACQAVAJAVANQAWAMAUAQQAMARAJAUQANAYACAcIAAAfQAKAqAQAqIAXBEIARAlIAJAfQAKAUAHAWIACAfQAEAXABAYQgeA5hAAXQglARgpACIgfgFIAFAlIABAVIAHAMIANBCIgKAaIgBEUIgSAbIgDAPIAACSIgFAaIAAAlIgFAqIAABtIgFAqIAABZIgFAqIAABZIgGApIAAB5IgPBEIAFAvIgKA5IgOAyIgNACIAZA6IABAfIh9AAQgTABgHgRQgCgfAHgfIgTgHIgJgeIgOhZIAAoFIgFgqIAAhzIgFgfIAAhpIgFAAQABAlgBAlIgFAfIAAAqIgFAqIAAAfIgFAqIAAAkIgFAaIADAgIgDAfIAAA/IgGAqQACA5gCA6IgFApQABAogBAnIgFAkIAAA/QgFAlgJAkIgDAVQgMAQgKAKQgBAKACALQACATgCASQgaAVgkAAIgKAAg");
	this.shape_70.setTransform(-82.5,129.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AiPT0IgVAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgXhsIAHgjIgBghIgLg/IAAokIgFgqIACjBIgQgSIgCgOIAAgVIAGg0IAAirIAFgaIgJgSIgCgTIAMg4IAJgRIAAgVIAFgfIgKiIIgKhUIgGAAIgBAgIgGAbIAGAOIAAAMIAMA+IgVBeIgagBQgmAHgpgDQgYgLgRgTQglgmgKgyQAFgYAIgXIAJggIAMgVIAJgkIAchEIAJglQAYhAALhCQAFgfAOgbQAHgOAKgLQASgNATgLQARgNATgJQAqgGAqgMQANgLANgNQAPgMANgNIgEgNQgFgRgIgPQgVgtgLgxQAIgIAIAIIgFgkQAAgOADgMQAHgjAVgcQAQgOAUgGQBGgMA7AgIAMAVQALATAIAXQACAUgBAVIAQAAIAAAqQgCATgGASIgQAQQgJAaAMAYIAqAhQAOAOARAMQAPAEARABIAaAGIAaABQAQAHAPALQAZAMAWAQQAfAoALAwIAAAgQAFAgALAeIAWBKIAXAvIAJAkIAVAqQACAVAAAVQAFAUABAWQgRAigeAaQgWAMgZAIQgcAMgdAHIgVAAIgfgFIABApIAMAlIANBEIgQAFIAFBEIAABjIgFApIAAAgIAFAvIgSAaIgDAaIAAB4IgKBjIAABzIgFAqIAABOIgFAqIAABuIgGAqIAAB9IgOAvIgBAqIAFAaIgXBsIgGAMIARAvIABAgIh9AAQgTAAgHgQQgCggAHgfQgIAAgHgCQgNgZgFgeQgLhTAChUIAAlEIgFglIAFglIgFgpQACg6gCg5IgFgqIAAiIIgFAAQABAngBAnIgFAlIAAAqIgFAqIAAAfIgFAaIAAA6IgFApQABAygBAyIgGApQACA/gCA/IgFAqQABAngBAnIgFAlIAABEQgFAkgJAlIgDAVQgMAPgKALQgBAKACALQACASgCATQgaAUgkAAIgKAAg");
	this.shape_71.setTransform(-82.5,129.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhyT2IgvAAIgagJQgQgCgQAAIABgaIAZg5IgOgHIgWhsIAFgaIAAgqIgLg6IAAmSIgDgfIADggIAAhEIgFgpIAAg/IgFgqIAFgfIAAhJIgPgaIAAgvIAFgqIAAhoIAFhoIgQAAIAah+IAAhZIgFgfIAAgaIgKhZIgFAAIgHA2IAFAOIABAQIAJAVIACApIgVBZQggACgfAHQgNAAgNgDIgVgCQgagRgVgXQgbghgJgoIAGgbQAHgdAJgcIAMgVIAOg0QASgsAOgtQAVg7AOg9IAAgVQAFgTAJgSQAJgTANgQQASgOATgMQARgMATgJQAlgFAlgJQATgMARgQQAOgKALgMQAAglgYgfIgWhJIAQgFIAAAPIAFAAIgFgkQAAg2AbgtQA0gdA9ACQAdAGAXAVQAeAvACA5IASAGIgBAfIgJApIgSAbIgBAPIgFAaQAeAOAbAXQAMAMAPAJQAjAJAmABQAWAHAUAMQAYANAXAQQANAQAIAUQAOAeAGAhIAAAaQAHAnAOAnIASA6IAWAvIAKAkIAQAgQAEAUABAVQAGAfgFAgQgjAsg0AUQgdAMgdAIIgVAAIgkgGIAFAlIAVBZIgCAYIgJASIAGA0IgGDgIgNAUIgCAVIAABuIgGAqIAAAaIgFAqIAABuIgFApIAABPIgFAqIAAByIgFAqIAACDIgQBEIAFAvIgKA5IgNAyIgOADIAZA5IACAfIh+AAQgTABgHgQQgCggAHgfQgIAAgHgDQgNgYgFgeQgLhTADhVIAAjbQABg3gBg3QgEgSgCgSIAGgbIgGgpQACg1gCg0IgFgqIAAiXIgFAAIAAA5IgFAgIAAA0IgFAqIAAAaIgFAqIAAA0IgFAfQABAygBAyIgFApQACBEgCBEIgGAqQABAqgBAqIgFApQAABCgLBBQgEAYgMAUQgHADgIAAQAEAeAAAfIgCAMQgSAQgZAAIAAAAg");
	this.shape_72.setTransform(-82.7,129.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhyT4IgvAAIgagJQgQgCgQABIABgaIAag6IgOgHIgXhsIAFgaIAAgqIgKg0IAAmCIgFgqIAAjHIgFgaIAFiIIgOgWIgCgZIAAi7IAFhJIgJgSIAZiGIAAg+IgFggIgFAAIgPBJIgMAlIgKgKIgFAAIgCAFQghALghgEIgbgEQgRgNgPgQQgggjgOgsQACgQAEgPQAGgbAJgZIAOgaIADgVQANgmAPgjIASg6QANglALgkIAJhJQANgfAWgbIAagRQAVgRAagLQAlgFAkgJQAigdAngVIgQg/IgFADQgQgKgFgTQgJgcgBgeIAQAQIAFAAQgKgigBgiIAJgfQAJgaATgUQAsgVAxgBQBFAVAZBEQgBAdAGAcQACgPALAFQADAMAAAOQgEAYgHAXIgNAQIgDAUQgHAWANAUQAUARAWAQQAMALAOAIQAnAJAnADQATAIASALQAbAOAXAUIAOAYQARAaADAgIAAAfQAIAqAQAqIAOAvIARAkIATA6QAMAWAHAZIAAAVIAGAaQgEAzgmAjQgXAKgYAJQgcANgdAHIgWAAIgkgFIAFAfIAAAVIAJARIAMBDIgKAaIAAEUIgUAfIAEAqIAABUIgFAaIAAAfIgGAqIAABTIgFAqIAABkIgFAkIAAB+IgFApIAACIIgQBJIAFAvIgJA6IgOAxIgNADIAYA6IACAfIh+AAQgTABgHgRQgBggAHgeIgUgHIgIgeIgOhZIAAmnIgFgvIADgQIgDgaIAAhoIgGgqIAAh+IgFAAIgFBUIgEAaIAAAvIgFAlIAAA0IgGAqIAAA5IgFAqIAACsIgFAgIAABeIgFAfIAABEIgOBZIgJAeIgTAHQADAeAAAeIgBANQgSAPgZAAIgBAAgAjvmUIgLh4IgNA0IAEAQIABAQIALAUIADAQIAFAAg");
	this.shape_73.setTransform(-82.7,128.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AiMT4IgVAAIgagJQgQgCgQABIABgaIAag6IgPgHIgWhsIAFgaIAAgqIgKg0IAAluIgFgqIAAjLIgGgqIAAhZIAGgqIgTgfIgCgVIAFglIAAi7IAFgkIgKggIAMg9IAJgRIAAgVIAFg5IgFg1IgGAAIgCAlIgTBEQg6AHg5gJQgVgPgQgUQgZgcgOgiQgCgWAGgUQAHgeAKgcIALgVIAJgpIASgqQAKggAJgfIAchOQACgTAAgSQAFghAPgeIANgaQASgPAWgNQASgNATgJIAPgCQAmgFAjgNQARgOAPgPQAQgMAMgOQACgLgEgKIgIgVIgVgVQgOgjgEgmIAPAFIAAAFIAGAAQgJg+AUg6QAxgqBAAAQAgADAaASQAiAxACA9IAQAAIgHBOIgTAlIgGAqQAXAKATAQQAMAMAOALQASAGATACIAaAGIAaABQAWAKAUANQAWAMAUAQQANARAJATQANAYABAdIAAAfQAMAwASAuIAJAlIAWAvIAJAkIAVAqQADAXABAYQAFAXgCAYQghAvg2AWQghAPgjAFQgYAAgXgFIAGA5IAJAVIAKA6IgJAaIAAEUIgVAkIAFBZIgFAvIAAAfIgGAqIAAA/IgFAqIAABzIgFApIAAB+IgFAqIAACHIgQBfIAFAkIgHAvIgNA0IgJAVIARAvIACAgIh+AAQgTAAgHgQQgBggAHgfIgUgGIgIgeIgOhUIAAljIgFgaIADg1IgDisIgGgqIAAhZIgFgaIAAgkIgFAAQABAngBAnIgEAlIAAApIgGAqIAAAvIgFAqQABAigBAiIgFAqIAACdIgFApQABAygBAyIgFApQABAlgBAlQgGAkgJAlIgDAVQgMAPgKALQgBAKADALQABASgCATQgZAVgkAAIgKgBgAjvmUIgLhuIgFACIgJAoIAFAQIABAPIALAVIACAQIAGAAg");
	this.shape_74.setTransform(-82.7,128.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhyT1IgvAAIgagJQgQgCgPABIAAgaIAag6IgOgHIgXhnIAFgfIAAgaIgKhJIAAk6IgFgqIAAjmIgFgpIAAiDIAEgaIgTgaIgBglIAFgqIgBjYIgJgCIAahuIACgqIgChDIgFAAIgQBjIgagBIgqAJQgVgBgVgEQgcgPgVgZQghgngFgyQAIglANgkIALgVIAEgaQAKgdANgcIATg/QAVg2AJg4QAFgzAbgrQATgQAWgOQARgMAUgIQAqgGApgMQAMgJAJgLQAYgXAdgOIgSguIgRgNIgJgUIgOg0IAFgFIAQAFIgFgkQACgpAPgmQBTg6BcAlQAXAcAIAjIAAAVQAGANAIAJQACARAAASIgFAbIgBAPIgNAgIgCAaQgFAPAGAOIA5AuQAlAMApACQAjAMAhAWQAQAJANAOIATAlQAMASADAXIAAAqQAJAoAPAnIATA+IASAlIAIAfIASAlQAGAkAEAlQgDAggVAZQgrAfgzASIgaAMQgLABgKgCIglgCIACAqIAMAkIAMA/IgNALIADChIgFA5IAFA/IgTAaIgCAaIAACNIgFAaIAAA/IgGAqIAAB9IgFAqIAACIIgFApIgFCtIgLA0IAGA6IgYBgIgNADIAYA5IACAgIh9AAQgUAAgGgQQgCggAHgfIgUgGIgIgeIgOhZIAAk0IgFggIAAj1IgFgqIAAhJIgGglIAAhOIgFAAIAABTIgEAlIAAAqIgFAqIAAAvIgGApIAABPIgFAqIAACSIgFAqIAABtIgFAgIAABJIgOBZIgJAeIgTAGQADAeAAAfIgBAMQgSAQgZAAIgBAAgAj0msIgLhUIgJAlIAOAvIAGAAg");
	this.shape_75.setTransform(-82.7,129.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AiJT7IgVAAIgagJQgQgDgQABIABgaIAZg5IgOgIIgWhrIAFgbIAAgpIgLg6IAAkVIgFgqIAAj6IgFgqIAAhuIAFhJQgLgEgHgIQgDgMAAgNIAAgfIAGgaQABgigBghIAAh9QAAgLgDgKIgGgHQgBgNADgMQAHgdAIgcQAKhAgDhDIgFAAIgQBeIgVgCIgpALQgOABgMgEIgbgCQgegVgWgeQgXgcgIgiQAEgdAIgdIAXg5IADgVIAchJIAihuQAGgYAEgXIAAgaQAFgUAJgRQAJgTANgRQAMgKAOgIQAWgQAZgMQAlgFAkgJQAcgSAZgYIARgRIAOgCQgEgYgJgWIgRgMQgHgKgFgKQgJgaAAgaIANgVIgCgaQAEghALgeQA0g1BNABQAmAMAcAeQALAWAGAZIAAAaIALAfQgDAygMAxQgEAbgIAaIBEAvQAnAIAoAEQAbALAZARIAfATQANAQAJATQANAYACAcIAAAfQAMAwARAuIAJAlIAcA5IAJAlIASAlQAFAcABAdIAAAfQgOAggcAYQgXALgYAIQgcAOgdALIgVAAIglgGIAGAqIAIAXIANA9IgCATIgJARIAFBeIgFAqIAACMIgNAVIgDAaIAACDIgFAaIAAAvIgFAqIAACNIgFAqIAACIIgFApIAAB5IgGAkIAAAaIgKA1IAFA5IgXBhIgOACIAZA6IACAfIh+AAQgTABgHgRQgCgfAHgfQgIAAgHgDQgNgZgFgeQgLhTADhUQABg/gBg+IgGggIAAjwQABgigBgiIgFgqQABgkgBglIgFgqIAAhtIgFAAQABApgBAqIgFAlIAAAvIgFAqIAAAvIgFApQABAqgBAqIgFAqQACBGgCBHIgGAqQACA5gCA6IgFApQABAqgBAqQgFAlgJAkIgDAVQgMAQgKAKQgBAKADALQABATgCASQgaAVgkAAIgJAAgAjymnIgKhTIgJAkIAFAOIABASIAIAPIAFAAg");
	this.shape_76.setTransform(-83,128.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AiOT9IgVAAIgagJQgPgDgQABIABgaIAZg5IgOgIIgXhrIAGhEIgLg6IAAjbIgFgqIAAkqIgFgkIAAg1IgDgVIADgfIAAhUIgOgWIgCgZIAAjAIAFhEIgKgaIALg5IAJgVIAGgvIAAhEIgFAAIgQBZIgRgIQgZAHgfAGIgqgHQgJgGgIgHQgbgYgWgdQgUhNAhhLIAwiXQANgoALgnIAJhJQAMgcASgYQAWgUAZgPQAMgJAOgHIAVgDQAggEAegKQAbgUAZgYIAUgUQAEgXgKgWIgRgMQgHgKgFgKQgLgdAHgbIAOgCQgIhKAtg8QAbgOAegDIAagEIAPAEQAWACAUAKQAgAeANApIACAgIALAaIgJAkIADAgQgDASgGASIgMA6QAcARAZAWQARAGATACIAaAFIAbACQAVAJAUANQAWAMAUAQQANARAJAUQAMAVADAaIAAAkQALAwASAvIAJAkIAcA6IADAaIASAfQAGAaABAaQAFAagCAbQglAzg8AWQghAPgjAGIglAAQACAXAEAYIAJAVIALA5QgEANgFANIgBEZQgGAOgPACIAFBJIAABOIgFAbIAAAkIgFAqIAACSIgFAqIAACSIgGAqIAABjIgFAqIAAAvIgJAgIgBApIAFAlIgYBhIgNACIAZA6IABAfIh9AAQgTABgHgRQgCgfAHgfIgTgHIgJgeIgOhZIAAi8IgFgqIAAk5IgFgqIAAhOIgFgqIAAh9IgFAAQABAkgBAlIgFAkIAAAvIgFAqIAAAvIgFAqIAABeIgGAqQACBBgCBBIgFAqQACA/gCA/IgFApQABAqgBAqQgFAlgJAkIgDAVQgMAQgKAKQgBAKACALQACATgCASQgaAVgkAAIgKAAgAj2mlIgLhYQgKAVABAaIAGAIIAAASIAJAPIAFAAg");
	this.shape_77.setTransform(-82.6,128.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhtT9IgvAAIgagJQgQgCgQABIABgaIAZg6IgOgHIgWhmIAFgvIgLhUIAAiyIgFgpIAAlEIgKiYIAFhTIgNgaIgDgbIAAjaIAGglIgLgfIAMhCIAJgSIAAgaIAFgaIgFgfIgFAAIgLA+IgRgHIgzAPQgLgCgJgEIgbgEQgNgIgNgMQgqgrgPg3IARhJIASgkIADgWQAKggANgeIAOg0IAWg/QAGgaABgaQAFgkAPggIANgaQATgQAVgMQASgOATgJIA6gJQAkgNAagbQANgLAKgNIAMgMQAGgWgKgTIgTgRQgKgRgFgTQgDgSADgRQAGgHAFgLIgDgaQAKg4AlgpQAcgMAegGIAZAAQA5ALAjAvQAKAeADAhIAFAaIgFAfIAFAgQgGAfgJAfQgFAPAAAQQAIAMAMAJQAMANAOALQAbAHAeAGIAVAAQAWAGAUANQAcAPAYASQANARAJAUQALATAEAWIAAAgQALA/AWA+QAPAoASAnIADAUIASAlQAEASACATQAEAigFAiQgMAUgRAQQglAYgqAOIgkASQgLAAgKgBQgQABgQgEIAHA1IAHAQIANBDIgQAGQAIAvgDA0IAAB8QACAggCAfQgKATgKAMIAEAqQACAtgCAsIgFAaIAAAlIgFApQACBKgCBJIgFApQACBKgCBJIgFAqQABAsgBAsIgGAqQACAigCAiQgGAagEAaIAFA6QgEAagHAaQgFAYgHAUQgHADgHAAIAZA6IACAfIh+AAQgTABgHgRQgCggAHgeIgTgHIgJgeIgNhZIAAixIgGgqIAAkgIgFg5IAAhUIgFgqIAAhtIgFAAIgFBzIgFAfIAAAvIgFAqIAAAvIgFAfIAFAaIgFAlQABA8gBA8IgGAqQADBGgDBHIgFAqQABBPgMBNQgDAZgNAUQgHADgIAAQAEAeAAAeIgCANQgSAPgZAAIAAAAgAj1muIgFhJQgLATACAWIAFAJIAAASIAEAFIAFAAg");
	this.shape_78.setTransform(-83.2,128.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AhtT+IgvAAIgagJQgQgDgQABIABgaIAag5IgPgIIgWhhIAFgqIgKheIAAiiIgFgqIAAk0IgGgkIAAhEIgFgqIAAhJIAFgvIgVgqIAGgqIAAimIAFhJIgQgGIAMg+IAOgqIAAhEIgFAAIgFA6QgSgDgTABQgVAHgVADIgIgFQgTgBgUgFQgVgRgRgWIgRgQQgNgUgIgWQgDgYAHgXIALgvIASgkIADgbQANglAPgkIAlh4QACgSAAgSQADglAQgfIANgVQATgRAWgNQARgMATgJIBJgOQATgIANgQIAagVIANgTIAKgIQAFgMgBgNQgIgWgSgPQgJgRgGgTQgDgOADgMIANgVIABgqQAIgwAigiQAagNAfgEQA1gDAtAdQAnBHgCBVIADAbQgFAdgIAcQgIAYADAWIAUARQAKAKALAIQAmALApACQAVAGAUANQAZANAWAQQANAQAJAUQAOAYAGAcIAAAfQAGArAPApIARA5IAXAvIAJAlIARAfQAEAaAAAbIADAPIAAAVQgeA6hAAaQghARgjAJIgkAAIAAAaIAOAqIAHAqIgCAYIgJARIAFAqIAAB9IgFAfIAFBJIgVAlIAGBzIgGAaIAAAkIgFAqIAACIIgFAqIAACNIgFAqIAABoIgFAfIAABUIgLBJIAFAgIgHAvIgNA0IgJAVIARAvIACAfIh+AAQgTABgHgRQgCgfAIgfIgUgHIgQg9IgGjcIgFgpIAAkgIgGg0IAAhUIgFgpIAAhUIgFglIgFAAQABAtgBAsIgFAlIAAAvIgFAqIAAA5IgFAqIAACXIgFAqIAACdIgFAqQABBRgNBRQgDAYgNAUQgHADgHAAQADAeAAAfIgCAMQgSAQgYAAIgBAAgAj1muIgFg/IgFACIgEAeIAFAIIAAASIAEAFIAFAAg");
	this.shape_79.setTransform(-83.2,128.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AiGUAIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgXhiIAGgkIgLhkIAAiXIgFgqIAAkVIgFgqIAAheIgFgpIABh5IADgPIgSgWIgCguIAFgqIgBjGIgJgaIAThJIAHhTIgFAAIgGA0IgagBIgkAJQgRABgPgEQgNgBgNgEQgRgLgOgPQgTgSgPgTIgJgVQgGgMgDgOQAAgTAGgSQAEgYAHgXIAMgaIAJgkIARgvQALgiAIgiQAVg+AJhAQACgZANgWQAIgTAOgRQAOgMARgJQATgPAXgKQAlgFAkgJQAUgMARgRIAUgRQAKgPARgFQABgagEgZIgSgRQgNgTgDgWQgBgQADgOIAHgMIABgqQAJgwAhgjQAZgNAbgDIAagFIAUADQAbADAaAQQAhAjAJAvIAAAqIAFAaQABAXgBAYQgHAlgLAkQgGAQAIAOIAQANQAPAPAVAIIBEAJQATAHASALQAbAPAXATQAZAjAIAqIAAAlQAIAkANAlIAXBJIAXAvIAIAfIASAlQACAXAAAYQAFAZgFAbQglAxg6AWIgvAVIgfACQgWALABAaQAEAJAFAIIAMA9IgCATQgFAIgDAKQAAAaAFAaQABAagBAaIgFAfQgDAsADAsQAEAXABAYQgHAQgMAKQgDANABAOQgBAkABAlIADAaIgIBZQABA+gBA/IgFAqQACBJgCBJIgGAqQACA8gCA8IgFAqQABAngBAnQgIAngCAoIAFAaQgEAigIAiIgLAoQgEADgCAJIARAvIABAfIh9AAQgTABgHgQQgCggAHgfIgTgGIgShDIgFgqIAAinIgFgaIgDkVIADglIgFgqIAAhOIgFglIAAhJIgGgaIAAg0IgFAAQABAvgBAvIgEAlIAAAvIgFApIAAA/IgGAqQACBJgCBJIgFAqIAACnIgFAqQABAygBAxQgFAlgJAkIgDAVQgMAQgKAKQgCALADAKQACATgCATQgaAUgkAAIgKAAgAj5nBIgFgkIgEABIAEAjIAFAAg");
	this.shape_80.setTransform(-83.4,128.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AiFUAIgVAAIgagJQgQgCgPAAIAAgaIAag5IgOgHIgWhcIAEhPIgKg5IAAiTIgFgpIAAjXIgFgpIAAiYIgGgaIACitIgPgQIgCgZIAAjBIAFg+IgLggIAMhCIAIgMIAHhJIgGAAIgFAvIgagBQgaAHgaACIglgFQgOgIgMgLQgmglgXgvQgCgYAGgXQAIggALgeQAIgaAFgaQASgvAQgwIAahYQAGhGAgg9QAWgTAZgQQANgJANgHIAQgBQAmgFAjgOQARgNAOgPQARgMAEgUIAVAAIAAgpQgJgSgPgOQgJgRgDgTIAAgVIAJgaQACgTgBgSQAGgkARgfQAygkA+gBQAYADAXAJQApAgALAyIAAAfIAGAfIACAvQgFAjgKAhQgJAbAGAaIAOAMQAIAJAJAHQASAGATACIAaAFIAaACQAWAKAUANQAWAMAUAQQANARAIATQAMAWADAZIAAAlQAKAsAQAtIAMApIAXAvIAJAlIAWAvQACASgBATQAFAigLAhQgTAWgVASQghAQgjANQgVALgUAIIgQgCIgaADIAGAlIAIAVIALA5IgKAlIAAEPIgNAUIgCAbIAACSIgGAqIAABZIgFApIAACoIgFApIAACDIgFAqIAABTIgLA1IAAAaIAGAkIgYBhIgNADIAYA5IACAfIh9AAQgUABgGgQQgCggAHgfIgUgGIgRhDIgFgqIAAiiIgFgkIAAj2IgFgaIAFggIgFgpIAAhJIgGglIAAg/IgFgqIAAhOIgFAAQACA0gCA1IgEAaIAAA5IgGAqQACAigCAiIgFAqQACBEgCBEIgFApIAACyIgFAqQACA0gCA0QgGAlgIAkIgEAVQgLAQgLAKQgBALADAKQACATgDATQgZAUgkAAIgKAAgAj4nBIgFgpIgEABIAEAoIAFAAg");
	this.shape_81.setTransform(-83.4,128.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AiEUAIgVAAIgagJQgQgCgQAAIABgaIAZg5IgOgHIgVhcIAEhPIgLg5IAAiIIgEgqIAAjMIgGgqIAAiiIgFgpIAAidIgOgaIgCgaIAAjWIAGgpIgLgqIAMg4IAJgcIAAgaIgFAAIgFAVIgQgGIgvALIgvgHQgSgKgNgOQgWgUgTgWQgPgegCghIARhEIANgaIAIgpIAMggQAOgpALgqIAWhKIACgaIAFgaIACgVIAag0QATgQAVgMQARgNAUgKQAsgHAtgNQALgIAKgKQAWgRAJgZIAVAAIAAgkQgSgjgTgmQACgZAIgWQABgYAAgXQAKgtAfggQArgSAtABQBNAQAcBIIAFBZQADAPABARIgaBoQAHALAKAKQAJAKAMAIQAmAMAoABQAcAJAZAQQAVANAUAPQANARAJATIANAaQACAXAAAYQADAgALAfIAYBUIAXAvIAJAkIARAgQAEAagBAaIAEAVIAAAVQgRAjgeAZQgdANgdALQgXANgYAKQgMACgMgCIgXACIAbB+IgQAFIAFBOIgDDbIgSAKQAIArgDAuQABAlgBAkIgFAlIAAA+IgFAqIAACtIgFAqIAAChIgFAqQABAvgBAvIgJAgQgDAXABAYQAEASABASQgFAggJAfIgJAjIgNAHIAYA0IACAfIggACIgPAHIhKACIgdgMIgCgOIAAglIAGgVIgUgLIgWhoIAAicIgGgqIAAj2IgFgqIADgaIgDgfIAAg/IgFgkIAAg6IgFgqIAAhtIgGAAQACAvgCAvIgEAkIAAA6IgFAqIAAA+IgFAqQACBEgCBEIgFAqIAAC8IgGAqQACA3gCA2QgFAlgJAkIgDAVQgMAQgKAKQgBALADAKQABATgCATQgaAUgkAAIgJAAgAjwlCIgCAZIAFAAIAAgagAj3nBIgFgvIgEACIAEAtIAFAAg");
	this.shape_82.setTransform(-83.5,128.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AiDUBIgVAAIgagJQgQgDgQABIABgaIAZg5IgOgIIgThRIAChZIgLg6IAAiCIgFgqIAAjHIgFgpIAAiiIgFgqIAAinIgOgaIgCgbIAAirIAFhjIgPgGIAahyIgFADQgLgCgHgDIgoAKQgTABgRgEIgVgCQgTgNgSgRQgrgqgJg5QAGglALgkIAMgaIAEgVQAKggAMgfIAOg0QAPgtANgsIACgkQAFgiAPgdQAFgOAHgMQATgQAWgOQARgMAUgJQAqgGApgLQAMgJAJgLIAVgRIASgYQAJgFAHgHQAEgTgDgSQgUgbgPgkQgCgTAHgRIAGAAQgEgNAAgNQAGhCAtgwQATgIAWgEQA8gGA2AcQAcAnAEAxIAFAaIAAAqIADAaQgNA8gQA8IA5AjQAgAFAfACQAmAOAjAYQANAJAMALIANAaQANAYAHAcIAAAvQAHAfAMAgIAOA0IAcA/IAIAfIASAlQADAXgBAYQAEAWgBAZQgjAyg5AXIgvAZQgKAEgLACQgWgEgOAPQgBAVALAUQAHAaADAbQAAAMgCAMQgFAHgDAKIAFAgIAACbQACAqgCAqQgFAQgQAFIAFCdIgKB9IAAC8IgFAqIAACnIgGAqIAABeIgJAfIgBAlIAFAvIgXBhIgOAIIAZA0IACAfIggACIgPAHIhKACIgdgNIgCgOIAFg+IgTgHIgQg9IgGjBIgGgqIAAj2IgFgfIAAiDIgFgqIAAg0IgFgkIAAhpIgGAAIAAA/IgEAkIAAA/IgFAqIAAA/IgFApQACBEgCBEIgGAqIAADBIgFAqQACA6gCA5QgFAlgJAkIgDAVQgMAQgKAKQgBAKADALQABATgCASQgaAVgkAAIgJAAgAkFnQIAEAGIAFAAIAAggg");
	this.shape_83.setTransform(-83.6,128.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AiCUDIgVAAIgagJQgQgDgQABIABgaIAag5IgPgIIgThRIAChZIgKg6IAAh4IgFgqIAAjBIgGgqIAAinIgKiIIAFgaIAAg5IgTggIADg+IAAjWIgJgaIAZhtIgFADQgLgCgHgDIgYAIQgVAFgVgFIgfgDQgVgMgQgSQgrgqgJg5IAGgZQAEgYAHgYIANgaIAIgqQAWhBAUhCIASg0QACgSgBgSQADglARgfQAHgOAKgMQARgOATgLIAbgRIBTgSQAUgMARgRIAZgVIAIgOIAPgMQAEgmgZgeQgJgSgGgTQgBgUAIgQQACgQAAgQQAIg7AngsQAUgJAWgEQAYgEAbAAQA6AOAiAxQAFAcACAdIAFAgQACAigCAiQgGAagIAaIgDAVQgGAPAAAQQAIAJAKAHQAMAMAOAJQAnAIAoAEQATAHARALQAeARAaAVQAKARAIATQAGAMAEAOIAAAgQAGAyASAxIATA/IAXAvIADAaIAXAqQACATgCATQAEAcgBAcQghAyg5AXIgvAZQgPAGgQAAQgOgDgKAJQgEARAEASIAGAIIAFAYQAGAXABAYIgKAaQAAAVAFAVIAAB3IgFAaQADApACArQgJARgLAOQgBALAEAKIABAaQACAtgCAsIgFAaIgFBUIAADBIgFAqIAACyIgFAqQABA0gBA0QgGAZgFAbIAAAaQAEASABATQgEAagHAaIgLAtIgOAIIAYA0IACAfIgfACIgQAHIhJACIgegNIgCgOIAGg+IgUgHIgQg9IgGi8IgFgqIAAj2IgGgkIAAhuIgFgqIAAg5IgFglIAAhjIgFAAIgFA5IAABKIgFApIAAA6IgFAkQABAvgBAvQgEAQAAAQQACAKAAALIgDAfIAACNQABAigBAiIgFAqQABA8gBA8QgGAlgJAkIgDAVQgMAQgKAKQgBAKADALQABATgCASQgaAVgkAAIgJAAgAkDnOIADAGIAGAAIAAgag");
	this.shape_84.setTransform(-83.7,127.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AiCUDIgVAAIgagJQgPgDgQABIABgaIAZg5IgOgIIgJgiQgIgggGgfQACgTAEgSIAAgkQgHgcgEgeQACg3gCg2IgFggIAAjBIgFgqIAAixIgFgqIAAgVIgGg6IAAg+QAFgYABgXQgIgSgLgKQgDgTABgVIAFggQABgngBgmQgFgkAAglIAFggIAAgaIgLgfIAEgQQADgYAGgXQALgUgMgSQgQgEgQAJQgQACgQAAQgVgDgVgEQgUgMgQgSQgtgsgHg8IAGgZQAEgVAHgWIAMgaIADgaQAIgYAKgXQALgiAIgiQASg0AMg1IAAgkQAFgUAJgRQAJgTANgRQASgPATgMQAPgLAQgIQAugGArgNIAvgpQAJgQARgEQADgdgFgcIgWgaQgHgNgEgOQgCgQACgPIAIgVQACgVgBgVQAHggAQgdQA0gmBBAAQAyAJAiAmQAMAjADAmIAGAlIAAAkQgGAtgMAsIgKAmQAKAMANAJIAQARQAmALAoACQAbAIAZAQQAWAMAUAQQAMARAJAUIANAaQADAUgBAWQAGAtAPAsIAXBJIAWAvIAEAVIAVAvQACASgCASIADAVIAAAVQgEAYgRASQgMANgOALQgeAPggAMQgVALgVAJQgLACgKgCQgOAAgMACIAGAlIAIAVIAMA5IgLAlIAAAfIAGAaIgGAaIAACCIAGA0IgVAlIAAAkIAFAaIAAA6IgFAaIgFBUIAAC2IgGAqIAAC8IgFAqIAABzIgKA0IAAAaIAFAlIgXBhIgOAIIAZA0IABAfIgfACIgQAHIhJACIgegNIgBgOIAAgkIAFgVIgTgMIgRg9IgGg0IAAh+IgFgqIAAj6IgFgqIAAheIgFgaIAAg6IgLiXIgFAAQABA0gBA0IgEAlIAAA5IgGAqQACAxgCAyIgFAqIAACnQABAqgBAqIgFAqQACA+gCA/QgFAlgJAkIgDAVQgMAQgKAKQgBAKACALQACATgCASQgaAVgkAAIgKAAgAj6nDIgCgTIgDgCIgEACIAEATIAFAAg");
	this.shape_85.setTransform(-83.8,127.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AiCUDIgVAAIgagJQgPgDgQABIABgaIAZg5IgOgIIgThRQgBgsADgtQgHgcgEgeQACg0gCg0IgFgqIAAisIgFgqIAAi3IgFgqIAAgkIgGglIAChzIADgQQgIgMgKgKQgDgMABgNIAAgfQADgPAAgQQgGhIADhKIAFgvIgLgaQABgYAGgXIAFgYQALgPgIgRIgLgIIgXAKQgWADgVgCQgvgLgggjQgcgegNgmQAAgaAGgZIAGghIARgkIADgaQANgoAPgnIAEgVIAchYQAFgiACgiQAGgcAOgZQAGgNAKgLIAggTQARgOATgJQAtgGAsgOQARgNAPgQQAQgMAEgTIAVAAIAAgqQgSgigSgnQAAgaAFgaIAAgVQAGgnAQgiQA6gtBMADQAxAOAbAsQAGAZABAbIAGAaIAAAlQADAPAAAQQgIAigKAiQgFAbgMAZQAZAPAWATQAmALApACQAjAMAhAXQATALAPARQAOAaAMAaQADAZgBAbQAEAeAKAcIATBEQANAgAPAeIANAvQAQAbACAfIgBAVQADASAAASQgFARgLAPQgOAQgRANQgcANgdALIgVAMIgfAMQgWgFgSALQgBANAEANQAMAqAIAqQgDANgGANIgBCmQgBAlABAkQAFAVgBAVIgRAVQgDANABANIAAA1QAEAUABAVIgFAlIAAAfIgFAgIAAAvQACBGgCBHIgGAqIAACCQABAigBAiIgFAqQACA8gCA8IgJAfQgDAXACAYQADASACATQgGAfgIAgIgJAiIgOAIIAZA0IABAfIgfACIgQAHIhJACIgegNIgBgOIAAgkIAFgVIgTgMIgRg9IgGg0IAAh+IgFgqIAAjLIgFgbIACgfIgCgVIAAheIgFgqIAAg+IgGglIAAg/IgFgaIAAgfIgFAAQABA0gBA0IgEAqIAAA6IgGAqQACA2gCA3IgFAqIAACnQABAngBAoIgFApQACBCgCBBQgFAlgJAkIgDAVQgMAQgKAKQgBAKACALQACATgCASQgaAVgkAAIgKAAgAj6nDIgFgaIgEABIAEAZIAFAAg");
	this.shape_86.setTransform(-83.8,127.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AiBUFIgVAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgThSIAChZIgLg0IAAhoIgFgqIAAitIgFgpIAAiyIgFgqIAAgkIgGglIACiSIgPgRIgCgZIACkJIgNgLIAPhEIAJgVQABgRgOgHIgQAGIgaAEQgNABgMgEIgRAAQghgNgYgbIgfggQgQggAAgkQADgdAJgcIARglIADgfIAlhzQAPgpAKgrIAAgUIAFgbIABgUQAJgTAKgSIAIgQQASgQAWgMQARgNATgJQAqgHAqgLQAUgNARgSIAOgMIAMgRQAIgCAHAAQACgegIgcQgTgbgPgeQAAggAJgaQACg4AdgwQAdgUAigGIAZgGQA8AHArAoQAOAoADAsQAGApAAArQgGAagJAaIgDAaIgOAlIA/AoQAfAFAgACQAWAGATANQAZANAWAPQAOARAIATQAOAZAGAbIAAAgQAGAoANAmIAOA0IAcA/IAJAfIARAlQADASgBATQAHAhgIAjQgRAZgYATIgvATQgXANgYALQgNACgNgBIgfAAIABAgIANAkIAMA/IgQAFIAFEfIgNAaIgCAaIAACdIgFApIAACoIgGAaIAADbIgFAqIAACDIgKA0IAAAaIAFAlIgXBhIgOAHIAZA0IABAgIgfABIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgOgzIgJi3IgFgqIAAjBIgFgqIAAiIIgFgqIAAg+IgGgqIAAg0IgFggIAAg5IgFAAQACA5gCA6IgEApIAAA6IgGAqQACA3gCA3IgFApIAACoQABApgBAqIgFAqQACBBgCBCQgFAkgJAlIgDAVQgMAPgKALQgBAKACALQACASgCATQgaAVgkAAIgKgBg");
	this.shape_87.setTransform(-83.9,127.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AiAUFIgVAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgThNIgEgfIAFg/IgKg0IAAhjIgFgqIAAiiIgFgkIAAitIgGgqIAAg0IgFgqIAAhjIAFg6IgSgKIgCjQIAFhZIgQgFIAMg/IALgkIgHgVIgFAAQgaARggAAIgJgDQgTgBgTgFQgUgPgRgTQgmgmgMgzIAPhJIANgaIAIglIAXg/IAJgkQATg3AKg3QABgdAGgcIAag1QAOgNAQgJQAWgRAZgLQArgGApgMQANgLANgNIAhggQASgPAAgXQgDgTgIgRIgXgaQgHgVAAgVQAEgRAGgPIgDgPQAAgQAEgQQANgsAiggQAUgJAWgEQAYgFAbAAQA4APAfAwQAFAaACAaIAFAaIAAAgQADAPAAAQIgMA0QgGAkgQAgIA5AqQAnAJAoADQAbALAZARQAWAMASAQIANAaQAKASAIATQADAZgBAbQAGAqAPAqIARA5IAXAvIAIAlIASAkQACARgCAQIAHAoQgPAsglAcIgqASQgaAOgaAKQgLgBgKgCQgQgBgPgFIAAAkIAUBUIgKAqIAFAqIAADlIgNAaIgCAaIAACSIgGAqIAACnIgFAqIAADRIgFAqIAAB9IgKBEIAFA6IgXBhIgOAHIAYA0IACAgIgfABIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgOgzIgJiyIgFgqIAAi3IgFgpIAAiIIgFgqIAAhEIgGglIAAg5IgFgqIAAhOIgFAAQACA/gCA+IgFAaIAABEIgFAqIgDBUIADAqIgFApIAACiQABAogBAnIgFApQACBHgCBHQgGAkgIAlIgDAVQgMAPgLALQgBAKADALQACASgDATQgZAVgkAAIgKgBg");
	this.shape_88.setTransform(-83.9,127.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("ABHT3IgBgOIAAgkIAFgVIgTgMIgOgzIgJisIgFgqIAAisIgFgqIAAiNIgFgqIAAhEIgGglIAAg0IgFgqIAAhYIgFAAIAABoIgEAqIAAA5IgGAaIAABZIgDAgIADAaIgFAkIAADmIgFA6IgFC3IgSBCIgTAHQAEAZABAbQABATgQAHIiIAAIAAgVIAMgqIAGgPIgJgVIgUhZIAGglIAAgkIgLgvIAAhjIgFglIAAiSIgFglIAAiyIgFgpIAAhEIgGgaIAAiiIgOgXIgBkdIgKgaIAEgaIAVhOIgKgLIgFAAQgaARggABIgJgEQgTAAgTgGQgUgPgQgTIgZgWQgQgYgKgbQgBgTAFgSIAMg0IAMgaIADgVIAhhjIAJglQARgxAIgyIAAgVQAKgtAagmQARgOAUgLQAOgMARgJIAQgBQAggFAegIQARgKAPgOQAogeAOgrQgCgRgHgPQgPgRgNgTQgFgSgCgTIAKgaIABgVQADgzAcgrQA/giBIAIQAQAFAPAHQAcAcAJAmIABAVQAGAkADAmQgEA3gNA2QgGAQgEAQQAJAMANAJIAaAXQAZAJAbAEIAVAAQAnANAjAYQAPAJAOAMIAaA0QADAZgBAbQAEAeAKAcIAYBTIAcA/IAEAaQAMAWAKAZIABAlQAFAPABAQQgNAmgdAcQgZANgbAKIgfANQgKAFgLADQgdgGgcgKIAFA0QACANAGAKIAMA4QgEAZgGAbIAFAqIAADaQgFAPgPAGIAFA/IAABeIgFA5IAACdIgGAqIAADWIgFAqIAACSIgJAfIgBAqIAFAqIgXBhIgOAIIAZA0IABAfIgfACIgQAHIhJACg");
	this.shape_89.setTransform(-84,127.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("ABIT5IgCgOIAGg+IgPgDIgTg3IgIisIgFgqIAAiyIgGgqIAAiHIgFgqIAAhEIgFglIAAgvIgFgqIAAhYIgFAAIAABYIgFAlIAABEIgFAfIAABEIgFAqIAFAlIgFApIAADcIgFA5IgFC8IgSBDIgTAHQAEAZABAbQABATgQAHIiJAAIAAgVIANgqIAGgPIgJgVIgUhZIAFglIAAgkIgKgvIAAheIgFglIAAiNIgFglIAAiiIgGgpIAAhUIgFgqIAAidIgOgWIgCkYIgKgkIANg/IAIgVIgGgaIgUANQguAHgrgMQgXgSgTgVIgYgVIgIgQQgMgUgDgWIAIgkQADgVAGgVIAMgaIAJgqIAghjQATg3AKg3IAAgfQAFgWAKgUQAIgUAOgRQARgOATgMQAPgLARgIIBOgOQAUgNARgRQAYgTAUgWQADgQAAgQIgqhTQAEgjAGghIAAgVQAOg2AsgiQArgMAtABIAaAGQALAEAKAGQAMAJAKALQARAoACAsIAGAaIAAAVQADAPAAAQIgMA6QgHAjgQAhQAhASAeAXQAhAJAjACQAcAHAYARQAWAMAUAQQANARAJAUIANAaQACAUAAAWQAHAyARAxIAIAkIAcA/IAJAlIARAkQAFAYACAXIAGAaQgLApgfAfQgXALgYAIQgeANggABQgcgIgZgNIAGBOIAIAMIAMBDIgKAkIAFA/IAABoIgFAaIAFAaIAAAvIgSAaIACCiIgFAaIAAC3IgFAqIAADRIgFAqIAACHIgLBEIAFA6IgWBhIgOAHIAYA1IACAfIgfABIgQAIIhJABg");
	this.shape_90.setTransform(-84,127.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("ABHT4IgBgOIAAgkIAFgVIgTgMIgOgzIgOjRIAAinIgFgqIAAiSIgFgqIAAg/IgGgfIAAg0IgFgqIAAhUIgFAAIAAA6IgFAkIAABJIgFAqIAABPIgFAaIADAfIgDAaIAAD7IgFAvIgFDBIgSBDIgTAHQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgOgDIgXhgIAFg0IgKhPIAAhOIgFgqIAAhzIgFgaIAAidIgGgfIAAiDIgFgaIgEhJIAEgQIAAhZIgTgfIAEiRIgGgaIAAg1IAGg0IgJgRIgCgTIAMg+IAJgRIgFgaIgSAOIg4ACIgkgIIg+g3IgZgvIAEgvIALgvIANgaIADgaIAchPIAmicIAAgbIAPgkIAWglIBEgtIAQgCIBJgSIAagYIAagfIAVAAQABgggIgfQgKgQgNgMQgLgTgFgVQADgXAGgYQAEg8AhgxQAYgRAcgGQBLgIA6AuQALAhADAjQAJAxAAAzIgJAkQgKAogMAnQATAIARAOQAKAKALAIQAkAKAlACQAkAMAgAXQAOAHAMAKQANARAJAUQALATAEAWIAAAlQAIAwAQAuQAQAyAVAxIAIAgIASAkQAEAVACAVIAGAfQgMApgeAeQgXAKgYAIQgUAJgWACQgogLghgaIAHBjIAIAVIAKA6IgIAaIgBDVIAFA/IgUAfIAFAqIAABoIgGAqIAABZIgFAqIAAEfIgFAqIAACNIgKBJIAFA6IgXBhIgOAHIAYA1IACAfIgfABIgQAIIhJABg");
	this.shape_91.setTransform(-83.9,127.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("ABIT5IgBgOIAAgkIAFgVIgTgMIgOgzIgOjRIAAiXIgFgqIAAidIgFgqIAAg5IgGggIAAg0IgFgqIAAhOIgFAAIgEA5IAABUIgGAqIAABTIgFAqIAAElIgFAqIAACXIgOBZIgJAeIgTAHQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgNgDIgYhgIAGgvIgLhUIAAhJIgFgqIAAhoIgFgqIAAiNIgFgqIAAh9IgGglIgFhjIAFhPIgSgbIgDgUIAGgvIAAgkIgGglIAAhiIAGgqIgJgRIgCgTIAMg+IAJgRIgFgaIgSAOQgcAFgbgDQgTgCgSgGQgUgPgQgTIgagVQgOgXgLgYQgDgYAHgXIAMg0IAMgaIAIgqIAghjQATg8ALg9QAFgvAWgpQATgQAWgMQAQgOAUgJIA6gJQAxgXAlgpIAPgMQAEgTgFgSIgJgaIgWgVQgGgMgEgOQgCgZAJgWQACgQAAgPQAHg5AogpQAagNAfgEQA/gCAxAmQAPAmADApQAHApADAqQgGAdgIAdIgDAaIgOAqQAeATAbAWQAkAJAlACQAcAIAZARQAVAMAUAPQANARAJAUQANAYACAcIAAAkQAHAjAMAhIAOA1IAcA+IANAvIANAaIAIAqQAEASgCATQgNAigbAaQgPAGgQADQgaAIgaABQgsgSgigiIAABjIANAvIANBEIgGACIgFAYIAADQIAFA6IgUAfIAFA6IAABTIgFAlIAABEIgGAqIAAE0IgFAqIAACiIgKA5IAAAaIAFAlIgXBhIgOAHIAZA1IABAfIgfABIgQAIIhJABg");
	this.shape_92.setTransform(-84.1,127.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("ABJT5IgCgOIAAgkIAFgVIgTgMIgOgzIgOjMIAAiXIgFgqIAAhzIgDgVIADgaIgFgqIAAg5IgFggIAAgvIgGgqIAAhOIgFAAIgEAqIAABZIgFAqIAABYIgGAqIAAElIgFAaIgGDhIgQA9IgUAHQAFAZABAbQABATgRAHIiIAAIAAgVIAMgqIAGgPIgIgVIgUhkIAFgkIgLhUIAAhJIgFgqIAAhjIgFgqIAAiNIgFgqIAAiCIgLiYIAGg/IgTgbIgCgOIAAgVIAFgqIgFgvIAAiCIAFgaIgJgRIgCgZIAMg0IAJgaIgFgVIgRAOQgcAFgcgDQgTgCgSgGQgUgPgQgTIgagVQgYghgCgoIAGgZQAEgYAHgYIAMgaIAEgbIAbhOQAahYANhaQAEgWAKgTQAJgTANgQIAggTQARgNATgKQAugHArgNQAegYAZgdIAQgMQADgKgCgLQgDgUgIgRIgXgaQgMgYAAgcIALglQgBglAMgkQA5g6BSABQANACANAEIAVALQAhAuAEA5IAKBEIgOBEQgEAhgSAdQAQAJAPAMQAOAPARALQAiAJAiACQAZAGAWANQAfARAZAVQAKASAIATQAKARAFATIAAA1QAIAlANAkIARA5IAXAvIAIAlIAXAkQAFAWABAYQABAQgBARQgTAtgqAVQgSACgTAAQgjgHgbgZIgTgQQgDgMgBgNQgGgggDgfIgFAAIAAA5IgFAgIAABtIAaBuIgQAFIAFBKIAACmIAGAqIgTAfIgCAlIAFAaIAAA+IgFAvIAAA1IgFApIAAFKIgGApIAACoIgKA5IAAAaIAFAlIgXBhIgOAHIAZA1IACAfIggABIgPAIIhKABg");
	this.shape_93.setTransform(-84.1,127.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AA+T5IgBgOIAAgkIAFgVIgTgMIgOgzIgOjMIAAiNIgFgfIAAiDIgEgfIAEgQIgFgfIAAg/IgGgkIAAgvIgEggIgFhZIgFAAIAABzIgGAqIAABUIgFAqIAAEvIgFAaIAAC8IgFAkIgSBDIgTAHQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgNgDIgYhgIAGglIgLheIAAhEIgFgkIAAheIgFglIAAiXIgFggIAAiNIgGgqIAAgfIgFgfIAChpIACgVIgUgfIAAj/IADgaIgNgLIAMg+IAMggIgDgaIgSAOQgcAFgbgDQgTgCgSgGQgUgPgQgSIgbgWQgXghgDgoIAMg/IASgkIADgbQANgnAPgnIAJgqIARg0QAFgXACgYIAGgaIABgaIAag0QAOgNAQgKQAWgQAZgMQAqgHAqgKQATgOARgSIAYgYQAKgGAGgMQABgLgDgJQgCgRgGgPIgXgaQgMgYAAgcIAJgaIgCgaQAEghAMgeQA3g1BOABIAaAGQAOAFAMAIQAhAwAEA6QAFAfACAgQgEAfgHAfQgFAkgRAgQAQAJAPAMQAOAPARALQAhAJAjACQAiAJAdAUQAWAMASAQIANAaQAOAZAGAcIAAA0QAGAXAIAYIAOA0QAIAZAMAWQAMAJANAEQAMAPgBATQATADAEARIALAMQACAXgFAYIgCAaQgUA5gzAgQgSAFgTgCQgRgIgOgKQgZgVgOgbQgUgggJgkIgFAAIAAAvIgFAlIAAB4IANAqIANA+IgOALIADAaIAADaIAEAlIgRAaIgCAVIAFBuIgFAfIAAAvIgGAqIAAFTIgFAqIAACtIgJAkIgBAvIAFAlIgXBhIgOAHIAZA1IABAfIgfABIgQAIIhJABg");
	this.shape_94.setTransform(-83.1,127.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAuT5IgCgOIAGg+IgPgDIgTg3IgNjMIAAiNIgFgqIAAhtIgFggIAFgaIgFgfIAAg/IgFgfIAAg0IgFgqIAAg1IgGgfIgFAAIAAB4IgFAqIAABeIgFAqIAAEqIgFAaIgHDhIgQA9IgTAHQAEAZABAbQABATgRAHIiIAAIAAgVIAMgqIAHgPIgJgVIgUhZIAFhEIgKgvIAAhUIgFgfIAAhpIgGgpIAAiTIgFgqIAAh9IgFgaIAAgvIgFglIAAhYIAFgbIgTgaIgCgaIAAirIAFhkIgQgFIANhEQAKgZgCgbIgRAOQgkAGgjgIIgVgEQgVgPgQgSIgagWQgYghgCgoIAMg/IARgkIAEgbIAkh4QAPgpAKgqIAAgVIAFgaIACgVQAIgTAKgSIAIgPQANgNARgKQAWgRAZgLQAqgHApgKQAbgVAYgaIAUgRQAHgigQghIgXgaQgIgXABgYIAIgaIgDgVQAEgeAIgcQA2g+BVAAIAZAGQALAEAKAGQANALAMAOQAPAoACAsQAGAsgBAtIgJAkQgFAkgRAgIA/AvIBEALIA+AdIAoAcIAiBPIgCA0IArCNQAJgJAMgFQAgACAXAWIALAXIAEASQANALAGAQQgGAQgJAQIgCAaIgQAvQgQARgRAPQgUAXgdAIQgWAAgUgHIgPgNIgZgOQgNgQgKgSQgRgcgJgeIgFAAIAAAgIgFAfIAAA/IgFAaIAFAfIAAAVIAJAWIAMA4IgKAlIAFAqIAADqIgQAqIAAAvIAFAfIAAAlIgFAfIAAAqIgFAqIAAFTIgFAqIAACyIgJAkIAABjIgTBSIgOAHIAYA1IACAfIgfABIgQAIIhJABg");
	this.shape_95.setTransform(-81.4,127.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAiT5IgCgOIAFg+IgPgDIgSg3IgNjMIAAiIIgFgpIAAhzIgFggIAFgaIgFgqIAAgvIgFgfIAAg0IgGgqIAAg0IgFg1IgFAAIAACDIgFAqIAABTIgGAqIAAEvIgFAaIAADCIgWBnIgUAHQAEAZACAbQAAATgQAHIiIAAIAAgVIAMgqIAGgPIgIgVIgUhZIAFhEIgLgvIAAhPIgFgfIAAhjIgFgqIAAiSIgFgqIAAiDIgFgaIAAgvIgGgfIADiHIgQgRIgCgaIAAj6IgKgkIAUhuIgRAOIgQAAIgTAEQgTgBgSgFIgVgEQgUgPgQgSIgagWQgZgjgBgrQAFgmAMgkIAMgaIAEgaIAbhOIAUhJQAIgaAGgbIAAgaQAFghAOgdQAHgRAKgPQAUgPAWgNQAMgKAOgHIAQgCQAlgFAkgKQALgJAKgMIAVgQIARgTIAOgCQACgggIgfIgegkQgHgXABgYIAJgaIgDgVQAIg3AhgrQAxgXA4ABQAaAEAZAMQAhAmAIAyQAEAxACAyQgDAYgGAXIgDAbQgIAVgDAUQAKAMANAJQAMANAOALQAZAJAbAEIAVAAQAZAGAWAOQAeASAaAUIANAZQALAUAEAWIAAAvQAHAiAMAiQAOA3AZAyQAMgbATgUQAsgHAYAmIgaAVQAQgNASAIIAFAUIAKAMQAEAQgGAOIgQgFQgCA3gXAyQgSAPgTAMIgNASQgLAJgNAHQgYAHgXgDIgVgNIgagMQgQgNgKgRQgVgegLghIgFAAIgFBpIgFAaIAFA0IAAAVIAIARIANA+IgLAfIAFAvIAADlIgPAkIAAA/IAFA0IgFAaIAAA1IgFAqIAAFTIgGAqIAACyIgJAkIAABjIgTBSIgOAHIAZA1IACAfIggABIgPAIIhKABg");
	this.shape_96.setTransform(-80.2,127.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAUT4IgCgOIAAglIAGgVIgUgLIgNgzIgIg/IAAheIgGgqIAAiDIgFgpIAAh+IgFgaIADgaIgDhZIgFgqIAAgqIgGgpIgFh5IgFAAIAACIIgFAqIAABUIgFAqIAAEvIgGAaIAADGIgWBoIgUAGQAFAaABAaQABAUgRAGIiIAAIAAgVIAMgpIAGgQIgIgVIgThOIAEhPIgLg5IAAhEIgEglIAAheIgGgpIAAiTIgFgqIAAh9IgFgfIAAgqIgFglIAFiNIgTgKIgCgaIAAj/IgKgbIALg+IAIgVIAHgaIgGgFIgRANIgQAAIgTAFQgTgCgSgEIgUgFQgVgOgQgSIgagWQgZgkgBgrQADggAJgfIAMgaIAJgkIAWg/IAJglQATg2ALg3IAAgVQAJgzAbgrQAUgPAWgNQAMgKAOgIQAtgGAsgLQALgJAKgLIAVgQIARgUIAOgBQACgggIgfQgLgPgMgMQgKgRgDgTIAAgVIAKgaIgDgfQAKg3ApgmQAUgKAWgEQBPgFA2A2QAJAcABAcIAHAsQADAngFAnIgPBEQgFAKAAALQAJAMANAKIAaAWQAZAJAcAEIAUAAQAdAIAYARQAbAPAXATQAIAMAFANQALAWAEAZIAAAqQAKAtAOAsIAZBJQANALAQgBQANgrAjgcQAPgDAQABIAAAQQAWAAAJAVIgfAUIAegCIAHASIANAVIACAVIgVgFIgKAfIAAAVQgKAkgSAfQgWAQgXANIgSAWQgSANgWAFQgQABgPgDIgVgLIgagKQgNgLgKgNQgXgggMgkIgFAAIgFAkIAAA6IgFAlIAFA0IAAAVIAJARIAMA9IgLAfIAFA6IAADaIgPAlIAABJIAFAlIgFAfIAAAqIgFAqIAAFEIgFApIAADMIgLA6IAAAaIAFAkIgXBiIgNAHIAYA0IACAfIggACIgPAHIhKACg");
	this.shape_97.setTransform(-78.8,127.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AALT4IgBgOIAFg+IgPgDIgRg3IgJg/IAAheIgFgqIAAh9IgFgqIAAiCIgFgaIADgbIgOjRIAAgvIgFgfIAAg5IgGAAIAACNIgFApIAABPIgFAqIAAE5IgFAaIAADHIgXBnIgTAHQAEAZABAbQABATgQAHIiIAAIAAgVIAMgqIAGgPIgJgVIgUhZIAFhEIgKgvIAAhJIgFggIAAhjIgFgqIAAiSIgGgqIAAiCIgFgbIAAgkIgFglIAAhZIAFg+IgTgHIgCgTIAAkKIgJgaIAKg/IAJgVIAGgaIgFgFIgSAOIgPAAIgTAEQgTgCgSgEIgVgEQgUgPgRgSQgngjgRgyQACgTAGgRIAIgqIAMgaIAJgqIAlhzQAQguAIgwIAAgVQAKgwAbgpQARgOATgMQAPgLARgIQAsgHAsgKQAMgKAKgLIAagVQAJgOARgCQACgggIgfQgMgOgMgMQgGgNgFgNQgCgQACgPQAHgQABgVQAAgsATgnQAXgbAggOIAbgDQAwgFAtATQAiAnAGA0IAHArIAAAVIADAaIgOBJQgJAbABAaQAIAIALAIQAOAOARALIBeASIAaARQAcAQAXAXIANAaQAJAQAGAUIAAAvQAFAaAJAaIARA/QAGAWALATQAVAIAZADIAYg0IAXgZIAqgGIgGAQIAdAGIADAOQgVAIgLATQAJgJAMgCQARAHAEATQAJARACAUQgJAAgHACQgWAagBAiQgHAYgMAYQgSAVgYAOIgUAJIgRAXQgVAQgZAFQgRABgPgDIgPgLQgQgEgQgFQgNgLgKgOQgWgdgMghIgFAAIgGAfIgFB9IAFAaIABAVIAIAMIAMBDIgKAfIAFA/IAADQIgQAfIAABJIAFAqIgKBzIAAE/IgFAvIAADMIgKA0IAAAfIAFAlIgXBhIgOAHIAYA1IACAfIgfABIgQAIIhJABg");
	this.shape_98.setTransform(-77.9,127.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AABT2IgBgNIAFg/IgOgDIgTg3IgIg+IAAheIgGgqIAAh4IgFgqIAAiIIgFgaIACgfIgHiiIgGgqIAAgqIgFggIAAhDIgFAAIAACNIgFAqIAABOIgFAqIAAE5IgGAbIAADLIgWBnIgUAHQAFAaABAaQABATgRAHIiIAAIAAgVIAMgqIAGgPIgIgVIgUhjIAFggIgLhTIAAg0IgEglIAAhjIgGglIAAiXIgFgqIAAiDIgFgkIAAglIgFgqIAAh9IgPgXIgBgYIgBkKIgKgaIAMg5IAJggIAAgUIgRANIgQAAIgTAFQgTgCgSgFIgUgEQgVgOgQgSQglgfgTgsQAAgYAHgXIAEgaIARgqIAJgpIAchPIAMgvQAPgsAGgtQABgpATglQAGgOAKgMQASgPATgMQAPgKAQgJIBPgOQATgMARgRQAjgaANgmQgCgSgHgRIgRgQQgKgPgFgRQABglAIgjQABgqAQglQAlgkAygGIAlAAQAQABAPAEQBABAADBiIAGAaIgcB6QAJALANAKIAaAWQAmAMApADQAZAIAWAOQAcAQAWAXQAOAaAMAaQADAUgBAWQAFAtAOAsIAcBZQAPgFAQgBQANADAMAAQAMgPAHgTQAagrAtgOQAKAFAHAIQARAJADATQgYAFgNAVIAagJIARAUIAPAqIgRgCQgSARgLAVIgBAbQgFASgJASIgJAVQgcAXghAPQgOAOgMAQQgQANgUAGQgTACgSgCIgVgLQgQgEgPgGQgNgLgJgNQgZgcgLgjIgFAAIgFAaIAAAvIgFAaIAAA/IAFAaIABAQIAIAVIAMA5IgLAaIAFBJIAADLIgNAWIgCAZIAACoIgFApIAAE6IgFAvIAADWIgJAfIgCA0IAFAlIgXBhIgNAIIAYA0IACAfIggACIgPAHIhKACg");
	this.shape_99.setTransform(-76.9,127.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgGT2IgCgNIAGg/IgPgDIgTg3IgIg+IAAhZIgFgqIAAh9IgGgqIAAiIIgFgaIADgfIgIidIgFgqIAAgvIgGglIAAhJIgFAAIAACTIgFAfIAABTIgFAqIAAE/IgFAaIAADRIgXBnIgTAHQAEAaABAaQABATgRAHIiIAAIAAgVIAMgqIAHgPIgJgVIgUhjIAFggIgKhTIgFhUIAAhoIgGgaIAAidIgFglIAAiNIgFgaIAAgqIgFgaIAAiSIgQggIAAjFIgEgaIAEggIAAgUIgLggIANhCIAIgXIAAgUQgdAQghABIgJgEQgUgBgSgFQgUgPgRgRQgjgegVgoQgBgcAIgdQADgTAGgSIAMgfIAHggIAYhDIAZhZQAKgfAEggQABgpATglQAGgOAKgMQASgPATgMQAPgKAQgJQAqgHAqgKQATgOASgQQAfgYALgkQgBgQgHgOQgUgXgNgeQgCgZAKgVIABgWQAAgdAHgcQAng5BFgLIAfAAQA1AQAcAvQAGAcABAeIAFAaIAAAUIAGAgQgFAagHAaIgGAkIgIAVQACAQASAMIAaAWQAhALAjACQAiAJAdATQATALASAOQAMAQAJAUIANAaQADAXgBAYQAEAjAKAhIAhBpQAigIAiAIIAhg/IAjgiIAlgDIgFAQQAXAAAIAVQgaAJgQAWIAjgJIAcA9IgagFIgaAqIAAAVIgXA/IgoAeIggANIgvAsIgvAFIgagNIgagGIgzg0IgRglIgFBEIgFAfIAAA/IAFAaIABAQIAIAVIAMA5IgLAaIAGBJIAADLIgOAWIgCAZIAACoIgFApIAAEvIgFAvIAADhIgJAfIgCA0IAFAlIgWBhIgOAIIAYA0IACAfIgfACIgQAHIhJACg");
	this.shape_100.setTransform(-76.1,127.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgKT2IgCgNIAAglIAFgVIgTgMIgOgzIgIg+IAAhZIgGgqIAAhuIgFgpIAAiTIgFgqIAAhTIgGgqIAAgvIgFgfIAAg0IgFgrIAAhIIgFAAIAACNIgGApIAABPIgFAqIAAE+IgFAbIAADLIgXBnIgTAHQAEAaACAaQAAATgQAHIiIAAIAAgVIAMgqIAGgPIgJgVIgThjIAFggIgLhTIAAg0IgFglIAAhjIgFglIAAiXIgFgqIAAiDIgFgkIAAggIgGgqIAAiCIgOgXIgBgYIAAinIgGgkIAGgaIAAgfIgLggIAMhCIAJgXIAAgUIgVAMQgiAEgigFIgVgEQgTgPgRgRQgoghgSgvQACgYAHgXIADgaIASgqIAKgqIAVg5IAThKQAOgmAFgoQACgpASglQAHgOAKgMQARgPAUgMQAPgKAQgJQAqgHApgKQAUgOARgQQAhgaAKgmQgCgOgGgLIgSgRQgJgRgGgUQgCgZAJgVIACgWQAEg6AmgsQAigRAmgGQBBAGArAuQAKAiACAjIAFAaIAAAUQAEAXgBAYIgPBJQgFAQgBAQQAKAMANAJIAVASQAhALAjACQAhAJAeATQATALARAOQANAQAJAUIANAaQACAXAAAYQAEAjAKAhIAhBpIAqgLIAkALQAMglAXgfQASgXAagNQATgBANAOQARAJADATQgcAFgOAaQAJgJAMgEQAVAKAIAYIANAaQgRAEgOAHQgPANgKASIgDAlQgKAYgNAXQggAZgmAPQgNAMgJAOQgOAMgQAJQggAJgfgLQgWgGgUgIQgPgOgMgQIgSgUIgRglQgFAfAAAgIgFAfQgCA1AHA0IAJAaIAHApQADAMAAANIgGAIQgDAJAAALIAFA+QACA9gCA7QABApgBAqQgFAPgPAGIAFA6IAABtIgFAvIAAEAIgGAqIAAEqIgJAfIgBA0IAFAlIgXBhIgOAIIAZA0IACAfIggACIgQAHIhJACg");
	this.shape_101.setTransform(-75.7,127.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgOT0IgBgOIAFg/IgPgCIgSg3IgJg/IAAhZIgFgqIAAhyIgFgqIAAiNIgFggIAAhjIgGgqIAAgqIgFgfIAAg0IgFgqIAAhJIgGAAIAACIIgFApIAABPIgFAqIAAE+IgFAbIAADRIgXBnIgTAGQAEAaABAbQABATgQAHIiIAAIAAgVIAMgqIAGgQIgJgVIgUhjIAFgfIgBglIgJgqIgFhTIAAhuIgFglIAAiSIgGgfIAAiNIgFglIAAgfIgFggIAAiSIgOgXIgCi0IgFgvIAFg0IgKgqIAMg9IAJgWIAAgVIgVAMQggADgfgFIgVgCQgegTgbgaQgZgZgQggQgBgeAJgcIADgaIARgqIAJgpQAPgnANgoIAJgkQARgvAHgvQABgqATglQAIgQAKgOIAZgPQAUgPAWgLQApgIAqgKQAUgNARgRQAXgTATgYQABgKAAgLQgBgKgDgKIgWgWQgLgUgFgVQAAgVAKgQIgBgQQACgdAHgcQADgOAGgMQAogpA5gGIAbAAQA+APAdA6QADAaAAAaIAEAQIAAAVQAEAXABAYIgSBOQgFANAAANQAJANAOAJIAVARQAhALAjADQAhAIAdATQATAMASAOQANAQAJATQALAUAEAWIAAAqQAEAdAKAcIAhBuQAogOArAJQAJgcAPgYQAVggAigTQAMgCAOAAQAJATAWAIIAAAKQgcAMgTAZQAMgIAOgDQAbAVAKAlIgGAFIgPgBQgWAPgNAWIgEAgIgLAaQgFANgHANQgYAWgdAOIgVAIIgVAXQgVAQgaAJQgbACgZgKQgTgFgSgIQgPgNgNgQQgUgbgOgfIgGAAIAAA/IgFAfQgCAlACAlQAJAsALAsQAEASAAARQgFAHgDALQABAnAEAnQACAvgCAuIgFAaIAFAaQACAbgCAaQgFAPgQAFIAFA/IAABuIgFA5IAAEVIgFAqIAAEAIgJAlIgBA0IAFAlIgXBhIgOAHIAYA0IACAgIgfABIgQAHIhJACg");
	this.shape_102.setTransform(-75.3,128.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgNT0IgCgOIAAglIAGgVIgUgLIgOgzIgIg/IAAhZIgFgqIAAhtIgGgqIAAiSIgFgqIAAhUIgFgqIAAgpIgFggIAAg0IgGgqIAAhJIgFAAIAACDIgFApIAABPIgFAqIAAE+IgFAbIAADRIgXBnIgTAGQAEAaABAbQABATgRAHIiIAAIAAgVIAMgqIAHgQIgJgVIgUhjIAFgfIgCglIgIgqIgFhTIAAhuIgGglIAAiSIgFgfIAAiNIgFglIAAgfIgFggIAAiSIgOgXIgCipIgFg/IAFg0IgJgSIgCgTIANg9IAIgWIAAgVQgbAMgeADIgvgHQgcgRgYgXQghgfgOgqQABgbAHgZQADgTAGgSIAMgaIAEgaQAHgYAKgXQALgiAIgiQAUg2AKg3IAAggQAHgZANgWQAHgQAKgOQAPgKAQgJQARgMATgKQAugHArgNQAOgLAMgNQAlgbAMgpIgEgUIgXgWQgNgYgCgcIAOgfIgDgfQAEgeAKgcQA1gzBNgBQAQADAQAGQAzAoAJBCQgBAXACAYIAGAfQgEAqgLAqQgGASgBASQAIANAOAJIAUARQAiALAiADQAiAIAdATQATAMASAOQANAQAIATQALAUAEAWIAAAgQAGAtANArIAcBZQAZgKAcAAQAPAEAPgCQANgRAKgWQAXgmAngTIAaAAIgGAPIAlALIAAAFQgcAMgTAZIAagJIAMAJIATA0QgjAJgUAhIgEAfIgUAvQgjAegqAQIgVAVQgWAQgZAJQgTADgSgDIgagMIgVgEQgrgngZg1IgFAAIAAA6IgFAfQgCAqACAqQAFAbAJAZIAHAlQAEAOgBAPIgGAIQgDAMAAANIAAC7QAGAkAAAmQgGAPgPAFIAFBKIAABtIgFAqIAADxIgFApIAAElIgJAqIgCA0IAFAlIgWBhIgOAHIAYA0IACAgIgfABIgQAHIhJACg");
	this.shape_103.setTransform(-75.4,128.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgNT0IgBgOIAAglIAFgVIgTgLIgOgzIgJg/IAAhZIgFgqIAAhtIgFgqIAAiSIgFglIAAhUIgGgpIAAgvIgFggIAAg0IgFgqIAAhJIgFAAQABA/gBA+IgGAqQABAlgBAkIgFAqIAADRQABAygBAyIgFAkIAABpQACBUgLBTQgFAegNAZQgHACgIAAQAEAaABAbQABATgQAHIiIAAIAAgVIAMgqIAGgQIgJgVIgUhjIAGgfIgCglIgJgqIAAgkIgFgqIAAhuIgFgkIAAiTIgFgkIAAiIIgGgfIAAgqIgFgaIAAiYIgQgfIAAiMIgFgqIAFheIgIgSIgCgTIAMg9IAJgWIAAgVQgcAMgeADIgvgHQgcgRgYgXQghgfgOgqQABgbAIgZIADgaIASglIADgaQAKggANgeIAOg1QAVg9AIhAQADgiARgdIANgZQAQgOATgKQASgMATgKQApgIAqgKQARgLAPgPIAZgVIAJgNQAKgHAGgLQgBgVgIgTIgTgSQgNgbABgeQAGgOAFgRQAAguAQgrQAzgsBFgDQA1ANAhAsQAKAkABAlIAGBKQgFAqgMApQgEANgBANQAJANANAJIAVARQAhALAjADQAZAFAWAOQAhASAcAZIANAaQALAUAEAWIAAAqQADAVAFAVIATBEQAMAeAIAgQAbgMAeACQANADAMAAQANgSALgWQAWgiAigWQAPgCAQABQAKARAVAJIAAAFQgcAMgTAZQANgGAOgCQAQAMAHAWIAHAQQAAAIgEAHIgLgDQgUAKgNATQgJAXgBATIgVAvQgjAdgqAPQggAdgpAQQgQAAgPgCIgagMIgVgEQgsgngYg1IgFAAIAAA6IgGAfQgCAqACAqQAFAbAJAZIAHAlQAEAOAAAPIgHAIQgCAMAAANIAAC7QAFAkAAAmQgFAPgQAFIAGBKIAABtIgGAqIAADxIgFApIAAElIgJAqIgBA0IAFAlIgXBhIgOAHIAZA0IABAgIgfABIgQAHIhJACg");
	this.shape_104.setTransform(-75.5,128.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgNT0IgCgOIAAglIAGgVIgUgLIgOgzIgIg/IAAhZIgFgqIAAhtIgGgqIAAiSIgFglIAAhUIgFgpIAAgvIgFggIAAg0IgGgqIAAhJIgFAAQACA/gCA+IgFAqQABAlgBAkIgFAqIAADCQABAvgBAvIgFAkIAAB+QABBUgKBTQgFAegOAZQgHACgHAAQAEAaABAbQABATgRAHIiIAAQAFgvAWgqIgOgDIgXhgIAFgvIgPiOIAAh4IgGgqIAAiHIgFgqIAAiDIgFgkIAAglIgFgqIAAiNIgOgXIgCiaIgFgaIAAg+IAFgqIgJgSIgCgTIANg9IAIgRIAAgaQgbALgeAEIgvgHQgcgRgYgXIgZgUQgVgigBgoIAGgZQAEgYAHgYIAMgaIAEgVIAbhOIAJglQAVg9AJhAQADgiARgdIANgZQAQgOATgKQARgMATgKQAqgIAqgKQATgNASgRIATgRIAJgNQAKgHAHgLQAAgVgKgTIgSgSQgMgbAAgeQAFgOAFgRQABgvAQgqQA1gtBHgCQBLAeASBQIAGBjQgGAngLAnQgEANgBANQAIANAOAJQAOAOARAKQAcAFAdACQAZAFAWAOQAiASAbAZIANAaQALAUAEAWIAAAqQADAVAGAVIATBEQALAeAIAgIAlgKIAvAQQAFgRAJgPQAig8A+gIIgGAQIAeAHIACAOQgeAGgRAZQAMgHAOgDQAVALAHAZIAIAbIgWgCIgOAMQgLAKgIALIgEAaQgHAUgJASQgDAMgHANQgbAWgiAMIgQAFIgUATQgYAQgdAEQgYAAgXgKIgagIQgLgIgKgKQgdgigSgoIgFAAIAAA1IgFAfIAABZIAOA0IAKBCIgGAIIgDAZIAAC7IAGBKIgSAaIACAVIAACcIgFAqIAADxIgFApIAAEvIgJAgIgCA0IAFAlIgWBhIgOAHIAYA0IACAgIgfABIgQAHIhJACg");
	this.shape_105.setTransform(-75.4,128.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgKT0IgCgOIAFg/IgPgCIgSg3IgIg/IAAhZIgGgqIAAhtIgFgqIAAiSIgFgqIAAhUIgGgqIAAgpIgFggIAAg0IgFgqIAAhJIgFAAQACA8gCA8IgGAqQACAlgCAkIgFAqIAACyQABApgBAqIgFAlIAACdQACBUgLBTQgEAegOAZQgHACgIAAQAEAaACAbQAAATgQAHIiIAAQAEgvAWgqIgNgDIgXhgIAFglIgQiSIAAh5IgFgpIAAiIIgFgqIAAiIIgFgkIAAglIgGgqIAAiNIgOgXIgBiUIgGgaIAAhEIAGgqIgJgSIgCgTIAMg9IAJgRIAAgaQgcALgeAEIgvgHQgbgRgZgXQgggcgPgnQABgdAGgbIAFghIASglIADgaQANglAPgkIAJglQAUg4AJg7QAAgTACgRQAIgTAKgSQAHgQALgOQAOgKARgJQAagSAfgKQAggDAegJQASgLAOgPIAZgVIAJgNIAOgNQAFgXgJgXIgWgWQgGgMgEgOQgCgQABgPIAJgVIABgfQANg8AsgnQAegKAhgBIAVAAQA/ASAcA8QAEASAAATIgCAPIAFAbIAAAvQgEAkgLAlQgFASgCASQAJANANAJQAOAOARAKQAgAFAfADQAkAMAgAVQAQAKAPANQAJAPAIAQIANAbQACAWAAAZQAFAtAOArQAPAyASAyQAPgIARgBQAUAFAUABQALgKAHgNQAUgjAfgYQAPgIAQgBQAMAIAKALIANAIIACAOQgeAGgRAaQAMgIAOgDQAVAMAHAZIAJAaIgXgCQgUAQgOAXIgCAaQgMAegSAbQgdAWgiALQgnAagsAOQgWgEgUgLIgagIQgPgLgLgNQgdgggNgpIgFAAIAAA6IgFAfIAABeIANAvIALBCIgGAIIgDAZIAAC7IAFBKIgRAaIACCxIgFAqIAADrIgGAvIAAEvIgJAgIgBA0IAFAlIgXBhIgOAHIAZA0IACAgIggABIgQAHIhJACg");
	this.shape_106.setTransform(-75.7,128.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgIT2IgBgNIAAglIAFgVIgUgMIgNgzIgJg+IAAhZIgFgqIAAhuIgFgpIAAiTIgGgqIAAhTIgFgqIAAgqIgFgfIAAg0IgFgqIAAhJIgGAAQACA8gCA8IgFAqQABAkgBAlIgFAqIAADBQABAvgBAvIgFAkIAACDQACBUgLBTQgFAegNAZQgHADgIAAQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgOgDIgXhhIAFgvIgPiNIAAh4IgFgqIAAiIIgGgpIAAiDIgFglIAAgkIgFgqIAAiNIgOgXIgCiVIgFgaIAAhEIAFgpIgJgSIgBgTIAJg0IALgVIgFglQgZARggADIgqgGQgbgRgZgXQghgcgOgoQAAgtAMgsIARgkIAEgbQAHgYAKgWQARgyANgyQAOgrAFguQADghARgdQAHgQALgOQAOgLAQgIQAbgSAfgKQAfgEAfgIQARgMAPgOIAZgVIAIgOIAQgMQADgjgXgcQgLgRgGgUQgDgPADgQQAHgLAHgPIAAgkQAGgcALgZQAgghAtgJIAagFIAVAEQAsAKAfAhQANAeAFAhIgEAPIAEAbIAAAkIACAVQgHAlgKAkQgIAWADAUIAUAQQAOAOARAKQAfAGAgADQAnANAiAXQAQALAOAOIANAaQAJARAGAUIAAA0QALA6AUA5QAJAoAhARQAaAAAaALQAIgaAQgVQAQgaAcgPQAPgCAQABIAAAQQAXAAAJAUQgeAGgRAaIAigJIAcA9IgTAAIgCgFIgFAAIgdAlIgEAaIgQAgQgDAQgLANQgiAWgnANQgdASghALQgRAAgPgDIgVgNQgQgGgPgIQgMgKgJgMQgZgfgMglIgFAAIAAA5IgFAfIAABfIAOAvIAKBCIgGAIIgCAZIAAC7IAFBJIgSAaIACCyIgFAqIAADrIgFAvIAAEvIgJAfIgCA0IAGAlIgXBhIgOAIIAYA0IACAfIgfACIgQAHIhJACg");
	this.shape_107.setTransform(-75.9,127.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgBT2IgBgNIAEg/IgOgDIgSg3IgJg+IAAhZIgFgqIAAhuIgFgpIAAiTIgGgqIAAhTIgFgqIAAgqIgFgfIAAg0IgFgqIAAhJIgGAAQACA5gCA6IgFAqQABAkgBAkIgFArIAACcQABAngBAoIgFAkIAAC8QACBUgLBTQgFAegNAZQgHADgIAAQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgOgDIgXhhIAFglIgPiSIAAh4IgFgqIAAiCIgGgqIAAiIIgFgkIAAgqIgFgqIAAiNIgTggIADiMIgFgaIAAhEIAFgfIgKgvIAJg0IALgVIgFglQgaAQgfAEIgVgEQgQgCgPgGQgTgOgSgQIgegZQgSgbgIgeQACgTAFgSQADgVAGgVIARgkIAEgbIAqiCQARguAHgwQgBgTADgSQAIgTAKgRIANgaQAQgNATgKQAbgSAfgKQAfgEAfgIQARgMAPgOIAZgVIAIgOIAQgMQADgIAAgIQAAgQgFgPIgZggQgHgPgDgQQADgeALgcQABgoAQgmQAtgqA/gFQATABASAEQAQAGAOAIQAuBGgEBZQADAPAAAQQgHAggKAfIgEAVQgIAPAGAQIAUAQQAOAOARAKQAfAGAgADQAkAMAgAVQAQAKAOANQAKAPAIAQQALATAEAXIAAAvQAKA3ATA3QAKAhAOAcQAOAHAQgBQASAEATAHQATguAmggQARgHATAEIAMALQARAJADATQgbADgPAXIAagIIARATIAPAvIgggGQgIARgKAPIgEAVQgPArgeAhQgfAPggAJQgjARgmADQgUgGgRgLIgagLQgOgOgLgQQgWgdgLghIgFAAIAAA5IgFAfIAABfIAOAvIAKBCIgGAIIgCAZIAAC7IAFBJIgSAaIACCyIgFAqIAADrIgFAvIAAEvIgJAfIgCA0IAGAlIgXBhIgOAIIAYA0IACAfIgfACIgQAHIhJACg");
	this.shape_108.setTransform(-76.6,127.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAET2IgCgNIAAglIAGgVIgTgLIgOg0IgIg+IAAhZIgFgqIAAhuIgGgpIAAiTIgFgqIAAhTIgFgqIAAgqIgFgfIAAg0IgGgqIAAhJIgFAAIAAB9IgFAqIAABOIgFAqIAAE/IgFAfIAADRIgXBoIgTAGQAEAaABAaQABATgRAHIiIAAIAAgVIAMgqIAHgPIgJgVIgUhjIAFggIgCgkIgIgqIgFhTIAAhpIgGglIAAiSIgFgkIAAiOIgFgaIAAgfIgFglIAAiXIgOgXIgCiaIgFgaIAAg/IAFgpIgJgSIgCgTIAKg0IAKgVIgEglQgyAWg2gLQgagRgVgUIgagVQgOgWgLgZQAAgYAHgXQADgVAGgVIARgkIAJgqIAkhzQASgxAHgyQgBgRACgPQAIgTALgRIANgaQAQgNATgKQAbgSAegKQAggEAfgIQAWgQAUgTQAMgMALgOIAQgMQADgQAAgPQgDgRgJgNIgNgMQgLgUgBgWQgBgQADgOIAIgRIAAgVQAMg5ApgoIAagJQAPgEAQAAIAgAAQBDASAaBCIAAA5QADAdACAdQgMA3gTA2QACARASALIAaAXQASAHATADQAdADAdAGIAfASQAcAQAWAWIANAaQAKARAFAUIAAApQACAYAHAYQAMAvAQAvQAIAbASAWIAVAEQANAFANABQALgKAGgNQAWgfAigPQATgBANANQAJAFAJAIQACAHAAAJQgbADgOAXQAMgIAOgCQAPALAGAUIAJAVQAAAIgEAIIgQgLIgFAAIgYAfQgDAPgBARQgLAegTAZQgiAUgnAKQghAOgjAFQgSgHgNgMIgfgNQgkgngWgxIgFAAIAAA0IgFAfIAABfIAOAvIAKBCIgGAIIgDAZIAAC7IAGBJIgSAaIACCyIgFAqIAADwIgFAvIAAEqIgJAfIgCA0IAFAlIgWBhIgOAIIAYA0IACAfIgfACIgQAHIhJACgAlGnIIgFgfIgEABIAEAeIAFAAg");
	this.shape_109.setTransform(-77.2,127.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAJT3IgBgOIAAglIAFgVIgTgLIgNgzIgJg6IAAhZIgFgqIAAhtIgFgqIAAiYIgGgpIAAhPIgFgqIAAgvIgFgfIAAgvIgFgqIAAhJIgGAAIAAB4IgFAqIAABOIgFAqIAAE6IgFAkIAADRIgXBoIgTAGQAEAaABAaQABATgQAHIiIAAIAAgVIAMgpIAGgQIgJgVIgUhjIAFggIgBgkIgJgqIgFhTIAAhpIgFglIAAiSIgGgkIAAiIIgFgaIAAggIgFgqIAAiXIgOgXIgCiaIgFgaIAAg5IAFgvIgJgSIgBgTIAMg9IAIgMIgFglQgdAQghADIgQgHIgfgEQgXgPgTgTIgZgVQgPgWgLgZQgBgaAIgaIAJgqIAMgaIAJgkIAchKIAOg0QARgxAHgyQgBgQADgQQAIgSAKgSIANgZQAQgOATgKQAbgSAfgKQAfgEAfgIQAOgJAMgMIAagVIANgTIANgJQAHgSgBgWQgLgbgSgUQgHgPgBgQQAAgQADgPIAJgNIgBgNIABgQQAIghANgeQAigkAwgGQAugCAqAPQAhAdAJAqQADAPAAAQIgDAQIAFAaQABAXgBAYIgeBoQABARATALIAaAWQAUAIAWAEQAaACAaAGIAfASQAcAQAXAWIANAaQALATAEAXIAAAvIAIAlQAMAsAOAsQAKAfAPAbQANAKAQACIAQAJQAdg2A3gNQAJAEAHAIQAPAHAFAQIgZAIIgRATIAjgEIAWA4IgEAKIgQgKIgFAAIgTAaIgEAVIgNAfQgHARgJAOQgiAWgoAKQghAJgjABQgSgHgNgMQgSgIgRgLQgdgmgUgsIgFAAIAAA0IgFAgIAABZIAOA0IAKBCIgGAIIgCAZIAADAIAFBEIgSAaIACCtIgFAqIAADrIgFAaIAAFJIgJAfIgCA1IAGAkIgXBiIgOAHIAYA0IACAfIgfACIgQAHIhJACgAlBnIIgFgfIgDABIADAeIAFAAg");
	this.shape_110.setTransform(-77.7,127.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AART5IgBgOIAAgkIAFgVIgTgMIgNgzIgJg/IAAhYIgFgqIAAhuIgFgqIAAiSIgFgqIAAhUIgGgpIAAgqIgFgfIAAg1IgFgqIAAhJIgGAAQACA8gCA8IgFAqQABAlgBAkIgFAqIAACnQABAogBAnIgFAkIAACtQACBUgLBTQgFAegNAZQgHADgIAAQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgOgDIgXhgIAFglIgPiSIAAh4IgFgqIAAiIIgGgqIAAiCIgFglIAAgqIgFgqIAAiNIgOgWIgCifIgFgbIAFhjIgJgRIgBgTIAMg+IAIgMIgEgkQgfANggAFIgVgHQgOgBgMgCQgZgSgWgVQgOgKgLgLIgNgbQgHgMgCgOQACgVAGgUIAEgbIARgpIAJglIAXg5IAqiIQACgVgBgVQAFgfAPgbIANgZQAQgNATgKQASgNATgKQAkgIAlgGQAVgJAQgPIAegaIAIgPIAQgNQADgRAAgSQgDgQgIgOIgOgMQgIgRgEgUQAAgQADgOQAJgJAEgSIAAgaQALgpAaggQAXgRAdgEIAagFQAyADAqAcQAVAhAGAoIgDAaQADAnAAAoQgLA0gTAzQACARASALIAaAYQARAHAUADQAcADAdAGIAfASQAZAOAVASQAKAPAIARQANAYACAcIAAAkIAIAlQAMAsAOAtQAKAbAMAZIAIAPQAQAJATAHQAOgfAcgVQAUgGAWABIAAAFIAVARIAKAPIgfALIgLAPIAagJIAOATIAMAvIgUgBQgWARgBAaQgLAfgTAaQgWAQgZAGIgVAJQgaACgagBQgNAAgNgDIgVgRIgfgTQgJgLgHgNQgSgcgNgdIgGAAIAAA5IgFAfQgCAqACAqQAFAbAJAZIAHAlQAEAOgBAPIgGAIQgCAMAAAOIAAC7QAFAkAAAlQgFAPgQAGIAFBJIAABuIgFApIAAD2IgFAqIAAEfIgJAqIgBA0IAFAlIgXBhIgOAHIAYA1IACAfIgfABIgQAIIhJABgAk4nGIgGgfIgDACIADAdIAGAAg");
	this.shape_111.setTransform(-78.5,127.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAWT5IgBgOIAAgkIAFgVIgTgMIgNgzIgJg/IAAhYIgFgqIAAhzIgFgqIAAiNIgFgqIAAhUIgGgpIAAgvIgFgqIAAgqIgFglIAAhJIgFAAQABA/gBA/IgGAqQABAngBAnIgFAqIAADLQABAygBAyIgFAkIAABpQACBUgLBTQgFAegNAZQgHADgIAAQAEAZABAbQABATgQAHIiIAAIAAgVIAMgqIAGgPIgJgVIgUhkIAGgfIgLhUIAAgfIgFglIAAhtIgFgqIAAiSIgFgqIAAiIIgLhuIAAiIIgOgWIgCifIgFggIAAgvIAFgvIgIgRIgCgTIAMg+IAIgMIgEgkIglAMQgNAFgNABIgQgGQgQgBgPgDQgOgKgMgMQgZgSgVgUIgNgbQgGgMgDgOQABgTAFgRQAEgYAHgXIAMgaIAOg1IAXg5IARg/QAPgmAGgoQAAgWACgUQAIgTAKgSIANgZQAQgNATgKQAbgSAfgKQAfgEAfgIQAPgKAMgLIAagVIAMgUIAQgNQAEgTgBgVQgIgYgQgSQgJgSgDgTIABgVQAKgNAEgSQAJhHA2gsQAZgHAbgDIAVAAQAUADAVAIQAQAIAPAMQAXAjADArIAABZQgJA6gVA4IgDAIQANANAPALIAVATQAjALAmADQAcAJAYAPQAWAMAUAQQAKALAHAOQAKASAIATQACAWAAAZQADAiALAiQAMAyARAxQAOAbAFAeIAgAGQAWgpAugGQAIAFAIAIQAQAKAEASIgagFIgKAVIAegDIAJAYIALAVIACAVIgTgFIgCgGIgFAAIgPAbIgDAaQgKAYgOAXQgjAZgrAGIglAAQgagFgVgRQgSgMgRgOQgLgPgIgPQgOgXgKgYIgFAAIAAA5IgGAfQgCAqACAqQAFAbAJAZIAHAlQAEAOAAAPIgHAIQgCAMAAAOIAAC7QAFAkAAAlQgFAPgQAGIAGBJIAABuIgGApIAAD7IgFAqIAAEaIgJAqIgBA0IAFAlIgXBhIgOAHIAZA1IABAfIgfABIgQAIIhJABgAkznGIgGgkIgDABIADAjIAGAAg");
	this.shape_112.setTransform(-79.1,127.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAeT5IgBgOIAAgkIAFgVIgTgMIgOgzIgIg/IAAhYIgFgqIAAhzIgFgqIAAiNIgFgqIAAhUIgGgpIAAgvIgFggIAAg0IgFgqIAAhJIgGAAIAACIIgFAqIAABJIgFAqIAAE+IgFAgIAADRIgXBnIgTAHQAEAZABAbQABATgQAHIiIAAIAAgVIAMgqIAGgPIgJgVIgUhkIAFgfIgBglIgJgpIgFhUIAAhoIgFglIAAiSIgGggIAAiSIgFgqIAAgaIgFgfIAAiTIgOgWIgCgTIAAiMIgFhKIAFg0IgJgRIgBgTIAMg+IAIgMIgEgkQgaAKgbAFQgQgBgPgDIgVgDQgbgRgZgWQglgjgKgxIAIglQAEgTAFgRIAMgaIAEgVIBGjRQACgTgBgSQAFghAPgeIANgZQAQgNATgKQAbgSAfgKQAigEAhgLIAwgnIAQgYQAHgDAIABQACgegEgcQgKgRgNgOQgIgSgEgTQABgPAGgPIAIgMIABgaQAOg8AxgmQARgGATgBQAPgEARAAQBKASAdBGIAABeIADAVQgMA4gVA1QACARASALIAaAXQAWAIAZAFQAYABAXAGQAYALAXARQATALAQARIANAaQALATAEAWIAAAgQADAiALAiQAKAqAOApIAjBUQAXgUAYgRQAkgBAZAbIACAQIgSgCIgTASQAMgGAOgCQAOAHACAQIAJAVIABAbIgVgLQgQAxgaAtQgZARgdAHIgTAHQgegDgbgKIgagWQgQgKgOgMQgaglgRgpIgGAAIAAA5IgFAfQgCAqACAqQAFAbAJAZIAHAlQAEAOgBAPIgGAIQgCAMAAAOQgCAiACAhQAEAfABAfQgFAcAAAeQAFAkAAAlQgFAPgQAGIAFBJIAABuIgFApIAAD7IgFAqIAAEaIgJAqIgBA0IAFAlIgXBhIgOAHIAYA1IACAfIgfABIgQAIIhJABgAkrnGIgGgkIgDABIADAjIAGAAg");
	this.shape_113.setTransform(-79.8,127.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAkT2IgCgNIAAglIAFgVIgTgMIgOgzIgHg+IAAhZIgGgqIAAhuIgFgpIAAiTIgFgqIAAhTIgGgqIAAgvIgFgfIAAg0IgFgrIAAhIIgFAAQACBDgCBEIgGAqQACAlgCAkIgFAqIAADMQACAxgCAyIgFAlIAABoQACBUgLBTQgEAegOAZQgHADgIAAQAEAaACAaQAAATgQAHIiIAAQAEgvAWgpIgNgDIgXhhIAFgvIgLhOIAAggIgFgkIAAhzIgFgqIAAiNIgFgqIAAiIIgLhoIAAh9IgCgbIgMgMIgBi0IgGgvIAGg0IgLgqIAMg9IAIgMIgEglQggALgfAFIgqgHQgZgPgWgUIgagVQgYghgCgoIAShJIAMgVIADgVIBGjRQACgSgBgTQAFghAPgdIAOgaQAPgNAUgKQAagSAfgKQAjgEAhgLQAZgRAWgWIARgYIAOgCQADgdgFgdQgKgQgMgPQgKgWgBgZIANgfIABgVQAGgeALgcQAPgWAVgSQATgJAWgDIA5AAQA7AUAYA6IAABfQAEAPAAAQQgIAdgKAdQgHAegPAbQAdAUAcAWQAcAJAeABQAqAKAkAZQAQAKAPANQAJAPAIAQIANAaQACAXAAAYQAEAjAKAhQAPA3AUA3QANAdAGAhQAWgSAZgMQAlAHAUAiIgVAEIgPAMIAegDIAJAXIAKAMIADAeIgagFQgIAggNAfIgLAVQg6AjhDgQQgVgOgRgUIgSgRQgVgogbghIAAA6IgFAfQgCAlACAkIAGAlIAIAVIAFAfQAEASABARQgGAHgDAKQABAoAEAnQACAsgCAsIgFAfIAFAaQACAagCAaQgFAPgPAGIAFBJIAABuIgFAqIAAD1IgGAqIAAEfIgJAqIgBA0IAFAlIgXBhIgOAIIAZA0IACAfIggACIgQAHIhJACgAkmnDIgFgqIgEACIAEAoIAFAAg");
	this.shape_114.setTransform(-80.4,127.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AApT3IgBgOIAAglIAFgVIgTgLIgOgzIgJg/IAAhZIgEgqIAAhzIgFgqIAAiNIgFgfIAAhjIgGgqIAAgqIgFgqIAAgvIgFgkIAAhPIgFAAIAACTIgGAfIAABUIgFApIAAE/IgFAaIAADRIgXBoIgTAGQAEAaABAaQABATgQAHIiIAAIAAgVIAMgpIAGgQIgGgMIgXhsIAGgaIgLhZIAAgqIgFgkIAAhfIgFg5IAAiNIgFgqIAAiDIgLhyIAAiDIgOgXIgCgYIAAisIgFgaIAFg0IgBgQIgJgaIAMhCIAJgcIgLgaIgFAAQggAWgpgFIgVgDQgZgPgWgUIgagVQgYghgCgoIAJgkQADgTAFgSIAMgaIAJglIBBi8QACgSgBgSQAGgiAOgdQAGgNAHgMQARgOASgKQAbgSAfgKQAjgEAhgLQAYgRAXgWIARgYIAOgCQAEgdgHgcQgTgbgJgfIAAgaIAJgaIABgVQAGgeALgbQAyg2BJABQA4ALAhAvQAJAugEAwIAGAvQgRA/gUA+QAbARAZAUQAiAIAiAEQAkAMAgAVQARAKAOANQAKAOAHARIANAaQACAUAAAWQAFAtAOAsQANAvAQAvQAQAgAEAkQAPgRAVgIQAeAIAVAWIACAQIgZAFIgCAFQAPgHAOAIIAFATIAMARQABAQgFAPIgVgKQgIApgUAlQgpAcgzADQgegJgWgWQgTgUgQgWIgmhJIgLBeIAABJIAVBeIAEAeIgJARIAFBPIAACcIgGA3IgPAHIAGA/IAABuIgGA5IAAEVIgFAqIAAEAIgJAkIgBA1IAFAkIgXBiIgOAHIAZA0IABAfIgfACIgQAHIhJACgAkgnDIgGgvIgDACIADAtIAGAAg");
	this.shape_115.setTransform(-81,127.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAvT3IgCgOIAAglIAGgVIgUgLIgOgzIgIg/IAAhZIgFgqIAAh4IgFgqIAAiNIgFgaIAAhjIgFgqIAAgvIgFgfIAAg1IgGgpIAAhKIgFAAIAACTIgFAfIAABUIgFApIAAE/IgFAaIAADRIgXBoIgTAGQAEAaABAaQABATgRAHIiIAAIAAgVIAMgpIAHgQIgHgMIgWhsIAFgaIgKhZIAAgqIgFgkIAAhfIgGg5IAAiNIgFgqIAAiDIgKhyIAAiDIgOgXIgCgYIAAixIgEgfIAEgqIgBgQIgKgaIANhCIAIgcIgKgaIgFAAIgCAFQgYALgbAFIgpgHQgagPgVgUIgagVQgYghgDgoIAJgkQADgTAGgSIAMgaIAJglIARgqIAYhOQAPgnAKgnIAAggQAIgnAUgiQARgUAXgNQAbgSAegKQAmgEAjgLIASgQQAWgWAUgYIALgJQAJgcgJgcQgPgRgMgUQgDgSABgTQAFgQAGgPIAAgVQAFgbAKgZQAzg7BPABQA6AQAdA0IAFAvIgDAQIAFBEQgNBAgYA9QAbAQAaAVQAcAJAdABQAqALAlAYQAQAKAPANQALAOAGARQALAVADAaQABAlAGAkIAMAlQANAvARAvQAOAdAFAiIAggIIAoAXIANAvIANAVIgJAgIgQgLQgBATgGASIgKARQgIATgQAOQgUAKgWAEQgbAFgZgIQgwgpgbg5QgMgXgIgYIgFAAIgFAaIAAAqIgFAaQgCAiACAiIAFAaIABAQIAIAVIAMA5QgFAMgGAUQACAfAEAfIAABOQABA+gBA/QgDATgSAHIAFA/IAABuIgFA5IAAEqIgFAqIAADrIgJAkIgCA1IAFAkIgWBiIgOAHIAYA0IACAfIgfACIgQAHIhJACgAkbnDIgFgvIgEACIAEAtIAFAAg");
	this.shape_116.setTransform(-81.5,127.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AA0T3IgBgOIAFg/IgPgDIgSg2IgJg/IAAheIgFgqIAAh4IgFgqIAAiIIgFgaIACgfIgHidIgFgqIAAgvIgFgkIAAhEIgGAAIAACNIgFApIAABPIgFAqIAAE+IgFAbIAADLIgXBoIgTAGQAEAaABAaQABATgQAHIiIAAIAAgVIAMgpIAGgQIgGgMIgXhsIAFgaIgKhZIAAgvIgFglIAAheIgFgvIAAiXIgGgqIAAiDIgKhtIAAiDIgOgXIgCgYIAAj/IgKglIAVheIgLgaIgFAAIgCAFQgiAOglgDQgOgCgMgDQgXgPgTgRIgagVQgZgjgBgrIARhEIAMgaIAEgVQAMglAQgkIATg/QAPgnAJgnQABggAGgfQANggAWgZQAPgMAQgJQAPgLARgJQAvgIAvgMQAQgNAPgPIAYgVQAMgQAJgQQACgYgIgWIgQgQQgOgeABghIALgaIAAgVQAFgeALgbQA1g2BMABQA6AQAdA0IAFAvIgDAQQABASAEATIAAAkQgGAdgJAdIgVA+QAbAQAZAVQAcAJAdABQAqALAlAYQAQAKAPANQARAYALAcIAHAQQAAAPgDAQQgBANACANIAMAqQAOA0ASA0QALAXAKAZQACAPgBAQIAVgDQAWAJASAPIADAPIAKAbQANATAAAWIgIAQIgLgFQgKAhgRAeQgWAUgdAGQgXAFgYgCQgjgUgZgeIgOgvQgPgcgKgeIgGAAIgFAaIAAAvIgFAaIAAA/IAFAaIABAQIAJAVIALA5IgKAaIAFBKIAADKIgNAWIgDAZIAACoIgFApIAAE1IgFAvIAADbIgJAfIgCA1IAGAkIgXBiIgOAHIAYA0IACAfIgfACIgQAHIhJACgAkWnDIgFgvIgDACIADAtIAFAAg");
	this.shape_117.setTransform(-82,127.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AA5T3IgBgOIAAglIAFgVIgTgLIgOgzIgJg/IAAhZIgFgqIAAh4IgFgqIAAiIIgFgfIAAhjIgFgqIAAgvIgFgqIAAgvIgFgfIAAg/IgFAAIAACNIgGAqIAABOIgFAqIAAE6IgFAaIAADGIgXBoIgTAGQAEAaABAaQABATgQAHIiIAAIAAgVIAMgpIAGgQIgJgVIgUhZIAGhEIgLgvIAAhJIgFgfIAAhjIgFgqIAAiTIgFgpIAAiDIgGgaIAAglIgFgkIAAhZIAFg/IgTgHIgCgTIAAkJIgKggIALg5IAJgVIAGgfIgQgLIgFAAIgCAFQgiANglgCQgqgMgfgeIgZgVQgWgiAAgnIAMg6IARgkIAEgVQANglAPgkIATg/QAPgnAJgnQACggAFgfQAXgwAsgeQAOgLARgJQAwgIAugMQAQgNAPgPIAYgVQAMgQAJgQQACgXgIgXIgQgQQgOgeACghIAKgaIAAgVQAMg5AogoQAtgPAwACQAiAIAdASQAXAkAHArIgEA0QAEAUACAWIgJAkQgMAtgQAsQAbARAZAUQAsAKAtAGQAQAIAPALQAfARAZAaIANAaQALAUAEAWQgCAiAEAiQAPA9AVA7IASAlIAIAkQARAWAWALQAKANAEAQIAHAIIAEASQAMANgBAUQgIAPgMALQgKAXgMAYQgTARgaAIIgaAGQgmgFgegXQgUgYgGggIgCgUIgYg6IgFAAIgFAfIAAAvIgGAbIAAA0IAGAaIAAAVIAIAMIAMBCIgKAgIAFA+IAADQIgNAWIgCAZIAACoIgGApIAAELIgFAvIAAEFIgJAfIgBA1IAFAkIgXBiIgOAHIAZA0IABAfIgfACIgQAHIhJACgAkQnDIgGgvIgDACIADAtIAGAAg");
	this.shape_118.setTransform(-82.6,127.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AA+T3IgBgOIAAglIAFgVIgUgLIgNgzIgJg/IAAhZIgFgqIAAh9IgFgqIAAiIIgGgaIADgfIgIiiIgEgqIAAgvIgFgfIAAg1IgGAAIAACIIgFAqIAABOIgFAqIAAE6IgFAaIAADGIgXBoIgTAGQAEAaABAaQABATgQAHIiIAAIAAgVIAMgpIAGgQIgJgVIgUhZIAFhEIgKgvIAAhJIgFgfIAAhjIgFgqIAAiTIgGgpIAAiDIgFgaIAAglIgFgkIAAhZIAFg/IgTgHIgCgTIAAkJIgJgbIAKg+IAJgVIAGgfIgVgGQgfAHggAEIgqgIQgVgQgUgSIgagVQgUgfgBglIAMg/IARgkIAEgVQAMglAQgkIARg6QAQgpAKgqQAFg/Agg0QAOgNARgKQAbgSAfgKQAigEAhgIQAUgOARgRIAUgRIAIgNIAMgMQAKgegOgcIgSgUIgLggQABgcAMgYIABgaQAMg3AogmQAUgJAWgDQBRgCA0A8QAFASACASIAABPQADAPAAAQIgiB4QAbAQAZAVQAcAJAdABQAiAHAdASQAfARAZAaQAOAZAMAbQACAcAAAeQADAgALAfQAIAiALAiQAPAhANAjIADAUQAGAQAKAPIAQAMQALAYAKAaQAMANAAAUQgIARgMAOQgLAZgPAWQgQANgUAGIgNAAIgNAFQgogGgggYQgRgVgFgZIAAglQgJgbgMgZQgMAqABAqIgFAfQABAiAEAiIABAVIAIAMQAFAWADAXIAEAVIgKAaQABAfAEAgIAACRQABAjgBAhQgFAOgIAIQgDAMAAANIAABJIAEAVIgJBzIAAEqIgFAvIAADmIgJAlQgDAXABAYQAEARACATQgGAggJAfQgCASgGARIgOAHIAYA0IACAfIgfACIgQAHIhJACgAkMnDIgFgvQgKAWAKAZIAFAAg");
	this.shape_119.setTransform(-83,127.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("ABFT5IgBgOIAAgkIAFgVIgTgMIgOgzIgJg/IAAheIgFgqIAAiCIgFgqIAAh9IgFgaIADgbIgDhYIgGgqIAAgqIgFglIAAg0IgFgaIAAgqIgEAAIAACDIgGAqIAABTIgFAqIAAE0IgFAaIAADCIgXBnIgTAHQAEAZABAbQABATgQAHIiIAAIAAgVQAEgWAIgUIAGgPIgJgVQgKgngIgoQABgnADgnQgHgcgEgeQABgigBgiIgFgkQABgwgBguIgFgqQAChKgChIIgFgqQABhCgBhBIgGgfQgHhsAHhqIgSgLIgDgaIAAj/IgJgaIAKg/IAJgVIAGgfIgVgFQgfAHgfADIgqgIQgWgPgUgTQgQgMgOgOQgQgdgFghIALgjQADgUAGgTIANgaIAOg0IA5iiQAGgfAEggIABgUQANgcASgZQATgQAWgMQAVgPAagHQAigEAigIQATgOARgSIAdgdIAKgIQAJgcgJgdIgVgaQgHgMgEgOQgDgTAEgSQAIgLAFgPIAAgfQAGgcALgYQAggjAtgHIAZgFQANABANADQAiAHAbAUQAcA4AABAQACAggCAfQgFAagJAaQgHAegPAcQAdASAcAXQAcAJAeACQAnAIAiAWQAaAPAUAXQAOAZALAbQADAZgBAbQAEAjAKAhQANAvAQAvIASAqIADAVIAXAvIAEAZIALAMIAFAOQAOATgDAYIgNAVQgPAhgbAXQg9AQg2gfQgOgMgKgNQgDgNABgOQAAgegCgbIgOgfIgFAAIgFAkIAAA0IgGAlIAGA0IAAAVIAIARIAMA+IgKAfIAFA5IAADbIgPAkIAABKIAFAkIgFAfIAAAqIgGAqIAAFEIgFAqIAADMIgKA5IAAAaIAFAlIgXBhIgOAHIAZA1IABAfIgfABIgQAIIhJABgAkEnAIgGg1IgDACQgGAaAJAZIAGAAg");
	this.shape_120.setTransform(-83.8,127.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("ABLT5IgCgOIAAgkIAGgVIgUgMIgOgzIgIg/IAAheIgFgqIAAiCIgGgqIAAh9IgFgaIADgbIgDhYIgFgqIAAgqIgFglIAAg0IgGgaIAAgqIgFAAIAACDIgEAqIAABTIgFAqIAAE0IgFAaIAADCIgXBnIgTAHQAEAZABAbQABATgRAHIiIAAIAAgVQAFgWAHgUIAHgPIgJgVQgKgngIgoQAAgnADgnQgGgcgEgeQABgigBgiIgFgkQABgwgBguIgGgqQADhKgDhIIgFgqQAChCgChBIgFgfQgIhsAIhqIgTgLIgCgaIAAj/IgKgfIAahuIgVgFQgdAHgdADQgVgCgVgFQgZgPgWgUQgQgMgNgOQgPgZgIgbQADgSAGgSQAFgbAJgaIAMgaIBGjRQAHgfADggIACgUIAMgVQAIgRAKgPQAUgQAVgMQAUgOAWgIQAlgEAkgIQAUgOARgSIAqgqQADgdgKgcQgPgSgNgTIgCgpIAJgbIABgaQAKgtAbglQAwgbA4AAQAPACAQAGQAOAFAMAIQAdAiAIAsIAAA/QAEAUABAVIgJAgQgLAtgRAsQAUAIARAOQAJALAMAIQAhAKAjACQAmAMAjAXQAQAKANAMIANAZQAOAZAHAcIAAA0QAHAiAMAiQAKAnAOAnIARAlIAEAaIAWAvIAIA0IANARQADAOgDAQIgYA0QgUAVgbAKIgMgBQgJAEgKACQgagFgVgNQgXgNgRgUQgDgNABgNIABg/IgMglIgFAAIgFBpIgFAaIAFA0IAAAVIAJARIAMA+IgLAfIAGA5IAADbIgQAkIAABKIAFAkIgFAaIAAA0IgFAqIAAE/IgFAqIAADMIgLA5IAAAaIAFAlIgWBhIgOAHIAYA1IACAfIgfABIgQAIIhJABgAj/nAIgFg1IgEACQgFAaAJAZIAFAAg");
	this.shape_121.setTransform(-84.3,127.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("ABOT5IgCgOIAFg+IgPgDIgSg3IgIg/IAAheIgGgqIAAiHIgFgqIAAh4IgFggIAFgaIgFgqIAAgvIgFgfIAAg0IgGgqIAAg0IgFgvIgFAAIAAB9IgEAqIAABOIgGAqIAAE0IgFAaIAADCIgWBnIgUAHQAFAZABAbQAAATgQAHIiIAAQAEgvAWgqQgHAAgGgDQgGgQgDgSQgJgfgFgfQABgTAEgSQgEgtgHgsQABgigBgiIgFgkQABgwgBguIgFglQAChMgChLIgFggQABhHgBhGIgFgqIAAgfIgGgkIAChzQACgIgBgHIgQgRQgDgNABgNIAAi2QgDgtAIgsIgQgFQAFgiAHgiQAKgXACgXQgKgLgOgCIgPAGQgYAFgXgBIgggFQgRgKgOgNQgrgggYgvQgBgZAJgWQADgWAFgUIASglIAIgkIAXg1IAlhtQAFgVACgVIAFgaQgBgNADgNIAMgVQAJgUANgQQASgNATgLQAUgNAWgJQAlgEAkgIQAWgQAUgTQAZgVAMgcQAAgYgIgWIgSgRQgKgPgFgQQgDgTAEgSIAJgPIgBgVQAFghALgeQAxg3BLgCQAeADAcAOQAeAjAGAvQAEA0ABA0QgHAogKAnIgOAqQAUAHARAOQAJALALAJQAcAKAeABQAtAKAnAaQAQAKAOAMQAHAMAFANIASAlQADAWgBAZQAEAjAKAhQANAyARAxIARAlIAEAaIAWAvIAJA/IAHAPQgEAigRAfIgEAOQgZAVggAGQgSAFgSgDQgWgIgUgNQgRgNgMgQQgDgNAAgNIAAgqIAHgcIgMgeIgFAAIgKCYIAFAaIAAAVIAIAWIAMA4IgKAqIAFAfIAADwIgPAkIAAA/IAFA0IgFAaIAAAvIgFAqIAAFUIgGAqIAAC3IgJAkIAABjIgTBSIgOAHIAZA1IACAfIggABIgPAIIhKABgAj3mxIgKhEIgEACIgEAeIANAkIAFAAg");
	this.shape_122.setTransform(-84.6,127.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("ABST5IgCgOIAAgkIAFgVIgTgMIgOgzIgOjMIAAiIIgFgpIAAhzIgFggIAFgaIgFgqIAAgvIgFgfIAAg0IgGgqIAAg0IgFgqIgFAAIAAB4IgFAqIAABTIgFAqIAAEvIgFAqIAACiIgOBZIgIAeIgUAHQAFAZABAbQABATgRAHIiIAAQAEgvAWgqIgNgDIgXhgIAFglIgLhZIAAhEIgFgkIAAheIgFglIAAiXIgFggIAAiNIgFgqIAAgfIgGgkIAChuIADgQIgSgVIgCgaIAAirIAFhkIgQgFIAah9IgFADIgQgOIgFAAQgeAVgmgDIgagEQgRgKgOgNQgrgggYgvQgBgbAJgaQADgTAFgRIASglIAIgkIAuh+QAKgdAJgcIAHgqIABgaIANgaQAJgUANgQQASgNATgLQAUgNAWgJQAlgEAkgIQARgMAOgPIAVgQQAKgOAQgBQACgkgJggIgWgVQgKgRgGgTQgCgOACgMQAJgMAFgUQABglALgkQA1g5BQAAQAQADAQAGQAqAfAKA2IAAAfIAFAaQAAAwgJAuQgHAmgPAjIBJAzQApAIArAGQAYAMAXARQAQAJAOAMQAHAKAFALQAKAUAIAWQADAXgBAYQAEAjAKAhQAJAiAKAiQAPAhANAjIAEAVIARAkQAKAkACAlQABAdgDAdQgGAQgHAPIgHAPQgaAUggAFIgYACQgOgDgMgHQgagMgVgUQgMggABgkIAJgkQgEgSgFgTIgFAAIAAAlIgFAfIAAA0IgFAaIAFAlIAAAVIAIAWIANA4IgLAqIAFAqIAADlIgPAkIAFBUIgKCYIAAFTIgGAqIAACyIgJAkIAABjIgTBSIgOAHIAZA1IACAfIggABIgPAIIhKABgAjzmxIgKhEIgEACIgEAeIANAkIAFAAg");
	this.shape_123.setTransform(-85,127.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("ABST5IgCgOIAAgkIAGgVIgUgMIgOgzIgNjMIAAiIIgGgpIAAhzIgFggIAFgaIgFgfIAAg6IgFgfIAAg0IgLh+IgFAAIAABzIgFAqIAABZIgEAqIAAEqIgFAaIAAC8IgGAkIgRBDIgTAHQAEAZABAbQABATgRAHIiIAAIAAgVIAMgqIAHgPIgJgVIgUhZIAFhEIgKgvIAAhUIgFgfIAAhpIgGgpIAAiTIgFgqIAAh9IgFgaIAAgvIgFglIAAhYIAFgbIgTgaIgCgaIAAicIAFhzIgQgFIAbh9IgUgFIgBgGIgGAAIgBAGQgWAKgYADQgegBgbgJIgVgSQgrgggXgvQgBgbAIgaQADgTAFgRIASglIADgVQAKgdANgcIAchUQALgcAIgdIAHgqIACgaIANgaQAIgUAOgQQARgNATgLQAUgNAWgJQAlgEAkgIQARgMAPgPIAUgQQALgOAQgBQABgmgOgiIgSgNQgMgQgEgTIAAgaQAGgUAEgWQABgmAMgjQA3g1BNABQBAAWAUBCIAAAlIAIAaIgDAQIAEAaIgNA0IgDAgQgIAVgLAUQApAXAlAcQAvAHAvAMIAqAcQAQAJAOAOIANAaQALATAEAWIAAAvQAHAlAMAlIAIAkIAhBPIAIAkIASAlIAIA5QgCAYgEAXQgHAsgdAhQgcAMgeADQgTgEgRgJQgdgMgVgVQgDgMAAgNIAAg0QAFgTADgSIgIgfIgFAAIAAAvIgFAfIAAA6IgEAaIAEAaIAAAVIAOAqIAMA5IgPAQIAFAaIAADaIACAlIgQAVIgCAVIAFBTIgKCOIAAFTIgFAqIAACyIgJAkIgCAvIAFAlIgWBhIgOAHIAYA1IACAfIgfABIgQAIIhJABgAjzmxIgKhEQgLAhAQAjIAFAAg");
	this.shape_124.setTransform(-85,127.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ABST5IgCgOIAAgkIAGgVIgUgMIgOgzIgNjMIAAiNIgGgqIgDiHIADggIgFgqIAAg0IgFgfIAAg0IgFgqIAAhJIgLAAIAABzIgFApIAABUIgEAqIAAEqIgFAaIAAC8IgGAkIgRBDIgTAHQAEAZABAbQABATgRAHIiIAAQAFgvAWgqIgOgDIgXhgIAFglIgKheIAAhEIgFgkIAAheIgGgqIAAiYIgFgqIAAiCIgKhjIABhkIADgaIgSgVIgCgaIAAjqIADgfIgOgLIANg+IAMggIACgfIgUgFIgBgGIgGAAIgBAGQgUAJgUACQghACgegLQgTgNgSgQQgggcgSgnQgCgcAJgZIAIgkIASglIADgVQAQgqARgpIAOgvQATg0ALg1IAAgVQAFgTAKgRQAIgUAOgQQARgNATgLQAUgNAWgJQAlgEAkgIQAYgRAXgVQAQgMANgNQADgYgHgXQgEgLgGgIIgPgJQgJgJgFgKQgHgXAAgYIALggIAAgUQADghAKgeQA3g1BNABQAjAIAaAXQAQAdAHAiIAAAaIAJAaIgDAQIACAPQgBAYgGAXIgIA6IgOAkQAqAWAkAdIBUAOQATAKARAMQATALASANQAKALAGAOQAKASAJATQACAWAAAZQAIA8ATA8QAJAdALAcIANAbIAJAkIARAlIAIA+QgFAugTArQgHASgQAOQgaAKgbAFQgQgDgPgGQgagKgVgRIgOgNQgCgLAAgNQgBgaADgaIAKglIgHgaIgFAAIAAAvIgFAlIAABzIAOAqIAMA+IgNALIADAaIAADaIAEAlIgSAaIgCAVIAFBuIgFAfIAAAvIgFAqIAAFOIgFAqIAACyIgJAkIgCAvIAFAlIgWBhIgOAHIAYA1IACAfIgfABIgQAIIhJABgAjzmxIgFhEIgKAAIgEAgIAOAkIAFAAg");
	this.shape_125.setTransform(-85,127.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("ABST5IgBgOIAAgkIAFgVIgTgMIgOgzIgOjMIAAiSIgFgqIAAh4IgDgVIADgaIgFgqIAAg0IgGgfIAAg1IgFgqIAAhJIgFAAIgFAgIAABeIgGAqIAABYIgEAbIAAE0IgFAaIgGDhIgRA9IgTAHQAEAZABAbQABATgQAHIiIAAIAAgVQAEgVAIgVIAGgPIgJgVIgNg1QgFgXgCgYIAGgkIgLhUQABglgBgkIgFgqQACgygCgxIgFglQAChJgChJIgFgfQABhEgBhEIgGgqIgFiDQAFgXAAgYQgHgRgLgKQgDgMAAgNIAAgaIAGgaIgGgqQgChGAChGQAGgSgHgRIgJgHIAMg5IANglIABgfIgagGIglALQgRAAgSgCIgRAAQgUgIgQgPQgZgRgWgVQgHgMgFgOQgIgRgBgTIARhKIARgfIAJgkIAchEIAOgvQASgxAMgzQgBgSACgSIAag0QAOgOAQgJQAbgUAfgNIA+gJQAbgNAUgUIAkgYQAIgcgMgcIgHgPIgXgQIgLgVQgJgaAJgYIAJgDQgHhVA8g8QAogNAqACQBEAXAVBHIAAAaQAGAPAEAQQgDAtgHAsIAAAVIgQA5QAmAQAeAeQAcALAeABQASACASAFQATAKASAMQATALARANQAOAQAIAUQAOAYABAcIAAAkQAFAbAJAaIAOA0QAPAqASAqIAIAkIASAlQAFAUACAWQABAagDAaIgMAaQgJAigYAbQgUAKgWAEQgPADgQgCIgfgNQgdgPgNgbIgFAAIAAA+IAaBuIgQAFIAFBPIAAChIAFAqIgSAfIgCAqIAFAaIAAA5IgFAqIAAA6IgGApIAAFKIgFApIAACoIgKA5IAAAaIAFAlIgXBhIgOAHIAZA1IABAfIgfABIgQAIIhJABgAEEmLIgBAZIAFAAIAAgagAEImXIAFAAIAIgfIgIgVgAjymxIgFhJIgGACQgKAkAQAjIAFAAg");
	this.shape_126.setTransform(-85.1,127.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("ABST5IgBgOIAAgkIAFgVIgTgMIgOgzIgOjMIAAiSIgFgqIAAh4IgDgVIADgVIgFgqIAAg5IgGgfIAAg1IgFgqIAAhOIgFAAIgFAvIAABZIgGAqIAABZIgEApIAAElIgFAaIgGDcIgRA9IgTAHQAEAZABAbQABATgQAHIiIAAIAAgVIAMgqIAGgPIgJgVIgUhkIAGgkIgLhUIAAhJIgFgqIAAhoIgFgqIAAiNIgFgqIAAh9IgLiTIAFhEIgSgbIgDgOIAAgVIAGg6IgGgqIAFiGIgIgcIgCgZIALg0IAKgaIAAgfIgFADIgagDIglAKQgVAAgVgEIgVgEQgYgRgXgVQghgigIgtIAIglQAEgTAFgSIARgfIAJgkIAchEIAOgvQANgfAKggQAFgdACgdQANgtAcglIAggTQATgNAXgJQAkgEAlgIQAbgTAZgWQANgIAKgKQADgKgBgKQgHgWgJgTIgTgMQgOgQgHgUQgHgUAHgTIAKgCQgIhSAyg/QAogRAqAAQA/ALAeA5IAHAfIABAVIAJAVIAABEQgGANgEASQAAASgCATIgOAkQAaAIAVASQAQARAVANQAvAHAvAMQAnAWAgAdIANAaQALATAEAWIAAAqQAIAlALAkIAOA1IAcBEIAIAkIAXAvQACANAAANIAAAvQgFATgKASQgKAbgNAYQgUARgaAGQgPAEgQAAQgvgOgkghIAAA0IAaBuIgQAFIAFAvIAADBIAFAqIgUApIAFCDIgFAfIAAA1IgGApIAAFEIgFAqIAACtIgKA5IAAAaIAFAlIgXBhIgOAHIAZA1IABAfIgfABIgQAIIhJABgAjrlBIgCAdIAFAAIAAgfgAEJnEIgBAoIAFAAIAFgkIgFgGgAjymxIgFhJIgGACQgKAkAQAjIAFAAg");
	this.shape_127.setTransform(-85.1,127.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("ABST5IgBgOIAAgkIAFgVIgTgMIgOgzIgOjRIAAidIgFgqIAAiXIgFgqIAAg/IgGgfIAAg0IgFgqIAAhJIgFAAIgFA5IAABUIgGAqIAABTIgEAqIAAEqIgFAqIAACSIgOBZIgJAeIgTAHQAEAZABAbQABATgQAHIiIAAQAEgvAWgqIgNgDIgYhgIAGgvIgLhUIAAhJIgFgqIAAhoIgFgqIAAiNIgFgqIAAh9IgGglIgFhjIAFhPIgSgbIgDgUIAGgvIAAgkIgGglIAAhiIAGgqIgJgRIgCgTIAMg+IAJgRIAAgkIgFADIgVgEIg0ALQgegCgcgKIgkgeQgnglgIg0IAIgfQAFgYAIgXIANgVIAJgkIAchEIAOgvQAUgxAKgzIABgfQAJgZAOgWQAHgOAKgLIAqgYQAPgLARgGQAtgFArgOIAggeQAPgKANgMQADgSgKgRQgEgOgIgMIgUgMQgIgJgGgLQgHgXABgYIAIgVIgDgVQABgaAFgaQAuhIBYgGQA2ARAbAzIAIAvIANARQADAYgBAaIgCAbIgIAaIgCAkQgGARgEAPQAJAMANAJQAcAZAeAUIBTAOIAVAMQAfARAbAVQANAUAIAWIANAaQABAQgEAQQAAASAEASQARBCAWBBIASAkIAIAlQAMAZALAbQADAUgBAWIAAAlQgIAVgOAUQgHAWgNAUQg8AghBgXIgfgZIAAAqIANAvIANBEIgGACIgFAYIAADWIAFAvIgUAkIAFA6IAABTIgFAlIAABJIgGAqIAAEvIgFAqIAACiIgKA5IAAAaIAFAlIgXBhIgOAHIAZA1IABAfIgfABIgQAIIhJABgAjxkpIAEAFIAFAAIAAgkgAEImmIAFAAIAFgaIgKAAgAjymxIgFhOIgGABIgIApIAOAkIAFAAg");
	this.shape_128.setTransform(-85.1,127.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("ABRT3IgCgOIAAglIAGgVIgUgLIgOgzIgNjRIAAiiIgGgqIAAiYIgFgqIAAg5IgFgfIAAg1IgFgpIAAhPIgGAAIAAAlIgFAfIAABOIgFAqIAABUIgEAqIAAEqIgFApIAACTIgPBYIgIAfIgTAGQAEAaABAaQABATgRAHIiIAAQAFgvAWgpIgOgDIgXhhIAFgvIgKhTIAAhJIgFgqIAAhuIgGgqIAAiIIgFgpIAAiDIgFglIAAgkIgFgvIAFgaIAAg/IgTgbIgCgpIAFglIAAgvIgFgjIAAhEIAFg0IgJgSIgBgTIAMg9IAJgXIAFhOIgFAAIgGA0IgVgGIg0AMIgvgIQgRgJgOgNQgsgigTgzQACggAJgfQAKgcANgYIAKglIAbhEIAOgvQAQgnAMgnIACggQAGgkATggQAGgNALgLIAqgYQAPgLAQgHIAagBQAbgEAZgJQAXgPATgTIAZgSQAHgSgKgRQgGgNgHgMIgTgMQgMgOgIgRQgHgXAHgVIAJgDQgLhYA6g+QAmgMApAAQA4AMAeAzIAIAvIANARIABAOQACAdgCAdQgDALgGAKIgBAVQgBAfgJAfQAqAdApAgIBUAOQAWAKAUAPQAYAPAVAVQATAiAJAnIAAAlQADAgALAfQAKAqAOApQAMAaALAbIADAUQAOAcALAeIAAAkIADAbQgIAZgPAWIgYAuQgXASgbAFQgVAEgVgCIgagMQgVgMgQgQIAHBJIASBJIgJAaIAADbIAFA5IgUAgIAEAvIAABeIgFAqIAABTIgFAqIAAElIgFApIAACYIgLA/IAAAaIAFAkIgWBiIgOAHIAYA0IACAfIgfACIgQAHIhJACgAEGmuIAFAAIAGgagAj0mzIgFhPIgFACIgJAoIAOAlIAFAAg");
	this.shape_129.setTransform(-84.9,127.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("ABQTxIgCgOIAAgkIAGgVIgUgMIgOgzIgNjRIAAiiIgGgqIAAiXIgFgqIAAg/IgFgfIAAg0IgFgqIAAhPIgGAAIAAA1IgFAkIAABJIgFAqIAABPIgEAaIACAfIgCAVIAAEAIgFAvIgGDBIgRBDIgTAHQAEAZABAbQABATgRAHIiIAAQAFgvAWgqIgOgDIgXhgIAFg6IgKhJIAAhOIgFgqIAAhzIgGgqIAAiIIgFgpIAAh+IgFgfIAAgqIgEgfIAEggIAAhEIgTgfIADiRIgFgqIAFhZIgJgRIgBgTIAMg+IAJgRIAFhTIgFAAIgGA0IgVgQIgFAAQgDAHgHAGQggAHgfgDIgVgDQgRgKgOgNQgWgPgSgSQgTgfgEglIAJgfQAFgYAIgXIANgaIAOgvIAWg0IAOgvQATgsALgtQABgdAHgdIAMgVQAIgTAOgQIAqgYQAPgKAQgHIAVgCQAdgEAcgIQAUgNARgRQATgOAPgNQAAgNgHgMQgGgOgHgLIgTgNQgOgQgHgTQgHgUAEgUQAGgCAHAAQgGgSgEgTQAAgVAEgUQACgRAFgPQBOhEBiAgQAXAYAMAhQACAXALAWIAJACQACAlgCAkQgDANgMADQAGAXgBAYQgHAVAHAVQARAQAUAPQANAPASALQAsALAtAHQAYAMAXAQQAQAJAPANQANARAJAUIANAaQACAZAAAbQAFAqAOAqIAOA0QAPAiANAiIADAVIAXAvQACASAAATIAFAfQgKAigXAdQgJASgKASQgnAYgtACQglgMgfgYIAGA+IAJAVIAKA6IgJAaIAADVIAFA/IgTAaIADCXIgFAqIAABUIgFAqIAAEkIgFAqIAACYIgLA5IAAAaIAFAlIgWBhIgOAHIAYA1IACAfIgfABIgQAIIhJABgAEFm5IAFAAIAGgagAj1m5IgFhTQgNAUgBAbIAOAkIAFAAg");
	this.shape_130.setTransform(-84.8,128.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("ABQT2IgBgNIAAglIAFgVIgUgMIgNgzIgOjRIAAinIgFgpIAAiTIgGgqIAAg/IgFgkIAAg0IgFgqIAAhUIgFAAIAABEIgGAlIAABEIgFApIAABUIgEAaIAEAgIgEAaIAAD2IgFAuIgFDCIgSBCIgTAHQAEAaABAaQABATgQAHIiIAAQAEgvAWgpIgOgDIgXhhIAFglIAAgZIgKhFIAAhOIgFgqIAAh9IgFggIAAicIgGgaIAAh4IgFgqIAAiiIgVgqIAFgqIAAh3IgFgvIAFg5IgKggIAMhCIAIgMIABgVIAFgaIAAgqIgFAAIgFAvIgUgFIgBgFIgFAAQgEAHgHAFQgSAEgTABQgdABgcgKIgVgRQgogegVgtQgCggAJgfQAFgVAIgUIANgbIAziSQASgpALgrQACgdAFgcIANgaQAHgQALgOQAOgLAQgIQAXgQAYgMIAVgCQAhgEAegJQAegcAmgVIgag/IgGAEQgggfgJguIAVAAIgJgfQgDgYABgXQAMgzAoggQAXgJAYgDIAbgFQAUAEAUAIQAoAdAQAwIAEAaQALAKAIAQIAAA6IgQAfIAAAgQgCAQAAAPQALAQARALIAlAjQARAJATAFQAgAEAfAFQAYAMAXAQQARAKAOANQANARAJATIANAaQACAZAAAcQAIAyAQAxQAIAgALAfIASAkIADAaQAPAeAKAhIAAAVQAEAUgBAWQgJAZgRAWIgQARIgFATQg/AnhHgZIgVgTIAGA/IAJAVIALA5IgKAlIAFBzIgFAZIAFB9IgUAfIAEAqIAABuIgFAqIAAB4IgFAqIAAD7IgFApIAACTIgLBEIAGA5IgXBhIgOAIIAYA0IACAfIgfACIgQAHIhJACgAj0mzIgGhUQgNAVgBAaIAOAlIAGAAg");
	this.shape_131.setTransform(-84.8,127.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("ABRT0IgCgOIAAglIAFgVIgTgLIgOgzIgIitIgGgpIAAioIgFgpIAAiOIgFgpIAAhEIgFglIAAgvIgGgqIAAhYIgFAAIAABTIgFAlIAABEIgFApIAABKIgFAaIAFAfIgFAaIAADxIgFA5IgFC8IgRBDIgUAGQAFAaABAbQAAATgQAHIiIAAIAAgVIAMgqIAGgQIgIgVIgUhYIAFglIAAglIgLg0IAAhZIgFgpIAAiDIgFgqIAAidIgFgpIAAhZIgFgqIAAidIgPgXIgEjoIADg0IgLgfIAMg6IAIgVIAHg5IAAggIgGAAIgFAvIgTgFIgCgFIgFAAIgCAFQgTALgVAAQgQABgPgBQgigHgYgXQgSgNgRgPQgUgigCgnIAJgfQAFgWAIgUIANgaIAOgvIAWg1IAOgvQATgpALgqQABgdAGgdIAagzQAQgOATgKQAWgQAZgMIAagBQAdgGAcgHQAfgcAlgWIgag/IgFAEQghgfgJguIAFgFIAQAFIgJgfQgEg0AUgvQA2gqBFAAQAcAGAYAUQAdAtACA2QAHgEAIABQAHALgBANIAAAqQAAAHgCAIIgNAQIAAAvQgDALABAKQATAWAYATQAPAPARAMQArALAuAGQAdAPAcATQANAIALALQALAQAIATQAMAVACAaIAAApQAGAbAIAaQALAqAOApIARAlIAJAkQAOAeAKAhIAAAVQAGAagCAaQgPAcgUAZQgNAVgSATQg6AWg5gWIgVgUIAGA/IAIAVIAMA6IgLAkIAGA/IAABYIgGApIAGBKIgTAaIADCcIgFAqIAACYIgFAqIAADgIgGAqIAACNIgKBEIAFA6IgXBhIgOAHIAZA0IACAgIggABIgPAHIhKACgAjvmxIgKhZQgTAsAYAtIAFAAg");
	this.shape_132.setTransform(-84.9,128.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("ABRT0IgCgOIAFg/IgPgCIgSg3IgIitIgGgpIAAiyIgFgqIAAiNIgFgqIAAg+IgFglIAAg0IgGgqIAAhUIgFAAIAABZIgFAlIAABEIgFApIAABKIgFAaIAFAfIgFAaIAADxIgFA5IgFC8IgRBDIgUAGQAFAaABAbQAAATgQAHIiIAAQAEgvAWgqIgNgDIgXhgIAFg1IgLhOIAAhUIgFgpIAAiDIgFgqIAAiiIgFgfIAAhkIgFgpIAAiYIgPgXIgCkhIgJgaIALg6IAIgVIAHhZIgLAAIAAAvIgPgCIgIgFIgYAMQgcABgdAAQgegJgXgVQgogggRgwQAAgbAJgZIAJglIARgfIAOgvIAWg1IAJgfQASgsAPgtIACgaQAIgzAcgrQAPgNARgKQAWgQAZgMIAagBQAbgEAZgHQAUgOARgRQATgNAOgNQgCgLgFgKIgQglIgFAEQgggfgKguIAVAAQgGgXgEgYQgBgsASgnQAxgpBAgBQAfABAaAUQAhAuADA6QAHgEAIABQAHALgBANIAAAqQgHAUgIAQIAAAbIgFAfQAFAJAIAHQAQAQARAOQAUARAWAOQAnAIAoAFQAQAIAPAKQAbAPAYATQAHAMAFANIATAlQACAWgBAZQAGAqAOApQAIAiALAiIAWAvIAEAaIAWAvQADASgBATQAGAagCAaQgTAigZAdQgKASgSANQgrASgtgLQgZgHgMgVIgFAAIAGA/IAIAMIAMBDIgLAfIAGA/IAADQIgSAaIACCiIgFAaIAAC3IgFApIAADXIgGAqIAACCIgKBEIAFA6IgXBhIgOAHIAZA0IACAgIggABIgPAHIhKACgAjvmxIgKheQgTAvAYAvIAFAAg");
	this.shape_133.setTransform(-84.9,128.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("ABQT1IgCgOIAAgkIAGgVIgUgMIgOgzIgIisIgFgqIAAitIgGgpIAAiNIgFgqIAAhEIgFglIAAg0IgFgqIAAhZIgGAAIAABpIgFAqIAAA5IgFAaIAABZIgDAfIADAbIgEAkIAADmIgFA5IgGC3IgRBDIgTAHQAEAZABAbQABATgRAHIiIAAIAAgVIAMgqIAHgPIgJgVIgUhZIAFglIAAgkIgKg1IAAheIgFgpIAAiIIgGgaIAAi9IgFgpIAAhEIgFgqIAAiYIgOgWIgDkiIgIgaIAZiDIAAgkIgLAAIAAAvIgagGIgVAJQgZADgbgBQghgIgYgWQgTgNgQgQQgVghgCgnIAQg/IATgkIAOgvIAWg0IAJggQASgsAPgtIAJhDQARgmAcgdQAegVAhgPIAagCQAbgDAZgHQARgMAPgPQAVgRAagJIgUgkQgDgLgFgJQgMgHgGgBQgXglgEgtIAVAKQgLgfgFgfIAFgaQACgTAJgSQAhgmAygLQAygEArAbQAgAvAFA5IAPgFQAHAngIAoQgIALgGAPIAAAVQgEASgBASQAGAJAIAIQASARAUAPQARAQATAMQAnAIAoAGQAVAJAVANQAYAQAVASIANAaQALAWAEAZIAAApQAJAtAPAsIAJAlIAcA/IAIAkQALAXAJAYIAAAVQAEAXABAYQgOAmgcAeQgOATgRAQQgaALgbABIgVADQgfgJgagUIAFAfIAAAVQAEAKAFAHQAHAcAEAcIgJA6IAFAkIAADbQgGAPgPAGIAFA+IAABZIgFA6IAACiIgFAqIAADWIgFAqIAACSIgJAfIgCAqIAFAqIgWBhIgOAHIAYA1IACAfIgfABIgQAIIhJABgAjvmvIgLhfQgSAvAXAwIAGAAg");
	this.shape_134.setTransform(-84.8,128);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("Ah3UDIgVAAIgagJQgQgDgQABIABgaIAag5IgPgIIgWhhIAFglIAAgkIgKg0IAAheIgFgqIAAiTIgGgpIAAitIgFgfIAAhJIgFgqIAAiSIgNgaIgDgbIgBkEIgIgaIAShJIAHhjIgLAAIAAAvIgFAFIgVgGIgaAJQgSADgSgBQgZgEgWgIIgVgSQgTgNgQgPQgVgigCgnIARhDIASggIADgVIAhhOIAJgfQASgsAPgtIAJhEQAHgRAKgPQALgTARgQIAagNQASgNATgKIAagCQAbgDAZgHQARgMAPgOQAVgSAagIIgUgqQgDgLgFgJIgXgRQgQgggFgkIAEgFIAVALQgWhOAlhFQAzgbA6ABQAfAHAZAVQAWAhAHAmIAGAUIANARQAEAXgDAYQgBAPgGAOIgOACQgBAdgEAdQADAZAXARQAnAmAyATQAaABAaAGQAVAJAVAOQAYAPAVASIANAaQANAYACAcIAAAlQAFAaAJAaIANA0QAQArASApIAIAkQALAXAJAYIAAAVQAEAXABAYQgNAngdAdIgaAeQgSAJgTAFQg1AFgugcIAFAvQACANAHAKIALA4IgJA0IAFAkIAACCQACAvgCAvQgFAQgQAFIAFA5IAABpIgFA5IAACoIgFApIAADRIgFAqIAACIIgJAfIgCAvIAFAlIgWBhIgOAIIAYA0IACAfIgfACIgQAHIhJACIgegNIgCgOIAGg+IgUgHIgPg4IgHisIgFgqIAAi3IgGgqIAAiIIgFgpIAAhEIgFglIAAg0IgFgqIAAhZIgGAAQACA8gCA8IgFAaIAABEIgFAqQAAAsgDAtQABASACATIgEAvIAACiQABAngBAnIgFAqQACBJgCBJQgGAlgJAkIgDAVQgMAQgKAKQgBAKADALQABATgCASQgZAVgkAAIgKAAgAjvmuIgLheQgSAuAXAwIAGAAg");
	this.shape_135.setTransform(-84.8,127.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AhdUAIgvAAIgagJQgQgCgQAAIABgaIAag5IgPgHIgThSQgBgsADgtQgGgagEgaQABgwgBguIgFgqQAChEgChEIgGgaIAAi8IgFgqQABglgBgkIgFgqIAAhjQABgYgBgXQgGgOgIgJQgCgMAAgMIAAi7QgDguAIgrIgPgFIAah+IAAg5IgLAAIAAAvIgFAFIgVgFQgeAHggADQgZgEgWgIIgbgXQgPgLgOgMQgVghgCgnIARhEIASggIAOgvIAWg0IAJgfQASgsAPgtIAHgqIACgaQAHgQAKgPQALgUARgPIAagOQAUgOAWgJQAlgEAkgIQAlgeAqgWIgahPIgQAGQgXgpACgrIALALIAFAAIgLg1QABgNADgNQAEgcAPgYQBRg0BZAkQAgAyAEA8QAFgEAIAFQAHAZgEAaQgBAPgHAOQgGACgHABQgCAXgEAYQgEAMABAOQATAXAbAUQATATAWAOQAqAIAqAGQATAKASANIAkAXQANAQAJAUQANAYACAcIAAAlQAHAiAMAiQAIAiALAiIAXA0IAHAfIATAlIACAVQAFAiAAAiQgOAjgcAcQgRASgUAPQhBATg8ggIAFA1IAJARIALA4IgJAqIAFApIAADlIgNAaIgDAbIAACSIgFAqIAACiIgFApIAADRIgFAqIAACNIgLA1IAAAaIAFAkIgWBiIgOAHIAYA0IACAfIgfACIgQAHIhJACIgegMIgCgOIAAglIAGgVIgUgLIgOgzIgIiyIgFgqIAAiyIgGgpIAAiNIgFgqIAAg/IgFglIAAg5IgFgqIAAhZIgGAAIAAB5IgFAaIAABEIgFAaIAABEIgEApIAEAbIgEAkIAADxIgFA5IgGC3IgRBDIgTAGQADAeAAAfIgCAMQgRAQgZAAIgBAAgAjvmxIgLhjQgNAagBAfQAIAWALAUIAGAAg");
	this.shape_136.setTransform(-84.8,128.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AhdUDIgvAAIgagJQgQgDgQABIABgaIAZg5IgOgIIgThRIAChZIgLg0IAAheIgFgqIAAiYIgFgqIAAisIgFgqIAAg+IgFgqIAAiNIgOgaIgCgbIAAirIAFhjIgQgGIAbh4IAAg+IgLAAIgFA0IgVgGQgfAHggAEQgYgEgXgIIgagXQglgegPgtQABgdAIgcIAIgfIASggIAIgkIAcg/IAlhjQAIgfAEggIACgaIAMgVQAJgTAOgSQARgNATgJQAUgOAWgJQAlgEAkgIQATgNASgRIAVgQQAKgFAIgIQAAgNgHgMQgGgWgIgTIgVgQQgNgjAAgmIAVAKQgRhLAmhCQAOgLARgGQBMgPA+AqQAXAyAAA3IAQgFQAHAkgJAlQgLAPgLALIgIAqQALAmAlAZQAOAPARALQAsALAtAGQATAKARANQATAKASANQANARAJATQAJARAFATIAAA1QAKAqAPApIAOA1IAWAvIAJAkIARAlQAFASABASQADAdgBAdQgRAigeAZIgbAcIgVAIQg6AOgzgfIAFAqIAVBUIgLApIAGAlIAADqIgOAaIgCAaIAACTIgFApIAACoIgFApIAADRIgGAqIAACIIgKA0IAAAaIAFAlIgXBhIgOAIIAZA0IACAfIggACIgPAHIhKACIgdgNIgCgOIAAgkIAFgVIgTgMIgOgzIgIixIgGgqIAAi3IgFgqIAAiIIgFgpIAAhEIgFglIAAg5IgGgqIAAhUIgFAAIAAB+IgFAaIAABEIgFAaIgDBtIADAgIgFAqIAADlIgFA6IAACNIgFAlIgRBCIgUAHQAEAeAAAfIgCAMQgSAQgZAAIAAAAgAAMCWIgCAZIAFAAIAAgagAjwmuIgKhkQgOAbAAAfQAIAWALAUIAFAAg");
	this.shape_137.setTransform(-84.8,127.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ah4UFIgVAAIgagJQgQgCgQABIABgaIAZg6IgOgHIgShNIgEgfIAFg/IgLg0IAAhjIgFgqIAAiiIgFgkIAAiyIgFgqIAAg0IgFgqIAAheIAFg6IgTgKIgCjAIAFhpIgQgFIAbh4IAAg/IgLAAIgFA0QgNgEgNgDIgQAGIgkAHIgQgEQgTgCgSgHIgagWQgvgpgFg8IARg/IASgfIAIglIAcg/IAlhjQAIgcAEgdIAAgVQAFgRAKgPQAJgTANgRQARgNATgKQAUgNAWgKQAogEAmgJQAPgKAMgNQAYgUAcgNIgahPIgGAEQgNgJgEgPQgIgfgBggIAQAFIAAg0QACgiAOgdQAvgnA9gDQAYAFAXAIQAtAsAIBAIAPApQAAAkgQAeQgHACgIAAQgEAbgGAaQAGAeAeASQAfAfAqAPQAdABAdAFQATAKARANQATALASANQAQAVALAZIANAaQgBAWgDAZQAGAaAIAaIATBEQANAjAPAhIAJAlIARAkQAGAfACAgIACAVQgPApgiAcIggAcIgqARQgpgCglgSIAAAqIAOApIAMA6IgNAKIADEaIgOAaIgCAaIAACXIgFAqIAACnIgFAqIAADMIgGAqIAACIIgKApIAAAlIAFAlIgXBhIgOAHIAZA0IACAgIggABIgPAHIhKACIgdgMIgCgOIAAglIAFgVIgTgLIgOgzIgIiyIgGgqIAAi8IgFgqIAAiHIgFgqIAAhEIgFglIAAg5IgGgqIAAhEIgFAAQACA8gCA8IgFAaIAABEIgEAqIgDBUIADAqIgGApIAACoQABAngBAnIgFAqQACBEgCBEQgFAkgJAlIgDAVQgMAPgKALQgBAKADALQABASgCATQgaAVgkAAIgJgBgAjxmsIgKhjQgOAaAAAfQAIAWALAUIAFAAg");
	this.shape_138.setTransform(-84.7,127.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("Ah3UDIgVAAIgagJQgQgCgQABIABgaIAZg6IgOgHIgShNIgEgfIAFg/IgLg0IAAhoIgFgqIAAiiIgFgqIAAiyIgFgpIAAgqIgFglIAAhOIAFhPIgTgKIgCj/IADgkIgOgLIAbhzIAAhEIgLAAIgKA0IgQgHQgLACgKAEQgYAEgXABIgfgFQgUgMgRgQQgvgpgFg8IAJggQAFgVAIgUIAMgVIAJglIAcg/IATg5QATguALgwIAAgVQAFgUAKgRQAIgTAOgQQARgOATgKQAUgOAWgJQAogFAmgIQAUgOARgRQATgQAXgJIgOgfIgHg1IgQAFIgLg0QgGgSAIgQIAJgCIAAAPIAFAAQgDgbAAgZQADgbAHgZQAbgnAtgNQAegCAgACQBQAwgCBiIAQgFQACAtgSArIgQgFQgCATgFASQgGAPgBAQQANAUAWANIAlAhQAtAOAxAFQATAKARANQAWAMAUAQQAKAPAHAQIASAlQACAPAAAQQgCATABASIAPAvQAKAqAOAqIARAkIAJAlIANAaQAIAWACAXQAFAjgGAjQgPAWgTAUIgUAMIgRARQg+AYg/gWIACAvIAMAfIAMA/IgNALIADAaIAAD/IgOAaIgCAaIAACXIgFAqIAACnIgFAqIAADMIgGAqIAACIIgKA0IAAAaIAFAlIgXBhIgOAHIAZA0IACAgIggABIgPAHIhKACIgdgMIgCgOIAAglIAFgVIgTgLIgOgzIgIiyIgGgqIAAi8IgFgqIAAiHIgFgqIAAhEIgFgqIAAg0IgGglIAAg+IgFAAQACA5gCA5IgFAbIAABEIgFApIAAB5IgFApIAACoQABAngBAnIgFAqQACBEgCBEQgFAkgJAlIgDAVQgMAPgKALQgBAKADALQABASgCATQgaAUgkAAIgJAAgAjwmuIgKhoIgEABIgLA4IAUAvIAFAAg");
	this.shape_139.setTransform(-84.8,127.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AhfUDIgvAAIgagJQgQgCgPAAIAAgaIAag5IgOgHIgThNIgEgfIAFg/IgKg0IAAhjIgFgqIAAiiIgFgqIAAi3IgGgqIAAgvIgFgpIAFiTIgSgKIgDj/IADgkIgNgLIAahuIADgvIgDgaIgFABQgMAWABAYIgTgFIgBgGIgGAAQgDAIgHAFQgQADgQAAQgPACgQgBQghgIgYgXQgUgPgQgSQgQgggBgkIAJgfQAFgVAIgVIAMgVIAKgkIAcg/IAqhzQAEgdADgcQAFgUAJgRQAJgTANgRQARgNAUgKQATgOAXgJQAngEAngKQAUgMAQgRQAUgQAWgKIgOggIgDgkIgRgWIgLhIIADgGIALALIAFAAQgCg3AOgyQAZgeAkgPQAZgDAbABQAlAEAeAWQAZAkAHArIAAAaQAGAPAIALQAAAKgDALQgCASgGATQgMAQgPAPQgHARgFATQAJAhAgAUQARARAUAMQApAJAqAFIAVAMQAfARAbAWQAJAMAHAOQALAUAHAWQADAZgBAbQAFAoAOAmIATBEIATAlQAFASACASIATAlQAFAXAAAYQAFAVgBAVQgOAggaAZIgUAMIgbAXQg5ARg6gUIAAAfIAOAvIANA/IgQAFIAFEeIgNAaIgDAbIAACcIgFAqIAACnIgFAaIAADcIgFAqIAACCIgLA1IAAAaIAGAkIgXBiIgOAHIAYA0IACAfIgfACIgQAHIhJACIgegMIgBgOIAAglIAFgVIgUgLIgNgzIgJi3IgFgqIAAi8IgFgqIAAiIIgGgqIgKkAIgFAAIAABzIgGAaIAABEIgEAqIAAB4IgFAqIAADmIgLDrIgRA+IgTAGQADAeAAAfIgBAMQgSAQgZAAIgBAAgAjxmuIgLhoIgDABIgLA4IAUAvIAFAAg");
	this.shape_140.setTransform(-84.6,127.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("Ah5T9IgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgThSIAChZIgLg0IAAhpIgFgpIAAioIgFgaIAAjGIgFgqIAAglIgGgkIADiTIgQgQIgCgZIAAjlIAFgaIgJgSIgCgYIAVhUIAAgVIAGgaIgGgkIgFAAIgKA0IgUgFIgBgGIgFAAQggATgqgDQghgGgYgYQgTgPgRgSQgQggAAgkIAIgfQAGgVAHgVIANgVIAJgkIASglIAvh9QAJgiADgiQALgnAWgiQASgQAWgMQAUgOAWgJQAngFAngJQAUgNARgQQATgQAXgKQgLgUgFgWIAAgVQgFgOgJgJIgEgTQgIgjAFghIAQAFQgCg0ATgvQBVg4BdAvQAfA6gIBCIAFgEQAMAMgBASQgHAjgZAVIgFgEIgOAvIgBAgQAqAUAkAeQApAIArAGIAUAMQAfARAbAWQANARAJATIANAaQACAZgBAcQAIAyARAxIAIAlIAcA+IAEAaQAOAbAKAfIAAAaQAGAZgGAbQgPAagVAVIgVAMQgZAUgbANQguAEgrgRIAAAfIAOAvIAMA/IgQAFQAIA7gDA9IAAByQABAagBAaIgPAlIAABeQACAngCAnIgFAqIAACnIgGAqIAACIQABAigBAiIgFAqQACBBgCBBQgGAagEAbIAAAaQADARACATIgKAvQgFAbgIAYIgOAHIAZA0IABAfIgfACIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgOgzIgJi3IgFgqIAAi8IgFgqIAAiNIgFgqIAAg/IgGgkIAAg/IgFgaIAAg0IgFAAQACA2gCA3IgFAqIAAA1IgFApIAABzIgFAqIAACnQABAngBAoIgFApQACBEgCBEQgFAlgJAkIgDAVQgMAQgKAKQgBALACAKQACATgCATQgaAUgkAAIgKAAgAjxm0IgKhoIgEABIgLA4IAUAvIAFAAg");
	this.shape_141.setTransform(-84.7,128.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("Ah5UBIgVAAIgagJQgQgDgQABIABgaIAag5IgPgIIgThRIAChZIgKg6IAAhoIgFgqIAAinIgGgaIAAjHIgFgqIAAgkIgFglIACiNIgPgRIgDgZIAAjfIAFggIgIgRIgCgTIAMg9IAJgXIAAgaIAFgfIgFggIgNAQIgDAlIgTgGIgCgFIgFAAQggATgpgDQgigHgYgYQgkgegQgsQAAgdAJgcQAFgWAIgUIAMgVIAKgkIANgbIA1iNQAHgUADgVIACgbQALgkAUgfQATgRAVgLQAUgNAWgKQAogGAngIQATgNARgRQATgNAPgOQAAgPgGgPIgCgfQgGgRgJgPQgGgnAAgnIALAKIAFAAQAAgzARgwQAygvBEAEQAbAGAZANQAdAhAIArIAFAaIgEAVIANAVQAAAIgCAIQgIAegPAbIgPgFIgQBPQANAAANAGQAYAYAcAUQAqAIAqAGQAWAKAUAOQATAMARAPQANARAJATIANAaQADAZgBAbQAEAgAKAfQAKAqAOAqQAMAZALAbIADAVQAPAeAKAhIAAAVQAFAZgCAbQgQAdgYAXIgfARQgfAXgkAGQghgEgfgLIAHA6IAHAQIAMBDIgPAGIAFBTIAACsIADAkIgQAVIgDAaIAAA6IAFAkIgFAaIAAAqIgFAqIAACyIgFAqIAADGIgFAqIAAB4IgLA0IAAAaIAFAlIgWBhIgOAIIAYA0IACAfIgfACIgQAHIhJACIgegNIgCgOIAGg+IgUgHIgQg9IgGg0IAAh+IgFgqIAAjLIgGgbIADgfIgDgVIAAheIgFgqIAAg5IgFglIAAhEIgFgaIAAgkIgGAAQACA2gCA3IgFAqIAAA0IgEAqQABA3gBA3IgFAqIAACnQABAqgBAqIgFApQACBCgCBBQgGAlgJAkIgDAVQgMAQgKAKQgBAKADALQACATgDASQgZAVgkAAIgKAAgAjxmwIgLhuIgDACIgMA9IAUAvIAGAAg");
	this.shape_142.setTransform(-84.6,128.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("Ah5UAIgVAAIgagJQgQgCgQABIABgaIAag6IgPgHIgThSIAChYIgKg6IAAhoIgFgqIAAitIgGgpIAAi3IgFgqIAAglIgFgkIABhzIADgQIgRgWIgDgZIAEg5IgEggIAAiBIAFggIgKgpIAMg+IAJgWIAAgVIAFgqIgFgaIgNAQIgDAkIgTgFIgCgFIgFAAQggATgpgDQgigHgYgYQgTgPgQgRQgRggAAgkIAJgfQAFgWAIgUIAMgVIAKglIARgkIAshzQAKgdAFgdQACgXAFgYQALgYAPgXQATgQAVgLQAVgNAVgKIAVgCQAdgEAdgIQAigcAngXIgJgfIgCgfIgPglIgGhOIALAKIAFAAIAAgkQAPhJBAggQAbgBAdABQAbAEAZANQAhArAJA3IgEAVQAFAPAIALQAAAKgDALQgGAjgaAVIgFgEIgLAlQgEAKAAALQAJAOAQAIQAZAYAbAUQAqAIAqAGQAWAKAUAOQATAMARAOQANARAJAUIANAaQADAWgBAZQAGAqANAqQAIAiALAiQAMAZALAbIADAVQAMAZALAbIACAfQAFAagCAbQgQAcgYAYIgfARQgiAXgnAGQgegFgcgKIAHA6IASBJIgIAaIgBD6IADAfIgQAVIgDAQIAAA+IAFAqIgFAaIAAAqIgFAqIAACyIgFAaIAADWIgFAqIAAB4IgLA0IAAAaIAFAlIgWBhIgOAHIAYA1IACAfIgfABIgQAIIhJABIgegMIgCgOIAAgkIAGgVIgUgMIgQg9IgGg1IAAh9IgFgqIAAjGIgGgbIAAiXIgFgqIAAg/IgFgkIAAg/IgFgaIAAgfIgGAAQACA2gCA3IgFAqIAAA0IgEAqQABA3gBA3IgFAqIAACnQABAngBAnIgFAqQACBBgCBCQgGAkgJAlIgDAVQgMAPgKALQgBAKADALQACASgDATQgZAVgkAAIgKgBgAjxmwIgLhuIgDABIgMA9IAUAwIAGAAg");
	this.shape_143.setTransform(-84.6,128.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("Ah5UAIgVAAIgagJQgQgCgQAAIABgaIAag5IgPgHIgThSQgBgsADgtQgGgcgEgdQABg3gBg3IgFgqIAAiyIgGgpIAAitIgFgqIAAgkIgFglIABhtQADgLAAgKQgIgOgJgIQgDgNAAgMIAAgaIAFgbIgFgvQgCg5ACg5QAEgUABgVQgDgKgFgIIgCgTIAMg9QAFgIAEgJIAAgaIAFgbQACgWgMgRIgLgCIAEAFIgEAvIgPgDIgIgEIgYALQgcABgdAAQgegJgXgVQgTgPgQgSQgRggAAgkIAJgfQAFgVAIgVIAMgVIAEgUIBBiiQAJgYAHgXQADggAFgfIAagvQASgRAWgKQAVgNAVgLIAVgBQAegEAcgJQAjgbAmgXIgJgVIgIg6IgJgUIgGhPIAQAFIAAgkQADgiAOgdQAtglA5ABQAhACAeAPQAlApAIA5IgCAaIAJAVQgCAtgdAfIgFgDIgLAkQgEAKABALQAJAPAPAIIAaAVQAMANAOAJQAqAIAqAGQAZAMAWAQQAOAIAMAKQAQATALAWIANAaQADAXgBAZQAHAyARAxIAOA0IAXAvIAIAlQANAYAHAcIAAAVQAFAagCAaQgaAtgtAYQgUANgWAKQgtAFgsgNIAHA5IASBJIgIAaIgBDrIAFAkIgVAqIAABEIAFAqIgFAaIAAAqIgFApIAACyIgFAaIAADWIgFAqIAAB4IgLA1IAAAaIAFAkIgWBiIgOAHIAYA0IACAfIgfACIgQAHIhJACIgegMIgCgOIAAglIAGgVIgUgLIgQg+IgGg0IAAh+IgFgpIAAjHIgGgaIAAiYIgFgpIAAg/IgFglIAAg+IgFg1IgGAAQACA1gCA0IgFAqIAAA5IgEAqQABA0gBA0IgFAqIAACnQABAqgBAqIgFAqQACA/gCA+QgGAlgJAkIgDAVQgMAQgKAKQgBALADAKQACATgDATQgZAUgkAAIgKAAgAjxmxIgLhuIgDACIgMA9IAUAvIAGAAg");
	this.shape_144.setTransform(-84.6,128.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AhgUAIgvAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgThSIABhZIgKg5IAAhpIgFgpIAAitIgFgqIAAi3IgGgpIAAglIgFgkIAChuIACgVIgRgWIgCgzIAFgaIgFg6IAAhnIAFggIgKg0IALg4IAJgRIAAgVIAFgaIAAgvIgUAAIADAFIgDAvIgPgCIgIgFIgYALQgdACgdgBQgegKgWgVIgggaQgUgiAAgnIAIggQAFgVAIgUIAMgVIAPgvIASglIAvh9IAOhUIAagvQALgKANgHQAcgTAegPQAngFAngIQAjgcAmgXQgNghgEgjQgNgxgBgyIAJgVIADgfQAUg+A5gbIApAAQAjACAgAPQAsA8gHBKIAJADQAJAVgIAXQgEAOgHAMIgTARQgOAYgBAbQAJAPAPAIIAbAVQALANAPAKQApAIAqAFQAWALAUAOQAQAJAPAMQAQATALAXQAMAVADAaIAAApQAKArAPApIANA0IAXAvIAJAlIARAkQACASAAATQAEAXABAYQgVArgpAaIgqAXQgyAKgxgNIAZCDIgJAaIgBDlIAFApIgUAqIAFBzIgFAaIAAAqIgGAqIAACxIgFAbIAADRIgFApIAAB5IgKA0IAAAaIAFAlIgXBhIgOAHIAYA0IACAgIgfABIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgRg+IgGg0IAAh9IgFgqIAAjRIgFgaIADgaIgDggIAAhZIgFgpIAAg6IgGgkIAAhEIgFgvIgFAAIAABoIgGAlIAAA5IgEAqIAABuIgFAqIAAD1IgFAfIAAB+IgOBZIgJAeIgTAGQADAeAAAfIgBAMQgSAQgZAAIgBAAgAjymxIgKhtIgEABIgEAeIgHAaIAUA0IAFAAg");
	this.shape_145.setTransform(-84.5,128.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AhgUBIgvAAIgagJQgPgDgQABIABgaIAZg5IgOgIIgThRIABhZIgKg6IAAhtIgFgqIAAitIgFgpIAAi3IgGgqIAAglIgFgfIAChoIACgbIgRgWIgCguIAFgkIAAgfIgFgfIAAhOIAFg6IgLgfIAMhCIAJgSIAAgUIAFgbIAAg0IgUAFIAAA1IgPgDIgIgEIgYALIg1ABQghgJgYgXIgggaQgUghAAgoIAIgfQAFgWAIgUIAMgVIAPgvIASgkIATg6IAXg0QAHgVAFgVQABgdAGgcIAagvQALgLANgHQAcgTAegOIA+gJQAegMAXgWIAVgQQAHgSgHgTQgKgqgGgpIAAgVIgFgaIAKgbIACgaQAUhDA+gbQAbgBAdABQA/AVAYA/IAFAfIgBAaIAHAQQACAPgBAQQgGAWgLATIgRAMQgPAgANAeQARAPATANQARAQAUAMQAnAIAnAGQAWAKAUAOQAVAMATAQQAIAMAFANQAPAaAFAfQAAAlAHAkIAXBEIADAVQANAgAPAfIAJAkIARAlIACAfQAFAaAAAbQgFARgLAOQgYAaghAQQgXANgYALQgqADgpgMIAZCDIgJAaIgBDlIAFAqIgUAqIAFBzIgFAaIAAAqIgGApIAAC3IgFAaIAADRIgFAqIAABzIgKA0IAAAaIAFAlIgXBhIgOAIIAYA0IACAfIgfACIgQAHIhJACIgegNIgBgOIAFg+IgTgHIgRg9IgGg0IAAh+IgFgqIAAjRIgDgaIADgPIgFglIAAhjIgFgqIAAg6IgGgkIAAhEIgFglIgFAAIAABkIgGAkIAAA/IgEAqIAABoIgFAqIAADmIgLDmIgRA9IgTAHQADAeAAAfIgBAMQgSAQgZAAIgBAAgAjtmWIgFgqIAAgVIgKhJIgEACIgLBCIAZBEIAFAAg");
	this.shape_146.setTransform(-84.5,128.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AhgUAIgvAAIgagJQgPgCgQABIABgaIAZg6IgOgHIgThSIABhYIgKg6IAAhuIgFgpIAAitIgFgqIAAi2IgGgqIAAglIgFgfIAChpIACgaIgRgWIgCguIAFgkIAAglIgFgeIAAg/IAFhEIgLgfIAMhDIAIgMIABgVIAFgaIAAg+IgFAAIAAAFIgPAFIgGA0IgVgFIgUAKQgaABgbAAQghgJgYgXIgggaQgTgfgBglQACgTAGgRQAFgWAIgUIAMgVIAPgvIASglIATg5IAXg0QAHgVAFgVQABgbAFgZQAFgOAIgNIAOgaQANgMAQgJQAagRAbgMQAngGAngIQARgLAOgOIAhgbIgGgUQgKgngGgnQgDgigIgiQAIgFAFgGIgBgfQAKguAfgkQAqgUAuADQAkADAfAUQASAUAIAZQANAmgHAoQAHABAGAFQACAmgRAjIgWAVIgHAaQAKAlAkAWQARAPAUANQAnAIAnAGQAWAKAUAOQAYAOAVASQAJAPAFAQQAKATAEAXIAAApQAGAbAIAaQALAqANApIAXA1IAJAkIAOAaQAFAVAAAVQAFAZAAAbQgFARgLAPQgbAcgjAPQgXANgYALIglABIgpgLIAZCDIgJAaIgBDgIAFAvIgUApIAFB5IgFAaIgGBTIAAC3IgFAqIAAC8IgFAqIAABzIgKA0IAAAaIAFAlIgXBhIgOAHIAYA1IACAfIgfABIgQAIIhJABIgegMIgBgOIAFg+IgTgHIgRg9IgGg1IAAiCIgFgqIAAj7IgFgkIAAhfIgFgpIAAg6IgGgqIAAhEIgFgfIgFAAIAABpIgGAkIAAA6IgEApIAABpIgFAqIAADmIgLDmIgRA9IgTAHQADAeAAAeIgBANQgSAPgZAAIgBAAgAjtmWIgFgqIAAgVIgKhJIgEABIgLBDIAZBEIAFAAg");
	this.shape_147.setTransform(-84.5,128.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("Ah6UCIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgThSIABhZIgKg5IAAhuIgFgqIAAi3IgFgqIAAisIgGgqIAAgkIgFggIAEiCIgRgWIgCgPIAAgfIAFglIgFiBIAFhEIgLggIAMhCIAIgMIABgVIAFgaIAAg/IgFAAIAAAFIgPAGIgGA0IgVgGIgUAKQgaACgbgBQghgJgYgWIgagVQgYghgCgoQACgTAGgSQAFgVAIgVIAMgVIAPgvIASgkIAqhuQAHgVAFgVQABgaAFgaQAFgOAIgMIAOgaQANgNAQgIQAagRAbgNQAngFAngJQAUgMARgQIAUgRQADgQgGgPIgJgqQgGgVgCgVIAAgVQgEgQgCgPQAFgMAFgJIgCgVQAFgrAYgjQAcgWAjgEIAZgEIAQAEQAlAEAeAWQAXAjAJArIAAAaIAJAaIABAaQgEATgIASIgWAWQgMAeAOAeQASAPATAOQARAQAUAMQAnAJAnAFQARAHAPALQAeARAZAVQAXAnAFAtIAAAfQAIAiALAiQAJAiAKAiIAXA0IAIAfQAMAXAIAYIAAAbQAEAXABAYQgJAfgXAYQgWAOgYAKQgeARghAIQgggCgegIIAFAkIAAAQIAJAVIAMA5IgLAlIADAvIgDCmIAFAvIgSAfIgCAbIAFBjIgFAaIAAAvIgGAqIAACsIgFAaIAADXIgFApIAABzIgKA1IAAAaIAFAkIgXBiIgOAHIAYA0IACAfIgfACIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgRg+IgGg0IAAh+IgFgpIgEjhIADgfIgEglIAAhZIgFgqIAAg+IgGglIgFhjIgFAAQABAxgBAyIgGAlIAAA+IgEAqQACAygCAxIgFAqIAACnQABAqgBAqIgFAqQACA/gCA+QgGAlgIAkIgDAVQgMAQgLAKQgBALADAKQACATgDATQgZAUgkAAIgKAAgAjtmVIgPiNIgEACIgLBHIAZBEIAFAAg");
	this.shape_148.setTransform(-84.5,127.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ah6UCIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgThSIABhZIgKg5IAAhuIgFgqIAAi3IgFgqIAAixIgGgqIAAglIgFgpIAAg/IAFgvIgUglIAAgfIAFgfIAAhOIgFgaIAFhoIgLggIAMg5IAIgVIABgVIAFgaIAAg/IgFAAIAAAFIgPAGIgGA0IgVgGIgUAKQgaACgbgBQghgJgYgWIgagVQgYghgCgoQACgTAGgSQAFgVAIgVIAMgVIAPgvIASgkIAqhuQAHgVAFgVQABgaAFgaQAFgOAIgMIAOgaQALgLANgHQAcgTAegOIAUgBQAhgFAegJQAOgLAMgMQAOgKALgLQACgNgFgNIgUhJQgBgWABgUQgEgNgCgNIAIgVIACgaQANg/A2gjIAVgBQAQgEAPAAQAaADAaAHQArAhAOA3IAAAfQAGAQAIAPQACANgCANQgFATgKASIgNAMQgJAOgDAQQAAAQADAPQAUAUAYASQARAQAUAMQAnAJAnAFQARAHAPALQAYANAXAQQANAQAIATQAOAYABAcIAAAlQAKAqAPAqIANA0IASAkIAOAvQALAXAIAYIAAAbQAEAXABAYQgJAfgXAYQgWAOgYAKQghARgjAIQgegCgbgIIAFAkIAAAQIAJAVIAMA5IgLAlIAAAfIAFAaIgFAaIAACCIAFA0IgSAaIgCAvIAFAbIAAA5IgFAaIgGBUIAAC3IgFApIAAC9IgFApIAABzIgKA1IAAAaIAFAkIgXBiIgOAHIAYA0IACAfIgfACIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgRg+IgGg0IAAh+IgFgpIAAkAIgFglIAAheIgFgqIAAg/IgGgkIgFheIgFAAQABA0gBA0IgGAlIAAA5IgEAqQACAygCAxIgFAqIAACnQABAqgBAqIgFAqQACA/gCA+QgGAlgIAkIgDAVQgMAQgLAKQgBALADAKQACATgDATQgZAUgkAAIgKAAgAjtmVIgPiNIgEACIgLBHIAZBEIAFAAg");
	this.shape_149.setTransform(-84.5,127.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("Ah6UCIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgThSIABhZIgKg5IAAhzIgFgqIAAi8IgFgqIAAinIgGgqIAAglIgFgfIAFh4IgSgbIgCgpIAFgfIAAhdIgFggIAFhTIgLggIAMg5IAIgVIABgQIAFgaIAAhEIgFAAIAAAFIgPAGIgGA0IgVgGIgUAKQgYACgYgBQgVgEgUgIIgvgoQgYghgCgoQACgTAGgSQAFgVAIgVIAMgVIAPgvIASgkIA0iIIACgaQAJg2AdgtQAVgQAYgMQAPgLARgHQAqgGApgJQALgIAKgKIAhgcIgIgYQgOgsgGgtIAAgVIgFgaIAIgaIgDgfQAMgwAjgiQAXgLAYgBIAQgEIAZAEQAoAFAfAaQANATAIAXQAGAaABAaIAKAaIABAfQgFAWgNATQgNALgGAQQgBAVAEAUQAUATAYAUQAXAVAeAMIA+AJQARAHAPALQAeARAZAVIAbA0QACAZgBAcQAHAvASAvIAIAkQAKAbANAZIAOAvIARAlQACASAAATQAFAZAAAbQgFARgLAOQgWAZgdANIglAQQgPAJgRAFQgjABgggLIAFAkIAAAQIAJAVIAMA5IgLAlIAFBJIgFAfIAABoIAFA5IgSAaIgCAqIAFAaIAAA/IgFAaIgGBUIAAC8IgFAqIAAC3IgFApIAABzIgKA1IAAAaIAFAkIgXBiIgOAHIAYA0IACAfIgfACIgQAHIhJACIgegMIgBgOIAAglIAFgVIgTgLIgRg+IgGg0IAAiDIgFgqIAAj6IgFgqIAAheIgFglIAAg/IgGgpIAAhUIgKAAQABAygBAxIgGAqIAAA/IgEAqQACAvgCAvIgFAqIAACnQABApgBAqIgFAqQACA8gCA8QgGAlgIAkIgDAVQgMAQgLAKQgBALADAKQACATgDATQgZAUgkAAIgKAAgAjtmVIgPiNIgEACIgLBHIAZBEIAFAAg");
	this.shape_150.setTransform(-84.5,127.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("Ah6UAIgVAAIgagJQgPgCgQAAIABgaIAZg5IgOgHIgThSIABhZIgKg5IAAhzIgFgqIAAi3IgFgqIAAisIgGgqIAAglIgFgfIAFh4IgSgbIgCgPIAAgVIAFgvIAAhYIgFgaIAFhTIgLggIAMg5IAIgVIABgQIAFgaIAAhEIgFAAIAAAFIgPAGIgGA0IgVgGIgUAKQgaACgbgBQghgIgYgXIgagVQgYghgCgoQACgTAGgSQAFgVAIgVIAMgVIAPgvIAXgvIAvh9IACgaQAJg1AdgtQAVgQAYgNQAPgKARgIQAqgFApgKQAOgKAMgNQANgKAKgLQAAgLgEgKIgWhJQgDgaABgaIAEglIgBgVQADgnATgiQAxgmA9ACIAaABQAhANAXAbQASArADAuQAEALAFAKQAEASgDATQgNAdgTAXQgDAKgBALQAAAPAEAPQAUAUAYATQAZAYAhAKQAdADAcAFQARAIAPAKQAeARAZAVIANAaQALAUAEAWIAAAvQAJAqAQAqIANA0IAXAvIAJAkIARAlQACASAAATQAEAZABAbQgVAtguAYIglAQQgPAJgRAFQgjACgggMIAFAfIAAAVIAJAVIAMA5IgKAaIgBAlIAFA5IgFAgIAABdIAFA5IgSAaIgCAlIAFAaIAABEIgFAaIAAAvIgGAqIAAC8IgFAqIAAC3IgFAqIAABtIgKA1IAAAaIAFAkIgXBiIgOAHIAYA0IACAfIgfACIgQAHIhJACIgegMIgBgOIAFg/IgTgGIgRg+IgGg0IAAiDIgFgqIAAj6IgFgqIAAheIgFglIAAg/IgGgpIAAhZIgFAAQgGA0ABA0IgGAgIAABEIgEApQACAvgCAvIgFAgIAAEFIgFAqQACA/gCA+QgGAlgIAkIgDAVQgMAQgLAKQgBALADAKQACATgDATQgZAUgkAAIgKAAgAjtmXIgPiNIgEACIgLBHIAZBEIAFAAg");
	this.shape_151.setTransform(-84.5,128.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.8,0.1,92.5,256.1);


(lib.lectern_clip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AjcOjIAAgWIAchgIBcAAIAA2rIjkAAIgYjVIAFgSIEyAAQAEgLADgOQgFgJAGgNIAFgLQAEgFANAFQAMAFgDANQgHAVgHABIgFASIAzAAIgDgUQgIgDAAgRIgBgKQABgJALAAQATAAgBAQIACAPQABAIgGABIADATIEuAAIACASIgdDVIjRAAIAAWrIBYAAIAcBgIAAAWg");
	this.shape.setTransform(10.2,68.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lectern_clip, new cjs.Rectangle(-25.1,-24.5,70.5,186.2), null);


(lib.teacher = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lectern_clip();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,38.7,1,1,0,0,0,8.5,75.5);

	this.instance_1 = new lib.man_animationclip();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.9,-15.1,1,1,0,0,0,66.3,129.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.teacher, new cjs.Rectangle(-49.2,-144.9,92.5,269.7), null);


(lib.learn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// questionn
	this.instance = new lib.questionn();
	this.instance.parent = this;
	this.instance.setTransform(14.2,103,0.323,0.323);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:7.2,y:48.1},12).wait(27).to({alpha:0},15).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,93.5,12.4,19);


(lib.human4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AEcLUIAAgNIi3giIgwAAIAAAtIgsAAIAAgtIgwAAIjMAjIAAAMIg5AAIAAg1IEFhBIAYAAIAAiyIAMAAIAAjdIk0AAQgMgfAMggQA6gKDdAGQg5hrAAj3IjrAAQgYABgGgQIgBgdQgFi2AFkDQAAgXAVAAIJkAAQAUAAgCAXQgQDXAHDkQACApgeABIjnAAQgNDqBCB4QAsAABbgDQBRgBA2AIQAPAggPAfIkfAAIAADdIANAAIAACyIAYAAIDwBBIAAA1g");
	this.shape.setTransform(-2.9,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// reporter_clip1
	this.instance = new lib.reporter_clip1();
	this.instance.parent = this;
	this.instance.setTransform(24.6,15.9,1,1,0,0,0,29.6,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.human4, new cjs.Rectangle(-42.4,-92.7,84.9,185.5), null);


(lib.human3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AEcLTIAAgLIi3gjIgwAAIAAAtIgsAAIAAgtIgwAAIjMAjIAAALIg5AAIAAg1IEFhAIAYAAIAAiyIAMAAIAAjcIk0AAQgMggAMgfQA6gLDdAGQg5hrAAj3IjrAAQgYABgGgRIgBgcQgFi2AFkDQAAgXAVgBIJkAAQAUACgCAWQgQDWAHDlQACAqgeAAIjnAAQgNDqBCB4QAsAABbgDQBRgBA2AJQAPAfgPAgIkfAAIAADcIANAAIAACyIAYAAIDwBAIAAA1g");
	this.shape.setTransform(1.9,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// reporter_clip4
	this.instance = new lib.reporter_clip4();
	this.instance.parent = this;
	this.instance.setTransform(-3.2,-33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.human3, new cjs.Rectangle(-42.3,-92.8,84.7,185.8), null);


(lib.human2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AD0LUIAAgLIjMgkIgwAAIAAAuIgsAAIAAguIgwAAIi3AjIAAAMIg5AAIAAg2IDwhAIAYAAIAAiyIANAAIAAjcIkfAAQgPggAPgfQA2gJBRABQBbADAsAAQBCh4gNjpIjnAAQgegBACgqQAHjkgQjXQgCgWAUgCIJkAAQAVABAAAXQAFECgEC4IgCAcQgGAQgYAAIjrAAQAAD2g5BrQDVgFA7AIIAJAGQAIAhgKAaIk0AAIAADcIAMAAIAACyIAYAAIEFBAIAAA2g");
	this.shape.setTransform(6.4,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// reporter_clip2
	this.instance = new lib.reporter_clip2();
	this.instance.parent = this;
	this.instance.setTransform(283,-36.2,1,1,0,0,0,22.1,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.human2, new cjs.Rectangle(-42.2,-94.8,84.6,189.6), null);


(lib.human1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AD0LUIAAgMIjMgjIgwAAIAAAuIgsAAIAAguIgwAAIi3AiIAAANIg5AAIAAg1IDwhBIAYAAIAAiyIANAAIAAjdIkfAAQgPgfAPggQA2gIBRABQBbADAsAAQBCh4gNjqIjnAAQgegBACgpQAHjlgQjWQgCgXAUAAIJkAAQAVAAAAAXQAFECgEC4IgCAcQgGAQgYgBIjrAAQAAD3g5BrQDVgFA7AIIAJAGQAIAhgKAZIk0AAIAADdIAMAAIAACyIAYAAIEFBBIAAA1g");
	this.shape.setTransform(1.3,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// reporter_clip3
	this.instance = new lib.reporter_clip3();
	this.instance.parent = this;
	this.instance.setTransform(-11.3,-61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.human1, new cjs.Rectangle(-37.1,-94.1,74.4,188.4), null);


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
	this.shape.graphics.f("#F7F7F7").s().p("EhH9AiMQiKAAAAhyMAAAhAzQAAhyCKAAMCP7AAAQCKAAAAByMAAABAzQAAByiKAAg");
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
(lib.NES_1_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:9,step1:48,step2:86,step3:130,step4:132,step5:134,step6:136,step7:138,step8:140,step9:142,step10:144});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_86 = function() {
		this.stop();
	}
	this.frame_130 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		this.stop();
	}
	this.frame_136 = function() {
		this.stop();
	}
	this.frame_138 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_142 = function() {
		this.stop();
	}
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(39).call(this.frame_48).wait(38).call(this.frame_86).wait(44).call(this.frame_130).wait(2).call(this.frame_132).wait(2).call(this.frame_134).wait(2).call(this.frame_136).wait(2).call(this.frame_138).wait(2).call(this.frame_140).wait(2).call(this.frame_142).wait(2).call(this.frame_144).wait(4));

	// Isolation Mode
	this.instance = new lib.learn();
	this.instance.parent = this;
	this.instance.setTransform(372.1,147.1);
	this.instance._off = true;

	this.instance_1 = new lib.human4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.9,356.4,1.276,1.276);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(24).to({alpha:0},6).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).to({alpha:1},10).wait(40));

	// human4
	this.instance_2 = new lib.human4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.9,356.4,1.276,1.276);

	this.instance_3 = new lib.human3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(219.4,356.4,1.276,1.276,0,0,0,-0.1,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({regX:3},0).wait(1).to({regX:10.2},0).wait(1).to({regX:22.2},0).wait(1).to({regX:39.8},0).wait(1).to({regX:64.3},0).wait(1).to({regX:95.2},0).wait(1).to({regX:132.6},0).wait(1).to({regX:180.8},0).wait(1).to({regX:242.5},0).wait(1).to({regX:321.7},0).wait(1).to({regX:427.5},0).wait(1).to({regX:0,x:-820.1},0).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({alpha:1},10).wait(31));

	// human3
	this.instance_4 = new lib.human3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(219.4,356.4,1.276,1.276,0,0,0,-0.1,0);

	this.instance_5 = new lib.human2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(653.9,359,1.276,1.276,0,0,0,120.3,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({regX:2.8},0).wait(1).to({regX:9.7},0).wait(1).to({regX:21.3,x:219.5},0).wait(1).to({regX:38.4,x:219.6},0).wait(1).to({regX:62,x:219.5},0).wait(1).to({regX:91.8},0).wait(1).to({regX:127.8},0).wait(1).to({regX:174.2},0).wait(1).to({regX:233.7},0).wait(1).to({regX:310.1},0).wait(1).to({regX:412.1,x:219.6},0).wait(1).to({regX:-0.1,x:-660.7},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({alpha:1},10).wait(34));

	// human2
	this.instance_6 = new lib.human2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(653.9,359,1.276,1.276,0,0,0,120.3,0);

	this.instance_7 = new lib.human1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(634.8,360.7,1.276,1.276);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({regX:123.2,x:653.8},0).wait(1).to({regX:130.2,x:653.9},0).wait(1).to({regX:141.8},0).wait(1).to({regX:158.8,x:653.8},0).wait(1).to({regX:182.6,x:653.9},0).wait(1).to({regX:212.6,x:654},0).wait(1).to({regX:248.8,x:653.9},0).wait(1).to({regX:295.4},0).wait(1).to({regX:355.2},0).wait(1).to({regX:431.9},0).wait(1).to({regX:534.3},0).wait(1).to({regX:120.3,x:-230.2},0).to({_off:true},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101).to({_off:false},0).to({alpha:1},10).wait(37));

	// human1
	this.instance_8 = new lib.human1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(634.8,360.7,1.276,1.276);

	this.instance_9 = new lib.teacher();
	this.instance_9.parent = this;
	this.instance_9.setTransform(394.5,305.3,1.276,1.276,0,0,0,23.2,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({regX:80.4},0).wait(1).to({regX:110.9},0).wait(1).to({regX:133.7},0).wait(1).to({regX:150.9},0).wait(1).to({regX:164.2},0).wait(1).to({regX:174.4},0).wait(1).to({regX:183.3,x:634.7},0).wait(1).to({regX:190.3,x:634.8},0).wait(1).to({regX:195.6,x:634.9},0).wait(1).to({regX:199.2},0).wait(1).to({regX:201.3,x:634.7},0).wait(1).to({regX:0,x:376.8},0).wait(47).to({alpha:0},9).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(111).to({_off:false},0).to({alpha:1},10).wait(27));

	// teacher
	this.instance_10 = new lib.teacher();
	this.instance_10.parent = this;
	this.instance_10.setTransform(394.5,305.3,1.276,1.276,0,0,0,23.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({regX:25.8},0).wait(1).to({regX:31.9,x:394.4},0).wait(1).to({regX:42.3,x:394.5},0).wait(1).to({regX:57.5},0).wait(1).to({regX:78.6},0).wait(1).to({regX:105.2},0).wait(1).to({regX:137.3,x:394.4},0).wait(1).to({regX:178.8},0).wait(1).to({regX:232,x:394.5},0).wait(1).to({regX:300.2},0).wait(1).to({regX:391.2},0).wait(1).to({regX:23.2,x:-391.5},0).to({_off:true},1).wait(120));

	// Layer 18
	this.instance_11 = new lib.board();
	this.instance_11.parent = this;
	this.instance_11.setTransform(233.8,-76.6,0.849,0.849,180,0,0,89.3,239.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({regY:237.8},0).wait(1).to({regY:235},0).wait(1).to({regY:230.5},0).wait(1).to({regY:224.1},0).wait(1).to({regY:215.7},0).wait(1).to({regY:205},0).wait(1).to({regY:191.4},0).wait(1).to({regY:175},0).wait(1).to({regY:157.3,y:-76.5},0).wait(1).to({regY:136.2,y:-76.6},0).wait(1).to({regY:110.9},0).wait(1).to({regY:80.9},0).wait(1).to({regY:45},0).wait(1).to({regY:2},0).wait(1).to({regY:-47.9},0).wait(1).to({regY:-121.2,y:-76.5},0).wait(1).to({regY:239.2,y:-539.3},0).to({y:-548.3},1).wait(1).to({regY:424.3},0).wait(1).to({regY:499.6,y:-548.4},0).wait(1).to({regY:551.5,y:-548.3},0).wait(1).to({regY:596.4,y:-548.4},0).wait(1).to({regY:632.9},0).wait(1).to({regY:663},0).wait(1).to({regY:688,y:-548.3},0).wait(1).to({regY:709,y:-548.4},0).wait(1).to({regY:727.3,y:-548.3},0).wait(1).to({regY:743.9},0).wait(1).to({regY:757.7},0).wait(1).to({regY:769.1},0).wait(1).to({regY:778.1},0).wait(1).to({regY:785.1,y:-548.4},0).wait(1).to({regY:790,y:-548.3},0).wait(1).to({regY:793.1},0).wait(1).to({regY:239.2,y:-76.6},0).wait(5).to({regY:237.8},0).wait(1).to({regY:235},0).wait(1).to({regY:230.5},0).wait(1).to({regY:224.1},0).wait(1).to({regY:215.7},0).wait(1).to({regY:205},0).wait(1).to({regY:191.4},0).wait(1).to({regY:175},0).wait(1).to({regY:157.3,y:-76.5},0).wait(1).to({regY:136.2,y:-76.6},0).wait(1).to({regY:110.9},0).wait(1).to({regY:80.9},0).wait(1).to({regY:45},0).wait(1).to({regY:2},0).wait(1).to({regY:-47.9},0).wait(1).to({regY:-121.2,y:-76.5},0).wait(1).to({regY:239.2,y:-539.3},0).to({y:-548.3},1).wait(1).to({regY:424.3},0).wait(1).to({regY:499.6,y:-548.4},0).wait(1).to({regY:551.5,y:-548.3},0).wait(1).to({regY:596.4,y:-548.4},0).wait(1).to({regY:632.9},0).wait(1).to({regY:663},0).wait(1).to({regY:688,y:-548.3},0).wait(1).to({regY:709,y:-548.4},0).wait(1).to({regY:727.3,y:-548.3},0).wait(1).to({regY:743.9},0).wait(1).to({regY:757.7},0).wait(1).to({regY:769.1},0).wait(1).to({regY:778.1},0).wait(1).to({regY:785.1,y:-548.4},0).wait(1).to({regY:790,y:-548.3},0).wait(1).to({regY:793.1},0).wait(1).to({regY:239.2,y:-76.6},0).wait(10).to({regY:237.8},0).wait(1).to({regY:235},0).wait(1).to({regY:230.5},0).wait(1).to({regY:224.1},0).wait(1).to({regY:215.7},0).wait(1).to({regY:205},0).wait(1).to({regY:191.4},0).wait(1).to({regY:175},0).wait(1).to({regY:157.3,y:-76.5},0).wait(1).to({regY:136.2,y:-76.6},0).wait(1).to({regY:110.9},0).wait(1).to({regY:80.9},0).wait(1).to({regY:45},0).wait(1).to({regY:2},0).wait(1).to({regY:-47.9},0).wait(1).to({regY:-121.2,y:-76.5},0).wait(1).to({regY:239.2,y:-539.3},0).to({y:-548.3},2).wait(1).to({regY:424.3},0).wait(1).to({regY:499.6,y:-548.4},0).wait(1).to({regY:551.5,y:-548.3},0).wait(1).to({regY:596.4,y:-548.4},0).wait(1).to({regY:632.9},0).wait(1).to({regY:663},0).wait(1).to({regY:688,y:-548.3},0).wait(1).to({regY:709,y:-548.4},0).wait(1).to({regY:727.3,y:-548.3},0).wait(1).to({regY:743.9},0).wait(1).to({regY:757.7},0).wait(1).to({regY:769.1},0).wait(1).to({regY:778.1},0).wait(1).to({regY:785.1,y:-548.4},0).wait(1).to({regY:790,y:-548.3},0).wait(1).to({regY:793.1},0).wait(1).to({regY:239.2,y:-76.6},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(473.4,-57.9,838.5,863.9);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 18,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;