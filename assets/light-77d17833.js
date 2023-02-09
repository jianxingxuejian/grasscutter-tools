import{D as $,F as C,L as i,a3 as N,a2 as R,S as j,j as D,i as o}from"./Icon-c17b099f.js";import{g as F}from"./index-b92a2438.js";import{h as t,d as O,a1 as q}from"./vue-i18n.runtime.esm-bundler-151cb611.js";const b=new WeakSet;function Q(l){b.add(l)}function U(l){return!b.has(l)}const V=F("close",t("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),X=$("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[C("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),i("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),N("disabled",[i("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),i("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),i("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),i("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),i("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),C("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),C("round",[i("&::before",`
 border-radius: 50%;
 `)])]),_=O({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(l){return R("-base-close",X,q(l,"clsPrefix")),()=>{const{clsPrefix:a,disabled:d,absolute:u,round:r,isButtonTag:e}=l;return t(e?"button":"div",{type:e?"button":void 0,tabindex:d||!l.focusable?-1:0,"aria-disabled":d,"aria-label":"close",role:e?void 0:"button",disabled:d,class:[`${a}-base-close`,u&&`${a}-base-close--absolute`,d&&`${a}-base-close--disabled`,r&&`${a}-base-close--round`],onMousedown:s=>{l.focusable||s.preventDefault()},onClick:l.onClick},t(j,{clsPrefix:a},{default:()=>t(V,null)}))}}}),Y={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},Z=l=>{const{textColor2:a,primaryColorHover:d,primaryColorPressed:u,primaryColor:r,infoColor:e,successColor:c,warningColor:s,errorColor:n,baseColor:p,borderColor:f,opacityDisabled:g,tagColor:v,closeIconColor:m,closeIconColorHover:S,closeIconColorPressed:x,borderRadiusSmall:h,fontSizeMini:I,fontSizeTiny:P,fontSizeSmall:y,fontSizeMedium:z,heightMini:k,heightTiny:L,heightSmall:B,heightMedium:H,closeColorHover:M,closeColorPressed:w,buttonColor2Hover:E,buttonColor2Pressed:T,fontWeightStrong:W}=l;return Object.assign(Object.assign({},Y),{closeBorderRadius:h,heightTiny:k,heightSmall:L,heightMedium:B,heightLarge:H,borderRadius:h,opacityDisabled:g,fontSizeTiny:I,fontSizeSmall:P,fontSizeMedium:y,fontSizeLarge:z,fontWeightStrong:W,textColorCheckable:a,textColorHoverCheckable:a,textColorPressedCheckable:a,textColorChecked:p,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:T,colorChecked:r,colorCheckedHover:d,colorCheckedPressed:u,border:`1px solid ${f}`,textColor:a,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:m,closeIconColorHover:S,closeIconColorPressed:x,closeColorHover:M,closeColorPressed:w,borderPrimary:`1px solid ${o(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:o(r,{alpha:.12}),colorBorderedPrimary:o(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:o(r,{alpha:.12}),closeColorPressedPrimary:o(r,{alpha:.18}),borderInfo:`1px solid ${o(e,{alpha:.3})}`,textColorInfo:e,colorInfo:o(e,{alpha:.12}),colorBorderedInfo:o(e,{alpha:.1}),closeIconColorInfo:e,closeIconColorHoverInfo:e,closeIconColorPressedInfo:e,closeColorHoverInfo:o(e,{alpha:.12}),closeColorPressedInfo:o(e,{alpha:.18}),borderSuccess:`1px solid ${o(c,{alpha:.3})}`,textColorSuccess:c,colorSuccess:o(c,{alpha:.12}),colorBorderedSuccess:o(c,{alpha:.1}),closeIconColorSuccess:c,closeIconColorHoverSuccess:c,closeIconColorPressedSuccess:c,closeColorHoverSuccess:o(c,{alpha:.12}),closeColorPressedSuccess:o(c,{alpha:.18}),borderWarning:`1px solid ${o(s,{alpha:.35})}`,textColorWarning:s,colorWarning:o(s,{alpha:.15}),colorBorderedWarning:o(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:o(s,{alpha:.12}),closeColorPressedWarning:o(s,{alpha:.18}),borderError:`1px solid ${o(n,{alpha:.23})}`,textColorError:n,colorError:o(n,{alpha:.1}),colorBorderedError:o(n,{alpha:.08}),closeIconColorError:n,closeIconColorHoverError:n,closeIconColorPressedError:n,closeColorHoverError:o(n,{alpha:.12}),closeColorPressedError:o(n,{alpha:.18})})},A={name:"Tag",common:D,self:Z},oo=A;export{_ as N,Y as c,U as e,Q as m,oo as t};
