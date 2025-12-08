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


(lib.pagecurl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#FFFFFF","rgba(204,204,204,0)"],[0,0.29,1],-11.6,-12,-9.7,0).s().p("AnygTQACghAwgDIADAAQAWgBAUAIQAUAIASAMQCdgQLEg2IvnDFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pagecurl2, new cjs.Rectangle(-50,-9.9,100.1,19.8), null);


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


(lib.rocinja2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272627").s().p("AgDEnIAAgBIAVgWIAxAwICviyIgvguIAWgWIAAAAIBHBEIgWAXIgBgBIjEDJgAhgD4IAAAAIAAAAIgWAWIimigIAXgWIAAgBIAAAAIgYgWIAWgXIAYAYIgWAVIClChIAWgWIBHBFIAAAAIgWAWgAjxAUIgWAWIgYgWIAWgWIAAgBIAWgVIgYgYIA2g2IAAAAIAMgMIAAAAIBfBcIgWAWIhIhFIgrAtIBfBaIgWAWgADZBJIgwgtIAWgXIAAAAIAwAuIgWAXgACPgoIAWgWIAAgBIAwAvIgWAVIAAAAgAjTlUIAWgXIDVDQIAWgWIgXgYIArgsIAAAAIAWgWIBHBFIgVAWIgBAAIgvguIgsAtIAYAWIgWAXIBIBFIgWAWgAClg/IgvguIAWgVIgYgYIAWgWIAXAXIgVAXIAvAtIgWAWgAieieIgrAsIAAAAIgYgXIAsgsIhghdIAWgWIDXDQIgWAWgAkWk/IArgtIAYAYIgsAsgAjTlUg");
	this.shape.setTransform(28.8,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdEbIgWAWIABABIgBAAIhGhFIgWAWIilihIAWgVIgYgYIAAAAIAWgWIBHBEIAWgWIhfhaIArgtIBIBEIAWgVIhfhcIAAAAIAsgsIBfBcIAWgWIjXjQIAsgsIE1ErIAWgWIhIhFIAWgXIgYgWIAsgtIAvAuIABAAIAAAAIgWAWIAYAYIgWAVIAvAuIAAABIgWAWIAwAtIgWAXIAwAtIAAABIgWAWIAvAuIivCygAhVEDIAAAAIAAAAgAj6BiIAAAAIAAABgAj6BigADKAQIAAAAIAAAAgADKAQg");
	this.shape_1.setTransform(27.7,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.6,72.9);


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


(lib.CheckBox_upIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1.3,4.6,-1.3,-4.3).s().p("AhPArIAAhVICfAAIAABVg");
	this.shape.setTransform(9.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-1.3,9.3,-1.3,-8.9).s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_1.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],2,7.9,2,-9.2).s().p("AhcBdIAAi5IC5AAIAAC5gAhPBQICfAAIAAifIifAAg");
	this.shape_2.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.CheckBox_upIcon, new cjs.Rectangle(0,0,18.7,18.7), null);


(lib.CheckBox_selectedIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAtIgWgzIAUgBIAPAeIAqhDIAWAAIgMAOIgqBLg");
	this.shape.setTransform(5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CheckBox_selectedIcon, new cjs.Rectangle(0,0,10,9), null);


(lib.CheckBox_disabledIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1.3,4.6,-1.3,-4.3).s().p("AhOArIAAhVICdAAIAABVg");
	this.shape.setTransform(9.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-1.3,9.3,-1.3,-8.8).s().p("AhOBQIAAieICdAAIAACeg");
	this.shape_1.setTransform(9.4,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-1.3,9.3,-1.3,-8.8).s().p("AhOBQIAAieICdAAIAACeg");
	this.shape_2.setTransform(9.4,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#577283").s().p("AhcBdIAAi5IC5AAIAAC5gAhOBQICdAAIAAieIidAAg");
	this.shape_3.setTransform(9.4,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CheckBox_disabledIcon, new cjs.Rectangle(0.1,0,18.6,18.6), null);


(lib.CheckBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.CheckBox, null, null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:185.2,y:153.1,alpha:1},6).to({x:157.8,y:110.3},6).to({x:139.5,y:81.8},6).to({x:130.4,y:67.5},6).to({x:129.6,y:66.2},1).wait(1).to({x:129.2,y:65.7},0).wait(12).to({x:128.7,y:69.9},0).wait(2).to({x:129.2,y:65.7},0).wait(4).to({x:-68.8,y:-69.3,alpha:0},14).to({_off:true},1).wait(11).to({_off:false,x:181.5,y:551.4},0).to({x:165.5,y:528.4,alpha:1},9).wait(1));

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


