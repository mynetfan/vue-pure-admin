import{d as n,r as o,c as _,e as c,w as a,f as l,i as e}from"./index-030f2e64.js";const d=e("div",{class:"card-header"},[e("span",{class:"font-medium"},"通过iframe引入按钮页面")],-1),m=["src"],h=n({name:"Button",__name:"index",setup(u){const{VITE_PUBLIC_PATH:s}={VITE_PORT:"8848",VITE_HIDE_HOME:"false",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"false",VITE_COMPRESSION:"none",BASE_URL:"/vue-pure-admin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},r=o(`${s}html/button.html`);return(f,i)=>{const t=_("el-card");return l(),c(t,{shadow:"never"},{header:a(()=>[d]),default:a(()=>[e("iframe",{src:r.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,m)]),_:1})}}});export{h as default};
