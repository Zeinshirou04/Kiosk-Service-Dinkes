import{r as l,j as e}from"./app-t5ON5CR2.js";import{C as x,P as o}from"./ConfirmationPopup-DT05F2Na.js";function h({isActive:i,setActive:n}){const[c,t]=l.useState(!0),[r,s]=l.useState(!1),u=a=>{setTimeout(()=>{t(!0),s(!1)},a)};return e.jsx("div",{className:"absolute h-full w-full top-0 bg-black/30 transition-all ease-in-out duration-100 "+(i?" left-0":"left-full"),children:e.jsx("div",{className:"w-full h-full relative",children:e.jsxs("div",{className:"absolute pb-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-auto w-3/5 rounded-md shadow-lg shadow-gray-500",children:[e.jsx("button",{className:"absolute right-0 mr-8 mt-8",onClick:()=>{n(a=>({...a,SmartCheckupActive:!a.SmartCheckupActive})),u(100)},children:e.jsx("i",{className:"fa-solid fa-x text-4xl"})}),e.jsx(x,{isActive:r}),e.jsxs("div",{className:"h-auto w-full mt-8 "+(c?"":"hidden"),children:[e.jsx("div",{className:"w-full",children:e.jsx("h6",{className:"text-4xl text-black text-center font-semibold",children:"Anjungan Kesehatan Mandiri"})}),e.jsx("div",{className:"w-full gap-3 py-12 px-8",children:e.jsx("header",{className:"w-full px-8",children:e.jsx("h2",{className:"text-6xl font-bold text-center",children:"Cek Kesehatan Cerdas"})})}),e.jsx("div",{className:"w-full px-12",children:e.jsx("article",{className:"text-center flex flex-col gap-3",children:e.jsx("p",{className:"text-3xl",children:"Apakah anda sudah siap untuk memulai pengukuran? Jika anda sudah siap, silahkan tekan tombol Mulai."})})}),e.jsx("div",{className:"w-full flex flex-row justify-center mt-8",children:e.jsx(o,{className:"text-3xl",text:"Mulai",onClick:()=>{s(a=>!a),t(a=>!a)}})})]})]})})})}export{h as default};
