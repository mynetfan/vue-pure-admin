import{d as u,h as a,e as r,i as s,j as l,g as i}from"./index-d8ef8f83.js";const p=["innerHTML"],B=u({__name:"nestProp",setup(c){const e=[{userInfo:{name:"Test1",age:22},other:[{sex:"\u5973"},{more:{content:'<div><span style="color: red">\u6211\u662F html \u7247\u6BB5</span></div>'}}],role:"\u8BBE\u8BA1\u5E08"},{userInfo:{name:"Test2",age:28},other:[{sex:"\u7537"},{more:{content:'<img width="100" height="100" src="https://xiaoxian521.github.io/pure-admin-table/imgs/11.jpg">'}}],role:"\u540E\u7AEF"},{userInfo:{name:"Test3",age:20},other:[{sex:"\u5973"},{more:{content:'<img width="100" height="100" src="https://xiaoxian521.github.io/pure-admin-table/imgs/1.jpg">'}}],role:"\u7A0B\u5E8F\u5458\u9F13\u52B1\u5E08"},{userInfo:{name:"Test4",age:26},other:[{sex:"\u7537"},{more:{content:'<a href="https://github.com/xiaoxian521" target="_black">\u6211\u662F\u94FE\u63A5\uFF0C\u70B9\u6211\u53BB Follow</a>'}}],role:"\u524D\u7AEF"}],t=[{label:"\u59D3\u540D",prop:"userInfo.name"},{label:"\u6027\u522B",prop:"other[0].sex"},{label:"\u5E74\u9F84",prop:"userInfo.age"},{label:"Html\u7247\u6BB5",slot:"content"},{label:"\u89D2\u8272",prop:"role"}];return(m,h)=>{const o=a("pure-table");return r(),s(o,{data:e,columns:t},{content:l(({row:n})=>[i("span",{innerHTML:n.other[1].more.content},null,8,p)]),_:1})}}});export{B as _};
