import{useColumns as x}from"./columns-c0839426.js";import{d as k,r as c,c as t,f as y,e as R,w as r,i as S,g as i,u as e,h as V,aS as v}from"./index-030f2e64.js";const w={class:"w-[600px] m-4"},P=k({__name:"index",setup(T){const l=c(),n=c(),{columns:p,pagination:a,selectValue:o,tableDataEdit:u,onClear:m,onSure:_,removeTag:d,handleSelectionChange:f}=x(l,n);return(z,s)=>{const g=t("pure-table"),b=t("el-button"),C=t("el-select");return y(),R(C,{class:"w-[160px]",ref_key:"selectRef",ref:l,modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=h=>v(o)?o.value=h:null),placeholder:"请选择",clearable:"",multiple:"","collapse-tags":"","collapse-tags-tooltip":"",onRemoveTag:e(d),onClear:e(m)},{empty:r(()=>[S("div",w,[i(g,{ref_key:"tableRef",ref:n,height:"355","row-key":"id","header-cell-style":{background:"#f5f7fa",color:"#303133"},data:e(u).slice((e(a).currentPage-1)*e(a).pageSize,e(a).currentPage*e(a).pageSize),columns:e(p),pagination:e(a),onSelectionChange:e(f)},null,8,["data","columns","pagination","onSelectionChange"]),i(b,{class:"absolute bottom-[17px]",type:"primary",size:"small",text:"",bg:"",onClick:e(_)},{default:r(()=>[V(" 确定 ")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onRemoveTag","onClear"])}}});export{P as _};
