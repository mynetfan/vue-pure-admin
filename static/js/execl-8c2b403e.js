import{u as m,w as $}from"./xlsx-e927f539.js";import{h as k,a3 as l,j as g,v,x as c,l as h,B as u,D as i,u as f}from"./runtime-core.esm-bundler-1f6332ae.js";const C={class:"font-medium"},E={class:"h-[25rem] mt-3"},B=k({name:"Excel"}),K=k({...B,setup(S){const x=(o=10,t="column-",a)=>Array.from({length:o}).map((s,e)=>({...a,key:`${t}${e}`,dataKey:`${t}${e}`,title:`Column ${e}`,width:150})),b=(o,t=200,a="row-")=>Array.from({length:t}).map((s,e)=>o.reduce((n,r,d)=>(n[r.dataKey]=`Row ${e} - Col ${d}`,n),{id:`${a}${e}`,parentId:null})),_=x(10),p=b(_,1e3),y=()=>{const o=p.map(e=>{const n=[];return _.forEach(r=>{n.push(e[r.dataKey])}),n}),t=[];_.forEach(e=>{t.push(e.title)}),o.unshift(t);const a=m.aoa_to_sheet(o),s=m.book_new();m.book_append_sheet(s,a,"数据报表"),$(s,"tableV2.xlsx")};return(o,t)=>{const a=l("el-link"),s=l("el-button"),e=l("el-table-v2"),n=l("el-auto-resizer"),r=l("el-card");return g(),v(r,{shadow:"never"},{header:c(()=>[h("div",C,[u(" 导出Execl（ "),i(a,{href:"https://github.com/SheetJS/sheetjs",target:"_blank",style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:c(()=>[u(" github地址 ")]),_:1}),u(" ） ")])]),default:c(()=>[i(s,{type:"primary",onClick:y},{default:c(()=>[u("导出Excel")]),_:1}),h("div",E,[i(n,null,{default:c(({height:d,width:w})=>[i(e,{columns:f(_),data:f(p),width:w,height:d,fixed:""},null,8,["columns","data","width","height"])]),_:1})])]),_:1})}}});export{K as default};