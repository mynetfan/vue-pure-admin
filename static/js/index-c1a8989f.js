import{d as F,s as D,X as p,n as A,f as a,u as w,F as R,aI as B,aJ as c,aK as d,a3 as z,al as G,r as N,b as J,c as V,k as K,l as T,e as X,w as E,h as I,z as L,aG as j,_ as O}from"./index-ab9e3548.js";const i="stay",h="hs-on",f="hs-off",_="hs-range",g="both-left-sides",S="both-right-sides";let C="right",b=[],s=[];const P={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}},Q=F({name:"ReSelector",props:P,emits:["selectedVal"],setup(l,{emit:m}){const o=z(),y=l.value,v=D(()=>l.disabled),q=D(()=>{const e=[];let t=0,r=y;for(y!==Math.floor(y)&&r--;t<r;t++)e.push(h);for(;t<l.max.length;t++)e.push(f);return e}),H=e=>{if(!l.disabled){if(s.length===1){b.length<1&&b.push({index:e});let t=b[0].index;if(e>t)for(C="right",B(!1,S,document.querySelector(".hs-select__item"+s[0].index));e>=t;)c(document.querySelector(".hs-select__item"+t),_),t++;else for(C="left",B(!0,S,document.querySelector(".hs-select__item"+s[0].index));e<=t;)c(document.querySelector(".hs-select__item"+t),_),t--}c(document.querySelector("."+f+e),h)}},u=e=>{if(l.disabled)return;const t=document.querySelector("."+f+e);if(t.className.includes(i))return!1;if(d(t,h),s.length===1){const r=b[0].index;if(e>=r)for(let n=0;n<=e;n++)d(document.querySelector(".hs-select__item"+n),_);else for(;e<=r;)d(document.querySelector(".hs-select__item"+e),_),e++}},x=(e,t)=>{if(l.disabled)return;const r=s.length;r<2?(s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g),s[1]&&(C==="right"?c(document.querySelector(".hs-select__item"+s[1].index),S):c(document.querySelector(".hs-select__item"+s[1].index),g)),r===1&&(C==="right"?m("selectedVal",{left:s[0].item,right:s[1].item,whole:s}):m("selectedVal",{left:s[1].item,right:s[0].item,whole:s}))):A(()=>{s.forEach(n=>{d(document.querySelector("."+f+n.index),h,i),d(document.querySelector(".hs-select__item"+n.index),g,S)}),s=[],b=[];for(let n=0;n<=l.max.length;n++){const $=document.querySelector(".hs-select__item"+n);$&&d($,_)}s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g)})},M=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"\u4F20\u5165\u7684\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u662F2";for(e.sort((t,r)=>t-r),c(o.refs["hsdiv"+l.HsKey+e[0]],h,i),c(o.refs["hstd"+l.HsKey+e[0]],g),c(o.refs["hsdiv"+l.HsKey+e[1]],h,i),c(o.refs["hstd"+l.HsKey+e[1]],S);e[1]>=e[0];)c(o.refs["hstd"+l.HsKey+e[0]],_),e[0]++}};return p(()=>{A(()=>{M(l.echo)})}),()=>a(R,null,[a("table",{cellspacing:"0",cellpadding:"0"},[a("tbody",null,[a("tr",null,[l.max.map((e,t)=>a("td",{"data-index":l.HsKey,ref:`hstd${l.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>H(t),onMouseleave:()=>u(t),onClick:()=>x(t,e),style:{cursor:w(v)?"auto":"pointer",textAlign:"center"},key:t},[a("div",{ref:`hsdiv${l.HsKey}${t}`,class:`hs-item ${[w(q)[t]+t]}`},[a("span",null,[e])])]))])])])])}}),U=G(Q),W={class:"card-header"},Y={key:0,class:"mt-3"},Z=F({name:"Selector"}),k=F({...Z,setup(l){const m=N(""),o=N([{title:"\u57FA\u672C\u4F7F\u7528",echo:[],disabled:!1},{title:"\u56DE\u663E\u6A21\u5F0F",echo:[2,7],disabled:!0}]),y=({left:v,right:q})=>{m.value=`${v}-${q}`};return(v,q)=>{const H=J("el-card");return V(),K("div",null,[(V(!0),K(R,null,T(o.value,(u,x)=>(V(),X(H,{class:"box-card",key:x},{header:E(()=>[I("div",W,[I("span",null,L(u.title),1)])]),default:E(()=>[a(w(U),{HsKey:x,echo:u.echo,onSelectedVal:y,disabled:u.disabled},null,8,["HsKey","echo","disabled"]),u.disabled?j("",!0):(V(),K("h4",Y,"\u9009\u4E2D\u8303\u56F4\uFF1A"+L(m.value),1))]),_:2},1024))),128))])}}});const te=O(k,[["__scopeId","data-v-4f97eb42"]]);export{te as default};