import{r as l,a as e,j as t,F as E}from"./app-e057de79.js";import m from"./InvoicesButton-7ea88f0c.js";import{c as Se,a as we,b as Ce}from"./index-2fd36de9.js";import Ke from"./DropBox-c4906c74.js";import{h as I}from"./moment-fbc5633a.js";import{H as N}from"./listbox-f3941a9f.js";import{t as Ye}from"./transition-d8cb4eb2.js";import"./tslib.es6-3c43c0a4.js";import"./use-is-mounted-31350877.js";import"./render-5eaee1c9.js";import"./keyboard-7b642a18.js";import"./bugs-55244794.js";import"./use-resolve-button-type-ff7c32c3.js";function Y(...S){return S.filter(Boolean).join(" ")}function ia({setActiveIndexInv:S,states:p,url:A,closeReasons:u,AlertToast:f,PODetails:r,supplierData:g,POBack:Ae,companies:y,categories:x,currentUser:o,getPOs:F,getInvoices:Me}){var O,ee,ae,re,te,ne,le,de,se,oe,ie,ce,me,ue,he,pe,fe,ge,ye,xe,be,Ne,ve,Ie;const[v,ke]=l.useState([]),[z,T]=l.useState(!1),[L,Be]=l.useState();axios.get(`/findUserById/${r.AddedBy}`).then(a=>{Be(a.data.user_name)});const _=async a=>{try{return(await axios.get(`/findUserById/${a}`)).data.user_name}catch(n){return console.error("Error fetching user data:",n),"User not found"}};function je(){return o.role_id==10||o.role_id==1}l.useEffect(()=>{(async()=>{try{const n={Model:2,MainId:r.PoId},s=(await axios.post(`${A}api/GTIS/Logs`,n,{headers:{UserId:o.user_id}})).data,C=await Promise.all(s.map(async h=>{const c={...h};return h.CreatedBy&&(c.CreatedBy=await _(h.CreatedBy)),h.Approval&&(c.Approval=await Promise.all(h.Approval.map(async i=>(i.ApprovedBy&&(i.ApprovedBy=await _(i.ApprovedBy)),i)))),h.MatchInvoice&&(c.MatchInvoice=await Promise.all(h.MatchInvoice.map(async i=>(i.AddedBy&&(i.AddedBy=await _(i.AddedBy)),i)))),c}));ke(C)}catch(n){f("Error with showing logs.",2),console.log(n)}})()},[]);const[He,Ee]=l.useState([]),[D,M]=l.useState(2),[b,W]=l.useState(u.filter(a=>a.StatusId==1)[0]),[k,G]=l.useState(!1),[R,Fe]=l.useState([]),[q,Te]=l.useState([]),[B,V]=l.useState(!1),[_e,j]=l.useState(0),[De,Re]=l.useState(""),[qe,$e]=l.useState(""),[ze,Le]=l.useState("");function J(){S(Ae)}function K(){if(o.role_id==6){if(r.SecondApproval==1&&r.ApprovalStatus!=3)return r.MatchInvoice==1}else return o.role_id==10&&r.SecondApproval!=3?r.MatchInvoice==1:!1}function We(){if(o.role_id==6){if(r.SecondApproval==2)return!1;if(r.ApprovalStatus!=2)return r.MatchInvoice==1}else if(o.role_id==10)return r.SecondApproval!=2?r.MatchInvoice==1:!1}const[Q,Qe]=l.useState(We());function X(){return o.role_id==8&&r.SecondApproval==2&&r.MatchInvoice==1}const[w,Xe]=l.useState(X());let $=[];const Ge=async()=>{if(q.length>0)try{const a=q.map(async n=>{const d=new FormData;d.append("file",n);try{const s=await axios.post("/api/upload",d,{headers:{"Content-Type":"multipart/form-data"}});if(s.status===200){const C=s.data.filename;$.push({DocId:null,DocName:C,DocStatus:1})}}catch(s){console.error("Error:",s)}});await Promise.all(a),Z()}catch(a){console.error("Error:",a)}else Z()},Z=()=>{var d,s,C,h;T(!0),R.map(c=>{$.push({DocId:c.DocId,DocName:c.DocName,DocStatus:c.DocStatus})});let a=0;((d=document.getElementById("PodRequired"))==null?void 0:d.value)=="on"&&(a=1),((s=document.getElementById("PaymentStatus"))==null?void 0:s.value)=="on";const n={InvoiceDate:document.getElementById("InvoiceDate").value,InvoiceNo:document.getElementById("InvoiceNo").value,DueDate:document.getElementById("DueDate").value,PaymentTypeId:document.getElementById("PaymentTypeId").value,ProcessedBank:(C=document.getElementById("ProcessedBank"))==null?void 0:C.value,PaymentDate:(h=document.getElementById("PaymentDate"))==null?void 0:h.value,PaymentStatus:_e,PodRequired:a,InvoiceDoc:$,AddedBy:o.user_id};axios.post(`${A}api/GTIS/MatchInvoice`,n,{headers:{UserId:o.user_id,PO_Id:r.PoId}}).then(c=>{f("Converted Successfully",1),S(2),Me(),F(),T(!1),R.filter(i=>i.DocStatus===2).map(i=>i.DocName)}).catch(c=>{console.log(c),T(!1),f("Error please try again.",2)})};function Ve(){D==1?V(!1):V(!0)}l.useEffect(()=>{Ve(),X()},[D]);function U(){const a=event.target.value;a==1?(M(a),j(1)):(j(0),M(a))}function H(a){let n=0;o.role_id==10?n=2:n=1;const d={ApprovalModel:2,ApprovalType:n,MainId:r==null?void 0:r.PoId,StatusId:a,AddedBy:o.user_id};axios.post(`${A}api/GTIS/ApprovalStatus`,d,{headers:{UserId:o.user_id}}).then(s=>{a==2?f("Approved Successfully",1):a==3&&f("Rejected Successfully",1),S(2),F()}).catch(s=>{console.log(s),f("Error please try again.",2)})}function P(){const a={PoId:r==null?void 0:r.PoId,ReasonId:b.ReasonId,Description:document.getElementById("Reason").value};axios.post(`${A}api/GTIS/ClosePO`,a,{headers:{UserId:o.user_id}}).then(n=>{f("Closed Successfully",1),S(2),F()}).catch(n=>{console.log(n),f("Error please try again.",2)})}const Je=a=>{a.preventDefault(),De===""||qe===""||ze===""?f("Please fill in all required fields !",2):Ge()};return w?e("div",{className:"bg-smooth",children:t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 p-5",children:[t("div",{className:"rounded-xl bg-white shadow h-auto  p-5",children:[t("h1",{className:"text-dark font-bold text-2xl",children:["PO #"," ",e("span",{className:"text-goldd",children:r.PoNo})]}),t("div",{className:"grid grid-cols-2 p-2 gap-y-3 pb-5 mt-5 text-sm sm:text-base",children:[e("h1",{className:"text-gray-400",children:"State:"}),e("p",{className:"font-bold",children:(O=p==null?void 0:p.find(a=>a.StateId===r.StateId))==null?void 0:O.StateCode}),e("h1",{className:"text-gray-400",children:"Supplier:"}),e("p",{className:"font-bold",children:(ee=g==null?void 0:g.find(a=>a.SupplierId===r.SupplierId))==null?void 0:ee.SupplierName}),e("h1",{className:"text-gray-400",children:"Company:"}),e("p",{className:"font-bold",children:(ae=y==null?void 0:y.find(a=>a.CompanyId===r.CompanyId))==null?void 0:ae.CompanyName}),e("h1",{className:"text-gray-400",children:"Category:"}),e("p",{className:"font-bold",children:(re=x==null?void 0:x.find(a=>a.CategoryId===r.CategoryId))==null?void 0:re.CategoryName}),e("h1",{className:"text-gray-400",children:"PO Date:"}),e("p",{className:"font-bold",children:I(r.PoDate.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A")}),e("h1",{className:"text-gray-400",children:"Approval Status:"}),t("p",{className:"font-bold",children:[" ",t("div",{children:[" ",r.ApprovalStatus==1?e("span",{className:"inline-flex items-center rounded-full bg-gray-200 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):r.ApprovalStatus==2?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Approved"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Rejected"})]})]}),e("h1",{className:"text-gray-400",children:"Second approval:"}),t("p",{className:"font-bold",children:[" ",t("div",{children:[" ",r.SecondApproval==1?e("span",{className:"inline-flex items-center rounded-full bg-gray-200 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):r.SecondApproval==2?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Approved"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Rejected"})]})]}),e("h1",{className:"text-gray-400",children:"Match invoice:"}),t("p",{className:"font-bold",children:[" ",t("div",{children:[" ",r.MatchInvoice==1?e("span",{className:"inline-flex items-center rounded-full bg-gray-200 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):r.MatchInvoice==2?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Match"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Closed"})]})]}),e("h1",{className:"text-gray-400",children:"Description:"}),e("p",{className:"font-bold",children:r.Description}),e("h1",{className:"text-gray-400",children:"Amount:"}),e("p",{className:"font-bold",children:r.Amount}),e("h1",{className:"text-gray-400",children:"File:"}),e("ul",{children:(te=r.PoDoc)==null?void 0:te.filter(a=>a.DocStatus===1).map((a,n)=>e("li",{className:"justify-between flex",children:e("a",{href:`/POs/${a.DocName}`,target:"_blank",className:"text-blue-500 underline",rel:"noopener noreferrer",children:e("span",{children:a.DocName})})},n))}),e("h1",{className:"text-gray-400",children:"Created By:"}),e("p",{className:"font-bold",children:L})]}),t("div",{className:"flex justify-end w-full gap-x-2",children:[e(m,{name:"Back",onClick:()=>{J()},icon:e(Se,{className:"mr-1 h-5"})}),t("div",{className:"",children:[" ",e("div",{className:"",children:t("div",{className:"flex justify-end w-full gap-x-2",children:[Q?e(m,{name:"Approve",onClick:()=>{H(2)}}):null,K()?e(m,{name:"Reject",onClick:()=>{H(3)}}):null]})}),t("div",{children:[r.ClosePO?null:e("div",{className:"flex justify-end w-full gap-x-2",children:w?e(m,{name:"Close",onClick:()=>{G(!k)}}):null})," "]})]})]}),k?t("div",{className:"",children:[e("h1",{className:"text-dark font-bold text-2xl",children:"Reason for closing"}),t("div",{className:"grid grid-cols-2 p-2 gap-y-2 mt-5 text-sm sm:text-base",children:[e("h1",{className:"text-gray-400 border-b",children:"Reason:"}),e("div",{className:"pb-2 border-b",children:e("div",{children:e(N,{value:b,onChange:a=>{W(a)},children:({open:a})=>e(E,{children:t("div",{className:"relative ",children:[t(N.Button,{className:"relative w-full cursor-default rounded-md bg-white py-[0.07rem] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e("span",{className:"block truncate",children:b==null?void 0:b.ReasonName}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(we,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(Ye,{show:a,as:l.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(N.Options,{className:"absolute z-20 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:u==null?void 0:u.filter(n=>n.StatusId==1).map(n=>e(N.Option,{className:({active:d})=>Y(d?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"),value:n,children:({selected:d,active:s})=>t(E,{children:[e("span",{className:Y(d?"font-semibold":"font-normal","block truncate"),children:n.ReasonName}),d?e("span",{className:Y(s?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"),children:e(Ce,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},n.ReasonId))})})]})})})})}),e("h1",{className:"text-gray-400 border-b",children:"Description:"}),e("div",{className:"pb-2 border-b",children:e("textarea",{type:"text",id:"Reason",className:"rounded w-full h-auto border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})})]}),e("div",{className:"flex justify-end w-full gap-x-2",children:t("div",{className:"",children:[" ",e("div",{className:"flex justify-end w-full gap-x-2",children:e(m,{name:"Save",onClick:P})})]})})]}):null]}),w?e("div",{className:"rounded-xl bg-white shadow p-5",children:t("form",{onSubmit:Je,children:[e("h1",{className:"text-dark font-bold text-2xl",children:"Convert to Invoice"}),t("div",{className:"grid grid-cols-2 p-2 gap-y-2 mt-5 text-sm sm:text-base",children:[e("h1",{className:"text-gray-400 border-b",children:"State:"}),e("div",{className:"pb-2 border-b",children:(ne=p==null?void 0:p.find(a=>a.StateId===r.StateId))==null?void 0:ne.StateCode}),e("h1",{className:"text-gray-400 border-b",children:"Supplier:"}),e("div",{className:"pb-2 border-b",children:(le=g==null?void 0:g.find(a=>a.SupplierId===r.SupplierId))==null?void 0:le.SupplierName}),e("h1",{className:"text-gray-400 border-b",children:"Company:"}),e("div",{className:"pb-2 w-full border-b",children:(de=y==null?void 0:y.find(a=>a.CompanyId===r.CompanyId))==null?void 0:de.CompanyName}),e("h1",{className:"text-gray-400 border-b",children:"Category:"}),e("div",{className:"pb-2 w-full border-b",children:(se=x==null?void 0:x.find(a=>a.CategoryId===r.CategoryId))==null?void 0:se.CategoryName}),t("h1",{className:"text-gray-400 border-b",children:["Invoice #:"," ",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{type:"text",required:!0,id:"InvoiceNo",onChange:a=>{Re(a.target.value)},className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),t("h1",{className:"text-gray-400 border-b",children:["Invoice Date:"," ",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{type:"date",required:!0,id:"InvoiceDate",name:"to-date",onChange:a=>{$e(a.target.value)},className:"block w-full max-w-lg h-[25px]  rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})}),t("h1",{className:"text-gray-400 border-b",children:["Due Date:"," ",e("span",{className:"text-red-500",children:"*"})]}),e("div",{className:"pb-2 border-b",children:e("input",{type:"date",name:"to-date",required:!0,id:"DueDate",onChange:a=>{Le(a.target.value)},className:"block w-full max-w-lg h-[25px]  rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})}),e("h1",{className:"text-gray-400 border-b",children:"Description:"}),e("div",{className:"pb-2 border-b",children:r.Description}),e("h1",{className:"text-gray-400 border-b",children:"Amount:"}),e("div",{className:"pb-2 border-b",children:r.Amount}),e("h1",{className:"text-gray-400 border-b",children:"Payment Type:"}),e("div",{className:"pb-2 border-b",children:t("select",{id:"PaymentTypeId",defaultValue:D,onChange:U,className:"runded w-full border-gray-200 border-1 f focus:ring focus:ring-goldt",children:[e("option",{value:"2",children:"Cash"}),e("option",{value:"1",children:"Credit Card"})]})}),B?null:t("h1",{className:"text-gray-400 border-b",children:["Processed Bank:"," ",e("span",{className:"text-red-500",children:"*"})]}),B?null:e("div",{className:"pb-2 border-b",children:e("input",{type:"text",required:!0,id:"ProcessedBank",className:"rounded w-full h-7 border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})}),B?null:t("h1",{className:"text-gray-400 border-b",children:["Payment Date:"," ",e("span",{className:"text-red-500",children:"*"})]}),B?null:e("div",{className:"pb-2 border-b",children:e("input",{type:"date",required:!0,id:"PaymentDate",name:"to-date",className:"block w-full max-w-lg h-[25px]  rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})}),e("h1",{className:"text-gray-400 border-b",children:"POD Required:"}),e("div",{className:"pb-2 border-b",children:e("input",{type:"checkbox",id:"PodRequired",className:"rounded text-green-500 focus:ring-green-300"})}),e("h1",{className:"text-gray-400 border-b",children:"File:"}),e("div",{className:"pb-2 border-b",children:e(Ke,{selectedFiles:He,setSelectedFiles:Ee,existedFile:R,setExistedFiles:Fe,newFiles:q,setNewFiles:Te})})]}),e("div",{className:"flex justify-end w-full gap-x-2",children:t("div",{className:"",children:[" ",w?e("div",{className:"flex justify-end w-full gap-x-2",children:e(m,{type:"submit",name:z?e("div",{className:" inset-0 flex justify-center items-center bg-opacity-50",children:e("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-smooth"})}):"Convert",disabled:z})}):null]})})]})}):null]})}):e("div",{className:"bg-smooth",children:e("div",{className:" md:flex md:justify-center p-5",children:t("div",{className:"rounded-xl bg-white shadow h-auto p-5 md:w-[40rem]",children:[t("h1",{className:"text-dark font-bold text-2xl",children:["PO #"," ",e("span",{className:"text-goldd",children:r.PoNo})]}),t("div",{className:"grid grid-cols-2 p-2 gap-y-3 pb-5 mt-5 text-sm sm:text-base",children:[e("h1",{className:"text-gray-400",children:"State:"}),e("p",{className:"font-bold",children:(oe=p==null?void 0:p.find(a=>a.StateId===r.StateId))==null?void 0:oe.StateCode}),e("h1",{className:"text-gray-400",children:"Supplier:"}),e("p",{className:"font-bold",children:(ie=g==null?void 0:g.find(a=>a.SupplierId===r.SupplierId))==null?void 0:ie.SupplierName}),e("h1",{className:"text-gray-400",children:"Company:"}),e("p",{className:"font-bold",children:(ce=y==null?void 0:y.find(a=>a.CompanyId===r.CompanyId))==null?void 0:ce.CompanyName}),e("h1",{className:"text-gray-400",children:"Category:"}),e("p",{className:"font-bold",children:(me=x==null?void 0:x.find(a=>a.CategoryId===r.CategoryId))==null?void 0:me.CategoryName}),e("h1",{className:"text-gray-400",children:"PO Date:"}),e("p",{className:"font-bold",children:I(r.PoDate.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A")}),e("h1",{className:"text-gray-400",children:"Approval Status:"}),t("p",{className:"font-bold",children:[" ",t("div",{children:[" ",r.ApprovalStatus==1?e("span",{className:"inline-flex items-center rounded-full bg-gray-200 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):r.ApprovalStatus==2?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Approved"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Rejected"})]})]}),e("h1",{className:"text-gray-400",children:"Second approval:"}),t("p",{className:"font-bold",children:[" ",t("div",{children:[" ",r.SecondApproval==1?e("span",{className:"inline-flex items-center rounded-full bg-gray-200 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):r.SecondApproval==2?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Approved"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Rejected"})]})]}),e("h1",{className:"text-gray-400",children:"Match invoice:"}),t("p",{className:"font-bold",children:[" ",t("div",{children:[" ",r.MatchInvoice==1?e("span",{className:"inline-flex items-center rounded-full bg-gray-200 px-3 py-0.5 text-sm font-medium text-gray-800",children:"Waiting"}):r.MatchInvoice==2?e("span",{className:"inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800",children:"Match"}):e("span",{className:"inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800",children:"Closed"})]})]}),r.MatchInvoice==3?t("div",{className:"col-span-2 grid grid-cols-2 gap-y-4",children:[e("h1",{className:"text-gray-400",children:"Closed reason:"}),e("p",{className:"font-bold",children:(ue=u==null?void 0:u.find(a=>a.ReasonId===r.ClosedReason))==null?void 0:ue.ReasonName}),e("h1",{className:"text-gray-400",children:"Closed reason description:"}),e("p",{className:"font-bold",children:r.ClosedDesc})]}):null,e("h1",{className:"text-gray-400",children:"Description:"}),e("p",{className:"font-bold",children:r.Description}),e("h1",{className:"text-gray-400",children:"Amount:"}),e("p",{className:"font-bold",children:r.Amount}),e("h1",{className:"text-gray-400",children:"File:"}),e("ul",{children:(he=r.PoDoc)==null?void 0:he.filter(a=>a.DocStatus===1).map((a,n)=>e("li",{className:"justify-between flex",children:e("a",{href:`/POs/${a.DocName}`,target:"_blank",className:"text-blue-500 underline",rel:"noopener noreferrer",children:e("span",{children:a.DocName})})},n))}),e("h1",{className:"text-gray-400",children:"Created By:"}),e("p",{className:"font-bold",children:L})]}),t("div",{className:"flex justify-end w-full gap-x-2",children:[e(m,{name:"Back",onClick:()=>{J()},icon:e(Se,{className:"mr-1 h-5"})}),t("div",{className:"",children:[" ",t("div",{className:"flex justify-end w-full gap-x-2",children:[Q?e(m,{name:"Approve",onClick:()=>{H(2)}}):null,K()?e(m,{name:"Reject",onClick:()=>{H(3)}}):null,t("div",{children:[r.ClosePO?null:e("div",{className:"flex justify-end w-full gap-x-2",children:w?e(m,{name:"Close",onClick:()=>{G(!k)}}):null})," "]})]})]})]}),k?t("div",{className:"",children:[e("h1",{className:"text-dark font-bold text-2xl",children:"Reason for closing"}),t("div",{className:"grid grid-cols-2 p-2 gap-y-2 mt-5 text-sm sm:text-base",children:[e("h1",{className:"text-gray-400 border-b",children:"Reason:"}),e("div",{className:"pb-2 border-b",children:e("div",{children:e(N,{value:b,onChange:a=>{W(a)},children:({open:a})=>e(E,{children:t("div",{className:"relative ",children:[t(N.Button,{className:"relative w-full cursor-default rounded-md bg-white py-[0.07rem] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e("span",{className:"block truncate",children:b==null?void 0:b.ReasonName}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(we,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(Ye,{show:a,as:l.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(N.Options,{className:"absolute z-20 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:u==null?void 0:u.filter(n=>n.StatusId==1).map(n=>e(N.Option,{className:({active:d})=>Y(d?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"),value:n,children:({selected:d,active:s})=>t(E,{children:[e("span",{className:Y(d?"font-semibold":"font-normal","block truncate"),children:n.ReasonName}),d?e("span",{className:Y(s?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"),children:e(Ce,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},n.ReasonId))})})]})})})})}),e("h1",{className:"text-gray-400 border-b",children:"Description:"}),e("div",{className:"pb-2 border-b",children:e("textarea",{type:"text",id:"Reason",className:"rounded w-full h-auto border-gray-200 focus:border-0 focus:ring focus:ring-goldt"})})]}),e("div",{className:"flex justify-end w-full gap-x-2",children:t("div",{className:"",children:[" ",w&&convertPoBasedOnStatus()?e("div",{className:"flex justify-end w-full gap-x-2",children:e(m,{name:"Save",onClick:P})}):null]})})]}):null,e("div",{children:je()?e("div",{children:v?t("div",{className:" rounded-xl  p-5",children:[t("div",{className:"font-bold py-2 border-b w-auto text-lg",children:["Created by"," ",(pe=v[0])==null?void 0:pe.CreatedBy," at"," ",I((fe=v[0])==null?void 0:fe.CreatedAt.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:a")=="Invalid date"?"":I((ge=v[0])==null?void 0:ge.CreatedAt.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:a")]}),t("ol",{class:"relative border-l border-gray-200 dark:border-gray-700",children:[(xe=(ye=v[0])==null?void 0:ye.Approval)==null?void 0:xe.map(a=>t("li",{class:"mb-10 ml-4",children:[e("div",{class:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),e("time",{class:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",children:I(a==null?void 0:a.ApprovedAt.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:a")=="Invalid date"?"":I(a==null?void 0:a.ApprovedAt.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:a")}),t("h3",{class:"text-lg font-semibold text-gray-900",children:[a.ApprovedBy," ","has"," ",a.ApprovalStatus==2?"approved":"rejected"," ","this Purchase Order"]})]})),((Ne=(be=v[0])==null?void 0:be.MatchInvoice[0])==null?void 0:Ne.MatchStatus)==1?null:(Ie=(ve=v[0])==null?void 0:ve.MatchInvoice)==null?void 0:Ie.map(a=>t("li",{class:"mb-10 ml-4",children:[e("div",{class:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),e("time",{class:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",children:I(a.AddedAt.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:a")}),t("h3",{class:"text-lg font-semibold text-gray-900",children:[a.AddedBy," ","has"," ",a.c==2?"matched":"closed"," ","this Purchase Order"]})]}))]})]}):null}):null})]})})})}export{ia as default};