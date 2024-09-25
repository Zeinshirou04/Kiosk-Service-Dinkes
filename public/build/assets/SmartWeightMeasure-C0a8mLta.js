import{r as h,j as e}from"./app-KXpetXxo.js";import{I as n}from"./InputError-BdtIwxZk.js";import{u as f}from"./index-DQSTWXge.js";import"./index-Y6USEByk.js";function I({isActive:t,setActive:d,state:p="none",nik:o}){const{data:r,setData:l,post:c,processing:j,errors:b,reset:v}=f({nik:o,berat:void 0,tinggi:void 0,bmi:0,kategori:"Tidak Terdefinisi",dev_id:void 0}),u=a=>a<17?"Sangat Kurus":a<18.5?"Kurus":a<=25?"Normal":a<=27?"Gemuk":a>27?"Obesitas":"Tidak Terdefinisi",x=async()=>{try{const s=(await axios.get(route("device.show",{device:"eec58e5e-cd44-319f-a1be-46dd38c5d01c"}))).data.data;let i=(s.berat/Math.pow(s.tinggi/100,2)).toFixed(1);l(m=>({...m,berat:s.berat,tinggi:s.tinggi,bmi:i,kategori:u(i),dev_id:s.dev_id}))}catch(a){console.error(a)}};h.useEffect(()=>{if(!t)return;const a=setInterval(()=>{console.log("Fetching data..."),x()},3e3);return()=>clearInterval(a)},[t]);const g=a=>{a.preventDefault(),c(route("weight.store"))};return e.jsx("div",{className:"absolute h-full w-full top-0 bg-black/30 transition-all ease-in-out duration-100 "+(t?" left-0":"left-full"),children:e.jsx("div",{className:"w-full h-full relative",children:e.jsxs("div",{className:"absolute pb-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-auto w-3/5 rounded-md shadow-lg shadow-gray-500",children:[e.jsx("button",{className:"absolute right-0 mr-8 mt-8",onClick:()=>{d(a=>({...a,WeightMeasureActive:!a.WeightMeasureActive}))},children:e.jsx("i",{className:"fa-solid fa-x text-4xl"})}),e.jsxs("div",{className:"h-auto w-full mt-8 "+(t?"":"hidden"),children:[e.jsx("div",{className:"w-full",children:e.jsx("h6",{className:"text-4xl text-black text-center font-semibold",children:"Anjungan Kesehatan Mandiri"})}),e.jsxs("form",{className:"w-full",onSubmit:g,children:[e.jsxs("div",{className:"w-full grid grid-cols-3 grid-rows-2 px-12 mt-8 gap-8",children:[e.jsxs("div",{className:"col-span-3 grid grid-rows-2 grid-cols-3",children:[e.jsx("label",{htmlFor:"nik",className:"text-4xl col-span-3",children:"Tinggi Badan Anda"}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("input",{required:!0,type:"number",name:"tinggi",id:"tinggi",minLength:16,value:r.tinggi,onChange:a=>l("tinggi",a.target.value),className:"text-4xl rounded-lg w-full border border-green-500"}),e.jsx(n,{})]})]}),e.jsxs("div",{className:"col-span-3 grid grid-rows-2 grid-cols-3",children:[e.jsx("label",{htmlFor:"nik",className:"text-4xl col-span-3",children:"Berat Badan Anda"}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("input",{required:!0,type:"number",name:"berat",id:"berat",minLength:16,value:r.berat,onChange:a=>l("berat",a.target.value),className:"text-4xl rounded-lg w-full border border-green-500"}),e.jsx(n,{})]})]})]}),e.jsxs("div",{className:"mt-8 px-12 flex flex-row gap-6",children:[e.jsx("div",{className:"flex flex-row",children:e.jsxs("p",{className:"text-3xl",children:[e.jsx("strong",{children:"BMI:"})," ",r.bmi]})}),e.jsx("div",{className:"flex flex-row",children:e.jsxs("p",{className:"text-3xl",children:[e.jsx("strong",{children:"Kategori:"})," "+r.kategori]})})]}),e.jsx("div",{className:"px-12 mt-8 w-full grid grid-cols-4",children:e.jsx("div",{className:"w-full col-span-4",children:e.jsx("input",{className:"bg-green-500 px-6 py-3 rounded-xl text-white text-4xl w-full",type:"submit",value:"Simpan dan Lanjutkan"})})})]})]})]})})})}export{I as default};
