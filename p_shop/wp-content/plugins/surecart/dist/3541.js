"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[3541],{4688:function(e,t,r){r.d(t,{a:function(){return a},b:function(){return u},c:function(){return d},g:function(){return h},s:function(){return s}});var i=r(4942);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return new Promise((function(i){if((null==r?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");if(null==e?void 0:e.animate){var n,a=e.animate(t,o(o({},r),{},{duration:(n=window.matchMedia("(prefers-reduced-motion: reduce)"),n.matches?0:r.duration)}));a&&(a.addEventListener("cancel",i,{once:!0}),a.addEventListener("finish",i,{once:!0}))}}))}function s(e){var t;return Promise.all(((null===(t=null==e?void 0:e.getAnimations)||void 0===t?void 0:t.call(e))||[]).map((function(e){return new Promise((function(t){var r=requestAnimationFrame(t);e.addEventListener("cancel",(function(){return r}),{once:!0}),e.addEventListener("finish",(function(){return r}),{once:!0}),e.cancel()}))})))}function d(e,t){return e.map((function(e){return o(o({},e),{},{height:"auto"===e.height?"".concat(t,"px"):e.height})}))}var c=new Map,l=new WeakMap;function u(e,t){c.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function h(e,t){var r=l.get(e);return(null==r?void 0:r[t])?r[t]:c.get(t)||{keyframes:[],options:{duration:0}}}},6715:function(e,t,r){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",t=document.createElement("div");t.id="a11y-speak-".concat(e),t.className="a11y-speak-region",t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true");var r=document,i=r.body;return i&&i.appendChild(t),t}r.d(t,{s:function(){return a}});var n,o="";function a(e,t){!function(){for(var e=document.getElementsByClassName("a11y-speak-region"),t=document.getElementById("a11y-speak-intro-text"),r=0;r<e.length;r++)e[r].textContent="";t&&t.setAttribute("hidden","hidden")}(),e=function(e){return e=e.replace(/<[^<>]+>/g," "),o===e&&(e+=" "),o=e,e}(e);var r=document.getElementById("a11y-speak-intro-text"),i=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");i&&"assertive"===t?i.textContent=e:n&&(n.textContent=e),r&&r.removeAttribute("hidden")}n=function(){var e=document.getElementById("a11y-speak-intro-text"),t=document.getElementById("a11y-speak-assertive"),r=document.getElementById("a11y-speak-polite");null===e&&function(){var e=document.createElement("p");e.id="a11y-speak-intro-text",e.className="a11y-speak-intro-text",e.textContent=wp.i18n.__("Notifications"),e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("hidden","hidden");var t=document.body;t&&t.appendChild(e)}(),null===t&&i("assertive"),null===r&&i("polite")},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",n):n())},2134:function(e,t,r){function i(){return"rtl"===document.dir}r.d(t,{i:function(){return i}})},3541:function(e,t,r){r.r(t),r.d(t,{sc_toggle:function(){return h}});var i=r(5861),n=r(5671),o=r(3144),a=r(1284),s=r.n(a),d=r(8860),c=r(4688),l=r(2134),u=r(6715),h=function(){function e(t){(0,n.Z)(this,e),(0,d.r)(this,t),this.scShow=(0,d.c)(this,"scShow",7),this.scHide=(0,d.c)(this,"scHide",7),this.open=!1,this.summary=void 0,this.disabled=!1,this.borderless=!1,this.shady=!1,this.showControl=!1,this.showIcon=!0,this.collapsible=!0}var t,r,a;return(0,o.Z)(e,[{key:"componentDidLoad",value:function(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}},{key:"show",value:(a=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.open&&!this.disabled){e.next=2;break}return e.abrupt("return",void 0);case 2:this.open=!0,(0,u.s)(wp.i18n.__("Summary Shown","surecart"));case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"hide",value:(r=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.open&&!this.disabled&&this.collapsible){e.next=2;break}return e.abrupt("return",void 0);case 2:this.open=!1,(0,u.s)(wp.i18n.__("Summary Hidden","surecart"));case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"handleSummaryClick",value:function(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}},{key:"handleSummaryKeyDown",value:function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||(e.preventDefault(),this.hide()),"ArrowDown"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this.show())}},{key:"handleOpenChange",value:(t=(0,i.Z)(s().mark((function e(){var t,r,i,n,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.open){e.next=13;break}return this.scShow.emit(),e.next=4,(0,c.s)(this.body);case 4:return this.body.hidden=!1,this.body.style.overflow="hidden",t=(0,c.g)(this.el,"details.show"),r=t.keyframes,i=t.options,e.next=9,(0,c.a)(this.body,(0,c.c)(r,this.body.scrollHeight),i);case 9:this.body.style.height="auto",this.body.style.overflow="visible",e.next=23;break;case 13:return this.scHide.emit(),e.next=16,(0,c.s)(this.body);case 16:return this.body.style.overflow="hidden",n=(0,c.g)(this.el,"details.hide"),o=n.keyframes,a=n.options,e.next=20,(0,c.a)(this.body,(0,c.c)(o,this.body.scrollHeight),a);case 20:this.body.hidden=!0,this.body.style.height="auto",this.body.style.overflow="visible";case 23:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return(0,d.h)("div",{part:"base",class:{details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--borderless":this.borderless,"details--shady":this.shady,"details--is-rtl":(0,l.i)()}},(0,d.h)("header",{ref:function(t){return e.header=t},part:"header",id:"header",class:"details__header",role:"button","aria-expanded":this.open?"true":"false","aria-controls":"content","aria-disabled":this.disabled?"true":"false",tabindex:this.disabled?"-1":"0",onClick:function(){return e.handleSummaryClick()},onKeyDown:function(t){return e.handleSummaryKeyDown(t)}},this.showControl&&(0,d.h)("span",{part:"radio",class:"details__radio"},(0,d.h)("svg",{viewBox:"0 0 16 16"},(0,d.h)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},(0,d.h)("g",{fill:"currentColor"},(0,d.h)("circle",{cx:"8",cy:"8",r:"3.42857143"}))))),(0,d.h)("div",{part:"summary",class:"details__summary"},(0,d.h)("slot",{name:"summary"},this.summary)),this.showIcon&&(0,d.h)("span",{part:"summary-icon",class:"details__summary-icon"},(0,d.h)("slot",{name:"icon"},(0,d.h)("sc-icon",{name:"chevron-right"})))),(0,d.h)("div",{class:"details__body",ref:function(t){return e.body=t},part:"body"},(0,d.h)("div",{part:"content",id:"content",class:"details__content",role:"region","aria-labelledby":"header"},(0,d.h)("slot",null))))}},{key:"el",get:function(){return(0,d.a)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"]}}}]),e}();(0,c.b)("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"ease"}}),(0,c.b)("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"ease"}}),h.style=":host{display:block;font-family:var(--sc-font-sans);--sc-toggle-padding:var(--sc-spacing-medium)}::slotted([slot=summary]){display:flex;align-items:center;flex-direction:flex-start;gap:var(--sc-spacing-x-small)}.details{border-radius:var(--sc-border-radius-medium);background-color:var(--sc-toggle-background-color, var(--sc-color-white));overflow-anchor:none}.details__radio{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;background-color:var(--sc-input-background-color);color:transparent;border-radius:50%;border:solid var(--sc-toggle-border-width, var(--sc-input-border-width)) var(--sc-toggle-border-color, var(--sc-input-border-color));background-color:var(--sc-input-background-color);display:inline-flex;color:transparent;width:var(--sc-toggle-radio-size, var(--sc-radio-size));height:var(--sc-toggle-radio-size, var(--sc-radio-size));transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.details__radio svg{width:100%;height:100%}.details--open .details__radio{color:var(--sc-color-white);border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.details:not(.details--borderless){border:solid 1px var(--sc-toggle-border-color, var(--sc-color-gray-200))}.details--disabled{opacity:0.5}.details__header{display:flex;align-items:center;border-radius:inherit;padding:var(--sc-toggle-header-padding, var(--sc-toggle-padding));user-select:none;cursor:pointer;color:var(--sc-toggle-header-color, var(--sc-input-label-color));gap:0.75em}.details__header:focus{box-shadow:var(--sc-focus-ring)}.details__header:focus-visible{box-shadow:var(--sc-focus-ring)}.details--disabled .details__header{cursor:not-allowed}.details--disabled .details__header:focus-visible{outline:none;box-shadow:none}.details__summary{flex:1 1 auto;display:flex;align-items:center}.details__summary-icon{flex:0 0 auto;display:flex;align-items:center;transition:var(--sc-transition-medium) transform ease}.details--open .details__summary-icon{transform:rotate(90deg)}.details__content{padding:var(--sc-toggle-content-padding, var(--sc-toggle-padding));padding-top:calc(var(--sc-toggle-content-padding, var(--sc-toggle-padding)) / 4)}.details--shady .details__body{border-top:solid var(--sc-input-border-width) var(--sc-input-border-color);background:var(--sc-toggle-shady-color, var(--sc-color-gray-50))}.details--shady .details__content{padding-top:var(--sc-toggle-content-padding, var(--sc-toggle-padding))}"}}]);