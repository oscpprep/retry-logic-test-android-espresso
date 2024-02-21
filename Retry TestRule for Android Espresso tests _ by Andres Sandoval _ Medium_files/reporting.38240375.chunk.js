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

(self.webpackChunklite=self.webpackChunklite||[]).push([[9152],{76668:(n,e,t)=>{"use strict";t.r(e),t.d(e,{NavigationTimingReporter:()=>d});var r=t(67294),a=t(36511),i=t(39050),o=t(72351),u=t(44059),l=t(61250),c=t(67297),m=t(67616),f=function(n){return Math.round(1e3*n)};function d(n){var e=n.to,t=n.from,d=r.useRef(null),g=(0,o.Av)(),v=(0,l.dh)(),p=(0,c.v9)((function(n){return n.debug.originalSpanCarrier})),h=(0,c.v9)((function(n){return n.tracing})),s=h.originalSpan,w=h.tracer,k=(0,a.r)(),b=k.loading,C=k.viewerId;return r.useEffect((function(){if(w&&!b&&C)if(d.current||e.pathname===t.pathname){if(d.current){var n,r,a,o,l=d.current.pathname,c=d.current.time,h=Date.now();d.current=null;var k={to:null!==(n=null===(r=v(e.pathname))||void 0===r?void 0:r.route.name)&&void 0!==n?n:"unknown",from:null!==(a=null===(o=v(l))||void 0===o?void 0:o.route.name)&&void 0!==a?a:"unknown",loggedIn:(0,i.Q)(C)},I={tags:k};p&&(I.childOf=s),w.startSpan("client.navigation",I).setBeginMicros(f(c)).setEndMicros(f(h)).finish(),g&&g.reportClientNav(k,new m.jb(c,h)),u.t.log("client navigation",{duration:h-c,to:e.pathname,toRouteName:k.to,from:l,fromRouteName:k.from,loggedIn:k.loggedIn})}}else d.current={pathname:t.pathname,time:Date.now()}}),[w,e.pathname,t.pathname,b,C]),null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/reporting.38240375.chunk.js.map

}
/*
     FILE ARCHIVED ON 21:46:51 Jun 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:20:30 Feb 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.065
  cdx.remote: 0.124
  esindex: 0.019
  LoadShardBlock: 230.259 (6)
  PetaboxLoader3.datanode: 160.539 (7)
  load_resource: 62.659
  PetaboxLoader3.resolve: 46.833
*/