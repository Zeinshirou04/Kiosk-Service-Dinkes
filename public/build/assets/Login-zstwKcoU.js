import{W as t,j as e}from"./app-HL2GCWKu.js";import{G as d}from"./GuestLayout-rbxNE2KG.js";import{P as i}from"./PrimaryButton-B782dERe.js";function g(){const{data:a,setData:s,post:n,processing:c,errors:x,reset:m}=t({nik:void 0,no_hp:void 0,kode:void 0}),o="/v2";console.log(o);const r=l=>{l.preventDefault(),n(route("login.attempt"))};return e.jsx(d,{className:"flex flex-col justify-center items-center",title:"Anjungan Kesehatan Mandiri",children:e.jsxs("section",{className:"w-1/2 flex flex-col justify-start px-2 py-2 gap-4",children:[e.jsx("div",{className:"w-min",children:e.jsxs("a",{href:o,className:"flex flex-row gap-4",children:[e.jsx("i",{class:"fa-solid fa-arrow-left text-black text-4xl"}),e.jsx("p",{className:"text-4xl font-bold",children:"Kembali"})]})}),e.jsxs("div",{className:"w-full border-4 border-green-400 rounded-2xl overflow-hidden px-8 py-8 grid grid-flow-row",children:[e.jsxs("section",{className:"w-full grid grid-rows-2 gap-4",children:[e.jsx("header",{className:"w-full",children:e.jsx("h2",{className:"text-6xl font-extrabold",children:"Masuk"})}),e.jsx("caption",{className:"w-full",children:e.jsx("p",{className:"text-xl italic text-gray-700 text-left border-b-2 border-black pb-1",children:"Isikan NIK, No WA, dan kode OTP untuk Masuk"})})]}),e.jsx("section",{className:"w-full",children:e.jsxs("form",{className:"grid grid-cols-6 gap-4",onSubmit:r,children:[e.jsx("label",{htmlFor:"nik",className:"col-span-6 text-xl font-bold",children:"Nomor Induk Kependudukan"}),e.jsx("input",{className:"col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200",type:"number",name:"nik",id:"nik",value:a.nik,onChange:l=>{s("nik",l.target.value)},placeholder:"Contoh: 357601********03"}),e.jsx("label",{htmlFor:"no_hp",className:"col-span-6 text-xl font-bold",children:"Nomor WhatsApp (WA)"}),e.jsx("input",{className:"col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200",type:"number",name:"no_hp",id:"no_hp",value:a.no_hp,onChange:l=>{s("no_hp",l.target.value)},placeholder:"Contoh: 0812****1998"}),e.jsx("label",{htmlFor:"nik",className:"col-span-6 text-xl font-bold",children:"Kode OTP"}),e.jsx("input",{className:"col-span-2 border-2 border-green-400 rounded-xl text-xl bg-gray-200 tex",type:"number",maxlength:"6",name:"kode",id:"kode",value:a.kode,onChange:l=>{s("kode",l.target.value)},placeholder:"Contoh: 123456"}),e.jsx("div",{className:"col-span-4"}),e.jsx(i,{className:"col-span-2",text:"Masuk"})]})})]})]})})}export{g as default};
