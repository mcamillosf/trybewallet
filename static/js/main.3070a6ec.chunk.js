(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{37:function(e,t,a){e.exports=a(51)},44:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),i=a(25),o=a(21),u=(a(44),a(2)),s=a(18),d=a(3),m=a(4),p=a(14),E=a(6),h=a(5),b=(a(45),a(13)),v=a(27),f=a.n(v),j=a(34),O=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.expenses,n=t.email,l=a.reduce((function(e,t){var a=t.exchangeRates[t.currency].ask;return e+Number(t.value*a)}),0);return r.a.createElement("header",null,r.a.createElement("h4",null,"Carteira Digital"),r.a.createElement("span",{"data-testid":"email-field"},n),r.a.createElement("div",null,r.a.createElement("span",{"data-testid":"total-field"},l.toFixed(2)),r.a.createElement("span",{"data-testid":"header-currency-field",id:"coin"},"BRL")))}}]),a}(n.Component),y=Object(b.a)((function(e){return{user:e.user,expenses:e.wallet.expenses}}))(O),g=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"valor"},"Valor",r.a.createElement("input",{type:"text",name:"valor",id:"valor"})),r.a.createElement("label",{htmlFor:"descricao"},"Descri\xe7\xe3o",r.a.createElement("input",{type:"text",name:"descricao",id:"descricao"})))}}]),a}(n.Component),w=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.func,a=e.login;return r.a.createElement("div",{className:"login-input"},r.a.createElement("label",{htmlFor:"login"},r.a.createElement("p",{className:"login-label"},"Login"),r.a.createElement("input",{type:"text",id:"login",className:"log-inp",name:"email",value:a,"data-testid":"email-input",onChange:t})))}}]),a}(n.Component),k=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.func,a=e.pass;return r.a.createElement("div",{className:"password-input"},r.a.createElement("label",{htmlFor:"password"},r.a.createElement("p",{className:"password-label"},"Password"),r.a.createElement("input",{type:"password",id:"password",className:"pass-inp",name:"password",value:a,"data-testid":"password-input",onChange:t})))}}]),a}(n.Component),x=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("label",{htmlFor:"payment"},"M\xe9todo de pagamento:",r.a.createElement("select",{name:"payment",id:"payment"},r.a.createElement("option",null,"Dinheiro"),r.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",null,"Cart\xe3o de d\xe9bito")))}}]),a}(n.Component),C=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.currencies,t=Object.keys(e).filter((function(e){return"USDT"!==e}));return r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{name:"currency",id:"currency"},t.map((function(e){return r.a.createElement("option",{key:e},e)}))))}}]),a}(n.Component);C.defaultProps={currencies:{}};var S=Object(b.a)((function(e){return{currencies:e.wallet.currencies[0]}}))(C),T=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("label",{htmlFor:"tags"},"Tag:",r.a.createElement("select",{id:"tags"},r.a.createElement("option",null,"Alimenta\xe7\xe3o"),r.a.createElement("option",null,"Lazer"),r.a.createElement("option",null,"Trabalho"),r.a.createElement("option",null,"Transporte"),r.a.createElement("option",null,"Sa\xfade")))}}]),a}(n.Component),R=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleClick=e.handleClick.bind(Object(p.a)(e)),e}return Object(m.a)(a,[{key:"handleClick",value:function(e){(0,this.props.deleteEach)(e)}},{key:"render",value:function(){var e=this,t=this.props.expenses;return r.a.createElement("table",{className:"table-wallet"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.tag),r.a.createElement("td",null,t.method),r.a.createElement("td",null,t.value),r.a.createElement("td",null,t.exchangeRates[t.currency].name),r.a.createElement("td",null,(1*t.exchangeRates[t.currency].ask).toFixed(2)),r.a.createElement("td",null,(t.exchangeRates[t.currency].ask*t.value).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"Editar"),r.a.createElement("button",{"data-testid":"delete-btn",type:"submit",onClick:function(){return e.handleClick(t.id)}},"Excluir")))}))))}}]),a}(n.Component),N=Object(b.a)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{deleteEach:function(t){return e(function(e){return{type:"DELETE_ITEM",state:e}}(t))}}}))(R),V=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={email:"",password:"",loginValid:!1,passwordValid:!1},e.validateLogin=e.validateLogin.bind(Object(p.a)(e)),e.validatePassword=e.validatePassword.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(m.a)(a,[{key:"validateLogin",value:function(e){var t=e.target,a=t.name,n=t.value;return this.setState(Object(s.a)({},a,n)),/^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i.test(n)?this.setState({loginValid:!0}):this.setState({loginValid:!1})}},{key:"validatePassword",value:function(e){var t=e.target,a=t.name,n=t.value;return this.setState(Object(s.a)({},a,n)),n.length>=6?this.setState({passwordValid:!0}):this.setState({passwordValid:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props,a=t.history;(0,t.dispatchValue)(this.state),a.push("/carteira")}},{key:"render",value:function(){var e=this.state,t=e.loginValid,a=e.passwordValid,n=e.email,l=e.password;return r.a.createElement("main",{className:"login-screen"},r.a.createElement("form",{action:"",className:"login-form"},r.a.createElement(w,{func:this.validateLogin,login:n}),r.a.createElement(k,{func:this.validatePassword,pass:l}),r.a.createElement("button",{type:"submit",className:"btn-form",disabled:!t||!a,onClick:this.handleSubmit},"Entrar")))}}]),a}(n.Component),F=Object(b.a)(null,(function(e){return{dispatchValue:function(t){return e({type:"SET_USER",state:t})}}}))(V),L=(a(49),function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).count=0,n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getAPI)()}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,a=t.getAPI,n=t.expenses;a();var r=this.props.currencies,l=document.querySelector("#valor").value,c=document.querySelector("#descricao").value,i=document.querySelector("#currency").value,o=document.querySelector("#payment").value,u=document.querySelector("#tags").value;n({id:this.count,value:l,description:c,currency:i,method:o,tag:u,exchangeRates:r}),this.count+=1}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(y,null),r.a.createElement("form",{className:"form-wallet"},r.a.createElement(g,null),r.a.createElement(S,null),r.a.createElement(x,null),r.a.createElement(T,null),r.a.createElement("button",{type:"submit",onClick:this.handleClick},"Adicionar despesa")),r.a.createElement(N,null))}}]),a}(n.Component)),P=Object(b.a)((function(e){return{currencies:e.wallet.currencies[0],amount:e.wallet.amount}}),(function(e){return{getAPI:function(){return e(function(){var e=Object(j.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_API",status:"loading"}),e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",t({type:"GET_CURRENCY",state:n}));case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",t({type:"REQUEST_FAIL",status:"Fail Request"}));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())},expenses:function(t){return e(function(e){return{type:"SET_EXPENSE",state:e}}(t))}}}))(L);var _=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:F}),r.a.createElement(u.a,{exact:!0,path:"/carteira",component:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(15),A=a(35),I=a(36),M=a(8),U={email:"",password:"",loginValid:"",passwordValid:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(M.a)(Object(M.a)({},e),t.state);default:return e}},Q=a(30),W={currencies:[],expenses:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WALLET":case"REQUEST_API":return Object(M.a)(Object(M.a)({},e),t.state);case"GET_CURRENCY":return Object(M.a)(Object(M.a)({},e),{},{currencies:[Object(M.a)({},t.state)]});case"SET_EXPENSE":return Object(M.a)(Object(M.a)({},e),{},{expenses:[].concat(Object(Q.a)(e.expenses),[t.state])});case"REQUEST_FAIL":return Object(M.a)(Object(M.a)({},e),{},{statues:t.status});case"DELETE_ITEM":return Object(M.a)(Object(M.a)({},e),{},{expenses:Object(Q.a)(e.expenses.filter((function(e){return e.id!==t.state})))});default:return e}},z=Object(D.combineReducers)({user:q,wallet:B}),G=Object(D.createStore)(z,Object(A.composeWithDevTools)(Object(D.applyMiddleware)(I.a)));c.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:G},r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.3070a6ec.chunk.js.map