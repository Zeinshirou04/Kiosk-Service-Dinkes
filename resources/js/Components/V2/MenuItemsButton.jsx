export default function Menu({ className, title, icon, onClick, disabled = false }) {
    return (
        <button
            className={
                "h-36 bg-gradient-to-tr rounded-md transition duration-150 flex flex-row items-center justify-between px-8 gap-2 " +
                (className ??
                    "from-green-500/80 via-green-500 to-green-500/70 hover:from-green-600/80 hover:via-green-600 hover:to-green-600/70 focus:from-green-700/80 focus:via-green-700 focus:to-green-700/70 active:from-green-700/80 active:via-green-700 active:to-green-700/70") + (disabled ? " !from-gray-500 !via-gray-600 !to-gray-500" : "")
            }
            onClick={onClick}
            disabled={disabled}
        >
            <p className="font-bold text-white text-2xl text-left">{title}</p>
            <i
                className={
                    "fa-solid text-6xl text-white " + (icon ?? "fa-question")
                }
            ></i>
        </button>
    );
}
