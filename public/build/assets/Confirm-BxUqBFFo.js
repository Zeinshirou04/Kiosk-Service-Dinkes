import{j as a}from"./app-WxZ_lcM6.js";import p from"./ConfirmationPopup-CAimw9od.js";import"./PrimaryButton-YuLpYG6N.js";import"./index-P1LzvMGo.js";function w({isActive:c,setActive:u,no_hp:g,nik:m,state:h="none",isAuthenticated:f=!1,measure:n}){let i="",t,o,s,r,d;const x=e=>e<200?"Normal":e>=200?"Diabetes":"Tidak Terdefinisi",k=(e,l)=>e==0&l==0?"Tidak Terdefinisi":e<120&&l<80?"Normal":e<139&&l<89?"Pra Hipertensi":e<159&&l<99?"Hipertensi Tingkat 1":e>=160&&l>=100?"Hipertensi Tingkat 2":e>140&&l<90?"Hipertensi Sistolik Terisolasi":"Tidak Terdefinisi";switch(h){case"weight":i="Apakah anda ingin melakukan pengukuran Tinggi dan Berat Badan?";break;case"glucose":i="Apakah anda ingin mengulang pengukuran atau melanjutkan pengukuran Gula Darah?",t=a.jsxs("article",{className:"text-center flex flex-col gap-3 text-4xl",children:[a.jsx("h4",{className:"font-bold",children:"Data Berhasil Disimpan!"}),a.jsxs("p",{children:["Berat Badan: ",n.berat,"kg"]}),a.jsxs("p",{children:["Tinggi Badan: ",n.tinggi,"cm"]})]}),s="Ya, Ulangi",r="Tidak, Lanjutkan";break;case"blood":i="Apakah anda ingin mengulang pengukuran atau melanjutkan pengukuran Tensi/Tekanan Darah?",d=x(n.glucose),t=a.jsxs("article",{className:"text-center flex flex-col gap-3 text-4xl",children:[a.jsx("h4",{className:"font-bold",children:"Data Berhasil Disimpan!"}),a.jsxs("p",{children:["Kadar Gula Darah: ",n.glucose,"mg/dL"]}),a.jsxs("p",{children:["Keterangan: ",d]})]}),s="Ya, Ulangi",r="Tidak, Lanjutkan";break;case"confirmation":i="Apakah anda ingin mengulang pengukuran atau melakukan kirim wa?",d=k(parseInt(n.b_atas),parseInt(n.b_bawah)),t=a.jsxs("article",{className:"text-center flex flex-col gap-3 text-4xl",children:[a.jsx("h4",{className:"font-bold",children:"Data Berhasil Disimpan!"}),a.jsxs("p",{children:["Sistole: ",n.b_atas,"mmHg"]}),a.jsxs("p",{children:["Diastole: ",n.b_bawah,"mmHg"]}),a.jsxs("p",{children:["Kesimpulan: ",d]})]}),s="Ya, Ulangi",r="Tidak, Kirim WA";break;case"finished":i="Terima Kasih telah menggunakan layanan Anjungan Kesehatan Mandiri, Tetap Jaga Kesehatan Anda. Silahkan tekan LOG OUT.",o=a.jsx("header",{className:"w-full text-5xl font-bold",children:a.jsx("h4",{className:"text-center",children:"Pengukuran Selesai!"})}),r="Log Out";break;default:i="Apakah anda sudah pernah mendaftar sebelumnya?";break}return a.jsx("div",{className:"absolute h-full w-full top-0 bg-black/30 transition-all ease-in-out duration-100 "+(c?" left-0":"left-full"),children:a.jsx("div",{className:"w-full h-full relative",children:a.jsxs("div",{className:"absolute pb-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-auto w-3/5 rounded-md shadow-lg shadow-gray-500",children:[a.jsx("button",{className:"absolute right-0 mr-8 mt-8",onClick:()=>{u(e=>({...e,ConfirmActive:!e.ConfirmActive}))},children:a.jsx("i",{className:"fa-solid fa-x text-4xl"})}),a.jsx(p,{title:o,isActive:c,setActive:u,text:i,confirmMessage:s??"Ya",declineMessage:r??"Tidak",isAuthenticated:f,state:h,preview:t,no_hp:g,nik:m})]})})})}export{w as default};
