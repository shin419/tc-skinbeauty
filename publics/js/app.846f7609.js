(()=>{"use strict";var e={931:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(9592),i=r(3673);function a(e,t,r,o,n,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var s=r(5720);const l={apiKey:"AIzaSyCVO2OxvQBghdDqFsA4PisSkj93qSPVjP4",authDomain:"skin-beauty-tc.firebaseapp.com",databaseURL:"https://skin-beauty-tc-default-rtdb.firebaseio.com",projectId:"skin-beauty-tc",storageBucket:"skin-beauty-tc.appspot.com",messagingSenderId:"384973480454",appId:"1:384973480454:web:1dfd21aff4bd648a97d987",measurementId:"G-HDSN055BC5"};(0,s.ZF)(l);const c=(0,i.aZ)({name:"App"});var u=r(4260);const d=(0,u.Z)(c,[["render",a]]),p=d;var f=r(4584),h=r(7083),m=r(9582);const b=[{path:"/",component:()=>Promise.all([r.e(736),r.e(2)]).then(r.bind(r,7002)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(176)]).then(r.bind(r,8176))},{path:"serum-tri-mun",component:()=>Promise.all([r.e(736),r.e(495)]).then(r.bind(r,8495))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(614)]).then(r.bind(r,5614))}],g=b,y=(0,h.BC)((function(){const e=m.r5,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t}));async function v(e,t){const o="function"===typeof f["default"]?await(0,f["default"])({}):f["default"],{storeKey:i}=await Promise.resolve().then(r.bind(r,4584)),a="function"===typeof y?await y({store:o}):y;o.$router=a;const s=e(p);return s.use(n.Z,t),{app:s,store:o,storeKey:i,router:a}}var w=r(6417);const P={config:{},plugins:{Notify:w.Z}},k="";async function S({app:e,router:t,store:r,storeKey:o},n){let i=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===i&&u<n.length;u++)try{await n[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:k})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==i&&(e.use(t),e.use(r,o),e.mount("#q-app"))}v(o.ri,P).then((e=>Promise.all([Promise.resolve().then(r.bind(r,3333)),Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));S(e,r)}))))},3333:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=r(7083),n=(r(2100),r(1082)),i=r(6417),a=r(3972),s=r(7460),l=r.n(s),c=r(284),u=r.n(c),d=r(7086);const p=(0,d.v0)(),f={ShowNotify(e,t){"object"===typeof e&&(e=JSON.stringify(e)),i.Z.create({message:e,html:!0,icon:t?"error":"done",color:t?"red":"green",timeout:1e3})},formatNumber(e){let t=new Intl.NumberFormat("en-US",{style:"currency",currency:"VND"});return t.format(e)},cloneVal(e){return JSON.parse(JSON.stringify(e))},formatDay(e){return n.ZP.formatDate(e||new Date,"DD/MM/YYYY")},dayOfHours(e){return n.ZP.formatDate(e||new Date,"DD/MM/YYYY HH:mm")},dataNew(e,t){return u()(t,((t,r)=>l()(t,e[r])))},getWidthWindow(){return a.Z.width},getHeightWindow(){return a.Z.height},resToolbar(e){return[[{label:e.lang.editor.align,icon:e.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.lang.editor.align,icon:e.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:e.lang.editor.formatting,icon:e.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.lang.editor.fontSize,icon:e.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.lang.editor.defaultFont,icon:e.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]]},sortNhomSp(e,t){let r=!0;return e&&(r=e.id+""===t.category+""),r},sortPriceSp(e,t){let r=!0;return e&&(r=parseInt(t.price)>=e.min&&parseInt(t.price)<=e.max),r},getUser(){return p&&p.currentUser}};var h=r(9040);const m=(0,h.N8)(),b={async query(e,t){let r=new Promise((r=>{(0,h.jM)((0,h.iH)(m,e),(e=>{let o=[];e.forEach((e=>{const r=e.key,n=e.val();t||(n.key=r),o.push(n)})),r(o)}))}));return r},async queryChild(e){let t=new Promise((t=>{(0,h.jM)((0,h.iH)(m,e),(e=>{let r={};e.forEach((e=>{const t=e.key,o=e.val();r[t]=o})),t(r)}))}));return t},post(e,t){return(0,h.t8)((0,h.iH)(m,e),t)},push(e,t){return(0,h.VF)((0,h.iH)(m,e),t)}},g=(0,o.xr)((({app:e})=>{e.config.globalProperties.$util=f,e.config.globalProperties.$formatNumber=f.formatNumber,e.config.globalProperties.$query=b.query,e.config.globalProperties.$post=b.post,e.config.globalProperties.$push=b.push,e.config.globalProperties.$queryChild=b.queryChild}))},5474:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>s});var o=r(7083),n=r(52),i=r.n(n);const a=i().create({timeout:1e3}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=a}))},4584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(7083),n=r(3617);const i=(0,o.h)((function(){const e=(0,n.MT)({modules:{},strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,i)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){for(var[o,n,i]=e[u],s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{2:"c7b035e2",176:"289a99fd",495:"ef96de1e",614:"e1b80671"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"b469bb58",736:"d31b0592"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="skin-beauty-tc:";r.l=(o,n,i,a)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=i);var a=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};r.l(a,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[a,s,l]=o,c=0;if(a.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(o);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},o=self["webpackChunkskin_beauty_tc"]=self["webpackChunkskin_beauty_tc"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(931)));o=r.O(o)})();