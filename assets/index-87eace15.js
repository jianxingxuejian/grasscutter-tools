import{d as A,h as u,r as G,c as b,p as D,i as O,F as Pe,b as ee,a1 as ue,f as M,aa as q,ab as Ae,s as fe,af as pe,k as L,j as B,u as H,t as He,g as F,ag as Me,ah as Le,v as ke,ai as ge}from"./vue-i18n.runtime.esm-bundler-c74d3ddf.js";import{_ as Te}from"./Popselect-17deda48.js";import{C as Z,D as h,F as R,H as U,G as te,ap as $e,I as ne,V as Ee,S as Oe,u as oe,U as Fe,W as re,y as Q,L as C,M as f,a3 as X,a6 as $,T as Ke}from"./Icon-8b27cbfd.js";import{_ as je}from"./plugin-vueexport-helper-c27b6911.js";import{u as Be,b as Ve,r as De}from"./index-c415517a.js";import{r as V}from"./fade-in-scale-up.cssr-9e5ae899.js";import{_ as Ue}from"./Dropdown-54f2d960.js";import{_ as Ge,u as me,a as qe}from"./Tooltip-783903b8.js";import{l as xe,f as Ze,m as We}from"./light-9d6adbcb.js";import{c as Je}from"./utils-39310d15.js";import"./light-183c287f.js";import"./ChevronRight-5f96c938.js";import"./light-364b10bf.js";const Xe=A({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ye=Z("n-layout-sider"),be={type:String,default:"static"},Qe=h("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[h("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),eo={embedded:Boolean,position:be,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},oo=Z("n-layout");function Ce(e){return A({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},U.props),eo),setup(t){const n=G(null),l=G(null),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=te(t),d=U("Layout","-layout",Qe,xe,t,i);function s(g,y){if(t.nativeScrollbar){const{value:w}=n;w&&(y===void 0?w.scrollTo(g):w.scrollTo(g,y))}else{const{value:w}=l;w&&w.scrollTo(g,y)}}D(oo,t);let c=0,_=0;const m=g=>{var y;const w=g.target;c=w.scrollLeft,_=w.scrollTop,(y=t.onScroll)===null||y===void 0||y.call(t,g)};$e(()=>{if(t.nativeScrollbar){const g=n.value;g&&(g.scrollTop=_,g.scrollLeft=c)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},v={scrollTo:s},N=b(()=>{const{common:{cubicBezierEaseInOut:g},self:y}=d.value;return{"--n-bezier":g,"--n-color":t.embedded?y.colorEmbedded:y.color,"--n-text-color":y.textColor}}),I=a?ne("layout",b(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:n,scrollbarInstRef:l,hasSiderStyle:S,mergedTheme:d,handleNativeElScroll:m,cssVars:a?void 0:N,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender},v)},render(){var t;const{mergedClsPrefix:n,hasSider:l}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=l?this.hasSiderStyle:void 0,a=[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return u("div",{class:a,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${n}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):u(Ee,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const to=Ce(!1),no=Ce(!0),ro=h("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),R("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),io={position:be,inverted:Boolean,bordered:{type:Boolean,default:!1}},lo=A({name:"LayoutHeader",props:Object.assign(Object.assign({},U.props),io),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=te(e),l=U("Layout","-layout-header",ro,xe,e,t),i=b(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=l.value,c={"--n-bezier":d};return e.inverted?(c["--n-color"]=s.headerColorInverted,c["--n-text-color"]=s.textColorInverted,c["--n-border-color"]=s.headerBorderColorInverted):(c["--n-color"]=s.headerColor,c["--n-text-color"]=s.textColor,c["--n-border-color"]=s.headerBorderColor),c}),a=n?ne("layout-header",b(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),W=Z("n-menu"),ie=Z("n-submenu"),le=Z("n-menu-item-group"),Y=8;function ae(e){const t=O(W),{props:n,mergedCollapsedRef:l}=t,i=O(ie,null),a=O(le,null),d=b(()=>n.mode==="horizontal"),s=b(()=>d.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=b(()=>{var v;return Math.max((v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize,n.iconSize)}),_=b(()=>{var v;return!d.value&&e.root&&l.value&&(v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize}),m=b(()=>{if(d.value)return;const{collapsedWidth:v,indent:N,rootIndent:I}=n,{root:g,isGroup:y}=e,w=I===void 0?N:I;if(g)return l.value?v/2-c.value/2:w;if(a)return N/2+a.paddingLeftRef.value;if(i)return(y?N/2:N)+i.paddingLeftRef.value}),S=b(()=>{const{collapsedWidth:v,indent:N,rootIndent:I}=n,{value:g}=c,{root:y}=e;return d.value||!y||!l.value?Y:(I===void 0?N:I)+g+Y-(v+g)/2});return{dropdownPlacement:s,activeIconSize:_,maxIconSize:c,paddingLeft:m,iconMarginRight:S,NMenu:t,NSubmenu:i}}const ce={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ye=Object.assign(Object.assign({},ce),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ao=A({name:"MenuOptionGroup",props:ye,setup(e){D(ie,null);const t=ae(e);D(le,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:n,props:l}=O(W);return function(){const{value:i}=n,a=t.paddingLeft.value,{nodeProps:d}=l,s=d==null?void 0:d(e.tmNode.rawNode);return u("div",{class:`${i}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${i}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),V(e.title),e.extra?u(Pe,null," ",V(e.extra)):null),u("div",null,e.tmNodes.map(c=>se(c,l))))}}}),ze=A({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=O(W);return{menuProps:t,style:b(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:b(()=>{const{maxIconSize:n,activeIconSize:l,iconMarginRight:i}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${l}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:l,renderExtra:i,expandIcon:a}}=this,d=n?n(t.rawNode):V(this.icon);return u("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(t.rawNode):V(this.title),this.extra||i?u("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):V(this.extra)):null),this.showArrow?u(Oe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):u(Xe,null)}):null)}}),_e=Object.assign(Object.assign({},ce),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),co=A({name:"Submenu",props:_e,setup(e){const t=ae(e),{NMenu:n,NSubmenu:l}=t,{props:i,mergedCollapsedRef:a,mergedThemeRef:d}=n,s=b(()=>{const{disabled:v}=e;return l!=null&&l.mergedDisabledRef.value||i.disabled?!0:v}),c=G(!1);D(ie,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),D(le,null);function _(){const{onClick:v}=e;v&&v()}function m(){s.value||(a.value||n.toggleExpand(e.internalKey),_())}function S(v){c.value=v}return{menuProps:i,mergedTheme:d,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:oe(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>i.mode==="horizontal"?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!s.value&&(i.mode==="horizontal"||a.value)),handlePopoverShowChange:S,handleClick:m}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:n,renderLabel:l}}=this,i=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:_,maxIconSize:m,activeIconSize:S,title:v,childActive:N,icon:I,handleClick:g,menuProps:{nodeProps:y},dropdownShow:w,iconMarginRight:k,tmNode:T,mergedClsPrefix:J}=this,K=y==null?void 0:y(T.rawNode);return u("div",Object.assign({},K,{class:[`${J}-menu-item`,K==null?void 0:K.class],role:"menuitem"}),u(ze,{tmNode:T,paddingLeft:s,collapsed:c,disabled:_,iconMarginRight:k,maxIconSize:m,activeIconSize:S,title:v,extra:this.extra,showArrow:!d,childActive:N,clsPrefix:J,icon:I,hover:w,onClick:g}))},a=()=>u(Fe,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:u("div",{class:`${t}-submenu-children`,role:"menu"},d.map(c=>se(c,this.menuProps)))}});return this.root?u(Ue,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:l}),{default:()=>u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:a())}):u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),a())}}),Ie=Object.assign(Object.assign({},ce),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),so=A({name:"MenuOption",props:Ie,setup(e){const t=ae(e),{NSubmenu:n,NMenu:l}=t,{props:i,mergedClsPrefixRef:a,mergedCollapsedRef:d}=l,s=n?n.mergedDisabledRef:{value:!1},c=b(()=>s.value||e.disabled);function _(S){const{onClick:v}=e;v&&v(S)}function m(S){c.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),_(S))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:i,dropdownEnabled:oe(()=>e.root&&d.value&&i.mode!=="horizontal"&&!c.value),selected:oe(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:m}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:l,nodeProps:i}}=this,a=i==null?void 0:i(n.rawNode);return u("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),u(Ge,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(n.rawNode):V(this.title),trigger:()=>u(ze,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),uo=A({name:"MenuDivider",setup(){const e=O(W),{mergedClsPrefixRef:t,isHorizontalRef:n}=e;return()=>n.value?null:u("div",{class:`${t.value}-menu-divider`})}}),mo=re(ye),vo=re(Ie),ho=re(_e);function we(e){return e.type==="divider"||e.type==="render"}function fo(e){return e.type==="divider"}function se(e,t){const{rawNode:n}=e,{show:l}=n;if(l===!1)return null;if(we(n))return fo(n)?u(uo,Object.assign({key:e.key},n.props)):null;const{labelField:i}=t,{key:a,level:d,isGroup:s}=e,c=Object.assign(Object.assign({},n),{title:n.title||n[i],extra:n.titleExtra||n.extra,key:a,internalKey:a,level:d,root:d===0,isGroup:s});return e.children?e.isGroup?u(ao,Q(c,mo,{tmNode:e,tmNodes:e.children,key:a})):u(co,Q(c,ho,{key:a,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):u(so,Q(c,vo,{key:a,tmNode:e}))}const ve=[C("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],he=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],po=C([h("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[h("submenu","margin: 0;"),h("menu-item","margin: 0;"),h("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),h("menu-item-content",[R("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),X("disabled",[X("selected, child-active",[C("&:focus-within",he)]),R("selected",[E(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[E(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),E("border-bottom: 2px solid var(--n-border-color-horizontal);",he)]),h("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[h("menu-item-content",[R("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),h("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),h("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),h("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),R("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),R("collapsed",[f("arrow","transform: rotate(0);")]),R("selected",[C("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),X("disabled",[X("selected, child-active",[C("&:focus-within",ve)]),R("selected",[E(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[E(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[E(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),E(null,ve)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),h("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),h("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[h("menu-item-content",`
 height: var(--n-item-height);
 `),h("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ze({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),h("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),h("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function E(e,t){return[R("hover",e,t),C("&:hover",e,t)]}const go=Object.assign(Object.assign({},U.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),xo=A({name:"Menu",props:go,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=te(e),l=U("Menu","-menu",po,We,e,t),i=O(Ye,null),a=b(()=>{var p;const{collapsed:z}=e;if(z!==void 0)return z;if(i){const{collapseModeRef:o,collapsedRef:x}=i;if(o.value==="width")return(p=x.value)!==null&&p!==void 0?p:!1}return!1}),d=b(()=>{const{keyField:p,childrenField:z,disabledField:o}=e;return Je(e.items||e.options,{getIgnored(x){return we(x)},getChildren(x){return x[z]},getDisabled(x){return x[o]},getKey(x){var P;return(P=x[p])!==null&&P!==void 0?P:x.name}})}),s=b(()=>new Set(d.value.treeNodes.map(p=>p.key))),{watchProps:c}=e,_=G(null);c!=null&&c.includes("defaultValue")?ee(()=>{_.value=e.defaultValue}):_.value=e.defaultValue;const m=ue(e,"value"),S=me(m,_),v=G([]),N=()=>{v.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(S.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ee(N):N();const I=qe(e,["expandedNames","expandedKeys"]),g=me(I,v),y=b(()=>d.value.treeNodes),w=b(()=>d.value.getPath(S.value).keyPath);D(W,{props:e,mergedCollapsedRef:a,mergedThemeRef:l,mergedValueRef:S,mergedExpandedKeysRef:g,activePathRef:w,mergedClsPrefixRef:t,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:k,toggleExpand:J});function k(p,z){const{"onUpdate:value":o,onUpdateValue:x,onSelect:P}=e;x&&$(x,p,z),o&&$(o,p,z),P&&$(P,p,z),_.value=p}function T(p){const{"onUpdate:expandedKeys":z,onUpdateExpandedKeys:o,onExpandedNamesChange:x,onOpenNamesChange:P}=e;z&&$(z,p),o&&$(o,p),x&&$(x,p),P&&$(P,p),v.value=p}function J(p){const z=Array.from(g.value),o=z.findIndex(x=>x===p);if(~o)z.splice(o,1);else{if(e.accordion&&s.value.has(p)){const x=z.findIndex(P=>s.value.has(P));x>-1&&z.splice(x,1)}z.push(p)}T(z)}const K=p=>{const z=d.value.getPath(p??S.value,{includeSelf:!1}).keyPath;if(!z.length)return;const o=Array.from(g.value),x=new Set([...o,...z]);e.accordion&&s.value.forEach(P=>{x.has(P)&&!z.includes(P)&&x.delete(P)}),T(Array.from(x))},de=b(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:z},self:o}=l.value,{borderRadius:x,borderColorHorizontal:P,fontSize:Se,itemHeight:Re,dividerColor:Ne}=o,r={"--n-divider-color":Ne,"--n-bezier":z,"--n-font-size":Se,"--n-border-color-horizontal":P,"--n-border-radius":x,"--n-item-height":Re};return p?(r["--n-group-text-color"]=o.groupTextColorInverted,r["--n-color"]=o.colorInverted,r["--n-item-text-color"]=o.itemTextColorInverted,r["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,r["--n-item-text-color-active"]=o.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=o.itemIconColorInverted,r["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=o.arrowColorInverted,r["--n-arrow-color-hover"]=o.arrowColorHoverInverted,r["--n-arrow-color-active"]=o.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=o.itemColorHoverInverted,r["--n-item-color-active"]=o.itemColorActiveInverted,r["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=o.groupTextColor,r["--n-color"]=o.color,r["--n-item-text-color"]=o.itemTextColor,r["--n-item-text-color-hover"]=o.itemTextColorHover,r["--n-item-text-color-active"]=o.itemTextColorActive,r["--n-item-text-color-child-active"]=o.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,r["--n-item-icon-color"]=o.itemIconColor,r["--n-item-icon-color-hover"]=o.itemIconColorHover,r["--n-item-icon-color-active"]=o.itemIconColorActive,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=o.arrowColor,r["--n-arrow-color-hover"]=o.arrowColorHover,r["--n-arrow-color-active"]=o.arrowColorActive,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,r["--n-arrow-color-child-active"]=o.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,r["--n-item-color-hover"]=o.itemColorHover,r["--n-item-color-active"]=o.itemColorActive,r["--n-item-color-active-hover"]=o.itemColorActiveHover,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),r}),j=n?ne("menu",b(()=>e.inverted?"a":"b"),de,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:I,uncontrolledExpanededKeys:v,mergedExpandedKeys:g,uncontrolledValue:_,mergedValue:S,activePath:w,tmNodes:y,mergedTheme:l,mergedCollapsed:a,cssVars:n?void 0:de,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender,showOption:K}},render(){const{mergedClsPrefix:e,mode:t,themeClass:n,onRender:l}=this;return l==null||l(),u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>se(i,this.$props)))}}),bo={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"},Co=Ae("path",{fill:"currentColor",d:"m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"},null,-1),yo=[Co];function zo(e,t){return M(),q("svg",bo,yo)}const _o={name:"ion-language",render:zo},Io={class:"flex-center"},wo=A({__name:"Language",setup(e){const t=[{label:"中文",value:"zh-CN"},{label:"English",value:"en"},{label:"日本語",value:"ja-JP"},{label:"Español",value:"es"}],n=fe(),{updateLocale:l}=n,{locale:i}=pe({useScope:"global"});return ee(()=>i.value=n.locale),(a,d)=>{const s=_o,c=Te;return M(),q("div",Io,[L(c,{value:H(n).locale,"onUpdate:value":[d[0]||(d[0]=_=>H(n).locale=_),H(l)],options:t},{default:B(()=>[L(s,{class:"text-8 outline-unset"})]),_:1},8,["value","onUpdate:value"])])}}}),So={};function Ro(e,t){const n=He("router-view");return M(),F(n,null,{default:B(({Component:l,route:i})=>[L(Ke,{name:"fade-slide",mode:"out-in",appear:""},{default:B(()=>[(M(),F(Me,null,[(M(),F(Le(l),{key:i.fullPath}))],1024))]),_:2},1024)]),_:1})}const No=je(So,[["render",Ro]]),Po=A({__name:"Menu",setup(e){const{tm:t}=pe(),n=b(()=>l(De));function l(c){const _=[];return c.filter(({meta:m})=>ke?!(m!=null&&m.hideInTauri):!(m!=null&&m.hideInWeb)).forEach(m=>{var I,g,y,w;const{name:S}=m,N=t("data.route")[S];if((I=m.meta)!=null&&I.isRoot&&m.children&&m.children.length==1){const k=m.children[0],T={key:k.name,label:N,icon:((g=m.meta)==null?void 0:g.icon)||((y=k.meta)==null?void 0:y.icon)};_.push(T)}else{const k={key:m.name,label:N,icon:(w=m.meta)==null?void 0:w.icon,children:m.children&&l(m.children)};_.push(k)}}),_}const i=Be(),a=Ve(),d=b(()=>a.matched[1].name);function s(c){i.push({name:c})}return(c,_)=>{const m=xo;return M(),F(m,{mode:"horizontal",value:H(d),options:H(n),"collapsed-width":15,"onUpdate:value":s},null,8,["value","options"])}}}),Ao={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ho=ge('<g fill="currentColor" fill-opacity="0"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"></animate></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate></path></g><g fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" stroke-dasharray="56" stroke-dashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;0.3"></animate></path></g>',2),Mo=[Ho];function Lo(e,t){return M(),q("svg",Ao,Mo)}const ko={name:"line-md-moon-twotone",render:Lo},To={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},$o=ge('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="32" r="5"><animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12"></animate></circle><g stroke-dasharray="2" stroke-dashoffset="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></animate></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></animate></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></g></g>',1),Eo=[$o];function Oo(e,t){return M(),q("svg",To,Eo)}const Fo={name:"line-md-sun-rising-loop",render:Oo},Ko=A({__name:"Theme",setup(e){const t=fe(),{updateTheme:n}=t;return(l,i)=>{const a=Fo,d=ko;return M(),q("div",{class:"flex-center",onClick:i[0]||(i[0]=(...s)=>H(n)&&H(n)(...s))},[H(t).theme==="light"?(M(),F(a,{key:0,class:"text-8 outline-unset cursor-pointer"})):(M(),F(d,{key:1,class:"text-8 outline-unset cursor-pointer"}))])}}}),et=A({__name:"index",setup(e){return(t,n)=>{const l=lo,i=no,a=to;return M(),F(a,{class:"min-w-600px h-screen flex-col"},{default:B(()=>[L(l,{class:"flex h-10%"},{default:B(()=>[L(H(Po),{class:"flex-evenly flex-1"}),L(H(wo),{class:"mr-5"}),L(H(Ko),{class:"mr-5"})]),_:1}),L(i,{class:"h-90%"},{default:B(()=>[L(H(No),{class:"h-full w-full"})]),_:1})]),_:1})}}});export{et as default};
