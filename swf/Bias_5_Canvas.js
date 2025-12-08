(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Bias_5_Canvas_atlas_", frames: [[0,0,275,834],[277,169,289,167],[277,0,289,167]]}
];



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



(lib.mark = function() {
	this.spriteSheet = ss["Bias_5_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pie1 = function() {
	this.spriteSheet = ss["Bias_5_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pie2 = function() {
	this.spriteSheet = ss["Bias_5_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.vvz12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACGPmQgCgyAAgyIADAAIAABhIAAADgAlziCIAAgHQBIgjA9gvIADgBQgoBXhgAIgABpjKQiVgZh2g1QCBinAoj/QANhVgFhkQgDg9ABgxQA0A7BxgCIAEAAQArCfAADLIAAADQAGAvgDA4IAAADIAAAEQAIBDgVAnIACAAQAFApgEAdIABADQAQAjAXAcIAAADQAKAjgHAjQhFglhXgPgAE7j9QA7gegZhWIACAAQAMAZAGAfIACAAIAAAEQACAMgFAEIAAgGIAAgFQgFAzgtAAIgDAAgAFFobIAAhjIADAAIAAADQACA2gFAuIAAgEg");
	this.shape.setTransform(1.8,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000101").s().p("AlkVyQgDgKABgJQAHg+AggqQgYggAHgzIAPh9QAUiiAiiaQANg8AUg6QAXhHgChUIACgBQAHgXAOgQQgBhsARhYQAThfgPhhIAAADQgFA1gSAoIgDAAQhfgRg6g1QAEhIAVhGQAJgdgLAKQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAIgDAEIgZhjQgEgUgIgRQg/iGAIjPQBTjWBjjFQAKgUAUgLQAzgLA9gEQAtgDA0gDQAxgBAegZQAFgSABgPQgGgBgFgGQgEgGAAgFQgCgIgEgEQgCgDAAgCIADgGIgIgfIgIgfIACgIQgCgEgCgHQgDgIAAgJQAAgFADgEQAEgDgBgIIAAgTQACgXAKgPIAGgKIABgEQAAgJACgCQAGgIAHgUQAGgTAEgEQAFgEARgFQARgGAGgFQALgJAFgBQAGgBArABIAiAIQAYAFAGAEIAJAHQAEADAHACIAbAEQAGABAAAEQAAACgDACQgDADgFAAIANAGQACACAAADQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgHAEIAEAHIgGAGQAMASAGASIAGARQADAJAAAJIgDASIgCARQADAKAAAEQAAAFgFAJIgBACIgDARIgBADIAAALQgBAIgEACQgNAugKATQg8AtgCAsIgCAtQBNBABLBCIABADQADBpgHBvIAAADIgDAAIAABjIAAAEIAAAEQgDAWgOAKQAcA7AeA5IACABQAFAegBAkIAAADIgCAAQgHgfgLgZIgCAAQAZBXg8AeQAwACAFg2IAAAFIAAAGIAAAEQABA5g5gBQgUgFAAAPQAAARACAKQAhCzgCDDIgCABQgXAagVgiQgVgUgCAsQgIC4g5CQQgUA1gIBGQgLBhgQBgIAAA4IAAAEIgEAAQAAAxACAyIACAAIAAADQADAsgNAbQANApAWAjQAUAiAqAKQA4APAdAlQgIAGgJACQhkAXhbgZQgWgGgWgDQhAgIgzgQQgLgUABgkIAAgTQgHg5AAhGQAsj+ATkQQAEgwAEgpIALhTQAGgWABgfQABgngLAGIAAADIAAADQgZBZgSBbQgDARgFAPQgcBigZBmQgPA+gEBBIgSE0QgEBEghArQgaAhgHAnIgDABQgUARgYAMQgEAGgDAJQgJAZgYAOQgfASgfAAQgbABgbgNgAi3i1Qg9AuhIAkIAAAGIAAAFQBhgHAnhYIgDACgABHtSQAFBlgOBVQgoD+iBCoQB2A0CVAZQBYAPBFAlQAHgjgKgjIAAgDQgYgcgQgjIAAgDQAEgcgGgqIgCAAQAVgngHhDIAAgDIAAgEQACg3gGgwIAAgDQAAjLgrifIgDAAQhyACg0g7QAAAxADA9gAEv07IAAAAIAAAAg");
	this.shape_1.setTransform(-3.8,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvz12, new cjs.Rectangle(-46.5,-143.5,85.5,281.3), null);


(lib.vvz11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACOm4IC8BlIAtBQIAzDhIAPBVIgOACAFEB0IgGAEIgjg4IgRAtIAJCYIgJBNIACA/Am4A6IBsluIAdgbIC3hkAlTBtIAwg7IAphIIABB6IATC2IgxAzIgEAqIAaA1IgCAN");
	this.shape.setTransform(3.3,-53.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],0,44.2,0,-44.1).s().p("AjOHXIAAgaIATAPIAOACQAIgBADgJQACgJgGgGIgegbIgcgrQgQgOgTgFIACgMIgag2IAEgqIAxgyIgTi2IgBh6IgpBIIgwA7IgBgkQgygXgyAJIBslvIAdgcIC3hjQgEAfAZARQBIBGB+g8QAjgQAIgvIC8BkIAtBRIAzDgIAPBWIgOADIgcAEIgqAjIgiAXIgFADIgjg2IgRAsIAJCYIgJBNIACA/IgMAmIgVAOQgcAAgSAQIgbAZIgwAaQgNAIAVAJIAdgCIARgFIgOAeQhxBBhaAAQhYAAhFg+g");
	this.shape_1.setTransform(3.3,-44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#010101").s().p("AEZVFQgagEgOgeQAAgOgegRQgZgIgIgRIgKgzIg3gqIgGjtIgOkqIgiixIgzjBIgEgVIgWgFIgtCoIg7EGIgJBIIgBDeIgcChIhABvIgDAaQgYARglAMQgJAKAEAPQgKAVgRAEQgsAKgwgJQgdgIAAgQIABgbQAWghAggTIgBgVIALgHIADgoIAbgjIghgbQgHgNAHgRIA1jGIAMiFIAHgYIgChiIAFgdIgCiVIAklwIhBhtIgUhHIgjg/IgmhnIgMhfIALhLQAygIAyAXIABAkIACBGQAXCyAYAzIAXAfIAIACQATAFAQAOIAcAqIAeAbQAGAGgCAJQgDAIgIACIgOgCIgTgQIAAAaQCLB+DdiBIAOgdIgRAEIgdACQgVgIANgJIAwgZIAbgZQASgQAcAAIAVgNIAMgnIAWhCIAOhgIAYhTIgFgoIAigWIAqglIAcgEIAEB2IgSBYIg1ByQgVAmgYBNIggAuIgjAoIAWCEIACCdIgEBsIgbB5IAkDxIA6EoIgKAZIgdAOIAGAlIAGARIAOAXIApAnIALAhIgDAXQgMALgoAAQgVAAgcgDgAhYt3QgZgQAEggIAAAAIAVgGIAZgSIADh/IgWgWIgXhAIAIhNIAag7IAtgbIBFgQIBNAfIAeAfIAQBOIgEBJIgNAzIgfBKIgEAzIAfAXIAIgBQgIAwgjAPQg7AcgvAAQg1AAgngmg");
	this.shape_2.setTransform(2.2,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvz11, new cjs.Rectangle(-42,-138.4,90.4,270.3), null);


(lib.vvz9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AgGgZQAYAHACAJQAFAWgFAHIgJAJIANAFQARABAAgLQAAg5gjAAQgQAAgMAAQgEgBgCABIgDACg");
	this.shape.setTransform(-34.5,-9.2,1.367,1.367,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAiIgOgFIAKgJQAFgHgFgWQgCgJgZgHIgZgGIAEgCQABgBAEABIAcAAQAkAAAAA5QAAAKgPAAIgCAAg");
	this.shape_1.setTransform(-35.1,-9.2,1.367,1.367,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AgiALQAbghAbgLQAOgFAJABIABAHIgMABQgcAIgQAaQgIANgDAMIgLgTQgBABAAAAIABgCg");
	this.shape_2.setTransform(32,-7.5,1.367,1.367,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnAPQAbghAcgLQAOgFAJABIABAHIgNABQgbAIgQAaQgJANgDAMg");
	this.shape_3.setTransform(31.4,-8,1.367,1.367,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#222222").s().p("AgYDMQgSgVgEgJQgDgGAFhCIAGhBQAFg7APhRQAPhFAAgEIgEgRQgEgNABgDQABgEAHgFQAFgEAFgCQAEgBAJAHQAHAFAEAFQAFAGgMAcQADADAJAyQAJAzAAAQQABATABDPQAAAIgXAVQgUATgHAEIgBABQgEAAgRgVg");
	this.shape_4.setTransform(0.2,-59.3,1.367,1.367,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AAGgIQAUgBAVgUQARgRADgLIAGAIIADAuIgPA4QgGgPgPgUQgTgYgPgCIAAAAQgBAAgBAAQgMACgQAfIgQAeQgBgGgigxIADg3IAEgGIAcAcQAdAZAPAA");
	this.shape_5.setTransform(-0.1,-88.7,1.367,1.367,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhLACIADg1IAEgHIAcAcQAdAZAPAAQgMACgQAgIgQAdQgBgGgigygAAoAVQgTgYgPgCQAUgBAVgUQARgRADgKIAGAHIADAuIgPA4QgGgPgPgUg");
	this.shape_6.setTransform(-0.1,-89.2,1.367,1.367,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(0.1,0,0,4).p("AAqgHIAAAPQAAAGgEADQgDAEgGAAIg5AAQgFAAgEgEQgEgDAAgGIAAgPQAAgFAEgEQAEgEAFAAIA5AAQAGAAADAEQAEAEAAAFg");
	this.shape_7.setTransform(-1.2,-19.4,1.367,1.367,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#222222").s().p("AgcAVQgFAAgEgEQgEgDAAgGIAAgPQAAgFAEgEQAEgEAFAAIA5AAQAGAAADAEQAEAEAAAFIAAAPQAAAGgEADQgDAEgGAAg");
	this.shape_8.setTransform(-1.2,-19.4,1.367,1.367,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AgNjgQgZgOgTgSIgOgPIgEAGIgBAnQAAADgDAhQgDAjABAOQAAAMAGA1QAGA5gDAiIAAAvQgCA0gIAaIgGAXQgNAlghBGIBaAFQBoACBLgRQgNgagOghQgchDAAglQgBgggDg0QgCguAAgNQAAgIACgtQACgigCgPQgDgZAAhDIgDgUIgGgHQgHALgLAMQgVAXgOACQgCABgEABQgHAAgLgHg");
	this.shape_9.setTransform(-0.6,-60,1.367,1.367,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#DEDEDE","#DADADA","#CDCDCD","#B9B9B9","#9C9C9C","#777777","#4A4A4A","#242424"],[0,0.694,0.737,0.78,0.827,0.875,0.922,0.965,1],0,27.4,0,-27.4).s().p("AgsESIhagGQAhhFAMglIAHgYQAHgaADg0IAAguQADgjgGg4IgGhBQgBgOACgjIADglIACgnIAEgGIAOAQQATASAYANQALAHAIAAQADAAACgCQAPgCAVgXQAKgLAIgMIAGAIIACAUQAABCADAaQADAOgDAjIgCA0IADA8QADAzABAhQAAAlAcBDQAOAhANAaQhEAPhZAAIgWAAg");
	this.shape_10.setTransform(-0.6,-59.8,1.367,1.367,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiOPbQgWgTAKgeQAPgeACgGQACgGgEgQQgGgYgCgPQgRhzgCgYIgKhFQgIg8gDghQgDgkgChPIgDhHQAAgRgFhnIgFhjIg2gDQgEgBALgyIANhCIAFgRQAAgCgGgCQgHgBgJgMQgJgMgDgMIgahFQgWg8gDgPIgFgXQgCgHABgIQABgJgCgKIgEgQQgBgDAOguQAQg3AGglQAHgpAIhTIAHhKQACgWAtgMIBDgRQAQgEAegTQAdgSANgNQAKgJgBgWIgEgaQgCgJgCgHQgEgKgFACQgFABgIgUQgIgSgEgQQgBgKAKACIAOACQACgEgHgVQgDgPgBgNQgCgXALgVQASgfAngLQAVgGAOABQAnACAYAkQAPAXAEAeQAFAXgIAfQABgDACgBQADgBAEAEQAGAHgNAmQgDAMgIAEIgIADQAAAQgFAnQgCAOACAGQACAEAIAJQAGAGAQAGIAhALQBqAlAPALQANAJADATIABApQABAUALAuIASBJQAGAcAEAhQADAcABAMQAAAHADAIIAEAIIACAKIAAAJQAFADABAGQABAFgCADIgIAOIAEAFQAEAGAAALQABAMgFARQgFAPgGAIQgFAGgGAYIgIAiQgDAJAAATIABAfQgBALgRgCIgSgEIgKAWIAYAgQAaAjAIAIQAIAIgGAHIgbAcQgPAVgQADIgNAAIgDACQgDACARDMQADAsAQCjIAMB9QAKBoACAMQADAMgDAOIgIAeQgLAkAAAXQAAATAIAEQAGADAYAhQAFAJgLALQgMALgNgBQgLABgUgGQgTgFgFgFQgEgEgPgFIgXgJQgIgEACgTIADgcQAAgIgKgQIgRgcQgGgNADgOQABgGAIgQQADgHgEgIIgHgTIgShFIgQg7QgMgsgCgOQgBgMgJgoQgLgtgGgeQgDgWgIg9QgGgtgFgSIgXhRQgQg8gEgIQgEgIgCgVIgCgUIgFAlQgBALgLAkQgMAmgHAQQgHAOgBBGIgDBlQgCAbABBAIABBPQgBAWAEAqQAGAqAHAaQAGAXgBAyQgBAngDAQIgFAWQgCAOABAIQACALgBAGQgBAHgHAFQgIAJAEAIQgkAggiAEgAjJkZQgFAHgDAJQgDAIAAAIIAAAQQgCAfAJAjQAFAQADgDQACgCAAgNIgCh1IgEAFgADTkWIgCAHIgDA6QAAANADAXQABAMAFgkIABghQABgKgCgPIgCgTIgBgDIgBADg");
	this.shape_11.setTransform(0,0,1.367,1.367,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvz9, new cjs.Rectangle(-45.3,-135.3,90.7,270.6), null);


(lib.vvz8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AgHhNIgEAfQgEAhACANQACANAJAaQAJAeABACQACAJACgaQACgXAAgWQAAgUgVhCg");
	this.shape.setTransform(-15.1,-57.7,1.437,1.437,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIBJIgKggQgJgagCgNQgCgNAEghIAEgfQAVBCAAAUQAAAWgCAXQgCAUgBAAIgBgDg");
	this.shape_1.setTransform(-15.1,-58,1.437,1.437,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVglIAAALQgSABgLAWQgLARgBAYQgBhCAqgJg");
	this.shape_2.setTransform(28.6,-111.4,1.437,1.437,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,0,0,4).p("AiAhBQALgBARgCQAIAAAIAHQAKAJgDALQgBAFgDAiQgDAagGAKQgIANgCAJQgCAMAHAMQAKARAuBKQAdhnAKgVQAwhSAEgQQAFgPABgCQAEgGAJAAQAOAAA5gEIg9hcQgHAXgKADQgIAqgHAOQgNAlgUAfQgSAbgQAcQgUAiAAAIQAAAKgEgMQgFgNgBgUQgIgtAAgWQAAgBgCgbQgCgQAEgNIALgsIgDgqQgJAEgLAHQgWAOgHAOQgIAQgPAUQgOARgJAIQgGAFAVgCg");
	this.shape_3.setTransform(5.5,-90,1.437,1.437,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhdBQQgHgMACgMQACgIAIgOQAGgJADgbIAEgnQADgKgKgKQgIgGgIgBIgcAEQgVACAGgGQAJgHAOgRQAPgVAIgPQAHgPAWgNQALgHAJgFIADAqIgLAsQgEANACAQIACAcQAAAWAIAuQABATAFANQAEANAAgLQAAgIAUgiQAQgcASgbQAUgfANglQAHgOAIgqQAKgDAHgXIA9BcQg5AEgOABQgJgBgEAGIgGARQgEARgwBRQgKAVgdBnIg4hbg");
	this.shape_4.setTransform(5.8,-90,1.437,1.437,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAOQgZgRACgeIALADQgEAVAUASQARASAaAHQgdgFgSgPg");
	this.shape_5.setTransform(-13.8,-131.9,1.437,1.437,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAIgCQgKgVgPgCIAAgLQAXAHAIAZQACAJACAgQgDgWgHgRg");
	this.shape_6.setTransform(-14.8,-121.7,1.437,1.437,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAPQARAEAOgKQAOgJAFgRIALAEQgIARgTAJQgJAFgKAAQgIAAgHgDg");
	this.shape_7.setTransform(26.7,-120.6,1.437,1.437,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbATQARACAMgNQANgLACgRIALACQgFATgRAMQgKAIgMAAQgGAAgFgCg");
	this.shape_8.setTransform(24.5,-127.1,1.437,1.437,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,0,0,4).p("ABstUQACAPAHAIQAIALgBAXQgBAVgGAMQgHAOAAAZQAAAIgDAHQgDAIgDAAIgEAAIAEAOIAdAHQAhAIARAKQAnAWAAAsQAAAJAMCEQAQC7AAAoQAAAcAICnQAAAIAFARQAEAOADAFQADAEgPAAIAJAQQACAEABAPQABARgBAKQgBAPgLAHQgFAKgGADQgBAAgJAAQgGgBgBAHQgCAGgDAPQgEAOgGAFQgJAHgIAAIAFAZQAFAaABALQACAPgBAUQAAAXgCAJQgCAIAGANQADAIAGAKQACAEAFAZQADANAEAUQACAGAOA0QAOA2ACATQACAQALBKQALBWAIBfIgDASQgDAUADAHQAEAMAPAqQACAFAPAZQALAYgKAGQgPAKg5gBQgIAAgHgHQgHgGgCgJQgCgFADgPQACgQgCgKQgHgugKABQgGABgRgCIgQgCQgPhZgNguQgGgXgThqQgVhxgIgiQgFgUgYhoQgRhNgIgVQgFgPgNggQgNgdgJgcIgghhIgCAcQgDAfgGANQgFANgGA/QgEAhgFAyQgEAfgIBYQgIBhADAJIAGCGQAAANACBvQACBrgDAFQgCAEgHAMQgFAMAAAJIABA0IgNgBQAAgKgCgLQgFgWgKgFIgDAJQgDAKAAAGQAAASgCAHQgEASgQABQg6AHgPgJQgVgOAVgPQAegWACgWQACgQABgHQACgMgEgCQgDgCgDhKQgEhcAAgHQgBgLgHguQgFgmAAgUQAAhDAAgvQAAhbgDgUQgDgZgGhaQgHhbAAgcIgDidIgOgEQAEgBAFgJQALgUAHgqQAEgMAEgNQAIgaADgEQADgFgIgCQgJgCgJADQgIADgGAAQgFgBgDAAIgFAFQgEAEgJgGQgKgHgJgaQgIgggEgNQgQgsgMgeQgVg5ADgJQAEgKAxhVQAzhZAGgKQANgYAFgGQANgQAPgDQgKgLgDgYQgCgQAIgcQAGgZAIgQQAEgIAVgyQAVgzAGgMQAKgUAOgQQARgSASgFQAVgGAXABQAXACAPAJQAKAGAfAUQAcAUAHAUQAFANAFAXgAi/njIgZArQgaAtABAHQABADAIATQAGAQgBAIQgCALABAGQABAHAFAHQAGAKAMAkQATgHADgHQACgGAFgEQAFgFADAAQAFAAAMgkQgLgsACgRQACgLgEgMQgFgPgCgIQgDgLgKgSgACgh2QAEAQAAAGQAAALACgSQACgQgCgIQgBgGgFgOQgEgLAAgEIABAegACugsQgGgRgBgFIABAgIAHAfQABADACgEQACgGAAgJQAAgHgGgSgADLBuQgBgDgDACQgEADgCAEIAAApQAIAAAAgLQAAgWACgHQABgFgBgCg");
	this.shape_9.setTransform(2.4,-6.8,1.437,1.437,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AECPGQgIAAgHgHQgHgGgCgJQgCgFADgPQACgQgCgKQgHgugKABQgGABgRgCIgQgCQgPhZgNguQgGgXgThqQgVhxgIgiIgdh8QgRhNgIgVIgSgvQgNgdgJgcIgghhIgCAcQgDAfgGANQgFANgGA/IgJBTQgEAfgIBYQgIBhADAJIAGCGIACB8QACBrgDAFIgJAQQgFAMAAAJIABA0IgNgBIgCgVQgFgWgKgFIgDAJQgDAKAAAGQAAASgCAHQgEASgQABQg6AHgPgJQgVgOAVgPQAegWACgWIADgXQACgMgEgCQgDgCgDhKIgEhjIgIg5QgFgmAAgUIAAhyQAAhbgDgUQgDgZgGhaQgHhbAAgcIgDidIgOgEQAEgBAFgJQALgUAHgqIAIgZQAIgaADgEQADgFgIgCQgJgCgJADQgIADgGAAIgIgBIgFAFQgEAEgJgGQgKgHgJgaIgMgtIgchKQgVg5ADgJQAEgKAxhVIA5hjQANgYAFgGQANgQAPgDQgKgLgDgYQgCgQAIgcQAGgZAIgQIAZg6IAbg/QAKgUAOgQQARgSASgFQAVgGAXABQAXACAPAJIApAaQAcAUAHAUQAFANAFAXQACAPAHAIQAIALgBAXQgBAVgGAMQgHAOAAAZQAAAIgDAHQgDAIgDAAIgEAAIAEAOIAdAHQAhAIARAKQAnAWAAAsIAMCNQAQC7AAAoQAAAcAICnQAAAIAFARQAEAOADAFQADAEgPAAIAJAQQACAEABAPQABARgBAKQgBAPgLAHQgFAKgGADIgKAAQgGgBgBAHIgFAVQgEAOgGAFQgJAHgIAAIAFAZQAFAaABALQACAPgBAUQAAAXgCAJQgCAIAGANIAJASQACAEAFAZIAHAhIAQA6QAOA2ACATIANBaQALBWAIBfIgDASQgDAUADAHIATA2IARAeQALAYgKAGQgNAJgtAAIgOAAgADHBtQgEADgCAEIAAApQAIAAAAgLQAAgWACgHQABgFgBgCIgCgCIgCABgACogiIAHAfQABADACgEQACgGAAgJQAAgHgGgSQgGgRgBgFgACdiEIADAOQAEAQAAAGQAAALACgSQACgQgCgIIgGgUQgEgLAAgEgAjYm4QgaAtABAHIAJAWQAGAQgBAIQgCALABAGQABAHAFAHQAGAKAMAkQATgHADgHQACgGAFgEQAFgFADAAQAFAAAMgkQgLgsACgRQACgLgEgMIgHgXQgDgLgKgSIgKgRg");
	this.shape_10.setTransform(2.4,-6.8,1.437,1.437,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvz8, new cjs.Rectangle(-46.8,-146.5,98.3,279.6), null);


(lib.mnn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(2,1,1).p("AA4/LIByAtIAsAuIAXBzIgGBsIgTBMIguBsIgFBMIAtAiIANgBIEVCUIBCB3IBLFMIAXB/IgUAEIAFCuIgbCCIhOCnQgfA5gjBxIgvBFIg0A8IAhDCIACDoIgFCgIgpCyIA2FkIBWG1IgQAlIgqAVIAIA2IAJAZIAWAiIA7A6IARAxIgEAiQgbAXh6gMQgngFgVgsQAAgWgsgZQglgLgMgZIgPhLIhRg+IgHleIgXm5IgykFIhLkdIgFggIghgGIhED4IhWGCIgNBrIgCFHIgpDvIhfCkIgFAmQgiAZg4ARQgMAQAFAVQgOAfgZAHQhCANhGgMQgrgMAAgYIABgoQAggwAwgcIgBgfIAPgKIAFg7IAng1IgwgnQgLgUALgZIBPkkIARjFIAKgjIgDiQIAIgsIgDjbIA1ogIhgiiIgehpIgzhdIg5iYIgRiMIAQhuIChoeIApgpIEPiTIAfgJIAkgaIAGi8IgiggIghhfIALhyIAnhXIBCgogAlnpNIAbENIhIBKIgGA+IAnBPIgEATQgGgCgGgBIgiguQgihKgikIIgDhnIBHhYIA8hrgAHtn7IgkB7IgUCNIggBjIgDheIANhxIgNjhIAZhCIA0BSIAIgFg");
	this.shape.setTransform(76.9,196.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AGYfIQgngFgVgsQAAgWgsgZQglgLgMgZIgPhLIhRg+IgHleIgXm5IgykFIhLkdIgFggIghgGIhED4IhWGCIgNBrIgCFHIgpDvIhfCkIgFAmQgiAZg4ARQgMAQAFAVQgOAfgZAHQhCANhGgMQgrgMAAgYIABgoQAggwAwgcIgBgfIAPgKIAFg7IAng1IgwgnQgLgUALgZIBPkkIARjFIAKgjIgDiQIAIgsIgDjbIA1ogIhgiiIgehpIgzhdIg5iYIgRiMIAQhuIChoeIApgpIEPiTIAfgJIAkgaIAGi8IgiggIghhfIALhyIAnhXIBCgoIBngXIByAtIAsAuIAXBzIgGBsIgTBMIguBsIgFBMIAtAiIANgBIEVCUIBCB3IBLFMIAXB/IgUAEIAFCuIgbCCIhOCnQgfA5gjBxIgvBFIg0A8IAhDCIACDoIgFCgIgpCyIA2FkIBWG1IgQAlIgqAVIAIA2IAJAZIAWAiIA7A6IARAxIgEAiQgSAPg7AAQgeAAgqgEgAmlqYIhHBYIADBnQAiEIAiBKIAiAuIAMADIAEgTIgnhPIAGg+IBIhKIgbkNIgCi2gAGSpAIANDhIgNBxIADBeIAghjIAUiNIAkh7IgGg6IgIAFIg0hSg");
	this.shape_1.setTransform(76.9,196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mnn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(2,1,1).p("ACy/uQgphChUgZQgsgMggACQhUAFgzBOQggAxgLBAQgGAiAHArQACATAGAVQgCgGgGgCQgHgEgIAKQgNAPAbBSQAJAaARAHQAPAGAAABQAAAjANBUQAEAcgEAOIgNAQIAAADQgEAEgFAFQgNANgkAOQgOAGg3ARQjkBQgjAZQgbASgFAqQgCAZAAA/QgEAqgXBlQgNA4gaBlQgNA7gJBIQgHA8AAAZQAAARgIAQQgHAQAAABQgBAFgEASQgCAMABAGQgJAIgEALQgDAMAGAHIASAeIgJAKQgIAOgBAXQgCAaALAlQALAgANARQAKAMANA1QAQBEACAFQAGATgBAqQAAAhAAARIgBAGQAAAIAAABQAAAZAlgCIANgFIAbgGIAWAwIgzBGQg4BKgTASQgRASAOAOQAtAuAMAPQAgAsAjAIIAcAAIAIAEQAEAEgjG3QgGBfgkFfQgEAkgWDrQgVDggFAZQgGAbAGAeQADAPAPAxQAZBNAAAxQAAApgTAJQgNAHgzBIQgMASAZAYQAZAXAegCQAWACArgLQApgMAMgLQAJgIAggKQAogPAKgFQAQgIgDgqQgHgvAAgOQAAgQAVgiQAkg9AAgBQANgbgGgeQgEgNgPgiQgGgRAHgRQANgiACgHIAniUQAEgNAfhzQAahdAEggQADgZAUhWQAWhiAMhAQAJgwARiCQANhiALgmQAPg6Ahh2QAkiAAHgSQAIgRAFguIADgrIANBRQAEAXAXBNQAZBSAPAjQAOAeAFCXQACBRAECKQAEA5gCCLQgDCYABARQACAvgLBbQgLBbgQA4QgNAxADBtQACBUAGAiQACANAIAiQAGAegDASQgDAYACAMQACAPANAMQATASgIASQBMBFBKAIIA6gHQAvgogVhBQgihBgDgNQgEgNAIgiQANgzAFggQAkj4AFg1QABgOATiGQAUiBAFhIQAFhOAHipIAGiZQgBgmALjdIALjWQBpgEALgCQAIgCgWhrQgah4gEgXQgJgggBgFQAAgGAOgDQAPgDATgaQARgZAJgZQABgBAAgBQAehRAZhCQAviCAGggQADgPAIgjQADgPgBgSQgBgTAFgWQAGgXACgKQACgIgehjQgjh3gNhPQgOhZgTiyIgPifQgDgvhigaQg1gOhbgYQgigIhDgqQg9gmgcgbIgKgNIAAAAQgLgUADgiQAHgwABgJQACgTAHgQQAIgUAKADQALADASgrQASgnAGgiQAEgXgXAGQgbAFgBgBQgFgIAJgeQACgHACgJQAJghACgbQAEgzgXgtg");
	this.shape.setTransform(71.5,213.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EABkAgIQAIgSgTgSQgNgMgCgPQgCgMADgYQADgSgGgeIgKgvQgGgigChUQgDhtANgxQAQg4ALhbQALhbgCgvQgBgRADiYQACiLgEg5IgGjbQgFiXgOgeQgPgjgZhSQgXhNgEgXIgNhRIgDArQgFAugIARQgHASgkCAQghB2gPA6QgLAmgNBiQgRCCgJAwQgMBAgWBiQgUBWgDAZQgEAggaBdIgjCAIgnCUIgPApQgHARAGARQAPAiAEANQAGAegNAbIgkA+QgVAiAAAQQAAAOAHAvQADAqgQAIIgyAUQggAKgJAIQgMALgpAMQgrALgWgCQgeACgZgXQgZgYAMgSQAzhIANgHQATgJAAgpQAAgxgZhNQgPgxgDgPQgGgeAGgbQAFgZAVjgIAakPQAklfAGhfQAjm3gEgEIgIgEIgcAAQgjgIgggsQgMgPgtguQgOgOARgSQATgSA4hKIAzhGIgWgwIgbAGIgNAFQglACAAgZIAAgJIABgGIAAgyQABgqgGgTIgShJQgNg1gKgMQgNgRgLggQgLglACgaQABgXAIgOIAJgKIgSgeQgGgHADgMQAEgLAJgIQgBgGACgMIAFgXIAHgRQAIgQAAgRQAAgZAHg8QAJhIANg7QAahlANg4QAXhlAEgqQAAg/ACgZQAFgqAbgSQAjgZDkhQIBFgXQAkgOANgNIAJgJIAAgDIANgQQAEgOgEgcQgNhUAAgjQAAgBgPgGQgRgHgJgaQgbhSANgPQAIgKAHAEQAGACACAGQgGgVgCgTQgHgrAGgiQALhAAggxQAzhOBUgFQAggCAsAMQBUAZApBCQAXAtgEAzQgCAbgJAhIgEAQQgJAeAFAIQABABAbgFQAXgGgEAXQgGAigSAnQgSArgLgDQgKgDgIAUQgHAQgCATIgIA5QgDAiALAUIAAAAIAKANQAcAbA9AmQBDAqAiAIICQAmQBiAaADAvIAPCfQATCyAOBZQANBPAjB3QAeBjgCAIIgIAhQgFAWABATQABASgDAPQgIAjgDAPQgGAggvCCIg3CTIgBACQgJAZgRAZQgTAagPADQgOADAAAGIAKAlIAeCPQAWBrgIACQgLAChpAEIgLDWQgLDdABAmIgGCZQgHCpgFBOQgFBIgUCBQgTCGgBAOQgFA1gkD4QgFAggNAzQgIAiAEANQADANAiBBQAVBBgvAoIg6AHQhKgIhMhFg");
	this.shape_1.setTransform(71.5,213.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mnn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(2,1,1).p("ADB9lQgiglglgKQgqgLgtACQgxADgdASQgUANhAAnQg4ApgPAoQgJAYgHAmQgjAfgxAMQAvgIAigUQgGAbgMAQQgBACgBACQgVARgJAeQgFAUgDBBQAEguAQgjQADgHADgFQgBALABAPQABApANAZQAOAdAAAxQAAARAGAPQAFAPAHAAIAIAAIgHAcIgBACIg7AMQhDAQgiAVQhPAtAABZQAAASgXELQghF4AABSQAAA4gRFRQAAARgKAiQgIAegFAJQgGAJAdAAIgSAfQgDAIgCAfQgCAjACAUQACAdAVAOQALAVANAGQACABARgBQAMgBADANQADAMAHAfQAIAcALAJQASAQARAAIgKAxQgLA2gCAWQgDAdABAqQABAtAEASQADAQgMAcQgGAPgLAUQgEAJgLAxQgFAbgJAoQgDANgdBpQgcBsgFAoQgEAggVCVQgWCtgQDBIAGAkQAFApgFAOQgKAXgdBVQgFAKgdAzQgXAxAUAMQAfAUBygDQARAAAPgNQANgMAFgSQADgLgFgfQgEggADgTQAPheAUADQALACAigEIAigEQAdi1AahdQANguAnjWQApjjARhFQAKgpAwjRQAjidAPgqQAKgeAchAQAZg8ATg4IBCjDIAEA4QAGA+ALAbQAKAaANB/QAHBCAKBmQAKA/APCxQAQDDgFAUIgMEOQAAAZgFDiQgEDXAGAKQAEAJAOAYQALAYAAASIgDBpIAagDQABgUAEgWQAKgsAUgJIAGARQAGAUAAAMQAAAkAEAOQAJAlAfADQB1AOAfgTQArgcgrgfQg8grgEgtQgFghgCgOQgDgYAHgEQAHgEAGiWQAHi6ABgNQACgXANhcQALhNAAgpQgBiGAAhgQABi4AFgoQAHgyAMi2QAOi3AAg6IAGk9IAdgIQgIgCgLgTQgWgogPhVQgHgZgJgaQgQg0gGgIQgGgKARgEQARgFATAHQARAGALgBQAKgCAGAAIALAMQAHAHATgMQAUgOASg1QARhBAHgaQAhhZAXg8QAshzgHgTQgHgUhjisQhoiygLgUQgcgxgKgNQgZgggegFQAUgYAGgvQADgggPg6QgBgBAAgBQAHAIAGAKQAVAnADAvQAChkgwgkQgHgVgHgQQAcAHAYgMQgfAIgbgQQgIgPgag+QAcANAcgJQgjAFgbgbQgBgBgBgBQgEgJgEgKQgqhmgMgZQgVgogcgggAmGDrIAABRQgQAAAAgWQAAgsgDgNQgDgKACgFQADgGAFAFQAIAGAEAIg");
	this.shape.setTransform(67.7,195.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqaeNQgUgMAXgxIAig9QAdhVAKgXQAFgOgFgpIgGgkQAQjBAWitIAZi1QAFgoAchsIAgh2IAOhDQALgxAEgJQALgUAGgPQAMgcgDgQQgEgSgBgtQgBgqADgdQACgWALg2IAKgxQgRAAgSgQQgLgJgIgcIgKgrQgDgNgMABQgRABgCgBQgNgGgLgVQgVgOgCgdQgCgUACgjQACgfADgIIASgfQgdAAAGgJQAFgJAIgeQAKgiAAgRQARlRAAg4QAAhSAhl4QAXkLAAgSQAAhZBPgtQAigVBDgQIA7gMIABgCIAHgcIgIAAQgHAAgFgPQgGgPAAgRQAAgxgOgdQgNgZgBgpQgBgPABgLIgGAMQgQAjgEAuQADhBAFgUQAJgeAVgRIACgEQAMgQAGgbQgiAUgvAIQAxgMAjgfQAHgmAJgYQAPgoA4gpIBUg0QAdgSAxgDQAtgCAqALQAlAKAiAlQAcAgAVAoQAMAZAqBmIAIATIACACQAbAbAjgFQgcAJgcgNQAaA+AIAPQAbAQAfgIQgYAMgcgHQAHAQAHAVQAwAkgCBkQgDgvgVgnQgGgKgHgIIABACQAPA6gDAgQgGAvgUAYQAeAFAZAgQAKANAcAxIBzDGQBjCsAHAUQAHATgsBzIg4CVIgYBbQgSA1gUAOQgTAMgHgHIgLgMIgQACQgLABgRgGQgTgHgRAFQgRAEAGAKQAGAIAQA0IAQAzQAPBVAWAoQALATAIACIgdAIIgGE9QAAA6gOC3QgMC2gHAyQgFAogBC4IABDmQAAApgLBNQgNBcgCAXIgIDHQgGCWgHAEQgHAEADAYIAHAvQAEAtA8ArQArAfgrAcQgfATh1gOQgfgDgJglQgEgOAAgkQAAgMgGgUIgGgRQgUAJgKAsQgEAWgBAUIgaADIADhpQAAgSgLgYIgSghQgGgKAEjXIAFj7IAMkOQAFgUgQjDQgPixgKg/IgRioQgNh/gKgaQgLgbgGg+IgEg4IhCDDQgTA4gZA8QgcBAgKAeQgPAqgjCdIg6D6QgRBFgpDjQgnDWgNAuQgaBdgdC1IgiAEQgiAEgLgCQgUgDgPBeQgDATAEAgQAFAfgDALQgFASgNAMQgPANgRAAIgcABQhaAAgbgSgAmaDeQgCAFADAKQADANAAAsQAAAWAQAAIAAhRQgEgIgIgGQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBABg");
	this.shape_1.setTransform(67.7,195.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mnn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(2,1,1).p("AHU/lQAAAEgEADQgBACgDABQgDABgFAAQAGAEANAFQADADAAAEQAAAEgCABQgBACgIADQAFAJAAACQAAACgIAIQARAbAJAZQAGASACAIQAFAOAAALQAAAGgEAVQgEAUAAAFQAFAQAAAGQAAAHgHAOQAAABgBACQgCAMgDANQAAABgBADIAAAPQgCANgGADQgTBDgPAdQhZBBgDBBQgDBBAAADQByBfBvBhQABABAAADQAFCbgKCkQAAACAAADQAAACAAADQAEBPgIBEQAAACgBADQgEAggUARQApBWAsBUQABACACAAQAHAsgCA1QAAADAAACQAAACAAADQADASgIAHQAAACAAADQACBUhVgBQgegIAAAWQAAAaADAPQAyEIgDEgQgDAAgBACQghAmgggxQgfgfgDBBQgMERhTDUQgfBOgLBnQgQCQgYCNQAAAqAAAqQAAACAAACQAABHAABIQAAACAAACQAAADAAACQAFBBgUAnQAUA9AgA0QAeAyA+AQQBTAVArA3QgMAJgOADQiUAhiGglQghgIgggFQhegMhMgWQgQgfABg2QABgUgBgHQgLhUABhoQBBl2AcmSQAGhHAGg9QAIg/AIg7QAJghABgtQACg6gQAIQAAADAAADQAAACAAACQgmCCgaCIQgFAYgGAWQgqCQglCZQgWBagGBgQgNDmgODiQgGBlgxA+QgmAxgLA6QgCAAgCABQgdAYgkATQgGAIgFAOQgMAmgkAUQhTAxhYgoQgFgPACgOQAKhcAvg9QgjgwAKhLQAMhcALhdQAdjvAyjjQAUhZAdhWQAihngDh9QADAAAAgBQAKgjAVgXQgCifAaiDQAciNgWiPQAAADAAACQgIBOgbA7QgCAAgCAAQiMgZhWhOQAGhqAfhoQANgqgQANQgFAAgBACIgFAGQgThNgRhFQgHgdgLgaQhdjGALkxQB7k8CTkkQAPgeAdgPQBLgQBbgGQBCgGBNgDQBJgCArgkQAHgaADgXQgKgDgGgIQgGgIgBgIQgDgMgFgGQgEgEAAgDIAFgKQAAgDgLgqQgNgqAAgEQACgGACgFQgEgHgDgKQgEgMAAgNQAAgIAFgFQAFgEgBgNIAAgbQADgiAOgWQAFgJAFgGQABgEAAgDQAAgMADgEQAIgLALgeQACgHADgGQAGgQAEgEQAHgGAZgJQAagJAIgGQARgOAHgBQAJgBA/ABQAHACArAKQAkAIAJAFQACABAMAJQAFAFALACQAMADAcAEQAIABAAAFg");
	this.shape.setTransform(63.1,207.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgIOAgLQgFgPACgOQAKhcAvg9QgjgwAKhLIAXi5QAdjvAyjjQAUhZAdhWQAihngDh9IADgBQAKgjAVgXQgCifAaiDQAciNgWiPIAAAFQgIBOgbA7IgEAAQiMgZhWhOQAGhqAfhoQANgqgQANQgFAAgBACIgFAGIgkiSQgHgdgLgaQhdjGALkxQB7k8CTkkQAPgeAdgPQBLgQBbgGQBCgGBNgDQBJgCArgkQAHgaADgXQgKgDgGgIQgGgIgBgIQgDgMgFgGQgEgEAAgDIAFgKIgLgtQgNgqAAgEIAEgLQgEgHgDgKQgEgMAAgNQAAgIAFgFQAFgEgBgNIAAgbQADgiAOgWIAKgPIABgHQAAgMADgEQAIgLALgeIAFgNQAGgQAEgEQAHgGAZgJQAagJAIgGQARgOAHgBQAJgBA/ABIAyAMQAkAIAJAFIAOAKQAFAFALACQAMADAcAEQAIABAAAFQAAAEgEADIgEADQgDABgFAAQAGAEANAFQADADAAAEQAAAEgCABIgJAFQAFAJAAACQAAACgIAIQARAbAJAZIAIAaQAFAOAAALQAAAGgEAVQgEAUAAAFQAFAQAAAGQAAAHgHAOIgBADIgFAZIgBAEIAAAPQgCANgGADQgTBDgPAdQhZBBgDBBIgDBEQByBfBvBhQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAFCbgKCkIAAAFIAAAFQAEBPgIBEIgBAFQgEAggUARQApBWAsBUQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAHAsgCA1IAAAFIAAAFQADASgIAHIAAAFQACBUhVgBQgegIAAAWQAAAaADAPQAyEIgDEgQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQghAmgggxQgfgfgDBBQgMERhTDUQgfBOgLBnQgQCQgYCNIAABUIAAAEIAACPIAAAEIAAAFQAFBBgUAnQAUA9AgA0QAeAyA+AQQBTAVArA3QgMAJgOADQiUAhiGglQghgIgggFQhegMhMgWQgQgfABg2IAAgbQgLhUABhoQBBl2AcmSQAGhHAGg9QAIg/AIg7QAJghABgtQACg6gQAIIAAAGIAAAEQgmCCgaCIQgFAYgGAWQgqCQglCZQgWBagGBgIgbHIQgGBlgxA+QgmAxgLA6QAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgdAYgkATQgGAIgFAOQgMAmgkAUQguAbgvAAQgmAAgogSg");
	this.shape_1.setTransform(63.1,207.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.jhkf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(79,163,255,0.902)").s().p("AiUCUQg9g8AAhYQAAhWA9g+QA+g9BWAAQBYAAA8A9QA+A+AABWQAABYg+A8Qg8A+hYAAQhWAAg+g+g");
	this.shape.setTransform(21,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.jhkf, new cjs.Rectangle(0,0,42,42), null);


(lib.hfgdha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AECiiQABAEACAEQAAAAABABQACADACAEIivFdIgihZIgTgyIgUg1IgCgDAFXhoQgCAAgDAAQgBgBgBAAQAAAAgBAAQgBAAgBAAQgCgBgBAAQglgIgVgZQgDgDgDgEAlWiOQBRAEAcgzQAAgBABgBQACgEACgFQABgCAFAAAjpi9Ig3FHIB+hRQAJgKALgDIAnga");
	this.shape.setTransform(304.8,204.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303030").s().p("AAAH0QgFn0AAnzQAQHigHH7IAAAKg");
	this.shape_1.setTransform(284.1,690.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A8A8A").s().p("AgFETIAAovIAJAAIAAAKQAHEkgQELIAAgKg");
	this.shape_2.setTransform(242.1,714.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6F6F6F").s().p("AgFDrIAAnfIAJAAIAAAKQAHD7gQDkIAAgKg");
	this.shape_3.setTransform(258.1,564.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#747474").s().p("AAACVQgEiVAAiVIAJAAIAAEhIAAAKIgFgBg");
	this.shape_4.setTransform(182,564.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414141").s().p("AgEDmIAAgKIAAnBIAJAAIAAHBIAAAKIgJAAg");
	this.shape_5.setTransform(182,526.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBCBC").s().p("AgECWIAAgKIAAkhIAJAAIAAEhIAAAKIgJAAg");
	this.shape_6.setTransform(182,488.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A71A4").s().p("AgECMIAAkhQAQCJgMCiIgEAAIAAgKg");
	this.shape_7.setTransform(303.1,340.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B4A6C").s().p("AAACWQgFiWAAiVQAQCEgHCdIAAAKg");
	this.shape_8.setTransform(302.2,291.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#225C86").s().p("AAACWQgEiWAAiVIAJAAIAAEhIAAAKIgFAAg");
	this.shape_9.setTransform(223,367.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000102").s().p("Ah9NTQgziIghiYQBjoJBnoGQAgikgZhyQAAgCgHgEQgVgMgLgYQAPgbAPgNQAJgKAKgDQAagKAcAfQAuA1Ahg3QAKgSAbACIALARQAQAdADAVQAGA3hggCIgKAAQAREHgHEfIAAAKQAACWAFCVIAFAAIAAC0IAAAKIAAEiIAAAKQAAAFgCACQh7Bxh8BuQgFAAgBgCgADSsLIgTgyg");
	this.shape_10.setTransform(289.5,293.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858585").s().p("AAAC+QgEi+AAi9IAJAAIAAFxIAAAKg");
	this.shape_11.setTransform(277,141);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D4E71").s().p("AAACaQgFiaAAiaQAQCJgHCiIAAAKIgEgBg");
	this.shape_12.setTransform(346.2,361.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F557B").s().p("AAACbQgFibAAiaQAQCJgHCiIAAAKg");
	this.shape_13.setTransform(345.2,325.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AFORqQlyhhm6geQgtgDglgRQhJghAPiCIAAgKIAAkiIAAgKIAAhaQCPr0EOpyQAfhJAahJQBRADAcgzIACgCIAEgJQAAgCAFABQAmCNBeBWQADACAFAAQA0gCAwgNQBegbBMhCQApgjAdgvIAEAIIAAABIAFAHIAFAIQAVAYAlAJIADAAIACABIACAAIABAAQAtI3APJIIAAAKQAACbAFCbIAFAAIAAAoIAAAKQAACbAFCaIAFABIAAAKQgBDOALDCQibgGiFgigAACtlQAKAZAWALQAIAFAAACQAZBxghClQhmIGhkIIQAhCZA0CHQAAACAFAAQB9huB6hxQADgCAAgFIAFAAQAMijgRiJIAAgKIAAi0IAAgKQAHidgRiEIAAgKQAHkfgRkHIAKAAQBfACgGg3IAiBZICwleIiwFeIgihZQgCgVgRgcIgUg1IAUA1IgKgRQgbgCgLARQggA3gvg0QgbgggbAKIAogaIgoAaQgKAEgKAJIh8BRIA2lIIg2FIIB8hRQgPANgOAbgAD7tUgAAfuNIAAAAgAAzuagAIZwuIAFABIATAAIALAAIAKAAQAAAFgBABIgNABQgPAAgQgIg");
	this.shape_14.setTransform(285.4,300.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010101").s().p("AiYI3QhehWgmiNIAAgKQgNh/glhnIAAgKIAAlxIAAgKIAAgUQAehQAihOQABgCAFAAQCJiSDvBEQBaAaA/A+QBeCxgfEbQgPCDhNA7QhaBFAxB4QgdAugpAjQhLBChdAbIgCgEIACAEQgwANg1ADQgFAAgDgDgAgrIqg");
	this.shape_15.setTransform(311,150);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("EgSeBCWQBfjqCnikQArgqgZg8QiJg9BJiuQAbhCADhYQAitohRtZQgGg7AHhSIAAgKIAAkiIAAgKIAAnCIAAgKIAAkiQAAgFABgEQAih4AFiXQAAgFACgEQAcg9iMAUQhXgmAKiNQAYlbBxj8QgBg3gXghQhBhdgCiVQgCjPBMiSQCUkdgBmIQijiZi7h/QgVgOgQgSQini4iIjWQl/A/k8CEQiDA3hvg8QgFAAAAgBQgeiUh9gzQgjg7gFhRQgNkFgbjvQgFAAgCgCQhUhgAVjKQDuiTE5hHQAEgCAFAAQAghTBGgsQADgCAFAAQAgjbDRgoIAKgBQB/A5BVBkQADADAFAAQC0AJC1gdQAcgFAVAPQCDERBKFXQAiCfAxCpQAiB2gnCEQgDAKgOAFQgXAIgNAMQhZAgBMA9QADACAAAFQCVBWB0B3QAUAUgFAtQAgBnAihsQAKghAigWQDwAKChCKQA2AvBVAPQgaBKgfBJQkOJyiPL1IAABaIAAAKIgKAAQAACWAFCVIAFABQgQCCBJAhQAmARAtADQG5AeFzBhQCEAiCbAFQgLjBABjOIAAgKIAAgKQAIijgSiJIAAgKIAAgoIAAgKQAIijgSiJIAAgKQgOpJgto3IAFAAQAWAMAVgFQABAAAAgFQAFAAADgCQCNiBC/hPQAFAAAEACQBVAsA4BKQA0AWAqgmQAigfAigdQHrmWGjncQBph4CGhcIAFAAQACjgAXjNQAAgFABgFQAghIB1AMQAFAAADACQB3BVBJCEIgBAKQgcCJgfCFQAAAFgCACQhVAvg1BMIgFABQgLCLgECMQgFAAgDADQjbDTitEAQAAAFgDABQgzAehCAOIgBAKQghChh/BFQAAAFgCAEQgbAqgLA7QgFAAgBACQj4E/l4C9QA0E5A9EqQAHAiALAfQB2FKBfFjQBhFmBFF7QkKgTkcAFQjrAEj/AoQgpCuACDOIABB4QADETgcESQgXDhgbDjQgHA7gRA3QhCDSAvD0QBMGUg9GsQgJA7gOA4QgyDDBADGQAlAsArAhQCEBmASDTQgPALgJACQj9A7i3hSQAAgFgCgDQg2hLhUgvIgyABQgZAAgPgNQhEg2AIiGQgFAAgCgCQhfhzAhjyQAog3AYhKQAAgBAFAAIAAiWIAAgKIAAgKQAHn8gRniQgFiRgihzQgNgqgXgmQiAjJAalcQAMikhUgHIAAAoIAAAKIgKAAIAAHgIAAAKQhOCJgKDVQgJDGg1CiIAAD6IAAAKIgKAAIAAIwIAAAKQAABaARBWQAmDBAFDwQgFAAgBADQg6BigQCLQjED6lcBTQgzAMgpAAQheAAgohBgEAJCglFIgBgDIAGADIgFAAgEAJCglFIAAAAg");
	this.shape_16.setTransform(280.8,431.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hfgdha, new cjs.Rectangle(0,0,561.6,862.2), null);


(lib.rocinja2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272627").s().p("AgDEnIAAgBIAVgWIAxAwICviyIgvguIAWgWIAAAAIAAgBIgwgtIAWgXIgwgtIAWgWIAAgBIAwAvIgWAVIAAAAIAAAAIAwAuIgWAXIBHBEIgWAXIgBgBIjEDJgAhgD4IAAAAIAWgWIBHBFIAAAAIgWAWgAkcBuIAXgWIAAgBIAAAAIgYgWIAWgXIAYAYIgWAVIClChIAAAAIgWAWgAhgD4gAjxAUIgWAWIgYgWIAWgWIAAgBIAWgVIgYgYIA2g2IAAAAIAMgMIAAAAIBfBcIgWAWIhIhFIgrAtIBfBaIgWAWgAjTlUIAWgXIDVDQIAWgWIgXgYIArgsIAAAAIAWgWIBHBFIgVAWIgBAAIgvguIgsAtIAYAWIgWAXIBIBFIgWAWgAClg/IgvguIAWgVIgYgYIAWgWIAXAXIgVAXIAvAtIgWAWgAieieIgrAsIAAAAIgYgXIAsgsIhghdIAWgWIDXDQIgWAWgAkWk/IArgtIAYAYIgsAsgAjTlUg");
	this.shape.setTransform(28.8,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdEbIgWAWIABABIgBAAIhGhFIgWAWIilihIAWgVIgYgYIAAAAIAWgWIBHBEIAWgWIhfhaIArgtIBIBEIAWgVIhfhcIAAAAIAsgsIBfBcIAWgWIjXjQIAsgsIE1ErIAWgWIhIhFIAWgXIgYgWIAsgtIAvAuIABAAIAAAAIgWAWIAYAYIgWAVIAvAuIAAABIgWAWIAwAtIAAAAIAAAAIAAAAIgWAXIAwAtIAAABIgWAWIAvAuIivCygAhVEDIAAAAIAAAAgAj6BiIAAAAIAAABg");
	this.shape_1.setTransform(27.7,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.6,72.9);


(lib.border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#95D158","#407C03"],[0.008,1],-2.7,-35.6,0,-2.7,-35.6,64.5).s().p("AnbFkQhkABAAhlIAAoAQAAhjBkgBIO3AAQBkABAABjIAAIAQAABlhkgBgAoijtIAAHbQAABdBcAAIOMAAQBdAAAAhdIAAnbQAAhdhdAAIuMAAQhcAAAABdg");
	this.shape.setTransform(57.6,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(0,0,115.2,71.3), null);


(lib.bg_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(149,209,88,0)","rgba(233,251,157,0.553)"],[0.008,1],4.5,-19.2,-0.4,10.9).s().p("AAUBqQlXiwj3CCIAAi3QAAhkBkAAIOtAAQBkAAAABkIAAE4QhEAjhYAAQiiAAjph2g");
	this.shape.setTransform(57.1,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_4, new cjs.Rectangle(0,0,114.2,44.8), null);


(lib.bg_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(253,253,28,0.431)","rgba(24,73,3,0)"],[0.008,1],-2.5,24.3,0,-2.5,24.3,96.8).s().p("AnWDzQhkAAAAhkIAAlIQD3iEFXCxQFoC2C/hjIAADIQAABkhkAAg");
	this.shape.setTransform(57.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_3, new cjs.Rectangle(0,0,114.2,48.5), null);


(lib.bg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(64,139,31,0)","rgba(24,73,3,0.424)"],[0.008,1],-1.8,21.9,0,-1.8,21.9,74.3).s().p("AnWDzQhkAAAAhkIAAlIQD3iEFXCxQFoC2C/hjIAADIQAABkhkAAg");
	this.shape.setTransform(57.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_2, new cjs.Rectangle(0,0,114.2,48.5), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#95D158","#407C03"],[0.008,1],-2.2,-35.6,0,-2.2,-35.6,64.5).s().p("AnWFkQhkABAAhlIAAoAQAAhjBkgBIOtAAQBkABAABjIAAIAQAABlhkgBg");
	this.shape.setTransform(57.1,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,114.2,71.3), null);


(lib.backhiht = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAbIgEg1IAVAAIgEA1g");
	this.shape.setTransform(28.2,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AgUA/QgJgHgFgNQgFgMAAgRQAAgWAGgPQAHgQAKgKQAGgHAJgFQAIgFAJgBIAIgCIAFAAIAAAWIgFABIgGABQgJACgGAFQgFAFgEAIQgDAHgDAJIACAAQADgFAFgDQAEgDAIAAQAOAAAHAMQAJAKAAAUQAAAMgEALQgEALgJAHQgIAHgOAAQgLAAgKgHgAgFABQgDACgCAFIgBAEIgBAIQABAOAEAIQADAIAFAAQAHAAACgIQADgIAAgNIgCgLQgBgFgCgDQgEgCgDAAQgDAAgDABg");
	this.shape_1.setTransform(21.9,44.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAbIgEg1IAVAAIgEA1g");
	this.shape_2.setTransform(26.8,106.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("AgZBEQgGgCgFgDIAEgVIAJADQAGACAFgBQALAAAEgFQAHgHgBgKQAAgKgEgFQgEgGgGgCQgGgBgIAAIgGAAIgEAAIAIhEIA3AAIAAAYIgjAAIgDAZIACAAIACAAIAHABIAJACQAFADAEAEQAGAFADAHQACAHAAALQAAAOgFAKQgGALgKAHQgLAGgOAAQgHAAgIgBg");
	this.shape_3.setTransform(20.3,111.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAbIgEg1IAVAAIgEA1g");
	this.shape_4.setTransform(28.2,172.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.8)").s().p("AAEBEIAAggIgtAAIAAgTIArhUIAbAAIAABRIANAAIAAAWIgNAAIAAAggAAAgZIgDAKIgPAcIAAABIAWAAIAAgbIABgMIABgLIgBAAIgFALg");
	this.shape_5.setTransform(21.9,177.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAbIgEg1IAVAAIgEA1g");
	this.shape_6.setTransform(28.2,239.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.8)").s().p("AgYBEIgLgEIAEgWQAEADAFABIALABQAKAAAEgFQAGgFAAgJQAAgIgEgFQgDgEgFgDQgGgCgHAAIgEAAIAAgTIADAAIALgCQAFgBADgEQADgEAAgHQAAgHgEgEQgDgEgIAAIgJABIgIAEIgEgVQAFgDAHgCQAIgCAJAAQALAAAHAFQAIAEAEAIQAEAHAAAJQAAAKgFAIQgFAIgJAFIAAAAQAKADAHAIQAGAJAAAOQAAAKgFAKQgFAJgKAGQgKAGgOAAQgJAAgHgCg");
	this.shape_7.setTransform(21.5,244.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAbIgEg1IAVAAIgEA1g");
	this.shape_8.setTransform(28.2,306.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.8)").s().p("AgkBFIAAgSIANgSIAQgWQAHgKAEgIQAEgKABgJQgBgJgEgFQgEgFgIAAQgHAAgEACIgJAFIgGgWQAGgDAIgCQAHgDAKAAQAOAAAIAGQAJAFAEAKQADAIAAALQAAAMgFALQgEAKgHALIgQATIgGAKIAAAAIAoAAIAAAYg");
	this.shape_9.setTransform(21.7,311.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAbIgEg1IAVAAIgEA1g");
	this.shape_10.setTransform(28.2,373.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.8)").s().p("AAABEIAAhtIAAAAIgWAMIgFgWIAfgQIAYAAIAACHg");
	this.shape_11.setTransform(21.1,378.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(2,1,1).p("Eg0jgaFICMAAEg0jgPpICMAAEg0jgFNICMAAEg0jAFOICMAAEg0jAPqICMAAEg0jAaGICMAAEgv3AaGMBkbAAAEgv3APqMBkbAAAEgv3AFOMBkbAAAEgv3gFNMBkbAAAEgv3gPpMBkbAAAEgv3gaFMBkbAAA");
	this.shape_12.setTransform(336.4,217.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.8)").s().p("Eg0jAsDMAAAhYFMBpHAAAMAAABYFg");
	this.shape_13.setTransform(336.4,167.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.backhiht, new cjs.Rectangle(-1,-114.8,674.8,563.8), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASA/IlKAAIAAh3IFKAAIgjiFIFKC9IlQC+g");
	this.shape.setTransform(31.3,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,62.6,38), null);


(lib.nn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIB/IAAg8IhWAAIAAgjIBSieIAyAAIAACXIAZAAIAAAqIgZAAIAAA8gAABgvIgIATIgcA1IAAAAIArAAIAAgzIABgUIACgVIgCAAIgIAUg");
	this.shape.setTransform(19,27.2);

	this.instance = new lib.jhkf();
	this.instance.parent = this;
	this.instance.setTransform(21,26.9,1,1,0,0,0,21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nn4, new cjs.Rectangle(0,0,42,52.1), null);


(lib.nn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtB/QgNgDgIgFIAHgoQAIAEAKADQAKADAKAAQATgBAIgKQAKgKAAgQQAAgOgHgKQgGgIgKgEQgKgEgNgBIgIAAIAAgkIAGAAQAJAAAKgDQAJgEAHgGQAGgIAAgMQAAgOgIgIQgGgHgOgBQgJAAgIAEQgIADgIAEIgGgnQAJgFANgEQAOgEARAAQAUAAAQAJQAOAIAIAOQAHAOAAAQQAAATgJAPQgKAPgRAJIAAAAQATAHAMAOQAMARABAZQgBAUgJARQgKASgTALQgTALgbAAQgPAAgNgDg");
	this.shape.setTransform(21.4,27.2);

	this.instance = new lib.jhkf();
	this.instance.parent = this;
	this.instance.setTransform(21,27.1,1,1,0,0,0,21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nn3, new cjs.Rectangle(0,0,42,52.1), null);


(lib.nn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFCBIAAgjIAaghIAegnQANgTAIgRQAHgSABgSQgBgPgHgKQgIgKgQAAQgMAAgJAEQgKAEgHAFIgJgoQAJgGAPgEQAPgFARgBQAbABARAKQAQALAGAQQAHASAAASQAAAYgJAUQgIAVgNASQgOATgPARIgOASIAAABIBNAAIAAAtg");
	this.shape.setTransform(20.6,27);

	this.instance = new lib.jhkf();
	this.instance.parent = this;
	this.instance.setTransform(21,27.1,1,1,0,0,0,21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nn2, new cjs.Rectangle(0,0,42,52.1), null);


(lib.nn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABB/IAAjNIgBAAIgqAXIgJgpIA6geIAtAAIAAD9g");
	this.shape.setTransform(18.5,27.2);

	this.instance = new lib.jhkf();
	this.instance.parent = this;
	this.instance.setTransform(21,27.1,1,1,0,0,0,21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nn1, new cjs.Rectangle(0,0,42,52.1), null);


(lib.rocinja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.instance = new lib.rocinja2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocinja, new cjs.Rectangle(0,0,57.6,72.9), null);


(lib.klikklikcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_102 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(102).call(this.frame_102).wait(1));

	// Layer 1
	this.instance = new lib.rocinja();
	this.instance.parent = this;
	this.instance.setTransform(221.7,210.2,1.175,1.175);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:185.2,y:153.1,alpha:1},6).to({x:157.8,y:110.3},6).to({x:139.5,y:81.8},6).to({x:130.4,y:67.5},6).to({x:129.6,y:66.2},1).wait(1).to({x:129.2,y:65.7},0).wait(12).to({x:128.7,y:69.9},0).wait(2).to({x:129.2,y:65.7},0).wait(4).to({x:-68.8,y:-69.3,alpha:0},14).to({_off:true},1).wait(11).to({_off:false,x:1370,y:463.6},0).to({x:1322.4,y:429,alpha:1},9).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0468FD").s().p("AhABBQgagbgBgmQABglAagaQAcgbAkAAQAmAAAaAbQAbAaAAAlQAAAmgbAbQgaAbgmAAQgkAAgcgbg");
	this.shape.setTransform(137.5,78.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0468FD").s().p("AhKBKQgegeAAgsQAAgrAegeQAggfAqgBQArABAgAfQAfAeAAArQAAAsgfAeQggAfgrAAQgqAAgggfg");
	this.shape_1.setTransform(137.5,78.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0468FD").s().p("AhTBUQgjgiAAgyQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAygjAiQgjAjgxAAQgwAAgjgjg");
	this.shape_2.setTransform(137.5,78.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0468FD").s().p("AhdBeQgngnAAg3QAAg2AngnQAognA1AAQA2AAAoAnQAnAnAAA2QAAA3gnAnQgoAng2AAQg1AAgogng");
	this.shape_3.setTransform(137.5,78.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0468FD").s().p("AhnBnQgrgqAAg9QAAg8ArgrQAsgrA7AAQA8AAAsArQArArAAA8QAAA9grAqQgsAsg8AAQg7AAgsgsg");
	this.shape_4.setTransform(137.5,78.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0468FD").s().p("AhxBxQgvguAAhDQAAhCAvguQAwgwBBAAQBCAAAwAwQAvAuAABCQAABDgvAuQgwAwhCAAQhBAAgwgwg");
	this.shape_5.setTransform(137.5,78.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0468FD").s().p("Ah7B7QgzgyABhJQgBhIAzgyQA0g0BHAAQBIAAAzA0QA0AyAABIQAABJg0AyQgzA0hIgBQhHABg0g0g");
	this.shape_6.setTransform(137.5,78.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0468FD").s().p("AiFCFQg3g2AAhPQAAhNA3g3QA5g3BMAAQBNAAA4A3QA4A3gBBNQABBPg4A2Qg4A4hNAAQhMAAg5g4g");
	this.shape_7.setTransform(137.5,78.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(4,104,253,0.875)").s().p("AiLCLQg5g5AAhSQAAhQA5g6QA8g6BPAAQBRAAA6A6QA6A6AABQQAABSg6A5Qg6A6hRAAQhPAAg8g6g");
	this.shape_8.setTransform(137.5,78.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(4,104,253,0.749)").s().p("AiRCRQg7g7AAhWQAAhUA7g7QA+g9BTAAQBUAAA9A9QA8A7AABUQAABWg8A7Qg9A8hUAAQhTAAg+g8g");
	this.shape_9.setTransform(137.5,78.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(4,104,253,0.624)").s().p("AiXCXQg+g+ABhZQgBhXA+g+QBAhABXAAQBXAABABAQA/A+gBBXQABBZg/A+QhAA/hXAAQhXAAhAg/g");
	this.shape_10.setTransform(137.5,78.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(4,104,253,0.502)").s().p("AicCcQhBhAAAhcQAAhbBBhBQBChBBaAAQBbAABCBBQBBBBAABbQAABchBBAQhCBChbAAQhaAAhChCg");
	this.shape_11.setTransform(137.5,78.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(4,104,253,0.376)").s().p("AiiCiQhDhCAAhgQAAhfBDhCQBFhEBdAAQBfAABEBEQBDBCAABfQAABghDBCQhEBEhfAAQhdAAhFhEg");
	this.shape_12.setTransform(137.5,78.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(4,104,253,0.251)").s().p("AipCoQhFhFABhjQgBhiBFhFQBIhHBhAAQBiAABGBHQBGBFABBiQgBBjhGBFQhGBHhiAAQhhAAhIhHg");
	this.shape_13.setTransform(137.5,78.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(4,104,253,0.125)").s().p("AiuCuQhIhIAAhmQAAhlBIhIQBKhJBkAAQBlAABJBJQBJBIAABlQAABmhJBIQhJBJhlAAQhkAAhKhJg");
	this.shape_14.setTransform(137.5,78.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(4,104,253,0)").s().p("Ai0C0QhKhKAAhqQAAhpBKhKQBMhMBoABQBpgBBLBMQBLBKAABpQAABqhLBKQhLBLhpABQhogBhMhLg");
	this.shape_15.setTransform(137.5,78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},61).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(26));

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0468FD").s().p("AhYBYQgkglAAgzQAAgzAkgkQAlglAzAAQA0AAAkAlQAlAkAAAzQAAAzglAlQgkAlg0AAQgzAAglglgAhEhFQgdAdAAAoQAAApAdAcQAcAdAoAAQApAAAcgdQAdgcAAgpQAAgogdgdQgcgcgpAAQgoAAgcAcg");
	this.shape_16.setTransform(137.5,78.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0468FD").s().p("AhyByQgwgvAAhDQAAhCAwgwQAwgwBCAAQBDAAAvAwQAxAwAABCQAABDgxAvQgvAxhDAAQhCAAgwgxgAhbhbQgmAmAAA1QAAA1AmAnQAnAmA0AAQA2AAAmgmQAmgnAAg1QAAg1gmgmQgmgmg2AAQg0AAgnAmg");
	this.shape_17.setTransform(137.5,78.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0468FD").s().p("AiNCNQg6g6gBhTQABhSA6g7QA7g7BSAAQBTAAA6A7QA7A7ABBSQgBBTg7A6Qg6A8hTgBQhSABg7g8gAhxhyQgwAwAABCQAABDAwAvQAvAwBCAAQBDAAAvgwQAwgvAAhDQAAhCgwgwQgvgvhDAAQhCAAgvAvg");
	this.shape_18.setTransform(137.5,78.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0468FD").s().p("AinCoQhHhFABhjQgBhiBHhGQBFhFBigBQBiABBGBFQBHBGAABiQAABjhHBFQhGBGhiAAQhiAAhFhGgAiIiIQg4A5AABPQAABQA4A5QA5A4BPAAQBQAAA5g4QA4g5ABhQQgBhPg4g5Qg5g4hQgBQhPABg5A4g");
	this.shape_19.setTransform(137.5,78.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0468FD").s().p("AjCDDQhRhRAAhyQAAhxBRhRQBRhRBxAAQByAABRBRQBRBRAABxQAAByhRBRQhRBRhyAAQhxAAhRhRgAieifQhDBDAABcQAABdBDBCQBCBDBcAAQBeAABBhDQBChCAAhdQAAhchChDQhBhBheAAQhcAAhCBBg");
	this.shape_20.setTransform(137.5,78.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0468FD").s().p("AjdDdQhchbAAiCQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBbQhcBdiCAAQiBAAhchdgAi1i1QhLBMAABpQAABrBLBLQBLBLBqAAQBqAABMhLQBMhLAAhrQAAhphMhMQhMhMhqAAQhqAAhLBMg");
	this.shape_21.setTransform(137.5,78.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0468FD").s().p("Aj4D4QhmhmgBiSQABiRBmhnQBohmCQAAQCSAABnBmQBnBngBCRQABCShnBmQhnBoiSAAQiQAAhohogAjLjMQhWBVAAB3QAAB4BWBUQBUBWB3AAQB4AABUhWQBVhUAAh4QAAh3hVhVQhUhUh4AAQh3AAhUBUg");
	this.shape_22.setTransform(137.5,78.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0468FD").s().p("AkSETQhzhyAAihQAAigBzhzQByhxCggBQChABByBxQBzBzAACgQAAChhzByQhyByihAAQigAAhyhygAjijiQheBeAACEQAACFBeBeQBfBeCDAAQCFAABeheQBeheAAiFQAAiEheheQheheiFAAQiDAAhfBeg");
	this.shape_23.setTransform(137.5,78.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0468FD").s().p("AktEuQh9h9AAixQAAiwB9h+QB9h8CwAAQCxAAB9B8QB9B+AACwQAACxh9B9Qh9B9ixAAQiwAAh9h9gAj4j5QhoBoAACRQAACTBoBmQBnBoCRAAQCSAABnhoQBohmAAiTQAAiRhohoQhnhniSAAQiRAAhnBng");
	this.shape_24.setTransform(137.5,78.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0468FD").s().p("AlIFIQiIiIAAjAQAAi/CIiJQCJiIC/AAQDBAACICIQCICJAAC/QAADAiICIQiICJjBAAQi/AAiJiJgAkPkPQhxBxAACeQAACgBxBwQBxBxCeAAQCgAABwhxQBxhwAAigQAAiehxhxQhwhxigAAQieAAhxBxg");
	this.shape_25.setTransform(137.5,78.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(4,104,253,0.89)").s().p("AlhFhQiSiSAAjPQAAjOCSiTQCTiTDOAAQDPAACTCTQCSCTABDOQgBDPiSCSQiTCTjPAAQjOAAiTiTgAkkkkQh6B6AACqQAACsB6B5QB6B6CqAAQCrAAB6h6QB5h5AAisQAAiqh5h6Qh6h5irAAQiqAAh6B5g");
	this.shape_26.setTransform(137.5,78.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(4,104,253,0.776)").s().p("Al6F7QididAAjeQAAjdCdidQCdidDdAAQDeAACdCdQCdCdAADdQAADeidCdQidCdjeAAQjdAAididgAk5k4QiCCCAAC2QAAC4CCCCQCDCCC2AAQC4AACBiCQCDiCAAi4QAAi2iDiCQiBiDi4AAQi2AAiDCDg");
	this.shape_27.setTransform(137.5,78.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(4,104,253,0.667)").s().p("AmUGUQiminAAjtQAAjrCmioQCpioDrAAQDsAACoCoQCnCoABDrQgBDtinCnQioCojsgBQjrABipiogAlOlNQiKCLAADCQAADECKCLQCLCKDDAAQDEAACKiKQCMiLAAjEQAAjCiMiLQiKiLjEAAQjDAAiLCLg");
	this.shape_28.setTransform(137.5,78.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(4,104,253,0.557)").s().p("AmsGtQiyixAAj8QAAj6CyizQCyixD6AAQD7AACyCxQCyCzAAD6QAAD8iyCxQiyCyj7AAQj6AAiyiygAliliQiUCUAADOQAADRCUCSQCTCUDPAAQDQAACUiUQCTiSAAjRQAAjOiTiUQiUiTjQAAQjPAAiTCTg");
	this.shape_29.setTransform(137.5,78.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(4,104,253,0.443)").s().p("AnFHGQi9i8AAkKQAAkJC9i9QC8i8EJAAQEKAAC9C8QC8C9AAEJQAAEKi8C8Qi9C9kKAAQkJAAi8i9gAl3l3QicCdAADaQAADdCcCbQCdCcDaAAQDcAACcicQCcibAAjdQAAjaicidQicicjcAAQjaAAidCcg");
	this.shape_30.setTransform(137.5,78.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(4,104,253,0.333)").s().p("AnfHfQjHjGABkZQgBkYDHjHQDIjGEXgBQEZABDHDGQDGDHABEYQgBEZjGDGQjHDIkZgBQkXABjIjIgAmMmLQikCkAADnQAADpCkCkQClClDngBQDpABCkilQClikAAjpQAAjnilikQikimjpAAQjnAAilCmg");
	this.shape_31.setTransform(137.5,78.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(4,104,253,0.224)").s().p("An4H5QjRjSAAknQAAkmDRjSQDSjREmAAQEoAADQDRQDSDSAAEmQAAEnjSDSQjQDRkoAAQkmAAjSjRgAmgmhQitCuAADzQAAD1CtCtQCtCtDzAAQD1AACtitQCtitAAj1QAAjzitiuQitisj1gBQjzABitCsg");
	this.shape_32.setTransform(137.5,78.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(4,104,253,0.11)").s().p("AoRISQjbjbgBk3QABk1DbjcQDcjcE1AAQE2AADcDcQDcDcAAE1QAAE3jcDbQjcDbk2AAQk1AAjcjbgAm1m1Qi2C2AAD/QAAEBC2C1QC2C3D/AAQECAAC0i3QC2i1AAkBQAAj/i2i2Qi0i2kCAAQj/AAi2C2g");
	this.shape_33.setTransform(137.5,78.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(4,104,253,0)").s().p("AoqIrQjmjmAAlFQAAlEDmjmQDnjmFDAAQFFAADmDmQDmDmAAFEQAAFFjmDmQjmDmlFAAQlDAAjnjmgAnKnKQi+C/gBELQABEOC+C+QC/C+ELAAQEOAAC9i+QC/i+AAkOQAAkLi/i/Qi9i+kOAAQkLAAi/C+g");
	this.shape_34.setTransform(137.5,78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},61).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.buttonplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 23
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-6.4,0.451,0.497,0,0,0,57.1,22.4);

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,5.9,0.451,0.497,0,0,0,57.1,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]}).to({state:[{t:this.instance_1,p:{alpha:0.699}},{t:this.instance,p:{alpha:0.699}}]},1).to({state:[{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]},2).wait(1));

	// Layer 22
	this.instance_2 = new lib.border();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.2,0.451,0.497,0,0,0,57.6,35.6);

	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.2,0.1,0.451,0.497,0,0,0,31.3,19);

	this.instance_4 = new lib.bg_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,5.9,0.451,0.497,0,0,0,57.1,24.3);

	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,0.2,0.451,0.497,0,0,0,57.1,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-17.5,52,35.5);


// stage content:
(lib.Bias_5_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:12,step1:13,step2:14,step3:15,step4:16,step5:17,step6:18,step7:19,step8:20,step9:21,step10:22,step11:23,step12:24});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
		this.Layer_2_mnn1_0.goto = "step1";
		this.Layer_2_mnn2_1.goto = "step1";
		this.Layer_2_mnn3_2.goto = "step1";
		this.Layer_2_mnn4_3.goto = "step1";
	}
	this.frame_13 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "step2";
	}
	this.frame_14 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "step3";
	}
	this.frame_15 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "step4";
	}
	this.frame_16 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_17 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_18 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_19 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_20 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_21 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_22 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_23 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_24 = function() {
		this.stop();
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_25 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_26 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_27 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_28 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_29 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_30 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_31 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_32 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_33 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_34 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_35 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_36 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_37 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_38 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_39 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_40 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}
	this.frame_41 = function() {
		this.Layer_10_button_play_0.goto = "stepnext";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1));

	// board
	this.instance = new lib.klikklikcopy();
	this.instance.parent = this;
	this.instance.setTransform(-1,176.1,0.437,0.437,0,0,0,119,71);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},1).wait(29));

	// Layer 10
	this.Layer_10_button_play_0 = new lib.buttonplay();
	this.Layer_10_button_play_0.parent = this;
	this.Layer_10_button_play_0.setTransform(791,432.1,1.442,1.693);
	this.Layer_10_button_play_0._off = true;
	new cjs.ButtonHelper(this.Layer_10_button_play_0, 0, 1, 2, false, new lib.buttonplay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Layer_10_button_play_0).wait(13).to({_off:false},0).wait(29));

	// Layer 2
	this.Layer_2_mnn4_3 = new lib.mnn4();
	this.Layer_2_mnn4_3.parent = this;
	this.Layer_2_mnn4_3.setTransform(453.3,282.4,1,1,0,0,0,72.7,200.9);
	new cjs.ButtonHelper(this.Layer_2_mnn4_3, 0, 1, 2, false, new lib.mnn4(), 3);

	this.Layer_2_mnn3_2 = new lib.mnn3();
	this.Layer_2_mnn3_2.parent = this;
	this.Layer_2_mnn3_2.setTransform(302.3,265,1,1,0,0,0,71.5,213.3);
	new cjs.ButtonHelper(this.Layer_2_mnn3_2, 0, 1, 2, false, new lib.mnn3(), 3);

	this.Layer_2_mnn2_1 = new lib.mnn2();
	this.Layer_2_mnn2_1.parent = this;
	this.Layer_2_mnn2_1.setTransform(140.5,266.4,1.053,1.053,0,0,0,67.7,195.1);
	new cjs.ButtonHelper(this.Layer_2_mnn2_1, 0, 1, 2, false, new lib.mnn2(), 3);

	this.Layer_2_mnn1_0 = new lib.mnn1();
	this.Layer_2_mnn1_0.parent = this;
	this.Layer_2_mnn1_0.setTransform(-17.9,280.3,1,1,0,0,0,63.1,207.8);
	new cjs.ButtonHelper(this.Layer_2_mnn1_0, 0, 1, 2, false, new lib.mnn1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Layer_2_mnn1_0},{t:this.Layer_2_mnn2_1},{t:this.Layer_2_mnn3_2},{t:this.Layer_2_mnn4_3}]}).to({state:[{t:this.Layer_2_mnn1_0},{t:this.Layer_2_mnn2_1},{t:this.Layer_2_mnn3_2},{t:this.Layer_2_mnn4_3}]},12).to({state:[]},1).wait(29));

	// Layer 1
	this.instance_1 = new lib.nn4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.4,115.2,1,1,0,0,0,21,26.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},4).to({_off:true},1).wait(29));

	// Layer 8
	this.instance_2 = new lib.nn3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243.2,115,1,1,0,0,0,21,26.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({alpha:1},4).to({_off:true},3).wait(29));

	// Layer 7
	this.instance_3 = new lib.nn2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85,115,1,1,0,0,0,21,26.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},4).to({_off:true},5).wait(29));

	// Layer 6
	this.instance_4 = new lib.nn1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-55.5,115,1,1,0,0,0,21,26.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AgzBTIBWilIARAAIhWClgAAbBLQgHgHgEgLQgDgLAAgNQAAgNADgLQAEgLAIgHQAHgHALAAQAMAAAHAIQAHAHADALQADALAAALQAAARgFAMQgFALgHAFQgHAGgJAAQgLgBgHgHgAAlAJQgCAIAAAQQgBAQADAIQADAIAFAAQAGAAACgIQADgJAAgPQAAgPgCgIQgDgJgGgBQgFAAgDAJgAg/AJQgHgHgDgKQgEgLAAgNQAAgNAEgMQAEgLAHgHQAIgHAKAAQAMAAAHAIQAHAHADALQADALAAAMQAAARgEALQgFALgHAFQgIAFgIAAQgLAAgIgHgAg0g5QgDAJAAAPQAAAQADAIQACAJAGAAQAGAAACgJQACgIAAgPQAAgPgCgJQgCgJgGAAQgFAAgDAIg");
	this.shape.setTransform(89.1,201.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("AgdBQQgIgCgGgCIAGgaIAKAEQAGABAHAAQAMAAAGgHQAHgHAAgNQAAgLgEgHQgFgGgIgDQgHgBgKAAIgGAAIgGAAIAJhRIBDAAIAAAcIgqAAIgEAdIADAAIACAAIAIACIALADQAGADAEAFQAIAGADAIQADAKABAMQgBAQgGANQgHANgNAHQgMAIgRAAQgJAAgIgCg");
	this.shape_1.setTransform(75.3,201.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.6)").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAIAAQAIAAAEAGQAGAGAAAJQAAAKgFAGQgFAGgJAAQgHAAgFgGg");
	this.shape_2.setTransform(67.5,207.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AgdBQQgJgCgEgCIAFgaIAKAEQAGABAHAAQAMAAAGgHQAHgHAAgNQAAgLgEgHQgFgGgIgDQgHgBgKAAIgGAAIgFAAIAJhRIBCAAIAAAcIgqAAIgEAdIACAAIADAAIAIACIALADQAGADAEAFQAIAGADAIQAEAKAAAMQAAAQgHANQgHANgMAHQgNAIgRAAQgJAAgIgCg");
	this.shape_3.setTransform(58.8,201.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.6)").s().p("AgYBOQgLgGgGgKQgGgKAAgNQAAgPAHgLQAHgLAKgFIAAgBQgKgHgFgJQgFgKAAgKQAAgNAHgJQAGgKAKgFQALgFALAAQAMAAAKAFQAJAFAGAJQAFAJAAAMQABAIgFAKQgEAJgNAJIAAAAQALAGAHAKQAHALAAAPQAAAPgHAKQgGALgLAGQgLAFgNAAQgOAAgKgFgAgMATQgDAHAAAJQAAAHABAGQACAGAEAEQAEADAFAAQAHAAAEgHQAEgGAAgLQAAgLgGgIQgFgHgGgEQgHAEgEAIgAgJg2QgDAGAAAHQAAAJAEAGQAFAGAGAEQAFgDADgHQADgGAAgHQAAgJgDgGQgDgGgHAAQgGAAgEAGg");
	this.shape_4.setTransform(48.4,201.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9BjIBnjFIAUAAIhnDFgAAgBZQgJgIgEgNQgEgNAAgPQAAgRAFgNQAEgMAJgJQAJgIAMAAQAPAAAIAJQAIAJAEAMQAEANgBAOQAAAVgFANQgGAOgIAGQgJAGgKAAQgOAAgIgJgAAsAKQgDAKAAATQAAASADALQADAKAHAAQAHAAADgKQACgLAAgSQAAgRgCgLQgDgLgHAAQgGABgEAJgAhLAKQgIgIgEgMQgEgNAAgPQAAgQAEgNQAFgOAIgJQAJgIANAAQAOAAAJAJQAIAJADAOQAEANAAAOQAAAUgGANQgFANgJAGQgIAHgKgBQgOAAgJgJgAg+hDQgDAJAAATQgBATAEAJQADALAHgBQAGABADgLQADgJAAgTQAAgRgDgKQgCgLgHAAQgHAAgDAKg");
	this.shape_5.setTransform(171.1,216.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBfQgKgCgGgDIAGgfIANAFQAHACAIAAQAOAAAIgIQAIgKAAgPQAAgNgGgHQgFgIgJgDQgJgCgMgBIgHAAIgGABIAKhhIBPAAIAAAiIgyAAIgEAiIADAAIADAAIAJACQAHACAHADQAGADAGAFQAIAIAEAKQAFALAAAPQgBASgHAQQgIAQgPAIQgPAKgVAAQgKAAgKgDg");
	this.shape_6.setTransform(154.7,216.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPATQgGgHgBgMQABgKAGgIQAHgGAIgBQAKAAAGAHQAHAHAAALQAAAMgGAHQgHAGgKABQgIgBgHgGg");
	this.shape_7.setTransform(145.4,223.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGBhIAAguIhBAAIAAgbIA+h4IAlAAIAABzIAUAAIAAAgIgUAAIAAAugAAAgkIgGAPIgUAoIAAAAIAgAAIAAgmIABgQIACgQIgCAAIgHAPg");
	this.shape_8.setTransform(135.4,216.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABBhIAAicIgBAAIggARIgGgfIArgXIAiAAIAADBg");
	this.shape_9.setTransform(121.6,216.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.6)").s().p("AgzBTIBWilIARAAIhWClgAAbBLQgHgHgEgLQgDgLAAgNQAAgNADgLQAEgLAIgHQAHgHALAAQAMAAAHAIQAHAHADALQADALAAALQAAARgFAMQgFALgHAFQgHAGgJAAQgLgBgHgHgAAlAJQgCAIAAAQQgBAQADAIQADAIAFAAQAGAAACgIQADgJAAgPQAAgPgCgIQgDgJgGgBQgFAAgDAJgAg/AJQgHgHgDgKQgEgLAAgNQAAgNAEgMQAEgLAHgHQAIgHAKAAQAMAAAHAIQAHAHADALQADALAAAMQAAARgEALQgFALgHAFQgIAFgIAAQgLAAgIgHgAg0g5QgDAJAAAPQAAAQADAIQACAJAGAAQAGAAACgJQACgIAAgPQAAgPgCgJQgCgJgGAAQgFAAgDAIg");
	this.shape_10.setTransform(329.8,194.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.6)").s().p("AgrBSIAAgWIAQgVIATgZQAIgMAFgLQAFgLAAgMQAAgKgFgGQgFgGgKAAQgHAAgGADIgLAFIgGgZQAGgEAKgDQAJgDALAAQARAAAKAHQALAGAEALQAFALgBAMQAAAPgFANQgGANgJAMQgIAMgJAKIgJAMIAAAAIAwAAIAAAdg");
	this.shape_11.setTransform(315.9,194.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.6)").s().p("AAFBRIAAgmIg2AAIAAgXIA0hkIAfAAIAABgIAQAAIAAAbIgQAAIAAAmgAABgeIgFAMIgSAiIAAAAIAbAAIAAggIAAgOIACgNIgBAAIgFANg");
	this.shape_12.setTransform(305.6,194.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag9BjIBnjFIAUAAIhnDFgAAgBZQgJgIgEgNQgEgNAAgPQAAgRAFgNQAEgNAJgHQAJgJAMAAQAPAAAIAJQAIAJAEAMQAEAOgBANQAAAUgFAOQgGANgIAHQgJAGgKAAQgOAAgIgJgAAsAKQgDALAAARQAAAUADAKQADAJAHABQAHgBADgJQACgLAAgSQAAgRgCgLQgDgLgHAAQgGABgEAJgAhLAKQgIgIgEgMQgEgOAAgOQAAgQAEgNQAFgOAIgJQAJgIANAAQAOAAAJAJQAIAJADAOQAEANAAAOQAAAUgGANQgFANgJAGQgIAHgKgBQgOAAgJgJgAg+hDQgDAJAAATQgBATAEAKQADAKAHgBQAGABADgKQADgKAAgTQAAgRgDgKQgCgMgHAAQgHAAgDALg");
	this.shape_13.setTransform(305.9,231.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdBcQgNgHgHgLQgHgMAAgQQAAgSAIgMQAJgNAMgHIAAgBQgMgIgGgMQgGgKAAgMQAAgQAIgLQAHgMAMgGQANgGAOAAQAOAAALAGQALAFAHALQAHALAAAOQAAAKgFAMQgGALgPAKIAAAAQAOAIAIAMQAIANAAASQAAARgIANQgHAMgOAHQgNAHgPAAQgQgBgNgGgAgOAWQgEAJgBALQAAAIADAHQACAHAEAFQAFADAGAAQAJABAFgJQAEgIAAgMQAAgOgHgJQgGgJgIgEQgHAFgFAJgAgKhBQgEAHAAAKQAAAJAFAIQAFAHAIAFQAGgEAEgHQADgJAAgIQAAgKgEgHQgDgIgJAAQgHAAgEAHg");
	this.shape_14.setTransform(289.8,231.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjBgQgKgCgGgEIAGgfIANAFQAHACAIAAQAOAAAIgIQAIgJAAgQQAAgNgGgHQgFgIgJgDQgJgCgMgBIgHAAIgGABIAKhhIBPAAIAAAiIgyAAIgEAjIADAAIADAAIAJABQAHACAHADQAGADAGAFQAIAIAEAKQAFALAAAPQgBATgHAPQgIAPgPAJQgPAKgVAAQgKAAgKgCg");
	this.shape_15.setTransform(276.8,232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},4).to({state:[]},7).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({alpha:1},4).to({_off:true},7).wait(29));

	// board
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAIB/IAAg9IhWAAIAAgjIBSidIAyAAIAACXIAZAAIAAApIgZAAIAAA9gAABgwIgIAUIgcA0IAAABIArAAIAAgyIABgWIACgVIgCAAIgIAUg");
	this.shape_16.setTransform(396.4,116.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtB/QgNgEgIgEIAHgpQAIAFAJADQAKACALAAQATAAAIgKQAKgKAAgRQAAgOgHgIQgGgJgKgFQgKgDgNAAIgHAAIAAglIAEAAQAKAAAKgEQAKgCAFgIQAIgHgBgMQABgOgJgIQgGgHgOAAQgJAAgIADQgIADgIAEIgGgnQAJgFANgEQAOgEAQAAQAVAAAQAJQAPAIAHAOQAHAOAAAQQAAATgJAQQgKAOgRAIIAAABQATAGAMAQQAMAQABAZQgBAUgJARQgKASgTALQgTAKgbABQgPAAgNgDg");
	this.shape_17.setTransform(243.6,116);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhECAIAAgiIAZggIAegoQANgTAHgRQAJgSgBgTQABgOgJgLQgHgJgQAAQgMAAgKAEQgJAEgHAFIgJgoQAJgGAPgEQAPgFASgBQAaABAQALQARAKAGARQAHARAAASQgBAYgHAVQgKATgNATQgNATgPARIgOASIAAAAIBMAAIAAAtg");
	this.shape_18.setTransform(84.5,115.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AABB/IAAjNIgBAAIgqAWIgJgoIA6geIAtAAIAAD9g");
	this.shape_19.setTransform(-58,116);

	this.instance_5 = new lib.jhkf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(398.4,116,1,1,0,0,0,21,21);

	this.instance_6 = new lib.jhkf();
	this.instance_6.parent = this;
	this.instance_6.setTransform(243.2,116,1,1,0,0,0,21,21);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance_6.cache(-2,-2,46,46);

	this.instance_7 = new lib.jhkf();
	this.instance_7.parent = this;
	this.instance_7.setTransform(85,116,1,1,0,0,0,21,21);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance_7.cache(-2,-2,46,46);

	this.instance_8 = new lib.jhkf();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-55.5,116,1,1,0,0,0,21,21);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance_8.cache(-2,-2,46,46);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgFAaIgFgzIAVAAIgFAzg");
	this.shape_20.setTransform(330,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgTA8QgJgHgEgMQgFgMAAgQQAAgUAGgPQAGgPAJgJQAHgIAIgEQAIgEAIgCIAIgBIAFAAIAAAUIgFABIgGABQgIACgGAFQgFAFgEAHQgDAIgCAHIABAAIAIgHQAFgDAGAAQANAAAIALQAIAKAAASQAAAMgEALQgEAKgIAHQgIAGgNABQgLAAgJgHgAgFABQgCACgCAFIgBAEIgBAHQABANADAIQADAHAFAAQAHABACgIQADgHAAgNQAAgFgCgFQgBgFgDgDQgCgCgFAAQgCAAgDABg");
	this.shape_21.setTransform(324,24.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgZAmQgKgNAAgXQAAgPAFgMQAFgMAJgGQAJgGAKAAQAQAAAIAMQAJAMAAAWIAAAHIgBAGIgtAAQABALAFAFQAFAFAJgBIAKgBIAIgCIAEATIgNADIgOABQgTAAgLgMgAAMgIQAAgJgCgHQgDgGgGAAQgDAAgDAEQgCADgCAFIgBAKIAWAAIAAAAg");
	this.shape_22.setTransform(312.4,26.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgLAxIgahhIAcAAIAGAsIADAMIABAOIACgNIACgNIAHgsIAaAAIgaBhg");
	this.shape_23.setTransform(304.5,26.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgaAlQgKgMAAgZQAAgQAFgLQAFgLAJgGQAJgGAIAAQAMABAIAGQAIAGAFALQAEALAAAPQAAAPgDAKQgEAKgGAFQgGAGgGACQgGACgGABQgRAAgJgOgAgGgZQgDAFgBAHQgBAHABAGIABAPQABAHACAFQADADAEAAQAEABACgFIADgMIABgOIgBgNQgBgHgCgFQgCgEgFAAQgEAAgCAEg");
	this.shape_24.setTransform(296.5,26.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgEBDQgEgDgEgHIgBAAIgBAMIgXAAIABgPIAAgOIAAhtIAaAAIAAAyIABAAQADgFAFgDQAEgDAHAAQAKAAAGAHQAGAGADALQADAKAAANQAAARgEAMQgEAMgIAGQgHAGgJAAQgGAAgEgDgAgFgFQgDADgBACIAAADIgBADIAAAbIABAEIAAADQACAFADACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQAGAAADgIQADgIAAgOQAAgNgDgGQgDgIgGAAQgDABgCACg");
	this.shape_25.setTransform(287.8,24.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgcAqQgHgIAAgNQAAgNAGgIQAHgHAKgDQAKgFAKAAIAAgCQAAgFgDgEQgEgEgFAAQgGAAgFACIgJADIgFgRQAEgDAIgCQAIgCAJgBQAPABAHAGQAIAGACAJQADAJAAAKIAAAkIAAALIABALIgXAAIgCgKIAAAAQgEAGgGADQgEADgHAAQgLAAgHgJgAAAADQgEABgDAEQgEAEAAAGQABAIADACQADADADAAQACAAADgCQADgCACgEIAAgCIAAgCIAAgSIgJACg");
	this.shape_26.setTransform(278.8,26.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AALAyIAAg8QAAgHgCgFQgCgEgGgBQgCAAgDADQgDACgBAEIgBAEIAAAFIAAA7IgaAAIAAhEIAAgPIgBgOIAWAAIABALIABAAQAEgGAGgDQAFgDAIgBQAOABAGAKQAGAJAAARIAAA+g");
	this.shape_27.setTransform(385.4,9.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgaAmQgKgNAAgZQAAgQAFgMQAFgLAJgFQAJgGAIABQAMAAAIAGQAIAGAFALQAEAMAAAOQAAAPgDAKQgEAKgGAGQgGAFgGADQgGABgGAAQgRABgJgNgAgGgYQgDAEgBAHQgBAHABAGIABAPQABAHACAEQADAFAEAAQAEgBACgEIADgMIABgOIgBgNQgBgHgCgEQgCgGgFAAQgEAAgCAGg");
	this.shape_28.setTransform(376.6,9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgMBFIAAhhIAZAAIAABhgAgIgsQgFgEAAgGQAAgGAFgEQAEgEAEAAQAGAAAEAEQADAEAAAGQAAAGgDAEQgFAFgFAAQgFAAgDgFg");
	this.shape_29.setTransform(370,7.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAAA9QgEgBgEgDQgDgEgCgGQgDgHAAgLIAAgtIgMAAIAAgUIAMAAIAAgUIAZgFIAAAZIATAAIAAAUIgTAAIAAArQAAAIAEAEQADADADgBIAEAAIADgBIAAAVIgHABIgJAAQgFAAgFgBg");
	this.shape_30.setTransform(364.7,8.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgcAqQgHgIAAgNQAAgNAGgIQAHgHAKgEQAKgDAKAAIAAgDQAAgGgDgDQgEgEgFAAQgGAAgFABIgJAFIgFgSQAEgCAIgDQAIgCAJAAQAPAAAHAGQAIAFACAKQADAJAAAKIAAAjIAAANIABAKIgXAAIgCgJIAAAAQgEAFgGADQgEACgHAAQgLAAgHgIgAAAADQgEABgDADQgEAFAAAGQABAHADAEQADADADAAQACAAADgCQADgCACgFIAAgCIAAgDIAAgQIgJABg");
	this.shape_31.setTransform(357.4,9.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_32.setTransform(351.1,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgdAoQgHgKAAgUIAAg7IAbAAIAAA4QgBAKADAFQACAGAFAAQADAAACgCIADgFIABgDIAAgFIAAg+IAbAAIAABDIAAAQIAAAOIgWAAIgCgKIAAAAQgDAFgGADQgFAEgHAAQgPAAgFgKg");
	this.shape_33.setTransform(344.3,9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgkBFIAAhoIAAgRIgBgPIAXAAIACAMQADgGAFgDQAFgEAGAAQALAAAHAHQAHAHADALQADAMAAAOQAAARgFAKQgEALgHAGQgIAFgIAAQgGAAgDgDQgEgDgCgEIgBAAIAAAvgAgFgsQgDADAAAEIgBADIgBADIAAAaIABAFIABADQABAEADACQAAAAABABQAAAAABAAQAAABABAAQABAAAAgBQAEAAADgDQACgFACgFIABgOQAAgPgEgGQgDgIgFAAQgDAAgCACg");
	this.shape_34.setTransform(335.4,11.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgaAmQgKgNAAgZQAAgQAFgMQAFgLAJgFQAJgGAIABQAMAAAIAGQAIAGAFALQAEAMAAAOQAAAPgDAKQgEAKgGAGQgGAFgGADQgGABgGAAQgRABgJgNgAgGgYQgDAEgBAHQgBAHABAGIABAPQABAHACAEQADAFAEAAQAEgBACgEIADgMIABgOIgBgNQgBgHgCgEQgCgGgFAAQgEAAgCAGg");
	this.shape_35.setTransform(326.6,9.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AglBEIAAiEIANgCIAPgBQAKAAAKADQAJACAGAGQAGAFADAIQADAIAAAIQAAALgDAIQgDAIgFAFQgFAEgFADQgGADgGABIgKACIgDAAIgCAAIAAAygAgKgsIAAApIABABIADAAQAJgBAEgGQAFgGAAgJQAAgJgEgGQgEgGgIAAIgEAAIgCABg");
	this.shape_36.setTransform(318.4,7.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgRAxQgHgCgEgCIAFgTIAIADIAKACQAFAAACgCQADgDgBgEQABgEgDgDIgIgGQgIgFgEgEQgFgEgBgFIgBgJQAAgJADgHQAEgHAHgEQAHgEAJAAIALABIAJADIgEAUIgHgDIgHgBQgFAAgCACQgCADAAADQAAADACADIAJAGQAKAGAFAHQAEAHABAJQgBAKgEAGQgEAHgIAEQgIADgJAAQgGAAgGgBg");
	this.shape_37.setTransform(307,9.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgGAaIgDgzIATAAIgDAzg");
	this.shape_38.setTransform(302.3,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgTBAQgIgGgFgKQgFgKgDgMQgCgNAAgNQAAgNACgMQADgNAGgKQAFgJAJgFQAIgGALAAQALABAIAFQAJAGAEAKQAFAKACALIACAYQAAAYgFAQQgGAQgKAHQgKAHgMAAQgLAAgIgFgAgLghQgEAMAAAVQAAAXAEAMQAFAMAHgBQAFAAAEgGQACgGACgLQACgKAAgNQAAgMgCgKQgBgKgDgHQgEgGgFAAQgHAAgFAMg");
	this.shape_39.setTransform(295.8,7.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgdBDIAAiGIA5AAIAAAYIgfAAIAAAeIAdAAIAAAWIgdAAIAAAkIAiAAIAAAWg");
	this.shape_40.setTransform(287.3,7.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgNA8QgLgJgGgOQgFgPAAgUQAAgSAFgOQAEgNAIgIQAIgJAKgDQAIgFAKAAIAMABIAGADIgEAWIgFgBIgHgBQgIgBgGAFQgGAFgDAKQgEAKAAAQQAAAPADALQAEAKAFAEQAHAEAIABIAHgBIAFgBIADAVQgDACgFAAIgMABQgRABgLgJg");
	this.shape_41.setTransform(279.3,7.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgYAmQgLgNAAgXQAAgPAFgMQAFgMAJgGQAJgGAKAAQAQAAAJAMQAIAMAAAWIAAAHIgBAGIgtAAQABALAFAFQAFAFAJgBIAKgBIAJgCIADATIgMADIgPABQgTAAgKgMgAANgIQgBgJgCgHQgDgGgFAAQgEAAgCAEQgDADgCAFIgBAKIAXAAIAAAAg");
	this.shape_42.setTransform(267.8,9.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_43.setTransform(261.3,7.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgcAqQgHgIAAgNQAAgNAGgIQAHgHAKgEQAKgDAKAAIAAgDQAAgGgDgDQgEgEgFAAQgGAAgFABIgJAFIgFgSQAEgCAIgDQAIgCAJAAQAPAAAHAGQAIAFACAKQADAJAAAKIAAAjIAAANIABAKIgXAAIgCgJIAAAAQgEAFgGADQgEACgHAAQgLAAgHgIgAAAADQgEABgDADQgEAFAAAGQABAHADAEQADADADAAQACAAADgCQADgCACgFIAAgCIAAgDIAAgQIgJABg");
	this.shape_44.setTransform(254.6,9.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAhBDIgCgvIgBgUIAAgYIgBAAIgDAQIgDANIgDAMIgLAwIgSAAIgLgvIgDgNIgDgNIgCgQIgBAAIgBAYIgBAUIgCAvIgXAAIAKiGIAcAAIALAyIAFAXIADAWIABAAIADgWIAFgXIALgyIAbAAIAJCGg");
	this.shape_45.setTransform(244.1,7.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_46.setTransform(232.3,7.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_47.setTransform(227.8,7.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AASBDIgGgeIgXAAIgGAeIgaAAIAeiGIAeAAIAbCGgAAKARIgEgcIgCgKIgCgLIgBgKIgBAAIAAALIgCALIgCAKIgEAbIASAAg");
	this.shape_48.setTransform(220.9,7.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgGAaIgDgzIATAAIgDAzg");
	this.shape_49.setTransform(136.4,20.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgTA8QgJgHgEgMQgFgMAAgQQAAgUAGgPQAGgPAJgJQAHgIAIgEQAIgEAIgCIAIgBIAFAAIAAAUIgFABIgGABQgIACgGAFQgFAFgEAHQgDAIgCAHIABAAIAIgHQAFgDAGAAQANAAAIALQAIAKAAASQAAAMgEALQgEAKgIAHQgIAGgNABQgLAAgJgHgAgFABQgCACgCAFIgBAEIgBAHQABANADAIQADAHAFAAQAHABACgIQADgHAAgNQAAgFgCgFQgBgFgDgDQgCgCgFAAQgCAAgDABg");
	this.shape_50.setTransform(130.5,24.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgYAmQgLgNAAgXQAAgPAFgMQAFgMAJgGQAJgGAKAAQAQAAAJAMQAIAMAAAWIAAAHIgBAGIgtAAQABALAFAFQAFAFAJgBIAKgBIAJgCIADATIgMADIgPABQgTAAgKgMgAANgIQgBgJgCgHQgDgGgFAAQgEAAgCAEQgDADgCAFIgBAKIAXAAIAAAAg");
	this.shape_51.setTransform(118.8,26.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgLAxIgbhhIAcAAIAIAsIACAMIABAOIACgNIACgNIAIgsIAaAAIgaBhg");
	this.shape_52.setTransform(111,26.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgaAlQgKgMAAgZQAAgQAFgLQAFgLAJgGQAJgGAIAAQAMABAIAGQAIAGAFALQAEALAAAPQAAAPgDAKQgEAKgGAFQgGAGgGACQgGACgGABQgRAAgJgOgAgGgZQgDAFgBAHQgBAHABAGIABAPQABAHACAFQADADAEAAQAEABACgFIADgMIABgOIgBgNQgBgHgCgFQgCgEgFAAQgEAAgCAEg");
	this.shape_53.setTransform(102.9,26.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgEBDQgEgDgEgHIgBAAIgBAMIgXAAIABgPIAAgOIAAhtIAaAAIAAAyIABAAQADgFAFgDQAEgDAHAAQAKAAAGAHQAGAGADALQADAKAAANQAAARgEAMQgEAMgIAGQgHAGgJAAQgGAAgEgDgAgFgFQgDADgBACIAAADIgBADIAAAbIABAEIAAADQACAFADACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQAGAAADgIQADgIAAgOQAAgNgDgGQgDgIgGAAQgDABgCACg");
	this.shape_54.setTransform(94.2,24.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgcAqQgHgIAAgNQAAgNAGgIQAHgHAKgDQAKgFAKAAIAAgCQAAgFgDgEQgEgEgFAAQgGAAgFACIgJADIgFgRQAEgDAIgCQAIgCAJgBQAPABAHAGQAIAGACAJQADAJAAAKIAAAkIAAALIABALIgXAAIgCgKIAAAAQgEAGgGADQgEADgHAAQgLAAgHgJgAAAADQgEABgDAEQgEAEAAAGQABAIADACQADADADAAQACAAADgCQADgCACgEIAAgCIAAgCIAAgSIgJACg");
	this.shape_55.setTransform(85.2,26.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AALAyIAAg8QAAgHgCgFQgCgEgGgBQgCAAgDADQgCACgCAEIgBAEIAAAFIAAA7IgaAAIAAhEIAAgPIgBgOIAWAAIABALIABAAQAEgGAGgDQAFgDAIgBQAOABAGAKQAGAJAAARIAAA+g");
	this.shape_56.setTransform(172.7,9.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgaAmQgKgNAAgZQAAgQAFgMQAFgLAJgFQAJgGAIABQAMAAAIAGQAIAGAFALQAEAMAAAOQAAAPgDAKQgEAKgGAGQgGAFgGADQgGABgGAAQgRABgJgNgAgGgYQgDAEgBAHQgBAHABAGIABAPQABAHACAEQADAFAEAAQAEgBACgEIADgMIABgOIgBgNQgBgHgCgEQgCgGgFAAQgEAAgCAGg");
	this.shape_57.setTransform(163.8,9.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgMBFIAAhhIAZAAIAABhgAgIgsQgFgEAAgGQAAgGAFgEQAEgEAEAAQAFAAAFAEQADAEAAAGQAAAGgDAEQgFAFgFAAQgFAAgDgFg");
	this.shape_58.setTransform(157.3,7.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAAA9QgEgBgEgDQgDgEgCgGQgCgHgBgLIAAgtIgMAAIAAgUIAMAAIAAgUIAZgFIAAAZIATAAIAAAUIgTAAIAAArQAAAIAEAEQACADAEgBIAEAAIADgBIAAAVIgHABIgJAAQgFAAgFgBg");
	this.shape_59.setTransform(151.9,8.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgcAqQgHgIAAgNQAAgNAGgIQAHgHAKgEQAKgDAKAAIAAgDQAAgGgDgDQgEgEgFAAQgGAAgFABIgJAFIgFgSQAEgCAIgDQAIgCAJAAQAPAAAHAGQAIAFACAKQADAJAAAKIAAAjIAAANIABAKIgXAAIgCgJIAAAAQgEAFgGADQgEACgHAAQgLAAgHgIgAAAADQgEABgDADQgEAFAAAGQABAHADAEQADADADAAQACAAADgCQADgCACgFIAAgCIAAgDIAAgQIgJABg");
	this.shape_60.setTransform(144.6,9.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_61.setTransform(138.3,7.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgdAoQgHgKAAgUIAAg7IAbAAIAAA4QAAAKACAFQACAGAFAAQADAAACgCIADgFIABgDIAAgFIAAg+IAbAAIAABDIAAAQIAAAOIgWAAIgBgKIgBAAQgEAFgFADQgFAEgIAAQgOAAgFgKg");
	this.shape_62.setTransform(131.6,9.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgkBFIAAhoIAAgRIgBgPIAXAAIACAMQADgGAFgDQAFgEAGAAQALAAAHAHQAHAHADALQADAMAAAOQAAARgFAKQgEALgHAGQgIAFgIAAQgGAAgDgDQgEgDgCgEIgBAAIAAAvgAgFgsQgDADAAAEIgBADIgBADIAAAaIABAFIABADQABAEADACQAAAAABABQAAAAABAAQAAABABAAQABAAAAgBQAEAAADgDQACgFACgFIABgOQAAgPgEgGQgDgIgFAAQgDAAgCACg");
	this.shape_63.setTransform(122.7,11.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgaAmQgKgNAAgZQAAgQAFgMQAFgLAJgFQAJgGAIABQAMAAAIAGQAIAGAFALQAEAMAAAOQAAAPgDAKQgEAKgGAGQgGAFgGADQgGABgGAAQgRABgJgNgAgGgYQgDAEgBAHQgBAHABAGIABAPQABAHACAEQADAFAEAAQAEgBACgEIADgMIABgOIgBgNQgBgHgCgEQgCgGgFAAQgEAAgCAGg");
	this.shape_64.setTransform(113.8,9.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AglBEIAAiEIANgCIAPgBQAKAAAKADQAJACAGAGQAGAFADAIQADAIAAAIQAAALgDAIQgDAIgFAFQgFAEgFADQgGADgGABIgKACIgDAAIgCAAIAAAygAgKgsIAAApIABABIADAAQAJgBAEgGQAFgGAAgJQAAgJgEgGQgEgGgIAAIgEAAIgCABg");
	this.shape_65.setTransform(105.7,7.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgYAmQgLgNAAgXQAAgPAFgMQAFgMAJgGQAJgGAKAAQAQAAAJAMQAIAMAAAWIAAAHIAAAGIguAAQAAALAGAFQAFAFAJgBIAKgBIAJgCIADATIgMADIgPABQgTAAgKgMgAAMgIQABgJgDgHQgDgGgFAAQgEAAgDAEQgCADgBAFIgCAKIAWAAIAAAAg");
	this.shape_66.setTransform(93.4,9.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_67.setTransform(86.9,7.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgcAqQgHgIAAgNQAAgNAGgIQAHgHAKgEQAKgDAKAAIAAgDQAAgGgDgDQgEgEgFAAQgGAAgFABIgJAFIgFgSQAEgCAIgDQAIgCAJAAQAPAAAHAGQAIAFACAKQADAJAAAKIAAAjIAAANIABAKIgXAAIgCgJIAAAAQgEAFgGADQgEACgHAAQgLAAgHgIgAAAADQgEABgDADQgEAFAAAGQABAHADAEQADADADAAQACAAADgCQADgCACgFIAAgCIAAgDIAAgQIgJABg");
	this.shape_68.setTransform(80.2,9.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AAhBDIgCgvIgBgUIAAgYIgBAAIgDAQIgDANIgDAMIgLAwIgSAAIgLgvIgDgNIgDgNIgCgQIgBAAIgBAYIgBAUIgCAvIgXAAIAKiGIAcAAIALAyIAFAXIADAWIABAAIADgWIAFgXIALgyIAbAAIAJCGg");
	this.shape_69.setTransform(69.7,7.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_70.setTransform(57.9,7.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_71.setTransform(53.4,7.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AASBDIgGgeIgXAAIgGAeIgaAAIAeiGIAeAAIAaCGgAAKARIgEgcIgCgKIgCgLIgBgKIgBAAIAAALIgCALIgBAKIgGAbIATAAg");
	this.shape_72.setTransform(46.5,7.5);

	this.instance_9 = new lib.pie2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(23.8,176.5,0.554,0.554);

	this.instance_10 = new lib.pie1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(228.9,176.5,0.554,0.554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},13).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).wait(27));

	// Layer 3
	this.instance_11 = new lib.vvz12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-12.3,284.4,1.477,1.477);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},6).wait(7).to({_off:true},1).wait(28));

	// Layer 4
	this.instance_12 = new lib.vvz8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(136.9,276.7,1.477,1.477);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({alpha:1},6).wait(5).to({_off:true},1).wait(28));

	// Layer 5
	this.instance_13 = new lib.vvz9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(302.2,264.9,1.576,1.576);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({alpha:1},6).wait(4).to({x:107.2},0).to({_off:true},1).wait(27));

	// Layer 17
	this.instance_14 = new lib.vvz11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(453.3,283,1.477,1.477);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.mark();
	this.instance_15.parent = this;
	this.instance_15.setTransform(391.5,78,0.483,0.483);

	this.instance_16 = new lib.hfgdha();
	this.instance_16.parent = this;
	this.instance_16.setTransform(259.1,216.2,0.618,0.618,0,0,0,280.8,431.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).to({alpha:1},6).to({_off:true},1).wait(1).to({_off:false,scaleX:1.59,scaleY:1.59,x:311.6,y:267.2},0).to({_off:true},1).wait(27));

	// Layer 11
	this.instance_17 = new lib.backhiht();
	this.instance_17.parent = this;
	this.instance_17.setTransform(220,231.5,1,1,0,0,0,350,224.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(14).to({_off:false},0).to({_off:true},1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(453,375.7,606.6,438.3);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bias_5_Canvas_atlas_.png", id:"Bias_5_Canvas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;