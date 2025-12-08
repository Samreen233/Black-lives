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


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAIATIAIiMIACAAIgICMIgaBog");
	this.shape.setTransform(-4.3,15.2,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AAQgbIgBhjIAFBhIgnCcg");
	this.shape_1.setTransform(-6.7,16.4,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAJgKIABhdIADgBIgCBgIgXBxg");
	this.shape_2.setTransform(-9.8,14.1,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgLgIIAGAOIAFgBIANgIIgMALIgKABg");
	this.shape_3.setTransform(-19.3,-15,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AADACIgOAGIAUgPIADAPg");
	this.shape_4.setTransform(-17,-12.4,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgOAAIgHAAIAFgCIAPADIAIgEIAPAAIgOADIgIAEg");
	this.shape_5.setTransform(-15.1,-8.7,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAANIAPgQIADgSIgBATIgRASIgSAGg");
	this.shape_6.setTransform(16.8,-44.7,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgpAFIAdABIAggKIAWgEIgYAFIgfALg");
	this.shape_7.setTransform(-8.4,-4.8,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgFAEIAOgFIAIgFIgGAGIgOAFIgNACg");
	this.shape_8.setTransform(11,-12,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAIgBIAMgFIgHAEIAEABIgTAGIgRACg");
	this.shape_9.setTransform(9.4,-9.8,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAAADIgGgOIAHAKIAGAAIgHANg");
	this.shape_10.setTransform(-26.9,-31.4,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAOABIgIgBIgHABIgRgBIASgDIAOADIAEAEg");
	this.shape_11.setTransform(23.4,-37.4,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AADAHIgLgIIgJgJIAUAOIAPAHg");
	this.shape_12.setTransform(18.6,-33.8,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgEgEIAEABIAFAIg");
	this.shape_13.setTransform(25.5,-30.4,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgIACIgCgFIAHgBIAMAFIACAEg");
	this.shape_14.setTransform(1.2,-12.6,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgRAIIgBgFIAGgBIgEgEIgGgGIAKAEIAEAEIAFAAIABgCIAJACIgBgJIAGAJIALAFIgKABIgNgDIgFABIAFAGg");
	this.shape_15.setTransform(5.8,-13.2,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgGABIADgBIgCgFIAMALg");
	this.shape_16.setTransform(9.6,-14.2,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgEgEIAEABIAFAHg");
	this.shape_17.setTransform(10.8,-14.3,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgBAGIgLgLIAMAIIAKABIADACg");
	this.shape_18.setTransform(10.3,-16,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEgDIAIAEIgEADg");
	this.shape_19.setTransform(13.4,-16.3,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgXASIACgFIgEgLIAKALIAJACIALgFIALgJIADgIIABgJIgEgLIAKAXIgDAOIgSAPIgOADg");
	this.shape_20.setTransform(-16,-38.4,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgBAAIgDgYIAHAYIACATIgGAGg");
	this.shape_21.setTransform(7.4,-57.2,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AAAAAIgGgMIgFgHIAAgIIACAKIAEADIAGALIAFAOIAGAMIgHAEg");
	this.shape_22.setTransform(-3.8,-53.1,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgLAwIgJgUIgDgXIgGgNIgKgfIgCgQIADAEIADASIAGAPIAGAHIATA5IAHAGIAbgFIAGgJIgCgKIgJgOIgDgUIACgMIAFgBIAEATIAIAMIABASIgFAPIgHAGIgdAFg");
	this.shape_23.setTransform(-8.8,-42.9,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgWAvIgKgCIgIADIgTgJIgdAAIgYgSIgFgJIgKgFIAOgBIACACIAEAFIAIAIIAKADIAZgOIAFgOIgCgTIAKAiIAHALIAIADIAKABIAPgEQAFgCAEgEIAEgQIAAgQIgHgNIAIAMIAVAIIAlABIAXgFIAVgQIARgZIgKAWIgMAJIgBAMIAVgDIAAACIgRAHIACAEIAVAEIACAKIgYgJIgLACIADAJIgNgFIgIACIABALIgWgCIhAAgIgKACg");
	this.shape_24.setTransform(-2.3,-38.1,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgNAGIgIgEIAYgBIAGgBIADgFIADAAIAHAKIgIABg");
	this.shape_25.setTransform(-25.1,-37.9,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AACAJIgGgRIgBgCIAEADIAHASg");
	this.shape_26.setTransform(-23.2,-40.3,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgDgCIgDgJIACgCIAEAOIAHANg");
	this.shape_27.setTransform(-25.4,-44.6,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgDAAIgHgKIAKAKIAIAEIADAHg");
	this.shape_28.setTransform(-25.2,-42.9,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgRgIIAUAEIAPAMg");
	this.shape_29.setTransform(4.3,-17.1,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgMAFIgVADIANgFIgHgKIAPAKIATABIATgEIAHABIgZAHg");
	this.shape_30.setTransform(-0.5,-10.5,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AhFAUIBhACIAqguIgoAwIg/ABg");
	this.shape_31.setTransform(-2.4,2.2,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAFgFIABgRIAEATIgLAVIgIAFg");
	this.shape_32.setTransform(16.6,-46.6,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAKgBIgNgBIgZgGIAjAAIAIAEIAOANg");
	this.shape_33.setTransform(21.8,-36.1,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAEAOIgYgYIgHgHIANACIgBAEIAMAKIAPAHIAJgDIAGAHIgGgBIgKABIgJgDIAGAGIAJAFg");
	this.shape_34.setTransform(22.6,-34,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgBgIIASgZIAGADIgUAWIgZAqg");
	this.shape_35.setTransform(-14.2,-26.9,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgIIACgHIAAAKIADAVg");
	this.shape_36.setTransform(-4.6,-28.3,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AACAVQgEgOgBgJIgBgTIACAVIAHAWg");
	this.shape_37.setTransform(-0.8,-15.9,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgbADIgQgJIACgEQAJALAmAGQAUADASAAIgUABQggAAgTgIg");
	this.shape_38.setTransform(0.2,-12.1,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgUAUQAEgFAKgDQAPgFALgfIACAIQABAJgHAIQgGAJgHACQgIABgJAGIgIAGQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBg");
	this.shape_39.setTransform(-9.6,-13.6,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AALgOIABAEIgXAZg");
	this.shape_40.setTransform(-8.8,-17.4,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AANgmIACAFIgKAdQgLAfgJALQAZg1ADgXg");
	this.shape_41.setTransform(-7.3,-26.2,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCgKIACgUIACgBQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQgGAMAAAYQgBAMACALQgEgTADgXg");
	this.shape_42.setTransform(-4.7,-27.1,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgPAXIgBgEIgJADQgKADgDACQgGgEgKgCQgMgEgHADQgHABgIgEQgGgEgDgGIAGADQAEABADADQAEACAIgDQAGgCACgCIAEgOIADAHQAFAHACABQAFACAUgBQAWgBACgDQABgDAEgMQAFgOgBgFIgBgBIAJAFQAKAEANgDQAUAEASgFIAIABIgCABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAPAHQgRAHgNgFIgKABIAQAOQAKAIAIAFQgegOgPgIQgIACgWAMQgXANgGAHQgCgCgCgEg");
	this.shape_43.setTransform(-2.6,-35.7,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgOA3QgMADgPgGQgSgJgEgTQgEgaAXgFQASgEAKgFIAWgOIAYgRQATgQAPAOQgDgDgFgBQgMgEgMAKQgoAhgXAGQgOADgGAEQgKAEgBAMQAAAMAIALQAIALAKADQANADAIgDQAZAGAOgIQARgLAIgGQAOgMABgNIAAAJQgDAJgJAIQgPANgTAIQgGACgLAAQgLAAgEgCg");
	this.shape_44.setTransform(6.7,-48.5,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAATQgQgPABgQIAFgOQAIgDAKAcQAFANADAPIAAAAQgFAAgLgIg");
	this.shape_45.setTransform(-1.4,-44,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAJAFIgmgLIAeAGQAHABAWAFIgGABIgPgCg");
	this.shape_46.setTransform(17.6,-37.4,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgDgIIgFgGQALABAGAcQgGgPgGgIg");
	this.shape_47.setTransform(-1.2,-46.2,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAOAJQAIgJgFgKQgBgDgHgFIgGgEIAGADQAGAEADADQAHAJgIALQgEAHghAIQAfgMADgCg");
	this.shape_48.setTransform(4,-47.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgCADIACgKQAAAJACAGg");
	this.shape_49.setTransform(-5.8,-56.9,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAEgBQgHgDgRgIIgQgJIAXAJQAWAJAHAEQALAIAKANQgTgUgOgDg");
	this.shape_50.setTransform(15.4,-33.8,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag3APIgMgCIAdABQAHgCAcgMQAFgBATgCIAwgLQgqANgQABQgKAAgPAHIgVAIIgIAAIgMAAg");
	this.shape_51.setTransform(-3.4,-5.2,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AATAhQgngBgTgSQgFgHgFgOQgDgNgBgMIAGAXQAKAYAOAGQAPAGAgACIAeABQgNADgRAAIgFAAg");
	this.shape_52.setTransform(1.8,-16.6,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgpABQAIgCAbgCQAYgBAMACQAJACAZgFIAQgDQgpAMgOgDQgMgBgSAAQgUAAgJAEQgNAFggAAQAbgEALgEg");
	this.shape_53.setTransform(-4.8,-7.8,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgBgEIgDgUIAFATQAFASgCAIIgFAEQACgHgCgWg");
	this.shape_54.setTransform(7.4,-57.3,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgPgGIAGAEQAJAFAQABIAAAEQgfgGAAgIg");
	this.shape_55.setTransform(-25,-39.8,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgHABIgMgBQAMABAZgCIABABIgNACIgNgBg");
	this.shape_56.setTransform(-24.7,-37,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AAMA5QgKgFgEgFQgMgJgDgMQgDgLgGgIIgDgFIgLgVIALAUQAJALACAKQADAIAIALQAEAFAKAFQAIAGAFAAIAJgCQAHgDADgTQADgTgFgMIgHgOIgOgvIACAEQAEAFAAAEIAGAWQAGARADAGQAFAFAAATQgBAUgHAMQgFAEgGABIgCAAQgFAAgEgDg");
	this.shape_57.setTransform(-19.3,-43,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgRBFQgIAAgFgJIgDgIQAGAOASAAQAJAAAMgDQAHAAAGgHQAHgJAAgQQAAgYgNgxQgFgRgKgHIgJgDQAKgBAHAKQAHAHACAMQAKAcACAcQADAagEANQgDALgTADIgRACIgKgBg");
	this.shape_58.setTransform(-6.8,-45,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgDgCIgOgJQALAAAYAXIgVgOg");
	this.shape_59.setTransform(19.7,-35.3,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgigGIAVAGQAaAGAXABIgEAAQgzAAgPgNg");
	this.shape_60.setTransform(17,-38.2,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AggAEQAYACApgLQgdAMgVgBg");
	this.shape_61.setTransform(15.8,-40.3,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AitFWIgCAAQgBgBgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAniHAPhIQAMg4AGg3QABgIgBgJIgDgRIgCgOQgBgGgDgEQgJgNgFgPIgMgiIgNgdQgIgSgBgHQgBgKgEgRIgDgNQAAgDgIgNQgDgFACgHIAFgMIAFgLIABgPQABgUAHgMQAJgMAKgIQATgOAXAIQAJgLAPgFQANgGAPABQAHgcAVgNQAPgKAPACQANABAQARQAMgLAFgCQAGgCAJAAQAIAAAHAEQASAMADALQACAGgBANIAAABIADABIAHAGIAMAPIAOAYQAVAgAGAOQAHARADAPQAEATgGALIgMAQIg3A/QgYAagGAUQgDAJADASIADAlIABAnIgHBMQgEAvgBA4IgCClQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAgAickgQgGAKgBAZIgBALIgGANIgFAMQgBADAEAGIAHAJIACAKIADAQIAFAXQABAIALAWQAMAbAKAhQACAFAHALIAGAJIACANIACAQQADAYgDAZIgJA7QgQBRgsCaIAAABIDsAvIADi3QABgzAGg8QACgYABgiQABgqgCgPIgDgXQgBgNAMgUQAGgMAWgXIA3hBQAIgJAAgOQgCgagQgeIgZgqIgKgQQgGgJgGgFQgHgDgCgDQgBgCAAgFIAAgHQAAgNgQgMIgJgFQgLAAgFACQgFACgFAEIgIAIQgCADgDgDQgRgTgMAAQgNgBgPAMQgRAOgFAXQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQghgCgRAXQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgIgEgIAAQgWAAgTAdg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AivFUQApiRAOhFQAKgsAEgcIAEgjQACgNgDgNIgEgQIgCgMIgIgLQgGgKgBgGIgQguQgTglAAgHIgJguQgLgOABgFQAAgDAGgMIAGgNQAAghAJgMQAZgoAjAPQAGgJALgGQAPgIAUABQADgJAFgLQANgVAUgGQALgDAIACQAKADAPAQQAKgLADgCQAKgFAQACQAZAPAAAMIABAMQAAAGABAAQAHABAIALIAWAkQAUAhAEAKQAIAPACARQAFAVgHAKIhHBSQgdAiACAWQACAQgCBJQgBBIgDAlQgDAvgBC7g");
	this.shape_63.setTransform(-0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-65.3,61.1,130.6);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAMhcIgHBGIgQBzg");
	this.shape.setTransform(4.1,16.2,1.676,1.676,0,0,0,-0.3,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AANAgIANjrIADABIgNDqIgsCsg");
	this.shape_1.setTransform(-7.1,25.2,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAUgOIgCikIAHChIgxDEg");
	this.shape_2.setTransform(-9.8,22,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAOgRIADiaIAEgCIgCCeIgnC9g");
	this.shape_3.setTransform(-16.3,23.4,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgUgOIAKAXIAJgBIAWgOIgTAUIgSABg");
	this.shape_4.setTransform(-32,-24.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAPgMIAFAYIgOgJIgZAKg");
	this.shape_5.setTransform(-28.2,-20.7,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgZAAIgKAAIAIgEIAYAGIAOgIIAaABIgYAEIgNAIg");
	this.shape_6.setTransform(-25.1,-14.6,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAAAXIAZgdIAGgeIgCAhIgdAeIgeAKg");
	this.shape_7.setTransform(27.9,-74.3,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AhEAIIAvACIA2gTIAkgFIgnAJIg0AUg");
	this.shape_8.setTransform(-13.9,-8.1,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgRABIA0gRIgyASIgTAPg");
	this.shape_9.setTransform(13.6,-9.4,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgIAHIAXgIIANgJIgKAKIgXAJIgWACg");
	this.shape_10.setTransform(18.4,-20,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAOgBIATgJIgLAHIAGABIgfAKIgdADg");
	this.shape_11.setTransform(15.8,-16.4,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAYgFIgJAFIgmAGg");
	this.shape_12.setTransform(-23.1,-3.7,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAAAEIgKgXIAMASIAJgBIgLAWg");
	this.shape_13.setTransform(-44.7,-52.3,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAXACIgNgCIgNACIgbgCIAdgFIAXAFIAJAGg");
	this.shape_14.setTransform(39,-62.2,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAEALIgKgJIgIgDIgPgQIAiAYIAZALg");
	this.shape_15.setTransform(31,-56.3,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgGgIIAFADIAIANg");
	this.shape_16.setTransform(42.5,-50.6,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgIgIIAQAQIgCABg");
	this.shape_17.setTransform(39.9,-46.2,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgHgOIAPAbIgCACg");
	this.shape_18.setTransform(37.2,-44.8,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgCAAIgOgeIAhA9g");
	this.shape_19.setTransform(30,-42.2,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgPgYIAfAvIgBACg");
	this.shape_20.setTransform(28.8,-37.9,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AAHANIgQgZIATAZg");
	this.shape_21.setTransform(25.9,-31.7,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgNADIgEgIIAMgDIAUAJIAEAIg");
	this.shape_22.setTransform(2.1,-21,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgcANIgCgIIAJgCIgGgHIgLgKIARAGIAHAIIAJAAIABgEIAQAEIgCgPIAKAPIATAHIgRACIgWgEIgJACIAIAJg");
	this.shape_23.setTransform(9.7,-21.9,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgLACIAGgCIgEgJIAVATg");
	this.shape_24.setTransform(16,-23.7,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgHgGIAHAAIAIANg");
	this.shape_25.setTransform(18,-23.9,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgCALIgSgVIATAPIASAAIAEAGg");
	this.shape_26.setTransform(17.3,-26.7,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgHgGIAPAIIgIAFg");
	this.shape_27.setTransform(22.4,-27.1,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgPgdIAeA5IgCACg");
	this.shape_28.setTransform(23.2,-32.7,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgnAfIADgJIgGgTIAQATIAPADIATgIIASgOIAFgPIABgPIgFgTIAQAnIgFAXIgeAZIgYAGg");
	this.shape_29.setTransform(-26.5,-64,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgCAAIgFgoIAMAoIADAgIgLAJg");
	this.shape_30.setTransform(12.4,-95.1,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AAAABIgKgWIgJgLIAAgNIAEARIAGAEIAEAGIAHAMIAIAXIAKAUIgMAJg");
	this.shape_31.setTransform(-6.3,-88.4,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgSBQIgQgiIgEglIgWg3IgFgTIgDgaIADAGIAHAdIAJAaIAKALIAgBfIAMALIAsgJIAKgPIgDgRIgOgWIgFgiIADgVIAIgBIAHAgIAOAUIAAAfIgHAYIgLAJIgbAGIgXACg");
	this.shape_32.setTransform(-14.6,-71.4,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AglBOIgQgDIgOAFIgfgQIgxABIgngeIgJgQIgRgIIAXgCIAKANIAOANIARAGIApgYIAJgZIgEggIARA5IAMAUIANAFIAQAAIAagGQAIgCAGgIIAHgaIgBgbIgLgVIANASIAjAPIA+ABIAmgIIAkgbIAcgqIgQAmIgUAPIgCASIAjgFIgBAFIgcALIADAGIAkAIIADAQIgogPIgSAEIAGAQIgXgKIgNADIACATIglgEIhrA3IgRADg");
	this.shape_33.setTransform(-3.8,-63.3,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgYAJIgMgGIAogCIAMgCIADgIIAHABIAKAQIgMACg");
	this.shape_34.setTransform(-41.8,-63.1,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AADAPIgLgdIgBgEIAGAGIANAfg");
	this.shape_35.setTransform(-38.5,-67.1,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgFgEIgGgQIAEgCIABAEIAGATIAMAWg");
	this.shape_36.setTransform(-42.1,-74.1,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgFAAIgNgRIASAQIAMAIIAHALg");
	this.shape_37.setTransform(-41.8,-71.5,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgFgIIgMgyIAjB1g");
	this.shape_38.setTransform(1.9,-29.4,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgdgNIAiAFIAZAWg");
	this.shape_39.setTransform(7.2,-28.4,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgUAKIgjADIAVgHIgMgSIAZASIAhACIAfgIIANABIgrAMg");
	this.shape_40.setTransform(-0.7,-17.6,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AhzAhICiACIBFhLIhDBQIhpABg");
	this.shape_41.setTransform(-3.9,3.6,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AAIgKIACgbIAGAgIgTAjIgNAIg");
	this.shape_42.setTransform(27.6,-77.5,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AAPgDIgUAAIgqgKIA7AAIANAGIAXAVg");
	this.shape_43.setTransform(36.3,-60.2,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAHAYIgpgpIgLgNIAWAFIgCAGIATARIAbAMIAPgEIAKALIgLgBIgQACIgQgGIAKAJIAPAKg");
	this.shape_44.setTransform(37.7,-56.6,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgBgPIAcgpIALAFIghAlIgqBHg");
	this.shape_45.setTransform(-23.5,-44.8,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgDgOIADgLIgBAPIAFAkg");
	this.shape_46.setTransform(-7.6,-47,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AADAkQgIgYAAgRIgCgfIADAjIAMAmg");
	this.shape_47.setTransform(-1.4,-26.5,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgvAGIgagQIADgHQAQAUBBAJQAhAEAeABIgiABQg2AAghgMg");
	this.shape_48.setTransform(0.4,-20.3,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AghAhQAGgIAQgFQAQgGAQgbIAMgbIAEANQAAAPgLAOQgKAOgKADQgPADgPAKIgMAJQAAgDADgFg");
	this.shape_49.setTransform(-15.9,-22.7,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AABgCIAQgVIACAHIglAoIATgag");
	this.shape_50.setTransform(-14.3,-29.2,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAWg/IAEAJIgRAwQgTAzgPATQAqhaAFglg");
	this.shape_51.setTransform(-12,-43.7,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgEgSIAFghIADgBQAEAAgBAHQgLASgBApQAAAWACARQgGggAFgng");
	this.shape_52.setTransform(-7.8,-45.1,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgaAmIgBgGIgQAFQgRAFgEAEQgLgHgPgEQgVgGgMAFQgLACgMgHQgLgHgGgLQADADAHACQAGADAGAFQAHADAMgEQAMgEACgEIAIgXIAFALQAGAMAGACQAGACAjgBQAjgCAFgEQADgFAHgVQAGgYgBgHIgCgDIAPAIQASAIAUgEQAmAFAbgIQAJADADgBIgDACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAIAYAKQgHAEgKACQgUAEgMgGQgFACgGAAIgFAAIAaAYQARAPAQAJQg2gZgYgOQgOACgmAVQgkAWgLAMQgFgEgCgHg");
	this.shape_53.setTransform(-4.2,-59.5,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgaBbQgTAFgYgLQgegOgHggQgHgrAngJIAhgJIANgGQAJgEAcgUQAfgVAJgHQANgLANgCQASgDAPAOQgGgFgJgDQgVgGgUAQQgaAWgcASQghAVgSAEQgYAFgKAGQgQAJgCATQgBAUAPATQANARARAFQAVAGANgFIAYADQAbABAOgJQAcgQANgLQAYgUADgVIgBANQgFARgOAMQgdAZgcAKQgKAEgTAAQgSAAgIgDg");
	this.shape_54.setTransform(11.3,-80.6,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgBAgQgbgZADgbIAIgXQANgFAQAuQAJAXAFAYIAAAAQgHAAgUgNg");
	this.shape_55.setTransform(-2.2,-73.1,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AAOAIIgTgEQgFgBgUgGIgTgGIAzAJQALACAkAIIgKAAQgKAAgPgCg");
	this.shape_56.setTransform(29.4,-62.3,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgFgOIgKgJQANABAKAWQAFAMADAMQgKgYgLgOg");
	this.shape_57.setTransform(-1.9,-77,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AAYAQQAMgQgIgQQgCgHgLgIIgLgGIAKAFQALAGAEAGQAMAOgNATQgHANg3AMQA0gTAGgDg");
	this.shape_58.setTransform(6.7,-79.3,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgEAFIAEgRQABAQADAJg");
	this.shape_59.setTransform(-9.6,-94.7,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AAHgDQgOgEgcgOIgZgOIAlAOQAmAQALAHQATANAQAVQgfghgXgGg");
	this.shape_60.setTransform(25.7,-56.2,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AhbAYIgWgDIAVACQAWABAHgCQAFgBAXgJIAdgMQAKgCAfgDIBPgTQhFAWgbABQgPABgbALIgjAOIgLAAIgVgBg");
	this.shape_61.setTransform(-5.7,-8.7,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AAfA3QhAgCgggeQgJgLgHgZQgGgWgCgTIALAnQAPAnAZALQAZAKA2AEQAbACAWgBQgYAFgdAAIgGAAg");
	this.shape_62.setTransform(3,-27.6,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AhDABQANgEAsgCQAqgCATADQAQADApgIIAXgFQhCAUgVgEQgVgEgeACQghAAgQAGQgNAGggACIgdABQAtgHASgHg");
	this.shape_63.setTransform(-8.2,-12.8,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgCgHIgFgjIAIAgQAJAhgDAMIgJAIQADgNgDglg");
	this.shape_64.setTransform(12.3,-95.4,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AABAGQgbgIAAgKIALAJQAPAIAaADIABAFIgagHg");
	this.shape_65.setTransform(-41.5,-66.3,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgJACIgZgCQATABAwgDIACADQgKACgPAAIgTgBg");
	this.shape_66.setTransform(-41.5,-61.6,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AAUBfQgPgJgJgIQgTgPgGgTQgGgUgIgMIgHgJIgSgjIAIAPQAJARADACQALAMAIAXQADAMAEAHIAJAMQAHAJASAIQAMAKAJAAQAFABAKgFQAHgDAEgLIAGgXQAEgegHgVIgMgYQgDgIgLgjIgJgjIAEAHQAFAIABAIQABAKAJAaQAKAcAGAJQAGALAAAeQgBAhgLAUQgJAHgKABIgEABQgIAAgGgFg");
	this.shape_67.setTransform(-32,-71.5,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgdB0QgNgBgIgPIgGgOQALAYAeAAQAPAAAVgFQALgBAJgKQANgPgBgbQAAgbgHggIgPhAQgHgcgSgLIgPgFQARgCANAQQAKANAFATQAPAvAFAvQAEArgHAWQgFASggAGQgNACgPAAIgRAAg");
	this.shape_68.setTransform(-11.3,-74.8,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgHgFIgVgOQASgBAnAoQgMgLgYgOg");
	this.shape_69.setTransform(32.8,-58.6,1.676,1.676);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AALAJQg0gFgRgPIAlALQArAKAlABIgGABQgUAAgWgDg");
	this.shape_70.setTransform(28.3,-63.6,1.676,1.676);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgcAKIgZgFQAmAFBFgUQgvAVgiAAIgBgBg");
	this.shape_71.setTransform(26.4,-67.1,1.676,1.676);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("ABzKIImVhQQgEgBgCgDIAAgCIAAgBQBAjkAZh0QAShSAMhmQACgNgDgQIgEgdIgEgXQAAgJgGgIQgQgWgHgYQgFgTgPglIgVgxQgOgdgBgMQgBgMgIgiIgFgWQgBgGgEgHIgIgMQgGgJADgLQABgFAIgPQAHgNACgFIAAgKIABgPQACglAMgRQANgTASgOQAggYAnAOQAOgSAYgKQAWgIAaABQAFgUALgRQANgTARgMQAYgRAaADQAXADAaAbIAKgKQAJgHAJgEQAJgDAQAAQAPAAAKAHQAcASAHATQADAKgBAVIgBACIABAAIAEACQAHAEAGAGQAHAGALATIAZAoIAXAlQANAXAIAQQALAaAFAcQAGAhgJARQgDAGgRAUIhcBpQgTAXgKANQgOAVgGAUQgEANAEAfQACANADAyQADA0gBAMIgMB+QgGBCgDBqQgCBcgBC3QAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCABIgBAAgAjboIQgWAMgTAbQgLARgBAqIAAAJIgBAKIgLAUQgHAPgBAFQgBAGAHAKIAKAPQADAEABAMIAFAaIAIAoQACALAHAOIAMAZQAWAxAPAzQADALALAPIAKAPQACAEABAHIABALIADAbQAEArgEAmQgEAhgMBBQgRBXgcBtQgQA/glCEIgBACIGKBOQABiyADh/QAChMAJhsQAEgnABg6QAChFgEgbIgEglQgCgYATggQALgSAkgoIBchrQANgQAAgWQgCgqgcgzQgRgggZgmIgQgbQgKgQgKgJQgLgFgDgEQgCgDAAgIIABgMQgBgNgIgKQgGgJgMgJQgLgIgFAAQgPgBgMADQgHADgIAHIgOANQgEAEgFgEQgOgPgHgFQgNgLgNAAQgYgBgYATQgbAXgKAmQAAADgEAAQgZgCgVAJQgYAJgNATQgDADgEgCQgMgFgNAAQgPAAgOAHg");
	this.shape_72.setTransform(0,0,1.676,1.676);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AkjI0QBEjwAYhzQAPhKAGgtIAHg8QADgWgEgVIgGgbIgCgNQgBgFgBgCQgWgfgDgOQgCgKgKgbIgPgmQgeg/gBgMQgBgHgGgfIgIgmIgMgSQgGgJABgFQAAgEAKgTQAKgTAAgDQAAg4AOgUQAuhBA2AYQALgPASgKQAagOAgACQAEgPAKgSQAVgkAhgJQAVgFAMADQARAGAYAZQASgRAFgDQAQgJAbADQAOAIALAKQARAPAAANIABAUQgBAJADABQAEABAHAFQAIAGAEAHQAHAJAfAyQAhA3AIARQALAbAFAbQAHAkgLAPQgMAQhqB5QgwA3AEAmQADAbgDB6QgDB3gFA+QgFBPgCE3g");
	this.shape_73.setTransform(-0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-108.6,101.6,217.3);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAIAUIAIiSIACAAIgICSIgbBrg");
	this.shape.setTransform(-4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AANgIIgChnIAFBlIgfB6g");
	this.shape_1.setTransform(-6.2,13.6,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAJgKIABhhIADAAIgCBiIgXB1g");
	this.shape_2.setTransform(-10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgMgIIAGAOIAGgBIANgIIgMALIgKABg");
	this.shape_3.setTransform(-20.1,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AADADIgOAFIAUgPIADAPg");
	this.shape_4.setTransform(-17.6,-13,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgPAAIgHAAIAGgCIAPADIAIgEIAQAAIgPACIgIAGg");
	this.shape_5.setTransform(-15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAAOIAPgSIAEgSIgBAVIgSASIgSAGg");
	this.shape_6.setTransform(17.4,-46.4,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgrAFIAeACIAigMIAXgDIgaAFIgfAMg");
	this.shape_7.setTransform(-8.7,-5.1,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgFAEIAPgEIAIgGIgHAGIgOAFIgNACg");
	this.shape_8.setTransform(11.5,-12.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAJgBIALgFIgGAEIAEABIgUAGIgSACg");
	this.shape_9.setTransform(9.8,-10.3,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAIgBIAHgBIgGACIgXAEg");
	this.shape_10.setTransform(-14.4,-2.3,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAAACIgGgNIAHALIAGgBIgHANg");
	this.shape_11.setTransform(-27.9,-32.7,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAOABIgIgBIgHABIgRgBIASgDIAOADIAFAEg");
	this.shape_12.setTransform(24.3,-38.9,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AACAHIgFgFIgFgCIgKgKIAVAPIAPAGg");
	this.shape_13.setTransform(19.3,-35.2,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgEgEIAEABIAFAIg");
	this.shape_14.setTransform(26.5,-31.6,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgIACIgCgFIAIgBIAMAFIABAEg");
	this.shape_15.setTransform(1.2,-13.1,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgRAIIgCgFIAGgBIgDgFIgHgFIAKADIAFAFIAFAAIABgCIAKACIgCgJIAGAJIAMAFIgLABIgNgDIgFABIAFAGg");
	this.shape_16.setTransform(6.1,-13.7,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgHACIAEgCIgDgFIAOALg");
	this.shape_17.setTransform(9.9,-14.8,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgEgEIAEABIAFAIg");
	this.shape_18.setTransform(11.2,-15,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgMgGIAMAKIAKAAIADADIgOAAg");
	this.shape_19.setTransform(10.7,-16.7,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEgEIAJAFIgFAEg");
	this.shape_20.setTransform(13.9,-17,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgYATIACgGIgEgLIAKALIAJADIAMgFIALgJIADgJIABgJIgDgNIAKAZIgDAPIgTAPIgPADg");
	this.shape_21.setTransform(-16.6,-40,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AAAAAIgEgZIAEAJIADAQIACAUIgGAGg");
	this.shape_22.setTransform(7.7,-59.4,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAAAAIgGgNIgGgHIAAgIIADALIAEACIAGAMIAFANIAGANIgIAGg");
	this.shape_23.setTransform(-4,-55.2,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgLAxIgKgUIgCgYIgHgNIgKghIgCgQIACAEIAEASIAGAQIAGAHIAUA7IAHAHIAcgGIAGgJIgCgKIgJgOIgDgVIACgNIAFgBIAEAUIAJAMIAAATIgEAQIgHAGIgfAFg");
	this.shape_24.setTransform(-9.2,-44.6,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgXAxIgKgCIgJADIgUgKIgdABIgZgTIgFgKIgLgFIAOgCIACACIAFAGIAJAJIAKADIAZgOIAGgQIgCgTIAKAjIAHALIAJAEIAKAAIAQgEQAFgCAEgEIAEgQIgBgRIgHgNIAIALIAXAKIAmAAIAYgEIAWgSIARgaIgKAYIgMAJIgBAMIAVgDIAAACIgRAIIACADIAWAFIACAKIgZgJIgLACIADAKIgNgGIgJACIABALIgXgCIhDAiIgJADg");
	this.shape_25.setTransform(-2.4,-39.6,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgOAGIgIgEIAZgBIAHgBIACgFIAEAAIAEAFIADAFIgIABg");
	this.shape_26.setTransform(-26.1,-39.4,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AADAJIgIgUIAEADIAHAUg");
	this.shape_27.setTransform(-24.1,-41.9,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgDgCIgDgKIACgBIABACIADAMIAHANg");
	this.shape_28.setTransform(-26.3,-46.3,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgDAAIgIgKIALAKIAIAEIAEAHg");
	this.shape_29.setTransform(-26.1,-44.7,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgRgIIAUAEIAPANg");
	this.shape_30.setTransform(4.5,-17.8,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgMAGIgWACIANgEIgHgLIAPALIAUABIAUgFIAIAAIgbAIg");
	this.shape_31.setTransform(-0.5,-11,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AhHAUIBlACIAqgvIgpAyIhBABg");
	this.shape_32.setTransform(-2.5,2.2,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAFgGIABgRIAEAUIgLAWIgIAFg");
	this.shape_33.setTransform(17.2,-48.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAKgCIgNAAIgagGIAkAAIAIAEIAPANg");
	this.shape_34.setTransform(22.6,-37.6,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAFAPIgagZIgHgIIAPADIgCAEIAMAKIAQAHIAKgCIAFAHIgGgBIgKABIgKgEIAGAGIAJAGg");
	this.shape_35.setTransform(23.4,-35.4,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgBgJIASgZIAHADIgVAXIgaArg");
	this.shape_36.setTransform(-14.7,-28,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AACAWQgEgPgBgKIgBgTIACAWIAHAXg");
	this.shape_37.setTransform(-0.9,-16.6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgdADIgQgJIACgEQAKAMAnAFQAWADASAAIgUABQgiAAgVgIg");
	this.shape_38.setTransform(0.2,-12.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgVAVQAEgFALgDQAPgGAMggIACAIQAAAKgHAIQgGAKgHACQgIABgKAGIgHAFIABgEg");
	this.shape_39.setTransform(-10,-14.2,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AALgPIACAEIgZAag");
	this.shape_40.setTransform(-9.1,-18.1,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AANgnIADAGIgLAdQgLAggJAMQAZg4ADgXg");
	this.shape_41.setTransform(-7.5,-27.3,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCgLIACgVIADAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgHAMgBAZIABAYQgDgUADgYg");
	this.shape_42.setTransform(-4.9,-28.2,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgPAYIgBgEIgKADQgLADgDACQgGgEgKgCQgNgEgHADQgIABgHgEQgHgEgDgHIAGADQAEACADADQAEABAIgCQAIgDABgCIAFgOIADAHQAEAHADABQAEACAWgBQAWgBADgDQACgDAEgNQAEgOgBgFIgBgBIAJAFQALAEANgCQAWAEASgGIAIABIgCABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAPAGQgRAIgOgGQgEACgFAAIAQAOQAKAJAJAGQgggPgPgJQgJACgXAMQgXAOgHAHQgCgCgBgEg");
	this.shape_43.setTransform(-2.7,-37.2,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgQA5QgMAEgPgHQgTgJgEgUQgGgaAagGIAVgFIAIgEIAXgPIAYgSQAVgSARARQgEgEgGgBQgNgEgNAKQgQAOgRALQgVANgLACQgPAEgGAEQgKAFgBALQgBANAJAMQAIALALADQANADAIgDQAaAGAPgIQASgMAIgGQAPgNABgMIgBAIQgCAKgJAIQgVARgPAFQgGACgMAAQgLAAgFgCg");
	this.shape_44.setTransform(7,-50.5,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAAUQgRgPACgRIAFgPQAIgDAKAdQAFAOAEAPIgBAAQgFAAgLgIg");
	this.shape_45.setTransform(-1.4,-45.7,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAJAFIgMgDIgbgIIAeAGQAIABAXAFIgHABIgPgCg");
	this.shape_46.setTransform(18.3,-39,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgDgIIgGgGQAMABAGAcQgFgPgHgIg");
	this.shape_47.setTransform(-1.3,-48.1,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAPAKQAIgKgFgKQgCgEgHgFIgGgEIAGADQAHAEADAEQAGAJgHALQgFAIgiAIQAhgMADgCg");
	this.shape_48.setTransform(4.1,-49.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgCAEIACgLQABAJACAGg");
	this.shape_49.setTransform(-6,-59.2,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAEgBQgHgDgSgJIgQgJIAXAJQAXAKAIAEQALAJAKANQgTgVgPgDg");
	this.shape_50.setTransform(16,-35.2,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag4APIgOgCIAfABQAGgBAegNQAGgBATgCIAxgMQgrAOgRABQgKAAgQAHIgVAIIgIABIgMgBg");
	this.shape_51.setTransform(-3.6,-5.5,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AATAiQgngBgVgSQgFgHgFgPQgDgOgBgMIAGAYQALAZAPAGQAPAHAiACIAeABQgOACgRAAIgGAAg");
	this.shape_52.setTransform(1.8,-17.3,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgsABQAIgCAcgBQAagCALADQAKABAagFIATgEQgtAOgOgDQgMgCgTAAQgVABgKAEQgNAFghAAQAcgEALgFg");
	this.shape_53.setTransform(-4.8,-8.2,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgBgEIgDgVIAFATQAGAUgCAIIgGAFQACgJgCgWg");
	this.shape_54.setTransform(7.6,-59.6,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgQgHIAHAFQAJAFAQACIABADQgggGgBgJg");
	this.shape_55.setTransform(-26,-41.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGABIgPgBQAMABAdgCIACACIgOABIgOgBg");
	this.shape_56.setTransform(-25.9,-38.5,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AAMA8QgJgGgFgFQgMgJgEgMQgDgMgFgIIgFgGIgLgWIAMAVQAIALAEALQADAIAHALQAFAGALAGQAHAGAFAAIAKgDQAHgDADgUQADgTgEgNIgIgOIgOgxIACAEQADAFABAFIAHAWQAGASADAGQAEAGAAATQgBAVgGAMQgIAFgGAAQgFAAgFgCg");
	this.shape_57.setTransform(-20.1,-44.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgRBIQgIAAgGgJIgEgJQAHAPATAAQAJAAANgEQAHAAAGgHQAIgJgBgRQAAgRgEgUIgJgnQgFgSgLgGIgJgEQAKgBAIAKQAHAJACALQAKAdADAdQACAbgEAOQgDALgUAEQgJACgKAAIgIgBg");
	this.shape_58.setTransform(-7.1,-46.7,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgDgDIgOgIQALgBAYAYQgHgGgOgJg");
	this.shape_59.setTransform(20.4,-36.7,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgkgGIAXAGQAbAGAXABIgHAAQgyAAgQgNg");
	this.shape_60.setTransform(17.7,-39.8,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgRAGIgQgDQAYADArgMQgeANgUAAIgBgBg");
	this.shape_61.setTransform(16.4,-41.9,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("ABIGUIj7gxIgDAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAniMAQhKQAMg0AHg/QABgIgBgLIgDgRIgCgPQgBgGgDgEQgKgOgEgPIgNgjIgNgfQgJgQgBgJIgFgdIgDgNQgBgEgIgMQgDgGACgHIAFgMIAGgMIAAgPQACgYAHgKQAKgNAKgHQATgQAZAKQAJgMAPgGQANgFAQABQAHgcAWgPQAPgKARACQAMABASARQALgLAGgCQAFgCALAAQAJAAAGAEQASAMAEAMQACAGgBANIAAABIABAAIACACQAEACAEAEQAFAEAHALIAPAZQAWAkAFAMQAIAQADARQAEAVgGALQgDAFgKALIg5BCQgZAbgGAUQgCAIACAUQACAIABAfIABAoIgHBPQgEAxgBA6QgCBMAABgQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABgBAAIgBgBgAiIlEQgOAHgLARQgHALgBAaQAAAJgBADIgGANIgGAMQgBAGALANIADAKIADARIAFAYQABAFAMAaQANAdAKAiQACAGAHAKIAGAKQACAEABAJIABARQADAZgDAZQgDAcgHAhQgKA3gSBEIghB6IAAABID1AwQAAhVADhpQABg1AGg9QACgXABgmQABgrgCgRIgDgXQgBgOAMgVQAHgMAWgYIA6hDQAIgKgBgOQAAgbgSgfIgagsIgKgQQgHgKgGgGQgGgDgDgCQgBgCAAgFIAAgIQAAgNgQgMQgHgFgDAAQgKgBgHACQgGACgMAMQgDADgDgDQgSgTgLAAQgPgBgOAMQgSAPgFAXQgBAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgjgCgRAYQgBAAAAAAQgBAAAAAAQgBABgBgBQAAAAgBAAQgIgDgHAAQgJAAgJAFg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ai1FgQAriWAOhIQAJguAFgcIAEglQACgOgDgNIgEgRIgCgMIgIgLQgHgKgBgHQgDgMgOgjQgTgnAAgIIgJgvQgMgPABgFIAGgPQAHgLgBgCQAAgjAJgNQAcgpAjAPQAGgJAMgGQAQgJAUACQADgKAGgLQANgWAVgGQAMgDAHACQAMADAOAQQALgLAEgCQAKgFAQACQAaAPAAANIABANQAAAFACABQAGABAIALQAFAGATAfQAUAiAFALQAHAQAEASQADAWgGAJIhKBWQgeAjACAXQACARgCBMQgBBKgDAnQgEAxgBDCg");
	this.shape_63.setTransform(-0.1,-0.1,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.7);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAIATIAIiMIABAAIgHCMIgbBng");
	this.shape.setTransform(-4.3,15.2,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AAMgIIgChjIAFBhIgdB2g");
	this.shape_1.setTransform(-5.9,13.3,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAJgKIABhdIADAAIgCBeIgXByg");
	this.shape_2.setTransform(-9.8,14.2,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgLgIIAFANIAGAAIAMgIIgLALIgKABg");
	this.shape_3.setTransform(-19.3,-14.9,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AAIgHIAEAOIgIgFIgPAGg");
	this.shape_4.setTransform(-16.9,-12.4,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgOAAIgHABIAFgDIAOAEIAIgGIAQABIgOADIgIAEg");
	this.shape_5.setTransform(-15.1,-8.7,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAANIAOgRIAFgRIgBAUIgSASIgRAFg");
	this.shape_6.setTransform(16.8,-44.6,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgpAFIAdABIAggLIAWgCIgYAEIgeAMg");
	this.shape_7.setTransform(-8.4,-4.8,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgFAEIAOgEIAIgGIgGAGIgOAFIgNACg");
	this.shape_8.setTransform(11,-12,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAJgBIALgFIgHAEIAEABIgSAGIgSACg");
	this.shape_9.setTransform(9.4,-9.8,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAAADIgGgOIAHAKIAGAAIgHANg");
	this.shape_10.setTransform(-26.8,-31.4,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAOACIgIgBIgHAAIgQgBIARgDIANADIAGAEg");
	this.shape_11.setTransform(23.4,-37.4,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AACAHIgKgHIgJgKIAUAOIAPAHg");
	this.shape_12.setTransform(18.7,-33.8,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgEgEIAEABIAFAIg");
	this.shape_13.setTransform(25.5,-30.4,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgHABIgDgEIAIgBIAMAEIABAFg");
	this.shape_14.setTransform(1.2,-12.5,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgQAIIgCgFIAGgBIgEgEIgGgGIAKAEIAEAEIAFAAIABgCIAJACIgBgJIAGAJIALAFIgKABIgNgDIgFABIAFAGg");
	this.shape_15.setTransform(5.8,-13.1,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgGACIADgCIgCgFIAMALg");
	this.shape_16.setTransform(9.6,-14.2,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgDgEIADABIAFAHg");
	this.shape_17.setTransform(10.8,-14.3,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgBAHIgLgNIALAJIALAAIADAEg");
	this.shape_18.setTransform(10.4,-15.9,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEgDIAJAEIgFADg");
	this.shape_19.setTransform(13.5,-16.2,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgXATIACgGIgEgLIAKALIAJADIALgGIALgJIADgIIABgJIgEgLIAKAXIgDAOIgSAPIgOADg");
	this.shape_20.setTransform(-16,-38.4,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgBAAIgDgYIAEAJIADAPIACATIgGAGg");
	this.shape_21.setTransform(7.4,-57.1,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AAAAAIgGgMIgFgGIAAgIIADAKIADACIACADIAEAIIAFANIAGAMIgHAGg");
	this.shape_22.setTransform(-3.8,-53.1,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgLAwIgJgUIgDgXIgGgNIgKgfIgCgQIADAEIAJAhIAGAHIATA5IAHAGIAbgFIAGgJIgCgKIgJgOIgDgUIACgMIAFgBIAEATIAIAMIABASIgFAPIgGAGIgeAFg");
	this.shape_23.setTransform(-8.8,-42.9,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgWAvIgKgCIgIADIgTgJIgdAAIgYgSIgFgJIgKgFIAOgBIACACIAEAFIAIAIIAKADIAZgOIAFgOIgCgTIALAhIAGAMIAIADIAKAAIAPgDQAGgCADgEIAEgQIAAgQIgHgNIAIAMIAVAIIAlABIAXgFIAWgQIAQgZIgKAWIgLAJIgCAMIAVgEIAAADIgRAHIACAEIAVAEIACAKIgYgJIgKACIACAJIgNgFIgIABIABAMIgWgCIhAAgIgKACg");
	this.shape_24.setTransform(-2.3,-38,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgOAGIgHgEIAXgCIAHAAIACgFIAFABIAGAJIgHABg");
	this.shape_25.setTransform(-25.1,-37.9,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AACAJIgHgTIAEADIAFALIACAHg");
	this.shape_26.setTransform(-23.2,-40.3,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgDgCIgDgJIACgCIAEAOIAHANg");
	this.shape_27.setTransform(-25.3,-44.5,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgDABIgHgKIAKAJIAIAEIADAGg");
	this.shape_28.setTransform(-25.1,-42.9,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgRgHIAUADIAPANg");
	this.shape_29.setTransform(4.3,-17,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgLAGIgVACIAMgFIgHgKIAPAKIATABIATgEIAHAAIgZAIg");
	this.shape_30.setTransform(-0.5,-10.5,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AhFAUIBhABIAqgtIgpAwIg/ABg");
	this.shape_31.setTransform(-2.3,2.2,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAEgFIACgRIAEATIgMAVIgHAFg");
	this.shape_32.setTransform(16.6,-46.6,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAJgBIgMgBIgZgGIAjAAIAIAEIAOANg");
	this.shape_33.setTransform(21.8,-36.1,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAEAOIgYgXIgGgIIAMACIAAAFIAKAKIAQAHIAJgDIAHAGIgHAAIgKABIgJgDIAGAFIAJAGg");
	this.shape_34.setTransform(22.6,-34,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAgIIARgZIAGADIgUAWIgZAqg");
	this.shape_35.setTransform(-14.1,-26.9,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AACAWQgEgPAAgJIgBgTIACAVIAGAWg");
	this.shape_36.setTransform(-0.8,-15.9,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgcADIgQgJIADgEQAIAMAnAFQAVADARAAIgSABQgiAAgUgIg");
	this.shape_37.setTransform(0.3,-12.1,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgTAUQADgFAKgDQAPgFALgeIACAHQABAJgHAIQgGAJgHACQgIACgJAFIgHAFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBg");
	this.shape_38.setTransform(-9.6,-13.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AALgOIABAEIgXAZg");
	this.shape_39.setTransform(-8.7,-17.4,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AANglIADAEIgLAeQgLAegJALQAZg2ADgVg");
	this.shape_40.setTransform(-7.2,-26.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgCgKIACgUIADgBQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQgKASAFApQgEgUADgWg");
	this.shape_41.setTransform(-4.7,-27,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgPAXIgBgEIgKADQgKADgCACQgGgEgKgCQgNgEgGADQgIABgHgEQgGgEgEgGIAGADQAFABADADQAEACAHgDQAHgCACgCIAEgOIADAGQAEAIADABQADABAWAAQAVgBADgDQABgDAFgMQAEgOgBgFIgBgBIAJAFQAKAEAMgDQAUAEAUgFIAGABIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAOAHQgQAHgNgFIgHABIgDAAIAPAOQALAJAJAFQgggPgOgIQgIACgXAMQgVANgHAHQgDgCgBgEg");
	this.shape_42.setTransform(-2.5,-35.7,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgOA3QgMADgOgGQgTgJgDgTQgGgZAYgGQATgEAJgFIAWgOQATgMAFgFQASgQAQAOQgDgDgFgBQgMgEgMAKQgoAigXAFQgOADgGAEQgKAEgBAMQAAAMAIALQAIALAKADQANADAIgDQAZAGAOgIQARgLAIgGQAOgNACgMIgBAIQgDAKgJAIQgQAOgSAHQgGACgLAAQgLAAgEgCg");
	this.shape_43.setTransform(6.7,-48.5,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAATQgQgPABgQIAFgOQAIgDAKAcQAFANADAPQgEAAgMgIg");
	this.shape_44.setTransform(-1.3,-43.9,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AAJAFIgmgLIAeAGQAHABAWAFIgGABIgPgCg");
	this.shape_45.setTransform(17.7,-37.4,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgDgIIgFgFQALAAAGAbQgGgOgGgIg");
	this.shape_46.setTransform(-1.2,-46.2,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AAOAJQAIgJgFgJQgBgEgHgFIgGgEIAGADQAGADADAEQAGAJgHALQgEAHghAIQAfgMADgCg");
	this.shape_47.setTransform(4,-47.6,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgCADIACgKQAAAJADAGg");
	this.shape_48.setTransform(-5.7,-56.9,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAEgBQgIgDgQgIIgPgJIAVAJQAXAJAHAEQALAIAKANQgTgUgOgDg");
	this.shape_49.setTransform(15.4,-33.7,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("Ag2APIgOgCIANABQANAAAFgBQAFgBAcgMQAGgBATgCIAwgLQgqANgQABQgKAAgQAHIgUAIIgIAAIgLAAg");
	this.shape_50.setTransform(-3.4,-5.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AATAhQgmgBgUgSQgFgGgEgPQgEgNgBgMIAGAYQAKAXAPAGQAPAHAfACIAeAAQgNADgRAAIgFAAg");
	this.shape_51.setTransform(1.8,-16.6,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgoABQAIgCAagCQAagBAKACQALACAYgFIAOgDQgoAMgMgDQgMgBgTAAQgUAAgJAEQgNAFggAAQAcgEAKgEg");
	this.shape_52.setTransform(-4.9,-7.7,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgBgDIgDgVIAFATQAFATgCAHIgFAEQACgHgCgVg");
	this.shape_53.setTransform(7.4,-57.3,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgPgHIAGAFQAJAFAQACIAAADQgegGgBgJg");
	this.shape_54.setTransform(-25,-39.8,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgHABIgLgBQALABAagCIABABIgOACIgNgBg");
	this.shape_55.setTransform(-24.7,-37,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AAMA5QgJgFgFgFQgLgJgEgMQgEgLgFgIIgEgFIgLgVIAMAUQAIALAEAKQADAKAHAIQAEAGAKAFQAHAGAGAAIAJgCQAGgDAEgTQACgTgEgMIgHgOIgOgvIACAEQADAFABAEIAGAWQAGARAEAFQAEAGgBATQAAAUgHAMQgFAEgGABIgCAAQgFAAgEgDg");
	this.shape_56.setTransform(-19.3,-42.9,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgRBGQgIgBgFgIIgDgJQAGAOATAAQAIAAANgDQAHAAAFgHQAHgIAAgRQAAgYgNgxQgFgRgKgHIgJgDQATgBAIAdQAJAcADAcQACAagEANQgDALgTAEIgRABIgKAAg");
	this.shape_57.setTransform(-6.8,-45,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgDgCIgOgJQALAAAYAXQgHgGgOgIg");
	this.shape_58.setTransform(19.7,-35.2,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgigGIAWAGQAaAGAVABIgGAAQgwAAgPgNg");
	this.shape_59.setTransform(17,-38.2,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AggADQAYADAogLQgdALgTAAg");
	this.shape_60.setTransform(15.9,-40.2,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AisFWQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAniHAPhIQALgvAHhAQABgIgBgJIgDgRIgCgOQAAgFgEgFQgKgOgEgOQgDgMgJgWIgMgdQgJgTAAgGIgGgbIgDgOIgIgPQgDgFACgHIAFgMIAFgLIABgPQACgXAHgJQAIgNAKgHQATgOAXAIQARgWAjABQAHgbAVgOQAOgKAQACQANABAQARQAKgKAHgDQAFgCAKAAQAJAAAGAEQARALAEAMQACAGgBANIAAABIADABIAIAGIALAPIAPAYQAVAkAFAKQAHARADAPQAEATgGALIgMAPIg3BAQgZAcgFASQgDAJADARQACAJABAdQACAggBAGIgHBMQgEAxgBA3IgCClQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAgAiDk4QgOAHgKARQgHAJgBAaIgBALIgGANQgEAIgBAEQgBADAFAGIAGAJIACAKIADAQIAFAXQABAFALAZQALAYAMAkQABAGAHAKIAGAJQACAEABAJIABAQQADAYgDAZIgJA7QgPBLgsCgIgBABIDtAuQAAhlAChSQABgyAGg8QACgVABglQABgpgCgQIgDgXQgBgNAMgUQAFgKAXgaIA3hAQAIgKAAgNQgCgagQgeIgZgqQgQgZgGgGQgHgDgCgCIgBgHIABgHQgBgNgQgMIgJgFQgLAAgFACQgGACgMAMQgBACgEgCQgRgTgMAAQgNgBgPAMQgRAOgFAXQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgOgBgNAFQgOAGgJALQAAABgBAAQAAAAAAAAQgBABgBgBQAAAAgBAAQgHgDgIAAQgJAAgIAEg");
	this.shape_61.setTransform(0,0,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AiuFUQApiRAOhFQAJgsAEgcIAEgjQACgNgDgNIgDgQIgDgNQgNgRgCgJQgBgHgPgnQgSglgBgHIgJgvIgGgKQgEgFAAgEIAGgOQAGgLAAgCQAAghAJgMQAbgnAhAOQAGgJALgGQAQgJATACQADgKAGgKQAMgVAUgGQAMgDAHACQALADAOAQQAKgLAEgCQAJgFARACQAZAPAAAMIAAAMQAAAGACAAQAGABAIALIAWAkQAVAhAEAKQAHAQADAQQAEAVgHAKQgKAOg8BEQgdAgACAYQACAQgCBJQgCBIgDAlQgDAvgBC7g");
	this.shape_62.setTransform(-0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-65.2,61.1,130.6);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AALAZIAKi+IADAAIgLC/IgkCMg");
	this.shape.setTransform(-5.7,20.5,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AAWglIgBiGIAGCEIg1DTg");
	this.shape_1.setTransform(-9,22.2,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAMgOIACh9IADgBIgCCAIgfCZg");
	this.shape_2.setTransform(-13.3,19,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgQgLIAIASIAIgBIARgKIgPAPIgPABg");
	this.shape_3.setTransform(-26,-20.2,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AAFADIgUAHIAbgTIAEATg");
	this.shape_4.setTransform(-22.9,-16.8,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgUAAIgJAAIAHgDIAUAFIALgHIAVABIgTADIgLAHg");
	this.shape_5.setTransform(-20.4,-11.8,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAASIAUgXIAFgYIgBAbIgYAYIgYAIg");
	this.shape_6.setTransform(22.6,-60.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("Ag4AHIAnACIAsgQIAegEIghAHIgqAQg");
	this.shape_7.setTransform(-11.3,-6.5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgOABIAqgOIgnAPIgQAMg");
	this.shape_8.setTransform(11,-7.6,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgHAGIAUgHIAKgHIgIAIIgTAHIgSACg");
	this.shape_9.setTransform(14.9,-16.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AALgBIAQgHIgJAGIAFAAIgZAJIgYACg");
	this.shape_10.setTransform(12.8,-13.3,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAKgCIAJgCIgHAEIgeAEg");
	this.shape_11.setTransform(-18.7,-3,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAAAEIgIgTIAKAOIAHgBIgJASg");
	this.shape_12.setTransform(-36.3,-42.5,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AASACIgKgCIgKABIgWgBIAXgEIATAEIAHAFg");
	this.shape_13.setTransform(31.7,-50.5,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AADAJIgOgKIgMgMIAbASIAUAJg");
	this.shape_14.setTransform(25.2,-45.7,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgFgGIAEABIAHAMg");
	this.shape_15.setTransform(34.5,-41,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgCAAIgLgYIAbAxg");
	this.shape_16.setTransform(24.4,-34.2,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgLADIgDgHIAKgCIARAHIACAGg");
	this.shape_17.setTransform(1.7,-17.1,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgXALIgBgHIAHgBIgFgHIgJgHIAPAFIAFAGIAHAAIABgDIANADIgCgMIAIAMIAPAGIgNABIgSgDIgHACIAGAHg");
	this.shape_18.setTransform(7.9,-17.8,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgJACIAFgCIgDgHIARAPg");
	this.shape_19.setTransform(13,-19.2,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgFgFIAFABIAGAKg");
	this.shape_20.setTransform(14.6,-19.3,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgBAJIgPgRIAPAMIAOAAIAEAFg");
	this.shape_21.setTransform(14,-21.6,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgFgFIALAHIgGAEg");
	this.shape_22.setTransform(18.2,-22,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgMgXIAZAuIgCABg");
	this.shape_23.setTransform(18.9,-26.6,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgfAYIACgHIgFgOIANAPIAMADIAQgHIAOgMIAEgMIABgLIgEgQIANAgIgEASIgZAUIgTAFg");
	this.shape_24.setTransform(-21.5,-51.9,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgBAAIgFghIAFAMIAFAVIADAaIgJAHg");
	this.shape_25.setTransform(10.1,-77.2,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAAAAIgIgRIgHgJIAAgKIADAOIAFADIADAEIAFALIAHASIAIAQIgKAHg");
	this.shape_26.setTransform(-5.1,-71.8,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgPBAIgMgaIgEgfIgIgSIgNgqIgDgVIADAFIAFAYIAIAUIAIAJIAaBOIAJAIIAkgHIAIgMIgCgNIgMgTIgEgbIADgRIAGgBIAGAaIALAQIAAAZIgGAUIgJAIIgoAGg");
	this.shape_27.setTransform(-11.9,-58,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgeA/IgNgCIgLAEIgagMIgnAAIgggZIgHgMIgOgHIATgBIACACIAGAIIAMALIANAEIAhgUIAIgUIgDgZIANAuIAKAPIAKAFIANABIAVgGQAIgCAEgGIAGgVIgBgWIgJgRIAKAPIAdAMIAyABIAfgGIAegXIAWgiIgNAfIgQAMIgBAPIAcgEIgBAEIgXAJIADAFIAdAGIACANIghgMIgNADIADANIgSgIIgLADIACAPIgegDIhXAsIgNADg");
	this.shape_28.setTransform(-3.1,-51.4,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgTAIIgKgFIAggCIAJgCIADgGIAFABIAKAMIgLACg");
	this.shape_29.setTransform(-33.9,-51.2,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AADANIgKgYIgBgDIAGAEIAKAag");
	this.shape_30.setTransform(-31.3,-54.5,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgEgDIgEgNIACgCIAGAUIAJARg");
	this.shape_31.setTransform(-34.2,-60.2,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgEABIgKgPIAOAOIAKAGIAFAJg");
	this.shape_32.setTransform(-33.9,-58,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgEgGIgJgpIAbBfg");
	this.shape_33.setTransform(1.5,-23.9,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgXgKIAbAEIAUARg");
	this.shape_34.setTransform(5.9,-23.1,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgQAIIgcADIARgGIgKgPIAUAPIAbACIAZgHIAKABIgjAKg");
	this.shape_35.setTransform(-0.6,-14.3,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AhdAbICEACIA3g9Ig2BBIhVAAg");
	this.shape_36.setTransform(-3.2,2.9,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AAGgIIACgWIAGAaIgQAdIgKAGg");
	this.shape_37.setTransform(22.5,-63,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AANgCIgRAAIgigJIAwAAIAKAFIATASg");
	this.shape_38.setTransform(29.5,-48.9,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AAGATIgqgrIASAEIgCAFIAPAOIAWAJIAMgEIAIAKIgIgBIgNACIgNgFIAHAIIANAHg");
	this.shape_39.setTransform(30.6,-46,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgBgLIAXgiIAJAEIgbAeIgiA5g");
	this.shape_40.setTransform(-19.1,-36.4,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgCgMIACgJIAAAOIAEAcg");
	this.shape_41.setTransform(-6.2,-38.2,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AACAdQgFgTgBgOIgBgZIACAdIAJAeg");
	this.shape_42.setTransform(-1.1,-21.5,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgmAFIgVgNIACgFQANAPA1AIQAaADAZABIgbAAQgsAAgbgJg");
	this.shape_43.setTransform(0.3,-16.4,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgbAbQAFgHAOgEQAMgEANgWIAKgWIADAKQABAMgKAMQgIALgIACQgMADgMAIQgHADgDAEQAAgDACgDg");
	this.shape_44.setTransform(-12.9,-18.4,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AABgBIANgRIABAFIgdAgIAPgUg");
	this.shape_45.setTransform(-11.6,-23.7,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AARgzIAEAHIgOAnQgPApgMAQQAihJADgeg");
	this.shape_46.setTransform(-9.8,-35.4,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgDgOIAEgbIADgBQADAAgBAGQgJAPAAAhQgBARACAOQgFgaAEgfg");
	this.shape_47.setTransform(-6.4,-36.6,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgVAfIgBgFIgMAEQgOAEgEAEQgIgGgOgDQgPgFgKAEQgKABgKgFQgJgFgEgKQACADAGACQAFABAFAFQAFACALgEQAJgDACgCIAGgTIAEAJQAFAJAEACQAGACAcgBQAdgCADgDQACgEAGgSQAFgSAAgGIgBgDIALAHQAPAGAQgDQAfAEAVgGIAKABIgCABQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAUAJQgXALgRgIIgJACIgEAAIAVASQAOANAMAHQgqgUgUgLQgLACgfARQgeARgIAKQgEgDgCgGg");
	this.shape_48.setTransform(-3.4,-48.3,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgVBKQgQAEgTgIQgZgMgFgaQgFgiAfgIQAZgGANgGIAegTQAZgRAHgGQAKgJALgCQAPgDAMAMQgFgEgIgCQgQgGgRAOQgVASgXAOQgaARgPADQgUAFgIAFQgNAGgBAQQAAAQALAPQALAPANADQARAFALgDIAUACQAVABAMgHQAXgOALgJQATgRACgQIgBALQgDANgMAKQgXAUgXAJQgIADgQAAIgDAAQgMAAgGgDg");
	this.shape_49.setTransform(9.2,-65.5,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAaQgWgUACgWIAGgTQALgEANAmQAHASAFATIgBAAQgGAAgPgKg");
	this.shape_50.setTransform(-1.8,-59.4,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AALAGIgPgDIgjgLIAoAIQAJACAeAGIgIABQgIAAgNgDg");
	this.shape_51.setTransform(23.9,-50.6,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgEgLIgIgIQALABAHATQAEAJACAKQgIgUgIgLg");
	this.shape_52.setTransform(-1.6,-62.5,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AATAMQAKgMgGgOQgCgFgJgGIgIgFIAIAEQAJAFADAFQAJAMgKAPQgGAJgsALQAqgPAEgEg");
	this.shape_53.setTransform(5.4,-64.4,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgDAEIADgNQABAMADAHg");
	this.shape_54.setTransform(-7.7,-76.9,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAGgCQgLgDgXgNIgUgKIAeALQAeANAJAFQAPALANARQgZgbgSgEg");
	this.shape_55.setTransform(20.8,-45.6,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AhKAUIgRgDIARABQASABAFgBQAIgBAmgRQAJgCAZgCIA/gQQg3ASgWACQgNAAgWAJIgcALIgKABIgQgBg");
	this.shape_56.setTransform(-4.6,-7,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AAZAsQg0gBgagYQgIgJgFgUQgFgSgBgQIAIAgQANAgAVAIQAUAJArADQAWABASAAQgRAEgVAAIgKgBg");
	this.shape_57.setTransform(2.4,-22.4,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("Ag2ABQALgEAkgBQAigCAPADQANADAhgHIASgEQg1AQgRgEQgQgCgZABQgbAAgMAFQgSAHgrAAQAlgFAOgGg");
	this.shape_58.setTransform(-6.7,-10.4,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBgFIgFgcIAHAZQAIAagDALIgIAFQADgKgCgdg");
	this.shape_59.setTransform(10,-77.4,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgVgJIAJAHQAMAGAVADIABADQgqgHgBgMg");
	this.shape_60.setTransform(-33.7,-53.8,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgIACIgTgCQAQABAlgCIABACQgHABgMAAIgQAAg");
	this.shape_61.setTransform(-33.5,-50,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AAQBNQgMgHgHgHQgPgMgFgQQgFgPgHgLIgFgHIgPgcIAQAbQAKALAFASQAEALAKAOQAGAHAOAHQAKAIAHAAQAEAAAIgDQAGgDADgJIAFgSQADgZgGgRIgJgTQgDgGgIgdIgIgcIADAFQAEAHABAGQABAIAIAVQAHAXAFAIQAGAIgBAZQgBAagIARQgIAGgIABIgDAAQgHAAgFgEg");
	this.shape_62.setTransform(-26,-58,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgXBeQgLgBgGgLIgFgLQAJASAYAAQAMAAARgEQAJAAAIgJQAKgMgBgWQAAgWgFgaIgNgzQgGgXgOgJIgMgEQANgCALAOQAIAKAEAQQANAlADAmQADAkgFARQgHAWgtAAIgOgBg");
	this.shape_63.setTransform(-9.1,-60.7,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgFgEIgSgLQAPgBAgAgQgKgIgTgMg");
	this.shape_64.setTransform(26.6,-47.6,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AAJAHQgqgEgOgMIAeAJQAjAIAeABIgGABQgQAAgRgDg");
	this.shape_65.setTransform(23,-51.7,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgXAIIgUgEQAfAEA4gQQgmARgbAAIgCgBg");
	this.shape_66.setTransform(21.5,-54.4,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AjrHOIgBgBIgBAAIgBAAIAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBABAAIAmiMQAVhOANg+QAPhHAKhPQABgKgCgOIgEgXIgCgTQgBgIgEgFQgOgUgFgSQgDgNgOghIgRgnIgHgQQgEgKgBgHQgBgOgGgXIgEgSQgBgFgDgGIgHgKQgFgIADgJIAIgPIAGgPIABgIIAAgNQACgdAKgOQALgRAOgKQAZgUAhAMIgCACIAGgBIgEgBQALgPAUgIQARgGAVAAQAJgkAdgTQAUgNAVACQASACAVAWQANgNAKgEQAIgCAMAAQAMAAAIAFQAYAQAFAPQABAFAAAHIAAANIAAABIAEACQAFADAFAFQAGAGAJAPIAUAgQAcAsAIASQAJAVAEAWQAFAbgHAOQgEAIgMANIhLBWQgRATgHAKQgMARgEAQQgDALADAZIAEAzQACAqgBAKIgKBmQgEA3gCBVQgDB8AABjQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAgAiymmQgSAKgOAWQgJANgBAjIAAAHIgCAIQgCAGgGALQgGALgBAFQgBAEAGAJIAJAMQABADABAKIAFAVIAGAgQACAIAPAhQAQAkAOAtQACAHAJAOIAJANIADARIACAWQAEAhgEAhQgEAigJAtQgNBHgXBZQgNAwgfBuIAAACIFAA/QABilAChTQAChCAHhTQADgeABgxQACg4gDgVIgEgeQgBgUAPgaQAHgLALgNIAUgYIBLhWQALgOgBgSQgBghgXgqIgig5IgNgWQgIgMgIgHQgJgEgDgEQgCgCABgHIAAgKQAAgRgWgQQgKgGgDgBQgMgBgJADQgJAEgPAPQgEADgDgDQgXgZgQAAQgUgBgSAPQgWATgIAfQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgUgBgRAHQgTAHgLAPQgBADgFgCQgKgEgKAAQgMAAgMAGg");
	this.shape_67.setTransform(0,0,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AjsHLQA3jEAThdQANg8AFglIAGgwQACgSgEgRIgFgWQgBgOgCgDIgKgNQgIgOgCgJQgDgLgTgyQgZgzAAgJIgGgfIgHggQgOgSABgHQAAgEAIgPIAIgSQgBgrAMgTQAmg0AsATQAIgMAPgIQAWgMAaACQADgMAIgPQARgdAagIQARgEAKADQAOAFATAVQAPgPAEgCQANgHAWACQALAGAJAJQAOAMAAAKIABAQQgBAIADABQADAAAGAFQAGAEAEAGIAeAwQAbAtAGAOQAKAVAEAWQAFAdgJANQgNAThSBcQgoAsADAgQADAVgDBkQgCBdgDA2QgFA/gBD9g");
	this.shape_68.setTransform(-0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-88.2,82.5,176.4);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AggAhIBEkgIAEAAIhEEgIgLDfg");
	this.shape.setTransform(-11,35.5,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgbgeIBCjBIg9DGIgQD5g");
	this.shape_1.setTransform(-6,32.7,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgSgYIA1jAIAEADIgzC7IgaDzg");
	this.shape_2.setTransform(1,36.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgKAMIgQgfIAWAZIAKAFIAUgYIgPAhg");
	this.shape_3.setTransform(37.7,-15.4,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDABIgUAGIAQgbIAfAqg");
	this.shape_4.setTransform(30,-12.1,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAfANIghgBIgNgPIgbgNIAgAIIANAPIAfABIAJAJg");
	this.shape_5.setTransform(25.1,-6.6,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgDAiIgZgwIAKgpIgDAmIAUAsIAeAcg");
	this.shape_6.setTransform(-18.4,-97.2,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAVAdIg3gqIgtgZIAqATIA6ArIA7APg");
	this.shape_7.setTransform(9.3,-2.9,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AASAIIg0goIA4AoIANAZg");
	this.shape_8.setTransform(-23.6,-13.7,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAEANIgZgTIgIgQIAMAPIAZATIAWALg");
	this.shape_9.setTransform(-25.6,-28.3,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AACAMIgigZIAIABIgLgNIAUASIAzAhg");
	this.shape_10.setTransform(-23.8,-23,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgRgGIgJgIIA1Adg");
	this.shape_11.setTransform(18.6,6.3,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgQgJIAMAEIAVgQIgVAYIgGATg");
	this.shape_12.setTransform(62.8,-44.2,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAFACIgPgFIgQgDIgLACIAMgFIAfACIAgARg");
	this.shape_13.setTransform(-35.4,-86.6,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgpAKIAigEIAxgQIgXAMIgbAJg");
	this.shape_14.setTransform(-27.8,-76.6,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAFgHIAHAAIgXAOg");
	this.shape_15.setTransform(-43.7,-73.8,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgMAGIAZgNIgWAPg");
	this.shape_16.setTransform(-42.1,-67.6,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgNANIAbgcIgbAfg");
	this.shape_17.setTransform(-39.4,-64.9,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAfgeIgbAfIgiAeg");
	this.shape_18.setTransform(-31.6,-59.2,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgbAVIA3gsIg2Avg");
	this.shape_19.setTransform(-31.6,-53.5,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgQALIAhgWIgdAXg");
	this.shape_20.setTransform(-30.4,-45.1,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgYAEIAGgHIAcgFIAPAIIgIAJg");
	this.shape_21.setTransform(-5.6,-23.6,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgEATIAMgJIgKgGIgcgCIgUgIIAagCIASgQIgJATIAWAAIgBAFIALADIAMgHIAWAAIgRAGIgKAIIALAGIgGAJg");
	this.shape_22.setTransform(-14.3,-27.2,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AARgHIgHAIIAFAHIgfAAg");
	this.shape_23.setTransform(-21.6,-32,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AACgGIAKACIgXALg");
	this.shape_24.setTransform(-23.8,-33,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgcABIAHgEIAWAGIAcgMIgdATg");
	this.shape_25.setTransform(-21.9,-35.2,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgKAAIAVgGIgOANg");
	this.shape_26.setTransform(-27.7,-38.1,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgcAcIA5g6Ig3A9g");
	this.shape_27.setTransform(-26.8,-45.4,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgWAxIgcgpIADgeIAhgqIgOAWIgDASIAAAVIAQAXIAVARIATABIAagRIgNAUIAAAMIghAMg");
	this.shape_28.setTransform(44.3,-65.5,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWAiIAPglIAegtIgVAvIgNAyg");
	this.shape_29.setTransform(9,-116.4,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgmAjIAUgUIASgZIANgNIAHgEIAIgDIALgTIgEAPIgPALIgVAWIgaAzg");
	this.shape_30.setTransform(29.1,-101.5,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AhEBYIgegRIgKgPIAAghIALgjIAYgTIAVglIAIAEIgDAZIgTAoIgZAXIgKATIAHAVIAyAaIAUgHIBIhpIAPgKIAVgbIATggIAGgHIgNAeIgmA5IgVAXIgTAsIgeAiIgdAJg");
	this.shape_31.setTransform(34.1,-76.4,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("ABnCMIgsAIIgOgMIgVgCIgKAQIgRgKIhvhpIgugJIAKgVIgQgIIgdADIALgRIgUgLIg2AEIAKgSIAuACIAHgGIgfgYIABgGIAoATIAEgYIgSgZIgGgzIATA8IAhAuIArAYIBLAVIAvgFIAZgRIgYAUIgLAhIABAjIADAGQAEAHAGAEIAeARIATAEIASgBIAUgTIAqg/IgQAlIACAiIApArIAVAAIAWgLIAMgJIAFgDIAbALIgXAEIgQAOIg7AXg");
	this.shape_32.setTransform(15.8,-77,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgdAEIgPgHIAUgQIAHABIACALIAMAHIAwARIgRADg");
	this.shape_33.setTransform(62.2,-58.6,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAJgOIAKgEIgCAEIgZAfIgKACg");
	this.shape_34.setTransform(60,-64.7,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AABADIASgaIADAEIgMARIgfAag");
	this.shape_35.setTransform(66.9,-71.9,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgQAEIASgFIAbgNIgVARIgkAMg");
	this.shape_36.setTransform(65.6,-68.7,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AArhAIggA4Ig1BJg");
	this.shape_37.setTransform(-2.3,-33.7,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgCgIIArAGIhRALg");
	this.shape_38.setTransform(-9.1,-34.9,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AAYALIgpgIIgvgeIAQAEIAiAVIAoAJIAmgOIgVASIAWARg");
	this.shape_39.setTransform(-3.8,-17,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AA0BLIh+gnIgzh5IA2B0IB3AkIBOATg");
	this.shape_40.setTransform(-7,7.4,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AAAAlIgLgzIASgkIgHAiIAMBDg");
	this.shape_41.setTransform(-17,-100.9,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgagHIASgDIBHAUIg2gCIgagIIgtALg");
	this.shape_42.setTransform(-32.8,-85,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgYAUIAOgJIgVACIgTgIIgNgCIAQgKIARAKIAmgFIAbgNIAAgJIAdACIgSAMIhBAiIgbABg");
	this.shape_43.setTransform(-35.2,-79.1,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAAgVIgag4IAPgCIAUA8IASBjg");
	this.shape_44.setTransform(33.8,-42.8,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AAHgLIAGgTIgBAPIgYAug");
	this.shape_45.setTransform(15.2,-51.6,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgVApQAYgiADgHQAEgHANgiIgNAlQgHAUgSAag");
	this.shape_46.setTransform(0.5,-28.9,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AhdgOIBOAQQBSANAagTIABAIQgJAJgcACIgNAAQg1AAhUgdg");
	this.shape_47.setTransform(-4,-20.6,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgKAVQgLgIgIgUQgHgXAFgRIAJgOIAFAlQAJAnASAMQASAMAEANQADAGgCAEQgPgbgcgOg");
	this.shape_48.setTransform(16.3,-19,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgPgcIAFgHIAKAfQALAcAFAMg");
	this.shape_49.setTransform(17,-27.3,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgFgMIgEg/IAJgKQgFAdAGBJIAJBFQgKgdgFhFg");
	this.shape_50.setTransform(19.3,-45.7,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAAAUQAOgygIgbQACgJAEABIAEADIgFArQgIAwgSAlQAJgUAGgag");
	this.shape_51.setTransform(15.4,-49.1,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("ACLBZQgNgKgagBQgVAAgOAEQgFgHgTgMIgSgLQgEANgKAEQgJgSglgoQgmgngPgIQgaAHg7AKIgTADQAUgFAYgLQAXgLARgKQgLgCgHgHQgSADgWgMIgSgNIAggDQAHgBgHgEIAEABIALAAQAgAVAuAGQAXAMAZgCQAMgBAGgEIgCADQgEAIAAAfQAAAdADAHQADAHArAPQApAOAJgBQALgBASgZIABAhQABAFAMAIQAOAKAKgBQAIgEAJgBQAJAAAEgCQgKALgQAEIgMACQgKAAgIgEg");
	this.shape_52.setTransform(15.6,-68.4,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AAGB/QgLABgWgHQgXgHgKgIQgfgWgagpQgNgUABgVIAEgRQgFAZAWAiQALARAdAfQAOAQAiAIQAQAFANABIALAFQAOAFARABQAWAAAWgQQAYgSAGgZQAFgXgPgRQgLgMgbgPQgUgKgggkQgcghgYgkQgSgbgbAAIgXAGQAYgNAWAKQAPAHALASQAJANAcAjQAdAjAIAIIAOAMQAIAFAdARQAsAZgZAyQgTAlgqAGIgQABQgWAAgQgKg");
	this.shape_53.setTransform(3.7,-100.2,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgrAuIAjgzQAkgxAOAKIACAfQgHAigpAUQgTAGgMAAg");
	this.shape_54.setTransform(17.6,-85.3,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAGAGQgvgCgWgKIAaADQAbABAJAAQAcAEAlADIgvABIgLAAg");
	this.shape_55.setTransform(-23.6,-83.2,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgJgBQAUgZAQAEQgFABgJAGQgSANgVAZg");
	this.shape_56.setTransform(19.5,-89.7,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgfAAQgIgbASgOQANgJAXgCQgbAFgJALQgHAJgCAIQgCALAFANQADAEAdAWIAeAWQg+gkgEgRg");
	this.shape_57.setTransform(8.8,-94.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AAHgNIgBAWIgMAGQAGgKAHgSg");
	this.shape_58.setTransform(34.6,-108.5,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AhFALQAUgLARgGQAbgJBcgGQhAAPgeAAQgSgBggAOIgdAPg");
	this.shape_59.setTransform(-21.3,-74.6,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AA/A2IglgdQgdgYgTgGQgTgHgugdIgpgbIBYAzIAYALQAQAHAIAEIAeAZQAZAUAGADQALAGAxAKQgygGgQgJg");
	this.shape_60.setTransform(-0.5,-6.4,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("Ag6AnIhEgaIA7AQQBDAPAhgDQAigEAhgqQARgWAKgVQgIAWgQAZQgSAcgOAKQgbAMgiAAQgeAAgmgKg");
	this.shape_61.setTransform(-4.1,-29.3,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AA+AaQgRgNgngNQglgNgagCQgVgCg4gkIgOgJIARAKQAwAZAUACQAXACAzASQA0ARAOALQATAPA0AZQhAgTgWgSg");
	this.shape_62.setTransform(4.6,-9.6,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgWAmQAAgQAWglQAMgTALgPIgTAoQgRArABAQIgKgMg");
	this.shape_63.setTransform(9.2,-116.8,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgkAFIACgFQAhAFAWgFQAMgBAEgEQgEAKgjABg");
	this.shape_64.setTransform(63.4,-62.4,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgqgJQAEgCAAgCIAhANQAhALAPADQg5gJgcgOg");
	this.shape_65.setTransform(61.6,-57.2,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AhJB0QgMgFgIgLQgGgdALgoQAKgkAMgLQALgKAVgeQAUgcAGgLQAEgJAIgIIAHgHQgsBJgLANQgPANgIAMQgQAWgGAnQgCATAAAJQABAQAIAGQAKAJAHABQAKADASgHIAOgDQAQgEAHgFIAPgMQAHgGAJgNQAQgXATgNQAGgEAYgYIgcAeQgSAIgWAiQgOAVgbALIglAMQgEACgFAAQgHAAgHgEg");
	this.shape_66.setTransform(52.5,-74,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AAQCRQgfgIgXgLQgjgTgBgXQAAgdAUg0QAXg3AjgyQAMgVARgMQAWgPAUAIQgJgDgMAEQgZAHgTAfQgdAxgLAWQgUAkgKAhQgKAhAJAWQAHAQAOAFIApAUQAlAKAWgYQgFAIgIAHQgMAMgNAAIgGgBg");
	this.shape_67.setTransform(26.4,-82.8,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgIgBQAkgPANAFQg0AMgdANg");
	this.shape_68.setTransform(-28.8,-80.3,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgSAEIg1gNQArAJAzADQAdABAUgBQgOAHgXAAQgWAAgfgGg");
	this.shape_69.setTransform(-21.2,-83.8,1.676,1.676);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AAeAaQgpgMgygrIAsAaQAyAaAdAGIgIABQgKAAgOgEg");
	this.shape_70.setTransform(-18.2,-88.4,1.676,1.676);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("ABTMmIoGgzQgGgBACgDQA2i4ApiWQAih8AShWQAQhLAPhSQADgOAWg9QAVg6AIgSQAQgiAAgTQAAgagKgeQgGgUgQgiIhJihIgJgSQgEgMgCgIQgEgYATglQAPgeAYgdQAPgSAYgWIApglIAsgnQAXgTAJgEQALgGAIgCIAFgBIABAAIABgBIAFgUQADgMAFgGQAOgUApgMQAPgFARAFQATAGAKAIQAKAHAIAMIAJAQQApgYAcAFQAiAHAXAcQARAUAIAcQAIAZgBAaQAeAHAYATQAZAUALAbQAXgBAUAJQAYAJAPAVQAQAUAKAfQAIAagKAsIgFATIgDALIADAaIAFAbQAAAOgLAJIgOAMQgHAHgEAHIgOAZIgbA0QgFALgKAMIgSAVIgrAzQghAqgMATQgSAcgaASQgJAHgFALIgMAbQgFANgLAVQgKATgCAQQgVB1gJB1QgMCcgEEiIAAAAIgCADQgDAEgEAAIgBAAgAgIsYQgmAOgJAaIgEAOQgCAKgEADQgDACgHACIgLADQgPAGgRAQIgeAaQguApgdAdQg0AzgSAyQgJAaAKAZIAVAwIA0ByIAUArQALAZAFAUQAMAugLAcIgTArQgPAegXBVQgSBGgKAxQgcCHgZBbQgnCUhCDdIH4AwIAAgDQADivADhOQAFiOALhwQAHhFAJg2QAIgxAWgzIANgfIAFgNQAEgIADgEQAFgGAOgIQATgQAHgKQAng8AqgwIAXgZQANgPAHgMQAIgOAPgfIAQgeIAFgJQADgHACgCIASgOQAMgKABgHQAAgGgDgVIgFgdQAAgFACgHIADgLQAGgaACgMQADgWgFgPQgMgogWgWQgbgbglAEQgHABgCgEQgJgcgZgTQgXgTgegGQgFgBAAgEQABgWgFgXQgGgYgMgSQgWgggegIQgQgEgUAIQgKAEgXANQgCACgEgBQgEgCgBgCQgHgOgEgHQgHgLgJgGQgMgIgTgFIgCAAQgGAAgNAEg");
	this.shape_71.setTransform(0,0,1.676,1.676);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AmxLvQBvl3AVhhQAShOAniPQApiWANgfQATgsgnhUQhRiugMgiQgIgWAVgpQAQggAYgbQAPgSA8g2QA3gxAMgJQAIgHALgEQALgEAFAAQADABADgMIAIgYQAFgPAagMQARgIATgFQAiAGAPAQQAFAGAQAcQAlgXAXAAQAQAAAZAOQAkAYAMAyQAGAZgBAUQAoAJAaAaQATATAHAWQBMgKAeBfQAKAggUBBQgBAEAFAaQAFAbgBAFQgCAHgKAIIgUARIgXArQgUAkgDAIQgDAJgZAcIgkAqQgzBCgJAPQgJAQglAcQgDACgCAGIgHAPQgKARgHAOQgOAZgEAbIgNBKQgJA7gIBdQgNCTgEE7g");
	this.shape_72.setTransform(0,-0.1,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-135,147.6,270.1);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgJAUIgIiSIACAAIAICSIAZBrg");
	this.shape.setTransform(4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgPgJIAFhmIgCBnIAcB4g");
	this.shape_1.setTransform(6.1,13.7,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgKgJIgChjIADABIABBgIAVB3g");
	this.shape_2.setTransform(10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAAAIIgMgLIANAIIAGAAIAGgOIgDASg");
	this.shape_3.setTransform(20,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgCACIgJAGIADgPIAUAPg");
	this.shape_4.setTransform(17.6,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgHAAIgPgDIAQAAIAIAEIAPgCIAGABIgHAAIgQAFg");
	this.shape_5.setTransform(15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AABARIgSgTIgBgUIAEASIAPASIASAJg");
	this.shape_6.setTransform(-17.4,-46.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgSgDIgZgFIAXADIAiALIAegBIgeAEg");
	this.shape_7.setTransform(8.7,-5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAEAGIgOgGIgHgGIAIAGIAPAEIALADg");
	this.shape_8.setTransform(-11.5,-12.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AADAFIgUgGIAEgBIgHgEIAMAGIAdAHg");
	this.shape_9.setTransform(-9.8,-10.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgGgBIAGAAIAHgKIgHAOIAAAJg");
	this.shape_10.setTransform(27.9,-32.6,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgNAAIAOgDIASADIgRABIgHgBIgIABIgFADg");
	this.shape_11.setTransform(-24.3,-38.9,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgCAEIAUgOIgJAJIgFACIgFAGIgQAEg");
	this.shape_12.setTransform(-19.4,-35.1,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgJABIAMgFIAIABIgCAFIgTADg");
	this.shape_13.setTransform(-1.3,-13.1,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAGAEIgGgBIgMADIgLgBIAMgFIAGgJIgCAJIAKgCIABACIAFAAIAFgFIAKgDIgHAGIgDAEIAGABIgCAFIgRACg");
	this.shape_14.setTransform(-6.1,-13.7,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAHgFIgDAFIADABIgOAFg");
	this.shape_15.setTransform(-10,-14.8,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAAgDIAFgBIgJAIg");
	this.shape_16.setTransform(-11.2,-14.9,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgMAHIADgEIAKAAIAMgJIgLANg");
	this.shape_17.setTransform(-10.8,-16.6,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgEACIAJgFIgFAHg");
	this.shape_18.setTransform(-14,-16.9,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEAaIgTgQIgDgOIAKgYIgDAMIABAJIADAJIALAJIAMAFIAJgCIAKgMIgEALIACAGIgOAKg");
	this.shape_19.setTransform(16.5,-39.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEAUIACgUIADgQIAEgJIgDAZIAAAag");
	this.shape_20.setTransform(-7.7,-59.4,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgMAXIAHgMIAFgOIAEgIIACgDIAEgDIADgLIAAAJIgGAGIgHANIgEAdg");
	this.shape_21.setTransform(4,-55.2,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgOA5IgRgEIgHgGIgEgPIAAgTIAJgNIAEgTIAFAAIACANIgDAVIgJAOIgCALIAGAJIAcAFIAHgGIAUg8IAGgGIAGgRIAEgRIACgFIgCARIgQAuIgDAXIgKAVIgMAIg");
	this.shape_22.setTransform(9.2,-44.6,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAMA4IhDgiIgXACIABgMIgJgCIgNAGIADgKIgLgCIgZAJIACgJIAWgFIADgEIgSgHIAAgDIAVADIgBgLIgMgKIgKgYIARAaIAWASIAYAFIAmgBIAXgJIAIgMIgHAOIgBAQIAEAQIADADQADADADAAIARAEIAJAAIAIgDIAIgMIAKgjIgCAUIAGAPIAZAOIALgDIAIgIIAFgGIACgCIAOABIgLAFIgFAKIgZATIgdAAIgUAJIgJgDIgKACIgDAJg");
	this.shape_23.setTransform(2.3,-39.5,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgWAFIADgFIAEgEIAEgBIACAEIAHACIAZABIgIAEIgdAAg");
	this.shape_24.setTransform(26.1,-39.4,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AACgHIAEgEIgIAVIgEACg");
	this.shape_25.setTransform(24.1,-41.9,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAAABIAFgOIACABIgDAKIgKAQg");
	this.shape_26.setTransform(26.4,-46.3,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgHAFIAIgFIALgKIgIAKIgPALg");
	this.shape_27.setTransform(26.1,-44.6,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AALgkIgHAfIgOAqg");
	this.shape_28.setTransform(-1.2,-18.3,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgCgEIAUgEIgjARg");
	this.shape_29.setTransform(-4.5,-17.7,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AANAGIgUADIgbgJIAIAAIAUAFIAUgCIAPgLIgHALIANAGg");
	this.shape_30.setTransform(0.5,-10.9,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgeAZIgpgyIAqAvIBlgBIglAFg");
	this.shape_31.setTransform(2.5,2.3,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AACATIgLgWIAEgUIABASIAOAcg");
	this.shape_32.setTransform(-17.2,-48.4,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgOgEIAHgEIAlAAIgaAHIgNAAIgUAKg");
	this.shape_33.setTransform(-22.6,-37.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgHAOIAGgGIgKADIgKgBIgGABIAFgHIAKACIAQgHIAMgKIgCgEIAPgDIgHAIIgaAZIgMAEg");
	this.shape_34.setTransform(-23.5,-35.4,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgCgJIgVgWIAHgEIASAaIAWAsg");
	this.shape_35.setTransform(14.7,-28,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgEAXIAHgXIACgWIgBATQgBALgEAPg");
	this.shape_36.setTransform(0.9,-16.5,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgtAKIAogDQAngFAKgMIACAEQgDAFgNAEQgVAIggAAIgWgBg");
	this.shape_37.setTransform(-0.3,-12.6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgDAMQgGgBgHgJQgHgJABgJIACgJIAIASQAJAQAKADQARAFgBAJQgLgLgPgDg");
	this.shape_38.setTransform(10,-14.1,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgMgLIACgEIAXAfg");
	this.shape_39.setTransform(9.1,-18,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgEgDIgLgfIADgFQADAXAZA4QgJgMgLgfg");
	this.shape_40.setTransform(7.5,-27.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgEgcQAAgBAAgBQAAgBABAAQAAAAAAgBQAAAAABAAIACAAIADAWQADAXgEAUQAFgqgLgTg");
	this.shape_41.setTransform(5,-28.1,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgRAKQgXgNgJgCQgOAIgeAPQAPgKARgTQgFABgEgCQgOAGgRgIIAPgHQADgBgEgBIAIgBQASAGAWgFQAVAEAMgLIgBACQgBAEAEAPQAEANACADQADAEAWABQAWAAAEgBQAFgCAFgOIAFAPQABABAIADQAIACAEgCQADgDAEgBIAGgDQgDAHgHAEQgHAEgIgBQgHgDgNADQgJADgHAFQgDgDgLgDIgKgDIAAAEQgCAEgCACQgHgHgXgNg");
	this.shape_42.setTransform(2.6,-37.1,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgRA4QgSgGgRgPQgJgJgDgJIgBgIQACAMAPANQAIAHARAKQAPAJAagGIAGABQAHAAAIgCQALgDAIgLQAJgMgBgMQAAgMgLgEQgGgFgPgDQgLgDgVgMQgRgMgQgOQgNgKgMAFIgLAFQARgQAVAQQAGAGASAMQASANAFACQAHAEAWAGQAZAFgFAbQgEATgTAKQgPAGgMgDQgFACgMAAQgLAAgGgDg");
	this.shape_43.setTransform(-7.1,-50.3,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGgBQAJgdAIADIAFAPQACAQgRAQQgMAIgEAAQADgPAGgOg");
	this.shape_44.setTransform(1.4,-45.6,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgeAGIA9gMQgWAIgFAAQgQAEgLAAIgHAAg");
	this.shape_45.setTransform(-18.3,-38.9,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgEAAQAGgNAIgBIgGAGQgGAIgGAPQABgHADgIg");
	this.shape_46.setTransform(1.3,-48,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgRAIQgHgLAGgJQADgEAHgEIAGgDIgGAEQgHAFgCAEQgFAKAIAJQADADAhAMQgigIgFgIg");
	this.shape_47.setTransform(-4.1,-49.5,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAgHIADAKIgFAFQACgGAAgJg");
	this.shape_48.setTransform(6,-59.1,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgQABQAIgEAXgKIAXgJQgcARgNAEQgJABgOALIgLALQAKgMALgJg");
	this.shape_49.setTransform(-16,-35.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAlAPIgVgJQgQgGgKAAQgLgBgZgHIgYgHIAxAMIAZADIATAHQAOAGADABQAHABAYgCQgRADgKAAIgHgBg");
	this.shape_50.setTransform(3.6,-5.4,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag3AfIAfgBQAggCAQgGQAPgHALgYIAGgYQAAALgEAPQgFAPgFAHQgVASgnABg");
	this.shape_51.setTransform(-1.8,-17.2,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AAjAEQgKgEgVAAQgSgBgNACQgNADgogMIANADQAaAFAKgCQALgCAaABQAcABAIADQALAEAcAEQghAAgNgFg");
	this.shape_52.setTransform(5.2,-8,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgEAWQgCgIAGgUIAFgTIgDAVQgCAWACAIg");
	this.shape_53.setTransform(-7.7,-59.5,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgPAFQAZgDAHgJQgBAJggAGg");
	this.shape_54.setTransform(25.9,-41.3,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgVAAIABgBIASABQARAAAHAAQgQACgLAAQgJAAgHgCg");
	this.shape_55.setTransform(25.9,-38.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgjA5QgGgNgBgUQAAgTAEgGQAEgGAGgSIAGgWQABgFADgFIACgEIgGAVIgIAbIgIAPQgEANADATQADAUAHADQAGADAEAAQAFgBAHgGQALgFAFgGQAHgJADgKQAEgNAIgJIAMgVIgLAWIgEAFQgFAIgEAMQgEAMgMAKQgFAFgJAFQgFADgFAAQgHAAgHgFg");
	this.shape_56.setTransform(20,-44.6,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgJBHQgUgEgDgLQgEgOACgbQADgdAKgcQADgMAGgIQAIgLAKACIgJADQgLAGgFASQgNA0AAAYQgBARAIAKQAGAGAHABIAWADQATAAAHgPQgFARgNABIgKABIgRgCg");
	this.shape_57.setTransform(7.1,-46.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgDAAQAOgMAHABIgNAIQgPAJgHAHIAOgNg");
	this.shape_58.setTransform(-20.4,-36.6,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgkAHQAkgBAlgMQgQANgyAAIgHAAg");
	this.shape_59.setTransform(-17.6,-39.7,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AghgGIAZAGQAbAFAPgCQgFADgLABIgBAAQgUAAgegNg");
	this.shape_60.setTransform(-16.5,-41.8,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AhKGTQAAhggChMQgBg5gEgyQgDgogEgnIABgoIADgnQADgSgDgJQgGgTgZgdIg5hCIgNgQQgGgLAEgUQADgOAIgUQAGgNAVgiIAPgZQAIgNAEgDIAIgGIACgBIABgBIAAAAQgBgOACgGQAEgMASgLQAGgFAJAAQAKAAAGADQAHACAKAKQARgRAOgBQAPgCAQAKQAWAQAHAbQAQgBANAFQAPAGAJAMQAYgJAUAPQALAIAJANQAHAKACAXIAAAQIAGALIAFAMQACAHgDAGQgHALgCAFIgDAOIgFAcQgBAJgJARIgNAeQgKAbgCAIQgEAPgLAOQgDAFgBAFIgCAPIgDASQgBAKABAIQAHA+AMA1QAPBIAoCOIAAABIAAABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBAAIj8AyQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAgAhOmLIgKAFQgQAMAAANIAAAIQAAAFgBACQgCADgHADQgIAHgPAZIgaArQgSAfAAAbQgBAOAIAKIA6BDQAXAbAGAKQAMAUgBAPIgDAXQgCAQABArQABAkACAZQAHBFAAAtQADBPAABvID2gwIgBgBQgsiagRhaQgHgjgDgaQgDgaADgZIACgQIACgOIAGgKQAHgJACgHQAKgiANgdIAIgPQAEgJABgHIAFgYIADgRQABgHACgDIAGgJQAEgGAAgEIgGgMIgGgNQgBgDAAgJQgBgagHgKQgLgRgOgIQgQgJgRAIQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQgIgMgPgGQgOgFgPABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgGgYgRgOQgPgMgPAAQgLABgSASQgDAEgDgDQgNgNgFgCQgGgCgHABIgEAAg");
	this.shape_61.setTransform(0,0,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhLCfQgDgmgChLQgChMACgRQADgXgegjQhAhHgKgOQgHgKAEgWQADgSAIgQQAFgLAUgiIAYglQAHgLAHgBQACAAAAgGIAAgNQAAgMAagQQARgCAKAGQAEACALALQAOgRALgDQAHgCANADQAVAGANAWQAGALACAKQAUgBARAIQALAHAHAJQAjgQAbApQAJANAAAjQAAACAHALIAGAPQAAADgEAGIgHALIgJAwQgBAHgSAnQgPAhgCAOQgCAHgGAKIgIALQgBABgBAMIgEARQgDAMACAOQAGA3AMA5QAOBHArCXIj9AxQgBjCgDgxg");
	this.shape_62.setTransform(0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.6);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAKAaIALi+IADAAIgKC+IglCLg");
	this.shape.setTransform(-5.7,20.4,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AAQgLIgCiGIAGCEIgnCfg");
	this.shape_1.setTransform(-7.9,17.8,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAMgNIACh+IADgBIgCCBIgfCYg");
	this.shape_2.setTransform(-13.2,19,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgQgLIAIASIAIAAIARgMIgPAQIgPABg");
	this.shape_3.setTransform(-26,-20.3,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AAEADIgTAHIAbgTIAEATg");
	this.shape_4.setTransform(-22.8,-16.8,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgUAAIgJABIAIgEIATAEIALgGIAVABIgTAEIgLAGg");
	this.shape_5.setTransform(-20.4,-11.9,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAASIAUgXIAFgYIgBAbIgYAYIgYAIg");
	this.shape_6.setTransform(22.7,-60.4,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("Ag3AGIAnADIArgQIAdgEIggAHIgpAQg");
	this.shape_7.setTransform(-11.3,-6.6,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgGAGIASgHIALgHIgIAIIgTAHIgSACg");
	this.shape_8.setTransform(15,-16.3,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAMgBIAPgHIgJAFIAFABIgZAJIgYACg");
	this.shape_9.setTransform(12.8,-13.4,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AATgDIgHADIgeAFg");
	this.shape_10.setTransform(-18.7,-3.1,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAAADIgIgSIAJAOIAIAAIgJARg");
	this.shape_11.setTransform(-36.3,-42.5,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AATACIgLgCIgKABIgWgBIAXgEIATAEIAHAFg");
	this.shape_12.setTransform(31.7,-50.6,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AADAJIgIgHIgGgDIgMgMIAbATIAUAIg");
	this.shape_13.setTransform(25.2,-45.7,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgFgGIAEACIAHALg");
	this.shape_14.setTransform(34.5,-41.1,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgCAAIgLgYIAbAxg");
	this.shape_15.setTransform(24.4,-34.3,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgKACIgEgGIAKgCIARAHIACAGg");
	this.shape_16.setTransform(1.7,-17.1,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgXALIgCgHIAIgCIgEgGIgJgHIANAEIAHAHIAHAAIAAgDIANADIgCgMIAIAMIAQAGIgPABIgRgDIgHABIAHAIg");
	this.shape_17.setTransform(7.9,-17.8,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgJACIAFgCIgDgHIARAPg");
	this.shape_18.setTransform(13.1,-19.3,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgFgFIAFABIAGAKg");
	this.shape_19.setTransform(14.7,-19.4,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgBAJIgPgRIAPAMIAPAAIADAFg");
	this.shape_20.setTransform(14.1,-21.7,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgFgFIALAHIgGAEg");
	this.shape_21.setTransform(18.2,-22,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgMgXIAYAuIgBABg");
	this.shape_22.setTransform(18.9,-26.6,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgfAZIACgIIgFgOIANAPIAMADIAQgHIAOgMIAEgLIABgMIgEgQIANAgIgEASIgZAVIgTAEg");
	this.shape_23.setTransform(-21.5,-52,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgCAAIgDggIAEALIAFAVIACAaIgIAHg");
	this.shape_24.setTransform(10.1,-77.3,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AAAAAIgIgRIgIgJIAAgKIAEANIAFAEIADAEIAFAKIAHATIAJAQIgLAHg");
	this.shape_25.setTransform(-5.1,-71.8,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgPBBIgMgbIgEgeIgJgTIgMgqIgDgVIADAFIAFAYIAIAVIAIAJIAZBNIAKAJIAkgIIAIgMIgDgNIgKgSIgGgcIAEgQIAGgBIAGAaIALAPIAAAZIgGAUIgJAHIgWAGIgSABg");
	this.shape_26.setTransform(-11.9,-58.1,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgeA/IgNgCIgLAEIgagNIgnABIgggZIgHgMIgOgHIATgBIACACIAGAIIALALIAOAEIAhgTIAHgUIgCgaIANAuIAKAQIAKAEIANABIAVgGQAHgCAFgGIAGgVIgBgWIgKgRIALAPIAdAMIAyABIAfgHIAdgWIAXgiIgOAfIgPAMIgCAPIAcgEIgBAEIgWAJIADAFIAcAGIADANIghgMIgOADIAEANIgRgIIgMADIACAPIgegDIhXAsIgNADg");
	this.shape_27.setTransform(-3,-51.5,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgTAIIgKgFIAggCIAJgBIADgHIAGABIAJAMIgLACg");
	this.shape_28.setTransform(-33.9,-51.3,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AADANIgKgYIAAgDIAFAEIAKAZg");
	this.shape_29.setTransform(-31.2,-54.6,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgEgDIgFgNIADgCIAGATIAJARg");
	this.shape_30.setTransform(-34.2,-60.2,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgEAAIgKgOIAOAOIAKAGIAFAIg");
	this.shape_31.setTransform(-33.9,-58.1,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgEgHIgKgoIAcBfg");
	this.shape_32.setTransform(1.5,-23.9,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgXgLIAbAFIAUASg");
	this.shape_33.setTransform(5.9,-23.1,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgQAIIgcADIARgHIgKgOIAVAPIAaABIAZgGIAKABIgiAKg");
	this.shape_34.setTransform(-0.6,-14.3,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AhdAbICDACIA4g9Ig2BBIhVAAg");
	this.shape_35.setTransform(-3.1,2.9,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AAGgHIACgXIAFAaIgPAdIgLAGg");
	this.shape_36.setTransform(22.5,-63.1,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AANgCIgRAAIgigJIAwAAIAKAFIATASg");
	this.shape_37.setTransform(29.5,-48.9,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AAGATIgighIgIgKIASADIgCAGIAPANIAWAKIAMgEIAIAKIgIgBIgOABIgMgEIAHAIIAMAHg");
	this.shape_38.setTransform(30.6,-46,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgBgLIAYgiIAIAEIgbAeIgiA5g");
	this.shape_39.setTransform(-19.1,-36.4,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgDgLIADgJIAAANIADAcg");
	this.shape_40.setTransform(-6.2,-38.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AADAdQgHgTAAgOIgBgZIACAdIAJAeg");
	this.shape_41.setTransform(-1.1,-21.6,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AglAEIgWgMIADgFQAMAPA1AIQAaADAZABIgaAAQgtAAgagKg");
	this.shape_42.setTransform(0.4,-16.4,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgbAbQAFgHAOgEQAMgEANgWIAKgWIADAKQABAMgKAMQgIALgIADQgMACgMAIIgKAHQAAgCACgEg");
	this.shape_43.setTransform(-12.9,-18.5,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAPgTIABAFIgfAig");
	this.shape_44.setTransform(-11.8,-23.5,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AASgzIADAHIgOAoQgPApgMAPQAihJAEgeg");
	this.shape_45.setTransform(-9.8,-35.5,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgDgOIAEgbIADgBQADAAgBAGQgJAPAAAhQAAARABAOQgFgaAEgfg");
	this.shape_46.setTransform(-6.3,-36.7,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgUAfIgBgFIgOADQgNAFgEADQgJgGgMgDQgRgFgJAEQgKACgJgFQgKgGgEgJQACADAGACQAFACAFADQAFACAKgDQAKgDABgCIAHgUIAEAJQAGAKADACQAGACAcgBQAdgBADgEQACgFAGgQQAGgUgCgGIgBgBIAMAGQAPAGARgDQAcAFAYgHIAKACIgCABQgBAAAAAAQAAAAAAAAQAAABAAAAQABAAABAAIATAIQgXALgRgIIgJADIgEAAIAVATQAOAMANAHQgrgUgUgMQgLADgeARQgfARgJAKQgCgDgCgGg");
	this.shape_47.setTransform(-3.4,-48.3,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgVBKQgQAEgTgIQgYgMgGgaQgFgiAfgIQAZgGANgGQAHgDAXgQQAYgRAIgGQAagXAWAWQgFgFgHgDQgRgFgQAOQgWASgXAOQgaARgOADQgUAEgJAFQgNAHgBAQQAAAQALAPQALAPANADQASAFAKgEQAiAIATgLQAYgOAKgJQATgRACgRIgBAMQgDANgMAKQgXAUgXAJQgIADgPAAIgEAAQgMAAgGgDg");
	this.shape_48.setTransform(9.2,-65.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAAAaQgWgUACgWIAHgTQAKgEANAmQAHASAFATIgBAAQgGAAgPgKg");
	this.shape_49.setTransform(-1.7,-59.4,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AALAHIgPgEQgEAAgQgFIgPgGIAoAIIAnAIIgHABQgJAAgNgCg");
	this.shape_50.setTransform(23.9,-50.7,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgEgLIgHgHQAKAAAHASQAFAKACAJQgJgTgIgLg");
	this.shape_51.setTransform(-1.6,-62.6,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AATANQALgNgHgNQgCgFgJgGIgIgGIAIAEQAJAFADAFQAJAMgKAPQgGAJgsALQAqgQAEgCg");
	this.shape_52.setTransform(5.5,-64.4,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgDAEIADgNQABAMADAIg");
	this.shape_53.setTransform(-7.7,-76.9,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AAGgCQgLgDgXgMIgUgLIAeALQAeANAKAGQAOALANAQQgYgbgTgEg");
	this.shape_54.setTransform(20.9,-45.7,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AhKATIgSgCIASABQARABAFgBQAJgCAmgQQAJgCAYgCIBBgQQg5ASgVACQgNAAgWAJIgcALIgJABIgRgCg");
	this.shape_55.setTransform(-4.6,-7.1,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AAaAsQg1gBgagYQgIgJgFgUQgFgTgBgPIAJAgQAMAgAUAIQAVAJArADQAWABASAAQgTAEgXAAIgFgBg");
	this.shape_56.setTransform(2.5,-22.4,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("Ag2ABQAKgEAkgBQAjgCAOADQAOACAhgGIASgEQg1AQgRgEQgRgCgYABQgbAAgNAFQgRAHgrAAQAlgFAOgGg");
	this.shape_57.setTransform(-6.6,-10.4,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgBgFIgFgdIAHAaQAIAagDALIgIAGQADgLgCgdg");
	this.shape_58.setTransform(10,-77.5,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgVgJIAJAHQAMAGAVACIABAEQgqgIgBgLg");
	this.shape_59.setTransform(-33.7,-53.8,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgIACIgSgCQAPABAlgCIACACQgIABgNAAIgPAAg");
	this.shape_60.setTransform(-33.5,-50.1,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AAQBNQgMgHgHgHQgPgMgFgQQgFgPgHgLIgFgHIgPgdIAQAcQAJALAHASQADAJADAGIAHAKQAGAHAOAHQAKAIAHAAQAEAAAIgDQAJgEAFgaQADgZgFgRIgKgTIgTg/IADAFQAEAHABAGQACAIAHAVQAHAXAFAIQAGAIgBAZQgBAagIARQgIAGgIABIgCAAQgIAAgFgEg");
	this.shape_61.setTransform(-26,-58.1,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgXBeQgLgBgGgMIgFgLQAJATAYAAQAMAAARgEQAJAAAIgJQAKgMgBgWQAAgXgFgZIgNgzQgGgXgOgJIgMgEQANgCALANQAIALAEAPQANAmADAmQADAjgFASQgGAWguAAIgOgBg");
	this.shape_62.setTransform(-9.1,-60.8,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgFgEIgSgLQAPgBAgAgQgKgIgTgMg");
	this.shape_63.setTransform(26.6,-47.7,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AAIAHQgpgEgOgMIAeAJQAjAIAeABIgGABQgQAAgSgDg");
	this.shape_64.setTransform(23,-51.7,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgXAIIgUgEQAfAEA4gQQgmARgbAAIgCgBg");
	this.shape_65.setTransform(21.5,-54.5,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AjqHOIgDgBQgEgCABgCIAAgBIAAAAIAmiLQAVhOANg+QAQhIAJhOQABgLgCgNIgEgXIgCgTQgBgIgEgFQgNgTgGgTIgQguIgSgnQgLgagBgHQgBgNgGgZIgEgRQgBgGgKgPQgFgIADgJIAIgQQAGgKABgEIAAgVQACgdAKgOQALgRAOgKQAZgUAhAMIgCACIAGgBIgEgBQAMgPATgIQASgHAUABQAJgkAdgTQATgNAWACQARACAWAWQAOgOAJgDQAGgCAOAAQALgBAJAGQAYAQAFAOQACAIgBASIAAABIABAAIADACIAKAIQAFAFAKAPIAUAhQAcAsAIASQAJAVAEAWQAFAbgHAOQgCAFgFAGIgJAKIhLBWQgRATgHAKQgMARgEAQQgEAMAEAXIAEAzQACArgBAJIgKBnQgFBCgBBJQgDB9AABjQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAgAiymmQgSAKgOAWQgJAOgBAhIgBAQIgJARQgGALgBAFQgBAEAGAJIAJAMIACAMIAFAWIAGAgQABAHAQAhQAQAjAOAvQACAIAJANIAJAMIADASIACAWQAEAkgEAeQgDAagKA1QgNBHgXBZQgNAwgfBuIAAABIFAA/QABikAChTQAChCAHhTQADgfACgwQABg4gDgWIgEgeQgBgTAPgaQAHgLALgOIAUgXIBLhWQALgOgBgSQgBghgXgqIgig5IgNgWQgIgNgIgGQgJgFgDgDQgCgCABgHIAAgKQAAgSgWgPQgIgGgFgBQgMgBgJADQgGACgHAGIgLALQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgWgZgRgBQgTAAgTAPQgWATgIAfQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgUgBgRAGQgTAIgLAPQgCADgEgCQgKgEgKAAQgMAAgMAGg");
	this.shape_66.setTransform(0,0,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AjsHLQA3jEAThdQANg8AFglIAGgwQACgSgEgRIgFgWIgDgRQgDgDgHgLQgIgNgCgJQgDgLgTgyQgZgzAAgKIgGgfIgGgfIgKgOQgFgHABgEQAAgEAIgPIAIgSQAAgtALgRQAmg0AsATQAJgNAPgIQAVgLAaACQADgNAIgOQARgdAagIQARgEAKADQAOAEATAVQAPgOAEgCQANgIAWADQAiAUAAARIABAQQgBAIADAAIAJAGQAGAEAEAGIAeAwQAbAtAGAOQAKAVAEAWQAFAdgJANQgNAShSBdQgoAsADAfQADAWgCBjQgDBhgDAzQgFA/gBD9g");
	this.shape_67.setTransform(0,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-88.2,82.6,176.5);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AiNCGIEbkdIkOEvg");
	this.shape.setTransform(-45.7,14.9,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Ah6BsID1jyIjzENg");
	this.shape_1.setTransform(-49.2,14.7,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AA6hoIAVAtIieCkg");
	this.shape_2.setTransform(-3.4,-26.5,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgfAIIA+g4Ig1A3IgBAqg");
	this.shape_3.setTransform(11.6,-45.5,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aj9h3IAuAGIHMDpg");
	this.shape_4.setTransform(167.7,35.5,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXgaIABAIIgvAtg");
	this.shape_5.setTransform(215.5,54.2,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQgVIAEAGIgnAlg");
	this.shape_6.setTransform(215.9,51.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPgWIACAoIgHgZIgbAeg");
	this.shape_7.setTransform(216.7,48.1,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#201F1F").s().p("AgbATIA5hKIAAAvIg7BAg");
	this.shape_8.setTransform(214.9,52.6,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#201F1F").s().p("Akfh3IAugbIIRECIgDAjg");
	this.shape_9.setTransform(162.1,37.4,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjyhaIAngHIgpgrIHpDTIgzBGg");
	this.shape_10.setTransform(177.6,31.5,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#201F1F").s().p("AkeheIBbgyIHiDSIg5BPg");
	this.shape_11.setTransform(171.8,32,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgPAfIAGjsIAEgBIgHDsIAcCxg");
	this.shape_12.setTransform(98.8,94.1,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgQgTIATiiIgOClIAcDGg");
	this.shape_13.setTransform(101.2,91.1,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgLgQIAKifIADACIgJCbIATDCg");
	this.shape_14.setTransform(107.9,93,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgDAMIgRgVIAUAQIAJABIAMgWIgGAdg");
	this.shape_15.setTransform(128.6,46,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgEADIgPAIIAIgYIAfAbg");
	this.shape_16.setTransform(124.1,49.7,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgMgBIgYgGIAaABIANAJIAZgDIAIAFIgKgCIgaAFg");
	this.shape_17.setTransform(120.7,55.4,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAAAcIgcgiIABghIAFAfIAWAfIAdAQg");
	this.shape_18.setTransform(72.2,-8.7,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgdgGIgngLIAkAHIA1AYIAwACIgwACg");
	this.shape_19.setTransform(109,60.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AAFAKIgWgLIgJgLIAMAJIAXALIASAFg");
	this.shape_20.setTransform(77.4,46.6,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AAEAJIgfgOIAGAAIgKgIIASAKIAtARg");
	this.shape_21.setTransform(79.8,50.4,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgOgBIgJgGIAuAPg");
	this.shape_22.setTransform(117.8,66.3,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgLgEIAKACIANgQIgMAVIgCAQg");
	this.shape_23.setTransform(143.6,19.4,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgVgBIAYgDIAcAIIgbAAIgNgDIgMABIgJADg");
	this.shape_24.setTransform(60.1,2.3,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgEAGIAjgVIgQAPIgIADIgLAIIgaAFg");
	this.shape_25.setTransform(67.7,9.1,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AADgGIAFgBIgPAPg");
	this.shape_26.setTransform(55.7,13.9,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgIAHIARgOIgPAPg");
	this.shape_27.setTransform(58,18.6,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AAUgdIgRAdIgVAeg");
	this.shape_28.setTransform(67.6,23.4,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgKAMIAVgXIgSAXg");
	this.shape_29.setTransform(70.9,34.2,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgPAAIAWgHIAMAEIgFAHIggAEg");
	this.shape_30.setTransform(93.9,46.8,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AAJAIIgJgDIgWADIgRgDIAUgGIALgPIgEAQIASgDIAAADIAIABIAJgHIARgEIgMAIIgGAHIAJADIgDAIIgcABg");
	this.shape_31.setTransform(86.3,45.4,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAMgIIgEAIIAEADIgXAGg");
	this.shape_32.setTransform(80,43.1,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAAgGIAJAAIgQANg");
	this.shape_33.setTransform(78.1,42.8,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgVAIIAFgFIARACIAVgOIgUATg");
	this.shape_34.setTransform(79.1,40.2,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgHABIAPgHIgIANg");
	this.shape_35.setTransform(74,39.2,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgRAbIAjg3IghA5g");
	this.shape_36.setTransform(73.6,33.4,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgKApIgdgbIgCgYIASgmIgHATIABAPIAEAPIAQARIATAJIAPgCIARgSIgGASIABAJIgYAPg");
	this.shape_37.setTransform(126.1,6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgKAfIAFgfIAQgoIgJAoIgCApg");
	this.shape_38.setTransform(89.6,-28.3,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgXAkIANgUIAKgWIAIgMIAEgGIAGgDIAGgRIgBANIgKAKIgNAVIgLAtg");
	this.shape_39.setTransform(107.8,-20,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AggBWIgbgIIgKgLIgGgZIAEgfIAPgRIAKghIAHACIADAVIgJAiIgQAVIgFARIAJAPIAsANIAOgKIAmhdIALgLIAMgYIAJgdIAEgGIgFAaIgVAyIgMAWIgIAlIgSAhIgUALg");
	this.shape_40.setTransform(115.1,-1.9,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AANBhIhog/IglABIAEgTIgOgEIgXAHIAGgPIgRgEIgqAKIAGgOIAjgGIAEgGIgbgOIAAgFIAiAIIAAgTIgTgQIgNgnIAYAsIAiAeIAmAMIA+ADIAkgMIAQgRIgPAUIgCAbIAGAbIADAFQAEAEAGACIAaAJIAQAAIANgDIANgTIAWg4IgGAfIAHAaIAnAcIASgEIAOgMIAMgNIAWAEIgRAHIgKAPIgqAbIgxgFIghAOIgNgHIgQACIgGAOg");
	this.shape_41.setTransform(102.9,3.8,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgYAIIgMgDIANgPIAGgBIAEAJIALADIAnAFIgMAGg");
	this.shape_42.setTransform(141.2,8.2,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AAFgMIAHgFIgQAgIgHADg");
	this.shape_43.setTransform(138.4,3.9,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAAABIAKgWIAEACIgHAPIgTAag");
	this.shape_44.setTransform(142.6,-2.9,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgMAHIANgHIATgQIgOARIgZAQg");
	this.shape_45.setTransform(142.1,-0.2,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAXg5IgQAxIgdBCg");
	this.shape_46.setTransform(94.8,38.5,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgDgIIAigDIg9AXg");
	this.shape_47.setTransform(89.3,39,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAVAHIghABIgqgPIAMAAIAfAKIAhABIAagRIgNASIAUAJg");
	this.shape_48.setTransform(96.4,51.3,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("Ag0AnIg8hWIA+BRICjALIg8ADg");
	this.shape_49.setTransform(98,71.7,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AACAeIgQglIAJgfIAAAbIAQAqIAEAIg");
	this.shape_50.setTransform(72.6,-11.9,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgXgGIANgGIA7AFIgqAHIgVgCIgiAPg");
	this.shape_51.setTransform(62.7,4.4,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgOAUIAKgJIgQAFIgQgDIgLAAIALgKIAPAFIAcgKIAUgPIgCgHIAXgDIgMAMIgtAlIgVAGg");
	this.shape_52.setTransform(61.2,8.3,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgCgPIgfgoIALgDIAaArIAeBLg");
	this.shape_53.setTransform(121.5,25.2,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AADgKIABgPIACALIgLAog");
	this.shape_54.setTransform(105.7,21.6,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAFAAIAFgjIgDAeQgDARgJAYIgEABg");
	this.shape_55.setTransform(97.7,41.7,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AhKAJIBAAAQBCgEARgSIACAHQgGAHgVAGQgXAHghAAQgdAAglgFg");
	this.shape_56.setTransform(95.4,48.1,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgGATQgKgEgJgPQgKgQACgOIAEgNIALAcQANAdAPAGQARAHAFAJQADAFAAADQgRgTgYgGg");
	this.shape_57.setTransform(112.1,46.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgRgTIACgGIAiA0g");
	this.shape_58.setTransform(111.2,40.3,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgHgHIgNgyIAFgIQABAlAjBeQgNgUgPg1g");
	this.shape_59.setTransform(109.9,25.4,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AADAPQACgpgKgUQAAgHAEAAIADACIADAiQACAngIAfQACgQACgWg");
	this.shape_60.setTransform(106.1,23.5,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AAoAnIgPgFIgCAGQgCAHgFADQgKgNgjgZQglgXgNgEQgaANg3AUQAQgIATgMIAcgYQgJAAgHgDQgNAFgUgFIgQgHIAZgIQAFgCgGgDIAMgBQAcALAlgDQAUAFATgFQAKgDAFgEIgCADQgCAGAFAYQAFAXADAFQAEAFAkAEQAiAFAHgCQAJgDAKgVIAGAYQABADAMAFQAMAFAHgCQAGgFAHgCIAKgDQgGAKgMAFQgMAHgMgDQgMgGgUAEQgRADgKAGQgFgEgRgIg");
	this.shape_61.setTransform(103.4,8.8,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AAUBgQgJADgSgCQgSgCgKgEQgbgMgbgcQgOgNgDgRIAAgOQABAVAWAWQANAMAbAUQAOAJAbACQANAAALgBIAJACQAMACANgDQASgDAPgRQAPgSABgUQAAgTgPgLQgKgGgYgHQgSgGgfgXQgbgVgYgYQgTgSgVAFIgRAIQAdgZAfAeQAJAJAcAXQAcAXAIAEIANAHIAhAMQAmALgLAsQgJAgggALQgOAFgMAAQgJAAgJgDg");
	this.shape_62.setTransform(89.4,-14.2,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgcArQAIgXAKgWQAUgtANAGIAGAYQABAbgeAXQgTAKgIAAIgBAAg");
	this.shape_63.setTransform(102.2,-5.2,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgxAFIAxgGQAWgCAcgDQgkAJgIAAQgVAEgPAAQgLAAgIgCg");
	this.shape_64.setTransform(69.8,3.3,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgHAAQALgWANABIgKAIQgMANgLAXQADgMAGgLg");
	this.shape_65.setTransform(102.5,-8.9,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgbAKQgLgTAMgPQAFgGAMgFIAJgEIgKAGQgMAHgDAGQgJARALAPQAFAFAzAXQg2gRgGgNg");
	this.shape_66.setTransform(93.8,-11.8,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AACgMIADASIgJAHQAEgJACgQg");
	this.shape_67.setTransform(111.5,-26.2,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgaAAQAMgGAogNIAmgMQgvAXgXAFQgPADgWAQIgUAPQASgTATgMg");
	this.shape_68.setTransform(73.1,9.6,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AA6AfIghgQQgbgOgPgCQgRgCgogPIglgOIBNAZIAUAFIAVAEIAcAPQAWALAGABQAKADAnAAQgTABgNAAQgOAAgIgCg");
	this.shape_69.setTransform(100.7,59.7,1.676,1.676);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgjAyIg6gJIAxACQA2ABAagIQAagIATgnIAOgmQgDATgIAWQgKAYgKALQgeAXg2AAIgPAAg");
	this.shape_70.setTransform(93.6,40.7,1.676,1.676);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AA1AKQgPgIghgDQgfgDgUACQgRACgygSIgNgGIAQAFQApAMAQgCQATgCAqAGQAsAFANAGQARAIAtALQg1gFgVgKg");
	this.shape_71.setTransform(104.1,56.1,1.676,1.676);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgKAjQgCgNAMggIALgfIgIAiQgGAkADANIgKgHg");
	this.shape_72.setTransform(89.8,-28.6,1.676,1.676);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgaAGQAagCARgGQAIgEADgDQgBAJgbAGIgbAEg");
	this.shape_73.setTransform(141.4,5.1,1.676,1.676);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AgjAAIACgDIAcADQAdAEAMgBIgdABQgaAAgQgEg");
	this.shape_74.setTransform(141.1,9.5,1.676,1.676);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgpBjQgLgCgIgHQgJgWACghQABgeAIgKQAHgKAMgbQALgZACgKQACgHAFgIIAFgHIgMAiQgOAjgEAIIgOAWQgIAVACAfQABAQACAHQADAMAHADQAKAGAGAAQAIAAANgIQASgHAIgJIAKgMQAFgGAEgMQAJgSANgQQAEgDALgQIgNAVIgIAIQgJAMgIATQgHATgUANQgKAIgQAHQgFAEgHAAIgGgBg");
	this.shape_75.setTransform(131.6,-1.4,1.676,1.676);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgTBwQgegJgFgSQgEgXAHgrQAJgvATgtQAHgTALgMQANgPARADIgRAEQgRAJgKAcQgOAqgGAUQgJAggCAcQgDAbALAQQAIALAMABIAkAJQAeACANgXIgHAOQgLAOgNAAQgZgBgUgFg");
	this.shape_76.setTransform(110.7,-5.8,1.676,1.676);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgFAAQAZgSALACIgYALQgYANgNAKQALgKAOgIg");
	this.shape_77.setTransform(66.2,6.6,1.676,1.676);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("Ag2AGQAhABAmgHQAXgDAPgEQgTAOg0ABg");
	this.shape_78.setTransform(71.9,2.1,1.676,1.676);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AAcAOQghgDgwgYIAnANQAsAMAYgBQgHADgMAAIgHAAg");
	this.shape_79.setTransform(73.2,-1.5,1.676,1.676);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("Ai/LIQADgxADicQACijADgqQAGhlgBhIQAAhAgBhAQgBgLAIg0QAGgzAEgNQAGgfgDgNQgEgVgNgWQgIgOgSgYIhUhyIgSgbQgIgTAJggQAIgbANgZQAJgQAPgVIAagkIAcgmQAPgUAGgEIANgJIAFgCIAAAAIAAgBIACgQQAAgKADgGQAHgRAfgRQAMgGANABQAPABALAEQAKAFAQASQAdgZAVAAQAcgBAWASQARANALAVQAKASAEAUQAZABAWALQAWALAOAUQAogLAeAaQAPAOAOAWQALATgBAkIgBAQIAAAJIAHATIAHAVQADALgHAJIgJAMQgFAGgCAHIgGAVIgNAuQgBAJgGALIgLATIgZAwIgZA2QgIAXgTAWQgGAHgCAJIgFAXIgHAeQgEAQABANQAEBnALBUQAKBKAhCoIAwDvIAAABQABAEgFACIgEAAIiwAWIkCAdQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAABgBgAh2q8QgcASgDAVIAAAMQgBAJgCACQgEAEgLAEQgLAIgLAPIgTAaIgvBDQggAwgGArQgCAVAMATQAOAVAKAMIA7BRQAhAqAKAVQARAhgEAZQgCANgGAXQgGAagEBIQgDA7ABAmQABBrgFBOQgCAqgDCzQgDCfgFA7ICZgRIEPggIAAgDIg1kIQgii1gKhVQgGg6gCgpQgBgpAIgpIAFgbIACgLQABgHACgDIAMgPQANgRADgIQAVg2AZgrIANgYQAIgOAEgLIAShBQACgMADgEIAMgOQAIgJgBgGQgBgIgGgNIgJgVQgBgEABgGIAAgJQACgqgJgSQgQgdgVgOQgagQgdAJQgEACgDgDQgMgUgWgMQgVgKgZAAQgEAAgBgDQgGgngagZQgWgVgZgCQgMAAgOAJQgIAFgPAOQgCACgDgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgMgOQgIgIgIgDQgLgFgPAAQgGAAgKAHg");
	this.shape_80.setTransform(99,78.2,1.676,1.676);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AiqC6QABg/AHh3QAHh8AFgaQAGgkgrg9Qhgh/gMgUQgJgRAJgjQAIgbANgaQAJgQAmg1QAjgvAIgJQAFgHAIgFQAIgFAEgBQADAAAAgJQABgPABgGQACgUAsgWQAcgBAPAKQAFADARAUQAZgYASgEQALgDAWAHQAgANASAlQAJATACAQQAhAAAZAQQASALAJAQQA5gUApBGQANAXgGA2QAAADAJAUQAIAUAAAEQAAAFgHAJIgNARIgLAmQgJAegBAHQgCAMgjA9QgcA5gFAQQgFAOgYAdIgGAUIgIAbQgGAWABAWIACA7QADAuAJBLQAPB2BOF4Im0AzQAQm+ABhPg");
	this.shape_81.setTransform(99.1,78.2,1.676,1.676);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AlJiEIApg5IJqE1IgzBFg");
	this.shape_82.setTransform(64.4,-21.8,1.676,1.676);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AiWg+IgCgUIExCZIgMAMg");
	this.shape_83.setTransform(37.2,-28.3,1.676,1.676);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AidhQIAIgGIEyCfIgJAOg");
	this.shape_84.setTransform(43.3,-40.1,1.676,1.676);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#201F1F").s().p("Aikg5IACgqIFHCuIgXAYg");
	this.shape_85.setTransform(35.1,-27.6,1.676,1.676);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AufD2IOfugIOfFyIvLPjg");
	this.shape_86.setTransform(-62.6,-82.6,1.676,1.676);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AnwHdIPUvmIANA2IvSPdg");
	this.shape_87.setTransform(13.5,-47.2,1.676,1.676);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AukEIIgPgxIOrukIOyF2IAKA8IvXPpg");
	this.shape_88.setTransform(-61.2,-77.6,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-197.9,440,396);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgKAUIgHiSIABAAIAJCSIAZBrg");
	this.shape.setTransform(4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgTgeIAEhlIgBBnIAkCgg");
	this.shape_1.setTransform(6.9,17,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgLgJIgBhjIACABIACBgIAVB3g");
	this.shape_2.setTransform(10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgBAIIgLgLIANAIIAGAAIAGgOIgCASg");
	this.shape_3.setTransform(20,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgJAGIAEgPIAVAPg");
	this.shape_4.setTransform(17.5,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgHAAIgPgDIAQAAIAIAEIAPgCIAGABIgHAAIgQAFg");
	this.shape_5.setTransform(15.6,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AABARIgSgTIgBgUIAEASIAPASIASAJg");
	this.shape_6.setTransform(-17.5,-46.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgSgDIgYgFIAWADIAhALIAegBIgdAEg");
	this.shape_7.setTransform(8.7,-5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAEAGIgPgGIgGgGIAIAGIAPAEIALADg");
	this.shape_8.setTransform(-11.5,-12.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AADAFIgTgGIADgBIgGgEIAMAGIAbAHg");
	this.shape_9.setTransform(-9.9,-10.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgGgBIAGAAIAHgKIgGAOIgBAJg");
	this.shape_10.setTransform(27.8,-32.6,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgNAAIAOgDIASADIgRABIgHgBIgIABIgFADg");
	this.shape_11.setTransform(-24.3,-38.9,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgCAEIAUgOIgJAJIgLAIIgQAEg");
	this.shape_12.setTransform(-19.3,-35.1,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgJABIANgFIAIABIgDAFIgUADg");
	this.shape_13.setTransform(-1.3,-13.1,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAHAEIgHgBIgNADIgKgBIAMgFIAGgJIgCAJIAKgCIABACIAFAAIAFgFIAKgDIgGAGIgEAEIAFABIgBAFIgRACg");
	this.shape_14.setTransform(-6.1,-13.7,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAGgFIgCAFIAEABIgOAFg");
	this.shape_15.setTransform(-10,-14.8,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAAgDIAFgBIgJAIg");
	this.shape_16.setTransform(-11.3,-14.9,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgMAHIADgEIAKAAIAMgJIgLANg");
	this.shape_17.setTransform(-10.8,-16.6,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgEACIAJgFIgFAHg");
	this.shape_18.setTransform(-14,-16.9,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEAaIgTgQIgDgOIAKgYIgDAMIABAJIADAJIALAJIAMAFIAJgCIAKgMIgEALIACAGIgOAKg");
	this.shape_19.setTransform(16.5,-39.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEAUIACgUIAHgZIgDAZIABAag");
	this.shape_20.setTransform(-7.8,-59.4,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgMAXIAHgMIAFgOIAEgIIAGgGIADgLIAAAJIgGAGIgHANIgEAdg");
	this.shape_21.setTransform(3.9,-55.2,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgOA5IgQgEIgHgGIgFgPIAAgTIAJgNIAEgTIAFAAIACANIgDAVIgJAOIgCALIAGAJIAcAFIAHgGIAUg8IAGgGIAKgiIACgFIgCARIgKAgIgGAOIgDAXIgKAVIgMAIg");
	this.shape_22.setTransform(9.1,-44.6,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AALA4IhCgiIgYACIACgMIgJgCIgNAGIADgKIgLgCIgZAJIACgJIAWgFIACgEIgRgHIgBgDIAWADIgCgLIgMgKIgKgYIASAaIAWASIAYAFIAmgBIAWgJIAJgMIgHAOIgBAQIAEAQIADADQADADADAAIAQAEIAKAAIAIgDIAIgMIAKgjIgCAUIAFAPIAaAOIAKgDIAJgIIAFgGIABgCIAPABIgKAFIgGAKIgZATIgeAAIgTAJIgJgDIgKACIgDAJg");
	this.shape_23.setTransform(2.4,-39.5,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgWAFIADgFIAEgEIAEgBIACAEIAHACIAZABIgIAEIgdAAg");
	this.shape_24.setTransform(26,-39.4,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgDAEIAFgLIAEgEIAAADIgHASIgEACg");
	this.shape_25.setTransform(24,-41.9,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAAABIAFgMIAAgCIACABIgDAKIgKAQg");
	this.shape_26.setTransform(26.3,-46.3,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgHAFIASgPIgHAKIgOALg");
	this.shape_27.setTransform(26.1,-44.6,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AALgkIgHAfIgOAqg");
	this.shape_28.setTransform(-1.2,-18.3,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgCgEIAUgEIgkARg");
	this.shape_29.setTransform(-4.5,-17.7,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AANAGIgUADIgbgJIAIAAIATAFIAUgCIAQgLIgHALIANAGg");
	this.shape_30.setTransform(0.5,-10.9,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgeAZIgpgyIArAvIBkgBIgkAFg");
	this.shape_31.setTransform(2.4,2.3,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AACATIgLgWIADgUIACASIAMAYIACAEg");
	this.shape_32.setTransform(-17.3,-48.4,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgPgEIAJgEIAkAAIgaAHIgNAAIgUAKg");
	this.shape_33.setTransform(-22.7,-37.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgHAOIAGgGIgKADIgKgBIgHABIAHgHIAJACIARgHIALgKIgBgEIANgDIgGAIIgZAZIgNAEg");
	this.shape_34.setTransform(-23.5,-35.4,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgCgJIgVgWIAHgEIASAaIAWAsg");
	this.shape_35.setTransform(14.6,-28,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgEAXIAHgXIACgWIgBATQgBALgEAPg");
	this.shape_36.setTransform(0.8,-16.5,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgtAKIAngDQApgFAJgMIACAEQgDAFgNAEQgVAIghAAIgVgBg");
	this.shape_37.setTransform(-0.3,-12.6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgDAMQgGgBgHgJQgHgJABgJIACgJIAIASQAKAQAJADQARAFgBAJQgLgLgPgDg");
	this.shape_38.setTransform(9.9,-14.1,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgMgLIACgEIAXAfg");
	this.shape_39.setTransform(9,-18,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgFgDIgKgfIACgFQAEAXAZA4QgJgMgMgfg");
	this.shape_40.setTransform(7.5,-27.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgEgcQAAgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIADAWQADAXgEAUQAGgqgMgTg");
	this.shape_41.setTransform(4.9,-28.1,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgRAKQgXgNgJgCQgOAIgfAPQAQgKASgTQgGABgEgCQgNAGgTgIIAQgHQADgBgEgBIAIgBQARAGAXgFQAUAEANgLIgBACQgBAEAEAPQAEANACADQADAEAWABQAWAAAEgBQAFgCAFgOIAFAPQACABAGADQAJACADgCQAEgDAEgBIAGgDQgDAHgHAEQgIAEgHgBQgHgDgNADQgJADgHAFQgDgDgKgDIgKgDQgBAHgFADQgGgHgXgNg");
	this.shape_42.setTransform(2.6,-37.1,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgRA5QgSgHgRgPQgJgIgDgKIgBgIQACANAPAMQAIAHASAKQAJAGAQgBQAJAAAGgCIAGABQAHABAIgDQALgDAIgKQAJgMgBgNQAAgLgKgFQgHgEgPgEQgLgCgVgNQgRgMgQgNQgNgLgMAFIgLAGQARgSAVASIAZASIAWAOQAIAEAVAGQAYAFgEAbQgEAUgTAJQgPAGgMgDQgFACgMAAQgLAAgGgCg");
	this.shape_43.setTransform(-7.2,-50.4,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHgBQAKgdAIADIAFAPQACAQgRAQQgMAIgFAAQAEgPAFgOg");
	this.shape_44.setTransform(1.4,-45.6,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgeAGIAegGIAfgGQgWAIgFAAQgQAEgLAAIgHAAg");
	this.shape_45.setTransform(-18.4,-38.9,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgEAAQAGgNAIgBIgGAGQgGAIgHAPQACgHADgIg");
	this.shape_46.setTransform(1.2,-48,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgRAIQgHgLAHgJQAEgGALgFIgGAEQgHAFgCAEQgEAKAHAJQAEADAgAMQgigIgFgIg");
	this.shape_47.setTransform(-4.2,-49.5,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAgHIADAKIgFAFQACgGAAgJg");
	this.shape_48.setTransform(5.9,-59.1,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgQABQAHgEAYgKIAXgJQgcARgNAEQgKABgNALIgLALQAKgMALgJg");
	this.shape_49.setTransform(-16,-35.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAmAPIgWgJQgQgGgLAAQgKgBgagHIgXgHIAxAMIAZADIASAHQAOAGAEABQAGABAZgCQgRADgJAAIgHgBg");
	this.shape_50.setTransform(3.5,-5.4,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag3AfIAfgBQAhgCAPgGQAQgHAKgYIAGgYQgBAMgDAOQgFAPgGAHQgUASgoABg");
	this.shape_51.setTransform(-1.9,-17.2,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AAjAEQgKgEgUAAQgTgBgNACQgNACgogLIANADQAaAFAKgCQAMgCAZABQAcABAIADQALAEAcAEQghAAgNgFg");
	this.shape_52.setTransform(5.2,-8,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgDAWQgCgIAFgUIAFgTIgDAVQgCAWACAIg");
	this.shape_53.setTransform(-7.7,-59.5,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgQAFQAagDAHgJQgBAJggAGg");
	this.shape_54.setTransform(25.9,-41.3,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgVAAIABgBIASABQARAAAHAAQgQACgLAAQgJAAgHgCg");
	this.shape_55.setTransform(25.9,-38.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgXA+QgGgBgGgEQgGgNgBgUQgBgTAFgGQADgGAGgSIAHgWIAEgKIACgEQgLApgEAHIgHAPQgEANACATQAFAUAGADQAGADADAAQAGgBAHgGQALgFAEgGQAIgKADgJQAEgNAHgJQADgCAKgTIgLAWIgFAFQgFAIgEAMQgDAMgMAKIgPAKQgEADgGAAIgBAAg");
	this.shape_56.setTransform(20,-44.6,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgJBHQgTgEgEgLQgEgNACgcQADgcAKgdQADgNAGgHQAIgLAKACQgEAAgFADQgLAGgEASQgOAzAAAZQAAARAHAKQAGAGAHABIAWADQATAAAHgPQgEARgNABIgKABIgSgCg");
	this.shape_57.setTransform(7,-46.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgDAAQAOgMAHABIgNAIQgPAJgHAHIAOgNg");
	this.shape_58.setTransform(-20.5,-36.6,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgkAHQAkgBAlgMQgQANgyAAIgHAAg");
	this.shape_59.setTransform(-17.7,-39.7,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AghgGIAZAGQAbAFAPgCQgFADgLABIgBAAQgUAAgegNg");
	this.shape_60.setTransform(-16.5,-41.8,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AhKGTIgCisQgBg+gEgtQgDgogFgnIABgoIADgnQADgSgDgJQgFgTgZgdIg6hCIgMgQQgFgKADgVQADgRAHgRQAFgKAXglIAPgZQAIgMAEgEIAHgGIADgBIABAAIgBgBQgBgOACgGQAEgMASgLQAHgFAJAAQAKAAAGADQAGACALAKQAQgRAOgBQAQgCAPAKQAXAQAGAbQAQgBAOAFQAPAGAJAMQAYgJAUAPQAKAIAJANQAIAMABAVIABAQIAFALIAGAMQACAHgEAGQgIANAAADIgDAOQgFATgBAJQAAAHgJATQgIAQgFAOIgNAjQgEAQgKANQgEAFAAAFIgCAPIgDASQgCAKABAIQAIA/ALA0QAOBBAqCWQABABAAAAQgBABAAAAQAAAAgBABQAAAAgBABIgBAAIgBAAIAAAAIj8AyQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAgAhOmLQgDAAgHAFQgQALgBAOIABAIQAAAFgCACQgCADgHADQgGAFgGAKIgKARIgaArQgRAggCAaQAAAOAIAKQAHAKAKAKIApAvQAYAdAFAIQAMATgBAQIgDAXQgDAQACArQABAkACAZQAGBEABAuIADC+ID1gwIAAgBQguilgQhPQgHgjgDgaQgDgaADgZIACgQIACgOIAHgKQAHgLACgFQAKgjANgcQALgWACgJIAFgYIADgRIACgKIAHgJQAEgGgBgEIgFgMIgGgNIgBgMQgBgagHgKQgagoghAOQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgJgMgOgGQgOgFgPABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgGgYgRgOQgPgMgOAAQgIABgIAGIgOAMQgCAEgDgDQgNgNgGgCQgFgCgGAAIgFABg");
	this.shape_61.setTransform(0,0,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhLCfQgDgngBhKQgChMABgRQADgXgegjQhFhOgFgHQgHgKAEgWQAEgRAHgRQAEgKAVgjIAYglIAHgIQAFgDACgBQACAAAAgGIAAgNQAAgMAbgQQARgCAJAGQAEACALALQAPgRAKgDQAIgCANADQAUAGANAWQAGALADAKQAjgDATAaQAigPAdAoQAIANAAAjQAAACAHALIAGAPQAAADgEAGIgHALIgJAwQgBAHgSAnQgPAmgCAJQgBAHgHAKIgIALIgCANIgEARQgDANACANIAEAlQAEAeAKAtQAPBHAqCXIj9AxQgBjCgDgxg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgSAfIAjj8IACAAIgiD8IAJC/g");
	this.shape.setTransform(-10,31.8,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgUgYIApiqIgkCvIAHDWg");
	this.shape_1.setTransform(-5.9,29.1,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgQgUIAdioIAEACIgdCkIgCDTg");
	this.shape_2.setTransform(1.2,31.9,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgGAKIgQgYIAVATIAIADIAQgWIgKAdg");
	this.shape_3.setTransform(28.2,-15.5,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgRAGIALgYIAeAhg");
	this.shape_4.setTransform(22.4,-12.3,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAbAIIgcADIgMgMIgYgJIAbAEIANAMIAbgCIAIAHg");
	this.shape_5.setTransform(18.4,-7.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgBAdIgagmIAGgjIAAAhIAVAkIAcAUg");
	this.shape_6.setTransform(-25.8,-81.1,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAUAYIgyggIgogSIAlANIA1AgIAzAIg");
	this.shape_7.setTransform(5.2,-2.6,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAQAFIgwgdIAzAdIAOAUg");
	this.shape_8.setTransform(-23.8,-9.1,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAFAKIgYgOIgIgNIANAMIAWAOIAUAJg");
	this.shape_9.setTransform(-26.7,-21.5,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AADAKIgfgSIAGAAIgKgKIATANIAtAYg");
	this.shape_10.setTransform(-24.7,-17.1,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgOgDIgJgHIAvAVg");
	this.shape_11.setTransform(13.8,4.5,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgNgGIAKADIARgQIgQAWIgEARg");
	this.shape_12.setTransform(47.3,-42.3,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAEADIgNgEIgOAAIgJABIAKgFIAaAAIAdALg");
	this.shape_13.setTransform(-39.8,-70.6,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgGAGIApgSIgTANIgWAKIgcACg");
	this.shape_14.setTransform(-32.5,-62.7,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAEgFIAGgBIgTANg");
	this.shape_15.setTransform(-45.9,-58.9,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgKAHIAVgOIgSAPg");
	this.shape_16.setTransform(-44,-53.7,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AAYgcIgVAdIgaAcg");
	this.shape_17.setTransform(-34.4,-47.4,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgUAGIAEgGIAYgGIANAFIgGAIg");
	this.shape_18.setTransform(-9.2,-19.3,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgBARIAKgIIgKgEIgYAAIgSgFIAXgEIANgPIgGARIATgCIAAAEIAJACIAKgHIATgCIgPAHIgHAIIAJAEIgEAIg");
	this.shape_19.setTransform(-17,-21.6,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AAOgIIgGAIIAGAFIgbADg");
	this.shape_20.setTransform(-23.6,-24.9,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AABgGIAJABIgTAMg");
	this.shape_21.setTransform(-25.5,-25.5,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgYAEIAGgEIATAEIAYgNIgYATg");
	this.shape_22.setTransform(-24.2,-27.9,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgIAAIARgGIgKANg");
	this.shape_23.setTransform(-29.4,-29.7,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgVAbIAsg2IgrA3g");
	this.shape_24.setTransform(-29.2,-36,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgQArIgbghIAAgaIAZgmIgKATIgCARIADARIAOATIAUANIAQgBIAWgRIgKASIAAALIgbAMg");
	this.shape_25.setTransform(30.2,-58.8,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgPAfIAKghIAVgoIgOApIgGAsg");
	this.shape_26.setTransform(-4.5,-99.7,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgdAiIAPgUIAOgWIAKgMIAGgFIAGgDIAIgRIgCAOIgMAKIgQAVIgSAug");
	this.shape_27.setTransform(14,-88.6,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgvBTIgcgMIgKgLIgCgcIAGggIATgSIAPghIAIADIgBAWIgNAjIgUAWIgHAQIAIASIAtASIAQgHIA1hfIAMgKIAQgaIANgcIAFgHIgJAbIgcA0IgQAVIgMAnIgXAgIgYAJg");
	this.shape_28.setTransform(19.9,-67.9,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AAFB0IhnhRIgogEIAGgTIgOgGIgZAFIAJgOIgSgIIguAHIAHgQIAngCIAFgGIgbgSIAAgFIAjANIACgUIgRgUIgKgsIAVAyIAgAlIAnARIBCAMIAngJIAVgQIgTATIgHAdIADAdIAEAGQAEAFAGADIAaAMIARADIAOgDIARgSIAeg5IgKAgIAEAdIAnAiIASgCIASgLIANgMIAYAHIgTAFIgNAPIgwAYIgzgLIglAKIgNgIIgSgBIgHAPg");
	this.shape_29.setTransform(5.3,-65.8,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgZAFIgNgEIAPgPIAHABIACAJIAMAEIApAMIgOADg");
	this.shape_30.setTransform(45.9,-54.6,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AAHgNIAIgEIgVAgIgIADg");
	this.shape_31.setTransform(43.5,-59.6,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAAACIAOgXIADACIgJAQIgYAZg");
	this.shape_32.setTransform(48.8,-66.3,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgNAFIAPgGIAVgNIgRAQIgcANg");
	this.shape_33.setTransform(48,-63.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAfg6IgWAzIgnBCg");
	this.shape_34.setTransform(-7.2,-28,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgCgJIAkACIhDARg");
	this.shape_35.setTransform(-13.1,-28.2,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AAVAHIgjgDIgrgVIAOACIAfAOIAjAEIAfgOIgRARIAVANg");
	this.shape_36.setTransform(-7.2,-13.7,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AAzA8IhwgXIg1hkIA4BfICtAgg");
	this.shape_37.setTransform(-7.9,7.5,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AABAgIgNgqIAMggIgCAdIAPA4g");
	this.shape_38.setTransform(-25,-84.4,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgYgHIAQgEIA+AMIguACIgWgDIgnAMg");
	this.shape_39.setTransform(-37.3,-68.9,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgSASIAMgIIgSADIgSgFIgKgBIAMgJIAQAGIAfgHIAWgNIAAgIIAZAAIgPALIg0AiIgXAEg");
	this.shape_40.setTransform(-39.2,-64,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgBgRIgbguIAMgDIAWAyIAXBTg");
	this.shape_41.setTransform(22.9,-38.8,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AAFgKIADgQIABAMIgRApg");
	this.shape_42.setTransform(6.3,-44.7,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgOAhIAVglIAIgdIgGAZQgFASgNAYg");
	this.shape_43.setTransform(-4.6,-23.5,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AhQgEIBEAHQBHAFAUgSIACAHQgHAIgYAEQgNACgPAAQgpAAg9gPg");
	this.shape_44.setTransform(-7.7,-16.8,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgIATQgKgFgIgRQgIgTADgPIAGgNIAIAgQALAgAPAJQARAJAFAKQADAFgCAEQgPgWgZgKg");
	this.shape_45.setTransform(10,-17.1,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgPgWIAEgGIALAaIAQAfg");
	this.shape_46.setTransform(9.8,-24.3,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgGgJIgIg2IAGgJQgCAoAZBpQgLgYgKg6g");
	this.shape_47.setTransform(10.4,-40.1,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AABARQAIgsgJgWQABgIAEABIAEACIgBAlQgDAqgNAgQAGgSADgWg");
	this.shape_48.setTransform(6.7,-42.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AB8BBQgLgIgXACQgRABgNAFQgEgGgRgIIgQgIQgDALgIAEQgKgOgigfQgkgegOgGQgVAIgyANIgSADQASgFAVgLQATgLANgKQgJgBgHgFQgPAEgUgJIgRgJIAcgGQAGgBgGgDIANAAQAdAPAnACQAVAIAVgEQAKgCAGgDIgCACQgDAIACAaQADAYACAGQADAGAmAJQAlAJAIgCQAJgBANgXIAEAcQABAEAMAGQAMAHAIgCQAHgEAIgBQAHgBAEgCQgJALgNAEQgHADgHAAQgGAAgGgCg");
	this.shape_49.setTransform(5.5,-59,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAMBsQgJACgTgFQgUgEgKgGQgbgQgaghQgNgQgBgTIACgOQgCAWAVAbQAMAPAaAXQAOAMAdAFQAOACAMAAIAJADQANAEAOgBQATgCASgQQATgRADgVQACgUgOgOQgKgJgZgKQgSgHgegdQgagagYgcQgSgWgXACIgTAHQAjgXAdAkQAIALAbAbQAcAcAHAGIANAJIAiAPQAnASgRAtQgNAhgjAJQgLACgKAAQgPAAgMgFg");
	this.shape_50.setTransform(-7,-85.2,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgiArIAZguQAbguANAIIAEAbQgDAdghAVQgQAGgKABg");
	this.shape_51.setTransform(5.8,-73.7,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("Ag2gBIAWAAIAggCQAYACAegBQgoAGgIgBIgUABQgZAAgPgFg");
	this.shape_52.setTransform(-29.5,-68.3,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgHAAQAPgXANACQgEACgIAGQgOAMgPAXg");
	this.shape_53.setTransform(6.8,-77.6,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgcAFQgJgWAOgOQAKgJAUgDIgMAEQgNAGgEAGQgMARAKASQADAEAaARIAbAQQg3gagFgOg");
	this.shape_54.setTransform(-2.5,-81.4,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAFgMIAAATIgKAGQAFgJAFgQg");
	this.shape_55.setTransform(18.3,-94.9,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("Ag6APQARgLAOgGQAWgLBNgMQg0ASgaACQgPACgbAOIgXAPg");
	this.shape_56.setTransform(-26.8,-61.4,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AA6ApIgigWQgagSgRgEQgRgEgpgVIgmgUIBQAlIAUAHQAPAFAHADIAcASQAXAQAFACQALADAqAGQgsgCgOgGg");
	this.shape_57.setTransform(-3.5,-4.8,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgsAsIg9gRIA0AJQA6AHAcgGQAdgFAZgnQANgUAGgTQgFAUgLAWQgNAZgMAKQgcAQgoAAQgTAAgWgDg");
	this.shape_58.setTransform(-8.7,-24.9,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AA1AQQgPgKgigHQghgIgWAAQgSAAg0gaIgJgFIANAFQAqARASABQAUAAAsALQAvAKAMAJQASALAvARQg5gLgVgOg");
	this.shape_59.setTransform(0.9,-7.8,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgPAjQgBgOAQghIARggIgNAkQgMAmACAOg");
	this.shape_60.setTransform(-4.3,-100,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgdADQAdACASgFQAKgDADgEQgDAKgdADIgdACg");
	this.shape_61.setTransform(46.6,-58,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AglgEQADgCAAgBIAdAHQAfAHAMACQgygDgZgKg");
	this.shape_62.setTransform(45.7,-53.3,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("Ag4BoQgLgEgIgJQgGgYAFgjQAGggAKgKQAIgJAQgcQAPgaADgKQADgIAHgHIAGgGQghBBgIAMQgMANgGALQgMAUgCAhQgBAjALAIQAKAHAFAAQAKACAOgIIAMgDQANgFAFgFIAMgMQAGgGAHgLQAMgVAPgNQAFgEASgVIgVAbQgPAIgQAfQgLATgVAMIgfANQgFACgFAAIgKgBg");
	this.shape_63.setTransform(36.8,-66.5,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AAXB+QgZgDgWgJQgggNgCgUQgCgZANgtQAPgxAagtQAIgUAOgLQARgPASAGQgIgCgKAEQgVAIgNAcIgdBAQgOAggGAeQgGAcAKASQAHAOAMADIAlANQAgAGARgXQgDAHgHAHQgKAMgMAAIgEAAg");
	this.shape_64.setTransform(13.5,-72.9,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgGgBQAdgQAMADQgtAPgYAOg");
	this.shape_65.setTransform(-33.8,-65.5,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgRADIgqgFQAkADApgBQAZgBAQgDQgPAJggAAIgdgCg");
	this.shape_66.setTransform(-27.1,-69.1,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AAcATQgkgHguggIAnATQAtASAZACQgEACgHAAIgQgCg");
	this.shape_67.setTransform(-25.3,-73.4,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AlGKtQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAYh8AeipQAShpAJhPIAOiIQABgNAOg3QAOgzAFgPQALgfgCgPQgCgXgLgZQgHgQgQgcIhMiDIgIgQQgFgJgCgHQgGgUANghQAMgeARgYQANgUAxg0IAjglQARgSAIgFQAIgFAHgCIAFgCIABAAIAAgBQADgXAFgKQALgTAigNQANgFAPACQARAEAJAFQAJAGAIAKIAIAMQAOgKAJgEQASgJAQACQAeADAVAWQAhAgADAyQAbAEAVAOQAYAPALAWQATgCASAFQAVAGAPARQAQARAKAYQAJAVgFAnIgCARIgCAKIAFAVIAGAXQABAMgIAJIgLALQgGAGgDAHIgJAWQgQAjgEAMQgDAKgHALIgOATIghAvQgYAmgJASQgMAXgWAVQgHAGgDAJIgIAYQgEAMgIATQgGAQgBAPQgIBiACBoQACCIAUD3IAAABIgBACQgDADgEAAgAhWqgQggAOgFAXIgCANQgCAJgDADQgCACgGABIgJAEQgMAHgOAOIgXAZQgoArgTAXQgoAwgLAsQgFAXAKAVIBLCEQAdAwAJAYQAOAmgHAZIgNAnQgKAbgMBKQgLBAgEAoQgMB1gOBQQgXCGglC+IGyABIAAgDQgMiWgEhDQgHh6ABhgQAAg6ADgxQAEgqANguIAJgbIAEgMQACgGADgEQADgFALgJQAPgOAFgLQAcg1AhgtIARgYQAKgOAFgKIAJgUIAHgVIAMgbIAHgQIAOgNQAKgKAAgGIgFgXIgHgYIABgKIACgKQADgWAAgLQABgTgFgNQgNghgVgRQgagUgfAGQgGABgCgDQgKgXgXgPQgVgOgagDQgFgBAAgCQgBgqgZgfQgVgagagDQgOgDgRAIQgJAFgQANQgCABgEAAQgDgBgBgCQgHgMgFgFQgHgJgHgFQgMgGgQgCIgBAAQgGAAgLAGg");
	this.shape_68.setTransform(0,0,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AlEKpQBAlKAKhVQAIhCAXh/QAXiCAIgdQANgogphEQhTiOgNgcQgIgSAOglQALgcASgZQAMgRAvgzQApgtALgKQAGgGAKgFQAIgFAEAAQADAAACgKIAFgVQAFgWAxgRQAeACAPANQAEADAQAXQAdgWAUgCQANgBAXAJQAhASAOAqQAHAVABARQAiAEAZAVQASAOAIASQA/gOAiBPQALAZgMA6IAGAaQAHAWgBAFQgBAFgIAIIgPARIgRAmQgOAggCAIQgDAMgtA8IgYAmQgQAagEALQgFAKgPAQIgQAQQgCABgCAFIgFANQgCAHgKAVQgJAXgCAXIgFBAQgCAyAABRQABB/AWEOg");
	this.shape_69.setTransform(0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,-114.9,110.7,229.8);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgJAUIgIiSIACAAIAICSIAZBrg");
	this.shape.setTransform(4.4,15.8,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgPgKIAFhlIgCBnIAcB4g");
	this.shape_1.setTransform(6.1,13.7,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgLgJIgBhjIADABIABBhIAVB2g");
	this.shape_2.setTransform(10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAAAJIgMgMIANAIIAGABIAGgOIgCARg");
	this.shape_3.setTransform(20,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgJAGIAEgPIAVAPg");
	this.shape_4.setTransform(17.6,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgHAAIgPgDIAQgBIAJAFIAPgDIAFACIgHAAIgPAEg");
	this.shape_5.setTransform(15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AABARIgSgSIgBgVIAEASIAPASIASAJg");
	this.shape_6.setTransform(-17.4,-46.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAEAGIgPgGIgFgGIAIAGIAOAFIAMACg");
	this.shape_7.setTransform(-11.5,-12.5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AADAFIgUgGIAEgBIgHgEIAMAGIAdAHg");
	this.shape_8.setTransform(-9.9,-10.2,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgJAAIgFgCIAdAFg");
	this.shape_9.setTransform(14.4,-2.3,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgGgBIAGAAIAHgKIgHANIAAAKg");
	this.shape_10.setTransform(27.9,-32.6,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgNAAIAOgDIASADIgRABIgHAAIgIABIgFACg");
	this.shape_11.setTransform(-24.4,-38.8,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgCAEIAVgOIgJAJIgGACIgGAGIgQAEg");
	this.shape_12.setTransform(-19.4,-35.1,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgJABIANgFIAIABIgDAFIgUAEg");
	this.shape_13.setTransform(-1.3,-13.1,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAGAEIgGgBIgNADIgKgBIAMgFIAGgJIgCAJIAKgCIABACIAFAAIAFgFIAKgDIgHAGIgDAEIAGABIgCAFIgRACg");
	this.shape_14.setTransform(-6.1,-13.6,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAGgFIgCAFIAEABIgOAFg");
	this.shape_15.setTransform(-10,-14.7,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAAgDIAFgBIgJAIg");
	this.shape_16.setTransform(-11.2,-14.9,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgMAHIACgEIALAAIAMgJIgLANg");
	this.shape_17.setTransform(-10.8,-16.6,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgEABIAJgEIgFAIg");
	this.shape_18.setTransform(-14,-16.9,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEAaIgTgQIgDgOIAKgYIgDAMIABAJIADAIIALAKIALAFIAJgCIALgMIgEALIABAGIgNAKg");
	this.shape_19.setTransform(16.5,-39.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEAUIABgUIAIgZIgDAZIAAAag");
	this.shape_20.setTransform(-7.7,-59.3,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgLAXIAGgMIAFgOIAEgIIADgDIADgDIACgLIAAAJIgFAGIgHANIgEAdg");
	this.shape_21.setTransform(3.9,-55.1,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgfA1IgHgGIgEgQIAAgTIAJgMIAEgTIAFAAIACANIgEAVIgIAOIgCALIAGAJIAcAFIAHgGIAUg8IAGgHIAGgQIAEgSIACgEIgCAQIgKAhIgHAOIgCAXIgKAVIgMAIg");
	this.shape_22.setTransform(9.2,-44.6,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAMA3IhDghIgXACIABgMIgIgCIgOAGIADgKIgLgCIgZAJIACgJIAWgGIADgDIgSgHIAAgDIAVADIgBgLIgNgKIgKgXIARAaIAXARIAYAEIAnAAIAVgJIAJgMIgIANIAAARIAEAQIADACIAGAFIARADIAKAAIAIgDIAGgMIALgkIgCAVIAGAOIAZAPIALgDIAJgIIAGgIIAOABIgLAFIgFAKIgYATIgfgBIgUAKIgIgEIgKADIgCAJg");
	this.shape_23.setTransform(2.3,-39.5,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgWAFIAHgKIAEAAIADAFIAGABIAZABIgIAEIgdAAg");
	this.shape_24.setTransform(26.1,-39.4,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AACgHIAEgEIAAADIgHASIgEACg");
	this.shape_25.setTransform(24,-41.9,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAAABIAFgMIAAgCIACABIgDAKIgKAQg");
	this.shape_26.setTransform(26.3,-46.2,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgHAFIAIgFIALgKIgIAKIgPALg");
	this.shape_27.setTransform(26.1,-44.6,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AALgkIgHAfIgOAqg");
	this.shape_28.setTransform(-1.2,-18.3,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgCgEIAUgEIgjARg");
	this.shape_29.setTransform(-4.5,-17.8,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AANAGIgUACIgbgIIAIAAIAUAFIAUgBIAPgLIgHALIANAEg");
	this.shape_30.setTransform(0.5,-11,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgeAZIgpgyIArAvIBkgCIgkAGg");
	this.shape_31.setTransform(2.4,2.3,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AADATIgNgWIAFgUIABASIAPAdg");
	this.shape_32.setTransform(-17.3,-48.4,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgPgEIAJgEIAkAAIgaAGIgNABIgUAKg");
	this.shape_33.setTransform(-22.7,-37.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgHAOIAFgGIgJADIgKgBIgHABIAHgHIAJACIARgHIAKgKIAAgEIANgDIgfAhIgOAEg");
	this.shape_34.setTransform(-23.5,-35.4,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgCgIIgVgYIAHgDIARAaIAXAtg");
	this.shape_35.setTransform(14.7,-27.9,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AADAAIACgWIgBATQAAALgFAOIgDABg");
	this.shape_36.setTransform(0.8,-16.5,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgtAKIAngDQAogFAKgMIACAEQgDAFgOAEQgTAIghAAIgWgBg");
	this.shape_37.setTransform(-0.3,-12.6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgDAMQgGgCgGgJQgHgJAAgJIACgHIAIARQAKAQAJADQARAGgBAHQgLgKgPgDg");
	this.shape_38.setTransform(9.9,-14.1,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgMgLIACgEIAWAfg");
	this.shape_39.setTransform(9,-18,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgEgDIgLgeIADgGQACAXAaA4QgJgMgLgfg");
	this.shape_40.setTransform(7.5,-27.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgEgcQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIACABIADAVQADAXgEAUQAGgqgMgTg");
	this.shape_41.setTransform(4.9,-28.1,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgRAJQgXgMgJgCQgLAGgbANIgGADQAQgKAQgRQgFAAgEgCQgJAEgMgCIgKgEIAPgGQABAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIAHgCQAUAGAVgEQAUAEANgLIgBABQgBAFAEAOQAEAOACADQADACAWABQAVABAFgBQAFgCAFgOIAFAPQABACAHACQAIACAFgBQADgDAEgCIAGgDQgDAHgHAEQgIAEgHgBQgIgDgMAEQgKACgGAFQgDgDgLgDIgKgDQAAAHgEADQgHgHgXgOg");
	this.shape_42.setTransform(2.6,-37.1,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgRA5QgRgHgSgQQgJgHgDgLIgBgHQADATAoAXQAJAFAQAAQAJgBAGgBIAGABQAHAAAIgCQALgCAIgMQAIgLAAgNQAAgMgKgFQgHgEgPgDQgWgFgrgkQgNgKgMAEIgLAGQARgQAVAQQAGAFATANIAXAPQAHAEAWAFQAZAHgGAZQgEAVgSAJQgPAGgNgDQgFACgMAAQgKAAgHgCg");
	this.shape_43.setTransform(-7.1,-50.3,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHgBQAKgdAIADIAFAPQACAQgRAQQgHAFgGACIgEABQAEgPAFgOg");
	this.shape_44.setTransform(1.3,-45.6,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgeAGIAegGIAfgGQgXAIgEAAQgQAFgLAAIgHgBg");
	this.shape_45.setTransform(-18.4,-38.9,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgEAAQAGgNAIgBQgDABgDAFQgGAIgHAPQACgHADgIg");
	this.shape_46.setTransform(1.2,-48,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgRAIQgIgLAHgJQAFgGALgEIgHADQgGAFgCAEQgFAKAIAJIAkAPQgigJgFgHg");
	this.shape_47.setTransform(-4.2,-49.5,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAgHIADALIgFAEQACgGAAgJg");
	this.shape_48.setTransform(6,-59.1,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgfAPQAIgIAIgFQALgIAqgQQgcARgOAEQgIABgNAMIgMALg");
	this.shape_49.setTransform(-16,-35.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAlAPIgVgJQgQgGgKAAQgKgBgagHIgYgHIAyAMIAZADIAkAOQAFABAZgCQgRADgJAAIgIgBg");
	this.shape_50.setTransform(3.5,-5.4,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag3AfIAfgBQAggCAQgGQAPgHAKgYIAHgYQgBAMgEAOQgEAPgGAHQgUASgoABg");
	this.shape_51.setTransform(-1.8,-17.2,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AAfADQgKgDgUgBQgTAAgNABQgKACgggIIgEgCIAGACQAaAFAKgCQALgDAbACQAbABAIADQALAFAdADQgiABgNgGg");
	this.shape_52.setTransform(5.8,-7.8,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgDAXQgCgJAFgUIAFgTIgDAVQgCAXACAHg");
	this.shape_53.setTransform(-7.7,-59.5,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgQAFQAagDAHgJQgBAJggAGg");
	this.shape_54.setTransform(25.9,-41.3,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgUABQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIARABQAQAAAHAAQgQACgKAAIgPgBg");
	this.shape_55.setTransform(25.8,-38.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgXA+QgGgBgGgEQgGgNgBgUQAAgTAEgHQADgGAGgRIAHgWIAEgKIACgEQgLApgDAHIgIAPQgEANADATQADAUAHADQAGADAEAAQAFgBAHgGQALgFAEgGQAIgKADgJQAEgOAIgIIAMgVIgLAWIgEAFQgFAIgEAMQgEAMgMAKIgOAKQgFADgFAAIgCAAg");
	this.shape_56.setTransform(20,-44.6,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgJBHQgUgEgDgLQgEgOACgbQADgdAKgdQADgMAGgIQAIgKAKABQgFAAgEAEQgLAGgFASIgJAoQgEATAAARQgBARAIAJQAGAHAHAAIAWAEQATAAAHgPQgFARgNABIgKABIgRgCg");
	this.shape_57.setTransform(7.1,-46.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgEAAQAPgMAHABQgXAMgMALg");
	this.shape_58.setTransform(-20.4,-36.6,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AAhgGQgKAIggAEIgXABQAggCAhgLg");
	this.shape_59.setTransform(-17.1,-39.8,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AghgGIAZAGQAbAFAPgCQgFADgLAAIgBABQgUAAgegNg");
	this.shape_60.setTransform(-16.5,-41.8,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AhKGTIgCisQgBg5gEgyIgHhPIABgoIADgnQACgUgCgHQgGgTgZgdIg5hCQgLgMgCgEQgGgMAEgTQADgSAIgQQAFgNAWgjIAPgYIAMgQIAIgGIACgBIABgCQgBgNACgGQADgMASgLQAHgFAJAAQAJAAAHACQAHADAKAKQASgRAMgBQAQgCAPAKQAWAPAIAcQAQgBANAFQAPAGAJALQAZgIATAPQALAIAJAMQAHALACAXIAAAQIAFALIAGAMQACAHgDAGQgIAMgBAEIgDAOIgFAcQgBAFgJAVIgNAeIgNAjQgEAQgKANQgDAEgBAGIgCAPIgDARQgBALABAIQAHA+AMA1QAPBIAoCPQABABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIj7AyQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAgAhOmLQgEAAgGAFQgQAMgBANIABAIIgBAHIgJAGQgHAFgGAKIgKARQgQAZgKASQgRAfgCAbQAAAOAIAKIA6BDQAWAZAHALQAMAWgBANIgDAYQgCAQABArQABAlACAYQAGA9ABA1IADC+ID1gwIAAgBQgviogOhMQgHgigDgbQgDgWACgdIACgRIADgNIAGgKQAHgJACgHQALgkAMgbIAIgPQAEgJABgHIAFgYIADgRIACgKIAHgJQAEgGAAgEIgGgMIgGgNIgBgMQgBgagHgLQgLgRgOgHQgQgJgRAHQgBAAgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQgRgYgjACQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQgGgZgRgOQgOgLgPAAQgMAAgRATQgDADgDgCQgNgNgFgCQgGgCgHAAIgEABg");
	this.shape_61.setTransform(0,0,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhLCfQgCgngChKQgChMACgRQACgXgegjQg/hHgLgOQgHgKAEgWQAEgRAHgRQAFgKAVgjIAXglQAIgLAGgBQADAAgBgTQABgNAagPQARgCAJAGQAEABALALQAOgQAMgDQAHgCANADQAUAGANAWQAGALADAKQAUgCAQAJQAMAGAGAKQAjgQAcApQAJANAAAjQAAACAGALIAGAPQAAAFgKAPIgKAwQAAAEgIARIgLAZIgRAvQgCAHgGAKIgIALQgBACgBALIgEARQgDANACANIAFAlQAEAdAJAtQAPBIAqCXIj8AxQgBjCgEgxg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.6);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgNAXIAai9IABAAIgZC9IAHCQg");
	this.shape.setTransform(-7.5,23.9,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgPgSIAfh/IgbCCIAFChg");
	this.shape_1.setTransform(-4.5,21.8,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgMgPIAWh+IADACIgVB7IgCCeg");
	this.shape_2.setTransform(0.9,23.9,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgFAIIgLgTIAPAPIAGACIAMgQIgIAWg");
	this.shape_3.setTransform(21.2,-11.7,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgCABIgNAFIAJgSIAWAZg");
	this.shape_4.setTransform(16.8,-9.3,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAUAGIgUACIgKgJIgSgGIAVADIAJAIIAUgBIAHAGg");
	this.shape_5.setTransform(13.8,-5.4,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgBAWIgTgdIAFgaIAAAYIAPAbIAVAQg");
	this.shape_6.setTransform(-19.4,-60.9,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAQASIgmgYIgfgNIAcAKIAoAXIAnAGg");
	this.shape_7.setTransform(3.9,-2,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AADAIIgRgKIgGgKIAJAJIARAKIAPAGg");
	this.shape_8.setTransform(-20.1,-16.1,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AACAHIgXgNIAFAAIgHgHIANAKIAiARg");
	this.shape_9.setTransform(-18.5,-12.9,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgLgCIgGgFIAjAPg");
	this.shape_10.setTransform(10.4,3.4,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgJgEIAHACIAMgMIgLARIgDAMg");
	this.shape_11.setTransform(35.6,-31.8,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AADACIgKgCIgKAAIgHAAIAHgDIAUgBIAWAJg");
	this.shape_12.setTransform(-29.9,-53.1,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgEAFIAegOIgOAJIgQAIIgVACg");
	this.shape_13.setTransform(-24.4,-47.1,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AACgEIAGgBIgPALg");
	this.shape_14.setTransform(-34.4,-44.3,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgPAFIAEgFIARgEIAKAEIgFAFg");
	this.shape_15.setTransform(-6.9,-14.5,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgBANIAHgGIgGgDIgSAAIgOgEIARgDIAKgLIgFANIAOgCIAAADIAHACIAHgFIAPgCIgLAFIgGAGIAIADIgEAGg");
	this.shape_16.setTransform(-12.8,-16.2,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AALgFIgFAFIAEAEIgUACg");
	this.shape_17.setTransform(-17.8,-18.7,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AABgEIAHAAIgPAJg");
	this.shape_18.setTransform(-19.2,-19.2,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgRAEIAEgEIAOADIASgKIgSAOg");
	this.shape_19.setTransform(-18.2,-20.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgGAAIANgEIgIAJg");
	this.shape_20.setTransform(-22.1,-22.3,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgMAgIgUgYIAAgUIATgcIgIAPIgBAMIABANIAMANIAPAKIALgBIAQgMIgHANIAAAIIgUAKg");
	this.shape_21.setTransform(22.6,-44.2,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgLAYIAHgZIAQgfIgLAgIgEAhg");
	this.shape_22.setTransform(-3.3,-74.8,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgWAaIAMgPIAKgRIAIgJIADgDIAGgCIAFgOIgCALIgIAHIgMAQIgNAjg");
	this.shape_23.setTransform(10.5,-66.5,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgjA/IgVgJIgHgJIgCgVIAFgYIAOgNIALgZIAGACIgBARIgKAaIgOAQIgFANIAFANIAiAOIAMgGIAnhHIAKgIIAWgoIADgFIgGAUIgVAnIgMAQIgKAdIgRAYIgSAHg");
	this.shape_24.setTransform(14.9,-51,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AAEBXIhNg9IgegCIAEgPIgLgFIgSAEIAHgKIgOgGIgiAFIAEgMIAegCIAEgEIgUgNIAAgEIAbAKIABgQIgOgPIgHggIAQAlIAYAcIAdAMIAyAJIAdgGIAPgNIgOAPIgFAVIADAXIACADQAEAFAEACIATAJIANACIALgCIAMgOIAXgqIgHAXIACAXIAdAZIAPgCIAMgIIAHgGIADgCIASAEIgOAFIgJAKIgkASIgngIIgcAIIgKgHIgNAAIgGALg");
	this.shape_25.setTransform(4,-49.4,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgSAEIgLgDIAGgGIAGgFIAFAAIACAHIAIADIAfAJIgKACg");
	this.shape_26.setTransform(34.5,-41,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AAFgJIAGgEIgBADIgOAWIgGACg");
	this.shape_27.setTransform(32.7,-44.7,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AAAACIAKgSIADADIgHALIgRATg");
	this.shape_28.setTransform(36.6,-49.8,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgKAEIALgEIARgKIgNALIgVAKg");
	this.shape_29.setTransform(36,-47.7,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AAYgrIgSAlIgcAzg");
	this.shape_30.setTransform(-5.4,-21,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgCgGIAcABIgzAMg");
	this.shape_31.setTransform(-9.8,-21.2,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAQAFIgagCIgggQIAKABIAXAMIAaADIAXgLIgMANIAPAJg");
	this.shape_32.setTransform(-5.4,-10.3,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAmAtIhUgRIgnhLIAqBIICBAXg");
	this.shape_33.setTransform(-5.9,5.6,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AABAYIgKgfIAJgYIgBAWIALApg");
	this.shape_34.setTransform(-18.8,-63.4,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgSgFIAMgDIAuAJIgiABIgRgCIgcAJg");
	this.shape_35.setTransform(-28,-51.7,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgOAOIAJgGIgNACIgNgEIgIgBIAJgGIAMAEIAXgFIARgKIAAgGIASAAIgKAJIgoAZIgRADg");
	this.shape_36.setTransform(-29.4,-48.1,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AAAgMIgVgjIAJgCIARAlIARA+g");
	this.shape_37.setTransform(17.2,-29.2,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AAEgHIACgNIABAKIgNAfg");
	this.shape_38.setTransform(4.8,-33.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgKAZIAPgbIAGgWIgEASQgEAOgJARg");
	this.shape_39.setTransform(-3.5,-17.7,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("Ag8gDIAzAFQA1AEAPgNIACAGQgGAFgRADQgKABgLAAQgfAAgugLg");
	this.shape_40.setTransform(-5.8,-12.6,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgGAOQgHgDgGgMQgHgPADgLIAFgKIAGAYQAIAXALAHQANAHADAIQACAEgBACQgLgQgTgIg");
	this.shape_41.setTransform(7.5,-12.8,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgMgRIADgFIAWAtg");
	this.shape_42.setTransform(7.4,-18,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgEgGIgGgpIAFgHQgCAeASBPQgIgSgHgrg");
	this.shape_43.setTransform(7.8,-30.1,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AABANQAGghgHgRQABgFADAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABIgBAbQgDAggJAYQAFgNACgRg");
	this.shape_44.setTransform(5,-32,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("ABcAxQgJgGgRABQgMABgKAEQgDgEgNgHIgMgGQgCAJgGADQgHgLgagXQgbgXgKgEQgQAGglAKIgMACQAMgEAPgIQAOgIAKgIQgHgBgFgDQgLACgPgGIgNgHIAVgEQAEgBgEgCIAKAAQAUALAeABQAQAHAQgDQAIgCAEgDIgBACQgCAGABAUQACASACAEQACAEAcAHQAcAHAGgBQAHgBAKgRIACAUQABADAJAFQAJAFAGgBQAFgDAGgBIAJgCQgHAIgJADQgGACgFAAQgFAAgEgBg");
	this.shape_45.setTransform(4.3,-44.4,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAJBRQgHABgOgDQgOgDgIgFQgVgNgTgYQgJgMgBgOIABgJQgBAQAQATQAIALAUASQARAPAigBIAHADQAKACALgBQAOgBANgLQAPgNACgRQACgPgLgKQgIgGgSgIQgOgFgWgWQgUgTgRgWQgOgQgRACIgPAFQAagSAWAcQAGAHAUAVQAVAVAGAFQAIAGAbALQAdAOgNAiQgKAZgaAGQgIACgIAAQgLAAgJgEg");
	this.shape_46.setTransform(-5.3,-64,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgZAgIASgiQAVgjAJAGIADAUQgCAWgZAQQgLAEgIABg");
	this.shape_47.setTransform(4.4,-55.4,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgogBIAogBQASABAXAAQgfAEgFgBIgOABQgUAAgLgEg");
	this.shape_48.setTransform(-22.2,-51.3,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgFAAQALgRAKACQgNAEgSAcg");
	this.shape_49.setTransform(5.1,-58.3,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgVAEQgHgRALgKQAIgHAOgCIgIADQgKAEgDAFQgJANAHANQACADAUAMIAUAMQgpgTgEgKg");
	this.shape_50.setTransform(-1.9,-61.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAEgJIAAAPIgHAEQADgGAEgNg");
	this.shape_51.setTransform(13.7,-71.3,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgrALQAMgJAKgEQARgHA6gJQgoANgSACQgMABgUAKIgRALg");
	this.shape_52.setTransform(-20.1,-46.1,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AAsAfIgagRQgTgNgNgCQgNgEgegPIgdgPIA8AbIAfALIAWAOQAQALAEACQAIADAgADQghAAgKgFg");
	this.shape_53.setTransform(-2.6,-3.6,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AghAhIgugNIAoAGQArAGAVgEQAWgFASgdQAKgPAFgOQgFAPgHARQgKATgKAHQgUANgdAAQgPAAgRgDg");
	this.shape_54.setTransform(-6.5,-18.7,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AApAMQgLgHgbgFQgYgGgRAAQgNAAgngUIgIgEIALAEQAfANAOABQAPAAAhAIQAjAIAJAGQANAJAkAMQgrgIgPgLg");
	this.shape_55.setTransform(0.6,-6,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgLAbQgBgLAMgZIAMgXIgJAbQgJAcACAKg");
	this.shape_56.setTransform(-3.2,-75.1,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgXAGIACgEQAVACAOgEQAGgCAEgDQgEALgnAAIgEAAg");
	this.shape_57.setTransform(35,-43.5,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgbgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAWAFQAVAFAKABQgkgCgTgHg");
	this.shape_58.setTransform(34.1,-40,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgqBOQgIgDgGgHQgFgSAFgaQAEgYAHgHQAGgHAMgVQALgTADgIQACgGAFgGIAFgEQgZAxgGAJQgJAKgEAIQgJAPgCAZQgBAaAJAGQAHAFAEAAQAIABAKgFIAJgDQAKgDAEgEQAMgLAGgLQAJgQALgJIASgTIgRAUQgKAGgNAXQgIAPgQAJIgWAJQgEACgEAAIgIgBg");
	this.shape_59.setTransform(27.7,-50,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AASBeQgTgCgQgHQgYgJgCgPQgCgTAKgiQALgkAUgjQAGgOAKgJQANgLANAEQgFgBgIADQgQAGgJAVQgeA+gHAgQgFAWAIANQAFAKAKADIAbAKQAYAEAMgRQgCAFgFAFQgIAKgJAAIgCgBg");
	this.shape_60.setTransform(10.1,-54.7,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgEAAQAWgMAIACQghALgSAKg");
	this.shape_61.setTransform(-25.5,-49.2,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgLADIgjgFQAcADAigBQASAAAMgCQgLAFgaAAIgUAAg");
	this.shape_62.setTransform(-20.7,-51.9,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AAVAOQgagFgkgYIAeAOQAhAOAUABIgJACIgMgCg");
	this.shape_63.setTransform(-19,-55.1,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("Aj0ICQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBQAbiMAOhQQANhLAHg/IAKhmQABgKALgpIAOgxQAIgXgBgMQgDgZgYgsIg5hjIgMgXQgEgQAJgZQAKgXAMgRQAJgMAOgPIAYgbIAagcQAOgOAFgDQAFgDAGgDIAEgBIABAAIAAgBQACgRAEgIQAIgOAZgKQALgEAKADQAMABAIAFQAIAFALAQQAYgRASABQAXADAQAQQAZAZACAlQAUADAQAKQASAMAIAQQAhgFAWAYQAMANAHASQAHAPgDAeIgEAVIAEAPIAFASQAAAJgGAGQgNAPgCADIgHARIgOAjQgDAJgPAVIgZAkQgTAegGAMQgJASgRAPQgFAFgCAGIgGASIgJAXQgEANgBAKQgGBJABBPQACBhAPC/IAAABIgBABIgCACIgDABgAhBn5QgYALgEARIgBAKQgBAHgCACIgHADIgGACQgJAFgLALIgRATIgsAxQgfAkgIAhQgEARAIAQIA5BkQAXAoAFAOQALAdgGASIgJAdQgIAUgJA4QgIAwgDAeQgKBagKA6QgOBRgfCiIFGABIAAgCIgMikQgFhbAAhIQAAgvADgiQACgeALgjIAGgVQAEgNACgDQADgEAIgGQANgOADgFQAXgtAWgdIANgSQAIgKADgIIAMgfIAJgUIAFgMIALgKQAHgHAAgFQAAgIgEgJIgEgSIAAgIIABgHQAGgigGgPQgKgYgQgNQgTgQgYAFQgEAAgBgCQgIgRgRgLQgQgKgUgDQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBgggTgXQgPgTgUgDQgLgBgMAGQgHADgMAJIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgMgTgHgEQgKgFgLgBIgBAAQgFAAgIAEg");
	this.shape_64.setTransform(0,0,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AjzH/QAwj3AIhAQAGgyARhfQARhiAGgVQAJgbgdg2QhChxgHgPQgGgOALgbQAIgVAOgTQAIgMAkgnQAggkAHgFQAFgFAHgEQAGgEADABQADAAABgHIAEgRQADgQAlgNQAXACALAJQAEADALARQAVgRAPgBQAKgBARAHQAZANAKAgQAGAPAAAOQAaACATAQQANAKAGAOQAwgLAaA7QAIAUgJArIAEATQAFARAAADQgBAIgSAPIgYA7QgCAJgiAuQgeAvgEAJQgGANgVASQgBABgBADIgEAKIgJAVQgHARgBASIgEAwQgCAmAAA8QABBgAQDLg");
	this.shape_65.setTransform(0.1,-0.1,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-86.3,83.2,172.6);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AiJhJIETCDIgEAQg");
	this.shape.setTransform(35.8,-7.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Ah5hBIDtBvIAGAUg");
	this.shape_1.setTransform(38.5,-9,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AhNgUIAEglICXBzg");
	this.shape_2.setTransform(-3.8,-27.2,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAVgBIg0gaIA6AZIAGAeg");
	this.shape_3.setTransform(-20.9,-36.4,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB4iGIAfgQIktEtg");
	this.shape_4.setTransform(-111.6,61.5,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWgGIgBgGIAvAZg");
	this.shape_5.setTransform(-141,87.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTgFIACgFIAlAVg");
	this.shape_6.setTransform(-142,85.1,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQgOIAiAXIgbgNIABATg");
	this.shape_7.setTransform(-143.3,83.5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#201F1F").s().p("AgXABIgMggIA7AlIAMAag");
	this.shape_8.setTransform(-141,85.9,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#201F1F").s().p("AiwCVIE5lBIAoAIIlVFRg");
	this.shape_9.setTransform(-107.2,62.4,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiZB5IEokWIgTAqIAegEIj9EVg");
	this.shape_10.setTransform(-120.2,60.1,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#201F1F").s().p("Ai4B1IEkkTIBNANIk1Ewg");
	this.shape_11.setTransform(-116,60.8,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAUASIhAioIACgBIBACpIAXCGg");
	this.shape_12.setTransform(-47.7,86,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAHgqIg1hyIA4BvIAlDKg");
	this.shape_13.setTransform(-50.1,89,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAFgRIgthsIACgCIAvBvIAgCQg");
	this.shape_14.setTransform(-54.8,87.7,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgPgFIAPAMIAFgDIALgQIgHASIgMAIg");
	this.shape_15.setTransform(-81.4,59.2,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AACgNIAMAOIgNgBIgOAOg");
	this.shape_16.setTransform(-76.1,60.7,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgTAHIATgCIAGgLIATgHIgQALIgHAJIgSADIgIAEg");
	this.shape_17.setTransform(-72.8,63.5,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AABAQIAJgcIgFgWIAKAXIgMAfIgRAQg");
	this.shape_18.setTransform(-53.7,5.4,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgJARIAegfIAYgPIgZATIgdAeIgjAKg");
	this.shape_19.setTransform(-63,64.5,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgLAGIAegcIgcAcIgJARg");
	this.shape_20.setTransform(-44,55.3,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgDAIIANgNIAGgLIgDALIgNANIgPAIg");
	this.shape_21.setTransform(-44,46.4,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AAJgFIAKgMIgFAIIAFgBIgTARIgSALg");
	this.shape_22.setTransform(-44.7,49.7,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAPgLIgEAHIgZAQg");
	this.shape_23.setTransform(-67.9,70.8,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AAFABIgPgMIAOAHIAGgCIAAASg");
	this.shape_24.setTransform(-98.9,44,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgDgEIARgEIAJADIgIAAIgJACIgIAFIgTAHg");
	this.shape_25.setTransform(-42.7,10.4,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgKABIgPgFIAfAGIAUAAIgUADg");
	this.shape_26.setTransform(-46.6,17.2,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgHgCIAEgBIALAHg");
	this.shape_27.setTransform(-36.8,17.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgIgDIARAFIgCACg");
	this.shape_28.setTransform(-37.3,21.3,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgKgFIAVAKIgCABg");
	this.shape_29.setTransform(-42.5,35.8,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgOABIAIgGIARABIAEAEIgXAFg");
	this.shape_30.setTransform(-55.7,51,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgSAMIAGgFIgHgEIgLgDIAOAAIAIACIAGgCIgBgDIANgCIgHgKIAMAHIAQAAIgMAHIgQACIgGAFIAIAEIgTAGg");
	this.shape_31.setTransform(-50.8,48.1,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgEAAIgGgEIAVAHIgTACg");
	this.shape_32.setTransform(-46.7,44.6,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgHgBIAGgCIAJAHg");
	this.shape_33.setTransform(-45.5,43.6,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgRgEIARAFIAOgFIAEACIgRAHg");
	this.shape_34.setTransform(-46.8,42.7,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgGgDIANACIgEAFg");
	this.shape_35.setTransform(-43.6,40.3,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgTgPIAnAdIgBACg");
	this.shape_36.setTransform(-44.7,36,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgSAkIgCgIIgKgLIASAIIALgCIALgMIAIgPIgCgMIgEgLIgKgMIAYAXIAEARIgNAbIgQAMg");
	this.shape_37.setTransform(-89,29.5,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AAAgBIgQgaIAVAYIAMAVIgFAKg");
	this.shape_38.setTransform(-72.2,-4,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AACgBIgPgMIgJgFIgEgJIAIALIAFABIAFACIAIAHIAOANIANALIgGAKg");
	this.shape_39.setTransform(-83.1,6.7,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AARAzIgUgSIgPgZIgPgNIgcgfIgKgRIAFADIANASIAPAPIAKAGIA0A4IANADIAbgUIADgNIgIgLIgRgLIgPgWIgDgQIAFgDIAPAVIAQAJIAKAUIACAUIgEAKIgRANIgQAIg");
	this.shape_40.setTransform(-84.3,22.6,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("Ah8BlIgMgHIgNgBIAPgIIALAGIAOAEIAOgBIAVgeIgCgVIgNgVIAfAjIANAKIALAAIAMgFIAPgNQAGgEABgHIgCgVIgJgTIgQgKIAQAIIAcAAIAsgTIAYgSIARgfIAFglIABAfIgJARIAFAOIAWgPIABAEIgQAQIAFAEIAbgFIAHAKIggACIgLAIIAIAJIgSABIgJAGIAIAMIgbAJIg7BIIgKAHIgHgIIgMADIgIAIIgbgBIghAPg");
	this.shape_41.setTransform(-72.3,20,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgZAOIAagOIAHgFIAAgHIAFgBIANAIIgIAFIghAOg");
	this.shape_42.setTransform(-99.4,35.2,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AAHAKIgRgRIgCgCIAGACIATARg");
	this.shape_43.setTransform(-98.6,31.4,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgFAAIgJgKIABgCIANANIAPAMg");
	this.shape_44.setTransform(-103.4,27.5,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgDADIgPgIIASAFIALABIAIAFg");
	this.shape_45.setTransform(-102.4,29.3,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgGgDIgYggIA9BHg");
	this.shape_46.setTransform(-58.5,45,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgYADIAZgGIAYAHg");
	this.shape_47.setTransform(-54.5,43.4,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgXAKIgOgJIAXAFIAYgIIATgPIAJgEIgaAWIgYAIIgXANg");
	this.shape_48.setTransform(-56.4,54.9,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAuANIAXhLIgUBOIhJAiIgsAMg");
	this.shape_49.setTransform(-52.4,69.4,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAAgKIgHgUIAPAUIgDAfIgGAKg");
	this.shape_50.setTransform(-55.3,3.3,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AADgIIAMAAIAXAIIgdgCIgOAFIggAGg");
	this.shape_51.setTransform(-44.2,11.9,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgbgCIgLgGIARgDIABAEIARAHIAXAAIAJgIIAKAFIgHADIgLAFIgNABIAKADIAOACIgRABg");
	this.shape_52.setTransform(-42.5,14.9,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgGgLIAHgmIAJAAIgLAkIgIA/g");
	this.shape_53.setTransform(-81,42.5,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgHgIIgCgIIAFALIAOAWg");
	this.shape_54.setTransform(-70.6,35.6,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgGgBIgKgWIANAXIAUAXIgDABQgOgOgGgLg");
	this.shape_55.setTransform(-59.8,48.1,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("Ag3AMIAAgGQARAJAwgOQAZgGAVgKQg2AcghADg");
	this.shape_56.setTransform(-56.5,52.5,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgPAiQABgIAKgJQAJgJACgYIAAgXIAHAIQAFAKgDAPQgDAMgGAFQgJAHgIAMIgFAKQgBgCABgEg");
	this.shape_57.setTransform(-68.3,55.4,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AADgUIADADIgLAmQADgMAFgdg");
	this.shape_58.setTransform(-69.6,50.2,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgEgzIAFAEIADAnQADAqgFASQABhMgHgbg");
	this.shape_59.setTransform(-72.8,39.5,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHgKIgHgZIACgCQADgBACAFQgDARAMAcQAGAPAHAMQgPgVgHgcg");
	this.shape_60.setTransform(-70.5,37,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AhgBFQgKgBgHgGQACABAGgBQAFAAAGABQAFAAAIgHQAHgGAAgDIgCgUIAHAHQAJAHAEAAQAFgBAYgMQAZgMABgEQABgFgCgRQgCgTgEgEIgCgCIAMACQAPgBANgJQAbgJARgOIAJgCIgBACQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAUAAQgQASgSAAIgKAGIAaAKQAQAEAMACQgrgBgWgDQgIAGgUAaQgUAcgCALQgEgBgEgEIgDgEIgJAIQgLAJgCAFQgJgCgNACQgPADgHAHQgHAEgIAAIgDAAg");
	this.shape_61.setTransform(-71.7,25.5,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgbBYQgaAAgOgVQgTgdAYgSQAUgQAIgIIATgdQAPgXADgJQANgdAbAJQgGgBgHAAQgQACgJASQgLAYgOAWQgRAXgLAJQgPALgFAIQgIALAFAOQAFAOAQAJQAPAIANgCQARgCAHgIIASgFQATgIAIgLQAPgWAFgKQAKgWgFgPQAJAPgJAUQgNAcgQAPQgGAFgNAHQgNAGgHAAQgLAKgSAAIgCAAg");
	this.shape_62.setTransform(-67.1,5.1,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAGAYQgagIgHgUIgCgTQAIgIAZAcQAOAMALAPQgCACgGAAIgPgCg");
	this.shape_63.setTransform(-74.7,15.4,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AAAAAQAKgCAcgFQgIAFgRADIgPADQgEACgQACIgPABg");
	this.shape_64.setTransform(-49.7,13.3,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgIgHIgJgDQAJgEANANQAIAGAFAHQgOgNgMgGg");
	this.shape_65.setTransform(-76.2,12.9,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AAQAAQAEgPgLgKQgEgEgJgCIgKgBIAJAAQAIABAFADQANAHgDASQgBAJgiAbQAegeADgDg");
	this.shape_66.setTransform(-69.9,9.4,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgCAGIgDgNQAFAKAGAFg");
	this.shape_67.setTransform(-86.9,2.8,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AADgCQgKABgYgBIgWgCIAegCQAggBAKACQARAEASAIQgggMgTADg");
	this.shape_68.setTransform(-50.4,18.5,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("Ag4AvQAQgHAEgCIAQgRQANgOAEgDQAGgFAUgMIAxgmQgpAlgSAKQgLAFgPAQIgUAVQgFAEgRAGIgQAEg");
	this.shape_69.setTransform(-57.4,61.6,1.676,1.676);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AglAWQgKgFgNgQQgLgNgHgNIATAYQAYAWAVAAQAggBA+gcQgRALgXAJQgeAOgXAAQgNAAgLgEg");
	this.shape_70.setTransform(-57.3,48.6,1.676,1.676);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AhGApQARgLAGgIQAIgHAegPQAcgPAOgDQANgDAagTIAQgLQgpAkgQAEQgQADgVAKQgWALgJAJQgIAIgVAMIgVAKg");
	this.shape_71.setTransform(-60.2,59.7,1.676,1.676);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgCgFIgPgXIARATQAQAUACAKIgFAIQgBgLgOgXg");
	this.shape_72.setTransform(-72.3,-4.1,1.676,1.676);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgWAAIAKABQANACAUgGIACADQgKACgLABIgJABQgMAAgDgEg");
	this.shape_73.setTransform(-100.5,33.1,1.676,1.676);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AAVgKIACACQgJAHgUAHIgRAFQAOgFAegQg");
	this.shape_74.setTransform(-98.8,35.9,1.676,1.676);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AAnBFQgOgBgJgDQgRgEgKgMQgKgMgKgGIgIgEIgYgUIAZATQALAFAOANQAHAJANAHQAIAFAQAAQALADAGgDQADgBAGgHQAHgGgHgYQgGgXgMgMIgQgNIgXgaIgRgVIAFADQAGAEADAFQAEAHAOAPQAQARAHAEQAIAGAJAVQAKAXgBASQgEAHgHAFQgFACgFAAIgEAAg");
	this.shape_75.setTransform(-94.7,24.8,1.676,1.676);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgPBRIgIgIQAPANAUgJQALgFANgKQAIgEADgLQAEgOgJgTQgNgbgogzQgOgSgQgCIgNACQAMgHAOAHQALAGAKAMQAYAbASAgQARAcACASQACAOgUAOQgOAKgSAGIgFABQgGAAgIgFg");
	this.shape_76.setTransform(-80.2,18.2,1.676,1.676);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgGAAIgUgDQAMgGApAOQgMgDgVgCg");
	this.shape_77.setTransform(-46.1,14.6,1.676,1.676);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgsAKIAdgEQAhgGAbgKQgQAHgTAGQgaAIgQAAQgHAAgFgBg");
	this.shape_78.setTransform(-50.8,12.8,1.676,1.676);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AAjgWQgbAegXAKIgTAFQAcgJApgkg");
	this.shape_79.setTransform(-53.3,10.6,1.676,1.676);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AAAIcIgBAAIgCgCIgBgBIAAgBIgbi4QgUiAgMg4QgOhDgXhHQgDgKgHgLIgMgSIgKgPQgEgHgFgDQgTgLgMgOQgIgKgYgXQgNgMgRgPQgTgQgEgIIgVgdIgKgOQgDgEgPgKQgHgEgBgJIAAgRIAAgPIgHgSQgKgcADgOQADgTAIgOQAPgbAggDQAFgRANgOQANgNARgHQgFgjARgbQALgTAUgHQARgFAbALQAIgSAEgGQAFgEAMgGQAKgFAKACQAaAEAKALQAFAGAGAPIABABIAAAAIAEAAIALADQAHACAOAKIAdAUQArAdAMALQASASAKAOQAPAUgBAQIgGAYIgfBnQgOAsAEAZQACALAMAUQAGAJARAiQATAkADAJIAfBbQATA1AeBFQAMAdAsB1QApBvAQAiQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIlGBMIAAAAIgBAAgAizn1QgRAHgLAVQgMAXAGAfQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAQgRAHgNANQgNANgEASQAAADgEAAQgXAAgOATQgMAPgEAZQgCAPAMAeQAFAKAAADIgBASQgBALACAFQABAFAIAFIAMAHIAHAKIAeAqQAEAGAaAWQAbAXAfAjQAGAHAMAHIAMAIQADACAGAMIALARQARAdAJAcQAKAgAKApQAPA/AVCLIAdDLIABACIE9hKQgSgogrhyQgwh+gNgfQgWgzgchRQgJgZgSgsQgVgxgLgSIgPgYQgJgRAEgcQABgOANgqQAMgkAKglIAJgeQAEgQgIgPQgOgdgkgbIgzgkIgTgNQgMgIgKgDQgJAAgEgCQgCgBgCgGIgEgJQgHgPgZgFQgKgCgDABQgLAFgHAFQgFAGgIAUQgBAEgGgCQgTgIgNAAQgGAAgFACg");
	this.shape_80.setTransform(-52.8,74.5,1.676,1.676);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("Ag8CgQgMg4gKgiIgOgsQgFgQgKgNIgNgRIgFgJIgEgEIgOgJQgNgIgFgHQgFgHglglIgagWQgRgPgCgFIgjgxIgOgJQgHgEgBgEQgBgDABgQIAAgTQgSgoAEgSQAKg7AvgBQACgOAKgMQAOgSAXgJQgCgMABgQQAEgfATgRQAPgLAJgBQAOgCAYALQAHgSADgEQAIgLAUgGQAlADAHAPIAHAOQADAHACgBQAIgCAOAIIAsAeQApAcAKAKQAQANANATQAQAXgDAOQgGAbghBqQgPA4ANAXQALASAlBXQAjBTARAtQAVA5B9E7IlFBLQgokhgUhYg");
	this.shape_81.setTransform(-52.8,74.5,1.676,1.676);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AjLCsIFrl8IAsAfIlhGCg");
	this.shape_82.setTransform(-52.5,-6.2,1.676,1.676);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AhaBcICyi9IADAQIiqCzg");
	this.shape_83.setTransform(-34.4,-17.9,1.676,1.676);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AhcBdICyjAIAHACIivDGg");
	this.shape_84.setTransform(-41.9,-24.6,1.676,1.676);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#201F1F").s().p("AhkBiIC9jQIAMAeIiyC/g");
	this.shape_85.setTransform(-32.3,-18.2,1.676,1.676);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("ArgATII6n2IOHGtIoJIag");
	this.shape_86.setTransform(21.9,-83.2,1.676,1.676);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AnajQIgGgqIO/HQIACAlg");
	this.shape_87.setTransform(-22.4,-37.2,1.676,1.676);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("ArjAtIgJgtIJIn+IOPGsIACAnIoPIqg");
	this.shape_88.setTransform(21.5,-79.2,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-164.9,294,329.9);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgRAcIAgjkIACAAIgeDkIAICtg");
	this.shape.setTransform(-9.1,28.9,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgSgVIAliaIghCdIAHDDg");
	this.shape_1.setTransform(-5.4,26.3,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgPgRIAbiZIAEACIgaCVIgCC+g");
	this.shape_2.setTransform(1,28.8,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgGAJIgOgWIATASIAHACIAPgUIgKAbg");
	this.shape_3.setTransform(25.6,-14.1,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgPAGIAKgWIAbAdg");
	this.shape_4.setTransform(20.3,-11.2,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAZAIIgZACIgMgKIgWgJIAZADIALAMIAZgDIAIAHg");
	this.shape_5.setTransform(16.7,-6.4,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgBAbIgXgjIAFggIAAAeIATAgIAZATg");
	this.shape_6.setTransform(-23.5,-73.5,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AASAVIgtgdIglgPIAiAMIAwAcIAvAHg");
	this.shape_7.setTransform(4.7,-2.3,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAEAKIgUgNIgIgMIALALIAVANIARAHg");
	this.shape_8.setTransform(-24.2,-19.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AACAJIgcgQIAHAAIgJgJIAQAMIApAVg");
	this.shape_9.setTransform(-22.4,-15.5,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgNgDIgIgGIArATg");
	this.shape_10.setTransform(12.6,4.1,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgMgGIAJADIAPgOIgOATIgDAQg");
	this.shape_11.setTransform(42.9,-38.3,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAEADIgMgEIgNAAIgIABIAJgEIAYAAIAaAJg");
	this.shape_12.setTransform(-36.1,-64,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgFAGIAlgRIgRALIgUAKIgaACg");
	this.shape_13.setTransform(-29.4,-56.8,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AADgFIAGgBIgRANg");
	this.shape_14.setTransform(-41.6,-53.4,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgJAGIATgMIgQANg");
	this.shape_15.setTransform(-39.9,-48.7,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAWgZIgTAaIgYAag");
	this.shape_16.setTransform(-31.1,-43,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgLAKIAXgTIgUATg");
	this.shape_17.setTransform(-29.2,-32.1,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgSAGIAEgGIAWgFIALAEIgGAHg");
	this.shape_18.setTransform(-8.4,-17.5,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AAAAQIAIgHIgIgFIgWAAIgQgEIAUgEIAMgNIgFAQIARgDIAAAEIAIACIAJgGIAQgCIgMAGIgHAHIAIADIgDAIg");
	this.shape_19.setTransform(-15.4,-19.6,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AAMgHIgFAHIAFAFIgYADg");
	this.shape_20.setTransform(-21.4,-22.6,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AABgFIAIABIgRAKg");
	this.shape_21.setTransform(-23.1,-23.1,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgVAEIAFgEIARADIAVgLIgVARg");
	this.shape_22.setTransform(-21.9,-25.3,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgHAAIAPgFIgJALg");
	this.shape_23.setTransform(-26.6,-26.9,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgTAYIAngxIgmAzg");
	this.shape_24.setTransform(-26.4,-32.6,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgPAnIgYgeIAAgXIAXgjIgJASIgCAPIACAQIAOARIARALIAPAAIATgQIgJAQIABAKIgZALg");
	this.shape_25.setTransform(27.3,-53.4,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgOAcIAJgdIAMgZIAIgMIgNAmIgGAng");
	this.shape_26.setTransform(-4,-90.3,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgaAfIAOgSIAMgUIAJgLIAFgEIAGgDIAHgQIgCANIgLAJIgOATIgQApg");
	this.shape_27.setTransform(12.7,-80.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AhEBBIgJgLIgCgZIAGgdIARgPIAOgfIAHACIgBAVIgMAfIgSAUIgGAPIAHAQIApARIAPgIIAvhVIALgJIAPgXIALgbIAFgFIgIAYIgZAvIgPAUIgLAjIgVAdIgWAIg");
	this.shape_28.setTransform(18,-61.6,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AAEBpIhdhJIgkgDIAGgTIgNgFIgXAFIAIgNIgQgHIgqAGIAHgOIAjgBIAFgGIgZgQIAAgFIAgAMIACgSIgQgTIgIgnIASAtIAdAhIAkAQIA7AKIAkgIIASgOIgRARIgGAaIADAbIADAEQAEAGAFACIAYALIAPACIAOgCIAOgQIAbg0IgJAeIAEAaIAjAeIARgBIAQgKIAJgIIADgDIAWAGIgSAFIgLANIgsAWIgugKIgiAJIgMgIIgQAAIgGANg");
	this.shape_29.setTransform(4.8,-59.6,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgXAFIgMgFIAHgGIAIgGIAGAAIACAIIAKAEIAlAKIgMAEg");
	this.shape_30.setTransform(41.6,-49.4,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AAGgLIAHgEIgBAEIgRAZIgHACg");
	this.shape_31.setTransform(39.4,-54,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AABACIAMgVIACADIgIAOIgVAWg");
	this.shape_32.setTransform(44.2,-60.1,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgMAFIANgFIAUgNIgPAPIgaAMg");
	this.shape_33.setTransform(43.4,-57.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAcg1IgUAuIgjA9g");
	this.shape_34.setTransform(-6.6,-25.3,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgCgIIAhACIg9AOg");
	this.shape_35.setTransform(-11.8,-25.6,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AAUAGIgggCIgngUIAMACIAcAOIAgADIAcgNIgPAPIASAMg");
	this.shape_36.setTransform(-6.5,-12.4,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AAuA3IhlgVIgwhbIAzBWICcAcg");
	this.shape_37.setTransform(-7.1,6.8,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AABAdIgMgmIAMgdIgCAbIANAyg");
	this.shape_38.setTransform(-22.7,-76.5,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgVgGIANgDIA5AKIgqACIgUgDIgjAKg");
	this.shape_39.setTransform(-33.8,-62.4,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgQARIAKgIIgQADIgPgEIgLgBIANgIIANAFIAcgHIAVgMIAAgHIAVAAIgMAKIgwAgIgVACg");
	this.shape_40.setTransform(-35.6,-58.1,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AAAgPIgZgqIALgCIAUAtIAUBKg");
	this.shape_41.setTransform(20.7,-35.2,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AAEgIIADgQIABALIgPAmg");
	this.shape_42.setTransform(5.8,-40.6,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgMAeIASghIAHgaIgFAWQgEAQgMAVg");
	this.shape_43.setTransform(-4.2,-21.3,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AhJgDIA+AGQBAAEASgQIACAHQgGAGgWAEQgMACgOAAQglAAg3gNg");
	this.shape_44.setTransform(-7,-15.2,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgHARQgJgFgHgOQgIgSADgOIAGgLIAHAdQAJAdAPAIQAPAIAEAJQACAFgBADQgOgUgWgJg");
	this.shape_45.setTransform(9.1,-15.5,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgOgUIAEgGIAKAXIAPAeg");
	this.shape_46.setTransform(8.9,-21.9,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgFgIIgIgyIAHgHQgDAkAXBfQgLgVgIg1g");
	this.shape_47.setTransform(9.4,-36.4,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AABAQQAHgogIgUQABgHADAAIAEACIgBAhQgDAngLAdQAGgQACgUg");
	this.shape_48.setTransform(6,-38.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("ABvA6QgKgGgUACQgQABgLAEQgEgFgQgIIgOgIQgDALgHAEQgIgNgggcQgggbgNgGQgTAIgtAMIgPACQAPgFASgKQARgJANgKQgIgBgHgDQgNACgSgHIgQgJIAZgEQAGgCgGgDIAMAAQAZAOAkACQAUAIASgFQAKgBAFgDIgBACQgDAHACAXQACAWACAGQADAFAjAIQAhAIAHgBQAIgCAMgUIADAZQABAEALAFQALAHAHgCQAHgDAHgCIAKgCQgIAJgMAEQgGADgGAAQgGAAgGgDg");
	this.shape_49.setTransform(5.1,-53.5,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AALBhQgIACgSgEQgRgEgJgFQgYgOgZgfQgLgOgBgRIABgMQgBATATAYQAKAMAZAXQAMALAaAEQANACAKAAIAJADQALADANgBQARgBARgPQARgPADgUQACgSgNgNQgJgIgXgIQgQgHgbgaQgYgXgVgaQgQgUgVACIgSAHQASgNASAHQAMAEAKANQAIAKAYAZQAYAZAIAFIAMAIIAeAOQAjAQgPApQgMAeggAIQgKACgJAAQgNAAgLgFg");
	this.shape_50.setTransform(-6.4,-77.2,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgIgDQAYgpAMAHIAEAYQgDAbgeASQgOAGgJABIgGAAg");
	this.shape_51.setTransform(5.3,-66.8,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgwgBIAwgCIAyABQglAFgIAAIgQABQgYAAgNgFg");
	this.shape_52.setTransform(-26.8,-61.9,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgGAAQANgVANACQgFABgHAGQgMALgPAVg");
	this.shape_53.setTransform(6.2,-70.4,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgaAFQgHgVANgMQAIgIASgDIgKAEQgMAFgEAGQgLAPAKAQQACADAYAQIAYAOQgygWgFgNg");
	this.shape_54.setTransform(-2.3,-73.8,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAFgLIAAASIgJAFQAEgHAFgQg");
	this.shape_55.setTransform(16.6,-86.1,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("Ag0AOQAOgLANgFQAUgJBGgLQgwAQgWACQgPACgYAMIgUANg");
	this.shape_56.setTransform(-24.3,-55.7,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AA1AlIgfgTQgYgRgPgDQgPgEgmgTIgigSIBIAhIAmANIAaARQAUAOAFACQAKAEAmAEQgngBgNgGg");
	this.shape_57.setTransform(-3.2,-4.4,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgoAnIg3gPIAvAIQA0AHAagFQAagGAXgjQALgSAGgRQgEASgLAUQgLAXgLAJQgZAPgjAAQgSAAgVgEg");
	this.shape_58.setTransform(-7.9,-22.6,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AAyAQQgNgJgggHQgdgHgUAAQgQAAgvgXIgMgHIAPAHQAmAPAQABQASAAApAKQAqAJALAIQAQAKAqAPQgzgKgTgMg");
	this.shape_59.setTransform(0.4,-7.3,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgOAgQAAgNAOgeIAPgcIgLAgQgLAiACANIgJgIg");
	this.shape_60.setTransform(-3.9,-90.6,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgaADQAaABAQgEQAJgDADgDQgCAJgaACIgbACg");
	this.shape_61.setTransform(42.2,-52.5,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AghgDQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAaAHQAcAHAMABQgugDgWgIg");
	this.shape_62.setTransform(41.4,-48.3,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("Ag1BeQgKgDgHgJQgGgVAFggQAFgdAJgJQAHgJAPgYQANgXAEgKQACgHAGgHIAGgFQgeA7gIALQgKALgGAKQgKASgCAfIABAWQACAMAGAEQAJAGAFABQAIABANgHIALgDQAMgEAFgFIALgKQAFgGAFgKQALgTAOgLQAFgFAVgZIgYAfIgJAHQgKALgJARQgKASgTALIgcALQgEACgFAAQgFAAgEgBg");
	this.shape_63.setTransform(33.8,-60.3,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AAVByQgXgDgTgIQgdgMgCgSQgDgWANgpQANgsAYgqQAHgRAMgLQAQgNAQAFQgHgCgJAEQgTAHgMAaIgaA6QgNAdgFAaQgGAbAKAQQAGAMALADIAhAMQAdAFAPgUQgDAGgFAGQgJALgMAAIgDAAg");
	this.shape_64.setTransform(12.2,-66,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgGAAQAbgPAKADQgnANgWAMg");
	this.shape_65.setTransform(-30.6,-59.5,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgRADIgjgEQA0AEA1gGQgOAHgeAAIgagBg");
	this.shape_66.setTransform(-24.5,-62.6,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AAZARQgggGgqgdIAkARQAoARAXABQgDACgHAAIgPgCg");
	this.shape_67.setTransform(-22.9,-66.5,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AknJsQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQAiixAPhYQAShnAHhAIAMh8QABgLANgyQAMgvAFgNQAKgbgCgPQgBgUgLgXQgGgPgPgZIhEh3IgIgOQgFgIgBgGQgGgTAMgeQAKgZARgXQAMgSAsgwIAfghQAOgPAJgGQAHgFAHgCIAEgBIABAAIAAgCQADgVAFgIQAJgRAfgNQAMgEAOACQARAEAGAFQAIAFAHAJIAIALQAdgVAWACQAcACATAUQAPAPAIAVQAIATABATQAYAEAUANQAVANAKAVQApgGAaAdQAOAPAJAWQAIASgEAkIgEAZIAFATIAFAVQABALgHAIQgPAPgDAHIgJAUIgRAqQgDAJgHAKIgMARIgeArQgXAlgHAOQgLAWgUASQgHAGgCAHIgIAWQgDALgHARQgFAPgBANQgIBbACBcQACB8ASDgQABAEgFABIgDAAgABqJmIAAgCQgKiDgEhCQgGhuAAhYQAAg6ADgnQADgnANgoIAIgZIADgLQACgFACgEIAOgMQAOgPAEgIQAbgzAcgmIAPgVQAKgNAEgKIAPgkIAKgZQAEgMACgCIANgMQAJgJAAgGIgEgUIgGgWQgBgDADgQQAGgogHgSQgMgegTgQQgXgSgdAGQgFABgBgEQgKgUgUgNQgTgNgYgDQgEgBAAgCQgCgngWgbQgTgXgYgEQgNgCgPAIQgIAEgPALQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgDAAgCgCIgKgPQgGgJgHgEQgLgGgOgBQgFgBgMAGQgcAMgGAWIgBALQgBAIgDADQgDACgFABIgIADQgLAHgMANIgVAWIg2A8QglArgJAoQgFAWAKASIATAjIAxBVIASAgQALASAFAPQANAjgHAWQgBAHgKAcQgJAZgMBDQgJA6gEAkQgKBggOBTQgQBegmDHIGJABg");
	this.shape_68.setTransform(0,0,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AklJqQA5ksAKhNQAIg8AUhzQAUh3AIgYQALgkgkg+QhMiBgLgZQgIgRANghQAKgaAQgWQALgPAqgvQAmgpAKgKQAGgFAIgEQAIgFAEABQACAAACgJQADgPACgEQACgMATgMQANgHAPgFQAaACAOALQAEAEAOAVQAbgVARgCQAMgBAVAJQAdAQAOAmQAGATABAQQAfAEAWASQAQANAIARQA6gOAeBIQAKAWgLA2IAGAWQAFAVAAAEQgBAFgHAHIgOAPIgPAkIgOAjQgEALgoA2QglA8gEAIQgEAKgNAOQgKAKgFAEIgDAGIgFAMIgLAZQgIAUgCAWIgEA6QgDAuABBJQABBzATD1g");
	this.shape_69.setTransform(0.1,-0.1,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-104.1,100.4,208.4);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgJAUIgIiSIACAAIAICSIAZBrg");
	this.shape.setTransform(4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgPgKIAFhlIgCBnIAcB4g");
	this.shape_1.setTransform(6.1,13.7,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgKgJIgChiIADAAIABBhIAVB2g");
	this.shape_2.setTransform(10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAAAIIgMgLIANAIIAGAAIAGgNIgDARg");
	this.shape_3.setTransform(20,-15.5,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgJAGIAEgPIAUAPg");
	this.shape_4.setTransform(17.6,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgHAAIgPgDIAQAAIAIAFIAPgEIAGACIgHAAIgQAFg");
	this.shape_5.setTransform(15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AABARIgSgTIgBgUIAEASIAPASIASAJg");
	this.shape_6.setTransform(-17.4,-46.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgRgDIgagFIAXADIAhALIAfgBIgeAEg");
	this.shape_7.setTransform(8.7,-5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAEAFIgOgFIgHgGIAIAFIAPAFIAMADg");
	this.shape_8.setTransform(-11.5,-12.4,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AACAFIgTgGIAEAAIgGgFIALAGIAcAHg");
	this.shape_9.setTransform(-9.8,-10.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgJAAIgFgDIAdAHg");
	this.shape_10.setTransform(14.5,-2.3,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgGgBIAGABIAHgMIgHAOIAAAKg");
	this.shape_11.setTransform(27.9,-32.6,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgNAAIAOgDIASADIgRABIgHgBIgIABIgFADg");
	this.shape_12.setTransform(-24.4,-38.9,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgCAEIAVgOIgJAJIgLAIIgQAEg");
	this.shape_13.setTransform(-19.4,-35.2,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgJABIAMgFIAIABIgCAFIgTADg");
	this.shape_14.setTransform(-1.3,-13.1,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAGAFIgGgCIgMACIgLAAIAMgFIAGgJIgCAJIAKgDIABADIAFAAIAFgEIAKgEIgHAFIgDAFIAGABIgCAFIgRACg");
	this.shape_15.setTransform(-6.1,-13.7,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAHgFIgDAFIAEACIgPAEg");
	this.shape_16.setTransform(-10,-14.8,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AAAgDIAFgBIgJAJg");
	this.shape_17.setTransform(-11.2,-14.9,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgMAHIADgDIAKgBIAMgJIgLANg");
	this.shape_18.setTransform(-10.8,-16.6,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEACIAJgGIgFAIg");
	this.shape_19.setTransform(-14,-16.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEAZIgTgPIgDgOIAKgZIgDANIABAJIADAJIALAJIAMAFIAJgDIAKgLIgEALIACAGIgOALg");
	this.shape_20.setTransform(16.5,-39.9,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgEAUIACgUIADgQIAEgIIgDAYIAAAZg");
	this.shape_21.setTransform(-7.7,-59.3,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgMAXIAHgMIAFgOIAGgLIAEgDIADgLIAAAIIgGAIIgHAMIgEAdg");
	this.shape_22.setTransform(4,-55.1,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgOA5IgRgFIgHgFIgEgPIAAgTIAJgNIAEgUIAFABIACANIgDAVIgJAOIgCALIAGAJIAcAFIAHgGIAUg8IAGgHIAGgQIAEgSIACgEIgCARIgQAtIgDAYIgKAVIgMAIg");
	this.shape_23.setTransform(9.2,-44.6,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AAMA4IhDgjIgXADIABgMIgJgBIgNAFIADgKIgLgCIgZAJIACgKIAWgEIADgEIgSgHIAAgDIAVADIgBgMIgMgJIgKgYIARAaIAWASIAYAFIAmgBIAWgJIAJgMIgHAOIgBAQIAEARIADACIAGADIARAFIAJgBIAJgDIAHgMIAKgjIgCATIAGAQIAZAPIALgEIAIgIIAFgGIACgCIAOACIgLAEIgFAKIgYATIgegBIgVAKIgIgDIgKACIgDAIg");
	this.shape_24.setTransform(2.3,-39.6,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgWAFIADgFIAEgFIAEAAIACAFIAHAAIAZACIgIAEIgdAAg");
	this.shape_25.setTransform(26.1,-39.3,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AACgIIAEgDIgIAUIgDADg");
	this.shape_26.setTransform(24,-41.9,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AAAABIAEgMIABgCIACABIgDAKIgKAQg");
	this.shape_27.setTransform(26.4,-46.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgHAFIAIgFIALgKIgIAKIgPALg");
	this.shape_28.setTransform(26.1,-44.6,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AALgkIgHAfIgOAqg");
	this.shape_29.setTransform(-1.2,-18.4,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgCgEIAUgEIgjARg");
	this.shape_30.setTransform(-4.5,-17.7,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AANAGIgUACIgbgIIAIAAIAUAFIAUgBIAPgMIgHAMIANAEg");
	this.shape_31.setTransform(0.5,-11,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgeAZIgpgyIAqAvIBlgBIglAFg");
	this.shape_32.setTransform(2.5,2.2,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AACATIgLgWIAEgUIABARIAOAeg");
	this.shape_33.setTransform(-17.2,-48.4,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgOgEIAIgEIAkAAIgaAHIgNAAIgUAKg");
	this.shape_34.setTransform(-22.7,-37.5,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgHANIAGgGIgKAEIgKgBIgHABIAGgHIAKACIAQgHIAMgKIgCgFIAPgCIgHAHIgaAaIgMAEg");
	this.shape_35.setTransform(-23.5,-35.3,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgIIgVgXIAHgDIASAZIAWAsg");
	this.shape_36.setTransform(14.7,-27.9,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AADAAIACgWIgBATQgBAKgEAPIgDABg");
	this.shape_37.setTransform(0.9,-16.5,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgtAKIAogDQAngFAKgMIACAEQgDAGgNADQgVAIggAAIgWgBg");
	this.shape_38.setTransform(-0.3,-12.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgDAMQgGgBgHgKQgHgJABgJIACgIIAIARQAJARAKADQARAFgBAJQgLgLgPgDg");
	this.shape_39.setTransform(10,-14.2,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgMgLIACgDIAXAdg");
	this.shape_40.setTransform(9.1,-18,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgEgDIgLgeIADgGQACAXAaA4QgJgMgLgfg");
	this.shape_41.setTransform(7.5,-27.2,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgEgcQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAIACABIADAUQADAYgEAUQAFgqgLgTg");
	this.shape_42.setTransform(5,-28.2,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgRAKQgXgNgJgCQgLAGgbANIgFADQAPgKAQgRQgFAAgEgCQgJAEgMgCIgKgEIAPgGQADgCgEgBIAIgBQASAGAWgFQAVAFAMgMIgBADQgBAEAEAPQAEAMACAEQADACAWABQAWABAEgCQAFgBAFgOIAFAPQABACAIACQAIACAEgBQADgDAEgCIAGgDQgDAHgHAEQgHAEgIgBQgHgDgNADQgJADgHAEQgDgCgLgDIgKgDQAAAHgEADQgHgGgXgOg");
	this.shape_43.setTransform(2.6,-37.1,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgRA5QgRgGgTgQQgIgIgDgKIgBgIQACAMAPANQAIAHARAKQAPAJAagGIAFABQAIABAIgCQALgDAIgLQAJgMgBgNQAAgLgLgFQgGgEgPgEQgLgCgVgNQgRgLgQgOQgNgKgMAEIgLAGQARgSAVASIAYASIAXAPQAKAEATAFQAaAGgGAaQgEAUgTAJQgPAGgMgDQgFACgMAAQgLAAgGgCg");
	this.shape_44.setTransform(-7.1,-50.4,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHgBQAKgdAIADIAFAPQACAQgRAQQgHAFgFACIgEABQADgPAFgOg");
	this.shape_45.setTransform(1.4,-45.7,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgeAGIA9gMQgWAIgFAAQgPAFgLAAIgIgBg");
	this.shape_46.setTransform(-18.3,-38.9,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgDAAQAEgOAJAAIgGAGQgHAIgGAPQACgHAEgIg");
	this.shape_47.setTransform(1.2,-48,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgRAIQgHgLAGgJQAFgGALgFIgGAEQgHAFgCAEQgFAKAIAKIAkAOQgigIgFgIg");
	this.shape_48.setTransform(-4.1,-49.5,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAAgHIADALIgFAEQACgGAAgJg");
	this.shape_49.setTransform(6,-59.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgeAPIAOgOQAMgHAqgPQgcAQgNAEQgKACgNALIgLALg");
	this.shape_50.setTransform(-16,-35.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAlAPIgVgIQgRgHgJAAQgLgBgZgHIgYgHIAxAMIAZADIATAHIARAHQAHABAYgCQgRADgJAAIgIgBg");
	this.shape_51.setTransform(3.6,-5.4,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("Ag3AfIAegBQAigCAPgGQAQgGAJgZIAHgYQAAALgEAPQgFAPgFAHQgVASgnABg");
	this.shape_52.setTransform(-1.9,-17.2,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AAhADQgKgDgUAAQgTgBgNACQgKACgggJIgIgCIAKACQAaAFAKgCQAMgCAaABQAbABAIADQALAFAdAEQgigBgNgFg");
	this.shape_53.setTransform(5.5,-7.9,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgEAWQgCgIAGgUIAFgTIgDAVQgCAWACAIg");
	this.shape_54.setTransform(-7.7,-59.5,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgPAFQAZgDAHgJQgBAJggAGg");
	this.shape_55.setTransform(25.9,-41.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgVABIABgCIASABQARAAAHAAQgRACgMAAIgOgBg");
	this.shape_56.setTransform(25.9,-38.4,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgiA5QgGgNgBgVQAAgTAEgGQAEgGAGgRIAGgXQABgEADgGIACgEQgLApgDAIIgIAOQgEANADAUQADAUAHADQAHACADAAQAFAAAHgGIAGgDQAHgEADgEQAIgMACgHQAEgNAIgJIAKgRIgJARIgEAGQgFAIgEAMQgEAMgMAJIgOALQgFAEgFAAQgGAAgIgGg");
	this.shape_57.setTransform(19.8,-44.6,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgJBHQgUgEgDgLQgEgOACgbQADgdAKgcQACgMAHgIQAIgKAKABQgFAAgEADQgLAHgFARIgJAoQgEAUAAAQQgBARAIAKQAGAGAHABIAWADQATAAAHgPQgFARgNABIgKAAIgRgBg");
	this.shape_58.setTransform(7.1,-46.7,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgEAAQAPgLAHAAQgXANgMAKg");
	this.shape_59.setTransform(-20.3,-36.6,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AAhgGQgKAIggAEIgXABQAggCAhgLg");
	this.shape_60.setTransform(-17.1,-39.7,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AghgGIAZAGQAbAFAPgCQgFADgLAAIgBABQgUAAgegNg");
	this.shape_61.setTransform(-16.5,-41.8,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AhKGTQAAhggChMQgBg5gEgyIgHhPIABgoIADgnQADgSgDgKQgGgUgZgbIg5hCQgKgLgDgFQgGgMAEgUQADgNAIgUQAGgOAVgiIAPgZQAHgLAFgEQAEgEAEgCIACgCIABAAIAAgBQgBgNACgGQAEgMASgMQAGgEAJAAQAKAAAGACQAHADALAKQARgRANgBQAPgCAQAKQAWAPAHAbQAkgBASAYQAXgJAUAPQALAIAJAMQAHAKACAYIAAAPIAGAMIAFAMQACAHgDAGQgHAKgCAGIgDANIgFAdQgBAIgJARIgNAfQgKAagCAJQgFAQgKANQgDAEgBAGIgCAPIgDARQgBALABAIQAHA9AMA2QAQBMAnCKIAAABIAAABIgBACIgCABIj9AxQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAgAhYmHQgQANAAANQABALgCADIgFADIgEADQgIAHgPAZIgaAsQgSAgAAAaQgBANAIALIA6BDQAWAYAHAMQAMAVgBAOIgDAXQgCARABArQABAjACAZQAHBHAAAsQADBPAABvID2gwIgBgCQgsiagRhaQgHghgDgcQgDgZADgZIABgRQABgKACgEIAGgJQAHgKACgGQAKgiANgdQAMgaABgFIAFgZIADgQIADgKIAGgJQAEgHAAgDIgGgNIgGgMQgBgDAAgJQgBgbgHgKQgLgRgOgHQgQgJgRAHQgBABAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgIgMgPgGQgNgFgQABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQgFgXgRgPQgPgMgPABQgLAAgSATQgDADgDgDQgNgMgFgCQgGgCgLAAIgKAFg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhLCfQgDgngChKQgChMACgRQADgagfggIhJhWQgHgJAEgXQADgRAIgQQAFgLAUgiIAYglQAHgLAHgBQACgBAAgFIAAgNQAAgNAagPQARgCAKAFQAEACALALQAOgQALgDQAHgCANACQAVAHANAWQAGALACAKQAUgCARAJQALAGAHAJQAigOAcAoQAJAMAAAkIAHANIAGAPQAAADgEAGIgHAKIgJAwQgBAIgSAnQgOAggDAPQgDALgNARQgBABgBALIgEARQgDANACAOQAGA3AMA4QAOBIArCWIj9AyQgBjCgDgxg");
	this.shape_63.setTransform(0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.7,63.5,135.6);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAIAUIAIiSIACAAIgICSIgbBrg");
	this.shape.setTransform(-4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AANgIIgChnIAFBmIgfB5g");
	this.shape_1.setTransform(-6.1,13.7,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAJgLIABhgIADgBIgCBjIgXB1g");
	this.shape_2.setTransform(-10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgMgJIAGAOIAGAAIANgIIgLALIgMABg");
	this.shape_3.setTransform(-20,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AAEACIgQAGIAVgPIAEAPg");
	this.shape_4.setTransform(-17.6,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgPAAIgHAAIAGgBIAPACIAIgEIAQAAIgPADIgIAFg");
	this.shape_5.setTransform(-15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAAOIAPgSIAEgSIgBAUIgSATIgSAGg");
	this.shape_6.setTransform(17.4,-46.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgqAFIAeABIAhgLIAWgDIgZAFIgfAMg");
	this.shape_7.setTransform(-8.7,-5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgFAEIAOgEIAJgGIgGAGIgPAGIgOABg");
	this.shape_8.setTransform(11.5,-12.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAJAAIALgGIgGAEIAEABIgTAGIgSACg");
	this.shape_9.setTransform(9.8,-10.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAAADIgGgOIAHAKIAGAAIgHANg");
	this.shape_10.setTransform(-27.9,-32.6,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAOABIgIgBIgIABIgQgBIARgDIAPADIAFAEg");
	this.shape_11.setTransform(24.3,-38.9,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AADAHIgMgIIgJgJIAVAOIAQAHg");
	this.shape_12.setTransform(19.4,-35.1,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgEgEIAEABIAFAIg");
	this.shape_13.setTransform(26.5,-31.5,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgIACIgDgFIAIgBIANAFIACAEg");
	this.shape_14.setTransform(1.3,-13.1,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgRAIIgCgFIAGgBIgDgEIgHgGIAKADIAFAFIAFAAIABgCIAKACIgCgJIAGAJIAMAFIgLABIgNgDIgFABIAFAGg");
	this.shape_15.setTransform(6.1,-13.7,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgHABIAEgBIgCgFIAMALg");
	this.shape_16.setTransform(10,-14.8,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgEgEIAEABIAFAHg");
	this.shape_17.setTransform(11.2,-14.9,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgBAHIgLgNIAMAJIAKAAIADAEg");
	this.shape_18.setTransform(10.8,-16.6,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEgDIAJAFIgFACg");
	this.shape_19.setTransform(14,-16.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgYATIACgGIgEgLIAKAMIAJACIAMgFIALgJIADgJIABgJIgDgMIAKAYIgDAOIgTAQIgPADg");
	this.shape_20.setTransform(-16.5,-39.9,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgBAAIgDgZIADAJIAEAQIACAUIgHAGg");
	this.shape_21.setTransform(7.7,-59.4,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AAAAAIgGgNIgGgGIAAgJIADALIAGAGIAEAIIAFAOIAHAMIgIAGg");
	this.shape_22.setTransform(-4,-55.2,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgLAyIgKgVIgDgXIgGgOIgKggIgCgRIACAFIAEARIAGARIAGAGIAUA8IAHAGIAcgFIAGgJIgCgLIgJgOIgDgVIACgNIAFAAIAEATIAJANIAAATIgEAPIgHAGIgRAEIgOABg");
	this.shape_23.setTransform(-9.2,-44.6,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgXAxIgKgCIgIADIgUgJIgeAAIgZgTIgFgKIgLgFIAOgBIACACIAFAGIAIAIIALADIAZgOIAGgPIgCgUIALAjIAHAMIAIADIAJAAIARgEQAFgBAEgFIAEgQIAAgQIgIgOIAJAMIAWAJIAmABIAYgFIAWgSIASgaIgLAYIgMAKIgBALIAWgDIgBADIgRAHIACAEIAWAFIACAJIgZgJIgLACIADAKIgNgGIgJACIABAMIgXgCIhDAiIgKACg");
	this.shape_24.setTransform(-2.4,-39.5,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgOAGIgIgEIAZgBIAHgCIACgEIAEABIAEAEIADAFIgIABg");
	this.shape_25.setTransform(-26.1,-39.4,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AACAKIgIgVIAFAEIAHATg");
	this.shape_26.setTransform(-24,-41.9,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgDgCIgDgKIACgBIAEAOIAHANg");
	this.shape_27.setTransform(-26.3,-46.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgDAAIgHgKIAKAKIAIAFIADAGg");
	this.shape_28.setTransform(-26.1,-44.6,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgRgIIAUAEIAQANg");
	this.shape_29.setTransform(4.5,-17.7,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgMAGIgWADIANgGIgHgLIAPALIAVACIATgFIAIAAIgbAJg");
	this.shape_30.setTransform(-0.5,-10.9,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AhHAVIBlABIAqgvIgpAyIhBABg");
	this.shape_31.setTransform(-2.5,2.3,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAFgFIABgSIAEAUIgLAWIgIAEg");
	this.shape_32.setTransform(17.2,-48.4,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAJgBIgMAAIgagHIAkAAIAJAEIAOANg");
	this.shape_33.setTransform(22.7,-37.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAEAPIgZgZIgGgIIANADIgBAEIALAKIARAHIAJgCIAHAHIgHgBIgKABIgKgDIAGAGIAKAFg");
	this.shape_34.setTransform(23.5,-35.4,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgBgJIASgaIAHAEIgVAWIgaAsg");
	this.shape_35.setTransform(-14.7,-28,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AACAXQgEgPgBgLIgBgTIACAWIAHAXg");
	this.shape_36.setTransform(-0.9,-16.5,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgcADIgRgJIACgEQAKAMAoAFQAUADATAAIgWABQghAAgTgIg");
	this.shape_37.setTransform(0.3,-12.6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgUAVQAEgGAKgDQAQgFALggIACAJQABAJgHAJQgHAJgGABQgJACgKAGIgHAGg");
	this.shape_38.setTransform(-10,-14.1,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AALgOIABAEIgXAZQAGgHAQgWg");
	this.shape_39.setTransform(-9,-18.1,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOgnIACAFQgRA3gOATQAZg4AEgXg");
	this.shape_40.setTransform(-7.5,-27.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgCgKIACgWIADAAQAAAAABAAQAAABAAAAQAAAAAAABQABABgBABQgGAMgBAZIABAYQgDgUADgXg");
	this.shape_41.setTransform(-4.9,-28.1,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgPAYIgBgEQgTAEgFAFQgGgFgKgDQgNgDgHADQgIABgHgEQgHgEgDgHIAGADQAEABADADQAEACAIgCQAIgDABgBIAFgPIADAHQAEAHADACQAEABAWAAQAWgBADgEQACgDAEgNQAEgPgBgEIgBgCIAJAGQALAEANgDQAWAFASgGIAIABIgCABQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAPAHQgRAIgOgGQgDABgDAAIgEAAIARAPQAKAJAJAGQgggPgPgJQgJACgXANQgXANgHAHQgCgCgBgEg");
	this.shape_42.setTransform(-2.6,-37.1,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgQA5QgMADgPgGQgTgKgEgTQgFgbAZgFQAWgGAHgEQAFgCASgNQASgMAGgGQAVgQAQAQQgDgEgGgBQgNgFgNAKQgQAOgRAMQgVAMgLADQgPADgGAFQgLAEAAAMQgBAMAJAMQAIALALADQANAEAIgDIAPABQAQABAKgFQARgKAIgHQAPgNACgNQACAOgPANQgRAPgSAGQgGADgMAAQgLAAgFgCg");
	this.shape_43.setTransform(7.1,-50.3,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAAUQgRgQACgQIAFgPQAIgDAJAdQAGAOADAPQgEAAgMgIg");
	this.shape_44.setTransform(-1.4,-45.6,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AAJAFIgngLIAfAGIAeAGIgHABIgPgCg");
	this.shape_45.setTransform(18.3,-38.9,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgDgIIgFgGQALABAHAcQgHgPgGgIg");
	this.shape_46.setTransform(-1.2,-48,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AAPAJQAIgJgFgKQgCgEgHgFIgGgEIAGADQAHAEADAEQAGAJgHALQgFAIgiAIQAhgMADgDg");
	this.shape_47.setTransform(4.2,-49.5,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgCADIACgKQABAJACAGg");
	this.shape_48.setTransform(-6,-59.1,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAEgBQgIgDgRgJIgQgJIAXAJQAYAKAGAEQAMAJAKAMQgTgUgPgDg");
	this.shape_49.setTransform(16,-35.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("Ag4APIgOgCIANABQAOABAEgBQAHgBAdgNQAGgBATgCIAxgMQgrAOgQABQgLAAgQAGIgWAJIgGABIgNgBg");
	this.shape_50.setTransform(-3.6,-5.4,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAUAiQgogBgUgSQgGgHgEgPQgEgPgBgLIAGAYQAKAYAQAHQAPAGAhACQARACAOgBQgOADgRAAIgFAAg");
	this.shape_51.setTransform(1.8,-17.2,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AhBAHQARgDAHgDQAIgDAcgBQAagBALACQAKACAagFIANgDQgoAMgNgDQgNgCgSABQgVAAgKAEQgIADgUACIgSAAg");
	this.shape_52.setTransform(-5.2,-8,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgEgZIAFATQAGAUgCAIIgGAEQADgMgGgng");
	this.shape_53.setTransform(7.7,-59.5,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgQgHIAHAFQAJAFAQACIABADQgggGgBgJg");
	this.shape_54.setTransform(-25.9,-41.3,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgGABIgOgBQAMABAcgCIABABQgGACgKAAIgLgBg");
	this.shape_55.setTransform(-25.9,-38.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AAMA7QgJgFgFgFQgMgKgEgMQgDgMgFgIIgFgFIgLgWIAMAVQAIAJAEANQADAKAHAJQAFAGAKAFQAIAGAFABQAEAAAGgDQAHgDADgUQADgTgEgNIgIgPIgOgwIACAEQADAFABAFIAGAWQAGASAEAGQAEAGAAATQgBAUgGANQgHAFgHAAQgFAAgFgDg");
	this.shape_56.setTransform(-20,-44.6,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgRBIQgIAAgGgJIgEgJQAHAPATAAQAJAAANgDQAHgBAGgGQAIgKgBgRQAAgZgOgzQgEgSgLgGIgJgDQAKgCAIALQAHAIACAMQAKAcADAdQACAbgEAOQgDALgUAEIgRACIgKgBg");
	this.shape_57.setTransform(-7.1,-46.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgDgDIgOgIQALgBAYAZQgHgHgOgJg");
	this.shape_58.setTransform(20.4,-36.6,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgkgGIAXAGQAbAGAXABIgHAAQgyAAgQgNg");
	this.shape_59.setTransform(17.7,-39.7,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgRAHIgQgEQAYADArgMQgeANgUAAIgBAAg");
	this.shape_60.setTransform(16.5,-41.8,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("Ai0FjIgBAAIgBAAQgBgBgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAniIARhPQANg8AGg3QABgIgBgKIgDgSIgCgPQgBgFgDgFQgLgOgEgPQgCgIgKgbIgNgeQgJgRgBgJIgFgcIgDgOQgCgFgHgLQgDgGACgHIAFgMIAGgLIAAgQQACgXAHgKQAKgOAKgHQAUgPAYAJQAJgMAPgGQANgFAQABQAHgbAWgQQAPgKAQACQAOABARARQAKgKAHgCQAHgDAJAAQAJAAAGAFQASALAEAMQACAGgBAOIAAABIADABIAIAGQAEADAIANIAPAZIAOAXQAJAOAEAKQAHARAEARQAEAUgGALIgNAQIg5BCQgZAdgGATQgDAJADASQACAJABAeIABAoQgEAngDAoQgEAygBA5QgCBMAABgQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAgAiikrQgGAKgBAaQAAAJgBADIgGANIgGAMQgBAEAFAGIAGAJQACADABAHIADARIAFAYQABAFAMAaQAOAiAJAdQACAHAHAJIAGAKIACAOIACAQQADAZgDAaQgDAagHAjQgRBagsCaIgBABID2AwQAAhvADhPQAAgtAHhFQACgZABgkQABgrgCgQIgDgXQgBgPAMgUQAGgKAXgbIA6hDQAIgKgBgOQAAgbgSgfIgagrQgPgZgIgHQgHgDgCgDQgBgCAAgFIAAgIQAAgOgRgLIgJgFQgIgBgJACQgGACgMANIgDABIgDgCIgNgMQgIgGgIgBQgPAAgPAMQgRAOgGAYQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgPgBgOAFQgPAGgIAMQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgIgEgJAAQgXAAgTAeg");
	this.shape_61.setTransform(0,0,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ai1FhQAriXAOhHQAKguAEgdIAEglQACgOgDgMIgEgRQgBgMgBgBIgIgLQgGgKgCgHQgBgHgQgoQgSgngBgHIgJgwIgHgLQgEgGAAgDIAHgPQAGgLAAgCQAAgjAIgNQAdgoAiAPQAHgJALgHQARgIAUABIAIgVQANgWAVgGQAMgDAIACQALADAOARQALgLAEgCQAKgGARACQAaAQAAAMIAAANQAAAGACAAQACABAFADIAHAIIAYAlQAVAiAEALQAIAQADASQAEAWgHAKQgFAHhFBOQgeAjADAXQACARgCBMQgCBLgDAmQgDAxgBDCg");
	this.shape_62.setTransform(-0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AhTgsICnBPIgDAKg");
	this.shape.setTransform(21.6,-4.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AhJgmICPBBIAEANg");
	this.shape_1.setTransform(23.3,-5.4,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgugLIACgXIBbBFg");
	this.shape_2.setTransform(-2.3,-16.5,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AANAAIgggQIAjAPIADASg");
	this.shape_3.setTransform(-12.6,-22,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABIhRIATgJIi1C1g");
	this.shape_4.setTransform(-67.5,37.3,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNgEIAAgDIAbAPg");
	this.shape_5.setTransform(-85.3,52.8,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLgDIABgCIAWALg");
	this.shape_6.setTransform(-85.9,51.5,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKgIIAUAOIgQgIIACALg");
	this.shape_7.setTransform(-86.7,50.5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#201F1F").s().p("AgOABIgHgUIAkAXIAHAQg");
	this.shape_8.setTransform(-85.3,51.9,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#201F1F").s().p("AhqBaIC9jBIAYAEIjODLg");
	this.shape_9.setTransform(-64.9,37.7,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhcBJICyinIgLAZIASgDIiZCng");
	this.shape_10.setTransform(-72.7,36.4,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#201F1F").s().p("AhvBHICwimIAvAIIi6C3g");
	this.shape_11.setTransform(-70.2,36.8,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAMALIgmhlIABgBIAnBlIANBSg");
	this.shape_12.setTransform(-28.8,52,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAEgZIgfhFIAhBDIAWB6g");
	this.shape_13.setTransform(-30.3,53.9,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAEgJIgchCIACgCIAcBEIATBXg");
	this.shape_14.setTransform(-33.1,53.1,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgJgDIAJAIIADgCIAHgKIgFALIgHAEg");
	this.shape_15.setTransform(-49.2,35.8,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AACgHIAHAIIgIgBIgIAJg");
	this.shape_16.setTransform(-46.1,36.8,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgLAFIALgCIAEgGIALgEIgJAGIgEAFIgLACIgFADg");
	this.shape_17.setTransform(-44.1,38.4,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AABAKIAFgRIgDgNIAGAOIgHASIgKAJg");
	this.shape_18.setTransform(-32.5,3.3,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgFAKIASgSIAOgJIgPALIgRASIgVAGg");
	this.shape_19.setTransform(-38.1,39.1,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AAGgDIAGgHIgDAFIADgBIgMAKIgLAHg");
	this.shape_20.setTransform(-27.1,30.1,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AADABIgIgHIAHAEIAEgCIAAALg");
	this.shape_21.setTransform(-59.8,26.7,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgCgCIALgCIAFACIgEgBIgGACIgFACIgMAEg");
	this.shape_22.setTransform(-25.9,6.3,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgBACIgFgBIgJgDIASADIANAAIgMACg");
	this.shape_23.setTransform(-28.2,10.4,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgIAAIAFgCIAKAAIACACIgOADg");
	this.shape_24.setTransform(-33.7,30.8,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgLAHIAEgDIgEgDIgHgBIAJAAIAEABIAEgBIgBgCIAIAAIgEgHIAHAFIAKAAIgHADIgKABIgDAEIAEACIgLAEg");
	this.shape_25.setTransform(-30.8,29.1,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgCAAIgEgCIANAEIgLABg");
	this.shape_26.setTransform(-28.2,27,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgEAAIAEgBIAFADg");
	this.shape_27.setTransform(-27.5,26.4,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgKgCIALADIAHgDIADABIgKAEg");
	this.shape_28.setTransform(-28.4,25.9,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgDgBIAHABIgCACg");
	this.shape_29.setTransform(-26.4,24.4,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgLAVIAAgEIgGgGIAKAEIAHgBIAGgHIAEgJIAAgHIgCgHIgHgHIAPANIACALIgIAQIgKAHg");
	this.shape_30.setTransform(-53.8,17.9,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AAAAAIgJgQIAMAPIAHAMIgDAGg");
	this.shape_31.setTransform(-43.7,-2.4,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AABAAIgIgHIgGgDIgDgGIAGAHIAFACIAFAEIAIAHIAJAHIgFAGg");
	this.shape_32.setTransform(-50.2,4,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAKAeIgMgLIgJgOIgJgHIgRgTIgGgLIADADIAIALIAJAJIAHACIAeAiIAIACIARgMIABgIIgEgHIgKgFIgKgOIgCgKIADgBIAJAMIAKAGIAGALIACANIgDAFIgUAOg");
	this.shape_33.setTransform(-51,13.7,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AhLA9IgHgFIgIAAIAJgFIACABIAFADIAIACIAIgBIANgRIgBgNIgHgNIASAVIAIAGIAHAAIAHgDIAKgHQADgDAAgEIgBgNIgGgLIgJgGIAKAFIAQgBIAbgLIAOgLIAKgSIAEgXIAAATIgFAKIADAIIANgIIABACIgKAKIADACIARgDIAEAGIgUABIgGAFIAFAGIgLAAIgGAEIAFAHIgRAFIgjAsIgGAEIgDgFIgIACIgFAFIgQgBIgUAKg");
	this.shape_34.setTransform(-43.7,12.2,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgPAJIAQgJIAEgDIAAgEIADgBIAIAFIgFADIgUAJg");
	this.shape_35.setTransform(-60.1,21.3,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AAFAGIgMgLIAEABIAHAFIAEAFg");
	this.shape_36.setTransform(-59.7,19,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgCAAIgGgGIABgBIAHAIIAJAHg");
	this.shape_37.setTransform(-62.6,16.7,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgCACIgIgFIAKADIAHABIAEADg");
	this.shape_38.setTransform(-61.9,17.7,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgOACIAOgEIAPAFg");
	this.shape_39.setTransform(-33,26.3,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgNAGIgJgFIAPADIANgFIALgKIAGgCIgQANIgNAFIgPAIg");
	this.shape_40.setTransform(-34.2,33.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AAcAIIAOgtIgNAvIgrAUIgbAIg");
	this.shape_41.setTransform(-31.7,42,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AAAgFIgEgNIAIANIgBASIgDAGg");
	this.shape_42.setTransform(-33.5,2,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AACgFIAHAAIAOAFIgRgBIgIADIgUAEg");
	this.shape_43.setTransform(-26.7,7.2,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgXgEIAKgDIABAEIAKADIAOAAIAGgEIAGADIgEABIgHADIgIAAIAGADIAIABIgKABg");
	this.shape_44.setTransform(-25.7,9.1,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgDgGIADgXIAGAAIgGAWIgFAlg");
	this.shape_45.setTransform(-49,25.7,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgDgBIgGgMIAIANIALAOIgCABQgIgJgDgHg");
	this.shape_46.setTransform(-36.2,29.1,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AghAHIAAgDQAKAGAdgJQAPgEANgFQghAQgUABg");
	this.shape_47.setTransform(-34.2,31.8,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgJAUQABgEAGgGQAJgJgDgYIAEAFQADAFgCAJQgBAHgEADQgFAFgFAHIgDAGIAAgEg");
	this.shape_48.setTransform(-41.4,33.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AACgNIACACIgHAZg");
	this.shape_49.setTransform(-42.2,30.6,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCgfIACAEIACAXQACAZgDAKQABgtgEgRg");
	this.shape_50.setTransform(-44,23.9,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgEgGIgEgPIACgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQgDAQAQAbQgIgMgFgRg");
	this.shape_51.setTransform(-42.6,22.4,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AhFAlIAGAAIAGABQADAAAFgEQAEgEAAgCIgBgMIAFAEQAFAEACAAQADAAAPgHQAPgIAAgCQABgDgBgKQgCgLgCgDIgBgBIAHABQAJgBAIgFQAQgEAKgKIAGgBIgBABQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAMAAQgJAKgLABIgGADIAQAGQAKADAIABQgbgBgNgBQgGAEgLAPQgNARgBAGQgCAAgCgDIgCgCIgGAFQgGAFgBADQgGgBgIABQgJABgEAFQgFADgFAAQgFAAgHgFg");
	this.shape_52.setTransform(-43.3,15.5,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgpApQgLgRAPgMQAMgJAFgFIALgRIAKgUQAJgSARAHQgEgCgFABQgKABgFALQgRAkgPAKQgJAHgDAFQgFAHADAIQADAJAKAFQAJAFAIgBQAKgCAEgEIALgEQALgEAFgHQAUgcgEgNQAFAJgGAMQgIARgJAIQgEAEgIADQgIAEgEAAQgGAGgMAAQgQAAgJgMg");
	this.shape_53.setTransform(-40.6,3.1,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAEAPQgQgGgEgLIgBgMQAFgEAPAQIAPARIgFABIgJgBg");
	this.shape_54.setTransform(-45.2,9.4,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AABAAIAWgEQgFADgKACIgJACIgVACg");
	this.shape_55.setTransform(-30,8,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgEgEIgGgCQAJgDAMAQQgIgHgHgEg");
	this.shape_56.setTransform(-46.1,7.8,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AAJAAQADgJgHgGQgCgCgGgBIgFgBIAFAAQAFABADABQAHAFgBAKQgBAGgUAQQASgSABgCg");
	this.shape_57.setTransform(-42.3,5.7,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgBADIgBgHIAGAJg");
	this.shape_58.setTransform(-52.6,1.7,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AACgBQgGABgOgBIgOgBIATgBQASgBAGABQALADALAEQgTgHgMACg");
	this.shape_59.setTransform(-30.5,11.2,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgWAXQAEgDAQgSIAQgKIAegWQgZAWgLAGQgHADgIAKIgMAMQgEACgKAEIgKADg");
	this.shape_60.setTransform(-34.7,37.3,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgWANQgGgCgIgKQgHgHgEgIIAMAOQAOAOAMgBQAUgBAlgQQgKAGgOAGQgSAHgNAAQgIAAgHgCg");
	this.shape_61.setTransform(-34.7,29.4,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgpAZQAKgIAEgEQAEgEATgJQARgJAIgCQAHgCAQgLIAIgGQgXAVgKACQgJACgMAGQgOAHgFAFQgFAFgNAHIgMAGg");
	this.shape_62.setTransform(-36.5,36.2,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgBgDIgJgNIAKALQAKAMABAGIgDAEQgBgGgIgOg");
	this.shape_63.setTransform(-43.7,-2.5,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgNAAIAGABQAIABALgDIACABQgMACgGAAQgHAAgCgCg");
	this.shape_64.setTransform(-60.8,20.1,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AANgGIABABQgGAFgMADIgJAEQAJgEARgJg");
	this.shape_65.setTransform(-59.8,21.8,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AAXAqIgOgDQgJgCgGgHQgGgHgGgEIgFgDIgPgMIAPAMQAGACAJAJQAEAEAIAGQAFACAJAAQAHACAEgCQACAAAEgEQADgEgDgPQgEgOgHgGIgKgIIgYgdIADACIAGAGIAKANQAJAKAFADQAFAEAFALQAGAOgBALQgEAJgHAAIgEAAg");
	this.shape_66.setTransform(-57.3,15,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgIAyIgFgFQAJAIAMgGQAGgDAIgGQAFgDACgGQACgJgFgLQgIgPgYggQgJgLgJgBIgIABQANgHAPASQAPARALATQAKARABAKQABAJgMAIQgJAGgKAEIgDAAQgEAAgEgCg");
	this.shape_67.setTransform(-48.5,11,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgDAAIgMgBQAHgEAYAIIgTgDg");
	this.shape_68.setTransform(-27.9,8.9,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgaAGIARgDQAUgDAQgGQgcANgQAAIgJgBg");
	this.shape_69.setTransform(-30.8,7.8,1.676,1.676);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AAVgNQgQASgOAGIgLADQAQgGAZgVg");
	this.shape_70.setTransform(-32.3,6.5,1.676,1.676);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgCFFIgQhwQgMhOgHghQgKgrgNgpIgGgMIgHgLIgGgJQgCgEgEgCQgLgHgIgIQgIgKgLgKIgSgRQgMgKgCgEIgNgSIgGgIIgLgJQgEgCgBgGIABgKIAAgJIgFgLQgGgQACgJQACgMAFgIQAJgRATgBQADgLAIgIQAIgIALgEQgEgVAKgRQAHgLAMgEQAKgEARAHQAEgLADgDIAKgGQAGgDAGABQAQACAGAHIAHANIAAAAIADAAIAHACIAMAHIARAMQAcAUAGAFQAKAJAHAKQAJANgBAJIgDAOIgTA/QgIAbACAOQABAIAHALIAOAaQAMAWABAFIATA3QAOAlAQAlIAiBYQAZBDAJAVIgBACIjEAtIgCABQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAgAhskvQgLAFgGAMQgHAPAEASIgCACQgYAIgEAWQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgaABgGAjQgCAJAIASIADAIIgBALIABAKQABAEALAGIAFAGIASAZIASARQARAPASAVQAFAEAGAEIAHAEIANAUQAKARAFARQAHAVAFAXQAJAnANBTIARB7IABABIDAgtQgLgYgahFIglhfQgRgngNgpQgGgPgLgaQgNgegGgKIgJgPQgFgJACgSQABgKAHgYIATg/QACgJgEgKQgJgRgWgQIgfgWQgPgMgJgDIgHgBQgCgBgBgDIgCgFQgFgJgPgEQgFgBgDABQgIAEgDACQgDADgFAMQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgLgGgIAAIgHACg");
	this.shape_71.setTransform(-31.9,45.1,1.676,1.676);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgkBhQgHgigHgVIgIgaQgDgKgGgIIgIgKIgFgIQgOgHgFgHIgagbQgZgUgDgFQgDgHgSgXQgLgGgCgEQgBgCABgKIAAgLQgKgYABgLQAHgkAcAAQACgJAGgHQAIgLAOgGQgBgHABgKQABgSAMgLQAJgGAGgBQAIgBAPAHIAGgOQAFgGAMgEQAWACAEAJIAEAJQABABAAAAQABABAAABQAAAAABAAQAAAAAAAAQAGgBAIAFIAaASIAfAWQAKAJAIALQAJAOgCAIQgCANgVBEQgKAgAJAQQAGALAWA0QAWAzAKAaIBZDhIjFAuQgYivgMg1g");
	this.shape_72.setTransform(-31.9,45.1,1.676,1.676);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ah6BoIDbjlIAaASIjVDpg");
	this.shape_73.setTransform(-31.7,-3.8,1.676,1.676);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("Ag2A3IBrhxIACAJIhnBsg");
	this.shape_74.setTransform(-20.8,-10.9,1.676,1.676);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("Ag3A4IBrh0IAEACIhpB3g");
	this.shape_75.setTransform(-25.3,-14.9,1.676,1.676);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#201F1F").s().p("Ag8A8IByh+IAHASIhrBzg");
	this.shape_76.setTransform(-19.6,-11,1.676,1.676);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Am9AMIFZkwIIiEEIk7FEg");
	this.shape_77.setTransform(13.2,-50.3,1.676,1.676);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Akfh+IgDgZIJEEYIABAXg");
	this.shape_78.setTransform(-13.5,-22.5,1.676,1.676);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("Am/AbIgFgbIFgk0IInEDIACAXIk/FPg");
	this.shape_79.setTransform(13,-47.9,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-99.8,177.9,199.6);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgRAcIAgjkIADAAIgfDkIAICtg");
	this.shape.setTransform(-9.1,28.9,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgSgVIAlibIggCfIAGDCg");
	this.shape_1.setTransform(-5.5,26.3,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgPgRIAbiZIAEADIgaCUIgDC+g");
	this.shape_2.setTransform(1,28.8,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgGAJIgOgWIATASIAIADIAOgUIgKAag");
	this.shape_3.setTransform(25.5,-14.1,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgPAGIAKgWIAbAdg");
	this.shape_4.setTransform(20.2,-11.2,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAYAIIgYACIgMgKIgWgJIAZAEIAMAKIAYgCIAIAIg");
	this.shape_5.setTransform(16.6,-6.5,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAAbIgYgjIAFggIABAeIASAgIAZATg");
	this.shape_6.setTransform(-23.5,-73.5,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AATAVIgugdIglgPIAiAMIAwAdIAvAGg");
	this.shape_7.setTransform(4.6,-2.3,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAPAFIgsgbIAuAaIANATg");
	this.shape_8.setTransform(-21.6,-8.3,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAEAKIgVgNIgHgMIALALIAVANIARAHg");
	this.shape_9.setTransform(-24.2,-19.4,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AACAJIgcgQIAHAAIgJgJIAQAMIApAVg");
	this.shape_10.setTransform(-22.4,-15.5,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgNgDIgIgGIArATg");
	this.shape_11.setTransform(12.5,4.1,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgLgFIAJACIAOgOIgNAUIgFAPg");
	this.shape_12.setTransform(42.9,-38.3,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAEACIgMgCIgNgBIgIABIAJgEIAYgBIAaALg");
	this.shape_13.setTransform(-36.1,-64,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgFAGIAlgRIgRALIgUAKIgaACg");
	this.shape_14.setTransform(-29.5,-56.8,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AADgFIAGgBIgRANg");
	this.shape_15.setTransform(-41.6,-53.4,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgJAGIATgMIgQANg");
	this.shape_16.setTransform(-39.9,-48.7,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AAWgZIgTAaIgYAZg");
	this.shape_17.setTransform(-31.2,-43,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgSAGIAEgGIAWgFIALAEIgFAHg");
	this.shape_18.setTransform(-8.4,-17.5,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgBAQIAIgIIgIgEIgVAAIgQgEIATgDIANgOIgFAQIARgCIgBADIAJACIAIgGIASgCIgNAGIgHAHIAIAEIgDAHg");
	this.shape_19.setTransform(-15.4,-19.6,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AANgHIgGAHIAFAFIgYADg");
	this.shape_20.setTransform(-21.4,-22.6,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AABgFIAIABIgRAKg");
	this.shape_21.setTransform(-23.1,-23.1,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgVAEIAFgEIARADIAVgLIgVARg");
	this.shape_22.setTransform(-21.9,-25.3,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgHAAIAPgFIgJALg");
	this.shape_23.setTransform(-26.7,-26.9,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgUAYIApgxIgnAzg");
	this.shape_24.setTransform(-26.4,-32.6,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgPAnIgYgdIAAgYIAXgiIgJARIgCAPIACAPIAOARIASAMIAOgBIATgPIgIAQIAAAKIgYALg");
	this.shape_25.setTransform(27.3,-53.3,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgOAcIAJgdIAMgZIAIgMIgNAlIgGAog");
	this.shape_26.setTransform(-4.1,-90.3,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgbAfIAPgRIAMgVIAJgLIAFgEIAGgDIAHgPIgCAMIgKAJIgPATIgQAqg");
	this.shape_27.setTransform(12.6,-80.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgrBMIgZgLIgJgLIgCgZIAGgdIARgPIANgfIAHACIAAAVIgMAfIgSAUIgGAPIAHAQIAoARIAPgIIAwhVIAMgJIAOgXIALgaIAFgGIgIAYIgoBDIgLAjIgVAdIgWAIg");
	this.shape_28.setTransform(18,-61.6,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AAEBpIhdhJIgkgDIAFgSIgMgGIgXAFIAIgNIgRgHIgpAGIAGgOIAkgCIAFgFIgZgQIAAgFIAgAMIACgSIgQgTIgJgnIATAtIAdAiIAjAPIA8AKIAkgHIASgQIgRASIgGAaIADAbIADAFQAEAFAFADIAYALIAPABIANgBIAPgRIAbg0IgJAdIAEAaIAjAgIARgCIAQgLIAMgKIAWAGIgSAFIgMANIgrAVIgugJIgiAJIgMgIIgQAAIgGANg");
	this.shape_29.setTransform(4.8,-59.6,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgXAFIgMgEIAHgHIAIgHIAGAAIACAJIAKAEIAlAKIgMADg");
	this.shape_30.setTransform(41.6,-49.4,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AAGgLIAHgEIgBADIgRAaIgIACg");
	this.shape_31.setTransform(39.4,-54,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAAACIANgVIACACIgIAPIgVAWg");
	this.shape_32.setTransform(44.2,-60,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgMAFIANgFIAUgNIgPAPIgaAMg");
	this.shape_33.setTransform(43.4,-57.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAcg1IgUAuIgjA9g");
	this.shape_34.setTransform(-6.6,-25.4,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgCgIIAhACIg9APg");
	this.shape_35.setTransform(-11.9,-25.6,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AATAGIgggCIgmgUIAMACIAcAOIAgADIAcgNIgPAPIASAMg");
	this.shape_36.setTransform(-6.5,-12.4,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AAuA3IhlgWIgwhaIAzBXICcAcg");
	this.shape_37.setTransform(-7.2,6.8,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AABAdIgMgmIALgdIgCAaIALAqIADAJg");
	this.shape_38.setTransform(-22.7,-76.4,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgVgGIANgEIA5ALIgqACIgUgDIgjALg");
	this.shape_39.setTransform(-33.8,-62.4,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgRAQIALgHIgQADIgPgFIgKgBIALgIIANAGIAdgGIAVgMIgBgHIAWAAIg8ApIgVADg");
	this.shape_40.setTransform(-35.5,-58.1,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AAAgPIgZgqIALgDIAUAtIAVBMg");
	this.shape_41.setTransform(20.7,-35.2,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AAFgJIACgPIABALIgPAmg");
	this.shape_42.setTransform(5.7,-40.5,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgMAeIASghIAHgaIgFAWQgEAQgMAVg");
	this.shape_43.setTransform(-4.2,-21.3,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AhIgDIA9AGQBBAEASgQIABAHQgGAHgWADQgLACgOAAQglAAg3gNg");
	this.shape_44.setTransform(-7.1,-15.2,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgHARQgJgFgHgOQgIgSADgOIAGgLIAHAdQAKAdAOAIQAPAIAEAJQADAFgBADQgOgUgXgJg");
	this.shape_45.setTransform(9,-15.5,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgOgUIADgGIALAYIAPAdg");
	this.shape_46.setTransform(8.9,-21.9,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgFgIIgIgxIAGgIQgDAkAXBfQgKgVgIg1g");
	this.shape_47.setTransform(9.4,-36.4,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AABAQQAIgogJgUQABgHADAAIAEACIgBAhQgDAngLAdQAGgQACgUg");
	this.shape_48.setTransform(6,-38.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("ABwA6QgLgGgUABQgQACgLAEQgEgFgPgIIgPgHQgDAKgHAEQgIgNgggcQgggbgMgGQgUAIgtALIgPADQAQgEASgKQARgKAMgJQgIgBgGgFQgOADgSgHIgPgIIAZgGQAFgBgGgCIAMAAQAaANAkABQATAIASgDQAKgCAFgEIgBADQgDAHACAXQADAWACAGQADAFAiAIQAhAJAHgCQAIgBANgVIACAZQACADAKAHQAMAFAHgBQAGgDAHgBQAHgBADgDQgIAKgLAEQgHACgGAAQgFAAgGgCg");
	this.shape_49.setTransform(5.1,-53.6,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AALBiQgIABgRgEQgSgEgJgFQgagQgWgdQgMgOgBgRIACgNQgCAUATAYQAKANAZAWQAMALAbAEQAMACALAAIAIAEQALADAOgBQARgCAQgPQARgPADgUQACgRgNgNQgJgIgWgJQgQgHgcgaQgYgYgVgZQgQgTgVACIgSAGQAggWAaAiQAIAJAYAaQAZAYAHAGIAMAIIAeANQAjARgPApQgMAeggAHQgKACgJAAQgNAAgLgEg");
	this.shape_50.setTransform(-6.4,-77.2,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgIgDQAYgpAMAHIADAYQgCAbgeASQgPAGgIABIgGAAg");
	this.shape_51.setTransform(5.3,-66.8,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgwgBIATAAIAdgCQAWACAbgBQgkAFgIAAIgRABQgXAAgNgFg");
	this.shape_52.setTransform(-26.8,-61.9,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgGAAQANgVAMACQgEABgHAGQgMALgOAVg");
	this.shape_53.setTransform(6.1,-70.3,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgZAFQgIgUANgNQAJgIARgDIgKAEQgMAFgEAGQgFAIgBAGQgBAIAGAKQACADAYAPIAZAOQgzgWgEgNg");
	this.shape_54.setTransform(-2.3,-73.8,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAEgLIABASIgJAFQAEgIAEgPg");
	this.shape_55.setTransform(16.5,-86,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("Ag0AOQAPgLAMgFQAUgJBGgLQgvAQgXACQgOACgYAMIgVANg");
	this.shape_56.setTransform(-24.4,-55.7,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AA0AlIgegTQgXgRgQgDQgPgFgmgSIgigSIBJAhIAlAOIAaARQAUANAGACQAIAEAnAEQgngBgOgGg");
	this.shape_57.setTransform(-3.2,-4.4,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgoAnIg3gPIAvAIQA0AHAagFQAagGAXgjQALgSAHgRQgGATgKAUQgMAWgKAJQgZAPgjAAQgSAAgVgEg");
	this.shape_58.setTransform(-7.9,-22.6,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AAyAPQgOgJgggGQgdgIgUABQgQAAgugYIgMgGIAOAGQAmAQARAAQASAAAoAKQAqAKAMAHQAQALAqAPQg0gKgSgNg");
	this.shape_59.setTransform(0.5,-7.3,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgOAgQgBgNAPgeIAPgcIgMAgQgKAiACANIgJgIg");
	this.shape_60.setTransform(-3.9,-90.6,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgaACQAaADARgFQAIgDADgDQgCAJgaADIgbABg");
	this.shape_61.setTransform(42.1,-52.5,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgigDQABgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAbAHQAcAHALABQgugDgXgIg");
	this.shape_62.setTransform(41.4,-48.3,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("Ag1BeQgJgDgIgJQgGgVAFggQAFgdAJgJQAIgIAOgZQANgYAEgJQADgHAFgHIAGgFQgeA7gIALQgKALgGAKQgKASgCAfQgBAfAKAHQAJAGAFABQAJABANgHIALgDQALgEAFgFIALgKIALgQQALgVAOgJQAFgEAVgZIgZAeQgNAIgPAbQgKASgTALIgcALQgEACgFAAQgEAAgFgBg");
	this.shape_63.setTransform(33.8,-60.3,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AAVByQgYgDgTgIQgdgLgBgTQgDgWAMgpQAOgsAYgqQAHgRAMgLQAPgNARAFQgHgCgKAEQgTAHgLAaQgTAogHASQgNAdgFAbQgGAaAJAQQAHAMALADIAhAMQAdAFAPgUQgDAGgFAGQgKALgLAAIgDAAg");
	this.shape_64.setTransform(12.2,-66,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgGAAQAagPALADQgnANgWAMg");
	this.shape_65.setTransform(-30.6,-59.5,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgQADIgkgEQA0AFA1gHQgOAHgeAAIgZgBg");
	this.shape_66.setTransform(-24.5,-62.6,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AAZARQgfgGgrgdIAkARQAoARAYABQgFACgGAAIgPgCg");
	this.shape_67.setTransform(-23,-66.5,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AknJsQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQAciTAVh2QAQhZAJhOIAMh8QABgKANgzQALgsAFgQQAKgbgBgPQgCgUgKgXQgGgPgPgZIhEh3QgNgXgCgFQgFgSAMgfQAKgZAQgXQAOgTArgvIAfghQASgSAFgDQAGgEAIgDIAEgBQABAAAAAAQABAAAAAAQAAAAAAgBQgBAAAAAAIADgQQABgJADgFQAJgQAggOQAMgEANACQAQAEAIAFQAIAFAHAJIAIALQAMgJAIgEQARgIAOACQAbACAUAUQAOAPAJAVQAIATABATQAYAEAUANQAVANAKAVQApgGAaAdQANAOAKAXQAJAUgFAjIgDAPIgBAJQAAAFAFAOQAFARAAAEQABALgIAIIgKAKQgFAGgDAGIgIAUIgSAqQgCAJgHAKIgNASIgdAqQgXAlgHAOQgLAWgUASQgGAFgEAIIgHAWQgDALgHARQgGAPgBANQgHBeACBZQACB0ASDnIAAABIAAABIgBABIgDADIgBAAIgCAAgAhOphQgdAMgFAWIgCALQgBAIgDADQgCACgFABIgIADQgLAHgNANIgVAWQgeAhgXAbQgkArgKApQgFAUAJATIBFB4IASAgQAKATAGAOQAMAjgGAXIgMAiQgIAZgMBDQgJA5gEAlQgMBugMBFQgWB+ggCnIGJABIAAgCQgLiJgDg8QgHhvABhXQAAg0ADgtQADgmAMgpIAIgZIADgLQACgFADgDQADgFAKgIQAQgRADgGQAZgxAdgoIAQgVQAJgNAFgKIAOgkIALgZIADgHIADgHIANgMQAJgJAAgGQgBgHgEgNIgGgWIABgJIACgKIADgdQABgRgFgMQgMgegTgQQgXgSgdAGQgFABgBgEQgKgUgVgNQgTgNgYgDQgEgBAAgCQgBgngWgbQgUgXgXgEQgNgCgPAIQgIAEgPALQgCACgDgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIgKgPQgHgJgHgEQgLgGgNgBIgBAAQgFAAgLAFg");
	this.shape_68.setTransform(0,0,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AklJqQA6ksAJhMQAIg9AUhzQAUh2AIgaQAKghgjhAQhNiEgKgWQgIgRANghQALgaAQgXQAKgPArguQAlgoAKgKQAGgFAIgFQAIgEAEAAQADAAABgJQADgOACgGQAEgTAtgRQAbADANAMQAFAEANAUQAbgVARgCQAMAAAVAIQAeAQANAmQAGATABAQQAfADAWATQAQANAIAQQA6gMAeBHQAKAXgLA1IAGAXQAFATAAAFQgBAFgHAHIgOAPIgPAkQgNAdgBAGQgCAHgRAYIgZAjQgiA0gGAPQgIASgZAUQgCACgBADIgEANIgMAYQgIAWgCAVIgEA6QgCAuAABJQABBzAUD1g");
	this.shape_69.setTransform(0,-0.1,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-104.1,100.3,208.4);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAIAUIAJiSIABAAIgICSIgbBrg");
	this.shape.setTransform(-4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AARgcIgBhnIAFBlIgpCig");
	this.shape_1.setTransform(-6.9,17,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAJgLIABhgIADgBIgBBjIgYB1g");
	this.shape_2.setTransform(-10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgMgJIAGAOIAGAAIANgIIgMALIgKABg");
	this.shape_3.setTransform(-20,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AADACIgPAGIAWgPIADAPg");
	this.shape_4.setTransform(-17.6,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgPAAIgHAAIAFgBIAQACIAIgEIAQAAIgPADIgIAFg");
	this.shape_5.setTransform(-15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAAOIAPgSIAEgSIAAAUIgTATIgSAGg");
	this.shape_6.setTransform(17.4,-46.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgqAFIAdABIAigLIAWgDIgZAFIgfAMg");
	this.shape_7.setTransform(-8.7,-5,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgFAEIAOgEIAIgGIgFAGIgPAGIgOABg");
	this.shape_8.setTransform(11.5,-12.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAJAAIALgGIgHAEIAFABIgUAGIgRACg");
	this.shape_9.setTransform(9.9,-10.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAAADIgGgOIAHAKIAGAAIgHANg");
	this.shape_10.setTransform(-27.9,-32.6,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAOABIgIgBIgHABIgRgBIASgDIAOADIAFAEg");
	this.shape_11.setTransform(24.3,-38.9,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AADAHIgHgGIgEgCIgJgJIAUAOIAQAHg");
	this.shape_12.setTransform(19.4,-35.1,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgEgEIAEABIAFAIg");
	this.shape_13.setTransform(26.5,-31.5,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgIACIgCgFIAHgBIAMAFIACAEg");
	this.shape_14.setTransform(1.3,-13.1,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgRAIIgCgFIAGgBIgDgEIgHgGIAKADIAFAFIAFAAIABgCIAKACIgCgJIAGAJIAMAFIgKABIgOgDIgFABIAFAGg");
	this.shape_15.setTransform(6.1,-13.7,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgHABIAEgBIgCgFIANALg");
	this.shape_16.setTransform(10,-14.8,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgEgEIAFABIAEAHg");
	this.shape_17.setTransform(11.2,-14.9,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgBAHIgLgNIAMAJIAKAAIADAEg");
	this.shape_18.setTransform(10.8,-16.6,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEgDIAJAFIgFACg");
	this.shape_19.setTransform(13.9,-16.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgXATIABgGIgEgLIALAMIAJACIAMgFIAKgJIAEgJIAAgJIgDgMIAKAYIgDAOIgTAQIgPADg");
	this.shape_20.setTransform(-16.6,-39.9,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgBAAIgDgZIAIAZIABAUIgGAGg");
	this.shape_21.setTransform(7.7,-59.4,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AAAAAIgGgNIgFgGIAAgJIACALIADADIADADIAEAIIAFAOIAHAMIgIAGg");
	this.shape_22.setTransform(-3.9,-55.2,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgLAyIgKgVIgDgXIgGgOIgKggIgCgRIACAFIAEARIAGARIAGAGIAUA8IAHAGIAbgFIAHgJIgCgLIgIgOIgEgVIACgNIAFAAIAEATIAJANIAAATIgFAPIgHAGIgQAEIgOABg");
	this.shape_23.setTransform(-9.1,-44.6,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgXAxIgKgCIgJADIgTgJIgfAAIgYgTIgGgKIgKgFIAPgBIAFAIIAJAIIALADIAZgOIAGgPIgCgUIALAjIAHAMIAIADIAKAAIAQgEQAFgBAEgFIAEgQIAAgQIgHgOIAHAMIAWAJIAoABIAXgFIAXgSIARgaIgKAYIgNAKIgBALIAWgDIgBADIgRAHIACAEIAWAFIACAJIgZgJIgLACIADAKIgOgGIgIACIACAMIgYgCIhDAiIgKACg");
	this.shape_24.setTransform(-2.4,-39.5,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgOAGIgIgEIAZgBIAHgCIACgEIAEABIAHAJIgIABg");
	this.shape_25.setTransform(-26.1,-39.4,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AACAKIgHgSIAAgDIAEAEIAFALIACAIg");
	this.shape_26.setTransform(-24,-41.9,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgDgCIgDgKIACgBIAAACIAEAMIAHANg");
	this.shape_27.setTransform(-26.3,-46.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgDAAIgIgKIALAKIAHAFIAFAGg");
	this.shape_28.setTransform(-26.1,-44.6,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgSgIIAVAEIAPANg");
	this.shape_29.setTransform(4.5,-17.7,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgMAGIgWADIANgGIgHgLIAQALIATACIAUgFIAIAAIgbAJg");
	this.shape_30.setTransform(-0.5,-10.9,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AhHAVIBkABIArgvIgpAyIhCABg");
	this.shape_31.setTransform(-2.4,2.3,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgGATIALgYIABgSIAFAUIgNAWIgHAEg");
	this.shape_32.setTransform(17.3,-48.4,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAKgBIgNAAIgagHIAkAAIAJAEIAOANg");
	this.shape_33.setTransform(22.7,-37.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAFAPIghghIAOADIgBAEIALAKIARAHIAJgCIAHAHIgHgBIgKABIgKgDIAGAGIAJAFg");
	this.shape_34.setTransform(23.5,-35.4,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAgJIARgaIAHAEIgVAWIgaAsg");
	this.shape_35.setTransform(-14.7,-28,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgIIACgHIAAAKIADAVg");
	this.shape_36.setTransform(-4.7,-29.3,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AACAXQgFgPAAgLIgBgTIACAWIAHAXg");
	this.shape_37.setTransform(-0.8,-16.5,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgdADIgQgJIACgEQAJAMApAFQAUADATAAIgVABQghAAgVgIg");
	this.shape_38.setTransform(0.3,-12.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgUAVQADgGALgDQAJgDAKgQQAFgJADgJIACAJQAAAJgHAJQgGAJgGABQgJACgKAGIgHAGg");
	this.shape_39.setTransform(-9.9,-14.1,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAMgPIABAEIgYAbIAXgfg");
	this.shape_40.setTransform(-9.1,-18,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AAOgnIACAFQgRA3gOATQAag4ADgXg");
	this.shape_41.setTransform(-7.5,-27.2,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCgKIACgWIADAAQAAAAABAAQAAABAAAAQABAAAAABQAAABAAABQgHAMAAAZQgBANACALQgEgUADgXg");
	this.shape_42.setTransform(-4.9,-28.1,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgPAYIgBgEQgTAEgFAFQgHgFgJgDQgMgDgIADQgHABgIgEQgHgEgDgHIAGADQAEABADADQAFACAIgCQAHgDABgBIAFgPIADAHQAEAHADACQAEABAWAAQAWgBADgEQACgDAEgNQAEgPgBgEIgBgCIAJAGQALAEANgDQAXAFASgGIAHABIgBABQgBAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAPAHQgRAIgNgGIgKABIAQAPQALAJAJAGQghgPgPgJQgJACgXANQgXANgHAHQgCgCgBgEg");
	this.shape_43.setTransform(-2.7,-37.1,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgQA5QgMADgPgGQgTgKgEgTQgDgbAXgFQAVgGAIgEQAGgCARgNQATgMAFgGQAVgQAQAQQgDgEgGgBQgNgFgMAKQgQAOgSAMQgUAMgMADQgPADgGAFQgKAEgBAMQAAAMAIAMQAJAMAKACQANAEAIgDIAQACQAQAAAJgFQARgKAJgHQAPgNABgNQACAOgOANQgSAPgSAGQgGADgMAAQgLAAgFgCg");
	this.shape_44.setTransform(7.1,-50.3,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAAUQgRgQACgQIAFgPQAIgDAKAdQAFAOAEAPQgFAAgMgIg");
	this.shape_45.setTransform(-1.4,-45.6,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAJAFIgngLIAfAGQAHABAXAFIgHABIgPgCg");
	this.shape_46.setTransform(18.3,-38.9,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgDgIIgGgGQAMABAHAcQgGgPgHgIg");
	this.shape_47.setTransform(-1.2,-48,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAPAJQAHgJgEgKQgCgEgHgFIgGgEIAGADQAGAEADAEQAHAJgIALQgEAIgiAIQAggMAEgDg");
	this.shape_48.setTransform(4.2,-49.5,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgCADIACgKQAAAJADAGg");
	this.shape_49.setTransform(-6,-59.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAFgBQgIgDgSgJIgQgJIAXAJQAYAKAGAEQAMAJAKAMQgTgUgOgDg");
	this.shape_50.setTransform(16,-35.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag4APIgOgCIANABQAOABADgBQAHgBAdgNQAHgBASgCIAygMQgrAOgRABQgKAAgQAGQgRAIgEABIgHABIgNgBg");
	this.shape_51.setTransform(-3.5,-5.4,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AAUAiQgogBgUgSQgGgHgEgPQgEgOgBgMIAGAYQALAYAPAHQAPAGAhACQASACANgBQgOADgRAAIgFAAg");
	this.shape_52.setTransform(1.8,-17.2,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AhBAHQARgDAHgDQAIgDAcgBQAagBALACQALACAagFIAMgDQgoALgNgCQgNgCgSABQgVAAgJAEQgJADgUACIgSAAg");
	this.shape_53.setTransform(-5.2,-8,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgEgZQAMAigEANIgFAEQADgMgGgng");
	this.shape_54.setTransform(7.7,-59.5,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgQgHIAHAFQAJAFARACIAAADQgggGgBgJg");
	this.shape_55.setTransform(-26,-41.3,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGABIgPgBQAMABAegCIABABQgHACgKAAIgLgBg");
	this.shape_56.setTransform(-25.8,-38.4,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AANA7IgPgKQgMgKgEgMQgDgMgFgIIgFgFIgLgWIAMAVQAIAIAEAOQADAJAIAKQAEAGALAFQAHAGAGABQADAAAGgDQAHgDADgUQADgTgEgNIgIgPIgOgwIACAEIAEAKIAHAWQAGARADAHQAEAGAAATQgBAUgGANQgGAEgGABIgCAAQgFAAgEgDg");
	this.shape_57.setTransform(-20,-44.6,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgSBIQgIAAgFgJIgEgJQAHAPATAAQAJAAANgDQAHgBAFgGQAIgKAAgRQAAgZgOgzQgEgSgLgGIgJgDQAKgCAIALQAGAIADAMQAKAdADAcQACAcgEANQgDALgUAEIgSACIgKgBg");
	this.shape_58.setTransform(-7,-46.7,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgEgDIgNgIQALgBAZAZIgXgQg");
	this.shape_59.setTransform(20.4,-36.6,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgkgGIAXAGQAbAGAXABIgHAAQgyAAgQgNg");
	this.shape_60.setTransform(17.7,-39.7,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgRAHIgQgEQAYADAqgMQgcANgVAAIgBAAg");
	this.shape_61.setTransform(16.5,-41.8,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("Ai0FjIgBAAIAAAAIgBAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAoiPAQhIQAMg3AHg8QABgIgCgKIgDgSIgCgPQAAgGgDgEQgKgNgFgQIgNgjIgNgeQgJgVAAgFIgGgcIgDgOQAAgDgIgNQgEgGACgHIAGgMIAFgLIABgQQABgWAIgLQAIgMALgJQAVgPAYAJQAJgMAPgGQANgFAQABQAIgcAVgPQAPgKAQACQAOABAQARQANgLAFgBQAGgDAKAAQAIAAAHAFQASAMAEALQABADAAARIAAABIAAAAIADABIAIAGIALAQIAQAZQAWAkAFALQAHARADARQAEAUgFALIgNAQIg5BCQgaAdgFATQgCAHACAUQABAJACAeQACAhgBAHIgIBPQgDAkgCBHIgCCsQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAgAiJlEQgOAIgLARQgHALAAAZIgBAMIgHANIgFAMQgBAEAFAGIAGAJIACAKIAEARIAEAYIANAfQANAbALAkQABAHAHAJIAHAKIACAOIACAQQADAdgDAWIgKA9QgPBPguClIgBABID2AwIACi+QACg1AFg9QADgYABglQABgrgDgQIgDgXQgBgQANgTQAEgIAZgdIA5hDQAIgJAAgPQgBgbgSgfIgagrIgKgRQgGgKgGgFQgHgDgCgDIgBgHIAAgIQAAgNgRgMQgHgFgDAAQgIgBgIACQgFACgNANQgDADgDgEQgSgSgMgBQgOAAgPAMQgRANgGAZQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQgPgBgNAFQgPAGgIAMQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAQgHgEgIAAQgKAAgJAFg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ai1FhQAqiXAPhHQAKguAEgdIAEglQACgNgDgNIgEgRIgCgNQgOgQgCgMQgCgJgPgmQgTgnAAgHIgJgwIgHgLQgEgGAAgDQAAgDAGgMIAGgNQAAgjAJgNQAcgpAjAQQATgaAjADIAJgVQANgWAUgGQANgDAIACQALADAOARQAMgMADgBQAJgGARACQAbARAAALIAAANQAAAGACAAQAGABAIALIAXAlQAVAjAFAKQAHARAEARQAEAWgHAKIhKBVQgeAjACAXQACARgCBMQgBBLgDAmQgDAxgBDCg");
	this.shape_63.setTransform(0,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgMAaIgKi7IACAAIALC6IAgCIg");
	this.shape.setTransform(5.6,20,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgTgNIAGiAIgCCCIAjCZg");
	this.shape_1.setTransform(7.8,17.4,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgOgMIgCh9IAEABIABB6IAcCYg");
	this.shape_2.setTransform(13,18.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgBALIgOgQIARAMIAGAAIAIgSIgDAXg");
	this.shape_3.setTransform(25.4,-19.8,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgEACIgLAIIAEgTIAbATg");
	this.shape_4.setTransform(22.4,-16.4,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgKgBIgSgDIAUgBIALAHIATgFIAHADIgJAAIgUAGg");
	this.shape_5.setTransform(19.9,-11.6,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AABAWIgXgYIgBgaIAEAXIAUAXIAXALg");
	this.shape_6.setTransform(-22.1,-58.9,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgWgEIgggGIAdADIAqAQIAmgCIglAEg");
	this.shape_7.setTransform(11.1,-6.4,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAFAHIgSgHIgIgIIAKAHIATAHIAOADg");
	this.shape_8.setTransform(-14.6,-15.8,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AADAHIgZgIIAGgBIgJgGIAPAHIAkAKg");
	this.shape_9.setTransform(-12.5,-13,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgLAAIgHgDIAlAHg");
	this.shape_10.setTransform(18.3,-2.9,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgIgBIAHAAIAKgOIgJASIAAANg");
	this.shape_11.setTransform(35.5,-41.5,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgRAAIASgEIAYAEIgWABIgKgBIgKACIgHADg");
	this.shape_12.setTransform(-30.9,-49.4,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgDAGIAagTIgLAMIgOAKIgVAFg");
	this.shape_13.setTransform(-24.6,-44.7,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AACgFIAEgBIgLANg");
	this.shape_14.setTransform(-33.7,-40.1,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgMABIARgHIAKACIgEAGIgZAFg");
	this.shape_15.setTransform(-1.6,-16.7,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAIAGIgIgCIgQADIgOgBIAQgGIAHgMIgCAMIANgDIABADIAHAAIAGgGIANgFIgJAIIgEAGIAHABIgCAGIgVADg");
	this.shape_16.setTransform(-7.7,-17.4,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AAIgHIgDAHIAFACIgSAGg");
	this.shape_17.setTransform(-12.7,-18.8,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAAgEIAGgBIgLALg");
	this.shape_18.setTransform(-14.3,-18.9,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgQAIIAEgEIANAAIAQgMIgPARg");
	this.shape_19.setTransform(-13.7,-21.1,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgFACIALgHIgGALg");
	this.shape_20.setTransform(-17.7,-21.4,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgFAhIgYgUIgEgTIANgeIgFAPIABAMIAFALIANAMIAQAGIALgDIANgPIgEAPIACAHIgSANg");
	this.shape_21.setTransform(21,-50.7,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgFAZIACgZIAJggIgEAgIABAhg");
	this.shape_22.setTransform(-9.8,-75.4,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgPAdIAIgQIAGgSIAJgNIAFgEIADgNIAAAKIgHAJIgJARIgFAkg");
	this.shape_23.setTransform(5.1,-70.1,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgSBIIgVgFIgJgIIgGgTIAAgYIAMgQIAFgZIAGABIADAQIgFAbIgLASIgCANIAIAMIAjAHIAKgJIAYhLIAIgJIAIgUIAFgXIADgFIgDAUIgNApIgIASIgDAeIgNAaIgPAKg");
	this.shape_24.setTransform(11.6,-56.6,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AAPBGIhVgrIgeADIACgPIgLgCIgRAIIAEgNIgOgDIggALIADgMIAcgGIACgFIgWgJIgBgEIAcAFIgBgQIgQgLIgNgeIAWAhIAcAWIAfAGIAxgBIAcgLIALgPIgKARIgBAVIAGAVIADADQAEAEAEABIAVAEIANAAIAKgEIAJgPIANgtIgCAZIAHATIAgATIAOgEIALgLIAFgHIADgDIASACIgNAGIgHANIggAXIgmAAIgZANIgLgFIgNADIgDALg");
	this.shape_25.setTransform(3,-50.2,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgcAGIAEgGIAFgGIAFgBIADAGIAIACIAgACIgJAEIgmABg");
	this.shape_26.setTransform(33.1,-50.1,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AADgKIAFgEIgBADIgJAXIgFADg");
	this.shape_27.setTransform(30.5,-53.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AAAABIAHgSIACABIgEANIgNAVg");
	this.shape_28.setTransform(33.4,-58.8,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgJAFIAKgFIAOgNIgKAOIgTANg");
	this.shape_29.setTransform(33.2,-56.7,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AAOguIgJAnIgSA2g");
	this.shape_30.setTransform(-1.5,-23.3,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgDgGIAagEIgtAVg");
	this.shape_31.setTransform(-5.7,-22.5,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AARAIIgaACIgigKIAKAAIAYAHIAagCIAUgOIgKAOIARAFg");
	this.shape_32.setTransform(0.6,-13.9,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgmAgIg1hAIA3A8ICAgCIgvAHg");
	this.shape_33.setTransform(3.1,2.9,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AADAYIgPgcIAFgZIACAWIASAlg");
	this.shape_34.setTransform(-21.9,-61.5,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgSgGIAKgEIAuAAIghAIIgQAAIgaANg");
	this.shape_35.setTransform(-28.8,-47.7,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgJARIAHgHIgMAEIgNgBIgIABIAIgJIALADIAWgKIAOgMIgBgGIARgDIgIAKIghAgIgQAFg");
	this.shape_36.setTransform(-29.8,-45,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgDgLIgagdIAIgEIAXAgIAcA5g");
	this.shape_37.setTransform(18.7,-35.5,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AABgHIAAgNIADAJIgGAgg");
	this.shape_38.setTransform(6.1,-37.3,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AAEAAIACgcIgBAYQgBAOgFATIgEAAIAJgdg");
	this.shape_39.setTransform(1.1,-21,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("Ag6ANIAygEQA0gHAMgPIACAFQgEAHgRAFQgZAKgrAAIgbgBg");
	this.shape_40.setTransform(-0.3,-16,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgEAQQgIgDgIgLQgJgMABgLIADgKIAJAVQANAWAMAEQANAEAFAGQADAEAAACQgPgNgTgDg");
	this.shape_41.setTransform(12.7,-18,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgPgOIACgFIAdAng");
	this.shape_42.setTransform(11.5,-22.9,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgGgFIgOgmIAEgHQADAdAiBIQgMgQgPgog");
	this.shape_43.setTransform(9.6,-34.6,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAFAMQgBghgJgPQAAgFADAAIACABIAFAaQADAfgFAZQACgOAAgQg");
	this.shape_44.setTransform(6.2,-35.8,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgWAMQgegQgLgCQgOAIghAQIgJAEQAUgNAWgWQgHAAgGgCQgKAEgQgDIgNgEIATgIQAEgBgFgCIAJgCQAZAHAbgFQAQAEAOgGQAIgDADgEIgBADQAAAFAFATQAFARADAEQADADAcABQAcABAFgCQAGgCAHgRIAGASQACADAJADQAKADAGgCQAEgEAFgCIAIgEQgEAJgKAFQgIAFgLgBQgIgEgRAFQgLADgJAFQgEgDgOgEIgMgEQgBAJgFAFQgIgKgegRg");
	this.shape_45.setTransform(3.4,-47.2,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgVBIQgWgIgYgUQgLgKgDgNIgBgKQACAQASAQQAKAJAXANQATALAhgHIAHABQAKABAKgDQANgEALgOQALgPgBgQQgBgPgMgGQgJgFgTgFQgOgDgagQQgVgOgWgSQgQgNgQAFIgNAIQAWgWAaAWQAHAGAYARQAWAPAHAEQANAGAYAFQAfAIgGAhQgFAagYALQgTAJgPgEQgHACgPAAQgOAAgHgDg");
	this.shape_46.setTransform(-9.1,-64,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJgBQANglAKAEIAHASQACAWgWATQgJAHgHACIgFABQAFgTAGgRg");
	this.shape_47.setTransform(1.8,-58,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgmAIIAmgIIAngHQgcAJgGABQgUAFgNAAIgKAAg");
	this.shape_48.setTransform(-23.3,-49.4,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgFABQAHgTAKAAQgDACgEAFQgIALgIATQACgJAEgJg");
	this.shape_49.setTransform(1.6,-61,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgWALQgJgPAIgMQAGgHAOgGIgIAFQgJAGgCAFQgGANAKAMQAEAEAqAOQgsgKgGgJg");
	this.shape_50.setTransform(-5.3,-62.9,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAAgJIAEANIgGAGQACgHAAgMg");
	this.shape_51.setTransform(7.6,-75.1,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgnATQAKgLAJgGQAOgKA2gUQgjAVgSAFQgLACgRAPIgOAOg");
	this.shape_52.setTransform(-20.3,-44.6,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AAwATIgcgKQgVgJgMAAQgOgBgggJIgegJIA+APIAQACIARACIAXAJIAWAJQAIABAfgCQgUADgMAAIgKgBg");
	this.shape_53.setTransform(4.5,-6.9,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AhGAoIAngBQAqgDAUgIQAUgIAMgfIAIggQgBAQgEARQgGAUgHAJQgaAYgzAAg");
	this.shape_54.setTransform(-2.4,-21.9,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAqAEQgNgEgagBQgYgBgQADQgNACgogKIgKgDIAMACQAhAHANgDQAOgCAhABQAkACAKADQAOAGAkAFQgqAAgRgHg");
	this.shape_55.setTransform(7,-10,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgFAcQgDgKAIgaIAGgZIgEAcQgCAdACAKg");
	this.shape_56.setTransform(-9.8,-75.7,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgUAGQAggEAKgLQgCALgpAIg");
	this.shape_57.setTransform(33,-52.5,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgbABQABgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAWABQAVABAKgBQgVACgOAAQgMAAgIgBg");
	this.shape_58.setTransform(32.9,-48.8,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgcBPQgIgBgHgGQgJgQAAgaQgBgYAFgIQAFgIAHgWQAIgVABgIQABgGAEgGIADgFQgOA0gFAJIgJATQgFARADAYQAEAZAJAEQAIAEAEgBQAHAAAJgHIAIgFQAIgFAEgFIAHgJQADgFADgKQAGgRAJgLQADgCAKgTIgLAWIgGAHQgHAKgEAQQgFAPgPAMIgTANQgFAEgGAAIgDAAg");
	this.shape_59.setTransform(25.2,-56.7,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgMBaQgYgFgFgOQgFgRADgjQADglANgkQADgPAJgLQAKgNANACQgGAAgGAEQgOAJgGAWIgMAyQgFAZAAAWQgBAWAKALQAIAJAJAAIAcAEQAYAAAIgTQgBAGgDAGQgHALgKABIgOAAQgLAAgLgCg");
	this.shape_60.setTransform(9,-59.3,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgFAAQATgPAJABQgdAQgQANg");
	this.shape_61.setTransform(-25.9,-46.6,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AAqgIQgOALgoAFIgdABQApgDAqgOg");
	this.shape_62.setTransform(-21.7,-50.5,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgqgIIAgAIQAiAHATgCQgGADgOAAQgaAAgngQg");
	this.shape_63.setTransform(-21,-53.2,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AhdIAQgBhugChsQgBhIgGhBIgJhkQgBgIACgqIAEgyQAEgXgEgMQgHgYggglQgbgegVgZIgZgdQgOgRgCgDQgHgOAFgaQAEgWAJgUQAGgOAKgRIATgeIATggQAKgPAFgFIAKgHIADgCIABAAIAAgBQgCgRADgIQAFgPAXgPQAIgFALAAQANAAAIACQAGADAHAGIAJAIQAVgWARgCQAUgCAUANQAcATAJAjQATgBASAHQATAHALAPQAfgLAaATQANAJALARQAKAOACAdIAAAMIABAHQABAFAFAKIAIAPQACAJgEAIQgKAOgBAGIgEARIgHAlQgBAHgLAZIgRAnIgQAsQgFATgNASQgEAFgBAIIgCATIgEAWQgCANABAKQAIBJAQBKQAVBkAyCsIAAABIAAAAQABADgEACIgCAAIlBA/QgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAhjn3QgEABgIAGQgVAPgBARIABAKQAAAGgCADQgBACgEABIgGAEQgIAHgIAMIgNAWQgRAbgQAcQgWAngBAjQgBASAKAMIBJBVQAbAdALARQAQAbgCASIgEAdQgDAVABA3QACAvADAeQAHBYACA6QACBQABChIE4g9IAAgCQg6jMgUhqQgJgsgEghQgEghAEggIACgVQABgMACgFIAJgNQAJgPACgFQANgtAQgjQAPgfACgIIAFgfIAFgWQABgJACgDIAIgMQAFgIgBgEQgBgFgFgLQgGgLgCgGQgBgCAAgNIgCgXQgDgPgFgIQgOgWgSgJQgVgLgWAJQgDACgDgDQgLgPgSgHQgRgHgTABQgBAAgBAAQAAABgBgBQAAAAgBAAQAAgBAAAAQgHgegWgTQgSgPgUABQgKAAgLAIIgQAQQgEAEgEgEIgKgKQgHgGgGgCQgHgCgJAAIgFAAg");
	this.shape_64.setTransform(0,0,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhfDKQgEgxgChfQgChgACgWQACgTgPgZQgHgLgPgTQhRhagNgSQgJgNAGgcQADgVAKgVQAGgOAagsQAZgoAFgHQAEgFAGgFQAFgEADgBQADAAAAgIIAAgQQAAgQAhgUQAWgDAMAHQAEADAPAOQASgVAOgEQAKgDAQAEQAaAIARAcQAIAOADANQAZgCAVALQAPAIAIAMQArgTAkAzQAMARAAAsQAAACAIAPQAHAPAAADQABAEgFAIIgJAOIgMA8QgBAKgXAxQgSAtgEAPQgCAJgIANIgKAOIgDAQIgFAVQgDARACARIAGAvQAFAlAMA6QATBbA2C/IlCA/QgBj3gEg+g");
	this.shape_65.setTransform(0.1,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-86.2,80.7,172.4);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAIATIAIiRIACAAIgICSIgbBrg");
	this.shape.setTransform(-4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AANgIIgChnIAFBlIgfB6g");
	this.shape_1.setTransform(-6.1,13.7,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAJgKIABhhIADAAIgCBiIgXB2g");
	this.shape_2.setTransform(-10.1,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgMgIIAGAOIAGgBIANgIIgMALIgLABg");
	this.shape_3.setTransform(-20,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AAEACIgPAGIAUgPIAEAPg");
	this.shape_4.setTransform(-17.6,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgPAAIgHABIAGgDIAPADIAIgFIAQABIgPADIgIAEg");
	this.shape_5.setTransform(-15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAAAOIAPgSIAEgSIgBAUIgSATIgSAGg");
	this.shape_6.setTransform(17.4,-46.4,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgrAFIAfACIAhgMIAWgDIgZAFIgfAMg");
	this.shape_7.setTransform(-8.7,-5.1,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgFAFIAOgFIAJgGIgGAGIgPAGIgOABg");
	this.shape_8.setTransform(11.5,-12.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAJAAIALgGIgGAFIAEAAIgTAHIgSABg");
	this.shape_9.setTransform(9.8,-10.3,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAIgCIAHgBIgGADIgXADg");
	this.shape_10.setTransform(-14.4,-2.3,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAAADIgGgPIAHALIAGAAIgHANg");
	this.shape_11.setTransform(-27.9,-32.7,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAOACIgIgCIgHABIgRgBIASgDIAOADIAFAEg");
	this.shape_12.setTransform(24.3,-38.9,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AADAHIgMgHIgJgKIAVAOIAPAHg");
	this.shape_13.setTransform(19.4,-35.2,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgEgFIADACIAGAIg");
	this.shape_14.setTransform(26.5,-31.6,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgIABIgCgEIAIgCIAMAFIACAGg");
	this.shape_15.setTransform(1.3,-13.1,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgRAIIgCgFIAGgBIgDgFIgHgFIAKADIAFAFIAFAAIABgCIAKACIgCgJIAGAJIAMAFIgLABIgNgDIgFABIAFAGg");
	this.shape_16.setTransform(6.1,-13.7,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgHABIAEgBIgDgGIAOANg");
	this.shape_17.setTransform(10,-14.8,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgEgEIAEABIAFAIg");
	this.shape_18.setTransform(11.2,-14.9,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgMgGIAMAJIAKAAIADADIgOABg");
	this.shape_19.setTransform(10.8,-16.6,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEgDIAJAEIgFAEg");
	this.shape_20.setTransform(14,-16.9,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgYATIACgFIgEgMIAKAMIAJACIAMgFIALgKIADgIIABgKIgDgMIAKAZIgDAOIgTAQIgPAEg");
	this.shape_21.setTransform(-16.5,-39.9,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgBAAIgDgYIAEAJIADAPIACAUIgGAFg");
	this.shape_22.setTransform(7.8,-59.4,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAAAAIgGgNIgGgHIAAgIIADALIADACIADAEIAEAIIAFANIAHANIgIAGg");
	this.shape_23.setTransform(-3.9,-55.2,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgLAxIgKgUIgDgYIgQguIgCgQIACAEIAEASIAGAQIAGAHIAUA8IAHAGIAcgGIAGgJIgCgKIgJgOIgDgVIACgNIAFgBIAEAUIAJAMIAAATIgEAQIgHAGIgfAFg");
	this.shape_24.setTransform(-9.1,-44.6,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgXAwIgKgCIgIAEIgUgKIgeABIgZgUIgFgJIgLgFIAOgBIAPAQIALADIAZgPIAGgPIgCgUIALAjIAHANIAIADIAJAAIARgDQAFgCAEgFIAEgQIAAgRIgIgNIAJAMIAWAJIAmAAIAYgFIAWgQIASgaIgLAXIgMAJIgBAMIAWgEIgBAEIgRAGIACAFIAWAEIACAKIgZgKIgLADIADAKIgNgGIgJABIABANIgXgDIhDAiIgKACg");
	this.shape_25.setTransform(-2.3,-39.5,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgOAGIgIgEIAZgBIAHgBIACgFIAEAAIAEAFIADAFIgIABg");
	this.shape_26.setTransform(-26.1,-39.4,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AACAJIgHgUIAEAEIAHATg");
	this.shape_27.setTransform(-24,-41.9,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgDgCIgDgKIACgCIABADIADAMIAHAOg");
	this.shape_28.setTransform(-26.3,-46.3,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgDAAIgIgKIALAKIAIAFIAEAGg");
	this.shape_29.setTransform(-26.1,-44.6,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgSgIIAVAEIAPANg");
	this.shape_30.setTransform(4.5,-17.8,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgMAGIgWACIANgEIgHgLIAPALIAUABIAUgFIAIAAIgbAIg");
	this.shape_31.setTransform(-0.4,-11,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AhHAUIBlACIAqgvIgpAyIhBABg");
	this.shape_32.setTransform(-2.4,2.3,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAFgGIABgRIAEAUIgLAWIgIAFg");
	this.shape_33.setTransform(17.3,-48.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAJgBIgMAAIgagHIAlAAIAIAEIAOANg");
	this.shape_34.setTransform(22.7,-37.6,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAEAPIgZgZIgHgIIAPADIgCAEIAMAKIAQAHIAJgCIAHAHIgHgBIgKABIgKgEIAGAGIAJAGg");
	this.shape_35.setTransform(23.5,-35.4,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgBgJIASgZIAHADIgVAXIgaArg");
	this.shape_36.setTransform(-14.7,-28,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AACAXQgEgPgBgKIgBgUIACAWIAHAXg");
	this.shape_37.setTransform(-0.8,-16.6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgdADIgQgJIACgEQAJAMAoAFQAWADASAAIgWABQggAAgVgIg");
	this.shape_38.setTransform(0.3,-12.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgUAVQAEgGAKgDQAQgFALggIACAJQABAJgHAJQgHAJgGABQgJACgKAGIgHAGg");
	this.shape_39.setTransform(-10,-14.2,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAKgOIACAEIgXAZQAHgIAOgVg");
	this.shape_40.setTransform(-8.9,-18.2,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AANgnIADAFQgQA3gPATQAag4ACgXg");
	this.shape_41.setTransform(-7.5,-27.3,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCgKIACgVIADgBQAAAAABAAQAAAAAAABQAAAAAAABQABABgBABQgGAMgBAZIABAYQgDgUADgXg");
	this.shape_42.setTransform(-4.9,-28.2,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgPAYIgBgEQgTAEgFAEQgGgEgKgCQgNgEgHADQgIABgHgEQgHgEgDgHIAGADQAEACADADQAEABAIgCQAIgCABgCIAFgPIADAHQAEAHADABQAEACAWgBQAWgBADgDQACgDAEgNQAEgOgBgFIgBgBIAJAFQALAEANgCQAVAEATgGQAGACACgBIgCABQAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAIAPAGQgRAIgOgGQgDACgDAAIgEAAIARAOQAKAJAKAGQghgPgPgJQgIACgYAMQgXAOgHAHQgCgCgBgEg");
	this.shape_43.setTransform(-2.6,-37.1,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgQA5QgMAEgPgHQgTgIgEgVQgFgaAZgGQAWgGAHgDIAXgPIAYgSQAVgSAQARQgDgEgGgBQgNgEgNAKQgQAOgRALQgVANgLACQgPAEgGAEQgLAFAAALQAAANAIAMQAIALALADQANADAIgCIAQABQAQABAJgFQAogYACgUQACAPgPAMQgTARgQAFQgGACgMAAQgLAAgFgCg");
	this.shape_44.setTransform(7.1,-50.4,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAAUQgRgPACgRIAFgPQAIgDAJAdQAGAOADAPIAAAAQgFAAgLgIg");
	this.shape_45.setTransform(-1.4,-45.7,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAJAFIgMgDIgbgIIA9AMIgHABIgPgCg");
	this.shape_46.setTransform(18.4,-38.9,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgDgJIgFgFQALABAHAcQgHgPgGgJg");
	this.shape_47.setTransform(-1.2,-48.1,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAPAKQAIgKgFgKQgCgEgHgFIgGgEIAGADQAHAEADAEQAGAKgHAKQgFAIgiAIQAhgMADgCg");
	this.shape_48.setTransform(4.2,-49.5,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgCADIACgKQABAJACAGg");
	this.shape_49.setTransform(-6,-59.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAEgBQgIgDgRgJIgQgJIAXAJQAXAKAIAEQALAJAKANQgUgVgOgDg");
	this.shape_50.setTransform(16.1,-35.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag4APIgOgCIAfABQAGgBAegNQAGgBATgCIAxgMQgrAOgRABQgJAAgRAHIgVAIIgIABIgMgBg");
	this.shape_51.setTransform(-3.6,-5.4,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AATAiQgngBgUgTQgGgHgFgPQgEgOAAgMIAHAZQAJAYAPAHQAQAGAhACIAfABQgOAEgRAAIgGgBg");
	this.shape_52.setTransform(1.9,-17.2,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AhEAHQARgDAHgDQAIgCAcgBQAagCALADQAKABAagFIATgEQgtAOgOgDQgNgCgSAAQgVABgKAEQgIADgUACIgSAAg");
	this.shape_53.setTransform(-4.7,-8.1,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgEgaQAMAjgDANIgGAEQADgMgGgog");
	this.shape_54.setTransform(7.7,-59.6,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgQgHIAHAGQAJAEAQACIABADQgggGgBgJg");
	this.shape_55.setTransform(-25.9,-41.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgFABIgQgBQAMABAegCIABACIgOABIgNgBg");
	this.shape_56.setTransform(-25.9,-38.5,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AAMA7QgJgFgFgFQgMgKgEgMQgDgMgFgIIgFgFIgLgWIAMAVQAIALAEALQAEALAGAIQAFAGAKAFQAIAGAFAAIAKgCQAHgDADgUQADgUgEgNIgIgOIgOgwIACAEQADAFABAEIAGAXQAGARAEAGQAEAHAAATQgBAUgGANQgIAFgGAAQgFAAgFgDg");
	this.shape_57.setTransform(-20,-44.6,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgRBIQgIAAgGgJIgEgJQAHAPATAAQAJAAANgEQAHAAAGgHQAIgJgBgRQAAgZgNgzQgFgSgLgGIgJgEQAKgBAIAKQAHAJACALQAKAdADAdQACAbgEAOQgDALgUAEQgJACgKAAIgIgBg");
	this.shape_58.setTransform(-7,-46.7,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgDgDIgOgIQALgBAYAYQgHgGgOgJg");
	this.shape_59.setTransform(20.5,-36.6,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgkgGIAXAGQAbAGAXABIgHAAQgyAAgQgNg");
	this.shape_60.setTransform(17.7,-39.7,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgRAGIgQgDQAYADArgMQgeANgUAAIgBgBg");
	this.shape_61.setTransform(16.5,-41.9,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("ABIGUIidgeIhfgTIgCAAQgBgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAniGARhRQANg8AGg3QABgIgBgLIgDgRIgCgPQgBgFgDgFQgLgPgEgOQgCgKgKgZIgNgeQgJgRgBgJIgFgdIgDgNQgBgFgIgLQgDgGACgHIAFgMIAGgLIAAgQQACgYAHgKQALgOAJgGQATgPAYAJQAKgMAPgGQANgFAQABQAHgcAWgPQAOgKARACQANABASARQAKgKAHgDQAFgCALAAQAJAAAGAFQASALAEAMQACAGgBANIAAABIADACIAIAGQAEADAIANIAPAYQAZAqACAGQAHAPAEASQAEAVgGALIgNAQIg5BCQgZAbgGAUQgDAKADASQACAIABAfIABAoIgHBPQgEAygBA5QgCBMAABfQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBAAgAiiksQgGALgBAaQAAAJgBADIgGANIgGAMQgBAGALANQACADABAHIADARIAFAYQABAHAFAJIAHAPQAOAhAJAeQABAFAIALIAGAKIACANIACARQADAZgDAZQgDAcgHAhQgRBYgsCdIgBABID2AwQAAhvADhPQAAgtAHhFIADg9QABgrgCgRIgDgXQgBgOAMgVQAHgMAWgYIA6hDQAIgLgBgNQAAgbgSgfIgagsIgKgQQgHgKgGgGQgHgDgCgCQgBgCAAgFIAAgIQAAgOgRgLQgGgFgDAAQgKgBgHACQgFACgNAMIgDABIgDgBQgSgTgLAAQgPgBgPAMQgRAPgGAXQAAABAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgjgCgRAYQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBgBQgIgDgIAAQgXAAgUAdg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ai1FgQAriWAOhIQAKguAEgcIAEglQACgOgDgMIgEgRQgBgMgBgBQgNgSgDgKIgRgvQgSgngBgIIgJgvIgHgLQgEgGAAgDIAHgPQAGgLAAgCQAAgjAIgNQAdgoAiAPQAHgKALgGQARgJAUACIAIgVQANgWAVgGQAMgDAIACQALADAOAQQALgLAEgCQAKgFARACQAaAPAAANIAAANQAAAFACABQAHACAHAKQAFAGATAfQAVAiAEALQAIAQADASQAEAWgHAJQgGAJggAkIgkApQgeAiADAYQACARgCBMQgCBKgDAnQgDAxgBDCg");
	this.shape_63.setTransform(0,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgJAUIgIiSIABAAIAJCSIAZBrg");
	this.shape.setTransform(4.4,15.7,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgUgeIAFhlIgBBnIAlCgg");
	this.shape_1.setTransform(6.9,17,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgLgJIgBhiIADABIABBfIAVB4g");
	this.shape_2.setTransform(10.2,14.6,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAAAJIgMgMIANAIIAGABIAGgOIgDARg");
	this.shape_3.setTransform(20,-15.6,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgJAGIADgPIAWAPg");
	this.shape_4.setTransform(17.6,-12.9,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgHgBIgPgCIAQAAIAJAEIAPgDIAFACIgHAAIgPAFg");
	this.shape_5.setTransform(15.7,-9.1,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AABARIgTgSIAAgVIAEATIAPARIASAJg");
	this.shape_6.setTransform(-17.4,-46.4,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgRgCIgZgGIAWADIAiAMIAdgBIgdADg");
	this.shape_7.setTransform(8.7,-5.1,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AADAGIgOgGIgFgGIAIAGIAOAFIAMACg");
	this.shape_8.setTransform(-11.5,-12.5,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AADAFIgUgGIAFgBIgHgEIALAFIAdAIg");
	this.shape_9.setTransform(-9.9,-10.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgIAAIgGgDIAdAHg");
	this.shape_10.setTransform(14.4,-2.3,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgGgBIAGAAIAHgKIgHAOIAAAKg");
	this.shape_11.setTransform(27.9,-32.7,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgNAAIAOgDIASADIgRABIgHgBIgIABIgFADg");
	this.shape_12.setTransform(-24.4,-38.9,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgCAEIAVgOIgJAJIgGADIgGAFIgQAEg");
	this.shape_13.setTransform(-19.4,-35.2,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgJABIANgGIAIACIgDAFIgUADg");
	this.shape_14.setTransform(-1.3,-13.1,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAGAEIgGgBIgNADIgKgBIAMgFIAGgJIgCAJIAKgCIABACIAFAAIAFgFIAKgDIgHAFIgDAFIAGABIgCAFIgRACg");
	this.shape_15.setTransform(-6.1,-13.7,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAGgFIgCAFIAEACIgPAEg");
	this.shape_16.setTransform(-10,-14.8,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AAAgDIAFAAIgJAIg");
	this.shape_17.setTransform(-11.2,-14.9,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgMAGIACgCIALAAIAMgKIgLANg");
	this.shape_18.setTransform(-10.8,-16.6,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEABIAJgFIgFAIg");
	this.shape_19.setTransform(-14,-16.9,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEAaIgTgQIgDgOIAKgYIgDAMIAAAJIAEAIIAKAKIAMAFIAJgCIALgMIgEALIABAGIgNAKg");
	this.shape_20.setTransform(16.5,-39.9,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgEAUIABgUIAIgZIgDAZIAAAag");
	this.shape_21.setTransform(-7.7,-59.4,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgLAXIAGgMIAFgOIAEgIIADgDIADgDIACgLIAAAIIgFAHIgHANIgEAdg");
	this.shape_22.setTransform(3.9,-55.2,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgfA1IgHgGIgEgQIAAgTIAJgMIAEgUIAFABIACANIgEAVIgIAOIgCALIAGAIIAbAGIAIgGIATg8IAHgHIAGgQIAEgSIACgEIgCAQIgDANIgOAhIgCAYIgKAUIgMAJg");
	this.shape_23.setTransform(9.2,-44.6,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AAMA4IhDgjIgXACIABgLIgIgCIgOAGIADgKIgLgDIgZAKIACgKIAWgFIADgDIgSgIIAAgCIAVADIgBgMIgNgJIgKgYIARAaIAXARIAXAGIAogBIAVgJIAIgMIgHANIgBARIAFAQIACADIAHADIARAFIAJgBIAJgDIAGgMIALgjIgCATIAGAQIAZAOIALgDIAJgIIAEgGIACgDIAOACIgLAFIgFAJIgYATIgfAAIgUAKIgIgDIgKABIgCAJg");
	this.shape_24.setTransform(2.3,-39.5,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgWAFIAHgKIAEAAIADAFIAGABIAZABIgIAEIgdAAg");
	this.shape_25.setTransform(26.1,-39.4,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgDAEIAFgLIAEgEIAAADIgHARIgEADg");
	this.shape_26.setTransform(24,-41.9,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AAAABIAFgMIAAgCIACABIgDAKIgKAQg");
	this.shape_27.setTransform(26.3,-46.3,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgGAEIAHgEIALgKIgIALIgPAKg");
	this.shape_28.setTransform(26.1,-44.6,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AALgkIgHAfIgOAqg");
	this.shape_29.setTransform(-1.2,-18.4,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgCgEIAVgEIgkARg");
	this.shape_30.setTransform(-4.5,-17.8,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AANAGIgUACIgbgIIAIAAIAUAFIAUgBIAPgLIgHALIANAEg");
	this.shape_31.setTransform(0.4,-11,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgeAZIgpgyIArAvIBkgCIgkAGg");
	this.shape_32.setTransform(2.4,2.3,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AADATIgNgWIAFgUIABASIALAYIAEAFg");
	this.shape_33.setTransform(-17.3,-48.5,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgPgEIAJgEIAkAAIgaAGIgNABIgUAKg");
	this.shape_34.setTransform(-22.7,-37.6,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgHANIAGgGIgKAEIgKgBIgHABIAHgHIAJACIARgHIALgKIgBgEIAOgDIgHAIIgaAZIgMAEg");
	this.shape_35.setTransform(-23.5,-35.4,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgIIgVgXIAHgDIARAZIAXAsg");
	this.shape_36.setTransform(14.7,-28,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AADAAIACgWIgBAUQAAAJgFAPIgDABg");
	this.shape_37.setTransform(0.8,-16.6,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgtAKIAngDQAogFAKgMIACAEQgDAFgOAEQgUAIggAAIgWgBg");
	this.shape_38.setTransform(-0.3,-12.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgDAMQgGgCgGgJQgHgJAAgJIACgHIAIARQAKAQAJADQARAFgBAIQgLgKgPgDg");
	this.shape_39.setTransform(9.9,-14.2,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgMgKIACgFIAWAfg");
	this.shape_40.setTransform(9,-18.1,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgEgEIgLgdIADgGQACAXAaA4QgJgMgLggg");
	this.shape_41.setTransform(7.5,-27.3,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgEgcQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIACABIADAVQADAXgEAUQAGgqgMgTg");
	this.shape_42.setTransform(4.9,-28.2,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgRAJQgYgMgIgCQgLAGgbANIgJAEQARgKASgSQgFAAgEgCQgJAEgMgCIgKgEIAPgGQAAgBABAAQAAAAAAAAQAAgBgBAAQAAAAgBgBIAHgBQAUAGAVgEQAUAEANgLIgBABQgBAFAEAOQAEAOACADQADACAWABQAVABAFgBQAFgCAFgOIAFAPQABACAHACQAIACAFgBQADgDAEgCIAGgDQgDAHgHAEQgIAEgHgBQgIgDgMAEQgKACgGAFQgDgDgLgDIgKgDQAAAHgEADQgHgHgXgOg");
	this.shape_43.setTransform(2.6,-37.1,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAAA7QgKAAgHgCQgRgHgSgPQgJgIgDgKIgBgIQADATAoAXQAJAGAQgBQAJAAAGgCIAGABQAHAAAIgCQALgCAIgLQAIgMAAgNQAAgMgKgFQgHgEgPgDQgXgFgqgjQgNgLgMAFIgLAGQASgSAUASQAGAFATANIAWAOQAIAEAWAFQAZAGgGAbQgEAUgSAJQgPAGgNgDQgEACgIAAIgFAAg");
	this.shape_44.setTransform(-7.1,-50.4,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHgBQAKgdAIADIAFAPQACAQgRAQQgHAFgGACIgEABQAEgPAFgOg");
	this.shape_45.setTransform(1.3,-45.6,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgeAGIA9gMQgXAIgEAAQgQAFgLAAIgHgBg");
	this.shape_46.setTransform(-18.4,-38.9,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgEAAQAGgNAIgBQgDABgDAFQgGAIgHAPQACgHADgIg");
	this.shape_47.setTransform(1.2,-48,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgQAIQgIgKAHgLQAEgFALgEIgGADQgHAFgCAEQgEAKAHAKQAEACAgALQgigHgEgIg");
	this.shape_48.setTransform(-4.2,-49.5,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAAgHIADAKIgFAFQACgFAAgKg");
	this.shape_49.setTransform(5.9,-59.1,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgfAPQAIgIAIgGQALgHAqgQQgcARgOAEQgIABgNAMIgMALg");
	this.shape_50.setTransform(-16,-35.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAlAPIgVgIQgQgHgKAAQgLgBgZgHIgYgHIAyAMIAZADIAkAOQAFABAZgCQgQADgJAAIgJgBg");
	this.shape_51.setTransform(3.5,-5.4,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("Ag3AfIAfgBQAggCAQgGQAPgHAKgYIAHgYQgBAMgEANQgEAQgGAHQgUASgoABg");
	this.shape_52.setTransform(-1.9,-17.2,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AAfADQgKgDgVgBQgTgBgMACQgKACgggIIgDgBIAEABQAaAFALgCQALgDAaACQAcABAIADQALAEAcAEQghAAgNgFg");
	this.shape_53.setTransform(5.9,-7.8,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgDAWQgCgIAFgUIAFgUIgDAWQgCAWACAJg");
	this.shape_54.setTransform(-7.7,-59.6,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgQAFQAagDAHgJQgBAJggAGg");
	this.shape_55.setTransform(25.9,-41.4,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgVABQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIASABIAYAAQgQACgLAAQgJAAgHgBg");
	this.shape_56.setTransform(25.8,-38.5,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgXA+QgGgBgGgEQgGgNgBgUQAAgTAEgHQADgGAGgRIAHgWIAEgKIACgEIgOAwIgIAOQgEANADAUQADAUAHADQAGADAEAAQAFgBAHgGIAHgDQAGgEACgEQAIgKADgJQAEgNAIgJIAMgVIgLAWIgFAFQgFAIgDAMQgEAMgMAKIgOAKQgFADgFAAIgCAAg");
	this.shape_57.setTransform(20,-44.6,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgJBHQgTgEgEgLQgEgNACgcQADgcAKgeQADgMAGgIQAIgKAKABQgEAAgFAEQgLAGgEASQgOAyAAAaQAAARAIAJQAFAHAHAAIAWAEQATAAAHgPQgEARgNABIgKABIgSgCg");
	this.shape_58.setTransform(7,-46.7,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgDAAQAPgMAGABQgXANgNAKg");
	this.shape_59.setTransform(-20.5,-36.6,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AAhgGQgKAIggAEIgXABQAggCAhgLg");
	this.shape_60.setTransform(-17.1,-39.8,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AghgGIAZAGQAbAFAPgCQgFADgLAAIgBABQgUAAgegNg");
	this.shape_61.setTransform(-16.5,-41.9,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AhKGTIgCisQgBg5gEgyIgHhPQgBgHACghQABgeACgJQACgUgCgHQgGgUgZgcIg6hCIgMgQQgGgMAEgTQADgSAIgQQAFgNAWgjIAPgYIAMgQIAIgGIACgCIABAAIAAgBQAAgQABgDQADgMASgLQAHgFAJAAQAJAAAHACQAHADAKAKQASgRAMgBQAQgCAPAKQAWAOAIAcQAjgBASAXQAZgIATAPQAMAJAHALQAIALABAXIABAQIAFALIAGAMQACAHgDAGQgIAMgBAEIgDAOIgFAcQgBAFgJAVIgNAeIgNAjQgEAPgKAOQgDAEgBAGIgCAPIgDARQgBALABAIQAHA+AMA1QAQBKAnCNQABAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIj7AxIgCABQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAgAhOmLQgEAAgGAFQgQAMgBANIABAIIgBAHIgJAGQgHAFgGAKIgKAQQgSAdgIAPQgRAfgCAbQAAAOAIAKIA6BDIAPARQAJALAFAIQAMAVgBAOIgDAYQgCAQABArQABAlACAYQAGA9ABA1IADC+ID1gwIAAgBQgviogOhNQgHghgDgcQgDgVACgdIACgRIADgNIAGgKQAHgJACgHQALgkAMgbIANgfIAFgYIADgRIACgKIAHgJQAEgGAAgEIgGgMIgGgNIgBgMQgBgagHgLQgLgRgOgHQgQgJgSAHQAAAAgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQgRgYgjACQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQgGgYgRgOQgPgMgOABQgMAAgRATQgDADgDgCQgNgNgFgCQgGgCgHAAIgEABg");
	this.shape_62.setTransform(0,0,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhLCfQgCgngChKQgChMACgRQACgWgegkIhKhWQgHgJAEgWQAEgRAHgRQAFgKAVgjIAXglQAIgLAGgBQADAAgBgTQABgNAagPQARgCAJAGQAEABALALQAOgQAMgDQAHgCANADQAUAGANAWQAGALADAKQAUgCAQAJQALAGAHAKQAjgQAcApQAJANAAAjIAGANQAGAMAAADQAAADgEAGIgGALIgKAwQAAAEgIARIgLAZIgRAvQgCAHgGAKIgIALQgBACgBALIgEARQgDANACANIAFAlQAEAdAJAtQAPBIAqCXIj9AxQgBjCgDgxg");
	this.shape_63.setTransform(0,0,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAAgoIAKhzIgTE3g");
	this.shape.setTransform(-22.2,20.9,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgWAkIApkmIAEABIgoElIAKDfg");
	this.shape_1.setTransform(-11.7,37.1,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgXgbIAvjHIgqDLIAID6g");
	this.shape_2.setTransform(-7,33.8,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgTgXIAijEIAFADIghC/IgDD1g");
	this.shape_3.setTransform(1.3,37.1,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgIAMIgSgdIAZAXIAKAEIASgaIgNAig");
	this.shape_4.setTransform(32.8,-18.1,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgEACIgUAIIANgdIAkAng");
	this.shape_5.setTransform(26,-14.4,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAfAJIgfADIgQgNIgcgLIAhAFIAOAOIAggCIAKAIg");
	this.shape_6.setTransform(21.3,-8.3,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgBAiIgegtIAGgpIABAmIAYAqIAhAZg");
	this.shape_7.setTransform(-30.2,-94.4,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AAYAbIg7glIgvgUIArAPIA+AlIA8AJg");
	this.shape_8.setTransform(6,-3,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AATAHIg4gkIA7AjIAQAYg");
	this.shape_9.setTransform(-27.9,-10.7,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAFANIgbgRIgJgPIAOAOIAbAQIAWAJg");
	this.shape_10.setTransform(-31.2,-25,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AADAMIgkgWIAIAAIgMgLIAVAQIA2Abg");
	this.shape_11.setTransform(-28.8,-19.9,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgRgEIgKgIIA3AZg");
	this.shape_12.setTransform(16.1,5.2,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgPgHIALADIAUgSIgSAaIgFATg");
	this.shape_13.setTransform(55.1,-49.2,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAFADIgQgEIgQgBIgLACIAMgGIAfAAIAiANg");
	this.shape_14.setTransform(-46.4,-82.3,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgHAHIAwgVIgWAOIgaANIghACg");
	this.shape_15.setTransform(-37.9,-73,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAEgHIAHgBIgVARg");
	this.shape_16.setTransform(-53.5,-68.7,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgMAIIAZgQIgVARg");
	this.shape_17.setTransform(-51.4,-62.6,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgMAOIAZgeIgYAhg");
	this.shape_18.setTransform(-48.4,-60.2,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AAcghIgYAiIgfAhg");
	this.shape_19.setTransform(-40.1,-55.2,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgZAYIAzgxIgyA0g");
	this.shape_20.setTransform(-39.6,-49.6,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgOANIAdgaIgaAag");
	this.shape_21.setTransform(-37.5,-41.3,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgYAIIAFgIIAdgHIAPAFIgIAKg");
	this.shape_22.setTransform(-10.8,-22.5,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgCAUIAMgJIgLgFIgcAAIgVgGIAagFIAQgRIgHAUIAWgDIAAAFIALADIALgIIAVgDIgPAIIgJAJIALAFIgFAJg");
	this.shape_23.setTransform(-19.9,-25.2,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AAQgJIgHAJIAHAGIgfAEg");
	this.shape_24.setTransform(-27.6,-29,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AABgHIAKABIgVAOg");
	this.shape_25.setTransform(-29.8,-29.8,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgcAFIAHgFIAWAEIAcgPIgcAXg");
	this.shape_26.setTransform(-28.2,-32.4,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgKAAIAUgHIgLAPg");
	this.shape_27.setTransform(-34.3,-34.6,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgZAfIAzg/IgxBBg");
	this.shape_28.setTransform(-34,-41.9,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgTAzIgggnIABgeIAdgtIgMAXIgBATIACAUIASAWIAWAOIATAAIAZgTIgLAUIAAANIgfAOg");
	this.shape_29.setTransform(35,-68.6,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgSAkIALgmIAQgfIAKgQIgRAwIgIAzg");
	this.shape_30.setTransform(-5.2,-116.1,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgiAoIASgXIAPgaIAMgOIAHgFIAHgEIAKgUIgDAQIgOALIgSAZIgVA1g");
	this.shape_31.setTransform(16.2,-103.2,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("Ag4BiIgfgPIgMgNIgDghIAIglIAWgUIAQgoIAKAEIgBAaIgPAoIgXAZIgIAUIAJAVIA0AWIATgKIA9huIAQgMIASgdIAOgjIAHgHIgLAgIghA8IgSAZIgOAuIgbAlIgdALg");
	this.shape_32.setTransform(23.1,-79.1,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAFCHIh3heIgvgEIAHgYIgQgGIgdAGIAJgRIgUgJIg2AIIAIgSIAugCIAGgIIgggUIAAgGIAqAPIACgYIgUgXIgLgzIAYA6IAlArIAtATIBNAPIAugKIAXgTIgVAWIgIAhIAEAjIAEAGQAFAGAGAEIAfAOIATADIASgDIATgVIAjhDIgMAmIAFAiIAsAnIAWgCIAVgNIALgKIAFgDIAcAHIgXAGIgPARIg4AcIg8gMIgrALIgPgJIgVgBIgIARg");
	this.shape_33.setTransform(6.1,-76.6,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgeAGIgOgFIARgRIAJAAIACALIANAFIAxANIgRAEg");
	this.shape_34.setTransform(53.4,-63.5,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAHgPIAKgFIgCAFIgWAhIgJADg");
	this.shape_35.setTransform(50.6,-69.4,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AAAACIARgbIACADIgKASIgbAeg");
	this.shape_36.setTransform(56.8,-77.2,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgQAGIASgHIAZgPIgTASIgiAQg");
	this.shape_37.setTransform(55.8,-73.9,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AAkhEIgaA7IguBOg");
	this.shape_38.setTransform(-8.5,-32.6,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgDgKIArACIhPATg");
	this.shape_39.setTransform(-15.3,-32.8,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAZAIIgqgDIgxgZIAQACIAkASIApAFIAjgRIgTATIAYAOg");
	this.shape_40.setTransform(-8.4,-15.9,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AA7BGIiCgbIg+h0IBCBvIB5AYIBQAMg");
	this.shape_41.setTransform(-9.2,8.7,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AABAmIgPgyIAOglIgCAiIARBBg");
	this.shape_42.setTransform(-29.2,-98.3,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgbgIIARgFIBIANIg1ADIgagDIgtANg");
	this.shape_43.setTransform(-43.5,-80.2,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgWAVIAOgJIgVADIgTgGIgNgBIAPgLIARAIIAlgIIAbgQIgBgJIAcAAIgQANIg9AoIgcAEg");
	this.shape_44.setTransform(-45.7,-74.6,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgBgUIggg2IAOgDIAaA6IAbBhg");
	this.shape_45.setTransform(26.6,-45.2,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAGgLIAEgUIAAAPIgTAwg");
	this.shape_46.setTransform(7.3,-52.1,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgQAmQAUgkADgHQADgGAHgbIgGAdQgGAUgPAcg");
	this.shape_47.setTransform(-5.4,-27.4,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AhdgEIBPAIQBTAFAYgVIACAJQgJAJgcAEQgPADgSAAQgwAAhGgRg");
	this.shape_48.setTransform(-9.1,-19.6,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAZAtQgQgQgSgHQgMgGgJgUQgKgVAEgTIAHgOIAJAkQANAmASALQAUAKAFAMQADAGgBAEQgFgGgIgIg");
	this.shape_49.setTransform(11.6,-19.9,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgSgbIAEgHIAOAeIATAng");
	this.shape_50.setTransform(11.4,-28.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgHgLIgJg/IAHgKQgCAdANBIIAPBEQgNgbgLhFg");
	this.shape_51.setTransform(12,-46.7,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AACAUQAJg0gKgaQAAgIAEAAQADABACACIAAAqQgFAygOAmQAHgVAEgag");
	this.shape_52.setTransform(7.7,-49.7,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("ACPBMQgNgJgaACQgUABgPAGQgFgGgUgLIgTgJQgDANgKAFQgKgQgpglQgpgjgQgHQgaAKg5APIgTAEQAUgGAWgNQAWgNAQgMQgKgBgIgGQgSAEgXgKIgUgKIAhgHQAGgBgHgEIAQAAQAiASAtACQAYAKAYgFQAMgCAHgFIgCADQgDAJADAfQACAcADAHQAEAHAsAKQArAKAJgBQAKgCAQgaIAEAgQABAFAOAHQAPAIAJgCQAIgEAJgCQAJgBAEgDQgKANgPAFQgIADgIAAQgIAAgHgCg");
	this.shape_53.setTransform(6.5,-68.8,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AAOB9QgLACgWgFQgXgFgMgHQgggTgegmQgOgTgBgVIABgQQgBAZAYAfQAOARAeAbQAQAPAiAFQAQADAOgBIALAFQAPAEARgCQAWgBAUgTQAXgUADgZQADgYgRgPQgLgKgdgMQgVgJgkgiQgegdgcgiQgUgZgbADIgXAIQAYgQAWAIQAPAGAOARQAJAMAgAgQAgAgAJAHIAPALIAnASQAuAVgUA0QgQAngpAJQgNAEgMAAQgQAAgOgHg");
	this.shape_54.setTransform(-8.2,-99.2,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgoAyIAeg2QAfg1APAJIAFAfQgEAignAYQgSAHgMACg");
	this.shape_55.setTransform(6.7,-85.9,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("Ag+gBIAZgBQAcAAAJgCQAcACAjAAQguAGgKAAIgVABQgfAAgRgGg");
	this.shape_56.setTransform(-34.5,-79.6,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgJAAQASgbAQADQgFABgJAHQgRAPgSAbg");
	this.shape_57.setTransform(7.9,-90.4,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AghAGQgLgaASgQQALgKAXgFIgOAGQgPAGgFAHQgHAKgBAJQgBALAHAMQADAEAfATIAgATQhBgegGgQg");
	this.shape_58.setTransform(-3,-94.8,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AAGgOIAAAWIgLAHQAFgKAGgTg");
	this.shape_59.setTransform(21.2,-110.6,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AhDASQASgOAQgGQAagNBbgOQg+AWgdACQgSACgfAQIgbARg");
	this.shape_60.setTransform(-31.3,-71.6,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("ABEAwIgogZQgfgWgTgEQgUgFgwgYIgsgYIBdAsIAYAIQARAFAIAEIAhAVQAaARAGADQANAFAxAGQgzgCgQgHg");
	this.shape_61.setTransform(-4.1,-5.6,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("Ag0AzIhHgUIA9AKQBDAJAhgHQAigGAdguQAPgXAIgWQgGAXgNAaQgQAdgNAMQghATguAAQgWAAgbgEg");
	this.shape_62.setTransform(-10.2,-29,1.676,1.676);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AA+ATQgRgMgpgIQgmgKgaABQgVAAg8gfIgKgGIAOAHQAxAUAVAAQAYAAA0ANQA2AMAOAKQAVANA2AUQhCgNgYgQg");
	this.shape_63.setTransform(0.9,-9.2,1.676,1.676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgSApQgBgRATgmIATglIgOAqQgOAsADARg");
	this.shape_64.setTransform(-5.1,-116.5,1.676,1.676);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgiADQAhADAWgGQALgEAFgEQgEALgiAEIgiACg");
	this.shape_65.setTransform(54.2,-67.5,1.676,1.676);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgrgFQAAAAABgBQABAAAAgBQAAAAABgBQAAAAgBAAIAjAIQAkAJAPABQg7gDgdgMg");
	this.shape_66.setTransform(53.1,-62.1,1.676,1.676);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AhEB5QgNgEgJgLQgIgcAHgpQAGglALgMQAKgLASggQASgdAEgNQAEgIAHgJIAHgIQgmBNgKAOQgNAOgHANQgOAYgCAnQgBAoAMAJQAMAIAGABQALACARgJIAOgEQAPgGAGgGIAOgNQAHgHAHgOQAOgXASgQQAHgFAbggIggAnIgLAJQgNAOgMAWQgMAXgaAOIgjAPQgGADgGAAQgGAAgFgCg");
	this.shape_67.setTransform(43.4,-77.5,1.676,1.676);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AAbCSQgegDgZgKQglgPgCgYQgDgdAPg0QASg5Aeg2QAJgWAQgOQAVgQAUAGQgJgCgMAEQgYAKgPAhQgZA1gJAVQgQAmgHAiQgHAiALAVQAJAPAOAEIArAPQAmAHATgaQgEAIgHAIQgNAOgOAAIgEgBg");
	this.shape_68.setTransform(15.7,-84.9,1.676,1.676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgIAAQAjgTANAEQgzAQgcAQg");
	this.shape_69.setTransform(-39.3,-76.5,1.676,1.676);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgTAEIgzgHQArAEAygBQAcgBATgDQgRAJgnAAQgPAAgSgBg");
	this.shape_70.setTransform(-31.9,-80.5,1.676,1.676);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AAhAWQgqgIg3glIAvAWQA0AVAeACQgFACgIAAQgIAAgLgCg");
	this.shape_71.setTransform(-29.5,-85.4,1.676,1.676);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("ACLMeIoGgBQgGAAABgDQAfifAhi3QAVh4AKheIAQifQACgOAQhBQAPg6AGgTIAJgaQAEgPgCgNQgCgagNgeQgIgSgTghIhYiZIgKgSQgGgLgCgHQgHgYAPgnQAOghAUgdQAOgTAVgYIAmgpIAogrQATgUAKgHQAKgGAIgDIAGgBIAAAAIABgCIADgUQACgMAEgGQAMgWApgQQAPgGARADQATAEAMAHQAKAGAJALIAKAPQAPgLAMgFQAUgKATACQAiACAaAaQATATALAbQAKAZACAZQAeAFAaAQQAbASANAaQAXgEAVAGQAYAIASATQASAVAMAbQAKAYgGAuQAAAKgDAKIgCALIAGAZQAHAVAAAGQACAOgKAKIgNANQgHAIgDAHIgLAaIgXA3QgDALgJANIgQAXQgaAkgMATQgdAugKASQgOAcgaAYQgIAHgDALIgKAcQgEANgJAWQgHATgBARQgKB+ACBtQADCeAXEhIAAABIAAABQABAEgHABIgDABIgCgBgAhlsQQgSAJgJAIQgMAMgEAQIgCAOQgCALgDADQgDACgHACIgKAEQgPAIgQARIgaAdIhFBMQgvA5gNAzQgGAaAMAZIAZAtQAZAsAmBBIAYApQANAYAHATQAQAugIAcIgPAsQgLAggPBXQgMBJgFAwQgOCAgRBlQgaCYgrDhIH6ACIgBgDQgNipgFhVQgIiNAAhxQABhTADgpQAEgyAQg0IALghIAEgNQACgIADgEQAFgGAMgKQASgSAGgLQAihBAkgyIAVgbQALgQAGgNIATgvIANgfIAEgKIAEgJIARgQQALgLAAgHQAAgGgGgVIgHgcQgBgEACgHIACgMQAEgbAAgLQABgXgGgPQgPgmgZgUQgdgYglAIQgHABgCgEQgMgbgbgRQgYgPgfgFQgFAAAAgEQgBgWgIgWQgIgXgOgRQgYgegfgFQgQgCgTAJQgLAGgTAOQgDACgEAAQgDgBgCgDIgNgTQgIgLgJgFQgNgHgTgDIgBAAQgGAAgPAGg");
	this.shape_72.setTransform(0,0,1.676,1.676);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Al5MZQBKmAAMhiQAKhNAaiVQAaiYAKghQAOgsguhRQhnizgJgTQgKgWARgrQANggAVgeQANgTA3g8QAxg2AMgKQAHgIALgFQAKgFAFAAQAEAAACgMQADgSADgHQAFgaA6gUQAiADARAPQAHAFARAaQAigaAXgDQAQgBAaALQAmAVARAxQAIAYABAUQAoAFAdAYQAUARAKAUQBJgPApBaQAMAegOBEIAHAeQAIAZgBAGQgBAHgJAJIgTATIgTAtQgPAlgDAJQgCAIgWAfIggAtQguBJgGAOQgJAUghAdQgCACgCAFIgGAQQgCAHgMAZQgLAbgCAcIgFBKQgEA7ABBdQABCVAaE6g");
	this.shape_73.setTransform(0,-0.1,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-133.9,129,267.8);


(lib.TOP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("Egi2gWVMBFtAAAMAAAAsrMgg8AAAIijAAMgiOAAA");
	this.shape.setTransform(2.2,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB7WWIijAAMgiOAAAMAAAgsrMBFtAAAMAAAAsrg");
	this.shape_1.setTransform(2.2,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("ASsW9IihhPICkAAIAABPgAyDVuIgrgyMAABgrGIArgyMAAAAsqg");
	this.shape_2.setTransform(-105.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TOP, new cjs.Rectangle(-225.3,-147.9,451.7,294.9), null);


(lib.ROKA2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADyiEIA1gHIpNEXg");
	this.shape.setTransform(-119.5,30.6,1.666,1.666,-65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#201F1F").s().p("AlPCDIJpktIA2AgIqbE0g");
	this.shape_1.setTransform(-114.8,25.6,1.666,1.666,-65.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkdBUII7j4IgxAzIAvAJIn9ENg");
	this.shape_2.setTransform(-128.5,39.1,1.666,1.666,-65.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#201F1F").s().p("AlNBOIIyj3IBqA8IpaEXg");
	this.shape_3.setTransform(-125.1,33.2,1.666,1.666,-65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AAGh8IgBBTIgKCmg");
	this.shape_4.setTransform(-42.4,0.2,1.667,1.667,-51.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAOAkIgGkUIADAAIAIEUIgkDNg");
	this.shape_5.setTransform(-39.6,17.4,1.667,1.667,-51.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAOgTIgRjAIAXC9IgnDqg");
	this.shape_6.setTransform(-44.1,17.4,1.667,1.667,-51.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAJgWIgLi0IAFgCIALC5IgbDgg");
	this.shape_7.setTransform(-47.3,24.9,1.667,1.667,-51.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgYgQIAOAaIAKgCIAZgTIgUAZIgWADg");
	this.shape_8.setTransform(-104.8,9.3,1.667,1.667,-51.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAPgPIAJAcIgSgKIgdANg");
	this.shape_9.setTransform(-98.1,8,1.667,1.667,-51.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgdAEIgNABIAKgFIAdAEIAQgLIAegCIgbAIIgQALg");
	this.shape_10.setTransform(-90.5,9,1.667,1.667,-51.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AAAAaIAbgkIAFgjIABAnIghAmIggAOg");
	this.shape_11.setTransform(-113,-81.3,1.667,1.667,-51.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AhPASIA4gBIA9gcIAqgJIguANIg6Acg");
	this.shape_12.setTransform(-77,2.4,1.667,1.667,-51.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgUADIA7gZIg4AaIgVATg");
	this.shape_13.setTransform(-59.8,-24.8,1.667,1.667,-51.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgJAJIAagMIAPgLIgLANIgaAMIgaAEg");
	this.shape_14.setTransform(-67,-36.4,1.667,1.667,-51.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAQgDIAVgMIgMAJIAIABIgkAQIgiAFg");
	this.shape_15.setTransform(-65.2,-31.5,1.667,1.667,-51.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAbgIIgJAHIgsAKg");
	this.shape_16.setTransform(-78.5,14.4,1.667,1.667,-51.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AABAEIgOgZIAQATIALgCIgLAbg");
	this.shape_17.setTransform(-139.6,3.5,1.667,1.667,-51.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAaACIgPgBIgPADIgfAAIAhgJIAcAFIAKAGg");
	this.shape_18.setTransform(-94.4,-84.3,1.667,1.667,-51.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AAGAMIgXgMIgSgRIApAZIAfAKg");
	this.shape_19.setTransform(-93.7,-72.5,1.667,1.667,-51.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgJgIIAHABIAMAQg");
	this.shape_20.setTransform(-80.6,-79.7,1.667,1.667,-51.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgKgJIAVASIgDABg");
	this.shape_21.setTransform(-78.1,-74.4,1.667,1.667,-51.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgJgQIATAeIgBADg");
	this.shape_22.setTransform(-78.5,-70.8,1.667,1.667,-51.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgDAAIgTgiIAsBEg");
	this.shape_23.setTransform(-80.7,-62.2,1.667,1.667,-51.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgUgbIApA0IgBACg");
	this.shape_24.setTransform(-77.4,-58.1,1.667,1.667,-51.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AAKAOIgWgbIAZAbg");
	this.shape_25.setTransform(-73.4,-51.3,1.667,1.667,-51.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgPAFIgGgJIAOgEIAZAJIAFAIg");
	this.shape_26.setTransform(-78.7,-21.4,1.667,1.667,-51.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AggATIgDgJIALgEIgIgIIgNgKIAUAFIAJAIIAKgBIABgEIAUAEIgEgTIAMASIAYAHIgUADIgagDIgKADIAJALg");
	this.shape_27.setTransform(-74.6,-29.3,1.667,1.667,-51.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgOAEIAHgEIgGgKIAbAVg");
	this.shape_28.setTransform(-72,-36.6,1.667,1.667,-51.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgJgHIAJAAIAKAPg");
	this.shape_29.setTransform(-70.9,-38.5,1.667,1.667,-51.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgZgLIAYAQIAVgBIAGAGIgbACg");
	this.shape_30.setTransform(-73.9,-39.6,1.667,1.667,-51.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgIgHIASAIIgJAHg");
	this.shape_31.setTransform(-71.2,-44.9,1.667,1.667,-51.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgUggIApA/IgDACg");
	this.shape_32.setTransform(-76.1,-49.4,1.667,1.667,-51.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgqAoIACgLIgJgVIAVAVIARACIAXgLIATgTIAEgRIAAgSIgHgWIAWAsIgDAcIgiAgIgbAJg");
	this.shape_33.setTransform(-139,-22,1.667,1.667,-51.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgCgBIgKguIAIAQIALAeIAGAlIgNAMg");
	this.shape_34.setTransform(-143.4,-79.8,1.667,1.667,-51.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AABAAIgPgYIgLgMIgCgQIAHAUIAHAEIAFAGIAKAOIALAaIAPAXIgOALg");
	this.shape_35.setTransform(-149.2,-57.3,1.667,1.667,-51.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgMBcIgWgmIgIgrIgPgZIgYg8IgGgeIAFAIIAKAhIAOAdIANALIAtBtIAQAMIAzgPIAKgSIgFgTIgTgaIgJgoIACgXIAJgCIALAmIASAUIAEAkIgHAdIgMANIg5AOg");
	this.shape_36.setTransform(-138.1,-37.7,1.667,1.667,-51.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgmBnIgTgCIgQAHIgmgPIg5AFIgxggIgLgQIgVgIIAbgFIAEAEIAJAKIASAOIAUAFIAtggIAIgfIgGgjIAZBAIAPAWIAQAFIASgBIAegKQAKgDAGgKIAHgfIgDghIgSgWIASAUIArAOIBJgFIArgNIAogjIAcg0IgQAuIgVATIAAAXIAogKIgBAFIggAQIAFAIIAqAGIAGARIgxgMIgUAFIAHASIgagJIgQAEIAFAXIgsgCIh5BLIgSAFg");
	this.shape_37.setTransform(-124.2,-44.5,1.667,1.667,-51.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgqAHIAvgGIAMgEIAEgJIAHAAIAPASIgPAEIg3ADg");
	this.shape_38.setTransform(-148.1,-6.7,1.667,1.667,-51.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AAFARIgQghIgCgEIAJAGIASAjg");
	this.shape_39.setTransform(-149.9,-12.5,1.667,1.667,-51.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgHgEIgIgSIAEgDIALAbIAQAYg");
	this.shape_40.setTransform(-159,-13.6,1.667,1.667,-51.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgHABIgPgTIAWARIAPAIIAJAMg");
	this.shape_41.setTransform(-156.2,-12.1,1.667,1.667,-51.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgHgJIgSg6IA0CHg");
	this.shape_42.setTransform(-86.9,-26.7,1.667,1.667,-51.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgjgNIAoADIAfAYg");
	this.shape_43.setTransform(-82.4,-31.1,1.667,1.667,-51.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgoAGIgPgVIAfAUIAmgBIAjgMIAPAAIgwARIgngBIgoAIg");
	this.shape_44.setTransform(-76.5,-15.9,1.667,1.667,-51.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AiDA0IC+gMIBJhfIhGBkIh7ALg");
	this.shape_45.setTransform(-59.2,0.4,1.667,1.667,-51.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AAHgMIAAghIAKAlIgTAsIgOAKg");
	this.shape_46.setTransform(-116.3,-83.3,1.667,1.667,-51.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AASgCIgZACIgxgJIBEgFIAQAGIAdAXg");
	this.shape_47.setTransform(-94.3,-80.4,1.667,1.667,-51.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAMAaIg1gsIgOgOIAbAEIgCAIIAXARIAhAMIARgGIANAMIgMAAIgTAEIgTgGIAMAKIASAKg");
	this.shape_48.setTransform(-89.7,-78.9,1.667,1.667,-51.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgDgRIAdgzIANAEIgjAvIgqBWg");
	this.shape_49.setTransform(-118.4,-12.2,1.667,1.667,-51.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgGgQIADgOIABATIAJApg");
	this.shape_50.setTransform(-110.1,-29.1,1.667,1.667,-51.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAHAqQgMgbgCgUIgEgkIAHApQACAGAPAkg");
	this.shape_51.setTransform(-86.2,-21.7,1.667,1.667,-51.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("Ag2AJQgQgFgKgFIgHgGIADgIQAUAWBNAEQAoACAjgCQgrAFgiAAQgmAAgbgHg");
	this.shape_52.setTransform(-78.6,-19,1.667,1.667,-51.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AglAqQAHgKATgIQASgIAQghIAMghIAFAOQACARgMATQgKASgMAEQgRAFgRANIgNALg");
	this.shape_53.setTransform(-92,-5.1,1.667,1.667,-51.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AARgcIADAHIgnAyQALgPAZgqg");
	this.shape_54.setTransform(-97.3,-10.9,1.667,1.667,-51.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AAThMIAGAKIgQA6QgRA+gQAXQAphuACgrg");
	this.shape_55.setTransform(-109.7,-22.6,1.667,1.667,-51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgFgUIAEgoIADgBQAFgBgBAJQgLAWADAxQACAYADAVQgKgmACgtg");
	this.shape_56.setTransform(-108.7,-27.3,1.667,1.667,-51.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AhmAxQgYgFgNAHQgPADgOgGQgOgHgHgMQADACAJACQAIADAHAFQAIACAPgFQAMgGADgEQACgEAEgZIAHANQAJANAGADQAJACAogFQAqgGADgFQAEgGAGgaQAGgbgCgJIgCgDIARAIQAWAHAYgHQApAEAigNQALACADgBIgDACQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAIAdAKQgIAEgLADQgWAHgRgGQgFACgGACIgHAAIAiAbQAVAPATAJQhAgXgegQQgQAEgrAcQgpAegMAOQgEgDgDgIIgDgHQgiALgIAIQgNgGgTgEg");
	this.shape_57.setTransform(-120,-40.4,1.667,1.667,-51.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AhKBuQgkgOgLglQgNgzAtgNIAmgNIAPgJQAJgFAhgaQAhgbAKgKQAOgOAPgEQAVgGATAQQgHgGgLgCQgZgFgWAVQgdAcgfAYQglAbgUAGQgcAIgLAIQgSANAAAWQABAXASAVQARAUAVAEQAZAEAPgGIAcABQAggBAQgMQAfgWAOgOQAagaACgYIgBAPQgDAUgQAQQgfAgggAOQgLAFgWACQgVADgKgEQgKAEgLAAQgPAAgQgGg");
	this.shape_58.setTransform(-130.5,-69.8,1.667,1.667,-51.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAAmQgigaABggIAIgcQAPgHAXA0QAMAaAJAbIgCAAQgJAAgXgMg");
	this.shape_59.setTransform(-131.7,-51.7,1.667,1.667,-51.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AASAIIgYgEIgdgFIgXgGIA7AGQAOACAsAFQgJACgNAAIgTAAg");
	this.shape_60.setTransform(-100.5,-74.7,1.667,1.667,-51.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgHgQIgNgJQAQgBANAaQAIANAEAOQgOgcgOgPg");
	this.shape_61.setTransform(-135.3,-54.2,1.667,1.667,-51.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AAcAOQAIgLAAgJQAAgIgGgKQgDgHgOgIIgNgGIAMAEQANAGAGAHQAOAQgMAXQgIAPg/AUQA8gbAGgFg");
	this.shape_62.setTransform(-131.6,-64.1,1.667,1.667,-51.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgFAHIAEgVQACATAEAKg");
	this.shape_63.setTransform(-157.4,-58.7,1.667,1.667,-51.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AAIgEQgQgEgjgOIgegNIAsANQAuAOAOAIQAXAOAUAXQgnglgbgEg");
	this.shape_64.setTransform(-97.2,-67.2,1.667,1.667,-51.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AhoAmIgagBIAZgBQAZAAAIgCQAGgCAagNIAhgRQAMgEAjgGIBbgeQhPAggfAFQgSACgfAQIgnATQgIADgSAAIgLgBg");
	this.shape_65.setTransform(-72.1,-5.9,1.667,1.667,-51.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AhKAfQgLgMgLgdQgKgZgDgXIAQAtQAWAtAfAKQAeAJA+gBQAgAAAagDQgeAJgmACIgSABQg+AAgkgcg");
	this.shape_66.setTransform(-84.1,-26.2,1.667,1.667,-51.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("Ah5AWQAggIAMgHQAPgHAzgGQAygGAVACQAUACAvgOIAYgHIgUAIQg7AVgTgCQgYgDgkAFQgnADgRAJQgPAIglAGIgjAEg");
	this.shape_67.setTransform(-77.6,-5.8,1.667,1.667,-51.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgMgwIAOAkQANAlgCAPIgMAJQAGgYgThJg");
	this.shape_68.setTransform(-143.7,-80,1.667,1.667,-51.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AABAHQgfgHgCgLIAOAJQATAIAfABIABAFQgQgBgQgEg");
	this.shape_69.setTransform(-151,-8.9,1.667,1.667,-51.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgnAEQAXAAA1gIIADAEQgSAFghAAg");
	this.shape_70.setTransform(-146.5,-6.2,1.667,1.667,-51.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AAgBwQgSgJgNgIQgWgQgJgWQgIgWgLgOIgJgKIgZgoIALASQAMARAEAEQAPAPAKAYQAGAOAFAHIAMANQAIALAXAIQAOAKALgBQAFAAAMgGQAIgEAEgOQACgIACgSQACglgKgYIgQgaQgFgJgPgpIgPgnIAGAHQAGAJACAJQADAMANAdQAOAgAHAKQAJAMACAkQACAmgKAZQgKAJgMADIgHAAQgIAAgHgEg");
	this.shape_71.setTransform(-150.2,-21.9,1.667,1.667,-51.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("Ag4B5IgJgQQAPAbAkgDQARgBAYgIQANgCAKgOQANgSgDggQgDgggKgkQgHgXgRgyQgLgggVgLIgTgFQAUgEAQASQANAOAHAWQAXA1AKA2QAIAzgGAaQgEAVgkAKQgYAHgdAAQgPAAgLgQg");
	this.shape_72.setTransform(-138.5,-44.6,1.667,1.667,-51.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgIgGIgbgNQANgCAeAVQAPAJANALQgPgLgdgPg");
	this.shape_73.setTransform(-94.8,-75.7,1.667,1.667,-51.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AANAJQg9gCgVgPIAsAIQA0AIArgBQgWACgZAAIgKAAg");
	this.shape_74.setTransform(-102.4,-74.6,1.667,1.667,-51.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("Ag9ANQAbABAzgOQAZgHAVgJQg3AdgoAEg");
	this.shape_75.setTransform(-107.3,-75.2,1.667,1.667,-51.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AigIhQjUj+hlhqQiAiFiJh1QgUgSgdgOIhfguQgPgHgSAAQg1ACgwgQQgkgNhNgQIhmgUIgqgGQgYgGgQgIQgVgLg/gZIgpgQQgMgGgPgBIgdgBQgVAAgPgSQgFgGgQgeQgMgYgJgKIgPgLIgYgRQg6gugOglQgRgtgCgqQgCgoAUgjQAQgdAdgVQgPgtAMgwQAKgtAdgnQgagegQgmQgQgqAAgpQgBg4AkgqQATgWAhgMQASgHAfgFIgFgbQgDgXAFgRQAFgTASgbQAOgVAYgLQA8gaAnALQATAFAiAbIACABIAJgGQAJgEAVgFQANgCAvAAIBcAEIBWAEQAyADAlAGQAzAKA1AXQA7AaATAiQAHAMAMAwIBGEKQAOA3AMAfQARAuAaAfQATAXA1AZQAZAOBTAyQBZA1ARAPIDACeQB3BgCUBqQBDAwD6DCQDuC6BOA2QADABAAADQAAADBrBSIM4KpIg2gLQwCtIjVikQkSjThDgwQiHhjiUh6Qg6gvhdhEQhxhRgvgXQgtgWgUgLQgpgXgehEQgRgmgbhmIhHkLQgLgngmgXQhGgshxgKQg9gGhigEIg9gDQglgBgYAGIgQAHQgJAGgGAAQgIAAgNgJIgSgOQglgXg7AVQgZAKgGAHQgTAagGATQgEAQADAUIAGAlQACAFgEAEQgEAFgFAAQgmAGgRAGQggALgOAUQgeAnAGA7QAGBGA0A5QAEAEgFAGQgeAmgKAtQgLAwAQAqQACAEgDAEQgDADgDACQgxAggGA6QgGAyAZA7QAQAjBCAxIAPAKQAJAHAEAGIAXAnQAQAdAHAHQAHAIAZAAIAjAAQADAAAaALIAxAUIBIAgQAVAIAfAFIA0AIQBgAQBqAhQAVAHAmAAIAkAAQANABAaARIAvAZQBKAnA7A0QBBA3BLBNQB2B3DnEPQB+CVDOD5IGZHFQgkAAgEABQo3qVhxiGg");
	this.shape_76.setTransform(0,33.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AnLCdQhlhphEg8IhYhNQgggcgpgTIgzgTIgXgMQgJgEgFAAQgPACgbgBQgmgCgUgHQgYgKiAgdIhUgQQg5gKgNgHQgMgHg5gYIhIgdIgogBQgWAAgIgGQgHgGgTgkQgUglgFgDQhbhAgQgrQg4iRBkg/QgNghAEgpQAGg6AngxIgmg8QgjhIAUhAQARgpATgPQAcgXBDgJQgJgwACgNQADgiAigpQAdgPAcgGQArgKAUANQAJAEAZARQAPALAEgEQAFgGARgEQASgHAQAAQAYgBBxAGQB+AHAkAGQA4ALAxAVQBCAdAMAjQASAxBLEkQAjCLBCAkQAvAZDECNQC+CIBfBLQB4BeYxTpIxLErQtqv4igilg");
	this.shape_77.setTransform(-2,34.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Al/CMILQloIAvBCIrEF3g");
	this.shape_78.setTransform(-129.6,-97.8,1.666,1.666,-61.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AixBTIFji0IgDAYIlTCrg");
	this.shape_79.setTransform(-121.5,-129.1,1.666,1.666,-61.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("Ai2BVIFki5IAJAHIliDCg");
	this.shape_80.setTransform(-136.9,-129.4,1.666,1.666,-61.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#201F1F").s().p("Ai/BYIF+jLIABAwIllC3g");
	this.shape_81.setTransform(-119.7,-130.9,1.666,1.666,-61.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ROKA2, new cjs.Rectangle(-170.3,-168,340.7,336.2), null);


(lib.LKJS1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("ATiPkIAAADI0tACAhOPnIyTAAIAA/PMAnCAAA");
	this.shape.setTransform(-2.2,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA/PgIiOAAIAAAHIySAAIAA/PMAnCAAAIAAfMIABAAIAAADI0tACg");
	this.shape_1.setTransform(-2.2,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AqsPUIAAgIICPAAIAAAIIAFArIiYANgAKEPDIAA/MIAAgCIApApIAFdtIgtA4g");
	this.shape_2.setTransform(58.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LKJS1, new cjs.Rectangle(-128.2,-103.7,255.5,208.1), null);


(lib.hgf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CACACA"],[0,0.776],30.5,-27.7,30.5,144.3).s().p("AS+UIQC2gJBpgNUgP0gBAgkrAAAIhMAAQvQgwqRhMIgbgEQgmgDggAIQ6NC6gKjJIAA0NQA/iyCtg7QCog7CSBUQAnAWAqAlQAbAXAAgGQgGiAA4hvQBBh9B5g5QDyhvDZCDQCnBlBVC4QADAHAIgXQAPgqAJgWQAxhlBZgRQBsgSBHBVQARATAUAkQANAVACgHQBBjmCZhhQArgbA3gSQApgNAAgEQgEhvA2hoQBBh+BygMQCpgSBcCuQAZAwAXBJQARA2AFgCQA7gWBOAkQBXAoAnBXQA4B/giCVIgZBaQgLAkAHAFQBIAyAZBwQAZB0gmCJQgFAVAkgKQAZgHBRgYQDBg1CVA6QDUBRBjD+QAcBKARBWQAMA9ABgCQBCixB8AHQAjABAqASQAdAOgBgDQgnh0AyiiQA2ixB8hEQCBhHCXAoQAhAIA4AXQAhAMABgHQANiUBgguQBlgvBmBzQgFg/APhQQAeigB0hEQBig6B5BDQB0BAAkB1QAEANBKgeQBcgUBSBNQBBA+AVBrQAVBrglBTQBUguA5BGQA1BEgXBjQBfg1BsAUQBnAUBWBQQBYBSApB5QAsCDgWCSQAAACAnANQAvATAjAdQBvBdgnC3QgBAGAggTQAvgbApAJQAyALAaA9QANAdACAKQAKi9BxikQBmiVB0goQCtg9CxCHQAwAkA5A8QAoAqADgEQA4hKBQgQQBMgQBPApQCyBcAtD+QABAHAPgPQAggfAJgHQBGg7BAAYQBRAdAnBbQAUAtAOApQAEABXKBAQBqAECGAKg");
	this.shape.setTransform(-30.5,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgf1, new cjs.Rectangle(-565.7,-135.6,1070.4,257.6), null);


(lib.hg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CACACA","#CACACA"],[0,0.42,1],0,-43.4,0,165.6).s().p("A77OMQBZgoAOgxQguAFg/gKQh9gShThIQhUhKgHhqQgHhvBVhGQBthZCMAJQgYgRgJgaQgIgaAJgYQAVg6BOAHQgQhIAYhBQAbhFBCgoQA6giBEgHQBIgHA6AbQgLhlAhhXQAmhmBZg5QB6hOCLAuQAhALAwAYQAeAQABgHQANiFBegpQBigrBlBnQgGg5APhIQAeiSBxg7QBug6CHBHQB/BCAxB5IBAgJQBMABA3ArQBCA0ARBVQAQBTglBNQBTgqA2BBQA0A9gWBZQBdgwBqATQBlARBUBJQBWBKAoBsQAsB2gWCEQAAACAwAEQA6AIAmAVQCABFhTDKIAsgMQA1gKAuAIQBdARATBPQAQBEgqBIQgOAXFOAfIFUAfQm3AM1rALMghdAAPQApgKAtgUg");
	this.shape.setTransform(0,0,1.563,1.563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hg1, new cjs.Rectangle(-327.3,-146.7,654.7,293.4), null);


(lib.gf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CACACA"],[0,0.867],0,-22,0,79.9).s().p("AkQNZQ2EgLnAgNIFdgjQFXghgUgSQhKhEAShuQARhlBCgoQBlg8BtAuQA2AYAiAjQhKhYAohOQAkhEBFgEQAogDAyARQAZAIAPAHQhliXAAh/QAAhwBMhLQBGhFBrgOQBtgNBhAxQgEhAAqglQAngiA+gBQA+gCA2AgQA7AjAYA9IAPgOQASgRAWgJQBFgfBIAzQh4jMAkirQAkiqClglQC0gqCXByQBMA4AqA+QBmhrBlAsQBgAqAMCIQABAHAdgSQAsgcAjgOQCKg3CKBKQBjA2AVCHQAVCOhXB6QBbhLBagOQBQgMA7AlQA5AjAPBBQAQBFgmBHQBdgyA+BKQAZAfABAnQACAogdAfQCPgJBwBbQBXBHgHBxQgGBshXBLQhUBJiAATIhvAFQAOAyBbApQAtAUAqAKQ19gJsIgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gf2, new cjs.Rectangle(-213.3,-87.2,426.7,174.5), null);


(lib.fons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CACACA","#F2F2F2"],[0,1],0.1,94,-0.1,-422.1).s().p("EhbAA6nMAAAh1NMC2BAAAMAAAB1Ng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fons, new cjs.Rectangle(-582.4,-375.1,1165,750.2), null);


(lib.city = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#201F1F").s().p("AxUMgIAAzdIAlglIAAh4IAYh7IAAhKIAFAAIAABDIAaCCIAAByIAlAcIAAGPIAeAAIAAk9IAcAAIAAgrIBRAAIAAgxIAEAAIAAAxIAFAAIAAhBIAEAAIAABBIATAAIAAArIAbAAIAAB5IATAAIAAlwIAMAAIAAgTIASAAIAAgiIAPAAIAAgiIALAAIAAhAIAFAAIAABAIAEAAIAAgzIAFAAIAAAzIA0AAIAAAiIAPAAIAAAiIATAAIAAATIAMAAIAAFwIASAAIAAgyIAYAAIAAg1IAeAAIAAgQIgIAAIAAgnIAyAAIAAAnIgJAAIAAAQIAjAAIAAA1IASAAIAAAyIATAAIAABQIAJAAIAAkMIAkglIAAh4IAZh7IAAhKIAEAAIAABDIAaCCIAAA6IBTAAIAAhkIAFAAIAABkIAGAAIAAifIAFAAIAACfIAVAAIAAB7IAXAAIAAgcIBThnIAAhSIAEAAIAABNIAIgKIAAE2IAQAAIAAlwIAMAAIAAgTIATAAIAAgiIAPAAIAAgiIALAAIAAhAIAEAAIAABAIAEAAIAAgzIAFAAIAAAzIAzAAIAAAiIAQAAIAAAiIASAAIAAATIAMAAIAADVIBBAAIAAgDIAyAAIAAAnIgJAAIAAAQIAjAAIAAAzIAXAAIAAiaIAZAAIAAhDIAdAAIAAgvIAFAAIAAAvIAYAAIAAgvIAFAAIAAAvIARAAIAAgOIBcAAIAAhkIAFAAIAABkIAGAAIAAifIAEAAIAACfIAWAAIAAD4IAWAAIAAiZIBThnIAAhSIAFAAIAABNIAIgKIAAF/IANAAIAAgqIAdAAIAAgNIgHAAIAAgfIAyAAIAAAfIgJAAIAAANIAjAAIAAAqIASAAIAAh9IAXAAIAAgfIgSAAIAAhIIB1AAIAABIIgVAAIAAAfIAnAAIAAgLIgIAAIAAggIAzAAIAAAgIgJAAIAAALIAtAAIAAiaIAZAAIAAhDIAdAAIAAgvIAEAAIAAAvIAZAAIAAgvIAFAAIAAAvIAiAAIAABDIATAAIAATvgAKbjiIAYAAIAAgNIgYAAgAN9k1IAZAAIAAgLIgZAAgAMPk1IA4AAIAAgfIg4AAgABok1IAkAAIAAgfIgkAAgAC1loIAYAAIAAgQIgYAAgACsloIAEAAIAAgQIgEAAgAoGloIAZAAIAAgQIgZAAg");
	this.shape.setTransform(437.8,0,1.378,1.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#201F1F").s().p("AxUMgIAAzdIAlglIAAh4IAYh7IAAhKIAFAAIAABDIAaCCIAAByIAlAcIAAGPIAeAAIAAk9IAcAAIAAgrIBRAAIAAgxIAEAAIAAAxIAFAAIAAhBIAEAAIAABBIATAAIAAArIAbAAIAAB5IATAAIAAlwIAMAAIAAgTIASAAIAAgiIAQAAIAAgiIAKAAIAAhAIAFAAIAABAIAEAAIAAgzIAFAAIAAAzIA0AAIAAAiIAPAAIAAAiIATAAIAAATIAMAAIAAFwIASAAIAAgyIAYAAIAAg1IAeAAIAAgQIgIAAIAAgnIAyAAIAAAnIgJAAIAAAQIAjAAIAAA1IASAAIAAAyIATAAIAABQIAJAAIAAkMIAkglIAAh4IAZh7IAAhKIAFAAIAABDIAaCCIAAA6IBTAAIAAhkIAEAAIAABkIAGAAIAAifIAFAAIAACfIAVAAIAAB7IAXAAIAAgcIBThnIAAhSIAEAAIAABNIAIgKIAAE2IAQAAIAAlwIAMAAIAAgTIATAAIAAgiIAPAAIAAgiIALAAIAAhAIAEAAIAABAIAEAAIAAgzIAFAAIAAAzIAzAAIAAAiIAQAAIAAAiIASAAIAAATIAMAAIAADVIBBAAIAAgDIAyAAIAAAnIgJAAIAAAQIAjAAIAAAzIAYAAIAAiaIAYAAIAAhDIAdAAIAAgvIAFAAIAAAvIAYAAIAAgvIAFAAIAAAvIARAAIAAgOIBcAAIAAhkIAFAAIAABkIAGAAIAAifIAEAAIAACfIAWAAIAAD4IAWAAIAAiZIBThnIAAhSIAFAAIAABNIAIgKIAAF/IANAAIAAgqIAdAAIAAgNIgHAAIAAgfIAyAAIAAAfIgJAAIAAANIAjAAIAAAqIASAAIAAh9IAXAAIAAgfIgSAAIAAhIIB1AAIAABIIgVAAIAAAfIAnAAIAAgLIgIAAIAAggIAzAAIAAAgIgJAAIAAALIAtAAIAAiaIAZAAIAAhDIAdAAIAAgvIAFAAIAAAvIAYAAIAAgvIAFAAIAAAvIAiAAIAABDIATAAIAATvgAKbjiIAYAAIAAgNIgYAAgAN9k1IAZAAIAAgLIgZAAgAMPk1IA4AAIAAgfIg4AAgABok1IAkAAIAAgfIgkAAgAC1loIAYAAIAAgQIgYAAgACsloIAEAAIAAgQIgEAAgAoGloIAZAAIAAgQIgZAAg");
	this.shape_1.setTransform(145.9,0,1.378,1.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#201F1F").s().p("AxUMgIAAzdIAlglIAAh4IAYh7IAAhKIAFAAIAABDIAaCCIAAByIAlAcIAAGPIAeAAIAAk9IAcAAIAAgrIBRAAIAAgxIAEAAIAAAxIAFAAIAAhBIAFAAIAABBIASAAIAAArIAbAAIAAB5IATAAIAAlwIAMAAIAAgTIASAAIAAgiIAQAAIAAgiIAKAAIAAhAIAFAAIAABAIAEAAIAAgzIAFAAIAAAzIA0AAIAAAiIAPAAIAAAiIATAAIAAATIAMAAIAAFwIASAAIAAgyIAYAAIAAg1IAeAAIAAgQIgIAAIAAgnIAyAAIAAAnIgJAAIAAAQIAjAAIAAA1IASAAIAAAyIATAAIAABQIAJAAIAAkMIAlglIAAh4IAYh7IAAhKIAFAAIAABDIAaCCIAAA6IBTAAIAAhkIAEAAIAABkIAGAAIAAifIAFAAIAACfIAVAAIAAB7IAXAAIAAgcIBThnIAAhSIAEAAIAABNIAIgKIAAE2IAQAAIAAlwIAMAAIAAgTIATAAIAAgiIAPAAIAAgiIALAAIAAhAIAEAAIAABAIAEAAIAAgzIAFAAIAAAzIA0AAIAAAiIAPAAIAAAiIASAAIAAATIAMAAIAADVIBBAAIAAgDIAyAAIAAAnIgJAAIAAAQIAjAAIAAAzIAYAAIAAiaIAYAAIAAhDIAdAAIAAgvIAFAAIAAAvIAYAAIAAgvIAFAAIAAAvIARAAIAAgOIBcAAIAAhkIAFAAIAABkIAGAAIAAifIAEAAIAACfIAWAAIAAD4IAWAAIAAiZIBThnIAAhSIAFAAIAABNIAIgKIAAF/IANAAIAAgqIAdAAIAAgNIgHAAIAAgfIAyAAIAAAfIgJAAIAAANIAjAAIAAAqIASAAIAAh9IAXAAIAAgfIgSAAIAAhIIB1AAIAABIIgVAAIAAAfIAnAAIAAgLIgIAAIAAggIAzAAIAAAgIgJAAIAAALIAtAAIAAiaIAZAAIAAhDIAdAAIAAgvIAFAAIAAAvIAYAAIAAgvIAFAAIAAAvIAiAAIAABDIATAAIAATvgAKbjiIAYAAIAAgNIgYAAgAN9k1IAZAAIAAgLIgZAAgAMPk1IA4AAIAAgfIg4AAgABok1IAkAAIAAgfIgkAAgAC1loIAYAAIAAgQIgYAAgACsloIAEAAIAAgQIgEAAgAoGloIAZAAIAAgQIgZAAg");
	this.shape_2.setTransform(-145.9,0,1.378,1.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#201F1F").s().p("AxUMgIAAzdIAlglIAAh4IAYh7IAAhKIAFAAIAABDIAaCCIAAByIAkAcIAAGPIAfAAIAAk9IAcAAIAAgrIBRAAIAAgxIAEAAIAAAxIAFAAIAAhBIAEAAIAABBIASAAIAAArIAcAAIAAB5IASAAIAAlwIANAAIAAgTIASAAIAAgiIAPAAIAAgiIALAAIAAhAIAEAAIAABAIAFAAIAAgzIAFAAIAAAzIA0AAIAAAiIAPAAIAAAiIATAAIAAATIALAAIAAFwIASAAIAAgyIAZAAIAAg1IAdAAIAAgQIgHAAIAAgnIAyAAIAAAnIgJAAIAAAQIAjAAIAAA1IASAAIAAAyIATAAIAABQIAJAAIAAkMIAlglIAAh4IAYh7IAAhKIAFAAIAABDIAaCCIAAA6IBSAAIAAhkIAFAAIAABkIAGAAIAAifIAFAAIAACfIAVAAIAAB7IAXAAIAAgcIBThnIAAhSIAEAAIAABNIAIgKIAAE2IAQAAIAAlwIAMAAIAAgTIASAAIAAgiIAQAAIAAgiIAKAAIAAhAIAFAAIAABAIAEAAIAAgzIAFAAIAAAzIA0AAIAAAiIAOAAIAAAiIATAAIAAATIAMAAIAADVIBBAAIAAgDIAyAAIAAAnIgKAAIAAAQIAjAAIAAAzIAYAAIAAiaIAZAAIAAhDIAdAAIAAgvIAEAAIAAAvIAZAAIAAgvIAFAAIAAAvIARAAIAAgOIBcAAIAAhkIAEAAIAABkIAGAAIAAifIAFAAIAACfIAWAAIAAD4IAWAAIAAiZIBThnIAAhSIAEAAIAABNIAJgKIAAF/IAMAAIAAgqIAeAAIAAgNIgHAAIAAgfIAyAAIAAAfIgKAAIAAANIAjAAIAAAqIATAAIAAh9IAXAAIAAgfIgRAAIAAhIIB0AAIAABIIgVAAIAAAfIAnAAIAAgLIgJAAIAAggIA0AAIAAAgIgJAAIAAALIAtAAIAAiaIAYAAIAAhDIAeAAIAAgvIAEAAIAAAvIAZAAIAAgvIAEAAIAAAvIAjAAIAABDIASAAIAATvgAKajiIAZAAIAAgNIgZAAgAN9k1IAZAAIAAgLIgZAAgAMOk1IA5AAIAAgfIg5AAgABok1IAkAAIAAgfIgkAAgAC0loIAZAAIAAgQIgZAAgACrloIAFAAIAAgQIgFAAgAoGloIAYAAIAAgQIgYAAg");
	this.shape_3.setTransform(-437.8,0,1.378,1.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.city, new cjs.Rectangle(-590.5,-110.2,1181.2,220.4), null);


(lib.ARM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AielvIAsAyIERKtg");
	this.shape.setTransform(71.7,43.4,1.57,1.57,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#201F1F").s().p("AjImcIBMAPIFFMIIglAig");
	this.shape_1.setTransform(65.7,40,1.57,1.57,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai5kuIAyAeIgEhWIFFKzIh4Abg");
	this.shape_2.setTransform(85.3,49.7,1.57,1.57,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#201F1F").s().p("Ajol0ICRAeIFAKsIiIAfg");
	this.shape_3.setTransform(80.2,47,1.57,1.57,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgCg4IALgjIgJAdIgICag");
	this.shape_4.setTransform(-31.4,22,1.57,1.57,21.3,0,0,-0.1,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AglAUIBNkFIADACIhLEDIgKDeg");
	this.shape_5.setTransform(-12.3,22.1,1.57,1.57,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgegHIBFkUIg+EZIgPEdg");
	this.shape_6.setTransform(-12.3,34.2,1.57,1.57,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgkgLIBGj/IAEAFIhED3IgBEZg");
	this.shape_7.setTransform(-9.3,40.7,1.57,1.57,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgYAKIgCgmIAMAkIAJAJIAggRIgeAdg");
	this.shape_8.setTransform(47.7,13.6,1.57,1.57,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AACgCIgYgDIAcgYIARA7g");
	this.shape_9.setTransform(37.1,10.8,1.57,1.57,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAbAaIgigOIgIgWIgWgaIAeAWIAHAWIAhAPIAFANg");
	this.shape_10.setTransform(30.2,11.4,1.57,1.57,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgIAgIgHg+IAbgmIgTAnIAEA4IATAqg");
	this.shape_11.setTransform(60.4,-91.6,1.57,1.57,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AAKAoIgohFIgmgsIAlAlIArBGIA5Aog");
	this.shape_12.setTransform(15,2.9,1.57,1.57,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAPAQIgmhBIArBCIAEAhg");
	this.shape_13.setTransform(-3,-29.5,1.57,1.57,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAAAPIgTgfIgCgUIAHAVIASAfIASAVg");
	this.shape_14.setTransform(6,-42.4,1.57,1.57,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAAANIgbgpIAIAFIgGgSIANAbIAoA4g");
	this.shape_15.setTransform(3.5,-37,1.57,1.57,21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgPgOIgGgMIArA2g");
	this.shape_16.setTransform(15.6,16.9,1.57,1.57,21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgPgRIAKAJIAdgIIggAQIgPASg");
	this.shape_17.setTransform(87.5,9.5,1.57,1.57,21.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAFACIgNgMIgQgKIgNgCIAQgBIAgAQIAbAfg");
	this.shape_18.setTransform(40.3,-95.2,1.57,1.57,21.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgNAHIgjgOIAlAJIA9ACIgeAEg");
	this.shape_19.setTransform(39.3,-81.8,1.57,1.57,21.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AAIgEIAIAEIgfAEg");
	this.shape_20.setTransform(25,-91.7,1.57,1.57,21.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgQABIAhgEIgfAGg");
	this.shape_21.setTransform(21.6,-85.3,1.57,1.57,21.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgUAHIApgRIgpAVg");
	this.shape_22.setTransform(21.9,-81.3,1.57,1.57,21.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAugTIgrAWIgwARg");
	this.shape_23.setTransform(23.7,-71.2,1.57,1.57,21.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgnALIBOgYIhOAbg");
	this.shape_24.setTransform(19.7,-66.7,1.57,1.57,21.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgWAEIAtgKIgpANg");
	this.shape_25.setTransform(14.4,-59,1.57,1.57,21.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgbgHIAKgGIAhAIIAMAMIgNAHg");
	this.shape_26.setTransform(18.1,-24,1.57,1.57,21.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgOAOIAQgEIgIgKIgdgPIgSgRIAdAIIAYgJIgQARIAXAJIgDAFIAKAIIAQgEIAYAJIgVAAIgOAFIAJALIgKAHg");
	this.shape_27.setTransform(14.2,-32.6,1.57,1.57,21.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgVgDIArgEIgNAHIAEAIg");
	this.shape_28.setTransform(11.5,-41.5,1.57,1.57,21.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AAGgEIAKAGIgfADg");
	this.shape_29.setTransform(10.9,-45.2,1.57,1.57,21.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgggJIAJgCIAVAQIAjgCIgmAJg");
	this.shape_30.setTransform(14.3,-45.3,1.57,1.57,21.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgMgFIAZADIgVAIg");
	this.shape_31.setTransform(11.7,-51.6,1.57,1.57,21.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgqASIBVgmIhUApg");
	this.shape_32.setTransform(17.5,-56.7,1.57,1.57,21.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgPBJIgYgdIgMg2IARggIAzgeIgWARIgMASIgIAWIAHAgIAQAbIATAJIAjgHIgWAQIgGALg");
	this.shape_33.setTransform(87.3,-21.6,1.57,1.57,21.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgpAYIAgghIAggYIATgLIgqApIgjAwg");
	this.shape_34.setTransform(97.6,-86.2,1.57,1.57,21.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("Ag7ATIAegOIAdgTIAVgHIAJgCIAKgBIAUgPIgMAPIgUAFIgfAPIgyAsg");
	this.shape_35.setTransform(102.6,-59.8,1.57,1.57,21.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AheBbIgYgXIgZgfIgFgUIAOgiIAbgjIAigJIAlggIAIAIIgOAaIgmAjIgkAPIgSAOIgCAaIAqAxIAZAAIB4hQIAVgFIAigUIAhgbIAKgEIgbAaIhhA9IglAnIgvAXg");
	this.shape_36.setTransform(89.4,-36.8,1.57,1.57,21.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AB9D1Ig3gsIgygKIgKgSIgUgLIgRAMIgPgRIhLieIgtgcIATgUIgNgPIghgJIATgNIgQgUIg7gTIASgPIAwAVIAKgDIgWgmIADgGIAiAkIAPgWIgJgjIAPg5IgGBHIARA/IAkArIBHA2IA0AOIAhgHIghALIgaAfIgNAmIABAIQABAJAEAGIAZAfIASANIATAGIAegLIBHg0IggAiIgMAlIAZA/IAXAJIAcgCIARgFIAGgBIAYAWIgagFIgYAJg");
	this.shape_37.setTransform(71.7,-53.2,1.57,1.57,21.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AAZAeIg3gpIgNgNIAcgKIAIAFIgCAMIAJAOIAsAmg");
	this.shape_38.setTransform(96.6,-2.3,1.57,1.57,21.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgbALIArgXIAMAAIgEADIgpAWg");
	this.shape_39.setTransform(99.8,-8.8,1.57,1.57,21.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAAADIAfgTIABAFIgUAMIgsAQg");
	this.shape_40.setTransform(110.5,-9.7,1.57,1.57,21.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgkADIAQgGIAXABIAigCIgeAJg");
	this.shape_41.setTransform(107.1,-7.8,1.57,1.57,21.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("ABJgzIg5AwIhYA3g");
	this.shape_42.setTransform(28.3,-29.8,1.57,1.57,21.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgtgHIAvgEIAsAXg");
	this.shape_43.setTransform(23.6,-35.5,1.57,1.57,21.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAPAVIgpgYIglg1IAPALIAcAkIAmAbIAuAAIgeAMIARAbg");
	this.shape_44.setTransform(16,-17.4,1.57,1.57,21.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("ABEBQIiVgeIhIiFIBMB/ICMAbIBbAMg");
	this.shape_45.setTransform(-6.3,10.6,1.57,1.57,21.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgWAjIAKg6IAigfIgWAhIgMA/IgCANg");
	this.shape_46.setTransform(66.3,-92.4,1.57,1.57,21.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AALAEIgYgSIg1gIIAugGIAUAFIBDA0g");
	this.shape_47.setTransform(40.5,-91.3,1.57,1.57,21.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AhAAMIAaADIATgCIgXgHIgRgQIgNgIIAVgEIAOASIAqAJIAjgCIAEgJIAdAOIgXAFIhUAKg");
	this.shape_48.setTransform(36.3,-90,1.57,1.57,21.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AABgXIgDhHIAPAEIgCBJIgXBwg");
	this.shape_49.setTransform(64.4,-10.1,1.57,1.57,21.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AANgIIANgSIgGAPIgtAmg");
	this.shape_50.setTransform(55.1,-31.1,1.57,1.57,21.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AglAdIAvgfQAGgGAWgYIgWAaQgLAMgTAOIgRANg");
	this.shape_51.setTransform(26.3,-23.4,1.57,1.57,21.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AAyAsQg8gThWhLIBMAyQBSAwAjgKIgCALQgFACgHAAQgNAAgUgHg");
	this.shape_52.setTransform(18.2,-21.2,1.57,1.57,21.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AALA5QgIgZgPgRQgJgMABgZQACgbANgRIAOgLIgJAqQgHAtANAVQAPAVAAAPQgBAHgDAEQgBgJgFgMg");
	this.shape_53.setTransform(31,-4.9,1.57,1.57,21.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgDgnIAHgFIgBAmQgBAkABAPg");
	this.shape_54.setTransform(38.7,-10.5,1.57,1.57,21.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgFgRIAWhFIANgHQgRAdgWBRQgMApgIAkQABgjAXhMg");
	this.shape_55.setTransform(54.6,-23,1.57,1.57,21.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgHAWQAkgvACggQAGgIAEADQACABABADQgIATgPAYQgdAxgjAeg");
	this.shape_56.setTransform(53.5,-29.3,1.57,1.57,21.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("ACaCoQgTgDgMgNQgJgQgcgLQgVgJgSgCQgCgJgPgVIgOgTQgLAMgLAAQgCgWgYg6QgXg6gNgPQgfgDhCgPIgXgFQAYADAfgCQAdgBAWgEQgKgHgGgJQgUgGgSgVIgPgVIAlAKQAHACgFgIIAPAIQAZAkAuAZQAUAXAaAHQANAEAKAAIgEACQgIAHgNAgQgMAfAAAJQABAJAnAhQAmAgAKAEQAMADAegTIgNAjQgBAGAKAOQALAQAKADQALAAAKADQAKADAFAAQgMAFgOAAIgJAAg");
	this.shape_57.setTransform(65.7,-44.8,1.57,1.57,21.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AAWCtQgkgJgSgXQgMgEgWgRQgUgRgJgNQgXglgKg1QgGgaAKgWIAKgQQgOAaAJAqQAFAaARAqQAJAXAgAXQAQAMAOAHIAJAKQANALARAIQAXAJAfgIQAhgJAQgYQAQgWgKgZQgGgRgXgbQgRgUgTgzQgQgvgLgwQgIglgcgLIgbgDQAggFARAUQANAPAFAYQADARAQAyQARAxAGALIAKASQAGAKAYAeQAjAtgvArQgaAXghAAQgLAAgMgDg");
	this.shape_58.setTransform(79.5,-79,1.57,1.57,21.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag4AgIgHgEIA6goQA7glALARQgBAQgKARQgXAig0AEQgVgCgOgFg");
	this.shape_59.setTransform(81.2,-55.6,1.57,1.57,21.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AAEAKQgxgUgTgVIAaANQAcANAKAEQAcAPAlASQg0gQgJgGg");
	this.shape_60.setTransform(47.6,-84.4,1.57,1.57,21.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgIgDQAfgSAQALQgGgBgNACQgYAGgiASg");
	this.shape_61.setTransform(86.2,-58.3,1.57,1.57,21.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgLAdQgagkACgNQAEghAZgHQAQgFAaAIQgfgGgNAIQgMAGgFAIQgHALAAARQACAFAWAkIAVAjQgNgQgLgSg");
	this.shape_62.setTransform(81.1,-68.6,1.57,1.57,21.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgFAHQAJgHAKgMIgLAYIgQAAg");
	this.shape_63.setTransform(111.7,-61.8,1.57,1.57,21.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgDgFQgVgIgoACIgkAEIAXgFQAagEAUAAQAgACBkAfQhJgKgfgMg");
	this.shape_64.setTransform(43.3,-76.5,1.57,1.57,21.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AAsBTIgbguQgUglgRgPQgSgQgkgxIgiguIBJBbIAUAVQAQAPAFAIIAXAnQARAfAGAGQAJALAvAfQgzgbgNgRg");
	this.shape_65.setTransform(9.8,-7,1.57,1.57,21.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AhVADIg/g4IA6AqQBAArAlALQAlAKA2ggQAbgQAUgSQgSAUgbAUQggAXgUAEIgJAAQg6AAhGgzg");
	this.shape_66.setTransform(23.9,-25.1,1.57,1.57,21.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AA2A0QgLgVglgfQgigcgagNQgWgLgtg+IgJgNIANAPQAnAuAWALQAXAMAvApQAwApAKARQAOAYAtAwQg8gvgRgdg");
	this.shape_67.setTransform(16.3,-5.6,1.57,1.57,21.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgrAdQAJgRAmgeIAogbQgSAQgTATQglAmgGASg");
	this.shape_68.setTransform(97.9,-86.4,1.57,1.57,21.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgFAHIgkgPIAFgFQAhATAZAEQANACAHgCQgEAEgKAAQgMAAgVgHg");
	this.shape_69.setTransform(100.9,-4.7,1.57,1.57,21.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgogcQAFgBAAgCIAfAbQAfAbAOAJQg5gggYgcg");
	this.shape_70.setTransform(95.6,-1.7,1.57,1.57,21.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AhSBwQgNAAgLgLQgLgLgEgQQAHggAcgmQAagiASgHQAPgGAigXQAigWAKgKQANgMASgEQhOA6gQAJQgVAIgOAKQgbASgWAlQgXApAJAQQAIAOAGAEQAKAHAWAAIAQADQASADALgDIAUgGQAKgEAPgKQAagSAbgFQAHgCAkgQIgqAUQgGABgKADQgVAHgYARQgXARgiAAIgsgDg");
	this.shape_71.setTransform(98.1,-23.9,1.57,1.57,21.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("Ag2CQQgegVgUgXQgegiAJgZQAMgfAsgtQAvgyA6gnQAWgRAXgGQAdgHASARQgIgGgOgCQgegDghAaQg0AogVASQgkAfgZAfQgZAeACAcQAAAUANALIAlAmQAiAbAhgSQgHAHgMAEQgKAFgJAAQgLAAgIgGg");
	this.shape_72.setTransform(87.2,-44.5,1.57,1.57,21.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgygBIAsgDQAtgBAMAKQhAgIglACg");
	this.shape_73.setTransform(41.1,-86,1.57,1.57,21.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AgZgBIgughQAoAbAzAWQAeANAWAHIgEAAQghAAg8gkg");
	this.shape_74.setTransform(50.4,-83.1,1.57,1.57,21.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AAWAoQgngdgkhDIAkAuQAqAxAdASQgMgCgUgPg");
	this.shape_75.setTransform(55.6,-84.5,1.57,1.57,21.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AoYQZQARjwAajvQAMhwAGgpQAKhXANhCQANhDAnimIBEkZIAZhnQAOg3ABgXQADgmgFg2IgCgYIAAgZQACgdAMhgIAJhHQAAgiAFgPQAKgeAngfQAegZAhgRQAfgPBagiIA9gWQAegLAQgCQANgBAKACIABAAIAMgPQAHgJAHgGQAVgSAvABIAgADQAQAFATAYQAJAMAEARIAFAeQAdgFATACQAfADASASQAXAYAJAfQAIAegGAiQgEAagHASQgCAEAFADIAIAFQAQAOALAOQATAZAFAcQADAOAAAIIAAAFIAFACIAOAGQAeAOAPAgQANAbABAkQAAAkgPAcQgLAVgNASQgOASgCAGIgFAgQgEAUgGAKQgGAKgbAIQgQAFgKAJIg4AvIgUARQgLAKgKAGIhHAlQgeAQgnAZQgpAfgXAKQgOAGgXAHQgHACgDACIgJAJIgVARQgNAKgEALQgEALgBARIgCAcQgEA8gCAwQgBB4AJCaQAFBDARDPIAkGCQABAEgKADQgGABgCgBIpFADQgGAAABgCgAA2vhIgVAHIgxASQhIAagoASQgeANgYARQgXARgMALQgTASgJARQgEAKgCAPIgCAZIgIBEQgNBggDAlQAAAIACAlQAFA5gCAiQgBAbgNA2IgYBkIhEEXQgmCfgQBQQgMBAgLBUIgRCWQgbD0gSD1II0gCIgjl/QgRjGgFhLQgKiaADh4QABg2AFg2IABgaQABgQAEgLQAEgMAIgJIAUgPIAMgMQAHgIAGgDIAWgGQAdgKAMgIIAbgTQApgbBjg1QAYgNAegZIAxgrIAKgJQAGgGAEgCIAWgIIAMgDQAIgDACgFQAFgLAEgTIAGggQACgGAGgIIAKgNQAQgWAHgQQAPgegCgjQgCgogSgbQgUgfgkgKIgCgBQACgjgTggQgSgegfgVIAAgCQANgdACggQACgjgLgbQgPglgagPQgPgIgWAAQgOAAgYAEQgIAAAAgCIgEgcQgDgRgIgKQgKgPgWgPQgFgDgVgBQgbAAgJADQgMAFgQAWQgLAPgJACQgFABgHgBIgLgCIgDAAQgKAAgJADg");
	this.shape_76.setTransform(13.6,34,1.57,1.57,21.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("An3MAQAdk4AcitQALhFBHkmIBNk/QAIghgDg9IgFhIQgBgNANhnQAOhuABgSQABgbAogjQAegbAkgTQAYgMBXghQBMgdASgFQALgEAOAAQANAAAFADQAEABAIgKQANgRAGgGQALgOAggCQAUgCAZAEQAhAVAKAXQAEAJAEAkQAygJAYAKQARAGAVAZQAcApgIA6QgEAdgKAVQAnAaARAnQAMAcgBAaQBUAWgHByQgCAkgxA/QgDADgFAfQgGAdgEAGQgEAGgPAFIgcAKQhJA8gMANQgHAIgmAUIg4AdQhVAzgNALQgTAQgxAMQgDABgFAFIgOAOQgPAJgIAIQgNAOgBAgIgGBVQgDBDACBrQABBqAgFrQAQC1AQChIpJADQAJh6APidg");
	this.shape_77.setTransform(13.6,34,1.57,1.57,21.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AjqnAIBhgXIF0OUIh4Abg");
	this.shape_78.setTransform(77.7,-109.5,1.57,1.57,21.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AhjjMIARgXIC1HFIgXADg");
	this.shape_79.setTransform(67.6,-146.4,1.57,1.57,21.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#201F1F").s().p("AhxjPIAogrIC7HwIgvAFg");
	this.shape_80.setTransform(64.9,-149.6,1.57,1.57,21.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#201F1F").s().p("AiOAAIBGgbIDXAfIgsAYg");
	this.shape_81.setTransform(80.3,109.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ah1gEIAjguIAigRICmAzIgBBUg");
	this.shape_82.setTransform(73.3,-183.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ARM, new cjs.Rectangle(-124.8,-190.5,249.7,381.2), null);


(lib.otraroka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LKJS1();
	this.instance.parent = this;
	this.instance.setTransform(-84.9,-158.9,1,1,0,0,0,-0.3,-0.1);

	this.instance_1 = new lib.ROKA2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.5,93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.otraroka, new cjs.Rectangle(-212.3,-262,424.1,523.8), null);


(lib.MAINARM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TOP();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-173.1,1,1,0,0,0,0.3,-0.3);

	this.instance_1 = new lib.ARM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.5,129.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MAINARM, new cjs.Rectangle(-225.3,-320.2,451.2,640), null);


(lib.fgdsa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.hgf1();
	this.instance.parent = this;
	this.instance.setTransform(-41.3,52);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(472).to({_off:false},0).to({x:-53.3,alpha:1},68).wait(1));

	// Layer 8
	this.instance_1 = new lib.gf2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(417.7,82.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(472).to({_off:false},0).to({x:405.7,alpha:1},68).wait(1));

	// Layer 7
	this.instance_2 = new lib.hg1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-278.1,-40.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(472).to({_off:false},0).to({x:-290.1,alpha:1},68).wait(1));

	// Layer 1
	this.instance_3 = new lib.hgf1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.7,52);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(169).to({_off:false},0).to({x:-1.9,alpha:1},73).to({x:-41.6},230).to({x:-51.6,alpha:0},68).wait(1));

	// Layer 6
	this.instance_4 = new lib.gf2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(491.7,82.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(169).to({_off:false},0).to({x:482,alpha:1},73).to({x:423.1},230).to({x:413.1,alpha:0},68).wait(1));

	// Layer 2
	this.instance_5 = new lib.hgf1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-53.3,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-82.7},169).to({x:-95.3,alpha:0},73).to({_off:true},1).wait(298));

	// Layer 3
	this.instance_6 = new lib.gf2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(405.7,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:359.6},169).to({x:339.7,alpha:0},73).to({_off:true},1).wait(298));

	// Layer 4
	this.instance_7 = new lib.hg1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-290.1,-40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-380.9},169).to({x:-420.2,alpha:0},73).to({_off:true},1).wait(298));

	// Layer 5
	this.instance_8 = new lib.hg1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-118.1,-40.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(169).to({_off:false},0).to({x:-137.7,alpha:1},73).to({x:-255.3},230).to({x:-261.3,alpha:0},68).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-619,-187.6,1238.1,361.5);


(lib.bv26copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-4,y:-15.5},9).to({x:-12,y:-21.5},6).to({scaleX:1,scaleY:1,rotation:12.5,x:0,y:-20},8).to({scaleX:1,scaleY:1,rotation:0,x:-17,y:-10},12).to({x:-16,y:2},10).to({x:-15.5,y:13.5},8).to({startPosition:0},11).to({x:-11,y:0},3).to({x:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.bv25copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-14.3},9).to({rotation:-14},15).to({scaleX:1,scaleY:1,rotation:0,x:-19,y:9.5},7).to({rotation:6.6,x:-11,y:10.5},16).to({scaleX:1,scaleY:1,rotation:-11.5,x:0,y:-12},4).to({scaleX:1,scaleY:1,rotation:-4.8,y:0},10).to({startPosition:0},9).to({rotation:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-99.8,177.9,199.6);


(lib.bv24copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:33.1},11).to({scaleX:1,scaleY:1,rotation:-10.6,y:36.1},11).to({scaleX:1,scaleY:1,rotation:0,y:14},17).to({rotation:8.8,x:-0.5,y:-17.5},8).to({scaleX:1,scaleY:1,rotation:-10.5,x:0,y:-22.5},14).to({scaleX:1,scaleY:1,rotation:0,y:14.6},10).to({y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-104.1,100.3,208.4);


(lib.bv23copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3,y:18},10).to({x:-7,y:31},9).to({x:-7.5,y:-16.5},11).to({y:-11.5},7).to({x:-8.5,y:5},12).to({x:0,y:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.bv22copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.5,x:2,y:-7},9).to({rotation:10.8,x:18.5,y:-1.5},16).to({scaleX:1,scaleY:1,rotation:-4,x:-0.5,y:7},5).to({rotation:0,x:0,y:0},14).to({rotation:-7.8,x:-0.5,y:7.5},12).to({rotation:0,x:0,y:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-86.2,80.7,172.4);


(lib.bv21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:8.8,x:-2,y:6.5},13).to({scaleX:1,scaleY:1,rotation:7.8,x:9.5,y:4},9).to({scaleX:1,scaleY:1,rotation:-13.3,x:-9,y:-1},15).to({scaleX:1,scaleY:1,rotation:-7.8,x:-10.5,y:-2},14).to({rotation:0,x:0,y:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.6);


(lib.bv20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-27,x:9,y:-44},10).to({scaleX:1,scaleY:1,rotation:-25.6,x:16,y:-42},6).to({scaleX:1,scaleY:1,rotation:0,x:20,y:-5},8).to({x:17,y:10},14).to({scaleX:1,scaleY:1,rotation:-17.3,x:-29,y:-10},7).to({rotation:-18.5,x:-22,y:-12},8).to({rotation:-16,x:-21,y:6},15).to({scaleX:1,scaleY:1,rotation:0,x:3,y:-20},5).to({x:0,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-135,147.6,270.1);


(lib.bv19copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2,y:25.5},10).to({x:0.5,y:31.5},13).to({rotation:3.8,x:13.5,y:27},25).to({rotation:0,x:8,y:-2.5},9).to({x:13.5,y:3},13).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.bv18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14},14).to({scaleX:1,scaleY:1,rotation:-8.8,x:-22},5).to({scaleX:1,scaleY:1,rotation:-5.3,x:8,y:28.1},6).to({x:-14,y:18.1},16).to({rotation:0,x:-10,y:-30},8).to({x:0,y:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-133.9,129,267.8);


(lib.bv17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-11,y:22.5},9).to({x:-14.5,y:21.5},17).to({scaleX:1,scaleY:1,rotation:14.3,x:-6.5,y:-3.5},11).to({rotation:16.3,x:0,y:0},7).to({scaleX:1,scaleY:1,rotation:0,x:-5,y:2},10).to({x:0,y:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.7,63.5,135.6);


(lib.bv16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:26},9).to({scaleX:1,scaleY:1,rotation:-10.8,x:4,y:42},8).to({rotation:-5.3,x:2,y:21},7).to({scaleX:1,scaleY:1,rotation:0,x:0,y:-13},7).to({scaleX:1,scaleY:1,rotation:-9.1,x:-9,y:-9},11).to({rotation:10,x:1,y:21},6).to({rotation:10.8,x:3,y:9},7).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-104.1,100.4,208.4);


(lib.bv15copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-18.3},11).to({rotation:-18.8,x:3,y:20},10).to({rotation:-12.3,x:-33,y:3},17).to({scaleX:1,scaleY:1,rotation:0,x:-20,y:-12},6).to({y:10},12).to({x:-5,y:28},10).to({x:0,y:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-164.9,294,329.9);


(lib.bv14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-17,y:16},8).to({scaleX:1,scaleY:1,rotation:9.3,x:-5,y:22},13).to({scaleX:1,scaleY:1,rotation:0,x:-15,y:-7},11).to({rotation:-6,x:-11,y:-1},12).to({rotation:0,x:0,y:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-86.3,83.2,172.6);


(lib.bv13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:13,y:18},9).to({scaleX:1,scaleY:1,rotation:16.3,x:11,y:15},16).to({scaleX:1,scaleY:1,rotation:-6,x:-6,y:11},11).to({scaleX:1,scaleY:1,rotation:-12.8,x:-9,y:17},8).to({scaleX:1,scaleY:1,rotation:0,x:10,y:-1},3).to({x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.6);


(lib.bv12copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9,y:17},10).to({rotation:8.1,x:20,y:12},7).to({rotation:-8.3,x:4,y:22},8).to({rotation:-7.3,x:1,y:12},13).to({rotation:-8.8,x:-2,y:39},11).to({rotation:0,x:15,y:5},4).to({x:4,y:-7},6).to({x:0,y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,-114.9,110.7,229.8);


(lib.bv11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween20("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-15,y:11},9).to({rotation:-4,x:-20,y:10},5).to({scaleX:1,scaleY:1,rotation:11.5,x:-5,y:6},9).to({scaleX:1,scaleY:1,rotation:8,x:3,y:8},8).to({rotation:0,x:-9,y:-6},9).to({x:0,y:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.4,135.6);


(lib.bv10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:17.5,x:49,y:-20},8).to({rotation:12.3,x:42,y:-7},9).to({scaleX:1,scaleY:1,rotation:0,x:54,y:9},4).to({rotation:4.6,x:26,y:19},8).to({rotation:-1.5,x:12,y:26},10).to({rotation:-7.6},10).to({rotation:-0.5,x:4.9,y:10.6},6).to({rotation:0,x:0,y:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-197.9,440,396);


(lib.bv9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween23("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2,y:19},11).to({x:19,y:2},11).to({x:20,y:8},6).to({x:-4,y:-12},9).to({x:-8,y:-16},12).to({x:0,y:16},10).to({y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-88.2,82.6,176.5);


(lib.bv8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-14,y:18},7).to({scaleX:1,scaleY:1,rotation:-11.6,x:-20,y:15},11).to({scaleX:1,scaleY:1,rotation:0,x:-12,y:13},13).to({scaleX:1,scaleY:1,rotation:18.3,x:6,y:16},7).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.6);


(lib.bv6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween26("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-5,y:18},7).to({scaleX:1,scaleY:1,rotation:-11.8,x:-14,y:34},11).to({scaleX:1,scaleY:1,rotation:0,y:-7},8).to({scaleX:1,scaleY:1,rotation:-11.8,x:-20,y:-4},6).to({rotation:-10,x:-8,y:-1},8).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-88.2,82.5,176.4);


(lib.bv5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween27("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:29},9).to({regX:2,regY:-0.1,scaleX:1,scaleY:1,rotation:9.3,y:21.9},10).to({regX:0,regY:0,rotation:-12.8,x:-13,y:5},6).to({rotation:-10.3,y:1},8).to({scaleX:1,scaleY:1,rotation:0,x:-9,y:-5},7).to({x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-65.2,61.1,130.6);


(lib.bv4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween28("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.3,y:-1},6).to({scaleX:1,scaleY:1,rotation:10.8,x:-1,y:-8},4).to({scaleX:1,scaleY:1,rotation:0,x:-5,y:33},5).to({scaleX:1,scaleY:1,rotation:-11.5,x:-7,y:22},8).to({scaleX:1,scaleY:1,rotation:0,x:-8,y:21},9).to({scaleX:1,scaleY:1,rotation:-12.8,x:0,y:0},7).to({scaleX:1,scaleY:1,rotation:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-67.8,63.5,135.7);


(lib.bv3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween29("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:25,y:16},6).to({rotation:8.8,y:29},6).to({rotation:-8,x:20,y:17.1},7).to({x:15,y:-3.9},14).to({scaleX:1,scaleY:1,rotation:-10.3,x:11,y:23.1},5).to({scaleX:1,scaleY:1,rotation:0,x:16,y:17},7).to({scaleX:1,scaleY:1,rotation:-17.8,x:19,y:31.1},5).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-108.6,101.6,217.3);


(lib.bv2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween30("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.6,x:-4,y:18},6).to({rotation:8,x:-13},7).to({scaleX:1,scaleY:1,rotation:-13.8,x:10,y:19},8).to({scaleX:0.97,scaleY:1,rotation:-9.3,y:12},11).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-65.3,61.1,130.6);


(lib.crowd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bv26copy();
	this.instance.parent = this;
	this.instance.setTransform(537.2,136.3);

	this.instance_1 = new lib.bv24copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(447,104.5);

	this.instance_2 = new lib.bv23copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(394.4,123.4);

	this.instance_3 = new lib.bv22copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(327.5,106.9);

	this.instance_4 = new lib.bv21copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(282.6,127.2);

	this.instance_5 = new lib.bv20copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-406.3,103.4);

	this.instance_6 = new lib.bv18copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(197,57);

	this.instance_7 = new lib.bv16copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.7,86.7);

	this.instance_8 = new lib.bv15copy2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(46.5,26.4);

	this.instance_9 = new lib.bv14copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-22.5,104.6);

	this.instance_10 = new lib.bv12copy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-114.1,76.5);

	this.instance_11 = new lib.bv11copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-171.1,119.7);

	this.instance_12 = new lib.bv10copy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-368.4,-7.1);

	this.instance_13 = new lib.bv9copy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-301,99.4);

	this.instance_14 = new lib.bv8copy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-337.2,119.7);

	this.instance_15 = new lib.bv6copy();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-438.9,97.4);

	this.instance_16 = new lib.bv4copy();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-532,112.1);

	this.instance_17 = new lib.bv3copy();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-570.9,77);

	this.instance_18 = new lib.bv2copy();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-618.9,120.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgJAUIgIiSIABAAIAJCRIAZBsg");
	this.shape.setTransform(-269.8,139.3,1.676,1.676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgUgeIAFhlIgBBnIAlCgg");
	this.shape_1.setTransform(-267.3,140.6,1.676,1.676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgLgJIgBhiIADAAIABBhIAVB3g");
	this.shape_2.setTransform(-264,138.2,1.676,1.676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAAAIIgMgLIANAIIAGABIAGgOIgDARg");
	this.shape_3.setTransform(-254.3,108,1.676,1.676);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgDACIgJAGIAEgPIAUAPg");
	this.shape_4.setTransform(-256.6,110.6,1.676,1.676);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgHAAIgPgDIAQgBIAIAFIAQgDIAFADIgHgBIgPAEg");
	this.shape_5.setTransform(-258.6,114.5,1.676,1.676);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AABARIgTgTIAAgUIAEASIAPASIASAJg");
	this.shape_6.setTransform(-291.6,77.2,1.676,1.676);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AADAGIgNgGIgGgGIAIAGIAOAFIAMACg");
	this.shape_7.setTransform(-285.7,111.1,1.676,1.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AADAGIgTgHIADAAIgHgFIANAGIAcAHg");
	this.shape_8.setTransform(-284.1,113.3,1.676,1.676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgIAAIgGgDIAHABIAWAFg");
	this.shape_9.setTransform(-259.9,121.2,1.676,1.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgGgBIAGAAIAHgLIgHAPIAAAJg");
	this.shape_10.setTransform(-246.4,90.9,1.676,1.676);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgNAAIAOgDIASADIgRABIgHgBIgIACIgFACg");
	this.shape_11.setTransform(-298.6,84.7,1.676,1.676);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgCAEIAVgOIgJAKIgGABIgGAGIgPAEg");
	this.shape_12.setTransform(-293.6,88.4,1.676,1.676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgJAAIANgFIAHACIgCAEIgTAFg");
	this.shape_13.setTransform(-275.6,110.4,1.676,1.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AAGAEIgGgBIgNADIgKgBIAMgFIAGgJIgCAJIAKgCIABACIAFAAIAFgFIAKgDIgHAFIgDAFIAGABIgCAFIgRACg");
	this.shape_14.setTransform(-280.3,109.9,1.676,1.676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAGgGIgCAGIAEABIgPAGg");
	this.shape_15.setTransform(-284.2,108.8,1.676,1.676);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAAgDIAFgBIgJAJg");
	this.shape_16.setTransform(-285.5,108.6,1.676,1.676);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgMAGIACgDIAMAAIALgJIgLANg");
	this.shape_17.setTransform(-285,106.9,1.676,1.676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgEABIAJgEIgFAIg");
	this.shape_18.setTransform(-288.2,106.7,1.676,1.676);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgEAaIgTgQIgDgOIAKgZIgDAMIAAAKIAEAIIAKAKIAMAFIAJgCIALgMIgEAMIABAFIgNALg");
	this.shape_19.setTransform(-257.7,83.6,1.676,1.676);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgEAUIACgUIAHgYIgEAYIABAZg");
	this.shape_20.setTransform(-281.9,64.2,1.676,1.676);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgLAXIAGgNIAFgNIAHgMIACgCIAEgLIAAAIIgGAHIgHANIgEAdg");
	this.shape_21.setTransform(-270.3,68.4,1.676,1.676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgfA1IgHgGIgEgQIAAgTIAJgMIAEgUIAFABIACANIgDAVIgJAOIgCAKIAGAJIAbAGIAIgGIATg8IAHgHIAGgQIAEgSIACgEIgFAdIgOAhIgCAYIgKAUIgMAJg");
	this.shape_22.setTransform(-265.1,79,1.676,1.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAMA3IhDgiIgXADIABgNIgJgBIgNAGIADgKIgLgDIgZAKIACgKIAWgEIADgFIgSgGIgBgEIAWAEIgCgMIgLgJIgKgXIAQAaIAXAQIAYAFIAnAAIAVgJIAIgMIgHANIgBARIAFAQIACACQADADAEACIARADIAJAAIAJgDIAHgNIAKgjIgCAUIAFAPIAaAPIAKgDIAJgIIAFgGIACgCIAOABIgLAFIgFAJIgYAUIgfgBIgUAKIgIgEIgKACIgDAJg");
	this.shape_23.setTransform(-271.9,84,1.676,1.676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgWAFIAHgKIAEAAIADAFIAHABIAYABIgIAEIgdAAg");
	this.shape_24.setTransform(-248.2,84.2,1.676,1.676);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgDAEIAFgLIAEgEIAAADIgHARIgEADg");
	this.shape_25.setTransform(-250.2,81.6,1.676,1.676);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAAABIAFgMIAAgDIACACIgDAKIgKARg");
	this.shape_26.setTransform(-248,77.2,1.676,1.676);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgHAFIAIgFIAKgKIgHAKIgOALg");
	this.shape_27.setTransform(-248.2,78.9,1.676,1.676);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AALgkIgHAfIgOAqg");
	this.shape_28.setTransform(-275.4,105.1,1.676,1.676);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgCgEIAUgEIgkARg");
	this.shape_29.setTransform(-278.8,105.8,1.676,1.676);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AANAGIgUACIgbgIIAIAAIAUAFIATgBIAQgLIgHALIANAEg");
	this.shape_30.setTransform(-273.8,112.6,1.676,1.676);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgeAZIgpgyIArAvIBkgCIglAGg");
	this.shape_31.setTransform(-271.8,125.8,1.676,1.676);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AADATIgNgWIAFgUIABARIALAZIAEAFg");
	this.shape_32.setTransform(-291.5,75.1,1.676,1.676);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgPgEIAJgEIAkAAIgaAHIgNAAIgUAKg");
	this.shape_33.setTransform(-296.9,86,1.676,1.676);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgHANIAGgGIgKAEIgKgBIgHABIAHgHIAJACIARgHIALgKIgBgEIAOgDIgHAIIgaAZIgMAEg");
	this.shape_34.setTransform(-297.7,88.2,1.676,1.676);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgCgIIgVgXIAHgDIARAZIAXAsg");
	this.shape_35.setTransform(-259.5,95.6,1.676,1.676);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AADAAIACgWIgBAUQAAAKgFAPIgDAAg");
	this.shape_36.setTransform(-273.4,107,1.676,1.676);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgtAKIAngDQApgFAJgMIACAEQgDAFgNAEQgVAIghAAIgVgBg");
	this.shape_37.setTransform(-274.5,110.9,1.676,1.676);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgDAMQgGgBgGgJQgIgJABgJIACgJIAIASQAKAQAJADQARAGgBAIQgLgLgPgDg");
	this.shape_38.setTransform(-264.3,109.3,1.676,1.676);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgLgKIABgEIAWAdg");
	this.shape_39.setTransform(-265.2,105.5,1.676,1.676);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgEgDIgLgfIACgFQADAXAaA4QgJgMgLgfg");
	this.shape_40.setTransform(-266.7,96.3,1.676,1.676);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgEgcQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIACABIADAVQADAXgEAUQAGgqgMgTg");
	this.shape_41.setTransform(-269.3,95.4,1.676,1.676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgRAJQgYgMgIgCQgPAJgfAOQAQgKASgSQgFAAgFgCQgNAGgRgIIAPgGQAAAAABgBQAAAAAAAAQAAgBgBAAQAAAAgBgBIAHgBQATAGAWgEQAUAEANgLIgBABQgBAFAEAOQAEAOACACQACADAXABQAWABAEgCQAFgBAFgOIAFAPQABACAHACQAIACAFgBQADgDAEgCIAGgDQgDAHgHAEQgIAEgHgBQgIgDgMAEQgKACgGAEQgDgCgLgDIgKgDIAAAEQgCAEgCACQgIgHgWgOg");
	this.shape_42.setTransform(-271.6,86.4,1.676,1.676);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgRA4QgPgFgUgQQgJgIgDgKIgBgJQADAUAoAXQAJAGAQgBQAJAAAGgCIAGABQAHAAAIgCQALgCAIgMQAJgMgBgMQAAgMgKgFQgHgEgPgDQgLgCgUgNQgRgLgRgOQgNgLgMAEIgLAGQAKgKAMACQAIACAIAHIAZARIAWAPQAIAEAWAFQAXAGgEAbQgEAUgSAJQgQAGgMgDQgFACgMAAQgKAAgHgDg");
	this.shape_43.setTransform(-281.4,73.1,1.676,1.676);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAcQAEgPAFgOQAKgdAIADIAFAPQACARgRAPQgLAIgFAAIgBAAg");
	this.shape_44.setTransform(-272.9,77.8,1.676,1.676);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgeAGIA9gMQgWAIgFAAQgPAFgLAAIgIgBg");
	this.shape_45.setTransform(-292.6,84.6,1.676,1.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgEAAQAGgOAIAAIgGAFQgGAJgHAPQACgHADgIg");
	this.shape_46.setTransform(-273,75.5,1.676,1.676);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgRAIQgHgLAHgJQADgEAGgEIAGgDIgGAEQgHAFgCAEQgEAKAHAKQAEACAgAMQgigIgFgIg");
	this.shape_47.setTransform(-278.4,74,1.676,1.676);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAgHIADAKIgFAFQACgGAAgJg");
	this.shape_48.setTransform(-268.3,64.4,1.676,1.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgQABQAIgEAXgKIAXgJQgcARgOAEQgIABgOAMIgLALQAKgNALgJg");
	this.shape_49.setTransform(-290.2,88.4,1.676,1.676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAmAPIgWgIQgRgHgKAAQgKgBgagHIgXgHIAxAMIAaADIAkAOQAFABAZgCQgQADgJAAIgIgBg");
	this.shape_50.setTransform(-270.7,118.1,1.676,1.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("Ag3AfIAegBQAigCAPgGQAQgHAJgYIAHgZQgBANgDAOQgFAPgGAGQgUAUgnABg");
	this.shape_51.setTransform(-276.1,106.3,1.676,1.676);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AAlAFQgJgEgVgBQgTAAgMACQgOADgtgOIASAEQAaAFAKgBQAMgDAaACQAbABAJACQAKAFAdAEQgiAAgNgFg");
	this.shape_52.setTransform(-269.4,115.4,1.676,1.676);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgDAWQgCgIAFgUIAFgUIgDAXQgCAVACAIIgFgEg");
	this.shape_53.setTransform(-281.9,64,1.676,1.676);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgQAFQAagDAHgJQgBAJggAGg");
	this.shape_54.setTransform(-248.3,82.2,1.676,1.676);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgVABIABgCIARABIAaAAQgRACgMAAIgPgBg");
	this.shape_55.setTransform(-248.2,85.1,1.676,1.676);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgXA+QgGgBgGgEQgGgNgBgUQAAgTAEgHQADgGAGgRIAHgXQABgEADgFIACgEIgOAwIgIAOQgEANADAUQADAUAHADIAJACQAGAAAHgGQALgFAEgGQAIgJADgKQAEgNAIgJIAMgVIgLAWIgFAFQgFAIgDAMQgEAMgMAKIgPAKQgDADgFAAIgDAAg");
	this.shape_56.setTransform(-254.2,78.9,1.676,1.676);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgJBHQgTgEgEgLQgEgOACgbQADgcAKgeQADgMAGgIQAIgKAKABIgJAEQgLAGgEASQgOAyAAAaQAAARAIAJQAFAHAHAAIAWAEQATAAAHgPQgEARgNABIgJABQgKAAgJgCg");
	this.shape_57.setTransform(-267.2,76.8,1.676,1.676);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgDAAQAOgMAIABIgPAIQgNAJgJAGIAPgMg");
	this.shape_58.setTransform(-294.7,86.9,1.676,1.676);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgkAHQAkgBAlgMQgQANgyAAIgHAAg");
	this.shape_59.setTransform(-291.9,83.8,1.676,1.676);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AghgGIAZAGQAbAFAPgCQgFADgLAAIgBABQgUAAgegNg");
	this.shape_60.setTransform(-290.8,81.7,1.676,1.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AhJGSIgCirQgChHgDgkIgIhPQgBgHACghQACgeABgJQACgUgCgIQgFgTgagcIg5hCIgNgQQgFgMAEgUQADgRAHgQQAFgLAWglIAQgYIALgQIAIgGIADgCIAAAAIAAgBQgBgNACgGQAEgMASgLQAHgFAIAAQALAAAFACQAGADAMAKQARgRANgBQARgCAOAKQAVAOAIAdQAjgCASAYQAZgJAUAPQAKAHAJANQAIALABAXIAAAQIAGALIAGAMQACAHgEAGIgIAQIgDANIgGAdQAAAFgJAVIgNAeQgIASgFARQgFAQgKANQgDAEAAAGIgCAPIgDARQgCALABAIQAHA9AMA2QAQBLAoCMQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIheATIidAeIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBgAhNmLQgEAAgGAFQgRAMAAANIAAAIQAAAFgBACQgCACgHADQgGAGgGAKIgKAQQgSAdgIAPQgSAfgBAbQAAAOAIAKIA5BDQAXAaAGAKQANAVgBAOIgDAXQgDARABArQABAlADAYQAFA9ACA1IACC+ID2gwIgBgBQguiogPhNQgIgugCgPQgDgVADgdIACgRIACgNIAHgKQAHgLABgFQALgkANgbIANgfIAEgYIAEgRIACgKQALgNgBgGIgFgMIgHgNIgBgMQgBgagGgLQgLgRgOgHQgRgJgRAHQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgQgYgjACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgGgYgRgOQgPgMgOABQgNAAgRATQgDADgDgDIgIgIQgFgEgFgCQgFgBgGAAIgFAAg");
	this.shape_61.setTransform(-274.2,123.5,1.676,1.676);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhLCfQgCgngChKQgChMACgRQACgYgegiIhKhWQgHgJAEgWQAEgRAHgRQAFgKAVgjIAXglQAIgKAGgCQACgBAAgFIAAgNQAAgNAbgPQARgCAJAFQAEACALALQAPgQAKgDQAIgCANADQAUAGANAWQAGALADAKQAUgCAQAJQALAGAHAKQAigPAdAoQAJAOAAAiIAGANQAGAMAAADQAAADgEAGIgHALIgJAvQAAAIgTAnIgRAvQgCAJgOATQgBACgBALIgEARQgDANACANIAEAlQAFAdAJAtQAPBIAqCWIj9AyQgBjCgDgxg");
	this.shape_62.setTransform(-274.2,123.5,1.676,1.676);

	this.instance_19 = new lib.bv13copy();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-81.4,121.6);

	this.instance_20 = new lib.bv5copy();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-489.6,130.1);

	this.instance_21 = new lib.bv17copy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(119,117.8);

	this.instance_22 = new lib.bv19copy();
	this.instance_22.parent = this;
	this.instance_22.setTransform(231.6,114);

	this.instance_23 = new lib.bv25copy();
	this.instance_23.parent = this;
	this.instance_23.setTransform(516.1,87.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.crowd, new cjs.Rectangle(-649.5,-205,1254.5,443.5), null);


// stage content:
(lib.protest_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:19,step1:49,step2:69,step3:89,step4:109,step5:129,step6:149,step7:169,step8:189,step9:209,step10:229});

	// timeline functions:
	this.frame_19 = function() {
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
	this.frame_129 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_209 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(30).call(this.frame_49).wait(20).call(this.frame_69).wait(20).call(this.frame_89).wait(20).call(this.frame_109).wait(20).call(this.frame_129).wait(20).call(this.frame_149).wait(20).call(this.frame_169).wait(20).call(this.frame_189).wait(20).call(this.frame_209).wait(20).call(this.frame_229).wait(20));

	// Layer 15
	this.instance = new lib.MAINARM();
	this.instance.parent = this;
	this.instance.setTransform(-447.3,311.5,1,1,0,0,0,0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-181,regY:32.6,x:-447.4,y:311.6},0).wait(1).to({regX:-256.1,regY:46.2,x:-447.3},0).wait(1).to({regX:-308.4,regY:55.6,x:-447.4,y:311.5},0).wait(1).to({regX:-351.9,regY:63.6,x:-447.3,y:311.6},0).wait(1).to({regX:-389.2,regY:70.3,x:-447.4},0).wait(1).to({regX:-420.4,regY:76},0).wait(1).to({regX:-446.8,regY:80.8},0).wait(1).to({regX:-469.1,regY:84.8,x:-447.3},0).wait(1).to({regX:-488.2,regY:88.3,x:-447.4},0).wait(1).to({regX:-505.2,regY:91.3},0).wait(1).to({regX:-520.8,regY:94.2,x:-447.3},0).wait(1).to({regX:-534.2,regY:96.5,y:311.5},0).wait(1).to({regX:-545.4,regY:98.6,y:311.6},0).wait(1).to({regX:-554.7,regY:100.3},0).wait(1).to({regX:-562.1,regY:101.7},0).wait(1).to({regX:-567.9,regY:102.7,x:-447.4},0).wait(1).to({regX:-572,regY:103.4,x:-447.3},0).wait(1).to({regX:-574.6,regY:103.9},0).wait(1).to({regX:0.3,regY:-0.3,x:128.9,y:207.2},0).wait(3).to({regX:0.4,regY:-3,rotation:0.1,x:128.8},0).wait(1).to({regX:0.6,regY:-9.7,rotation:0.2,x:128.9},0).wait(1).to({regX:0.8,regY:-20.8,scaleX:1,scaleY:1,rotation:0.5,x:128.8},0).wait(1).to({regX:1.1,regY:-37.3,scaleX:1,scaleY:1,rotation:0.8,x:128.9,y:207.1},0).wait(1).to({regY:-60.1,scaleX:1,scaleY:1,rotation:1.3,y:207.3},0).wait(1).to({regX:0.5,regY:-89,scaleX:1,scaleY:1,rotation:2,x:128.8},0).wait(1).to({regX:-1.1,regY:-124.1,scaleX:1,scaleY:1,rotation:2.7,y:207.2},0).wait(1).to({regX:-4.6,regY:-169.2,scaleX:0.99,scaleY:0.99,rotation:3.7},0).wait(1).to({regX:-11.3,regY:-227,scaleX:0.99,scaleY:0.99,rotation:5,x:128.9,y:207.1},0).wait(1).to({regX:-23.8,regY:-300.6,scaleX:0.99,scaleY:0.99,rotation:6.6,x:128.8,y:207.2},0).wait(1).to({regX:-47,regY:-397.9,rotation:8.8},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:14.8,x:104.9,y:871.4},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,rotation:12.8,x:-523.3,y:374.1},0).wait(1).to({regX:-239.3,regY:97.8,scaleX:0.99,scaleY:0.99,rotation:7.9,y:374.2},0).wait(1).to({regX:-336.1,regY:124.7,scaleX:0.99,scaleY:0.99,rotation:6},0).wait(1).to({regX:-408,regY:140.3,scaleX:0.99,scaleY:0.99,rotation:4.6,y:374.3},0).wait(1).to({regX:-464.9,regY:150,scaleX:1,scaleY:1,rotation:3.5,y:374.2},0).wait(1).to({regX:-509.4,regY:156.1,scaleX:1,scaleY:1,rotation:2.7},0).wait(1).to({regX:-544.5,regY:160,scaleX:1,scaleY:1,rotation:2},0).wait(1).to({regX:-573.7,regY:162.6,rotation:1.5},0).wait(1).to({regX:-598.6,regY:164.3,scaleX:1,scaleY:1,rotation:1},0).wait(1).to({regX:-618.1,regY:165.4,scaleX:1,scaleY:1,rotation:0.6},0).wait(1).to({regX:-632.7,regY:166.1,rotation:0.4,y:374.3},0).wait(1).to({regX:-643,regY:166.5,scaleX:1,scaleY:1,rotation:0.2,y:374.2},0).wait(1).to({regX:-649.2,regY:166.7,rotation:0,y:374.3},0).wait(1).to({regX:0.3,regY:-0.3,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(3).to({regX:-1.5,regY:-4.9,rotation:-0.1,x:128.8},0).wait(1).to({regX:-6.1,regY:-17.4,rotation:-0.2},0).wait(1).to({regX:-14.3,regY:-40,rotation:-0.5,y:207.1},0).wait(1).to({regX:-26.3,regY:-74.5,scaleX:1,scaleY:1,rotation:-0.9,x:128.9,y:207.2},0).wait(1).to({regX:-41.8,regY:-121.7,rotation:-1.5,x:128.8},0).wait(1).to({regX:-62.8,regY:-191,scaleX:1,scaleY:1,rotation:-2.3},0).wait(1).to({regX:-89.4,regY:-291.4,rotation:-3.5,y:207.3},0).wait(1).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,rotation:-6.8,x:336.9,y:761.2},0).to({_off:true},1).wait(1).to({_off:false,regX:0.2,scaleX:1,scaleY:1,rotation:-11,x:-435.3,y:305.2},0).wait(1).to({regX:-276.5,regY:19.8,scaleX:1,scaleY:1,rotation:-5.7},0).wait(1).to({regX:-377.6,regY:40.3,scaleX:1,scaleY:1,rotation:-3.7,y:305.3},0).wait(1).to({regX:-444.6,regY:57.9,scaleX:1,scaleY:1,rotation:-2.4,y:305.2},0).wait(1).to({regX:-489.4,regY:71.6,scaleX:1,scaleY:1,rotation:-1.5},0).wait(1).to({regX:-523.5,regY:83,scaleX:1,scaleY:1,rotation:-0.8},0).wait(1).to({regX:-546,regY:91.1,rotation:-0.4},0).wait(1).to({regX:-559,regY:96,scaleX:1,scaleY:1,rotation:-0.1,y:305.3},0).wait(1).to({regX:0.3,regY:-0.3,rotation:0,x:128.9,y:207.2},0).wait(1));

	// Layer 16
	this.instance_1 = new lib.otraroka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1166,448.6,1,1,0,0,0,-0.3,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:218,regY:79.3},0).wait(1).to({regX:299.4,regY:109,x:1166.1},0).wait(1).to({regX:356.5,regY:129.8,x:1166},0).wait(1).to({regX:396.6,regY:144.3,y:448.5},0).wait(1).to({regX:426.7,regY:155.3,x:1166.1,y:448.6},0).wait(1).to({regX:449.7,regY:163.7,x:1166},0).wait(1).to({regX:465.2,regY:169.3},0).wait(1).to({regX:474.4,regY:172.7,x:1166.1},0).wait(1).to({regX:-0.3,regY:-0.1,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(9).to({_off:false,regX:-0.3,scaleX:1,scaleY:1,rotation:0,x:1166,y:448.6},0).wait(1).to({regX:218,regY:79.3},0).wait(1).to({regX:299.4,regY:109,x:1166.1},0).wait(1).to({regX:356.5,regY:129.8,x:1166},0).wait(1).to({regX:396.6,regY:144.3,y:448.5},0).wait(1).to({regX:426.7,regY:155.3,x:1166.1,y:448.6},0).wait(1).to({regX:449.7,regY:163.7,x:1166},0).wait(1).to({regX:465.2,regY:169.3},0).wait(1).to({regX:474.4,regY:172.7,x:1166.1},0).wait(1).to({regX:-0.3,regY:-0.1,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(3).to({regX:-4,regY:-2.4,scaleX:1,scaleY:1,rotation:0.2,y:274.5},0).wait(1).to({regX:-14,regY:-8.3,scaleX:1,scaleY:1,rotation:0.7},0).wait(1).to({regX:-32.3,regY:-18.6,scaleX:1,scaleY:1,rotation:1.5},0).wait(1).to({regX:-61,regY:-33.1,scaleX:0.99,scaleY:0.99,rotation:2.8},0).wait(1).to({regX:-101.3,regY:-51,scaleX:0.99,scaleY:0.99,rotation:4.6,y:274.6},0).wait(1).to({regX:-162.3,regY:-72.5,scaleX:0.98,scaleY:0.98,rotation:7.3},0).wait(1).to({regX:-253.3,regY:-93.5,scaleX:0.98,scaleY:0.98,rotation:11.1,y:274.5},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:21.6,x:1128,y:542.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.3,rotation:-22.5,x:1204,y:288.6},0).wait(1).to({regX:247,regY:58.1,scaleX:0.98,scaleY:0.98,rotation:-11.7,x:1204.1},0).wait(1).to({regX:342.6,regY:55.1,scaleX:0.98,scaleY:0.98,rotation:-7.6,x:1204,y:288.5},0).wait(1).to({regX:405.9,regY:45.6,scaleX:0.99,scaleY:0.99,rotation:-4.9},0).wait(1).to({regX:447.8,regY:35.9,scaleX:0.99,scaleY:0.99,rotation:-3,x:1204.1},0).wait(1).to({regX:479.2,regY:26.8,scaleX:1,scaleY:1,rotation:-1.7,x:1204,y:288.6},0).wait(1).to({regX:499.8,regY:19.8,scaleX:1,scaleY:1,rotation:-0.7,x:1204.1,y:288.5},0).wait(1).to({regX:511.5,regY:15.6,scaleX:1,scaleY:1,rotation:-0.2,x:1204,y:288.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:687.9,y:274.6},0).wait(1));

	// Isolation Mode
	this.instance_2 = new lib.crowd();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356.5,320.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249));

	// Isolation Mode
	this.instance_3 = new lib.city();
	this.instance_3.parent = this;
	this.instance_3.setTransform(349.9,409.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(249));

	// CLOUDS
	this.instance_4 = new lib.fgdsa1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(349,87.4);
	this.instance_4.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(249));

	// Layer 9
	this.instance_5 = new lib.fons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(341.8,144.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(249));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.9,94.3,1640.9,862.3);
// library properties:
lib.properties = {
	width: 1070,
	height: 650,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;