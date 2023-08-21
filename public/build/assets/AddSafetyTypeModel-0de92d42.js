import{r as t,a as e,j as s,i as L}from"./app-e057de79.js";import{R as A}from"./index-2d4490b8.js";import{I as M}from"./InputError-d98f57fe.js";import"./TextInput-ea077d76.js";function V({isOpen:v,url:p,handleClose:m,type:a,setType:R,updateLocalData:N,safetyTypes:y,currentUser:S}){const[w,l]=t.useState(null),[k,u]=t.useState(!0),[T,r]=t.useState(!0),[f,n]=t.useState(!0),[g,c]=t.useState(!1),[h,d]=t.useState(null),[q,x]=t.useState(!1);t.useState(""),t.useEffect(()=>{a?(r(a==null?void 0:a.SafetyStatus),n(a==null?void 0:a.SafetyStatus),l(a==null?void 0:a.SafetyTypeName)):(n(!0),r(!0),l(""))},[a]);const C=[{TypeId:a?a.SafetyTypeId:null,TypeName:w,TypeStatus:T}],b=()=>{d(null),l(""),m()},j=async i=>{i.preventDefault();try{c(!0);const o=await L.post(`${p}api/Add/SafetyType`,C,{headers:{RoleId:S.role_id}});x(!0),setTimeout(()=>{m(),l(""),x(!1),c(!1),N()},1e3)}catch{c(!1),d("Error occurred while saving the data. Please try again.")}},E=i=>{const o=i.target.value;y.some(I=>I.SafetyTypeName===o)?(u(!1),d("Name already exists. Please enter a unique name.")):(u(!0),l(o),d(null))};return e(A,{isOpen:v,onRequestClose:b,className:"fixed inset-0 flex items-center justify-center",overlayClassName:"fixed inset-0 bg-black bg-opacity-60",children:s("div",{className:"bg-white w-96 rounded-lg shadow-lg p-6 ",children:[e("div",{className:"flex justify-end",children:e("button",{className:"text-gray-500 hover:text-gray-700",onClick:b,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})}),e("h2",{className:"text-2xl font-bold mb-4",children:a!=null?"Edit Safety Type":"Add Safety Type"}),s("form",{onSubmit:j,children:[e("div",{className:"space-y-12",children:e("div",{className:"border-b border-gray-900/10 pb-12",children:s("div",{className:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6",children:[s("div",{className:"sm:col-span-4",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Name"}),e("div",{className:"mt-2",children:e("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-goldd sm:max-w-md",children:e("input",{type:"text",name:"name",id:"name",required:!0,autoComplete:"off",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",defaultValue:a?a.SafetyTypeName:"",onChange:E})})}),h&&e(M,{message:h})," "]}),s("fieldset",{className:"col-span-full",children:[e("legend",{className:"text-sm font-semibold leading-6 text-gray-900",children:"Status"}),s("div",{className:"mt-2 space-y-6",children:[s("div",{className:"flex items-center gap-x-3",children:[e("input",{id:"active",name:"Status",type:"radio",value:"active",checked:f===!0,onChange:i=>{n(!0),r(!0)},className:"h-4 w-4 border-gray-300 text-dark focus:ring-goldd"}),e("label",{htmlFor:"active",className:"block text-sm font-medium leading-6 text-gray-900",children:"Active"})]}),s("div",{className:"flex items-center gap-x-3",children:[e("input",{id:"inactive",name:"Status",type:"radio",value:"inactive",checked:f===!1,onChange:i=>{n(!1),r(!1)},className:"h-4 w-4 border-gray-300 text-dark focus:ring-goldd"}),e("label",{htmlFor:"inactive",className:"block text-sm font-medium leading-6 text-gray-900",children:"Inactive"})]})]})]})]})})}),e("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:e("button",{type:"submit",disabled:!k||g,className:"rounded-md bg-dark w-20 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-goldd focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:g?e("div",{className:" inset-0 flex justify-center items-center bg-opacity-50",children:e("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-smooth"})}):"Save"})})]})]})})}export{V as default};