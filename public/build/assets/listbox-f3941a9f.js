import{r as c,R as B}from"./app-e057de79.js";import{p as H,c as ge,d as j,C as he,o as q}from"./use-is-mounted-31350877.js";import{h as me,T as Oe,c as Re,p as Se,I as V,e as ye,o as h,a as Le}from"./keyboard-7b642a18.js";import{s as _,l as C,o as f,S as Y,D as k,y as M,u as D,R as Ie,X as A}from"./render-5eaee1c9.js";import{L as $e,r as Te}from"./bugs-55244794.js";import{s as Pe}from"./use-resolve-button-type-ff7c32c3.js";function ee(e,r){let[o,n]=c.useState(e),i=_(e);return C(()=>n(i.current),[i,n,...r]),o}function we(e){throw new Error("Unexpected object: "+e)}var L=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(L||{});function De(e,r){let o=r.resolveItems();if(o.length<=0)return null;let n=r.resolveActiveIndex(),i=n??-1,s=(()=>{switch(e.focus){case 0:return o.findIndex(t=>!r.resolveDisabled(t));case 1:{let t=o.slice().reverse().findIndex((a,p,v)=>i!==-1&&v.length-p-1>=i?!1:!r.resolveDisabled(a));return t===-1?t:o.length-1-t}case 2:return o.findIndex((t,a)=>a<=i?!1:!r.resolveDisabled(t));case 3:{let t=o.slice().reverse().findIndex(a=>!r.resolveDisabled(a));return t===-1?t:o.length-1-t}case 4:return o.findIndex(t=>r.resolveId(t)===e.id);case 5:return null;default:we(e)}})();return s===-1?n:s}function te(e={},r=null,o=[]){for(let[n,i]of Object.entries(e))re(o,oe(r,n),i);return o}function oe(e,r){return e?e+"["+r+"]":r}function re(e,r,o){if(Array.isArray(o))for(let[n,i]of o.entries())re(e,oe(r,n.toString()),i);else o instanceof Date?e.push([r,o.toISOString()]):typeof o=="boolean"?e.push([r,o?"1":"0"]):typeof o=="string"?e.push([r,o]):typeof o=="number"?e.push([r,`${o}`]):o==null?e.push([r,""]):te(o,r,e)}function Ee(e,r,o){let[n,i]=c.useState(o),s=e!==void 0,t=c.useRef(s),a=c.useRef(!1),p=c.useRef(!1);return s&&!t.current&&!a.current?(a.current=!0,t.current=s,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!s&&t.current&&!p.current&&(p.current=!0,t.current=s,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[s?e:n,f(v=>(s||i(v),r==null?void 0:r(v)))]}function Z(e){return[e.screenX,e.screenY]}function Ce(){let e=c.useRef([-1,-1]);return{wasMoved(r){let o=Z(r);return e.current[0]===o[0]&&e.current[1]===o[1]?!1:(e.current=o,!0)},update(r){e.current=Z(r)}}}var ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ke||{}),Me=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Me||{}),Ae=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ae||{}),Fe=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Fe||{});function K(e,r=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=Le(r(e.options.slice()),s=>s.dataRef.current.domRef.current),i=o?n.indexOf(o):null;return i===-1&&(i=null),{options:n,activeOptionIndex:i}}let Qe={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,n=e.options.findIndex(i=>o(i.dataRef.current.value));return n!==-1&&(r=n),{...e,listboxState:0,activeOptionIndex:r}},[2](e,r){var o;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=K(e),i=De(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:i,activationTrigger:(o=r.trigger)!=null?o:1}},[3]:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,n=e.searchQuery+r.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(t=>{var a;return!t.dataRef.current.disabled&&((a=t.dataRef.current.textValue)==null?void 0:a.startsWith(n))}),s=i?e.options.indexOf(i):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:s,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,r)=>{let o={id:r.id,dataRef:r.dataRef},n=K(e,i=>[...i,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(o)),{...e,...n}},[6]:(e,r)=>{let o=K(e,n=>{let i=n.findIndex(s=>s.id===r.id);return i!==-1&&n.splice(i,1),n});return{...e,...o,activationTrigger:1}},[7]:(e,r)=>({...e,labelId:r.id})},G=c.createContext(null);G.displayName="ListboxActionsContext";function F(e){let r=c.useContext(G);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,F),o}return r}let J=c.createContext(null);J.displayName="ListboxDataContext";function Q(e){let r=c.useContext(J);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Q),o}return r}function Ne(e,r){return D(r.type,Qe,e,r)}let Ue=c.Fragment;function ze(e,r){let{value:o,defaultValue:n,form:i,name:s,onChange:t,by:a=(u,d)=>u===d,disabled:p=!1,horizontal:v=!1,multiple:m=!1,...I}=e;const T=v?"horizontal":"vertical";let P=M(r),[O=m?[]:void 0,$]=Ee(o,t,n),[b,l]=c.useReducer(Ne,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),x=c.useRef({static:!1,hold:!1}),w=c.useRef(null),X=c.useRef(null),R=c.useRef(null),y=f(typeof a=="string"?(u,d)=>{let S=a;return(u==null?void 0:u[S])===(d==null?void 0:d[S])}:a),N=c.useCallback(u=>D(g.mode,{[1]:()=>O.some(d=>y(d,u)),[0]:()=>y(O,u)}),[O]),g=c.useMemo(()=>({...b,value:O,disabled:p,mode:m?1:0,orientation:T,compare:y,isSelected:N,optionsPropsRef:x,labelRef:w,buttonRef:X,optionsRef:R}),[O,p,m,b]);C(()=>{b.dataRef.current=g},[g]),$e([g.buttonRef,g.optionsRef],(u,d)=>{var S;l({type:1}),me(d,Oe.Loose)||(u.preventDefault(),(S=g.buttonRef.current)==null||S.focus())},g.listboxState===0);let ne=c.useMemo(()=>({open:g.listboxState===0,disabled:p,value:O}),[g,p,O]),ie=f(u=>{let d=g.options.find(S=>S.id===u);d&&E(d.dataRef.current.value)}),ae=f(()=>{if(g.activeOptionIndex!==null){let{dataRef:u,id:d}=g.options[g.activeOptionIndex];E(u.current.value),l({type:2,focus:L.Specific,id:d})}}),le=f(()=>l({type:0})),se=f(()=>l({type:1})),ue=f((u,d,S)=>u===L.Specific?l({type:2,focus:L.Specific,id:d,trigger:S}):l({type:2,focus:u,trigger:S})),ce=f((u,d)=>(l({type:5,id:u,dataRef:d}),()=>l({type:6,id:u}))),de=f(u=>(l({type:7,id:u}),()=>l({type:7,id:null}))),E=f(u=>D(g.mode,{[0](){return $==null?void 0:$(u)},[1](){let d=g.value.slice(),S=d.findIndex(z=>y(z,u));return S===-1?d.push(u):d.splice(S,1),$==null?void 0:$(d)}})),pe=f(u=>l({type:3,value:u})),fe=f(()=>l({type:4})),ve=c.useMemo(()=>({onChange:E,registerOption:ce,registerLabel:de,goToOption:ue,closeListbox:se,openListbox:le,selectActiveOption:ae,selectOption:ie,search:pe,clearSearch:fe}),[]),be={ref:P},U=c.useRef(null),xe=H();return c.useEffect(()=>{U.current&&n!==void 0&&xe.addEventListener(U.current,"reset",()=>{E(n)})},[U,E]),B.createElement(G.Provider,{value:ve},B.createElement(J.Provider,{value:g},B.createElement(ge,{value:D(g.listboxState,{[0]:j.Open,[1]:j.Closed})},s!=null&&O!=null&&te({[s]:O}).map(([u,d],S)=>B.createElement(Re,{features:Se.Hidden,ref:S===0?z=>{var W;U.current=(W=z==null?void 0:z.closest("form"))!=null?W:null}:void 0,...Ie({key:u,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:u,value:d})})),A({ourProps:be,theirProps:I,slot:ne,defaultTag:Ue,name:"Listbox"}))))}let Be="button";function He(e,r){var o;let n=V(),{id:i=`headlessui-listbox-button-${n}`,...s}=e,t=Q("Listbox.Button"),a=F("Listbox.Button"),p=M(t.buttonRef,r),v=H(),m=f(b=>{switch(b.key){case h.Space:case h.Enter:case h.ArrowDown:b.preventDefault(),a.openListbox(),v.nextFrame(()=>{t.value||a.goToOption(L.First)});break;case h.ArrowUp:b.preventDefault(),a.openListbox(),v.nextFrame(()=>{t.value||a.goToOption(L.Last)});break}}),I=f(b=>{switch(b.key){case h.Space:b.preventDefault();break}}),T=f(b=>{if(Te(b.currentTarget))return b.preventDefault();t.listboxState===0?(a.closeListbox(),v.nextFrame(()=>{var l;return(l=t.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})})):(b.preventDefault(),a.openListbox())}),P=ee(()=>{if(t.labelId)return[t.labelId,i].join(" ")},[t.labelId,i]),O=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),$={ref:p,id:i,type:Pe(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=t.optionsRef.current)==null?void 0:o.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":P,disabled:t.disabled,onKeyDown:m,onKeyUp:I,onClick:T};return A({ourProps:$,theirProps:s,slot:O,defaultTag:Be,name:"Listbox.Button"})}let je="label";function Ve(e,r){let o=V(),{id:n=`headlessui-listbox-label-${o}`,...i}=e,s=Q("Listbox.Label"),t=F("Listbox.Label"),a=M(s.labelRef,r);C(()=>t.registerLabel(n),[n]);let p=f(()=>{var m;return(m=s.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}),v=c.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return A({ourProps:{ref:a,id:n,onClick:p},theirProps:i,slot:v,defaultTag:je,name:"Listbox.Label"})}let Xe="ul",Ke=Y.RenderStrategy|Y.Static;function qe(e,r){var o;let n=V(),{id:i=`headlessui-listbox-options-${n}`,...s}=e,t=Q("Listbox.Options"),a=F("Listbox.Options"),p=M(t.optionsRef,r),v=H(),m=H(),I=he(),T=(()=>I!==null?(I&j.Open)===j.Open:t.listboxState===0)();c.useEffect(()=>{var l;let x=t.optionsRef.current;x&&t.listboxState===0&&x!==((l=ye(x))==null?void 0:l.activeElement)&&x.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let P=f(l=>{switch(m.dispose(),l.key){case h.Space:if(t.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),a.search(l.key);case h.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:x}=t.options[t.activeOptionIndex];a.onChange(x.current.value)}t.mode===0&&(a.closeListbox(),q().nextFrame(()=>{var x;return(x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}));break;case D(t.orientation,{vertical:h.ArrowDown,horizontal:h.ArrowRight}):return l.preventDefault(),l.stopPropagation(),a.goToOption(L.Next);case D(t.orientation,{vertical:h.ArrowUp,horizontal:h.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),a.goToOption(L.Previous);case h.Home:case h.PageUp:return l.preventDefault(),l.stopPropagation(),a.goToOption(L.First);case h.End:case h.PageDown:return l.preventDefault(),l.stopPropagation(),a.goToOption(L.Last);case h.Escape:return l.preventDefault(),l.stopPropagation(),a.closeListbox(),v.nextFrame(()=>{var x;return(x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})});case h.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(a.search(l.key),m.setTimeout(()=>a.clearSearch(),350));break}}),O=ee(()=>{var l,x,w;return(w=(l=t.labelRef.current)==null?void 0:l.id)!=null?w:(x=t.buttonRef.current)==null?void 0:x.id},[t.labelRef.current,t.buttonRef.current]),$=c.useMemo(()=>({open:t.listboxState===0}),[t]),b={"aria-activedescendant":t.activeOptionIndex===null||(o=t.options[t.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":O,"aria-orientation":t.orientation,id:i,onKeyDown:P,role:"listbox",tabIndex:0,ref:p};return A({ourProps:b,theirProps:s,slot:$,defaultTag:Xe,features:Ke,visible:T,name:"Listbox.Options"})}let Ge="li";function Je(e,r){let o=V(),{id:n=`headlessui-listbox-option-${o}`,disabled:i=!1,value:s,...t}=e,a=Q("Listbox.Option"),p=F("Listbox.Option"),v=a.activeOptionIndex!==null?a.options[a.activeOptionIndex].id===n:!1,m=a.isSelected(s),I=c.useRef(null),T=_({disabled:i,value:s,domRef:I,get textValue(){var R,y;return(y=(R=I.current)==null?void 0:R.textContent)==null?void 0:y.toLowerCase()}}),P=M(r,I);C(()=>{if(a.listboxState!==0||!v||a.activationTrigger===0)return;let R=q();return R.requestAnimationFrame(()=>{var y,N;(N=(y=I.current)==null?void 0:y.scrollIntoView)==null||N.call(y,{block:"nearest"})}),R.dispose},[I,v,a.listboxState,a.activationTrigger,a.activeOptionIndex]),C(()=>p.registerOption(n,T),[T,n]);let O=f(R=>{if(i)return R.preventDefault();p.onChange(s),a.mode===0&&(p.closeListbox(),q().nextFrame(()=>{var y;return(y=a.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})}))}),$=f(()=>{if(i)return p.goToOption(L.Nothing);p.goToOption(L.Specific,n)}),b=Ce(),l=f(R=>b.update(R)),x=f(R=>{b.wasMoved(R)&&(i||v||p.goToOption(L.Specific,n,0))}),w=f(R=>{b.wasMoved(R)&&(i||v&&p.goToOption(L.Nothing))}),X=c.useMemo(()=>({active:v,selected:m,disabled:i}),[v,m,i]);return A({ourProps:{id:n,ref:P,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":m,disabled:void 0,onClick:O,onFocus:$,onPointerEnter:l,onMouseEnter:l,onPointerMove:x,onMouseMove:x,onPointerLeave:w,onMouseLeave:w},theirProps:t,slot:X,defaultTag:Ge,name:"Listbox.Option"})}let We=k(ze),Ye=k(He),Ze=k(Ve),_e=k(qe),et=k(Je),lt=Object.assign(We,{Button:Ye,Label:Ze,Options:_e,Option:et});export{lt as H};