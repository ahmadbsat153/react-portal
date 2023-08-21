import{r as i,a as e,j as a,F as h}from"./app-e057de79.js";import y from"./InvoicesButton-7ea88f0c.js";import{a as x,b as v,c as M}from"./index-2fd36de9.js";import{S as T}from"./react-select.esm-e6119c41.js";import{H as d}from"./listbox-f3941a9f.js";import{t as S}from"./transition-d8cb4eb2.js";import"./assertThisInitialized-9eca4e7a.js";import"./emotion-react.browser.esm-ebc793e1.js";import"./emotion-memoize.esm-f5713a00.js";import"./hoist-non-react-statics.cjs-8f2ef505.js";import"./use-is-mounted-31350877.js";import"./render-5eaee1c9.js";import"./keyboard-7b642a18.js";import"./bugs-55244794.js";import"./use-resolve-button-type-ff7c32c3.js";function s(...b){return b.filter(Boolean).join(" ")}function ke({setActiveIndexInv:b,url:U,getSuppliers:W,AlertToast:f,states:g,services:o,supplier:n,setSupplier:L,cities:p}){const[k,w]=i.useState(!1),q={control:(t,r)=>({...t,minHeight:"unset",height:"auto"}),option:(t,r)=>({...t,color:"black"}),multiValue:t=>({...t,overflow:"hidden"}),valueContainer:t=>({...t,width:"400px",maxHeight:"500px",overflow:"auto"}),inputContainer:t=>({...t,height:"100px",border:"red"}),multiValueLabel:t=>({...t,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"12px"})};function A(){b(3)}const[ce,G]=i.useState({}),[c,C]=i.useState(g[0]),[m,I]=i.useState(o.filter(t=>t.StatusId==1)[0]),[N,$]=i.useState(p.filter(t=>c.StateId===t.StateId)),[ue,J]=i.useState(),[B,me]=i.useState(""),[pe,F]=i.useState(N.filter(t=>t.CityName.toLowerCase().startsWith(B.toLowerCase()))),[E,O]=i.useState([]),[K,Q]=i.useState(""),[R,X]=i.useState(""),[Y,_]=i.useState(""),[ee,te]=i.useState(""),[re,ae]=i.useState(""),[le,ie]=i.useState(""),[ne,de]=i.useState("");i.useEffect(()=>{if(B.length>0?F(N.filter(t=>t.CityName.toLowerCase().startsWith(B.toLowerCase()))):F([]),n){C(g==null?void 0:g.find(r=>r.StateId===n.StateId)),I(o==null?void 0:o.find(r=>r.ServiceId===n.ServiceId)),J(p==null?void 0:p.find(r=>r.CityId===n.CityId));let t=p==null?void 0:p.find(r=>r.CityId===n.CityId);O({value:t.CityId,label:t.CityName})}},[]);const se=t=>{t.preventDefault(),K===""||R===""||Y===""||ee===""||re===""||le===""||ne===""?f("Please fill in all required fields !",2):j()},j=()=>{w(!0);const t={SupplierId:n==null?void 0:n.SupplierId,SupplierName:document.getElementById("supplierName").value,SupplierABN:document.getElementById("SupplierABN").value,SupplierNb:document.getElementById("SupplierNb").value,SupplierEmail:document.getElementById("SupplierEmail").value,SupplierLand:document.getElementById("SupplierLand").value,StreetNo:document.getElementById("StreetNo").value,ZipCode:document.getElementById("ZipCode").value,StateId:c.StateId,CityId:E.value,ServiceId:m.ServiceId,StatusId:1,AddedBy:1};G(t),axios.post(`${U}api/GTIS/Add/Supplier`,t,{headers:{UserId:449}}).then(r=>{console.log(r),W(),f("Saved Successfully",1),b(3),L(null),w(!1)}).catch(r=>{w(!1),console.log(r),f("Error please try again.",2)})},oe=t=>{var r,l,u,z,D,H,P;t.preventDefault(),((r=document.getElementById("supplierName"))==null?void 0:r.value)===""||((l=document.getElementById("SupplierEmail"))==null?void 0:l.value)===""||((u=document.getElementById("SupplierNb"))==null?void 0:u.value)===""||((z=document.getElementById("SupplierLand"))==null?void 0:z.value)===""||((D=document.getElementById("SupplierABN"))==null?void 0:D.value)===""||((H=document.getElementById("StreetNo"))==null?void 0:H.value)===""||((P=document.getElementById("ZipCode"))==null?void 0:P.value)===""?f("Please fill in all required fields !",2):j()},V=t=>t.map(l=>({value:l.CityId,label:l.CityName})),Z=t=>{O(t)};return n?e("div",{className:"bg-smooth flex justify-center",children:e("div",{className:"w-full lg:w-1/2 p-5 gap-x-5 gap-y-5",children:e("form",{onSubmit:oe,children:a("div",{className:"rounded-xl shadow bg-white p-5 ",children:[e("h1",{className:"font-bold text-dark text-3xl",children:"Edit Supplier"}),a("div",{className:"grid grid-cols-2 p-2 gap-y-2  pb-20 mt-5 text-sm sm:text-base",children:[a("h1",{className:"text-gray-400 border-b",children:["Name:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 w-full border-b",children:e("input",{required:!0,type:"text",id:"supplierName",defaultValue:n.SupplierName,className:"rounded w-full h-7  border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Email:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierEmail",defaultValue:n.SupplierEmail,className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Mobile:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierNb",defaultValue:n.SupplierNb,className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Land Line:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierLand",defaultValue:n.SupplierLand,className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["ABN:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierABN",defaultValue:n.SupplierABN,className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Street Number:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"StreetNo",defaultValue:n.StreetNb,className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),e("h1",{className:"text-gray-400 border-b",children:"Service:"}),e("div",{className:"pb-2 border-b",children:e("div",{children:e(d,{value:m,onChange:t=>{I(t)},children:({open:t})=>e(h,{children:a("div",{className:"relative ",children:[a(d.Button,{className:"relative w-full cursor-default rounded-md bg-white py-[0.07rem] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e("span",{className:"block truncate",children:m==null?void 0:m.ServiceName}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(x,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(S,{show:t,as:i.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(d.Options,{className:"absolute z-20 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:o==null?void 0:o.filter(r=>r.StatusId==1).map(r=>e(d.Option,{className:({active:l})=>s(l?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"),value:r,children:({selected:l,active:u})=>a(h,{children:[e("span",{className:s(l?"font-semibold":"font-normal","block truncate"),children:r.ServiceName}),l?e("span",{className:s(u?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"),children:e(v,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},r.ServiceId))})})]})})})})}),e("h1",{className:"text-gray-400 border-b",children:"State:"}),e("div",{className:"pb-2 border-b",children:e("div",{children:e(d,{value:c,onChange:t=>{C(t)},children:({open:t})=>e(h,{children:a("div",{className:"relative ",children:[a(d.Button,{className:"relative w-full cursor-default rounded-md bg-white py-[0.07rem] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e("span",{className:"block truncate",children:c==null?void 0:c.StateName}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(x,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(S,{show:t,as:i.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(d.Options,{className:"absolute z-20 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:g.map(r=>e(d.Option,{className:({active:l})=>s(l?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"),value:r,children:({selected:l,active:u})=>a(h,{children:[e("span",{className:s(l?"font-semibold":"font-normal","block truncate"),children:r.StateName}),l?e("span",{className:s(u?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"),children:e(v,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},r.StateId))})})]})})})})}),e("h1",{className:"text-gray-400 border-b",children:"City:"}),e("div",{className:"pb-2 border-b",children:e("div",{className:"flex flex-col gap-y-2",children:e(T,{placeholder:e("div",{children:"City... "}),styles:q,name:"colors",value:E,isSearchable:!0,options:V(N),onChange:Z,className:"basic-multi-select text-red ",classNamePrefix:"select"})})}),a("h1",{className:"text-gray-400 border-b",children:["Zip Code:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"ZipCode",defaultValue:n.ZipCode,className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})})]}),a("div",{className:"flex justify-end w-full gap-x-2",children:[e(y,{name:"Cancel",onClick:()=>{A(),L(null)},icon:e(M,{className:"mr-1 h-5"})}),e(y,{type:"submit",name:k?e("div",{className:" inset-0 flex justify-center items-center bg-opacity-50",children:e("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-smooth"})}):"Save"})]})]})})})}):e("div",{className:"bg-smooth flex justify-center",children:e("div",{className:"w-full lg:w-1/2 p-5 gap-x-5 gap-y-5",children:e("form",{onSubmit:se,children:a("div",{className:"rounded-xl shadow bg-white p-5 ",children:[e("h1",{className:"font-bold text-dark text-3xl",children:"Add Supplier"}),a("div",{className:"grid grid-cols-2 p-2 gap-y-2  pb-20 mt-5 text-sm sm:text-base",children:[a("h1",{className:"text-gray-400 border-b",children:["Name:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 w-full border-b",children:e("input",{required:!0,type:"text",id:"supplierName",onChange:t=>{Q(t.target.value)},className:"rounded w-full h-7  border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Email:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierEmail",onChange:t=>{X(t.target.value)},className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Mobile:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierNb",onChange:t=>{_(t.target.value)},className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Land Line:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierLand",onChange:t=>{te(t.target.value)},className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["ABN:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"SupplierABN",onChange:t=>{ae(t.target.value)},className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),a("h1",{className:"text-gray-400 border-b",children:["Street Number:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"StreetNo",onChange:t=>{ie(t.target.value)},className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),e("h1",{className:"text-gray-400 border-b",children:"Service:"}),e("div",{className:"pb-2 border-b",children:e("div",{children:e(d,{value:m,onChange:t=>{I(t)},children:({open:t})=>e(h,{children:a("div",{className:"relative ",children:[a(d.Button,{className:"relative w-full cursor-default rounded-md bg-white py-[0.07rem] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e("span",{className:"block truncate",children:m==null?void 0:m.ServiceName}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(x,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(S,{show:t,as:i.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(d.Options,{className:"absolute z-20 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:o==null?void 0:o.filter(r=>r.StatusId==1).map(r=>e(d.Option,{className:({active:l})=>s(l?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"),value:r,children:({selected:l,active:u})=>a(h,{children:[e("span",{className:s(l?"font-semibold":"font-normal","block truncate"),children:r.ServiceName}),l?e("span",{className:s(u?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"),children:e(v,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},r.ServiceId))})})]})})})})}),e("h1",{className:"text-gray-400 border-b",children:"State:"}),e("div",{className:"pb-2 border-b",children:e("div",{children:e(d,{value:c,onChange:t=>{C(t),$(p.filter(r=>t.StateId===r.StateId))},children:({open:t})=>e(h,{children:a("div",{className:"relative ",children:[a(d.Button,{className:"relative w-full cursor-default rounded-md bg-white py-[0.07rem] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e("span",{className:"block truncate",children:c==null?void 0:c.StateName}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(x,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(S,{show:t,as:i.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(d.Options,{className:"absolute z-20 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:g.map(r=>e(d.Option,{className:({active:l})=>s(l?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"),value:r,children:({selected:l,active:u})=>a(h,{children:[e("span",{className:s(l?"font-semibold":"font-normal","block truncate"),children:r.StateName}),l?e("span",{className:s(u?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"),children:e(v,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},r.StateId))})})]})})})})}),e("h1",{className:"text-gray-400 border-b",children:"City:"}),e("div",{className:"pb-2 border-b",children:e("div",{className:"flex flex-col gap-y-2",children:e("div",{className:"mt-2 w-full sm:mt-0 ",children:e(T,{placeholder:e("div",{children:"City... "}),styles:q,name:"colors",value:E,isSearchable:!0,options:V(N),onChange:Z,className:"basic-multi-select text-red ",classNamePrefix:"select"})})})}),a("h1",{className:"text-gray-400 border-b",children:["Zip Code:",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{required:!0,type:"text",id:"ZipCode",onChange:t=>{de(t.target.value)},className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})})]}),a("div",{className:"flex justify-end w-full gap-x-2",children:[e(y,{name:"Cancel",onClick:()=>A(),icon:e(M,{className:"mr-1 h-5"})}),e(y,{type:"submit",name:k?e("div",{className:" inset-0 flex justify-center items-center bg-opacity-50",children:e("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-smooth"})}):"Add"})]})]})})})})}export{ke as default};
