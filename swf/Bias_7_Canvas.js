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


(lib.shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AAACB0","#000000"],[0,1],0,-205,0,205.1).s().p("EgYoAgDQASgSPA/dQO+/dA5g5IPAAAQBSAAA7A7QA7A7AABSMAAAA89g");
	this.shape.setTransform(157.7,205.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shine, new cjs.Rectangle(0,0,315.4,410.2), null);


(lib.sheet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F2F5F9","#D6DDE3"],[0,1],-71.6,-124.2,71.9,124.3).s().p("A++4vMA4SgIKQGjVDhAZXMgxPATZQkm+KoA7fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sheet3, new cjs.Rectangle(-198.3,-210.5,396.7,421.2), null);


(lib.sheet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7DFEA","#D6DDE3"],[0,1],-229.1,0,229.1,0).s().p("A61VJQll10jY2FMA7WgKNQCkVhJrV3Mg7dAWjQhrl6hgl7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sheet2, new cjs.Rectangle(-229.1,-210.9,458.2,421.9), null);


(lib.sheet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E7ECF2","#D6DDE3"],[0,1],-219.6,0,219.7,0).s().p("EgiUgQyMA+SgLfQBORlFJRkMg6GAVaQnSyvjR6Vg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sheet1, new cjs.Rectangle(-219.6,-181,439.4,362), null);


(lib.frontbg6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(254,253,163,0.18)"],[0,1],-72.1,-77.7,71.8,77.5).s().p("EghPAfIMgCWgoxQgTjDB4i5QBwitCWguMA+6gMoQBUgMBVAZQi5HakFINQj0HrkIG7QkCGyjVEYQjdEih1AzMgpQAQcIgFglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontbg6, new cjs.Rectangle(-228,-202.9,456.1,405.8), null);


(lib.frontbg5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(102,51,0,0.231)","rgba(102,51,0,0.133)"],[0,1],-56.3,97.7,56.4,-97.6).s().p("A8oEsQAhj+EchqMAwvgP+QC2hEBcCcICDGUQAhBbg/AqQgmAQgzANMg9FAX7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontbg5, new cjs.Rectangle(-202,-110.3,404.1,220.7), null);


(lib.frontbg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.49)").s().p("EgkdgJ9QgXpmIDhOMAzKgJ0IKxh9QB0gVBhBPQhggjhgAOMg+6AMoQiWAuhwCtQh4C5ATDDMACWAoxQANBbgKAUIgOADIgYADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontbg3, new cjs.Rectangle(-233.5,-208.7,467.1,417.6), null);


(lib.frontbg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(12,60,90,0.392)","rgba(65,189,241,0.482)"],[0,1],-155.5,158.8,180.3,-175.2).s().p("EglDgJ9QgYpmIEhOMAzKgJ0IKxh9QB0gVBhBPQBTBDgHCVMgGCAioQgJBai4AvMg9GAX8IgPAFIgOADIgYADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontbg2, new cjs.Rectangle(-237.3,-208.7,474.7,417.6), null);


(lib.front_bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D7DF4").s().p("EglDgJ9QgYpmIEhOMAzKgJ0IKxh9QB0gVBhBPQBTBDgHCVMgGCAioQgJBai4AvMg9GAX8IgPAFIgOADIgYADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.front_bg1, new cjs.Rectangle(-237.3,-208.7,474.7,417.6), null);


(lib.foldershadow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.2)","rgba(30,61,64,0.082)","rgba(0,0,0,0)"],[0,0.549,1],-35.8,-45.7,12.6,53.7).s().p("EgpKAJ1QjqhDhbicQAeAPAhgBIAXgCQAKAFAEgJIAQgFMA9FgX7IdmF2Mg2rAdPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.foldershadow2, new cjs.Rectangle(-296,-112.3,592.1,224.6), null);


(lib.folder_shadow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.2)","rgba(30,61,64,0.082)","rgba(0,0,0,0)"],[0,0.549,1],-6.1,-7.6,13.1,39.4).s().p("A8HLgQjphDhcicQAfAPAggBIAYgCQAJAFAFgJIAPgFMA8zgXzQD5CzgHHFMgrTAVng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.folder_shadow1, new cjs.Rectangle(-212.4,-100.8,425,201.6), null);


(lib.backbg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.592)").s().p("ADzeYMgMWg/uQgYjoDlgxQi3BdAVCjMAMcBANQBhE9BUAgQAuAiAYgdIAIBwIgDAAQi1AAh8nYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backbg4, new cjs.Rectangle(-55,-241.5,110.1,483.2), null);


