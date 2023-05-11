import{useRole as I}from"./hook-6a8f0753.js";import{R as N,D as E,P as F}from"./refresh-6657266b.js";import{u as c}from"./hooks-3bbab8b0.js";import{M as L}from"./more-filled-c44d3178.js";import{d as O}from"./edit-pen-37b5ced2.js";import{d as j}from"./search-cc37b371.js";import{d as q}from"./menu-a4fe64fb.js";import{d as A}from"./add-circle-line-a03ff6bd.js";import{d as G,r as H,c as a,f as J,k as K,g as o,w as l,u as e,h as i,ab as v,_ as Q}from"./index-030f2e64.js";import"./message-9044e8c7.js";import"./system-edbc3bb7.js";import"./epTheme-388d9e03.js";import"./sortable.esm-679e0872.js";const W={width:24,height:24,body:'<path fill="currentColor" d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107c1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5Zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107c1.069-.535 1.53-1.08 1.53-1.393v-2.171ZM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5Zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.538 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.085 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10Z"/>'},X=W,Y={class:"main"},ee=G({name:"Role",__name:"index",setup(oe){const m=H(),{form:s,loading:u,columns:k,dataList:w,pagination:x,buttonClass:_,onSearch:f,resetForm:V,handleUpdate:C,handleDelete:R,handleSizeChange:S,handleCurrentChange:$,handleSelectionChange:P}=I();return(le,t)=>{const g=a("el-input"),d=a("el-form-item"),b=a("el-option"),z=a("el-select"),r=a("el-button"),D=a("el-form"),M=a("el-popconfirm"),h=a("el-dropdown-item"),U=a("el-dropdown-menu"),Z=a("el-dropdown"),B=a("pure-table");return J(),K("div",Y,[o(D,{ref_key:"formRef",ref:m,inline:!0,model:e(s),class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:l(()=>[o(d,{label:"角色名称：",prop:"name"},{default:l(()=>[o(g,{modelValue:e(s).name,"onUpdate:modelValue":t[0]||(t[0]=n=>e(s).name=n),placeholder:"请输入角色名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),o(d,{label:"角色标识：",prop:"code"},{default:l(()=>[o(g,{modelValue:e(s).code,"onUpdate:modelValue":t[1]||(t[1]=n=>e(s).code=n),placeholder:"请输入角色标识",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(d,{label:"状态：",prop:"status"},{default:l(()=>[o(z,{modelValue:e(s).status,"onUpdate:modelValue":t[2]||(t[2]=n=>e(s).status=n),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:l(()=>[o(b,{label:"已开启",value:"1"}),o(b,{label:"已关闭",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(d,null,{default:l(()=>[o(r,{type:"primary",icon:e(c)(e(j)),loading:e(u),onClick:e(f)},{default:l(()=>[i(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(r,{icon:e(c)(e(N)),onClick:t[3]||(t[3]=n=>e(V)(m.value))},{default:l(()=>[i(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(F),{title:"角色列表",columns:e(k),onRefresh:e(f)},{buttons:l(()=>[o(r,{type:"primary",icon:e(c)(e(A))},{default:l(()=>[i(" 新增角色 ")]),_:1},8,["icon"])]),default:l(({size:n,dynamicColumns:T})=>[o(B,{border:"","align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(u),size:n,data:e(w),columns:T,pagination:e(x),paginationSmall:n==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onSelectionChange:e(P),onPageSizeChange:e(S),onPageCurrentChange:e($)},{operation:l(({row:p})=>[o(r,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(c)(e(O)),onClick:y=>e(C)(p)},{default:l(()=>[i(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(M,{title:"是否确认删除?"},{reference:l(()=>[o(r,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(c)(e(E)),onClick:y=>e(R)(p)},{default:l(()=>[i(" 删除 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1024),o(Z,null,{dropdown:l(()=>[o(U,null,{default:l(()=>[o(h,null,{default:l(()=>[o(r,{class:v(e(_)),link:"",type:"primary",size:n,icon:e(c)(e(q))},{default:l(()=>[i(" 菜单权限 ")]),_:2},1032,["class","size","icon"])]),_:2},1024),o(h,null,{default:l(()=>[o(r,{class:v(e(_)),link:"",type:"primary",size:n,icon:e(c)(e(X))},{default:l(()=>[i(" 数据权限 ")]),_:2},1032,["class","size","icon"])]),_:2},1024)]),_:2},1024)]),default:l(()=>[o(r,{class:"ml-3 mt-[2px]",link:"",type:"primary",size:n,icon:e(c)(e(L)),onClick:y=>e(C)(p)},null,8,["size","icon","onClick"])]),_:2},1024)]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}});const Ce=Q(ee,[["__scopeId","data-v-cfea731b"]]);export{Ce as default};
