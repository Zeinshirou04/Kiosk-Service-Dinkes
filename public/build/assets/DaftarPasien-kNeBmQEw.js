import{W as d,j as e,Y as i,a as c}from"./app-OAQ10aaE.js";import"./index-D2XiWBQk.js";import{N as x}from"./AsideMenu-CYNnBsWr.js";import{I as t}from"./InputError-CXD-avaX.js";import"./NavLink-D15owrNs.js";function w({csrfToken:o,session:h}){const{data:l,setData:s,post:n,processing:u,errors:r,reset:p}=d({nik:null,nama_pasien:"",tgl_lahir:"",tempat_lahir:"",alamat:"",no_hp:null,jenis_kelamin:"L",umur:null}),m=async a=>{a.preventDefault(),n(route("pendaftaran.store"))};return e.jsxs("section",{id:"wrapper",className:"w-svw h-svh",children:[e.jsx(i,{title:"Pasien Umum"}),e.jsxs("div",{id:"menuWrapper",className:"w-full h-full bg-[#F2F9F1] mx-auto flex flex-row",style:{maxWidth:"1080px",maxHeight:"1920px"},children:[e.jsx(x,{}),e.jsxs("main",{className:"w-4/6 h-full px-8 py-12 flex flex-col gap-16",children:[e.jsx("header",{className:"px-2 py-2 max-h-32 h-full",children:e.jsx("h1",{className:"font-extrabold text-6xl text-center text-[#388E3C]",children:"Anjungan Kesehatan Mandiri"})}),e.jsxs("section",{id:"menuPasien",className:"h-full w-5/6 mx-auto",children:[e.jsx("header",{className:"w-full mx-auto",children:e.jsx("h2",{className:"text-4xl font-semibold text-center",children:"Silahkan isi form pendaftaran"})}),e.jsx("div",{className:"w-full flex flex-row gap-12 mt-8",children:e.jsxs("form",{className:"w-full",onSubmit:m,children:[e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"nik",className:"mr-4 font-bold",children:"NIK"})}),e.jsx("td",{colSpan:4,children:e.jsx("input",{required:"true",value:l.nik,onChange:a=>s("nik",a.target.value),type:"number",name:"nik",maxLength:"16",placeholder:"Masukkan NIK Anda...",style:{appearance:"textfield"},className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"})})]}),e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{className:"pb-4",colSpan:4,children:e.jsx(t,{message:r.nik})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"nama_pasien",className:"mr-4 font-bold",children:"Nama"})}),e.jsx("td",{colSpan:4,className:"",children:e.jsx("input",{required:"true",value:l.nama_pasien,onChange:a=>s("nama_pasien",a.target.value),type:"text",name:"nama_pasien",placeholder:"Masukkan Nama Lengkap Anda...",className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"})})]}),e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{className:"pb-4",colSpan:4,children:e.jsx(t,{message:r.nama})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"tgl_lahir",className:"mr-4 font-bold",children:"Tanggal Lahir"})}),e.jsx("td",{className:"pr-6",children:e.jsx("input",{required:"true",value:l.tgl_lahir,onChange:a=>s("tgl_lahir",a.target.value),type:"date",name:"tgl_lahir",className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"})}),e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"tempat_lahir",className:"mr-4 font-bold",children:"Tempat Lahir"})}),e.jsx("td",{colSpan:2,children:e.jsx("input",{required:"true",value:l.tempat_lahir,onChange:a=>s("tempat_lahir",a.target.value),type:"text",name:"tempat_lahir",placeholder:"Masukkan Tempat Lahir Anda...",className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"})})]}),e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{className:"pb-4",children:e.jsx(t,{message:r.tgl_lahir})}),e.jsx("td",{}),e.jsx("td",{colSpan:2,className:"pb-4",children:e.jsx(t,{message:r.tempat_lahir})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"alamat",className:"mr-4 font-bold",children:"Alamat"})}),e.jsx("td",{colSpan:2,className:"pr-6",children:e.jsx("input",{required:"true",value:l.alamat,onChange:a=>s("alamat",a.target.value),type:"text",name:"alamat",placeholder:"Masukkan Alamat Anda...",className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"})}),e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"umur",className:"mr-4 font-bold",children:"Umur"})}),e.jsx("td",{className:"",children:e.jsx("input",{required:"true",value:l.umur,onChange:a=>s("umur",a.target.value),type:"number",name:"umur",placeholder:"Masukkan umur Anda...",className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"})})]}),e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{className:"pb-4",colSpan:2,children:e.jsx(t,{message:r.alamat})}),e.jsx("td",{}),e.jsx("td",{className:"pb-4",children:e.jsx(t,{message:r.umur})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"no_hp",className:"mr-4 font-bold",children:"No. HP"})}),e.jsx("td",{className:"pr-6",colSpan:2,children:e.jsx("input",{required:"true",value:l.no_hp,onChange:a=>s("no_hp",a.target.value),type:"number",name:"no_hp",maxLength:"13",placeholder:"Masukkan Nomor HP Anda...",style:{appearance:"textfield"},className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"})}),e.jsx("td",{className:"max-w-20",children:e.jsx("label",{htmlFor:"jenis_kelamin",className:"mr-4 font-bold",children:"Jenis Kelamin"})}),e.jsx("td",{className:"",children:e.jsxs("select",{required:"true",name:"jenis_kelamin",id:"jenis_kelamin",value:l.jenis_kelamin,onChange:a=>s("jenis_kelamin",a.target.value),className:"bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full hover:bg-[#388E3C]/40 duration-150",children:[e.jsx("option",{value:"L",className:"hover:bg-[#388E3C]/40 active:bg-[#388E3C]/40",children:"Laki-Laki"}),e.jsx("option",{value:"P",className:"hover:bg-[#388E3C]/40 active:bg-[#388E3C]/40",children:"Perempuan"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{className:"pb-4",colSpan:2,children:e.jsx(t,{message:r.no_hp})}),e.jsx("td",{}),e.jsx("td",{className:"pb-4",children:e.jsx(t,{message:r.jenis_kelamin})})]})]})}),e.jsxs("div",{className:"w-full flex flex-row gap-4 justify-center",children:[e.jsx(c,{className:"w-1/5",href:route("menu.umum"),children:e.jsx("input",{type:"button",className:"px-2 py-4 bg-red-600 text-xl rounded-xl text-white w-full",value:"Kembali"})}),e.jsx("input",{type:"submit",className:"px-2 py-4 bg-green-600 text-xl rounded-xl text-white w-1/5",value:"Daftar"})]})]})})]})]})]})]})}export{w as default};