(this["webpackJsonpwolox-challenge"]=this["webpackJsonpwolox-challenge"]||[]).push([[2],{21:function(e,t,n){"use strict";var r=n(1);n(0),n(41);t.a=function(){return Object(r.jsx)("div",{className:"loader__wrapper",children:Object(r.jsx)("div",{className:"loader__container",children:Object(r.jsx)("div",{className:"loader__item"})})})}},22:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(0),function(e){var t=e.text,n=e.classList,a=e.handleClick,o=e.type;return Object(r.jsx)("button",{type:o,className:n,onClick:a,children:t})});t.default=a,a.defaultProps={text:"",classList:"btn",type:"button",handleClick:function(){}}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(5),a=function(e,t,n){return{type:r.a.login,payload:{token:e,email:t,logged:n}}},o=function(){return{type:r.a.logout,payload:{}}},c=function(e){return{type:r.a.error,payload:e}}},26:function(e,t,n){"use strict";var r=n(5);t.a=function(e,t){return{type:r.a.toggle,payload:{show:e,message:t}}}},40:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=n(14),c=n.n(o),s=n(13),l=n(2),i=n(20),u=n(4),d=n(10),j=n(24),b=n(22),g=(n(40),function(e){var t=e.showModal,n=e.message,a=e.handleClose;return Object(r.jsx)("div",{className:"modal ".concat(t?"show__modal":"hidde__modal"),children:Object(r.jsxs)("main",{className:"modal__main",children:[Object(r.jsx)("p",{children:n}),Object(r.jsx)(b.default,{type:"button",classList:"btn btn-outline btn-color-blue",text:"Continuar",handleClick:a})]})})}),h=n(26),O=n(21),f=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,97))})),p=Object(a.lazy)((function(){return n.e(16).then(n.bind(null,58))})),m=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,107))})),y=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,103))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,98))})),v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,108))})),_=Object(a.lazy)((function(){return n.e(13).then(n.bind(null,99))})),w=function(e){var t=e.logged,n=e.handleLogin,o=e.handleToggleModal,c=e.show,s=e.message;return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("auth"))||{},t=e.token,r=void 0===t?"":t,a=e.email,o=void 0===a?"":a,c=e.logged;r&&n(r,o,void 0!==c&&c)}),[t]),Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(O.a,{}),children:Object(r.jsxs)(i.BrowserRouter,{children:[Object(r.jsx)(g,{showModal:c,message:s,handleClose:function(){return o(!1,"")}}),Object(r.jsxs)(u.g,{children:[Object(r.jsx)(p,{exact:!0,path:"/",logged:t,component:function(e){return Object(r.jsx)(y,Object(l.a)({},e))}}),Object(r.jsx)(p,{exact:!0,logged:t,path:"/login",component:function(e){return Object(r.jsx)(x,Object(l.a)({},e))}}),Object(r.jsx)(p,{exact:!0,logged:t,path:"/registry",component:function(e){return Object(r.jsx)(v,Object(l.a)({},e))}}),Object(r.jsx)(p,{exact:!0,path:"/terms-and-conditions",logged:t,component:function(e){return Object(r.jsx)(_,Object(l.a)({},e))}}),Object(r.jsx)(f,{exact:!0,path:"/admin",logged:t,component:function(e){return Object(r.jsx)(m,Object(l.a)({},e))}})]})]})})},E=Object(s.b)((function(e){var t=e.auth,n=e.notification;return{logged:t.user.logged,show:n.show,message:n.message}}),(function(e){return Object(d.a)({handleLogin:j.b,handleToggleModal:h.a},e)}))(w);w.defaultProps={message:""};var N=n(5),T={user:{token:"",email:"",logged:!1},error:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.a.login:return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)({},t.payload)});case N.a.logout:return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)(Object(l.a)({},e.user),{},{logged:!1})});case N.a.authError:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});default:return e}},L={show:!1,message:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.a.toggle:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},S={user:{name:"",lastName:"",country:"",province:"",email:"",phone:"",password:"",conditions:!1,token:""},error:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.a.createUser:return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case N.a.registryError:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});default:return e}},M={techs:[],error:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.a.setTechs:return Object(l.a)(Object(l.a)({},e),{},{techs:t.payload});case N.a.techError:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});default:return e}},R=Object(d.b)({auth:k,registry:z,notification:C,technologies:P}),U=Object(d.c)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),D=function(){return Object(r.jsx)(s.a,{store:U,children:Object(r.jsx)(E,{})})};n(45);c.a.render(Object(r.jsx)(D,{}),document.getElementById("root"))},5:function(e,t,n){"use strict";t.a={login:"[Auth] Login",logout:"[Auth Logout]",authError:"[Auth] Error",createUser:"[Registry] Create User",registryError:"[Registry] Error",toggle:"[Notification] Toggle Modal",setTechs:"[Techs] Set Techs",techError:"[Tech] Error"}}},[[46,3,4]]]);
//# sourceMappingURL=main.120ea9e7.chunk.js.map