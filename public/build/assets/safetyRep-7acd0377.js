import{r as i,a as t,j as f}from"./app-e057de79.js";import"./react-paginate-61d0e15f.js";import"./index-18cf91c4.js";import ae from"./safetyRepTable-a8374365.js";import{S as se}from"./safetyRepChart-ddd1d93d.js";import{S as ie}from"./react-select.esm-e6119c41.js";import re from"./AddSafetyType-003f8828.js";import"./index-2d4490b8.js";import"./TextInput-ea077d76.js";/* empty css               */import"./index-92f9eb90.js";import"./exceljs.min-9c74167d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./moment-fbc5633a.js";import"./FileSaver.min-104598b7.js";import"./index-2fd36de9.js";import"./popover-807b57b5.js";import"./render-5eaee1c9.js";import"./keyboard-7b642a18.js";import"./bugs-55244794.js";import"./use-is-mounted-31350877.js";import"./use-resolve-button-type-ff7c32c3.js";import"./use-event-listener-2051adf1.js";import"./transition-d8cb4eb2.js";import"./SafetyCard02-d222542b.js";import"./chart-edd6f26f.js";import"./chartjs-adapter-moment.esm-ca28907c.js";import"./Utils-ddf74621.js";import"./DoughnutChart-8bb20f0e.js";import"./clsx.m-84295364.js";import"./SafetyRepByState-9db987a1.js";import"./SafetyDoubleBarChart-719631e6.js";import"./SafetyBarChart01-7448d6ce.js";import"./createLoading-8fbf5230.js";import"./tslib.es6-3c43c0a4.js";import"./StackedBarChart-ca1548c3.js";import"./index-3598ead0.js";import"./assertThisInitialized-9eca4e7a.js";import"./emotion-react.browser.esm-ebc793e1.js";import"./emotion-memoize.esm-f5713a00.js";import"./hoist-non-react-statics.cjs-8f2ef505.js";import"./NotFound-19253a0b.js";import"./AddSafetyTypeModel-0de92d42.js";import"./InputError-d98f57fe.js";function Ye({accData:O,currentUser:l,url:u,safetyDataState:n,setsafetyDataState:$,setSafetyTypes:S,safetyTypes:m,safetyCauses:w,setSafetyCauses:J,oldestDate:_,latestDate:q,DefaultSDate:H,DefaultEDate:M}){const[c,D]=i.useState(H),[d,C]=i.useState(M);i.useEffect(()=>{k(n),T(n)},[]);function k(e){if(!e||e.length===0)return null;let a=null;for(let r=0;r<e.length;r++){const s=e[r].OccuredAt;s&&(!a||s<a)&&(a=s)}D(a.split("T")[0])}function T(e){if(!e||e.length===0)return null;let a=null;for(let r=0;r<e.length;r++){const s=e[r].OccuredAt;s&&(!a||s>a)&&(a=s)}C(a.split("T")[0])}const[o,K]=i.useState(0),[E,b]=i.useState(null),[x,L]=i.useState([]);i.useState("first");const[V,z]=i.useState(0),[I,P]=i.useState(!1),[B,y]=i.useState(),[G,R]=i.useState(),[Q,F]=i.useState(),W=(()=>m==null?void 0:m.reduce((a,r)=>(a.find(s=>s.value===r.SafetyTypeId)||a.push({value:r.SafetyTypeId,label:r.SafetyTypeName}),a),[]))();i.useEffect(()=>{n.length===0&&(y(!0),R(!0),F(!0),j(),X(),Y())},[]);function j(){return y(!0),axios.get(`${u}api/SafetyReport`,{headers:{RoleId:l.role_id}}).then(e=>{k(e.data),T(e.data),$(e.data||[]),b(e.data||[]),y(!1)}).catch(e=>{console.log(e)})}function X(){axios.get(`${u}api/SafetyTypes`,{headers:{RoleId:l.role_id}}).then(e=>{const a=JSON.stringify(e.data);new Promise((s,h)=>{const p=JSON.parse(a);s(p)}).then(s=>{S(s),R(!1)})}).catch(e=>{console.log(e)})}function Y(){axios.get(`${u}api/SafetyCauses`,{headers:{RoleId:l.role_id}}).then(e=>{const a=JSON.stringify(e.data);new Promise((s,h)=>{const p=JSON.parse(a);s(p)}).then(s=>{J(s),F(!1)})}).catch(e=>{console.log(e)})}i.useEffect(()=>{v(c,d)},[c,d]),i.useEffect(()=>{v(c,d)},[O,x]),i.useEffect(()=>{I&&(j(),P(!1))},[I]);const Z=e=>{L(e),v(c,d)},v=(e,a)=>{const r=n==null?void 0:n.filter(s=>{const h=new Date(s.OccuredAt),p=new Date(e),g=new Date(a);p.setHours(0),g.setSeconds(59),g.setMinutes(59),g.setHours(23);const ee=x.length===0||x.some(te=>te.value===s.SafetyType);return h>=p&&h<=g&&ee});b(r),z(0)},U={control:e=>({...e}),option:(e,a)=>({...e,color:"black"}),multiValue:e=>({...e,width:"auto",overflow:"hidden"}),valueContainer:e=>({...e,width:"400px",maxHeight:"75px",overflow:"auto"}),inputContainer:e=>({...e})};let A=[t(ae,{url:u,safetyCauses:w,safetyTypes:m,filteredData:E,currentPageRep:V,currentUser:l,setFilteredData:b,setDataEdited:P}),t(se,{filteredData:E,safetyCauses:w,safetyTypes:m}),t(re,{url:u,currentUser:l,safetyTypes:m,setSafetyTypes:S})];const N=e=>{K(e)};return t("div",{children:B||Q||G?f("div",{className:"min-h-screen md:pl-20 pt-16 h-full flex flex-col items-center justify-center",children:[f("div",{className:"flex items-center justify-center",children:[t("div",{className:"h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce"}),t("div",{className:"h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce200"}),t("div",{className:"h-5 w-5 bg-goldd rounded-full animate-bounce400"})]}),t("div",{className:"text-dark mt-4 font-bold",children:"Please wait while we get the data for you."})]}):f("div",{className:"px-4 sm:px-6 lg:px-8 w-full bg-smooth pb-20",children:[t("div",{className:"sm:flex sm:items-center",children:t("div",{className:"sm:flex-auto mt-6",children:t("h1",{className:"text-2xl py-2 px-0 font-extrabold text-gray-600",children:"Safety Report"})})}),l.role_id==2?f("ul",{className:"flex space-x-0 mt-5",children:[t("li",{className:`cursor-pointer ${o===0?"text-dark border-b-4 py-2 border-goldt font-bold text-xs sm:text-base":"text-dark py-2 text-xs sm:text-base border-b-2 border-gray-300"}`,onClick:()=>N(0),children:t("div",{className:"px-2",children:"Report"})}),t("li",{className:`cursor-pointer ${o===1?"text-dark border-b-4 py-2 border-goldt font-bold text-xs sm:text-base":"text-dark py-2 text-xs sm:text-base border-b-2 border-gray-300"}`,onClick:()=>N(1),children:t("div",{className:"px-2",children:" Charts"})})]}):t("ul",{className:"flex space-x-0 mt-5 ",children:A.map((e,a)=>t("li",{className:`cursor-pointer ${o===a?"text-dark border-b-4 py-2 border-goldt font-bold text-xs sm:text-base":"text-dark py-2 text-xs sm:text-base border-b-2 border-gray-300"}`,onClick:()=>N(a),children:t("div",{className:"px-2",children:a===0?"Report":a===1?"Charts":a===2?"Safety Types":"Safety Causes"})},a))}),t("div",{className:"mt-8",children:t("div",{className:"w-full relative",children:f("div",{className:" sm:border-gray-200 text-gray-400 flex flex-col md:flex-row gap-y-4 gap-x-2 md:items-center",children:[(o===0||o===1)&&t("label",{htmlFor:"last-name",className:"inline-block text-sm font-medium leading-6  flex-item items-center",children:"Date From"}),(o===0||o===1)&&t("div",{className:"sm:mt-0 md:px-4 ",children:t("input",{type:"date",name:"from-date",onKeyDown:e=>e.preventDefault(),value:c,min:_,max:d,onChange:e=>D(e.target.value),id:"from-date",className:"flex-item block w-full max-w-lg h-[36px] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})}),(o===0||o===1)&&t("label",{htmlFor:"last-name",className:"inline-block text-sm font-medium leading-6 flex-item",children:"To"}),(o===0||o===1)&&t("div",{className:"mt-2 flex-item  sm:mt-0 md:px-4",children:t("input",{type:"date",name:"to-date",onKeyDown:e=>e.preventDefault(),value:d,min:c,max:q,onChange:e=>C(e.target.value),id:"to-date",className:"block w-full max-w-lg h-[36px]  rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})}),o===0&&t("div",{children:t("div",{className:"inline-block mb-2 mt-2",children:t("div",{className:" flex items-center",children:t("div",{className:"mt-2 w-72 sm:w-full sm:mt-0 ",children:t(ie,{name:"TypesSelect",isMulti:!0,options:W,styles:U,value:x,onChange:Z,className:"basic-multi-select text-red",classNamePrefix:"select"})})})})})]})})})," ",A[o]]})})}export{Ye as default};