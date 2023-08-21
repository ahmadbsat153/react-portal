import{r as o,j as a,a as e}from"./app-e057de79.js";import{R as X}from"./react-paginate-61d0e15f.js";import{l as Q}from"./index-18cf91c4.js";import{n as Z}from"./NotFound-19253a0b.js";import{E as ee}from"./exceljs.min-9c74167d.js";import{h as L}from"./moment-fbc5633a.js";import{C as te}from"./index-2fd36de9.js";import{F as ae}from"./FileSaver.min-104598b7.js";import{L as N}from"./popover-807b57b5.js";import{t as se}from"./transition-d8cb4eb2.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./render-5eaee1c9.js";import"./keyboard-7b642a18.js";import"./bugs-55244794.js";import"./use-is-mounted-31350877.js";import"./use-resolve-button-type-ff7c32c3.js";import"./use-event-listener-2051adf1.js";function le(...d){return d.filter(Boolean).join(" ")}function Fe({DriverData:d,setActiveIndexGTRS:ne,setLastIndex:ie,setactiveCon:oe,setDriverData:T,url:E,currentUser:V}){const[b,v]=o.useState();o.useEffect(()=>{d==null&&(v(!0),Y())},[]);const Y=async()=>{axios.get(`${E}api/GTRS/DriverLogin`,{headers:{RoleId:V.role_id}}).then(t=>{const m=JSON.stringify(t.data);new Promise((r,u)=>{const h=JSON.parse(m);r(h)}).then(r=>{T(r),v(!1)})}).catch(t=>{console.log(t)})},[n,U]=o.useState(d),[j,w]=o.useState(0),g=15,S=j*g,P=t=>{w(t.selected)},p=new Date,R=`${p.getFullYear()}-${p.getMonth()+1}-${p.getDate()}`,[ce,I]=o.useState(d),[_,re]=o.useState(""),[H,de]=o.useState(R),B=(t,m)=>{const x=n==null?void 0:n.filter(r=>{const u=new Date(r.DespatchDate),h=new Date(t),s=new Date(m);return h.setHours(0),s.setSeconds(59),s.setMinutes(59),s.setHours(23),u>=h&&u<=s});w(0),I(x)};o.useEffect(()=>{B(_,H),U(d)},[d]);const $=Math.ceil((n==null?void 0:n.length)/g),D=o.useRef(),[f,k]=o.useState(!1),[C,A]=o.useState(!1),[i,M]=o.useState([]);o.useLayoutEffect(()=>{const t=i.length>0&&i.length<(n==null?void 0:n.length);k((i==null?void 0:i.length)===(n==null?void 0:n.length)),A(t),D.current.indeterminate=t},[i]);function O(){M(f||C?[]:n),k(!f&&!C),A(!1)}const G=o.useRef(null),J=["Name","Device Code","Smart SCAN","Smart SCAN Freight","Smart SCAN Version","Description","Last Active UTC","VLink","Software Version","Device Sim Type","Device Model","Device Makes"];Q.useDownloadExcel({currentTableRef:G.current,filename:"Consignments table",sheet:"Consignments"});function W(){let t=Array.from(document.querySelectorAll('input[name="column"]:checked')).map(s=>s.value);t.length===0&&(t=J);const m=i.map(s=>t.reduce((c,y)=>{const l=y.replace(/\s+/g,"");return l?l==="DeviceSimType"?c[l]=s.MobilityDeviceSimTypes_Description:l==="SmartSCANVersion"?c[l]=s.SmartSCANSoftwareVersion:l==="DeviceModel"?c[l]=s.MobilityDeviceModels_Description:l==="LastActiveUTC"?c[l]=n.LastActiveUTC==""?"":L(s.LastActiveUTC.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):l==="DeviceMakes"?c[l]=s.MobilityDeviceMakes_Description:l==="VLink"?c[l]=s.UsedForVLink:l==="SmartSCANFreight"?c[l]=s.UsedForSmartSCANFreight:l==="SmartSCAN"?c[l]=s.UsedForSmartSCAN:c[y.replace(/\s+/g,"")]=s[y.replace(/\s+/g,"")]:c[l]=s[l],c},{})),x=new ee.Workbook,r=x.addWorksheet("Sheet1"),u=r.addRow(t);u.font={bold:!0},u.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFE2B540"}},u.alignment={horizontal:"center"},m.forEach(s=>{r.addRow(Object.values(s))});const h=t.map(()=>15);r.columns=h.map((s,c)=>({width:s,key:t[c]})),x.xlsx.writeBuffer().then(s=>{const c=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});ae.saveAs(c,"Driver-Login.xlsx")})}const[z,q]=o.useState(""),[K,F]=o.useState(!1);return a("div",{children:[b&&a("div",{className:"min-h-screen md:pl-20 pt-16 h-full flex flex-col items-center justify-center",children:[a("div",{className:"flex items-center justify-center",children:[e("div",{className:"h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce"}),e("div",{className:"h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce200"}),e("div",{className:"h-5 w-5 bg-goldd rounded-full animate-bounce400"})]}),e("div",{className:"text-dark mt-4 font-bold",children:"Please wait while we get the data for you."})]}),!b&&a("div",{className:"px-4 sm:px-6 lg:px-8 w-full bg-smooth pb-20",children:[a("div",{className:"sm:flex sm:items-center",children:[e("div",{className:"sm:flex-auto mt-6",children:e("h1",{className:"text-2xl py-2 px-0 font-extrabold text-gray-600",children:"Driver Login"})}),e("div",{className:"absolute left-auto right-10 top-9",children:a(N,{className:"relative object-right flex-item md:ml-auto",children:[e("button",{onMouseEnter:()=>{i.length===0&&(q("Please select a row"),F(!0),setTimeout(()=>{F(!1)},2e3))},children:a(N.Button,{className:`inline-flex items-center w-[5.5rem] h-[36px] rounded-md border ${i.length===0?"bg-gray-300 cursor-not-allowed":"bg-gray-800"} px-4 py-2 text-xs font-medium leading-4 text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`,disabled:i.length===0,children:["Export",e(te,{className:"h-5 w-5","aria-hidden":"true"})]})}),K&&e("div",{className:"absolute top-7 -left-14 w-[9rem] right-0 bg-red-200 text-dark text-xs py-2 px-4 rounded-md opacity-100 transition-opacity duration-300",children:z}),e(se,{as:o.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(N.Panel,{className:"absolute left-20 lg:left-0 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4",children:a("div",{className:" max-w-md flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",children:[e("div",{className:"p-4",children:a("div",{className:"mt-2 flex flex-col",children:[a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"Name",className:"text-dark focus:ring-goldd rounded "})," ","Name"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"Device Code",className:"text-dark rounded focus:ring-goldd"})," ","Device Code"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"Smart SCAN",className:"text-dark rounded focus:ring-goldd"})," ","Smart SCAN"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"Smart SCAN Freight",className:"text-dark rounded focus:ring-goldd"})," ","Smart SCAN Freight"]}),a("label",{children:[e("input",{type:"checkbox",name:"column",value:"Smart SCAN Version",className:"text-dark rounded focus:ring-goldd"})," ","Smart SCAN Version"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"Description",className:"text-dark rounded focus:ring-goldd"})," ","Description"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"Last Active UTC",className:"text-dark rounded focus:ring-goldd"})," ","Last Active UTC"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"VLink",className:"text-dark rounded focus:ring-goldd"})," ","VLink"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"Software Version",className:"text-dark rounded focus:ring-goldd"})," ","Software Version"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"Device Sim Type",className:"text-dark rounded focus:ring-goldd"})," ","Device Sim Type"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"Device Model",className:"text-dark rounded focus:ring-goldd"})," ","Device Model"]}),a("label",{className:"",children:[e("input",{type:"checkbox",name:"column",value:"Device Makes",className:"text-dark rounded focus:ring-goldd"})," ","Device Makes"]})]})}),e("div",{className:"grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50",children:e("button",{onClick:W,className:"flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100",children:"Export XLS"})})]})})})]})})]}),a("div",{className:"mt-8 flow-root  bg-white ",children:[e("div",{className:"w-full border rounded-lg overflow-x-auto containerscroll",children:e("div",{className:"inline-block min-w-full  align-middle ",children:a("div",{className:"relative",children:[i.length>0&&e("div",{className:"absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12"}),a("table",{className:"min-w-full table-fixed divide-y divide-gray-300",children:[e("thead",{children:a("tr",{children:[e("th",{scope:"col",className:"relative px-7 sm:w-12 sm:px-6",children:e("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-dark focus:ring-goldd",ref:D,checked:f,onChange:O})}),e("th",{scope:"col",className:"min-w-[8rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Device Code"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Smart SCAN"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Smart SCAN Freight"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Smart SCAN Version"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Description"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Last Active UTC"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"VLink"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Software Version"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Device Sim Type"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Device Model"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600",children:"Device Makes"})]})}),e("tbody",{className:"divide-y divide-gray-300 ",children:(n==null?void 0:n.length)>0?n.slice(S,S+g).map((t,m)=>a("tr",{className:[i.includes(t)?"bg-gray-50":"cursor-pointer",m%2===0?"bg-smooth":"bg-white"].join(" "),children:[a("td",{className:"relative px-7 sm:w-12 sm:px-6",children:[i.includes(t)&&e("div",{className:"absolute inset-y-0 left-0 w-0.5 bg-goldd"}),e("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-dark focus:ring-goldd",value:t.ConsignmentId,checked:i.includes(t),onChange:x=>M(x.target.checked?[...i,t]:i.filter(r=>r!==t))})]}),e("td",{className:le("whitespace-nowrap  pr-3 text-sm font-medium",i.includes(t)?"text-indigo-600":"text-gray-500"),children:t.Name}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.DeviceCode}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.UsedForSmartSCAN?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"true"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"false"})}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.UsedForSmartSCANFreight?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"true"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"false"})}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.SmartSCANSoftwareVersion}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.Description}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.LastActiveUTC===""?"":L(t.LastActiveUTC.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A")}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.UsedForVLink?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"true"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"false"})}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.SoftwareVersion}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.MobilityDeviceSimTypes_Description}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.MobilityDeviceModels_Description}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.MobilityDeviceMakes_Description})]},t.ConsignmentId)):e("tr",{children:e("td",{colSpan:"13",children:e("div",{class:" h-64 flex items-center justify-center mt-10",children:a("div",{class:"text-center flex justify-center flex-col",children:[e("img",{src:Z,alt:"",className:"w-52 h-auto "}),e("h1",{class:"text-3xl font-bold text-gray-900",children:"No Data Found"})]})})})})})]})]})})}),e("div",{className:"pt-4 pb-10 text-xs text-gray-400",children:e(X,{previousLabel:"← Previous",nextLabel:"Next →",pageCount:$,onPageChange:P,containerClassName:"flex justify-center items-center mt-4",pageClassName:"mx-2 rounded-full hover:bg-gray-100",previousLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-l hover:bg-gray-200",nextLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-r hover:bg-gray-200",disabledClassName:"opacity-50 cursor-not-allowed",activeClassName:"text-blue-500 font-bold"})})]})]})]})}export{Fe as default};
