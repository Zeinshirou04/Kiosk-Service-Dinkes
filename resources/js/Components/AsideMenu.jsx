import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";

export default function NavAside({}) {
    console.log(route().has('umum'));
    return (
        <aside id="subMenu" className="w-2/6 h-full bg-[#388E3C] px-8">
            <nav className="max-w-full h-full px-2 py-12">
                <div
                    id="navWrapper"
                    className="h-full flex flex-col gap-16 items-center"
                >
                    <div id="logo" className="max-h-32 h-full">
                        <Link href={route('menu.index')}>
                            <img
                                className="w-5/6 mx-auto"
                                src="/assets/img/logo/logo-dkk-white.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-6 h-full">
                        <NavLink
                            href={route("menu.umum")}
                            className="font-bold text-lg"
                            active={route().current("menu.umum") || route().current('pendaftaran.*') || route().current('pasien.*')}
                        >
                            Pasien Umum
                        </NavLink>
                        <NavLink
                            href={route("menu.bpjs")}
                            className="font-bold text-lg"
                            active={route().current("menu.bpjs")}
                        >
                            BPJS Kesehatan
                        </NavLink>
                        <NavLink
                            href={route("menu.asuransi")}
                            className="font-bold text-lg"
                            active={route().current("menu.asuransi")}
                        >
                            Asuransi Lain
                        </NavLink>
                        <NavLink
                            href={route("menu.lansia")}
                            className="font-bold text-lg"
                            active={route().current("menu.lansia")}
                        >
                            Pasien Lansia
                        </NavLink>
                    </div>
                </div>
            </nav>
        </aside>
    );
}
