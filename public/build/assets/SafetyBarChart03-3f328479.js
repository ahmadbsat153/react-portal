import{r as o,j as y,a as r}from"./app-e057de79.js";import{C as x,B as T,e as k,d as I,f as L,p as S,a as A}from"./chart-edd6f26f.js";import"./chartjs-adapter-moment.esm-ca28907c.js";import{t}from"./Utils-ddf74621.js";import"./moment-fbc5633a.js";x.register(T,k,I,L,S,A);function q({data:c,width:v,height:C}){const p=o.useRef(null),m=o.useRef(null);return o.useEffect(()=>{const u=(e,f)=>e+f,h=c.datasets.map(e=>e.data.reduce(u)).reduce(u),b=p.current,w=new x(b,{type:"bar",data:c,options:{indexAxis:"y",layout:{padding:{top:12,bottom:12,left:20,right:20}},scales:{x:{stacked:!0,display:!1,max:h},y:{stacked:!0,display:!1}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:()=>!1,label:e=>e.parsed.x}}},interaction:{intersect:!1,mode:"nearest"},animation:{duration:500},maintainAspectRatio:!1,resizeDelay:200},plugins:[{id:"htmlLegend",afterUpdate(e,f,_){const d=m.current;if(!d)return;for(;d.firstChild;)d.firstChild.remove();e.options.plugins.legend.labels.generateLabels(e).forEach(l=>{const a=document.createElement("li");a.style.display="flex",a.style.justifyContent="space-between",a.style.alignItems="center",a.style.paddingTop=t().theme.padding[2.5],a.style.paddingBottom=t().theme.padding[2.5];const n=document.createElement("div");n.style.display="flex",n.style.alignItems="center";const s=document.createElement("div");s.style.width=t().theme.width[3],s.style.height=t().theme.width[3],s.style.borderRadius=t().theme.borderRadius.sm,s.style.marginRight=t().theme.margin[3],s.style.backgroundColor=l.fillStyle;const g=document.createElement("div"),i=document.createElement("div");i.style.fontWeight=t().theme.fontWeight.medium,i.style.marginLeft=t().theme.margin[3],i.style.color=l.text==="Other"?t().theme.colors.slate[400]:l.fillStyle;const E=e.data.datasets[l.datasetIndex].data.reduce((j,B)=>j+B,0),N=document.createTextNode(`${parseInt(E/h*100)}%`),R=document.createTextNode(l.text);i.appendChild(N),g.appendChild(R),d.appendChild(a),a.appendChild(n),a.appendChild(i),n.appendChild(s),n.appendChild(g)})}}]});return()=>w.destroy()},[]),y("div",{className:"grow flex flex-col justify-center",children:[r("div",{children:r("canvas",{ref:p,width:v,height:C})}),y("div",{className:"px-5 pt-2 pb-2",children:[r("ul",{ref:m,className:"text-sm divide-y divide-slate-100"}),r("ul",{className:"text-sm divide-y divide-slate-100"})]})]})}export{q as default};