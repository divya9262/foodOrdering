(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1muO0",control:"Checkout_control__1guMn",actions:"Checkout_actions__1DFCI",submit:"Checkout_submit__3_GB-",invalid:"Checkout_invalid__3FXQF"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__zcYpq",total:"Cart_total__1nihg",actions:"Cart_actions__1Bow5","button--alt":"Cart_button--alt__3qa0S",button:"Cart_button__1xoeN"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3Wk1b",summary:"CartItem_summary__GhMax",price:"CartItem_price__1oIuU",amount:"CartItem_amount__K6D9g",actions:"CartItem_actions__3lock"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1DFt6",icon:"HeaderCartButton_icon__1RRyi",badge:"HeaderCartButton_badge__1LB74",bump:"HeaderCartButton_bump__3nPLF"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2_-1M",description:"MealItem_description__1wu8t",price:"MealItem_price__pj5_j"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2xBAf",modal:"Modal_modal__ptWr2","slide-down":"Modal_slide-down__32PDD"}},,function(e,t,n){e.exports={header:"Header_header__3BjzM","main-image":"Header_main-image__13ihE"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1d4XU"}},function(e,t,n){e.exports={card:"Card_card__WPIZ2"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2hf38","meals-appear":"AvailableMeals_meals-appear__kWCix"}},function(e,t,n){e.exports={input:"Input_input__3aTrz"}},function(e,t,n){e.exports={form:"MealItemForm_form__rR7a-"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(27),n(2)),o=n(16),l=n.n(o),u=n(0),d=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),m=n(10),b=n.n(m),h=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(j).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(c?b.a.bump:"");return Object(a.useEffect)((function(){if(0!==i.length){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(u.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(u.jsx)("span",{className:b.a.icon,children:Object(u.jsx)(d,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:b.a.badge,children:o})]})},O=function(e){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsx)("h1",{children:"HomeMade Meals"}),Object(u.jsx)(h,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:l.a["main-image"],children:Object(u.jsx)("img",{src:"https://images.unsplash.com/photo-1536305030588-45dc07a2a372?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:"HomeMade Food healthy and delicious."})})]})},x=n(18),p=n.n(x),f=function(){return Object(u.jsxs)("section",{className:p.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},_=n(6),v=n.n(_),C=n(12),y=n(19),N=n.n(y),g=function(e){return Object(u.jsx)("div",{className:N.a.card,children:e.children})},M=n(20),A=n.n(M),k=n(13),F=n.n(k),I=n(5),w=n(21),S=n.n(w),R=c.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:S.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(I.a)({ref:t},e.input))]})})),D=n(22),B=n.n(D),H=function(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)();return Object(u.jsxs)("form",{className:B.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?r(!1):e.onAddToCart(a)},children:[Object(u.jsx)(R,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!c&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},P=function(e){var t=Object(a.useContext)(j),n="Rs.".concat(e.price);return Object(u.jsxs)("li",{className:F.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:F.a.description,children:e.description}),Object(u.jsx)("div",{className:F.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){(function(){var e=Object(C.a)(v.a.mark((function e(){var t,n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-ordering-33fbe-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=n.map((function(e){return Object(u.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:A.a.meals,children:Object(u.jsx)(g,{children:Object(u.jsx)("ul",{children:r})})})},E=function(){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(T,{})]})},z=n(14),W=n.n(z),G=function(e){return Object(u.jsx)("div",{className:W.a.backdrop,onClick:e.onClose})},L=function(e){return Object(u.jsx)("div",{className:W.a.modal,children:Object(u.jsx)("div",{className:W.a.content,children:e.children})})},Y=document.getElementById("overlays"),Z=function(e){return Object(u.jsxs)(a.Fragment,{children:[i.a.createPortal(Object(u.jsx)(G,{onClose:e.onClose}),Y),i.a.createPortal(Object(u.jsx)(L,{children:e.children}),Y)]})},q=n(7),J=n.n(q),U=function(e){var t="Rs.".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:J.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:J.a.summary,children:[Object(u.jsx)("span",{className:J.a.price,children:t}),Object(u.jsxs)("span",{className:J.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:J.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},V=n(4),X=n.n(V),K=n(3),Q=n.n(K),$=function(e){return""===e.trim()},ee=function(e){var t=Object(a.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)(),d=Object(a.useRef)(),j="".concat(Q.a.control," ").concat(c.name?"":Q.a.invalid),m="".concat(Q.a.control," ").concat(c.street?"":Q.a.invalid),b="".concat(Q.a.control," ").concat(c.postalCode?"":Q.a.invalid),h="".concat(Q.a.control," ").concat(c.city?"":Q.a.invalid);return Object(u.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,c=l.current.value,s=d.current.value,u=!$(n),j=!$(a),m=!$(s),b=6===c.trim().length;r({name:u,street:j,city:m,postalCode:b}),u&&j&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:c})},children:[Object(u.jsxs)("div",{className:j,children:[Object(u.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(u.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(u.jsx)("p",{children:"Please enter a valid name!"})]}),Object(u.jsxs)("div",{className:m,children:[Object(u.jsx)("label",{htmlFor:"street",children:"Street"}),Object(u.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(u.jsx)("p",{children:"Please enter a valid street!"})]}),Object(u.jsxs)("div",{className:b,children:[Object(u.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(u.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(u.jsx)("p",{children:"Please enter a valid postal code (6 characters long)!"})]}),Object(u.jsxs)("div",{className:h,children:[Object(u.jsx)("label",{htmlFor:"city",children:"City"}),Object(u.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(u.jsx)("p",{children:"Please enter a valid city!"})]}),Object(u.jsxs)("div",{className:Q.a.actions,children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{className:Q.a.submit,children:"Confirm"})]})]})},te=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),d=l[0],m=l[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),O=h[0],x=h[1],p=Object(a.useContext)(j),f="Rs.".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,y=function(e){p.removeItem(e)},N=function(e){p.addItem(e)},g=function(){var e=Object(C.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://food-ordering-33fbe-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:m(!1),x(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(u.jsx)("ul",{className:X.a["cart-items"],children:p.items.map((function(e){return Object(u.jsx)(U,{name:e.name,amount:e.amount,price:e.price,onRemove:y.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),A=Object(u.jsxs)("div",{className:X.a.actions,children:[Object(u.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(u.jsx)("button",{className:X.a.button,onClick:function(){i(!0)},children:"Order"})]}),k=Object(u.jsxs)(c.a.Fragment,{children:[M,Object(u.jsxs)("div",{className:X.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:f})]}),r&&Object(u.jsx)(ee,{onConfirm:g,onCancel:e.onClose}),!r&&A]}),F=Object(u.jsx)("p",{children:"Sending order data..."}),I=Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("p",{children:"Successfully sent the order!"}),Object(u.jsx)("div",{className:X.a.actions,children:Object(u.jsx)("button",{className:X.a.button,onClick:e.onClose,children:"Close"})})]});return Object(u.jsxs)(Z,{onClose:e.onClose,children:[!d&&!O&&k,d&&F,!d&&O&&I]})},ne=n(17),ae={items:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(I.a)(Object(I.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ne.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(ne.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ae},re=function(e){var t=Object(a.useReducer)(ce,ae),n=Object(s.a)(t,2),c=n[0],r=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",id:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(u.jsx)(j.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(re,{children:[n&&Object(u.jsx)(te,{onClose:function(){c(!1)}}),Object(u.jsx)(O,{onShowCart:function(){c(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(E,{})})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(ie,{})}),document.getElementById("root")),se()}],[[30,1,2]]]);
//# sourceMappingURL=main.0c224364.chunk.js.map