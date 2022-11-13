import{t as R,a as w,b$ as O,b as N,d as B,e as W,u as E,g as z,i as H,h as v,bd as M,T as j,c9 as K,b9 as q,ae as G,H as L,r as x,C as P,M as J,J as b,I as y,K as _,E as $,bg as k,b3 as S,bs as A,ca as X,cb as Y,a3 as F,bD as U,cc as Q,cd as Z,G as V,z as ee,b5 as te,D as ne,bt as se,ce as oe,cf as ie}from"./index.c5cef1a9.js";import{a as ae}from"./use-compitable.a422b517.js";import{_ as D}from"./Space.48a21642.js";import{_ as re}from"./Tag.06edb870.js";import{_ as ce}from"./Switch.d52a95c4.js";import"./get-slot.af2c1dcf.js";const le=R([R("@keyframes spin-rotate",`
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
 `)])]),ue={small:20,medium:18,large:16},pe=Object.assign(Object.assign({},E.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),de=B({name:"Spin",props:pe,setup(s){const{mergedClsPrefixRef:l,inlineThemeDisabled:t}=W(s),o=E("Spin","-spin",le,K,s,l),e=z(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:r},self:i}=o.value,{opacitySpinning:p,color:f,textColor:c}=i,d=typeof n=="number"?q(n):i[G("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":p,"--n-size":d,"--n-color":f,"--n-text-color":c}}),a=t?H("spin",z(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),e,s):void 0;return{mergedClsPrefix:l,compitableShow:ae(s,["spinning","show"]),mergedStrokeWidth:z(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:r}=s;return ue[typeof r=="number"?"medium":r]}),cssVars:t?void 0:e,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var s,l;const{$slots:t,mergedClsPrefix:o,description:e}=this,a=t.icon&&this.rotate,n=(e||t.description)&&v("div",{class:`${o}-spin-description`},e||((s=t.description)===null||s===void 0?void 0:s.call(t))),r=t.icon?v("div",{class:[`${o}-spin-body`,this.themeClass]},v("div",{class:[`${o}-spin`,a&&`${o}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),n):v("div",{class:[`${o}-spin-body`,this.themeClass]},v(M,{clsPrefix:o,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${o}-spin`}),n);return(l=this.onRender)===null||l===void 0||l.call(this),t.default?v("div",{class:[`${o}-spin-container`,this.themeClass],style:this.cssVars},v("div",{class:[`${o}-spin-content`,this.compitableShow&&`${o}-spin-content--spinning`]},t),v(j,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});var fe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function I(s){return s.replace(RegExp("^"+(s.match(/^(\t| )+/)||"")[0],"gm"),"")}function C(s){return(s+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T(s,l){var t,o,e,a,n,r=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,i=[],p="",f=l||{},c=0;function d(u){var m=fe[u[1]||""],h=i[i.length-1]==u;return m?m[1]?(h?i.pop():i.push(u),m[0|h]):m[0]:u}function g(){for(var u="";i.length;)u+=d(i[i.length-1]);return u}for(s=s.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(u,m,h){return f[m.toLowerCase()]=h,""}).replace(/^\n+|\n+$/g,"");e=r.exec(s);)o=s.substring(c,e.index),c=r.lastIndex,t=e[0],o.match(/[^\\](\\\\)*\\$/)||((n=e[3]||e[4])?t='<pre class="code '+(e[4]?"poetry":e[2].toLowerCase())+'"><code'+(e[2]?' class="language-'+e[2].toLowerCase()+'"':"")+">"+I(C(n).replace(/^\n+|\n+$/g,""))+"</code></pre>":(n=e[6])?(n.match(/\./)&&(e[5]=e[5].replace(/^\d+/gm,"")),a=T(I(e[5].replace(/^\s*[>*+.-]/gm,""))),n==">"?n="blockquote":(n=n.match(/\./)?"ol":"ul",a=a.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),t="<"+n+">"+a+"</"+n+">"):e[8]?t='<img src="'+C(e[8])+'" alt="'+C(e[7])+'">':e[10]?(p=p.replace("<a>",'<a href="'+C(e[11]||f[o.toLowerCase()])+'">'),t=g()+"</a>"):e[9]?t="<a>":e[12]||e[14]?t="<"+(n="h"+(e[14]?e[14].length:e[13]>"="?1:2))+">"+T(e[12]||e[15],f)+"</"+n+">":e[16]?t="<code>"+C(e[16])+"</code>":(e[17]||e[1])&&(t=d(e[17]||"--"))),p+=o,p+=t;return(p+s.substring(c)+g()).replace(/^\n+|\n+$/g,"")}const me={class:"flex-col items-center"},_e={class:"text-5"},ge=$("div",{id:"content"},null,-1),he=B({__name:"Updater",setup(s,{expose:l}){const{t}=L(),o=x(!1),e=x(!1);async function a(){var r,i;try{o.value=!0,await X(),(r=window.$dialog)==null||r.success({title:t("install successful"),content:t("whether relaunch"),negativeText:t("cancel"),positiveText:t("relaunch"),onPositiveClick:()=>Y()})}catch(p){(i=window.$notification)==null||i.error({title:t("failed to update"),description:`error: ${p}`,content:t("try again")})}finally{o.value=!1}}function n(r){r&&(e.value=!0,F(()=>{const i=document.getElementById("content");i&&(i.innerHTML=T(r))}))}return l({open:n}),(r,i)=>{const p=U,f=D,c=de,d=Q,g=Z;return P(),J(g,{show:_(e),"onUpdate:show":i[1]||(i[1]=u=>A(e)?e.value=u:null),"mask-closable":!1,class:"w-50%"},{default:b(()=>[y(d,null,{default:b(()=>[y(c,{show:_(o)},{default:b(()=>[$("div",me,[$("div",_e,k(_(t)("new ver discover")),1),ge,y(f,{class:"flex-center mt-4"},{default:b(()=>[y(p,{onClick:i[0]||(i[0]=u=>e.value=!1)},{default:b(()=>[S(k(_(t)("cancel")),1)]),_:1}),y(p,{type:"success",onClick:a},{default:b(()=>[S(k(_(t)("update")),1)]),_:1})]),_:1})])]),_:1},8,["show"])]),_:1})]),_:1},8,["show"])}}});const ve={class:"flex-col px-10 gap-y-4"},ye={class:"flex-center"},be=$("span",{class:"text-8 flex-center"},"Grasscutter-Tools",-1),we={class:"text-6"},Te=B({__name:"index",setup(s){const{t:l}=L(),t=x(""),o=x(!1),e=x(),a=V(),{updateProxy:n,updateCheckTime:r}=V(),i=x();async function p(f){var g,u;const c=Date.now(),d=a.update.lastCheckTime;if(f||!d||d&&d+864e5<c)try{const{shouldUpdate:m,manifest:h}=await oe();r(c),m&&(h==null?void 0:h.body)?(e.value=JSON.parse(h.body)[a.locale],o.value=!0):(g=window.$message)==null||g.success(l("latest ver now"))}catch(m){(u=window.$notification)==null||u.error({title:l("failed get update info"),description:`error: ${m}`,content:l("retry manually")})}}return ee(()=>{var f;if(o.value){const c=(f=window.$notification)==null?void 0:f.info({title:l("new ver discover"),content:l("whether upgrade"),action:()=>v(U,{text:!0,type:"primary",onClick:()=>{var d;c==null||c.destroy(),(d=i.value)==null||d.open(e.value)}},{default:()=>l("confirm")})})}}),te(async()=>{t.value=await ie(),p()}),(f,c)=>{const d=re,g=ce,u=D;return P(),ne("div",ve,[$("div",ye,[be,y(d,{type:"success",size:"large",class:"ml-2 cursor-pointer",onClick:c[0]||(c[0]=m=>p(!0))},{default:b(()=>[S(" v"+k(_(t)),1)]),_:1})]),y(_(he),{ref_key:"updaterRef",ref:i},null,512),y(u,{class:"flex-center"},{default:b(()=>[$("span",we,k(_(l)("use proxy system")),1),y(g,{value:_(a).proxy.enable,"onUpdate:value":c[1]||(c[1]=m=>_(n)({enable:m}))},null,8,["value"]),se(' <n-input-number v-if="setting.proxy.enable" :show-button="false" class="w-22!" /> ')]),_:1})])}}});export{Te as default};
