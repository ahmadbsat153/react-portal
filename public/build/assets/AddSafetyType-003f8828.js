import{r as i,j as a,a as e,i as w}from"./app-e057de79.js";import{P as v}from"./index-92f9eb90.js";import"./index-2d4490b8.js";import"./TextInput-ea077d76.js";/* empty css               */import{n as f}from"./NotFound-19253a0b.js";import S from"./AddSafetyTypeModel-0de92d42.js";import"./InputError-d98f57fe.js";function F({safetyTypes:n,setSafetyTypes:x,url:c,currentUser:o}){const[d,u]=i.useState(!1),[m,y]=i.useState(n),[h,p]=i.useState(),r=t=>{p(t);const s=!d;document.body.style.overflow=s?"hidden":"auto",u(s)};i.useState(0);function N(){w.get(`${c}api/SafetyTypes`,{headers:{RoleId:o.role_id}}).then(t=>{const s=JSON.stringify(t.data);new Promise((l,D)=>{const b=JSON.parse(s);l(b)}).then(l=>{x(l),y(l)})}).catch(t=>{console.log(t)})}const g=()=>{N()};return a("div",{className:" w-full bg-smooth",children:[a("div",{className:"sm:flex sm:items-center",children:[e("div",{className:"sm:flex-auto mt-6 sm:items-center",children:e("h1",{className:"text-2xl py-2 px-0 font-extrabold text-gray-600 sm:items-center",children:"Safety Types"})}),e("div",{className:"inline-block  left-auto ",children:e("button",{type:"button",onClick:()=>r(h),className:"whitespace-nowrap w-[5.5rem] h-[36px] rounded-md border border-transparent bg-gray-800 px-3 py-2 text-xs font-medium leading-4 text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Add Type"})})]}),e("div",{className:"mt-8 flow-root  bg-white ",children:e("div",{className:"w-full border rounded-lg overflow-x-auto",children:e("div",{className:"inline-block min-w-full  align-middle ",children:n?e("div",{className:"relative",children:a("table",{id:"details",className:"min-w-full table-fixed divide-y divide-gray-300 ",children:[e("thead",{className:"h-12",children:a("tr",{className:"py-2.5",children:[e("th",{scope:"col",className:"min-w-[18rem] pr-3 text-left text-sm font-semibold text-gray-600 px-7",children:"Name"}),e("th",{scope:"col",className:"px-3  text-left text-sm font-semibold text-gray-600 ",children:"Status"}),e("th",{scope:"col",className:" px-3  text-left text-sm font-semibold text-gray-600",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"divide-y divide-gray-300  max-h-80 overflow-y-scroll",children:m.length>0?m.map((t,s)=>a("tr",{className:[s%2===0?"bg-smooth":"bg-white"].join(" "),children:[e("td",{className:"whitespace-nowrap py-4 px-5 text-sm font-medium text-gray-900 ",children:t.SafetyTypeName}),e("td",{className:"whitespace-nowrap px-3 py-2.5 text-sm text-gray-500",children:t.SafetyStatus?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"active"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"inactive"})}),e("td",{className:"relative whitespace-nowrap py-4 pl-3 sm:pr-4 pr-6 text-left text-sm font-medium",children:a("a",{href:"#",onClick:()=>r(t),className:" text-blue-500 hover:text-blue-900 flex",children:[e(v,{className:"w-5 h-5"}),e("span",{className:"ml-2",children:"Edit"}),a("span",{className:"sr-only",children:[","," ",t.SafetyTypeName]})]})})]},s)):e("tr",{children:e("td",{colSpan:"7",children:e("div",{class:" h-64 flex items-center justify-center mt-10",children:a("div",{class:"text-center flex justify-center flex-col",children:[e("img",{src:f,alt:"",className:"w-52 h-auto "}),e("h1",{class:"text-3xl font-bold text-gray-900",children:"No Data Found"})]})})})})})]})}):e("div",{class:" h-64 flex items-center justify-center mt-10",children:a("div",{class:"text-center flex justify-center flex-col",children:[e("img",{src:f,alt:"",className:"w-52 h-auto "}),e("h1",{class:"text-3xl font-bold text-gray-900",children:"No Data Found"})]})})})})}),e(S,{url:c,currentUser:o,ariaHideApp:!1,isOpen:d,type:h,setType:p,safetyTypes:n,handleClose:r,updateLocalData:g})]})}export{F as default};
