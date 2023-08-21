import{R as h,j as a,a as e}from"./app-e057de79.js";import{g as S}from"./index-e929b1ea.js";import{R as v}from"./react-paginate-61d0e15f.js";import{n as C}from"./NotFound-19253a0b.js";function R({objects:l,states:d,services:n,setSupplier:o,currentUser:k,setActiveIndexInv:p,cities:N,currentPage:f,setCurrentPage:u}){h.useState([]),h.useState(!1);function g(t){o(t),p(10)}const s=5,i=f*s,y=t=>{u(t.selected)},b=Math.ceil((l==null?void 0:l.length)/s);return a("div",{children:[e("div",{className:" mt-2 border rounded-xl overflow-auto  lg:max-h-full",children:a("table",{className:"w-full rounded-xl py-2 overflow-x-scroll",children:[e("thead",{className:"bg-gray-100 border h-10",children:a("tr",{className:"items-center",children:[e("th",{className:" px-2  text-left text-sm font-semibold text-gray-400 ",children:"Supplier"}),e("th",{className:"text-gray-400 text-sm font-semibold",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"bg-white",children:(l==null?void 0:l.length)>0?l==null?void 0:l.slice(i,i+s).map(t=>{var c,m,x;return a("tr",{className:"border-r border-b ",children:[e("td",{className:"p-2",children:a("div",{className:"grid grid-cols-1 md:grid-cols-3",children:[a("div",{children:[e("h1",{className:"text-dark font-bold",children:t.SupplierName}),a("p",{className:"text-gray-500 text-sm",children:["Email:"," ",e("span",{className:"text-dark font-bold",children:t.SupplierEmail})]}),a("p",{className:"text-gray-500 text-sm",children:["Mobile:"," ",e("span",{className:"text-dark font-bold",children:t.SupplierNb})]}),a("p",{className:"text-gray-500 text-sm",children:["Land Line:"," ",e("span",{className:"text-dark font-bold",children:t.SupplierLand})]})]}),a("div",{children:[a("p",{className:"text-gray-500 text-sm",children:["ABN:"," ",e("span",{className:"text-dark font-bold",children:t.SupplierABN})]}),a("p",{className:"text-gray-500 text-sm",children:["Street Number:"," ",e("span",{className:"text-dark font-bold",children:t.StreetNb})]})]}),a("div",{children:[a("p",{className:"text-gray-500 text-sm",children:["Service:"," ",e("span",{className:"text-dark font-bold",children:(c=n==null?void 0:n.find(r=>r.ServiceId===t.ServiceId))==null?void 0:c.ServiceName})]}),a("p",{className:"text-gray-500 text-sm",children:["City:"," ",e("span",{className:"text-dark font-bold",children:(m=N.find(r=>r.CityId===t.CityId))==null?void 0:m.CityName})]}),a("p",{className:"text-gray-500 text-sm",children:["State:"," ",e("span",{className:"text-dark font-bold",children:(x=d==null?void 0:d.find(r=>r.StateId===t.StateId))==null?void 0:x.StateCode})]}),a("p",{className:"text-gray-500 text-sm",children:["Zip Code:"," ",e("span",{className:"text-dark font-bold",children:t.ZipCode})]})]})]})}),e("td",{className:"flex justify-center h-full ",children:e("div",{children:a("a",{href:"#",onClick:()=>{g(t)},className:" text-blue-500 hover:text-blue-900 flex gap-x-2 justify-center mt-2",children:[e(S,{className:"text-blue-400 w-5 h-5"}),e("span",{className:"underline",children:" Edit"})]})})})]},t.id)}):e("tr",{children:e("td",{colSpan:"18",children:e("div",{class:" h-72 flex items-center justify-center mt-5",children:a("div",{class:"text-center flex justify-center flex-col",children:[e("img",{src:C,alt:"",className:"w-52 h-auto "}),e("h1",{class:"text-3xl font-bold text-gray-900",children:"No Data Found"})]})})})})})]})})," ",e("div",{className:"pt-4 pb-10 text-xs text-gray-400",children:e(v,{previousLabel:"← Previous",nextLabel:"Next →",pageCount:b,onPageChange:y,containerClassName:"flex justify-center items-center mt-4",pageClassName:"mx-2 rounded-full hover:bg-gray-100",previousLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-l hover:bg-gray-200",nextLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-r hover:bg-gray-200",disabledClassName:"opacity-50 cursor-not-allowed",activeClassName:"text-blue-500 font-bold"})})]})}export{R as default};