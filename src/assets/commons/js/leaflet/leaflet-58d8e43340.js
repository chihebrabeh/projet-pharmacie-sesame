"use strict";var _createClass=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Leaflet=function(){function e(){_classCallCheck(this,e),this.ui={leaflet:document.querySelector("[data-leaflet]")},this.slide=null}return _createClass(e,[{key:"init",value:function(){this.slider=tns({container:this.ui.leaflet,slideBy:1,autoplay:!0,autoplayHoverPause:!0,autoplayButtonOutput:!1,autoplayButton:!1,nav:!0,mouseDrag:!0,controls:!1,loop:!0})}}]),e}();window.Leaflet=(new Leaflet).init();