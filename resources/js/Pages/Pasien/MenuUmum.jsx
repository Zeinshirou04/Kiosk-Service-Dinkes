import { Head, Link } from "@inertiajs/react";
import NavAside from "@/Components/AsideMenu";

export default function Umum({}) {
    return (
        <section id="wrapper" className="w-svw h-svh">
            <Head title="Pasien Umum" />
            <div
                id="menuWrapper"
                className="w-full h-full bg-[#F2F9F1] mx-auto flex flex-row"
                style={{
                    maxWidth: "1080px",
                    maxHeight: "1920px",
                }}
            >
                <NavAside />
                <main className="w-4/6 h-full px-8 py-12 flex flex-col gap-16">
                    <header className="px-2 py-2 max-h-32 h-full">
                        <h1 className="font-extrabold text-6xl text-center text-[#388E3C]">
                            Anjungan Kesehatan Mandiri
                        </h1>
                    </header>
                    <section id="menuPasien" className="h-full w-3/4 mx-auto">
                        <header className="w-full mx-auto">
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
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}
