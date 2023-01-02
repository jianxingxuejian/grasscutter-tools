import{b as k,p as M}from"./Tooltip.812b1f0e.js";import{c as A,N as B,a as I,h as U,m as O}from"./utils.e76288d1.js";import{c as V,a as $,d as R,j as F,e as L,u as y,W as j,g as T,X as z,Y as C,A as D,i as K,h as b,q as E,B as v,r as H,p as q,s as W,Z as x}from"./index.234ce79a.js";import{c as X}from"./Dropdown.ba5278b8.js";const N=V("n-popselect"),Y=$("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),_={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},S=E(_),Z=R({name:"PopselectPanel",props:_,setup(e){const o=F(N),{mergedClsPrefixRef:s,inlineThemeDisabled:r}=L(e),h=y("Popselect","-pop-select",Y,j,o.props,s),f=T(()=>A(e.options,I("value","children")));function n(t,u){const{onUpdateValue:a,"onUpdate:value":c,onChange:d}=e;a&&v(a,t,u),c&&v(c,t,u),d&&v(d,t,u)}function l(t){i(t.key)}function p(t){U(t,"action")||t.preventDefault()}function i(t){const{value:{getNode:u}}=f;if(e.multiple)if(Array.isArray(e.value)){const a=[],c=[];let d=!0;e.value.forEach(w=>{if(w===t){d=!1;return}const g=u(w);g&&(a.push(g.key),c.push(g.rawNode))}),d&&(a.push(t),c.push(u(t).rawNode)),n(a,c)}else{const a=u(t);a&&n([t],[a.rawNode])}else if(e.value===t&&e.cancelable)n(null,null);else{const a=u(t);a&&n(t,a.rawNode);const{"onUpdate:show":c,onUpdateShow:d}=o.props;c&&v(c,!1),d&&v(d,!1),o.setShow(!1)}C(()=>{o.syncPosition()})}z(D(e,"options"),()=>{C(()=>{o.syncPosition()})});const P=T(()=>{const{self:{menuBoxShadow:t}}=h.value;return{"--n-menu-box-shadow":t}}),m=r?K("select",void 0,P,o.props):void 0;return{mergedTheme:o.mergedThemeRef,mergedClsPrefix:s,treeMate:f,handleToggle:l,handleMenuMousedown:p,cssVars:r?void 0:P,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),b(B,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{action:()=>{var o,s;return((s=(o=this.$slots).action)===null||s===void 0?void 0:s.call(o))||[]},empty:()=>{var o,s;return((s=(o=this.$slots).empty)===null||s===void 0?void 0:s.call(o))||[]}})}}),G=Object.assign(Object.assign(Object.assign(Object.assign({},y.props),x(M,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},M.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),_),te=R({name:"Popselect",props:G,inheritAttrs:!1,__popover__:!0,setup(e){const o=y("Popselect","-popselect",void 0,j,e),s=H(null);function r(){var n;(n=s.value)===null||n===void 0||n.syncPosition()}function h(n){var l;(l=s.value)===null||l===void 0||l.setShow(n)}return q(N,{props:e,mergedThemeRef:o,syncPosition:r,setShow:h}),Object.assign(Object.assign({},{syncPosition:r,setShow:h}),{popoverInstRef:s,mergedTheme:o})},render(){const{mergedTheme:e}=this,o={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(s,r,h,f,n)=>{const{$attrs:l}=this;return b(Z,Object.assign({},l,{class:[l.class,s],style:[l.style,h]},W(this.$props,S),{ref:X(r),onMouseenter:O([f,l.onMouseenter]),onMouseleave:O([n,l.onMouseleave])}),{action:()=>{var p,i;return(i=(p=this.$slots).action)===null||i===void 0?void 0:i.call(p)},empty:()=>{var p,i;return(i=(p=this.$slots).empty)===null||i===void 0?void 0:i.call(p)}})}};return b(k,Object.assign({},x(this.$props,S),o,{internalDeactivateImmediately:!0}),{trigger:()=>{var s,r;return(r=(s=this.$slots).default)===null||r===void 0?void 0:r.call(s)}})}});export{te as _};