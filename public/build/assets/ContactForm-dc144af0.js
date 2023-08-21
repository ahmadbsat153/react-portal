var d=Object.defineProperty;var c=(i,s,e)=>s in i?d(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e;var n=(i,s,e)=>(c(i,typeof s!="symbol"?s+"":s,e),e);import{r as m,i as p,j as r,a as t}from"./app-e057de79.js";import{R as u}from"./recaptcha-wrapper-adaa4f84.js";import"./hoist-non-react-statics.cjs-8f2ef505.js";class v extends m.Component{constructor(e){super(e);n(this,"handleRecaptchaChange",e=>{this.setState({recaptchaValue:!0})});n(this,"handleRecaptchaExpired",()=>{this.setState({recaptchaValue:!1})});n(this,"handleDrop",e=>{const a=["application/pdf"];if(e[0].type&&!a.includes(e[0].type)){this.setState({errors:{attachment:["Only PDF files are allowed."]}});return}this.setState({attachment:e[0],errors:{attachment:null}});const l=new FileReader;l.onload=o=>{this.setState({previewUrl:o.target.result})},l.readAsDataURL(e[0])});n(this,"handleChange",e=>{const{name:a,value:l}=e.target;this.setState({[a]:l})});n(this,"handleFileChange",e=>{this.setState({attachment:e.target.files[0]})});n(this,"handleSubmit",e=>{e.preventDefault(),this.setState({isLoading:!0});const a=new FormData;a.append("name",this.state.name),a.append("email",this.state.email),a.append("message",this.state.message),a.append("phone",this.state.phone),a.append("attachment",this.state.attachment),p.post("/contact",a).then(l=>{this.setState({name:"",email:"",message:"",phone:"",attachment:null,errors:{},isLoading:!1,success:l.status===200})}).catch(l=>{this.setState({errors:l.response.data.errors,isLoading:!1})})});this.state={name:"",email:"",message:"",phone:"",attachment:null,errors:{},recaptchaValue:!1}}render(){const{errors:e,previewUrl:a}=this.state,{isLoading:l,success:o}=this.state,{recaptchaValue:h}=this.state;return r("div",{children:[o&&r("div",{className:"bg-goldt border border-goldd text-dark px-4 py-3 rounded relative mb-4",role:"alert",children:[t("strong",{className:"font-bold",children:"Success!"}),t("span",{className:"block sm:inline",children:"Your message has been sent."}),t("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:r("svg",{onClick:()=>this.setState({success:!1}),className:"fill-current h-6 w-6 text-dark cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:"currentColor",children:[t("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})," "]})})]}),t("div",{className:" flex flex-col border-4 border-goldt rounded-3xl",children:r("div",{className:"p-5",children:[t("div",{className:"p-2",children:t("h2",{className:"text-4xl font-bold tracking-tight text-white",children:"Application form"})}),r("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data",className:"w-full p-5 flex flex-col gap-y-3",children:[r("div",{className:" relative group mt-2.5 border-b border-goldt",children:[t("input",{required:!0,autoComplete:"off",type:"text",id:"name",name:"name",onChange:this.handleChange,value:this.state.name,className:"w-full h-10 px-4 text-sm text-white peer appearance-none bg-transparent outline-none border-dark focus:outline-0 form-input"}),t("label",{htmlFor:"name",className:"text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0",children:"Full name"}),e.name&&t("div",{className:"error text-goldt",children:e.name[0]})]}),r("div",{className:" relative group mt-2.5 border-b border-goldt",children:[t("input",{required:!0,autoComplete:"off",type:"text",id:"email",name:"email",onChange:this.handleChange,value:this.state.email,className:"w-full h-10 px-4 text-sm text-white peer appearance-none bg-transparent outline-none border-dark focus:outline-0 form-input"}),t("label",{htmlFor:"Email",className:"text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0",children:"Email"}),e.email&&t("div",{className:"error text-goldt",children:e.email[0]})]}),r("div",{className:" relative group mt-2.5 border-b border-goldt",children:[t("input",{required:!0,autoComplete:"off",type:"text",id:"phone",name:"phone",onChange:this.handleChange,value:this.state.phone,className:"w-full h-10 px-4 text-sm text-white peer appearance-none bg-transparent outline-none border-dark focus:outline-0 form-input"}),t("label",{htmlFor:"Phone",className:"text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0",children:"Phone"}),e.phone&&t("div",{className:"error text-goldt",children:e.phone[0]})]}),r("div",{className:"mt-2.5  border-goldt",children:[t("label",{htmlFor:"message",className:"block text-sm font-semibold leading-6 text-white",children:"Message"}),t("div",{className:"border rounded border-goldt",children:t("textarea",{required:!0,id:"message",name:"message",onChange:this.handleChange,value:this.state.message,className:"h-24  appearance-none text-gray-100 placeholder:text-gray-300 bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-goldt"})}),e.message&&t("div",{className:"error",children:e.message[0]})]}),r("div",{className:"mt-2.5 ",children:[t("label",{htmlFor:"attachment",className:"block text-sm font-semibold leading-6 text-gray-400",children:"Attachment (PDF only)"}),r("div",{className:"flex",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"text-white w-8 h-auto",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"})}),t("input",{required:!0,type:"file",accept:".pdf",id:"attachment",name:"attachment",onChange:this.handleFileChange,className:`text-sm text-goldt focus:outline-none
                                file:mr-5 file:py-3 file:px-2
                                file:rounded-full file:border-0
                                file:text-md file:font-semibold  file:text-goldd
                                file:bg-dark
                                hover:file:cursor-pointer `})]})]}),t(u,{sitekey:"6Lf30MEmAAAAAA4_iPf9gTM1VMNO9iSFKyaAC1P0",onChange:this.handleRecaptchaChange,onExpired:this.handleRecaptchaExpired,className:"mt-0 flex justify-center",size:"normal",render:"explicit",theme:"dark",style:{transform:"scale(0.8)"}}),t("button",{type:"submit",disabled:!h||l,className:"mt-10 block w-full sm:w-4/12 rounded-3xl bg-gradient-to-r from-goldl to-goldd hover:from-goldd hover:to-goldl px-3.5 py-2.5 text-center text-sm font-semibold text-dark shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-goldt",children:l?t("div",{className:" inset-0 flex justify-center items-center bg-opacity-50",children:t("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-dark"})}):"Submit"})]})]})})]})}}export{v as default};