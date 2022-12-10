import{t as Q,a as T,c1 as hn,b as Y,d as U,e as _n,u as on,g as E,i as gn,h as S,aV as fn,T as vn,c8 as xn,ak as wn,aR as bn,C as B,D as M,E as p,V as yn,H as N,G as V,r as C,Y as an,M as G,J as v,I as l,bg as z,K as e,bs as H,c9 as cn,ca as D,b7 as L,cb as kn,cc as $n,bC as O,z as Cn,_ as qn,cd as jn,af as Sn,ce as An,cf as W,bh as Pn,cg as zn}from"./index.70e151a2.js";import{a as Bn,_ as Fn}from"./MyButton.vuevuetypescriptsetuptruelang.4d974103.js";import{_ as Tn}from"./ServerInput.vuevuetypescriptsetuptruelang.20a30666.js";import{_ as In,a as Un,b as Vn}from"./logo-github.0f874e77.js";import{r as Ln,a as Z,s as Rn,_ as Mn,i as Nn,b as nn,p as tn,c as en}from"./SelectFile.vuevuetypescriptsetuptruelang.32bca88b.js";import{_ as Gn}from"./Checkbox.2ed4b219.js";import{_ as Hn}from"./plugin-vueexport-helper.2444895f.js";import{a as En}from"./Tooltip.eba157d8.js";import{_ as rn}from"./Space.2c35864f.js";import{_ as Wn}from"./Tag.b33fe103.js";import{a as Zn}from"./Switch.6a00dd23.js";import"./axios.d8aeeabd.js";import"./Dropdown.357f627d.js";import"./ChevronRight.119f7af9.js";import"./InputGroupLabel.54c07eee.js";import"./Popselect.312fb4be.js";import"./get-slot.8207e825.js";function On(a,i){const t=[];let r=0;for(const n of a.split(`
`)){if(/^## [v[\d.]+/.test(n)&&r++,i&&r>i)break;(n.startsWith("##")||n.startsWith("-"))&&t.push(n)}return t.join(`
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
 `,[hn()])]),T("spin-body",`
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
 `)])]),Jn={small:20,medium:18,large:16},Kn=Object.assign(Object.assign({},on.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Xn=U({name:"Spin",props:Kn,setup(a){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=_n(a),r=on("Spin","-spin",Dn,xn,a,i),n=E(()=>{const{size:s}=a,{common:{cubicBezierEaseInOut:u},self:d}=r.value,{opacitySpinning:h,color:x,textColor:w}=d,b=typeof s=="number"?wn(s):d[bn("size",s)];return{"--n-bezier":u,"--n-opacity-spinning":h,"--n-size":b,"--n-color":x,"--n-text-color":w}}),m=t?gn("spin",E(()=>{const{size:s}=a;return typeof s=="number"?String(s):s[0]}),n,a):void 0;return{mergedClsPrefix:i,compitableShow:En(a,["spinning","show"]),mergedStrokeWidth:E(()=>{const{strokeWidth:s}=a;if(s!==void 0)return s;const{size:u}=a;return Jn[typeof u=="number"?"medium":u]}),cssVars:t?void 0:n,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var a,i;const{$slots:t,mergedClsPrefix:r,description:n}=this,m=t.icon&&this.rotate,s=(n||t.description)&&S("div",{class:`${r}-spin-description`},n||((a=t.description)===null||a===void 0?void 0:a.call(t))),u=t.icon?S("div",{class:[`${r}-spin-body`,this.themeClass]},S("div",{class:[`${r}-spin`,m&&`${r}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),s):S("div",{class:[`${r}-spin-body`,this.themeClass]},S(fn,{clsPrefix:r,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),s);return(i=this.onRender)===null||i===void 0||i.call(this),t.default?S("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},S("div",{class:[`${r}-spin-content`,this.compitableShow&&`${r}-spin-content--spinning`]},t),S(vn,{name:"fade-in-transition"},{default:()=>this.compitableShow?u:null})):u}}),Qn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Yn=p("path",{fill:"currentColor",d:"M7.1 11.35q.35-.7.725-1.35q.375-.65.825-1.3l-1.4-.275l-2.1 2.1Zm12.05-6.875q-1.75.05-3.737 1.025q-1.988.975-3.613 2.6q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225q1.2-.825 2.25-1.875q1.625-1.625 2.6-3.6Q19.625 6.75 19.675 5q0-.1-.037-.2q-.038-.1-.113-.175q-.075-.075-.175-.113q-.1-.037-.2-.037Zm-5.5 6q-.575-.575-.575-1.413q0-.837.575-1.412t1.425-.575q.85 0 1.425.575q.575.575.575 1.412q0 .838-.575 1.413q-.575.575-1.425.575q-.85 0-1.425-.575Zm-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.812q-.65.363-1.35.713Zm8.775-13.35q.2 2.75-.9 5.362q-1.1 2.613-3.475 4.988l.5 2.475q.1.5-.05.975q-.15.475-.5.825L14 21.45q-.375.375-.9.287q-.525-.087-.725-.587l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725q-.1-.525.275-.9L5.825 7q.35-.35.838-.5q.487-.15.987-.05l2.475.5q2.375-2.375 4.988-3.475q2.612-1.1 5.362-.9q.2.025.4.112q.2.088.35.238q.15.15.237.35q.088.2.113.4Zm-17.65 12.3q.875-.875 2.137-.888q1.263-.012 2.138.863t.862 2.137q-.012 1.263-.887 2.138q-.625.625-2.087 1.075q-1.463.45-4.038.8q.35-2.575.8-4.038q.45-1.462 1.075-2.087Zm1.425 1.4q-.25.25-.5.913q-.25.662-.35 1.337q.675-.1 1.338-.337q.662-.238.912-.488q.3-.3.325-.725q.025-.425-.275-.725q-.3-.3-.725-.288q-.425.013-.725.313Z"},null,-1),nt=[Yn];function tt(a,i){return B(),M("svg",Qn,nt)}const et={name:"material-symbols-rocket-launch-outline-rounded",render:tt},st={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ot=yn('<g fill="none" stroke="currentColor" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-width="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"></animate></path></g>',1),at=[ot];function it(a,i){return B(),M("svg",st,at)}const ct={name:"line-md-plus",render:it},rt={class:"inline-block",viewBox:"0 0 32 32",width:"1em",height:"1em"},lt=p("path",{fill:"currentColor",d:"M24 24v2h2.46A5.94 5.94 0 0 1 22 28a6.007 6.007 0 0 1-6-6h-2a7.984 7.984 0 0 0 14 5.265V30h2v-6zm-2-10a8.04 8.04 0 0 0-6 2.735V14h-2v6h6v-2h-2.46A5.94 5.94 0 0 1 22 16a6.007 6.007 0 0 1 6 6h2a8.01 8.01 0 0 0-8-8z"},null,-1),ut=p("path",{fill:"currentColor",d:"M12 28H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v8h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4H2v2h2v5H2v2h2v5H2v2h2v4a2 2 0 0 0 2 2h6Z"},null,-1),dt=[lt,ut];function pt(a,i){return B(),M("svg",rt,dt)}const mt={name:"carbon-change-catalog",render:pt};var ht={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function sn(a){return a.replace(RegExp("^"+(a.match(/^(\t| )+/)||"")[0],"gm"),"")}function I(a){return(a+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R(a,i){var t,r,n,m,s,u=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,d=[],h="",x=i||{},w=0;function b(f){var q=ht[f[1]||""],A=d[d.length-1]==f;return q?q[1]?(A?d.pop():d.push(f),q[0|A]):q[0]:f}function y(){for(var f="";d.length;)f+=b(d[d.length-1]);return f}for(a=a.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(f,q,A){return x[q.toLowerCase()]=A,""}).replace(/^\n+|\n+$/g,"");n=u.exec(a);)r=a.substring(w,n.index),w=u.lastIndex,t=n[0],r.match(/[^\\](\\\\)*\\$/)||((s=n[3]||n[4])?t='<pre class="code '+(n[4]?"poetry":n[2].toLowerCase())+'"><code'+(n[2]?' class="language-'+n[2].toLowerCase()+'"':"")+">"+sn(I(s).replace(/^\n+|\n+$/g,""))+"</code></pre>":(s=n[6])?(s.match(/\./)&&(n[5]=n[5].replace(/^\d+/gm,"")),m=R(sn(n[5].replace(/^\s*[>*+.-]/gm,""))),s==">"?s="blockquote":(s=s.match(/\./)?"ol":"ul",m=m.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),t="<"+s+">"+m+"</"+s+">"):n[8]?t='<img src="'+I(n[8])+'" alt="'+I(n[7])+'">':n[10]?(h=h.replace("<a>",'<a href="'+I(n[11]||x[r.toLowerCase()])+'">'),t=y()+"</a>"):n[9]?t="<a>":n[12]||n[14]?t="<"+(s="h"+(n[14]?n[14].length:n[13]>"="?1:2))+">"+R(n[12]||n[15],x)+"</"+s+">":n[16]?t="<code>"+I(n[16])+"</code>":(n[17]||n[1])&&(t=b(n[17]||"--"))),h+=r,h+=t;return(h+a.substring(w)+y()).replace(/^\n+|\n+$/g,"")}const _t=`# \u53D8\u66F4\u65E5\u5FD7

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
`,ft={class:"flex-col items-center"},vt={class:"text-8"},xt=p("div",{id:"content"},null,-1),wt=U({__name:"Changelog",setup(a,{expose:i}){i({open:m});const{t}=N(),r=V(),n=C(!1);function m(){n.value=!0,an(()=>{const s=document.getElementById("content");if(!s)return;let u;r.locale==="zh-CN"?u=_t:u=gt,s.innerHTML=R(On(u))})}return(s,u)=>{const d=cn,h=D;return B(),G(h,{show:e(n),"onUpdate:show":u[0]||(u[0]=x=>H(n)?n.value=x:null),class:"w-40% of-auto"},{default:v(()=>[l(d,{class:"h-80vh"},{default:v(()=>[p("div",ft,[p("div",vt,z(e(t)("changelog")),1),xt])]),_:1})]),_:1},8,["show"])}}});const bt={class:"flex-col items-center gap-y-5"},yt={class:"flex-center w-full"},kt={class:"flex-center w-full"},$t={class:"flex-center w-full"},Ct={class:"flex-center w-full"},qt=U({__name:"StartupItems",setup(a,{expose:i}){i({show:b,launcherAll:_});const{t}=N(),r=V(),{launcher:n,mod:m,updateGamePath:s,updateModPath:u,updateAkebiPath:d,updateLauncher:h,updateGCPath:x}=r,w=C(!1);function b(){w.value=!0}const y=()=>F(x),f=()=>F(s),q=()=>F(u),A=()=>F(d);async function F(c){const o=await Rn();o&&await c(o)}async function _(){var c;try{const o=n.GCPath;o&&n.GCStart&&await Ln(o);const k=m.path;k&&n.modStart&&await Z(k);const $=n.akebiPath;if($&&n.akebiStart)await Z($);else{const j=n.gamePath;j&&n.gameStart&&await Z(j)}}catch(o){(c=window.$message)==null||c.error(o)}}return(c,o)=>{const k=Gn,$=Mn,j=D;return B(),G(j,{show:e(w),"onUpdate:show":o[4]||(o[4]=g=>H(w)?w.value=g:null),preset:"card",title:e(t)("startup items"),"auto-focus":!1,class:"w-70%"},{default:v(()=>[p("div",bt,[p("div",yt,[l(k,{checked:e(n).GCStart,"onUpdate:checked":[o[0]||(o[0]=g=>e(n).GCStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(n).GCPath,"button-text":e(t)("select"),placeholder:e(t)("select gc"),onClick:y},null,8,["value","button-text","placeholder"])]),p("div",kt,[l(k,{checked:e(n).gameStart,"onUpdate:checked":[o[1]||(o[1]=g=>e(n).gameStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(n).gamePath,"button-text":e(t)("select"),placeholder:e(t)("select game"),onClick:f},null,8,["value","button-text","placeholder"])]),p("div",$t,[l(k,{checked:e(n).modStart,"onUpdate:checked":[o[2]||(o[2]=g=>e(n).modStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(m).path,"button-text":e(t)("select"),placeholder:e(t)("select 3dm"),onClick:q},null,8,["value","button-text","placeholder"])]),p("div",Ct,[l(k,{checked:e(n).akebiStart,"onUpdate:checked":[o[3]||(o[3]=g=>e(n).akebiStart=g),e(h)],class:"w-7 mr-4"},null,8,["checked","onUpdate:checked"]),l($,{value:e(n).akebiPath,"button-text":e(t)("select"),placeholder:e(t)("select akebi"),onClick:A},null,8,["value","button-text","placeholder"])])])]),_:1},8,["show","title"])}}});const jt=Hn(qt,[["__scopeId","data-v-4c07da3e"]]),St={class:"flex-col items-center"},At={class:"text-5"},Pt=p("div",{id:"content"},null,-1),zt=U({__name:"Updater",setup(a,{expose:i}){i({open:s});const{t}=N(),r=C(!1),n=C(!1);async function m(){var u,d;try{r.value=!0,await kn(),(u=window.$dialog)==null||u.success({title:t("install successful"),content:t("whether relaunch"),negativeText:t("cancel"),positiveText:t("relaunch"),onPositiveClick:()=>$n()})}catch(h){(d=window.$notification)==null||d.error({title:t("failed to update"),description:`error: ${h}`,content:t("try again")})}finally{r.value=!1}}function s(u){!u||(n.value=!0,an(()=>{const d=document.getElementById("content");!d||(d.innerHTML=R(u))}))}return(u,d)=>{const h=O,x=rn,w=Xn,b=cn,y=D;return B(),G(y,{show:e(n),"onUpdate:show":d[1]||(d[1]=f=>H(n)?n.value=f:null),"mask-closable":!1,class:"w-50%"},{default:v(()=>[l(b,null,{default:v(()=>[l(w,{show:e(r)},{default:v(()=>[p("div",St,[p("div",At,z(e(t)("new ver discover")),1),Pt,l(x,{class:"flex-center mt-4"},{default:v(()=>[l(h,{onClick:d[0]||(d[0]=f=>n.value=!1)},{default:v(()=>[L(z(e(t)("cancel")),1)]),_:1}),l(h,{type:"success",onClick:m},{default:v(()=>[L(z(e(t)("update")),1)]),_:1})]),_:1})])]),_:1},8,["show"])]),_:1})]),_:1},8,["show"])}}});const Bt={class:"flex-col px-10 gap-y-4"},Ft={class:"flex items-center"},Tt={class:"text-8"},It={class:"flex-center grow"},Ut=p("span",{class:"text-8 flex-center"},"Grasscutter-Tools",-1),Vt={class:"ml-auto flex text-8 gap-x-2 cursor-pointer"},Lt={class:"flex-center"},Rt={class:"flex"},Mt={class:"text-5 mr-2"},Nt={class:"flex"},Gt={class:"text-5 mr-2"},Ht={class:"flex-center"},ce=U({__name:"index",setup(a){const{t:i}=N(),t=C(""),r=C(!1),n=C(),m=V(),{updateCheckTime:s,getServer:u}=V(),d=C(),h=C(),x=C();async function w(){var _,c;try{const o=await Nn();(_=window.$message)==null||_.success(o)}catch(o){(c=window.$message)==null||c.error(o)}}const b=C("8080"),y=C(!1);function f(_){if(!/^\d+$/.test(_))return!1;const c=Number(_);return c>0&&c<=65535}async function q(_){var c;try{_?(await nn(u),await tn(b.value),y.value=!0):(await en(),y.value=!1)}catch(o){(c=window.$message)==null||c.error(o)}}async function A(){var _;await nn(u),await tn(b.value),y.value=!0,(_=h.value)==null||_.launcherAll()}async function F(_){var k,$;const c=Date.now(),o=m.update.lastCheckTime;if(_||!o||o&&o+216e5<c)try{const{shouldUpdate:j,manifest:g}=await zn();j&&(g==null?void 0:g.body)?(n.value=JSON.parse(g.body)[m.locale],r.value=!0):(k=window.$message)==null||k.success(i("latest ver now"))}catch(j){($=window.$notification)==null||$.error({title:i("failed get update info"),description:`error: ${j}`,content:i("retry manually")})}finally{s(c)}}return Cn(()=>{var _;if(r.value){const c=(_=window.$notification)==null?void 0:_.info({title:i("new ver discover"),content:i("whether upgrade"),action:()=>S(O,{text:!0,type:"primary",onClick:()=>{var o;c==null||c.destroy(),(o=d.value)==null||o.open(n.value)}},{default:()=>i("confirm")})})}}),qn(async()=>t.value=await jn()),Sn(async()=>F()),An(window,"beforeunload",()=>{y.value&&en()}),(_,c)=>{var X;const o=mt,k=Wn,$=In,j=Un,g=Vn,ln=Tn,un=Bn,dn=Zn,J=rn,pn=ct,K=Fn,mn=et;return B(),M("div",Bt,[p("div",Ft,[p("div",Tt,[l(o,{class:"cursor-pointer",onClick:(X=e(x))==null?void 0:X.open},null,8,["onClick"])]),p("div",It,[Ut,l(k,{type:"success",size:"large",class:"ml-2 cursor-pointer",onClick:c[0]||(c[0]=P=>F(!0))},{default:v(()=>[L(" v"+z(e(t)),1)]),_:1})]),p("div",Vt,[l($,{onClick:c[1]||(c[1]=P=>e(W)("https://github.com/jianxingxuejian/grasscutter-tools"))}),l(j,{onClick:c[2]||(c[2]=P=>e(W)("https://discord.com/invite/qGyWhAUApU"))}),e(m).locale==="zh-CN"?(B(),G(g,{key:0,onClick:c[3]||(c[3]=P=>e(W)("https://qm.qq.com/cgi-bin/qm/qr?k=0VnTLjWPz76RSScycDyp2_X68w6b73gO&jump_from=webapi&authKey=AO4rT4mzAw8krhEVDIMECCwFX7wRmGJA9+ui7AK7aQRA3l5BCeS1h/3pXT2MCkzZ"))})):Pn("v-if",!0)])]),l(e(zt),{ref_key:"updaterRef",ref:d},null,512),l(e(jt),{ref_key:"startupItemsRef",ref:h},null,512),l(e(wt),{ref_key:"changelogRef",ref:x},null,512),p("div",Lt,[l(J,null,{default:v(()=>[l(e(O),{onClick:w},{default:v(()=>[L(z(e(i)("install ca")),1)]),_:1}),l(ln),p("div",Rt,[p("span",Mt,z(e(i)("proxy port")),1),l(un,{value:e(b),"onUpdate:value":c[4]||(c[4]=P=>H(b)?b.value=P:null),"allow-input":f,class:"w-20!"},null,8,["value"])]),p("div",Nt,[p("span",Gt,z(e(i)("proxy start")),1),l(dn,{value:e(y),onUpdateValue:q},null,8,["value"])])]),_:1})]),p("div",Ht,[l(J,null,{default:v(()=>{var P;return[l(K,{text:e(i)("startup items"),onClick:(P=e(h))==null?void 0:P.show},{default:v(()=>[l(pn)]),_:1},8,["text","onClick"]),l(K,{text:e(i)("launch"),onClick:A},{default:v(()=>[l(mn)]),_:1},8,["text"])]}),_:1})])])}}});export{ce as default};
