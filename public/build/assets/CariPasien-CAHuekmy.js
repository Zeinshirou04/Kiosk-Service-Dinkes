import{W as d,j as e}from"./app-C_yhckgZ.js";function m({active:s,setActive:r}){const{data:a,setData:n,post:t,processing:i,errors:c,reset:u}=d({nik:null,no_hp:null}),o=l=>{l.preventDefault(),t(route("pasien.encrypt"))};return e.jsx("section",{id:"wrapper",className:"w-svw h-svh absolute "+(s?"block":"hidden"),children:e.jsxs("div",{id:"menuWrapper",className:"w-full h-full mx-auto flex flex-row relative justify-center items-center",style:{maxWidth:"1080px",maxHeight:"1920px"},children:[e.jsx("div",{className:"w-full h-full bg-black/20 absolute z-0",onClick:()=>r(l=>!l)}),e.jsx("section",{id:"menuPasien",className:"h-40 w-1/2 z-10",children:e.jsx("form",{className:"w-full",onSubmit:o,children:e.jsxs("div",{className:"w-full flex flex-col gap-4 px-12 py-12 bg-white border-green-400 border-4 rounded-xl",children:[e.jsxs("div",{className:"w-full flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"nik",className:"text-xl font-bold",children:"Nomor Induk Kependudukan"}),e.jsx("input",{required:"true",value:a.nik,onChange:l=>n("nik",l.target.value),type:"number",name:"nik",maxLength:"16",placeholder:"Masukkan NIK Anda...",style:{appearance:"textfield"},className:"bg-[#388E3C]/20 border-green-500 border-2 w-full rounded-md"})]}),e.jsxs("div",{className:"w-full flex flex-row gap-6",children:[e.jsxs("div",{className:"w-4/6 flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"nik",className:"text-xl font-bold",children:"No. Handphone"}),e.jsx("input",{value:a.no_hp,onChange:l=>n("nik",l.target.value),type:"number",name:"contact",maxLength:"16",placeholder:"Masukkan Nomor HP Anda...",style:{appearance:"textfield"},className:"bg-[#388E3C]/20 border-green-500 border-2 w-full rounded-md placeholder:text-sm"})]}),e.jsxs("div",{className:"w-2/6 flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"nik",className:"text-xl font-bold",children:"Kode"}),e.jsx("input",{value:a.no_hp,onChange:l=>n("nik",l.target.value),type:"number",name:"contact",maxLength:"16",placeholder:"Masukkan Kode...",style:{appearance:"textfield"},className:"bg-[#388E3C]/20 border-green-500 border-2 w-full rounded-md placeholder:text-sm"})]})]}),e.jsx("div",{className:"w-1/5",children:e.jsx("input",{className:"bg-green-500 px-4 py-3 text-lg font-bold rounded-xl hover:cursor-pointer hover:bg-green-500  /80 focus:bg-green-500    /90",type:"submit",value:"Lanjut"})})]})})})]})})}export{m as default};
