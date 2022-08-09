(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1nNfz",total:"Cart_total__2g1zN",actions:"Cart_actions__1FC4w","button--alt":"Cart_button--alt__1yTe8",button:"Cart_button__nkU-B"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3_dDS",summary:"CartItem_summary__2ndHv",price:"CartItem_price__2JE0o",amount:"CartItem_amount__3rn7I",actions:"CartItem_actions__2VzVG"}},,,function(e,t,n){e.exports={button:"cartButton_button__1c496",icon:"cartButton_icon__2U_6R",badge:"cartButton_badge__XgkXF",bump:"cartButton_bump__1Bbm7"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2xaPq",description:"MealItem_description__Jpfiu",price:"MealItem_price__3nXU5"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3uFzF",modal:"Modal_modal__3hrac","slide-down":"Modal_slide-down__1z1-j"}},,function(e,t,n){e.exports={header:"Navbar_header__3ymDr","main-image":"Navbar_main-image__3lvS9"}},function(e,t,n){e.exports={form:"Mealitemform_form__Q8ZIG"}},,function(e,t,n){e.exports={summary:"Mealsdata_summary__1_OAz"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__CKx9m","meals-appear":"AvailableMeals_meals-appear__3QLio"}},function(e,t,n){e.exports={card:"Card_card__RFYHp"}},function(e,t,n){e.exports={input:"Input_input__1HSi0"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/bg2image.d535745c.avif",l=n(13),m=n.n(l),u=n(0),d=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(8),b=n.n(j),x=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(x),o="".concat(b.a.button," ").concat(a?b.a.bump:""),l=s.items;Object(r.useEffect)((function(){if(0!==l.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[l]);var m=l.reduce((function(e,t){return e+t.amount}),0);return Object(u.jsxs)("button",{className:o,onClick:e.onClick,children:[Object(u.jsx)("span",{className:b.a.icon,children:Object(u.jsx)(d,{})}),Object(u.jsx)("span",{children:"YourCart"}),Object(u.jsx)("span",{className:b.a.badge,children:m})]})},p=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("header",{className:m.a.header,children:[Object(u.jsx)("h1",{children:"MyMeals"}),Object(u.jsx)(O,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:m.a["main-image"],children:Object(u.jsx)("img",{src:o,alt:"img"})})]})},h=n(16),_=n.n(h),f=function(){return Object(u.jsxs)("section",{className:_.a.summary,children:[Object(u.jsx)("h2",{children:"Now Enjoy Delicious Meals Anywhere Anytime"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our menu and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(17),C=n.n(v),N=n(18),g=n.n(N),y=function(e){return Object(u.jsx)("div",{className:g.a.card,children:e.children})},A=n(10),I=n.n(A),w=n(14),M=n.n(w),k=n(2),F=n(19),z=n.n(F),B=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:z.a.Input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(k.a)({ref:t},e.input))]})})),E=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(B,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{className:M.a.button,children:"+ Add"}),!1===a&&Object(u.jsx)("p",{children:"Please Enter a Valid Amount [1-5]"})]})},R=function(e){var t=Object(r.useContext)(x),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:I.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:I.a.description,children:e.description}),Object(u.jsx)("div",{className:I.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(E,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=[{id:"1",name:"Veg Burger",description:"Healthy and leafy",price:120},{id:"2",name:"Chicken Burger",description:"Roasted Chicken patti",price:160},{id:"3",name:"Pizza",description:"Onion,corn,tomato,capsicum",price:200},{id:"4",name:"Veg Noodles",description:"served with gravy",price:190},{id:"5",name:"Dosa",description:"served with sambhar and chutney",price:90}],H=function(){var e=D.map((function(e){return Object(u.jsx)(R,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(u.jsx)("section",{className:C.a.meals,children:Object(u.jsx)(y,{children:Object(u.jsx)("ul",{children:e})})})},S=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(H,{})]})},V=n(11),P=n.n(V),T=function(e){return Object(u.jsx)("div",{className:P.a.backdrop,onClick:e.onClose})},J=function(e){return Object(u.jsx)("div",{className:P.a.modal,children:Object(u.jsx)("div",{className:P.a.content,children:e.children})})},U=document.getElementById("overlays"),X=function(e){return Object(u.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(u.jsx)(T,{onClose:e.onClose}),U),c.a.createPortal(Object(u.jsx)(J,{children:e.children}),U)]})},$=n(4),q=n.n($),G=n(5),Q=n.n(G),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:Q.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:Q.a.summary,children:[Object(u.jsx)("span",{className:Q.a.price,children:t}),Object(u.jsxs)("span",{className:Q.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:Q.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=function(e){var t=Object(r.useContext)(x),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(Object(k.a)(Object(k.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},s=Object(u.jsx)("ul",{className:q.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}))});return Object(u.jsxs)(X,{onClose:e.onClose,children:[s,Object(u.jsxs)("div",{className:q.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:q.a.actions,children:[Object(u.jsx)("button",{className:q.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(u.jsx)("button",{className:q.a.button,children:"Order"})]})]})},L=n(15),Z={items:[],totalAmount:0},W=function(e,t){if("ADD"===t.type){var n,a=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[a];if(c){var i=Object(k.a)(Object(k.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(L.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:e.totalAmount+t.item.price*t.item.amount}}if("REMOVE"===t.type){var r,s=e.items.findIndex((function(e){return e.id===t.id})),o=e.items[s],l=e.totalAmount-o.price;if(1===o.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(k.a)(Object(k.a)({},o),{},{amount:o.amount-1});(r=Object(L.a)(e.items))[s]=m}return{items:r,totalAmount:l}}return Z},ee=function(e){var t=Object(r.useReducer)(W,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(x.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ee,{children:[n&&Object(u.jsx)(K,{onClose:function(){a(!1)}}),Object(u.jsx)(p,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(S,{})})]})};c.a.render(Object(u.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.09459a8d.chunk.js.map