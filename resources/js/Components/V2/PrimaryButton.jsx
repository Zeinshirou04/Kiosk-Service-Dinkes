export default function PrimaryButton({className, text = '', ...props}) {
    return(
        <button {...props} className={"bg-green-500 px-6 py-3 rounded-xl text-white " + className}>
            {text}
        </button>
    );
}
