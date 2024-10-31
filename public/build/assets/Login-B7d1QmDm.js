import{W as d,j as e}from"./app-EL2e4Z_Q.js";import{G as i}from"./GuestLayout-B0jNFxIi.js";import{P as c}from"./PrimaryButton-DHLo4W0j.js";function f(){const{data:a,setData:s,post:r,processing:x,errors:t,reset:m}=d({nik:void 0,no_hp:void 0,kode:void 0}),o="/v2",n=l=>{l.preventDefault(),r(route("login.attempt"))};return e.jsx(i,{className:"flex flex-col justify-center items-center",title:"Anjungan Kesehatan Mandiri",children:e.jsxs("section",{className:"w-1/2 flex flex-col justify-start px-2 py-2 gap-4",children:[e.jsx("div",{className:"w-min",children:e.jsxs("a",{href:o,className:"flex flex-row gap-4",children:[e.jsx("i",{class:"fa-solid fa-arrow-left text-black text-4xl"}),e.jsx("p",{className:"text-4xl font-bold",children:"Kembali"})]})}),e.jsxs("div",{className:"w-full border-4 border-green-400 rounded-2xl overflow-hidden px-8 py-8 grid grid-flow-row",children:[e.jsxs("section",{className:"w-full grid grid-rows-2 gap-3",children:[e.jsx("header",{className:"w-full",children:e.jsx("h2",{className:"text-6xl font-extrabold",children:"Masuk"})}),e.jsxs("caption",{className:"w-full",children:[e.jsx("p",{className:"text-xl italic text-gray-700 text-left border-b-2 border-black pb-1",children:"Isikan NIK, No WA, dan kode OTP untuk Masuk"}),t.match&&e.jsx("p",{className:"text-xl italic text-red-500 text-left pt-1 pb-2",children:t.match})]})]}),e.jsx("section",{className:"w-full",children:e.jsxs("form",{className:"grid grid-cols-6 gap-4",onSubmit:n,children:[e.jsx("label",{htmlFor:"nik",className:"col-span-6 text-xl font-bold",children:"Nomor Induk Kependudukan"}),e.jsx("input",{className:"col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200",type:"number",name:"nik",id:"nik",value:a.nik,onChange:l=>{s("nik",l.target.value)},placeholder:"Contoh: 357601********03",required:!0}),e.jsx("label",{htmlFor:"no_hp",className:"col-span-6 text-xl font-bold",children:"Nomor WhatsApp (WA)"}),e.jsx("input",{className:"col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200",type:"number",name:"no_hp",id:"no_hp",value:a.no_hp,onChange:l=>{s("no_hp",l.target.value)},placeholder:"Contoh: 0812****1998",required:!0}),e.jsx("label",{htmlFor:"nik",className:"col-span-6 text-xl font-bold",children:"Kode OTP"}),e.jsx("input",{className:"col-span-2 border-2 border-green-400 rounded-xl text-xl bg-gray-200 tex",type:"number",maxlength:"6",name:"kode",id:"kode",value:a.kode,onChange:l=>{s("kode",l.target.value)},placeholder:"Contoh: 123456"}),e.jsx("div",{className:"col-span-4"}),e.jsx(c,{className:"col-span-2",text:"Masuk"})]})})]})]})})}export{f as default};