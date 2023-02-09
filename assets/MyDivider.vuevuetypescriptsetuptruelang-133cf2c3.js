import{d as g,c as C,h as c,F as y,f as d,aa as f,ai as $,g as h,j as m,aj as v,l as p,k as w,ak as z}from"./vue-i18n.runtime.esm-bundler-151cb611.js";import{D as B,a3 as u,M as r,F as s,G as N,H as _,I as D}from"./Icon-c17b099f.js";import{d as M}from"./light-834c6dc7.js";import{_ as P}from"./Tooltip-7915c0e9.js";const R=B("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[u("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[u("no-title",`
 display: flex;
 align-items: center;
 `)]),r("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),s("title-position-left",[r("line",[s("left",{width:"28px"})])]),s("title-position-right",[r("line",[s("right",{width:"28px"})])]),s("dashed",[r("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),s("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),r("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),u("dashed",[r("line",{backgroundColor:"var(--n-color)"})]),s("dashed",[r("line",{borderColor:"var(--n-color)"})]),s("vertical",{backgroundColor:"var(--n-color)"})]),V=Object.assign(Object.assign({},_.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),j=g({name:"Divider",props:V,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:a}=N(e),n=_("Divider","-divider",R,M,e,i),l=C(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:b,textColor:x,fontWeight:k}}=n.value;return{"--n-bezier":t,"--n-color":b,"--n-text-color":x,"--n-font-weight":k}}),o=a?D("divider",void 0,l,e):void 0;return{mergedClsPrefix:i,cssVars:a?void 0:l,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$slots:i,titlePlacement:a,vertical:n,dashed:l,cssVars:o,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:n,[`${t}-divider--no-title`]:!i.default,[`${t}-divider--dashed`]:l,[`${t}-divider--title-position-${a}`]:i.default&&a}],style:o},n?null:c("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!n&&i.default?c(y,null,c("div",{class:`${t}-divider__title`},this.$slots),c("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),S={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},E=$('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M8.99999 10C8.99999 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 10.9814 14.5288 11.8527 13.8003 12.4C13.0718 12.9473 12.5 13 12 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="20;0"></animate></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></animate></circle>',2),F=[E];function O(e,i){return d(),f("svg",S,F)}const T={name:"line-md-question-circle",render:O},q={key:0,class:"text-5 font-bold"},H={key:1,class:"text-4"},Z=g({__name:"MyDivider",props:{title:null,dashed:{type:Boolean},vertical:{type:Boolean}},setup(e){return(i,a)=>{const n=T,l=P,o=j;return e.vertical?(d(),h(o,{key:1,vertical:"",class:"text-8 mx-2!"})):(d(),h(o,{key:0,class:"mb-2! mt-0! px-10%",dashed:e.dashed},{default:m(()=>[e.dashed?(d(),f("span",H,v(e.title),1)):(d(),f("span",q,v(e.title),1)),i.$slots.default?(d(),h(l,{key:2},{trigger:m(()=>[p(i.$slots,"icon",{},()=>[w(n,{class:"text-5"})])]),default:m(()=>[p(i.$slots,"default")]),_:3})):z("",!0)]),_:3},8,["dashed"]))}}});export{Z as _};
