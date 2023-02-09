import{V as ke,c as Pe,d as Ne,r as Re,u as Ke,b as Ie,p as ce}from"./Tooltip-7915c0e9.js";import{r as A,a0 as ie,a as _e,a5 as Ce,a2 as Oe,$ as $e,d as j,h as s,i as T,c as m,p as H,a6 as pe,F as De,a1 as K}from"./vue-i18n.runtime.esm-bundler-151cb611.js";import{a9 as ze,aa as W,a8 as V,C as de,ai as fe,u as X,T as Fe,a0 as Ae,w as Te,aW as je,ag as Be,ah as Me,D as P,L as E,a3 as le,F as I,M as $,G as Le,H as he,a6 as te,I as Ee,y as He,P as F}from"./Icon-c17b099f.js";import{r as J,f as Ue}from"./fade-in-scale-up.cssr-4e8af357.js";import{C as qe}from"./ChevronRight-d8e0aaad.js";import{h as se,c as Ge}from"./utils-9b01a455.js";import{d as We}from"./light-325a326d.js";function Ve(e){return o=>{o?e.value=o.$el:e.value=null}}function Xe(e,o,i){if(!o)return e;const r=A(e.value);let t=null;return ie(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Je(e={},o){const i=_e({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,n=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==d.key)return;const v=r[y];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},c=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(y=>{if(y!==d.key)return;const v=t[y];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},f=()=>{(o===void 0||o.value)&&(V("keydown",document,n),V("keyup",document,c)),o!==void 0&&ie(o,d=>{d?(V("keydown",document,n),V("keyup",document,c)):(W("keydown",document,n),W("keyup",document,c))})};return ze()?(Ce(f),Oe(()=>{(o===void 0||o.value)&&(W("keydown",document,n),W("keyup",document,c))})):f(),$e(i)}const ve=j({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ae=de("n-dropdown-menu"),Q=de("n-dropdown"),ue=de("n-dropdown-option");function re(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Qe(e){return e.type==="group"}function be(e){return e.type==="divider"}function Ye(e){return e.type==="render"}const we=j({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=T(Q),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:c,animatedRef:f,mergedShowRef:d,renderLabelRef:y,renderIconRef:v,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:N,nodePropsRef:_,menuPropsRef:B}=o,x=T(ue,null),C=T(ae),U=T(fe),Y=m(()=>e.tmNode.rawNode),q=m(()=>{const{value:l}=S;return re(e.tmNode.rawNode,l)}),Z=m(()=>{const{disabled:l}=e.tmNode;return l}),ee=m(()=>{if(!q.value)return!1;const{key:l,disabled:w}=e.tmNode;if(w)return!1;const{value:R}=i,{value:D}=r,{value:ne}=t,{value:z}=n;return R!==null?z.includes(l):D!==null?z.includes(l)&&z[z.length-1]!==l:ne!==null?z.includes(l):!1}),oe=m(()=>r.value===null&&!f.value),G=Xe(ee,300,oe),M=m(()=>!!(x!=null&&x.enteringSubmenuRef.value)),L=A(!1);H(ue,{enteringSubmenuRef:L});function O(){L.value=!0}function a(){L.value=!1}function b(){const{parentKey:l,tmNode:w}=e;w.disabled||d.value&&(t.value=l,r.value=null,i.value=w.key)}function p(){const{tmNode:l}=e;l.disabled||d.value&&i.value!==l.key&&b()}function u(l){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:w}=l;w&&!se({target:w},"dropdownOption")&&!se({target:w},"scrollbarRail")&&(i.value=null)}function k(){const{value:l}=q,{tmNode:w}=e;d.value&&!l&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:y,renderIcon:v,siblingHasIcon:C.showIconRef,siblingHasSubmenu:C.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:m(()=>G.value&&!M.value),rawNode:Y,hasSubmenu:q,pending:X(()=>{const{value:l}=n,{key:w}=e.tmNode;return l.includes(w)}),childActive:X(()=>{const{value:l}=c,{key:w}=e.tmNode,R=l.findIndex(D=>w===D);return R===-1?!1:R<l.length-1}),active:X(()=>{const{value:l}=c,{key:w}=e.tmNode,R=l.findIndex(D=>w===D);return R===-1?!1:R===l.length-1}),mergedDisabled:Z,renderOption:N,nodeProps:_,handleClick:k,handleMouseMove:p,handleMouseEnter:b,handleMouseLeave:u,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:a}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:c,siblingHasSubmenu:f,renderLabel:d,renderIcon:y,renderOption:v,nodeProps:g,props:S,scrollable:N}=this;let _=null;if(t){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);_=s(me,Object.assign({},U,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(r),C=s("div",Object.assign({class:[`${n}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),s("div",pe(B,S),[s("div",{class:[`${n}-dropdown-option-body__prefix`,c&&`${n}-dropdown-option-body__prefix--show-icon`]},[y?y(r):J(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},d?d(r):J((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,f&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(Ae,null,{default:()=>s(qe,null)}):null)]),this.hasSubmenu?s(ke,null,{default:()=>[s(Pe,null,{default:()=>s("div",{class:`${n}-dropdown-offset-container`},s(Ne,{show:this.mergedShowSubmenu,placement:this.placement,to:N&&this.popoverBody||void 0,teleportDisabled:!N},{default:()=>s("div",{class:`${n}-dropdown-menu-wrapper`},i?s(Fe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return v?v({node:C,option:r}):C}}),Ze=j({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=T(ae),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=T(Q);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:c}=this,{rawNode:f}=this.tmNode,d=s("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(f)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},J(f.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(f):J((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:d,option:f}):d}}),eo=j({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return s(De,null,s(Ze,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:n}=t;return n.show===!1?null:be(n)?s(ve,{clsPrefix:i,key:t.key}):t.isGroup?(Te("dropdown","`group` node is not allowed to be put in `group` node."),null):s(we,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})}))}}),oo=j({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),me=j({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=T(Q);H(ae,{showIconRef:m(()=>{const t=o.value;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:f}=n;return t?t(f):f.icon})}),hasSubmenuRef:m(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>re(d,t));const{rawNode:f}=n;return re(f,t)})})});const r=A(null);return H(Be,null),H(Me,null),H(fe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:Ye(n)?s(oo,{tmNode:t,key:t.key}):be(n)?s(ve,{clsPrefix:o,key:t.key}):Qe(n)?s(eo,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):s(we,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(je,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Re({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),no=P("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ue(),P("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),P("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[I("pending",`
 color: var(--n-option-text-color-hover);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),I("active",`
 color: var(--n-option-text-color-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),I("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),I("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),I("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[$("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[I("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),$("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[I("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),$("suffix",`
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
 `,[I("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),P("dropdown-menu","pointer-events: all;")]),P("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),P("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),P("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[P("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),I("scrollable",[$("content",`
 padding: var(--n-padding);
 `)])]),to={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ro=Object.keys(ce),io=Object.assign(Object.assign(Object.assign({},ce),to),he.props),ho=j({name:"Dropdown",inheritAttrs:!1,props:io,setup(e){const o=A(!1),i=Ke(K(e,"show"),o),r=m(()=>{const{keyField:a,childrenField:b}=e;return Ge(e.options,{getKey(p){return p[a]},getDisabled(p){return p.disabled===!0},getIgnored(p){return p.type==="divider"||p.type==="render"},getChildren(p){return p[b]}})}),t=m(()=>r.value.treeNodes),n=A(null),c=A(null),f=A(null),d=m(()=>{var a,b,p;return(p=(b=(a=n.value)!==null&&a!==void 0?a:c.value)!==null&&b!==void 0?b:f.value)!==null&&p!==void 0?p:null}),y=m(()=>r.value.getPath(d.value).keyPath),v=m(()=>r.value.getPath(e.value).keyPath),g=X(()=>e.keyboard&&i.value);Je({keydown:{ArrowUp:{prevent:!0,handler:Z},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Y},Enter:{prevent:!0,handler:oe},Escape:U}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:N}=Le(e),_=he("Dropdown","-dropdown",no,We,e,S);H(Q,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:c,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:y,activeKeyPathRef:v,animatedRef:K(e,"animated"),mergedShowRef:i,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:B,doUpdateShow:x}),ie(i,a=>{!e.animated&&!a&&C()});function B(a,b){const{onSelect:p}=e;p&&te(p,a,b)}function x(a){const{"onUpdate:show":b,onUpdateShow:p}=e;b&&te(b,a),p&&te(p,a),o.value=a}function C(){n.value=null,c.value=null,f.value=null}function U(){x(!1)}function Y(){M("left")}function q(){M("right")}function Z(){M("up")}function ee(){M("down")}function oe(){const a=G();a!=null&&a.isLeaf&&i.value&&(B(a.key,a.rawNode),x(!1))}function G(){var a;const{value:b}=r,{value:p}=d;return!b||p===null?null:(a=b.getNode(p))!==null&&a!==void 0?a:null}function M(a){const{value:b}=d,{value:{getFirstAvailableNode:p}}=r;let u=null;if(b===null){const k=p();k!==null&&(u=k.key)}else{const k=G();if(k){let l;switch(a){case"down":l=k.getNext();break;case"up":l=k.getPrev();break;case"right":l=k.getChild();break;case"left":l=k.getParent();break}l&&(u=l.key)}}u!==null&&(n.value=null,c.value=u)}const L=m(()=>{const{size:a,inverted:b}=e,{common:{cubicBezierEaseInOut:p},self:u}=_.value,{padding:k,dividerColor:l,borderRadius:w,optionOpacityDisabled:R,[F("optionIconSuffixWidth",a)]:D,[F("optionSuffixWidth",a)]:ne,[F("optionIconPrefixWidth",a)]:z,[F("optionPrefixWidth",a)]:ye,[F("fontSize",a)]:ge,[F("optionHeight",a)]:xe,[F("optionIconSize",a)]:Se}=u,h={"--n-bezier":p,"--n-font-size":ge,"--n-padding":k,"--n-border-radius":w,"--n-option-height":xe,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":z,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":D,"--n-option-icon-size":Se,"--n-divider-color":l,"--n-option-opacity-disabled":R};return b?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),O=N?Ee("dropdown",m(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:S,mergedTheme:_,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:x,cssVars:N?void 0:L,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(r,t,n,c,f)=>{var d;const{mergedClsPrefix:y,menuProps:v}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(v==null?void 0:v(void 0,this.tmNodes.map(N=>N.rawNode)))||{},S={ref:Ve(t),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:f};return s(me,pe(this.$attrs,S,g))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(Ie,Object.assign({},He(this.$props,ro),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{ho as _,Ve as c};
