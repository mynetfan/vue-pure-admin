import{d as W,a0 as X,r as k,K as d,c as r,e as Y,w as l,f as Z,i as p,h as u,g as e,u as ee,a1 as o,L as _,a2 as F,F as ue,a3 as ne}from"./index-954f43a9.js";import{m as a}from"./message-6471f63e.js";import{_ as B}from"./form.vue_vue_type_script_setup_true_lang-e4ccbe6b.js";const le={class:"card-header"},te={class:"font-medium"},de=W({name:"Dialog",__name:"index",setup(oe){const D=X();function R(){o({title:"基本使用",contentRenderer:()=>e("p",null,[u("弹框内容-基本使用")])})}function A(){o({title:"可拖拽",draggable:!0,contentRenderer:()=>_("p","弹框内容-可拖拽")})}function h(){o({title:"全屏",fullscreen:!0,contentRenderer:()=>e("p",null,"弹框内容-全屏")})}function b(){o({title:"全屏按钮",fullscreenIcon:!0,contentRenderer:()=>e("p",null,[u("弹框内容-全屏按钮")])})}function v(){o({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-无背景遮罩层")])})}function w(){o({title:"自定义弹出位置",top:"60vh",style:{marginRight:"20px"},contentRenderer:()=>e("p",null,[u("弹框内容-自定义弹出位置")])})}function g(){o({title:"延时2秒打开弹框",openDelay:2e3,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒打开弹框")])})}function x(){o({title:"延时2秒关闭弹框",closeDelay:2e3,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒关闭弹框")])})}function $(){o({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[u("弹框内容-不显示右上角关闭按钮图标")])})}function I(){o({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过键盘ESC关闭")])})}function y(){o({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过点击modal关闭")])})}function S(){o({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[u("弹框内容-隐藏底部取消、确定按钮")])})}function O(){o({title:"自定义头部",showClose:!1,headerRenderer:({close:c,titleId:t,titleClass:i})=>e("div",{class:"flex flex-row justify-between"},[e("h4",{id:t,class:i},[u("自定义头部")]),e(r("el-button"),{type:"danger",onClick:c},{default:()=>[u("关闭")]})]),contentRenderer:()=>e("p",null,[u("弹框内容-自定义头部")])})}function N(){o({title:"自定义底部",footerRenderer:({options:c,index:t})=>e(r("el-button"),{onClick:()=>F(c,t)},{default:()=>[c.title,u("-"),t]}),contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部")])})}function T(){o({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({dialog:{options:c,index:t},button:i})=>{F(c,t)}},{label:"按钮2",text:!0,bg:!0,btnClick:({dialog:{options:c,index:t},button:i})=>{F(c,t)}},{label:"按钮3",size:"large",type:"warning",btnClick:({dialog:{options:c,index:t},button:i})=>{F(c,t)}}],contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部按钮")])})}function z(){o({title:"打开后的回调",open:({options:c,index:t})=>a({options:c,index:t}),contentRenderer:()=>e("p",null,[u("弹框内容-打开后的回调")])})}function M(){o({title:"关闭后的回调",closeCallBack:({options:c,index:t,args:i})=>{let n="";(i==null?void 0:i.command)==="cancel"?n="您点击了取消按钮":(i==null?void 0:i.command)==="sure"?n="您点击了确定按钮":n="您点击了右上角关闭按钮或者空白页",a(n)},contentRenderer:()=>e("p",null,[u("弹框内容-关闭后的回调")])})}function V(){o({title:"嵌套的弹框",contentRenderer:({index:c})=>e(r("el-button"),{onClick:()=>o({title:`第${c+1}个子弹框`,width:"40%",contentRenderer:({index:t})=>e(r("el-button"),{onClick:()=>o({title:`第${t+1}个子弹框`,width:"30%",contentRenderer:()=>e(ue,null,[e(r("el-button"),{round:!0,onClick:()=>ne()},{default:()=>[u("哎呦，你干嘛，赶快关闭所有弹框")]})])})},{default:()=>[u("点击打开第"),t+1,u("个子弹框")]})})},{default:()=>[u("点击打开第"),c+1,u("个子弹框")]})})}function H(){o({width:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>B,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:c,args:t})=>{const{formInline:i}=c.props,n=`姓名：${i.user} 城市：${i.region}`;(t==null?void 0:t.command)==="cancel"?a(`您点击了取消按钮，当前表单数据为 ${n}`):(t==null?void 0:t.command)==="sure"?a(`您点击了确定按钮，当前表单数据为 ${n}`):a(`您点击了右上角关闭按钮或者空白页，当前表单数据为 ${n}`)}})}const s=k({user:"菜虚鲲",region:"浙江"}),K=d(s.value);function j(){o({width:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>_(B,{formInline:s.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${s.value.user} 城市：${s.value.region}`),s.value=d(K)}})}const C=k({user:"菜虚鲲",region:"浙江"}),L=d(C.value);function P(){o({width:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(B,{formInline:C.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${C.value.user} 城市：${C.value.region}`),C.value=d(L)}})}const f=k({user:"菜虚鲲",region:"浙江"}),q=d(f.value);function G(){o({width:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(B,{formInline:f.value},null),closeCallBack:()=>{a(`当前表单数据为 姓名：${f.value.user} 城市：${f.value.region}`),f.value=d(q)}})}function J(){o({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）")]),beforeCancel:(c,{options:t,index:i})=>{}})}function Q(){o({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口）")]),beforeSure:(c,{options:t,index:i})=>{}})}return(c,t)=>{const i=r("el-link"),n=r("el-button"),E=r("el-space"),m=r("el-divider"),U=r("el-card");return Z(),Y(U,{shadow:"never"},{header:l(()=>[p("div",le,[p("span",te,[u(" 二次封装 element-plus 的 "),e(i,{href:"https://element-plus.org/zh-CN/component/dialog.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:l(()=>[u(" Dialog ")]),_:1}),u(" ，采用函数式调用弹框组件（更多操作实例请参考 "),p("span",{class:"cursor-pointer text-primary",onClick:t[0]||(t[0]=ce=>ee(D).push({name:"Dept"}))},"系统管理页面"),u(" ） ")])])]),default:l(()=>[e(E,{wrap:""},{default:l(()=>[e(n,{onClick:R},{default:l(()=>[u(" 基本使用 ")]),_:1}),e(n,{onClick:A},{default:l(()=>[u(" 可拖拽 ")]),_:1}),e(n,{onClick:h},{default:l(()=>[u(" 全屏 ")]),_:1}),e(n,{onClick:b},{default:l(()=>[u(" 全屏按钮 ")]),_:1}),e(n,{onClick:v},{default:l(()=>[u(" 无背景遮罩层 ")]),_:1}),e(n,{onClick:w},{default:l(()=>[u(" 自定义弹出位置 ")]),_:1}),e(n,{onClick:g},{default:l(()=>[u(" 延时2秒打开弹框 ")]),_:1}),e(n,{onClick:x},{default:l(()=>[u(" 延时2秒关闭弹框 ")]),_:1}),e(n,{onClick:$},{default:l(()=>[u(" 不显示右上角关闭按钮图标 ")]),_:1}),e(n,{onClick:I},{default:l(()=>[u(" 禁止通过键盘ESC关闭 ")]),_:1}),e(n,{onClick:y},{default:l(()=>[u(" 禁止通过点击modal关闭 ")]),_:1}),e(n,{onClick:S},{default:l(()=>[u(" 隐藏底部取消、确定按钮 ")]),_:1}),e(n,{onClick:O},{default:l(()=>[u(" 自定义头部 ")]),_:1}),e(n,{onClick:N},{default:l(()=>[u(" 自定义底部 ")]),_:1}),e(n,{onClick:T},{default:l(()=>[u(" 自定义底部按钮 ")]),_:1}),e(n,{onClick:z},{default:l(()=>[u(" 打开后的回调 ")]),_:1}),e(n,{onClick:M},{default:l(()=>[u(" 关闭后的回调 ")]),_:1}),e(n,{onClick:V},{default:l(()=>[u(" 嵌套的弹框 ")]),_:1})]),_:1}),e(m),e(E,{wrap:""},{default:l(()=>[e(n,{onClick:H},{default:l(()=>[u(" 结合Form表单（第一种方式） ")]),_:1}),e(n,{onClick:j},{default:l(()=>[u(" 结合Form表单（第二种方式） ")]),_:1}),e(n,{onClick:P},{default:l(()=>[u(" 结合Form表单（第三种方式） ")]),_:1}),e(n,{onClick:G},{default:l(()=>[u(" 结合Form表单（第四种方式） ")]),_:1})]),_:1}),e(m),e(E,{wrap:""},{default:l(()=>[e(n,{onClick:J},{default:l(()=>[u(" 点击底部取消按钮的回调（会暂停弹框的关闭） ")]),_:1}),e(n,{onClick:Q},{default:l(()=>[u(" 点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口） ")]),_:1})]),_:1})]),_:1})}}});export{de as default};
