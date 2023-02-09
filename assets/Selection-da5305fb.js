import{at as ft,L,D as l,M as a,a3 as X,F as M,H as Z,I as vt,b5 as pt,P as ee}from"./Icon-c17b099f.js";import{i as gt}from"./light-8238fc90.js";import{N as wt}from"./Input-4ef7b5e6.js";import{_ as U}from"./Tag-fa1fa102.js";import{e as mt,f as xt,b as Ct}from"./Tooltip-7915c0e9.js";import{d as oe,r as c,o as ne,n as re,h as r,l as yt,a1 as V,c as W,a0 as q,b as $t,F as Ft}from"./vue-i18n.runtime.esm-bundler-151cb611.js";import{r as N}from"./fade-in-scale-up.cssr-4e8af357.js";import{u as _t}from"./utils-9b01a455.js";function It(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const P="v-hidden",Rt=xt("[v-hidden]",{display:"none!important"}),te=oe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:T}){const b=c(null),u=c(null);function C(){const{value:w}=b,{getCounter:n,getTail:I}=e;let s;if(n!==void 0?s=n():s=u.value,!w||!s)return;s.hasAttribute(P)&&s.removeAttribute(P);const{children:m}=w,f=w.offsetWidth,v=[],p=T.tail?I==null?void 0:I():null;let x=p?p.offsetWidth:0,R=!1;const y=w.children.length-(T.tail?1:0);for(let i=0;i<y-1;++i){if(i<0)continue;const $=m[i];if(R){$.hasAttribute(P)||$.setAttribute(P,"");continue}else $.hasAttribute(P)&&$.removeAttribute(P);const z=$.offsetWidth;if(x+=z,v[i]=z,x>f){const{updateCounter:O}=e;for(let F=i;F>=0;--F){const S=y-1-F;O!==void 0?O(S):s.textContent=`${S}`;const E=s.offsetWidth;if(x-=v[F],x+E<=f||F===0){R=!0,i=F-1,p&&(i===-1?(p.style.maxWidth=`${f-E}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");break}}}}const{onUpdateOverflow:h}=e;R?h!==void 0&&h(!0):(h!==void 0&&h(!1),s.setAttribute(P,""))}const _=ft();return Rt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:mt,ssr:_}),ne(C),{selfRef:b,counterRef:u,sync:C}},render(){const{$slots:e}=this;return re(this.sync),r("div",{class:"v-overflow",ref:"selfRef"},[yt(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),Tt=L([l("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[l("base-loading",`
 color: var(--n-loading-color);
 `),l("base-selection-tags","min-height: var(--n-height);"),a("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),a("state-border",`
 z-index: 1;
 border-color: #0000;
 `),l("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[a("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),l("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[a("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),l("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[a("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),l("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),l("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[l("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[a("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),a("render-label",`
 color: var(--n-text-color);
 `)]),X("disabled",[L("&:hover",[a("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),M("focus",[a("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),M("active",[a("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),l("base-selection-label","background-color: var(--n-color-active);"),l("base-selection-tags","background-color: var(--n-color-active);")])]),M("disabled","cursor: not-allowed;",[a("arrow",`
 color: var(--n-arrow-color-disabled);
 `),l("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[l("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),a("render-label",`
 color: var(--n-text-color-disabled);
 `)]),l("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),l("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),l("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[a("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),a("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>M(`${e}-status`,[a("state-border",`border: var(--n-border-${e});`),X("disabled",[L("&:hover",[a("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),M("active",[a("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),l("base-selection-label",`background-color: var(--n-color-active-${e});`),l("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),M("focus",[a("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),l("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),l("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[L("&:last-child","padding-right: 0;"),l("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[a("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),At=oe({name:"InternalSelection",props:Object.assign(Object.assign({},Z.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const T=c(null),b=c(null),u=c(null),C=c(null),_=c(null),w=c(null),n=c(null),I=c(null),s=c(null),m=c(null),f=c(!1),v=c(!1),p=c(!1),x=Z("InternalSelection","-internal-selection",Tt,gt,e,V(e,"clsPrefix")),R=W(()=>e.clearable&&!e.disabled&&(p.value||e.active)),y=W(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):N(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),h=W(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),i=W(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function $(){var t;const{value:o}=T;if(o){const{value:d}=b;d&&(d.style.width=`${o.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=s.value)===null||t===void 0||t.sync()))}}function z(){const{value:t}=m;t&&(t.style.display="none")}function O(){const{value:t}=m;t&&(t.style.display="inline-block")}q(V(e,"active"),t=>{t||z()}),q(V(e,"pattern"),()=>{e.multiple&&re($)});function F(t){const{onFocus:o}=e;o&&o(t)}function S(t){const{onBlur:o}=e;o&&o(t)}function E(t){const{onDeleteOption:o}=e;o&&o(t)}function Y(t){const{onClear:o}=e;o&&o(t)}function A(t){const{onPatternInput:o}=e;o&&o(t)}function D(t){var o;(!t.relatedTarget||!(!((o=u.value)===null||o===void 0)&&o.contains(t.relatedTarget)))&&F(t)}function g(t){var o;!((o=u.value)===null||o===void 0)&&o.contains(t.relatedTarget)||S(t)}function le(t){Y(t)}function ie(){p.value=!0}function ae(){p.value=!1}function se(t){!e.active||!e.filterable||t.target!==b.value&&t.preventDefault()}function G(t){E(t)}function de(t){if(t.key==="Backspace"&&!B.value&&!e.pattern.length){const{selectedOptions:o}=e;o!=null&&o.length&&G(o[o.length-1])}}const B=c(!1);let H=null;function ce(t){const{value:o}=T;if(o){const d=t.target.value;o.textContent=d,$()}e.ignoreComposition&&B.value?H=t:A(t)}function ue(){B.value=!0}function he(){B.value=!1,e.ignoreComposition&&A(H),H=null}function be(t){var o;v.value=!0,(o=e.onPatternFocus)===null||o===void 0||o.call(e,t)}function fe(t){var o;v.value=!1,(o=e.onPatternBlur)===null||o===void 0||o.call(e,t)}function ve(){var t,o;if(e.filterable)v.value=!1,(t=w.value)===null||t===void 0||t.blur(),(o=b.value)===null||o===void 0||o.blur();else if(e.multiple){const{value:d}=C;d==null||d.blur()}else{const{value:d}=_;d==null||d.blur()}}function pe(){var t,o,d;e.filterable?(v.value=!1,(t=w.value)===null||t===void 0||t.focus()):e.multiple?(o=C.value)===null||o===void 0||o.focus():(d=_.value)===null||d===void 0||d.focus()}function ge(){const{value:t}=b;t&&(O(),t.focus())}function we(){const{value:t}=b;t&&t.blur()}function me(t){const{value:o}=n;o&&o.setTextContent(`+${t}`)}function xe(){const{value:t}=I;return t}function Ce(){return b.value}let j=null;function K(){j!==null&&window.clearTimeout(j)}function ye(){e.disabled||e.active||(K(),j=window.setTimeout(()=>{i.value&&(f.value=!0)},100))}function $e(){K()}function Fe(t){t||(K(),f.value=!1)}q(i,t=>{t||(f.value=!1)}),ne(()=>{$t(()=>{const t=w.value;t&&(t.tabIndex=e.disabled||v.value?-1:0)})}),_t(u,e.onResize);const{inlineThemeDisabled:J}=e,Q=W(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:o},self:{borderRadius:d,color:_e,placeholderColor:Ie,textColor:Re,paddingSingle:Te,paddingMultiple:ze,caretColor:Oe,colorDisabled:Pe,textColorDisabled:Se,placeholderColorDisabled:Ee,colorActive:ke,boxShadowFocus:Me,boxShadowActive:We,boxShadowHover:Ae,border:Be,borderFocus:De,borderHover:Le,borderActive:Ne,arrowColor:He,arrowColorDisabled:je,loadingColor:Ke,colorActiveWarning:Ue,boxShadowFocusWarning:Ve,boxShadowActiveWarning:qe,boxShadowHoverWarning:Ye,borderWarning:Ge,borderFocusWarning:Je,borderHoverWarning:Qe,borderActiveWarning:Xe,colorActiveError:Ze,boxShadowFocusError:et,boxShadowActiveError:tt,boxShadowHoverError:ot,borderError:nt,borderFocusError:rt,borderHoverError:lt,borderActiveError:it,clearColor:at,clearColorHover:st,clearColorPressed:dt,clearSize:ct,arrowSize:ut,[ee("height",t)]:ht,[ee("fontSize",t)]:bt}}=x.value;return{"--n-bezier":o,"--n-border":Be,"--n-border-active":Ne,"--n-border-focus":De,"--n-border-hover":Le,"--n-border-radius":d,"--n-box-shadow-active":We,"--n-box-shadow-focus":Me,"--n-box-shadow-hover":Ae,"--n-caret-color":Oe,"--n-color":_e,"--n-color-active":ke,"--n-color-disabled":Pe,"--n-font-size":bt,"--n-height":ht,"--n-padding-single":Te,"--n-padding-multiple":ze,"--n-placeholder-color":Ie,"--n-placeholder-color-disabled":Ee,"--n-text-color":Re,"--n-text-color-disabled":Se,"--n-arrow-color":He,"--n-arrow-color-disabled":je,"--n-loading-color":Ke,"--n-color-active-warning":Ue,"--n-box-shadow-focus-warning":Ve,"--n-box-shadow-active-warning":qe,"--n-box-shadow-hover-warning":Ye,"--n-border-warning":Ge,"--n-border-focus-warning":Je,"--n-border-hover-warning":Qe,"--n-border-active-warning":Xe,"--n-color-active-error":Ze,"--n-box-shadow-focus-error":et,"--n-box-shadow-active-error":tt,"--n-box-shadow-hover-error":ot,"--n-border-error":nt,"--n-border-focus-error":rt,"--n-border-hover-error":lt,"--n-border-active-error":it,"--n-clear-size":ct,"--n-clear-color":at,"--n-clear-color-hover":st,"--n-clear-color-pressed":dt,"--n-arrow-size":ut}}),k=J?vt("internal-selection",W(()=>e.size[0]),Q,e):void 0;return{mergedTheme:x,mergedClearable:R,patternInputFocused:v,filterablePlaceholder:y,label:h,selected:i,showTagsPanel:f,isComposing:B,counterRef:n,counterWrapperRef:I,patternInputMirrorRef:T,patternInputRef:b,selfRef:u,multipleElRef:C,singleElRef:_,patternInputWrapperRef:w,overflowRef:s,inputTagElRef:m,handleMouseDown:se,handleFocusin:D,handleClear:le,handleMouseEnter:ie,handleMouseLeave:ae,handleDeleteOption:G,handlePatternKeyDown:de,handlePatternInputInput:ce,handlePatternInputBlur:fe,handlePatternInputFocus:be,handleMouseEnterCounter:ye,handleMouseLeaveCounter:$e,handleFocusout:g,handleCompositionEnd:he,handleCompositionStart:ue,onPopoverUpdateShow:Fe,focus:pe,focusInput:ge,blur:ve,blurInput:we,updateCounter:me,getCounter:xe,getTail:Ce,renderLabel:e.renderLabel,cssVars:J?void 0:Q,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{status:e,multiple:T,size:b,disabled:u,filterable:C,maxTagCount:_,bordered:w,clsPrefix:n,onRender:I,renderTag:s,renderLabel:m}=this;I==null||I();const f=_==="responsive",v=typeof _=="number",p=f||v,x=r(pt,null,{default:()=>r(wt,{clsPrefix:n,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var y,h;return(h=(y=this.$slots).arrow)===null||h===void 0?void 0:h.call(y)}})});let R;if(T){const{labelField:y}=this,h=g=>r("div",{class:`${n}-base-selection-tag-wrapper`,key:g.value},s?s({option:g,handleClose:()=>this.handleDeleteOption(g)}):r(U,{size:b,closable:!g.disabled,disabled:u,onClose:()=>this.handleDeleteOption(g),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m(g,!0):N(g[y],g,!0)})),i=()=>(v?this.selectedOptions.slice(0,_):this.selectedOptions).map(h),$=C?r("div",{class:`${n}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:u,value:this.pattern,autofocus:this.autofocus,class:`${n}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${n}-base-selection-input-tag__mirror`},this.pattern)):null,z=f?()=>r("div",{class:`${n}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(U,{size:b,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:u})):void 0;let O;if(v){const g=this.selectedOptions.length-_;g>0&&(O=r("div",{class:`${n}-base-selection-tag-wrapper`,key:"__counter__"},r(U,{size:b,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:u},{default:()=>`+${g}`})))}const F=f?C?r(te,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:z,tail:()=>$}):r(te,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:z}):v?i().concat(O):i(),S=p?()=>r("div",{class:`${n}-base-selection-popover`},f?i():this.selectedOptions.map(h)):void 0,E=p?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,A=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`},r("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)):null,D=C?r("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-tags`},F,f?null:$,x):r("div",{ref:"multipleElRef",class:`${n}-base-selection-tags`,tabindex:u?void 0:0},F,x);R=r(Ft,null,p?r(Ct,Object.assign({},E,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>D,default:S}):D,A)}else if(C){const y=this.pattern||this.isComposing,h=this.active?!y:!this.selected,i=this.active?!1:this.selected;R=r("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-label`},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${n}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:u,disabled:u,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i?r("div",{class:`${n}-base-selection-label__render-label ${n}-base-selection-overlay`,key:"input"},r("div",{class:`${n}-base-selection-overlay__wrapper`},s?s({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):N(this.label,this.selectedOption,!0))):null,h?r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${n}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,x)}else R=r("div",{ref:"singleElRef",class:`${n}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${n}-base-selection-input`,title:It(this.label),key:"input"},r("div",{class:`${n}-base-selection-input__content`},s?s({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):N(this.label,this.selectedOption,!0))):r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)),x);return r("div",{ref:"selfRef",class:[`${n}-base-selection`,this.themeClass,e&&`${n}-base-selection--${e}-status`,{[`${n}-base-selection--active`]:this.active,[`${n}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${n}-base-selection--disabled`]:this.disabled,[`${n}-base-selection--multiple`]:this.multiple,[`${n}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},R,w?r("div",{class:`${n}-base-selection__border`}):null,w?r("div",{class:`${n}-base-selection__state-border`}):null)}});export{At as N};
