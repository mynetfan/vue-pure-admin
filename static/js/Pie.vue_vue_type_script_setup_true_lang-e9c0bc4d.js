import{u as o}from"./app-759e5ff4.js";import{z as n,e as i,I as l}from"./index-e24b4c59.js";import{h as p,a as m,r as u,w as h,j as f,k}from"./runtime-core.esm-bundler-1f6332ae.js";const w=p({__name:"Pie",setup(d){const{isDark:t}=n(),r=m(()=>t.value?"dark":"light"),e=u(null),{setOptions:s,resize:c}=i(e,{theme:r});return s({tooltip:{trigger:"item"},legend:{icon:"circle",right:!0},series:[{name:"Github信息",type:"pie",top:"20%",radius:"80%",center:["40%","50%"],color:["#e6a23c","#f56c6c","#53a7ff"],data:[{value:400,name:"watchers"},{value:1600,name:"forks"},{value:7200,name:"star"}]}]},{name:"click",callback:a=>{}},{type:"zrender",name:"click",callback:a=>{}}),h(()=>o().getSidebarStatus,()=>{l(600).then(()=>c())}),(a,_)=>(f(),k("div",{ref_key:"pieChartRef",ref:e,style:{width:"100%",height:"35vh"}},null,512))}});export{w as _};