import{C as _,a as p,b as f,c as v,d as C,e as b}from"./index.esm-26eefadb.js";import{d as F,_ as g,c,j as I,e as s,k as i,m as w,g as t,w as e,h as o,F as x,l as A,f as d,D as E,p as S,q as N,i as D}from"./index-9aa0448f.js";const V=F({name:"ExampleDynamic",components:{[_.name]:_,[p.name]:p,[f.name]:f,[v.name]:v,[C.name]:C},directives:{contextmenu:b},data(){return{extra:[]}},methods:{addItem(u="item"){this.extra.push(u)},removeItem(){this.extra.pop()}}});const k=u=>(S("data-v-c50fdb60"),u=u(),N(),u),j=k(()=>D("h1",null,"动态菜单",-1)),q={class:"wrapper"},G=k(()=>D("code",null,"右键点击此区域",-1)),L=[G];function T(u,a,z,H,J,K){const n=c("v-contextmenu-item"),r=c("v-contextmenu-group"),h=c("v-contextmenu-divider"),B=c("v-contextmenu-submenu"),y=c("v-contextmenu"),$=I("contextmenu");return s(),i("div",null,[j,w((s(),i("div",q,L)),[[$,void 0,"contextmenu"]]),t(y,{ref:"contextmenu"},{default:e(()=>[t(r,{title:"操作"},{default:e(()=>[t(n,{"hide-on-click":!1,onClick:a[0]||(a[0]=l=>u.extra.push("item"))},{default:e(()=>[o(" 添加菜单 ")]),_:1}),t(n,{"hide-on-click":!1,onClick:a[1]||(a[1]=l=>u.extra.push("group"))},{default:e(()=>[o(" 添加菜单组 ")]),_:1}),t(n,{"hide-on-click":!1,onClick:a[2]||(a[2]=l=>u.extra.push("submenu"))},{default:e(()=>[o(" 添加子菜单 ")]),_:1}),t(n,{"hide-on-click":!1,onClick:a[3]||(a[3]=l=>u.extra.pop())},{default:e(()=>[o(" 删除 ")]),_:1})]),_:1}),(s(!0),i(x,null,A(u.extra,(l,m)=>(s(),i(x,{key:m},[t(h),l==="group"?(s(),d(r,{key:0,title:`菜单组 ${m+1}`},{default:e(()=>[t(n,null,{default:e(()=>[o("菜单1")]),_:1}),t(n,null,{default:e(()=>[o("菜单2")]),_:1}),t(n,null,{default:e(()=>[o("菜单3")]),_:1})]),_:2},1032,["title"])):l==="submenu"?(s(),d(B,{key:1,title:`子菜单 ${m+1}`},{default:e(()=>[t(n,null,{default:e(()=>[o("菜单1")]),_:1}),t(n,null,{default:e(()=>[o("菜单2")]),_:1}),t(n,null,{default:e(()=>[o("菜单3")]),_:1})]),_:2},1032,["title"])):(s(),d(n,{key:2},{default:e(()=>[o("菜单 "+E(m+1),1)]),_:2},1024))],64))),128))]),_:1},512)])}const P=g(V,[["render",T],["__scopeId","data-v-c50fdb60"]]);export{P as default};
