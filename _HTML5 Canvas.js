(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"_HTML5 Canvas_atlas_", frames: [[0,1454,1740,490],[0,0,1940,800],[0,802,1920,650]]},
		{name:"_HTML5 Canvas_atlas_2", frames: [[0,0,1370,480]]}
];


// symbols:



(lib._1 = function() {
	this.initialize(ss["_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib._4();
	this.instance.setTransform(-646.3,-241.3,0.6732,0.7425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-646.3,-241.3,1292.6,482.6);


(lib.Interpolación5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib._3();
	this.instance.setTransform(-677.05,-247.25,0.698,0.6181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-677,-247.2,1354.1,494.5);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib._2();
	this.instance.setTransform(-694.35,-244.95,0.7981,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-694.3,-244.9,1388.6999999999998,489.9);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib._1();
	this.instance.setTransform(-685,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-685,-240,1370,480);


// stage content:
(lib._HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(1703.9,212.85,0.8094,0.8865,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(369).to({_off:false},0).to({x:554.55},30).wait(61).to({startPosition:0},0).to({x:-579.15},27).wait(1));

	// Capa_11
	this.instance_1 = new lib.Interpolación7("synched",0);
	this.instance_1.setTransform(1681.85,211,0.8569,0.8741,0,0,0,0.2,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272).to({_off:false},0).to({x:554},30).wait(59).to({startPosition:0},0).to({x:-579.15},30).to({_off:true},1).wait(96));

	// Capa_12
	this.instance_2 = new lib.Interpolación5("synched",0);
	this.instance_2.setTransform(1703.35,208.45,0.8221,0.8571,0,0,0,0.2,0.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({x:556.75,y:212.25},32).wait(49).to({startPosition:0},0).to({x:-584.15},30).to({_off:true},1).wait(187));

	// Capa_13
	this.instance_3 = new lib.Interpolación3("synched",0);
	this.instance_3.setTransform(1682.55,213,0.8024,0.8692,0,0,0,0.3,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).to({x:557.4,y:213.35},31).wait(62).to({startPosition:0},0).to({x:-594.8},38).to({_off:true},1).wait(264));

	// Capa_14
	this.instance_4 = new lib.Interpolación1("synched",0);
	this.instance_4.setTransform(1697.1,212.85,0.8094,0.8865,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:554.55},30).wait(62).to({startPosition:0},0).to({x:-582.45},27).to({_off:true},1).wait(368));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-602.2,206.2,2862,219.7);
// library properties:
lib.properties = {
	id: '726D1F6663C116429A75EA2527267F67',
	width: 1100,
	height: 420,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_HTML5 Canvas_atlas_.png?1716779919743", id:"_HTML5 Canvas_atlas_"},
		{src:"images/_HTML5 Canvas_atlas_2.png?1716779919743", id:"_HTML5 Canvas_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['726D1F6663C116429A75EA2527267F67'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;