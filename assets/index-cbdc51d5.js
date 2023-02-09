import{s as O,_ as W,b as J}from"./MyButton.vuevuetypescriptsetuptruelang-43633270.js";import{p as h,l as I,c as Z,g as ee}from"./api-5cbee946.js";import{h as A,d as F,a1 as te,r as L,c as B,an as le,f as j,g as ne,j as u,k as n,Y as M,aj as y,aq as oe,aa as H,ab as V,u as e,af as ae,a as se,a3 as ie,am as N}from"./vue-i18n.runtime.esm-bundler-151cb611.js";import{_ as D}from"./InputGroupLabel-7497d307.js";import{_ as Q,a as ue}from"./Switch-eca6d9cd.js";import{_ as q}from"./InputNumber-85c8ae15.js";import{j as re,l as me,u as de,_ as ce}from"./index-b92a2438.js";import{_ as pe}from"./MyDivider.vuevuetypescriptsetuptruelang-133cf2c3.js";import{f as ve}from"./naive-ui-1595d71b.js";import{_ as fe}from"./Space-91fe4f8b.js";import{D as _e,L as T,M as E,F as P,a3 as xe,G as ge,H as K,I as ye,P as Ve,S as be,a6 as G}from"./Icon-c17b099f.js";import{u as ke}from"./Tooltip-7915c0e9.js";import{r as we}from"./light-559e2353.js";import{_ as he}from"./Cascader-3663128e.js";import"./axios-be0964e6.js";import"./index-07388626.js";import"./index-91aa5489.js";import"./light-fe5ef01c.js";import"./light-154ed3a0.js";import"./Input-4ef7b5e6.js";import"./light-6413ae5a.js";import"./light-834c6dc7.js";import"./get-slot-1efb97e5.js";import"./light-19cfa7e0.js";import"./utils-9b01a455.js";import"./fade-in-scale-up.cssr-4e8af357.js";import"./ChevronRight-d8e0aaad.js";import"./Checkbox-12df3825.js";import"./light-97a49701.js";import"./Selection-da5305fb.js";import"./light-8238fc90.js";import"./Tag-fa1fa102.js";import"./light-77d17833.js";import"./light-736a1114.js";const $e=A("svg",{viewBox:"0 0 512 512"},A("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),Ce=_e("rate",{display:"inline-flex",flexWrap:"nowrap"},[T("&:hover",[E("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),E("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[T("&:not(:first-child)",`
 margin-left: 6px;
 `),P("active",`
 color: var(--n-item-color-active);
 `)]),xe("readonly",`
 cursor: pointer;
 `,[E("item",[T("&:hover",`
 transform: scale(1.05);
 `),T("&:active",`
 transform: scale(0.96);
 `)])]),E("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[P("active",`
 color: var(--n-item-color-active);
 `)])]),Le=Object.assign(Object.assign({},K.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ue=F({name:"Rate",props:Le,setup(s){const{mergedClsPrefixRef:t,inlineThemeDisabled:k}=ge(s),o=K("Rate","-rate",Ce,we,s,t),p=te(s,"value"),f=L(s.defaultValue),d=L(null),r=re(s),c=ke(p,f);function _(i){const{"onUpdate:value":m,onUpdateValue:g}=s,{nTriggerFormChange:v,nTriggerFormInput:C}=r;m&&G(m,i),g&&G(g,i),f.value=i,v(),C()}function $(i,m){return s.allowHalf?m.offsetX>=Math.floor(m.currentTarget.offsetWidth/2)?i+1:i+.5:i+1}let w=!1;function l(i,m){w||(d.value=$(i,m))}function U(){d.value=null}function z(i,m){var g;const{clearable:v}=s,C=$(i,m);v&&C===c.value?(w=!0,(g=s.onClear)===null||g===void 0||g.call(s),d.value=null,_(null)):_(C)}function x(){w=!1}const S=B(()=>{const{size:i}=s,{self:m}=o.value;return typeof i=="number"?`${i}px`:m[Ve("size",i)]}),R=B(()=>{const{common:{cubicBezierEaseInOut:i},self:m}=o.value,{itemColor:g,itemColorActive:v}=m,{color:C}=s;return{"--n-bezier":i,"--n-item-color":g,"--n-item-color-active":C||v,"--n-item-size":S.value}}),b=k?ye("rate",B(()=>{const i=S.value,{color:m}=s;let g="";return i&&(g+=i[0]),m&&(g+=me(m)),g}),R,s):void 0;return{mergedClsPrefix:t,mergedValue:c,hoverIndex:d,handleMouseMove:l,handleClick:z,handleMouseLeave:U,handleMouseEnterSomeStar:x,cssVars:k?void 0:R,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{readonly:s,hoverIndex:t,mergedValue:k,mergedClsPrefix:o,onRender:p,$slots:{default:f}}=this;return p==null||p(),A("div",{class:[`${o}-rate`,{[`${o}-rate--readonly`]:s},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},le(this.count,(d,r)=>{const c=f?f():A(be,{clsPrefix:o},{default:()=>$e}),_=t!==null?r+1<=t:r+1<=(k||0);return A("div",{key:r,class:[`${o}-rate__item`,_&&`${o}-rate__item--active`],onClick:s?void 0:$=>{this.handleClick(r,$)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:s?void 0:$=>{this.handleMouseMove(r,$)}},c,this.allowHalf?A("div",{class:[`${o}-rate__half`,{[`${o}-rate__half--active`]:!_&&t!==null?r+.5<=t:r+.5<=(k||0)}]},c):null)}))}}),Me=F({__name:"MyInputGroup",props:{modelValue:null,disable:{type:Boolean},label:null,min:{default:0},max:null,text:null,command:null},emits:["update:modelValue"],setup(s){const t=s;async function k(){const o=await h(t.command+" "+t.modelValue);O(o)}return(o,p)=>{const f=D,d=q,r=W,c=Q;return j(),ne(c,null,{default:u(()=>[n(f,null,{default:u(()=>[M(y(s.label),1)]),_:1}),n(d,{value:s.modelValue,min:s.min,max:s.max,disabled:s.disable,style:oe({width:s.max.toString().length+5+"rem"}),"onUpdate:value":p[0]||(p[0]=_=>o.$emit("update:modelValue",_))},null,8,["value","min","max","disabled","style"]),n(r,{text:s.text,disabled:s.disable,onClickAsync:k},null,8,["text","disabled"])]),_:1})}}}),Ae={class:"flex justify-center"},ze={class:"text-4 mr-3"},Se=F({__name:"MySwitch",props:{modelValue:{type:Boolean},text:null,disable:{type:Boolean},command:null},emits:["update:modelValue"],setup(s,{emit:t}){const k=s,o=L(!1);async function p(d){var r;o.value=!0;try{const c=await h(k.command+" "+d);(c==null?void 0:c.code)==200?((r=window.$message)==null||r.success(c.msg),t("update:modelValue",d)):t("update:modelValue",!d)}catch{}finally{o.value=!1}}const f=de(p,1e3);return(d,r)=>{const c=ue;return j(),H("div",Ae,[V("span",ze,y(s.text),1),n(c,{value:s.modelValue,loading:e(o),disabled:s.disable,"onUpdate:value":e(f)},null,8,["value","loading","disabled","onUpdate:value"])])}}}),Re={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Be=V("path",{fill:"currentColor",d:"M12 13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6-5h-1V6c0-2.76-2.24-5-5-5c-2.28 0-4.27 1.54-4.84 3.75c-.14.54.18 1.08.72 1.22a1 1 0 0 0 1.22-.72A2.996 2.996 0 0 1 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 11c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8z"},null,-1),Ie=[Be];function Ne(s,t){return j(),H("svg",Re,Ie)}const Te={name:"ic-round-lock-open",render:Ne},Ee={class:"px-0"},Fe={class:"flex-col items-center gap-y-5 mb-5"},je={class:"flex-col gap-y-2"},He={class:"flex-center"},Pe={class:"text-4"},Ge={class:"flex"},Oe={class:"flex-col items-center gap-y-5"},We={class:"text-4"},Ct=F({__name:"index",setup(s){const{t,tm:k}=ae(),o=se({worldLevel:0,bpLevel:0,towerLevel:0,playerLevel:1,skillN:0,skillE:0,skillQ:0,avatarLevel:0,constellation:0,fetterLevel:0}),p=L(1),f=L(1),d=L(4),r=B(()=>` lv${p.value} r${f.value} ${d.value}*`),c=B(()=>k("data.weather")),_=L(null);async function $(){if(!_.value)return;const[w,l]=_.value.split("_"),U=`w ${["sunny","cloudy","rain","thunderstorm","snow","mist"][Number(w)]} ${l}`,z=await h(U);O(z)}return ie(async()=>{const w=await ee();(w==null?void 0:w.code)===200?(Object.assign(o,w.data),_.value=`${o.climateType}_${o.weatherId}`):Object.assign(o,{})}),(w,l)=>{const U=pe,z=Te,x=W,S=ce,R=J,b=Se,i=fe,m=q,g=Ue,v=Me,C=he,X=D,Y=Q;return j(),H("div",Ee,[n(U,{title:e(t)("general settings")},null,8,["title"]),V("div",Fe,[n(i,{class:"items-center"},{default:u(()=>[n(x,{text:e(t)("unlock map"),onClickAsync:l[0]||(l[0]=a=>e(h)("setprop unlockmap 1"))},{default:u(()=>[n(z)]),_:1},8,["text"]),n(R,{"show-icon":!1},{trigger:u(()=>[n(S,null,{default:u(()=>[M(y(e(t)("level-up all")),1)]),_:1})]),action:u(()=>[n(x,{text:e(t)("all"),onClickAsync:l[1]||(l[1]=a=>e(I)(0))},null,8,["text"]),n(x,{text:e(t)("avatar lv"),onClickAsync:l[2]||(l[2]=a=>e(I)(1))},null,8,["text"]),n(x,{text:e(t)("talent lv"),onClickAsync:l[3]||(l[3]=a=>e(I)(2))},null,8,["text"]),n(x,{text:e(t)("friendship"),onClickAsync:l[4]||(l[4]=a=>e(I)(3))},null,8,["text"])]),default:u(()=>[M(" "+y(e(t)("level-up all options")),1)]),_:1}),n(b,{modelValue:e(o).inGodMode,"onUpdate:modelValue":l[5]||(l[5]=a=>e(o).inGodMode=a),text:e(t)("god mode"),command:"prop god"},null,8,["modelValue","text"]),n(b,{modelValue:e(o).unLimitedStamina,"onUpdate:modelValue":l[6]||(l[6]=a=>e(o).unLimitedStamina=a),text:e(t)("un stamina"),command:"prop ns"},null,8,["modelValue","text"]),n(b,{modelValue:e(o).unLimitedEnergy,"onUpdate:modelValue":l[7]||(l[7]=a=>e(o).unLimitedEnergy=a),text:e(t)("un energy"),command:"prop ue"},null,8,["modelValue","text"])]),_:1}),n(i,null,{default:u(()=>[n(R,{"show-icon":!1},{trigger:u(()=>[n(S,null,{default:u(()=>[M(y(e(t)("clear inventory")),1)]),_:1})]),action:u(()=>[V("div",je,[n(i,{class:"items-center"},{default:u(()=>[V("span",null,y(e(t)("max lv"))+": ",1),n(m,{value:e(p),"onUpdate:value":l[8]||(l[8]=a=>N(p)?p.value=a:null),min:0,max:90,class:"w-35"},null,8,["value"])]),_:1}),n(i,{class:"items-center"},{default:u(()=>[V("span",null,y(e(t)("max refinement"))+": ",1),n(m,{value:e(f),"onUpdate:value":l[9]||(l[9]=a=>N(f)?f.value=a:null),min:0,max:5,class:"w-30"},null,8,["value"])]),_:1}),n(i,{class:"items-center"},{default:u(()=>[V("span",null,y(e(t)("max rarity"))+": ",1),n(g,{value:e(d),"onUpdate:value":l[10]||(l[10]=a=>N(d)?d.value=a:null)},null,8,["value"])]),_:1}),V("div",He,[n(x,{text:e(t)("all"),onClickAsync:l[11]||(l[11]=a=>e(h)("clear all"+e(r)))},null,8,["text"]),n(x,{text:e(t)("weapons"),onClickAsync:l[12]||(l[12]=a=>e(h)("clear wp"+e(r)))},null,8,["text"]),n(x,{text:e(t)("artifacts"),onClickAsync:l[13]||(l[13]=a=>e(h)("clear art"+e(r)))},null,8,["text"]),n(x,{text:e(t)("materials"),onClickAsync:l[14]||(l[14]=a=>e(h)("clear mat"+e(r)))},null,8,["text"])])])]),default:u(()=>[M(" "+y(e(t)("select a option")),1)]),_:1}),n(x,{text:e(t)("unlock open"),onClickAsync:l[15]||(l[15]=a=>e(h)("unlockall"))},null,8,["text"]),n(x,{text:e(t)("no cd"),onClickAsync:e(Z)},{tooltip:u(()=>[V("span",null,y(e(t)("all avatars cd 100%")),1)]),_:1},8,["text","onClickAsync"]),n(v,{modelValue:e(o).playerLevel,"onUpdate:modelValue":l[16]||(l[16]=a=>e(o).playerLevel=a),label:e(t)("player lv"),text:e(t)("edit"),min:1,max:60,command:"prop player_level"},null,8,["modelValue","label","text"])]),_:1}),n(i,null,{default:u(()=>[n(v,{modelValue:e(o).worldLevel,"onUpdate:modelValue":l[17]||(l[17]=a=>e(o).worldLevel=a),label:e(t)("world lv"),text:e(t)("edit"),max:8,command:"prop wl"},null,8,["modelValue","label","text"]),n(v,{modelValue:e(o).bpLevel,"onUpdate:modelValue":l[18]||(l[18]=a=>e(o).bpLevel=a),label:e(t)("bp lv"),text:e(t)("edit"),max:50,command:"prop bp"},null,8,["modelValue","label","text"]),n(v,{modelValue:e(o).towerLevel,"onUpdate:modelValue":l[19]||(l[19]=a=>e(o).towerLevel=a),label:e(t)("tower lv"),text:e(t)("edit"),max:12,command:"prop tower"},null,8,["modelValue","label","text"])]),_:1}),n(i,{class:"items-center"},{default:u(()=>[V("span",Pe,y(e(t)("weather")),1),V("div",Ge,[n(C,{value:e(_),"onUpdate:value":l[20]||(l[20]=a=>N(_)?_.value=a:null),filterable:"",filter:e(ve),"expand-trigger":"hover","check-strategy":"child",options:e(c),class:"w-100"},null,8,["value","filter","options"]),n(x,{text:e(t)("edit"),onClickAsync:$},null,8,["text"])]),n(b,{modelValue:e(o).lockWeather,"onUpdate:modelValue":l[21]||(l[21]=a=>e(o).lockWeather=a),text:e(t)("lock weather"),command:"prop is_weather_locked"},null,8,["modelValue","text"]),n(b,{modelValue:e(o).lockGameTime,"onUpdate:modelValue":l[22]||(l[22]=a=>e(o).lockGameTime=a),text:e(t)("lock time"),command:"prop is_game_time_locked"},null,8,["modelValue","text"])]),_:1})]),n(U,{title:e(t)("current avatar")},null,8,["title"]),V("div",Oe,[n(i,{class:"items-center"},{default:u(()=>[V("span",We,y(e(t)("talent lv")),1),n(v,{modelValue:e(o).skillN,"onUpdate:modelValue":l[23]||(l[23]=a=>e(o).skillN=a),label:"N",text:e(t)("edit"),max:15,command:"talent n"},null,8,["modelValue","text"]),n(v,{modelValue:e(o).skillE,"onUpdate:modelValue":l[24]||(l[24]=a=>e(o).skillE=a),label:"E",text:e(t)("edit"),max:12,command:"talent e"},null,8,["modelValue","text"]),n(v,{modelValue:e(o).skillQ,"onUpdate:modelValue":l[25]||(l[25]=a=>e(o).skillQ=a),label:"Q",text:e(t)("edit"),max:12,command:"talent q"},null,8,["modelValue","text"])]),_:1}),n(i,null,{default:u(()=>[n(Y,{class:"text-center"},{default:u(()=>[n(X,null,{default:u(()=>[M(y(e(t)("avatar lv")),1)]),_:1}),n(m,{value:e(o).avatarLevel,"show-button":!1,disabled:"",class:"w-15!"},null,8,["value"])]),_:1}),n(v,{modelValue:e(o).constellation,"onUpdate:modelValue":l[26]||(l[26]=a=>e(o).constellation=a),label:e(t)("constellation"),text:e(t)("edit"),max:6,command:"setConst"},null,8,["modelValue","label","text"]),n(v,{modelValue:e(o).fetterLevel,"onUpdate:modelValue":l[27]||(l[27]=a=>e(o).fetterLevel=a),label:e(t)("friendship"),text:e(t)("edit"),max:10,command:"setFetterLevel"},null,8,["modelValue","label","text"])]),_:1})])])}}});export{Ct as default};