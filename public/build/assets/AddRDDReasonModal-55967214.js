import{r as a,a as e,j as s,i as A}from"./app-e057de79.js";import{R as F}from"./index-2d4490b8.js";import"./TextInput-ea077d76.js";import{I as M}from"./InputError-d98f57fe.js";/* empty css               */function $({isOpen:v,handleClose:u,url:N,reason:t,setReason:q,updateLocalData:y,rddReasons:w,currentUser:R}){const[S,i]=a.useState(null),[k,n]=a.useState(null),[D,g]=a.useState(!0),[h,m]=a.useState(!1),[C,r]=a.useState(!0),[f,d]=a.useState(!0),[p,c]=a.useState(null),[P,x]=a.useState(!1);a.useState(""),a.useEffect(()=>{t?(r(t==null?void 0:t.ReasonStatus),d(t==null?void 0:t.ReasonStatus),i(t==null?void 0:t.ReasonName),n(t==null?void 0:t.ReasonDesc)):(d(!0),r(!0),i(""),n(""))},[t]);const j=[{ReasonId:t?t.ReasonId:"",ReasonName:S,ReasonDesc:k,Status:C}],b=()=>{c(null),i(""),n(""),u()},E=async l=>{l.preventDefault();try{m(!0);const o=await A.post(`${N}api/Add/RddChangeReason`,j,{headers:{RoleId:R.role_id}});x(!0),setTimeout(()=>{u(),i(""),n(""),x(!1),m(!1),y()},1e3)}catch{m(!1),c("Error occurred while saving the data. Please try again.")}},I=l=>{const o=l.target.value;w.some(L=>L.ReasonName===o)?(g(!1),c("Name already exists. Please enter a unique name.")):(g(!0),i(o),c(null))};return e(F,{isOpen:v,onRequestClose:b,className:"fixed inset-0 flex items-center justify-center",overlayClassName:"fixed inset-0 bg-black bg-opacity-60 ",children:s("div",{className:"bg-white w-96 rounded-lg shadow-lg p-6  h-[30rem]",children:[e("div",{className:"flex justify-end",children:e("button",{className:"text-gray-500 hover:text-gray-700",onClick:b,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})}),e("h2",{className:"text-2xl font-bold mb-4",children:t!=null?"Edit RDD Reason":"Add RDD Reason"}),e("form",{onSubmit:E,className:"h-[22rem] overflow-y-scroll containerscroll",children:s("div",{className:"pr-2",children:[e("div",{className:"space-y-12",children:e("div",{className:"border-b border-gray-900/10 pb-12",children:s("div",{className:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6",children:[s("div",{className:"sm:col-span-4",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Name"}),e("div",{className:"mt-2",children:e("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-goldd sm:max-w-md",children:e("input",{type:"text",name:"name",id:"name",required:!0,autoComplete:"off",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",defaultValue:t?t.ReasonName:"",onChange:I})})}),p&&e(M,{message:p})," "]}),s("div",{className:"col-span-full",children:[e("label",{htmlFor:"about",className:"block text-sm font-medium leading-6 text-gray-900",children:"Description"}),e("div",{className:"mt-2",children:e("textarea",{id:"about",name:"about",rows:3,defaultValue:t?t.ReasonDesc:"",onChange:l=>n(l.target.value),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-goldd sm:text-sm sm:leading-6"})})]}),s("fieldset",{className:"col-span-full",children:[e("legend",{className:"text-sm font-semibold leading-6 text-gray-900",children:"Status"}),s("div",{className:"mt-2 space-y-6",children:[s("div",{className:"flex items-center gap-x-3",children:[e("input",{id:"active",name:"Status",type:"radio",value:"active",checked:f===!0,onChange:l=>{d(!0),r(!0)},className:"h-4 w-4 border-gray-300 text-dark focus:ring-goldd"}),e("label",{htmlFor:"active",className:"block text-sm font-medium leading-6 text-gray-900",children:"Active"})]}),s("div",{className:"flex items-center gap-x-3",children:[e("input",{id:"inactive",name:"Status",type:"radio",value:"inactive",checked:f===!1,onChange:l=>{d(!1),r(!1)},className:"h-4 w-4 border-gray-300 text-dark focus:ring-goldd"}),e("label",{htmlFor:"inactive",className:"block text-sm font-medium leading-6 text-gray-900",children:"Inactive"})]})]})]})]})})}),e("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:e("button",{type:"submit",disabled:!D||h,className:"rounded-md bg-dark w-20 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-goldd focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:h?e("div",{className:" inset-0 flex justify-center items-center bg-opacity-50",children:e("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-smooth"})}):"Save"})})]})})]})})}export{$ as default};