(lib.backbg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(102,51,0,0.192)","rgba(102,51,0,0.18)"],[0,1],136.2,-34.7,-144.4,41.4).s().p("A0uZ3MgJQgvvMAzLgI4QGNhbAkEOMACBAq9MgoBAPsQhJAchLAAQkEAAkUlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backbg3, new cjs.Rectangle(-191.9,-199.1,383.9,398.4), null);


(lib.backbg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,67,70,0.392)","rgba(99,165,207,0.482)"],[0,1],-129.8,47.2,194,-71).s().p("A4nfIMgMXg/uQgXjoDlgxIM2hdQCegWBVCTIB8DgQCOCsDhgRMAnHgFKQFQg7AlEcIAZHgMABIApGMg3/AV8IgPAFIgOADIgYADIgCAAQi1AAh9nYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backbg2, new cjs.Rectangle(-236.8,-246.3,473.8,492.8), null);


(lib.backbg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D7DF4").s().p("A4nfIMgMXg/uQgXjoDlgxIM2hdQCegWBVCTIB8DgQCOCsDhgRMAnHgFKQFQg7AlEcIAZHgMABIApGMg3/AV8IgPAFIgOADIgYADIgCAAQi1AAh9nYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backbg1, new cjs.Rectangle(-236.8,-246.3,473.8,492.8), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#57595C"],[0,1],0,-3.7,0,3.6).s().p("Az4AkQgPAAgKgKQgLgLAAgPQAAgOALgLQAKgKAPAAMAnwAAAQAPAAALAKQALALAAAOQAAAPgLALQgLAKgPAAg");
	this.shape.setTransform(154.7,146.1,0.616,0.727);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_1.setTransform(-233.9,146,0.616,0.727);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151116").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIgAgRgQQgHAGAAAKQAAAKAHAIQAIAHAJAAQALAAAHgHQAHgIAAgKQAAgKgHgGQgHgIgLAAQgJAAgIAIg");
	this.shape_2.setTransform(-233.7,147,0.616,0.727);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIg");
	this.shape_3.setTransform(-233.7,146.9,0.616,0.727);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#151116").s().p("AgfAfQgNgNABgSQgBgRANgOQANgMASAAQASAAANAMQANAOABARQgBASgNANQgNAOgSAAQgSAAgNgOgAgagaQgLALAAAPQAAAQALALQALAMAPAAQAQAAAMgMQALgLgBgQQABgPgLgLQgMgMgQAAQgPAAgLAMg");
	this.shape_4.setTransform(-233.7,147,0.616,0.727);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F24").s().p("AgfAfQgNgNABgSQgBgRANgOQANgMASAAQASAAANAMQANAOABARQgBASgNANQgNAOgSAAQgSAAgNgOgAgagaQgLALAAAPQAAAQALALQALAMAPAAQAQAAAMgMQALgLgBgQQABgPgLgLQgMgMgQAAQgPAAgLAMg");
	this.shape_5.setTransform(-233.7,147,0.616,0.727);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4C4B4F","#221F24"],[0,1],0,3.5,0,-3.5).s().p("AgcAeQgNgNAAgRQAAgQANgNQAMgMAQABQASgBALAMQANANAAAQQAAARgNANQgLAMgSgBQgQABgMgMg");
	this.shape_6.setTransform(-233.7,147,0.616,0.727);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#655231","#3A3223"],[0,1],0,-1,0,1).s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_7.setTransform(-223.5,146.1,0.616,0.727);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#151116").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIgAgQgQQgIAGAAAKQAAAKAIAIQAGAHAKAAQAKAAAIgHQAHgIAAgKQAAgKgHgGQgIgIgKAAQgKAAgGAIg");
	this.shape_8.setTransform(-223.3,147,0.616,0.727);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#151116").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_9.setTransform(-223.3,147,0.616,0.727);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#151116").s().p("AgfAfQgNgNABgSQgBgRANgOQAOgMARAAQATAAAMAMQAOAOAAARQAAASgOANQgMAOgTAAQgRAAgOgOgAgagaQgMALAAAPQAAAQAMALQALAMAPAAQAQAAALgMQALgLABgQQgBgPgLgLQgLgMgQAAQgPAAgLAMg");
	this.shape_10.setTransform(-223.3,147,0.616,0.727);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F24").s().p("AgfAfQgNgNABgSQgBgRANgOQAOgMARAAQATAAAMAMQAOAOAAARQAAASgOANQgMAOgTAAQgRAAgOgOgAgagaQgMALAAAPQAAAQAMALQALAMAPAAQAQAAALgMQALgLABgQQgBgPgLgLQgLgMgQAAQgPAAgLAMg");
	this.shape_11.setTransform(-223.3,147,0.616,0.727);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#4C4B4F","#221F24"],[0,1],0,3.5,0,-3.5).s().p("AgdAeQgLgNgBgRQABgQALgNQANgMAQABQASgBALAMQAMANAAAQQAAARgMANQgLAMgSgBQgQABgNgMg");
	this.shape_12.setTransform(-223.3,147,0.616,0.727);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#626367","#F7F7F8","#C8CACE","#CBCDD1","#D8DADC","#DCDEE0","#D8DADC","#CBCDD1","#C8CACE","#F7F7F8","#626367"],[0,0.012,0.051,0.09,0.298,0.498,0.702,0.91,0.949,0.988,1],421.7,0,-421.6,0).s().p("EhB4AB4IAAjvMCDwAAAIAADvg");
	this.shape_13.setTransform(0,146.3,0.616,0.727);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#AAACB0","#57595C","#202020"],[0,0.686,1],0,-6.6,0,6.7).s().p("Eg8mABDQhUAAiHhDIh3hCMCDwAAAQgzAihFAgQiNBDhcAAg");
	this.shape_14.setTransform(0,159.8,0.616,0.727);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#4E4F53").ss(0.5,0,0,4).p("AgqAMQAFAFAHAAIA9AAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAIg9AAQgHAAgFAFQgFAFAAAGQAAAHAFAFg");
	this.shape_15.setTransform(17.4,-152.2,0.587,0.727);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#57595C","#202020"],[0,1],0,1.6,0,-1.7).s().p("AgeARQgHAAgFgFQgFgFAAgHQAAgGAFgFQAFgFAHAAIA9AAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAg");
	this.shape_16.setTransform(17.4,-152.2,0.587,0.727);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#4E4F53").ss(0.5,0,0,4).p("AAfgQIg9AAQgHAAgFAFQgFAFAAAGQAAAHAFAFQAFAFAHAAIA9AAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAg");
	this.shape_17.setTransform(-18.6,-152.2,0.587,0.727);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#57595C","#202020"],[0,1],0,1.6,0,-1.7).s().p("AgeARQgHAAgFgFQgFgFAAgHQAAgGAFgFQAFgFAHAAIA9AAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAg");
	this.shape_18.setTransform(-18.6,-152.2,0.587,0.727);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#7A7D82","#4D4F54"],[0,1],0,-1.7,0,1.8).s().p("AgMANQgEgGAAgHQAAgGAEgFQAGgFAGgBQAHABAFAFQAGAFAAAGQAAAHgGAGQgFAEgHAAQgGAAgGgEg");
	this.shape_19.setTransform(-0.4,-151.8,0.387,0.727);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#484A4D"],[0,1],0,-3.1,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_20.setTransform(-0.4,-152.5,0.387,0.727);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#4E4F53").ss(0.5,0,0,4).p("AERAAQAAAXgRAPQgQAQgWAAIm0AAQgWAAgPgQQgRgPAAgXQAAgVARgQQAPgQAWAAIG0AAQAWAAAQAQQARAQAAAVg");
	this.shape_21.setTransform(-0.1,-152.5,0.387,0.727);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#57595C","#202020"],[0,1],0,-5.4,0,5.4).s().p("AjZA2QgXAAgPgQQgRgPABgXQgBgVARgQQAPgQAXAAIGzAAQAWAAARAQQAPAQAAAVQAAAXgPAPQgRAQgWAAg");
	this.shape_22.setTransform(-0.1,-152.5,0.387,0.727);

	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(203.3,-11.4,0.597,0.727,0,0,0,315.1,205.2);
	this.instance.alpha = 0.648;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("EgwlAgDMAAAg89QAAhSA7g7QA7g7BSAAMBa7AAAQBTAAA7A7QA6A7AABSMAAAA89g");
	this.shape_23.setTransform(0,-11.5,0.654,0.727);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#2A2B2E","#040506"],[0,1],0,-206.6,0,206.7).s().p("EgxGAgTMAAAg9dQABhSA6g7QA7g7BTAAMBb8AAAQBSAAA7A7QA6A7ABBSMAAAA9dg");
	this.shape_24.setTransform(0.1,-12.5,0.654,0.727);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DCDDE0","#CBCCD1"],[0,1],0,-208,0,208).s().p("EgxkAggMAAAg93QAAhTA7g6QA6g7BTAAMBc5AAAQBTAAA7A7QA6A6AABTMAAAA93g");
	this.shape_25.setTransform(0.2,-13.6,0.654,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.8,-164.7,519.6,329.4);


