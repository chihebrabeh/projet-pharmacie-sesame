"use strict";new Vue({el:"[data-vue=cart]",data:{cart:CartStore.state},computed:{cartJson:function(){return JSON.stringify(this.cart)}},methods:{updateQuantity:function(t,r){CartStore.updateQuantity(r.product.id,parseInt(t.target.value))},remove:function(t){CartStore.removeProduct(t.product.id)}},filters:{aspect_ratio:function(t,r){if(!t||!r)return t;if("nopic.png"==t.substr(-9))return t;var e=t.lastIndexOf(".");return-1==e?t:t.slice(0,e)+"-"+r+t.slice(e)},price:function(t){return"number"==typeof t?t.toFixed(2)+"€":""}}});