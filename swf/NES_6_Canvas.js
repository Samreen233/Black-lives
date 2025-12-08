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


(lib.punkts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape.setTransform(9.9,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_1.setTransform(9.9,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_2.setTransform(9.9,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(208,208,208,0.929)").s().p("AhHBIQgdgegBgqQABgpAdgeQAegdApgBQAqABAeAdQAdAeABApQgBAqgdAeQgeAdgqABQgpgBgegdg");
	this.shape_3.setTransform(9.9,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,211,211,0.859)").s().p("AhJBKQgegfAAgrQAAgqAegfQAfgeAqAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAQgqAAgfgeg");
	this.shape_4.setTransform(9.9,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(215,215,215,0.784)").s().p("AhLBMQgfggAAgsQAAgrAfggQAggfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgggfg");
	this.shape_5.setTransform(9.9,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(219,219,219,0.714)").s().p("AhMBNQgggggBgtQABgsAgggQAgggAsgBQAtABAgAgQAgAgABAsQgBAtggAgQggAggtABQgsgBggggg");
	this.shape_6.setTransform(9.9,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(222,222,222,0.643)").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_7.setTransform(9.9,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(226,226,226,0.573)").s().p("AhQBRQghghAAgwQAAgvAhghQAhghAvAAQAwAAAhAhQAhAhAAAvQAAAwghAhQghAhgwAAQgvAAghghg");
	this.shape_8.setTransform(9.9,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(230,230,230,0.502)").s().p("AhSBTQgigjAAgwQAAgwAigiQAigiAwAAQAwAAAjAiQAiAiAAAwQAAAwgiAjQgjAigwAAQgwAAgigig");
	this.shape_9.setTransform(9.9,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(233,233,233,0.427)").s().p("AhUBVQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_10.setTransform(9.9,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(237,237,237,0.357)").s().p("AhVBWQglgkABgyQgBgxAlgkQAkglAxABQAygBAkAlQAlAkgBAxQABAyglAkQgkAlgygBQgxABgkglg");
	this.shape_11.setTransform(9.9,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(240,240,240,0.286)").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape_12.setTransform(9.9,9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(244,244,244,0.216)").s().p("AhaBbQgkgmgBg1QABg0AkgmQAmgkA0gBQA1ABAmAkQAkAmABA0QgBA1gkAmQgmAkg1ABQg0gBgmgkg");
	this.shape_13.setTransform(9.9,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(248,248,248,0.141)").s().p("AhcBdQgmgnAAg2QAAg1AmgnQAngmA1AAQA2AAAnAmQAmAngBA1QABA2gmAnQgnAmg2gBQg1ABgngmg");
	this.shape_14.setTransform(9.9,9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(251,251,251,0.071)").s().p("AhdBeQgngnAAg3QAAg2AngnQAngnA2AAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_15.setTransform(9.9,9.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0)").s().p("AhfBgQgogoAAg4QAAg3AogoQAogoA3AAQA4AAAoAoQAoAoAAA3QAAA4goAoQgoAog4AAQg3AAgogog");
	this.shape_16.setTransform(9.9,9.9);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(14).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,19.8);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1A76B8","#1A76B8"],[0,1],-34.1,1.2,28.8,1.2).s().p("Aj4kzIHxBrIgSH8g");
	this.shape.setTransform(24.9,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,49.9,61.6), null);


// stage content:
(lib.NES_6_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:9,step1:14,step2:19,step3:24,step4:29,step5:34,step6:39,step7:44,step8:49,step9:54,step10:59});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(5).call(this.frame_54).wait(5).call(this.frame_59).wait(10));

	// Layer 6
	this.instance = new lib.punkts();
	this.instance.parent = this;
	this.instance.setTransform(-66.8,372.3,1,1,0,0,0,9.9,9.9);

	this.instance_1 = new lib.punkts();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_2 = new lib.punkts();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_3 = new lib.punkts();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_4 = new lib.punkts();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_5 = new lib.punkts();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_6 = new lib.punkts();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_7 = new lib.punkts();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_8 = new lib.punkts();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.instance_9 = new lib.punkts();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3.6,334.7,1,1,0,0,0,9.9,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:-66.8,y:372.3}}]},9).to({state:[{t:this.instance_1,p:{x:-3.6,y:334.7}},{t:this.instance,p:{x:-66.8,y:372.3}}]},5).to({state:[{t:this.instance_2,p:{x:-3.6,y:334.7}},{t:this.instance_1,p:{x:-66.8,y:372.3}},{t:this.instance,p:{x:55.2,y:293.7}}]},5).to({state:[{t:this.instance_3,p:{x:-3.6,y:334.7}},{t:this.instance_2,p:{x:-66.8,y:372.3}},{t:this.instance_1,p:{x:55.2,y:293.7}},{t:this.instance,p:{x:109.8,y:251.2}}]},5).to({state:[{t:this.instance_4,p:{x:-3.6,y:334.7}},{t:this.instance_3,p:{x:-66.8,y:372.3}},{t:this.instance_2,p:{x:55.2,y:293.7}},{t:this.instance_1,p:{x:109.8,y:251.2}},{t:this.instance,p:{x:161.8,y:206.2}}]},5).to({state:[{t:this.instance_5,p:{x:-3.6,y:334.7}},{t:this.instance_4,p:{x:-66.8,y:372.3}},{t:this.instance_3,p:{x:55.2,y:293.7}},{t:this.instance_2,p:{x:109.8,y:251.2}},{t:this.instance_1,p:{x:161.8,y:206.2}},{t:this.instance,p:{x:206.4,y:164.5}}]},5).to({state:[{t:this.instance_6,p:{x:-3.6,y:334.7}},{t:this.instance_5,p:{x:-66.8,y:372.3}},{t:this.instance_4,p:{x:55.2,y:293.7}},{t:this.instance_3,p:{x:109.8,y:251.2}},{t:this.instance_2,p:{x:161.8,y:206.2}},{t:this.instance_1,p:{x:206.4,y:164.5}},{t:this.instance,p:{x:250.2,y:120.3}}]},5).to({state:[{t:this.instance_7,p:{x:-3.6,y:334.7}},{t:this.instance_6,p:{x:-66.8,y:372.3}},{t:this.instance_5,p:{x:55.2,y:293.7}},{t:this.instance_4,p:{x:109.8,y:251.2}},{t:this.instance_3,p:{x:161.8,y:206.2}},{t:this.instance_2,p:{x:206.4,y:164.5}},{t:this.instance_1,p:{x:250.2,y:120.3}},{t:this.instance,p:{x:286.1,y:80.2}}]},5).to({state:[{t:this.instance_8,p:{x:-3.6,y:334.7}},{t:this.instance_7,p:{x:-66.8,y:372.3}},{t:this.instance_6,p:{x:55.2,y:293.7}},{t:this.instance_5,p:{x:109.8,y:251.2}},{t:this.instance_4,p:{x:161.8,y:206.2}},{t:this.instance_3,p:{x:206.4,y:164.5}},{t:this.instance_2,p:{x:250.2,y:120.3}},{t:this.instance_1,p:{x:286.1,y:80.2}},{t:this.instance,p:{x:325.4,y:33.6}}]},5).to({state:[{t:this.instance_9},{t:this.instance_8,p:{x:-66.8,y:372.3}},{t:this.instance_7,p:{x:55.2,y:293.7}},{t:this.instance_6,p:{x:109.8,y:251.2}},{t:this.instance_5,p:{x:161.8,y:206.2}},{t:this.instance_4,p:{x:206.4,y:164.5}},{t:this.instance_3,p:{x:250.2,y:120.3}},{t:this.instance_2,p:{x:286.1,y:80.2}},{t:this.instance_1,p:{x:325.4,y:33.6}},{t:this.instance,p:{x:356.2,y:-9.8}}]},5).wait(15));

	// Layer 9
	this.instance_10 = new lib.arrow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(10,322.9,1,1,3.5,0,0,24.9,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({rotation:0,guide:{path:[10,322.8,33,307,55.3,290.6]}},5).to({rotation:-0.9,guide:{path:[55.3,290.6,73.6,277.1,91.3,263.2]}},5).to({rotation:-3.5,guide:{path:[91.3,263.2,119.8,240.8,146.9,217.3]}},5).to({rotation:-7.2,guide:{path:[146.9,217.3,180,188.6,211,158.2]}},5).to({rotation:-8.7,guide:{path:[211,158.2,232.3,137.4,252.7,115.7]}},5).to({regX:25,regY:30.7,rotation:-11.2,guide:{path:[252.7,115.7,268.9,98.6,284.4,80.9]}},5).to({regX:25.2,rotation:-13.7,guide:{path:[284.4,80.9,302.3,60.5,319.4,39.6]}},5).to({regX:25.1,regY:30.9,rotation:-15.2,guide:{path:[319.4,39.5,337.5,17.3,354.8,-5.6]}},5).to({regX:24.9,regY:30.8,rotation:-17.9,guide:{path:[354.8,-5.7,371.6,-28,387.6,-51.2]}},5).wait(15));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3373A1","#1178C2"],[0,1],-201.7,-221.6,625.2,-221.6).s().p("A/ILqUAg0gLmAamgR/IBoCPQAjAvARAVQAWAaAMASIARAeUgcAATUgjBAMGg");
	this.shape.setTransform(-178.3,422.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3373A1","#1178C2"],[0,1],-206,-218.2,620.9,-218.2).s().p("A/zMNUAhzgL8AbMgSvIABAEIACALQABAHAKALIBPBXIAfAkQARAYAbA0QANAaAGAQIAFAVUgcgAT8gj3AMag");
	this.shape_1.setTransform(-174,418.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3373A1","#1178C2"],[0,1],-210.6,-215.2,616.3,-215.2).s().p("EgghAMrUAiogMQAbtgTXIABABIAvA7QA2BDAaAlIAZAnQAYApAVAtUgdCAUqgkxAMug");
	this.shape_2.setTransform(-169.4,415.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3373A1","#1178C2"],[0,1],-214.6,-212.3,612.3,-212.3).s().p("EghJANHUAjcgMhAcLgT/IANASIBmCNQASAZAeA1IAhA2UgdfAVRglkAM/g");
	this.shape_3.setTransform(-165.5,413.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3373A1","#1178C2"],[0,1],-219.4,-209.7,607.5,-209.7).s().p("Egh5ANiUAkKgMyAcmgUjIAqA1QAeAlAMATIAPAXQAIAOAHAJQAMASAZAYIAoApQAMANAQAWUgeCAWBgmhANVg");
	this.shape_4.setTransform(-160.6,410.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3373A1","#1178C2"],[0,1],-224.9,-205.6,602,-205.6).s().p("EgiwAOKUAlRgNKAdQgVbIASAVIBSBdQA/BJA1BWUgepAW6gnoANsg");
	this.shape_5.setTransform(-155.2,406.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3373A1","#1178C2"],[0,1],-228.9,-203,598,-203).s().p("EgjYAOlUAl/gNbAdpgWAIAaAhIC7DdQAGAHAGAEUgfFAXlgocAN/g");
	this.shape_6.setTransform(-151.2,403.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#3373A1","#1178C2"],[0,1],-231.1,-200.7,595.8,-200.7).s().p("EgjuAO8UAmngNpAd/gWgIAPATQAKAOAVAVIAgAjQANAPATAcIAdAoQAzBJARAgIAAABUgfUAX9go5AOIg");
	this.shape_7.setTransform(-149,401.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3373A1","#1178C2"],[0,1],-235.4,-197.9,591.5,-197.9).s().p("EgkZAPYUAnXgN6AeZgXHQAvA0AoA8QAQAZAKAMIAmApQAUAVAbAgIAVAZUgfyAYrgpxAOcg");
	this.shape_8.setTransform(-144.7,398.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3373A1","#1178C2"],[0,1],-238.5,-194.9,588.4,-194.9).s().p("Egk4AP1UAoIgOLAe0gXwIAkAmIA5BBQAoAtAQAcQALATATAoQAKASAQAYUggHAZOgqaAOqg");
	this.shape_9.setTransform(-141.5,395.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#3373A1","#1178C2"],[0,1],-242.8,-192.2,584.1,-192.2).s().p("EgljAQRUAo3gOcAfMgYXIAUAQQARANAKAKQAMANAPAVIAZAjQAPAWA0A/QAiApAUAfUggkAZ+grTAO+g");
	this.shape_10.setTransform(-137.3,392.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#3373A1","#1178C2"],[0,1],-248.1,-187.7,578.8,-187.7).s().p("EgmYAQ+UAqCgO3Af0gZWQBEBJA3BOQANARAJALIAXAZIATAgIAYAiUghIAa7gsZAPWg");
	this.shape_11.setTransform(-132,388.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3373A1","#1178C2"],[0,1],-253.3,-183.2,573.6,-183.2).s().p("EgnMARqUArLgPQAgZgaVIAJAKIAPAUQAJANAQAQIAbAbQAiAlAvBKQAcAtAUAeUghpAb5gtgAPug");
	this.shape_12.setTransform(-126.7,384);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#3373A1","#1178C2"],[0,1],-259.1,-178.7,567.8,-178.7).s().p("EgoGASXUAsUgPqAg9gbVQApAoAoAxQBHBVA8BbUgiPAc+guuAQKg");
	this.shape_13.setTransform(-120.9,379.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#3373A1","#1178C2"],[0,1],-264.7,-174.2,562.2,-174.2).s().p("Ego+ATFUAtdgQEAhggcXQAbAbApA0IBYByQAjAsAZAXUgiyAeEgv7AQlg");
	this.shape_14.setTransform(-115.3,374.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#3373A1","#1178C2"],[0,1],-270.2,-169.7,556.7,-169.7).s().p("Egp1ATyUAulgQeAiBgdXQBEBHAyAyIAhAiQARATAZAlIAdArUgjUAfKgxJAQ/g");
	this.shape_15.setTransform(-109.8,370.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#3373A1","#1178C2"],[0,1],-276.5,-164.1,550.4,-164.1).s().p("Egq0AUqUAv+gQ9AiqgeoIAEAFQASAWAgAdIAsApIAMARQAyBHA5BFUgj5AgcgygARdg");
	this.shape_16.setTransform(-103.5,364.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#3373A1","#1178C2"],[0,1],-283.9,-158.4,543,-158.4).s().p("Egr+AVjUAxWgRcAjRgf7QAgAaArAlIAxAqQAyAqAWAbIAiAuIAIAMUgklAh/g0IASCg");
	this.shape_17.setTransform(-96.1,359.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#3373A1","#1178C2"],[0,1],-289.6,-153,537.3,-153).s().p("Egs3AWYUAypgR5AjzghIQANAKANANIA7A7QAcAcA8A0QAoAkAWAiIgZAYIhWBQUgklAiBg0LASCg");
	this.shape_18.setTransform(-90.5,353.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#3373A1","#1178C2"],[0,1],-295.5,-146.9,531.4,-146.9).s().p("EgtyAXVUA0FgSZAkZgiiQAaAYARASIAnAvQBCBRBLBGIiQCKIhVBQUgkmAiBg0KASCg");
	this.shape_19.setTransform(-84.5,347.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#3373A1","#1178C2"],[0,1],-302,-141,524.9,-141).s().p("EguzAYQUA1egS5Ak7gj4IATAUIAqAjQAkAeApArQAYAZAvA1IAVAYQiHCHiLCDIhVBRUgklAiAg0LASDg");
	this.shape_20.setTransform(-78,341.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#3373A1","#1178C2"],[0,1],-306.7,-136.3,520.2,-136.3).s().p("EgviAY/UA2jgTRAlVgk+IAIAGIA9AyQAQANAMAMQAOAQAaAhQAMAPAmAlQAbAbAPAUQi0C3i8CyIhVBQUgkmAiBg0KASCg");
	this.shape_21.setTransform(-73.3,337.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#3373A1","#1178C2"],[0,1],-310.4,-131.9,516.5,-131.9).s().p("EgwHAZsUA3lgTpAltgmAIAWATIApAoQBTBXBDBiQjYDfjhDUIhWBRUgklAiBg0LASCg");
	this.shape_22.setTransform(-69.7,332.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#3373A1","#1178C2"],[0,1],-314.7,-128.7,512.2,-128.7).s().p("EgwyAaLUA4SgT5Al9gmuIBOBRQAJAJAcAXIB7BmQkBEPkPEAIhVBQUgkmAiBg0KASCg");
	this.shape_23.setTransform(-65.3,329.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#3373A1","#1178C2"],[0,1],-319.5,-123.9,507.4,-123.9).s().p("EgxiAa8UA5ZgUSAmVgn3QBBA0BjBcIBLBEQkuFDlBEwIhWBRUgklAiBg0LASCg");
	this.shape_24.setTransform(-60.6,324.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#3373A1","#1178C2"],[0,1],-322.9,-119.7,504,-119.7).s().p("EgyEAbmUA6VgUnAmpgo2QBPBBBFBIQAmAnApAvQlOFqllFSIhWBRUgklAiBg0LASCg");
	this.shape_25.setTransform(-57.2,320.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#3373A1","#1178C2"],[0,1],-326.2,-116.9,500.7,-116.9).s().p("EgylAcBUA68gU0Am2gpfQAeAbAlAgQArAlAXARIA0ApQAeAXAUAVIAGAHQltGRmJF0IhVBQUgklAiBg0LASCg");
	this.shape_26.setTransform(-53.8,317.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#3373A1","#1178C2"],[0,1],-329.7,-112.5,497.2,-112.5).s().p("EgzIAcuUA77gVLAnJgqiQARANALAHIAcAQQAQAJAJAKQAGAGAKAPQAPAUAfAcQAkAhANAOIAYAfIANAQQmNG6muGXIhWBRUgklAiBg0LASCg");
	this.shape_27.setTransform(-50.4,313.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#3373A1","#1178C2"],[0,1],-332.5,-108.9,494.4,-108.9).s().p("EgzkAdSUA8ugVdAnYgrYIAPARIAdAkQAYAcAyAsQA2AvAWAYIAZAeQmmHdnOG0IhVBRUgkmAiBg0KASCg");
	this.shape_28.setTransform(-47.5,309.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#3373A1","#1178C2"],[0,1],-335.3,-106.7,491.6,-106.7).s().p("Eg0AAdnUA88gViAndgrnIAUgWIAyAoIAiAdIAeAdQAXAXAxApIAyArQm/IAnsHRIhWBQUgkkAiBg0MASCg");
	this.shape_29.setTransform(-44.8,307.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#3373A1","#1178C2"],[0,1],-338.7,-102.2,488.2,-102.2).s().p("Eg0iAeUUA88gVhAncgrnIBlhyIAKAHIAlAYQARAMASASIAfAjQBBBLAuAuQneIroSH1IhVBRUgklAiAg0LASDg");
	this.shape_30.setTransform(-41.3,303);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#3373A1","#1178C2"],[0,1],-342.2,-98.4,484.7,-98.4).s().p("Eg1FAe7UA88gViAncgrnQBVheBUhgIBcBNIAXAUQAIAIAPATQAbAgA9A4Qn9JXo5IaIhVBRUgklAiBg0LASCg");
	this.shape_31.setTransform(-37.8,299.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#3373A1","#1178C2"],[0,1],-345.9,-94.2,481,-94.2).s().p("Eg1qAfkUA88gVhAncgrnQB6iHB3iKIA8AtQAaATAQAPQAHAGAXAZQA8A/AkAiQodKIpjJBIhVBRUgklAiAg0LASDg");
	this.shape_32.setTransform(-34.1,295);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#3373A1","#1178C2"],[0,1],-350,-89.5,476.9,-89.5).s().p("Eg2TAgUUA88gViAndgrnQCji1Cei7QBSA5BIBHIAgAgIArAsQpBK/qQJsIhWBRUgkkAiBg0MASCg");
	this.shape_33.setTransform(-30.1,290.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#3373A1","#1178C2"],[0,1],-353.2,-86.3,473.7,-86.3).s().p("Eg2zAg0UA88gViAndgrnQCpi7CjjCIArgzIA2AkQAUAOAPAIIASAJQAKAFAHAFQAIAGASASQAQAPAgAcQAbAZAOAVQpcLqq1KPIhWBRUgkkAiBg0MASCg");
	this.shape_34.setTransform(-26.9,287);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#3373A1","#1178C2"],[0,1],-356.6,-82.4,470.3,-82.4).s().p("Eg3VAhbUA88gViAncgrnQCqi7CijCIBsiBQAQAEAGADQAKAFARANQAMAKAmAYQAgAVASAPIARAPIARAOIANAIQAIAFACAFIAHAQQAEAIAQAKIAKAHQp5MardK0IhVBRUgkkAiBg0MASCg");
	this.shape_35.setTransform(-23.4,283.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#3373A1","#1178C2"],[0,1],-360.3,-77.5,466.6,-77.5).s().p("Eg36AiLUA88gVhAndgrnQCpi8CjjBQBehwBdhzIArAXQAhARAWASQARANAeAcIAjAdQATAQAYAcIAOAPQqYNPsHLdIhWBRUgkkAiAg0MASDg");
	this.shape_36.setTransform(-19.8,278.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#3373A1","#1178C2"],[0,1],-364,-73.2,462.9,-73.2).s().p("Eg4fAi2UA88gViAncgrnQCpi7CjjBQCCiaB+ieIACABIBNA4QAPALAJADIAXAJIAVAPIAlAaQAXAQANAMIAXAbQq3OFszMHIhVBQUgklAiBg0LASCg");
	this.shape_37.setTransform(-16,274);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#3373A1","#1178C2"],[0,1],-367.4,-68.9,459.5,-68.9).s().p("Eg5BAjhUA88gViAncgrnQCpi7CjjBQCljECfjKIANAEQATAHAVARIAiAgIA5AzQAPANAJAFQAIAFASAJQANAHAaARIAKAGQrTO5tbMsIhVBQUgklAiBg0LASCg");
	this.shape_38.setTransform(-12.6,269.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#3373A1","#1178C2"],[0,1],-370.9,-64,456,-64).s().p("Eg5kAkSUA88gViAncgrnQCqi7CijBQDNjzDDj9IADABQAmAKAtAhQAnAcA5A2IA3A0QrvPuuFNUIhVBQUgkkAiBg0MASCg");
	this.shape_39.setTransform(-9.1,264.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#3373A1","#1178C2"],[0,1],-374.2,-58.9,452.7,-58.9).s().p("Eg6FAlGUA88gViAncgrnQCpi7CjjCQD3kkDokzQAlAcAkAeIBzBlIAkAiQsJQhutN5IhVBRUgklAiBg0LASCg");
	this.shape_40.setTransform(-5.8,259.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#3373A1","#1178C2"],[0,1],-377.4,-55,449.5,-55).s().p("Eg6lAlsUA87gVhAndgrnQCpi8CjjBQEVlJEElcQAsAdAeAWQAiAZAyArIBJA+QsjRVvUOfIhWBRUgkkAiAg0MASDg");
	this.shape_41.setTransform(-2.6,255.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#3373A1","#1178C2"],[0,1],-380.7,-50.5,446.2,-50.5).s().p("Eg7GAmZUA88gViAndgrnQCpi7CjjBQE5l0EimKIBKA4QBVBDBGA5Qs8SKv7PEIhWBQUgkkAiBg0MASCg");
	this.shape_42.setTransform(0.6,251.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#3373A1","#1178C2"],[0,1],-383.6,-47,443.3,-47).s().p("Eg7jAm9UA88gViAncgrnQCpi7CjjCQFVmUE6mxIAMAKIA1AoIBiBBQAsAcAdAZQtSS6wgPnIhVBRUgklAiBg0LASCg");
	this.shape_43.setTransform(3.6,247.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#3373A1","#1178C2"],[0,1],-386.8,-42.5,440.1,-42.5).s().p("Eg8DAnqUA88gViAndgrnQCpi7CjjCQF4m+FYnhQBgA7AwAnIBAA0IAaASQtqTwxHQLIhWBRUgkkAiBg0MASCg");
	this.shape_44.setTransform(6.7,243.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#3373A1","#1178C2"],[0,1],-390,-37.2,436.9,-37.2).s().p("Eg8jAoeUA88gViAncgrnQCpi7CjjBQGhnvF5oZQASANAUARIA9A3QANAMALAIIBkBHIACABQuCUoxwQzIhVBQUgklAiBg0LASCg");
	this.shape_45.setTransform(10,238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).wait(15));

	// Layer 5
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-215,504.9,-215).ss(1,1,1).p("EhOzAAAMCdnAAA");
	this.shape_46.setTransform(379.2,403.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-193.5,504.9,-193.5).ss(1,1,1).p("EhEIgDWMCS8AAAEhOzADXMCdnAAA");
	this.shape_47.setTransform(379.2,382.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-172,504.9,-172).ss(1,1,1).p("Eg4sgGtMCHgAAAEhEIAAAMCS8AAAEhOzAGuMCdnAAA");
	this.shape_48.setTransform(379.2,360.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-150.5,504.9,-150.5).ss(1,1,1).p("EgxEgKEMB/4AAAEg4sgDWMCHgAAAEhEIADXMCS8AAAEhOzAKFMCdnAAA");
	this.shape_49.setTransform(379.2,339.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-129,504.9,-129).ss(1,1,1).p("Egn7gNbMB2vAAAEgxEgGtMB/4AAAEg4sAAAMCHgAAAEhEIAGuMCS8AAAEhOzANcMCdnAAA");
	this.shape_50.setTransform(379.2,317.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-107.5,504.9,-107.5).ss(1,1,1).p("EggzgQyMBvnAAAEgn7gKEMB2vAAAEgxEgDWMB/4AAAEg4sADXMCHgAAAEhEIAKFMCS8AAAEhOzAQzMCdnAAA");
	this.shape_51.setTransform(379.2,296.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-86,504.9,-86).ss(1,1,1).p("A5s0JMBogAAAEggzgNbMBvnAAAEgn7gGtMB2vAAAEgxEAAAMB/4AAAEg4sAGuMCHgAAAEhEIANcMCS8AAAEhOzAUKMCdnAAA");
	this.shape_52.setTransform(379.2,274.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-64.5,504.9,-64.5).ss(1,1,1).p("AzF3gMBh5AAAA5swyMBogAAAEggzgKEMBvnAAAEgn7gDWMB2vAAAEgxEADXMB/4AAAEg4sAKFMCHgAAAEhEIAQzMCS8AAAEhOzAXhMCdnAAA");
	this.shape_53.setTransform(379.2,253.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-43,504.9,-43).ss(1,1,1).p("As+63MBbyAAAAzF0JMBh5AAAA5stbMBogAAAEggzgGtMBvnAAAEgn7AAAMB2vAAAEgxEAGuMB/4AAAEg4sANcMCHgAAAEhEIAUKMCS8AAAEhOzAa4MCdnAAA");
	this.shape_54.setTransform(379.2,231.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().ls(["#E0E0E0","#C4C4C4"],[0,1],-584,-21.5,504.9,-21.5).ss(1,1,1).p("AmY+OMBVMAAAAs+3gMBbyAAAAzFwyMBh5AAAA5sqEMBogAAAEggzgDWMBvnAAAEgn7ADXMB2vAAAEgxEAKFMB/4AAAEg4sAQzMCHgAAAEhEIAXhMCS8AAAEhOzAePMCdnAAA");
	this.shape_55.setTransform(379.2,210.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46}]}).to({state:[{t:this.shape_47}]},14).to({state:[{t:this.shape_48}]},5).to({state:[{t:this.shape_49}]},5).to({state:[{t:this.shape_50}]},5).to({state:[{t:this.shape_51}]},5).to({state:[{t:this.shape_52}]},5).to({state:[{t:this.shape_53}]},5).to({state:[{t:this.shape_54}]},5).to({state:[{t:this.shape_55}]},5).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(155,615.6,1264.6,246.6);
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