import{r,j as s,a as e,F as b,i as D}from"./app-e057de79.js";/* empty css               */import{h as m}from"./moment-fbc5633a.js";function M({setActiveIndexGTRS:o,activeCon:x,lastIndex:h,url:p,currentUser:g}){var n,c;const y=t=>{o(h)};r.useEffect(()=>{const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t(),window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[]);const[a,u]=r.useState(null),N=t=>[{label:"Sender",value:t[0].SenderReciever[0].SenderName},{label:"Receiver",value:t[0].SenderReciever[0].ReceiverName},{label:"Address",value:t[0].SenderReciever[0].SenderAddress},{label:"Address",value:t[0].SenderReciever[0].ReceiverAddress},{label:"Suburb",value:t[0].SenderReciever[0].SenderSuburb},{label:"Suburb",value:t[0].SenderReciever[0].ReceiverSuburb},{label:"State",value:t[0].SenderReciever[0].SenderState},{label:"State",value:t[0].SenderReciever[0].ReceiverState},{label:"Zone",value:t[0].SenderReciever[0].SenderZone},{label:"Zone",value:t[0].SenderReciever[0].ReceiverZone},{label:"Contact",value:t[0].SenderReciever[0].SenderContactName},{label:"Contact",value:t[0].SenderReciever[0].ReceiverContactName},{label:"Job Instructions",value:t[0].SenderReciever[0].SenderContactNumber},{label:"Job Instructions",value:t[0].SenderReciever[0].ReceiverContactNumber},{label:"Site Information",value:t[0].SenderReciever[0].SenderSiteInfo},{label:"Site Information",value:t[0].SenderReciever[0].ReceiverSiteInfo},{label:"Pickup Instructions",value:t[0].SenderReciever[0].PickupInstructions},{label:"Delivery Instructions",value:t[0].SenderReciever[0].DeliveryInstructions},{label:"Sender Ref",value:t[0].SenderReciever[0].SenderReference},{label:"Receiver Ref",value:t[0].SenderReciever[0].ReceiverReference}];function v(){return D.get(`${p}api/GTRS/ConsignmentById`,{headers:{"Content-Type":"application/json",User_id:g.user_id,Consignment_id:x}}).then(t=>u(t.data)).catch(t=>console.log(t))}r.useEffect(()=>{v()},[]);let l=0;const f=a?N(a):[];return a&&(a[0].MainDetails[0].ConsignmentStatus==="AWAITINGPICKUP"?l=0:a[0].MainDetails[0].ConsignmentStatus==="PICKEDUP"?l=25:a[0].MainDetails[0].ConsignmentStatus==="LOADED"?l=42:a[0].MainDetails[0].ConsignmentStatus==="DEPOT"?l=59:a[0].MainDetails[0].ConsignmentStatus==="ON-FOR-DELIVERY"?l=75:a[0].MainDetails[0].ConsignmentStatus==="DELIVERED"&&(l=100)),a?e("div",{children:s("div",{className:"px-4 sm:px-6 lg:px-8 bg-gray-50",children:[s("div",{className:"mx-3 py-5",children:[s("div",{className:"flex  flex-col gap-y-2",children:[e("div",{className:"h-10 flex",children:s("button",{type:"button",className:"mr-7 h-full inline-flex items-center rounded-md border border-transparent bg-gray-800 px-5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>y(),children:[e("svg",{viewBox:"0 0 64 64",fill:"currentColor",height:"1.25em",width:"1.25em",children:e("path",{fill:"none",stroke:"currentColor",strokeLinejoin:"bevel",strokeMiterlimit:10,strokeWidth:5,d:"M37 15L20 32l17 17"})}),e("span",{children:" Back"})]})}),s("h4",{className:"text-2xl font-bold py-2 text-gray-900",children:["Consignment Details :"," ",s("span",{className:"text-goldd",children:[" ",a[0].MainDetails[0].ConsignmentNo]})]})]}),s("div",{className:"mt-6 hidden md:block","aria-hidden":"true",children:[e("div",{className:"overflow-hidden rounded-full bg-gray-300",children:e("div",{className:"h-2 rounded-full bg-goldd",style:{width:`${l}%`}})}),s("div",{className:"mt-6 hidden grid-cols-6 text-sm font-medium text-gray-600 sm:grid",children:[e("div",{className:"text-black font-bold",children:"Awaiting Pickup"}),e("div",{className:`text-center ${l>=25?"text-black font-bold":"text-gray-400"} text-center `,children:"Picked Up"}),e("div",{className:`text-center ${l>=42?"text-black font-bold":"text-gray-400"} text-center `,children:"Loaded"}),e("div",{className:`text-center ${l>=59?"text-black font-bold":"text-gray-400"} text-center `,children:"Depot"}),e("div",{className:`text-center ${l>=75?"text-black font-bold":"text-gray-400"} text-center `,children:"On Delivery"}),e("div",{className:`text-center ${l>=100?"text-black font-bold":"text-gray-400"} text-right `,children:"Delivered"})]})]})]}),a[0].MainDetails?e("div",{className:"overflow-hidden mx-3 mt-8 bg-white shadow sm:rounded-xl shadow-lg  mx-auto",children:s("div",{className:"px-4 pb-3 sm:px-6",children:[e("div",{className:"px-4 py-5 sm:px-6",children:e("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Main Details"})}),e("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0",children:s("dl",{className:"sm:divide-y sm:divide-gray-200",children:[s("div",{className:"py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-900",children:"Consignment No."}),e("dd",{className:"mt-1 text-sm text-gray-500 sm:mt-0",children:a[0].MainDetails[0].ConsignmentNo}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Charge To"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].ChargeTo})]}),s("div",{className:"py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-900",children:"Despatch Date"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].DespatchDate?m(a[0].MainDetails[0].DespatchDate.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Service"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].Service}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Date Time"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].DateTime?m(a[0].MainDetails[0].DateTime.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null})]}),s("div",{className:"py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-900",children:"General Instruction"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].GeneralInstructions}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Dangerous Goods"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].DangerousGoods})]}),a[0].MainDetails[0].Status==="FAIL"&&s("div",{className:"py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-900",children:"Failed Reason"}),e("dd",{className:"mt-1 text-sm text-gray-500 sm:mt-0",children:a[0].MainDetails[0].FailedReason}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Failed Description"}),e("dd",{className:"mt-1 text-sm text-gray-500 sm:mt-0 ",children:a[0].MainDetails[0].Faileddesc}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Failed Notes"}),e("dd",{className:"mt-1 text-sm text-gray-500 sm:mt-0 ",children:a[0].MainDetails[0].FailedNote})]}),a[0].MainDetails[0].Status==="FAIL"&&s("div",{className:"py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-900",children:"Resolution"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].Resolution}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Reference"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].Reference===1?"Internal":a[0].MainDetails[0].Reference===2?"External":""}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Department"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0",children:a[0].MainDetails[0].Department})]})]})})]})}):"",a[0].SenderReciever?e("div",{className:"overflow-hidden mx-3 mt-8 bg-white shadow sm:rounded-xl shadow-lg  mx-auto",children:s("div",{className:"px-4 py-5 sm:px-6",children:[e("div",{className:"px-4 pb-3 sm:px-6",children:e("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Sender & Receiver"})}),e("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0",children:e("dl",{className:"sm:divide-y sm:divide-gray-200",children:e("div",{children:f.reduce((t,d,i)=>(i%2===0&&t.push([]),t[t.length-1].push(d),t),[]).map((t,d)=>e("div",{className:"py-4 border-t  sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6",children:t.map(i=>s(b,{children:[e("dt",{className:"text-sm font-medium text-gray-900",children:i.label}),e("dd",{className:"mt-1 text-sm text-gray-500 sm:mt-0 col-span-2",children:i.value})]}))},d))})})})]})}):"",a[0].ConsignmentDetail?e("div",{className:"px-4 sm:px-6 lg:px-8  mt-8 bg-white shadow sm:rounded-xl shadow-lg",children:e("div",{className:"mt-8 flow-root",children:e("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 containerscroll",children:s("div",{className:"inline-block min-w-full py-2 align-middle px-6 lg:px-8",children:[e("h1",{className:"text-base font-semibold leading-6 text-gray-900 py-4",children:"Consignment Details"}),s("table",{className:"min-w-full divide-y divide-gray-300 border-t mb-5",children:[e("thead",{children:s("tr",{children:[e("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3",children:"Description"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Quantity"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Weight"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Length"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Height"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Width"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Cubic"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Pallet Space"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Rate Unit"})]})}),e("tbody",{className:"bg-gray-100 rounded-xl",children:(n=a[0].ConsignmentDetail)==null?void 0:n.map(t=>s("tr",{className:" ",children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.Description}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.Quantity}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.Weight}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.Length}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.Height}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.Width}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.Cubic}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.PalletSpace}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.RateUnit})]}))})]})]})})})}):"",a[0].DeliveryDetails?e("div",{className:"overflow-hidden mx-3 mt-8 bg-white shadow sm:rounded-xl shadow-lg  mx-auto",children:s("div",{className:"px-4 pb-3 sm:px-6",children:[e("div",{className:"px-4 py-5 sm:px-6",children:e("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Delivery Details"})}),e("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0",children:e("dl",{className:"sm:divide-y sm:divide-gray-200",children:s("div",{className:"py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-900",children:"Delivery required date"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0 ",children:a[0].DeliveryDetails[0].DelReqDate?m(a[0].DeliveryDetails[0].DelReqDate.replace("T"," "),"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY h:mm A"):null}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Time slot"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0 ",children:a[0].DeliveryDetails[0].TimeSlot.toString()})]})})})]})}):"",a[0].PalletDetails?e("div",{className:"overflow-hidden mx-3 mt-8 bg-white shadow sm:rounded-xl shadow-lg  mx-auto",children:s("div",{className:"px-4 pb-3 sm:px-6",children:[e("div",{className:"px-4 py-5 sm:px-6",children:e("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Pallet Details"})}),e("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0",children:e("dl",{className:"sm:divide-y sm:divide-gray-200",children:s("div",{className:"py-4 sm:grid sm:grid-cols-10 sm:gap-4 sm:py-5 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-900",children:"Pallet/Cubic Spaces"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0 ",children:a[0].PalletDetails[0].PalletSpaces}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Chep"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0 ",children:a[0].PalletDetails[0].Chep}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Loscam"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0 ",children:a[0].PalletDetails[0].Loscam}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Customer Own"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0 ",children:a[0].PalletDetails[0].CustomerOwn}),e("dt",{className:"text-sm font-medium text-gray-900",children:"Docket No"}),e("dd",{className:"mt-1 text-sm text-gray-500  sm:mt-0 ",children:a[0].PalletDetails[0].DocketNo})]})})})]})}):"",a[0].PickupDelInfo?e("div",{className:"px-4 sm:px-6 lg:px-8 mt-8 bg-white shadow sm:rounded-xl shadow-lg",children:e("div",{className:"mt-8 flow-root",children:e("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:s("div",{className:"inline-block min-w-full py-2 align-middle px-6 lg:px-8",children:[e("h1",{className:"text-base font-semibold leading-6 text-gray-900 py-4",children:"Pickup and Delivery Information"}),s("table",{className:"min-w-full divide-y divide-gray-300 border-t mb-5",children:[e("thead",{children:s("tr",{children:[e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"POD Date Time"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"POD Image"})]})}),e("tbody",{className:"bg-gray-100 rounded-xl",children:(c=a[0].PickupDelInfo)==null?void 0:c.map(t=>s("tr",{className:" ",children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:t.PODdateTime.replace("T"," ")}),e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3",children:e("a",{href:t.PODimage,target:"_blank",className:"text-indigo-600 hover:text-goldds",children:t.PODimage})})]}))})]})]})})})}):""]})}):s("div",{className:"min-h-screen md:pl-20 pt-16 h-full flex flex-col items-center justify-center",children:[s("div",{className:"flex items-center justify-center",children:[e("div",{className:"h-4 w-4 bg-goldd rounded-full mr-5 animate-bounce"}),e("div",{className:"h-4 w-4 bg-goldd rounded-full mr-5 animate-bounce200"}),e("div",{className:"h-4 w-4 bg-goldd rounded-full animate-bounce400"})]}),e("div",{className:"text-dark mt-4 font-bold",children:"Please wait while we get the data for you."})]})}export{M as default};
