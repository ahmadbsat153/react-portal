import{r as u,a as l,j as n,F as R}from"./app-e057de79.js";import{R as w}from"./react-paginate-61d0e15f.js";import{g as _}from"./index-e929b1ea.js";import{n as ee}from"./NotFound-19253a0b.js";import{h as m}from"./moment-fbc5633a.js";function me({header:c,body:a,POs:F,states:o,supplierData:x,companies:y,categories:g,setPOBack:N,currentPage:v,setCurrentPage:j,setToPay:le,setInvoice:H,selectedRecords:i,setSelectedRecords:Y,setPO:L,setActiveIndexInv:p,setInvoiceDetails:W,setPODetails:q,currentUser:s,sortedData:z,setSortedData:B,originalData:G}){const h=u.useRef(),[k,b]=u.useState(!1),[D,M]=u.useState(!1);u.useLayoutEffect(()=>{const e=(i==null?void 0:i.length)>0&&(i==null?void 0:i.length)<(a==null?void 0:a.length);b((i==null?void 0:i.length)===(a==null?void 0:a.length)),M(e),h.current&&(h.current.indeterminate=e)},[i,a]);function O(){Y(k||D?[]:a),b(!k&&!D),M(!1)}const J=e=>{i.includes(e)?Y(i.filter(r=>r!==e)):Y([...i,e])},f=15,C=v*f,K=e=>{j(e.selected)},Q=Math.ceil((a==null?void 0:a.length)/f);function V(e){H(e),p(7)}function X(e){L(e),p(8)}function Z(e){p(6),W(e)}function P(e,r){r=="PoNo"?N(2):r=="PoNb"&&N(1),p(9),q(e)}function $(e){if(s.role_id==6){if(e.SecondApproval==1&&e.ApprovalStatus==1)return!0}else return s.role_id==7?e.SecondApproval==1&&e.ApprovalStatus==1&&e.AddedBy==s.user_id:s.role_id==1}function U(e){if(s.role_id==6){if(e.SecondApproval==1&&e.ApprovalStatus==1)return!0}else return s.role_id==7?e.SecondApproval==1&&e.ApprovalStatus==1&&e.AddedBy==s.user_id:s.role_id==1}function S(){return!((s==null?void 0:s.role_id)==8||(s==null?void 0:s.role_id)==10)}return l("div",{children:l("div",{className:"w-full bg-smooth pb-20",children:l("div",{className:"mx-auto mt-4 rounded",children:l("div",{className:"pt-2",children:n("div",{children:[l("div",{className:"flow-root  bg-white",children:l("div",{className:"w-full border rounded-lg overflow-x-auto containerscroll",children:l("div",{className:"inline-block min-w-full  align-middle",children:n("div",{className:"relative",children:[(i==null?void 0:i.length)>0&&l("div",{className:"absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12"}),n("table",{className:"min-w-full table-fixed divide-y divide-gray-300",children:[l("thead",{className:"h-9 bg-gray-100",children:n("tr",{className:"py-2",children:[l("th",{scope:"col",className:"w-8 text-left text-sm font-semibold text-gray-600 border",children:l("span",{className:"sr-only",children:"ID"})}),l("th",{scope:"col",className:"relative border min-w-[2rem]",children:l("input",{type:"checkbox",className:"absolute left-2 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500",ref:h,checked:k,onChange:O})}),c.map(e=>l("th",{scope:"col",className:"p-2 text-left text-sm font-semibold text-gray-400 border",children:n("div",{className:"flex justify-center items-center h-[2rem] p-1",children:[e.label,e.Filter?l(e.Filter,{header:e.key,sortedData:z,setSortedData:B,originalData:G}):l(R,{})]})},e.key)),S()?l("th",{scope:"col",className:"px-3 w-10 text-left text-sm font-semibold text-gray-400 border",children:l("span",{className:"",children:"Edit"})}):null]})}),l("tbody",{className:"divide-y divide-gray-300 h-5",children:(a==null?void 0:a.length)>0?a==null?void 0:a.slice(C,C+f).map((e,r)=>n("tr",{children:[l("td",{className:"whitespace-nowrap bg-gray-100 tezt-dark py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3 border",children:r+1+v*f}),n("td",{className:"relative w-8 border w-[2rem]",children:[i.includes(e)&&l("div",{className:"absolute inset-y-0 left-0 w-0.5 bg-green-500"}),l("input",{type:"checkbox",className:"absolute left-2 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500",value:e.name,checked:i.includes(e),onChange:()=>J(e)})]}),c.map(t=>{var I,A,T,E;return l("td",{className:"whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-dark sm:pl-2 border",children:l("div",{children:t.key=="StateId"?(I=o==null?void 0:o.find(d=>d.StateId===e[t.key]))==null?void 0:I.StateCode:t.key=="InvoiceNo"?l("div",{className:"text-blue-600 underline hover:cursor-pointer",onClick:()=>Z(e),children:e[t.key]}):t.key=="PoNo"?l("div",{className:"text-blue-600 underline hover:cursor-pointer",onClick:()=>P(e,t.key),children:e[t.key]}):t.key=="PoNb"?l("div",{className:"text-blue-600 underline hover:cursor-pointer",onClick:()=>P(F.find(d=>d.PoId===e.PoId),t.key),children:e[t.key]}):t.key=="SupplierId"?(A=x==null?void 0:x.find(d=>d.SupplierId===e[t.key]))==null?void 0:A.SupplierName:t.key=="CompanyId"?(T=y==null?void 0:y.find(d=>d.CompanyId===e[t.key]))==null?void 0:T.CompanyName:t.key=="CategoryId"?(E=g==null?void 0:g.find(d=>d.CategoryId===e[t.key]))==null?void 0:E.CategoryName:t.key=="PodRequired"?n("div",{children:[" ",e[t.key]==!0?l("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"true"}):l("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"false"})]}):t.key=="ClosePo"?n("div",{children:[" ",e[t.key]==!0?l("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"true"}):l("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"false"})]}):t.key=="MatchInvoice"?n("div",{children:[" ",e[t.key]==1?l("span",{className:"inline-flex items-center rounded-full bg-gray-300 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):e[t.key]==2?l("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Match"}):l("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Closed"})]}):t.key=="PaymentStatus"?n("div",{children:[" ",e[t.key]==!0?l("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"paid"}):l("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"not paid"})]}):t.key=="ApprovalStatus"?n("div",{children:[" ",e[t.key]==1?l("span",{className:"inline-flex items-center rounded-full bg-gray-300 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):e[t.key]==2?l("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Approved"}):l("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Rejected"})]}):t.key=="SecondApproval"?n("div",{children:[" ",e[t.key]==1?l("span",{className:"inline-flex items-center rounded-full bg-gray-300 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):e[t.key]==2?l("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Approved"}):l("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Rejected"})]}):t.key=="PaymentTypeId"?n("div",{children:[" ",e[t.key]==1?l("span",{children:"Credit Card"}):e[t.key]==2?l("span",{children:"Cash"}):l("span",{})]}):t.key=="InvoiceDate"?n("div",{children:[e[t.key]?m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY")=="Invalid date"?"":m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY"):null," "]}):t.key=="DueDate"?n("div",{children:[e[t.key]?m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY")=="Invalid date"?"":m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY"):null," "]}):t.key=="PaymentDate"?n("div",{children:[e[t.key]?m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY")=="Invalid date"?"":m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY"):null," "]}):t.key=="PoDate"?n("div",{children:[e[t.key]?m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY")=="Invalid date"?"":m(e[t.key].replace("T"," "),"YYYY-MM-DD").format("DD-MM-YYYY"):null," "]}):t.key=="AddedAt"?n("div",{children:[e[t.key]?m(e[t.key].replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A")=="Invalid date"?"":m(e[t.key].replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null," "]}):e[t.key]})},t.key)}),S()?l("td",{className:"relative whitespace-nowrap py-2 pl-2 pr-4 text-right text-sm font-medium sm:pr-0 border",children:l("div",{className:"ml-0",children:c[0].key=="InvoiceNo"&&$(e)?n("a",{href:"#",onClick:()=>{V(e)},className:"text-blue-500 hover:text-blue-900 flex gap-x-1 pr-2",children:[l(_,{className:"text-blue-400 w-5 h-5"}),l("span",{className:"underline",children:"Edit"})]}):c[0].key=="PoNo"&&U(e)?n("a",{href:"#",onClick:()=>{X(e)},className:"text-blue-500 hover:text-blue-900 flex gap-x-1 pr-2",children:[l(_,{className:"text-blue-400 w-5 h-5"}),l("span",{className:"underline",children:"Edit"})]}):null})}):null]},r)):l("tr",{children:l("td",{colSpan:"18",children:l("div",{className:" h-72 flex items-center justify-center mt-5",children:n("div",{className:"text-center flex justify-center flex-col",children:[l("img",{src:ee,alt:"",className:"w-52 h-auto "}),l("h1",{className:"text-3xl font-bold text-gray-900",children:"No Data Found"})]})})})})})]})]})})})}),l("div",{className:"pt-4 pb-10 text-xs text-gray-400",children:l(w,{previousLabel:"← Previous",nextLabel:"Next →",pageCount:Q,onPageChange:K,containerClassName:"flex justify-center items-center mt-4",pageClassName:"mx-2 rounded-full hover:bg-gray-100",previousLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-l hover:bg-gray-200",nextLinkClassName:"px-3 py-2 bg-gray-100 text-gray-700 rounded-r hover:bg-gray-200",disabledClassName:"opacity-50 cursor-not-allowed",activeClassName:"text-blue-500 font-bold"})})]})})})})})}export{me as default};