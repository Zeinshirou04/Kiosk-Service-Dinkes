import{j as d,r as o}from"./app-CsaZ7IXi.js";function c({message:r,className:t="",...e}){return r?d.jsx("p",{...e,className:"text-sm text-red-600 dark:text-red-400 "+t,children:r}):null}const f=o.forwardRef(function({type:t="text",className:e="",isFocused:a=!1,...u},n){const s=n||o.useRef();return o.useEffect(()=>{a&&s.current.focus()},[]),d.jsx("input",{...u,type:t,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "+e,ref:s})});export{c as I,f as T};