(lib.flcontrolsCheckBox_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.disabledIcon = new lib.CheckBox_disabledIcon();
	this.disabledIcon.parent = this;
	this.disabledIcon.setTransform(0,0.1,1,1,0,0,0,9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.disabledIcon).wait(1));

}).prototype = getMCSymbolPrototype(lib.flcontrolsCheckBox_disabled, new cjs.Rectangle(-9.3,-9.2,18.6,18.6), null);


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


(lib.CheckBox_selectedUpIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.CheckBox_selectedIcon();
	this.instance.parent = this;
	this.instance.setTransform(10.7,7.4,1.333,1.333,0,0,0,5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1.3,4.6,-1.3,-4.3).s().p("AhPArIAAhVICfAAIAABVg");
	this.shape.setTransform(9.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-1.3,9.3,-1.3,-8.9).s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_1.setTransform(9.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],2,7.9,2,-9.3).s().p("AhcBdIAAi5IC5AAIAAC5gAhPBQICfAAIAAifIifAAg");
	this.shape_2.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.CheckBox_selectedUpIcon, new cjs.Rectangle(0,0,18.7,18.7), null);


(lib.CheckBox_selectedDisabledIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.CheckBox_selectedIcon();
	this.instance.parent = this;
	this.instance.setTransform(10.7,7.4,1.326,1.333,0,0,0,5,4.5);
	this.instance.filters = [new cjs.ColorFilter(0.52, 0.52, 0.52, 1, 61.44, 94.56, 115.68, 0)];
	this.instance.cache(-2,-2,14,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1.3,4.6,-1.3,-4.3).s().p("AhOArIAAhVICeAAIAABVg");
	this.shape.setTransform(9.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-1.3,9.3,-1.3,-8.9).s().p("AhOBQIAAifICeAAIAACfg");
	this.shape_1.setTransform(9.3,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],2,7.9,2,-9.3).s().p("AhcBdIAAi5IC5AAIAAC5gAhOBQICeAAIAAifIieAAg");
	this.shape_2.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.CheckBox_selectedDisabledIcon, new cjs.Rectangle(0,0,18.6,18.7), null);


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

	this.instance_2 = new lib.lettera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.1,-83,1,1,0,0,0,399.3,252);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg52AfHUgHFgmyAGlgfJUA7jAFOA8LgFOUABRA9HgJfAPvQtfAztfAAUgqBAAAgqBgHug");
	this.shape.setTransform(69.9,-239.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhRtMB8NAAAMAAABRtg");
	this.shape_1.setTransform(67.2,-308.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg+DAo3MAAAhA+QgWtYBQAWIVcjtMBl2AAAMAAABRtg");
	this.shape_2.setTransform(66.9,-308.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg+EAo3MAAAg+tQgVujBVgWIYzkHMBiaAAAMAAABRtg");
	this.shape_3.setTransform(67,-308.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg+EAo3MAAAg8lIgEg5IAAs9QAhi0BSAJIbKknMBfUAAAMAAABRtg");
	this.shape_4.setTransform(67,-308.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAg4qIABAAIAAxAQApjNBUALIeBlBMBcOAAAMAAABRtg");
	this.shape_5.setTransform(67.2,-308.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAg4KIAAgLIAHAAIAAv3QAjkNBaASMAgpgFmMBZgAAAMAAABRtg");
	this.shape_6.setTransform(67.2,-308.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhG+QAekzBcAJMAkPgGFMBWEAAAMAAABRtg");
	this.shape_7.setTransform(67.2,-308.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Eg+GAo3MAAAhFlQAEl0CpAFMAmhgGZMBS/AAAMAAABRtg");
	this.shape_8.setTransform(67.2,-308.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280,-78.2,535,304);


(lib.flcontrolsCheckBox_selectedDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.selectedDisabledIcon = new lib.CheckBox_selectedDisabledIcon();
	this.selectedDisabledIcon.parent = this;
	this.selectedDisabledIcon.setTransform(0.1,0.1,1,1,0,0,0,9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.selectedDisabledIcon).wait(1));

}).prototype = getMCSymbolPrototype(lib.flcontrolsCheckBox_selectedDisabled, new cjs.Rectangle(-9.2,-9.2,18.6,18.7), null);


(lib.flcontrolsCheckBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function toggleButton(checkBox, uncheckedImg, checkedImg, initialState) { 
			var checkClick = function(newState) { 
				checkBox.checked = newState; 
				uncheckedImg.visible = !newState; 
				checkedImg.visible = newState; 
			}; 
			checkBox.checkClick = checkClick;
			checkBox.checked = initialState; 
			uncheckedImg.visible = !initialState; 
			uncheckedImg.cursor = 'pointer'; 
			checkedImg.visible = initialState; 
			checkedImg.cursor = 'pointer'; 
			uncheckedImg.addEventListener('click', function() { checkClick(true); }); 
			var uncheckedBounds = uncheckedImg.getBounds(); 
			if (uncheckedBounds != null) { 
				var uncheckedHit = new createjs.Shape(); 
				uncheckedHit.graphics.beginFill('#000').drawRect(0, 0, uncheckedBounds.width, uncheckedBounds.height); 
				uncheckedImg.hitArea = uncheckedHit; 
			} 
			checkedImg.addEventListener('click', function() { checkClick(false); }); 
			var checkedBounds = checkedImg.getBounds(); 
			if (checkedBounds != null) { 
				var checkedHit = new createjs.Shape(); 
				checkedHit.graphics.beginFill('#000').drawRect(0, 0, checkedBounds.width, checkedBounds.height); 
				checkedImg.hitArea = checkedHit; 
			} 
		} 
		function checkAddedToStage(self) { 
			if (typeof self.checkClick === 'undefined') {
				new toggleButton(self, self.upIcon, self.selectedUpIcon, false); 
			} else {
				self.checkClick(false) 
			}
		} 
		this.addEventListener('initCheckbox', function(event) { checkAddedToStage(event.target); });
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.selectedUpIcon = new lib.CheckBox_selectedUpIcon();
	this.selectedUpIcon.parent = this;
	this.selectedUpIcon.setTransform(0,0.1,1,1,0,0,0,9.3,9.3);

	this.upIcon = new lib.CheckBox_upIcon();
	this.upIcon.parent = this;
	this.upIcon.setTransform(0,0.1,1,1,0,0,0,9.3,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.upIcon},{t:this.selectedUpIcon}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flcontrolsCheckBox, new cjs.Rectangle(-9.3,-9.2,18.7,18.7), null);


// stage content:
(lib.Bias_6_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:6,step1:7,step2:8,step3:9,step4:10,step5:11,step6:12,step7:13,step8:14,step9:15,step10:16});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
		var self = this;	self.Layer_14_fl_controls_CheckBox.name = '';
		self.Layer_14_fl_controls_CheckBox_1.name = '';
		self.Layer_14_fl_controls_CheckBox_2.name = '';
		self.Layer_14_fl_controls_CheckBox_3.name = '';
		self.Layer_14_fl_controls_CheckBox_4.name = '';
		self.Layer_14_fl_controls_CheckBox_5.name = '';
		self.Layer_14_fl_controls_CheckBox_6.name = '';
		    setTimeout(function() {		self.Layer_14_fl_controls_CheckBox.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_1.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_2.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_3.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_4.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_5.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_6.dispatchEvent('initCheckbox');
			}, 0);
	}
	this.frame_7 = function() {
		this.stop();
		var self = this;	self.Layer_14_fl_controls_CheckBox_selectedDisabled.name = '';
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_1.name = '';
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_2.name = '';
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_3.name = '';
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_4.name = '';
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_5.name = '';
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_6.name = '';
		    setTimeout(function() {		self.Layer_14_fl_controls_CheckBox_selectedDisabled.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_1.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_2.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_3.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_4.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_5.dispatchEvent('initCheckbox');
		self.Layer_14_fl_controls_CheckBox_selectedDisabled_6.dispatchEvent('initCheckbox');
			}, 0);
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(2));

	// board
	this.instance = new lib.klikklikcopy();
	this.instance.parent = this;
	this.instance.setTransform(572.5,160.6,0.437,0.437,0,0,0,119,71);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},1).wait(11));

	// Layer 14
	this.Layer_14_fl_controls_CheckBox = new lib.flcontrolsCheckBox();
	this.Layer_14_fl_controls_CheckBox.parent = this;
	this.Layer_14_fl_controls_CheckBox.setTransform(577.3,334.3);

	this.Layer_14_fl_controls_CheckBox_1 = new lib.flcontrolsCheckBox();
	this.Layer_14_fl_controls_CheckBox_1.parent = this;
	this.Layer_14_fl_controls_CheckBox_1.setTransform(577.3,306.3);

	this.Layer_14_fl_controls_CheckBox_2 = new lib.flcontrolsCheckBox();
	this.Layer_14_fl_controls_CheckBox_2.parent = this;
	this.Layer_14_fl_controls_CheckBox_2.setTransform(577.3,276.3);

	this.Layer_14_fl_controls_CheckBox_3 = new lib.flcontrolsCheckBox();
	this.Layer_14_fl_controls_CheckBox_3.parent = this;
	this.Layer_14_fl_controls_CheckBox_3.setTransform(577.3,248.3);

	this.Layer_14_fl_controls_CheckBox_4 = new lib.flcontrolsCheckBox();
	this.Layer_14_fl_controls_CheckBox_4.parent = this;
	this.Layer_14_fl_controls_CheckBox_4.setTransform(577.3,219.3);

	this.Layer_14_fl_controls_CheckBox_5 = new lib.flcontrolsCheckBox();
	this.Layer_14_fl_controls_CheckBox_5.parent = this;
	this.Layer_14_fl_controls_CheckBox_5.setTransform(577.3,190.3);

	this.Layer_14_fl_controls_CheckBox_6 = new lib.flcontrolsCheckBox();
	this.Layer_14_fl_controls_CheckBox_6.parent = this;
	this.Layer_14_fl_controls_CheckBox_6.setTransform(577.3,161.3);

	this.instance_1 = new lib.CheckBox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(618.5,335.6,1,1,0,0,0,50,11);

	this.instance_2 = new lib.CheckBox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(618.5,307.6,1,1,0,0,0,50,11);

	this.instance_3 = new lib.CheckBox();
	this.instance_3.parent = this;
	this.instance_3.setTransform(618.5,278.1,1,1,0,0,0,50,11);

	this.instance_4 = new lib.CheckBox();
	this.instance_4.parent = this;
	this.instance_4.setTransform(618.5,249.6,1,1,0,0,0,50,11);

	this.instance_5 = new lib.CheckBox();
	this.instance_5.parent = this;
	this.instance_5.setTransform(618.5,220.6,1,1,0,0,0,50,11);

	this.instance_6 = new lib.CheckBox();
	this.instance_6.parent = this;
	this.instance_6.setTransform(618.5,192.1,1,1,0,0,0,50,11);

	this.instance_7 = new lib.CheckBox();
	this.instance_7.parent = this;
	this.instance_7.setTransform(618.5,163.1,1,1,0,0,0,50,11);

	this.Layer_14_fl_controls_CheckBox_selectedDisabled = new lib.flcontrolsCheckBox_selectedDisabled();
	this.Layer_14_fl_controls_CheckBox_selectedDisabled.parent = this;
	this.Layer_14_fl_controls_CheckBox_selectedDisabled.setTransform(577.3,334.3);

	this.Layer_14_fl_controls_CheckBox_selectedDisabled_1 = new lib.flcontrolsCheckBox_selectedDisabled();
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_1.parent = this;
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_1.setTransform(577.3,306.3);

	this.Layer_14_fl_controls_CheckBox_disabled = new lib.flcontrolsCheckBox_disabled();
	this.Layer_14_fl_controls_CheckBox_disabled.parent = this;
	this.Layer_14_fl_controls_CheckBox_disabled.setTransform(577.3,276.3);

	this.Layer_14_fl_controls_CheckBox_selectedDisabled_2 = new lib.flcontrolsCheckBox_selectedDisabled();
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_2.parent = this;
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_2.setTransform(577.3,248.3);

	this.Layer_14_fl_controls_CheckBox_selectedDisabled_3 = new lib.flcontrolsCheckBox_selectedDisabled();
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_3.parent = this;
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_3.setTransform(577.3,219.3);

	this.Layer_14_fl_controls_CheckBox_disabled_1 = new lib.flcontrolsCheckBox_disabled();
	this.Layer_14_fl_controls_CheckBox_disabled_1.parent = this;
	this.Layer_14_fl_controls_CheckBox_disabled_1.setTransform(577.3,190.3);

	this.Layer_14_fl_controls_CheckBox_selectedDisabled_4 = new lib.flcontrolsCheckBox_selectedDisabled();
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_4.parent = this;
	this.Layer_14_fl_controls_CheckBox_selectedDisabled_4.setTransform(577.3,161.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.Layer_14_fl_controls_CheckBox_6},{t:this.Layer_14_fl_controls_CheckBox_5},{t:this.Layer_14_fl_controls_CheckBox_4},{t:this.Layer_14_fl_controls_CheckBox_3},{t:this.Layer_14_fl_controls_CheckBox_2},{t:this.Layer_14_fl_controls_CheckBox_1},{t:this.Layer_14_fl_controls_CheckBox}]},6).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.Layer_14_fl_controls_CheckBox_selectedDisabled_4},{t:this.Layer_14_fl_controls_CheckBox_disabled_1},{t:this.Layer_14_fl_controls_CheckBox_selectedDisabled_3},{t:this.Layer_14_fl_controls_CheckBox_selectedDisabled_2},{t:this.Layer_14_fl_controls_CheckBox_disabled},{t:this.Layer_14_fl_controls_CheckBox_selectedDisabled_1},{t:this.Layer_14_fl_controls_CheckBox_selectedDisabled}]},1).to({state:[]},1).wait(10));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("A8cLPIAAkgMA45AAAIAAEggA8cCQIAAkfMA45AAAIAAEfgA8cmuIAAkgMA45AAAIAAEgg");
	this.shape.setTransform(742.8,249.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E0E0").s().p("A8cPuIAAkfMA45AAAIAAEfgA8cGvIAAkfMA45AAAIAAEfgA8ciPIAAkfMA45AAAIAAEfgA8crOIAAkfMA45AAAIAAEfg");
	this.shape_1.setTransform(742.8,249.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[]},2).wait(10));

	// actions
	this.instance_8 = new lib.GS_paper_anim_paper_start();
	this.instance_8.parent = this;
	this.instance_8.setTransform(529,61,0.537,0.942,0,0,0,-332.1,-569.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1091.5,847.7,290,290);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 31,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;