(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.2.4"]&&_()}catch(e){}},550:()=>{try{self["workbox:expiration:6.2.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||r(n.googleAnalytics),i=e=>e||r(n.precache),c=()=>n.prefix,o=e=>e||r(n.runtime),h=()=>n.suffix;function l(e,t){const s=t();return e.waitUntil(s),s}s(977);function u(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),a=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",s),{cacheKey:r.href,url:a.href}}class d{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let p;async function g(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const r=e.clone(),a={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=s?s(a):a,c=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?r.body:await r.blob();return new Response(c,i)}const w=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");function y(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class m{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const _=new Set;s(873);function b(e){return"string"==typeof e?new Request(e):e}class v{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new m,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let n=b(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:a,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:r.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=b(e);let s;const{cacheName:n,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},r),{cacheName:n});s=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:r,cachedResponse:s,request:a,event:this.event})||void 0;return s}async cachePut(e,s){const n=b(e);var r;await(r=0,new Promise((e=>setTimeout(e,r))));const a=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:w(a.url)});const i=await this._ensureResponseSafeToCache(s);if(!i)return!1;const{cacheName:c,matchOptions:o}=this._strategy,h=await self.caches.open(c),l=this.hasCallback("cacheDidUpdate"),u=l?await async function(e,t,s,n){const r=y(t.url,s);if(t.url===r)return e.match(t,n);const a=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(r===y(t.url,s))return e.match(t,n)}(h,a.clone(),["__WB_REVISION__"],o):null;try{await h.put(a,l?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of _)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:u,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=b(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const r=Object.assign(Object.assign({},n),{state:s});return t[e](r)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class R{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,r=new v(this,{event:t,request:s,params:n}),a=this._getResponse(r,s,t);return[a,this._awaitComplete(a,r,s,t)]}async _getResponse(e,s,n){let r;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(r=await this._handle(s,e),!r||"error"===r.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:t,event:n,request:s}),r)break;if(!r)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))r=await t({event:n,request:s,response:r});return r}async _awaitComplete(e,t,s,n){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:a}),t.destroy(),a)throw a}}class x extends R{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(x.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let n;const r=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=r.integrity,a=e.integrity,i=!a||a===t;if(n=await s.fetch(new Request(e,{integrity:a||t})),t&&i){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,n.clone());0}}return n}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==x.copyRedirectedCacheableResponsesPlugin&&(n===x.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(x.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}x.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},x.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await g(e):e};class C{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new x({cacheName:i(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:r}=u(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new d;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let E;const L=()=>(E||(E=new C),E);s(80);const D=e=>e&&"object"==typeof e?e:{handle:e};class q{constructor(e,t,s="GET"){this.handler=D(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=D(e)}}class U extends q{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class k{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:r,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=a&&a.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:r})}catch(e){o=Promise.reject(e)}const h=a&&a.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:r})}catch(e){e instanceof Error&&(n=e)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const r=this._routes.get(s.method)||[];for(const a of r){let r;const i=a.match({url:e,sameOrigin:t,request:s,event:n});if(i)return r=i,(Array.isArray(r)&&0===r.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,D(e))}setCatchHandler(e){this._catchHandler=D(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let T;const O=()=>(T||(T=new k,T.addFetchListener(),T.addCacheListener()),T);function N(e,s,n){let r;if("string"==typeof e){const t=new URL(e,location.href);0;r=new q((({url:e})=>e.href===t.href),s,n)}else if(e instanceof RegExp)r=new U(e,s,n);else if("function"==typeof e)r=new q(e,s,n);else{if(!(e instanceof q))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return O().registerRoute(r),r}class P extends q{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(r);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}function I(e){e.then((()=>{}))}let K,M;const S=new WeakMap,j=new WeakMap,A=new WeakMap,B=new WeakMap,W=new WeakMap;let F={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return j.get(e);if("objectStoreNames"===t)return e.objectStoreNames||A.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return V(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function H(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(M||(M=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(G(this),t),V(S.get(this))}:function(...t){return V(e.apply(G(this),t))}:function(t,...s){const n=e.call(G(this),t,...s);return A.set(n,t.sort?t.sort():[t]),V(n)}}function $(e){return"function"==typeof e?H(e):(e instanceof IDBTransaction&&function(e){if(j.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),n()},a=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)}));j.set(e,t)}(e),t=e,(K||(K=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,F):e);var t}function V(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(V(e.result)),n()},a=()=>{s(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&S.set(t,e)})).catch((()=>{})),W.set(t,e),t}(e);if(B.has(e))return B.get(e);const t=$(e);return t!==e&&(B.set(e,t),W.set(t,e)),t}const G=e=>W.get(e);const Q=["get","getKey","getAll","getAllKeys","count"],J=["put","add","delete","clear"],z=new Map;function X(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(z.get(t))return z.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,r=J.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!Q.includes(s))return;const a=async function(e,...t){const a=this.transaction(e,r?"readwrite":"readonly");let i=a.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),r&&a.done]))[0]};return z.set(t,a),a}F=(e=>({...e,get:(t,s,n)=>X(t,s)||e.get(t,s,n),has:(t,s)=>!!X(t,s)||e.has(t,s)}))(F);s(550);const Y="cache-entries",Z=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class ee{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(Y,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),V(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=Z(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(Y,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(Y,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(Y).store.index("timestamp").openCursor(null,"prev");const r=[];let a=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&a>=t?r.push(n.value):a++),n=await n.continue()}const i=[];for(const e of r)await s.delete(Y,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+Z(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:r,terminated:a}={}){const i=indexedDB.open(e,t),c=V(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(V(i.result),e.oldVersion,e.newVersion,V(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),c.then((e=>{a&&e.addEventListener("close",(()=>a())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class te{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new ee(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,I(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}const se={get googleAnalytics(){return a()},get precache(){return i()},get prefix(){return c()},get runtime(){return o()},get suffix(){return h()}};function ne(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function re(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var ae;(function(e){L().precache(e)})([{'revision':'f6e1ecf0d2d943f93e248ec1b1a75fd2','url':'/404.html'},{'revision':'a1271072bbc31da9ef3b8dadcd39c5b7','url':'/index.html'},{'revision':null,'url':'/js/main.bed284f2d161dfbc0356.js'},{'revision':null,'url':'/js/vendor.f1b751f84a79401c9952.js'},{'revision':'c1558c012afbfb5c95a86f1a99786826','url':'/static/favicon.png'},{'revision':'04b527885ff94f2f3c63541b4fa2023b','url':'/vendor.css'}]),function(e){const t=L();N(new P(t,e))}(ae);var ie=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(s),!0).forEach((function(t){re(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ne(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({precacheTemp:"".concat(se.precache,"-temp")},se);ie.fonts="googlefonts",N(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,new class extends R{async _handle(e,s){let n,r=await s.cacheMatch(e);if(r)0;else{0;try{r=await s.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}0}if(!r)throw new t("no-response",{url:e.url,error:n});return r}}({cacheName:ie.fonts,plugins:[new class{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const r=this._isResponseDateFresh(n),a=this._getCacheExpiration(s);I(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return r?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){_.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===o())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new te(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxEntries:30})]}),"GET"),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){var t=new Set(Object.values(ie));return Promise.all(e.filter((function(e){return!t.has(e)})).map((function(e){return console.log("deleting cache",e),caches.delete(e)})))})))}))})()})();
//# sourceMappingURL=sw.js.map