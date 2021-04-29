"use strict";var _createClass=function(){function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var GMap=function(){function t(){_classCallCheck(this,t),this.ui={target:document.querySelector("[data-map-title]")},null!==this.ui.target&&(this.title=this.ui.target.dataset.mapTitle,this.lat=this.ui.target.dataset.mapLat,this.long=this.ui.target.dataset.mapLong,this.marker=this.ui.target.dataset.mapMarker)}return _createClass(t,[{key:"init",value:function(){if(this.ui.target)return this.loadScript(),this}},{key:"initMap",value:function(){var t=new google.maps.Map(this.ui.target,{zoom:16,center:new google.maps.LatLng(this.lat,this.long),scrollwheel:!1,disableDefaultUI:!0}),e=new google.maps.Marker({position:new google.maps.LatLng(this.lat,this.long),map:t,title:this.title,icon:this.marker,animation:google.maps.Animation.DROP}),a=new google.maps.InfoWindow({content:"<strong>"+this.title+"<strong>"});setTimeout(function(){a.open(t,e)},1500)}},{key:"loadScript",value:function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?v=3.29&key=AIzaSyD8V_Mbuszb2cGYWhADNTeqck0DJV3wY-M&callback=GMap.initMap",t.async=!0,t.defer=!0,document.body.append(t)}}]),t}();window.GMap=(new GMap).init();