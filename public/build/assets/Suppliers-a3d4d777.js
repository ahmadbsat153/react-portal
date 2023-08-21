import{r as n,j as t,a as e}from"./app-e057de79.js";import r from"./InvoicesButton-7ea88f0c.js";import S from"./SupplierTable-3eba3fa0.js";import"./index-e929b1ea.js";import"./react-paginate-61d0e15f.js";import"./NotFound-19253a0b.js";function z({setActiveIndexInv:s,url:C,states:u,supplierData:l,setSupplierData:j,services:h,currentUser:o,setSupplier:d,cities:f}){function g(){d(null),s(10)}function x(){return o.role_id!=8}const[N,i]=n.useState(l);n.useEffect(()=>{i(l)},[l]);const[p,c]=n.useState(0),[m,k]=n.useState(),w=a=>{c(0);const b=l.filter(y=>a.length>0?y.SupplierName.toLowerCase().includes(a.toLowerCase()):!0);i(b)};function v(a){w(a)}return t("div",{className:"bg-smooth",children:[m&&t("div",{className:"min-h-screen md:pl-20 pt-16 h-full flex flex-col items-center justify-center",children:[t("div",{className:"flex items-center justify-center",children:[e("div",{className:"h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce"}),e("div",{className:"h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce200"}),e("div",{className:"h-5 w-5 bg-goldd rounded-full animate-bounce400"})]}),e("div",{className:"text-dark mt-4 font-bold",children:"Please wait while we get the data for you."})]}),!m&&t("div",{className:"p-5",children:[t("div",{className:"flex gap-x-1",children:[e("h1",{className:"font-bold text-dark text-3xl",children:"Suppliers"})," ",t("p",{className:"mt-auto text-gray-400",children:["(",l==null?void 0:l.length,")"]})]}),t("div",{className:"flex justify-between flex-col sm:flex-row gap-y-3 my-5",children:[e("div",{className:"",children:t("div",{className:"relative border rounded",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",placeholder:"Search",onChange:a=>{v(a.target.value)},className:"w-full py-0.5 h-[25px] pl-12 pr-4 text-gray-500 border-none rounded-md outline-none "})]})}),t("div",{className:"flex flex-row gap-x-5 gap-y-3",children:[e("div",{className:"",children:e(r,{name:"Export",className:"w-full hidden"})}),e("div",{className:"",children:e(r,{name:"Import",className:"w-full hidden"})}),x()?e("div",{className:"col-span-2",children:e(r,{name:"Add Supplier",onClick:()=>g(),className:"w-full "})}):null]})]}),e(S,{objects:N,states:u,services:h,currentUser:o,setSupplier:d,setActiveIndexInv:s,cities:f,currentPage:p,setCurrentPage:c})]})]})}export{z as default};
