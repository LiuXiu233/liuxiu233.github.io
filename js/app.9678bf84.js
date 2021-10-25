(()=>{"use strict";var e={5869:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(1768),i=r(3673);function a(e,t,r,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}var l=r(5948);const u=(0,i.aZ)({name:"App",setup(){const{locale:e}=(0,l.QT)({useScope:"global"});return{locale:e}},mounted(){this.$q.localStorage.has("locale"),this.locale="en-US"}});u.render=a;const s=u;var c=r(7083),d=r(9582);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(813)]).then(r.bind(r,9813))},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(373)]).then(r.bind(r,2373))}],f=p,h=(0,c.BC)((function(){const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/")});return t}));async function g(e,t){const r="function"===typeof h?await h({}):h,o=e(s);return o.use(n.Z,t),{app:o,router:r}}var b=r(6395);const v={config:{brand:{primary:"#26bffc"}},plugins:{LocalStorage:b.Z}},m="/";async function y({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},a=window.location.href.replace(window.location.origin,"");for(let u=0;!1===o&&u<r.length;u++)try{await r[u]({app:e,router:t,ssrContext:null,redirect:i,urlPath:a,publicPath:m})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}g(o.ri,v).then((e=>Promise.all([Promise.resolve().then(r.bind(r,2419))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,r)}))))},2419:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,i18n:()=>u});var o=r(7083),n=r(5948);const i={github:"GitHub",gitee:"Gitee",twitter:"Twitter",steam:"Steam",weibo:"Weibo",wechat:"WeChat",facebook:"Facebook",linkedin:"LinkedIn",profession:"E-sport Practitioner",copyright:"Copyright © 2021 Liu Xiu",deployed:"This page is deployed to ",viewSource:"View Source Code",titles:["null","Founder","IT Engineer","Head of Teaching and Project Manager for LOL: Wild Rift","Senior Instructor","Managing Coach","E-sport Tactical Instructor","Visiting Professor for E-sport Major","General Manager","E-sport Instructor","E-sport Major Manager","Member"],identities:["null","SrcMax Studio","Linkube Limited (GB)","Sichuan Southwest Duokui E-sport","Guangzhou E-sport Profession Education Co., Ltd.","Pub E-sport Club","Guangdong Institute of Economics and Trade","Guangzhou College of Technology and Business","Pub E-sport College","Zhengzhou Electron Technology Secondary Specialized School","City University of Zhengzhou","Fujian Pie Research Association"]},a={github:"GitHub",gitee:"码云",twitter:"Twitter",steam:"Steam",weibo:"微博",wechat:"微信",facebook:"Facebook",linkedin:"领英",profession:"电子竞技从业者",copyright:"版权所有 © 2021 刘秀",deployed:"本主页运行在 ",viewSource:"查看源代码",titles:["null","创始人","IT 工程师","LOLM项目教学负责人","高级讲师","经理-教练","电竞班战术导师","电竞专业客座教授","总负责人","电竞班导师","电竞专业负责人","会员"],identities:["null","元极工作室(SrcMax Studio)","英国链酷有限公司","四川西南铎魁电竞","广州电竞职业教育有限公司","Pub电子竞技俱乐部","广东省经济贸易学校","广州工商学院","Pub电子竞技学院","郑州电子科技中等专业学校","郑州城市职业学院","福建省风水学研究会"]},l={"en-US":i,"zh-CN":a},u=(0,n.o)({locale:"en-US",messages:l}),s=(0,o.xr)((({app:e})=>{e.use(u)}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,i)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,n,i]=e[c],l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](o[u])))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,n,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{373:"6924c99c",813:"26cc22eb"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"3d8e7b1c",736:"69d59ca9",813:"6a187820"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="liuxiu-about:";r.l=(o,n,i,a)=>{if(e[o])e[o].push(n);else{var l,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=i=>{if(n.onerror=n.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=l,n.parentNode.removeChild(n),o(u)}};return n.onerror=n.onload=i,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],i=n.getAttribute("data-href");if(i===e||i===t)return n}},o=o=>new Promise(((n,i)=>{var a=r.miniCssF(o),l=r.p+a;if(t(a,l))return n();e(o,l,n,i)})),n={143:0};r.f.miniCss=(e,t)=>{var r={813:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=i);var a=r.p+r.u(t),l=new Error,u=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}};r.l(a,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[a,l,u]=o,s=0;if(a.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(u)var c=u(r)}for(t&&t(o);s<a.length;s++)i=a[s],r.o(e,i)&&e[i]&&e[i][0](),e[a[s]]=0;return r.O(c)},o=self["webpackChunkliuxiu_about"]=self["webpackChunkliuxiu_about"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(5869)));o=r.O(o)})();