export default function DangerButton({className, text = '', ...props}) {
    return(
        <button {...props} className={"bg-red-500 px-6 py-3 rounded-xl text-white " + className}>
            {text}
        </button>
    );
}
