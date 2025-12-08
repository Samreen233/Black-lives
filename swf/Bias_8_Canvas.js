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


(lib.two_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70ACE9").s().p("AkkBPIFHgDIA6gHQBIACBkifIAPgFIAUAKIgUANQgHAlhOBNIhLAlIg+AKIllADg");
	this.shape.setTransform(210.3,186.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82FFFF").s().p("AETK0IgPgNIgcgFIo7ADIiEAKIgQgcIAKgeIERkOICKiiIA5hQIBKiEIAehLIAeiTQAPjzi4g5QhBgPgjAMIhLAZQhVAwg6BhIgygRQgTgjB1iZIBnhVQA0glBngSQFSgtB5EvQAsC7hhC5Ig1BVIhNBhIhnBpIkKDyIgHAPIFkgCIA+gKIBMgmQBNhNAHgmIAUgMIAGAAIAdAMIAKASIiRGBIgUAWQgGACgGAAQgXAAgMgdg");
	this.shape_1.setTransform(196,149.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#446E9E").s().p("AkjI1IDzjtIBMhYIB9igIBaihIAhhkIAMhLQAUj/i+gyIhQgDIhHAXQg1AWggAoIg/BQIgygRIgFgNIAyASQA6hiBVgvIBKgZQAjgNBBAPQC5A6gPDyIgeCUIgeBLIhLCDIg6BQIiICjIkREOg");
	this.shape_2.setTransform(178.4,153.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001F49").s().p("AgUAkIBDhoIgxBUIgsA1g");
	this.shape_3.setTransform(225.6,147.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87B4E7").s().p("AgJABIAQgLIADAFIgQAQg");
	this.shape_4.setTransform(180,194.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8AC0F8").s().p("AlBBcIARgRIGFgFQBTAABjihIApAKIAOATIgxgTQhlCkhSACIhDAHg");
	this.shape_5.setTransform(211.5,186.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C628F").s().p("AjGBeIgWgMIAMACIAKgHIAcgtIA+hAIAtgeIAtgSQCBgvBuB4Qhhhah4AjIgsARIgyAjIg8BAIgZAog");
	this.shape_6.setTransform(179.6,104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7FFFFF").s().p("AEPKuIg3gPIodgCIiMAKIgNgIIgHgRIAHgeIDLjDICCiPICHivIBFh8QBujohTi5IgMgSIgDgFIgFgFIgCgFQhth4iCAwIgtARIgtAeIg/BBIgbAtIgKAIIgNgDIgCAAIgUgKQgjgjBpiJIA5g8IA8gtIBGgjQE6hLCFCYQDIDcibExIhEBoIgaAhIgsA3IhVBaIkPD1IgSAMIADAKIFYAAIBDgHQBTgDBkilIAyAUIACAPIidGQIgeAFQgNAAgPgjg");
	this.shape_7.setTransform(195.4,149.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4F7EB2").s().p("ABFitQAHgeg3gFQASgeAtAvIiBFYQgNAogZAcg");
	this.shape_8.setTransform(235.9,199.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5380B2").s().p("AjwAUIAggPIFOADQA/gBA0gdQgHAbh2ARg");
	this.shape_9.setTransform(202.9,193.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D9BD8").s().p("AgSAGIAFgFIAggLIAAAHIggAOg");
	this.shape_10.setTransform(180.1,194.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C618F").s().p("AghEpIBohrIBVhsIA8hlQCRkJjDj4IBQBgIAhBLIAPB6IgFBBIgXBaQgvDKnfGSIghAMg");
	this.shape_11.setTransform(208.1,141);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#517BAC").s().p("AiwBSQCcjzDFBeQgdgKg1ACIhfAcIhFA4Ig8BTIgPACg");
	this.shape_12.setTransform(176.2,104.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5DFFFF").s().p("AEeLPIgZgjIgSgHIhDgIIoMgFIh4AFIgKgRIAAgZIAKgPIEGkHICAiWIBoidIAqhUQB2l3ithaIgWgMQjGheicDzIgygWIAKgjIAvhaIBEhTIA8gyIBNgqQFOhTBzCZQDDD3iREJIg8BnIhVBqIhpBsIkDDrIgFAFIAFAFIFlACQB1gRAIgcIACAAIArglIA3hVIAKgFQA3AFgIAeIiYGLIgXAKg");
	this.shape_13.setTransform(194.9,150.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#558CC5").s().p("AA+iyQAIgUg1gPIAmgKQAoAIAAAWIiLF0QAAARgyAcg");
	this.shape_14.setTransform(235.3,199.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#406998").s().p("ACCAMIlggFIAwgOIFQAFIA9gKQguAZgoAAIgHgBg");
	this.shape_15.setTransform(200.8,194.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2F7CC3").s().p("AgbALIADgHIAzgOIAAAHIguAOg");
	this.shape_16.setTransform(180.5,193.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4977AA").s().p("ADthBQBsk2kJi5IBmBDIBGBTQBQCqg0CdQgwDlnfGQIg0APQHLl+BNj0g");
	this.shape_17.setTransform(208,138.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5487BE").s().p("AisBPQBnjYDxA+IhDgCIhVAbQhNAtgyBeg");
	this.shape_18.setTransform(175.8,105.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#32FEFF").s().p("ADzKsIg8gKIoHgMIh6AFIgNgXIADgZIAKgMIDrjrICOiqIBtiqIAwhrQBfmGi4g3Qjzg+hmDZIgtgRQgKgKARghIAXgvIA+hfIBfhVQDjiADNBnQEJC5hsE2QhND0nLF+IgDAIIAIAAIFfAFQArACAygbQBLgmBBhuQA0APgHAUIieGTIgjACQgWgtgNAFg");
	this.shape_19.setTransform(194.4,149.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3E7CB9").s().p("AhQC3IB/lYQAPgSgPgUIghgPIAygKQAyAKgKAZIiLF5QgCAMhEAZg");
	this.shape_20.setTransform(234.3,200);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6292C6").s().p("AjSAEIBBgOIFkACQgjATg3AAg");
	this.shape_21.setTransform(199.1,194.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#116EC0").s().p("AghABIBDgLIAAAHIhAAOg");
	this.shape_22.setTransform(181.1,193.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5992CD").s().p("ADjhEQBnk7kEixQEGA8goGNQgUDZn1GzIhEAMQHTmQA5jlg");
	this.shape_23.setTransform(207.5,137.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3C79B6").s().p("AimBPQBhjZDsA8QgvgHgeAMIgyAXQhPAqg1Bjg");
	this.shape_24.setTransform(175.5,105.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#13F3FF").s().p("AENLVQgXgtgPADIhBgKImogPIi7ACIgNgUIAIgjICOiMIBxh9ICHiqIBZiTIAjhNQBumSi9hBQjug8hhDZIgtgUIAKgoIBLiEIAqgwIA/g0QDdh7C+BiQEECxhmE7Qg6DlnSGQIACAKIFMAIQA3AAAjgUQBcgtAyhpIANgDIAgAPQAPAUgPASIh/FZIgZAqg");
	this.shape_25.setTransform(193.9,150);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3078BC").s().p("AhJCMIByk6IAAgUIgHgIIgegMIBLgKQAgAIADAWIiLGAQgFAPhTAUQAPgFAZhQg");
	this.shape_26.setTransform(233.4,200.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6393C7").s().p("AjEADIBNgPIE8AKIhFAPg");
	this.shape_27.setTransform(198,194.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0373D1").s().p("AgqALIAAgHIBVgOIAAAHIhNAOg");
	this.shape_28.setTransform(181.8,193.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#387DC0").s().p("AibBSQBhjbDWA6IhBAPIgtAZQgtAWhABtg");
	this.shape_29.setTransform(175.1,105.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3C81C3").s().p("ADOgxQBBi3hVi4IhBhTQgwgyhWgZQFQA8gWF3IgUBXIgmBfIgyBUIg+BWIhfBrIj8DwIhVAPQGelmBdkKg");
	this.shape_30.setTransform(207.7,136.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#04DFFF").s().p("ADlKqIhBgMIm6gXIiWADIgMgSIAAgWIAKgSIDrj8ICJi0IBUiRIArhoQBXl/i1g5QjXg6hiDcIgqgRIAMg1IA1hkIAWggIBJhJQBuhrDiAeIAKAFIADAAQBXAZAwAyIBBBSQBVC5hBC3QhdEKmeFmIAAAHIAIAAIFEAKIBGgPQBhgqAthpIASgIIAeANIAHAHIAAAUIhzE7QgZBQgPAFQgGAFgHAAQgVAAgXgtg");
	this.shape_31.setTransform(193.4,150.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E72BE").s().p("AhOCFIBtk7IgKgTIgggQIBhgHQAlAKgFAZIiGF+QgHAOhfASQAMgIAchUg");
	this.shape_32.setTransform(232.2,200.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77ABE2").s().p("Ai9AAIBcgMIEfAKIg5APg");
	this.shape_33.setTransform(197.3,194.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0080EA").s().p("AgxAKIAAgHIBjgMIAAAHIhbAMg");
	this.shape_34.setTransform(182.5,193.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A77BF").s().p("AiXBUQARgCAthUIA5g3QBSg/BnAtQiDAeg9CLg");
	this.shape_35.setTransform(175.3,105.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2577C2").s().p("ADEhjQA5mHkahUICHAmIAZAKIBGA0QB7B7gcDZQAXDRoHHoIhkAMQGelmBSk8g");
	this.shape_36.setTransform(207.6,136.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00D2FF").s().p("ADNKnIg3gKImhgZIiOAAIgNgZIAGgZIDSjrICBisIBcieIAohgQBkmJizhDQhngthSA+Ig6A3QgsBVgSADIgjgPIANg3IBAh7IBYhcQBhhaDMAUIAGACIAJADQEaBUg4GHQhTE8meFmIAAAHIAIAAIFBANIA6gPQAxACBiidIAhAPIAKAUIhuE7QgcBVgNAHIgZADQgTgrgXgFg");
	this.shape_37.setTransform(193,150.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1F75C3").s().p("AiTBSQBnjjC/BGQhpAUhACTg");
	this.shape_38.setTransform(176.3,105.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1370C2").s().p("AhtDVICDmKIgHgUIgbgPIBmgKIAcAMIAKAKIAAAPIiAF5QgGAZh4AOg");
	this.shape_39.setTransform(230.3,200.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#78ACE3").s().p("Ai1AAIBugNID9AKQgTAOg/ADg");
	this.shape_40.setTransform(196.5,194.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0090FF").s().p("Ag5ADIBwgMIADAHIhtAMg");
	this.shape_41.setTransform(183.5,193.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1674C8").s().p("ACphJQBJmVkfhhICGAeQAhgDBQBJQBzBzgZDoIgPBEIgmBqIgyBdIh1CdIj+EMIhxAMQF5lZBXkwg");
	this.shape_42.setTransform(207.3,136.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00C7FF").s().p("ADiLSQgKgjgWgHIg/gNImCgeIiFAAIgKgUIAAgWIAPgXIDGjoIB9i0IBKiMIAjhZQBXmViXgyQjBhGhmDjIgjgPIAMg5IBBiAIBLhSQBLhYDUANIAFACIACAAQEgBihJGVQhXEwl5FZIAFAHIEaAPQA+gCAUgPIAwgcQAtgtAghLIASgFIAbAPIAIAUIiFGLIgRAPg");
	this.shape_43.setTransform(192.6,150.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0C72C8").s().p("AABioQAPgbgugXIB5gHQAjAHADAZIh7GAQgJAZh9AKg");
	this.shape_44.setTransform(228.9,200.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#294C78").s().p("AingCIBzgMIDcAMQgUAPgyACg");
	this.shape_45.setTransform(196.3,194.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0C77D2").s().p("ACdhvQAtl8j+hTQFYgUgFHRQANDZnJHbIiCAMQF0llBIlJg");
	this.shape_46.setTransform(206.8,136);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009FFF").s().p("Ag9AKIgDgHICBgMIAAAHIhyAMg");
	this.shape_47.setTransform(184.5,193.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1976C8").s().p("AiKBSQBfjnC2BNQhVAhhACDg");
	this.shape_48.setTransform(177.1,106);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00BBFF").s().p("AC6KsIg3gPIl2gjIh2gDIgKgRIAAgZIAKgSIBziJIBThxIBzi0IA7h6IAjhhQBImQiBgqQi2hOhfDpIgjgSIAFgeIAohmIAeg1IAvg8QBfh1DAAUIAFACIACAAQD/BTgtF8QhIFJl0FlIADAIIAMAAIEIARQAygCAUgPQAygPBOiKQAvAXgPAbIiCGLIgHADQgcgKgRgjg");
	this.shape_49.setTransform(192.2,150.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0A75CD").s().p("AhzDIIBzl5IgFgZIgZgOIB/gKQAqAPgHAWIh2F9QgKAZiIAKg");
	this.shape_50.setTransform(227.6,201);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3E6695").s().p("AiigCIB9gMIDIAMQgQAPhDACg");
	this.shape_51.setTransform(195.8,194.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#097BD7").s().p("Ag/o/QFngFgMGwQAPDtm8HbIiKAMQLytRoWkug");
	this.shape_52.setTransform(206.6,135.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A7FF").s().p("AhEAKIAAgHICJgMIAAAHIh8AMg");
	this.shape_53.setTransform(185.1,193.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1579D0").s().p("AiGBZIAohOQAbguAmgcIBDgeQAxgMAwAqQhGAUg+CLg");
	this.shape_54.setTransform(177.8,105.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00B4FF").s().p("ADOLYQgMg0g1gFIlxgoIh1gDIgKgRIACgeIAKgPICjjSIB1i5IBFiPIAehPQBaloiDhpQgwgqgyAMIhDAeQgmAcgbAvIgoBOIghgPIAKg6IAohfIAcgvIA0hBQBJhfC9AMQIXEvryNRIAAAHIAMAAIDyASQBDgDAPgPIAogbIAUgZIAyhfIAPgDIAZAPIAFAZIhzF6IgRAbg");
	this.shape_55.setTransform(191.9,150.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0E70C5").s().p("Ah1DWIB/mKIgIgXIgagPIB0gHQAoAMgFASIh9GCQgJAUh4APg");
	this.shape_56.setTransform(229.5,200.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#79ADE4").s().p("AiugCIB2gMIDnAMQgUAPg0ACg");
	this.shape_57.setTransform(196,194.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#009AFF").s().p("Ag+AKIADgHIB6gMIAAAHIh1AMg");
	this.shape_58.setTransform(184,193.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1B75C6").s().p("AiMBSQBNjdDMBBQhaAWg9COg");
	this.shape_59.setTransform(176.9,106);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0F76CF").s().p("ACnh5QAml3j+hOQFTgRAAHJIgZBsIgZBFIgvBcIiDC0IjkD4Ih7AMQHfn7gXi9g");
	this.shape_60.setTransform(207,136);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00C0FF").s().p("ADcLYQgHgyg6gFImcgmIhwAAIgNgWIAGgeIC7jkICEjFIBDiCIAjhcIAUhIIAPh2IgHiCQgShGgbggIgogjQjMhBhODeIgjgPIAFgoIAohhIAbgwIBJhVQBXhcC7ARIAFADIACAAQD/BNglF3QAWC+neH7IgDAHIAHAAIEVASQA1gDATgPIASgFIAhgbIAlgyIAeg8IARgKIAcAPIAHAWIh/GLIgKANg");
	this.shape_61.setTransform(192.3,150.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2275C1").s().p("AiRBRQBSjWDRA3QhmAUhICVg");
	this.shape_62.setTransform(176.1,105.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1672C4").s().p("AhoDCIB/l2IgIgUIgagPIBjgKQAtAPgKAUIh/F4QgFAchzAMg");
	this.shape_63.setTransform(231,200.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#78ACE3").s().p("Ai2AAIBkgNIEJAKQgaAOg5ADg");
	this.shape_64.setTransform(197,194.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#008CFD").s().p("Ag3AKIAAgHIBvgMIAAAHIhjAMg");
	this.shape_65.setTransform(183.1,193.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1975C6").s().p("Agqo/IBRAPIBYAeIBLA3QB1B9gZDUIgRBYIgeBRIg3BpIg/BaIhNBdIjtD1IhwAMQNOtHpPk4g");
	this.shape_66.setTransform(207.3,136.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00CAFF").s().p("ADmLVQgNgmgOgCIgwgNImyggIh2AAIgHgSIAAgZIAKgPIDDjhICFi5IBPiRIAghMQBhmuihgtQjSg3hTDXIgogSIANg0IBBiAIBLhSQBrhnC7AZIAFADIADAAQJQE4tPNHIAAAIIANAAIEaAPQA5gDAZgPIARgFIAmgeQA3g8APgyIAUgHIAbAPIAIAUIh/F3IgUAgg");
	this.shape_67.setTransform(192.8,150.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2172BD").s().p("AhrDWICJmFIgIgZIgdgPIBPgKQAyAMgFAUIiIGDQgIAPhaARg");
	this.shape_68.setTransform(232.5,200.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#77ABE2").s().p("AjCAAIBigMIEjAKIg8APg");
	this.shape_69.setTransform(197,194.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#017EE6").s().p("AgwADIBhgMIAAAHIhhAMg");
	this.shape_70.setTransform(182.4,193.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2C78BF").s().p("AiXBUQAPgCAohOIBDhAQBcg+BaAvIhWAhQg+Asg0Bfg");
	this.shape_71.setTransform(175.3,105.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2878C1").s().p("Ag8FSIBXhkIBDhdIBLiOIAmh/QAqlvkUhTQFpA5glGJIgXBaIgeBKIgyBaIhBBaIhcBsIjvDrIhiAMg");
	this.shape_72.setTransform(207.6,136.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00D4FF").s().p("AD3LVQgPgtgYAAIg3gKImmgZIiRAAIgKgRIAIgmIDPjjICHiyIBZiYIAqhmQBll+i2hLQhagwhcA/IhEBBQgoBNgPADIgmgPIAKgwIA3huIBYhkQBahkDiASIAIACIAFADIADAAQEVBSgrFwIglB/IhLCOIhEBcIhXBkIjvDuIAAAHIFJANIA8gPIAZgIIAvgoIAkgtIAZgyIAUgMIAdAPIAIAZIiJGGIgKAMg");
	this.shape_73.setTransform(193,150.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#266EB2").s().p("AhXCyICBllIgKgWIgegNIBLgKQAhAIACAZIiLF9QgFAPhPAUQAMgEAMgrg");
	this.shape_74.setTransform(233.5,200.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0472CF").s().p("AgqALIAAgHIBVgOIAAAHIhNAOg");
	this.shape_75.setTransform(181.8,193.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6393C7").s().p("AjEADIBNgPIE8AKQgJAMg8ADg");
	this.shape_76.setTransform(198,194.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3E82C4").s().p("AgWo/QF7Bug8FFIgWBhIgjBXIgyBVIg3BLIhsB6Ij2DrIhVAPQOPs9p1lCg");
	this.shape_77.setTransform(208,136.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#05E1FF").s().p("ACtKfIm/gXIieADIgKgPIAAgcIANgUIDQjZICTi8IBbiYIAmhPQBumxjAgvQgbgXhDAFIhaAeIhLBGQgrBOgPAAIgmgPIANg3IBIiAIBdhaQBkhaDbAcIAHACQJ3FDuQM9IAAAHIAIAAIFEAKQA8gCAJgNQArANBnijIAOgFIAfANIAKAWIiDFmQgMAsgMADIgBAAIgYADQgPg3hLAAg");
	this.shape_78.setTransform(193.5,150.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#397EC0").s().p("AieBTQAPAAArhOIBLhFIBZgeQBDgFAcAXIg6AKIg0AeQg2Agg3Bjg");
	this.shape_79.setTransform(174.9,105.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3D7BB9").s().p("AhbDQICLl3IACgbIglgUIAygKQAyAKgKAZIiLF5QgIAPg8AWg");
	this.shape_80.setTransform(234.5,200);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6292C6").s().p("AjSAEIBDgOIFiACQgUAOhIAFg");
	this.shape_81.setTransform(199.1,194.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#106EC0").s().p("AgiABIBFgLIAAAHIhCAOg");
	this.shape_82.setTransform(181.3,193.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5891CC").s().p("ADhg/QBrk9kGi0QEGA8goGNQgUDZnzGzIhGAMQG1lvBVkBg");
	this.shape_83.setTransform(207.5,137.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3B78B5").s().p("AihBQQBijWDiA4QgigHgpAQIgrAUQg+Aeg+Btg");
	this.shape_84.setTransform(175,105.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#12F2FF").s().p("AEOLTQghg1gsAFInagRIijACIgNgWIALgjIDhjmICbjBIBbiTIAthoQBpl1jChNIgFgBQjig5hjDXIgqgRQgLgKAZgyIA/hsIAtg0IBBg3QDdh7C+BiQEHC0hrE9QhWEBm0FvIADAKIFIAIQBJgFAUgPQBagrAyhpIAPgFIAlAUIgCAcIiMF3IgMARg");
	this.shape_85.setTransform(193.8,150);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5189C3").s().p("AA9iyQAFgZgwgKIAmgKQAtANgFAUIiGFnQADAWg8Ahg");
	this.shape_86.setTransform(235.2,199.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4D79AA").s().p("AjcAGIAygOIFOAFIA5gHQgyAVgqAAg");
	this.shape_87.setTransform(200.6,194.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2A78C1").s().p("AgcALIADgHIA2gOIAAAHIgxAOg");
	this.shape_88.setTransform(180.6,193.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5382B6").s().p("ADng6QBxk7kMi7QEsClhkFCQhLD+m+FtIg3APQHDl3BQj0g");
	this.shape_89.setTransform(208.1,138.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5085BD").s().p("AiqBOQBmjYDvA+Ig+gCIhQAZQhSAvg3Bhg");
	this.shape_90.setTransform(175.6,105.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2DFDFF").s().p("AC2KhIoRgNIhrAFIgPgWIAKgjIDojpICei+IBjidIAjhIQB4mXjHhGQjwg/hnDaIgtgSQgKgKAZgyIBJh1IBkhdQDlh/DIBmQELC8hwE7QhQD0nEF3IgCAHIAHAAIFdAFQArAAAygWQBDgjBLhzQAwAKgFAZIieGSIggAFQgSg3hQADg");
	this.shape_91.setTransform(194.3,150);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6394C9").s().p("ABCiuQADgegygFIAegKQAjAHACAXIiDFbQgFAggjAeg");
	this.shape_92.setTransform(235.9,199.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#385F8E").s().p("AD1hXQBQk/igh+QC7CDhSE6Qg6DXnVGNIglAHQHamKBBjhg");
	this.shape_93.setTransform(208,141);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6FA2D8").s().p("AjrAQIAlgQIFMAEQBDgEAjgSQgKAThmASg");
	this.shape_94.setTransform(202.1,193.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5293D2").s().p("AgSAAIAlgIIglARg");
	this.shape_95.setTransform(180.4,194.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4C79AB").s().p("AikBOQBujXDbA9QgVgCggAAIhfAbIhMBAIg1BLIgRADg");
	this.shape_96.setTransform(175,105.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#52FFFF").s().p("AEfLSQgZgtgPACIhVgKInpgHIiJAHIgNgRIADghIAKgMIDejaICqjIIBhiTIAthcQB4lKi3iEQgGgJgggEQjcg9hvDYIgygWIASg1IAgg8IBEhXIBDg6IBLgqQFThTBuCZQCgB9hQFAQhBDgnaGLIAAAKIFnACQBngRAKgUQAygXBGhwQAyAFgDAeIiYGLIgNAKg");
	this.shape_97.setTransform(194.8,150.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5683B5").s().p("AlBBaIAUgPIGHgFQBngcAxhYQgvBihkAeIhDAKgAEVhRIgWAMIAIgPIARgHIAgAMIAKAKIAAANg");
	this.shape_98.setTransform(211.5,186.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7BAEE4").s().p("AgMAJIAIgJIAOgKIADAHIgTAOg");
	this.shape_99.setTransform(180,194.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#49709F").s().p("AjUBSQA9hoB/g5QCQgwBdBsQhLhLh+AeIg9AbQhBAhg5Bjg");
	this.shape_100.setTransform(179.5,104.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#11315B").s().p("AgVC8IBWhaIBdhvIAyhQQBeipgVijQAbCzhdCbIgyBQIiHCaIktERIgPAKg");
	this.shape_101.setTransform(208.2,151.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#76FFFF").s().p("AEgLTQgSgtgbACIg6gFIoYgCIh2AHIgKgKIgFgbIAMgXID2jwICVivIBJhmIBKiJQBxk7iAh4QhchriQAvQiAA6g8BpIgogPIgFgSIAchBIA+hfQBVhzCsglQFPg/CHFDIAIAuQAVCjhfCoIgxBPIhdBxIhXBaIkJDtIgHAKIAFADIFdACIBEgKQBkgeAvhkIAAgCIAFgFIADgFIAEgIIAAgCIAXgNIAtAZIhzE2QghBfgOAIg");
	this.shape_102.setTransform(195.3,149.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#80B8F2").s().p("AkvBLIFRAAIA3gIQBSgCBaiaIAUgCIAhARIgSgHIgUACQhcCihdACImUAHg");
	this.shape_103.setTransform(211.1,186.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#85FFFF").s().p("ADxKkIo8gCIiMAKQgWgcAHgKIAcglIDrjrIA8hEQEAkQAZj+IADgKIAAgmIACgKIAAgKQgRjhingbIg0gFIhpAeQhVAvg6BiIgvgPQAUjaFAhuQFdgyB4EqQAvDUhfCjIg0BVIhVBqIhkBnIkIDtIgKASIGUgIQBcgCBdijIAUgCIARAHIADAAIARAUIgCAKIiFFcQgRAygNAAIgbACQgXgyggAFg");
	this.shape_104.setTransform(195.7,149.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3B6290").s().p("ABbhnIg8gFIhAAPQgbAAhQBGIg8BSQgKAHgtgWIgKgNIAvAPQA6hgBVgwIBogeIA0AFQCoAcARDgQgvjliAgDg");
	this.shape_105.setTransform(181.4,107.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00204B").s().p("AgKgLIAFACIAFAFIALAQg");
	this.shape_106.setTransform(223.4,218.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#64A4E3").s().p("AkhBPIEwgDIBOgKIBLglIAqgsIAwhLIAPgDIAbAKIgNADQhVCchfAIIg0AHIliADg");
	this.shape_107.setTransform(210.5,186.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#78FFFF").s().p("AEaLCIgMgSIgFgFIgFgCIgogIIoRAFIigANIgPgUIAAgcIEGkEICKigIBJhhQCokrgehdQgTj6iggWQhKgNgmAPIg3AXQgeAHg8BEIgwBDIgRAAIgogRQAbjVFIhwQFfgtBxE2QAoC5hdCvIg5BeIhaBuIhhBkIj+DmIgKAPIFigDIA0gHQBfgIBVidIAMgDIAjANIAIAWIiRGBQgRARgPAAQgOAAgMgOg");
	this.shape_108.setTransform(196.3,149.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5785B7").s().p("AkxI+IAMgRICyiqIBfhnIB3iOIA8hVIBViiIAliRQAXkLi+gyIhGgFIhbAbQg1AZgZAjIg5BOQgLAHgqgWIgDgPIApARIARAAIAvhDQA9hEAdgHIA2gXQAmgPBLANQCgAWAUD6QAeBdiqErIhJBhIiICgIkGEEg");
	this.shape_109.setTransform(178.6,154.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3C5F8C").s().p("AgKAAIgNgRIAUAGIAMAEIAPAZg");
	this.shape_110.setTransform(223.4,218.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#5B8ABD").s().p("AgqBCIAQgvIAphKIAcghIgpA/IgaBCIACASIAsARIgHAKIgPADg");
	this.shape_111.setTransform(158.3,104.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4F99DE").s().p("AkZBPIE0gFIA3gKQA9AFBrikIAFACIAmAIIg/BbIglAmIhMAlIhGAKIlSAFg");
	this.shape_112.setTransform(210.8,186.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#518BC5").s().p("Ak2JIIAHghIECkBICGigIA5hQIBaipIAehnIANiHIgNhIIgWg3IghgtQixhzhZBQQBehiC+BnQBwBSgoD6IgeBnIgoBXIgyBUIibDIIhMBYIj1DyIgDAcg");
	this.shape_113.setTransform(178.4,155.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#56FFFF").s().p("AEjLHIgPgZIgMgFIgUgFIhsgFImjAKIi0APIgRgWIACgcID1jyIBOhYICbjIIAxhVIAohWIAehnQAoj6hxhSQi9hnhfBiIgFACIgCAAIhJBEIgjA0IgFADIgCAAIgtgSIgDgRIAchEIAog+IACgFIAIgIIACgFIAIgHQCJjBE9AwQDXA+A3DGQAoC+hdCqIg5BeIhLBfIhYBcIkPD6IgKASIFTgFIBGgKIBLgmIAlglIA/hdIAoANIAHAWIiJF3QgEAZgYAAQgLAAgOgFg");
	this.shape_114.setTransform(196.6,149.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#426B9A").s().p("AgSAAIgMgTIAiAFQAPAAAMAig");
	this.shape_115.setTransform(222.9,218.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3C8CD5").s().p("AkWBPIEWgFIAxgIQBXgHBOiVIAbgFIAwAKIgNACQhfCnhNgDIgyAIIlWAHg");
	this.shape_116.setTransform(211.6,186.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4285C6").s().p("Ak8JEIAIgbQH9noAykAQAtj6hYhTQhphrh8AvQBchVC0B4QBaBLghDzIgjB1IhVCiIiqDcIipC5Ih1BwIgPAZIACAeQglgWACgSg");
	this.shape_117.setTransform(178.4,156.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#528BC6").s().p("AhnBiQBQizCBg8QhpBOgRAtIg5BqIACAeIAoASQgXAGgQAAQgqAAAJgsg");
	this.shape_118.setTransform(164.7,98.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2FFEFF").s().p("AEeLJQgMgjgPAAIgjgFIoWAPIiMAPIgUgKIgDgeIAPgZIB2hxICqi5ICqjcIBUihIAjh2QAgjyhahLQizh4hcBVIgoAZIgrAoIgoA8IgZAPIgogSIgCgeIA5hrQASgtBphOIACAAQBshuEwBQQDeCCgHDGQAlFApFHfIgKARIFVgHIAygIQBOADBfioIAMgCIAcAHIAPAUIiMGGQAAAOgdAAIgTgBg");
	this.shape_119.setTransform(197.4,149.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#598AC0").s().p("AgcgCIgKgRIA0AFQAMgFANAng");
	this.shape_120.setTransform(222.1,218.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2E86D5").s().p("AkMBRID6gHIA+gKQBkgjA5h8IANgDIBBAKIhGBoQg6A6goAFIg5AKIlMAKg");
	this.shape_121.setTransform(211.6,186.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2573BB").s().p("Ak3JNQgPgZAWgZICjiiIBhhuICujkIBVikIAhhwQAtl/kdAPQFghVgvHCIgmCAIhQCXIiTDGIiJCdIisCvIgFAeIAFAUg");
	this.shape_122.setTransform(178.5,157.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#14F4FF").s().p("AEYLGQgNgogMAFIg0gFIoKAXIh9APIgMgFIgGgUIAGgeICsivICJieICTjFIBQiYIAmh/QAvnClfBVIgzAbIgbAZIhJBdIgMACIgtgZIAmhaIA7haIAwgtIBJgyIACAAIAKgFIACAAIAFgCQHRiKBcHZQAoExo7HrIgKASIFLgKIA6gKQAogFA5g6IBGhpIAjALIANARIiFF+QgEAXgaAAQgJAAgLgDg");
	this.shape_123.setTransform(198,149.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#387ABB").s().p("AhqBGIBLhwQBUhVBSgZIhIAyIgwAtIg7BZIglBaIAtAZQgfAGgWAAQhRAABAhTg");
	this.shape_124.setTransform(166.7,97);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3971AB").s().p("AghAAIgMgTIBAAFQAPgFAMAng");
	this.shape_125.setTransform(221.4,218);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2585DA").s().p("AkBBQIDQgHIBFgKQBcgVA/iLIBdAGQhWCfhNAKIhQAKIkkAKg");
	this.shape_126.setTransform(212,186.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#136BBA").s().p("Ak2JXQgMgMAMgjQHineA8koQA3lwkCgUQFPhXg3HqIgeBcIhQCdIiRDIIh3COIisC0IgNAXIAIAlg");
	this.shape_127.setTransform(178.8,157.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#06E2FF").s().p("Am3LFIgIgmIANgWICti0IB3iPICQjIIBQicIAfhdQA3nqlPBYIg+AgIg+BEIghAvIgMADIgtgZIARg1IAwhVIBNhXIAygmIA3gbQG5hzBTHOQAKCPhuDAIhTB1IhGBQIkDEGIgKASIEkgKIBQgKQBNgKBWigIAnAMIAGAZIh7FtQAFAZg3ADQgMgogPAFIhCgFInLAZIiYAUg");
	this.shape_128.setTransform(198.5,149.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2B78C0").s().p("AhkATQAthtDThJIg3AcIgyAlIhMBYIgwBUIgRA0IAtAZQgrANgaAAQhZAABniRg");
	this.shape_129.setTransform(169.4,96.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#22619F").s().p("AgjABIgKgEIgFgPIBMADQAXAKACAYg");
	this.shape_130.setTransform(220.6,217.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2088E2").s().p("AkDBbIAMgKIDdgMIBAgUIAngeIArg5IAWgvIANgPIAKAAIBfAKQhOCQhPAWIg1AKIk1APg");
	this.shape_131.setTransform(212.5,186.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1277CE").s().p("AkzJYQgSgSASgeQHmoDAjj0QA/l3jwgeQE9hagqHeIgcBhIhSCpIgwBLIiOC+IjoEEIgMAZIAHAjg");
	this.shape_132.setTransform(179.3,157.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#01D5FF").s().p("AmnLKIgHgjIAMgZIDpkEICOi+IAvhLIBSipIAchhQAqnek8BaIgyAZIgoAjIgwBLIgUAPIgtgZQAAgtA8hfIBLhXIAygmIA8geQGXhuBXHRQgFC+hXCKIhQB3IhLBaIjyD/IgMAKIAAAKIE1gPIA0gKQBQgXBOiRIAeAKIAHAXIh1FvQgDAjgtgHQgCgZgXgKIhNgDImoAcIiKAUg");
	this.shape_133.setTransform(199.1,149.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#1C73C2").s().p("AijCUIAAgXIAjhOQBYiuDMglIg8AeIgyAlIhKBYQg8BeAAAtIAtAZIhYAKg");
	this.shape_134.setTransform(170.9,96);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#145CA1").s().p("AguABIgNgQIBPgDQAeAAAKAlg");
	this.shape_135.setTransform(219.8,217.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1D8CEA").s().p("Aj0BbIANgKICsgKIA3gMQA5AABNifIBzAHQhNCfhEAIIhGAMIkPAPg");
	this.shape_136.setTransform(212.5,186.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0D7CDB").s().p("AkpJiQgUgKAIggQHLoBAvkFQA1l/jQgZQE0hfgrHqIgWBTIhJChIh6C+IhwCUIivDKIgPAcIAIAlg");
	this.shape_137.setTransform(180,158);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#1A7ACE").s().p("AhtAGQBfiaC4gRQhDAZgoAqIhIBYQhmCIBVAcQg0AMghAAQh1AAB3igg");
	this.shape_138.setTransform(172,95.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00CBFF").s().p("AmaKnIAPgbICvjLIBwiTIB6i+IBIiiIAXhSQAqnqkyBfIgyAeIgmAlIg0BOIgKACQhVgbBmiKIBJhXQAogrBDgZIAFAAIANgCQFzhVBOG9QAgEznwHkIgNAKIADAKIEPgPIBGgMQBEgIBNigIAjANIAFARIhzF8QgHAZgegHQgKgmgeAAIhQADImAAeIieAUg");
	this.shape_139.setTransform(199.9,149.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0C5CA6").s().p("Ag3ABIgIgOIBcgFQAbAAAIAlg");
	this.shape_140.setTransform(218.6,217.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1489E4").s().p("AjmBjIAMgUICRgIIBNgbIAyg0QAjhaARgCIB9AFIhBBvQgbAogwASIgvAKIkBARg");
	this.shape_141.setTransform(212.9,186.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0985E8").s().p("AkqJhQgPgWAMgcQHLojAUjbQAwl/i5gZQE2hhgyHxIgXBTIhICmIigD6IjlEiIgIAmIAKAUg");
	this.shape_142.setTransform(180.9,158.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00C1FF").s().p("AmEK7IAIgmIDmkiICfj6IBIimIAXhTQAynxk1BhIgoAcIgeAgIgtBLIgSAIQhQgcBiiJIBGhYQAZgoBmggIADAAIAKgDIBtgFQBBADBSA5QCKB2AFDAQA0EMnmIMIgNAUIASACIEAgRIAwgKQAvgSAcgoIBBhwIAZAKIAKARIhpF1QAAAegogDQgIglgbAAIhdAFIluAjIiAAUg");
	this.shape_143.setTransform(200.6,149.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#147ED9").s().p("Ai1CVQgKgIAUgtIAthaQBNicDqgSQhmAhgZAoIhFBXQhiCJBQAbIhrANg");
	this.shape_144.setTransform(174.7,95.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#237CCB").s().p("Ag1AEIgKgCIgFgMIBhgHQAegFAKApg");
	this.shape_145.setTransform(217.4,217.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#138EE6").s().p("AjTBnIAMgXQDlAUAyjJICFAHQhCCfg5AHIg3ANIjgASg");
	this.shape_146.setTransform(212.8,186);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#078EED").s().p("AkkJiQgMgUAHgZIDYkfICPjrIAwhmIAhhcIAYh7QAVkniPgvQEshfg1HsIgUBQIg+CdIgyBfIhpCnIjWEiIgKAjIAKAcg");
	this.shape_147.setTransform(182,158.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#1084E1").s().p("Ai4CUIAFgoIAthkQAxiVEOgcQgkAHgsAfIhQBOIhCCBIgPA3IAoAbIhzAKQgCACgEAAQgNAAgigWg");
	this.shape_148.setTransform(176.5,95.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00B5FF").s().p("AlrK2IAKgjIDXkiIBpioIAxhfIA/icIAUhQQA0ntkrBfIhDBBQgjBLgPAAIgogbIAPg3IBDiCIBQhOQAsgfAjgHQAKgCAJAAIBegCQBGAHBDA3QB4BaAKD4QAyDenDIbIgNAXIAXAAIDggSIA3gMQA5gIBBigIAXAFIAPAXIhkF8QgIAZgbgIQgKgqgeAFIhiAHIk1AjIiHAZg");
	this.shape_149.setTransform(201.4,149.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#2582D4").s().p("AhEADIgFgJIB3gKQAPgFANAng");
	this.shape_150.setTransform(216.1,217);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#1193E7").s().p("AjDBnIAMgZQCyAZA4jMICRAEIgyBrQgqA6gZAEIgoAKIjUAVg");
	this.shape_151.setTransform(212.9,186);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0697EF").s().p("AkYJtQgRgjAKgSIDSkuIByjIIBQjFIAUhVQA3kGiUiAQDmiHASG9IgeCjQgjBPgZBSIiPEEIjHElIgFAlIAIAUg");
	this.shape_152.setTransform(183.3,158.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00A8FF").s().p("AlOK+IAFglIDIkkICNkEQAZhTAkhPIAdiiQgRm9jlCGIgUAKIgeApIglBIIgQAIIgjgZIAGgfIAthwQBkieBSgCIAHAAIADAAIAHgCIBNAAQA+AHA/A3QBrBiAPDUQAoEYmZH7IgMAZIAWAAIDUgVIAogKQAZgEArg6IAxhsIAZAKIAIASIhVFjQgCAwgkgFQgMgpgPAGIh4AKIkZAlIhvAWg");
	this.shape_153.setTransform(202.3,150);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0D8BE4").s().p("Ai3CXIgFgUIAwh4QBPi1D6ACQhSADhlCdIgsBwIgFAeIAjAZIiTAKg");
	this.shape_154.setTransform(178.4,94.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#207DCF").s().p("Ag2AEIgNgCIgEgJIBvgKQAMgFAVApg");
	this.shape_155.setTransform(216.8,217.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#1290E7").s().p("AjPBkIANgUQDWASAqjHICRAHQhDCag6AMIgnAKIjjAVg");
	this.shape_156.setTransform(213,186);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0693EE").s().p("AkaJqQgUgRAKgeQHVp4gXjDQAhkTiMhQQD6h1AAG/IgeCZIhECpIh/DeIhcCMIiCCvIgHAeIAHAcg");
	this.shape_157.setTransform(182.6,158.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00AFFF").s().p("AldK2IAHgeICDivIBciMIB/jfIBDipIAeiYQAAnAj5B2IgjAbIgtA/IgUAqIgPADQhLgmBziiQBJhsBmgUIAFAAIAIgCIBgAFQAvAABMBDQBtBfAIDmQAWEbmZHhIgMAUIAWADIDjgUIAogKQA6gNBDibIASAFIAMAUIhfF8QgFAZgbgFQgVgqgMAFIhwAKIknAjIh9AWg");
	this.shape_158.setTransform(201.8,149.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0F88E2").s().p("Ai9CWIgCgZIAxh1IAfgvIBNhLIAxgcICygbQhnAUhJBrQhxCiBLAmIiFAMg");
	this.shape_159.setTransform(178,95);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#1B70BD").s().p("Ag2ACIgNgOIBjgFQAXgFAMApg");
	this.shape_160.setTransform(218,217.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#138BE6").s().p("AjdBkIAMgUIB/gIQAygHAcgUIA0g4IAthaICBAHIhAB3QgaAjgtAPIgtAKIjxASg");
	this.shape_161.setTransform(212.8,186);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#088AEC").s().p("AklJqQgUgeAKgPQG8ojAZjjQBBkzi8hnQBVhGB7BzQBDBJgMDSIgeCRIhJCwIilEJIjTETIgIArIAKARg");
	this.shape_162.setTransform(181.7,157.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00BBFF").s().p("Al2K+IAHgqIDVkTICkkJIBJixIAdiQQANjThEhIQh5hzhVBGIgoAcIghAlIgqBJIgNAEIgggRIgHgSIAehPIA2hiIBYhQQAxgfAggEIAEAAIACAAIALgCIBdgDQBTAHA8A1QCMB4gDDaQAjEGnFH2IgNAUIAXACIDxgSIAtgJQAtgPAZgkIBBh4IAZAIIAKAKIAAAPIhnF6QgCATghgCQgMgqgXAEIhkAGIldAlIh1AUg");
	this.shape_163.setTransform(201,149.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#1281DE").s().p("Ai7CSIAKgrIAvhkQA1iPEJgcQggAEgxAfIhYBQIg1BgIgeBQIAHASIAgARIhzAKIgDABQgMAAgggXg");
	this.shape_164.setTransform(175.8,95.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#0F5CA3").s().p("AgsACIgKgCIgHgPIBZgCQAJgFAaApg");
	this.shape_165.setTransform(219.3,217.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#1586E3").s().p("AjrBiIAMgUICbgIIAygKQA+gFBGiaIB6AFIhDB0QgjAogjALIgwAJIkNASg");
	this.shape_166.setTransform(212.6,186.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0B81E3").s().p("AkoJjQgUgUAKgZQG+n+AwkGQA5lqjNgwQE+hag3HyIgcBcIhDCTIiFDPIhvCWIieC5IgHAhIAHAZg");
	this.shape_167.setTransform(180.5,158.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#177CD3").s().p("AioCUIgFgUIAmhYQBfi/DWgPQhGAZgoAqIhIBYIgvBjIgKAqIAqAZIhaAKQgEACgFAAQgRAAgdgTg");
	this.shape_168.setTransform(173.1,95.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00C6FF").s().p("AmPK2IAIghICdi5IBxiWICDjPIBDiTIAchcQA3nyk9BaIgyAjQg3A1gRAyIgPAKIgrgZIAKgrIAwhkIBIhXQAogrBHgZIACAAIAUgFIAHAAIAGgCIBngIQBbAIBGA3QCEBVAMD8QA1DpnzITIgNAUIASADIENgSIAvgKQAjgKAkgoIBDh1IAZAFIAPAMIAAAPIhpFmQgFAtglgIQgagqgJAFIhaACIl5AhIiOAUg");
	this.shape_169.setTransform(200.3,149.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#1A5EA0").s().p("AghABIgPgEIgHgPIBZADIAWAig");
	this.shape_170.setTransform(220.1,217.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#1E8AE6").s().p("Aj7BaIAMgKIC+gKIAxgKQA3AABVifIBxAFQhYCphGAAIg1AKIklAPg");
	this.shape_171.setTransform(212.5,186.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0F79D3").s().p("AkuJgQgWghAPgRQHkoNAgj+QAyltjcgcQE5hSgmHEIglCHIhECLIgqBGIiZDSIjgECIgPAgIANAcg");
	this.shape_172.setTransform(179.8,158);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00D0FF").s().p("AmnKwIAPggIDhkCICZjSIAphGIBEiLIAliHQAmnEk4BSIg0AeQhJBEgPAvIgPADQhVgcBniEIAjgyIAqgrIBnhBQGWhmBOHHQAqEkoHH2IgMAKIAAAKIEmgPIA0gKQBGAABYiqIAZAHIAMAKIADAPIh2F3QgFAcglgFIgXgjIhagDImeAeIiTASg");
	this.shape_173.setTransform(199.4,149.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#1774C7").s().p("Ah9AsQCIjTCbAFIhmBBIgrAqIgiAyQhmCEBVAbQguAJgeAAQhrAABYh3g");
	this.shape_174.setTransform(171.1,95.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#2E6BA8").s().p("AghAAIgKgEIgFgPIBAADQAXAAAKAkg");
	this.shape_175.setTransform(221.1,218);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#2375C0").s().p("Ah0ArQBDiTDPg5QhnAghlCiIgjBfIAtAZQgqAJgbAAQhhAABWh3g");
	this.shape_176.setTransform(169.7,96.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#2386DD").s().p("Aj7BRIDbgKIBGgRQBSgyA1hmIBaAIQhdCkg+ACIg3AKIk6ANg");
	this.shape_177.setTransform(212.3,186.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#1775C9").s().p("Ak0JcQgPgSANggQIRomAKj8QAvlFj1glQE+hagjHRIgcBkIgoBfIgyBZIinDmIhrB/IidCoIgIAgIAKAUg");
	this.shape_178.setTransform(179.1,157.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#02DBFF").s().p("AmtLHIgKgUIAIghICdinIBriAICnjmIAyhaIAoheIAchkQAinRk8BaIg6AeIhDBLIgXAoIgPAFIgtgZIAjhfQBniiBmghIADAAIAKgFQGvhcBGGzQAzEuolH2IgKARIE6gMIA3gKQA+gDBdilIAjAKIAHAIIAAAUIh4FtQADAZgzACQgJglgXAAIhBgDImqAZIiXAUg");
	this.shape_179.setTransform(198.8,149.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#477DB4").s().p("AgbAAIgPgTIA0ADQAWAFALAfg");
	this.shape_180.setTransform(222,218.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#367EC2").s().p("AhgAsQA2h8CyhJQhUAphaCNIgjBdIAtAZQgjAHgYAAQhcAABThug");
	this.shape_181.setTransform(166.9,97.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#2985D7").s().p("AkLBRIDpgHIA7gKQBIAABbiiIBaAKIgVAIQgMAyg/BCIgdAXIgwAUIhGAKIk4AKg");
	this.shape_182.setTransform(212.3,186.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#1B6EBA").s().p("Ak2JTQgMglAMgIQIRoXAUjsQAymGkOAFQFShfgtHgIgeBkIhYCpIi0DtIhqB7IibCdIgNAeIAIAcg");
	this.shape_183.setTransform(178.6,157.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0BEBFF").s().p("AEZLHQgKgggWgFIg1gDInNAUIiqAUIgNgFIgHgbIAMgeICbieIBsh6IC0juIBWipIAehkQAtnglQBfQgrgFh6CbIgtgZIAjhcQBbiPBUgpQAPgHAPgEIACAAQG/h9BcHRQAtEno2H1IgKASIE3gKIBGgKIAwgUIAegXQA+hDANgyIAUgIIAeAKIAHAXIh/F0QgCAbgeAAIgQgCg");
	this.shape_184.setTransform(198.1,149.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6793C5").s().p("AgQADIgSgWIAsAHQAMgCANAig");
	this.shape_185.setTransform(222.5,218.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#3488D4").s().p("AkOBQIEJgHIBUgUIA0ghIA3hFIAPggIAUgQIA8AIQhcCphVAAIgtAIIlTAKg");
	this.shape_186.setTransform(211.4,186.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#337BC0").s().p("Ak1JQQgNglAPgIIC+jAIBihuICLi0IBcikIAoh9QAymVkuAeQFohkgyHbIgeBkIgoBVIg/BoIidDKIhhBuIi5C5IgMAXIAFAgg");
	this.shape_187.setTransform(178.3,157.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#4180BE").s().p("AhoBYQA8iaCfhOIhaBLIhRCBQgZAyAKAKIAtASQgfAHgUAAQg4AAAdg5g");
	this.shape_188.setTransform(165.2,98);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#20FAFF").s().p("AEcLIQgNgjgMACIgtgHIoRAUIiCAPIgSgIIgFggIANgXIC5i5IBhhuICejKIA9hpIAohUIAehkQAynblnBkIgyAbIgoAmIg5BNIgKADIgtgSQgKgKAZgyIBSiCIBahLIADAAQDOhwDVBkQC0BuAKDFQAvFApIHsIgKARIFTgKIAtgHQBVAABdiqIAgAHIANAIIAFARIiHF8QgEAVgXAAQgKAAgNgDg");
	this.shape_189.setTransform(197.6,149.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5E86B4").s().p("AgLABIgQgTIAgAIIAWAdg");
	this.shape_190.setTransform(223.3,218.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4592D9").s().p("AkWBPIEkgFIAygIQBQgFBaicIA5AKIgPAKQgvBZgoAeIhLAlIhkAKIkwAFg");
	this.shape_191.setTransform(211.1,186.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#4D8AC7").s().p("Ak5JFIAHggQICnqAtjyQA1j/hihaQhmhmiOA3IA7geIA6gKQBGgDAyAhIA0AtQBdBSgwEEIg3CPIg3BgIg5BTIifDAIkCEEIgHAeIAFAKg");
	this.shape_192.setTransform(178.4,156.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#5D91C7").s().p("Ag+BiIgFgHIAFgXIA8htIAagjIAsgnQhDBDguB5IAGAKIAuASIgbAPg");
	this.shape_193.setTransform(160.6,101.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#42FFFF").s().p("AEjLJIgWgeIghgIIoYAKIiZAPIgUgMIgFgKIAIgeIEBkEICgjBIA5hSIA3hiIA3iNQAvkEhchTIg1gtQgxgghGACIg5AKIg8AeQhYA6gvBLIgwgSIgFgKQAuh5BEhDQANgNANgLIBBgwIBGgjIBkgUIBAgCIBkAMQDXA/A3DFQAoC8hcCvIg6BeIhIBcIhOBTIkUEEIgNARIEwgFIBkgKIBLglQAogeAwhaIAPgKIAgAKIAKAHIADASIiKF3QgDAYgXAAQgKAAgOgEg");
	this.shape_194.setTransform(196.9,149.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00224D").s().p("AgPgOIATAHIAMAWg");
	this.shape_195.setTransform(223.4,218.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#648CBC").s().p("AAGAVIgigPIgFgGIAIgUIAHAPQAqATAKgIIgNAPg");
	this.shape_196.setTransform(157.6,111.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5BA0E2").s().p("AkgBOIFlgLQBpgTBIiLIAUgDIAhAKIgSAHQg5B9h2AiIg5AIIlbAFg");
	this.shape_197.setTransform(210.9,186.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#69FFFF").s().p("AEeLHIgMgWIgUgIIjfgFIlfAIIiUAMIgPggIAPgeIDXjSIBdhnICbjFIBWifIAhhkIAMhEIAFhaIgHgyIgchSIgqg3IgwgjQinhDh1B4IgUAWIg3BDIAAADQgKAHgqgUIgIgPIAAgFIAFgMQBVj/FJgtQD6goCWE7QArCihkDLIg1BUIhNBhIhxBzIj5DkIgKARIFbgFIA5gHQB2gjA5h9IASgIIAjANIAFAFIgFAgIiMF1QgGAMgOAAQgNAAgUgKg");
	this.shape_198.setTransform(196.4,149.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#6398CF").s().p("Ak1I+IAFgPIDpjmICci2IBOhuIBNiVIAXhBIAPhOIAEhaIgOhQIgSgtIgtg5IgogeQisg4hcBZQB0h4CoBDIAwAjIAqA3IAbBSIAIAyIgFBaIgNBEIggBkIhXCfIibDFIhcBnIjXDSIgPAeg");
	this.shape_199.setTransform(178.5,155.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.3,77.4,97.5,144.3);


(lib.three_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6394C8").s().p("AAFEYIgxgUQgSgCgwheIgogoQhWgogwA4QAahABYAWQAuAEA8B6IAiAWIAhAMIAoACIA8gIIA+geQBqhYACiRQAEiuiEhiIAMAEIA2AyIAmA8IAaBKQAiChhYCCQgwBIiCAQg");
	this.shape.setTransform(182.7,184);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8FFFFF").s().p("AlDKwQiuhOBIh6IACgEQAwg4BWAoIAoAoQAwBeASACIAyAUIAmAEQCBgQAwhIQBYiCgiiiIgahKIgmg8Ig2gyIgMgEIgCgCIgNgGIgGgEIgMgGIgEgEIgYgMIgGgEIhogfIgYgOQgKgkAUgOIBkgcQBGgaAlgqQBihwgeiCQgkhyhVgWQhggWhCAoQgsAYgmA4Ig4BsIgSACIgsgOQAIjGDOh2QDNhiDkB8QEiEQmuEeQEgA2AoEpIgGBIIgWBGIgqBMQhUB8jGBKQhqAfhvAAQhjAAhngZg");
	this.shape_1.setTransform(196.6,149.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4F7B").s().p("ADkggQgohyhSgUIg0gIQgsAAg1AYIgqAgIgiAmIg+BzIg6gOIgGgMIAsAOIASgCIA4hrQAmg4AsgYQBBgoBgAWQBWAWAkByQAeCBhiBwQBShogYh5g");
	this.shape_2.setTransform(182.4,113.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66A0DC").s().p("AAOBcIg5gZQhNiBgcgFIg5gPIghAFIAcgSQAlgKAjAPIAjAXQAhAeAMAsIAjAoIAYAPIA3AKIBfgSQAegFA6hAQhiBzhUAAQgWAAgVgIg");
	this.shape_3.setTransform(181.1,202.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001F48").s().p("Ah9CEQDsiQAPh9QgMCJjoCKg");
	this.shape_4.setTransform(220.1,127.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89FFFF").s().p("Ai9LGIiEgXQhGgbghgrQg+hGBhhcIAhgFIA5APQAcAFBNCCIA6AZQBmAlB6iRIAAgCIACgDIAFgHIADgFIAFgIIAAgCIACgFIAehTIADhSQAFg1gjhXIgmg8Ig+g6IhIgoIh6gkIgKgcIAFgZIAMgHIBigcIBLgoIAigbIAlgyQBGiZhQhpQhChuiUAtIgjAPIgjAcQggAChGCgIgrgHQg0gwB9ixQA+hpDmgjQCugKBfBNQCKBnghC0QgPB9jtCRIAHAFQCZACCYDlQBLC0ilDQQiiCwkxAAIg5gBg");
	this.shape_5.setTransform(196.2,149.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#436895").s().p("AjHBpIgPgKIAqAIQBHifAggDIAjgbIAigPQCUgtBDBuQg8hOiCAeIgnAPIgtAoIg3BIIgjBIg");
	this.shape_6.setTransform(180.3,105.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5094D6").s().p("AAYBeIgggNIgggbIgthPIgjgjIgmgPIgtAAIAtgSQAUgKA6AZQBGBJAAAdIAxAqIBGANQBDgIAcgUQgkAuhcAAQgYAAgcgDg");
	this.shape_7.setTransform(178.4,202.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5982B2").s().p("AiJD+QGDjzjKkPQDwEEmQEFg");
	this.shape_8.setTransform(220.5,115.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#74A9E1").s().p("AgDABIgKAAIADgEIAYAHg");
	this.shape_9.setTransform(207.9,140.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6695C8").s().p("ACHhLQg8iqjyhJIASADQDvA3BDDIQAyDRi0CqQC0jQhIi6g");
	this.shape_10.setTransform(224.3,172.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5682B3").s().p("AiuBnIAKgFIA8h1IBNhGQBlg3BlA/QhEgohrA5QhNA3gyB8g");
	this.shape_11.setTransform(179.3,105.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#63FFFF").s().p("AjZLDIhpgXQhDgbgegrQg/hfBshDIAtAAIAlAPIAjAjIAtBQIAhAbIAgANQCHAPAsg6QCjidhajwIgwhGIg3gyIg9gjQiFgdgCgZIACgjIANgKIBcgZIA6gcIA4gtIAthIQA8jBhwhNIgDgCIgEgDQhlg/hlA3IhOBGIg8B2IgKAFIgqgKIgKgKIAHgwIAZhIIA8hfIAogoIA8gtIAogUQEahnCsCtQDLEQmEDzIgCAFIAKAAQDyBIA8CpQBJC8i0DPQiWCdkcAAQgvAAgzgEg");
	this.shape_12.setTransform(195.5,149.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3783CA").s().p("AABBPIgpgmQgehMgrgeIglgPIgegDIAlgMIA/ACQAtADBKCLIA0AWQAyAIAogNQhBAegxAAQgmAAgcgRg");
	this.shape_13.setTransform(177.4,202.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E92C9").s().p("AiREfQDliOARiHQASjqiihGQCfA8AeC5QgMDbjqB9g");
	this.shape_14.setTransform(220.1,111.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5187BF").s().p("ACGg6QhGjojyg6IAjADQDjAlBVD1QA5DUkZDIQDlitgojqg");
	this.shape_15.setTransform(224.4,175.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4186C9").s().p("AgMABIgKgEIAsAHg");
	this.shape_16.setTransform(207.8,140.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#35FEFF").s().p("Ak5KqIg8ghQgqglgNgeQgbhnBkggIAeACIAlAPQArAeAeBOIAqAlQBBAoByg0QDDiUhrkVIgegyIg3g3IhNgrQh4gfgFgSIAAgeIANgPIBugjQAtgRApgoIAwhBIAKgcQA3i2iAhYQjlhShkEVIg0gPIAKhIQA5ieBshDQCYhxEGBVQCiBGgRDrQgSCHjmCPIAKAFQDzA5BGDoQAoDrjmCsIgFADIgDAAIgHAFIgoAWQgFgDAAAGIgFACIgIAFIgCADQhFAziWAAQhsAAiWgag");
	this.shape_17.setTransform(194.9,149.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C82BB").s().p("AikBlQBkkVDlBTIhGgDIhBAXQhXBBgvB5g");
	this.shape_18.setTransform(178.5,106.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#277FCE").s().p("AALBWIgsgrQgRg5g6g0Ig8gPIBBgPQAogFAeAUIAUARQAnAwAAAYIAmAtIAqAUIA/ADQgNARg+AFg");
	this.shape_19.setTransform(176.6,202);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C8CCB").s().p("AiYEfQDliVAKh5QAwi4i4h/QCmArAjDHQAIDAj8Cbg");
	this.shape_20.setTransform(219.8,111.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D7DBC").s().p("ACBghQAAjck3hzIA0ADIBYAZIBjA+IBNBYQAtBQADBBQAZEKlOCUQD5h4AHkag");
	this.shape_21.setTransform(223.6,177.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1A6EBB").s().p("AgUABIgFAAIgFgBIACgDIA7AHg");
	this.shape_22.setTransform(207.4,140.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3474B3").s().p("AibBpQBwkcDHBVIhDAHIgwAZQhCAtgyCEg");
	this.shape_23.setTransform(177.6,106);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#13F5FF").s().p("Ak1KmIgygeQgqgjgPgoQgchdBkgjIA8APQA6A1ARA5IAtArIBTAMQA+gFANgRQDHiRhdkJIgohGIg5g6IhFgoIhxgkIgKgPIAAgcIAIgMIBkghIA5geIAvgoIAjgyIAUg5QAWjahtggQjIhVhwEdQgygKAAgKIAZhpIA5hnIAmgqIA5gwQC8hwDOBVIAFACQC5CAgvC5QgKB4jmCWIgDACIAFADIAFAAQE5ByAADcQgIEaj6B4IgFADQhGAziLAAQhtAAiXgfg");
	this.shape_24.setTransform(194.2,149.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E80D5").s().p("AAJBRIgggbQglhcgmgbIgggPIgcgDIBOgPIA+ANIAbAWIAtBUIAUAXIAeAWIA3ANQgIAPhLAFg");
	this.shape_25.setTransform(176.4,201.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#327EC5").s().p("AieErQDZhzAZjjQgjjmidggQDHAFBEEEQgXDnjWBzg");
	this.shape_26.setTransform(219.1,110.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#236AAE").s().p("ACFgLQgQkjkehSIBGACQErA/AAFRQgZEJl2BmQFViYgJj0g");
	this.shape_27.setTransform(221.3,179.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#066DC6").s().p("AgdABIgFAAIgFgBIAAgDIBPAHg");
	this.shape_28.setTransform(207.3,140.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2F79BE").s().p("AiVBqQBpkcDCBSIg1AKIg0AhQgtAUg5CVg");
	this.shape_29.setTransform(177.8,106.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#04E0FF").s().p("Ak1KbIgogZIg1hGQgZhfBfgjIAcACIAgAPQAmAcAlBcIAhAcIBDARQBLgFAIgPQCShugMiCQAChhgehQIgthLIg7g3Ig3ghIhmgfIgPgSIAAggIAPgPIBfgeIAggSIA+g0IAjg3IARg1QAUjUhlgjQjDhThpEdIgtgMQgKgFAKgrIAohuIAWgoIA6hGQCEiHDyAtIAFADQCdAgAjDmQgZDkjZBzIAAACIAFADIAFAAQEfBSAPEhQAKD1lWCZIgIACQhOAShMAAQhyAAhsgog");
	this.shape_30.setTransform(193.8,149.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1986E4").s().p("AAFBUIgighIgyhgIgmgeIgjgKIBdgNIAoAFIAsAjIArBUIAUAZIAjAUIAdAFQgKASg+AFg");
	this.shape_31.setTransform(177,201.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1F78C7").s().p("AifEsQD7i2gTiuQgjjVibgmQDSALBDDZIAABNIgFAnIgXBCIhABcIg6A3IhKA5g");
	this.shape_32.setTransform(218.3,110.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D70BB").s().p("ABygTQgUkdkPhQIBXACQFdCHg+EiQhfEukzAoQErhsAUkog");
	this.shape_33.setTransform(220.8,179.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#017ADF").s().p("AgmABIgCAAIgIgBIADgDIBeAHg");
	this.shape_34.setTransform(206.9,140.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00D3FF").s().p("AkeKeIgtgeQgjgbgSgyQgZhYBfglIAjAKIAmAeIAyBhIAjAhIBLAPQA+gFAKgSQCEhpgKiHIgFhaIgShDIgqhVIg2g3Ig8gmIhkgiIgKgKIgDgWIANgcQBcgPBZhVIAhgyIAUg8QAMjhhZgUQjKhGhVEOIgtgMIAHhBIAjhfIAhg3IA3g/QBwh4DoAoQCbAmAjDUQAUCvj9C3IgCACIAHADIADAAQEQBQAUEcQgUEpksBsIgCAAIgFACQhSAPhIAAQhvAAhUgjg");
	this.shape_35.setTransform(193.2,149.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3083CE").s().p("AiPBmQBVkNDKBGIgZAFIgtAZQg3Ajg2CQg");
	this.shape_36.setTransform(177.9,106.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1371C5").s().p("ABlgHQgMkukQhNIBuACQFHB4g1E6QhzFKkmAIQD0gwBBlbg");
	this.shape_37.setTransform(219.4,179.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#168DEB").s().p("AAMBXIgpgjIgwhjIgWgWIgtgRIBVgKIA3ACIAnAeIA6BqIAWAUIAeANQgNASg0AEg");
	this.shape_38.setTransform(177.5,201.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2886D9").s().p("AiLBnQBQkVDHBQIg3AcQg0Ajg0CQg");
	this.shape_39.setTransform(178.5,106.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1379D1").s().p("AinExQDHh9AUjTQAUivjJhkQDWgDBIDfQA6C6kQDQg");
	this.shape_40.setTransform(217.8,110.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00C8FF").s().p("AkVKWIgjgZQgogogKghQgWhkBXgeIAtASIAXAWIAvBkIArAjIBDAKQA1gFAMgRQB1hfgFiRIgNh4QAAgmgyhSIg2g6Ig0gjIhdgfIgMgSIAAggIAKgNIBpgqIBCg6IAegyIASg3QAoiMhmhpQjIhQhQEWIgqgPIAHg8IAmhpIBBhiQBriEDjAjQDKBkgUCvQgUDUjIB9QERBOAMEtQhBFcj1AvQg0AQg7AAQhkAAh7grg");
	this.shape_41.setTransform(192.8,149.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1479CF").s().p("ABXgPQgMkij+hTIB/ADQE6CJg3EmQhVFIlQAPQEUhYAZk8g");
	this.shape_42.setTransform(217.8,179.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1294F0").s().p("AgBBRIgfggIgthjIgWgXIgogPIBpgKIAxAFIAmAeQAsB8ArAKIgqAXIgmAFg");
	this.shape_43.setTransform(178.3,201.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#218AE2").s().p("AiDBoQBNkZC6BXQg3gHhKDRg");
	this.shape_44.setTransform(179,106.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1481DD").s().p("AioExQCphmAljyQAUiZi9hzQEBANAjDSQAyCzj8DVg");
	this.shape_45.setTransform(216.7,110.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00BCFF").s().p("AkfJ/QhuiTB1g6IAoAPIAXAXIAtBkIAeAgIA+ASIAmgFIAqgXQBmhhgIiKIgFhhIgRhJIgohNIgigrIg3goIhigpIgFgKIAAghIAKgMQBQgXAmggIApgtIAmhQQAqi+hZhLQi7hYhOEbIgggKIgIgNIADgUIAWhcIAUgyIAwhOQAyhrDbgSIAeAFIAFADIAHAAIAIACIAFAAQC+BzgUCZQgmDyiqBnQD/BSANEhQgZE+kWBXIgHAAIgIADIgHAAIgIACIgJAAIgFADIgKAAIgFACIgkACQiGAAhhhDg");
	this.shape_46.setTransform(192.3,149.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#117BD1").s().p("ABYgaQgKkOj5hdICHADQE9CQhJE1QhBEvlsAUQEhhTAUlNg");
	this.shape_47.setTransform(216.2,179.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1197F1").s().p("AgFBTIgcgbIgvhrIgcgZIgZgKIB9gMIAgAHQAlANAjBqIAmAoQgmAfgpAAQgeAAgegQg");
	this.shape_48.setTransform(179.1,201.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1F8CE4").s().p("Ah+BoQBDkhC7BkQgzgChDDHg");
	this.shape_49.setTransform(179.8,106.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1185E0").s().p("AipEyQC9iMAKjEQgPjuicgoIB9ASIA7AWIBBA6QAZAWAZBYQA8C9j8Dcg");
	this.shape_50.setTransform(216,110.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00B5FF").s().p("AkaJ4IgcgmQgWgoAFggIAPg8QAKgcAoAAIAZAKIAbAZIAwBsIAbAbQBLAmBAg1QBihwgNiFIgFhVIgRhIIgehBIgxg8IgrghIhXgiIgNgUIAIgoQCOgqAqhzQAyjhhTg8Qi6hkhEEiIgogNIAIhIIAbhVIAcg6IAjgyQBah1CpAKIAFACIAKAAIAHADIAIAAQCdAoAPDtQgKDGi+CMQD6BbAKEOQgUFPkiBTIgCAAIgKACIgHAAIgHADIgKAAIgFACQjDAAhBhIg");
	this.shape_51.setTransform(192.1,149.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1677CC").s().p("ABdgLQgDkYkQhfIB4ACQCJAcBfCaIAZA8IAMA6IgCCBQhpFSkzAFQEDhMAplDg");
	this.shape_52.setTransform(218.5,179.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1391EF").s().p("ABABjIhAgPQgcgIhDiQIgtgRIBpgNIAuAIIAmAgIAqBcIAeAeIAUAHQgnAcghAAIgFAAg");
	this.shape_53.setTransform(178.1,201.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2487DD").s().p("AiFBrQBQkkC7BfQhVAhg2Crg");
	this.shape_54.setTransform(178.9,106.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#167FDA").s().p("AinExQDJiUAKjEQgMjViig3IBsASIA9AZIBGA+IASAcIAgBYQA1C6kDDQg");
	this.shape_55.setTransform(217.1,110.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00C0FF").s().p("AkpKAQhxilB9gmIAtASQBECRAbAHIBBAPQAjADArgeQBthkgKiPIgFhaIgShGIgohNIgkgtIg6goIhcgiIgNgUIAFgmQB4glAxhEIAohVQAoi+hbhIQi8hfhQEkIgogMIAAgoIAXhVIARgrIA1hVQAthpDngRIANACIAFADIAKAAIAbAFQCjA3AMDUQgKDGjKCTQEQBeADEYQgoFFkEBLIgFAAIgIADIgKAAIgFACIgpAIIgaAAQi0AAhKhBg");
	this.shape_56.setTransform(192.6,149);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1570C2").s().p("ABrgHQgFkkkchXIBsACQFLB1g5FCQhTEklEApQEahdAgkug");
	this.shape_57.setTransform(219.5,179.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#178BEA").s().p("AAABPIgjgmIgthbIgogeIgcgFIBagNIA6AIIAdAWIBDB1IAZARIAcAIQgPAWhEADg");
	this.shape_58.setTransform(177.4,201.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2A85D7").s().p("AiLBrQBkkhCzBaIg6AeQhBAygkB+g");
	this.shape_59.setTransform(178.3,106.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1678CE").s().p("AimEwQDoiogIi4QgZjUiagtQDqARAtDLQA1C9kNDKg");
	this.shape_60.setTransform(217.9,110.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CBFF").s().p("AkWKYIgogcQgogogKggQgWhnBXgZIAcAFIAoAeIAtBdIAjAlIBDAUQBEgCAPgXQB5hzgKh1QAAieg+haIg2g5IgyghIhngkIgKgUIADgeIARgNIBOgbIAtgcIAsgqIAegyIAUg/QAPjUhUgcQi0hahkEiIgrgMIAIhGIAghaIBEhnQBhiCD0AeIAFADIADAAQCbAtAZDUQAHC5joCoQEdBWAFElQghEukaBdQhBAPhBAAQhpAAhmgog");
	this.shape_61.setTransform(192.9,149.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1A85E2").s().p("AAHBUIgkgjQgthrgcgKIg0gPIBfgPIAqAIIAiAZIBCBtIAWAUIAyAPQgeAUgqAAg");
	this.shape_62.setTransform(176.8,201.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2278C6").s().p("AiiEsQDUhwAWjoQgZjcikgrQDhAFA2EFQAADJjnCTg");
	this.shape_63.setTransform(218.5,110.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1F70BA").s().p("AB4gBQgFkokfhXIBTACQEkA9AAFXQgID9mNBuQEahcAokmg");
	this.shape_64.setTransform(220.5,179.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0177DB").s().p("AgjABIgDAAIgHgBIAAgDIBbAHg");
	this.shape_65.setTransform(206.9,140.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3283CD").s().p("AiQBpQBkkcC9BVIgeAFIgtAZQhKBAgjBzg");
	this.shape_66.setTransform(178,106.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00D5FF").s().p("AkiKdQhkhBAAg8QAAhhBGgIIA0APQAcAKAtBsIAlAjIBLAPQArAAAegUQCIhugMiFIgIhmIgUhGIglhEIg7g8IgyggIhngiIgMgIIgFgPIACgeIASgMIBSgcQAwgWAsgtIAjg3IAKgeQAvjIhyhJQi+hVhkEdIgvgMIAHhBIAthxIA/hVQBriEEBAlQClArAZDcQgXDojUBxIAAACIAHADIADAAQEfBWAFEnQgoEnkaBdIgFACQhTAPhJAAQhwAAhWgjg");
	this.shape_67.setTransform(193.4,149.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1F80D5").s().p("AAJBRIgigeQgZhFgtgtIgmgRIgZgDIBOgPIAtAFIAuAjIAoBNIAXAbIAWASIA/APQgIAKhGAKg");
	this.shape_68.setTransform(176.4,201.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#347FC5").s().p("AidErQDtiRAFjPQgjjSicgqQDEAHBDD/QgMDejgB/g");
	this.shape_69.setTransform(219.3,110.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#076DC5").s().p("AgdABIgFAAIgFgBIACgDIBNAHg");
	this.shape_70.setTransform(207.3,140.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#246BAE").s().p("ACDgUQgCj/kuhsIBGADQErA+AAFTQg3EblQBQQE/iAAHkUg");
	this.shape_71.setTransform(221.6,179.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#05E1FF").s().p("AkvKgIgtgcIg3hGQgUhzBagRIAZACIAlARQAtAuAZBGIAjAdIBJASQBGgKAHgKQCThigNigQADhZgehJIgrhGIgxgyIhDgoIhngfIgPgSIAAghIAPgOIBfgfIA3ggIAlghIAlg5IASg0QAUjfhmgcQgRgWhGADIhVAbIgoAlIghAtIgqBiIgSAMIgtgOIAIg6IAohmIAegwIA0g8QB9h/D0AqIAFADIADAAQCdAqAjDSQgFDQjtCRIgDACIAFADIAFAAQEvBqACD/QgHEWlAB/IgDAAIgHACIgFADQhKAShMAAQhsAAhvgjg");
	this.shape_72.setTransform(193.9,149.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3079BE").s().p("AiXBoIARgNIAqhgIAhgtIAogmIBUgbQBGgDASAXIg1AKIgoAWQg5Aeg8CVg");
	this.shape_73.setTransform(177.5,106.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#267FCE").s().p("AALBVIgsgoQgbhKgmgeIgogUIgegCIBBgQIA8AKIAjAcQAgBNAoAjIAtAUIA8ACQgUARg8AGg");
	this.shape_74.setTransform(176.6,202);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4D8DCC").s().p("AiYEhQDZiCAZiiQARjSihhSQCuAtAgDIQAIC/j8Cbg");
	this.shape_75.setTransform(219.8,111.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3C7CBC").s().p("ACBgbQgFjqkzhsIA1ACIBXAZIBjA/IBOBYQAtBPACBBQAcEJlWCYQEGiKAAkDg");
	this.shape_76.setTransform(223.6,178);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#196EBA").s().p("AgUABIgFAAIgFgBIACgDIA7AHg");
	this.shape_77.setTransform(207.4,140.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3374B3").s().p("AiZBpQBpkcDKBVIg8AFIgyAZQhUBFgjBug");
	this.shape_78.setTransform(177.9,106);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#12F4FF").s().p("AksKnIg8ggQgrgmgMgeQgZhrBfgcIAeADIAoAUQAlAeAcBLIAtAoIBNAMQA8gFAUgRQDKiehikEIgohBIg0g0Ig+gmQiCgfgCgZIAAgcIAPgPIBSgZIBBggIAvgoIAlg3IAUg3QASjkhogWQjLhVhpEdIgygNQgMgHAPgyIAWhEIAcg0IBIhaQCCiFEBAtIAFADIAHACIAFADIAIACIAFADIAHACIAFADIAIACIAFADQCiBSgRDSQgZCjjaCCIgCACIAFADIAFAAQEzBqAFDrQAAEEkGCKQhLAyiLAAQhoAAiNgcg");
	this.shape_79.setTransform(194.4,149.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3482C9").s().p("AAIBTIglgcQg3hygbgIIghgMIgjgCIA0gPIAtACIAkAPIAWAWQAbAfAOAuIApAlIBBASIA5gIQgSAZhNAGg");
	this.shape_80.setTransform(177,202.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#598EC6").s().p("AiSEeQDoiTAMiAQAyipi9iHQCQAmArDUQAMCskDClg");
	this.shape_81.setTransform(220.2,111.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4D84BD").s().p("ACJgeQhSkRjoglIAmACQErBYARD1QAFDUjPCGQCXhxALkCg");
	this.shape_82.setTransform(224,175.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3A82C6").s().p("AgNABIgKAAIADgEIAsAHg");
	this.shape_83.setTransform(207.6,140.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4880BA").s().p("AifBnQBpkVDWBQQgtgHglAMIgwAXQhDAog5CLg");
	this.shape_84.setTransform(178,106);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2FFEFF").s().p("Ak0KqIg5geQgygtgKgcQgZhkBfggIAjACIAgANQAcAHA3BzIAlAcIBOAPQBNgFARgZQDNijhzkJIghg0Ig0gyIhDgoIh1glIgKgFIgFgPIAAgbIAHgKIBigeIA8geIAzgrIAmg3IAKgbQA0jNiBhGIgCAAQjXhQhpEVIgygMQgNgKAUg/IA1hwIAZgjIBXhQQCZhxEDBVIAFADQC+CHgyCqQgNB/joCUIgDAFIAKAAQDpAlBSEQQgMEDiXBxQgoAegxAUIgPAIQhDAziVAAQhrAAiVgag");
	this.shape_85.setTransform(194.6,149.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4285C6").s().p("AAFBVIgqgjQglhUgogbIgjgPIgrgDIA3gRIBBARQAjASAsBeIArAgIBBANQA6gIAUgIQg1Ajg9AAQgkAAgmgMg");
	this.shape_86.setTransform(177.8,202.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#638EBF").s().p("AiMD+QGPkQjSjyQD1D/mUEKg");
	this.shape_87.setTransform(220.4,115.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#68A1DB").s().p("AgEABIgKgEIAdAHg");
	this.shape_88.setTransform(207.8,140.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5F90C6").s().p("ACDhRQhLiyjfg8IAUACQDOAaBpDyQAeD0iqB9QCvi5hEjYg");
	this.shape_89.setTransform(224.1,173);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58FFFF").s().p("AjpLBQi3gtgPhGQgghaBhgyIArADIAjAPQAoAbAlBVIArAjQBoAhBTg4IAJgHQCqighcjyIgwhGIg7g1Ig+gjIhugfIgSgNIgCgMIACgcIAKgKIBxgjQAqgPAxgtIAwhGQA+jXh1hDIgOgHQh8g3hHA7IgtAmIgjAtIgwBkIgPAFIgygSQAIhVAZglIA8hfQBrhpAwgIQD0haDDCoQDSDymQERIAKAFQDhA8BLCwQBDDaivC5QiTCZkYAAQg5AAg+gGg");
	this.shape_90.setTransform(195.2,149.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5D8BBF").s().p("AioBnIAPgFIAvhjIAjgtIAtgmQBGg7B9A3QgYgIgvACIhQAZQhPAwg0CIg");
	this.shape_91.setTransform(178.4,105.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8BB7E9").s().p("AiEiMQDoBGAhDTQgji+jmhbg");
	this.shape_92.setTransform(226.3,156.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5996D3").s().p("AgIBYIgyghIg0hWIgZgZIgrgUIgtgDIAogRIBBAPIAeAZIAyBUIAXAWIAkASQBsAbBfhVQhEBXhiAAQggAAgigJg");
	this.shape_93.setTransform(180.9,202.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8EB9EA").s().p("AgIABIADgEIAOAHg");
	this.shape_94.setTransform(207.9,140.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#21426C").s().p("AiCC3QEfirgfjKQAoDdkZCgg");
	this.shape_95.setTransform(220.4,122.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7FFFFF").s().p("Al/KLQh9hiCEhkIAFgCIAtACIArAUIAZAZIA0BYIAyAgQCPAmBZhzQB1jQhSiWQgyiMj8hAIgCgWIAMgcIBYgZIBIggIAxgoIAmgwQBIivhXhhIgPgPIgFgDQiEhXhcBGIgmAeIg+BVIgeBDIgKAIIgegIIgXgHIgCgeIAZhQIA3hfQBkh7B/gWQFMhJB4EnIACANQAfDLkgCsIgDAFIASACIAqAKQDnBaAjC/QALA+gJBHQgcD9mqBwQg5AFgyAAQixAAhWg+g");
	this.shape_96.setTransform(195.7,149.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4F76A4").s().p("AiYB0IgtgSIAfAIIAKgIIAdhDIA/hUIAlgeQBchGCEBXQhrg3haA3IhIBDIg7Bzg");
	this.shape_97.setTransform(179,105.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7AB1EA").s().p("AgeCMIgogbQgyhggggSQhLgrgtAhIAggaQAUgKAoAKIAtAXQAtAuANAuIAlAgIA7ARIBagKQCqhhgKipQAcCpi5B1Ig/ANg");
	this.shape_98.setTransform(183.3,197.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#91FFFF").s().p("AjxLBQkkg3B9i8QAtggBLAqQAgAUAyBfIAoAcIBQAKIA/gNQC4h1gciqIAAgPIgCgIIAAgUIgDgHIgCgUQgZiAhYg+IhKgrIhugfIgRgIIgKgPIAFglQBkgPB3hYQAvg0AIgrIAKhaIAFgFIgFgCIAAgFIgDgPIAAgFQg8jGiBAeIhIASIgjAUIhEBGIg3BrIgRADIgogNQgDi2C5h7QBfhQEGAoQCsA8AoCUQAXDPiWBsIhGA0IgFADIgIAFIgFACIgCAAIgIAFIgFADIgHAFIgFACIgDADIgCAHQB1AUBYBNIBIBSIAmBQQA+Cli0DVQihChkXAAQg3AAg7gGg");
	this.shape_99.setTransform(196.9,149.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#072954").s().p("AjlBoIgMgMIAnAMIASgCIA3hrIBEhGIAigUIBIgRQCCgeA8DEQhDirh4AZIgtAHIg2AcQgXAHgrA5Ig7BugADuBPIAEADIgEAFg");
	this.shape_100.setTransform(182.3,105.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5582B4").s().p("AhHERQA5BSCdg8QCMhwgKhpQAKk4kkg3QEmAyAKEzQAACHhwBmQhMAmg5AAQhNAAgshGgAiLC5QgegUgyAFQgmAIgRAZIgUAoIAPgwQARgjAugHIBBAMQA0AjAMArgAgqlWQgHAPAKAVIAeARQg9gLAcgqg");
	this.shape_101.setTransform(182,178);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5E87B6").s().p("AC1huQjOiMh4DSQB6juDeCWQBqC1iCCGQBihwhci5gAjrAdIgKgFIAAgNIA0APIASgFIgIAPIgPADg");
	this.shape_102.setTransform(182.4,112.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#84FFFF").s().p("Am+IPIAUgoQASgZAlgHQAygFAeAUIA1A5IAAADIAPAbQBNB7CxhaQBwhnAAiHQgKkzkmgxIgegSQgKgUAHgQQADgHAIgHIACAAIBdgbIARgIIANgHIACAAIAPgIQApgZAbgfQCCiGhqi2QjeiWh6DtIgeA8IAAADIgSAFIg0gPQAAi3DwiOQEKhOCUB2QEYEfmnEJQE7BhAND1QAbD/mBCvQiWAahsAAQkhAAANi4g");
	this.shape_103.setTransform(197.2,149.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#5B92CA").s().p("Agrg8IAqgSQBIADAMAbQiSg3ACC2QgygtBEheg");
	this.shape_104.setTransform(159.9,201.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7DAFE5").s().p("AAzhuIg4BaQgrBoAPARIgRAKQgIhfBth+g");
	this.shape_105.setTransform(162.4,103.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#375E8C").s().p("AglgEIASgKIA5AOIgSANQgCACgFAAQgNAAglgTg");
	this.shape_106.setTransform(161,115.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#5285BC").s().p("AidIuQENA3AflRQAAhJgfhBIglg+Ig5g1Ig+giIh7glIgMgUIAIgjQDJgwArhhQA3ijgwhBQhciOiYBBQC/hpBdC0IARBQQAABLgdBBQgkBfjYA3IgKARIAAAhIAPAKIB7AlIA9AiIA8A3IAwBOIAOAvIANBfQgCClhpBVQhAAtg8AAQg2AAg0gjg");
	this.shape_107.setTransform(194.3,153.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5EFFFF").s().p("Am2JUQgCi3CTA3IAhAXIA+BhIAIAFQBuBLB3hVQBphVACilIgMhfIgPgvIgwhOIg8g3Ig9gjIh7gkIgPgKIAAghIAKgRQDZg3AjhfQAehBAAhLIgShQQhbi0jBBpQg3ARhLCeIg5gPQgPgSAqhpIA6haQA5hzEIgbQCUgPCJCEQDGEEl/D4QFABLgCE/Qg6EVkVBfQiSAmhwAAQjHAAhVh4g");
	this.shape_108.setTransform(197.6,149.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3971AA").s().p("AhHglQAZhoB8A0QhrgIgKBRIADBEIAuA3QhthAAchQg");
	this.shape_109.setTransform(159,204.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5B98D4").s().p("ABkiVQjFC4AfBmIghANQAKi9C9hug");
	this.shape_110.setTransform(167,99.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#183E6C").s().p("AgqgCIAhgMIA0ARIgeAMg");
	this.shape_111.setTransform(161.3,115);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#427FBB").s().p("AiII7QB/AWBUhrQAlg3AQhEIAFhaQAEgqglhiQgSgigZgcIgvgtIhDglIhygjIgNgRIADgeIAMgNIBcgZIA9geIAzgtQAjgjAPhBIAHg5QgikCjFA6QCVhTBuCbQAyBig8CRQgoBcjKAyIgKANIAAAbIAKASIB9AoIBAAkIAzAwIAvBGIAUBBIAKBQQgrEuiuAAQgvAAg5gWg");
	this.shape_112.setTransform(194.3,152.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#34FEFF").s().p("Al8KPIgwg3IgChGQAKhQBrAIIAtAUQAmAbAlBTIASAMQEKBpA3mBIgKhQIgUhBIgvhGIgygvIhAgmIh9gnIgKgRIAAgcIAKgMQDJgyAohdQA8iRgyhhQhtibiWBSIglAZIgjAoIghA1IgWA3IgUAPIg1gSQgehmDGi5IAFgDQE3iRDGDLQDIDtl8EJQFABTgNFGQAFCRkBC3QigBIiRAAQiFAAh5g8g");
	this.shape_113.setTransform(198.1,150);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3476B5").s().p("AhRgiQAWhzCOA3QhcgPgWBdIACBAIA2BBQhvghAFhyg");
	this.shape_114.setTransform(159.7,205.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3D84C7").s().p("AB7ifQi7BzgKC/IgwANQANjbDohkg");
	this.shape_115.setTransform(169.3,98.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2F5888").s().p("AgygCIAvgMIA2ARIgtAMg");
	this.shape_116.setTransform(162.1,114.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3379BC").s().p("Ah4JAQD2gZgFkVQAAhEgehGIgqhBIg0gvIg3ggIhrggIgXgUIADgjIARgNIBYgZIAjgRIBFg1IAjg3IAUhIQAKj9jRAPQCXhNBkCnIASBOQgDBcgZAyQg3Bzi4AjIgMAPIAAAeIAKAPICLAxIAyAeIAoAoIA0BQIASA6IAKBQQglEwi0AAQgqAAgygRg");
	this.shape_117.setTransform(194.4,152.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#15F7FF").s().p("AlVKjIgWgKIg3hBIgDhBQAXhcBcAPIAwAUQAeARAeBJIAjAjQEIBXAtl3IgKhQIgSg5Ig0hQIgogoIgxgeIiMgxIgKgPIAAgeIAMgPQC4gjA3hzQAZgyADhdIgShNQhjioiYBOIgtAbIgoAyIg3BsIgKAFIg3gSQAKjAC7hzIADAAIACgDIAIgCIACAAIAFgDIBigeICXADQB4AFBsCWQB4ELlDDDQFABVgWFMQgrDAjDB4QivBQiVAAQhqAAhegog");
	this.shape_118.setTransform(198.7,150.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2269AE").s().p("AgYBPQgtgZgRhFQgDiOChAsQhHgOgUCIQgCAeAsAtIBBAog");
	this.shape_119.setTransform(160.2,207.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2476C1").s().p("ACQilQjgCMAFCzIhEAMQAUj+ELhNg");
	this.shape_120.setTransform(171.4,97.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#5C88BA").s().p("Ag8gCIBCgNIA3ARIg8AMQgCACgFAAQgSAAgkgSg");
	this.shape_121.setTransform(163.1,114.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2473BC").s().p("AhqI/QDWgjACkJIgKhQIgRg6IgthGIgmgoIhAgnIhpggIgXgUIAAgeIANgPIBhgeIAtgXIA0gtIAhgyIAThGQANjyizgIQCOhBBZCZIAVBSQACBTgbA8IgmA5IgtAmIgzAbIhiAeIgPAZIAKAjIBkAhIBSAsIAxAyIApBBIAUBDIAKBVQgDCbhSBVQhaBBg9AAQglAAgagWg");
	this.shape_122.setTransform(194.5,153.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#06E4FF").s().p("AktK9IhBgoQgtgtACgeQAViKBHAOIANAEIAFAAIAFACIAXAFIAeAUQAvA3AFAhIAjAgQBJA8CNhmQBThVACibIgKhVIgUhEIgohBIgygyIhRgtIhkgfIgKgjIAPgZIBhgeIA1gcIAsglIAlg6QAcg8gDhSIgUhTQhZiYiOBBQhkA0g1CMIg3gRQgFi0DhiMIADAAIAKgFQEhhTCWDhQBrEnkuClQEdA/ACFQQheGPnHAAQhMAAhWgLg");
	this.shape_123.setTransform(199.2,149.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#2375C0").s().p("AheANQgHi7CpA/QhUAKAFCBQATAyAlAZIAyAZQifgegehVg");
	this.shape_124.setTransform(162,207.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#1472C6").s().p("ACbioQjoCHAGDAIhTAKQAAj3E1hag");
	this.shape_125.setTransform(173,97.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5181B5").s().p("Ag/gDIBSgKIAtARIhSAKg");
	this.shape_126.setTransform(163.9,114.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1E78C9").s().p("AhfJEQC1gjANj/QAAhVgehEIgmg+IgpgtIhBgnIhnghIgPgWIAAgcIAIgKIBfgeQAygUAugyIAegvIAUhGQAIj1iYgIQCLhDBYCgIARBNQgCBsgXAlIgeAwIgoAlIhAAmIhSAZIgNAHIgHAUIAKAjQCSArASAdIAyAtIAvBNIAUBEIAIBLQgZEvi2AAQgmAAgsgNg");
	this.shape_127.setTransform(194.6,152.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#01D7FF").s().p("AkfLDIgygZQglgZgUgyQgFiCBVgKIAFAAIAKACIAZADIAeAPQAjAZAgBQIAZAWQEDBLAeltIgHhLIgUhDIgwhOIgygtQgQgeiUgpIgKgjIAIgUIAMgIIBTgZIBAglIAogmIAegvQAWgmADhrIgShOQhWigiMBEIgyAgIghAoIg0BxIgUAHIgtgRQgFjBDoiHQDbhXC+DZQCMD4k4DhQBLAHB9B8IA5BkQAcBpgPBGQheGNm7AAQhCAAhKgJg");
	this.shape_128.setTransform(200.3,149.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#1B78C9").s().p("AhmgMQAAibCxA3QhRAeAEBZQAHBJBiAvQjAgWgNh1g");
	this.shape_129.setTransform(163.3,207.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#177CD4").s().p("AChioQjlCHAKDAIhmAKQACkGE/hLg");
	this.shape_130.setTransform(174.1,96.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#477AB0").s().p("AhKgEIBlgKIAwAQIhqANg");
	this.shape_131.setTransform(165.5,114.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#177BD3").s().p("AhWJAQCcgeAPkQIgKhQIgRg6IgmhBIgxgyIg1gfIhhghIgPgWIAIgmQCxg8AHgoIAdgyIASg3QANj1iMgRQCVhLBOCsIAPBQQgDBTgZA8QggBci2A1IgHAKIAAAeIAFAPIASAKIBjAjIA0AiIAyA0IAhA/IATBGIAIBNQggEvijAAQgnAAgvgSg");
	this.shape_132.setTransform(194.8,152.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00CCFF").s().p("AkOLAQhigwgHhIQgFhaBSgeIANAAIAFACIAvANIAZAZQAtBhASAFQDxBdAol6IgHhNIgUhGIghg/Igyg0IgzgjIhkgiIgSgKIgFgPIAAgeIAIgKQC1g1AhhcQAZg8AChTIgPhQQhNisiVBLIgtAjIgeAoIgwBrIgMAFIgwgRQgKjBDmiHIAIAAIAFgCQENg3BuDKQB4D6kiDSQD/BGACFHQhdGZmkAAQg/AAhGgJg");
	this.shape_133.setTransform(200.6,149.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#167CD3").s().p("AhqgIQgBilC7A/QifBvC7CAQi7gIgbiBg");
	this.shape_134.setTransform(165,207.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#1282E1").s().p("ACriqQi1AtgtEcIhzAMQAvlTEmgCg");
	this.shape_135.setTransform(176.4,96.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3C73AC").s().p("AhNgBIBygNIApATIh1AKg");
	this.shape_136.setTransform(167,114);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#1280D9").s().p("AhLI3QCLg3AKjhIgIhVIgPg5IgohOIg9g8IgjgVIhdghIgKgHIgFgUIAKgjQBagPBQhOIAdgyIASg5QAWjXh+gwQB+hNBYCgIARBVQADBagcA8QgeBcipAyIgKANIAAAgIAUAXIBcAgIAyAiIAvA1IAhA+IARBBIAIBEQAFCxhVBfQg/A4g1AAQgnAAgigfg");
	this.shape_137.setTransform(194.9,153.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00C2FF").s().p("Aj9LDQi8h/CghxQA8glBTCsQBQBJBthiQBVhfgFixIgIhEIgRhBIghg+Igvg1IgxgjIhdgfIgUgXIAAggIAKgNQCpgyAehcQAcg8gDhaIgRhVQhXigh/BNIg/A8QgoB7gbACIgogUQAtkdC2gtIADAAIAKgCIAFAAQDRgyB/DSQBfEVkBCvQD1BGgFFRQgFCWi8CnQhHBTjPAAQg/AAhLgIg");
	this.shape_138.setTransform(201.2,149.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0F8AE8").s().p("AC1irQjJA0ghEaIh/AJQAMlGFdgRg");
	this.shape_139.setTransform(178.9,96.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0D7ACF").s().p("AgPBtQgwgIgvhSIAChSQAFgbAhgcIAZgKICGAPQheAtAYBmQAPAlAjAhIAqAZg");
	this.shape_140.setTransform(167.4,208.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#326CA7").s().p("AhUgDIB/gKIAqARIiJAKg");
	this.shape_141.setTransform(169.3,113.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#168DE4").s().p("AhAI2QCIiHgPh9IgHhsIgWhNIgXgtIgngyIg1glIhagjIgOgUIAAgeIAMgPIBYggQAWgIA0g8IAWgrIAPg0QAWjUhqgwQCDhcBQC2IANBkIgFA3IgSBBQglBniVAqIgKANIAAAeIAPAWIBhAoIAnAdIApAwIAjBDIAOA8IAKBkQgHCohGBNQg5A3gyAAQglAAgjggg");
	this.shape_142.setTransform(195.3,153.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00B6FF").s().p("AjELKIgPgCIgIAAIgKgDIgFAAIgqgZQgjgggPgmQgZhmBfgtIAyAKQAgARArBnQBQBLBjhiQBGhNAHioIgKhkIgPg8IgjhDIgogwIgngeIhhgnIgPgWIAAgeIAKgNQCVgqAlhnIAShBIAFg3IgNhkQhQi2iDBcIgXASIgbAoIgwBzIgMAFIgrgSQAhkaDKg1IAFAAQDKggBhC7QBiEijzCqQDkBQgFE9QhTGemQAAIgugCg");
	this.shape_143.setTransform(202,150.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0A80D3").s().p("AgdBuQgqgKgrhLQgqjMD0BBQhYBEAeBWQAnBKA0ARQhLgOhLgHg");
	this.shape_144.setTransform(169.7,208.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2A67A5").s().p("AhYgEICOgKIAjATIiOAKg");
	this.shape_145.setTransform(171.1,113.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#1394E7").s().p("Ag3IpQB0hLgZkdIgMg3IgYg6IghgtQg0g9hTgSIgUgWIADgjQBhghA3hBIAcgvIALgtQAejGhbhGIAjgbIA7gKIA8AeQAlAoAIAjIARBfIgFBGIgPBBIgZA0IgeAjIgvAjIhDAZIgKAIIgFAUIAFAeIBSAoIA5ApIAcAjIAlBLIAXCHIgDBYIgPBQIgvBhQg0A+gwAAQgoAAgngsg");
	this.shape_146.setTransform(195.4,153.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00AAFF").s().p("AipLNIgKgDIgFAAIgYgEQg0gRgnhKQgehXBYhEQA3ggA5CWQBVBhBehzIAwhhIAPhQIAChYIgWiHIgmhLIgbgjIg5gqIhSgnIgFgeIAFgUIAKgIIBDgZIAvgjIAegjIAZg0IAPhBIAFhGIgShfQgHgjgmgoIg7geIg8AKIgjAbIggAoIgZAyIgZBOIgPACIgjgUQAUkQDPg/QDAgZBSDBQBQEpjcCbQDDAyANFOQhcGulQAAQgYAAgZgCg");
	this.shape_147.setTransform(202.7,150.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0D91EB").s().p("AhDhlIBDgrIC5gcQjOA/gVEPIiOAKQAUjOBhhDg");
	this.shape_148.setTransform(180.8,96);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0B7DD1").s().p("AgaBuQg0gHgrhQQggjPDiBGQhMAmATByIAtBBIBBAeg");
	this.shape_149.setTransform(169.4,208.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0E8EEA").s().p("AC1iqQi/AvghEcIiJAKQAWlTFTgCg");
	this.shape_150.setTransform(179.4,96.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2E6AA6").s().p("AhVgEICIgKIAjATIiIAKg");
	this.shape_151.setTransform(169.9,113.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#1590E5").s().p("Ag8IvQB8hwgPitIgHhVIgPg5Igdg/Igtg0IgogdIhYgjIgPgXIAAgbIANgPIBIgZIAcgSIA0gyIAZgtIAOg3QAcjAhmhBQCEhdBIClIAPBGQAFBfgZBBQgjBpiQArIgKAMIAAAhIANAUIBeAoIAtAiIAgAqIAjBJIAUB6QAKCghSB2QgzA3gwAAQgnAAgngmg");
	this.shape_152.setTransform(195.3,153.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00B0FF").s().p("AiuLOIgIgCIgHAAIgKgDIgFAAIhBgeIgthBQgUhzBNglQA8gmBBCjQBVBSBchkQBSh1gKigIgUh7IgjhIIgggrIgsgjIhfgnIgNgUIAAggIAKgNQCQgqAjhpQAZhBgFhfIgPhGQhIiliEBcIgRAKIgeA1IgrBpIgRAFIgjgUQAgkdDBgwIAFAAIAHgCQC2gjBmDIQBfD8jtDIQDPBBAIE/QhYGvltABIgpgCg");
	this.shape_153.setTransform(202.5,150.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#1276C9").s().p("AhugJQgRidDRA0QhXArAWBtQARAoAjAbIArAXQjCgDgciGg");
	this.shape_154.setTransform(166.1,208);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#1086E5").s().p("ACxiqQjBAvgmEcIh7AKQAclEFGgRg");
	this.shape_155.setTransform(177.5,96.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#376FAA").s().p("AhSgEIB6gKIAqATIh8AKg");
	this.shape_156.setTransform(168,114);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1487DE").s().p("AhGI4QCch4gWi2QAWjakXhvIAAgeIAKgPIBLgZIAjgUIA3gwIAbgvIARg/QAcjFh6g8QCQhVBJC2IAMBQIgHBOIgSA5QggBniiAqIgHAKIgDAhIANAUIBbAjIA6AnIAoAvIAjBEIAPA8IAKBhQAACPhQBmQgzA1g2AAQgmAAgpgcg");
	this.shape_157.setTransform(195.1,153.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00BCFF").s().p("AjxLFIgCAAIgrgXQgigbgSgoQgWhuBXgrQA8gjBOCqQBhBEBWhdQBQhmAAiPIgKhhIgOg8IgjhEIgpgvIg4goIhcgiIgNgUIACghIAIgKQCigqAghnIASg5IAHhOIgNhQQhIi2iQBVIgcAUIgbAlIgZAtIgcBOIgMACIgrgUQAmkdDDgvIACAAIAKgDIAGAAQDagjBiDNQBfD9j/DAQDtBEgFFYQhVGLmWAAQgtAAgwgFg");
	this.shape_158.setTransform(201.7,149.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#1879CE").s().p("AhnAQQgZjADUBBQgjAAgPAUIgZAoIgIAoIADAsQAPAmAjAgIA0AZQjHgegKhSg");
	this.shape_159.setTransform(164.4,207.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#147FDA").s().p("ACmipQjsCHAKDAIhpAMQgDkSFOhBg");
	this.shape_160.setTransform(175.4,96.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4176AE").s().p("AhJgBIBogNIArATIhmAKg");
	this.shape_161.setTransform(166.1,114);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#147ED6").s().p("AhQI/QC1hSgbkRQgtjijWgoIgIgKIAAghQADgZBzgeIA3gqIAigwIAZhGQAljDiXhGQCBhLBXCgQAmBxgtB6QghBdirAyIgNAMIAAAeIANASIBqAqIAtAdIAmAmIAvBNIAXBQIAFA/QgaE3iiAAQgnAAgvgTg");
	this.shape_162.setTransform(194.9,152.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00C7FF").s().p("AkHLCIg0gZQgjghgPglIgDgtIAIgoIAZgoQAPgUAjAAIA3AMIAUAUIAvBYIASARQDxBfAhmDIgFg/IgXhQIgvhNIgmgmIgsgeIhrgpIgNgSIAAgeIANgMQCrgyAhhdQAth6gmhxQhWigiCBLIgmAZIgbAmIg8B6IgNADIgqgUQgKjBDtiHIADAAIAHgCIANgDQD7gqBkDKQBdElkECgQEsCVg1EBQhiGRmVAAQg5AAhAgIg");
	this.shape_163.setTransform(201.4,149.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#1F76C4").s().p("AhkgNQAFieCuA8QhmAZASByQAQAtAmAeIA0AZQizgUgWh5g");
	this.shape_164.setTransform(162.6,207.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#1074CB").s().p("ACeioQjoCFAIC/IhaANQAHkQEzhBg");
	this.shape_165.setTransform(173.8,97.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#4C7EB3").s().p("AhCgBIBZgNIAtATIhhAKg");
	this.shape_166.setTransform(164.8,114.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#1A7ACE").s().p("AheI+QDghYgtkVQhBjojMgbIgIgFIgCgjIAHgPQBVgNBdhLIAng8IAUg+QAHj9iQgHQCQhEBTCgIARBTQgCBkgZAvQgcBYi9A3IgKAMIAAAhIANARIBlAjIBEAqIAoAqIAoBEIAWBNIAIBVQACB9hXBxQg8A5g/AAQgoAAgpgWg");
	this.shape_167.setTransform(194.8,153.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00D2FF").s().p("AkTK/Ig1gZQglgegSgtQgRhzBmgZIANAAIAFACIAlAKIAUASQAtA8ADAbIAZAZQBrA6BhhdQBXhwgCh9IgIhVIgWhOIgohDIgogrIhDgqIhmgiIgNgSIAAggIAKgNQC9g3AchXQAZgwAChkIgRhSQhTigiQBDIgqAeIghAmIg0B1IgSAIIgtgUQgHjBDoiEQEug/BkDLQB1EQkkC+QEOBYgDEjQhbGrmyAAQhAAAhIgJg");
	this.shape_168.setTransform(200.4,150);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1C68B0").s().p("AhcgOQASidCaA+QhmANAFBlQABBJBtAyQiYgUghh6g");
	this.shape_169.setTransform(161,207);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#1B73C2").s().p("ACXioQjsCFAKC/IhLANQACj3Erhag");
	this.shape_170.setTransform(172.4,97.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#5785B8").s().p("Ag+gCIBLgMIAxARIhRAMg");
	this.shape_171.setTransform(163.5,114.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#2278C6").s().p("AhnJDQDRg0gCjzIgIhLIgPg0IgohOIg4g3Ig1gfIhugjIgPgXIADggIAPgKIBagcIAtgWIAugoIAmg8IARg8QAIj/ikAAQCVhBBQCYIAUBTQgDBpgZAtQgoBhizAtIgPAKIgFAhIADAMIARANIBrAjIBBAnIA0A3IAhA5IAUBEIAKBfQgjEeiyAAQgmAAgugOg");
	this.shape_172.setTransform(194.6,152.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#02DCFF").s().p("AkjLAQhugyAAhIQgFhnBmgMIADAAIAHACIAUADIAjAUQA1A8ACAbIAhAjQD+BLAqlbIgKhfIgUhEIggg5Ig1g3IhAgoIhrgiIgSgNIgCgMIAFghIAPgKQCzgtAohhQAZgtAChpIgUhTQhQiYiVBBIgyAeIgjAtIg0BuIgPAHIgygRQgKjBDtiEQDqhfDBDmQB6EYkzC7QEdBBgFFWQAACRjcCsQhNBNjSAAQhTAAhogMg");
	this.shape_173.setTransform(199.5,149.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#296CAE").s().p("AgSBcQg0ghgNg3QgFifCsA6Qh3AFAKBvQAUBAArAeQgcgMgcgJg");
	this.shape_174.setTransform(159.9,205.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#2F7BC2").s().p("ACMikQjbB9AADCIg8AKQAjkDD0hGg");
	this.shape_175.setTransform(170.8,97.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#618BBC").s().p("Ag1gEIA7gKIAwARIg1AMg");
	this.shape_176.setTransform(162.1,114.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#2771B6").s().p("AhzJCQDsgegFkOQAAhIgehEIggg3Ig1g0Ig9glIh2glIgMgXIAKgjQBfgMBlhTIAjgyIAUg5QAUkTjJAKQCXhJBdCjIARBNQADBLgeBJQg8BzizAjIgIAKIAAAgIANASIB0AlIBEAnQAaATATAaIAqBEIAXBLIAHBIQgbEri+AAQgpAAgwgOg");
	this.shape_177.setTransform(194.4,152.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0CEDFF").s().p("Ak5K3QgTgKgTgIQgtgfgUg/QgKhxB4gFIAZAFIAhAUQAqArAXA8IAWARQESBOAhlrIgIhIIgWhLIgrhEQgTgagagTIhCgoIh2gkIgMgSIAAggIAHgKQCzgjA8hzQAehJgChLIgShNQhbijiZBJIgoAZIglAoIgmA+IgRAwIgPAPIgKACIgwgRQAAjDDch9IADAAIAHgDQD+hhC+DcQCHEalFDBQE+BegZE2QgDCbjhClQhaBNjAAAQhhAAh6gUg");
	this.shape_178.setTransform(198.9,149.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#3473B1").s().p("AhLgeQAWhzCBA1QhUgNgZBYQgHAzAMAUIAvA3QhcgbgChwg");
	this.shape_179.setTransform(159.1,205.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#478ACB").s().p("ABtiYQiTBYgbDOIgrAKQAAi1DZh7g");
	this.shape_180.setTransform(167.6,99.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#173F6D").s().p("AgxgEIArgKIA4AOIgmANQgCACgEAAQgPAAgogTg");
	this.shape_181.setTransform(161.8,115);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#23FDFF").s().p("Al1KVIgvg3QgNgUAIg1QAZhXBVAMIAFAAIAeAKIAZASQAtA0AMAoIAcAZQEIBnA0mEIgKhQIgRg5IgohEIg6g3IhWgtIhngfIgKgZIAFgcIASgKIBfgbIBFgoIAggcIAmg3QA0idgvhGQheiZibBJQhfA3g3CHIg6gPQAcjQCThXIADAAQFEiZDID/QBzEgk+CvQE0BXgFEuQACCsj6CtQidBLiUAAQh/AAh6g3g");
	this.shape_182.setTransform(198.4,149.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#397ABA").s().p("AiCI8QCDAKBGhkQAjgtAPhLIAFhaQgMighLg3IgegeIhFgnIhuggIgPgPIAAgjIAHgKIBxgjIAogUIAxgoQAvg6gCgRIARhYQADh9hQg5QgngcgoAAIg3ADQCahJBfCZQAvBGg0CdIgmA3IggAcIhFAoIhfAbIgSAKIgFAcIAKAZIBnAgIBWAsIA6A3IAoBEIARA5IAKBQQgpEziuAAQguAAg3gWg");
	this.shape_183.setTransform(194.4,153);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#487DB4").s().p("AhMAtQgMhCAZgeIAtgmQBFgMAeAjQisgeA3C9g");
	this.shape_184.setTransform(159.7,203);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6BA3DD").s().p("ABLiDQh+CIACBzIgZANQAZi2B8hSg");
	this.shape_185.setTransform(164.5,101.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#193E6B").s().p("AgogCIAZgMIA4ARIgZAMg");
	this.shape_186.setTransform(161.1,115);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#457CB5").s().p("AiTIzQCHAjBbhzQAmg3APhDIAFhaIgIhBIgWhGIg1hLIgqgmIhKgnIhsggIgMgZIAFgcIAKgHIBcgZIBGgmIAnggIAjgyQAZgwADhaIgUhQQhjiTiFA8QC4hfBdCsQAoBagyCAQg3Bwi7AoIgPAIIgCAoQFiBtgZD1QAACihnBdQhEAvg+AAQgyAAgugeg");
	this.shape_187.setTransform(194.3,153.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#49FFFF").s().p("AmjJwQg3i+CsAeIASAFIAbAZIAyBTIAXAUQBpBDB5hVQBnhcAAijQAZj1lihtIACgoIAPgHQC7goA3hxQAyh/gohaQhciti5BfQhIAtg/CHIg5gRQgDhzCAiKQEejNETDfQDDELl3DuQBYACCTCJQBYA+gNDaQg3D1kTBpQiOAlhvAAQitAAhfhag");
	this.shape_188.setTransform(198,149.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#2A4F7C").s().p("AghgGIAKgIIA5ARQgGAMgMAAQgRAAgggVg");
	this.shape_189.setTransform(160.9,115.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#8EB9EA").s().p("AgJAaIAThAIgLAxIADAUIgJAIg");
	this.shape_190.setTransform(158.3,110.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6091C7").s().p("AhWAOQAAgYAoglQBWglAvBAQgQgSg6gHIg0APIgjAxIgKArg");
	this.shape_191.setTransform(161,199.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#5888BC").s().p("AijIgQEUBaAwlCQAZkYlRhSIgHgFIgDgjIAIgMIAggNIgWANIgDAUIAIAeQFdBKgXE2QgMCHhfBVQhLAqg6AAQhBAAgugygABlnTQhoiti5BzIAvgoQAtgbA3AAQBogFA/BuQBQDqjpBtQC/hgg/jjg");
	this.shape_192.setTransform(192.9,153.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#73FFFF").s().p("Am7JBIgCgMIAAgFIAKgrIAjgyIA0gPQA6AHARASIADAFIAeAhIAjA+QBaBfCahXQBfhVAMiHQAXk2ldhKIgIgeIADgUIAWgNIAFAAIAFgCIAUgFIAFgDIAegHIADAAIAbgMQDohthQjqQg/huhoAFQg3AAgtAbIgvAoIgcAcIgeAvIgRAtIgXAeIg5gRIgFgUIAMgyIAAgDIAFgKIADgHIACgFIADgIIAAgCIACgFIBGhuQBkhkBEgNQDsg+CbBzQETEYmhELQFCBjAAEMQhBFKkfBNQiDAhhnAAQjUAAhbiKg");
	this.shape_193.setTransform(197.1,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]},1).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(151.9,78.3,89.5,142.7);


(lib.one_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6AA0D8").s().p("AhagRQATATCJgGIAZAVIh8AAIgDABQgbAAgbgjg");
	this.shape.setTransform(226.9,209.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5079A9").s().p("AhWHvIBlAAIBLgPIARgRQAQgSAEgsIgCAxQgIAjgRANIg6ARIiKAFgACACyIAEAdIgECXgABrnrIgWgNIg3ACIiGApIgUgDIgHgNIAdAAICHgnIA0gDQAoACAABRg");
	this.shape_1.setTransform(174.5,160);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#86FFFF").s().p("AlSKzIADhGICMgFIA5gRQASgNAHgjIACgxIABgXIAAgUIAFiWIgFgeIgDpmQAAhQgogDIg0ADIiHAoIgeAAIgSgtIAFgXIHxj1QAZgUAjAKIAFSlIAMBVIACADQAdAlAdgCIB9AAIAKARQAIA6gSAFIqVAHIgXABQgeAAAAgLg");
	this.shape_2.setTransform(198.4,149.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#73ABE5").s().p("AhOgDQCQAHAjgWQgFATgjAKIihAIg");
	this.shape_3.setTransform(174.6,209.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91B9E8").s().p("AhdGmIgHg0IgFnaIAGltIAEMcIAHBEIASAeIAUAKICVAHIAHAcIgSAAQiuAAgHgwg");
	this.shape_4.setTransform(225.4,165.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C2F5A").s().p("AhzARICzgsQAvgFAFAWIgyAAQhlAnguAAQgaAAgIgMg");
	this.shape_5.setTransform(172.9,110.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#84FFFF").s().p("AlJK7QgPhIAPgIICigHQAjgKAFgUQAUgPAAhYIgCs4QgIg0gMAAQgFgXgwAFIi0AtQgtg8AjgMIHuj4QA6gbAAAoIgCFtIgGFsIAFHbIAIA0QAHAyDBgCQAKBDgSAIg");
	this.shape_6.setTransform(197.5,149.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#304F78").s().p("AAAgBIAFgDIgJAJg");
	this.shape_7.setTransform(183.3,208.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6FA6E0").s().p("AhbAMIAegTICZgEIgEAHIgyAQg");
	this.shape_8.setTransform(174,209.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#092C57").s().p("AhRAeIgfgNICTgpQBBgNAMAZIhFAKIhjAgg");
	this.shape_9.setTransform(172.8,111);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#60FFFF").s().p("Ak8K5IgPgIQgKhIAWgDICCAAIAygRIAKgKIASgjIAFg8IgDs7IgRg+QgNgZhBAMIiTArIgPgFQgZg1APgHIHBjrQBQgyARAUIgFACIAIADIACARIgFLhIAFHlIASA3IAbAMIAmAIIB1ACIAIAUIAAA3IgDAFg");
	this.shape_10.setTransform(196.7,149.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#73A8E0").s().p("ABjKEIgHgUIh1gDIglgHIgcgNIgRg3IgFnlIAFrgIgDgSIgHgCIAFgDIAUAUIAKAeIgFLmIAFGuQgUBhDTgUQANAFgFBEIgSAZg");
	this.shape_11.setTransform(225.1,149.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6296CE").s().p("AhaALIA3gVIB+AAIgKAKIgvALg");
	this.shape_12.setTransform(173.6,209.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#193F6D").s().p("AhrASICJgpQA3gSAWAcIiVAsg");
	this.shape_13.setTransform(172.5,111.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34FFFF").s().p("AlAKzQgUhLAZgFIB9AAIAwgNIAKgKQAWgRADhGIgDtRIgRgyQgXgcg3ASIiJAqIgSgFQgZg0APgIIGtjoQBVg3ASARIAHANIAASvIAIBGQAPAgAqAIICFAFIAKAUIgFA8g");
	this.shape_14.setTransform(196.1,149.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A8CCD").s().p("ABaKEIgKgUIiDgFQgrgIgPggIgHhGIAAyvIgIgNIAlAUIANAPIgDMuIAIGLQgDAXAkAbICcANIAFBIIgoAcg");
	this.shape_15.setTransform(224.8,149.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6CA3DB").s().p("AhTAHIBBgSIBmACIgDACIgHAFIgFACIgDADIgMAEIgrAGg");
	this.shape_16.setTransform(173.6,209.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#113765").s().p("AhlATICSgvQAegKAbAcIiDApg");
	this.shape_17.setTransform(172.8,111.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#13F6FF").s().p("AkoKwIgUgKQgPhJAgAAIBfAFIArgFIAMgFIADgCIAFgDIAHgFIADgCQAPgFAFgcIAHg5IgCtFIgPg3QgcgbgeAKIiTAvIgUgCQgZg1AKgHIGHjfQBnhBAUAIIAMARIAASyIAIA+IAMAcIAeAPICWAPIAABLg");
	this.shape_18.setTransform(195.2,149.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2776BF").s().p("ABNJ5IiVgPIgegQIgNgbIgHg/IAAyxIgNgRQBGATADASIACSqQgWBfDRgMQAMAEgFBGIg5Aag");
	this.shape_19.setTransform(224.1,149.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#649BD4").s().p("AhPAJIBPgTIBQAFQgDAJgoAHg");
	this.shape_20.setTransform(173.5,209.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2F5685").s().p("AhiAUICGguQA/gNAAAhIhrAkg");
	this.shape_21.setTransform(172.9,111.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#04E1FF").s().p("AkpKoQgZhLAegFIB1ACQAogHADgKQARgMAFgZIAFhJIgCs9IgNglQAAghg+AMIiHAwIgSgDQgbg0AMgHIGmj9QAvgeAcAAIAKAXIgFLoIAHHxQANA6AUACICbARIAHAXQADAygKAFg");
	this.shape_22.setTransform(194.8,150);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1372C5").s().p("ABFKPIgIgXIiagRQgUgCgMg6IgInxIAFroIgKgXIBGAUIASAUIgFKKIAKI5IAWAlIAnAPQBugCANAPIAABGIhOAZQAKgFgCgyg");
	this.shape_23.setTransform(223.4,150);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#649BD4").s().p("AhNAGIBSgQIBJACQgSATgoAAg");
	this.shape_24.setTransform(173.8,209.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#406998").s().p("AhfAVIB8gvQBBgPACAoIhVAgg");
	this.shape_25.setTransform(173.4,111.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00D4FF").s().p("AAHKwIkhgMIgMgIQgNhGAZgCIBiAFQAoAAARgUIASgeIAHg1IgCtOIgIgmQgCgohBAPIh9AwIgUgFQgXg3ASgIIF7jwQBGgyARAKIAKAXIgFKPIAFJDQgMBfDDgKIAHAbQADAygKAFg");
	this.shape_26.setTransform(194.3,150.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0B77D4").s().p("AA3KSIgHgcQjCAKAMhfIgFpDIAFqPIgKgWIBTARIAOAFIAIARIgFKAIAKJGIAIAXIARARQAJAPB9ACIAUALIAABDIhhAbQAKgEgDgyg");
	this.shape_27.setTransform(222.5,150.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#649CD5").s().p("AhGAEIBKgMIBDAAIgeARg");
	this.shape_28.setTransform(174.4,208.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C6697").s().p("AhdAUIB8guQA1gUAKA2Ig/AZg");
	this.shape_29.setTransform(173.6,111.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00C9FF").s().p("AkMKeQgUgFAKhDIAPgIIBxAFIAegRIARghIAFgqIAAs2IgHg5QgKg3g1AUIh9AvIgMgCQgUg1AKgFIFTjoQBVhBAUAHIAKAXIgFLbIAFH5QARBLAXgCICEAPIAIAbQACAygKAFg");
	this.shape_30.setTransform(193.6,150.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0C87ED").s().p("AApKUIgHgcIiEgOQgWACgShLIgFn5IAFrcIgKgWIBsAUIAMAPIAASWIAIA/IAKAZIAaARIBuAKIAXAKIAABGIhzAZQAKgFgDgyg");
	this.shape_31.setTransform(221.4,150.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#497BB0").s().p("AhAAFICBgOIgIALIgTAIg");
	this.shape_32.setTransform(175.3,208.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3B6799").s().p("AhUAVIB3gxQAtgMAFA2IgmARg");
	this.shape_33.setTransform(174.8,111.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00BCFF").s().p("Aj7KaQgZhNAjgDIBmAFIAUgHIAIgNQAUgWAAg1IgFtiQgFg3gtAMIh4AyIgPAAQgXg0AKgIIFlkJQAbgbAcAAIAKAPIAATeIAPA3IAHAFIAoASQBdAAAKAPIAFAvIgFAeg");
	this.shape_34.setTransform(193,150.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0A93F3").s().p("AAcKuIgGgvQgKgPhbAAIgogSIgHgFIgQg3IAAzeIgKgPICCAUIAIAPIgDNWIAIF8QgIA8CqAHIAABGIiDAZg");
	this.shape_35.setTransform(220,150.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5287BF").s().p("AhBAFICDgOQgFAOgbAFg");
	this.shape_36.setTransform(175.1,208.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#366396").s().p("AhQAYIB3g0QAlgMAFA9IgbAKg");
	this.shape_37.setTransform(175.1,111.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00B6FF").s().p("AgFKrIjugUIgHgFQgIhEAPgFIBkAFQAcgFAFgPQAUgZAAgvIgFteQgFg+gmAMIh4A1IgRgFIgIg6IFlkVQAPgSAZADIAHAWIgCTVIAHAlIAPAZIAwAUIBcANIADBDIgIANg");
	this.shape_38.setTransform(192.9,150.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0999F4").s().p("AATLBIgDhDIhbgNIgwgUIgPgZIgHglIACzVIgHgXICCASIAKAKIAAQ1IAHCqQgHA2ChALIAABIIiMAWg");
	this.shape_39.setTransform(219.4,150.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5387BF").s().p("AhGAGIBvgQIAeACQgFAOglAFg");
	this.shape_40.setTransform(174.6,208.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#376293").s().p("AhVAVIB3gxQA0gMAAAzIgyAUg");
	this.shape_41.setTransform(174.4,111.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00C1FF").s().p("AArKxIkhgUIgUgHQgKhGAUgDIBkAFQAlgFAFgPIAPgjIAFg0IAAqYIgHjDQAAg1g1ANIh4AyIgRgDQgUg0AKgIIFVj1QBBg0APAHIAKAIIADAUIgIJiIANKQQAbAwASgFIB4APIACBDIgHANg");
	this.shape_42.setTransform(193.2,150.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0B8EF3").s().p("AAgLAIgChEIh3gPQgRAFgcgvIgNqRIAIpiIgCgUIgKgHIB8AUIAIAMIAASgIAHA6IARAeQAPAUB9AFIAHAMIAAA/Ih/Abg");
	this.shape_43.setTransform(220.5,150.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#649BD4").s().p("AhJAFIBPgOIBEAAQgPATgjAAg");
	this.shape_44.setTransform(174.1,209);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F6999").s().p("AhbAVIB5guQAvgSAPAxIhBAZg");
	this.shape_45.setTransform(173.8,111.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00CCFF").s().p("AAsKyIk9gRIgKgFIAAhJIANgCIBhAFQAjAAAPgUIAPgZIAIgtIAAtAIgIg3QgPgygvASIh7AvIgPAAIgPg8IGAkBQAtgjAWACIAKAPIAASyIAIBNIANAXIAnAUIB2AKIAIAbQACAygKAFg");
	this.shape_46.setTransform(193.9,150.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0C83E7").s().p("AAuKUIgHgcIh1gKIgogTIgMgXIgIhNIAAyyIgKgPIBuAWIAIANIgDMwIAIGbIAKAdIAQASIAmAKIBaAFIAUAKIAABDIhuAcQAKgFgDgyg");
	this.shape_47.setTransform(221.6,150.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#649BD4").s().p("AhNAIIBfgUIA8AGQgIAOgvAEg");
	this.shape_48.setTransform(173.8,209);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#426B9A").s().p("AhjATICBgsQA3gUAPAtIhaAgg");
	this.shape_49.setTransform(173,111.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00D6FF").s().p("AAwKzIlOgPQgXhGAcgKIBkAFQAvgFAIgPIAMgMIANhEIgDtRIgHglQgPgtg3AUIiCAtIgNgDQgWgyAKgHIGMj6QBBgwAPANIAKAWIgFKZIAFI5QANBJAegDICRASIACBDIgHANg");
	this.shape_50.setTransform(194.2,150.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0C76D0").s().p("AA4K8IgChEIiQgRQgeACgNhIIgFo5IAFqZIgKgWIBYATIAKAGIAFAOIgFLFIAKH/IAHAZIAUAUIBAAMIBJACIAPAIIAABGIhfAbg");
	this.shape_51.setTransform(222.6,150.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#649BD4").s().p("AhOAHIBOgTIBPAGQgUASgrABg");
	this.shape_52.setTransform(173.6,209.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F5685").s().p("AhiAUIB6gsQBIgPADAgIhrAlg");
	this.shape_53.setTransform(172.9,111.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#05E2FF").s().p("AktKpQgXhNAjgDIBfAFQArAAAUgUQARgMAFgZIAFgrIAAsfQADhDgSgeQgCghhJAPIh6AtIgXgHQgWg1ARgHIGmj6QA3gmAPAKIAKAUIAAS3IAHA+IAKAUIASANIA8AMIBXADIAKAHIADBLg");
	this.shape_54.setTransform(194.7,149.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1472C4").s().p("AA/J7IgKgHIhXgDIg8gNIgSgMIgKgUIgHg+IAAy3IgKgUIBOAXIAJATIgFKyIALIPQgDA6CuAAIAMAEIADAKIgDA/IhIAZg");
	this.shape_55.setTransform(223.5,150);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5688BE").s().p("AhTAJIBBgTIBmACIgDADIgHAFIgFABIgDADIgjAHg");
	this.shape_56.setTransform(173.6,209.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#103765").s().p("AhlATICSgvQAegKAbAcIiDApg");
	this.shape_57.setTransform(172.8,111.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#12F5FF").s().p("AkqKwIgUgKQgPhJAhAAIBzADIAjgIIACgCIAFgDIAIgFIACgCQAKAAANgoIAFg3IgDtFIgPgyQgbgbgeAKIiUAvIgUgCQgZg1AKgHIHBj/QArgcAWADIANAUIgFKFIAFI0IAHA8IAPAWIASAKIAyAKIBpAFIAHAUIgCA6g");
	this.shape_58.setTransform(195.4,149.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2676BF").s().p("ABPKKIgHgUIhogFIgygKIgSgKIgPgXIgHg8IgFozIAFqGIgNgTQBGATADASIACSqQgWBfDRgMQAMAEgFBGIg5Aag");
	this.shape_59.setTransform(224.1,149.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6BA2DB").s().p("AhVAKIAygTIB5AAIAAACIgjARg");
	this.shape_60.setTransform(173.6,209.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0D325F").s().p("AhrASICWgsQA+gKACAZIiVApg");
	this.shape_61.setTransform(172.5,111.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2EFEFF").s().p("AkzKzIgNgCIgFgKIAAg1IADgMIAPgFICJAAIAjgSIAAgCQAUgNAFggIAFh7IgCr5IgSg3QgCgZg/AKIiWAtIgRgFQgXgyAKgIIG3jwQBOgyARASIAIAeIgFMGIAHHHIASAtIAPAKIAvAKIB4AHIAABLg");
	this.shape_62.setTransform(195.8,149.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4488CA").s().p("ABVJ1Ih3gIIgvgKIgPgKIgSgtIgInHIAGsGIgIgeIAoAUIANAeIgGLeIAGG7QgVBhDUgRIAFBGIgoAeg");
	this.shape_63.setTransform(224.8,149.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#75AEE8").s().p("AhdAMIArgVICQgCIgFAEQgcAUgegBg");
	this.shape_64.setTransform(173.9,209.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#082C58").s().p("AhLAeIgjgNICXgpQA3gNAPAZIg3AIIhlAig");
	this.shape_65.setTransform(172.4,111);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#56FFFF").s().p("Ak7K1IgPgFQgKhGAUgFIB9AAQAeAAAcgUIAFgFQAMgDAKg0IADioIgDrKQgKgygKAAQgPgZg3ANIiYAqIgNgFQgZg0APgIIG6joQBQgyARAPIAKAZIgFLqIAFHbIAPAwIAPAPIA1AMIBzADIAKARIAAA8IgKAFg");
	this.shape_66.setTransform(196.6,149.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#69A1DB").s().p("ABhKBIgKgRIhygDIg0gMIgPgPIgPgwIgFnbIAFrqIgKgZIAlAlIgCMkIAIGQQgFBGDEgFIAFA/IgXAgg");
	this.shape_67.setTransform(225,149.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#71A9E2").s().p("AhGgEQCXAEASgRQgSAbglAFIiOACg");
	this.shape_68.setTransform(174.6,209.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0E305C").s().p("AhxASICQgqQBJgMAKAZIgXgDQh3ArgzAAQgZAAgJgLg");
	this.shape_69.setTransform(173.1,111);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7AFFFF").s().p("AlNK1IAAhEIAKgHICPgDQAlgFASgbQAUgKAAhkIgDspIgRg8QgKgZhJAMIiRArIgCAAIgFgDQgNAAgMgyIAHgPIHuj8QAZgXAeASIADMmIAHG7IAUAtIAwARICCADIAHAUIAAA3IrFACg");
	this.shape_70.setTransform(197.1,149.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8AB6E8").s().p("ABpKAIgIgUIiAgCIgwgSIgUgtIgIm6IgCsnIARAeIgCL/IAIGwIARArIAtARIB/ADIAHAOIgFBTg");
	this.shape_71.setTransform(225.3,149.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7BB5F0").s().p("AhdAGQC4AIAPgqQgMAxgrAAIicAIg");
	this.shape_72.setTransform(175.4,208.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#75ABE4").s().p("ABOAQIiQgFIgZgRQAAgJgDgHQAcAaCOgHIAUAag");
	this.shape_73.setTransform(227,209.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00204A").s().p("AhpAdIgPgPIAWACICdgsIAtADIARAWIgKgHIgggDIg1AIIhyAig");
	this.shape_74.setTransform(173.4,110.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8AFFFF").s().p("AlRKzIAFhGICdgIQArAAAMgyIANhDIgDtFIgPgvIAAgDIgRgWIgtgDIieAtIgWgCIgNgXIgHgoIHuj3QAggXAhAIIAHARIgFLZIAFHWIAIAwQABAGAFAFQADAHABAJIAZASICRAFIARAHQANBGgXAFIrAADg");
	this.shape_75.setTransform(198.1,149.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#73A9E2").s().p("AglAMQgigCgSgYIAqAHIBfgCIAOACIAcAWg");
	this.shape_76.setTransform(227.3,209.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#537EAF").s().p("AhaHlIAHgKQDgAPgMhhIAAtcIgUg0IgZgHIg8AEIhrAhIgjACIgWgvIACgKIAPAjIANAKIAUAAIB5glIBGgGIAZAQIAPAxIgCOGQACBVjigKIgDAtg");
	this.shape_77.setTransform(173.6,162.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7BFFFF").s().p("AlRKdIACgtQDkAKgDhVIADuFIgPgyIgZgPIhGAFIh7AlIgUAAIgMgKIgPgjIAAgPIAZgRIHkjuQAWgRAeAKIAIARIgFLeIAFHRIAPBBQARAZAjADICAACQAPAFgFBEIgUAHIq5AIg");
	this.shape_78.setTransform(198.6,149.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5D8FC4").s().p("AgrALQgZAAgRgVIB5AAIAyAVg");
	this.shape_79.setTransform(227.6,209.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#578AC0").s().p("AhiIcIAFhEQDbANgHhaIAFkOIgFpZIgSgtIgbgNIgwADIiNAnIgSgHIgPgoIAAgPIAPgKIAcA5IAZAAIB8glIBGgDIAWAUIANAwIgDODQgMA6grAHIihAKIgKAPIAAA3g");
	this.shape_80.setTransform(173.9,162.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#57FFFF").s().p("AlHK9IgEgKIAAg3IAKgPICigKQArgHAMg6IACuDIgMgvIgXgUIhFACIh9AmIgZAAIgcg6IAMgMIH+j4QAegKAJAKIAGStQAAA8ARAZQASAWAZAAICCAAIAJAFIADASIAAAyIgMAHImLAFIkOANg");
	this.shape_81.setTransform(199,150.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5F91C6").s().p("AgiALQgmgCgJgRIBjgCIBBAVg");
	this.shape_82.setTransform(228,209.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4580BB").s().p("AhpImIAFhGQDgAHgNheIAAtcIgRg0IgSgKIhIACQh8ArgPgKIgUg5IAqgZIgHAPIAWA3IAeAAIB1gjIBIgDIASAKIARA5IgCOEQAMBNi/AAIgoADIgDBKg");
	this.shape_83.setTransform(174.1,162.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2FFEFF").s().p("AlEK8IAChLIApgCQDAAAgMhOIACuDIgRg5IgSgKIhIACIh2AjIgeAAIgXg3IAIgPIIEj3QAhgFAAAWIAASeQAAA8AUAZQAKARAlADIB2AAIANAKIgGBDIpSAXg");
	this.shape_84.setTransform(199.8,150.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6293C8").s().p("AhLgIIBLgCIBMATIhtACQgjgCgHgRg");
	this.shape_85.setTransform(227.6,209.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#307ABF").s().p("AiGIeQgLhGAPgFIB9gIIA0gRQAUgSAHgeIAGgtIgGtRQgCg5g+AHQBwgtANBTIAENlIgEA5QgIAegUASIgwARIiKAKIgDBOg");
	this.shape_86.setTransform(177.1,164.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4A84BF").s().p("AkEBZIGjjMIBpgqInaDnQACBJAcgDQgeAOgTAAQgqAAALhFg");
	this.shape_87.setTransform(185.1,97.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#13F5FF").s().p("Ak7JxICMgKIAwgSQAUgRAHgeIAFg6IgFtkQgMhThxAtIhuAcQgbACgDhIIHajpIADAAIA0gMIANAYIgFLcIAFHOIAFAjIAMAaQAIARAjACIBugCIACAAIAIACQARAFgPBJIqkAcg");
	this.shape_88.setTransform(200.6,150.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6495CA").s().p("AhJgJIA/gDIBUAUIhhAEQgtgFgFgQg");
	this.shape_89.setTransform(227.4,209);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2075C3").s().p("AiNIfIAAhGIAKgHIB/gIIAqgPIAYgvIAGg1IgDs/QgKhLgqAMQB8gvADBaIACN7IgCAcIgZAyIhDAWIh1AIIgDBNg");
	this.shape_90.setTransform(177.8,164.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#05E3FF").s().p("AkyK/IAChOIB2gIIBDgWIAZgyIADgbIgDt8QgChah9AvIhkAaIgDAAQgiADAEhKIHajrIAFAAIAegHIAKAFIAIAWIgFLPIAFHcIAPA2QAFASAtAFIBhgFIANAAIAHAKIgFBEIpcAlg");
	this.shape_91.setTransform(201.2,150.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3B7DBD").s().p("AkGBZIG+jbIBagcInaDqQgEBKAigDIhQAMQgog8AcgKg");
	this.shape_92.setTransform(185.8,96.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5684B8").s().p("AhGgJIAlgCIBoATIhZAEQgtAAgHgVg");
	this.shape_93.setTransform(227.1,208.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1778CE").s().p("AiQIlIgDhLIASgIIBzgHIAqgSQARgKAIgoIAEhBIgCsrQgKhLgbAHQB/gqgCBLIAEN+IgMBBIgUAZIgoAPIiBAKIgHAKIAABGg");
	this.shape_94.setTransform(178.5,164.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2F78BD").s().p("AkTBfIGqjYQANgSBwgSInQDoQgCBIAggBIhhAMg");
	this.shape_95.setTransform(186.6,96.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00D6FF").s().p("AkoK9IAAhGIAIgKICCgKIAogPIAUgZIAMhBIgFt+QADhLiAArIhaAWIgFABQggABAChIIHQjoIAcgFIAPARIAASbIAPBLQAHAXAtAAIBagFIASAHQAFA/gNAHIk4ASIkmAbg");
	this.shape_96.setTransform(201.9,151.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5786B9").s().p("AhDgKICGAQIhZAFQglAAgIgVg");
	this.shape_97.setTransform(226.8,208.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1380DC").s().p("Ag1I6IhLgPIgFgCIgRgFIAChLQDFgDgIhLIADtxQgIg/gUgFQCCgvAABQIAFN2IgFAwIgWAvIgmASIiDAPIgDBQg");
	this.shape_98.setTransform(179.4,164.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00CCFF").s().p("AkTJxICEgPIAmgRIAWgwIAFgwIgFt2QAAhQiCAvIhVAXQgqg8AUgMIG8jnIAZgCIAMAPIAASWQADBBAMANQAIAWAlAAIBagFQAcADgUBKIpVAwg");
	this.shape_99.setTransform(202.4,151.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2576C0").s().p("AkKBWIG3jgIBmgRIm8DlQgUAMArA8IhuAKQgeg8AUgKg");
	this.shape_100.setTransform(187.2,96.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6E9ED2").s().p("Ag8gKIB5AOIhRAHQgeAAgKgVg");
	this.shape_101.setTransform(225.9,208.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#148DEC").s().p("Ag2I6IgKAAIgFgDIgNgCIgHAAIgIgDIgMgCIgIAAIgHgDIgIAAIgFgCQgegIAXhLQC9ADgNhYIAAt2QgKgygKAAIBYgXQAegKARAwIAICqIgDL8IgWA8QgNAWiSAKIgDBTg");
	this.shape_102.setTransform(180.3,164.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1D76C6").s().p("AkDBTIGCjPQAKgUCCgKImjDlQAFBFAZgCIh4ANQglgyAUgWg");
	this.shape_103.setTransform(187.5,96.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00C2FF").s().p("AkBJvQCTgKANgXIAWg8IADr8IgIiqQgRgvgeAKIhYAWIg+APIgBAAQgZACgEhGIGjjlIACAAIAFgDIAZAAIAKAZIgFJqIAFI7IANAwQAKAWAeAAIBSgIIAFAAQAXAIgNBGIo0A3g");
	this.shape_104.setTransform(203.1,151.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6D9DD1").s().p("AgxAAIgFgJIBtAMIhSAHg");
	this.shape_105.setTransform(225,208.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1296EE").s().p("AgfI9IgIAAIgHgDIgKAAIgIgCIgKAAIgFgDIgIAAIgKgCIgHAAIgHgDIgIAAIgKgCIgHAAIgIgDIgKgFIAAhGQCsgCAChfIAAttIgPg3QCCg3ANA/IAHBIIAANHIgDAjIgWA3IgjASIhyARIgCBQg");
	this.shape_106.setTransform(181.5,164.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1778C9").s().p("Aj/BRIF+jWICMgUImFDbQgcAPArA/IiFAKQgqg8AbgNg");
	this.shape_107.setTransform(188.3,96.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00B6FF").s().p("AjzJyIBzgRIAjgSIAXg3IACgjIAAtHIgHhIQgNg/iCA3IgtANQgqg/AbgPIGFjcIAUgCIANAZIAASiIAMAyIAFAKIAXAKIBSgHQAmAAgXBNIoOA8g");
	this.shape_108.setTransform(203.9,151.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6292C6").s().p("AgzgIIBnAJIhHAIQgYAAgIgRg");
	this.shape_109.setTransform(224.2,208.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#119FF0").s().p("AgIJAIgMgCIgGAAIgIgCIgIAAIgmgGIgGAAIgKgCIgGAAIgogGIgMgGIAChIQCtgIgMhaIAAttIgJgwIBfggQA2gEgCAgIAIAuIAAN5IgKAyQgCAsiTAMIgCBSg");
	this.shape_110.setTransform(182.7,164.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#167CCC").s().p("Aj/BUIFrjZICUgSIlvDhQAEBAAQAEIiOAKQgWgCAAhCg");
	this.shape_111.setTransform(189.2,96.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00A9FF").s().p("AjfJwQCUgMACgsIAKgyIAAt5IgIguQACggg2AEIhgAgIgaAEQgQgEgEhAIFvjiIACAAIAEgCIASACIAGASIAASTIAMBEQAIASAYAAIBIgIQAcACgQBKInlBCg");
	this.shape_112.setTransform(204.6,151.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6999CD").s().p("AgzgJIBnALIhFAIQgYAAgKgTg");
	this.shape_113.setTransform(224.4,208.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1199ED").s().p("AgZI/IgIgCIgGAAIgIgCIgIAAIgGgCIgGAAIgIgCIgGAAIgIgCIgGAAIg0gIIgIgGIAChIQCrgEgGhWIACtzIgMg0QCIg+AKBIIAGAwIACMtIgEBOIgIAkQgKAagcAKIh1ASIgGAKIgCBIg");
	this.shape_114.setTransform(182.2,164.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1579CA").s().p("AkEBXIF1jZICUgWIl/DjQACBEAYAAIiQAKQgSgEgCg+g");
	this.shape_115.setTransform(188.9,96.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00B0FF").s().p("AjwLAIAChIIAGgKIB2gSQAcgKAKgaIAIgkIAEhOIgCstIgGgwQgKhIiIA+IggAIQgYAAgChEIF/jkIAWAAIAIAUIgEH+IAEKVIAMBEQAKAUAYAAIBGgIQAkgCgSBOIn5BAg");
	this.shape_116.setTransform(204.3,151.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6E9DD1").s().p("Ag4gKIByAOIhNAHQghgFgEgQg");
	this.shape_117.setTransform(225.3,208.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1390EB").s().p("AhoIyIgKAAIgFgDIgKAAIgFgCIgUgIIADhIQC3AAgHhdIAAtxIgSgyIBQgZQAogIASAmIAIAqIACMnIgCBQIgLA0IgbAeIgZAKIh3ASIAABNg");
	this.shape_118.setTransform(181,164.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1A77C8").s().p("AkGBWIF9jRQAKgUCKgKImUDgQgSAKAmA/IiCAKQgcg8ANgIg");
	this.shape_119.setTransform(187.8,96.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00BCFF").s().p("Aj7LAIAAhOIB4gRIAZgKIAbgeIAKg1IADhQIgDsmIgHgrQgSglgoAHIhQAZIg5ANQgmg/ASgKIGUjhIAegCIAHAPIAASOIANBQQAFASAgAFIBOgIIAUADIAABIIoMA8g");
	this.shape_120.setTransform(203.2,151.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6F9ED2").s().p("Ag8gJIB5AOIhZAFQgZgCgHgRg");
	this.shape_121.setTransform(226.1,208.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1587E7").s().p("AiWIpIgDhIIAFgIICMgRIAbgUIARgrIADtdQACgygbghIBLgUQAqgHANAoIAHAtIADMrIgDBBIgMA8QgwA3iBgFIgFBQg");
	this.shape_122.setTransform(179.9,164.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2076C3").s().p("AkQBbIGUjWQAKgUCEgMImvDiQgUAPAbA1IASAHIh4AKQgZgtAFgUg");
	this.shape_123.setTransform(187.6,96.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00C7FF").s().p("AkRLAIAFhQQCCAFAwg3IAMg8IADhBIgDssIgHgtQgNgogqAIIhLAUIhGAUIgSgIQgbg0AUgPIGvjkIAXgCIAMAUIAASbQADA8AMAHQAIASAZACIBagFQAogCgXBQIpFA0g");
	this.shape_124.setTransform(202.9,151.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5685B8").s().p("AhBgIIAjgCIBgAQIhbAFQgegCgKgRg");
	this.shape_125.setTransform(226.6,208.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#157CD5").s().p("AiPIoIgFhBIAFgPQCTgHARgUIAPgSIANgoIAAtvQgNg+gRACQBug0ARBcIADODIgKAyIgUAcIgyARIh3AKIgIBEIAFAMg");
	this.shape_126.setTransform(178.9,164.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00D1FF").s().p("AkhK0IAHhDIB4gKIAygRIAUgcIAKgyIgCuDQgShdhuA1IhaAWIgRgHQgcg8AXgHIG+jkIAcgFIAPAPIAASUQACBFANAPQAKASAeADIBcgFIANAAQARAHgMBGIpmAtg");
	this.shape_127.setTransform(202,151);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#2977BE").s().p("AkKBXIG8jgIBhgUIm+DjQgXAHAcA9IARAHIhkANQgog6AXgNg");
	this.shape_128.setTransform(186.7,96.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4975A7").s().p("AhEgIIA/gCIBKAQIheAFQgjgCgIgRg");
	this.shape_129.setTransform(227.1,208.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1B76C7").s().p("AiRIfIAChGIBzgKIA7gUIAZgrIAFgoIgCtWQgRhDgZAIQBrgvARBWIAFNvIgFAwQgHAjgUAPIgtARIiGANIAABNg");
	this.shape_130.setTransform(178.1,164.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#02DCFF").s().p("AksJyICHgMIAtgSQAUgPAIgjIAFgvIgFtvQgRhWhrAvIgEABIhmAZQgjgoAPgjIHVjoIAegDIAMASIAASgQAAA0ASAUQAHASAjACIBfgFIAIAAIAFADQAUAFgSBIIp/Amg");
	this.shape_131.setTransform(201.6,150.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3177BA").s().p("AkRBcIHGjjIBfgZInVDoQgPAjAjAoQgkAOgXAAQgzAAAKhFg");
	this.shape_132.setTransform(186.7,96.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6394C9").s().p("AhNgIIBNgCIBOATIhyACQgZgCgQgRg");
	this.shape_133.setTransform(227.8,209.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#2676BF").s().p("AiLIgIAAhJICHgMIAugSQASgMAHgjIAGgyIgDs9QgFhLg3AKQB6grADBLIAFN8IgFAqIgZAtIg5AUIh/AIIgFBNg");
	this.shape_134.setTransform(177.5,164.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0AEBFF").s().p("Ak4K9IAGhNIB/gIIA5gUIAZgtIAGgqIgGt8QgChLh7ArIhkAZQgiAKgFhLIHkjwIAggIIANADIAHAMIAASbQAAA8ARAZQAQASAZACIBzgCIAOAHIgEBGIlDANIkSAUg");
	this.shape_135.setTransform(200.8,150.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#407FBC").s().p("AkMBcIHTjlIBIgXInkDvQAFBLAjgKQglARgXAAQgvAAAMhFg");
	this.shape_136.setTransform(185.9,97.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6192C7").s().p("AhPgIIBhgCIA+ATIhtACQgjgCgPgRg");
	this.shape_137.setTransform(227.8,209.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4281C0").s().p("AhvJUIAChIICJgKIAtgPQAUgPAIgjIAEg1IgEtEQgLhJhIAXQCAgyAHBXIAFNlIgFAwQgCAbgXAZIg3AUIiGAIIgFBNgAicoGIDXhmIivBXQAIBLAggHQgeAQgSAAQgnAAAHhFg");
	this.shape_138.setTransform(174.7,158.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1FFCFF").s().p("AlBK8IAFhNICHgIIA3gUQAWgZADgbIAFgwIgFtlQgIhYh/AzIgDAAIgFACIhXAXQghAHgHhLICwhXIEniPIADAAIAHgFIAogPIASADIAKARIgFJdIAFJKIAHA1IAKAUQAPASAjACIBugDIAPAGQAIBDgSAIImjAMIjrAPg");
	this.shape_139.setTransform(200.2,150.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5E90C5").s().p("AhRgKIB0AAIAvATIhyACQgtgFgEgQg");
	this.shape_140.setTransform(227.8,209.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4F86BF").s().p("AhmIkIAFhJQDeAKgKhdIAAtgIgPgvIgUgMIg6AAIiAAlIgXAAQgMgDgKg5IAZgPIAMAqIARAUICEgiQAbgNA4AHIARANIASA6IgDN9QAFBfjggPIgFBJg");
	this.shape_141.setTransform(174,162.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#42FFFF").s().p("AlDK/IgFgHIAFhJQDhAPgFhfIACt+IgRg5IgSgNQg3gHgbAMIiFAjIgRgUIgNgqIHYjpQBDgoASAUIAFSlQAAA/AUAbQAFASAtAFIBzgDIACAAQASAIgFBDIgNAFIk7AFIkyAPg");
	this.shape_142.setTransform(199.4,150.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#5C8EC4").s().p("AgiAOQgygIgCgTICGAFIAoAWg");
	this.shape_143.setTransform(227.5,209.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#5786B9").s().p("AheIcIAFhEICfgKQA6gbgFglIACtgIgRg3IgUgKIhMAEIhvAjIgUAAQgPgCgKgyIAIgPIARAtIASAKICGglIBIgGIAcAUIAMAwIgCOAQAFBbjegPIgKARIAAAyg");
	this.shape_144.setTransform(173.8,162.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6BFFFF").s().p("AlNKuIAAgyIAKgRQDfAPgFhaIACuBIgMgvIgcgUIhIAFIiHAlIgSgKIgRgtIARgUIH4j1IAogCIAIAPIgFJpIAFI+IAFAwIAMAbQADAUAyAIIB6AAIAKAFIAABGIgKAFIq7AMg");
	this.shape_145.setTransform(198.6,150.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,79.7,77.8,140.5);


(lib.grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BDC1C4","#7C838A"],[0.008,1],-1.3,-19.2,0,-1.3,-19.2,33.2).s().p("Aj0DBQgzAAAAg3IAAkUQAAg2AzAAIHpAAQAzAAAAA2IAAEUQAAA3gzAAgAkZiAIAAEAQAAAzAwAAIHTAAQAwAAAAgzIAAkAQAAgygwAAInTAAQgwAAAAAyg");
	this.shape.setTransform(29.6,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#9A9A9A","#939698"],[0.008,1],-1.3,-19.2,0,-1.3,-19.2,33.2).s().p("AjpCzQgwAAAAgzIAAkAQAAgyAwAAIHTAAQAwAAAAAyIAAEAQAAAzgwAAg");
	this.shape_1.setTransform(29.6,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.grey, new cjs.Rectangle(0,0,59.3,38.6), null);


(lib.rocinja2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272627").s().p("AgDEnIAAgBIAVgWIAxAwICviyIgvguIAWgWIAAAAIBHBEIgWAXIgBgBIjEDJgAhgD4IAAAAIAAAAIgWAWIimigIAXgWIAAgBIAAAAIgYgWIAWgXIAYAYIgWAVIClChIAWgWIBHBFIAAAAIgWAWgAjxAUIgWAWIgYgWIAWgWIAAgBIAWgVIgYgYIA2g2IAAAAIAMgMIAAAAIBfBcIgWAWIhIhFIgrAtIBfBaIgWAWgADZBJIgwgtIAWgXIAAAAIAwAuIgWAXgACPgoIAWgWIAAgBIAAAAIgvguIAWgVIAvAtIgWAWIAwAvIgWAVIAAAAgAjTlUIAWgXIDVDQIAWgWIgXgYIArgsIAAAAIAWgWIBHBFIgVAWIgBAAIgvguIgsAtIAYAWIgWAXIBIBFIgWAWgAieieIgrAsIAAAAIgYgXIAsgsIhghdIAWgWIDXDQIgWAWgAB0iaIAWgWIAXAXIgVAXgAkWk/IArgtIAYAYIgsAsgAjTlUg");
	this.shape.setTransform(28.8,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdEbIgWAWIABABIgBAAIhGhFIgWAWIilihIAWgVIgYgYIAAAAIAWgWIBHBEIAWgWIhfhaIArgtIBIBEIAWgVIhfhcIAAAAIAsgsIBfBcIAWgWIjXjQIAsgsIE1ErIAWgWIhIhFIAWgXIgYgWIAsgtIAvAuIABAAIAAAAIgWAWIAYAYIgWAVIAvAuIAAABIgWAWIAwAtIgWAXIAwAtIAAABIgWAWIAvAuIivCygAhVEDIAAAAIAAAAgAj6BiIAAAAIAAABgAj6BigADKAQIAAAAIAAAAgADKAQg");
	this.shape_1.setTransform(27.7,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.6,72.9);


(lib.for_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83AAD9").s().p("AgECCIAAkaIAJAAIAAExg");
	this.shape.setTransform(205.3,202.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90C2F8").s().p("AhAgDIBjAAIAeAGIiBABg");
	this.shape_1.setTransform(238.3,168.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7AA6D8").s().p("Ai2AGIgHgMIADgEIAGAKIALAEIFfgBIAIAFIlpADg");
	this.shape_2.setTransform(186.8,167.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B6F9B").s().p("AAIDnIgCm1IgGgRIgPgCQAXgZAIAgIAAHGg");
	this.shape_3.setTransform(204.2,144.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82FFFF").s().p("ABiK4IgIgNIAAkzIgKAAIoKAEQhIgJAPgrIASgtIAbgcILguqQAwghAPAtIAFNWIAAAIICCgBIAMABIALAOIAACeIgQAKIiHACIAAE3IgKAJIjoADgAA6kPIlRGqIgHAQIgDAEIAHANIALAFIFpgDIAAnGQgFgSgJAAQgIAAgKALg");
	this.shape_4.setTransform(196.8,149.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8EBFF5").s().p("AhJABIAAgGIB3AAIAcALg");
	this.shape_5.setTransform(238.6,168.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#436EA0").s().p("AiuDuIgPgQIACgOIFbm3IAPgGIAHAKIheBsIjgEkIgXAUIgFAbQAAAMAoAAIE6gCIAAAIg");
	this.shape_6.setTransform(186,145);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#85FFFF").s().p("ABZK7IgFlAIoZAAQgqgFgFgUIAAgjIAWgtILPuXQAhg3AqADQANgIAMAoIAFNUIAAAHICUAFIAHCoQgPAUiMgIIADEqIgIAWgAA2kTIlbG3IgCAPIAPAPIFsAAIAAgHIAAm8IgIgNIgHgKg");
	this.shape_7.setTransform(196.6,149.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5882B2").s().p("AgIieIARAAIACEfIgVAeg");
	this.shape_8.setTransform(230.9,203.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#79AADF").s().p("AA3hTIiGgCIAKgFICNACQASCigXARQAIifgUgPg");
	this.shape_9.setTransform(238.8,177.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5A8CC2").s().p("Ai7DbIADgMIE9mZIAggjIANAAIAHAUIlBGZQgBAPgKAMIAcAKIEzADIlCAFQgIABgHAAQgYAAgOgTg");
	this.shape_10.setTransform(185.3,145.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67FFFF").s().p("ABWK6IgFlAIoFgDQgyAAgKgjQgFgZAXgjIKitqIBQhhQAZgSAZANIAKAgIACNZIAKAAICHACQAUAPgHCgIgUAKIh2AAIgRAAIgDE+IgFAFgAAaj2Ik9GZIgCAMQARAZAjgHIFCgFIgDnBIgHgUIgNAAg");
	this.shape_11.setTransform(195.9,149.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#86B4E8").s().p("AgDG9IgCtZIgKggQAiAhgFAbIACM4IgKAFg");
	this.shape_12.setTransform(230.1,124.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D82BA").s().p("AgPieIAigCIACEjIgpAeg");
	this.shape_13.setTransform(230.4,203.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6099D3").s().p("AAthUIiLgCIAhgIICQAFQAjCwhEAIQANikgSgPg");
	this.shape_14.setTransform(238.5,177.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#528ECB").s().p("Ai2DgIAGgbIFEmoIAYgKQAQARgIAZIkwGKIAAAUIAZAKIEaADIk6AFIgPABQgYAAgMgOg");
	this.shape_15.setTransform(184.8,145.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3AFFFF").s().p("ABUK+IgHgKIAAk5In9gFQgtgCgIgZQgFghAPgZIKvuPIA3hEQARgWAjAPIAKAjIAANWIAIAFICMACQARAPgMClIhxADIgjACIgFFAgAAqkOIlEGoIgFAcQAPARAjgFIE6gFIgDmqQAIgZgPgSg");
	this.shape_16.setTransform(195.3,149.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5795D2").s().p("AgOG6IAAtWIgKgjQAxAPgCAoIACNAIggAIg");
	this.shape_17.setTransform(229.8,124.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F5B97").s().p("AgXCbIgCk9IA2AAIACEnIg9Adg");
	this.shape_18.setTransform(229.6,204);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3D7DBC").s().p("AAhhWIh/gDIAogIICQAIIAFCkQgFAKg5AMQARgTgRikg");
	this.shape_19.setTransform(238,178);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#488FD3").s().p("AixDgIAGgbIE8mrIAMgHIAQAFIACA+IkPFnIgIAXQAHAUAcgDID2ADIjxAFIgqABQhBAAgGgOg");
	this.shape_20.setTransform(184.3,145.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18F7FF").s().p("ABLK5IgDk/InpgIQgWAFghgmQgFggAXggIK7u6IAWgUIAmgGIADABQAKAGACAmIAANXIARACICAADQARClgRATIhYAAIg3AAIADE+IgIAHgAAokSIk9GrIgFAbQAIARBpgEIDxgGIgCmRIgDg+IgPgGg");
	this.shape_21.setTransform(194.8,149.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#367FC4").s().p("AgWHAIAAtWQgCgngKgFQBMAUgKAlIADNEIgnAIg");
	this.shape_22.setTransform(229,123.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#226BAF").s().p("AgfCTIgDk0IBKAAIAAEmIhPAeg");
	this.shape_23.setTransform(228.8,204.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#367FC4").s().p("AAeBQIgFifIgMgKIhwgCIA3gGIB3AAIAUAIIAFChQgFAShLAIg");
	this.shape_24.setTransform(237.3,178.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3587D2").s().p("AigDqIgKgKIAFgZIEwmrIAMgHIAPAFIAFBXIj5FWIgFAUIANAKIAWACIDbADIk3ACg");
	this.shape_25.setTransform(183.9,144.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C72C1").s().p("AgdHEIgCtbQgDgogKgEQBSAPAAAYIAHNbIg2AFg");
	this.shape_26.setTransform(228.2,123.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#06E3FF").s().p("ABGK9IgFlDInLgKQgtADgRghQgDglASgcIJwt2IBBhVQAMgPAeAFIACAAQALAEACApIADNbIAUAAIBwACIANAKIAFCgIgKASIhBAAIhLAAIACE2IgHAPgAAhkRIkwGqIgFAZIAKAKIAUADIE3gDIAAl4IgFhYIgPgFg");
	this.shape_27.setTransform(194.5,149.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#136AB8").s().p("AgoCVIgDk4IBcADIAAEoIhhAcg");
	this.shape_28.setTransform(227.6,204.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2676C0").s().p("AAYAaIgIhtIgQgHIhuAAIBSgIIB6ADIAPAHIACCkQgHAShaAFQAPgIgFhBg");
	this.shape_29.setTransform(235.4,178.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2885D7").s().p("AiODrIgUgKIAAgUIEkmwIANgKIAPAGIAAB3IjWE2IgDAUQADAMA9AAICdAAIAAAIg");
	this.shape_30.setTransform(183.8,145);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00D5FF").s().p("ABIK/IgNgIIgCk9InOgPQgegKgCgZIAPg6IKBu8QASgcAjADIAMAMIAFAhIAANdIANADIBuAAIARAHIAIBuQAFBBgPAIIgFAAIgFACIghgCIhcgDIACE5IgHAPgAAbkPIkkGvIAAAUIAUAKIEwADIAAgIIgFlVIAAh4IgPgFg");
	this.shape_31.setTransform(194.1,149.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0F75CE").s().p("AgmHFIAAteIgFghIgMgMQBjAMAFAZIAHNgIhRAIg");
	this.shape_32.setTransform(226.9,123.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0A70C8").s().p("AgxCUIgCk2IBtADIgDErIhwAXg");
	this.shape_33.setTransform(226.3,204.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1F79CA").s().p("AAABeIACgZIgDiYIgKgHIhigDIBSgFIBzAAIAUANIACChQgKAShrAFg");
	this.shape_34.setTransform(234.5,178.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2188DF").s().p("AiMDoIgNgKIAAgRIEVmyIAKgIIAPAIIAACTIi2EVIgCAXIAMAKICuACIADAIg");
	this.shape_35.setTransform(183.6,145);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0A7FE2").s().p("AgwHGIAAtjIgMgqQBtAKAHAZIAFNnIhRAFg");
	this.shape_36.setTransform(225.6,123.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00C9FF").s().p("AA6K8IgGlCImOgPQg1AFgMgmIAHgyIJovQQAPgXAhAFIANArIAANiIAbADIBiACIAKAIIAECYIgCAZIgIAFIgRADIhugDIACE2IgHAPgAAZkSIkVGyIAAASIANAKIEmAFIgDgIIgCk3IAAiUIgPgHg");
	this.shape_37.setTransform(193.5,149.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0579D6").s().p("Ag6CcIgCk/IB3ADIAHAAIgCEtIiBAXg");
	this.shape_38.setTransform(224.6,204.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1B7FD4").s().p("AgUBkIAKgRIgEinIgQgIIhUgCIBkgFIBxADQAUAAgFBDIgCBwIgNAHIhvAKg");
	this.shape_39.setTransform(232.6,178.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1C8DE5").s().p("Ah5DoIgUgMIACgUID+mtIAKgIIAPAIIAAC2IiVD1IgDARIARANICJACIAAAIg");
	this.shape_40.setTransform(183.5,145);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00BDFF").s().p("ABaLBQgrAAAAgKIAAk9Il9gSQgZAFgZgoIAKg0II0vCQAKgcAoABIANAjIAANsIAbADIBVACIAPAIIAFCnIgKARIh4gCIADFAIgIAHgAAUkSIj+GtIgCAUIAUAMIEHAGIAAgIIgCkVIAAi2IgPgIg");
	this.shape_41.setTransform(193,149.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#088BF0").s().p("Ag5HHIAAtsIgMgjQB8AHAKAcIAFNqIhjAFg");
	this.shape_42.setTransform(224,123.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#037ED9").s().p("Ag9CVIAAk4IBqADIAZgDIAAEwIiLAXg");
	this.shape_43.setTransform(223.5,205.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1982D6").s().p("AgNBgIAFgUIAAiVIgHgPIgNgFIhfgCIB7gFIBoACIAPAFIAFAKIAACkQgNANhvAFIgZACg");
	this.shape_44.setTransform(230.6,178.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1B90E9").s().p("Ah4DoIgPgKIACgYID0mtIAPgGIAIAKIAADJIiCDbIgEAWIAQANIB4ACIAAAIg");
	this.shape_45.setTransform(183.6,145);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00B7FF").s().p("ABRLBIglgKIAAk9Il5gVQgbgFgIgTIAIg8IIdvEQADgSAqgKIAKAPIAFAjIAANjIANAAIBfACIAMAFIAIAPIAACWIgFAUIgNAFIhrgDIAAE5IgIAPgAATkUIj0GtIgDAYIAPAKIEBAGIAAgIIgDkAIAAjJIgHgKg");
	this.shape_46.setTransform(192.9,149.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0792F3").s().p("Ag7HLIAAtjIgFgjIgKgPQCGAIAKAbIAFNtIh6AFg");
	this.shape_47.setTransform(223,123.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0775D3").s().p("Ag2CSIgCk1IB2ADIgCEtIh6AXg");
	this.shape_48.setTransform(225.3,204.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1C7DD1").s().p("AgKBQIAAiVIgPgXIhQgCIBSgFIB1ADIAMAMIAACkIgHAHIh6ANg");
	this.shape_49.setTransform(233.9,178.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E8AE3").s().p("AiBDoIgPgEIgDgKIAGgXIECmmIANgKIAPAKIAACoIikEBIAAAUIANAKICaACIAAAIg");
	this.shape_50.setTransform(183.5,145);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00C2FF").s().p("AA1K8IgFlCImKgSQglAAgKgZQgFglAPgcIJFvBQAFgSArgHQARAMgCAlIAANeIAoADIBQACIAPAWIAACXIgNATIh4gCIADE2IgIARgAAVkQIkDGmIgFAXIACAKIAPAEIEVAGIAAgIIgDkhIAAioIgPgKg");
	this.shape_51.setTransform(193.2,149.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0987EE").s().p("Ag1HHIAAteQADglgSgMQB3AJAKAXIAINtIhSAFg");
	this.shape_52.setTransform(224.6,123.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0C6EC3").s().p("AguCUIAAk2IBlAAIAAEsIhtAZg");
	this.shape_53.setTransform(226.5,204.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2178C7").s().p("AAFBeIADgZIgGiYIgLgHIhkgDIBTgFIB2AAIASASIAACfIgKAHIhlANg");
	this.shape_54.setTransform(234.8,178.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2387DD").s().p("AiKDoIgRgKIACgWIEVmrIAMgKIAPAGIAACOIjCErQAPAhC4gNIAAAIg");
	this.shape_55.setTransform(183.6,145);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0B7CDC").s().p("AgvHDIAAtnIgMgjQBtAKAFAeIAFNiIhSAFg");
	this.shape_56.setTransform(226,123.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00CCFF").s().p("AA7K9IgFlDImhgPQglADgSgeIAIg3IJtvJQAcghAZAIIAMAjIAANnIAZAFIBkADIANAHIAFCZIgDAZIgHAFIgZAAIhnAAIAAE2IgHAPgAAYkPIkVGrIgCAWIARAKIEmAFIAAgHIgFk/IAAiPIgPgFg");
	this.shape_57.setTransform(193.6,149.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1569B6").s().p("AgnCTIAAk0IBWAAIAAEoIhdAcg");
	this.shape_58.setTransform(227.8,204.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2979C3").s().p("AAXBeIACgXIgFiaIgUgHIhtAAIBQgIIByADIAZAKIAACmIhfASg");
	this.shape_59.setTransform(235.5,178.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2A85D6").s().p("AiODrIgWgNIACgUIEnmvIAKgIIAPADIAEBzIjaE4IgGAZQADAPA6gDICmAAIAAAIg");
	this.shape_60.setTransform(183.8,145);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#01D7FF").s().p("ABBK8IgFlCInBgNQgygFAAgbQgCgkARgbIKMvBQAFgPAtgGIAMASIADAXIAANgIAMAFIBuAAIAUAHIAFCbIgCAWIgIAGIgtAAIhXAAIAAE1IgIAQgAAekSIkmGvIgCAUIAWANIEzADIAAgIIgDldIgFhzIgPgDg");
	this.shape_61.setTransform(194,149.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1174CA").s().p("AgmHCIAAtgIgCgWIgNgSQBmAKAAAjIAFNYIhPAIg");
	this.shape_62.setTransform(227.1,123.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#246BAF").s().p("AgfCTIAAkyIBHgCIAAEmIhPAeg");
	this.shape_63.setTransform(228.8,204.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3780C4").s().p("AAaBQIgCiIQAHgLgUgWIhqgCIAvgGIBwAAIAeAKIACCfQgFAShLAIg");
	this.shape_64.setTransform(237.6,178.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3687D2").s().p("AifDqIgKgKIAFgXIEwmqIAMgKIAQAFIACBXIj+FiQAMATBIAFIiLABg");
	this.shape_65.setTransform(183.8,144.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D73C0").s().p("AgeHCIAAtlIgPghQBRASADAXIAHNaIguAGg");
	this.shape_66.setTransform(228.1,123.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#07E4FF").s().p("ABHK8IgFlCInGgKQg6ACgKgeQgFgjAPgZIKRujIAjgtQAHgPAmACIAPAhIAANlIAeACIBrADQAUAWgHAKIACCKIgKARIhBAAIhIADIAAEzIgIAPgABCC8IgDl5IgChXIgPgFIgNAKIkwGqIgFAXIAKAKIAUACICMgBQBAAEBsgFg");
	this.shape_67.setTransform(194.4,149.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1E5A96").s().p("AgWCUIgCk2IA2AAIACEnIg/Adg");
	this.shape_68.setTransform(229.5,204);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3D7CBC").s().p("AArAUIgGhjIgdgKIhmAAIAogIICQAIIAFCkQgCAMg6AKQAKgHgChGg");
	this.shape_69.setTransform(238,178);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#478FD3").s().p("AixDgIAGgbIE6moIAMgKIASAFIAEA+IkXF0IAAARQAMABAJAJIECADIjxAFIgqABQhBAAgGgOg");
	this.shape_70.setTransform(184.3,145.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#16F6FF").s().p("ABKK6IgDlAIncgIQgwAFgUgoQgCggARgZIKguXIAqg1QAFgPArADQARAWgCAeIAANPIARACIBnAAIAeAKIAFBkQACBGgKAIIhaAAIg3AAIADE2IgKAPgAAkkPIk6GoIgFAbQAIASBpgFIDxgFIAAmSIgFg+IgRgFg");
	this.shape_71.setTransform(194.9,149.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#357EC4").s().p("AgUHBIAAtPQACgegRgWQBPAUgKAjIACNHIgnAHg");
	this.shape_72.setTransform(228.9,123.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#477EB8").s().p("AgQigIAmACIAAEhIgsAeg");
	this.shape_73.setTransform(230.3,203.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#548CC5").s().p("AArhUIiJgCIAhgIICQAFQAjCwhEAIQAKikgRgPg");
	this.shape_74.setTransform(238.5,177.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#528FCC").s().p("Ai2DgIAGgbIEXlnIAthEIAMgHIASAHIAAAoIkrGFIAAAUIAWAKIEaADIk6AFIgPABQgYAAgMgOg");
	this.shape_75.setTransform(184.8,145.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#34FEFF").s().p("ABQK7IgFlAInigFQhDAFgKgoQgDggASgZIKpuLIA1hBQARgWAmAPIAHAgIADNeIAHAAICKACQARAPgKClIgCAAIgFADIhnACIgogCIgFFCgAAqkQIgsBDIkYFnIgFAcQAPARAjgFIE6gFIgFmlIAAgoIgRgIg");
	this.shape_76.setTransform(195.3,149.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5090CF").s().p("AgOHAIgDteIgHghQAxASgCAhIACNEIggAIg");
	this.shape_77.setTransform(229.8,124.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#689ACF").s().p("AA0hVIiGgDIAPgFIB8AAIAXAIIACCVQAFAPgbAPQAKikgSgPg");
	this.shape_78.setTransform(238.8,177.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6995C7").s().p("AgJifIAWAAIACEZIgdAmg");
	this.shape_79.setTransform(230.8,203.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6296CE").s().p("Ai7DiIAGgXIFSm0QAUgSAIAoIlEGcIgDARIANANIE9ACIlHAFIgPABQgZAAgIgNg");
	this.shape_80.setTransform(185.3,144.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7CAEE4").s().p("AgIG6IAAtTIgKgjQAbAUAFAcIAFNEIgPAFg");
	this.shape_81.setTransform(230.1,124.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5CFFFF").s().p("ABWK7IgFlAIn7gCQhIgDAFgjIAMgyILtvOQAZgZAhAPIAKAjIAANUIAMACICHADQASAPgKClIiAAFIgWAAIgFFAgAA1kVIlTG0IgFAXQAKARAmgFIFGgFIgCm8QgFgcgMAAQgFAAgGAGg");
	this.shape_82.setTransform(195.7,149.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8ABBF1").s().p("ABAgBIiNgCIAGgGIB/AAIASAGIAEANg");
	this.shape_83.setTransform(238.4,169);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#84A7D3").s().p("AgDiYIAHgEIAAEjIgFAWg");
	this.shape_84.setTransform(231,202.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4A78AB").s().p("AiqDuIgSgMIACgUIFZm3IAOgEIAMAMQgOgCgsBAIkXFjIgIAcIAMAKIAOACIFDgCIAAAIg");
	this.shape_85.setTransform(185.9,145);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9ABDEA").s().p("AgEmwIAHA0IACMnIgFAGg");
	this.shape_86.setTransform(230.7,125.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7EFFFF").s().p("ABaK4IgGlAIn9AAQhIACgCgoQgEgcAcgmILZunIASgUIAagQIAcAAIAMAMIACAMIAENhICOACIAOAMIgCCmIgQAGIiCAAIgIAEIACE2IgCAGIgOAEgAA4kXIlZG3IgCAUIASAMIFnAAIAAgIIgEnHIgMgMg");
	this.shape_87.setTransform(196.2,149.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#78A6D9").s().p("AhEAEIAAgHIB1AAIAUAHg");
	this.shape_88.setTransform(238.4,168.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#436A98").s().p("AivDtIgNgKIAIgcIE3mMIAmgoQAMgFAFAjIgFgPIgKgFIgUAPIlGGbIgFAPQAMAUAhgCIFBgDIADAIIlWACg");
	this.shape_89.setTransform(186.6,145.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#88FFFF").s().p("ABdK6IgIgbIAAklIoMADQg3gFgFgUIgCgcIATgvILjuuQAhgqAgAHQASgFAFAoIACNPIAAAHICKAAIARANIAACiIgOAIIiKAAIAAE4IgKAKgABDkZIglAoIk4GNIgHAbIANAKIAWADIFVgDIgCgHIAAm1QgEgfgKAAIgEABg");
	this.shape_90.setTransform(196.8,149.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6A97CA").s().p("AgICCIAAkbIARAAIAAEzg");
	this.shape_91.setTransform(205.3,202.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6B97C9").s().p("Ag8gDIBRAAIAoAFIh5ACg");
	this.shape_92.setTransform(238.3,168.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#476E9D").s().p("Ai7gEIFlAAIASAFIllAEg");
	this.shape_93.setTransform(187.6,168.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#537BAA").s().p("AgCDnIgCm1IgKgSQAVgYAGAcIACHJg");
	this.shape_94.setTransform(204.9,144.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#75FFFF").s().p("ABbKsIAAk0IgSAAIoPAEQhGgSAgg+IACgEILxu/QA2g8AcA0IAGNVIAAAIIB6gCIAEAAIAGACIAMACIAGAIIACCgIgUAMIiEAAIAAE6IgIAGIjwAEgAA/kPIgSAQIlDGZIgIAWIAEAIIASAKIFlgEIgCnJQgDgPgIAAQgHAAgKALg");
	this.shape_95.setTransform(197.1,149.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8BBAEE").s().p("AluHMIJ7spIBsiCIrxO/g");
	this.shape_96.setTransform(185.7,131.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5E95CE").s().p("AgRB/IAAkZIAjgCIAAE6g");
	this.shape_97.setTransform(205.3,202.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#719ED1").s().p("AizABIFMgEIAbAHg");
	this.shape_98.setTransform(188.5,168.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6C98CA").s().p("Ag8AEIgDgHIBXAAIAoAHg");
	this.shape_99.setTransform(238.9,168.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6396CD").s().p("AgNDlIgFm6IgCAAIAUgWIALAAIAIARIACHEIgHACg");
	this.shape_100.setTransform(205.1,145.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#50FFFF").s().p("ABcKvIAAk7IgjACInwAIQgwgFgHgSQgIgtAXgbILvvEQAtgjAZAqIAFNRIADAIIB9AAIAUAKIACCdIgPANIiHACIADE0IgIAKIjjAHgAA0kEIlJGeIgFAZIAKAIIFnACIAIgCIgDnEIgHgRIgNAAg");
	this.shape_101.setTransform(197.8,149.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6DA3DB").s().p("AmFH1QgIggAXghIKzt2QArg/AggFIrvPEQgXAcAIAtg");
	this.shape_102.setTransform(185.8,133.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6C99CB").s().p("Ag2gDIBtAFIhtACg");
	this.shape_103.setTransform(238.1,168);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3676B4").s().p("AgXCEIgCkfIAzgCIAAE7g");
	this.shape_104.setTransform(205.2,202.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#466D9B").s().p("Ai1gBIE7gEIAwAFIlZAGg");
	this.shape_105.setTransform(189.4,168.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4587C6").s().p("AgWDmIgCmpQAZg8AYAgIAAHLg");
	this.shape_106.setTransform(205.1,145);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4583C1").s().p("AmCG4ILBuTQAKgeBIgWIhABMIqtN7QgkBAAaAYQhCgOAmhKg");
	this.shape_107.setTransform(186.3,134.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2BFEFF").s().p("ABgKxIAAk8Ig0ACInZAKIgwgMQgagYAkhAIKtt7IBAhMQAugcAMAyIAENHIAAAIIBugCIASAAIAQAMIAACcQgOAWiCgGIACEyIgIAKIjKAIgAAsjyIk5GRIgGAQIAGAMIASAIIFZgGIAAnLQgIgLgIAAQgRAAgRAng");
	this.shape_108.setTransform(198.2,149.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1B67AE").s().p("AgeCHIgDkhIBAgCIADE6g");
	this.shape_109.setTransform(205.1,202.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#81B1E5").s().p("Ag2AEIgDgHIByAHg");
	this.shape_110.setTransform(238.3,167.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#466D9B").s().p("AiuAAIEjgFIA6AGIlRAFg");
	this.shape_111.setTransform(190.3,168.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2776BF").s().p("AgeDlIgFmRIAkg3QAegUAAAZIADFaQAHBkgPANg");
	this.shape_112.setTransform(205.1,145.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#11F1FF").s().p("ABiKvIgDk7IhBACIm5ANIgwgIQgjgUAhhBILgvOIADAAIAFgCQAvgcAFA8IADM7IACAHIBxAAIAMAAIANANIAACbIgNAKIh9ACIAAE0IgMAKIjNAKgABBkTIglA3IkfF2IgFAeIAFADIANAHIFQgFQAPgMgHhkIgDlbQAAgOgJAAQgHAAgOAJg");
	this.shape_113.setTransform(198.7,149.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3075B8").s().p("AmHH+QgUgcAbgxIK+ufQACgRBQgSIrgPOQghBBAjAUg");
	this.shape_114.setTransform(186.2,134.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2176C3").s().p("AglCKIgEkkIBRgCIADE6g");
	this.shape_115.setTransform(205,202.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1471C3").s().p("AgjDhIgFl4QAuhiAjAUIgCHOg");
	this.shape_116.setTransform(204.6,145.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#91C3F9").s().p("AgsgDIBZAEIhXADg");
	this.shape_117.setTransform(236.8,167.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#466D9C").s().p("AiqAAIEKgFIBLAGIlLAFg");
	this.shape_118.setTransform(191.4,168.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#05E0FF").s().p("ABgF0IhSADIlTAMIhzgCIgUgUQgIgmAUgeIKYuNIA8hDQAygZAAA+IADMzIACAIIBYgDIAoAFIAFCeQgKAbh9gHIACEuIgPANIjZAHgAALjCIkFFiIgFAWIAFAFIAKAIIFLgFIADnOQgGgDgHAAQgfAAgnBRg");
	this.shape_119.setTransform(199.4,149.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#216FB7").s().p("AmDIDQgZgIAUhAIKiuVQAPgvBpgLIg8BEIqYONQgUAeAHAlIAUAVg");
	this.shape_120.setTransform(186.8,135);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1778CE").s().p("AgwCFIAAkfIBcgCIAFE6g");
	this.shape_121.setTransform(204.9,202.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0A74CF").s().p("AgsDjIgDliQA8hzAgAKIADHSg");
	this.shape_122.setTransform(204.5,145.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#466C9A").s().p("AgxgEIBjAHIhjACg");
	this.shape_123.setTransform(236.8,167.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#456D9C").s().p("AilAAIDvgFIBcAGIlEAFg");
	this.shape_124.setTransform(192.6,168.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#1C73C1").s().p("AmEIAQgPgHAPhBIKRuZQAAgmB/gNIg0A9IqJOZQgSAbAKAmIAXARg");
	this.shape_125.setTransform(187.1,135.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00D4FF").s().p("ABdFzIhcADIlMAPIhXgDIgXgRQgKgmASgbIKJuaIA0g8QAtgZADA8IACMxIAAAKIBkgDIASAAIAHAIIADCdIgKAKIh2AFIAAE0IgUAHIjIAKgAgBitIjrFHIgHAbIAFAFIAHAIIFEgFIgCnTIgGgBQggAAg2Bqg");
	this.shape_126.setTransform(199.9,149.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1178D1").s().p("AgzCGIgDkfIBtgCIAAE3g");
	this.shape_127.setTransform(204.5,202.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#466C9A").s().p("AgigDIBFAEIhFADg");
	this.shape_128.setTransform(234.5,167.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#456E9D").s().p("AiYAFIgEgHIDTgEIBnAEIkdAJg");
	this.shape_129.setTransform(193.8,168.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#047CE0").s().p("AgzDmIgDlGIBPh9IANgNIAMAFIAFBOIgFGCg");
	this.shape_130.setTransform(204.5,145);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1373C7").s().p("AlzGxIJyuUQADgiCEgQQgPAHgZAtIpwOfQgUAlAIAZIAWAZIgVABQiTAAA9hlg");
	this.shape_131.setTransform(187,135.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00C9FF").s().p("ABfKtIAAk5IhtADImBAMIgXgZQgHgZAUglIJwufQAZgtAPgGQAEgCADABQAjgSAFAyIADMzIAAAIIBGgDQAqgFAFANIADCbQgKAWhugFIACEvIgHAKIjBAPgABBkQIhPB9IjSEuIgFAbIAFADIAFAHIAZADIEcgKIAFmDIgFhNIgNgFg");
	this.shape_132.setTransform(200.5,150);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0C7ED7").s().p("Ag7CIIgDkeIB6gIIADE9g");
	this.shape_133.setTransform(204.3,202.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#466C9A").s().p("AgjgDIBKAEIhNADg");
	this.shape_134.setTransform(233.9,167.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#456E9D").s().p("AiLAFIgFgHIC2gEIBrAEIkDAJg");
	this.shape_135.setTransform(194.5,168.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0286E9").s().p("Ag6DlIgFkmIBjijIAUgFIAFGeQAKA1gXAAg");
	this.shape_136.setTransform(204.2,145.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0E79D4").s().p("AltIHQgcgNAXhDIJcuhQAFgmCOgFIgqAyIpVOpIgHA0QACAUAUAIg");
	this.shape_137.setTransform(187.9,135.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00BFFF").s().p("ABaFtIh6AIIlYAPQgVgIgCgUIAHg0IJVupIAqgyQAkgMACAjIAFM6IgCAIIBNgDIAZAAIAKAIIAACWQgHAbhngFIAAEsIgHAKIi+ASgABBkXIhjCjIiyESIAAAZIAGAHIAYADIEDgKQAXAAgKg1IgFmeg");
	this.shape_138.setTransform(201.3,150.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0885DA").s().p("AhBCMIgDkfICEgKIAFE7g");
	this.shape_139.setTransform(204.1,202.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#466D9B").s().p("AglgDIBLADIhLAEg");
	this.shape_140.setTransform(232.8,167.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#456E9E").s().p("AiEgCICWgFIByAFIjYAJIgVABQgbAAAAgKg");
	this.shape_141.setTransform(195.5,168.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0093EE").s().p("AAxDrIhygFIgDkGIBwjDIAMgHIAIAFIAFHQg");
	this.shape_142.setTransform(203.9,145);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00B3FF").s().p("ABUFuIiEAKIkuAPIgXgUIAIhBIIvupIAlgtQAhgPACAoIADM2IAAAHIBLgFIAbAIIADCYQgIAZhhgFIACEqIgKAMIisASgAA9kWIhvDDIiRDsIgDAeQAAAPAwgFIDYgKIAUAAIgFnQIgHgFg");
	this.shape_143.setTransform(202.1,150.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0B7FDB").s().p("AlbIJQgjgWAWg3IJDuzQAKgWCMgIIglAtIovOpIgIBBIAXAUg");
	this.shape_144.setTransform(188.3,135.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#058DDC").s().p("AhFCMIgFkfICQgKIAFE7g");
	this.shape_145.setTransform(203.8,202.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#456E9E").s().p("Ah2gCIB2gFIB3AFIi9AJIgVABQgbAAAAgKg");
	this.shape_146.setTransform(196.6,168.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#009DF0").s().p("AAxDqIh3gFIgDjeIBrjMQARgrAPAIIAIHSg");
	this.shape_147.setTransform(203.6,145.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0986DE").s().p("AlNIJQgegFARhGIIWutQAIgmCdAAIggAoIgDAPIoEOfQgNAeAIAlIAUASg");
	this.shape_148.setTransform(188.9,136.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00A7FF").s().p("ABQFtIiQAKIkBARIgUgRQgIgmANgeIIEueIADgPIAggoQAcgPAFAoIACMzIBdAHIACCbQgHAUhYAAIAAEvIilAZgAArj5IhrDNIh1DRIACARQAAAPAwgFIC9gKIAZAAIgInSIgEgCQgNAAgPAlg");
	this.shape_149.setTransform(202.7,150.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0789DB").s().p("AhECMIgCkfICIgKIAFE7g");
	this.shape_150.setTransform(203.9,202.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#466D9B").s().p("AgagCIA4ACIg7ADg");
	this.shape_151.setTransform(231.3,167.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#456E9E").s().p("Ah8gCICDgFIB2AFIjJAJIgVABQgbAAAAgKg");
	this.shape_152.setTransform(196,168.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0098EF").s().p("AAwDoIh1gFIgCjyIB3jXIARgFIAFG1QAIAigRAAQgFAAgIgEg");
	this.shape_153.setTransform(203.7,145.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0A83DD").s().p("AlbIEQgZgZAZg8IIoujQAKgeCRgDIghArIoVOeQgjBbAvAHg");
	this.shape_154.setTransform(188.5,136.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00ADFF").s().p("ABSFtIiIAKIkTASIgCgBIAAAAQgwgGAjhbIIWueIAggrIADAAIAFgCQAUgNAKAyIACMpIgCAFIA8gDIAbAAIANAIIAACWQgFAZhdgDIAAEsIgFAIIiqAUgAA+kXIh3DXIiCDdIAAAZQAAAQAwgGIDJgKQAhAPgKgsIgFm1g");
	this.shape_155.setTransform(202.3,150.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#0A82D8").s().p("Ag+CMIgCkhIB/gIIACE7g");
	this.shape_156.setTransform(204.3,202.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#466D9B").s().p("AgrgDIBXAEIhXADg");
	this.shape_157.setTransform(233.9,167.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#456E9D").s().p("AiLgCICmgEIBxAEIkLAJg");
	this.shape_158.setTransform(195,168.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#018BEB").s().p("AAxDqIhwgFIAAkaIBoixIASgDIAFHTg");
	this.shape_159.setTransform(204.1,145.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#0C7CD8").s().p("AloIEQgZgHAUhGIJLuhQAFgoCTgDIgjAoIpFOuIgIA+QAFASAXAFg");
	this.shape_160.setTransform(188.1,135.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00B9FF").s().p("ABYFuIh/AIIlAARQgXgFgFgRIAIg/IJGutIAjgoQAegSAHAoIADM4IAAAIIBXgDIAPAAIAFAIIACCWIgMAPIhfAFIgCEzIi8AUgABBkYIhoCxIioEIIAAAXIANAKIEKgKIAQAAIgGnTg");
	this.shape_161.setTransform(201.8,150.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#0E7BD5").s().p("Ag3CIIgDkeIBygIIADE9g");
	this.shape_162.setTransform(204.4,202.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#456E9D").s().p("AiRAFIgFgHIDEgEIBpAEIkPAJg");
	this.shape_163.setTransform(194.1,168.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#0381E6").s().p("Ag4DmIgDk4IBZiRIAKgHIANAFIAFFnQAHBfgRAKg");
	this.shape_164.setTransform(204.5,145);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#1076CD").s().p("AlvGtIJouaQAFggCHgIIgoAtIpeOaQgXAZAFA0IAZAXIgQAAQitAABIhpg");
	this.shape_165.setTransform(187.3,135.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00C4FF").s().p("ABaFuIhyAIIlqAPIgZgXQgFg0AWgZIJfuaIAogtQAjgRAFAoIACM6IAAAIIBGgDQAogFAFANIADCdQgKAShpgDIAAEvIgNAKIjAAPgABBkWIhZCRIjFEmIACAXIAFAHIAZADIEQgKQARgKgHhfIgFlnIgNgFg");
	this.shape_166.setTransform(201,150.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#137BD5").s().p("AgxCHIgCkhIBjgCIAEE6g");
	this.shape_167.setTransform(204.8,202.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0678D7").s().p("AgyDkIAAlWQA9h/AjAKIAFHQg");
	this.shape_168.setTransform(204.6,145.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#466C9A").s().p("AgrgDIBZAEIhbADg");
	this.shape_169.setTransform(235.9,167.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#456D9C").s().p("AijgCIDggEIBnAEIk1AJg");
	this.shape_170.setTransform(193.4,168.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00CEFF").s().p("ABdFyIhjADImSAPIgXgUQgKgPASgwIKBujIAwg1QAlgRAFAoIAFM9IgCAHIBcgCIAZACIAIAKIAACWQgKAZhxgFIAAExIgKAIIjNAMgAgGihIjhE8IgFAcIAFACIASAKIE1gKIgFnQIgGgBQgiAAg5B3g");
	this.shape_171.setTransform(200.2,150);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#1771C2").s().p("Al7IEQgegMAchEIKBuXQAAgoCHgKIgvA1IqCOjQgRAwAKAPIAWAUg");
	this.shape_172.setTransform(187.2,135.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#1C77C8").s().p("AgqCGIgCkhIBXgCIACE7g");
	this.shape_173.setTransform(204.9,202.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#91C3F9").s().p("AgygDIBlAFIhlACg");
	this.shape_174.setTransform(237.1,167.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#456D9C").s().p("AigAAID9gGIBEAGIkvAHg");
	this.shape_175.setTransform(191.3,168.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0E71C8").s().p("AAaDtIhDgGIgElvIA7hYQAQgaAOAiIACHFg");
	this.shape_176.setTransform(204.8,144.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#196AB5").s().p("AmBG2IKZuVIAageIBcgWQgNAHgbApIqXOZQgYAsAIAcIAWAWIgFAAQiAAAAvheg");
	this.shape_177.setTransform(186.6,135.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#02D9FF").s().p("ABgF0IhYACImRAQIgkgEIgWgWQgIgcAYgsIKXuZQAbgqANgHQAEgCACABQAogWAGAuIAEM/IAAAIIBmgCIASAAIAIAGIACCiIgMAIIh2AEIACEwIgIAKIjcAMgABCkRIg8BYIj5FVIgGAaIAGAGIASAIIEvgIIAUAAIgCnFQgIgUgJAAQgGAAgHAMg");
	this.shape_178.setTransform(199.6,149.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#2A77BF").s().p("AglCCIAAkdIBHgCIAEE7QhHgSgEgKg");
	this.shape_179.setTransform(205.2,202.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6D9ACC").s().p("AgtgCIBbADIhZACg");
	this.shape_180.setTransform(237,167.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#466D9C").s().p("AingBIEXgEIA4AFIlDAGg");
	this.shape_181.setTransform(190.2,168.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#1C72BF").s().p("AATDsIg3gGIAAmJIApg+IAMgKIAQAIIAEHPg");
	this.shape_182.setTransform(205.1,145);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#2771B6").s().p("AmHIAQgUgSAUg0IKxubQACggBmgSQgPAFgpA9IqhOJQgYAoAGAgIAYAUg");
	this.shape_183.setTransform(186.6,134.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#09E8FF").s().p("ABhF1IhIACIlzAMIhigEIgYgUQgGggAYgoIKhuJQAog9APgFIADAAQAmgWAMAuIAENDIACAGIBagCQAigGAIAOIACCgQgMAUh8gGIACEyIgMAKIjgAIgABDkQIgqA+IkVFtIgIAUIAGAMIAMAIIFDgGIASAAIgEnPIgQgIg");
	this.shape_184.setTransform(198.9,149.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#276CAF").s().p("AgdCBIAAkcIA4gDIADE9g");
	this.shape_185.setTransform(205.3,202.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#466C9B").s().p("AixAAIEugFIA1AGIlTAFg");
	this.shape_186.setTransform(189.8,168.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#357DC0").s().p("AgeDlIAAmeIAggwIARgCIAIAPIACFsQAFBSgMAKg");
	this.shape_187.setTransform(205.3,145.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#1CF9FF").s().p("ABfF2Ig5ADImUAKQhfAFgIgPQgbgwAggoILjvGIADAAIAFgDQAqgeANA3IAFNFIB/AFIANAKIAACgIgUAKIh4ACIAAE0IgPAKIjmAFgABGkVIggAvIkuGDIgFAbIAFAFIAPAIIFTgFQANgKgFhTIgDlsIgHgPg");
	this.shape_188.setTransform(198.5,149.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#3F81C2").s().p("Al3GnIKot3QAbg3BDgIIriPHQghAoAbAwQhZgQA7hZg");
	this.shape_189.setTransform(186.1,134.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#91C4FA").s().p("AiyABIFCgEIAjAHg");
	this.shape_190.setTransform(188.9,168.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6C99CB").s().p("Ag2gDIBtAEIhtADg");
	this.shape_191.setTransform(238,168.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#4B88C5").s().p("AgTCHIgCkhIApgCIADE6g");
	this.shape_192.setTransform(205.3,202.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#5893CF").s().p("AgTDmIgCmyIgDAAIAUgbIAMgGIAMANIADFdQAHBkgPANg");
	this.shape_193.setTransform(205.3,145);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#3CFFFF").s().p("ABfKwIgCk7IgrADIn1AHIgjgPQgPglAZgoILvvJIADAAQAygmAPA8IACNFIAAAHIBugCQAUgIASAUIAACeQgPAUiCgFIAAEzIgNAKIilAFgABEkWIgUAbIlEGeIAAAUIAHAFIFlADQAPgNgIhkIgCldIgNgMg");
	this.shape_194.setTransform(198,149.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#5993CE").s().p("AmJH1QgHgeAUggIKzt8QAhg3A0gPIrvPJQgZAoAPAmg");
	this.shape_195.setTransform(185.9,134.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6C98CA").s().p("Ag/AEIADgHIBUAAIAoAHg");
	this.shape_196.setTransform(238.6,168.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#70A1D6").s().p("AgLCFIAAkfIAXAAIAAE1g");
	this.shape_197.setTransform(205.3,202.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#6C99CB").s().p("Ai3gCIFYgDIAXAHIkVACIgpACQgrAAgGgIg");
	this.shape_198.setTransform(187.9,168.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#4875A7").s().p("AgIDmIAAm0IgHgPQAVgeAKAbIgCHOg");
	this.shape_199.setTransform(204.9,145);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#64FFFF").s().p("ABbKtIAAk2IgZAAIoJAFQgwgMADgcIARgyILyvEQA/gvAMA8IAFNJIgCAIIB/AAIANAAIAKAKIACCgIgKAKIiMACIAAE5IgKAHIjwAFgAA7kNIlRGrIgFAWIAFAFQAIANBSgFIEVgDIACnNQgEgNgIAAQgIAAgMAPg");
	this.shape_200.setTransform(197.4,149.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#7EB0E6").s().p("AmDHgIASgoILNuSIAnggIrxPDIgSAzg");
	this.shape_201.setTransform(185.8,133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:234.5}},{t:this.shape_127}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_128,p:{x:234}},{t:this.shape_162}]},1).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]},1).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146.6,79.7,100.6,139.6);


(lib.borderxsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#95D158","#407C03"],[0.008,1],-2.7,-35.6,0,-2.7,-35.6,64.5).s().p("AnbFkQhkABAAhlIAAoAQAAhjBkgBIO3AAQBkABAABjIAAIAQAABlhkgBgAoijtIAAHbQAABdBcAAIOMAAQBdAAAAhdIAAnbQAAhdhdAAIuMAAQhcAAAABdg");
	this.shape.setTransform(57.6,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.borderxsa, new cjs.Rectangle(0,0,115.2,71.3), null);


(lib.border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#58A5D1","#03437C"],[0.008,1],-2.7,-35.6,0,-2.7,-35.6,64.5).s().p("AnbFkQhkABAAhlIAAoAQAAhjBkgBIO3AAQBkABAABjIAAIAQAABlhkgBgAoijtIAAHbQAABdBcAAIOMAAQBdAAAAhdIAAnbQAAhdhdAAIuMAAQhcAAAABdg");
	this.shape.setTransform(57.6,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(0,0,115.2,71.3), null);


(lib.bgxsas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#95D158","#407C03"],[0.008,1],-2.2,-35.6,0,-2.2,-35.6,64.5).s().p("AnWFkQhkABAAhlIAAoAQAAhjBkgBIOtAAQBkABAABjIAAIAQAABlhkgBg");
	this.shape.setTransform(57.1,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgxsas, new cjs.Rectangle(0,0,114.2,71.3), null);


(lib.bg_4xsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(149,209,88,0)","rgba(233,251,157,0.537)"],[0.008,1],4.5,-19.2,-0.4,10.9).s().p("AAUBqQlXiwj3CCIAAi3QAAhkBkAAIOtAAQBkAAAABkIAAE4QhEAjhYAAQiiAAjph2g");
	this.shape.setTransform(57.1,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_4xsa, new cjs.Rectangle(0,0,114.2,44.8), null);


(lib.bg_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(88,199,209,0)","rgba(157,232,251,0.549)"],[0.008,1],4.5,-19.2,-0.4,10.9).s().p("AAUBqQlXiwj3CCIAAi3QAAhkBkAAIOtAAQBkAAAABkIAAE4QhEAjhYAAQiiAAjph2g");
	this.shape.setTransform(57.1,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_4, new cjs.Rectangle(0,0,114.2,44.8), null);


(lib.bg_3xsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(253,253,28,0.431)","rgba(24,73,3,0)"],[0.008,1],-2.5,24.3,0,-2.5,24.3,96.8).s().p("AnWDzQhkAAAAhkIAAlIQD3iEFXCxQFoC2C/hjIAADIQAABkhkAAg");
	this.shape.setTransform(57.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_3xsa, new cjs.Rectangle(0,0,114.2,48.5), null);


(lib.bg_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(28,172,253,0.427)","rgba(3,71,73,0)"],[0.008,1],-2.5,24.3,0,-2.5,24.3,96.8).s().p("AnWDzQhkAAAAhkIAAlIQD3iEFXCxQFoC2C/hjIAADIQAABkhkAAg");
	this.shape.setTransform(57.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_3, new cjs.Rectangle(0,0,114.2,48.5), null);


(lib.bg_2xas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(64,139,31,0)","rgba(24,73,3,0.424)"],[0.008,1],-1.8,21.9,0,-1.8,21.9,74.3).s().p("AnWDzQhkAAAAhkIAAlIQD3iEFXCxQFoC2C/hjIAADIQAABkhkAAg");
	this.shape.setTransform(57.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_2xas, new cjs.Rectangle(0,0,114.2,48.5), null);


(lib.bg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(31,58,139,0)","rgba(3,28,73,0.42)"],[0.008,1],-1.8,21.9,0,-1.8,21.9,74.3).s().p("AnWDzQhkAAAAhkIAAlIQD3iEFXCxQFoC2C/hjIAADIQAABkhkAAg");
	this.shape.setTransform(57.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_2, new cjs.Rectangle(0,0,114.2,48.5), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#58A5D1","#03507C"],[0.008,1],-2.2,-35.6,0,-2.2,-35.6,64.5).s().p("AnWFkQhkABAAhlIAAoAQAAhjBkgBIOtAAQBkABAABjIAAIAQAABlhkgBg");
	this.shape.setTransform(57.1,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,114.2,71.3), null);


(lib.balts1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhQjAC+IAAl7MChHAAAIAAF7g");
	this.shape.setTransform(515.6,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.balts1, new cjs.Rectangle(0,0,1031.3,38), null);


(lib.arrowxsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASA/IlKAAIAAh3IFKAAIgjiFIFKC9IlQC+g");
	this.shape.setTransform(31.3,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowxsa, new cjs.Rectangle(0,0,62.6,38), null);


(lib.rounded4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-3.5,0.238,0.262,0,0,0,57.1,22.3);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]}).to({state:[{t:this.instance_1,p:{alpha:0.531}},{t:this.instance,p:{alpha:0.488}}]},1).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]},2).wait(1));

	// Layer 2
	this.instance_2 = new lib.for_a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,-0.2,0.077,0.078,0,0,0,201.4,153.6);
	this.instance_2.filters = [new cjs.ColorFilter(0.58, 0.58, 0.58, 1, 107.1, 107.1, 107.1, 0)];
	this.instance_2.cache(145,78,105,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Layer 9
	this.instance_3 = new lib.border();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.238,0.262,0,0,0,57.5,35.6);

	this.instance_4 = new lib.bg_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_4.alpha = 0.172;

	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,0,0.238,0.262,0,0,0,57.1,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]},2).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330033").s().p("A/DBaIAAizMA+IAAAIAACzg");
	this.shape.setTransform(185.2,-0.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.4,27.5,18.7);


(lib.rounded3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-3.5,0.238,0.262,0,0,0,57.1,22.3);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]}).to({state:[{t:this.instance_1,p:{alpha:0.531}},{t:this.instance,p:{alpha:0.488}}]},1).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]},2).wait(1));

	// Layer 2
	this.instance_2 = new lib.three_a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,-0.2,0.076,0.076,0,0,0,200.7,152.5);
	this.instance_2.filters = [new cjs.ColorFilter(0.58, 0.58, 0.58, 1, 107.1, 107.1, 107.1, 0)];
	this.instance_2.cache(150,76,94,147);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Layer 9
	this.instance_3 = new lib.border();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.238,0.262,0,0,0,57.5,35.6);

	this.instance_4 = new lib.bg_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_4.alpha = 0.172;

	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,0,0.238,0.262,0,0,0,57.1,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]},2).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330033").s().p("A/DBaIAAizMA+IAAAIAACzg");
	this.shape.setTransform(185.2,-0.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.4,27.5,18.7);


(lib.rounded2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-3.5,0.238,0.262,0,0,0,57.1,22.3);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]}).to({state:[{t:this.instance_1,p:{alpha:0.531}},{t:this.instance,p:{alpha:0.488}}]},1).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]},2).wait(1));

	// Layer 2
	this.instance_2 = new lib.two_a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.1,0.074,0.074,0,0,0,201,154.6);
	this.instance_2.filters = [new cjs.ColorFilter(0.58, 0.58, 0.58, 1, 107.1, 107.1, 107.1, 0)];
	this.instance_2.cache(145,75,102,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Layer 9
	this.instance_3 = new lib.border();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.238,0.262,0,0,0,57.5,35.6);

	this.instance_4 = new lib.bg_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_4.alpha = 0.172;

	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,0,0.238,0.262,0,0,0,57.1,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]},2).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330033").s().p("A/DBaIAAizMA+IAAAIAACzg");
	this.shape.setTransform(185.2,-0.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.4,27.5,18.7);


(lib.rounded1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-3.5,0.238,0.262,0,0,0,57.1,22.3);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]}).to({state:[{t:this.instance_1,p:{alpha:0.531}},{t:this.instance,p:{alpha:0.488}}]},1).to({state:[{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]},2).wait(1));

	// Layer 2
	this.instance_2 = new lib.one_a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,-0.4,0.077,0.077,0,0,0,198.8,154);
	this.instance_2.filters = [new cjs.ColorFilter(0.66, 0.66, 0.66, 1, 86.7, 86.7, 86.7, 0)];
	this.instance_2.cache(158,78,82,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Layer 9
	this.instance_3 = new lib.border();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.238,0.262,0,0,0,57.5,35.6);

	this.instance_4 = new lib.bg_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,3,0.238,0.262,0,0,0,57.1,24.4);
	this.instance_4.alpha = 0.172;

	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,0,0.238,0.262,0,0,0,57.1,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:1}},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{alpha:0.172}},{t:this.instance_3}]},2).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330033").s().p("A/DBaIAAizMA+IAAAIAACzg");
	this.shape.setTransform(185.2,-0.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.4,27.5,18.7);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:185.2,y:153.1,alpha:1},6).to({x:157.8,y:110.3},6).to({x:139.5,y:81.8},6).to({x:130.4,y:67.5},6).to({x:129.6,y:66.2},1).wait(1).to({x:129.2,y:65.7},0).wait(12).to({x:128.7,y:69.9},0).wait(2).to({x:129.2,y:65.7},0).wait(4).to({x:-68.8,y:-69.3,alpha:0},14).to({_off:true},1).wait(11).to({_off:false,x:873.1,y:473.6},0).to({x:810.8,y:436.9,alpha:1},9).wait(1));

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


(lib.hg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(29.4,12.1,0.514,0.541,0,0,0,57.1,22.4);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.instance_2 = new lib.bg_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_2.alpha = 0.172;

	this.instance_3 = new lib.for_a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28.8,18.9,0.167,0.16,0,0,0,201.5,153.7);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_3.cache(145,78,105,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hg4, new cjs.Rectangle(0,0,58.8,38.6), null);


(lib.hg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(29.4,12.1,0.514,0.541,0,0,0,57.1,22.4);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.instance_2 = new lib.bg_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_2.alpha = 0.172;

	this.instance_3 = new lib.three_a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.9,18.9,0.164,0.157,0,0,0,200.6,152.8);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_3.cache(150,76,94,147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hg3, new cjs.Rectangle(0,0,58.8,38.6), null);


(lib.hg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(29.4,12.1,0.514,0.541,0,0,0,57.1,22.4);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.instance_2 = new lib.bg_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_2.alpha = 0.172;

	this.instance_3 = new lib.two_a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.5,19.6,0.161,0.153,0,0,0,201.1,154.5);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_3.cache(145,75,102,148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hg2, new cjs.Rectangle(0,0,58.8,38.6), null);


(lib.hg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_4();
	this.instance.parent = this;
	this.instance.setTransform(29.4,12.1,0.514,0.541,0,0,0,57.1,22.4);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_1.alpha = 0.148;

	this.instance_2 = new lib.bg_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,25.5,0.514,0.541,0,0,0,57.1,24.4);
	this.instance_2.alpha = 0.172;

	this.instance_3 = new lib.one_a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29,18.6,0.166,0.159,0,0,0,198.8,154.1);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_3.cache(158,78,82,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hg1, new cjs.Rectangle(0,0,58.8,38.6), null);


(lib.buttonnewxdd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.instance = new lib.bg_4xsa();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-6.4,0.451,0.497,0,0,0,57.1,22.4);

	this.instance_1 = new lib.bg_3xsa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,5.9,0.451,0.497,0,0,0,57.1,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]}).to({state:[{t:this.instance_1,p:{alpha:0.699}},{t:this.instance,p:{alpha:0.699}}]},1).to({state:[{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]},2).wait(1));

	// Layer 21
	this.instance_2 = new lib.borderxsa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.2,0.451,0.497,0,0,0,57.6,35.6);

	this.instance_3 = new lib.arrowxsa();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.2,0.1,0.451,0.497,0,0,180,31.3,19);

	this.instance_4 = new lib.bg_2xas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,5.9,0.451,0.497,0,0,0,57.1,24.2);

	this.instance_5 = new lib.bgxsas();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,0.2,0.451,0.497,0,0,0,57.1,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-17.5,52,35.5);


// stage content:
(lib.Bias_8_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{step0:5,step1:6,step2:7,step3:8,step4:9,step5:11});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
		this.Layer_3_rounded_1_0.goto = "step1";
		this.Layer_3_rounded_2_1.goto = "step2";
		this.Layer_3_rounded_3_2.goto = "step3";
		this.Layer_3_rounded_4_3.goto = "step4";
	}
	this.frame_6 = function() {
		this.stop();
		this.Layer_8_button_newxdd_0.goto = "step5";
	}
	this.frame_7 = function() {
		this.stop();
		this.Layer_8_button_newxdd_0.goto = "step5";
	}
	this.frame_8 = function() {
		this.stop();
		this.Layer_8_button_newxdd_0.goto = "step5";
	}
	this.frame_9 = function() {
		this.stop();
		this.Layer_8_button_newxdd_0.goto = "step5";
	}
	this.frame_10 = function() {
		this.Layer_8_button_newxdd_0.goto = "stepnext";
	}
	this.frame_11 = function() {
		this.stop();
		this.Layer_8_button_newxdd_0.goto = "stepnext";
	}
	this.frame_12 = function() {
		this.Layer_8_button_newxdd_0.goto = "stepnext";
	}
	this.frame_13 = function() {
		this.Layer_8_button_newxdd_0.goto = "stepnext";
	}
	this.frame_14 = function() {
		this.Layer_8_button_newxdd_0.goto = "stepnext";
	}
	this.frame_15 = function() {
		this.Layer_8_button_newxdd_0.goto = "stepnext";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// board
	this.instance = new lib.klikklikcopy();
	this.instance.parent = this;
	this.instance.setTransform(-104.4,275.6,0.437,0.437,0,0,0,119,71);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},1).wait(10));

	// Layer 8
	this.Layer_8_button_newxdd_0 = new lib.buttonnewxdd();
	this.Layer_8_button_newxdd_0.parent = this;
	this.Layer_8_button_newxdd_0.setTransform(787.3,370.3,1.346,1.578,180);
	this.Layer_8_button_newxdd_0._off = true;
	new cjs.ButtonHelper(this.Layer_8_button_newxdd_0, 0, 1, 2, false, new lib.buttonnewxdd(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Layer_8_button_newxdd_0).wait(6).to({_off:false},0).wait(4).to({scaleX:1.45,scaleY:1.7,x:832.3,y:438.3},0).wait(6));

	// Layer 3
	this.Layer_3_rounded_4_3 = new lib.rounded4();
	this.Layer_3_rounded_4_3.parent = this;
	this.Layer_3_rounded_4_3.setTransform(-95.5,412.4,2.16,2.062);
	new cjs.ButtonHelper(this.Layer_3_rounded_4_3, 0, 1, 2, false, new lib.rounded4(), 3);

	this.Layer_3_rounded_3_2 = new lib.rounded3();
	this.Layer_3_rounded_3_2.parent = this;
	this.Layer_3_rounded_3_2.setTransform(-95.5,367.1,2.16,2.062);
	new cjs.ButtonHelper(this.Layer_3_rounded_3_2, 0, 1, 2, false, new lib.rounded3(), 3);

	this.Layer_3_rounded_2_1 = new lib.rounded2();
	this.Layer_3_rounded_2_1.parent = this;
	this.Layer_3_rounded_2_1.setTransform(-95.5,321.9,2.16,2.062);
	new cjs.ButtonHelper(this.Layer_3_rounded_2_1, 0, 1, 2, false, new lib.rounded2(), 3);

	this.Layer_3_rounded_1_0 = new lib.rounded1();
	this.Layer_3_rounded_1_0.parent = this;
	this.Layer_3_rounded_1_0.setTransform(-95.5,276.6,2.16,2.062);
	new cjs.ButtonHelper(this.Layer_3_rounded_1_0, 0, 1, 2, false, new lib.rounded1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Layer_3_rounded_1_0},{t:this.Layer_3_rounded_2_1},{t:this.Layer_3_rounded_3_2},{t:this.Layer_3_rounded_4_3}]}).to({state:[{t:this.Layer_3_rounded_1_0},{t:this.Layer_3_rounded_2_1},{t:this.Layer_3_rounded_3_2},{t:this.Layer_3_rounded_4_3}]},5).to({state:[]},1).wait(10));

	// Layer 12
	this.instance_1 = new lib.hg4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-95.7,412.3,1,1,0,0,0,29.4,19.3);

	this.instance_2 = new lib.hg3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-95.7,367,1,1,0,0,0,29.4,19.3);

	this.instance_3 = new lib.hg2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-95.7,321.8,1,1,0,0,0,29.4,19.3);

	this.instance_4 = new lib.hg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-95.7,276.5,1,1,0,0,0,29.4,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},6).to({state:[]},4).wait(6));

	// Layer 9
	this.instance_5 = new lib.grey();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-95.5,412.3,1,1,0,0,0,29.6,19.3);

	this.instance_6 = new lib.grey();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-95.5,367,1,1,0,0,0,29.6,19.3);

	this.instance_7 = new lib.grey();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-95.5,321.8,1,1,0,0,0,29.6,19.3);

	this.instance_8 = new lib.grey();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-95.5,276.5,1,1,0,0,0,29.6,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},6).to({state:[]},4).wait(6));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#195ED7","#51A3FF","#3C68C9"],[0.012,0.843,1],0.4,-17.6,-0.5,17.7).ss(1,1,1).p("EA+eAC8Mh87AAAIAAl3MB87AAAg");
	this.shape.setTransform(334.4,275.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).wait(1).to({y:321.3},0).wait(1).to({y:366.8},0).wait(1).to({y:411.8},0).to({_off:true},1).wait(6));

	// Layer 5
	this.instance_9 = new lib.balts1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(328.7,412,0.785,1,0,0,0,515.7,19);
	this.instance_9.alpha = 0.621;

	this.instance_10 = new lib.balts1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(328.7,366.7,0.785,1,0,0,0,515.7,19);
	this.instance_10.alpha = 0.621;

	this.instance_11 = new lib.balts1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(328.7,321.5,0.785,1,0,0,0,515.7,19);
	this.instance_11.alpha = 0.621;

	this.instance_12 = new lib.balts1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(328.7,276.1,0.785,1,0,0,0,515.7,19);
	this.instance_12.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).to({state:[]},10).wait(6));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EhgoASnMAAAglMMDBRAAAMAAAAlMg");
	this.shape_1.setTransform(400.5,357.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(317,563.1,1237,238.1);
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