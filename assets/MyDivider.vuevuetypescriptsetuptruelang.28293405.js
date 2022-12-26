import{a as k,w as h,v as r,b as n,d as g,e as y,u as _,bZ as $,g as w,i as z,h as c,F as B,C as d,D as v,V as N,M as m,J as u,bg as f,by as p,I as V,bh as D}from"./index.dc53d832.js";import{_ as M}from"./Tooltip.1d8b3690.js";const P=k("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[h("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[h("no-title",`
 display: flex;
 align-items: center;
 `)]),r("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),n("title-position-left",[r("line",[n("left",{width:"28px"})])]),n("title-position-right",[r("line",[n("right",{width:"28px"})])]),n("dashed",[r("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),n("vertical",`
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
 `),h("dashed",[r("line",{backgroundColor:"var(--n-color)"})]),n("dashed",[r("line",{borderColor:"var(--n-color)"})]),n("vertical",{backgroundColor:"var(--n-color)"})]),R=Object.assign(Object.assign({},_.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),S=g({name:"Divider",props:R,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:a}=y(e),o=_("Divider","-divider",P,$,e,i),l=w(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:b,textColor:x,fontWeight:C}}=o.value;return{"--n-bezier":t,"--n-color":b,"--n-text-color":x,"--n-font-weight":C}}),s=a?z("divider",void 0,l,e):void 0;return{mergedClsPrefix:i,cssVars:a?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{$slots:i,titlePlacement:a,vertical:o,dashed:l,cssVars:s,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:o,[`${t}-divider--no-title`]:!i.default,[`${t}-divider--dashed`]:l,[`${t}-divider--title-position-${a}`]:i.default&&a}],style:s},o?null:c("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!o&&i.default?c(B,null,c("div",{class:`${t}-divider__title`},this.$slots),c("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),E={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},O=N('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M8.99999 10C8.99999 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 10.9814 14.5288 11.8527 13.8003 12.4C13.0718 12.9473 12.5 13 12 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="20;0"></animate></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></animate></circle>',2),T=[O];function j(e,i){return d(),v("svg",E,T)}const q={name:"line-md-question-circle",render:j},F={key:0,class:"text-5 font-bold"},I={key:1,class:"text-4"},J=g({__name:"MyDivider",props:{title:null,dashed:{type:Boolean},vertical:{type:Boolean}},setup(e){return(i,a)=>{const o=q,l=M,s=S;return e.vertical?(d(),m(s,{key:1,vertical:"",class:"text-8 mx-2!"})):(d(),m(s,{key:0,class:"mb-2! mt-0!",dashed:e.dashed},{default:u(()=>[e.dashed?(d(),v("span",I,f(e.title),1)):(d(),v("span",F,f(e.title),1)),i.$slots.default?(d(),m(l,{key:2},{trigger:u(()=>[p(i.$slots,"icon",{},()=>[V(o,{class:"text-5"})])]),default:u(()=>[p(i.$slots,"default")]),_:3})):D("v-if",!0)]),_:3},8,["dashed"]))}}});export{J as _};
