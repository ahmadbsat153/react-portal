import{j as r,a as e}from"./app-e057de79.js";import o from"./SafetyBarChart02-f50143a0.js";import{t as a}from"./Utils-ddf74621.js";import"./ChartjsConfig-c194a2bd.js";import"./chart-edd6f26f.js";import"./chartjs-adapter-moment.esm-ca28907c.js";import"./moment-fbc5633a.js";import"./ThemeContext-fd13f5c1.js";function g(){const t={labels:["12-01-2020","01-01-2021","02-01-2021","03-01-2021","04-01-2021","05-01-2021"],datasets:[{label:"Stack 1",data:[6200,9200,6600,8800,5200,9200],backgroundColor:a().theme.colors.indigo[500],hoverBackgroundColor:a().theme.colors.indigo[600],barPercentage:.66,categoryPercentage:.66},{label:"Stack 2",data:[-4e3,-2600,-5350,-4e3,-7500,-2e3],backgroundColor:a().theme.colors.indigo[200],hoverBackgroundColor:a().theme.colors.indigo[300],barPercentage:.66,categoryPercentage:.66}]};return r("div",{className:"flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700",children:[e("header",{className:"px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center",children:e("h2",{className:"font-semibold text-slate-800 dark:text-slate-100",children:"Sales VS Refunds"})}),e("div",{className:"px-5 py-3",children:r("div",{className:"flex items-start",children:[e("div",{className:"text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2",children:"+$6,796"}),e("div",{className:"text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full",children:"-34%"})]})}),e("div",{className:"grow",children:e(o,{data:t,width:595,height:248})})]})}export{g as default};
