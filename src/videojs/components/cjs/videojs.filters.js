/*eslint no-inner-declarations: "off"*//* eslint-env node */function _interopDefault(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var videojs=_interopDefault(require("video.js"));var vjs_find=function(e,t){try{return e.querySelector(t)}catch(e){return!1}},vjs_El=function(e,t,s){var i=document.createElement(e);if(void 0!==t)if(""!==t)i.className=t;if(void 0!==s)if(""!==s)i.innerHTML=s;return i},filter_b=100,filter_s=100,filter_c=100,supportsPassive=!1;function fint(e){return e}try{var opts=Object.defineProperty({},"passive",{get:function(){supportsPassive=!0;return!0}});window.addEventListener("testPassive",null,opts);window.removeEventListener("testPassive",null,opts)}catch(e){fint(e)}const onMenusReady=(e,t)=>{const s={filtersMenu:!0};var i=videojs.dom,r=e.el(),n=videojs.mergeOptions(s,t||{});t=n;if(n.filtersMenu){var v=vjs_El("li","js-settings-item vjs-filters-button");v.innerHTML=e.localize("Filters")+'<span class="vjs-filters-icon"></span>';var a=vjs_find(r,".vjs-settings-list");if(a){if(a.children.length>0)a.insertBefore(v,a.firstChild.nextSibling);else{a.appendChild(v);i.removeClass(vjs_find(r,".vjs-cog-menu-button"),"vjs-hidden")}}var l=vjs_El("div","vjs-filters vjs-hidden");l.setAttribute("aria-label","Video filters");l.setAttribute("aria-hidden","true");l.innerHTML='<div class="vjs-filter-body vjs-filter-brightness"><div class="vjs-filter-bar"><div class="vjs-filter-level"></div><div class="filter-tip"></div></div></div><div class="vjs-filter-body vjs-filter-saturation"><div class="vjs-filter-bar"><div class="vjs-filter-level"></div><div class="filter-tip"></div></div></div><div class="vjs-filter-body vjs-filter-contrast"><div class="vjs-filter-bar"><div class="vjs-filter-level"></div><div class="filter-tip"></div></div></div><div class="filter-btn filter-close">Close</div><div class="filter-btn filter-reset">Reset</div>';r.appendChild(l);var d=vjs_find(l,".filter-reset"),o=vjs_find(l,".filter-close"),f=vjs_find(l,".vjs-filter-brightness"),c=vjs_find(l,".vjs-filter-saturation"),u=vjs_find(l,".vjs-filter-contrast"),h=function(e){var t=null,s=E,n=s;try{t=e.originalEvent.touches[0].pageX}catch(e){fint(e)}try{t=e.originalEvent.changedTouches[0].pageX}catch(e){fint(e)}try{t=e.changedTouches[0].pageX}catch(e){fint(e)}try{t=e.touches[0].clientX}catch(e){fint(e)}if(null===t)try{t=e.pageX}catch(e){fint(e)}if(null!==t){var v=n.offsetWidth,a=t-n.getBoundingClientRect().left;if(a>v)a=v;if(a<0)a=0;var l=parseInt(a/v*100,10);if(l<0)l=0;if(l>100)l=100;vjs_find(s,".vjs-filter-level").style.width=l+"%";var d=vjs_find(s,".filter-tip");i.addClass(d,"tip-show");d.style.left=v*(l/100)-d.offsetWidth/2+"px";var o=vjs_find(r,".vjs-brightness-bar");if(o)vjs_find(o,".bar-level").style.height=l+"%";var h=100+2*(l-50);d.innerText=h;var j=vjs_find(r,".vjs-tech");if(E===f)filter_b=h;if(E===c)filter_s=h;if(E===u)filter_c=h;var p="";if(100!==filter_b)p="brightness("+filter_b+"%)";if(100!==filter_s){if(""!==p)p+=" ";p+="saturate("+filter_s+"%)"}if(100!==filter_c){if(""!==p)p+=" ";p+="contrast("+filter_c+"%)"}j.style.webkitFilter=p;j.style.filter=p}},j=function(t){t.preventDefault();t.stopPropagation();i.addClass(l,"vjs-hidden");l.setAttribute("aria-hidden","true");e.$(".vjs-tech").style.removeProperty("pointer-events");i.removeClass(r,"vjs-filters-on")},p=function(t){t.preventDefault();t.stopPropagation();i.removeClass(l,"vjs-hidden");l.setAttribute("aria-hidden","false");e.trigger("filters");e.$(".vjs-tech").style.setProperty("pointer-events","none");i.addClass(r,"vjs-filters-on");var s=vjs_find(r,".vjs-sharing-overlay"),n=vjs_find(r,".vjs-grid");if(s)i.addClass(s,"vjs-hidden");if(n)i.addClass(n,"vjs-hidden");i.removeClass(vjs_find(r,".vjs-menu-settings"),"vjs-lock-showing")},g=function(e){e.preventDefault();e.stopPropagation();filter_b=100;filter_c=100;filter_s=100;vjs_find(r,".vjs-tech").removeAttribute("style");vjs_find(f,".vjs-filter-level").style.width="50%";vjs_find(c,".vjs-filter-level").style.width="50%";vjs_find(u,".vjs-filter-level").style.width="50%"},_=function(e){e.preventDefault();e.stopPropagation();var t=e.target;E=t;h(e);window.addEventListener("mousemove",m,!1);window.addEventListener("mouseup",b,!1);window.addEventListener("touchmove",m,supportsPassive?{passive:!1}:!1);E.addEventListener("touchend",b,supportsPassive?{passive:!1}:!1)},m=function(e){e.preventDefault();h(e)},b=function(e){e.preventDefault();i.removeClass(r,"vjs-touch-active");i.removeClass(vjs_find(E,".filter-tip"),"tip-show");window.removeEventListener("mousemove",m);window.removeEventListener("mouseup",b);window.removeEventListener("touchmove",m);E.removeEventListener("touchend",b)};d.addEventListener("click",g,!1);d.addEventListener("touchstart",g,supportsPassive?{passive:!1}:!1);o.addEventListener("click",j,!1);o.addEventListener("touchstart",j,supportsPassive?{passive:!1}:!1);var y=vjs_find(r,".vjs-filters-button");y.addEventListener("click",p,!1);y.addEventListener("touchstart",p,supportsPassive?{passive:!1}:!1);var E=null;f.addEventListener("mousedown",_,!1);f.addEventListener("touchstart",_,supportsPassive?{passive:!0}:!1);c.addEventListener("mousedown",_,!1);c.addEventListener("touchstart",_,supportsPassive?{passive:!0}:!1);u.addEventListener("mousedown",_,!1);u.addEventListener("touchstart",_,supportsPassive?{passive:!0}:!1)}},onPlayerReady=(e,t)=>{const s={touchBrightness:!0};t=(videojs.mergeOptions||videojs.util.mergeOptions)(s,t||{});var i=videojs.dom,r=e.el();if(!0===t.touchBrightness){var n=vjs_El("div","vjs-brightness");n.innerHTML='<div class="vjs-brightness-bar"><div class="bar"></div><div class="bar-level"></div></div>';r.appendChild(n);n.addEventListener("touchstart",function(e){e.preventDefault();e.stopImmediatePropagation();i.addClass(r,"vjs-touch-active");l(e);window.addEventListener("touchmove",v,{passive:!1});n.addEventListener("touchend",a)},supportsPassive?{passive:!0}:!1);return this}function v(t){t.preventDefault();t.stopImmediatePropagation();clearInterval(e.touchtimer);i.addClass(r,"vjs-touch-acitve");l(t)}function a(t){t.preventDefault();e.touchtimer=setTimeout(function(){i.removeClass(r,"vjs-touch-active")},1e3);window.removeEventListener("touchmove",v);n.removeEventListener("touchend",a)}function l(e){var t=null;try{t=e.originalEvent.touches[0].pageY}catch(e){fint(e)}try{t=e.originalEvent.changedTouches[0].pageY}catch(e){fint(e)}try{t=e.changedTouches[0].pageY}catch(e){fint(e)}try{t=e.touches[0].clientY}catch(e){fint(e)}if(null!==t){var s=n.offsetHeight,i=t-n.getBoundingClientRect().top;if(i>s)i=s;if(i<0)i=0;var v=parseInt(100-i/s*100,10);if(v<0)v=0;if(v>100)v=100;vjs_find(n,".bar-level").style.height=v+"%";var a=vjs_find(r,".vjs-filters");if(a){var l=vjs_find(a,".vjs-filter-brightness");if(l)vjs_find(l,".vjs-filter-level").style.width=v+"%"}var d="";var z=filter_b=100+2*(v-50);if(100!==z)d="brightness("+filter_b+"%)";if(100!==filter_s){if(""!==d)d+=" ";d+="saturate("+filter_s+"%)"}if(100!==filter_c){if(""!==d)d+=" ";d+="contrast("+filter_c+"%)"}vjs_find(r,".vjs-tech").style.webkitFilter=d;vjs_find(r,".vjs-tech").style.filter=d}}},filters=function(e){this.ready(()=>{onPlayerReady(this,e)});this.on("menusReady",function(){onMenusReady(this,e)})},registerPlugin=videojs.registerPlugin||videojs.plugin;registerPlugin("filters",filters);module.exports=filters;