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

(self.webpackChunklite=self.webpackChunklite||[]).push([[118],{8538:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>S});var t=r(94725),o=r(67294),i=r(12291),s=r(66893),a=r(64858),u=r(36511),c=r(39050),l=r(72351),f=r(52837),d=r(61250),p=r(31235),v=r(31117),g=r(67297),m=r(67616),_=r(29035),h=r(63038),b=r.n(h),w=r(59713),E=r.n(w),P=r(44059),T=r(14034);function A(){for(var e=new T.y,n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];if(0===r.length)return e;var o=r.map((function(){return[]}));return r.forEach((function(n,r){n.observe((function(n){o[r].push(n),o.every((function(e){return e.length>0}))&&e.set(o.map((function(e){return e.shift()})))}))})),e}var M=function(e){return function(n){return E()({},e,n)}};const S=function(){var e,n,r,h,w,E,T,S,y,C,k,L,O,F,x,q,Y,B;return o.useEffect((function(){var e=A(m.sY,m.wZ,m.vY).map((function(e){var n=b()(e,3),r=n[0],t=n[1],o=n[2];return{responseEndToLCP:new m.jb(r.response.end,t.end),responseEndToFCP:new m.jb(r.response.end,o.end)}})),n=A(m.sY,m.qH.map(M("fid")),m.vY.map(M("fcp")),m.wZ.map(M("lcp")),e);m.cA.observe((function(e){e||n.observe((function(e){var n=e.reduce((function(e,n){return Object.assign(e,n)}),{}),r=Object.keys(n).reduce((function(e,r){var t=n[r].duration;return e[r]=t%1==0?t:Number(t.toFixed(1)),e}),{}),t=document.children[0],o={html:null==t?void 0:t.innerHTML.length,redux:JSON.stringify(window.__PRELOADED_STATE__).length,apollo:JSON.stringify(window.__APOLLO_STATE__).length};P.t.log("client hydrated",{perf:r,sizes:o})}))})),m.Df.observe((function(e){return P.t.log("client resource sizes",{resources:e})}))}),[]),e=(0,g.v9)((function(e){return e.tracing})),n=e.originalSpan,r=e.tracer,h=(0,a.c)(),w=h.loading,E=h.isBot,T=(0,g.v9)((function(e){return e.client.routingEntity})),S=(0,g.v9)((function(e){return e.auroraPage.isAuroraPageEnabled})),y=(0,u.r)(),C=y.loading,k=y.viewerId,L=(0,p.xg)(),O=(0,p.f$)(),F=(0,s.P5)("enable_medium_dot_com"),x=(0,s.P5)("enable_medium_app"),q=(0,i.I0)(),Y=(0,d.dh)(),B=(0,l.Av)(),o.useEffect((function(){var e;if(r&&B&&!w&&!E&&!C&&k){var o=Y(window.location.pathname),i=null!==(e=null==o?void 0:o.route.metricName)&&void 0!==e?e:"unidentified",s=(0,c.Q)(k),a=(0,_.ic)(navigator.userAgent),u=[];L?u.push("edge_cache_enabled"):O&&u.push("edge_cache_control"),x?u.push("enable_medium_app"):F&&s&&"homepage"===i&&u.push("enable_medium_dot_com");var l=u.join(","),d={"user.logged_in":s,"user.experiment":l,"device.mobile_or_tablet":a,"req.route_name":i,"req.route":i,"req.router":(null==T?void 0:T.type)||f.Cr.DEFAULT},p={auroraPage:S,loggedIn:s,mobileOrTablet:a,experiment:l,route:i},g=function(e){return Math.round(1e3*e)},h=function(e,n,t,o){var i=t.start,s=t.end,a=r.startSpan("timing.".concat(n),{childOf:e,tags:d}).setBeginMicros(g(i)).setEndMicros(g(s));return null!=o&&o(a),a.finish(),a};m.sY.observe((function(e){var o,i,s,a;B.reportRender(p,e);var u=r.startSpan("timing.navigation",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:d}).setBeginMicros(g(e.load.start)).setEndMicros(g(e.load.end)).log({redirect_count:null!==(o=null===(i=window)||void 0===i||null===(s=i.performance)||void 0===s||null===(a=s.navigation)||void 0===a?void 0:a.redirectCount)&&void 0!==o?o:0});h(u,"beforeDomainLookup",e.before_domain_lookup),h(u,"domainLookup",e.domain_lookup),h(u,"connect",e.connect),h(u,"request",e.request),h(u,"response",e.response),h(u,"processing",e.processing);var c=e.overall_fcp,l=e.client,f=e.render;null!=c&&h(u,"firstContentfulPaint",c),null!=l&&h(u,"client",l,(function(e){null!=f&&h(e,"render",f)})),u.finish(),q((0,v.YU)(u.generateTraceURL()))})),m.vY.observe((function(e){B.reportFirstContentfulPaint(p,e),r.startSpan("timing.firstContentfulPaint.v2",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:d}).setBeginMicros(g(e.start)).setEndMicros(g(e.end)).finish()})),m.wZ.observe((function(e){B.reportLargestContentfulPaint(p,e),r.startSpan("timing.largestContentfulPaint",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:d}).setBeginMicros(g(e.start)).setEndMicros(g(e.end)).finish()})),m.yI.observe((function(e){B.reportCumulativeLayoutShift(p,e)})),m.cA.observe((function(e){e&&B.reportUnsupportedPerfObserver(p)})),m.qH.observe((function(e){B.reportInput(p,e),r.startSpan("timing.input.first.delay",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:d}).setBeginMicros(g(e.start)).setEndMicros(g(e.end)).finish()}))}}),[r,C,k,w,E,F,x]),null}},72864:(e,n,r)=>{"use strict";r.r(n),r.d(n,{init:()=>i,extractSpan:()=>s});var t=r(45573),o=r(94725),i=function(e){var n=e.name,r=e.host,i=e.token,s=e.appVersion,a=new t.Tracer({component_name:n,xhr_instrumentation:!1,access_token:i,collector_host:r,default_span_tags:{"component.version":s}});return(0,o.initGlobalTracer)(a),a},s=function(e,n){if(n)return e.extract(o.FORMAT_HTTP_HEADERS,n)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/instrumentation.6fa29f8a.chunk.js.map

}
/*
     FILE ARCHIVED ON 21:46:50 Jun 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:20:28 Feb 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.153
  exclusion.robots.policy: 0.129
  cdx.remote: 0.17
  esindex: 0.017
  LoadShardBlock: 258.539 (6)
  PetaboxLoader3.datanode: 190.29 (7)
  load_resource: 128.203
  PetaboxLoader3.resolve: 58.14
*/