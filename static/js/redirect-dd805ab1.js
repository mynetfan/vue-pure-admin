import{d as s,a$ as c,u as p,k as u,f as _}from"./index-030f2e64.js";const l=s({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=c(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(_(),u("div"))}});export{l as default};