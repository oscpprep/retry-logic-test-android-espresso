var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(self.webpackChunklite=self.webpackChunklite||[]).push([[6122,6708],{76972:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(59910),n=r(13882),s=36e5;function a(e,t){(0,n.Z)(2,arguments);var r=(0,o.Z)(e,t)/s;return r>0?Math.floor(r):Math.ceil(r)}},14259:e=>{e.exports=function(e,t,r){var o=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(r=r>n?n:r)<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var s=Array(n);++o<n;)s[o]=e[o+t];return s}},38125:(e,t,r)=>{var o=r(14259);e.exports=function(e){return null!=e&&e.length?o(e,0,-1):[]}},98913:(e,t,r)=>{var o=r(22545),n=r(54290),s=r(40554),a=4294967295,i=Math.min;e.exports=function(e,t){if((e=s(e))<1||e>9007199254740991)return[];var r=a,u=i(e,a);t=n(t),e-=a;for(var c=o(u,t);++r<e;)t(r);return c}},57129:(e,t)=>{"use strict";var r=Object.prototype.hasOwnProperty;function o(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}t.stringify=function(e,t){t=t||"";var o,n,s=[];for(n in"string"!=typeof t&&(t="?"),e)if(r.call(e,n)){if((o=e[n])||null!=o&&!isNaN(o)||(o=""),n=encodeURIComponent(n),o=encodeURIComponent(o),null===n||null===o)continue;s.push(n+"="+o)}return s.length?t+s.join("&"):""},t.parse=function(e){for(var t,r=/([^=?&]+)=?([^&]*)/g,n={};t=r.exec(e);){var s=o(t[1]),a=o(t[2]);null===s||null===a||s in n||(n[s]=a)}return n}},47418:e=>{"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},84564:(e,t,r)=>{"use strict";var o=r(47418),n=r(57129),s=/^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,a=/^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,i=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function u(e){return(e||"").toString().replace(i,"")}var c=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1};function p(e){var t,o=("undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{}).location||{},n={},a=typeof(e=e||o);if("blob:"===e.protocol)n=new f(unescape(e.pathname),{});else if("string"===a)for(t in n=new f(e,{}),l)delete n[t];else if("object"===a){for(t in e)t in l||(n[t]=e[t]);void 0===n.slashes&&(n.slashes=s.test(e.href))}return n}function h(e){e=u(e);var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!(t[2]&&t[2].length>=2),rest:t[3]}}function f(e,t,r){if(e=u(e),!(this instanceof f))return new f(e,t,r);var s,a,i,l,m,v,g=c.slice(),y=typeof t,d=this,w=0;for("object"!==y&&"string"!==y&&(r=t,t=null),r&&"function"!=typeof r&&(r=n.parse),t=p(t),s=!(a=h(e||"")).protocol&&!a.slashes,d.slashes=a.slashes||s&&t.slashes,d.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(g[3]=[/(.*)/,"pathname"]);w<g.length;w++)"function"!=typeof(l=g[w])?(i=l[0],v=l[1],i!=i?d[v]=e:"string"==typeof i?~(m=e.indexOf(i))&&("number"==typeof l[2]?(d[v]=e.slice(0,m),e=e.slice(m+l[2])):(d[v]=e.slice(m),e=e.slice(0,m))):(m=i.exec(e))&&(d[v]=m[1],e=e.slice(0,m.index)),d[v]=d[v]||s&&l[3]&&t[v]||"",l[4]&&(d[v]=d[v].toLowerCase())):e=l(e);r&&(d.query=r(d.query)),s&&t.slashes&&"/"!==d.pathname.charAt(0)&&(""!==d.pathname||""!==t.pathname)&&(d.pathname=function(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=r.length,n=r[o-1],s=!1,a=0;o--;)"."===r[o]?r.splice(o,1):".."===r[o]?(r.splice(o,1),a++):a&&(0===o&&(s=!0),r.splice(o,1),a--);return s&&r.unshift(""),"."!==n&&".."!==n||r.push(""),r.join("/")}(d.pathname,t.pathname)),"/"!==d.pathname.charAt(0)&&d.hostname&&(d.pathname="/"+d.pathname),o(d.port,d.protocol)||(d.host=d.hostname,d.port=""),d.username=d.password="",d.auth&&(l=d.auth.split(":"),d.username=l[0]||"",d.password=l[1]||""),d.origin=d.protocol&&d.host&&"file:"!==d.protocol?d.protocol+"//"+d.host:"null",d.href=d.toString()}f.prototype={set:function(e,t,r){var s=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||n.parse)(t)),s[e]=t;break;case"port":s[e]=t,o(t,s.protocol)?t&&(s.host=s.hostname+":"+t):(s.host=s.hostname,s[e]="");break;case"hostname":s[e]=t,s.port&&(t+=":"+s.port),s.host=t;break;case"host":s[e]=t,/:\d+$/.test(t)?(t=t.split(":"),s.port=t.pop(),s.hostname=t.join(":")):(s.hostname=t,s.port="");break;case"protocol":s.protocol=t.toLowerCase(),s.slashes=!r;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";s[e]=t.charAt(0)!==a?a+t:t}else s[e]=t;break;default:s[e]=t}for(var i=0;i<c.length;i++){var u=c[i];u[4]&&(s[u[1]]=s[u[1]].toLowerCase())}return s.origin=s.protocol&&s.host&&"file:"!==s.protocol?s.protocol+"//"+s.host:"null",s.href=s.toString(),s},toString:function(e){e&&"function"==typeof e||(e=n.stringify);var t,r=this,o=r.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var s=o+(r.slashes?"//":"");return r.username&&(s+=r.username,r.password&&(s+=":"+r.password),s+="@"),s+=r.host+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(s+=r.hash),s}},f.extractProtocol=h,f.location=p,f.trimLeft=u,f.qs=n,e.exports=f}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6122.fd56ceaa.chunk.js.map

}
/*
     FILE ARCHIVED ON 21:46:54 Jun 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:20:24 Feb 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.098
  exclusion.robots.policy: 0.083
  cdx.remote: 0.142
  esindex: 0.015
  LoadShardBlock: 343.493 (6)
  PetaboxLoader3.resolve: 117.829 (3)
  PetaboxLoader3.datanode: 230.768 (8)
  load_resource: 147.108 (2)
*/