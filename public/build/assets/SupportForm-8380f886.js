var m=Object.defineProperty;var c=(n,i,e)=>i in n?m(n,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[i]=e;var r=(n,i,e)=>(c(n,typeof i!="symbol"?i+"":i,e),e);import{r as h,i as g,j as a,a as t}from"./app-e057de79.js";class f extends h.Component{constructor(e){super(e);r(this,"handleDrop",e=>{const l=["application/pdf"];if(e[0].type&&!l.includes(e[0].type)){this.setState({errors:{attachment:["Only PDF files are allowed."]}});return}this.setState({attachment:e[0],errors:{attachment:null}});const s=new FileReader;s.onload=d=>{this.setState({previewUrl:d.target.result})},s.readAsDataURL(e[0])});r(this,"handleChange",e=>{const{name:l,value:s}=e.target;this.setState({[l]:s})});r(this,"handleFileChange",e=>{this.setState({attachment:e.target.files[0]})});r(this,"handleSubmit",e=>{e.preventDefault(),this.setState({isLoading:!0});const l=new FormData;l.append("subject",this.state.subject),l.append("name",this.state.name),l.append("email",this.state.email),l.append("message",this.state.message),l.append("attachment",this.state.attachment),g.post("/support",l).then(s=>{this.formRef.reset(),this.setState({subject:"",name:"",email:"",message:"",attachment:null,errors:{},isLoading:!1,success:s.status===200})}).catch(s=>{console.log(s.response),this.setState({errors:s.response.data.errors,isLoading:!1})})});this.state={subject:"",name:"",email:"",message:"",attachment:null,errors:{}}}render(){const{errors:e,previewUrl:l}=this.state,{isLoading:s,success:d}=this.state;return a("div",{children:[d&&a("div",{className:"bg-goldt border border-goldd text-dark px-4 py-3 rounded relative mb-4",role:"alert",children:[t("strong",{className:"font-bold",children:"Success!"}),t("span",{className:"block sm:inline",children:"Your message has been sent."}),t("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:a("svg",{onClick:()=>this.setState({success:!1}),className:"fill-current h-6 w-6 text-dark cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:"currentColor",children:[t("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})," "]})})]}),a("form",{ref:o=>this.formRef=o,onSubmit:this.handleSubmit,encType:"multipart/form-data",children:[t("div",{className:"space-y-12 pr-2",children:a("div",{className:"border-b border-gray-900/10 pb-12",children:[a("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[a("div",{className:"sm:col-span-3",children:[t("label",{htmlFor:"subject",className:"block text-sm font-medium leading-6 text-gray-900",children:"Subject"}),t("div",{className:"mt-2",children:t("input",{required:!0,autoComplete:"off",type:"text",id:"subject",name:"subject",onChange:this.handleChange,value:this.state.subject,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input-field"})})]}),a("div",{className:"sm:col-span-3",children:[t("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Name"}),a("div",{className:"mt-2 ",children:[t("input",{required:!0,autoComplete:"off",type:"text",id:"name",name:"name",onChange:this.handleChange,value:this.state.name,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input-field"}),(e==null?void 0:e.name)&&t("div",{className:"error text-goldt",children:e==null?void 0:e.name[0]})]})]}),a("div",{className:"sm:col-span-6",children:[t("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),a("div",{className:"mt-2",children:[t("input",{required:!0,autoComplete:"off",type:"text",id:"email",name:"email",onChange:this.handleChange,value:this.state.email,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input-field"}),(e==null?void 0:e.email)&&t("div",{className:"error text-goldt",children:e==null?void 0:e.email[0]})]})]})]}),a("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[a("div",{className:"col-span-full",children:[t("label",{htmlFor:"message",className:"block text-sm font-medium leading-6 text-gray-900",children:"Message"}),a("div",{className:"mt-2",children:[t("textarea",{required:!0,id:"message",name:"message",onChange:this.handleChange,value:this.state.message,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-goldd sm:text-sm sm:leading-6",defaultValue:""}),(e==null?void 0:e.message)&&t("div",{className:"error",children:e==null?void 0:e.message[0]})]})]}),t("div",{className:"col-span-full",children:a("div",{className:"mt-2.5 ",children:[t("label",{htmlFor:"attachment",className:"block text-sm font-semibold leading-6 text-gray-400",children:"Attachment"}),a("div",{className:"flex",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"text-dark w-8 h-auto",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"})}),t("input",{type:"file",id:"attachment",name:"attachment",onChange:this.handleFileChange,className:`text-sm text-dark focus:outline-none
                                                        file:mr-5 file:ml-5 file:py-2 file:px-10
                                                        file:rounded-full file:border-0
                                                        file:text-md file:font-semibold  file:text-smooth
                                                        file:bg-dark
                                                        hover:file:cursor-pointer `})]})]})})]})]})}),t("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:t("button",{type:"submit",disabled:s,className:" block w-full sm:w-4/12 rounded-3xl bg-dark px-3.5 py-2.5 text-center text-sm font-semibold text-smooth shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-goldt",children:s?t("div",{className:" inset-0 flex justify-center items-center bg-opacity-50",children:t("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-smooth"})}):"Submit"})})]})]})}}export{f as default};
