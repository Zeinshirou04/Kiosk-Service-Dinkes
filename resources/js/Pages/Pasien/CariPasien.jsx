import { Head, useForm } from "@inertiajs/react";
import NavAside from "@/Components/AsideMenu";

export default function CariPasien() {

    const { data, setData, post, processing, errors, reset } = useForm({
        nik: null
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();

        post(route('pasien.encrypt'))
    }

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
                        <header>
                            <h3 className="text-4xl font-bold text-center">
                                Masukkan NIK Anda
                            </h3>
                        </header>
                        <form className="w-full mt-12" onSubmit={handleSubmitForm}>
                            <div className="w-full flex flex-col items-center gap-8">
                                <div className="w-3/4">
                                    <input
                                        required="true"
                                        value={data.nik}
                                        onChange={(e) =>
                                            setData("nik", e.target.value)
                                        }
                                        type="number"
                                        name="nik"
                                        maxLength="16"
                                        placeholder="Masukkan NIK Anda..."
                                        style={{
                                            appearance: "textfield",
                                        }}
                                        className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                    />
                                </div>
                                <div className="w-1/5">
                                    <input className="bg-[#388E3C]/70 px-4 py-3 text-lg font-bold rounded-xl hover:cursor-pointer hover:bg-[#388E3C]/80 focus:bg-[#388E3C]/90" type="submit" value="Lanjut" />
                                </div>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        </section>
    );
}
