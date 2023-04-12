(function(){"use strict";var t={5248:function(t,e,n){var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],a={name:"App"},s=a,c=n(1001),u=n(3453),l=n.n(u),d=n(7524),h=n(1009),f=(0,c.Z)(s,i,o,!1,null,null,null),p=f.exports;l()(f,{VApp:d.Z,VMain:h.Z});var m=n(8345),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex flex-wrap justify-space-around"},[this.$vuetify.theme.dark?n("div",{staticClass:"hide",staticStyle:{"box-shadow":"inset 0 0 0 100vh rgba(0, 0, 0, 0.6)"}}):n("div",{staticClass:"hide"}),t._l(t.routes,(function(e,r){return[0!==r&&"*"!==e.path&&"/404"!==e.path?n("v-card",{key:r,staticClass:"pa-2 mt-8",attrs:{height:"65px",width:"calc(30%)"}},[n("router-link",{attrs:{to:e.path}},[n("button",{staticStyle:{width:"100%",height:"100%"}},[n("v-icon",[t._v(" "+t._s(e.icon||"😅")+" ")]),n("br"),t._v(" "+t._s(e.text||e.name)+" ")],1)])],1):t._e()]}))],2),n("v-bottom-navigation",{staticStyle:{position:"fixed",left:"0",bottom:"0"},attrs:{absolute:"",horizontal:""}},[n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[t._v("Recents")]),n("v-icon",[t._v("mdi-history")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""}},[n("span",[t._v("Favorites")]),n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{color:"deep-purple accent-4",text:""},on:{click:function(e){return t.toggleMode()}}},[n("span",[t._v(t._s(this.$vuetify.theme.dark?"黑暗主题":"浅色主题"))]),n("v-icon",[t._v("mdi-theme-light-dark")])],1)],1)],1)},y=[],g={name:"HomeView",components:{},data:()=>({routes:H,selectedItem:1}),methods:{csl(...t){console.log(...t)},toggleMode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},initDarkMode(){let t=window.matchMedia("(prefers-color-scheme: dark)");t.matches?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1;let e=t=>{let e=t.matches;this.$vuetify.theme.dark=!!e};"function"===typeof t.addEventListener?t.addEventListener("change",e):"function"===typeof t.addListener&&t.addListener(e)}},mounted(){this.initDarkMode()},computed:{isDark(){return this.$vuetify.theme.dark}},watch:{isDark(t){window.localStorage.isDark=t}}},b=g,k=n(6506),w=n(3432),_=n(1981),C=n(6428),x=(0,c.Z)(b,v,y,!1,null,null,null),$=x.exports;l()(x,{VBottomNavigation:k.Z,VBtn:w.Z,VCard:_.Z,VIcon:C.Z});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollbar-hidden"},[n("div",{staticStyle:{height:"50vh"},style:t.flag?t.styleBlue:t.styleRed}),n("div",{staticStyle:{height:"50vh"},style:t.flag?t.styleRed:t.styleBlue})])},E=[],Z={name:"PoliceLight",data(){return{flag:!0,style:"background-color: green;",styleBlue:"background-color: blue;",styleRed:"background-color: red;",timer:null}},mounted(){this.timer=setInterval((()=>{this.flag=!this.flag}),200)},beforeDestroy(){clearInterval(this.timer)}},M=Z,T=(0,c.Z)(M,S,E,!1,null,null,null),O=T.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"99vh"}},[t.isCopyed?n("div",{staticClass:"infoarea"},[t._v("  copyed!  ")]):t._e(),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("h3",[t._v("语气转换👅")]),n("v-spacer"),n("v-btn",{on:{click:t.randomInput}},[t._v("随机🎲")]),n("v-btn",{attrs:{color:"pink"},on:{click:t.handleTransform}},[t._v("转换❤")])],1),n("div",{staticStyle:{height:"calc(92%)"}},[n("div",{staticClass:"inputarea mb-2"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"area1",staticStyle:{display:"true"},style:t.isDark?"color: rgba(252, 252, 252, 0.999);":"",attrs:{placeholder:"用〇〇在这里输入",type:"text",autofocus:""},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),n("div",{staticClass:"inputarea"},[n("div",{ref:"myinput",staticClass:"area2",style:t.isDark?"color: rgba(252, 252, 252, 0.888);":"",on:{click:t.copy}},[t._v(t._s(t.o?t.o:"点击转换❤这里要...要出来了!"))])])])])},D=[],L=n(9669),A=n.n(L);const B=async()=>{try{const t=await A().get("https://v1.hitokoto.cn/");return 200===t.status?t.data:{error:`不是200错了 fuck! ${t}`}}catch(t){return{error:`报错了 fuck! ${data}`}}};var I={get:B},N={data(){return{show1:"",input:"",o:"",isCopyed:!1}},methods:{copy(){this.$refs.myinput.focus(),document.execCommand("copy"),navigator.clipboard.writeText(this.o),this.isCopyed=!0,setTimeout((()=>{this.isCopyed=!1}),2500)},sese(t,e=.5){const n=[",",";","，","；"],r=["。",".","！","!"],i=new Intl.Segmenter("cn",{granularity:"word"}),o=i.segment(t),a=Array.from(o).map((t=>t.segment));return a.map((t=>Math.random()>e?t:n.includes(t)?"……":r.includes(t)?"❤":Math.random()>.5?t[0]+"……"+t:Math.random()<.5?"〇".repeat(t.trim().length):Math.random()<.5?`……${t}`:t)).join("")},async randomInput(){this.input="",this.o="",await I.get().then((t=>{const{hitokoto:e,from:n,from_who:r,creator:i}=t;this.input=`${e}`,this.o=this.sese(this.input),this.$nextTick((()=>this.input=this.input+`\n${n||""} ${r||""}\n${i||""}`))}))},handleTransform(){this.input+=" ",this.$nextTick((()=>this.input=this.input.slice(0,-1))),this.o=this.sese(this.input)},initDarkMode(){let t=window.matchMedia("(prefers-color-scheme: dark)");t.matches?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1;let e=t=>{let e=t.matches;this.$vuetify.theme.dark=!!e};"function"===typeof t.addEventListener?t.addEventListener("change",e):"function"===typeof t.addListener&&t.addListener(e)}},computed:{isDark(){return window.localStorage.getItem("isDark")||this.initDarkMode(),this.$vuetify.theme.dark}}},P=N,V=n(3631),F=(0,c.Z)(P,j,D,!1,null,"4bb2ab28",null),R=F.exports;l()(F,{VBtn:w.Z,VSpacer:V.Z}),r.Z.use(m.Z);const H=[{path:"/",name:"home",component:$},{path:"/policelight",name:"policelight",text:"假警灯",icon:"🚨",component:O},{path:"/sese",name:"语气转换",icon:"🥵",component:R},{path:"/draw",name:"小白板",icon:"🎨",component:()=>n.e(0).then(n.bind(n,5693))},{path:"/date",name:"日期转换",icon:"📆",component:()=>n.e(981).then(n.bind(n,316))},{path:"/food",name:"吃零食",icon:"🍫",component:()=>n.e(155).then(n.bind(n,7317))},{path:"/404",name:"404",component:()=>n.e(596).then(n.bind(n,1917))},{path:"*",name:"sb404",redirect:"/404"}],q=new m.Z({routes:H});q.beforeEach(((t,e,n)=>{window.document.title=t.name?t.name:"Home",n()}));var z=n(1910);r.Z.use(z.Z);var K=new z.Z({});r.Z.config.productionTip=!1,new r.Z({router:q,vuetify:K,render:t=>t(p)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{0:"draw",155:"StoreFood",596:"404",981:"date"}[t]+"."+{0:"530c9f5f",155:"c8caf7cd",596:"60d6b2d8",981:"d6e80683"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+{155:"StoreFood",981:"date"}[t]+"."+{155:"e15d3c26",981:"dfd3fda4"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="hahawode:";n.l=function(r,i,o,a){if(t[r])t[r].push(i);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[i];var h=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=o,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),s=n.p+a;if(e(a,s))return i();t(r,s,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={155:1,981:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],c=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var l=c(n)}for(e&&e(r);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkhahawode"]=self["webpackChunkhahawode"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5248)}));r=n.O(r)})();
//# sourceMappingURL=app.e95ff97e.js.map