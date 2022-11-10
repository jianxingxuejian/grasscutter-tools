import{d as A,h as u,c as G,a as v,b as R,u as D,r as q,e as te,f as Pe,g as b,i as ne,N as Ae,l as fe,p as U,j as O,k as B,F as He,m as Me,n as ee,o as Le,q as re,s as Y,t as C,v as h,w as Q,x as ke,y as Te,z as oe,A as ue,B as $,C as H,D as Z,E as $e,G as pe,H as ge,I as L,J as V,K as M,L as Ee,M as F,T as Oe,O as Fe,P as Ke,Q as je,R as Be,S as Ve,U as De,V as xe}from"./index.55e9ba1b.js";import{_ as Ue,a as qe}from"./Dropdown.ad47b5c0.js";import{_ as Ge}from"./plugin-vueexport-helper.2444895f.js";import{_ as Ze}from"./Tooltip.8e8a4c9b.js";import{c as We}from"./utils.450aea2f.js";import{u as me,a as Je}from"./use-compitable.e4c553da.js";import"./ChevronRight.fdc77cc1.js";const Qe=A({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Xe=G("n-layout-sider"),be={type:String,default:"static"},Ye=v("layout",`
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
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),eo={embedded:Boolean,position:be,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},oo=G("n-layout");function Ce(e){return A({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},D.props),eo),setup(t){const n=q(null),l=q(null),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=te(t),d=D("Layout","-layout",Ye,fe,t,i);function s(p,y){if(t.nativeScrollbar){const{value:S}=n;S&&(y===void 0?S.scrollTo(p):S.scrollTo(p,y))}else{const{value:S}=l;S&&S.scrollTo(p,y)}}U(oo,t);let c=0,I=0;const x=p=>{var y;const S=p.target;c=S.scrollLeft,I=S.scrollTop,(y=t.onScroll)===null||y===void 0||y.call(t,p)};Pe(()=>{if(t.nativeScrollbar){const p=n.value;p&&(p.scrollTop=I,p.scrollLeft=c)}});const _={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},m={scrollTo:s},N=b(()=>{const{common:{cubicBezierEaseInOut:p},self:y}=d.value;return{"--n-bezier":p,"--n-color":t.embedded?y.colorEmbedded:y.color,"--n-text-color":y.textColor}}),w=a?ne("layout",b(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:n,scrollbarInstRef:l,hasSiderStyle:_,mergedTheme:d,handleNativeElScroll:x,cssVars:a?void 0:N,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender},m)},render(){var t;const{mergedClsPrefix:n,hasSider:l}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=l?this.hasSiderStyle:void 0,a=[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return u("div",{class:a,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${n}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):u(Ae,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const to=Ce(!1),no=Ce(!0),ro=v("layout-header",`
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
 `)]),io={position:be,inverted:Boolean,bordered:{type:Boolean,default:!1}},lo=A({name:"LayoutHeader",props:Object.assign(Object.assign({},D.props),io),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=te(e),l=D("Layout","-layout-header",ro,fe,e,t),i=b(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=l.value,c={"--n-bezier":d};return e.inverted?(c["--n-color"]=s.headerColorInverted,c["--n-text-color"]=s.textColorInverted,c["--n-border-color"]=s.headerBorderColorInverted):(c["--n-color"]=s.headerColor,c["--n-text-color"]=s.textColor,c["--n-border-color"]=s.headerBorderColor),c}),a=n?ne("layout-header",b(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),W=G("n-menu"),ie=G("n-submenu"),le=G("n-menu-item-group"),X=8;function ae(e){const t=O(W),{props:n,mergedCollapsedRef:l}=t,i=O(ie,null),a=O(le,null),d=b(()=>n.mode==="horizontal"),s=b(()=>d.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=b(()=>{var m;return Math.max((m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize,n.iconSize)}),I=b(()=>{var m;return!d.value&&e.root&&l.value&&(m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize}),x=b(()=>{if(d.value)return;const{collapsedWidth:m,indent:N,rootIndent:w}=n,{root:p,isGroup:y}=e,S=w===void 0?N:w;if(p)return l.value?m/2-c.value/2:S;if(a)return N/2+a.paddingLeftRef.value;if(i)return(y?N/2:N)+i.paddingLeftRef.value}),_=b(()=>{const{collapsedWidth:m,indent:N,rootIndent:w}=n,{value:p}=c,{root:y}=e;return d.value||!y||!l.value?X:(w===void 0?N:w)+p+X-(m+p)/2});return{dropdownPlacement:s,activeIconSize:I,maxIconSize:c,paddingLeft:x,iconMarginRight:_,NMenu:t,NSubmenu:i}}const ce={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ye=Object.assign(Object.assign({},ce),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ao=A({name:"MenuOptionGroup",props:ye,setup(e){U(ie,null);const t=ae(e);U(le,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:n,props:l}=O(W);return function(){const{value:i}=n,a=t.paddingLeft.value,{nodeProps:d}=l,s=d==null?void 0:d(e.tmNode.rawNode);return u("div",{class:`${i}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${i}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),B(e.title),e.extra?u(He,null," ",B(e.extra)):null),u("div",null,e.tmNodes.map(c=>se(c,l))))}}}),ze=A({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=O(W);return{menuProps:t,style:b(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:b(()=>{const{maxIconSize:n,activeIconSize:l,iconMarginRight:i}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${l}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:l,renderExtra:i,expandIcon:a}}=this,d=n?n(t.rawNode):B(this.icon);return u("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(t.rawNode):B(this.title),this.extra||i?u("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):B(this.extra)):null),this.showArrow?u(Me,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):u(Qe,null)}):null)}}),_e=Object.assign(Object.assign({},ce),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),co=A({name:"Submenu",props:_e,setup(e){const t=ae(e),{NMenu:n,NSubmenu:l}=t,{props:i,mergedCollapsedRef:a,mergedThemeRef:d}=n,s=b(()=>{const{disabled:m}=e;return l!=null&&l.mergedDisabledRef.value||i.disabled?!0:m}),c=q(!1);U(ie,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),U(le,null);function I(){const{onClick:m}=e;m&&m()}function x(){s.value||(a.value||n.toggleExpand(e.internalKey),I())}function _(m){c.value=m}return{menuProps:i,mergedTheme:d,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:ee(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>i.mode==="horizontal"?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!s.value&&(i.mode==="horizontal"||a.value)),handlePopoverShowChange:_,handleClick:x}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:n,renderLabel:l}}=this,i=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:I,maxIconSize:x,activeIconSize:_,title:m,childActive:N,icon:w,handleClick:p,menuProps:{nodeProps:y},dropdownShow:S,iconMarginRight:k,tmNode:T,mergedClsPrefix:J}=this,K=y==null?void 0:y(T.rawNode);return u("div",Object.assign({},K,{class:[`${J}-menu-item`,K==null?void 0:K.class],role:"menuitem"}),u(ze,{tmNode:T,paddingLeft:s,collapsed:c,disabled:I,iconMarginRight:k,maxIconSize:x,activeIconSize:_,title:m,extra:this.extra,showArrow:!d,childActive:N,clsPrefix:J,icon:w,hover:S,onClick:p}))},a=()=>u(Le,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:u("div",{class:`${t}-submenu-children`,role:"menu"},d.map(c=>se(c,this.menuProps)))}});return this.root?u(Ue,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:l}),{default:()=>u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:a())}):u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),a())}}),Ie=Object.assign(Object.assign({},ce),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),so=A({name:"MenuOption",props:Ie,setup(e){const t=ae(e),{NSubmenu:n,NMenu:l}=t,{props:i,mergedClsPrefixRef:a,mergedCollapsedRef:d}=l,s=n?n.mergedDisabledRef:{value:!1},c=b(()=>s.value||e.disabled);function I(_){const{onClick:m}=e;m&&m(_)}function x(_){c.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),I(_))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:i,dropdownEnabled:ee(()=>e.root&&d.value&&i.mode!=="horizontal"&&!c.value),selected:ee(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:x}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:l,nodeProps:i}}=this,a=i==null?void 0:i(n.rawNode);return u("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),u(Ze,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(n.rawNode):B(this.title),trigger:()=>u(ze,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),uo=A({name:"MenuDivider",setup(){const e=O(W),{mergedClsPrefixRef:t,isHorizontalRef:n}=e;return()=>n.value?null:u("div",{class:`${t.value}-menu-divider`})}}),mo=re(ye),vo=re(Ie),ho=re(_e);function we(e){return e.type==="divider"||e.type==="render"}function fo(e){return e.type==="divider"}function se(e,t){const{rawNode:n}=e,{show:l}=n;if(l===!1)return null;if(we(n))return fo(n)?u(uo,Object.assign({key:e.key},n.props)):null;const{labelField:i}=t,{key:a,level:d,isGroup:s}=e,c=Object.assign(Object.assign({},n),{title:n.title||n[i],extra:n.titleExtra||n.extra,key:a,internalKey:a,level:d,root:d===0,isGroup:s});return e.children?e.isGroup?u(ao,Y(c,mo,{tmNode:e,tmNodes:e.children,key:a})):u(co,Y(c,ho,{key:a,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):u(so,Y(c,vo,{key:a,tmNode:e}))}const ve=[C("&::before","background-color: var(--n-item-color-hover);"),h("arrow",`
 color: var(--n-arrow-color-hover);
 `),h("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),h("extra",`
 color: var(--n-item-text-color-hover);
 `)])],he=[h("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],po=C([v("menu",`
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
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[R("selected",[h("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),h("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),h("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Q("disabled",[Q("selected, child-active",[C("&:focus-within",he)]),R("selected",[E(null,[h("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[E(null,[h("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),E("border-bottom: 2px solid var(--n-border-color-horizontal);",he)]),v("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[v("menu-item-content",[R("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),v("menu-item-content-header","opacity: 0;"),h("arrow","opacity: 0;"),h("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
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
 `),R("collapsed",[h("arrow","transform: rotate(0);")]),R("selected",[C("&::before","background-color: var(--n-item-color-active);"),h("arrow","color: var(--n-arrow-color-active);"),h("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),h("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),h("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),h("arrow",`
 color: var(--n-arrow-color-child-active);
 `),h("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Q("disabled",[Q("selected, child-active",[C("&:focus-within",ve)]),R("selected",[E(null,[h("arrow","color: var(--n-arrow-color-active-hover);"),h("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),h("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[E(null,[h("arrow","color: var(--n-arrow-color-child-active-hover);"),h("icon","color: var(--n-item-icon-color-child-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),h("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[E(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),E(null,ve)]),h("icon",`
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
 `),h("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),v("menu-item-content-header",`
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
 `)]),h("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ke({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
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
 `)])]),v("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function E(e,t){return[R("hover",e,t),C("&:hover",e,t)]}const go=Object.assign(Object.assign({},D.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),xo=A({name:"Menu",props:go,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=te(e),l=D("Menu","-menu",po,Te,e,t),i=O(Xe,null),a=b(()=>{var f;const{collapsed:z}=e;if(z!==void 0)return z;if(i){const{collapseModeRef:o,collapsedRef:g}=i;if(o.value==="width")return(f=g.value)!==null&&f!==void 0?f:!1}return!1}),d=b(()=>{const{keyField:f,childrenField:z,disabledField:o}=e;return We(e.items||e.options,{getIgnored(g){return we(g)},getChildren(g){return g[z]},getDisabled(g){return g[o]},getKey(g){var P;return(P=g[f])!==null&&P!==void 0?P:g.name}})}),s=b(()=>new Set(d.value.treeNodes.map(f=>f.key))),{watchProps:c}=e,I=q(null);c!=null&&c.includes("defaultValue")?oe(()=>{I.value=e.defaultValue}):I.value=e.defaultValue;const x=ue(e,"value"),_=me(x,I),m=q([]),N=()=>{m.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(_.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?oe(N):N();const w=Je(e,["expandedNames","expandedKeys"]),p=me(w,m),y=b(()=>d.value.treeNodes),S=b(()=>d.value.getPath(_.value).keyPath);U(W,{props:e,mergedCollapsedRef:a,mergedThemeRef:l,mergedValueRef:_,mergedExpandedKeysRef:p,activePathRef:S,mergedClsPrefixRef:t,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:k,toggleExpand:J});function k(f,z){const{"onUpdate:value":o,onUpdateValue:g,onSelect:P}=e;g&&$(g,f,z),o&&$(o,f,z),P&&$(P,f,z),I.value=f}function T(f){const{"onUpdate:expandedKeys":z,onUpdateExpandedKeys:o,onExpandedNamesChange:g,onOpenNamesChange:P}=e;z&&$(z,f),o&&$(o,f),g&&$(g,f),P&&$(P,f),m.value=f}function J(f){const z=Array.from(p.value),o=z.findIndex(g=>g===f);if(~o)z.splice(o,1);else{if(e.accordion&&s.value.has(f)){const g=z.findIndex(P=>s.value.has(P));g>-1&&z.splice(g,1)}z.push(f)}T(z)}const K=f=>{const z=d.value.getPath(f!=null?f:_.value,{includeSelf:!1}).keyPath;if(!z.length)return;const o=Array.from(p.value),g=new Set([...o,...z]);e.accordion&&s.value.forEach(P=>{g.has(P)&&!z.includes(P)&&g.delete(P)}),T(Array.from(g))},de=b(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:z},self:o}=l.value,{borderRadius:g,borderColorHorizontal:P,fontSize:Se,itemHeight:Re,dividerColor:Ne}=o,r={"--n-divider-color":Ne,"--n-bezier":z,"--n-font-size":Se,"--n-border-color-horizontal":P,"--n-border-radius":g,"--n-item-height":Re};return f?(r["--n-group-text-color"]=o.groupTextColorInverted,r["--n-color"]=o.colorInverted,r["--n-item-text-color"]=o.itemTextColorInverted,r["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,r["--n-item-text-color-active"]=o.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=o.itemIconColorInverted,r["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=o.arrowColorInverted,r["--n-arrow-color-hover"]=o.arrowColorHoverInverted,r["--n-arrow-color-active"]=o.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=o.itemColorHoverInverted,r["--n-item-color-active"]=o.itemColorActiveInverted,r["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=o.groupTextColor,r["--n-color"]=o.color,r["--n-item-text-color"]=o.itemTextColor,r["--n-item-text-color-hover"]=o.itemTextColorHover,r["--n-item-text-color-active"]=o.itemTextColorActive,r["--n-item-text-color-child-active"]=o.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,r["--n-item-icon-color"]=o.itemIconColor,r["--n-item-icon-color-hover"]=o.itemIconColorHover,r["--n-item-icon-color-active"]=o.itemIconColorActive,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=o.arrowColor,r["--n-arrow-color-hover"]=o.arrowColorHover,r["--n-arrow-color-active"]=o.arrowColorActive,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,r["--n-arrow-color-child-active"]=o.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,r["--n-item-color-hover"]=o.itemColorHover,r["--n-item-color-active"]=o.itemColorActive,r["--n-item-color-active-hover"]=o.itemColorActiveHover,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),r}),j=n?ne("menu",b(()=>e.inverted?"a":"b"),de,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:w,uncontrolledExpanededKeys:m,mergedExpandedKeys:p,uncontrolledValue:I,mergedValue:_,activePath:S,tmNodes:y,mergedTheme:l,mergedCollapsed:a,cssVars:n?void 0:de,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender,showOption:K}},render(){const{mergedClsPrefix:e,mode:t,themeClass:n,onRender:l}=this;return l==null||l(),u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>se(i,this.$props)))}}),bo={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"},Co=$e("path",{fill:"currentColor",d:"m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"},null,-1),yo=[Co];function zo(e,t){return H(),Z("svg",bo,yo)}const _o={name:"ion-language",render:zo},Io={class:"flex-center"},wo=A({__name:"Language",setup(e){const t=[{label:"\u4E2D\u6587",value:"zh-CN"},{label:"English",value:"en-US"},{label:"\u65E5\u672C\u8A9E",value:"ja-JP"},{label:"Espa\xF1ol",value:"es"}],n=pe(),{updateLocale:l}=n,{locale:i}=ge({useScope:"global"});return oe(()=>i.value=n.locale),(a,d)=>{const s=_o,c=qe;return H(),Z("div",Io,[L(c,{value:M(n).locale,options:t,"onUpdate:value":M(l)},{default:V(()=>[L(s,{class:"text-8 outline-unset"})]),_:1},8,["value","onUpdate:value"])])}}}),So={};function Ro(e,t){const n=Ee("router-view");return H(),F(n,null,{default:V(({Component:l,route:i})=>[L(Oe,{name:"fade-slide",mode:"out-in",appear:""},{default:V(()=>[(H(),F(Fe,null,[(H(),F(Ke(l),{key:i.fullPath}))],1024))]),_:2},1024)]),_:1})}const No=Ge(So,[["render",Ro]]),Po=A({__name:"Menu",setup(e){const{tm:t}=ge(),n=b(()=>l(De));function l(c){const I=[];return c.filter(x=>{var _;return Ve||!((_=x.meta)!=null&&_.hideInWeb)}).forEach(x=>{var w,p,y,S;const{name:_}=x,N=t("data.route")[_];if(((w=x.meta)==null?void 0:w.isRoot)&&x.children&&x.children.length==1){const k=x.children[0],T={key:k.name,label:N,icon:((p=x.meta)==null?void 0:p.icon)||((y=k.meta)==null?void 0:y.icon)};I.push(T)}else{const k={key:x.name,label:N,icon:(S=x.meta)==null?void 0:S.icon,children:x.children&&l(x.children)};I.push(k)}}),I}const i=je(),a=Be(),d=b(()=>a.matched[1].name);function s(c){i.push({name:c})}return(c,I)=>{const x=xo;return H(),F(x,{mode:"horizontal",value:M(d),options:M(n),"collapsed-width":15,"onUpdate:value":s},null,8,["value","options"])}}}),Ao={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ho=xe('<g fill="currentColor" fill-opacity="0"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"></animate></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate></path></g><g fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" stroke-dasharray="56" stroke-dashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;0.3"></animate></path></g>',2),Mo=[Ho];function Lo(e,t){return H(),Z("svg",Ao,Mo)}const ko={name:"line-md-moon-twotone",render:Lo},To={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},$o=xe('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="32" r="5"><animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12"></animate></circle><g stroke-dasharray="2" stroke-dashoffset="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></animate></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></animate></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></g></g>',1),Eo=[$o];function Oo(e,t){return H(),Z("svg",To,Eo)}const Fo={name:"line-md-sun-rising-loop",render:Oo},Ko=A({__name:"Theme",setup(e){const t=pe(),{updateTheme:n}=t;return(l,i)=>{const a=Fo,d=ko;return H(),Z("div",{class:"flex-center",onClick:i[0]||(i[0]=(...s)=>M(n)&&M(n)(...s))},[M(t).theme==="light"?(H(),F(a,{key:0,class:"text-8 outline-unset cursor-pointer"})):(H(),F(d,{key:1,class:"text-8 outline-unset cursor-pointer"}))])}}}),Zo=A({__name:"index",setup(e){return(t,n)=>{const l=lo,i=no,a=to;return H(),F(a,{class:"min-w-600px h-screen flex-col"},{default:V(()=>[L(l,{class:"flex h-10%"},{default:V(()=>[L(M(Po),{class:"flex-evenly flex-1"}),L(M(wo),{class:"mr-5"}),L(M(Ko),{class:"mr-5"})]),_:1}),L(i,{class:"h-90%"},{default:V(()=>[L(M(No),{class:"h-full w-full"})]),_:1})]),_:1})}}});export{Zo as default};
