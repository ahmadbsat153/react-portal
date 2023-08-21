import{r,a as e,j as a}from"./app-e057de79.js";import{R as se}from"./react-paginate-61d0e15f.js";import"./index-18cf91c4.js";import{n as ne}from"./NotFound-19253a0b.js";import{E as re}from"./exceljs.min-9c74167d.js";import{F as oe}from"./FileSaver.min-104598b7.js";import{h}from"./moment-fbc5633a.js";import{C as ie}from"./index-2fd36de9.js";import"./index-2d4490b8.js";import"./TextInput-ea077d76.js";import{L as T}from"./popover-807b57b5.js";import{t as ce}from"./transition-d8cb4eb2.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./render-5eaee1c9.js";import"./keyboard-7b642a18.js";import"./bugs-55244794.js";import"./use-is-mounted-31350877.js";import"./use-resolve-button-type-ff7c32c3.js";import"./use-event-listener-2051adf1.js";function de(...b){return b.filter(Boolean).join(" ")}function Ve({PerfData:b,setPerfData:me,failedReasons:ue,url:he,setActiveIndexGTRS:H,setLastIndex:O,setactiveCon:V,IDfilter:xe,currentUser:pe,accData:E,EDate:g,setEDate:L,SDate:f,setSDate:F,oldestDate:U,latestDate:j}){r.useState(!1),r.useState();const B=t=>{H(3),O(5),V(t)},G=b.filter(function(t){return t.POD===!1}),[D,ge]=r.useState(G),[i,Q]=r.useState(D),[v,W]=r.useState(""),Z=t=>{const m=t.target.value;F(m),y(m,g,v)},z=t=>{const m=t.target.value;L(m),y(f,m,v)},K=t=>{W(t),y(f,g,t)},y=(t,m,x)=>{const d=E==null?void 0:E.map(p=>{const l=parseInt(p);return isNaN(l)?0:l}),N=D==null?void 0:D.filter(p=>{const l=(d==null?void 0:d.length)===0||(d==null?void 0:d.includes(p.ChargeTo)),n=new Date(p.DESPATCHDATE),u=new Date(t),s=new Date(m);u.setHours(0),s.setSeconds(59),s.setMinutes(59),s.setHours(23);const c=x?p.CONSIGNMENTNUMBER.includes(x):!0;return n>=u&&n<=s&&c&&l});I(0),Q(N)};r.useEffect(()=>{y(f,g,v)},[E]);const Y=r.useRef(),[w,R]=r.useState(!1),[C,S]=r.useState(!1),[o,k]=r.useState([]);r.useLayoutEffect(()=>{const t=o.length>0&&o.length<(i==null?void 0:i.length);R(o.length===(i==null?void 0:i.length)),S(t),Y.current.indeterminate=t},[o]);function q(){k(w||C?[]:i),R(!w&&!C),S(!1)}const[_,I]=r.useState(0),M=15,A=_*M,J=t=>{I(t.selected)},X=Math.ceil((i==null?void 0:i.length)/M);r.useRef(null);const $=["Consignemnt Number","Sender Name","Sender State","Receiver Name","Receiver State","Status","Service","Despatch DateTime","RDD","Arrived Date Time","Delivered Datetime","POD"];function ee(){let t=Array.from(document.querySelectorAll('input[name="column"]:checked')).map(l=>l.value);t.length===0&&(t=$);const m=o.map(l=>t.reduce((n,u)=>{const s=u.replace(/\s+/g,"");if(s)if(l[s]===!0)n[s]="true";else if(l[s]===!1)n[s]="false";else if(u.replace(/\s+/g,"")==="SenderState")n[s]=l.SenderState;else if(u.toUpperCase()==="ARRIVED DATE TIME"){const c=l.ARRIVEDDATETIME;n[s]=c?h(c.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}else if(u.toUpperCase()==="RDD"){const c=l.DELIVERYREQUIREDDATETIME;n[s]=c?h(c.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}else if(u.toUpperCase()==="DELIVERED DATETIME"){const c=l.DELIVEREDDATETIME;n[s]=c?h(c.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}else if(u.toUpperCase()==="DESPATCH DATETIME"){const c=l.DESPATCHDATE;n[s]=c?h(c.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}else u==="Consignemnt Number"?n[s]=l.CONSIGNMENTNUMBER:n[s]=l[s.toUpperCase()];else n[s]=l[s.toUpperCase()];return n},{})),x=new re.Workbook,d=x.addWorksheet("Sheet1"),N=d.addRow(t);N.font={bold:!0},N.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFE2B540"}},N.alignment={horizontal:"center"},m.forEach(l=>{d.addRow(Object.values(l))});const p=t.map(()=>15);d.columns=p.map((l,n)=>({width:l,key:t[n]})),x.xlsx.writeBuffer().then(l=>{const n=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});oe.saveAs(n,"Missing-POD.xlsx")})}const[te,ae]=r.useState(""),[le,P]=r.useState(!1);return e("div",{children:a("div",{className:"px-4 sm:px-6 lg:px-8 w-full bg-smooth pb-20",children:[e("div",{className:"sm:flex sm:items-center",children:e("div",{className:"sm:flex-auto mt-6",children:e("h1",{className:"text-2xl py-2 px-0 font-extrabold text-gray-600",children:"Missing POD Report"})})}),a("div",{className:"mt-4",children:[a("div",{className:" w-full bg-smooth ",children:[e("div",{className:"mt-8",children:e("div",{className:"w-full relative",children:a("div",{className:" sm:border-gray-200 text-gray-400 flex flex-col justify-between md:flex-row gap-y-4 gap-x-2 md:items-center",children:[e("label",{htmlFor:"last-name",className:"inline-block text-sm font-medium leading-6  flex-item items-center",children:"Date From"}),e("div",{className:"sm:mt-0 md:px-4 ",children:e("input",{type:"date",name:"from-date",onKeyDown:t=>t.preventDefault(),value:f,min:U,max:g,onChange:Z,id:"from-date",className:"flex-item block w-full max-w-lg h-[36px] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})}),e("label",{htmlFor:"last-name",className:"inline-block text-sm font-medium leading-6 flex-item",children:"To"}),e("div",{className:"mt-2 flex-item  sm:mt-0 md:px-4",children:e("input",{type:"date",name:"to-date",onKeyDown:t=>t.preventDefault(),value:g,min:f,max:j,onChange:z,id:"to-date",className:"block w-full max-w-lg h-[36px]  rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})}),e("div",{className:"w-72 flex-item w-full sm:max-w-xs max-w-lg",children:a("div",{className:"relative border rounded",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",placeholder:"Con. No.",onChange:t=>K(t.target.value),className:"w-full py-0.5 h-[36px] pl-12 pr-4 text-gray-500 border-none rounded-md outline-none "})]})}),a(T,{className:"relative object-right flex-item md:ml-auto",children:[e("button",{onMouseEnter:()=>{o.length===0&&(ae("Please select a row"),P(!0),setTimeout(()=>{P(!1)},2e3))},children:a(T.Button,{className:`inline-flex items-center w-[5.5rem] h-[36px] rounded-md border ${o.length===0?"bg-gray-300 cursor-not-allowed":"bg-gray-800"} px-4 py-2 text-xs font-medium leading-4 text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`,disabled:o.length===0,children:["Export",e(ie,{className:"h-5 w-5","aria-hidden":"true"})]})}),le&&e("div",{className:"absolute top-7 -left-14 right-0 bg-red-200 text-dark text-xs py-2 px-4 rounded-md opacity-100 transition-opacity duration-300",children:te}),e(ce,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(T.Panel,{className:"absolute left-20 lg:left-0 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4",children:a("div",{className:" max-w-md flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",children:[e("div",{className:"p-4",children:a("div",{className:"mt-2 flex flex-col",children:[a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"CONSIGNMENTNUMBER",className:"text-dark focus:ring-goldd rounded "})," ","Consignment Number"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"SENDERNAME",className:"text-dark rounded focus:ring-goldd"})," ","Sender Name"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"SENDERZONE",className:"text-dark rounded focus:ring-goldd"})," ","Sender State"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"RECEIVERNAME",className:"text-dark rounded focus:ring-goldd"})," ","Receiver Name"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"RECEIVERZONE",className:"text-dark rounded focus:ring-goldd"})," ","Receiver State"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"SERVICE",className:"text-dark rounded focus:ring-goldd"})," ","Service"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"DESPATCHDATE",className:"text-dark rounded focus:ring-goldd"})," ","Despatch DateTime"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"DELIVERYREQUIREDDATETIME",className:"text-dark rounded focus:ring-goldd"})," ","RDD"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"ARRIVEDDATETIME",className:"text-dark rounded focus:ring-goldd"})," ","Arrived Date Time"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"DELIVEREDDATETIME",className:"text-dark rounded focus:ring-goldd"})," ","Delivered Date Time"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"POD",className:"text-dark rounded focus:ring-goldd"})," ","POD"]})]})}),e("div",{className:"grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50",children:e("button",{onClick:ee,className:"flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100",children:"Export XLS"})})]})})})]})]})})}),a("div",{className:"mt-8 flow-root  bg-white ",children:[e("div",{className:"w-full border rounded-lg overflow-x-auto containerscroll",children:e("div",{className:"inline-block min-w-full  align-middle ",children:a("div",{className:"relative",children:[o.length>0&&e("div",{className:"absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12"}),a("table",{className:"min-w-full table-fixed divide-y divide-gray-300",children:[e("thead",{className:"h-12",children:a("tr",{className:"py-2.5",children:[e("th",{scope:"col",className:"relative px-7 sm:w-12 sm:px-6",children:e("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-dark focus:ring-goldd",ref:Y,checked:w,onChange:q})}),e("th",{scope:"col",className:"min-w-[8rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900",children:"Con No."}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Sender Name"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Sender State"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Receiver Name"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Receiver State"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Service"}),a("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:["Despatch Date"," "]}),a("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:["RDD"," "]}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Arrived Date Time"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Delivered Date Time"}),a("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:["POD"," "]})]})}),e("tbody",{className:"divide-y divide-gray-300 ",children:(i==null?void 0:i.length)>0?i.slice(A,A+M).map((t,m)=>a("tr",{className:[o.includes(t)?"bg-gray-50":"cursor-pointer",m%2===0?"bg-smooth":"bg-white"].join(" "),children:[a("td",{className:"relative px-7 sm:w-12 sm:px-6",children:[o.includes(t)&&e("div",{className:"absolute inset-y-0 left-0 w-0.5 bg-goldd"}),e("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-dark focus:ring-goldd",value:t.CONSIGNMNENTID,checked:o.includes(t),onChange:x=>k(x.target.checked?[...o,t]:o.filter(d=>d!==t))})]}),e("td",{onClick:()=>B(t.CONSIGNMNENTID),className:de("whitespace-nowrap  pr-3 text-sm font-medium",o.includes(t)?"text-indigo-600":"text-blue-600 underline hover:cursor-pointer"),children:t.CONSIGNMENTNUMBER}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.SENDERNAME}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.SENDERZONE}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.RECEIVERNAME}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.RECEIVERZONE}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.SERVICE}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.DESPATCHDATE?h(t.DESPATCHDATE.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.DELIVERYREQUIREDDATETIME?h(t.DELIVERYREQUIREDDATETIME.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.ARRIVEDDATETIME?h(t.ARRIVEDDATETIME.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.DELIVEREDDATETIME?h(t.DELIVEREDDATETIME.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.POD?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"true"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"false"})})]},t.CONSIGNMNENTID)):e("tr",{children:e("td",{colSpan:"11",children:e("div",{class:" h-72 flex items-center justify-center mt-5",children:a("div",{class:"text-center flex justify-center flex-col",children:[e("img",{src:ne,alt:"",className:"w-52 h-auto "}),e("h1",{class:"text-3xl font-bold text-gray-900",children:"No Data Found"})]})})})})})]})]})})}),e("div",{className:"pt-4 pb-10 text-xs text-gray-400",children:e(se,{previousLabel:"← Previous",nextLabel:"Next →",pageCount:X,onPageChange:J,containerClassName:"flex justify-center items-center mt-4",pageClassName:"mx-2 rounded-full hover:bg-gray-100",previousLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-l hover:bg-gray-200",nextLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-r hover:bg-gray-200",disabledClassName:"opacity-50 cursor-not-allowed",activeClassName:"text-blue-500 font-bold"})})]})]})," "]})]})})}export{Ve as default};
