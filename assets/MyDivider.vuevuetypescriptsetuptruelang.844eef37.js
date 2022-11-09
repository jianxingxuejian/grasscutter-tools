import{a as z,v as a,d as x,e as $,u as h,g as f,i as w,h as d,bC as N,ae as C,w as p,b as l,bX as S,F as M,C as c,D as _,V as O,M as v,J as m,bg as k,bH as y,I,bt as T}from"./index.343481c4.js";import{_ as j}from"./Tooltip.9bd67c87.js";const E=z("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[a("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),H=Object.assign(Object.assign({},h.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),ee=x({name:"InputGroupLabel",props:H,setup(e){const{mergedBorderedRef:i,mergedClsPrefixRef:o,inlineThemeDisabled:n}=$(e),s=h("Input","-input-group-label",E,N,e,o),r=f(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:g},self:{groupLabelColor:b,borderRadius:B,groupLabelTextColor:R,lineHeight:P,groupLabelBorder:V,[C("fontSize",u)]:D,[C("height",u)]:L}}=s.value;return{"--n-bezier":g,"--n-group-label-color":b,"--n-group-label-border":V,"--n-border-radius":B,"--n-group-label-text-color":R,"--n-font-size":D,"--n-line-height":P,"--n-height":L}}),t=n?w("input-group-label",f(()=>e.size[0]),r,e):void 0;return{mergedClsPrefix:o,mergedBordered:i,cssVars:n?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,i,o;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},(o=(i=this.$slots).default)===null||o===void 0?void 0:o.call(i),this.mergedBordered?d("div",{class:`${n}-input-group-label__border`}):null)}}),q=z("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[p("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[p("no-title",`
 display: flex;
 align-items: center;
 `)]),a("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),l("title-position-left",[a("line",[l("left",{width:"28px"})])]),l("title-position-right",[a("line",[l("right",{width:"28px"})])]),l("dashed",[a("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),l("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),a("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),p("dashed",[a("line",{backgroundColor:"var(--n-color)"})]),l("dashed",[a("line",{borderColor:"var(--n-color)"})]),l("vertical",{backgroundColor:"var(--n-color)"})]),F=Object.assign(Object.assign({},h.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),G=x({name:"Divider",props:F,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=$(e),n=h("Divider","-divider",q,S,e,i),s=f(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:u,textColor:g,fontWeight:b}}=n.value;return{"--n-bezier":t,"--n-color":u,"--n-text-color":g,"--n-font-weight":b}}),r=o?w("divider",void 0,s,e):void 0;return{mergedClsPrefix:i,cssVars:o?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$slots:i,titlePlacement:o,vertical:n,dashed:s,cssVars:r,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:n,[`${t}-divider--no-title`]:!i.default,[`${t}-divider--dashed`]:s,[`${t}-divider--title-position-${o}`]:i.default&&o}],style:r},n?null:d("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!n&&i.default?d(M,null,d("div",{class:`${t}-divider__title`},this.$slots),d("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),J={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},K=O('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M8.99999 10C8.99999 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 10.9814 14.5288 11.8527 13.8003 12.4C13.0718 12.9473 12.5 13 12 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="20;0"></animate></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></animate></circle>',2),W=[K];function X(e,i){return c(),_("svg",J,W)}const Z={name:"line-md-question-circle",render:X},A={key:0,class:"text-5 font-bold"},Q={key:1,class:"text-4"},te=x({__name:"MyDivider",props:{title:null,dashed:{type:Boolean},vertical:{type:Boolean}},setup(e){return(i,o)=>{const n=Z,s=j,r=G;return e.vertical?(c(),v(r,{key:1,vertical:"",class:"text-8 mx-2!"})):(c(),v(r,{key:0,class:"mb-2! mt-0!",dashed:e.dashed},{default:m(()=>[e.dashed?(c(),_("span",Q,k(e.title),1)):(c(),_("span",A,k(e.title),1)),i.$slots.default?(c(),v(s,{key:2},{trigger:m(()=>[y(i.$slots,"icon",{},()=>[I(n,{class:"text-5"})])]),default:m(()=>[y(i.$slots,"default")]),_:3})):T("v-if",!0)]),_:3},8,["dashed"]))}}});export{ee as _,te as a};
