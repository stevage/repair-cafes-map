(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"01b6":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[r("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[r("div",{staticClass:"br b--light-gray overflow-auto w3 w5-ns pa2",attrs:{id:"sidebar"}},[r("FeatureInfo")],1),r("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[r("Map"),r("div",{staticClass:"absolute",attrs:{id:"overlay"}})],1)])])},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},s=[],c=(r("96cf"),r("3b8d")),u=r("cebc"),l=r("e192"),p=r.n(l),f=r("8936"),d=r.n(f),v=(r("ac6d"),r("b2e9")),h="2PACX-1vQjDnqpI1AvtDvIM7QDsioGGs8VsvqnAgP1tXhMT6aGtlIXqnRdlQP-eSix8KDhO0Gspx3NdlDXKkXP",b="https://docs.google.com/spreadsheets/d/e/".concat(h,"/pub?gid=0&single=true&output=csv");function m(e){return{type:"FeatureCollection",features:e.map(function(e,t){return{type:"Feature",geometry:{type:"Point",coordinates:[+e.Longitude,+e.Latitude]},properties:Object(u["a"])({id:t},e)}})}}var g={mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return p.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNmNGV5enAwMTF1M2tuejhtc2twcXo5In0.mLPrYIYJ2FiFZ3KMqVIj6w",t=new p.a.Map({container:"map",center:[144.96,-37.81],zoom:14,style:"mapbox://styles/mapbox/light-v9",hash:!0}),d.a.init(t,p.a),window.map=t,window.Map=this,e.t0=m,e.next=8,v.csv(b);case 8:e.t1=e.sent,r=(0,e.t0)(e.t1),t.U.addGeoJSON("points",r,{generateId:!0}),t.U.addCircle("points-circles","points",{circleColor:["match",["get","Category"],"Repair cafe","hsl(330,100%,40%)","Tool library","hsl(210,100%,40%)","black"],circleStrokeWidth:["case",["feature-state","selected"],2,0],circleRadius:{stops:[[10,6],[12,10]]}}),t.U.addSymbol("points-labels","points",{textField:["get","Name"],textAnchor:"left",textColor:["match",["get","Category"],"Repair cafe","hsl(330,100%,40%)","Tool library","hsl(210,100%,40%)","black"],textJustify:"left",textOffset:[.6,0],minzoom:11}),t.U.hoverPointer("points-circles"),t.on("click","points-circles",function(e){console.log(e),window.FeatureInfo.feature=e.features[0],n&&t.setFeatureState({source:"points",id:n},{selected:!1}),n=e.features[0].id,t.setFeatureState({source:"points",id:e.features[0].id},{selected:!0})});case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},y=g,_=r("2877"),w=Object(_["a"])(y,i,s,!1,null,"45a51e58",null);w.options.__file="Map.vue";var x=w.exports,C=function(){var e,t,r=this,n=r.$createElement,a=r._self._c||n;return a("div",{staticClass:"ba b--gray pa2 br3 shadow-1 box",class:(e={},e[r.p.Category.replace(" ","")]=!0,e)},[a("div",{staticClass:"f6 ttu b category",class:(t={},t[r.p.Category.replace(" ","")]=!0,t)},[r._v(r._s(r.p.Category))]),a("h1",{staticClass:"f3"},[r._v(r._s(r.p.Name))]),a("p",{staticClass:"i"},[r._v(r._s(r.p.Hours))]),a("p",[r._v(r._s(r.p.Notes))]),a("p",[r._v(r._s(r.p.Address))]),r.p.Link?a("div",[a("ul",[a("li",[a("a",{attrs:{href:r.p.Link}},[r._v("More information")])]),r.p["Link 2"]?a("li",[a("a",{attrs:{href:r.p["Link 2"]}},[r._v("See also")])]):r._e()])]):r._e()])},j=[],O={name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}},computed:{imageUrl:function(){return this.feature&&this.feature.properties.image_url},p:function(){return this.feature?this.feature.properties:{}}},created:function(){window.FeatureInfo=this}},I=O,k=(r("c719"),Object(_["a"])(I,C,j,!1,null,"4af2811e",null));k.options.__file="FeatureInfo.vue";var F=k.exports,M={name:"app",components:{Map:x,FeatureInfo:F}};r("948e");var P=M,S=(r("034f"),Object(_["a"])(P,a,o,!1,null,null,null));S.options.__file="App.vue";var L=S.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(L)}}).$mount("#app")},"64a9":function(e,t,r){},c719:function(e,t,r){"use strict";var n=r("01b6"),a=r.n(n);a.a}});
//# sourceMappingURL=app.558ab1ed.js.map