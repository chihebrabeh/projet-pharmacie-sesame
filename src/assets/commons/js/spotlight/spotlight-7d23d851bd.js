"use strict";var _createClass=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Spotlight=function(){var e="spotlight__item--isActive";function t(){_classCallCheck(this,t),this.ui={items:document.querySelectorAll('[data-plugin="spotlight"] [data-item]'),previous:document.querySelectorAll('[data-plugin="spotlight"] [data-previous]'),next:document.querySelectorAll('[data-plugin="spotlight"] [data-next]')},this.currentItem=0,this.itemsNumber=this.ui.items.length}return _createClass(t,[{key:"init",value:function(){this.ui.items&&this.ui.previous&&this.ui.next&&this._bindEvents()}},{key:"next",value:function(){this.currentItem=this.currentItem+1<this.itemsNumber?this.currentItem+1:0,this._reset(),this.ui.items[this.currentItem].classList.add(e)}},{key:"previous",value:function(){this.currentItem=0<=this.currentItem-1?this.currentItem-1:this.itemsNumber-1,this._reset(),this.ui.items[this.currentItem].classList.add(e)}},{key:"_reset",value:function(){this.ui.items.forEach(function(t){t.classList.remove(e)})}},{key:"_bindEvents",value:function(){var e=this;[].forEach.call(this.ui.previous,function(t){t.addEventListener("click",function(){e.previous()})}),[].forEach.call(this.ui.next,function(t){t.addEventListener("click",function(){e.next()})})}}]),t}();window.Spotlight=(new Spotlight).init();