import{t as s}from"./data-466bf2e1.js";import{d,r as _,b as o,c as m,k as c,f as e,w as b,u as i}from"./index-a640795e.js";const V=d({__name:"layout",setup(f){const a=_("fixed"),u=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}];return(v,t)=>{const l=o("el-radio-button"),n=o("el-radio-group"),r=o("pure-table");return m(),c("div",null,[e(n,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=p=>a.value=p)},{default:b(()=>[e(l,{label:"fixed"}),e(l,{label:"auto"})]),_:1},8,["modelValue"]),e(r,{data:i(s),columns:u,"table-layout":a.value},null,8,["data","table-layout"])])}}});export{V as _};