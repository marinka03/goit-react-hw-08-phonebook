"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[909],{2909:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(5218),r="ContactForm_contact__form__OjRMi",s="ContactForm_name__label__ffQdD",c="ContactForm_input__Bl93P",o="ContactForm_add__contact__btn__BovuI",i=t(4420),l=t(208),u=t(3553),m=function(e){return e.contacts},d=(0,u.P1)([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,n){return e.length>0?e.filter((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return null===(e=t.name)||void 0===e?void 0:e.toLowerCase().includes(n.toLowerCase())})):[]})),_=t(184);var h=function(){var e=(0,i.I0)(),n=(0,i.v9)(m).items;return(0,_.jsxs)("form",{className:r,onSubmit:function(t){t.preventDefault();var r=t.target,s=r.name,c=r.number,o={name:s.value,number:c.value};!function(e){if(n.length>=0)return n.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))}(o.name)?e((0,l.uK)(o)):a.ZP.error("".concat(o.name," already is contact")),t.target.reset()},children:[(0,_.jsxs)("label",{className:s,children:["Name",(0,_.jsx)("input",{className:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmone d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:s,children:["Number",(0,_.jsx)("input",{className:c,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:o,type:"submit",children:"Add contact"})]})},f=t(2791),p="ContactList_item__EZYHO",v="ContactItem_delete__btn__FO0gc";var b=function(e){var n=e.name,t=e.number,a=e.id,r=(0,i.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{children:(0,_.jsx)("b",{children:n+": "})}),t,(0,_.jsx)("button",{className:v,type:"reset",onClick:function(){return r((0,l.GK)(a))},children:"Delete"})]})};var j=function(){var e=(0,i.I0)(),n=(0,i.v9)(m),t=n.isLoading,a=n.error,r=(0,i.v9)(d);return(0,f.useEffect)((function(){e((0,l.mk)())}),[e]),(0,_.jsx)("div",{children:(0,_.jsxs)("ul",{children:[t&&(0,_.jsx)("p",{children:"Loading numbers..."}),a&&(0,_.jsx)("p",{children:a}),0===(null===r||void 0===r?void 0:r.length)&&!t&&(0,_.jsx)("p",{children:"There are no contacts found!"}),(null===r||void 0===r?void 0:r.length)>0&&r.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,_.jsx)("li",{className:p,children:(0,_.jsx)(b,{name:t,number:a,id:n})},n)}))]})})},x="ContactPage_wrapper__Csj47",C="ContactPage_title__0m0bS";var g=function(){return(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)(h,{}),(0,_.jsx)("h2",{className:C,children:"Contacts:"}),(0,_.jsx)(j,{})]})}}}]);
//# sourceMappingURL=909.bfdfa618.chunk.js.map