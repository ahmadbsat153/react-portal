import{j as g,a as s}from"./app-e057de79.js";import C from"./SafetyBarChart01-7448d6ce.js";import"./Utils-ddf74621.js";import"./chart-edd6f26f.js";import"./chartjs-adapter-moment.esm-ca28907c.js";import"./moment-fbc5633a.js";function v(r){const l=r.chartTitle,d=r.typesbymonth,b=r.safetyTypes;function f(a){const o=Object.keys(a),c=Array.from(new Set(Object.values(a).flatMap(Object.keys))),h=c.map(t=>o.map(e=>a[e][t]!==void 0?a[e][t]:0)),y=c.map((t,e)=>{const n=b.find(u=>u.SafetyTypeId===Number(t)),i=["#4F4F4F","#F1E6C4","#E2C047","#f8dc9d","#d9e74","#9c8b80","#c2bdab","#84867f"][e],p=["#B49115","#535B6B","#000000","#E2C047","#f8dc9d","#d9e74","#9c8b80","#c2bdab","#84867f"][e];return{label:n?n.SafetyTypeName:`Type ${t}`,data:h[e],backgroundColor:i,hoverBackgroundColor:p,barPercentage:.66,categoryPercentage:.66}});return{labels:o,datasets:y}}const m=f(d);return g("div",{className:"flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg h-full rounded-sm border border-slate-200",children:[s("header",{className:"px-5 py-4 border-b border-slate-100",children:s("h2",{className:"font-semibold text-slate-800",children:l})}),s(C,{data:m,width:595,height:248})]})}export{v as default};
