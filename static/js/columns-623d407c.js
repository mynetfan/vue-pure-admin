import{r as n,N as y,s as i,f as t,m as r,au as c,b8 as I,b as f,bx as M}from"./index-a640795e.js";import{b as O}from"./data-70a94de4.js";import{m as S}from"./message-02ddfa65.js";import{d as V}from"./edit-pen-3cac8a5e.js";import{d as j}from"./check-18989812.js";function E(){const l=n({}),u=n({}),s=n(-1),v=n(y(O,!0)),p=i(()=>e=>{var a;return(a=l.value[e])==null?void 0:a.value}),o=i(()=>e=>{var a;return(a=u.value[e])==null?void 0:a.editing}),m=i(()=>(e,a=!1)=>["cursor-pointer","ml-2","transition","delay-100",a?["hover:scale-110","hover:text-red-500"]:o.value(e)&&["scale-150","text-red-500"]]),b=[{label:"ID\uFF08\u53EF\u7F16\u8F91\uFF09",prop:"id",cellRenderer:({row:e,index:a})=>t("div",{class:"flex-bc w-full h-[32px]",onMouseenter:()=>s.value=a,onMouseleave:()=>d(a)},[r(t("p",null,[e.id]),[[c,!o.value(a)]]),t(I,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[r(t(f("el-input"),{modelValue:p.value(a),onInput:_=>h(_,a)},null),[[c,o.value(a)]])]}),r(t(f("iconify-icon-offline"),{icon:j,class:m.value(a),onClick:()=>C(a)},null),[[c,o.value(a)]]),r(t(f("iconify-icon-offline"),{icon:V,class:m.value(a,!0),onClick:()=>g(e,a)},null),[[c,s.value===a&&!o.value(a)]])])},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}];function g({id:e},a){l.value[a]=Object.assign({},l.value[a],{value:e}),u.value[a]=Object.assign({},u.value[a],{editing:!0})}function d(e){var a;(a=l.value[e])!=null&&a.value?s.value=e:s.value=-1}function h(e,a){l.value[a].value=e}function C(e){v.value[e].id=l.value[e].value,S(`\u60A8\u7F16\u8F91\u4E86\u7B2C ${e+1} \u884C\uFF0C\u7F16\u8F91\u540E\u6570\u636E\u4E3A\uFF1A${JSON.stringify(v.value[e])}`,{type:"success"}),u.value[e]=Object.assign({},u.value[e],{editing:!1}),M().then(()=>l.value[e].value=null)}return{columns:b,dataList:v}}export{E as useColumns};