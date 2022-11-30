import{t as Q,a as F,b$ as _n,b as Y,d as U,e as mn,u as sn,g as N,i as fn,h as C,aV as gn,T as vn,c9 as xn,ak as wn,aR as bn,C as q,D as z,E as d,V as on,H,G as V,r as $,Y as an,M as W,J as v,I as r,bg as M,K as e,bs as R,ca as cn,cb as O,b7 as Z,cc as yn,cd as $n,bD as D,z as kn,_ as qn,ce as Cn,af as jn,cf as Sn,cg as Mn}from"./index.2e2f0160.js";import{a as zn,_ as Bn}from"./MyButton.vuevuetypescriptsetuptruelang.d1868e08.js";import{_ as In}from"./ServerInput.vuevuetypescriptsetuptruelang.a4e5d7e5.js";import{r as E,s as Fn,_ as Pn,i as An,a as X,p as nn,b as tn}from"./SelectFile.vuevuetypescriptsetuptruelang.732697e9.js";import{_ as Tn}from"./Checkbox.9432b01c.js";import{_ as Un}from"./plugin-vueexport-helper.2444895f.js";import{a as Vn}from"./Tooltip.774b9f07.js";import{_ as rn}from"./Space.a6499817.js";import{_ as Zn}from"./Tag.afb7894a.js";import{a as Ln}from"./Switch.09974729.js";import"./axios.852d348a.js";import"./Dropdown.79f14d0d.js";import"./ChevronRight.a7f1b044.js";import"./InputGroupLabel.95b7cd27.js";import"./Popselect.5c2abc20.js";import"./get-slot.8207e825.js";function Hn(s,o){const t=[];let i=0;for(const n of s.split(`
`)){if(/^## [v[\d.]+/.test(n)&&i++,o&&i>o)break;(n.startsWith("##")||n.startsWith("-"))&&t.push(n)}return t.join(`
`)}const Rn=Q([Q("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),F("spin-container",{position:"relative"},[F("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[_n()])]),F("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),F("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[Y("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),F("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),F("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[Y("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Nn={small:20,medium:18,large:16},En=Object.assign(Object.assign({},sn.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Dn=U({name:"Spin",props:En,setup(s){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=mn(s),i=sn("Spin","-spin",Rn,xn,s,o),n=N(()=>{const{size:a}=s,{common:{cubicBezierEaseInOut:l},self:u}=i.value,{opacitySpinning:_,color:f,textColor:k}=u,x=typeof a=="number"?wn(a):u[bn("size",a)];return{"--n-bezier":l,"--n-opacity-spinning":_,"--n-size":x,"--n-color":f,"--n-text-color":k}}),h=t?fn("spin",N(()=>{const{size:a}=s;return typeof a=="number"?String(a):a[0]}),n,s):void 0;return{mergedClsPrefix:o,compitableShow:Vn(s,["spinning","show"]),mergedStrokeWidth:N(()=>{const{strokeWidth:a}=s;if(a!==void 0)return a;const{size:l}=s;return Nn[typeof l=="number"?"medium":l]}),cssVars:t?void 0:n,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var s,o;const{$slots:t,mergedClsPrefix:i,description:n}=this,h=t.icon&&this.rotate,a=(n||t.description)&&C("div",{class:`${i}-spin-description`},n||((s=t.description)===null||s===void 0?void 0:s.call(t))),l=t.icon?C("div",{class:[`${i}-spin-body`,this.themeClass]},C("div",{class:[`${i}-spin`,h&&`${i}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),a):C("div",{class:[`${i}-spin-body`,this.themeClass]},C(gn,{clsPrefix:i,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),a);return(o=this.onRender)===null||o===void 0||o.call(this),t.default?C("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},C("div",{class:[`${i}-spin-content`,this.compitableShow&&`${i}-spin-content--spinning`]},t),C(vn,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}}),Wn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},On=d("path",{fill:"currentColor",d:"M7.1 11.35q.35-.7.725-1.35q.375-.65.825-1.3l-1.4-.275l-2.1 2.1Zm12.05-6.875q-1.75.05-3.737 1.025q-1.988.975-3.613 2.6q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225q1.2-.825 2.25-1.875q1.625-1.625 2.6-3.6Q19.625 6.75 19.675 5q0-.1-.037-.2q-.038-.1-.113-.175q-.075-.075-.175-.113q-.1-.037-.2-.037Zm-5.5 6q-.575-.575-.575-1.413q0-.837.575-1.412t1.425-.575q.85 0 1.425.575q.575.575.575 1.412q0 .838-.575 1.413q-.575.575-1.425.575q-.85 0-1.425-.575Zm-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.812q-.65.363-1.35.713Zm8.775-13.35q.2 2.75-.9 5.362q-1.1 2.613-3.475 4.988l.5 2.475q.1.5-.05.975q-.15.475-.5.825L14 21.45q-.375.375-.9.287q-.525-.087-.725-.587l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725q-.1-.525.275-.9L5.825 7q.35-.35.838-.5q.487-.15.987-.05l2.475.5q2.375-2.375 4.988-3.475q2.612-1.1 5.362-.9q.2.025.4.112q.2.088.35.238q.15.15.237.35q.088.2.113.4Zm-17.65 12.3q.875-.875 2.137-.888q1.263-.012 2.138.863t.862 2.137q-.012 1.263-.887 2.138q-.625.625-2.087 1.075q-1.463.45-4.038.8q.35-2.575.8-4.038q.45-1.462 1.075-2.087Zm1.425 1.4q-.25.25-.5.913q-.25.662-.35 1.337q.675-.1 1.338-.337q.662-.238.912-.488q.3-.3.325-.725q.025-.425-.275-.725q-.3-.3-.725-.288q-.425.013-.725.313Z"},null,-1),Gn=[On];function Jn(s,o){return q(),z("svg",Wn,Gn)}const Kn={name:"material-symbols-rocket-launch-outline-rounded",render:Jn},Qn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Yn=on('<g fill="none" stroke="currentColor" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-width="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"></animate></path></g>',1),Xn=[Yn];function nt(s,o){return q(),z("svg",Qn,Xn)}const tt={name:"line-md-plus",render:nt},et={class:"inline-block",viewBox:"0 0 48 48",width:"1em",height:"1em"},st=["id"],ot=on('<g fill="none"><path fill="#fff" d="M23.794 44.518c-3.659 0-7.017-1.225-9.179-3.053c-1.098.328-2.502.855-3.389 1.51c-.759.56-.664 1.13-.527 1.361c.6 1.013 10.296.647 13.095.332v-.15Zm0 0c3.659 0 7.016-1.225 9.179-3.053c1.097.328 2.502.855 3.389 1.51c.758.56.663 1.13.526 1.361c-.6 1.013-10.295.647-13.094.332v-.15Z"></path><path fill="#fff" d="M23.814 22.591c6.042-.04 10.884-1.21 12.525-1.658c.39-.107.6-.3.6-.3c.001-.055.025-.983.025-1.462c0-8.066-3.808-16.17-13.172-16.171c-9.364 0-13.171 8.105-13.171 16.171c0 .48.023 1.407.025 1.462c0 0 .17.18.481.267c1.515.421 6.448 1.65 12.643 1.691h.044Zm16.418 6.72c-.375-1.206-.886-2.61-1.404-3.96c0 0-.297-.037-.448.006c-4.645 1.35-10.275 2.21-14.566 2.158h-.044c-4.267.05-9.858-.8-14.488-2.136c-.177-.05-.526-.029-.526-.029c-.518 1.35-1.029 2.756-1.403 3.96c-1.786 5.748-1.208 8.126-.767 8.18c.945.114 3.68-4.327 3.68-4.327c0 4.513 4.073 11.441 13.403 11.505h.247c9.329-.064 13.403-6.992 13.403-11.505c0 0 2.734 4.44 3.68 4.327c.44-.054 1.019-2.432-.767-8.18Z"></path><path fill="#000" d="M20.46 14.916c-1.27.057-2.355-1.39-2.423-3.23c-.07-1.84.904-3.378 2.174-3.436c1.27-.057 2.354 1.39 2.423 3.23c.07 1.84-.904 3.38-2.174 3.436Zm9.088-3.23c-.068 1.84-1.153 3.287-2.424 3.23c-1.27-.057-2.242-1.595-2.173-3.436c.069-1.84 1.154-3.286 2.423-3.23c1.27.058 2.243 1.596 2.174 3.437Zm2.257 5.828c-.34-.751-3.758-1.59-7.99-1.59h-.046c-4.232 0-7.65.839-7.99 1.59a.253.253 0 0 0-.025.108c0 .052.017.102.047.145c.286.416 4.082 2.477 7.968 2.477h.046c3.886 0 7.682-2.06 7.968-2.477a.256.256 0 0 0 .047-.146a.25.25 0 0 0-.025-.106"></path><path fill="#fff" d="M22.022 11.714c.058.727-.34 1.373-.89 1.443c-.549.07-1.04-.461-1.1-1.188c-.057-.727.341-1.373.89-1.443c.55-.071 1.042.461 1.1 1.188Zm3.49.243c.112-.201.877-1.259 2.46-.874c.415.102.608.25.648.309c.06.086.077.21.016.375c-.12.329-.369.32-.506.256c-.09-.042-1.192-.777-2.208.32c-.07.075-.195.1-.313.012c-.119-.09-.167-.272-.097-.398Z"></path><path fill="#000" d="M23.814 27.25h-.045c-2.918.035-6.455-.351-9.882-1.027c-.293 1.699-.47 3.834-.318 6.38c.384 6.433 4.205 10.478 10.104 10.536h.24c5.898-.058 9.718-4.103 10.103-10.537c.152-2.546-.025-4.68-.319-6.379c-3.426.676-6.965 1.063-9.883 1.027"></path><path fill="#fff" d="M15.504 26.712v6.332s2.9.585 5.807.18v-5.841a53.39 53.39 0 0 1-5.807-.671Z"></path><path fill="#fff" d="M36.938 20.634s-5.642 1.78-13.124 1.831h-.044c-7.47-.05-13.105-1.825-13.124-1.831l-1.89 4.716c4.726 1.425 10.584 2.343 15.014 2.29h.044c4.43.053 10.287-.865 15.014-2.29l-1.89-4.716Z"></path></g>',1),at=[ot],ct=["mask"];function it(s,o){return q(),z("svg",et,[d("mask",{id:s.idMap.svgIDa},at,8,st),d("path",{fill:"currentColor",d:"M0 0h48v48H0z",mask:"url(#"+s.idMap.svgIDa+")"},null,8,ct)])}const rt={name:"icon-park-solid-tencent-qq",render:it,data(){return{idMap:{svgIDa:"uicons-"+(()=>Math.random().toString(36).substr(2,10))()}}}},lt={class:"inline-block",viewBox:"0 0 32 32",width:"1em",height:"1em"},ut=d("path",{fill:"currentColor",d:"M25.7 7.1C23.9 6.3 22 5.7 20 5.3h-.1c-.2.4-.5 1-.7 1.5c-2.2-.3-4.3-.3-6.4 0c-.2-.5-.5-1-.7-1.5H12c-2 .3-3.9.9-5.7 1.8C2.7 12.5 1.7 17.8 2.2 23v.1c2.4 1.8 4.7 2.8 7 3.5h.1c.5-.7 1-1.5 1.4-2.3v-.1c-.8-.3-1.5-.6-2.2-1c-.1 0-.1-.1 0-.1c.1-.1.3-.2.4-.3H9c4.6 2.1 9.5 2.1 14.1 0h.1c.1.1.3.2.4.3c.1 0 0 .1 0 .1c-.7.4-1.4.8-2.2 1c0 0-.1.1 0 .1c.4.8.9 1.6 1.4 2.3h.1c2.3-.7 4.6-1.8 7-3.5V23c.6-6-1-11.2-4.2-15.9zM11.4 19.9c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8c0 1.5-1.1 2.8-2.5 2.8zm9.3 0c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8c0 1.5-1.1 2.8-2.5 2.8z"},null,-1),dt=[ut];function pt(s,o){return q(),z("svg",lt,dt)}const ht={name:"carbon-logo-discord",render:pt},_t={class:"inline-block",viewBox:"0 0 32 32",width:"1em",height:"1em"},mt=d("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),ft=[mt];function gt(s,o){return q(),z("svg",_t,ft)}const vt={name:"carbon-logo-github",render:gt},xt={class:"inline-block",viewBox:"0 0 32 32",width:"1em",height:"1em"},wt=d("path",{fill:"currentColor",d:"M24 24v2h2.46A5.94 5.94 0 0 1 22 28a6.007 6.007 0 0 1-6-6h-2a7.984 7.984 0 0 0 14 5.265V30h2v-6zm-2-10a8.04 8.04 0 0 0-6 2.735V14h-2v6h6v-2h-2.46A5.94 5.94 0 0 1 22 16a6.007 6.007 0 0 1 6 6h2a8.01 8.01 0 0 0-8-8z"},null,-1),bt=d("path",{fill:"currentColor",d:"M12 28H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v8h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4H2v2h2v5H2v2h2v5H2v2h2v4a2 2 0 0 0 2 2h6Z"},null,-1),yt=[wt,bt];function $t(s,o){return q(),z("svg",xt,yt)}const kt={name:"carbon-change-catalog",render:$t};var qt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function en(s){return s.replace(RegExp("^"+(s.match(/^(\t| )+/)||"")[0],"gm"),"")}function T(s){return(s+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function L(s,o){var t,i,n,h,a,l=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,u=[],_="",f=o||{},k=0;function x(g){var b=qt[g[1]||""],j=u[u.length-1]==g;return b?b[1]?(j?u.pop():u.push(g),b[0|j]):b[0]:g}function w(){for(var g="";u.length;)g+=x(u[u.length-1]);return g}for(s=s.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(g,b,j){return f[b.toLowerCase()]=j,""}).replace(/^\n+|\n+$/g,"");n=l.exec(s);)i=s.substring(k,n.index),k=l.lastIndex,t=n[0],i.match(/[^\\](\\\\)*\\$/)||((a=n[3]||n[4])?t='<pre class="code '+(n[4]?"poetry":n[2].toLowerCase())+'"><code'+(n[2]?' class="language-'+n[2].toLowerCase()+'"':"")+">"+en(T(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=n[6])?(a.match(/\./)&&(n[5]=n[5].replace(/^\d+/gm,"")),h=L(en(n[5].replace(/^\s*[>*+.-]/gm,""))),a==">"?a="blockquote":(a=a.match(/\./)?"ol":"ul",h=h.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),t="<"+a+">"+h+"</"+a+">"):n[8]?t='<img src="'+T(n[8])+'" alt="'+T(n[7])+'">':n[10]?(_=_.replace("<a>",'<a href="'+T(n[11]||f[i.toLowerCase()])+'">'),t=w()+"</a>"):n[9]?t="<a>":n[12]||n[14]?t="<"+(a="h"+(n[14]?n[14].length:n[13]>"="?1:2))+">"+L(n[12]||n[15],f)+"</"+a+">":n[16]?t="<code>"+T(n[16])+"</code>":(n[17]||n[1])&&(t=x(n[17]||"--"))),_+=i,_+=t;return(_+s.substring(k)+w()).replace(/^\n+|\n+$/g,"")}const Ct=`# \u53D8\u66F4\u65E5\u5FD7

## [1.5.0] - 2022-11-24

### \u7279\u6027

- CA \u8BC1\u4E66\u5B89\u88C5\u4EE5\u53CA\u6D41\u91CF\u4EE3\u7406

- \u542F\u52A8\u5668\u4EE5\u53CA\u542F\u52A8\u9879\u7BA1\u7406

### \u7834\u574F\u6027\u53D8\u66F4

- \u76F8\u5E94\u7684\u63D2\u4EF6\u5FC5\u987B\u5347\u7EA7\u5230 1.5.0

## [1.4.11] - 2022-11-10

### \u7279\u6027

- \u5B8C\u5584\u90E8\u5206\u602A\u7269\u540D\u79F0\u7FFB\u8BD1

- \u65B0\u589E mod \u4E0B\u8F7D\u754C\u9762\u7684 NFSW \u5F00\u5173

- \u65B0\u589E\u65E5\u8BED\u4E0E\u897F\u73ED\u7259\u8BED

- \u65B0\u589E\u5723\u9057\u7269\u8BCD\u6761\u53D6\u6D88\u5F3A\u5316\u6309\u94AE

### \u4FEE\u590D Bug

- \u4FEE\u6B63\u9519\u8BEF\u7684\u6587\u672C

## [1.4.10] - 2022-11-09

### \u7279\u6027

- \u66F4\u65B0\u5B8C\u6574\u7684\u4EBA\u7269\u3001\u6B66\u5668\u3001\u6750\u6599\u6570\u636E

## [1.4.9] - 2022-11-08

### \u7279\u6027

- \u589E\u52A0\u90E8\u5206 3.2 \u7248\u672C\u7684\u6570\u636E

- \u65B0\u589E mod \u5728\u7EBF\u4E0B\u8F7D\u529F\u80FD

### \u4FEE\u590D Bug

- \u4FEE\u6B63\u90E8\u5206\u9519\u8BEF\u7684\u5723\u9057\u7269 id

## [1.4.8] - 2022-10-26

### \u7279\u6027

- \u65B0\u589E\u5723\u9057\u7269\u7B49\u7EA7\u8C03\u6574

- \u5B8C\u5584\u90E8\u5206\u7FFB\u8BD1

- \u5728\u7EBF mod(\u6D4B\u8BD5)

## [1.4.7] - 2022-10-22

### \u7279\u6027

- \u6DFB\u52A0\u573A\u666F\u5217\u8868\u4E0E\u4F20\u9001\u6307\u4EE4

- \u6E05\u7406\u80CC\u5305\u529F\u80FD\u589E\u52A0\u53C2\u6570

- \u670D\u52A1\u5668\u5730\u5740\u652F\u6301\u57DF\u540D\uFF0C\u589E\u52A0\u5386\u53F2\u5217\u8868

### \u4FEE\u590D Bug

- \u4FEE\u6B63\u90E8\u5206\u9519\u8BEF\u7684\u5723\u9057\u7269 id

- \u4FEE\u590D\u90E8\u5206\u4E22\u5931\u7684\u6587\u5B57\u63D0\u793A

## [1.4.6] - 2022-10-17

### \u7279\u6027

- \u589E\u52A0\u4EFB\u52A1\u5217\u8868

## [1.4.5] - 2022-10-16

### \u7279\u6027

- \u602A\u7269\u5217\u8868\u4FEE\u6539\u6210\u5206\u7EC4\uFF0C\u52A0\u4E0A\u4E86 id \u4FBF\u4E8E\u641C\u7D22\uFF0C\u8865\u4E0A\u4E00\u90E8\u5206\u7FFB\u8BD1

## [1.4.4] - 2022-10-16

### \u7279\u6027

- \u7528\u5929\u6C14 json \u6587\u4EF6\u4E2D\u7684\u540D\u5B57\u66FF\u6362 id

- \u589E\u52A0\u602A\u7269\u5217\u8868(\u7531\u811A\u672C\u751F\u6210\uFF0C\u56E0\u6B64\u6682\u65F6\u8FD8\u6CA1\u6709\u7FFB\u8BD1)

## [1.4.3] - 2022-10-10

### \u7279\u6027

- \u6DFB\u52A0\u8F6F\u4EF6\u7248\u672C\u68C0\u6D4B\u4E0E\u5347\u7EA7\u529F\u80FD

- \u4FEE\u6539\u4E00\u952E\u5347\u7EA7\u529F\u80FD\u4E3A\u53EF\u9009\u7684(\u9700\u8981\u63D2\u4EF6\u5347\u7EA7\u5230 v1.4.1)

### \u4FEE\u590D Bug

- \u597D\u611F\u5EA6\u5347\u7EA7\u73B0\u5728\u80FD\u7ACB\u5373\u751F\u6548

## [1.4.2] - 2022-10-10

### \u7279\u6027

- \u589E\u52A0\u7CFB\u7EDF\u4EE3\u7406\u5207\u6362\u529F\u80FD

### \u4FEE\u590D Bug

- \u4FEE\u6B63\u9519\u8BEF\u7684\u5723\u9057\u7269 id

[1.5.0]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.11...v1.5.0
[1.4.11]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.10...v1.4.11
[1.4.10]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.9...v1.4.10
[1.4.9]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.8...v1.4.9
[1.4.8]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.7...v1.4.8
[1.4.7]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.6...v1.4.7
[1.4.6]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.5...v1.4.6
[1.4.5]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.4...v1.4.5
[1.4.4]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/jianxingxuejian/grasscutter-tools/releases/tag/v1.4.2
`,jt=`# Changelog

## [1.5.0] - 2022-11-24

### Features

- certificate installation and traffic proxy

- Launcher and startup item management

### Breaking Changes

- The corresponding plugin must be upgrade to 1.5.0

## [1.4.11] - 2022-11-10

### Features

- Improve the translation of some monster names

- Add NFSW switch to the mod download interface

- Add Japanese and Spanish

- Add a button to cancel the ehance of artifact

### Bug Fixes

- Fix the wrong text

## [1.4.10] - 2022-11-09

### Features

- Update complete character, weapon, and material data

## [1.4.9] - 2022-11-08

### Features

- Update some of the data from version 3.2

- Add mod online download function

### Bug Fixes

- Fix part of the wrong artifact id

## [1.4.8] - 2022-10-26

### Features

- Add artifact adjustment lv

- Improve some translation

- Online Mod(test)

## [1.4.7] - 2022-10-22

### Features

- Add scene list and tp command

- Improve some text translation and modification

- Clear Inventory function adds parameters

- Server address support domain name, add history list

### Bug Fixes

- Fix part of the wrong artifact id

- Fix some missing text tips

## [1.4.6] - 2022-10-17

### Features

- Add Quest list

## [1.4.5] - 2022-10-16

### Features

- The monster list is modified to include groups, with ids for easy searching

## [1.4.4] - 2022-10-16

### Features

- Replace the id with the name in the weather json file

- Add monster list

## [1.4.3] - 2022-10-12

### Features

- Add software version check and upgrade function

- modify levelUpAll to be optional(requires plugin upgrade to v1.4.1)

### Bug Fixes

- FetterLevel level-up now is immediately

## [1.4.2] - 2022-10-10

### Features

- Add system proxy switch

### Bug Fixes

- Fix the wrong artifact id

[1.5.0]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.11...v1.5.0
[1.4.11]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.10...v1.4.11
[1.4.10]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.9...v1.4.10
[1.4.9]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.8...v1.4.9
[1.4.8]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.7...v1.4.8
[1.4.7]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.6...v1.4.7
[1.4.6]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.5...v1.4.6
[1.4.5]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.4...v1.4.5
[1.4.4]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/jianxingxuejian/grasscutter-tools/releases/tag/v1.4.2
`,St={class:"flex-col items-center"},Mt={class:"text-8"},zt=d("div",{id:"content"},null,-1),Bt=U({__name:"Changelog",setup(s,{expose:o}){o({open:h});const{t}=H(),i=V(),n=$(!1);function h(){n.value=!0,an(()=>{const a=document.getElementById("content");if(!a)return;let l;i.locale==="zh-CN"?l=Ct:l=jt,a.innerHTML=L(Hn(l))})}return(a,l)=>{const u=cn,_=O;return q(),W(_,{show:e(n),"onUpdate:show":l[0]||(l[0]=f=>R(n)?n.value=f:null),class:"w-40% of-auto"},{default:v(()=>[r(u,{class:"h-80vh"},{default:v(()=>[d("div",St,[d("div",Mt,M(e(t)("changelog")),1),zt])]),_:1})]),_:1},8,["show"])}}});const It={class:"flex-col items-center gap-y-5"},Ft={class:"flex-center w-full"},Pt={class:"flex-center w-full"},At={class:"flex-center w-full"},Tt=U({__name:"StartupItems",setup(s,{expose:o}){o({show:k,launcherAll:j});const{t}=H(),i=V(),{launcher:n,mod:h,updateGamePath:a,updateModPath:l,updateAkebiPath:u,updateLauncher:_}=i,f=$(!1);function k(){f.value=!0}const x=()=>b(a),w=()=>b(l),g=()=>b(u);async function b(S){const c=await Fn();c&&await S(c)}async function j(){var S;try{const c=h.path;c&&n.modStart&&await E(c);const p=n.akebiPath;if(p&&n.akebiStart)await E(p);else{const m=n.gamePath;m&&n.gameStart&&await E(m)}}catch(c){(S=window.$message)==null||S.error(c)}}return(S,c)=>{const p=Tn,m=Pn,B=O;return q(),W(B,{show:e(f),"onUpdate:show":c[3]||(c[3]=y=>R(f)?f.value=y:null),preset:"card",title:e(t)("startup items"),"auto-focus":!1,class:"w-70%"},{default:v(()=>[d("div",It,[d("div",Ft,[r(p,{checked:e(n).gameStart,"onUpdate:checked":[c[0]||(c[0]=y=>e(n).gameStart=y),e(_)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),r(m,{value:e(n).gamePath,"button-text":e(t)("select"),placeholder:e(t)("select game"),onClick:x},null,8,["value","button-text","placeholder"])]),d("div",Pt,[r(p,{checked:e(n).modStart,"onUpdate:checked":[c[1]||(c[1]=y=>e(n).modStart=y),e(_)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),r(m,{value:e(h).path,"button-text":e(t)("select"),placeholder:e(t)("select 3dm"),onClick:w},null,8,["value","button-text","placeholder"])]),d("div",At,[r(p,{checked:e(n).akebiStart,"onUpdate:checked":[c[2]||(c[2]=y=>e(n).akebiStart=y),e(_)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),r(m,{value:e(n).akebiPath,"button-text":e(t)("select"),placeholder:e(t)("select akebi"),onClick:g},null,8,["value","button-text","placeholder"])])])]),_:1},8,["show","title"])}}});const Ut=Un(Tt,[["__scopeId","data-v-e60a3e73"]]),Vt={class:"flex-col items-center"},Zt={class:"text-5"},Lt=d("div",{id:"content"},null,-1),Ht=U({__name:"Updater",setup(s,{expose:o}){o({open:a});const{t}=H(),i=$(!1),n=$(!1);async function h(){var l,u;try{i.value=!0,await yn(),(l=window.$dialog)==null||l.success({title:t("install successful"),content:t("whether relaunch"),negativeText:t("cancel"),positiveText:t("relaunch"),onPositiveClick:()=>$n()})}catch(_){(u=window.$notification)==null||u.error({title:t("failed to update"),description:`error: ${_}`,content:t("try again")})}finally{i.value=!1}}function a(l){!l||(n.value=!0,an(()=>{const u=document.getElementById("content");!u||(u.innerHTML=L(l))}))}return(l,u)=>{const _=D,f=rn,k=Dn,x=cn,w=O;return q(),W(w,{show:e(n),"onUpdate:show":u[1]||(u[1]=g=>R(n)?n.value=g:null),"mask-closable":!1,class:"w-50%"},{default:v(()=>[r(x,null,{default:v(()=>[r(k,{show:e(i)},{default:v(()=>[d("div",Vt,[d("div",Zt,M(e(t)("new ver discover")),1),Lt,r(f,{class:"flex-center mt-4"},{default:v(()=>[r(_,{onClick:u[0]||(u[0]=g=>n.value=!1)},{default:v(()=>[Z(M(e(t)("cancel")),1)]),_:1}),r(_,{type:"success",onClick:h},{default:v(()=>[Z(M(e(t)("update")),1)]),_:1})]),_:1})])]),_:1},8,["show"])]),_:1})]),_:1},8,["show"])}}});const Rt={class:"flex-col px-10 gap-y-4"},Nt={class:"flex items-center"},Et={class:"text-8"},Dt={class:"flex-center grow"},Wt=d("span",{class:"text-8 flex-center"},"Grasscutter-Tools",-1),Ot={class:"ml-auto flex text-8 gap-x-2"},Gt={class:"flex-center"},Jt={class:"flex"},Kt={class:"text-5 mr-2"},Qt={class:"flex"},Yt={class:"text-5 mr-2"},Xt={class:"flex-center"},fe=U({__name:"index",setup(s){const{t:o}=H(),t=$(""),i=$(!1),n=$(),h=V(),{updateCheckTime:a,getServer:l}=V(),u=$(),_=$(),f=$();async function k(){var c,p;try{const m=await An();(c=window.$message)==null||c.success(m)}catch(m){(p=window.$message)==null||p.error(m)}}const x=$("8080"),w=$(!1);function g(c){if(!/^\d+$/.test(c))return!1;const p=Number(c);return p>0&&p<=65535}async function b(c){var p;try{c?(await X(l),await nn(x.value),w.value=!0):(await tn(),w.value=!1)}catch(m){(p=window.$message)==null||p.error(m)}}async function j(){var c;await X(l),await nn(x.value),w.value=!0,(c=_.value)==null||c.launcherAll()}async function S(c){var B,y;const p=Date.now(),m=h.update.lastCheckTime;if(c||!m||m&&m+216e5<p)try{const{shouldUpdate:P,manifest:I}=await Mn();P&&(I==null?void 0:I.body)?(n.value=JSON.parse(I.body)[h.locale],i.value=!0):(B=window.$message)==null||B.success(o("latest ver now"))}catch(P){(y=window.$notification)==null||y.error({title:o("failed get update info"),description:`error: ${P}`,content:o("retry manually")})}finally{a(p)}}return kn(()=>{var c;if(i.value){const p=(c=window.$notification)==null?void 0:c.info({title:o("new ver discover"),content:o("whether upgrade"),action:()=>C(D,{text:!0,type:"primary",onClick:()=>{var m;p==null||p.destroy(),(m=u.value)==null||m.open(n.value)}},{default:()=>o("confirm")})})}}),qn(async()=>t.value=await Cn()),jn(async()=>S()),Sn(window,"beforeunload",()=>{w.value&&tn()}),(c,p)=>{var K;const m=kt,B=Zn,y=vt,P=ht,I=rt,ln=In,un=zn,dn=Ln,G=rn,pn=tt,J=Bn,hn=Kn;return q(),z("div",Rt,[d("div",Nt,[d("div",Et,[r(m,{onClick:(K=e(f))==null?void 0:K.open},null,8,["onClick"])]),d("div",Dt,[Wt,r(B,{type:"success",size:"large",class:"ml-2 cursor-pointer",onClick:p[0]||(p[0]=A=>S(!0))},{default:v(()=>[Z(" v"+M(e(t)),1)]),_:1})]),d("div",Ot,[r(y),r(P),r(I)])]),r(e(Ht),{ref_key:"updaterRef",ref:u},null,512),r(e(Ut),{ref_key:"startupItemsRef",ref:_},null,512),r(e(Bt),{ref_key:"changelogRef",ref:f},null,512),d("div",Gt,[r(G,null,{default:v(()=>[r(e(D),{onClick:k},{default:v(()=>[Z(M(e(o)("install ca")),1)]),_:1}),r(ln),d("div",Jt,[d("span",Kt,M(e(o)("proxy port")),1),r(un,{value:e(x),"onUpdate:value":p[1]||(p[1]=A=>R(x)?x.value=A:null),"allow-input":g,class:"w-20!"},null,8,["value"])]),d("div",Qt,[d("span",Yt,M(e(o)("proxy start")),1),r(dn,{value:e(w),onUpdateValue:b},null,8,["value"])])]),_:1})]),d("div",Xt,[r(G,null,{default:v(()=>{var A;return[r(J,{text:e(o)("startup items"),onClick:(A=e(_))==null?void 0:A.show},{default:v(()=>[r(pn)]),_:1},8,["text","onClick"]),r(J,{text:e(o)("launch"),onClick:j},{default:v(()=>[r(hn)]),_:1},8,["text"])]}),_:1})])])}}});export{fe as default};
