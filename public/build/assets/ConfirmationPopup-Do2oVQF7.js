import{j as i}from"./app-CUFSHel9.js";import{P as b}from"./PrimaryButton-CHhaU_bW.js";import{d as s}from"./index-CrqgKlOp.js";function g({className:o,text:a="",...t}){return i.jsx("button",{...t,className:"bg-red-500 px-6 py-3 rounded-xl text-white "+o,children:a})}function w({title:o=void 0,isActive:a=!1,setActive:t,text:u,confirmMessage:m="Sudah",declineMessage:d="Belum",isAuthenticated:r=!1,state:l="none",preview:x=void 0}){const n=()=>{t(e=>({...e,ConfirmActive:!e.ConfirmActive})),setTimeout(()=>{t(e=>({...e,WeightTutorialActive:!e.WeightTutorialActive}))},500)},c=()=>{t(e=>({...e,ConfirmActive:!e.ConfirmActive})),setTimeout(()=>{t(e=>({...e,GlucoseTutorialActive:!e.GlucoseTutorialActive}))},500)},f=()=>{t(e=>({...e,ConfirmActive:!e.ConfirmActive})),setTimeout(()=>{t(e=>({...e,BloodTutorialActive:!e.BloodTutorialActive}))},500)},h=()=>{switch(r||s.Inertia.visit(route("login.create")),l){case"weight":n();break;case"glucose":n();break;case"blood":s.Inertia.visit(route("v2.home.index",{_query:{state:"glucose"}}));break;case"confirmation":s.Inertia.visit(route("v2.home.index",{_query:{state:"blood"}}));break}},v=()=>{switch(r||s.Inertia.visit(route("register.create")),l){case"weight":c();break;case"glucose":c();break;case"blood":f();break;case"confirmation":s.Inertia.visit(route("v2.home.index",{_query:{state:"finished"}}));break;case"finished":s.Inertia.visit(route("logout.attempt"));break}};return i.jsxs("div",{className:"h-auto w-full mt-8 "+(a?"":"hidden"),children:[i.jsx("div",{className:"w-full",children:i.jsx("h6",{className:"text-4xl text-black text-center font-semibold",children:"Anjungan Kesehatan Mandiri"})}),i.jsx("div",{className:"w-full px-12 mt-8",children:x??o}),i.jsx("div",{className:"w-full px-12 mt-8",children:i.jsx("article",{className:"text-center flex flex-col gap-3",children:i.jsx("h4",{className:"text-4xl",children:u})})}),i.jsx("div",{className:"mx-auto mt-8",children:i.jsxs("div",{className:"w-full flex flex-row justify-center gap-4",children:[l!="finished"?i.jsx(b,{onClick:h,className:"text-3xl",text:m}):"",i.jsx(g,{onClick:v,className:"text-3xl",text:d})]})})]})}export{w as default};
