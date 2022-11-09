import{a as be,p as J,V as je,b as Fe,c as De,r as ze}from"./Tooltip.78d8c0c4.js";import{N as Be,c as we,h as le,a as Le,m as pe}from"./utils.127699b4.js";import{r as F,W as ee,X as Ue,Y as Ee,Z as He,_ as Ve,$ as X,a0 as qe,a1 as Y,c as oe,a as O,d as T,j as D,e as ye,u as W,a2 as ge,g as k,A as I,i as xe,h as d,q as We,B as j,a3 as fe,p as U,s as Pe,a4 as Se,a5 as ke,n as Z,T as Ge,a6 as Ne,k as Q,a7 as Xe,a8 as Ye,F as Ze,a9 as Je,aa as Qe,ab as eo,ac as oo,t as V,w as he,b as M,v as A,ad as no,ae as L}from"./index.cc829fc2.js";import{C as to}from"./ChevronRight.52a4f7d2.js";import{u as ro}from"./use-compitable.a0183567.js";function Re(e){return o=>{o?e.value=o.$el:e.value=null}}function io(e,o,n){if(!o)return e;const t=F(e.value);let i=null;return ee(e,r=>{i!==null&&window.clearTimeout(i),r===!0?n&&!n.value?t.value=!0:i=window.setTimeout(()=>{t.value=!0},o):t.value=!1}),t}function so(e={},o){const n=Ue({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:i}=e,r=s=>{switch(s.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}t!==void 0&&Object.keys(t).forEach(v=>{if(v!==s.key)return;const m=t[v];if(typeof m=="function")m(s);else{const{stop:g=!1,prevent:p=!1}=m;g&&s.stopPropagation(),p&&s.preventDefault(),m.handler(s)}})},a=s=>{switch(s.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(v=>{if(v!==s.key)return;const m=i[v];if(typeof m=="function")m(s);else{const{stop:g=!1,prevent:p=!1}=m;g&&s.stopPropagation(),p&&s.preventDefault(),m.handler(s)}})},l=()=>{(o===void 0||o.value)&&(Y("keydown",document,r),Y("keyup",document,a)),o!==void 0&&ee(o,s=>{s?(Y("keydown",document,r),Y("keyup",document,a)):(X("keydown",document,r),X("keyup",document,a))})};return Ee()?(He(l),Ve(()=>{(o===void 0||o.value)&&(X("keydown",document,r),X("keyup",document,a))})):l(),qe(n)}const _e=oe("n-popselect"),ao=O("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),ue={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},ve=We(ue),lo=T({name:"PopselectPanel",props:ue,setup(e){const o=D(_e),{mergedClsPrefixRef:n,inlineThemeDisabled:t}=ye(e),i=W("Popselect","-pop-select",ao,ge,o.props,n),r=k(()=>we(e.options,Le("value","children")));function a(p,S){const{onUpdateValue:w,"onUpdate:value":N,onChange:b}=e;w&&j(w,p,S),N&&j(N,p,S),b&&j(b,p,S)}function l(p){v(p.key)}function s(p){le(p,"action")||p.preventDefault()}function v(p){const{value:{getNode:S}}=r;if(e.multiple)if(Array.isArray(e.value)){const w=[],N=[];let b=!0;e.value.forEach(_=>{if(_===p){b=!1;return}const C=S(_);C&&(w.push(C.key),N.push(C.rawNode))}),b&&(w.push(p),N.push(S(p).rawNode)),a(w,N)}else{const w=S(p);w&&a([p],[w.rawNode])}else if(e.value===p&&e.cancelable)a(null,null);else{const w=S(p);w&&a(p,w.rawNode);const{"onUpdate:show":N,onUpdateShow:b}=o.props;N&&j(N,!1),b&&j(b,!1),o.setShow(!1)}fe(()=>{o.syncPosition()})}ee(I(e,"options"),()=>{fe(()=>{o.syncPosition()})});const m=k(()=>{const{self:{menuBoxShadow:p}}=i.value;return{"--n-menu-box-shadow":p}}),g=t?xe("select",void 0,m,o.props):void 0;return{mergedTheme:o.mergedThemeRef,mergedClsPrefix:n,treeMate:r,handleToggle:l,handleMenuMousedown:s,cssVars:t?void 0:m,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d(Be,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{action:()=>{var o,n;return((n=(o=this.$slots).action)===null||n===void 0?void 0:n.call(o))||[]},empty:()=>{var o,n;return((n=(o=this.$slots).empty)===null||n===void 0?void 0:n.call(o))||[]}})}}),uo=Object.assign(Object.assign(Object.assign(Object.assign({},W.props),Se(J,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},J.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),ue),No=T({name:"Popselect",props:uo,inheritAttrs:!1,__popover__:!0,setup(e){const o=W("Popselect","-popselect",void 0,ge,e),n=F(null);function t(){var a;(a=n.value)===null||a===void 0||a.syncPosition()}function i(a){var l;(l=n.value)===null||l===void 0||l.setShow(a)}return U(_e,{props:e,mergedThemeRef:o,syncPosition:t,setShow:i}),Object.assign(Object.assign({},{syncPosition:t,setShow:i}),{popoverInstRef:n,mergedTheme:o})},render(){const{mergedTheme:e}=this,o={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(n,t,i,r,a)=>{const{$attrs:l}=this;return d(lo,Object.assign({},l,{class:[l.class,n],style:[l.style,i]},Pe(this.$props,ve),{ref:Re(t),onMouseenter:pe([r,l.onMouseenter]),onMouseleave:pe([a,l.onMouseleave])}),{action:()=>{var s,v;return(v=(s=this.$slots).action)===null||v===void 0?void 0:v.call(s)},empty:()=>{var s,v;return(v=(s=this.$slots).empty)===null||v===void 0?void 0:v.call(s)}})}};return d(be,Object.assign({},Se(this.$props,ve),o,{internalDeactivateImmediately:!0}),{trigger:()=>{var n,t;return(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n)}})}}),Oe=T({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ce=oe("n-dropdown-menu"),ne=oe("n-dropdown"),me=oe("n-dropdown-option");function de(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function co(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function po(e){return e.type==="render"}const Ce=T({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=D(ne),{hoverKeyRef:n,keyboardKeyRef:t,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:r,activeKeyPathRef:a,animatedRef:l,mergedShowRef:s,renderLabelRef:v,renderIconRef:m,labelFieldRef:g,childrenFieldRef:p,renderOptionRef:S,nodePropsRef:w,menuPropsRef:N}=o,b=D(me,null),_=D(ce),C=D(ke),te=k(()=>e.tmNode.rawNode),q=k(()=>{const{value:c}=p;return de(e.tmNode.rawNode,c)}),re=k(()=>{const{disabled:c}=e.tmNode;return c}),ie=k(()=>{if(!q.value)return!1;const{key:c,disabled:P}=e.tmNode;if(P)return!1;const{value:K}=n,{value:z}=t,{value:ae}=i,{value:B}=r;return K!==null?B.includes(c):z!==null?B.includes(c)&&B[B.length-1]!==c:ae!==null?B.includes(c):!1}),se=k(()=>t.value===null&&!l.value),G=io(ie,300,se),E=k(()=>!!(b!=null&&b.enteringSubmenuRef.value)),H=F(!1);U(me,{enteringSubmenuRef:H});function $(){H.value=!0}function u(){H.value=!1}function x(){const{parentKey:c,tmNode:P}=e;P.disabled||!s.value||(i.value=c,t.value=null,n.value=P.key)}function h(){const{tmNode:c}=e;c.disabled||!s.value||n.value!==c.key&&x()}function f(c){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:P}=c;P&&!le({target:P},"dropdownOption")&&!le({target:P},"scrollbarRail")&&(n.value=null)}function R(){const{value:c}=q,{tmNode:P}=e;!s.value||!c&&!P.disabled&&(o.doSelect(P.key,P.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:v,renderIcon:m,siblingHasIcon:_.showIconRef,siblingHasSubmenu:_.hasSubmenuRef,menuProps:N,popoverBody:C,animated:l,mergedShowSubmenu:k(()=>G.value&&!E.value),rawNode:te,hasSubmenu:q,pending:Z(()=>{const{value:c}=r,{key:P}=e.tmNode;return c.includes(P)}),childActive:Z(()=>{const{value:c}=a,{key:P}=e.tmNode,K=c.findIndex(z=>P===z);return K===-1?!1:K<c.length-1}),active:Z(()=>{const{value:c}=a,{key:P}=e.tmNode,K=c.findIndex(z=>P===z);return K===-1?!1:K===c.length-1}),mergedDisabled:re,renderOption:S,nodeProps:w,handleClick:R,handleMouseMove:h,handleMouseEnter:x,handleMouseLeave:f,handleSubmenuBeforeEnter:$,handleSubmenuAfterEnter:u}},render(){var e,o;const{animated:n,rawNode:t,mergedShowSubmenu:i,clsPrefix:r,siblingHasIcon:a,siblingHasSubmenu:l,renderLabel:s,renderIcon:v,renderOption:m,nodeProps:g,props:p,scrollable:S}=this;let w=null;if(i){const C=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);w=d(Ke,Object.assign({},C,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const N={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=g==null?void 0:g(t),_=d("div",Object.assign({class:[`${r}-dropdown-option`,b==null?void 0:b.class],"data-dropdown-option":!0},b),d("div",Ne(N,p),[d("div",{class:[`${r}-dropdown-option-body__prefix`,a&&`${r}-dropdown-option-body__prefix--show-icon`]},[v?v(t):Q(t.icon)]),d("div",{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},s?s(t):Q((o=t[this.labelField])!==null&&o!==void 0?o:t.title)),d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,l&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Xe,null,{default:()=>d(to,null)}):null)]),this.hasSubmenu?d(je,null,{default:()=>[d(Fe,null,{default:()=>d("div",{class:`${r}-dropdown-offset-container`},d(De,{show:this.mergedShowSubmenu,placement:this.placement,to:S&&this.popoverBody||void 0,teleportDisabled:!S},{default:()=>d("div",{class:`${r}-dropdown-menu-wrapper`},n?d(Ge,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return m?m({node:_,option:t}):_}}),fo=T({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=D(ce),{renderLabelRef:n,labelFieldRef:t,nodePropsRef:i,renderOptionRef:r}=D(ne);return{labelField:t,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:i,renderOption:r}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:t,nodeProps:i,renderLabel:r,renderOption:a}=this,{rawNode:l}=this.tmNode,s=d("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(l)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,t&&`${o}-dropdown-option-body__prefix--show-icon`]},Q(l.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},r?r(l):Q((e=l.title)!==null&&e!==void 0?e:l[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:l}):s}}),ho=T({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:t}=e;return d(Ze,null,d(fo,{clsPrefix:n,tmNode:e,key:e.key}),t==null?void 0:t.map(i=>{const{rawNode:r}=i;return r.show===!1?null:Ie(r)?d(Oe,{clsPrefix:n,key:i.key}):i.isGroup?(Ye("dropdown","`group` node is not allowed to be put in `group` node."),null):d(Ce,{clsPrefix:n,tmNode:i,parentKey:o,key:i.key})}))}}),vo=T({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),Ke=T({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:n}=D(ne);U(ce,{showIconRef:k(()=>{const i=o.value;return e.tmNodes.some(r=>{var a;if(r.isGroup)return(a=r.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>i?i(s):s.icon);const{rawNode:l}=r;return i?i(l):l.icon})}),hasSubmenuRef:k(()=>{const{value:i}=n;return e.tmNodes.some(r=>{var a;if(r.isGroup)return(a=r.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>de(s,i));const{rawNode:l}=r;return de(l,i)})})});const t=F(null);return U(Qe,null),U(eo,null),U(ke,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,t=this.tmNodes.map(i=>{const{rawNode:r}=i;return r.show===!1?null:po(r)?d(vo,{tmNode:i,key:i.key}):Ie(r)?d(Oe,{clsPrefix:o,key:i.key}):co(r)?d(ho,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):d(Ce,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:r.props,scrollable:n})});return d("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?d(Je,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?ze({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),mo=O("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[oo(),O("dropdown-option",`
 position: relative;
 `,[V("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[V("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),O("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[V("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),he("disabled",[M("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),V("&::before","background-color: var(--n-option-color-hover);")]),M("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),V("&::before","background-color: var(--n-option-color-active);")]),M("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),M("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),M("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[M("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[M("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),O("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[M("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),O("icon",`
 font-size: var(--n-option-icon-size);
 `)]),O("dropdown-menu","pointer-events: all;")]),O("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),O("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),O("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),V(">",[O("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),he("scrollable",`
 padding: var(--n-padding);
 `),M("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),bo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},wo=Object.keys(J),yo=Object.assign(Object.assign(Object.assign({},J),bo),W.props),Ro=T({name:"Dropdown",inheritAttrs:!1,props:yo,setup(e){const o=F(!1),n=ro(I(e,"show"),o),t=k(()=>{const{keyField:u,childrenField:x}=e;return we(e.options,{getKey(h){return h[u]},getDisabled(h){return h.disabled===!0},getIgnored(h){return h.type==="divider"||h.type==="render"},getChildren(h){return h[x]}})}),i=k(()=>t.value.treeNodes),r=F(null),a=F(null),l=F(null),s=k(()=>{var u,x,h;return(h=(x=(u=r.value)!==null&&u!==void 0?u:a.value)!==null&&x!==void 0?x:l.value)!==null&&h!==void 0?h:null}),v=k(()=>t.value.getPath(s.value).keyPath),m=k(()=>t.value.getPath(e.value).keyPath),g=Z(()=>e.keyboard&&n.value);so({keydown:{ArrowUp:{prevent:!0,handler:re},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:ie},ArrowLeft:{prevent:!0,handler:te},Enter:{prevent:!0,handler:se},Escape:C}},g);const{mergedClsPrefixRef:p,inlineThemeDisabled:S}=ye(e),w=W("Dropdown","-dropdown",mo,no,e,p);U(ne,{labelFieldRef:I(e,"labelField"),childrenFieldRef:I(e,"childrenField"),renderLabelRef:I(e,"renderLabel"),renderIconRef:I(e,"renderIcon"),hoverKeyRef:r,keyboardKeyRef:a,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:v,activeKeyPathRef:m,animatedRef:I(e,"animated"),mergedShowRef:n,nodePropsRef:I(e,"nodeProps"),renderOptionRef:I(e,"renderOption"),menuPropsRef:I(e,"menuProps"),doSelect:N,doUpdateShow:b}),ee(n,u=>{!e.animated&&!u&&_()});function N(u,x){const{onSelect:h}=e;h&&j(h,u,x)}function b(u){const{"onUpdate:show":x,onUpdateShow:h}=e;x&&j(x,u),h&&j(h,u),o.value=u}function _(){r.value=null,a.value=null,l.value=null}function C(){b(!1)}function te(){E("left")}function q(){E("right")}function re(){E("up")}function ie(){E("down")}function se(){const u=G();(u==null?void 0:u.isLeaf)&&n.value&&(N(u.key,u.rawNode),b(!1))}function G(){var u;const{value:x}=t,{value:h}=s;return!x||h===null?null:(u=x.getNode(h))!==null&&u!==void 0?u:null}function E(u){const{value:x}=s,{value:{getFirstAvailableNode:h}}=t;let f=null;if(x===null){const R=h();R!==null&&(f=R.key)}else{const R=G();if(R){let c;switch(u){case"down":c=R.getNext();break;case"up":c=R.getPrev();break;case"right":c=R.getChild();break;case"left":c=R.getParent();break}c&&(f=c.key)}}f!==null&&(r.value=null,a.value=f)}const H=k(()=>{const{size:u,inverted:x}=e,{common:{cubicBezierEaseInOut:h},self:f}=w.value,{padding:R,dividerColor:c,borderRadius:P,optionOpacityDisabled:K,[L("optionIconSuffixWidth",u)]:z,[L("optionSuffixWidth",u)]:ae,[L("optionIconPrefixWidth",u)]:B,[L("optionPrefixWidth",u)]:Me,[L("fontSize",u)]:Te,[L("optionHeight",u)]:$e,[L("optionIconSize",u)]:Ae}=f,y={"--n-bezier":h,"--n-font-size":Te,"--n-padding":R,"--n-border-radius":P,"--n-option-height":$e,"--n-option-prefix-width":Me,"--n-option-icon-prefix-width":B,"--n-option-suffix-width":ae,"--n-option-icon-suffix-width":z,"--n-option-icon-size":Ae,"--n-divider-color":c,"--n-option-opacity-disabled":K};return x?(y["--n-color"]=f.colorInverted,y["--n-option-color-hover"]=f.optionColorHoverInverted,y["--n-option-color-active"]=f.optionColorActiveInverted,y["--n-option-text-color"]=f.optionTextColorInverted,y["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,y["--n-option-text-color-active"]=f.optionTextColorActiveInverted,y["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,y["--n-prefix-color"]=f.prefixColorInverted,y["--n-suffix-color"]=f.suffixColorInverted,y["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(y["--n-color"]=f.color,y["--n-option-color-hover"]=f.optionColorHover,y["--n-option-color-active"]=f.optionColorActive,y["--n-option-text-color"]=f.optionTextColor,y["--n-option-text-color-hover"]=f.optionTextColorHover,y["--n-option-text-color-active"]=f.optionTextColorActive,y["--n-option-text-color-child-active"]=f.optionTextColorChildActive,y["--n-prefix-color"]=f.prefixColor,y["--n-suffix-color"]=f.suffixColor,y["--n-group-header-text-color"]=f.groupHeaderTextColor),y}),$=S?xe("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),H,e):void 0;return{mergedClsPrefix:p,mergedTheme:w,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{!e.animated||_()},doUpdateShow:b,cssVars:S?void 0:H,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const e=(t,i,r,a,l)=>{var s;const{mergedClsPrefix:v,menuProps:m}=this;(s=this.onRender)===null||s===void 0||s.call(this);const g=(m==null?void 0:m(void 0,this.tmNodes.map(S=>S.rawNode)))||{},p={ref:Re(i),class:[t,`${v}-dropdown`,this.themeClass],clsPrefix:v,tmNodes:this.tmNodes,style:[r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:l};return d(Ke,Ne(this.$attrs,p,g))},{mergedTheme:o}=this,n={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(be,Object.assign({},Pe(this.$props,wo),n),{trigger:()=>{var t,i;return(i=(t=this.$slots).default)===null||i===void 0?void 0:i.call(t)}})}});export{Ro as _,No as a};
