import{r,j as l,a as e,F as k}from"./app-e057de79.js";import{B as v,X as b}from"./index-92f9eb90.js";import{P as N,C as o}from"./index-2fd36de9.js";import{L as s}from"./LogoWhite-6907a085.js";import{L as i}from"./index-54dda393.js";import{L as t}from"./popover-807b57b5.js";import{t as d}from"./transition-d8cb4eb2.js";import{S as c}from"./dialog-cb1fcbaa.js";import"./render-5eaee1c9.js";import"./keyboard-7b642a18.js";import"./bugs-55244794.js";import"./use-is-mounted-31350877.js";import"./use-resolve-button-type-ff7c32c3.js";import"./use-event-listener-2051adf1.js";const m=[{name:"Services",href:"/#services"},{name:"About Us",href:"/#aboutus"},{name:"Technologies",href:"/#technologies"},{name:"News",href:"/#news"},{name:"Opportunities",href:"/#opportunities"},{name:"Contact Us",href:"/#contact"}];function M(){const[g,n]=r.useState(!1),[y,w]=r.useState(!1);return r.useState(!1),r.useEffect(()=>{function a(){const x=window.pageYOffset||document.documentElement.scrollTop;w(x>0);const h=window.location.hash;if(h&&document.querySelector(h)){const u=document.querySelector(h).getBoundingClientRect().top+x,p=document.querySelector("nav").offsetHeight;u<=p&&window.scrollTo(0,u-p)}}function f(){setTimeout(()=>a(),0)}return window.addEventListener("scroll",a),window.addEventListener("hashchange",f),a(),()=>{window.removeEventListener("scroll",a),window.removeEventListener("hashchange",f)}},[]),l("div",{className:"absolute  pb-2 bg-goldd bg-gradient-to-r from-goldl via-goldt to-goldd shadow-xl shadow-bottom z-30  w-full",children:[l("div",{className:"bg-dark",children:[e("div",{className:"w-full h-6 bg-goldd bg-gradient-to-r from-goldl via-goldt to-goldd ",children:e("div",{className:"mx-auto sm:max-w-7xl sm:px-6 lg:px-8 flex items-center h-full justify-end",children:l("a",{href:"tel:+180040306",className:"text-xs sm:text-sm font-bold flex h-full items-center",children:[" ",e(N,{className:"h-5 sm:h-6 w-auto p-0.5","aria-hidden":"true"}),"Call: 1800-040-306"]})})}),l("nav",{className:"mx-auto lg:max-w-7xl max-w-7xl px-6 pb-2 pt-2 lg:flex lg:items-center lg:gap-x-10 lg:px-10   flex items-center justify-between","aria-label":"Global",children:[e("div",{className:"flex lg:flex-1",children:l("a",{href:"/",className:"-m-1.5 p-1.5",children:[e("span",{className:"sr-only",children:"Your Company"}),e("img",{className:"h-14",src:s,alt:"GoldTiger"})]})}),l("div",{className:"flex lg:hidden",children:[l(t,{className:"relative object-right flex-item md:ml-auto ",children:[l(t.Button,{className:" inline-flex items-center  px-4 py-2 border-2 border-goldt rounded-3xl mr-6 hover:bg-black hover:text-goldt text-white",children:["Login",e(o,{className:"h-5 w-5","aria-hidden":"true"})]}),e(d,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(t.Panel,{className:"absolute left-12 top-8 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4",children:e("div",{className:" max-w-md flex-auto overflow-hidden rounded-lg bg-gradient-to-r from-goldl to-goldd text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",children:e("div",{className:"w-full",children:l("div",{className:" flex flex-col gap-y-0",children:[e("a",{href:"/login",className:" mr-6 w-full hover:bg-dark hover:text-goldt text-dark",children:e("div",{className:" w-full flex justify-center",children:e("button",{className:"font-bold p-2 px-4",children:"Log In"})})}),e("div",{className:"bg-gray-600 h-[0.05rem]"}),e("a",{target:"_blank",href:"https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx",className:" hover:bg-dark text-dark hover:text-goldt ",children:e("div",{className:"w-full flex justify-center",children:e("button",{className:" font-bold p-2 px-4",children:"Client Login"})})})]})})})})})]}),l("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-goldt",onClick:()=>n(!0),children:[e("span",{className:"sr-only",children:"Open main menu"}),e(v,{className:"h-6 w-6","aria-hidden":"true"})]})]}),e("div",{className:"hidden lg:flex lg:gap-x-12 h-8",children:m.map(a=>e(i,{href:a.href,className:"hover:cursor-pointer hover:border-b hover:border-goldt p-1   text-[1rem] font-semibold leading-6 text-goldt hover:text-white",children:a.name},a.name))}),e("div",{className:"hidden  lg:flex lg:flex-1 lg:justify-end",children:e("div",{className:"hidden  lg:flex lg:flex-1 lg:justify-end",children:l(t,{className:"relative object-right flex-item md:ml-auto ",children:[l(t.Button,{className:" inline-flex items-center  px-4 py-2 border-2 border-goldt rounded-3xl mr-6 hover:bg-black hover:text-goldt text-white",children:["Login",e(o,{className:"h-5 w-5","aria-hidden":"true"})]}),e(d,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(t.Panel,{className:"absolute left-12 top-8 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4",children:e("div",{className:" max-w-md flex-auto overflow-hidden rounded-lg bg-gradient-to-r from-goldl to-goldd text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",children:e("div",{className:"w-full",children:l("div",{className:" flex flex-col gap-y-0",children:[e("a",{href:"/login",className:" mr-6 w-full hover:bg-dark hover:text-goldt text-dark",children:e("div",{className:" w-full flex justify-center",children:e("button",{className:"font-bold p-2 px-4",children:"Log In"})})}),e("div",{className:"bg-gray-600 h-[0.05rem]"}),e("a",{target:"_blank",href:"https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx",className:" hover:bg-dark text-dark hover:text-goldt ",children:e("div",{className:"w-full flex justify-center",children:e("button",{className:" font-bold p-2 px-4",children:"Client Login"})})})]})})})})})]})})})]})]}),e(c,{as:"div",open:g,onClose:n,children:l(c.Panel,{className:"fixed inset-0 z-10 overflow-y-auto bg-dark  px-6 py-6 lg:hidden",children:[l("div",{className:"flex flex-row-reverse items-center justify-between",children:[l("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-goldd",onClick:()=>n(!1),children:[e("span",{className:"sr-only",children:"Close menu"}),e(b,{className:"h-6 w-6","aria-hidden":"true"})]}),l("a",{href:"#",className:"-m-1.5 p-1.5",children:[e("span",{className:"sr-only",children:"Your Company"}),e("img",{className:"h-8",src:s,alt:"Goldtiger"})]})]}),e("div",{className:"mt-6 space-y-2",children:m.map(a=>e(i,{href:a.href,className:"hover:cursor-pointer -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-goldt hover:bg-gray-400/10",children:a.name},a.name))})]})}),l("div",{className:`shadow-md shadow-bottom z-50 h-auto   pb-2  bg-goldd bg-gradient-to-r from-goldl via-goldt to-goldd lg:pr-0 fixed bg-white top-0 left-0 w-full transition duration-500 ease-in-out ${y?"opacity-100":"opacity-0 -translate-y-full"}`,children:[l("div",{className:"w-full bg-dark",children:[e("div",{className:"w-full h-6 bg-goldd bg-gradient-to-r from-goldl via-goldt to-goldd ",children:e("div",{className:"mx-auto sm:max-w-7xl sm:px-6 lg:px-8 flex items-center h-full justify-end",children:l("a",{href:"tel:+180040306",className:"text-xs sm:text-sm font-bold flex h-full items-center",children:[" ",e(N,{className:"h-5 sm:h-6 w-auto p-0.5","aria-hidden":"true"}),"Call: 1800-040-306"]})})}),l("nav",{className:"mx-auto lg:max-w-7xl max-w-7xl px-6 pt-2 pb-2 lg:flex lg:items-center lg:gap-x-10 lg:px-10   flex items-center justify-between","aria-label":"Global",children:[e("div",{className:"flex lg:flex-1",children:l("a",{href:"/",className:"-m-1.5 p-1.5",children:[e("span",{className:"sr-only",children:"Your Company"}),e("img",{className:"h-14",src:s,alt:"Goldtiger"})]})}),l("div",{className:"flex lg:hidden",children:[l(t,{className:"relative object-right flex-item md:ml-auto ",children:[l(t.Button,{className:" inline-flex items-center  px-4 py-2 border-2 border-goldt rounded-3xl mr-6 hover:bg-black hover:text-goldt text-white",children:["Login",e(o,{className:"h-5 w-5","aria-hidden":"true"})]}),e(d,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(t.Panel,{className:"absolute left-12 top-8 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4",children:e("div",{className:" max-w-md flex-auto overflow-hidden rounded-lg bg-gradient-to-r from-goldl to-goldd text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",children:e("div",{className:"w-full",children:l("div",{className:" flex flex-col gap-y-0",children:[e("a",{href:"/login",className:" mr-6 w-full hover:bg-dark hover:text-goldt text-dark",children:e("div",{className:" w-full flex justify-center",children:e("button",{className:"font-bold p-2 px-4",children:"Log In"})})}),e("div",{className:"bg-gray-600 h-[0.05rem]"}),e("a",{target:"_blank",href:"https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx",className:" hover:bg-dark text-dark hover:text-goldt ",children:e("div",{className:"w-full flex justify-center",children:e("button",{className:" font-bold p-2 px-4",children:"Client Login"})})})]})})})})})]}),l("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-goldt",onClick:()=>n(!0),children:[e("span",{className:"sr-only",children:"Open main menu"}),e(v,{className:"h-6 w-6","aria-hidden":"true"})]})]}),e("div",{className:"hidden lg:flex lg:gap-x-12 h-8",children:m.map(a=>e(i,{href:a.href,className:"hover:cursor-pointer hover:border-b hover:border-goldt p-1   text-md font-semibold leading-6 text-goldt hover:text-white",children:a.name},a.name))}),e("div",{className:"hidden  lg:flex lg:flex-1 lg:justify-end",children:e(k,{children:l(t,{className:"relative object-right flex-item md:ml-auto ",children:[l(t.Button,{className:" inline-flex items-center  px-4 py-2 border-2 border-goldt rounded-3xl mr-6 hover:bg-black hover:text-goldt text-white",children:["Login",e(o,{className:"h-5 w-5","aria-hidden":"true"})]}),e(d,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(t.Panel,{className:"absolute left-12 top-8 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4",children:e("div",{className:" max-w-md flex-auto overflow-hidden rounded-lg bg-gradient-to-r from-goldl to-goldd text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",children:e("div",{className:"w-full",children:l("div",{className:" flex flex-col gap-y-0",children:[e("a",{href:"/login",className:" mr-6 w-full hover:bg-dark hover:text-goldt text-dark",children:e("div",{className:" w-full flex justify-center",children:e("button",{className:"font-bold p-2 px-4",children:"Log In"})})}),e("div",{className:"bg-gray-600 h-[0.05rem]"}),e("a",{target:"_blank",href:"https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx",className:" hover:bg-dark text-dark hover:text-goldt ",children:e("div",{className:"w-full flex justify-center",children:e("button",{className:" font-bold p-2 px-4",children:"Client Login"})})})]})})})})})]})})})]})]}),e(c,{as:"div",open:g,onClose:n,children:l(c.Panel,{className:"fixed inset-0 z-10 overflow-y-auto bg-dark  px-6 py-6 lg:hidden",children:[l("div",{className:"flex flex-row-reverse items-center justify-between",children:[l("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-goldd",onClick:()=>n(!1),children:[e("span",{className:"sr-only",children:"Close menu"}),e(b,{className:"h-6 w-6","aria-hidden":"true"})]}),l("a",{href:"#",className:"-m-1.5 p-1.5",children:[e("span",{className:"sr-only",children:"Your Company"}),e("img",{className:"h-8",src:s,alt:"Goldtiger"})]})]}),e("div",{className:"mt-6 space-y-2",children:m.map(a=>e(i,{href:a.href,className:"hover:cursor-pointer -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-goldt hover:bg-gray-400/10",children:a.name},a.name))})]})})]})]})}export{M as default};