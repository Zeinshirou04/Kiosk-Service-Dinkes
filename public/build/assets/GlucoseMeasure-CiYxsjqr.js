import{W as g,r as p,j as e}from"./app-t5ON5CR2.js";import{I as o}from"./InputError-YP95dYQ2.js";function N({isActive:n,className:d,error:r}){const{data:a,setData:t,post:i,processing:h,errors:l,reset:v}=g({nik:void 0,no_hp:void 0,code:void 0,glucose:void 0,dev_id:""}),u=async()=>{try{const c=(await axios.get(route("device.show",{device:"eec58e5e-cd44-319f-a1be-46dd38c5d01c"}))).data.data;t(m=>({...m,glucose:c.gula,dev_id:c.dev_id}))}catch(s){console.error(s)}};p.useEffect(()=>{if(!n)return;const s=setInterval(()=>{console.log("Fetching data..."),u()},2e3);return()=>clearInterval(s)},[n]);const x=s=>{s.preventDefault(),i(route("glucose.store"))};return r!=null&&console.log(r),e.jsxs("div",{className:"w-full h-auto "+(n?"":" hidden ")+d,children:[e.jsx("div",{className:"w-full",children:e.jsx("h6",{className:"text-4xl text-black text-center font-semibold",children:"Pemeriksaan Glukosa"})}),e.jsxs("form",{className:"w-full h-auto px-8 pt-12 pb-12 grid grid-cols-3 gap-7",onSubmit:x,children:[e.jsxs("div",{className:"flex flex-col col-span-3 gap-3",children:[e.jsx("label",{htmlFor:"nik",className:"text-3xl",children:"Nomor Induk Kependudukan"}),e.jsx("input",{required:!0,type:"number",name:"nik",id:"nik",minLength:16,className:"text-3xl rounded-md",value:a.nik,onChange:s=>t("nik",s.target.value)}),e.jsx(o,{message:l.nik})]}),e.jsxs("div",{className:"flex flex-col col-span-2 gap-3",children:[e.jsx("label",{htmlFor:"no_hp",className:"text-3xl",children:"Nomor Handphone"}),e.jsx("input",{required:!0,type:"number",name:"no_hp",id:"no_hp",className:"text-3xl rounded-md",value:a.no_hp,onChange:s=>t("no_hp",s.target.value)}),e.jsx(o,{message:l.no_hp})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"code",className:"text-3xl",children:"Kode"}),e.jsx("input",{required:!0,type:"number",name:"code",id:"code",className:"text-3xl rounded-md",value:a.code,onChange:s=>t("code",s.target.value)}),e.jsx(o,{message:l.code})]}),e.jsxs("div",{className:"flex flex-col col-span-2 gap-3",children:[e.jsx("label",{htmlFor:"glucose",className:"text-3xl",children:"Glukosa"}),e.jsx("input",{required:!0,maxLength:5,type:"number",name:"glucose",id:"glucose",className:"text-3xl rounded-md",value:a.glucose}),e.jsx(o,{message:l.glucose})]}),e.jsx("div",{}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx("input",{className:"px-4 py-3 bg-gradient-to-tr from-green-500/80 via-green-500 to-green-500/70 hover:from-green-600/80 hover:via-green-600 hover:to-green-600/70 focus:from-green-700/80 focus:via-green-700 focus:to-green-700/70 active:from-green-700/80 active:via-green-700 active:to-green-700/70 rounded-lg text-white text-3xl",type:"submit",value:"Simpan"})})]})]})}export{N as default};
