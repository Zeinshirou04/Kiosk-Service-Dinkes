import { Head } from "@inertiajs/react";
import NavAside from "@/Components/AsideMenu";
import Identitas from "@/Components/IdentitasPasien";

export default function PengukuranUmum() {
    return (
        <section id="wrapper" className="w-svw h-svh">
            <Head title="Anjungan Kios Mandiri" />
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
                    <section id="menuPasien" className="h-full w-full">
                        <Identitas  />
                    </section>
                </main>
            </div>
        </section>
    );
}