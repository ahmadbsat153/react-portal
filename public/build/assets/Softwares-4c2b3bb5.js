import{r as i,R as A,a as g,j as R,F as se}from"./app-e057de79.js";import{a as K}from"./clsx.m-84295364.js";import{S as V,D as G,y as _,s as X,o as N,l as z,X as U,u as M,t as ie}from"./render-5eaee1c9.js";import{c as ee,p as oe,I as te,a as F,N as q,e as ue,o as v,O as k,M as w}from"./keyboard-7b642a18.js";import{s as ce}from"./use-resolve-button-type-ff7c32c3.js";function de({onFocus:e}){let[t,n]=i.useState(!0);return t?A.createElement(ee,{as:"button",type:"button",features:oe.Focusable,onFocus:r=>{r.preventDefault();let a,s=50;function o(){if(s--<=0){a&&cancelAnimationFrame(a);return}if(e()){n(!1),cancelAnimationFrame(a);return}a=requestAnimationFrame(o)}a=requestAnimationFrame(o)}}):null}const re=i.createContext(null);function pe(){return{groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let a=(n=r.get(t))!=null?n:0;r.set(t,a+1);let s=Array.from(r.keys()).indexOf(t);function o(){let h=r.get(t);h>1?r.set(t,h-1):r.delete(t)}return[s,o]}}}function me({children:e}){let t=i.useRef(pe());return i.createElement(re.Provider,{value:t},e)}function ne(e){let t=i.useContext(re);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let n=ge(),[r,a]=t.current.get(e,n);return i.useEffect(()=>a,[]),r}function ge(){var e,t,n;let r=(n=(t=(e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?n:null;if(!r)return Symbol();let a=[],s=r;for(;s;)a.push(s.index),s=s.return;return"$."+a.join(".")}var be=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(be||{}),fe=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(fe||{}),xe=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(xe||{});let he={[0](e,t){var n;let r=F(e.tabs,c=>c.current),a=F(e.panels,c=>c.current),s=r.filter(c=>{var P;return!((P=c.current)!=null&&P.hasAttribute("disabled"))}),o={...e,tabs:r,panels:a};if(t.index<0||t.index>r.length-1){let c=M(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>M(Math.sign(t.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});return s.length===0?o:{...o,selectedIndex:M(c,{[0]:()=>r.indexOf(s[0]),[1]:()=>r.indexOf(s[s.length-1])})}}let h=r.slice(0,t.index),T=[...r.slice(t.index),...h].find(c=>s.includes(c));if(!T)return o;let b=(n=r.indexOf(T))!=null?n:e.selectedIndex;return b===-1&&(b=e.selectedIndex),{...o,selectedIndex:b}},[1](e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],a=F([...e.tabs,t.tab],o=>o.current),s=(n=a.indexOf(r))!=null?n:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:a,selectedIndex:s}},[2](e,t){return{...e,tabs:e.tabs.filter(n=>n!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:F([...e.panels,t.panel],n=>n.current)}},[4](e,t){return{...e,panels:e.panels.filter(n=>n!==t.panel)}}},H=i.createContext(null);H.displayName="TabsDataContext";function L(e){let t=i.useContext(H);if(t===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,L),n}return t}let Q=i.createContext(null);Q.displayName="TabsActionsContext";function Y(e){let t=i.useContext(Q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Y),n}return t}function ve(e,t){return M(t.type,he,e,t)}let we=i.Fragment;function Te(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:a=!1,onChange:s,selectedIndex:o=null,...h}=e;const T=r?"vertical":"horizontal",b=a?"manual":"auto";let c=o!==null,P=_(t),[u,x]=i.useReducer(ve,{selectedIndex:o??n,tabs:[],panels:[]}),p=i.useMemo(()=>({selectedIndex:u.selectedIndex}),[u.selectedIndex]),C=X(s||(()=>{})),O=X(u.tabs),m=i.useMemo(()=>({orientation:T,activation:b,...u}),[T,b,u]),f=N(d=>(x({type:1,tab:d}),()=>x({type:2,tab:d}))),I=N(d=>(x({type:3,panel:d}),()=>x({type:4,panel:d}))),S=N(d=>{$.current!==d&&C.current(d),c||x({type:0,index:d})}),$=X(c?e.selectedIndex:u.selectedIndex),B=i.useMemo(()=>({registerTab:f,registerPanel:I,change:S}),[]);z(()=>{x({type:0,index:o??n})},[o]),z(()=>{if($.current===void 0||u.tabs.length<=0)return;let d=F(u.tabs,E=>E.current);d.some((E,l)=>u.tabs[l]!==E)&&S(d.indexOf(u.tabs[$.current]))});let W={ref:P};return A.createElement(me,null,A.createElement(Q.Provider,{value:B},A.createElement(H.Provider,{value:m},m.tabs.length<=0&&A.createElement(de,{onFocus:()=>{var d,E;for(let l of O.current)if(((d=l.current)==null?void 0:d.tabIndex)===0)return(E=l.current)==null||E.focus(),!0;return!1}}),U({ourProps:W,theirProps:h,slot:p,defaultTag:we,name:"Tabs"}))))}let ye="div";function Pe(e,t){let{orientation:n,selectedIndex:r}=L("Tab.List"),a=_(t);return U({ourProps:{ref:a,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:ye,name:"Tabs.List"})}let Ee="button";function Ie(e,t){var n,r;let a=te(),{id:s=`headlessui-tabs-tab-${a}`,...o}=e,{orientation:h,activation:T,selectedIndex:b,tabs:c,panels:P}=L("Tab"),u=Y("Tab"),x=L("Tab"),p=i.useRef(null),C=_(p,t);z(()=>u.registerTab(p),[u,p]);let O=ne("tabs"),m=c.indexOf(p);m===-1&&(m=O);let f=m===b,I=N(l=>{var y;let j=l();if(j===q.Success&&T==="auto"){let ae=(y=ue(p))==null?void 0:y.activeElement,J=x.tabs.findIndex(le=>le.current===ae);J!==-1&&u.change(J)}return j}),S=N(l=>{let y=c.map(j=>j.current).filter(Boolean);if(l.key===v.Space||l.key===v.Enter){l.preventDefault(),l.stopPropagation(),u.change(m);return}switch(l.key){case v.Home:case v.PageUp:return l.preventDefault(),l.stopPropagation(),I(()=>k(y,w.First));case v.End:case v.PageDown:return l.preventDefault(),l.stopPropagation(),I(()=>k(y,w.Last))}if(I(()=>M(h,{vertical(){return l.key===v.ArrowUp?k(y,w.Previous|w.WrapAround):l.key===v.ArrowDown?k(y,w.Next|w.WrapAround):q.Error},horizontal(){return l.key===v.ArrowLeft?k(y,w.Previous|w.WrapAround):l.key===v.ArrowRight?k(y,w.Next|w.WrapAround):q.Error}}))===q.Success)return l.preventDefault()}),$=i.useRef(!1),B=N(()=>{var l;$.current||($.current=!0,(l=p.current)==null||l.focus(),u.change(m),ie(()=>{$.current=!1}))}),W=N(l=>{l.preventDefault()}),d=i.useMemo(()=>({selected:f}),[f]),E={ref:C,onKeyDown:S,onMouseDown:W,onClick:B,id:s,role:"tab",type:ce(e,p),"aria-controls":(r=(n=P[m])==null?void 0:n.current)==null?void 0:r.id,"aria-selected":f,tabIndex:f?0:-1};return U({ourProps:E,theirProps:o,slot:d,defaultTag:Ee,name:"Tabs.Tab"})}let Se="div";function $e(e,t){let{selectedIndex:n}=L("Tab.Panels"),r=_(t),a=i.useMemo(()=>({selectedIndex:n}),[n]);return U({ourProps:{ref:r},theirProps:e,slot:a,defaultTag:Se,name:"Tabs.Panels"})}let Ne="div",Re=V.RenderStrategy|V.Static;function ke(e,t){var n,r,a,s;let o=te(),{id:h=`headlessui-tabs-panel-${o}`,tabIndex:T=0,...b}=e,{selectedIndex:c,tabs:P,panels:u}=L("Tab.Panel"),x=Y("Tab.Panel"),p=i.useRef(null),C=_(p,t);z(()=>x.registerPanel(p),[x,p]);let O=ne("panels"),m=u.indexOf(p);m===-1&&(m=O);let f=m===c,I=i.useMemo(()=>({selected:f}),[f]),S={ref:C,id:h,role:"tabpanel","aria-labelledby":(r=(n=P[m])==null?void 0:n.current)==null?void 0:r.id,tabIndex:f?T:-1};return!f&&((a=b.unmount)==null||a)&&!((s=b.static)!=null&&s)?A.createElement(ee,{as:"span",...S}):U({ourProps:S,theirProps:b,slot:I,defaultTag:Ne,features:Re,visible:f,name:"Tabs.Panel"})}let Ae=G(Ie),Le=G(Te),Ce=G(Pe),Oe=G($e),De=G(ke),D=Object.assign(Ae,{Group:Le,List:Ce,Panels:Oe,Panel:De});const Fe="/build/assets/KPI-GTLS-1ab531dc.webp",Me="/build/assets/CONS-GTLS-9757b5e4.webp",Ge="/build/assets/DASH-GTLS-5629359d.webp",_e="/build/assets/PERF-GTLS-1298ace0.webp",Z=[{title:"Dashboard",description:"The statistics charts offer visual representations of important metrics, such as the total number of receivers, total weight, cost, PODs.",image:Ge},{title:"Consignments",description:"The consignments page displays a list of all consignments charged to the selected accounts.",image:Me},{title:"Kpi report",description:"KPI report page displays whether the delivery date matches the required delivery date of a consignment.",image:Fe},{title:"Performance",description:"The report provides a comprehensive performance report for each consignment. It includes general information about the consignment, detailed information, the amount, sender and receiver data.",image:_e}];function We(){let[e,t]=i.useState("vertical");return i.useEffect(()=>{let n=window.matchMedia("(min-width: 1024px)");function r({matches:a}){t(a?"horizontal":"vertical")}return r(n),n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[]),g("section",{id:"features","aria-label":"Features for running your books",className:"relative overflow-hidden bg-dark pt-20 pb-28 sm:py-32",children:R("div",{className:"relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[g("div",{className:"mx-auto pt-10 w-full",children:g("p",{className:" text-4xl font-bold tracking-tight text-goldt sm:text-5xl",children:"Gold Tiger reporting system"})}),g(D.Group,{as:"div",className:"mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0",vertical:e==="vertical",children:({selectedIndex:n})=>R(se,{children:[g("div",{className:"-mx-4 flex overflow-x-auto pb-4 mx-0 sm:overflow-visible sm:pb-0 lg:col-span-3",children:g(D.List,{className:"relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal",children:Z.map((r,a)=>R("div",{className:K("group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-4",n===a?"bg-white/10 lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10":"hover:bg-white/10 lg:hover:bg-white/5"),children:[g("h3",{children:R(D,{className:K("font-display text-lg [&:not(:focus-visible)]:focus:outline-none focus:outline-none",n===a?"text-goldd lg:text-goldd":"text-goldl hover:text-white lg:text-goldl"),children:[g("span",{className:"absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl focus:outline-none"}),r.title]})}),g("p",{className:K("mt-2 hidden text-sm lg:block",n===a?"text-white":"text-blue-100 group-hover:text-white"),children:r.description})]},r.title))})}),g(D.Panels,{className:"lg:col-span-7",children:Z.map(r=>R(D.Panel,{unmount:!1,children:[R("div",{className:"relative sm:px-6 lg:hidden",children:[g("div",{className:"absolute -inset-x-4 top-[-6.5rem] bottom-[-3rem]  border-t border-l border-r border-yellow-200 border-opacity-20 sm:inset-x-0 sm:rounded-t-xl"}),g("p",{className:"relative mx-auto max-w-2xl text-base text-white sm:text-center",children:r.description})]}),g("div",{className:"mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50  w-auto lg:mt-0 lg:w-[65rem]",children:g("img",{className:"w-full",src:r.image,alt:"",priority:!0,sizes:"(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"})})]},r.title))})]})})]})})}export{We as Softwares};
