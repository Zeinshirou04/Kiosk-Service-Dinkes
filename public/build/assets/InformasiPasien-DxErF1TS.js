import{W as p,r as m,j as e,Y as b}from"./app-C_yhckgZ.js";import{N as g}from"./AsideMenu-Z2R5w_RJ.js";import{I as f}from"./IdentitasPasien-Di8pKm9R.js";import"./NavLink-DSnjmbxG.js";function j({nik:r,active:c,setActive:d}){const{data:l,setData:o,post:i,processing:h,errors:u,reset:a}=p({nik:0,gula:0,berat:0,tinggi:0,dev_id:""});m.useEffect(()=>{const s=async()=>{try{const n=(await axios.get(route("device.show",{device:"eec58e5e-cd44-319f-a1be-46dd38c5d01c"}))).data.data;o({nik:r,gula:n.gula,berat:n.berat,tinggi:n.tinggi,dev_id:n.dev_id})}catch(x){console.error(x)}};setInterval(()=>{s()},2e3)},[]);const t=s=>{s.preventDefault(),i(route("pengukuran.store"))};return e.jsx("div",{className:"w-full h-full absolute duration-150 ease-in-out "+(c?"block":"hidden"),children:e.jsxs("div",{className:"w-full h-full flex flex-row justify-center items-center relative",children:[e.jsx("div",{onClick:()=>{d(s=>!s)},className:"w-full h-full bg-black/30 absolute"}),e.jsxs("div",{className:"w-1/3 h-auto bg-white px-6 py-4 rounded-md z-10",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Pengukuran"}),e.jsxs("form",{className:"mt-4",onSubmit:t,children:[e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsx("label",{className:"text-lg",htmlFor:"glukosa",children:"Glukosa"}),e.jsx("input",{className:"bg-[#388E3C]/30 border-0 rounded-md w-full",type:"number",value:l.gula,name:"glukosa",style:{appearance:"textfield"}})]}),e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsx("label",{className:"text-lg",htmlFor:"berat",children:"Berat Badan"}),e.jsx("input",{className:"bg-[#388E3C]/30 border-0 rounded-md w-full",type:"number",value:l.berat,name:"berat",style:{appearance:"textfield"}})]}),e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsx("label",{className:"text-lg",htmlFor:"tinggi",children:"Tinggi Badan"}),e.jsx("input",{className:"bg-[#388E3C]/30 border-0 rounded-md w-full",type:"number",value:l.tinggi,name:"tinggi",style:{appearance:"textfield"}})]}),e.jsx("div",{className:"py-2",children:e.jsx("input",{onClick:()=>{d(s=>!s)},className:"px-4 py-3 bg-[#388E3C]/80 rounded-lg text-white",type:"submit",value:"Simpan"})})]})]})]})})}function y({nik:r,active:c,setActive:d}){const{data:l,setData:o,post:i,processing:h,errors:u,reset:a}=p({nik:0,b_atas:0,b_bawah:0,denyut:0,dev_id:""});m.useEffect(()=>{const s=async()=>{try{const n=(await axios.get(route("tension.show",{tension:"fe5110fa-4b69-3c21-acfa-4c5830af6b10"}))).data.data;o({nik:r,b_atas:n.b_atas,b_bawah:n.b_bawah,denyut:n.denyut,dev_id:n.dev_id})}catch(x){console.error(x)}};setInterval(()=>{s()},2e3)},[]);const t=s=>{s.preventDefault(),i(route("pengukuran.store"))};return e.jsx("div",{className:"w-full h-full absolute duration-150 ease-in-out "+(c?"block":"hidden"),children:e.jsxs("div",{className:"w-full h-full flex flex-row justify-center items-center relative",children:[e.jsx("div",{onClick:()=>{d(s=>!s)},className:"w-full h-full bg-black/30 absolute"}),e.jsxs("div",{className:"w-1/3 h-auto bg-white px-6 py-4 rounded-md z-10",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Pengukuran"}),e.jsxs("form",{className:"mt-4",onSubmit:t,children:[e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsx("label",{className:"text-lg",htmlFor:"b_atas",children:"Batas Atas"}),e.jsx("input",{className:"bg-[#388E3C]/30 border-0 rounded-md w-full",type:"number",value:l.b_atas,name:"b_atas",style:{appearance:"textfield"}})]}),e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsx("label",{className:"text-lg",htmlFor:"b_bawah",children:"Batas Bawah"}),e.jsx("input",{className:"bg-[#388E3C]/30 border-0 rounded-md w-full",type:"number",value:l.b_bawah,name:"b_bawah",style:{appearance:"textfield"}})]}),e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsx("label",{className:"text-lg",htmlFor:"denyut",children:"Denyut"}),e.jsx("input",{className:"bg-[#388E3C]/30 border-0 rounded-md w-full",type:"number",value:l.denyut,name:"denyut",style:{appearance:"textfield"}})]}),e.jsx("div",{className:"py-2",children:e.jsx("input",{onClick:()=>{d(s=>!s)},className:"px-4 py-3 bg-[#388E3C]/80 rounded-lg text-white",type:"submit",value:"Simpan"})})]})]})]})})}function _({pasien:r,rekap:c,tensi:d}){r.nama_pasien,r.alamat,r.no_hp;const l=async()=>{};console.log(ff.getStatus());const[o,i]=m.useState(!1),[h,u]=m.useState(!1);return console.log(c.length),e.jsxs("section",{id:"wrapper",className:"w-svw h-svh relative",children:[e.jsx(b,{title:"Pasien Umum"}),e.jsx(j,{nik:r.nik,active:o,setActive:i}),e.jsx(y,{nik:r.nik,active:h,setActive:u}),e.jsxs("div",{id:"menuWrapper",className:"w-full h-full bg-[#F2F9F1] mx-auto flex flex-row",style:{maxWidth:"1080px",maxHeight:"1920px"},children:[e.jsx(g,{}),e.jsxs("main",{className:"w-4/6 h-full px-8 py-12 flex flex-col gap-16",children:[e.jsx("header",{className:"px-2 py-2 max-h-32 h-full",children:e.jsx("h1",{className:"font-extrabold text-6xl text-center text-[#388E3C]",children:"Anjungan Kesehatan Mandiri"})}),e.jsxs("section",{id:"menuPasien",className:"h-full w-3/4 mx-auto",children:[e.jsx(f,{data:r}),e.jsxs("div",{className:"w-full px-2 py-2 mt-8 flex flex-col gap-8",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"w-full max-w-full flex flex-row justify-between items-end",children:e.jsx("h2",{className:"text-md font-bold text-nowrap",children:"Riwayat Pengukuran Glukosa dan BB/TB"})}),e.jsx("div",{className:"w-full max-w-full h-60 overflow-x-auto overflow-y-auto mt-2",children:e.jsxs("table",{className:"min-w-full text-nowrap text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b-2 border-b-gray-200 bg-gray-600 text-white",children:[e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"No"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Glukosa"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Berat badan"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Tinggi badan"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Tanggal Ukur"})]})}),e.jsx("tbody",{children:c.length!=0?Object.values(c).map((a,t)=>e.jsxs("tr",{className:"border-b-2 border-b-gray-300 "+(t%2==0?"bg-gray-200":""),children:[e.jsx("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:++t}),e.jsxs("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:[a.gula,e.jsx("span",{className:"text-sm",children:"mg/dL"})]}),e.jsxs("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:[a.berat,e.jsx("span",{className:"text-sm",children:"kg"})]}),e.jsxs("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:[a.tinggi,e.jsx("span",{className:"text-sm",children:"cm"})]}),e.jsx("td",{className:"px-4 py-1",children:a.created_at})]})):e.jsx("tr",{children:e.jsx("td",{className:"px-4 py-2 border-r-2 border-r-gray-500 text-center",rowSpan:6,colSpan:5,children:"Belum ada pengukuran"})})})]})})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"w-full max-w-full flex flex-row justify-between items-end",children:e.jsx("h2",{className:"text-md font-bold text-nowrap",children:"Riwayat Pengukuran Tensi"})}),e.jsx("div",{className:"w-full max-w-full h-60 overflow-x-auto overflow-y-auto mt-2",children:e.jsxs("table",{className:"min-w-full text-nowrap text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b-2 border-b-gray-200 bg-gray-600 text-white",children:[e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"No"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Glukosa"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Berat badan"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Tinggi badan"}),e.jsx("th",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:"Tanggal Ukur"})]})}),e.jsx("tbody",{children:d.length!=0?Object.values(d).map((a,t)=>e.jsxs("tr",{className:"border-b-2 border-b-gray-300 "+(t%2==0?"bg-gray-200":""),children:[e.jsx("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:++t}),e.jsxs("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:[a.b_atas,e.jsx("span",{className:"text-sm"})]}),e.jsxs("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:[a.b_bawah,e.jsx("span",{className:"text-sm"})]}),e.jsxs("td",{className:"px-4 py-1 border-r-2 border-r-gray-500",children:[a.denyut,e.jsx("span",{className:"text-sm"})]}),e.jsx("td",{className:"px-4 py-1",children:a.created_at})]})):e.jsx("tr",{children:e.jsx("td",{className:"px-4 py-2 border-r-2 border-r-gray-500 text-center",rowSpan:6,colSpan:5,children:"Belum ada pengukuran"})})})]})})]}),e.jsxs("div",{className:"w-full flex flex-col gap-4",children:[e.jsxs("div",{className:"w-full flex flex-row gap-4",children:[e.jsxs("div",{className:"px-4 w-2/4 h-20 bg-green-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-green-600 focus:bg-green-700/70 active:bg-green-700 duration-150",onClick:()=>i(a=>!a),children:[e.jsx("i",{class:"fa-solid fa-weight-scale fa-2xl text-white"}),e.jsx("div",{className:"w-full font-bold text-white text-lg",children:"Pengukuran Baru Glukosa"})]}),e.jsxs("div",{className:"px-4 w-2/4 h-20 bg-red-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-red-600 focus:bg-red-700/70 active:bg-red-700 duration-150",onClick:()=>u(a=>!a),children:[e.jsx("i",{class:"fa-solid fa-droplet fa-2xl text-white"}),e.jsx("div",{className:"w-full font-bold text-white text-lg",children:"Pengukuran Baru Tensi"})]})]}),e.jsxs("div",{className:"w-full flex flex-row gap-4",children:[e.jsxs("div",{className:"px-4 w-2/4 h-20 bg-green-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-green-600 focus:bg-green-700/70 active:bg-green-700 duration-150",onClick:l,children:[e.jsx("i",{class:"fa-solid fa-print fa-2xl text-white"}),e.jsx("div",{className:"w-full font-bold text-white text-lg",children:"Print Laporan Pengukuran"})]}),e.jsx("div",{className:"w-2/4"})]})]})]})]})]})]})]})}export{_ as default};
