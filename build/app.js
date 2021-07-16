(()=>{var t={195:(t,e,r)=>{t.exports=r(236)},905:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createNewElement=void 0,e.createNewElement=(t,e)=>{const r=document.createElement(t);return r.classList.add(e),r}},53:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.matrixTransform=e.mutationObserver=e.createNewElement=e.lerp=e.clamp=e.resize=e.raf=void 0;const i=r(654);Object.defineProperty(e,"raf",{enumerable:!0,get:function(){return i.raf}});const o=r(441);Object.defineProperty(e,"resize",{enumerable:!0,get:function(){return o.resize}});const s=r(93);Object.defineProperty(e,"clamp",{enumerable:!0,get:function(){return s.clamp}}),Object.defineProperty(e,"lerp",{enumerable:!0,get:function(){return s.lerp}});const a=r(905);Object.defineProperty(e,"createNewElement",{enumerable:!0,get:function(){return a.createNewElement}});const u=n(r(873));e.mutationObserver=u.default;const h=r(668);Object.defineProperty(e,"matrixTransform",{enumerable:!0,get:function(){return h.matrixTransform}})},93:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.clamp=e.lerp=void 0,e.lerp=(t,e,r)=>t*(1-r)+e*r,e.clamp=(t,e,r)=>Math.max(Math.min(t,Math.max(e,r)),Math.min(e,r))},668:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.matrixTransform=void 0,e.matrixTransform=(t={})=>{var e,r,n,i,o,s,a;const u={scale:null!==(e=t.scale)&&void 0!==e?e:{x:1,y:1},move:null!==(r=t.move)&&void 0!==r?r:{x:0,y:0,z:0}},h=Object.keys(u).map((t=>"string"==typeof u[t]||"number"==typeof u[t]?{x:u[t],y:u[t],z:u[t]}:u[t]));return`matrix3d(\n    ${null!==(n=h[0].x)&&void 0!==n?n:1},0,0,0,\n    0,${null!==(i=h[0].y)&&void 0!==i?i:1},0,0,\n    0,0,1,0,\n    ${null!==(o=h[1].x)&&void 0!==o?o:0},${null!==(s=h[1].y)&&void 0!==s?s:0},${null!==(a=h[1].z)&&void 0!==a?a:0},1\n    )`}},873:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const r=new MutationObserver((function(t){for(const r of t)"childList"===r.type&&e()}));return r.observe(t,{childList:!0}),()=>r.disconnect()}},654:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.raf=e.RAF=void 0;class r{constructor(){this.cbArray=[],this.animation()}on(t){this.cbArray.push(t)}off(t){this.cbArray=this.cbArray.filter((e=>e!==t))}animation(){this.cbArray.forEach((t=>t())),requestAnimationFrame(this.animation.bind(this))}}e.RAF=r;const n=new r;e.raf={on:t=>n.on(t),off:t=>n.off(t)}},441:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resize=e.Resize=void 0;const n=r(432);class i{constructor(){this.cbArray=[],this.init()}bounds(){["resizeHandler"].forEach((t=>{this[t]=this[t].bind(this)}))}init(){this.bounds(),this.debounced=n.debounce(this.resizeHandler,60),window.addEventListener("resize",this.debounced)}resizeHandler(){this.cbArray.forEach((t=>t()))}on(t){t(),this.cbArray.push(t)}off(t){this.cbArray=this.cbArray.filter((e=>e!==t))}destroy(){window.removeEventListener("resize",this.resizeHandler)}}e.Resize=i;const o=new i;e.resize={on:t=>o.on(t),off:t=>o.off(t)}},432:t=>{function e(t,e,r){var n,i,o,s,a;function u(){var h=Date.now()-s;h<e&&h>=0?n=setTimeout(u,e-h):(n=null,r||(a=t.apply(o,i),o=i=null))}null==e&&(e=100);var h=function(){o=this,i=arguments,s=Date.now();var h=r&&!n;return n||(n=setTimeout(u,e)),h&&(a=t.apply(o,i),o=i=null),a};return h.clear=function(){n&&(clearTimeout(n),n=null)},h.flush=function(){n&&(a=t.apply(o,i),o=i=null,clearTimeout(n),n=null)},h}e.debounce=e,t.exports=e},236:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),s=new P(n||[]);return o._invoke=function(t,e,r){var n=l;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return A()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var a=L(s,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=c(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,s),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var b={};b[o]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(j([])));w&&w!==r&&n.call(w,o)&&(b=w);var M=g.prototype=y.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,o,s,a){var u=c(t[i],t,o);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):e.resolve(l).then((function(t){h.value=t,s(h)}),(function(t){return r("throw",t,s,a)}))}a(u.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=c(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=M.constructor=g,g.constructor=m,m.displayName=u(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,a,"GeneratorFunction")),t.prototype=Object.create(M),t},t.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[s]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var s=new E(h(e,r,n,i),o);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},_(M),u(M,a,"Generator"),M[o]=function(){return this},M.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return a.type="throw",a.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var u=n.call(s,"catchLoc"),h=n.call(s,"finallyLoc");if(u&&h){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),z(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;z(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},7:t=>{t.exports="uniform vec2 cover;\n\nvec2 bgCover(vec2 planeSize, vec2 imageSize, vec2 uv) {\n\n  uv -= cover;\n\n  float aspect = planeSize.x / planeSize.y;\n  float imageAspect = imageSize.x / imageSize.y;\n\n  if (aspect < imageAspect) {\n    uv.x *= aspect / imageAspect;\n  } else {\n    uv.y *= imageAspect / aspect;\n  }\n\n  uv += cover;\n  return uv;\n}"},864:t=>{t.exports="#extension GL_EXT_shader_texture_lod : enable\n#extension GL_OES_standard_derivatives : enable\n#define PI 3.14159265359\n\nprecision highp float;\n\nvec3 fromRGB(vec3 rgb) {\n  return rgb / 255.;\n}"},144:t=>{t.exports="#version 300 es\nprecision highp float;\n#define varying in\n#define texture2D texture\n#define gl_FragColor FragColor\nout vec4 FragColor;\n#define PI 3.14159265359\n\n\nvec3 fromRGB(vec3 rgb) {\n  return rgb / 255.;\n}"},118:t=>{t.exports="#define PI 3.14159265359\n\nprecision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform vec2 size;\nuniform vec2 resolution;"},735:t=>{t.exports="#define attribute in\n#define varying out\n#define PI 3.14159265359\n\nprecision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform vec2 size;\nuniform vec2 resolution;"}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){let e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function e(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function i(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function o(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function s(t){let e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function a(t,e){let r=e[0],n=e[1],i=e[2],o=r*r+n*n+i*i;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}function u(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function h(t,e,r){let n=e[0],i=e[1],o=e[2],s=r[0],a=r[1],u=r[2];return t[0]=i*u-o*a,t[1]=o*s-n*u,t[2]=n*a-i*s,t}r(195);const c=function(){const t=[0,0,0],r=[0,0,0];return function(n,i){e(t,n),e(r,i),a(t,t),a(r,r);let o=u(t,r);return o>1?0:o<-1?Math.PI:Math.acos(o)}}();class l extends Array{constructor(t=0,e=t,r=t){return super(t,e,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,r=t){return t.length?this.copy(t):(function(t,e,r,n){t[0]=e,t[1]=r,t[2]=n}(this,t,e,r),this)}copy(t){return e(this,t),this}add(t,e){return e?n(this,t,e):n(this,this,t),this}sub(t,e){return e?i(this,t,e):i(this,this,t),this}multiply(t){var e,r,n;return t.length?(r=this,n=t,(e=this)[0]=r[0]*n[0],e[1]=r[1]*n[1],e[2]=r[2]*n[2]):o(this,this,t),this}divide(t){var e,r,n;return t.length?(r=this,n=t,(e=this)[0]=r[0]/n[0],e[1]=r[1]/n[1],e[2]=r[2]/n[2]):o(this,this,1/t),this}inverse(t=this){var e,r;return r=t,(e=this)[0]=1/r[0],e[1]=1/r[1],e[2]=1/r[2],this}len(){return t(this)}distance(e){return e?function(t,e){let r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(r*r+n*n+i*i)}(this,e):t(this)}squaredLen(){return s(this)}squaredDistance(t){return t?function(t,e){let r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return r*r+n*n+i*i}(this,t):s(this)}negate(t=this){var e,r;return r=t,(e=this)[0]=-r[0],e[1]=-r[1],e[2]=-r[2],this}cross(t,e){return e?h(this,t,e):h(this,this,t),this}scale(t){return o(this,this,t),this}normalize(){return a(this,this),this}dot(t){return u(this,t)}equals(t){return e=t,this[0]===e[0]&&this[1]===e[1]&&this[2]===e[2];var e}applyMatrix4(t){return function(t,e,r){let n=e[0],i=e[1],o=e[2],s=r[3]*n+r[7]*i+r[11]*o+r[15];s=s||1,t[0]=(r[0]*n+r[4]*i+r[8]*o+r[12])/s,t[1]=(r[1]*n+r[5]*i+r[9]*o+r[13])/s,t[2]=(r[2]*n+r[6]*i+r[10]*o+r[14])/s}(this,this,t),this}scaleRotateMatrix4(t){return function(t,e,r){let n=e[0],i=e[1],o=e[2],s=r[3]*n+r[7]*i+r[11]*o+r[15];s=s||1,t[0]=(r[0]*n+r[4]*i+r[8]*o)/s,t[1]=(r[1]*n+r[5]*i+r[9]*o)/s,t[2]=(r[2]*n+r[6]*i+r[10]*o)/s}(this,this,t),this}applyQuaternion(t){return function(t,e,r){let n=e[0],i=e[1],o=e[2],s=r[0],a=r[1],u=r[2],h=a*o-u*i,c=u*n-s*o,l=s*i-a*n,f=a*l-u*c,p=u*h-s*l,d=s*c-a*h,v=2*r[3];h*=v,c*=v,l*=v,f*=2,p*=2,d*=2,t[0]=n+h+f,t[1]=i+c+p,t[2]=o+l+d}(this,this,t),this}angle(t){return c(this,t)}lerp(t,e){return function(t,e,r,n){let i=e[0],o=e[1],s=e[2];t[0]=i+n*(r[0]-i),t[1]=o+n*(r[1]-o),t[2]=s+n*(r[2]-s)}(this,this,t,e),this}clone(){return new l(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){const e=this[0],r=this[1],n=this[2];return this[0]=t[0]*e+t[4]*r+t[8]*n,this[1]=t[1]*e+t[5]*r+t[9]*n,this[2]=t[2]*e+t[6]*r+t[10]*n,this.normalize()}}function f(t,e,r){let n=e[0],i=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],c=e[7],l=e[8],f=e[9],p=e[10],d=e[11],v=e[12],y=e[13],m=e[14],g=e[15],b=r[0],x=r[1],w=r[2],M=r[3];return t[0]=b*n+x*a+w*l+M*v,t[1]=b*i+x*u+w*f+M*y,t[2]=b*o+x*h+w*p+M*m,t[3]=b*s+x*c+w*d+M*g,b=r[4],x=r[5],w=r[6],M=r[7],t[4]=b*n+x*a+w*l+M*v,t[5]=b*i+x*u+w*f+M*y,t[6]=b*o+x*h+w*p+M*m,t[7]=b*s+x*c+w*d+M*g,b=r[8],x=r[9],w=r[10],M=r[11],t[8]=b*n+x*a+w*l+M*v,t[9]=b*i+x*u+w*f+M*y,t[10]=b*o+x*h+w*p+M*m,t[11]=b*s+x*c+w*d+M*g,b=r[12],x=r[13],w=r[14],M=r[15],t[12]=b*n+x*a+w*l+M*v,t[13]=b*i+x*u+w*f+M*y,t[14]=b*o+x*h+w*p+M*m,t[15]=b*s+x*c+w*d+M*g,t}function p(t,e){let r=e[0],n=e[1],i=e[2],o=e[4],s=e[5],a=e[6],u=e[8],h=e[9],c=e[10];return t[0]=Math.hypot(r,n,i),t[1]=Math.hypot(o,s,a),t[2]=Math.hypot(u,h,c),t}new l;const d=function(){const t=[0,0,0];return function(e,r){let n=t;p(n,r);let i=1/n[0],o=1/n[1],s=1/n[2],a=r[0]*i,u=r[1]*o,h=r[2]*s,c=r[4]*i,l=r[5]*o,f=r[6]*s,d=r[8]*i,v=r[9]*o,y=r[10]*s,m=a+l+y,g=0;return m>0?(g=2*Math.sqrt(m+1),e[3]=.25*g,e[0]=(f-v)/g,e[1]=(d-h)/g,e[2]=(u-c)/g):a>l&&a>y?(g=2*Math.sqrt(1+a-l-y),e[3]=(f-v)/g,e[0]=.25*g,e[1]=(u+c)/g,e[2]=(d+h)/g):l>y?(g=2*Math.sqrt(1+l-a-y),e[3]=(d-h)/g,e[0]=(u+c)/g,e[1]=.25*g,e[2]=(f+v)/g):(g=2*Math.sqrt(1+y-a-l),e[3]=(u-c)/g,e[0]=(d+h)/g,e[1]=(f+v)/g,e[2]=.25*g),e}}();class v extends Array{constructor(t=1,e=0,r=0,n=0,i=0,o=1,s=0,a=0,u=0,h=0,c=1,l=0,f=0,p=0,d=0,v=1){return super(t,e,r,n,i,o,s,a,u,h,c,l,f,p,d,v),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,r,n,i,o,s,a,u,h,c,l,f,p,d,v){return t.length?this.copy(t):(function(t,e,r,n,i,o,s,a,u,h,c,l,f,p,d,v,y){t[0]=e,t[1]=r,t[2]=n,t[3]=i,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t[8]=h,t[9]=c,t[10]=l,t[11]=f,t[12]=p,t[13]=d,t[14]=v,t[15]=y}(this,t,e,r,n,i,o,s,a,u,h,c,l,f,p,d,v),this)}translate(t,e=this){return function(t,e,r){let n,i,o,s,a,u,h,c,l,f,p,d,v=r[0],y=r[1],m=r[2];e===t?(t[12]=e[0]*v+e[4]*y+e[8]*m+e[12],t[13]=e[1]*v+e[5]*y+e[9]*m+e[13],t[14]=e[2]*v+e[6]*y+e[10]*m+e[14],t[15]=e[3]*v+e[7]*y+e[11]*m+e[15]):(n=e[0],i=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],c=e[7],l=e[8],f=e[9],p=e[10],d=e[11],t[0]=n,t[1]=i,t[2]=o,t[3]=s,t[4]=a,t[5]=u,t[6]=h,t[7]=c,t[8]=l,t[9]=f,t[10]=p,t[11]=d,t[12]=n*v+a*y+l*m+e[12],t[13]=i*v+u*y+f*m+e[13],t[14]=o*v+h*y+p*m+e[14],t[15]=s*v+c*y+d*m+e[15])}(this,e,t),this}rotate(t,e,r=this){return function(t,e,r,n){let i,o,s,a,u,h,c,l,f,p,d,v,y,m,g,b,x,w,M,_,E,L,O,z,P=n[0],j=n[1],A=n[2],S=Math.hypot(P,j,A);Math.abs(S)<1e-6||(S=1/S,P*=S,j*=S,A*=S,i=Math.sin(r),o=Math.cos(r),s=1-o,a=e[0],u=e[1],h=e[2],c=e[3],l=e[4],f=e[5],p=e[6],d=e[7],v=e[8],y=e[9],m=e[10],g=e[11],b=P*P*s+o,x=j*P*s+A*i,w=A*P*s-j*i,M=P*j*s-A*i,_=j*j*s+o,E=A*j*s+P*i,L=P*A*s+j*i,O=j*A*s-P*i,z=A*A*s+o,t[0]=a*b+l*x+v*w,t[1]=u*b+f*x+y*w,t[2]=h*b+p*x+m*w,t[3]=c*b+d*x+g*w,t[4]=a*M+l*_+v*E,t[5]=u*M+f*_+y*E,t[6]=h*M+p*_+m*E,t[7]=c*M+d*_+g*E,t[8]=a*L+l*O+v*z,t[9]=u*L+f*O+y*z,t[10]=h*L+p*O+m*z,t[11]=c*L+d*O+g*z,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]))}(this,r,t,e),this}scale(t,e=this){return function(t,e,r){let n=r[0],i=r[1],o=r[2];t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]}(this,e,"number"==typeof t?[t,t,t]:t),this}multiply(t,e){return e?f(this,t,e):f(this,this,t),this}identity(){var t;return(t=this)[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}copy(t){var e,r;return r=t,(e=this)[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}fromPerspective({fov:t,aspect:e,near:r,far:n}={}){return function(t,e,r,n,i){let o=1/Math.tan(e/2),s=1/(n-i);t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(i+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*i*n*s,t[15]=0}(this,t,e,r,n),this}fromOrthogonal({left:t,right:e,bottom:r,top:n,near:i,far:o}){return function(t,e,r,n,i,o,s){let a=1/(e-r),u=1/(n-i),h=1/(o-s);t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+r)*a,t[13]=(i+n)*u,t[14]=(s+o)*h,t[15]=1}(this,t,e,r,n,i,o),this}fromQuaternion(t){return function(t,e){let r=e[0],n=e[1],i=e[2],o=e[3],s=r+r,a=n+n,u=i+i,h=r*s,c=n*s,l=n*a,f=i*s,p=i*a,d=i*u,v=o*s,y=o*a,m=o*u;t[0]=1-l-d,t[1]=c+m,t[2]=f-y,t[3]=0,t[4]=c-m,t[5]=1-h-d,t[6]=p+v,t[7]=0,t[8]=f+y,t[9]=p-v,t[10]=1-h-l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return function(t,e){let r=e[0],n=e[1],i=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],c=e[8],l=e[9],f=e[10],p=e[11],d=e[12],v=e[13],y=e[14],m=e[15],g=r*a-n*s,b=r*u-i*s,x=r*h-o*s,w=n*u-i*a,M=n*h-o*a,_=i*h-o*u,E=c*v-l*d,L=c*y-f*d,O=c*m-p*d,z=l*y-f*v,P=l*m-p*v,j=f*m-p*y,A=g*j-b*P+x*z+w*O-M*L+_*E;A&&(A=1/A,t[0]=(a*j-u*P+h*z)*A,t[1]=(i*P-n*j-o*z)*A,t[2]=(v*_-y*M+m*w)*A,t[3]=(f*M-l*_-p*w)*A,t[4]=(u*O-s*j-h*L)*A,t[5]=(r*j-i*O+o*L)*A,t[6]=(y*x-d*_-m*b)*A,t[7]=(c*_-f*x+p*b)*A,t[8]=(s*P-a*O+h*E)*A,t[9]=(n*O-r*P-o*E)*A,t[10]=(d*M-v*x+m*g)*A,t[11]=(l*x-c*M-p*g)*A,t[12]=(a*L-s*z-u*E)*A,t[13]=(r*z-n*L+i*E)*A,t[14]=(v*b-d*w-y*g)*A,t[15]=(c*w-l*b+f*g)*A)}(this,t),this}compose(t,e,r){return function(t,e,r,n){let i=e[0],o=e[1],s=e[2],a=e[3],u=i+i,h=o+o,c=s+s,l=i*u,f=i*h,p=i*c,d=o*h,v=o*c,y=s*c,m=a*u,g=a*h,b=a*c,x=n[0],w=n[1],M=n[2];t[0]=(1-(d+y))*x,t[1]=(f+b)*x,t[2]=(p-g)*x,t[3]=0,t[4]=(f-b)*w,t[5]=(1-(l+y))*w,t[6]=(v+m)*w,t[7]=0,t[8]=(p+g)*M,t[9]=(v-m)*M,t[10]=(1-(l+d))*M,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1}(this,t,e,r),this}getRotation(t){return d(t,this),this}getTranslation(t){var e,r;return r=this,(e=t)[0]=r[12],e[1]=r[13],e[2]=r[14],this}getScaling(t){return p(t,this),this}getMaxScaleOnAxis(){return function(t){let e=t[0],r=t[1],n=t[2],i=t[4],o=t[5],s=t[6],a=t[8],u=t[9],h=t[10];const c=e*e+r*r+n*n,l=i*i+o*o+s*s,f=a*a+u*u+h*h;return Math.sqrt(Math.max(c,l,f))}(this)}lookAt(t,e,r){return function(t,e,r,n){let i=e[0],o=e[1],s=e[2],a=n[0],u=n[1],h=n[2],c=i-r[0],l=o-r[1],f=s-r[2],p=c*c+l*l+f*f;0===p?f=1:(p=1/Math.sqrt(p),c*=p,l*=p,f*=p);let d=u*f-h*l,v=h*c-a*f,y=a*l-u*c;p=d*d+v*v+y*y,0===p&&(h?a+=1e-6:u?h+=1e-6:u+=1e-6,d=u*f-h*l,v=h*c-a*f,y=a*l-u*c,p=d*d+v*v+y*y),p=1/Math.sqrt(p),d*=p,v*=p,y*=p,t[0]=d,t[1]=v,t[2]=y,t[3]=0,t[4]=l*y-f*v,t[5]=f*d-c*y,t[6]=c*v-l*d,t[7]=0,t[8]=c,t[9]=l,t[10]=f,t[11]=0,t[12]=i,t[13]=o,t[14]=s,t[15]=1}(this,t,e,r),this}determinant(){return function(t){let e=t[0],r=t[1],n=t[2],i=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=t[9],l=t[10],f=t[11],p=t[12],d=t[13],v=t[14],y=t[15];return(e*s-r*o)*(l*y-f*v)-(e*a-n*o)*(c*y-f*d)+(e*u-i*o)*(c*v-l*d)+(r*a-n*s)*(h*y-f*p)-(r*u-i*s)*(h*v-l*p)+(n*u-i*a)*(h*d-c*p)}(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}}new v,new Uint8Array(4),new function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=this,o=!1,s=0,a=0,u=void 0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=r,this.onError=n,this.itemStart=function(t){a++,!1===o&&void 0!==i.onStart&&i.onStart(t,s,a),o=!0},this.itemEnd=function(t){s++,void 0!==i.onProgress&&i.onProgress(t,s,a),s===a&&(o=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(t){void 0!==i.onError&&i.onError(t)},this.resolveURL=function(t){return u?u(t):t},this.setURLModifier=function(t){return u=t,this},this.addHandler=function(t,e){return h.push(t,e),this},this.removeHandler=function(t){var e=h.indexOf(t);return-1!==e&&h.splice(e,2),this},this.getHandler=function(t){for(var e=0,r=h.length;e<r;e+=2){var n=h[e],i=h[e+1];if(n.global&&(n.lastIndex=0),n.test(t))return i}return null}},r(864),r(118),r(144),r(735),r(7),new v,new l,new l,new l,r(53)})()})();