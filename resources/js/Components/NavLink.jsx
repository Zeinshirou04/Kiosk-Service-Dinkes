import { Link } from "@inertiajs/react";

export default function NavLink({ active = false, className = "", children, ...props }) {
    return (
        <Link className="w-full" {...props}>
            <button
                className={
                    "w-full py-5 px-6 duration-150 rounded-xl " +
                    className  + (active ? " bg-[#DDEEDF]/60" : " bg-[#DDEEDF] hover:bg-[#DDEEDF]/90 focus:bg-[#DDEEDF]")
                }
            >
                {children}
            </button>
        </Link>
    );
}
