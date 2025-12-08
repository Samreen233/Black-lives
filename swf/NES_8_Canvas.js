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


(lib.restes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADD6E0").s().p("EgAOAuYMAAAhcvIAdAAMAAABcvg");
	this.shape.setTransform(224.5,0.6,0.632,0.632);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADD6E0").s().p("EgAOAuTMAAAhclIAdAAMAAABclg");
	this.shape_1.setTransform(149.7,0.9,0.632,0.632);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADD6E0").s().p("EgAOAuTMAAAhclIAdAAMAAABclg");
	this.shape_2.setTransform(74.9,0.9,0.632,0.632);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADD6E0").s().p("EgAOAuTMAAAhclIAdAAMAAABclg");
	this.shape_3.setTransform(0,0.9,0.632,0.632);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADD6E0").s().p("EgAOAuTMAAAhclIAdAAMAAABclg");
	this.shape_4.setTransform(-74.8,0.9,0.632,0.632);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADD6E0").s().p("EgAOAuTMAAAhclIAdAAMAAABclg");
	this.shape_5.setTransform(-149.6,0.9,0.632,0.632);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADD6E0").s().p("EgAOAuKMAAAhcTIAdAAMAAABcTg");
	this.shape_6.setTransform(-224.5,-0.2,0.632,0.632);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ADD6E0").s().p("Eg3qAAPIAAgdMBvVAAAIAAAdg");
	this.shape_7.setTransform(-0.4,-187.1,0.632,0.632);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADD6E0").s().p("Eg3qAAPIAAgdMBvVAAAIAAAdg");
	this.shape_8.setTransform(-0.4,-112.3,0.632,0.632);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADD6E0").s().p("Eg3qAAPIAAgdMBvVAAAIAAAdg");
	this.shape_9.setTransform(-0.4,-37.4,0.632,0.632);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ADD6E0").s().p("Eg3qAAPIAAgdMBvVAAAIAAAdg");
	this.shape_10.setTransform(-0.4,37.4,0.632,0.632);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ADD6E0").s().p("Eg3qAAPIAAgdMBvVAAAIAAAdg");
	this.shape_11.setTransform(-0.4,112.2,0.632,0.632);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ADD6E0").s().p("Eg3pAAPIAAgdMBvSAAAIAAAdg");
	this.shape_12.setTransform(-0.5,187.1,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.restes, new cjs.Rectangle(-225.4,-188,450.9,376.1), null);


(lib.bb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAD803").s().p("ABMBBIh3gsIhwgPID0iEIBDD8g");
	this.shape.setTransform(-4.3,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bb2, new cjs.Rectangle(-19.9,-0.9,31.3,25.3), null);


(lib.bb1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAD803").s().p("EgkGAcjIQ4oYIKVEJIGAr+IHGFvIHp3LIKaF3IMB/EIB2AtMgM2AhNIqTlzInyXlInal/IluLbIrNkgIwFH/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bb1, new cjs.Rectangle(-231.1,-194,462.2,388.1), null);


(lib.bulta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// bb2
	this.instance = new lib.bb2();
	this.instance.parent = this;
	this.instance.setTransform(-230.3,191.2,0.998,0.998,38.1,0,0,-3.4,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-3.5,scaleX:1,scaleY:1,rotation:32.8,guide:{path:[-230.1,191.1,-180.8,167.1,-131.4,143.2]}},11).to({scaleX:1,scaleY:1,rotation:92.3,guide:{path:[-131.5,143.2,-127.7,141.4,-124,139.5,-123.2,139.9,-122.5,140.2]}},1).to({regX:-3.4,regY:15.6,rotation:84.2,guide:{path:[-122.5,140.2,-95.1,152.5,-67.8,164.9]}},6).to({rotation:1.5,guide:{path:[-67.9,164.9,-63.4,166.9,-59,169,-58.9,168.8,-58.8,168.7]}},1).to({rotation:1.3,guide:{path:[-58.8,168.6,-39.9,133.5,-21.1,98.3]}},8).to({rotation:106.1,guide:{path:[-20.9,98.4,-19.8,96.3,-18.6,94.2,-16.6,95.8,-14.6,97.4]}},1).to({regX:-3.5,rotation:95.5,guide:{path:[-14.6,97.4,4.7,113,24.1,128.6]}},5).to({regY:15.5,scaleX:1,scaleY:1,rotation:-6,guide:{path:[24.1,128.7,25.9,130.1,27.6,131.6,28.5,129,29.3,126.5]}},1).to({scaleX:1,scaleY:1,rotation:-3.8,guide:{path:[29.5,126.5,53.1,55.5,76.7,-15.6]}},15).to({rotation:95,guide:{path:[76.7,-15.5,77.4,-17.6,78,-19.6,80.5,-18.2,83,-16.7]}},1).to({rotation:72.2,guide:{path:[82.9,-16.8,112.4,0.2,141.8,17.2,142,16.8,142.2,16.3]}},7).to({scaleX:1,scaleY:1,rotation:-6,guide:{path:[142.3,16.3,144.1,11.8,145.9,7.2]}},1).to({regX:-3.4,regY:15.7,scaleX:1,scaleY:1,rotation:0,guide:{path:[145.8,7.2,183.8,-89.2,221.7,-185.5]}},21).wait(1));

	// Layer 20 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_58 = new cjs.Graphics().p("AizBSIB6kNIDtBqIh4ENg");
	var mask_graphics_59 = new cjs.Graphics().p("AjECAICflpIDqBpIibFqg");
	var mask_graphics_60 = new cjs.Graphics().p("AjVCuIDGnFIDlBoIi9HHg");
	var mask_graphics_61 = new cjs.Graphics().p("AjnDcIDrohIDkBoIjgIjg");
	var mask_graphics_62 = new cjs.Graphics().p("Aj4EKIERp9IDgBnIkCKAg");
	var mask_graphics_63 = new cjs.Graphics().p("AkJE4IE3rZIDcBlIkkLeg");
	var mask_graphics_64 = new cjs.Graphics().p("AkaFmIFds1IDYBlIlGM6g");
	var mask_graphics_65 = new cjs.Graphics().p("AksGUIGDuRIDWBkIlqOXg");
	var mask_graphics_66 = new cjs.Graphics().p("Ak9HCIGqvtIDRBjImMP0g");
	var mask_graphics_67 = new cjs.Graphics().p("AlOHwIHPxJIDOBiImuRRg");
	var mask_graphics_68 = new cjs.Graphics().p("AlgIeIH2ylIDKBhInQSug");
	var mask_graphics_69 = new cjs.Graphics().p("AlxJMIIc0BIDHBgIn0ULg");
	var mask_graphics_70 = new cjs.Graphics().p("AmCJ6IJC1dIDDBfIoWVog");
	var mask_graphics_71 = new cjs.Graphics().p("AmUKoIJp25IDABeIo5XFg");
	var mask_graphics_72 = new cjs.Graphics().p("AmlLWIKP4VIC8BeIpcYhg");
	var mask_graphics_73 = new cjs.Graphics().p("Am2MEIK05xIC5BdIp+Z+g");
	var mask_graphics_74 = new cjs.Graphics().p("AnIMyILb7NIC2BcIqhbbg");
	var mask_graphics_75 = new cjs.Graphics().p("AnZNgIMB8pICyBbIrEc4g");
	var mask_graphics_76 = new cjs.Graphics().p("AnqOOIMn+FICuBaIrmeVg");
	var mask_graphics_77 = new cjs.Graphics().p("An8O8INN/hICrBZIsIfyg");
	var mask_graphics_78 = new cjs.Graphics().p("AoNPqMAN0gg9ICnBYMgMsAhPg");
	var mask_graphics_79 = new cjs.Graphics().p("AoeQYMAOZgiZICkBXMgNOAisg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(58).to({graphics:mask_graphics_58,x:141.4,y:18}).wait(1).to({graphics:mask_graphics_59,x:143.1,y:13.4}).wait(1).to({graphics:mask_graphics_60,x:144.8,y:8.8}).wait(1).to({graphics:mask_graphics_61,x:146.6,y:4.2}).wait(1).to({graphics:mask_graphics_62,x:148.3,y:-0.4}).wait(1).to({graphics:mask_graphics_63,x:150,y:-5}).wait(1).to({graphics:mask_graphics_64,x:151.7,y:-9.6}).wait(1).to({graphics:mask_graphics_65,x:153.5,y:-14.2}).wait(1).to({graphics:mask_graphics_66,x:155.2,y:-18.8}).wait(1).to({graphics:mask_graphics_67,x:156.9,y:-23.4}).wait(1).to({graphics:mask_graphics_68,x:158.7,y:-28}).wait(1).to({graphics:mask_graphics_69,x:160.4,y:-32.7}).wait(1).to({graphics:mask_graphics_70,x:162.1,y:-37.3}).wait(1).to({graphics:mask_graphics_71,x:163.9,y:-41.9}).wait(1).to({graphics:mask_graphics_72,x:165.6,y:-46.5}).wait(1).to({graphics:mask_graphics_73,x:167.3,y:-51.1}).wait(1).to({graphics:mask_graphics_74,x:169.1,y:-55.7}).wait(1).to({graphics:mask_graphics_75,x:170.8,y:-60.3}).wait(1).to({graphics:mask_graphics_76,x:172.5,y:-64.9}).wait(1).to({graphics:mask_graphics_77,x:174.3,y:-69.5}).wait(1).to({graphics:mask_graphics_78,x:176,y:-74.1}).wait(1).to({graphics:mask_graphics_79,x:177.7,y:-78.7}).wait(1));

	// bb1
	this.instance_1 = new lib.bb1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.9,4.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).wait(22));

	// Layer 18 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_50 = new cjs.Graphics().p("Ai7A8IBqjvIENB5IhqDug");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjiAmIBqjvIFbCpIhcDqg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AkIAPIBqjuIGnDZIhODmg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AkugGIBqjvIHzEHIg/Dkg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AlVgcIBqjvIJAE3IgwDgg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Al7gyIBqjvIKNFmIgjDdg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AmhhIIBqjvILZGWIgUDZg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AnIheIBqjvIMnHGIgHDVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_1_graphics_50,x:71,y:-21.2}).wait(1).to({graphics:mask_1_graphics_51,x:74.8,y:-19}).wait(1).to({graphics:mask_1_graphics_52,x:78.6,y:-16.8}).wait(1).to({graphics:mask_1_graphics_53,x:82.5,y:-14.6}).wait(1).to({graphics:mask_1_graphics_54,x:86.3,y:-12.3}).wait(1).to({graphics:mask_1_graphics_55,x:90.2,y:-10.1}).wait(1).to({graphics:mask_1_graphics_56,x:94,y:-7.9}).wait(1).to({graphics:mask_1_graphics_57,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_58,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_59,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_60,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_61,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_62,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_63,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_64,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_65,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_66,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_67,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_68,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_69,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_70,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_71,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_72,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_73,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_74,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_75,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_76,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_77,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_78,x:97.8,y:-5.7}).wait(1).to({graphics:mask_1_graphics_79,x:97.8,y:-5.7}).wait(1));

	// bb1
	this.instance_2 = new lib.bb1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.9,4.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(30));

	// Layer 16 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_34 = new cjs.Graphics().p("AimBpIBTkaID6BIIhTEbg");
	var mask_2_graphics_35 = new cjs.Graphics().p("Ai1CYIB1l4ID2BHIhxF6g");
	var mask_2_graphics_36 = new cjs.Graphics().p("AjDDGICXnUIDwBGIiNHXg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AjSD1IC5oyIDsBFIirI2g");
	var mask_2_graphics_38 = new cjs.Graphics().p("AjhEjIDcqOIDnBDIjJKUg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AjvFRID8rqIDjBBIjlLyg");
	var mask_2_graphics_40 = new cjs.Graphics().p("Aj+GAIEetIIDfBAIkCNRg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AkNGuIFAukIDaA+IkfOvg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AkbHdIFhwBIDWA8Ik8QOg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AkqILIGExeIDRA7IlaRsg");
	var mask_2_graphics_44 = new cjs.Graphics().p("Ak5I5IGmy6IDMA6Il3TJg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AlHJoIHI0YIDHA5ImUUog");
	var mask_2_graphics_46 = new cjs.Graphics().p("AlWKWIHq10IDDA3ImyWGg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AllLFIIM3SIC/A2InQXlg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AlzLzIIt4uIC6A0InsZDg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AmCMhIJQ6KIC1AyIoKahg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_2_graphics_34,x:25.2,y:136.8}).wait(1).to({graphics:mask_2_graphics_35,x:26.7,y:132.1}).wait(1).to({graphics:mask_2_graphics_36,x:28.1,y:127.5}).wait(1).to({graphics:mask_2_graphics_37,x:29.6,y:122.9}).wait(1).to({graphics:mask_2_graphics_38,x:31.1,y:118.2}).wait(1).to({graphics:mask_2_graphics_39,x:32.5,y:113.6}).wait(1).to({graphics:mask_2_graphics_40,x:34,y:108.9}).wait(1).to({graphics:mask_2_graphics_41,x:35.5,y:104.3}).wait(1).to({graphics:mask_2_graphics_42,x:36.9,y:99.7}).wait(1).to({graphics:mask_2_graphics_43,x:38.4,y:95}).wait(1).to({graphics:mask_2_graphics_44,x:39.9,y:90.4}).wait(1).to({graphics:mask_2_graphics_45,x:41.3,y:85.7}).wait(1).to({graphics:mask_2_graphics_46,x:42.8,y:81.1}).wait(1).to({graphics:mask_2_graphics_47,x:44.3,y:76.5}).wait(1).to({graphics:mask_2_graphics_48,x:45.7,y:71.8}).wait(1).to({graphics:mask_2_graphics_49,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_50,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_51,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_52,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_53,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_54,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_55,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_56,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_57,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_58,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_59,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_60,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_61,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_62,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_63,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_64,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_65,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_66,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_67,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_68,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_69,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_70,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_71,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_72,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_73,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_74,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_75,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_76,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_77,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_78,x:47.2,y:67.2}).wait(1).to({graphics:mask_2_graphics_79,x:47.2,y:67.2}).wait(1));

	// bb1
	this.instance_3 = new lib.bb1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.9,4.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).wait(46));

	// Layer 14 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_28 = new cjs.Graphics().p("AjEAJICkjKIDlC5IijDKg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AjmgTICjjMIEqD4IiTDGg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AkIgwICjjMIFuE3IiEDCg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AkqhNICjjMIGyF2Ih0C9g");
	var mask_3_graphics_32 = new cjs.Graphics().p("AlNhrICkjLIH3G2IhmC3g");
	var mask_3_graphics_33 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AlviIICkjLII7H1IhWCyg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_3_graphics_28,x:-24.9,y:89.9}).wait(1).to({graphics:mask_3_graphics_29,x:-21.5,y:92.9}).wait(1).to({graphics:mask_3_graphics_30,x:-18.1,y:95.8}).wait(1).to({graphics:mask_3_graphics_31,x:-14.7,y:98.7}).wait(1).to({graphics:mask_3_graphics_32,x:-11.2,y:101.6}).wait(1).to({graphics:mask_3_graphics_33,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_34,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_35,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_36,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_37,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_38,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_39,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_40,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_41,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_42,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_43,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_44,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_45,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_46,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_47,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_48,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_49,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_50,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_51,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_52,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_53,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_54,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_55,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_56,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_57,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_58,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_59,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_60,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_61,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_62,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_63,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_64,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_65,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_66,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_67,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_68,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_69,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_70,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_71,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_72,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_73,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_74,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_75,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_76,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_77,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_78,x:-7.8,y:104.5}).wait(1).to({graphics:mask_3_graphics_79,x:-7.8,y:104.5}).wait(1));

	// bb1
	this.instance_4 = new lib.bb1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.9,4.2);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).wait(52));

	// Layer 10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_19 = new cjs.Graphics().p("AiyBTIB3kNIDuBoIh3ENg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AjGB6ICnlcIDmBlIifFgg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AjaChIDXmqIDeBgIjHGzg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AjtDIIEFn4IDXBbIjvIGg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AkBDvIE1pGIDOBXIkUJYg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AkVEXIFlqWIDGBTIk8Krg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AkpE+IGUrkIC/BOIlkL/g");
	var mask_4_graphics_26 = new cjs.Graphics().p("Ak9FlIHFsyIC2BJImMNSg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_42 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_47 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_52 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AlQGMIHzuAICvBFIm0Okg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_4_graphics_19,x:-61.2,y:174.5}).wait(1).to({graphics:mask_4_graphics_20,x:-59.3,y:170.6}).wait(1).to({graphics:mask_4_graphics_21,x:-57.3,y:166.7}).wait(1).to({graphics:mask_4_graphics_22,x:-55.3,y:162.7}).wait(1).to({graphics:mask_4_graphics_23,x:-53.3,y:158.8}).wait(1).to({graphics:mask_4_graphics_24,x:-51.3,y:154.9}).wait(1).to({graphics:mask_4_graphics_25,x:-49.3,y:151}).wait(1).to({graphics:mask_4_graphics_26,x:-47.4,y:147.1}).wait(1).to({graphics:mask_4_graphics_27,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_28,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_29,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_30,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_31,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_32,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_33,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_34,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_35,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_36,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_37,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_38,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_39,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_40,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_41,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_42,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_43,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_44,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_45,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_46,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_47,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_48,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_49,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_50,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_51,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_52,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_53,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_54,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_55,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_56,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_57,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_58,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_59,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_60,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_61,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_62,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_63,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_64,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_65,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_66,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_67,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_68,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_69,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_70,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_71,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_72,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_73,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_74,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_75,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_76,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_77,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_78,x:-45.4,y:143.1}).wait(1).to({graphics:mask_4_graphics_79,x:-45.4,y:143.1}).wait(1));

	// bb1
	this.instance_5 = new lib.bb1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.9,4.2);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(61));

	// Layer 8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_12 = new cjs.Graphics().p("AiyBSIB3kNIDuBpIh3ENg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AjcBCIB3kNIFDCUIhrEDg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AkHAyIB3kNIGYC9IheD5g");
	var mask_5_graphics_15 = new cjs.Graphics().p("AkxAiIB3kNIHtDnIhRDwg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AlcASIB3kNIJCEQIhDDng");
	var mask_5_graphics_17 = new cjs.Graphics().p("AmGACIB3kNIKWE6Ig2Ddg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_19 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_21 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_32 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_36 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_41 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_42 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_47 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_48 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_52 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_57 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_62 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_75 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_76 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AmxgNIB3kOILsFkIgqDTg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_5_graphics_12,x:-132.7,y:136.6}).wait(1).to({graphics:mask_5_graphics_13,x:-128.4,y:138.2}).wait(1).to({graphics:mask_5_graphics_14,x:-124.2,y:139.8}).wait(1).to({graphics:mask_5_graphics_15,x:-119.9,y:141.4}).wait(1).to({graphics:mask_5_graphics_16,x:-115.7,y:143}).wait(1).to({graphics:mask_5_graphics_17,x:-111.5,y:144.6}).wait(1).to({graphics:mask_5_graphics_18,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_19,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_20,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_21,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_22,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_23,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_24,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_25,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_26,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_27,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_28,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_29,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_30,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_31,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_32,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_33,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_34,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_35,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_36,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_37,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_38,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_39,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_40,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_41,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_42,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_43,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_44,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_45,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_46,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_47,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_48,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_49,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_50,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_51,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_52,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_53,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_54,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_55,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_56,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_57,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_58,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_59,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_60,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_61,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_62,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_63,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_64,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_65,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_66,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_67,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_68,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_69,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_70,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_71,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_72,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_73,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_74,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_75,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_76,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_77,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_78,x:-107.2,y:146.2}).wait(1).to({graphics:mask_5_graphics_79,x:-107.2,y:146.2}).wait(1));

	// bb1
	this.instance_6 = new lib.bb1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.9,4.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(68));

	// Layer 5 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("Ai6g9IDhiDICUD/IjhCCg");
	var mask_6_graphics_1 = new cjs.Graphics().p("AjmgpIE6isICTD3Ik6C0g");
	var mask_6_graphics_2 = new cjs.Graphics().p("AkTgUIGTjVICUDtImTDmg");
	var mask_6_graphics_3 = new cjs.Graphics().p("Ak/AAIHsj+ICTDmInsEXg");
	var mask_6_graphics_4 = new cjs.Graphics().p("AlsAUIJFkmICUDdIpFFIg");
	var mask_6_graphics_5 = new cjs.Graphics().p("AmYAoIKelOICTDUIqeF6g");
	var mask_6_graphics_6 = new cjs.Graphics().p("AnEA8IL2l3ICTDLIr2Gsg");
	var mask_6_graphics_7 = new cjs.Graphics().p("AnxBRINPmgICUDCItPHdg");
	var mask_6_graphics_8 = new cjs.Graphics().p("AodBlIOonJICTC6IuoIPg");
	var mask_6_graphics_9 = new cjs.Graphics().p("ApKB6IQBnyICUCxIwBJAg");
	var mask_6_graphics_10 = new cjs.Graphics().p("Ap2COIRaobICTCoIxaJzg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_12 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_14 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_16 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_37 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_41 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_42 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_44 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_48 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_51 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_53 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_55 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_57 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_59 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_60 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_63 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_66 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_67 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_68 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_70 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_71 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_72 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_73 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_74 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_75 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_76 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_77 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_78 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");
	var mask_6_graphics_79 = new cjs.Graphics().p("AqjCjISzpEICUCfIyzKkg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:-240.8,y:196.9}).wait(1).to({graphics:mask_6_graphics_1,x:-236.4,y:194.8}).wait(1).to({graphics:mask_6_graphics_2,x:-231.9,y:192.8}).wait(1).to({graphics:mask_6_graphics_3,x:-227.5,y:190.7}).wait(1).to({graphics:mask_6_graphics_4,x:-223,y:188.7}).wait(1).to({graphics:mask_6_graphics_5,x:-218.6,y:186.6}).wait(1).to({graphics:mask_6_graphics_6,x:-214.1,y:184.6}).wait(1).to({graphics:mask_6_graphics_7,x:-209.7,y:182.5}).wait(1).to({graphics:mask_6_graphics_8,x:-205.2,y:180.5}).wait(1).to({graphics:mask_6_graphics_9,x:-200.8,y:178.4}).wait(1).to({graphics:mask_6_graphics_10,x:-196.3,y:176.4}).wait(1).to({graphics:mask_6_graphics_11,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_12,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_13,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_14,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_15,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_16,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_17,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_18,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_19,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_20,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_21,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_22,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_23,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_24,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_25,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_26,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_27,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_28,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_29,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_30,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_31,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_32,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_33,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_34,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_35,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_36,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_37,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_38,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_39,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_40,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_41,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_42,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_43,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_44,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_45,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_46,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_47,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_48,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_49,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_50,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_51,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_52,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_53,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_54,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_55,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_56,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_57,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_58,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_59,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_60,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_61,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_62,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_63,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_64,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_65,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_66,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_67,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_68,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_69,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_70,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_71,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_72,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_73,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_74,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_75,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_76,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_77,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_78,x:-191.9,y:174.3}).wait(1).to({graphics:mask_6_graphics_79,x:-191.9,y:174.3}).wait(1));

	// bb1
	this.instance_7 = new lib.bb1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-2.9,4.2);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.6,168,40.2,39.1);


// stage content:
(lib.NES_8_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:9,step1:11,step2:13,step3:15,step4:17,step5:19,step6:21,step7:23,step8:25,step9:27,step10:29});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(2).call(this.frame_21).wait(2).call(this.frame_23).wait(2).call(this.frame_25).wait(2).call(this.frame_27).wait(2).call(this.frame_29).wait(8));

	// Layer 44
	this.instance = new lib.bulta();
	this.instance.parent = this;
	this.instance.setTransform(122.3,67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37));

	// Layer 47
	this.instance_1 = new lib.restes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.9,86.1);
	this.instance_1.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(397.8,203,487.7,406);
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