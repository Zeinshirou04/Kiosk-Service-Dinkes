import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import NavAside from "@/Components/AsideMenu";
import CariPasien from "./CariPasien";

export default function Umum({}) {
    let disabled = true;
    
    const [searchPopup, setSearchPopup] = useState(false);
    return (
        <section id="wrapper" className="w-svw h-svh">
            <Head title="Pasien Umum" />
            <CariPasien active={searchPopup} setActive={setSearchPopup} />
            <div
                id="menuWrapper"
                className="w-full h-full bg-[#F2F9F1] mx-auto flex flex-row"
                style={{
                    maxWidth: "1080px",
                    maxHeight: "1920px",
                }}
            >
                <NavAside />
                <main className="w-4/6 h-full px-4 py-12 flex flex-col gap-16">
                    <header className="px-2 py-2 max-h-32 h-full">
                        <h1 className="font-extrabold text-6xl text-center text-[#46a84b]">
                            Anjungan Kesehatan Mandiri
                        </h1>
                    </header>
                    <section id="menuPasien" className="h-full w-full mx-auto">
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-auto mb-2">
                                <h1 className="text-3xl font-bold text-[#46a84b]">
                                    Menu Pasien Umum
                                </h1>
                            </div>
                            <div className="w-full flex flex-row gap-2">
                                <div className="px-4 w-1/3 h-20 bg-green-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-green-600 focus:bg-green-700/70 active:bg-green-700 duration-150" onClick={() => setSearchPopup((previousState) => !previousState)}>
                                    <i class="fa-solid fa-user fa-2xl text-white"></i>
                                    <div className="w-full font-bold text-white text-lg">
                                        Cek Informasi Kesehatan
                                    </div>
                                </div>
                                <Link
                                    href={route("pendaftaran.create")}
                                    className="w-1/3"
                                >
                                    <div className="px-4 w-full h-20 bg-green-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-green-600 focus:bg-green-700/70 active:bg-green-700 duration-150">
                                        <i class="fa-solid fa-user-plus fa-2xl text-white"></i>
                                        <div className="w-full font-bold text-white text-lg">
                                            Daftar Pasien Baru
                                        </div>
                                    </div>
                                </Link>
                                <div
                                    className={
                                        "px-4 w-1/3 h-20 bg-green-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-green-600 focus:bg-green-700/70 active:bg-green-700" +
                                        (disabled
                                            ? " !bg-gray-600/60 !cursor-not-allowed"
                                            : "")
                                    }
                                >
                                    <i
                                        class={
                                            "fa-solid fa-circle-exclamation fa-2xl text-white" +
                                            (disabled ? " !text-gray-200" : "")
                                        }
                                    ></i>
                                    <div
                                        className={
                                            "w-full font-bold text-white text-lg" +
                                            (disabled ? " !text-gray-200" : "")
                                        }
                                    >
                                        Fitur akan datang
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <header className="w-full mx-auto">
                            <h2 className="text-4xl font-semibold text-center">
                                Apakah anda sudah pernah mendaftar?
                            </h2>
                        </header>
                        <div className="w-full flex flex-row gap-12 justify-center items-center mt-8">
                            <Link href={route("pendaftaran.create")}>
                                <button className="px-8 py-4 bg-red-600 text-white rounded-xl text-xl">
                                    Belum
                                </button>
                            </Link>
                            <Link href={route("pasien.cari")}>
                                <button className="px-8 py-4 bg-green-600 text-white rounded-xl text-xl">
                                    Sudah
                                </button>
                            </Link>
                        </div> */}
                    </section>
                </main>
            </div>
        </section>
    );
}
