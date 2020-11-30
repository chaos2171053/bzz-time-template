(this["webpackJsonpwebview-react"]=this["webpackJsonpwebview-react"]||[]).push([[0],{190:function(e,t,a){},298:function(e,t,a){},303:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},347:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(0),r=a.n(n),s=a(24),i=a.n(s),l=(a(190),a(359)),j=a(361),o=a(128),d=a(33),b=a(35),u=a(89),m=a(362),O=a(369),h=a(368),x=a(80),f=a(165),p=a(166),g=function(){function e(){Object(f.a)(this,e),this.init()}return Object(p.a)(e,[{key:"init",value:function(){window.acquireVsCodeApi&&(e.vscode=window.acquireVsCodeApi())}},{key:"postMessage",value:function(t){var a=t.command,c=t.data;e.vscode&&e.vscode.postMessage({command:a,data:c})}}]),e}();g.vscode=void 0;var v=g,y=a(363),F=a(364),w=y.a.Panel;var S=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y.a,{defaultActiveKey:["directoryName"],children:Object(c.jsx)(w,{header:"\u76ee\u5f55\u914d\u7f6e",children:Object(c.jsx)(m.a.Item,{label:"\u76ee\u5f55\u540d",name:"directoryName",style:{width:"100%",paddingLeft:"25px",paddingRight:"25px"},rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u76ee\u5f55\u540d"}],children:Object(c.jsx)(F.a,{placeholder:"\u76ee\u5f55\u540d\u6700\u597d\u5bf9\u5e94\u8def\u7531\u540d"})})},"directoryName")})})},N=a(90),D=a.n(N),_=a(360),q=a(366),C=a(367),k=_.a.Option;var I,T=function(e){var t=e.form,a=e.DataSetType,r=Object(n.useState)(!0),s=Object(u.a)(r,2),i=s[0],l=s[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a.Item,{label:"\u521d\u59cb\u5316\u540e\u81ea\u52a8\u67e5\u8be2",name:[a,"autoQuery"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9 autoQuery"}],children:Object(c.jsxs)(q.a.Group,{children:[Object(c.jsx)(q.a,{value:!0,children:"\u662f"}),Object(c.jsx)(q.a,{value:!1,children:"\u5426"})]})}),Object(c.jsx)(m.a.Item,{label:"\u662f\u5426\u5206\u9875",name:[a,"paging"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9 paging"}],children:Object(c.jsxs)(q.a.Group,{onChange:function(e){var a,c=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value;t.setFieldsValue({listDataSet:{pageSize:10}}),l(!!c)},children:[Object(c.jsx)(q.a,{value:!0,children:"\u662f"}),Object(c.jsx)(q.a,{value:!1,children:"\u5426"})]})}),i?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(m.a.Item,{label:"\u6bcf\u9875\u6570\u636e\u6761\u6570",name:[a,"pageSize"],rules:[{required:i,message:"\u8bf7\u8f93\u5165 pageSize"}],children:Object(c.jsx)(C.a,{min:1})})}):null,Object(c.jsx)(m.a.Item,{label:"\u9009\u62e9\u6a21\u5f0f",name:[a,"selection"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9 selection"}],children:Object(c.jsxs)(_.a,{children:[Object(c.jsx)(k,{value:"none",children:"\u65e0"}),Object(c.jsx)(k,{value:"single",children:"\u5355\u9009"}),Object(c.jsx)(k,{value:"multiple",children:"\u591a\u9009"})]})})]})},E=a(85),z=a(133),A=a(365),K=a(370),L=a(371);!function(e){e.auto="auto",e.boolean="boolean",e.number="number",e.currency="currency",e.string="string",e.date="date",e.dateTime="dateTime",e.week="week",e.month="month",e.year="year",e.time="time",e.object="object",e.intl="intl",e.email="email",e.url="url",e.color="color",e.reactNode="reactNode"}(I||(I={}));a(298);var V=_.a.Option,B=Object.values(I),P=(new Date).valueOf();var M=function(e){var t=e.form,a=e.DataSetType,r=e.DataSetFieldName;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(m.a.List,{name:[a,r],children:function(e,s){var i=s.add,l=s.remove;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.b,{direction:"vertical",style:{width:"100%"},children:e.map((function(e,s){var i="".concat(e.name),j="".concat(e.fieldKey,"__").concat(P+s);return Object(c.jsxs)("div",{className:"fields-wrapper",children:[Object(c.jsxs)(A.a,{style:{width:"100%"},children:[Object(n.createElement)(m.a.Item,Object(b.a)(Object(b.a)({},e),{},{key:"".concat(j,"__name"),name:[i,"name"],fieldKey:["".concat(j,"__name"),"name"],label:"\u5b57\u6bb5\u540d name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5b57\u6bb5\u540d"}]}),Object(c.jsx)(F.a,{onChange:function(e){return function(e,c){var n=Object(z.a)(t.getFieldValue(a)[r]);n[c].key=P+e.target.value,t.setFieldsValue(Object(E.a)({},a,Object(E.a)({},r,Object(z.a)(n))))}(e,s)}})),Object(n.createElement)(m.a.Item,Object(b.a)(Object(b.a)({},e),{},{key:"".concat(j,"__type"),name:[i,"type"],fieldKey:["".concat(j,"__type"),"type"],label:"\u5b57\u6bb5\u7c7b\u578b type",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5b57\u6bb5\u7c7b\u578b"}]}),Object(c.jsx)(_.a,{children:B.map((function(e,t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(V,{value:e,children:e},j+e+t)})}))})),Object(n.createElement)(m.a.Item,Object(b.a)(Object(b.a)({},e),{},{key:"".concat(j,"__label"),name:[i,"label"],fieldKey:["".concat(j,"__label"),"label"],label:"\u6807\u7b7e label",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u7b7e"}]}),Object(c.jsx)(F.a,{}))]}),Object(c.jsx)(K.a,{onClick:function(){return function(e,t){t(e)}(s,l)},className:"fields-wrapper__minus"})]},P+j+s)}))}),Object(c.jsx)(m.a.Item,{className:"form-btn__wrapper",children:Object(c.jsx)(x.a,{type:"dashed",onClick:function(){return i()},block:!0,icon:Object(c.jsx)(L.a,{}),className:"form-btn",children:"\u6dfb\u52a0\u5b57\u6bb5"})})]})}})})};a(303);function Q(e){var t=e.DataSetType;return console.log("DataSetType: ",t),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a.Item,{label:"\u67e5\u8be2\u529f\u80fd\u63a5\u53e3\u5730\u5740",name:[t,"transport","read","url"],rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u67e5\u8be2\u63a5\u53e3"}],children:Object(c.jsx)(F.a,{})}),Object(c.jsx)("p",{children:"\u5176\u4ed6\u529f\u80fd\u6682\u672a\u5f00\u653e\u3002"})]})}var G=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"card-wrapper",children:Object(c.jsx)(D.a,{title:"\u57fa\u672c\u5b57\u6bb5",children:Object(c.jsx)(T,Object(b.a)({},e))})}),Object(c.jsx)("div",{className:"card-wrapper",children:Object(c.jsx)(D.a,{title:"fields \u5b57\u6bb5",children:Object(c.jsx)(M,Object(b.a)(Object(b.a)({},e),{},{DataSetFieldName:"fields"}))})}),Object(c.jsx)("div",{className:"card-wrapper",children:Object(c.jsx)(D.a,{title:"queryFields \u5b57\u6bb5",children:Object(c.jsx)(M,Object(b.a)(Object(b.a)({},e),{},{DataSetFieldName:"queryFields"}))})}),Object(c.jsx)("div",{className:"card-wrapper",children:Object(c.jsx)(D.a,{title:"transport \u5b57\u6bb5",children:Object(c.jsx)(Q,Object(b.a)({},e))})})]})},J=(a(342),y.a.Panel);var R=function(e){var t=e.form,a="listDataSet";return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y.a,{defaultActiveKey:[a],children:Object(c.jsx)(J,{header:"\u5217\u8868 DataSet \u914d\u7f6e",children:Object(c.jsx)(h.b,{direction:"vertical",size:"large",className:"space-wrapper",children:Object(c.jsx)(G,{form:t,DataSetType:a})})},a)})})},H=Object(b.a)({},{autoQuery:!0,paging:!0,pageSize:10,selection:"none",fields:[],queryFields:[],transport:{read:{url:""}}}),U={directoryName:"",listDataSet:Object(b.a)({},H)},W=(a(343),new v),X={labelCol:{span:4},wrapperCol:{span:20}},Y={labelCol:{span:0},wrapperCol:{span:24}},Z=function(){var e=m.a.useForm(),t=Object(u.a)(e,1)[0],a=Object(n.useState)(!1),r=Object(u.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){return window.addEventListener("message",(function(e){var t=e.data,a=t.command,c=t.data;switch(a){case"generate":"success"===c.message?O.b.success("\u751f\u6210\u6210\u529f"):(O.b.error("\u751f\u6210\u5931\u8d25"),i(!1))}})),function(){}}),[]),Object(c.jsxs)(m.a,Object(b.a)(Object(b.a)({},X),{},{form:t,name:"basic",initialValues:Object(b.a)({},U),onFinish:function(e){e=function(e){return e.listDataSet&&(e.listDataSet.fields=e.listDataSet.fields.filter((function(e){return e.name})),e.listDataSet.queryFields=e.listDataSet.queryFields.filter((function(e){return e.name}))),e}(e),console.log("Success:",e),s||(i(!0),W.postMessage({command:"generatePageByForm",data:e}))},onFinishFailed:function(e){console.log("Failed:",e)},className:"generate-form",children:[Object(c.jsx)(S,{}),Object(c.jsx)(R,{form:t}),Object(c.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},Y),{},{className:"form-btns",children:Object(c.jsxs)(h.b,{children:[Object(c.jsx)(x.a,{htmlType:"button",onClick:function(){t.resetFields()},children:"\u91cd\u7f6e"}),Object(c.jsx)(x.a,{type:"primary",htmlType:"submit",children:"\u751f\u6210"})]})}))]}))};function $(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(Z,{})})}function ee(){return Object(c.jsx)(d.c,{children:Object(c.jsx)(d.a,{path:"/list",component:$})})}a(347);var te=Object(d.f)((function(e){var t=e.children,a=e.history;return console.log("history: ",a),Object(n.useEffect)((function(){window.addEventListener("message",(function(e){var t=e.data,c=t.command,n=t.data;switch(c){case"route":n.url&&a.push({pathname:"/".concat(n.url),state:n.data})}}))}),[]),Object(c.jsx)(c.Fragment,{children:t})})),ae=l.a.Footer,ce=l.a.Content,ne=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(j.a,{title:"Bzz time Template"}),Object(c.jsx)(o.a,{children:Object(c.jsx)(ce,{children:Object(c.jsx)(te,{children:Object(c.jsx)(ee,{})})})}),Object(c.jsx)(ae,{className:"footer",children:"Copyright \xa9 2020 @chaos2171053@gmail.com All rights reserved. Based on Antd."})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,372)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(ne,{})}),document.getElementById("root")),re()}},[[356,1,2]]]);
//# sourceMappingURL=main.07ee1fdb.chunk.js.map