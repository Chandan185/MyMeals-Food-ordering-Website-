(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkoutform_form__1xruT",control:"Checkoutform_control__3ddK8",actions:"Checkoutform_actions__2NkUo",submit:"Checkoutform_submit__1WQTW",invalid:"Checkoutform_invalid__3diWc"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1nNfz",total:"Cart_total__2g1zN",actions:"Cart_actions__1FC4w","button--alt":"Cart_button--alt__1yTe8",button:"Cart_button__nkU-B"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3_dDS",summary:"CartItem_summary__2ndHv",price:"CartItem_price__2JE0o",amount:"CartItem_amount__3rn7I",actions:"CartItem_actions__2VzVG"}},,,function(e,t,n){e.exports={button:"cartButton_button__1c496",icon:"cartButton_icon__2U_6R",badge:"cartButton_badge__XgkXF",bump:"cartButton_bump__1Bbm7"}},,,function(e,t,n){e.exports={header:"Navbar_header__3ymDr","main-image":"Navbar_main-image__3lvS9",brand:"Navbar_brand__29WlI"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__CKx9m","meals-appear":"AvailableMeals_meals-appear__3QLio",Loading:"AvailableMeals_Loading__3a9aA",errorLoading:"AvailableMeals_errorLoading__1Srhw"}},function(e,t,n){e.exports={meal:"MealItem_meal__2xaPq",description:"MealItem_description__Jpfiu",price:"MealItem_price__3nXU5"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3uFzF",modal:"Modal_modal__3hrac","slide-down":"Modal_slide-down__1z1-j"}},,function(e,t,n){e.exports={form:"Mealitemform_form__Q8ZIG"}},,function(e,t,n){e.exports={summary:"Mealsdata_summary__1_OAz"}},function(e,t,n){e.exports={card:"Card_card__RFYHp"}},function(e,t,n){e.exports={input:"Input_input__1HSi0"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n.p+"static/media/bg2image.d535745c.avif",l=n(13),u=n.n(l),j=n(0),d=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(10),b=n.n(m),O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),x=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(O),o="".concat(b.a.button," ").concat(c?b.a.bump:""),l=s.items;Object(i.useEffect)((function(){if(0!==l.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[l]);var u=l.reduce((function(e,t){return e+t.amount}),0);return Object(j.jsxs)("button",{className:o,onClick:e.onClick,children:[Object(j.jsx)("span",{className:b.a.icon,children:Object(j.jsx)(d,{})}),Object(j.jsx)("span",{children:"YourCart"}),Object(j.jsx)("span",{className:b.a.badge,children:u})]})},h=function(e){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsxs)("header",{className:u.a.header,children:[Object(j.jsx)("h1",{children:"MyMeals"}),Object(j.jsx)(x,{onClick:e.onShowCart})]}),Object(j.jsxs)("div",{className:u.a["main-image"],children:[Object(j.jsx)("img",{src:o,alt:"img"}),Object(j.jsx)("div",{className:u.a.brand,children:Object(j.jsx)("h1",{children:"MyMeals Welcomes you on board."})})]})]})},f=n(20),p=n.n(f),_=function(){return Object(j.jsxs)("section",{className:p.a.summary,children:[Object(j.jsx)("h2",{children:"Now Enjoy Delicious Meals Anywhere Anytime"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our menu and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n(12),y=n(14),N=n.n(y),g=n(21),A=n.n(g),k=function(e){return Object(j.jsx)("div",{className:A.a.card,children:e.children})},w=n(15),I=n.n(w),M=n(18),S=n.n(M),F=n(4),R=n(22),E=n.n(R),P=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:E.a.Input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(F.a)({ref:t},e.input))]})})),D=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(j.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(j.jsx)(P,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{className:S.a.button,children:"+ Add"}),!1===c&&Object(j.jsx)("p",{children:"Please Enter a Valid Amount [1-5]"})]})},T=function(e){var t=Object(i.useContext)(O),n="$".concat(e.price);return Object(j.jsxs)("li",{className:I.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:I.a.description,children:e.description}),Object(j.jsx)("div",{className:I.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},z=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),o=s[0],l=s[1],u=Object(i.useState)(),d=Object(r.a)(u,2),m=d[0],b=d[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mymeals-c6eae-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),b(e)}))}),[]),o)return Object(j.jsx)("section",{className:N.a.Loading,children:o&&Object(j.jsx)("p",{children:"Loading..."})});if(m)return Object(j.jsx)("section",{className:N.a.errorLoading,children:Object(j.jsx)("p",{children:"Failed to load! Try again later."})});var O=n.map((function(e){return Object(j.jsx)(T,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(j.jsx)("section",{className:N.a.meals,children:Object(j.jsx)(k,{children:Object(j.jsx)("ul",{children:O})})})},B=function(){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(z,{})]})},L=n(16),H=n.n(L),V=function(e){return Object(j.jsx)("div",{className:H.a.backdrop,onClick:e.onClose})},J=function(e){return Object(j.jsx)("div",{className:H.a.modal,children:Object(j.jsx)("div",{className:H.a.content,children:e.children})})},W=document.getElementById("overlays"),U=function(e){return Object(j.jsxs)(i.Fragment,{children:[a.a.createPortal(Object(j.jsx)(V,{onClose:e.onClose}),W),a.a.createPortal(Object(j.jsx)(J,{children:e.children}),W)]})},Y=n(5),Q=n.n(Y),X=n(7),$=n.n(X),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:$.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:$.a.summary,children:[Object(j.jsx)("span",{className:$.a.price,children:t}),Object(j.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:$.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},G=n(3),K=n.n(G),Z=function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(),c=Object(i.useRef)(),a=Object(i.useRef)(),s=function(e){return""===e.trim()},o=Object(i.useState)({name:!0,street:!0,city:!0,postal:!0}),l=Object(r.a)(o,2),u=l[0],d=l[1],m="".concat(K.a.control," ").concat(u.name?"":K.a.invalid),b="".concat(K.a.control," ").concat(u.street?"":K.a.invalid),O="".concat(K.a.control," ").concat(u.postal?"":K.a.invalid),x="".concat(K.a.control," ").concat(u.city?"":K.a.invalid);return Object(j.jsxs)("form",{className:K.a.form,onSubmit:function(r){r.preventDefault();var i=t.current.value,o=n.current.value,l=c.current.value,u=a.current.value,j=!s(i),m=!s(o),b=!s(u),O=5!==l.trim().length;d({name:i,street:o,postal:l,city:u}),j&&m&&b&&O&&e.onConfirm({name:i,street:o,postal:l,city:u})},children:[Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:t}),!u.name&&Object(j.jsx)("p",{children:"!Please enter a valid name"})]}),Object(j.jsxs)("div",{className:b,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street",ref:n}),!u.street&&Object(j.jsx)("p",{children:"!Please enter a valid street"})]}),Object(j.jsxs)("div",{className:O,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"text",id:"postal",ref:c}),!u.postal&&Object(j.jsx)("p",{children:"!Please enter a valid postal code"})]}),Object(j.jsxs)("div",{className:x,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",ref:a}),!u.city&&Object(j.jsx)("p",{children:"!Please enter a valid city"})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:K.a.submit,onClick:e.OnConfirm,children:"Confirm"})]})]})},ee=function(e){var t=Object(i.useContext)(O),n="$".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,a=Object(i.useState)(!1),o=Object(r.a)(a,2),l=o[0],u=o[1],d=Object(i.useState)(!1),m=Object(r.a)(d,2),b=m[0],x=m[1],h=Object(i.useState)(!1),f=Object(r.a)(h,2),p=f[0],_=f[1],y=function(e){t.addItem(Object(F.a)(Object(F.a)({},e),{},{amount:1}))},N=function(e){t.removeItem(e)},g=function(){var e=Object(C.a)(Object(v.a)().mark((function e(n){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch("https://mymeals-c6eae-default-rtdb.firebaseio.com/myorders.json",{method:"POST",body:JSON.stringify({user:n,ordereditems:t.items})});case 3:x(!1),_(!0),t.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(j.jsx)("ul",{className:Q.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:N.bind(null,e.id),onAdd:y.bind(null,e)},e.id)}))}),k=Object(j.jsxs)("div",{className:Q.a.actions,children:[Object(j.jsx)("button",{className:Q.a["button--alt"],onClick:e.onClose,children:"Close"}),c&&Object(j.jsx)("button",{className:Q.a.button,onClick:function(e){e.preventDefault(),u(!0)},children:"Order"})]}),w=Object(j.jsxs)(s.a.Fragment,{children:[A,Object(j.jsxs)("div",{className:Q.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:n})]}),l&&Object(j.jsx)(Z,{onConfirm:g,onCancel:e.onClose}),!l&&k]}),I=Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("p",{children:"Successfully placed your order."}),Object(j.jsx)("div",{className:Q.a.actions,children:Object(j.jsx)("button",{className:Q.a["button--alt"],onClick:e.onClose,children:"Close"})})]});return Object(j.jsxs)(U,{onClose:e.onClose,children:[!b&&!p&&w,b&&Object(j.jsx)("p",{children:"Placing Your Order..."}),!b&&p&&I]})},te=n(19),ne={items:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var n,c=e.items.findIndex((function(e){return e.id===t.item.id})),a=e.items[c];if(a){var r=Object(F.a)(Object(F.a)({},a),{},{amount:a.amount+t.item.amount});(n=Object(te.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:e.totalAmount+t.item.price*t.item.amount}}if("REMOVE"===t.type){var i,s=e.items.findIndex((function(e){return e.id===t.id})),o=e.items[s],l=e.totalAmount-o.price;if(1===o.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(F.a)(Object(F.a)({},o),{},{amount:o.amount-1});(i=Object(te.a)(e.items))[s]=u}return{items:i,totalAmount:l}}return t.type,ne},ae=function(e){var t=Object(i.useReducer)(ce,ne),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(j.jsx)(O.Provider,{value:s,children:e.children})};var re=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(ae,{children:[n&&Object(j.jsx)(ee,{onClose:function(){c(!1)}}),Object(j.jsx)(h,{onShowCart:function(){c(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(B,{})})]})};a.a.render(Object(j.jsx)(re,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.54e36dd5.chunk.js.map