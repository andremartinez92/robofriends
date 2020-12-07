(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,n,t){e.exports=t(29)},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(4),c=t.n(o),i=(t(20),t(2)),l=t(1),s=t(10),u=(t(27),t(3)),d="GET_ROBOTS_REQUEST",h="GET_ROBOTS_SUCCESS",f="GET_ROBOTS_FAILURE",v={searchField:""};var b={isPending:!1,robots:[],error:""};var m=Object(l.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(u.a)({},e,{searchField:n.payload.searchField});default:return e}},robots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case d:return Object(u.a)({},e,{isPending:!0});case h:return Object(u.a)({},e,{robots:n.payload.robots,isPending:!1});case f:return Object(u.a)({},e,{error:n.payload.error,isPending:!1});default:return e}}});t(28);var E=function(){return a.a.createElement("h1",{className:"f1"},"Robofriends")};var g=function(e){var n=e.onSearchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:function(e){return n(e.target.value)},placeholder:"Search robots",type:"search"}))};var p=function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))};var w=function(e){var n=e.email,t=e.id,r=e.name;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,r),a.a.createElement("p",null,n)))};var O=function(e){var n=e.robots;return a.a.createElement(a.a.Fragment,null,n.map((function(e){return a.a.createElement(w,{key:e.id,email:e.email,id:e.id,name:e.name})})))},y={overflow:"scroll",height:"800px"};var S=function(e){var n=e.children;return a.a.createElement("div",{style:y},n)},_=t(11),j=t(12),C=t(13),k=t(14),N=function(e){Object(k.a)(t,e);var n=Object(C.a)(t);function t(e){var r;return Object(_.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(j.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops. Something went wrong here."):this.props.children}}]),t}(a.a.Component);var R=function(e){var n=e.isPending,t=e.robots;return n?a.a.createElement("h1",null,"Loading..."):t&&t.length?a.a.createElement(S,null,a.a.createElement(N,null,a.a.createElement(O,{robots:t}))):a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Could not retrieve content"),a.a.createElement("div",null,"Please check your internet connection."))};var T=function(){var e=Object(i.b)(),n=Object(i.c)((function(e){return e.search.searchField})),t=Object(i.c)((function(e){return e.robots})),r=t.isPending,o=t.robots;a.a.useEffect((function(){e((function(e){return e({type:d,payload:{}}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:h,payload:{robots:n}})})).catch((function(n){return e({type:f,payload:{error:n}})}))}))}),[e]);var c=p(o,n);return a.a.createElement("div",{className:"tc"},a.a.createElement(E,null),a.a.createElement(g,{onSearchChange:function(n){return e(function(e){return{type:"CHANGE_SEARCH_FIELD",payload:{searchField:e}}}(n))}}),a.a.createElement(R,{isPending:r,robots:c}))},A=window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e},F=Object(l.e)(m,Object(l.d)(Object(l.a)(s.a),A));var L=function(){return a.a.createElement(i.a,{store:F},a.a.createElement(T,null))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.27af5c0d.chunk.js.map