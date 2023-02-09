import{D as ne,F as l,M as g,a3 as x,L as z,G as ae,H as I,O as le,I as te,a4 as R,C as se,a6 as ie,P as n}from"./Icon-c17b099f.js";import{N as de,t as he}from"./light-77d17833.js";import{l as _}from"./index-b92a2438.js";import{d as ge,r as be,p as ue,a1 as ve,c as P,h as b}from"./vue-i18n.runtime.esm-bundler-151cb611.js";const Ce={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},ke=ne("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),g("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l("icon, avatar",[l("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[x("disabled",[z("&:hover","background-color: var(--n-color-hover-checkable);",[x("checked","color: var(--n-text-color-hover-checkable);")]),z("&:active","background-color: var(--n-color-pressed-checkable);",[x("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[x("disabled",[z("&:hover","background-color: var(--n-color-checked-hover);"),z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),fe=Object.assign(Object.assign(Object.assign({},I.props),Ce),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),pe=se("n-tag"),Be=ge({name:"Tag",props:fe,setup(c){const i=be(null),{mergedBorderedRef:o,mergedClsPrefixRef:u,inlineThemeDisabled:v,mergedRtlRef:y}=ae(c),k=I("Tag","-tag",ke,he,c,u);ue(pe,{roundRef:ve(c,"round")});function C(e){if(!c.disabled&&c.checkable){const{checked:r,onCheckedChange:h,onUpdateChecked:t,"onUpdate:checked":s}=c;t&&t(!r),s&&s(!r),h&&h(!r)}}function f(e){if(c.triggerClickOnClose||e.stopPropagation(),!c.disabled){const{onClose:r}=c;r&&ie(r,e)}}const p={setTextContent(e){const{value:r}=i;r&&(r.textContent=e)}},m=le("Tag",y,u),a=P(()=>{const{type:e,size:r,color:{color:h,textColor:t}={}}=c,{common:{cubicBezierEaseInOut:s},self:{padding:M,closeMargin:T,closeMarginRtl:w,borderRadius:O,opacityDisabled:S,textColorCheckable:F,textColorHoverCheckable:H,textColorPressedCheckable:j,textColorChecked:E,colorCheckable:N,colorHoverCheckable:U,colorPressedCheckable:D,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:L,closeBorderRadius:W,fontWeightStrong:A,[n("colorBordered",e)]:G,[n("closeSize",r)]:q,[n("closeIconSize",r)]:J,[n("fontSize",r)]:Q,[n("height",r)]:B,[n("color",e)]:X,[n("textColor",e)]:Y,[n("border",e)]:Z,[n("closeIconColor",e)]:$,[n("closeIconColorHover",e)]:ee,[n("closeIconColorPressed",e)]:oe,[n("closeColorHover",e)]:re,[n("closeColorPressed",e)]:ce}}=k.value;return{"--n-font-weight-strong":A,"--n-avatar-size-override":`calc(${B} - 8px)`,"--n-bezier":s,"--n-border-radius":O,"--n-border":Z,"--n-close-icon-size":J,"--n-close-color-pressed":ce,"--n-close-color-hover":re,"--n-close-border-radius":W,"--n-close-icon-color":$,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":$,"--n-close-margin":T,"--n-close-margin-rtl":w,"--n-close-size":q,"--n-color":h||(o.value?G:X),"--n-color-checkable":N,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":L,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":D,"--n-font-size":Q,"--n-height":B,"--n-opacity-disabled":S,"--n-padding":M,"--n-text-color":t||Y,"--n-text-color-checkable":F,"--n-text-color-checked":E,"--n-text-color-hover-checkable":H,"--n-text-color-pressed-checkable":j}}),d=v?te("tag",P(()=>{let e="";const{type:r,size:h,color:{color:t,textColor:s}={}}=c;return e+=r[0],e+=h[0],t&&(e+=`a${_(t)}`),s&&(e+=`b${_(s)}`),o.value&&(e+="c"),e}),a,c):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:u,contentRef:i,mergedBordered:o,handleClick:C,handleCloseClick:f,cssVars:v?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var c,i;const{mergedClsPrefix:o,rtlEnabled:u,closable:v,color:{borderColor:y}={},round:k,onRender:C,$slots:f}=this;C==null||C();const p=R(f.avatar,a=>a&&b("div",{class:`${o}-tag__avatar`},a)),m=R(f.icon,a=>a&&b("div",{class:`${o}-tag__icon`},a));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:u,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:k,[`${o}-tag--avatar`]:p,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:v}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||p,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(c=this.$slots).default)===null||i===void 0?void 0:i.call(c)),!this.checkable&&v?b(de,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:k,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:y}}):null)}});export{Be as _};
