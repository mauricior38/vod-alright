/**
 * @license
 * Copyright (c) 2023 The Nuevodevel Team. All rights reserved.
 * VTT Thumbnails Plugin for Video.js v8
 */
/*eslint no-inner-declarations: "off"*//* eslint-env node */function _interopDefault(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var videojs=_interopDefault(require("video.js"));const defaults={width:160,height:90,debug:!1,timeTooltip:!0,basePath:"",src:""},onPlayerReady=(e,t)=>{defaults.basePath="";var s,r,i,o,n,d,a,l,h,u,c,v;if(t){if(t.basePath)defaults.basePath=t.basePath;if(t.width&&t.height){defaults.width=t.width;defaults.height=t.height}if(t.src)e.on("ready",function(){e.trigger("medialoaded",{xml:t.src})})}var f=t;function m(e){var t,s,r;s=e.indexOf("#");if(-1===s)return{src:e,w:0,h:0,x:0,y:0};t=e.substring(0,s);r=e.substring(s+1);if("xywh="!==r.substring(0,5))return{src:defaults.basePath+t,w:0,h:0,x:0,y:0};var i=r.substring(5).split(",");return{src:defaults.basePath+t,w:parseInt(i[2],10),h:parseInt(i[3],10),x:parseInt(i[0],10),y:parseInt(i[1],10)}}function p(e){const t=e.split("."),s=t[0],r=s.split(":");return{milliseconds:parseInt(t[1],10)||0,seconds:parseInt(r.pop(),10)||0,minutes:parseInt(r.pop(),10)||0,hours:parseInt(r.pop(),10)||0}}function g(e){const t=p(e);return parseInt(3600*t.hours+60*t.minutes+t.seconds+t.milliseconds/1e3,10)}function y(e){fetch(e).then(e=>e.text()).then(e=>{if(e.length>0){var t=j(e);if(t.length>0){v=t;w()}}})}function j(e){var t=[],s=e.split(/[\r\n][\r\n]/i);s.forEach(function(e){if(e.match(/([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?( ?--> ?)([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?[\r\n]{1}.*/gi)){const s=e.split(/[\r\n]/i),r=s[0],i=r.split(/ ?--> ?/i),o=i[0],n=i[1],d=s[1];t.push({startTime:g(o),endTime:g(n),text:d})}});return t}e.on("medialoaded",function(t,r){v=[];n=e.controlBar.progressControl;d=e.el_.querySelector(".vjs-progress-holder");d.removeEventListener("touchstart",C);d.removeEventListener("mousemove",l);d.removeEventListener("mouseleave",u);d.removeEventListener("mousedown",S);e.sprite=!1;var i=e.el_.querySelector(".vjs-thumb-tooltip");if(i)i.parentNode.removeChild(i);var o=e.el_.querySelector(".vjs-thumb-image");if(o)o.parentNode.removeChild(o);var a=e.el_.querySelector(".vjs-thumbnail-holder");if(a)a.parentNode.removeChild(a);if(r&&r.xml){if(f.debug)console.log("data from xml");y(r.xml)}else{n=e.controlBar.progressControl;d=e.el_.querySelector(".vjs-progress-holder");var h=e.textTracks().length;if(0===h){if(s)videojs.dom.addClass("div","vjs-hidden");return}for(var m=!1,p=0;p<h;){if("metadata"===e.textTracks()[p].kind){c=e.textTracks()[p];if(void 0===c.src)return;if(c.src){if(f.debug)console.log("data from track");y(c.src);return}c.mode="hidden";c=e.textTracks()[p];m=!0;c.mode="showing";if(null==c.cues){c.mode="hidden";return}var g=c&&c.cues.length;break}p++}if(!0!==m){if(s)videojs.dom.addClass("div","vjs-hidden");return}c=e.textTracks()[p];g=c&&c.cues.length;if(g<1)return;p=0;e.sprite=!0;v=c&&c.cues;w()}});function w(){s=document.createElement("div");s.className="vjs-thumbnail-holder";h=document.createElement("div");h.className="vjs-thumb-tooltip";r=document.createElement("img");r.className="vjs-thumb-image";s.appendChild(r);s.appendChild(h);n.el().appendChild(s);if(e.shadowSlide){var t=e.el_.querySelector(".vjs-thumb-poster");if(!t){o=document.createElement("div");o.className="vjs-thumb-poster";i=document.createElement("canvas");o.appendChild(i);e.el_.insertBefore(o,e.el_.querySelector(".vjs-poster"))}}a=e.duration();e.on("durationchange",function(t){a=e.duration()});e.on("loadedmetadata",function(t){a=e.duration()});var c=n.el_.querySelector(".vjs-play-progress"),v=c.querySelector(".vjs-time-tooltip");if(v)videojs.dom.addClass(v,"vjs-abs-hidden");var f=n.el().querySelector(".vjs-mouse-display");if(f)f.style.opacity=0;var m=!1,p=Object.defineProperty({},"passive",{get:function(){m=!0;return!0}});window.addEventListener("testPassive",null,p);window.removeEventListener("testPassive",null,p);d.addEventListener("mousemove",l);d.addEventListener("mouseleave",u);d.addEventListener("mousedown",S);d.addEventListener("touchstart",C,m?{passive:!1}:!1)}function b(e,t){e=e<0?0:e;let s=Math.floor(e%60),r=Math.floor(e/60%60),i=Math.floor(e/3600);const o=Math.floor(t/60%60),n=Math.floor(t/3600);if(isNaN(e)||e===1/0)i=r=s="-";i=i>0||n>0?i+":":"";r=((i||o>=10)&&r<10?"0"+r:r)+":";s=s<10?"0"+s:s;return i+r+s}function x(){E(!1);s.classList.remove("vjs-thumb-show");if(e.shadowSlide){o.removeAttribute("style");i.width=0;i.height=0}}function E(e){if(e)n.el().setAttribute("style","z-index:22");else n.el().removeAttribute("style")}u=function(e){if(!0!==videojs.holderdown){E(!1);s.classList.remove("vjs-thumb-show")}};function L(){videojs.holderdown=!1;document.removeEventListener("mousemove",l);document.removeEventListener("mouseup",L);x()}function S(e){videojs.holderdown=!0;E(!0);document.addEventListener("mousemove",l);document.addEventListener("mouseup",L);l(e)}function q(){d.removeEventListener("touchmove",l);d.removeEventListener("touchend",q);x()}function C(e){videojs.holderdown=!1;l(e);d.addEventListener("touchmove",l);d.addEventListener("touchend",q)}l=function(t){t.preventDefault();E(!0);a=e.duration();var d=n.el().querySelector(".vjs-progress-holder"),l=n.el().querySelector(".vjs-play-progress"),h=d.getBoundingClientRect(),u=null;if(t.pageX)u=t.pageX;else if(t.changedTouches)u=t.changedTouches[0].pageX||t.touches[0].clientX;var c=u-h.left;if(0===c&&videojs.holderdown&&l.offsetWidth>0);if(c<0)c=0;if(c>d.offsetWidth)c=d.offsetWidth;if(f.timeTooltip){var p=c/d.offsetWidth,g=p*a,y=s.querySelector(".vjs-thumb-tooltip");if(y)y.innerHTML=b(g,a)}for(var j=v.length,w=0,x=!1;w<j;){var L=v[w];if(L.startTime<=g&&L.endTime>=g){x=!0;var S=m(L.text);break}w++}if(!0===x){s.classList.remove("vjs-thumb-hidden");if(r.src.indexOf(S.src)<0)r.src=S.src;if(0===S.w){S.w=f.width;r.style.width=S.w+"px"}if(0===S.h){S.h=f.height;r.style.height=S.h+"px"}if(s.style.width!==S.w||s.style.height!==S.h){s.style.width=S.w+"px";s.style.height=S.h+"px"}r.style.left=-S.x+"px";r.style.top=-S.y+"px";var q=S.w,C=q/2,P=n.el().offsetWidth,_=e.el_.querySelector(".vjs-progress-holder").offsetLeft,T=C-_;if(c+C+_>P)c=P-q;else if(c<T)c=0;else c-=T;s.style.left=parseInt(c,10)+"px";s.classList.add("vjs-thumb-show");if(videojs.holderdown&&e.shadowSlide){var I=e.el_.querySelector(".vjs-thumb-poster");if(!I){o=document.createElement("div");o.className="vjs-thumb-poster";i=document.createElement("canvas");o.appendChild(i);e.el_.insertBefore(o,e.el_.querySelector(".vjs-poster"))}var N=i.getContext("2d");i.width=e.el_.offsetWidth;i.height=e.el_.offsetHeight;o.style.width=i.width+"px";o.style.height=i.height+"px";N.clearRect(0,0,i.width,i.height);N.drawImage(r,S.x,S.y,S.w,S.h,0,0,i.width,i.height)}}else s.classList.add("vjs-thumb-hidden")}},thumbnails=function(e){this.ready(()=>{onPlayerReady(this,videojs.obj.merge(defaults,e))})},registerPlugin=videojs.registerPlugin||videojs.plugin;registerPlugin("thumbnails",thumbnails);thumbnails.VERSION="1.1";module.exports=thumbnails;