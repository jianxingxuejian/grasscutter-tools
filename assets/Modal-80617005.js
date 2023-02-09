import{a7 as je,a8 as re,a9 as He,aa as le,j as ue,L as x,D as P,ab as Ne,F as w,M as h,ac as Ae,ad as Ge,G as fe,H as I,O as Je,I as ge,a4 as O,W as ve,a6 as E,P as A,X as Qe,k as De,S as eo,ae as we,C as he,q as oo,af as We,ag as no,ah as to,ai as io,aj as ro,w as lo,J as ke,V as so,ak as ao,T as Ve,al as co,y as se,E as uo,K as fo,am as go,an as vo,ao as ho}from"./Icon-c17b099f.js";import{N as Ke,e as mo}from"./light-77d17833.js";import{$ as W,r as z,a5 as me,a2 as V,o as po,a0 as ae,h as t,d as K,c as T,a1 as ce,i as Xe,p as D,ae as bo,a6 as Co,w as de,n as Se}from"./vue-i18n.runtime.esm-bundler-151cb611.js";import{f as xo,g as pe,b as yo,_ as ze,W as wo}from"./index-b92a2438.js";import{r as M,f as ko}from"./fade-in-scale-up.cssr-4e8af357.js";const j=z(null);function Pe(e){if(e.clientX>0||e.clientY>0)j.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:i,top:o,width:a,height:u}=n.getBoundingClientRect();i>0||o>0?j.value={x:i+a/2,y:o+u/2}:j.value={x:0,y:0}}else j.value=null}}let H=0,Le=!0;function So(){if(!je)return W(z(null));H===0&&re("click",document,Pe,!0);const e=()=>{H+=1};return Le&&(Le=He())?(me(e),V(()=>{H-=1,H===0&&le("click",document,Pe,!0)})):e(),W(j)}const zo=z(void 0);let N=0;function Re(){zo.value=Date.now()}let Be=!0;function Po(e){if(!je)return W(z(!1));const n=z(!1);let i=null;function o(){i!==null&&window.clearTimeout(i)}function a(){o(),n.value=!0,i=window.setTimeout(()=>{n.value=!1},e)}N===0&&re("click",window,Re,!0);const u=()=>{N+=1,re("click",window,a,!0)};return Be&&(Be=He())?(me(u),V(()=>{N-=1,N===0&&le("click",window,Re,!0),le("click",window,a,!0),o()})):u(),W(n)}let F=0,$e="",Oe="",Te="",Me="";const Fe=z("0px");function Lo(e){if(typeof document>"u")return;const n=document.documentElement;let i,o=!1;const a=()=>{n.style.marginRight=$e,n.style.overflow=Oe,n.style.overflowX=Te,n.style.overflowY=Me,Fe.value="0px"};po(()=>{i=ae(e,u=>{if(u){if(!F){const f=window.innerWidth-n.offsetWidth;f>0&&($e=n.style.marginRight,n.style.marginRight=`${f}px`,Fe.value=`${f}px`),Oe=n.style.overflow,Te=n.style.overflowX,Me=n.style.overflowY,n.style.overflow="hidden",n.style.overflowX="hidden",n.style.overflowY="hidden"}o=!0,F++}else F--,F||a(),o=!1},{immediate:!0})}),V(()=>{i==null||i(),o&&(F--,F||a(),o=!1)})}const be=z(!1),Ie=()=>{be.value=!0},_e=()=>{be.value=!1};let _=0;const Ro=()=>(xo&&(me(()=>{_||(window.addEventListener("compositionstart",Ie),window.addEventListener("compositionend",_e)),_++}),V(()=>{_<=1?(window.removeEventListener("compositionstart",Ie),window.removeEventListener("compositionend",_e),_=0):_--})),be),Bo=pe("error",t("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},t("g",{"fill-rule":"nonzero"},t("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),Ee=pe("info",t("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},t("g",{"fill-rule":"nonzero"},t("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),$o=pe("success",t("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},t("g",{"fill-rule":"nonzero"},t("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),Oo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},To=e=>{const{primaryColor:n,borderRadius:i,lineHeight:o,fontSize:a,cardColor:u,textColor2:f,textColor1:m,dividerColor:c,fontWeightStrong:l,closeIconColor:p,closeIconColorHover:s,closeIconColorPressed:b,closeColorHover:k,closeColorPressed:L,modalColor:y,boxShadow1:g,popoverColor:C,actionColor:v}=e;return Object.assign(Object.assign({},Oo),{lineHeight:o,color:u,colorModal:y,colorPopover:C,colorTarget:n,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:f,titleTextColor:m,borderColor:c,actionColor:v,titleFontWeight:l,closeColorHover:k,closeColorPressed:L,closeBorderRadius:i,closeIconColor:p,closeIconColorHover:s,closeIconColorPressed:b,fontSizeSmall:a,fontSizeMedium:a,fontSizeLarge:a,fontSizeHuge:a,boxShadow:g,borderRadius:i})},Mo={name:"Card",common:ue,self:To},qe=Mo,Fo=x([P("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Ne({background:"var(--n-color-modal)"}),w("hoverable",[x("&:hover","box-shadow: var(--n-box-shadow);")]),w("content-segmented",[x(">",[h("content",{paddingTop:"var(--n-padding-bottom)"})])]),w("content-soft-segmented",[x(">",[h("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),w("footer-segmented",[x(">",[h("footer",{paddingTop:"var(--n-padding-bottom)"})])]),w("footer-soft-segmented",[x(">",[h("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),x(">",[P("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[h("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),h("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),h("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),h("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),h("content","flex: 1; min-width: 0;"),h("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[x("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),h("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),P("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[x("img",`
 display: block;
 width: 100%;
 `)]),w("bordered",`
 border: 1px solid var(--n-border-color);
 `,[x("&:target","border-color: var(--n-color-target);")]),w("action-segmented",[x(">",[h("action",[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),w("content-segmented, content-soft-segmented",[x(">",[h("content",{transition:"border-color 0.3s var(--n-bezier)"},[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),w("footer-segmented, footer-soft-segmented",[x(">",[h("footer",{transition:"border-color 0.3s var(--n-bezier)"},[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),w("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Ae(P("card",`
 background: var(--n-color-modal);
 `,[w("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ge(P("card",`
 background: var(--n-color-popover);
 `,[w("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Ce={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Io=ve(Ce),_o=Object.assign(Object.assign({},I.props),Ce),Eo=K({name:"Card",props:_o,setup(e){const n=()=>{const{onClose:l}=e;l&&E(l)},{inlineThemeDisabled:i,mergedClsPrefixRef:o,mergedRtlRef:a}=fe(e),u=I("Card","-card",Fo,qe,e,o),f=Je("Card",a,o),m=T(()=>{const{size:l}=e,{self:{color:p,colorModal:s,colorTarget:b,textColor:k,titleTextColor:L,titleFontWeight:y,borderColor:g,actionColor:C,borderRadius:v,lineHeight:R,closeIconColor:S,closeIconColorHover:r,closeIconColorPressed:d,closeColorHover:B,closeColorPressed:$,closeBorderRadius:X,closeIconSize:q,closeSize:U,boxShadow:Y,colorPopover:Z,colorEmbedded:G,colorEmbeddedModal:J,colorEmbeddedPopover:Q,[A("padding",l)]:ee,[A("fontSize",l)]:oe,[A("titleFontSize",l)]:ne},common:{cubicBezierEaseInOut:te}}=u.value,{top:ie,left:Ye,bottom:Ze}=Qe(ee);return{"--n-bezier":te,"--n-border-radius":v,"--n-color":p,"--n-color-modal":s,"--n-color-popover":Z,"--n-color-embedded":G,"--n-color-embedded-modal":J,"--n-color-embedded-popover":Q,"--n-color-target":b,"--n-text-color":k,"--n-line-height":R,"--n-action-color":C,"--n-title-text-color":L,"--n-title-font-weight":y,"--n-close-icon-color":S,"--n-close-icon-color-hover":r,"--n-close-icon-color-pressed":d,"--n-close-color-hover":B,"--n-close-color-pressed":$,"--n-border-color":g,"--n-box-shadow":Y,"--n-padding-top":ie,"--n-padding-bottom":Ze,"--n-padding-left":Ye,"--n-font-size":oe,"--n-title-font-size":ne,"--n-close-size":U,"--n-close-icon-size":q,"--n-close-border-radius":X}}),c=i?ge("card",T(()=>e.size[0]),m,e):void 0;return{rtlEnabled:f,mergedClsPrefix:o,mergedTheme:u,handleCloseClick:n,cssVars:i?void 0:m,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{segmented:e,bordered:n,hoverable:i,mergedClsPrefix:o,rtlEnabled:a,onRender:u,embedded:f,tag:m,$slots:c}=this;return u==null||u(),t(m,{class:[`${o}-card`,this.themeClass,f&&`${o}-card--embedded`,{[`${o}-card--rtl`]:a,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:i}],style:this.cssVars,role:this.role},O(c.cover,l=>l&&t("div",{class:`${o}-card-cover`,role:"none"},l)),O(c.header,l=>l||this.title||this.closable?t("div",{class:`${o}-card-header`,style:this.headerStyle},t("div",{class:`${o}-card-header__main`,role:"heading"},l||this.title),O(c["header-extra"],p=>p&&t("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},p)),this.closable?t(Ke,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),O(c.default,l=>l&&t("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},l)),O(c.footer,l=>l&&[t("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},l)]),O(c.action,l=>l&&t("div",{class:`${o}-card__action`,role:"none"},l)))}}),jo={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Ho=e=>{const{textColor1:n,textColor2:i,modalColor:o,closeIconColor:a,closeIconColorHover:u,closeIconColorPressed:f,closeColorHover:m,closeColorPressed:c,infoColor:l,successColor:p,warningColor:s,errorColor:b,primaryColor:k,dividerColor:L,borderRadius:y,fontWeightStrong:g,lineHeight:C,fontSize:v}=e;return Object.assign(Object.assign({},jo),{fontSize:v,lineHeight:C,border:`1px solid ${L}`,titleTextColor:n,textColor:i,color:o,closeColorHover:m,closeColorPressed:c,closeIconColor:a,closeIconColorHover:u,closeIconColorPressed:f,closeBorderRadius:y,iconColor:k,iconColorInfo:l,iconColorSuccess:p,iconColorWarning:s,iconColorError:b,borderRadius:y,titleFontWeight:g})},No=De({name:"Dialog",common:ue,peers:{Button:yo},self:Ho}),Ue=No,xe={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Ao=ve(xe),Do=x([P("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[h("icon",{color:"var(--n-icon-color)"}),w("bordered",{border:"var(--n-border)"}),w("icon-top",[h("close",{margin:"var(--n-close-margin)"}),h("icon",{margin:"var(--n-icon-margin)"}),h("content",{textAlign:"center"}),h("title",{justifyContent:"center"}),h("action",{justifyContent:"center"})]),w("icon-left",[h("icon",{margin:"var(--n-icon-margin)"}),w("closable",[h("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),h("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),h("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[w("last","margin-bottom: 0;")]),h("action",`
 display: flex;
 justify-content: flex-end;
 `,[x("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),h("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),h("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),P("dialog-icon-container",{display:"flex",justifyContent:"center"})]),Ae(P("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),P("dialog",[Ne(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Wo={default:()=>t(Ee,null),info:()=>t(Ee,null),success:()=>t($o,null),warning:()=>t(wo,null),error:()=>t(Bo,null)},Vo=K({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},I.props),xe),setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:i,inlineThemeDisabled:o}=fe(e),a=T(()=>{var s,b;const{iconPlacement:k}=e;return k||((b=(s=n==null?void 0:n.value)===null||s===void 0?void 0:s.Dialog)===null||b===void 0?void 0:b.iconPlacement)||"left"});function u(s){const{onPositiveClick:b}=e;b&&b(s)}function f(s){const{onNegativeClick:b}=e;b&&b(s)}function m(){const{onClose:s}=e;s&&s()}const c=I("Dialog","-dialog",Do,Ue,e,i),l=T(()=>{const{type:s}=e,b=a.value,{common:{cubicBezierEaseInOut:k},self:{fontSize:L,lineHeight:y,border:g,titleTextColor:C,textColor:v,color:R,closeBorderRadius:S,closeColorHover:r,closeColorPressed:d,closeIconColor:B,closeIconColorHover:$,closeIconColorPressed:X,closeIconSize:q,borderRadius:U,titleFontWeight:Y,titleFontSize:Z,padding:G,iconSize:J,actionSpace:Q,contentMargin:ee,closeSize:oe,[b==="top"?"iconMarginIconTop":"iconMargin"]:ne,[b==="top"?"closeMarginIconTop":"closeMargin"]:te,[A("iconColor",s)]:ie}}=c.value;return{"--n-font-size":L,"--n-icon-color":ie,"--n-bezier":k,"--n-close-margin":te,"--n-icon-margin":ne,"--n-icon-size":J,"--n-close-size":oe,"--n-close-icon-size":q,"--n-close-border-radius":S,"--n-close-color-hover":r,"--n-close-color-pressed":d,"--n-close-icon-color":B,"--n-close-icon-color-hover":$,"--n-close-icon-color-pressed":X,"--n-color":R,"--n-text-color":v,"--n-border-radius":U,"--n-padding":G,"--n-line-height":y,"--n-border":g,"--n-content-margin":ee,"--n-title-font-size":Z,"--n-title-font-weight":Y,"--n-title-text-color":C,"--n-action-space":Q}}),p=o?ge("dialog",T(()=>`${e.type[0]}${a.value[0]}`),l,e):void 0;return{mergedClsPrefix:i,mergedIconPlacement:a,mergedTheme:c,handlePositiveClick:u,handleNegativeClick:f,handleCloseClick:m,cssVars:o?void 0:l,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){var e;const{bordered:n,mergedIconPlacement:i,cssVars:o,closable:a,showIcon:u,title:f,content:m,action:c,negativeText:l,positiveText:p,positiveButtonProps:s,negativeButtonProps:b,handlePositiveClick:k,handleNegativeClick:L,mergedTheme:y,loading:g,type:C,mergedClsPrefix:v}=this;(e=this.onRender)===null||e===void 0||e.call(this);const R=u?t(eo,{clsPrefix:v,class:`${v}-dialog__icon`},{default:()=>O(this.$slots.icon,r=>r||(this.icon?M(this.icon):Wo[this.type]()))}):null,S=O(this.$slots.action,r=>r||p||l||c?t("div",{class:`${v}-dialog__action`},r||(c?[M(c)]:[this.negativeText&&t(ze,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,ghost:!0,size:"small",onClick:L},b),{default:()=>M(this.negativeText)}),this.positiveText&&t(ze,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,size:"small",type:C==="default"?"primary":C,disabled:g,loading:g,onClick:k},s),{default:()=>M(this.positiveText)})])):null);return t("div",{class:[`${v}-dialog`,this.themeClass,this.closable&&`${v}-dialog--closable`,`${v}-dialog--icon-${i}`,n&&`${v}-dialog--bordered`],style:o,role:"dialog"},a?t(Ke,{clsPrefix:v,class:`${v}-dialog__close`,onClick:this.handleCloseClick}):null,u&&i==="top"?t("div",{class:`${v}-dialog-icon-container`},R):null,t("div",{class:`${v}-dialog__title`},u&&i==="left"?R:null,we(this.$slots.header,()=>[M(f)])),t("div",{class:[`${v}-dialog__content`,S?"":`${v}-dialog__content--last`]},we(this.$slots.default,()=>[M(m)])),S)}}),Ko=he("n-dialog-provider"),rn=he("n-dialog-api"),ln=he("n-dialog-reactive-list"),Xo=e=>{const{modalColor:n,textColor2:i,boxShadow3:o}=e;return{color:n,textColor:i,boxShadow:o}},qo=De({name:"Modal",common:ue,peers:{Scrollbar:oo,Dialog:Ue,Card:qe},self:Xo}),Uo=qo,ye=Object.assign(Object.assign({},Ce),xe),Yo=ve(ye),Zo=K({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},ye),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const n=z(null),i=z(null),o=z(e.show),a=z(null),u=z(null);ae(ce(e,"show"),g=>{g&&(o.value=!0)}),Lo(T(()=>e.blockScroll&&o.value));const f=Xe(We);function m(){if(f.transformOriginRef.value==="center")return"";const{value:g}=a,{value:C}=u;if(g===null||C===null)return"";if(i.value){const v=i.value.containerScrollTop;return`${g}px ${C+v}px`}return""}function c(g){if(f.transformOriginRef.value==="center")return;const C=f.getMousePosition();if(!C||!i.value)return;const v=i.value.containerScrollTop,{offsetLeft:R,offsetTop:S}=g;if(C){const r=C.y,d=C.x;a.value=-(R-d),u.value=-(S-r-v)}g.style.transformOrigin=m()}function l(g){Se(()=>{c(g)})}function p(g){g.style.transformOrigin=m(),e.onBeforeLeave()}function s(){o.value=!1,a.value=null,u.value=null,e.onAfterLeave()}function b(){const{onClose:g}=e;g&&g()}function k(){e.onNegativeClick()}function L(){e.onPositiveClick()}const y=z(null);return ae(y,g=>{g&&Se(()=>{const C=g.el;C&&n.value!==C&&(n.value=C)})}),D(no,n),D(to,null),D(io,null),{mergedTheme:f.mergedThemeRef,appear:f.appearRef,isMounted:f.isMountedRef,mergedClsPrefix:f.mergedClsPrefixRef,bodyRef:n,scrollbarRef:i,displayed:o,childNodeRef:y,handlePositiveClick:L,handleNegativeClick:k,handleCloseClick:b,handleAfterLeave:s,handleBeforeLeave:p,handleEnter:l}},render(){const{$slots:e,$attrs:n,handleEnter:i,handleAfterLeave:o,handleBeforeLeave:a,preset:u,mergedClsPrefix:f}=this;let m=null;if(!u){if(m=ro(e),!m){lo("modal","default slot is empty");return}m=bo(m),m.props=Co({class:`${f}-modal`},n,m.props||{})}return this.displayDirective==="show"||this.displayed||this.show?de(t("div",{role:"none",class:`${f}-modal-body-wrapper`},t(so,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${f}-modal-scroll-content`},{default:()=>{var c;return[(c=this.renderMask)===null||c===void 0?void 0:c.call(this),t(ao,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var l;return t(Ve,{name:"fade-in-scale-up-transition",appear:(l=this.appear)!==null&&l!==void 0?l:this.isMounted,onEnter:i,onAfterEnter:this.onAfterEnter,onAfterLeave:o,onBeforeLeave:a},{default:()=>{const p=[[ke,this.show]],{onClickoutside:s}=this;return s&&p.push([co,this.onClickoutside,void 0,{capture:!0}]),de(this.preset==="confirm"||this.preset==="dialog"?t(Vo,Object.assign({},this.$attrs,{class:[`${f}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},se(this.$props,Ao),{"aria-modal":"true"}),e):this.preset==="card"?t(Eo,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${f}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},se(this.$props,Io),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=m,p)}})}})]}})),[[ke,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Go=x([P("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),P("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[uo({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),P("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[P("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),P("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[ko({duration:".25s",enterScale:".5"})])]),Jo=Object.assign(Object.assign(Object.assign(Object.assign({},I.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),ye),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),sn=K({name:"Modal",inheritAttrs:!1,props:Jo,setup(e){const n=z(null),{mergedClsPrefixRef:i,namespaceRef:o,inlineThemeDisabled:a}=fe(e),u=I("Modal","-modal",Go,Uo,e,i),f=Po(64),m=So(),c=fo(),l=e.internalDialog?Xe(Ko,null):null,p=Ro();function s(r){const{onUpdateShow:d,"onUpdate:show":B,onHide:$}=e;d&&E(d,r),B&&E(B,r),$&&!r&&$(r)}function b(){const{onClose:r}=e;r?Promise.resolve(r()).then(d=>{d!==!1&&s(!1)}):s(!1)}function k(){const{onPositiveClick:r}=e;r?Promise.resolve(r()).then(d=>{d!==!1&&s(!1)}):s(!1)}function L(){const{onNegativeClick:r}=e;r?Promise.resolve(r()).then(d=>{d!==!1&&s(!1)}):s(!1)}function y(){const{onBeforeLeave:r,onBeforeHide:d}=e;r&&E(r),d&&d()}function g(){const{onAfterLeave:r,onAfterHide:d}=e;r&&E(r),d&&d()}function C(r){var d;const{onMaskClick:B}=e;B&&B(r),e.maskClosable&&!((d=n.value)===null||d===void 0)&&d.contains(ho(r))&&s(!1)}function v(r){var d;(d=e.onEsc)===null||d===void 0||d.call(e),e.show&&e.closeOnEsc&&mo(r)&&!p.value&&s(!1)}D(We,{getMousePosition:()=>{if(l){const{clickedRef:r,clickPositionRef:d}=l;if(r.value&&d.value)return d.value}return f.value?m.value:null},mergedClsPrefixRef:i,mergedThemeRef:u,isMountedRef:c,appearRef:ce(e,"internalAppear"),transformOriginRef:ce(e,"transformOrigin")});const R=T(()=>{const{common:{cubicBezierEaseOut:r},self:{boxShadow:d,color:B,textColor:$}}=u.value;return{"--n-bezier-ease-out":r,"--n-box-shadow":d,"--n-color":B,"--n-text-color":$}}),S=a?ge("theme-class",void 0,R,e):void 0;return{mergedClsPrefix:i,namespace:o,isMounted:c,containerRef:n,presetProps:T(()=>se(e,Yo)),handleEsc:v,handleAfterLeave:g,handleClickoutside:C,handleBeforeLeave:y,doUpdateShow:s,handleNegativeClick:L,handlePositiveClick:k,handleCloseClick:b,cssVars:a?void 0:R,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e}=this;return t(vo,{to:this.to,show:this.show},{default:()=>{var n;(n=this.onRender)===null||n===void 0||n.call(this);const{unstableShowMask:i}=this;return de(t("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},t(Zo,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:i?void 0:this.handleClickoutside,renderMask:i?()=>{var o;return t(Ve,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?t("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[go,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{Bo as E,Ee as I,Vo as N,$o as S,sn as _,Ho as a,Xo as b,Ao as c,xe as d,So as e,Ko as f,rn as g,ln as h,qe as i,Ue as j,Eo as k,Lo as l,Uo as m,Ro as n,To as s,Po as u};
