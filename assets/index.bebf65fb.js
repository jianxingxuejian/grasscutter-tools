import{t as R,a as w,b$ as O,b as N,d as B,e as W,u as E,g as z,i as H,h,bd as M,T as j,c9 as K,b9 as q,ae as G,H as L,r as x,C as P,M as J,J as y,I as v,E as $,bg as k,K as b,b3 as S,ca as A,cb as X,a3 as Y,bD as U,cc as F,cd as Q,G as V,z as Z,b5 as ee,D as te,bt as ne,ce as se,cf as oe}from"./index.a4948bda.js";import{a as ae}from"./use-compitable.45bcdfc9.js";import{_ as D}from"./Space.27f4516e.js";import{_ as ie}from"./Tag.e5a42870.js";import{_ as re}from"./Switch.de9118d9.js";import"./get-slot.5d64528d.js";const ce=R([R("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),w("spin-container",{position:"relative"},[w("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[O()])]),w("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),w("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[N("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),w("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),w("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[N("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),le={small:20,medium:18,large:16},ue=Object.assign(Object.assign({},E.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),pe=B({name:"Spin",props:ue,setup(s){const{mergedClsPrefixRef:l,inlineThemeDisabled:t}=W(s),o=E("Spin","-spin",ce,K,s,l),e=z(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:r},self:a}=o.value,{opacitySpinning:p,color:f,textColor:c}=a,d=typeof n=="number"?q(n):a[G("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":p,"--n-size":d,"--n-color":f,"--n-text-color":c}}),i=t?H("spin",z(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),e,s):void 0;return{mergedClsPrefix:l,compitableShow:ae(s,["spinning","show"]),mergedStrokeWidth:z(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:r}=s;return le[typeof r=="number"?"medium":r]}),cssVars:t?void 0:e,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var s,l;const{$slots:t,mergedClsPrefix:o,description:e}=this,i=t.icon&&this.rotate,n=(e||t.description)&&h("div",{class:`${o}-spin-description`},e||((s=t.description)===null||s===void 0?void 0:s.call(t))),r=t.icon?h("div",{class:[`${o}-spin-body`,this.themeClass]},h("div",{class:[`${o}-spin`,i&&`${o}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),n):h("div",{class:[`${o}-spin-body`,this.themeClass]},h(M,{clsPrefix:o,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${o}-spin`}),n);return(l=this.onRender)===null||l===void 0||l.call(this),t.default?h("div",{class:[`${o}-spin-container`,this.themeClass],style:this.cssVars},h("div",{class:[`${o}-spin-content`,this.compitableShow&&`${o}-spin-content--spinning`]},t),h(j,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});var de={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function I(s){return s.replace(RegExp("^"+(s.match(/^(\t| )+/)||"")[0],"gm"),"")}function C(s){return(s+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T(s,l){var t,o,e,i,n,r=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,a=[],p="",f=l||{},c=0;function d(u){var m=de[u[1]||""],g=a[a.length-1]==u;return m?m[1]?(g?a.pop():a.push(u),m[0|g]):m[0]:u}function _(){for(var u="";a.length;)u+=d(a[a.length-1]);return u}for(s=s.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(u,m,g){return f[m.toLowerCase()]=g,""}).replace(/^\n+|\n+$/g,"");e=r.exec(s);)o=s.substring(c,e.index),c=r.lastIndex,t=e[0],o.match(/[^\\](\\\\)*\\$/)||((n=e[3]||e[4])?t='<pre class="code '+(e[4]?"poetry":e[2].toLowerCase())+'"><code'+(e[2]?' class="language-'+e[2].toLowerCase()+'"':"")+">"+I(C(n).replace(/^\n+|\n+$/g,""))+"</code></pre>":(n=e[6])?(n.match(/\./)&&(e[5]=e[5].replace(/^\d+/gm,"")),i=T(I(e[5].replace(/^\s*[>*+.-]/gm,""))),n==">"?n="blockquote":(n=n.match(/\./)?"ol":"ul",i=i.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),t="<"+n+">"+i+"</"+n+">"):e[8]?t='<img src="'+C(e[8])+'" alt="'+C(e[7])+'">':e[10]?(p=p.replace("<a>",'<a href="'+C(e[11]||f[o.toLowerCase()])+'">'),t=_()+"</a>"):e[9]?t="<a>":e[12]||e[14]?t="<"+(n="h"+(e[14]?e[14].length:e[13]>"="?1:2))+">"+T(e[12]||e[15],f)+"</"+n+">":e[16]?t="<code>"+C(e[16])+"</code>":(e[17]||e[1])&&(t=d(e[17]||"--"))),p+=o,p+=t;return(p+s.substring(c)+_()).replace(/^\n+|\n+$/g,"")}const fe={class:"flex-col items-center"},me={class:"text-5"},_e=$("div",{id:"content"},null,-1),ge=B({__name:"Updater",setup(s,{expose:l}){const{t}=L(),o=x(!1),e=x(!1);async function i(){var r,a;try{o.value=!0,await A(),(r=window.$dialog)==null||r.success({title:t("install successful"),content:t("whether relaunch"),negativeText:t("cancel"),positiveText:t("relaunch"),onPositiveClick:()=>X()})}catch(p){(a=window.$notification)==null||a.error({title:t("failed to update"),description:`error: ${p}`,content:t("try again")})}finally{o.value=!1}}function n(r){r&&(e.value=!0,Y(()=>{const a=document.getElementById("content");a&&(a.innerHTML=T(r))}))}return l({open:n}),(r,a)=>{const p=U,f=D,c=pe,d=F,_=Q;return P(),J(_,{show:e.value,"onUpdate:show":a[1]||(a[1]=u=>e.value=u),"mask-closable":!1,class:"w-50%"},{default:y(()=>[v(d,null,{default:y(()=>[v(c,{show:o.value},{default:y(()=>[$("div",fe,[$("div",me,k(b(t)("new ver discover")),1),_e,v(f,{class:"flex-center mt-4"},{default:y(()=>[v(p,{onClick:a[0]||(a[0]=u=>e.value=!1)},{default:y(()=>[S(k(b(t)("cancel")),1)]),_:1}),v(p,{type:"success",onClick:i},{default:y(()=>[S(k(b(t)("update")),1)]),_:1})]),_:1})])]),_:1},8,["show"])]),_:1})]),_:1},8,["show"])}}});const he={class:"flex-col px-10 gap-y-4"},ve={class:"flex-center"},ye=$("span",{class:"text-8 flex-center"},"Grasscutter-Tools",-1),be={class:"text-6"},Se=B({__name:"index",setup(s){const{t:l}=L(),t=x(""),o=x(!1),e=x(),i=V(),{updateProxy:n,updateCheckTime:r}=V(),a=x();async function p(f){var _,u;const c=Date.now(),d=i.update.lastCheckTime;if(f||!d||d&&d+864e5<c)try{const{shouldUpdate:m,manifest:g}=await se();r(c),m&&(g==null?void 0:g.body)?(e.value=JSON.parse(g.body)[i.locale],o.value=!0):(_=window.$message)==null||_.success(l("latest ver now"))}catch(m){(u=window.$notification)==null||u.error({title:l("failed get update info"),description:`error: ${m}`,content:l("retry manually")})}}return Z(()=>{var f;if(o.value){const c=(f=window.$notification)==null?void 0:f.info({title:l("new ver discover"),content:l("whether upgrade"),action:()=>h(U,{text:!0,type:"primary",onClick:()=>{var d;c==null||c.destroy(),(d=a.value)==null||d.open(e.value)}},{default:()=>l("confirm")})})}}),ee(async()=>{t.value=await oe(),p()}),(f,c)=>{const d=ie,_=re,u=D;return P(),te("div",he,[$("div",ve,[ye,v(d,{type:"success",size:"large",class:"ml-2 cursor-pointer",onClick:c[0]||(c[0]=m=>p(!0))},{default:y(()=>[S(" v"+k(t.value),1)]),_:1})]),v(b(ge),{ref_key:"updaterRef",ref:a},null,512),v(u,{class:"flex-center"},{default:y(()=>[$("span",be,k(b(l)("use proxy system")),1),v(_,{value:b(i).proxy.enable,"onUpdate:value":c[1]||(c[1]=m=>b(n)({enable:m}))},null,8,["value"]),ne(' <n-input-number v-if="setting.proxy.enable" :show-button="false" class="w-22!" /> ')]),_:1})])}}});export{Se as default};