(lib.shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.folder_shadow1();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-10.7);
	this.instance.alpha = 0.531;

	this.instance_1 = new lib.foldershadow2();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadows, new cjs.Rectangle(-296,-112.3,592.1,224.6), null);


(lib.folder_front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontbg6
	this.instance = new lib.frontbg6();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// frontbg5
	this.instance_1 = new lib.frontbg5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.7,97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// frontbg3
	this.instance_2 = new lib.frontbg3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// frontbg2
	this.instance_3 = new lib.frontbg2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// front_bg1
	this.instance_4 = new lib.front_bg1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.folder_front, new cjs.Rectangle(-237.3,-208.7,474.7,417.6), null);


(lib.folder_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// backbg4
	this.instance = new lib.backbg4();
	this.instance.parent = this;
	this.instance.setTransform(-181.8,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// backbg3
	this.instance_1 = new lib.backbg3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.9,34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// backbg2
	this.instance_2 = new lib.backbg2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// backbg1
	this.instance_3 = new lib.backbg1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.folder_back, new cjs.Rectangle(-236.8,-246.3,473.8,492.8), null);


(lib.folder_orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// folder_front
	this.instance = new lib.folder_front();
	this.instance.parent = this;
	this.instance.setTransform(-113.1,105.5,0.498,0.498,0,0,0,-212.3,209.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-212.2,scaleX:0.45,scaleY:0.5,skewX:16.8,skewY:-0.8,x:-114.6},7).to({regX:-212.3,regY:209.4,scaleX:0.44,scaleY:0.4,skewX:28.4,skewY:-8,x:-115.4},7).wait(51).to({regX:-212.2,regY:209.2,scaleX:0.45,scaleY:0.5,skewX:16.8,skewY:-0.8,x:-114.6},7).to({regX:-212.3,scaleX:0.5,scaleY:0.5,skewX:0,skewY:0,x:-113.1},7).wait(1));

	// sheet3
	this.instance_1 = new lib.sheet3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10,-21.4,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({x:30.1,y:-41},9).wait(40).to({x:-4.3,y:-24.2},12).to({x:-10,y:-21.4},4).wait(1));

	// sheet1
	this.instance_2 = new lib.sheet1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.9,-1.6,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({x:-25.7,y:-81.7},9).wait(28).to({x:-34.5,y:-13},12).to({x:-35.9,y:-1.6},11).wait(1));

	// sheet2
	this.instance_3 = new lib.sheet2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62.3,-2.1,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({x:-37.6,y:-21.6},9).wait(18).to({x:-58.8,y:-4.9},12).to({x:-62.3,y:-2.1},16).wait(1));

	// folder_back
	this.instance_4 = new lib.folder_back();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-52.3,-17.5,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// shadows
	this.instance_5 = new lib.shadows();
	this.instance_5.parent = this;
	this.instance_5.setTransform(29,84.4,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-140.3,353,280.7);


