import{t as Q,a as T,c1 as mn,b as Y,d as U,e as hn,u as on,g as W,i as _n,h as S,bd as gn,T as fn,c8 as vn,b9 as xn,b4 as wn,C as z,D as R,E as p,V as bn,H as N,G as M,r as j,Y as sn,M as G,J as v,I as l,bg as P,K as e,bs as H,c9 as an,ca as D,aW as V,cb as yn,cc as kn,bu as O,z as $n,_ as jn,cd as Cn,b5 as qn,ce as E,bh as Sn,cf as An}from"./index.27356a93.js";import{_ as Fn}from"./MyButton.vuevuetypescriptsetuptruelang.aa8045ee.js";import{_ as Pn}from"./ServerInput.vuevuetypescriptsetuptruelang.63f9f43d.js";import{_ as zn,a as Bn,b as Tn}from"./logo-github.70f42c86.js";import{r as In,a as Z,s as Un,i as Mn,b as nn,p as tn,c as Vn,g as Ln}from"./invoke.801875be.js";import{_ as Rn}from"./SelectFile.vuevuetypescriptsetuptruelang.67bb1111.js";import{_ as Nn}from"./Checkbox.93859036.js";import{_ as Gn}from"./plugin-vueexport-helper.2444895f.js";import{a as Hn}from"./Tooltip.e914c329.js";import{_ as rn}from"./Space.f3e5e219.js";import{_ as Wn}from"./Tag.3448fb8f.js";import{_ as En}from"./Input.f43e3732.js";import{a as Zn}from"./Switch.8a18fe32.js";import"./axios.1f9f732d.js";import"./Dropdown.7f107304.js";import"./ChevronRight.6061a67f.js";import"./utils.86cb35f4.js";import"./InputGroupLabel.80fb2f3b.js";import"./Popselect.4a078e72.js";import"./get-slot.8207e825.js";function On(a,i){const t=[];let c=0;for(const n of a.split(`
`)){if(/^## [v[\d.]+/.test(n)&&c++,i&&c>i)break;(n.startsWith("##")||n.startsWith("-"))&&t.push(n)}return t.join(`
`)}const Dn=Q([Q("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),T("spin-container",{position:"relative"},[T("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[mn()])]),T("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),T("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[Y("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),T("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),T("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[Y("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Jn={small:20,medium:18,large:16},Kn=Object.assign(Object.assign({},on.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Xn=U({name:"Spin",props:Kn,setup(a){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=hn(a),c=on("Spin","-spin",Dn,vn,a,i),n=W(()=>{const{size:o}=a,{common:{cubicBezierEaseInOut:u},self:d}=c.value,{opacitySpinning:h,color:x,textColor:w}=d,b=typeof o=="number"?xn(o):d[wn("size",o)];return{"--n-bezier":u,"--n-opacity-spinning":h,"--n-size":b,"--n-color":x,"--n-text-color":w}}),m=t?_n("spin",W(()=>{const{size:o}=a;return typeof o=="number"?String(o):o[0]}),n,a):void 0;return{mergedClsPrefix:i,compitableShow:Hn(a,["spinning","show"]),mergedStrokeWidth:W(()=>{const{strokeWidth:o}=a;if(o!==void 0)return o;const{size:u}=a;return Jn[typeof u=="number"?"medium":u]}),cssVars:t?void 0:n,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var a,i;const{$slots:t,mergedClsPrefix:c,description:n}=this,m=t.icon&&this.rotate,o=(n||t.description)&&S("div",{class:`${c}-spin-description`},n||((a=t.description)===null||a===void 0?void 0:a.call(t))),u=t.icon?S("div",{class:[`${c}-spin-body`,this.themeClass]},S("div",{class:[`${c}-spin`,m&&`${c}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),o):S("div",{class:[`${c}-spin-body`,this.themeClass]},S(gn,{clsPrefix:c,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${c}-spin`}),o);return(i=this.onRender)===null||i===void 0||i.call(this),t.default?S("div",{class:[`${c}-spin-container`,this.themeClass],style:this.cssVars},S("div",{class:[`${c}-spin-content`,this.compitableShow&&`${c}-spin-content--spinning`]},t),S(fn,{name:"fade-in-transition"},{default:()=>this.compitableShow?u:null})):u}}),Qn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Yn=p("path",{fill:"currentColor",d:"M7.1 11.35q.35-.7.725-1.35q.375-.65.825-1.3l-1.4-.275l-2.1 2.1Zm12.05-6.875q-1.75.05-3.737 1.025q-1.988.975-3.613 2.6q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225q1.2-.825 2.25-1.875q1.625-1.625 2.6-3.6Q19.625 6.75 19.675 5q0-.1-.037-.2q-.038-.1-.113-.175q-.075-.075-.175-.113q-.1-.037-.2-.037Zm-5.5 6q-.575-.575-.575-1.413q0-.837.575-1.412t1.425-.575q.85 0 1.425.575q.575.575.575 1.412q0 .838-.575 1.413q-.575.575-1.425.575q-.85 0-1.425-.575Zm-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.812q-.65.363-1.35.713Zm8.775-13.35q.2 2.75-.9 5.362q-1.1 2.613-3.475 4.988l.5 2.475q.1.5-.05.975q-.15.475-.5.825L14 21.45q-.375.375-.9.287q-.525-.087-.725-.587l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725q-.1-.525.275-.9L5.825 7q.35-.35.838-.5q.487-.15.987-.05l2.475.5q2.375-2.375 4.988-3.475q2.612-1.1 5.362-.9q.2.025.4.112q.2.088.35.238q.15.15.237.35q.088.2.113.4Zm-17.65 12.3q.875-.875 2.137-.888q1.263-.012 2.138.863t.862 2.137q-.012 1.263-.887 2.138q-.625.625-2.087 1.075q-1.463.45-4.038.8q.35-2.575.8-4.038q.45-1.462 1.075-2.087Zm1.425 1.4q-.25.25-.5.913q-.25.662-.35 1.337q.675-.1 1.338-.337q.662-.238.912-.488q.3-.3.325-.725q.025-.425-.275-.725q-.3-.3-.725-.288q-.425.013-.725.313Z"},null,-1),nt=[Yn];function tt(a,i){return z(),R("svg",Qn,nt)}const et={name:"material-symbols-rocket-launch-outline-rounded",render:tt},ot={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},st=bn('<g fill="none" stroke="currentColor" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-width="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"></animate></path></g>',1),at=[st];function it(a,i){return z(),R("svg",ot,at)}const rt={name:"line-md-plus",render:it},ct={class:"inline-block",viewBox:"0 0 32 32",width:"1em",height:"1em"},lt=p("path",{fill:"currentColor",d:"M24 24v2h2.46A5.94 5.94 0 0 1 22 28a6.007 6.007 0 0 1-6-6h-2a7.984 7.984 0 0 0 14 5.265V30h2v-6zm-2-10a8.04 8.04 0 0 0-6 2.735V14h-2v6h6v-2h-2.46A5.94 5.94 0 0 1 22 16a6.007 6.007 0 0 1 6 6h2a8.01 8.01 0 0 0-8-8z"},null,-1),ut=p("path",{fill:"currentColor",d:"M12 28H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v8h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4H2v2h2v5H2v2h2v5H2v2h2v4a2 2 0 0 0 2 2h6Z"},null,-1),dt=[lt,ut];function pt(a,i){return z(),R("svg",ct,dt)}const mt={name:"carbon-change-catalog",render:pt};var ht={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function en(a){return a.replace(RegExp("^"+(a.match(/^(\t| )+/)||"")[0],"gm"),"")}function I(a){return(a+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function L(a,i){var t,c,n,m,o,u=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,d=[],h="",x=i||{},w=0;function b(f){var C=ht[f[1]||""],A=d[d.length-1]==f;return C?C[1]?(A?d.pop():d.push(f),C[0|A]):C[0]:f}function y(){for(var f="";d.length;)f+=b(d[d.length-1]);return f}for(a=a.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(f,C,A){return x[C.toLowerCase()]=A,""}).replace(/^\n+|\n+$/g,"");n=u.exec(a);)c=a.substring(w,n.index),w=u.lastIndex,t=n[0],c.match(/[^\\](\\\\)*\\$/)||((o=n[3]||n[4])?t='<pre class="code '+(n[4]?"poetry":n[2].toLowerCase())+'"><code'+(n[2]?' class="language-'+n[2].toLowerCase()+'"':"")+">"+en(I(o).replace(/^\n+|\n+$/g,""))+"</code></pre>":(o=n[6])?(o.match(/\./)&&(n[5]=n[5].replace(/^\d+/gm,"")),m=L(en(n[5].replace(/^\s*[>*+.-]/gm,""))),o==">"?o="blockquote":(o=o.match(/\./)?"ol":"ul",m=m.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),t="<"+o+">"+m+"</"+o+">"):n[8]?t='<img src="'+I(n[8])+'" alt="'+I(n[7])+'">':n[10]?(h=h.replace("<a>",'<a href="'+I(n[11]||x[c.toLowerCase()])+'">'),t=y()+"</a>"):n[9]?t="<a>":n[12]||n[14]?t="<"+(o="h"+(n[14]?n[14].length:n[13]>"="?1:2))+">"+L(n[12]||n[15],x)+"</"+o+">":n[16]?t="<code>"+I(n[16])+"</code>":(n[17]||n[1])&&(t=b(n[17]||"--"))),h+=c,h+=t;return(h+a.substring(w)+y()).replace(/^\n+|\n+$/g,"")}const _t=`# \u53D8\u66F4\u65E5\u5FD7

## [1.5.4] - 2022-12-26

### \u7279\u6027

- \u6DFB\u52A0 /verify \u6307\u4EE4\u7528\u4E8E\u83B7\u53D6\u9A8C\u8BC1\u7801

- \u5728\u505C\u6B62\u6D41\u91CF\u4EE3\u7406\u6216\u8005\u9000\u51FA\u7A0B\u5E8F\u540E\uFF0C\u6062\u590D\u4E4B\u524D\u7684\u4EE3\u7406\u8BBE\u7F6E

- \u53F3\u952E\u5237\u65B0\u4E0D\u4F1A\u518D\u5F71\u54CD\u4EE3\u7406\u72B6\u6001

## [1.5.3] - 2022-12-24

### \u7279\u6027

- \u65B0\u589E\u4E86\u4E00\u9879\u795E\u79D8\u529F\u80FD

- \u8C03\u6574\u81EA\u52A8\u5BBD\u5EA6\u548C\u6EDA\u52A8\u6761\u5BBD\u5EA6

## [1.5.2] - 2022-12-11

### \u7279\u6027

- Mod \u6839\u636E ini \u6587\u4EF6\u540D\u81EA\u52A8\u5B8C\u6210\u5206\u7C7B\uFF08\u4EC5\u5B8C\u6210\u89D2\u8272\u90E8\u5206\uFF09

- \u66F4\u65B0\u90E8\u5206\u4EFB\u52A1\u6570\u636E

- \u65B0\u589E\u5723\u9057\u7269\u751F\u6210\u7684\u6570\u91CF\u53C2\u6570

### \u4FEE\u590D Bug

- Mod \u5206\u7C7B\u7ED3\u679C\u5E76\u672A\u5199\u5165\u672C\u5730

- \u9519\u8BEF\u7684\u6587\u6848

## [1.5.1] - 2022-12-01

### \u7279\u6027

- \u542F\u52A8\u9879\u65B0\u589E\u5272\u8349\u673A

- \u65B0\u589E\u53D8\u66F4\u65E5\u5FD7\u67E5\u770B

- \u65B0\u589E\u4EE3\u7406\u7AEF\u53E3\u914D\u7F6E

- \u672C\u5730 mod \u652F\u6301\u5206\u7C7B\u4E0E\u7B5B\u9009

- \u641C\u7D22\u65F6\u5FFD\u7565\u5927\u5C0F\u5199

- spawn \u547D\u4EE4\u65B0\u589E\u8840\u91CF\u3001\u653B\u51FB\u529B\u7B49\u53C2\u6570

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

[1.5.4]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.3...v1.5.4
[1.5.3]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.0...v1.5.1
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
`,gt=`# Changelog

## [1.5.4] - 2022-12-26

### Features

- add /verify command to get mail verify code

- restore the previous proxy settings after stopping proxy traffic or exit the program

- right click refresh will no longer affect the proxy state

## [1.5.3] - 2022-12-24

### Features

- add a mystery feature

- adjust automatic width and scrollbar width of cascader

## [1.5.2] - 2022-12-11

### Features

- mods auto-complete classification based on ini file name (only the characters part is completed)

- update some quest data

- add num param of artifact generate

### Bug Fixes

- mods classification results are not written locally

- Wrong text

## [1.5.1] - 2022-12-01

### Features

- Add Grasscutter to startup items

- Add changelog view

- Add proxy port setting

- Local mods support category and filter

- Ignore case when searching

- Spwn command add maxhp,hp,atk,def parameters

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

[1.5.4]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.3...v1.5.4
[1.5.3]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/jianxingxuejian/grasscutter-tools/compare/v1.5.0...v1.5.1
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
`,ft={class:"flex-col items-center"},vt={class:"text-8"},xt=p("div",{id:"content"},null,-1),wt=U({__name:"Changelog",setup(a,{expose:i}){i({open:m});const{t}=N(),c=M(),n=j(!1);function m(){n.value=!0,sn(()=>{const o=document.getElementById("content");if(!o)return;let u;c.locale==="zh-CN"?u=_t:u=gt,o.innerHTML=L(On(u))})}return(o,u)=>{const d=an,h=D;return z(),G(h,{show:e(n),"onUpdate:show":u[0]||(u[0]=x=>H(n)?n.value=x:null),class:"w-40% of-auto"},{default:v(()=>[l(d,{class:"h-80vh"},{default:v(()=>[p("div",ft,[p("div",vt,P(e(t)("changelog")),1),xt])]),_:1})]),_:1},8,["show"])}}});const bt={class:"flex-col items-center gap-y-5"},yt={class:"flex-center w-full"},kt={class:"flex-center w-full"},$t={class:"flex-center w-full"},jt={class:"flex-center w-full"},Ct=U({__name:"StartupItems",setup(a,{expose:i}){i({show:b,launcherAll:_});const{t}=N(),c=M(),{launcher:n,mod:m,updateGamePath:o,updateModPath:u,updateAkebiPath:d,updateLauncher:h,updateGCPath:x}=c,w=j(!1);function b(){w.value=!0}const y=()=>B(x),f=()=>B(o),C=()=>B(u),A=()=>B(d);async function B(r){const s=await Un();s&&await r(s)}async function _(){var r;try{const s=n.GCPath;s&&n.GCStart&&await In(s);const k=m.path;k&&n.modStart&&await Z(k);const $=n.akebiPath;if($&&n.akebiStart)await Z($);else{const q=n.gamePath;q&&n.gameStart&&await Z(q)}}catch(s){(r=window.$message)==null||r.error(s)}}return(r,s)=>{const k=Nn,$=Rn,q=D;return z(),G(q,{show:e(w),"onUpdate:show":s[4]||(s[4]=g=>H(w)?w.value=g:null),preset:"card",title:e(t)("startup items"),"auto-focus":!1,class:"w-70%"},{default:v(()=>[p("div",bt,[p("div",yt,[l(k,{checked:e(n).GCStart,"onUpdate:checked":[s[0]||(s[0]=g=>e(n).GCStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(n).GCPath,"button-text":e(t)("select"),placeholder:e(t)("select gc"),onClick:y},null,8,["value","button-text","placeholder"])]),p("div",kt,[l(k,{checked:e(n).gameStart,"onUpdate:checked":[s[1]||(s[1]=g=>e(n).gameStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(n).gamePath,"button-text":e(t)("select"),placeholder:e(t)("select game"),onClick:f},null,8,["value","button-text","placeholder"])]),p("div",$t,[l(k,{checked:e(n).modStart,"onUpdate:checked":[s[2]||(s[2]=g=>e(n).modStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(m).path,"button-text":e(t)("select"),placeholder:e(t)("select 3dm"),onClick:C},null,8,["value","button-text","placeholder"])]),p("div",jt,[l(k,{checked:e(n).akebiStart,"onUpdate:checked":[s[3]||(s[3]=g=>e(n).akebiStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(n).akebiPath,"button-text":e(t)("select"),placeholder:e(t)("select akebi"),onClick:A},null,8,["value","button-text","placeholder"])])])]),_:1},8,["show","title"])}}});const qt=Gn(Ct,[["__scopeId","data-v-4c07da3e"]]),St={class:"flex-col items-center"},At={class:"text-5"},Ft=p("div",{id:"content"},null,-1),Pt=U({__name:"Updater",setup(a,{expose:i}){i({open:o});const{t}=N(),c=j(!1),n=j(!1);async function m(){var u,d;try{c.value=!0,await yn(),(u=window.$dialog)==null||u.success({title:t("install successful"),content:t("whether relaunch"),negativeText:t("cancel"),positiveText:t("relaunch"),onPositiveClick:()=>kn()})}catch(h){(d=window.$notification)==null||d.error({title:t("failed to update"),description:`error: ${h}`,content:t("try again")})}finally{c.value=!1}}function o(u){!u||(n.value=!0,sn(()=>{const d=document.getElementById("content");!d||(d.innerHTML=L(u))}))}return(u,d)=>{const h=O,x=rn,w=Xn,b=an,y=D;return z(),G(y,{show:e(n),"onUpdate:show":d[1]||(d[1]=f=>H(n)?n.value=f:null),"mask-closable":!1,class:"w-50%"},{default:v(()=>[l(b,null,{default:v(()=>[l(w,{show:e(c)},{default:v(()=>[p("div",St,[p("div",At,P(e(t)("new ver discover")),1),Ft,l(x,{class:"flex-center mt-4"},{default:v(()=>[l(h,{onClick:d[0]||(d[0]=f=>n.value=!1)},{default:v(()=>[V(P(e(t)("cancel")),1)]),_:1}),l(h,{type:"success",onClick:m},{default:v(()=>[V(P(e(t)("update")),1)]),_:1})]),_:1})])]),_:1},8,["show"])]),_:1})]),_:1},8,["show"])}}});const zt={class:"flex-col px-10 gap-y-4"},Bt={class:"flex items-center"},Tt={class:"text-8"},It={class:"flex-center grow"},Ut=p("span",{class:"text-8 flex-center"},"Grasscutter-Tools",-1),Mt={class:"ml-auto flex text-8 gap-x-2 cursor-pointer"},Vt={class:"flex-center"},Lt={class:"flex"},Rt={class:"text-5 mr-2"},Nt={class:"flex"},Gt={class:"text-5 mr-2"},Ht={class:"flex-center"},ue=U({__name:"index",setup(a){const{t:i}=N(),t=j(""),c=j(!1),n=j(),m=M(),{updateCheckTime:o,getServer:u}=M(),d=j(),h=j(),x=j();async function w(){var _,r;try{const s=await Mn();(_=window.$message)==null||_.success(s)}catch(s){(r=window.$message)==null||r.error(s)}}const b=j("8080"),y=j(!1);function f(_){if(!/^\d+$/.test(_))return!1;const r=Number(_);return r>0&&r<=65535}async function C(_){var r;try{_?(await nn(u),await tn(b.value),y.value=!0):(await Vn(),y.value=!1)}catch(s){(r=window.$message)==null||r.error(s)}}async function A(){var _;await nn(u),await tn(b.value),y.value=!0,(_=h.value)==null||_.launcherAll()}async function B(_){var k,$;const r=Date.now(),s=m.update.lastCheckTime;if(_||!s||s&&s+216e5<r)try{const{shouldUpdate:q,manifest:g}=await An();q&&(g==null?void 0:g.body)?(n.value=JSON.parse(g.body)[m.locale],c.value=!0):(k=window.$message)==null||k.success(i("latest ver now"))}catch(q){($=window.$notification)==null||$.error({title:i("failed get update info"),description:`error: ${q}`,content:i("retry manually")})}finally{o(r)}}return $n(()=>{var _;if(c.value){const r=(_=window.$notification)==null?void 0:_.info({title:i("new ver discover"),content:i("whether upgrade"),action:()=>S(O,{text:!0,type:"primary",onClick:()=>{var s;r==null||r.destroy(),(s=d.value)==null||s.open(n.value)}},{default:()=>i("confirm")})})}}),jn(async()=>t.value=await Cn()),qn(async()=>{B(),y.value=await Ln()}),(_,r)=>{var X;const s=mt,k=Wn,$=zn,q=Bn,g=Tn,cn=Pn,ln=En,un=Zn,J=rn,dn=rt,K=Fn,pn=et;return z(),R("div",zt,[p("div",Bt,[p("div",Tt,[l(s,{class:"cursor-pointer",onClick:(X=e(x))==null?void 0:X.open},null,8,["onClick"])]),p("div",It,[Ut,l(k,{type:"success",size:"large",class:"ml-2 cursor-pointer",onClick:r[0]||(r[0]=F=>B(!0))},{default:v(()=>[V(" v"+P(e(t)),1)]),_:1})]),p("div",Mt,[l($,{onClick:r[1]||(r[1]=F=>e(E)("https://github.com/jianxingxuejian/grasscutter-tools"))}),l(q,{onClick:r[2]||(r[2]=F=>e(E)("https://discord.com/invite/qGyWhAUApU"))}),e(m).locale==="zh-CN"?(z(),G(g,{key:0,onClick:r[3]||(r[3]=F=>e(E)("https://qm.qq.com/cgi-bin/qm/qr?k=0VnTLjWPz76RSScycDyp2_X68w6b73gO&jump_from=webapi&authKey=AO4rT4mzAw8krhEVDIMECCwFX7wRmGJA9+ui7AK7aQRA3l5BCeS1h/3pXT2MCkzZ"))})):Sn("v-if",!0)])]),l(e(Pt),{ref_key:"updaterRef",ref:d},null,512),l(e(qt),{ref_key:"startupItemsRef",ref:h},null,512),l(e(wt),{ref_key:"changelogRef",ref:x},null,512),p("div",Vt,[l(J,null,{default:v(()=>[l(e(O),{onClick:w},{default:v(()=>[V(P(e(i)("install ca")),1)]),_:1}),l(cn),p("div",Lt,[p("span",Rt,P(e(i)("proxy port")),1),l(ln,{value:e(b),"onUpdate:value":r[4]||(r[4]=F=>H(b)?b.value=F:null),"allow-input":f,class:"w-20!"},null,8,["value"])]),p("div",Nt,[p("span",Gt,P(e(i)("proxy start")),1),l(un,{value:e(y),onUpdateValue:C},null,8,["value"])])]),_:1})]),p("div",Ht,[l(J,null,{default:v(()=>{var F;return[l(K,{text:e(i)("startup items"),onClick:(F=e(h))==null?void 0:F.show},{default:v(()=>[l(dn)]),_:1},8,["text","onClick"]),l(K,{text:e(i)("launch"),onClick:A},{default:v(()=>[l(pn)]),_:1},8,["text"])]}),_:1})])])}}});export{ue as default};
