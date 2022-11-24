import{a,t as n,v as t,d as O,e as G,bx as ce,h as i,bw as M,b as s,w as E,u as L,bq as ue,r as U,A as he,g as F,i as be,a_ as j,b0 as g,c6 as fe,ae as v,b9 as A,b7 as l,by as pe,bd as me,B as H}from"./index.8a04bb1a.js";import{u as ge}from"./Tooltip.ef638d2d.js";const ve=a("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[n(">",[a("input",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),n("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),a("button",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[t("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),n("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[t("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),n("*",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[n(">",[a("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a("base-selection",[a("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),t("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),n("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[n(">",[a("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a("base-selection",[a("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),t("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),we={},$e=O({name:"InputGroup",props:we,setup(e){const{mergedClsPrefixRef:f}=G(e);return ce("-input-group",ve,f),{mergedClsPrefix:f}},render(){const{mergedClsPrefix:e}=this;return i("div",{class:`${e}-input-group`},this.$slots)}}),xe=a("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),a("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[M({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),s("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),E("disabled",[E("icon",[s("rubber-band",[s("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[n("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),s("active",[s("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[n("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),s("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[M()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),s("active",[t("rail","background-color: var(--n-rail-color-active);")]),s("loading",[t("rail",`
 cursor: wait;
 `)]),s("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ye=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let S;const Se=O({name:"Switch",props:ye,setup(e){S===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?S=CSS.supports("width","max(1px)"):S=!1:S=!0);const{mergedClsPrefixRef:f,inlineThemeDisabled:y}=G(e),P=L("Switch","-switch",xe,fe,e,f),d=ue(e),{mergedSizeRef:C,mergedDisabledRef:p}=d,k=U(e.defaultValue),B=he(e,"value"),m=ge(B,k),_=F(()=>m.value===e.checkedValue),w=U(!1),o=U(!1),c=F(()=>{const{railStyle:r}=e;if(!!r)return r({focused:o.value,checked:_.value})});function u(r){const{"onUpdate:value":R,onChange:V,onUpdateValue:z}=e,{nTriggerFormInput:T,nTriggerFormChange:W}=d;R&&H(R,r),z&&H(z,r),V&&H(V,r),k.value=r,T(),W()}function X(){const{nTriggerFormFocus:r}=d;r()}function Y(){const{nTriggerFormBlur:r}=d;r()}function q(){e.loading||p.value||(m.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function J(){o.value=!0,X()}function Q(){o.value=!1,Y(),w.value=!1}function Z(r){e.loading||p.value||r.key===" "&&(m.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),w.value=!1)}function ee(r){e.loading||p.value||r.key===" "&&(r.preventDefault(),w.value=!0)}const I=F(()=>{const{value:r}=C,{self:{opacityDisabled:R,railColor:V,railColorActive:z,buttonBoxShadow:T,buttonColor:W,boxShadowFocus:te,loadingColor:re,textColor:oe,iconColor:ie,[v("buttonHeight",r)]:h,[v("buttonWidth",r)]:ae,[v("buttonWidthPressed",r)]:ne,[v("railHeight",r)]:b,[v("railWidth",r)]:$,[v("railBorderRadius",r)]:se,[v("buttonBorderRadius",r)]:le},common:{cubicBezierEaseInOut:de}}=P.value;let D,K,N;return S?(D=`calc((${b} - ${h}) / 2)`,K=`max(${b}, ${h})`,N=`max(${$}, calc(${$} + ${h} - ${b}))`):(D=A((l(b)-l(h))/2),K=A(Math.max(l(b),l(h))),N=l(b)>l(h)?$:A(l($)+l(h)-l(b))),{"--n-bezier":de,"--n-button-border-radius":le,"--n-button-box-shadow":T,"--n-button-color":W,"--n-button-width":ae,"--n-button-width-pressed":ne,"--n-button-height":h,"--n-height":K,"--n-offset":D,"--n-opacity-disabled":R,"--n-rail-border-radius":se,"--n-rail-color":V,"--n-rail-color-active":z,"--n-rail-height":b,"--n-rail-width":$,"--n-width":N,"--n-box-shadow-focus":te,"--n-loading-color":re,"--n-text-color":oe,"--n-icon-color":ie}}),x=y?be("switch",F(()=>C.value[0]),I,e):void 0;return{handleClick:q,handleBlur:Q,handleFocus:J,handleKeyup:Z,handleKeydown:ee,mergedRailStyle:c,pressed:w,mergedClsPrefix:f,mergedValue:m,checked:_,mergedDisabled:p,cssVars:y?void 0:I,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:f,checked:y,mergedRailStyle:P,onRender:d,$slots:C}=this;d==null||d();const{checked:p,unchecked:k,icon:B,"checked-icon":m,"unchecked-icon":_}=C,w=!(j(B)&&j(m)&&j(_));return i("div",{role:"switch","aria-checked":y,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,y&&`${e}-switch--active`,f&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:P},g(p,o=>g(k,c=>o||c?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),o),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),c)):null)),i("div",{class:`${e}-switch__button`},g(B,o=>g(m,c=>g(_,u=>i(pe,null,{default:()=>this.loading?i(me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||o)?i("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||o):!this.checked&&(u||o)?i("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||o):null})))),g(p,o=>o&&i("div",{key:"checked",class:`${e}-switch__checked`},o)),g(k,o=>o&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}});export{$e as _,Se as a};