// stage content:
(lib.Bias_7_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:19,step1:20,step2:21,step3:22,step4:23,step5:24,step6:25,step7:26,step8:27,step9:28,step10:29,step11:30,step12:31});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(4));

	// front
	this.instance = new lib.folder_orange();
	this.instance.parent = this;
	this.instance.setTransform(584.4,542.3,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-130.9,regY:65},0).wait(1).to({regX:-182.9,regY:90.8},0).wait(1).to({regX:-219.7,regY:109.1,x:584.5},0).wait(1).to({regX:-250.4,regY:124.3,x:584.4},0).wait(1).to({regX:-274.8,regY:136.4,x:584.5},0).wait(1).to({regX:-294.7,regY:146.3,x:584.4},0).wait(1).to({regX:-310.7,regY:154.3,x:584.5},0).wait(1).to({regX:-324.6,regY:161.1,x:584.4},0).wait(1).to({regX:-336.8,regY:167.2},0).wait(1).to({regX:-346.7,regY:172.1},0).wait(1).to({regX:-354.4,regY:176,x:584.5},0).wait(1).to({regX:-360.4,regY:178.9,x:584.4},0).wait(1).to({regX:-364.6,regY:181},0).wait(1).to({regX:-367.2,regY:182.3},0).wait(1).to({regX:0,regY:0,x:864.2,y:403.5},0).wait(20));

	// Layer 23
	this.instance_1 = new lib.shine();
	this.instance_1.parent = this;
	this.instance_1.setTransform(732.8,187.1,1.05,1.103,0,0,0,315,205.1);
	this.instance_1.alpha = 0.16;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(20));

	// Layer 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("Eg0dAe1MgABg9pMBo9AAAMAAAA9pg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:379.1,y:181.9}).wait(20));

	// Layer 26
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#1A1A1A","#191919","#191919"],[0,0.761,1],-334.1,-194.2,0,-334.1,-194.2,768.7).s().p("Eg0dAe1MgABg9pMBo9AAAMAAAA9pg");
	this.shape.setTransform(379.1,181.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(20));

	// Layer 27
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(377.5,204,1.759,1.518);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(455.5,279,914,694.9);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;