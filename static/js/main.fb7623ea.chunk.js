(window["webpackJsonpburger-builder-new"]=window["webpackJsonpburger-builder-new"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredients__BreadBottom__16czh",BreadTop:"BurgerIngredients__BreadTop__1F9cD",Seeds1:"BurgerIngredients__Seeds1__1KqDN",Seeds2:"BurgerIngredients__Seeds2__1j0Rg",Meat:"BurgerIngredients__Meat__1kFCF",Cheese:"BurgerIngredients__Cheese__3JVcn",Salad:"BurgerIngredients__Salad__142r8",Bacon:"BurgerIngredients__Bacon__3LSem"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},,,,,,,,function(e,t,a){e.exports={Content:"Layout__Content__LhJtv"}},function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f"}},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(19),function(e){return e.children}),s=a(10),i=a.n(s),u=function(e){return r.a.createElement(c,null,r.a.createElement("div",null,"side bar, toolbar, backdrop"),r.a.createElement("main",{className:i.a.Content},e.children))},d=a(3),m=a(4),_=a(6),b=a(5),p=a(7),B=a(13),g=a(1),h=a.n(g),E=function(e){function t(){return Object(d.a)(this,t),Object(_.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:h.a.BreadTop},r.a.createElement("div",{className:h.a.Seeds1}),r.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:h.a.Meat});break;case"bacon":e=r.a.createElement("div",{className:h.a.Bacon});break;case"cheese":e=r.a.createElement("div",{className:h.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:h.a.Salad});break;default:e=null}return e}}]),t}(n.Component),f=a(11),v=a.n(f),C=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(B.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(E,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please Start Adding Ingredients")),r.a.createElement("div",{className:v.a.Burger},r.a.createElement(E,{type:"bread-top"}),t,r.a.createElement(E,{type:"bread-bottom"}))},y=a(12),k=a.n(y),w=a(2),N=a.n(w),j=function(e){return r.a.createElement("div",{className:N.a.BuildControl},r.a.createElement("div",{className:N.a.Label},e.label),r.a.createElement("button",{className:N.a.Less},"Less"),r.a.createElement("button",{className:N.a.More},"More"))},O=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],S=function(e){return r.a.createElement("div",{className:k.a.BuildControls},O.map(function(e){return r.a.createElement(j,{key:e.label,label:e.label})}))},I=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{meat:1,salad:1,bacon:1,cheese:1}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(c,null,r.a.createElement(C,{ingredients:this.state.ingredients}),r.a.createElement(S,null))}}]),t}(n.Component);var L=function(){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.fb7623ea.chunk.js.map