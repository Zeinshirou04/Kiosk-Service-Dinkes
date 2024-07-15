import { Head, useForm } from "@inertiajs/react";
import NavAside from "@/Components/AsideMenu";

export default function CariPasien({ active, setActive }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: null,
        no_hp: null,
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();

        post(route("pasien.encrypt"));
    };

    return (
        <section
            id="wrapper"
            className={"w-svw h-svh absolute " + (active ? "block" : "hidden")}
        >
            <div
                id="menuWrapper"
                className="w-full h-full mx-auto flex flex-row relative justify-center items-center"
                style={{
                    maxWidth: "1080px",
                    maxHeight: "1920px",
                }}
            >
                <div
                    className="w-full h-full bg-black/20 absolute z-0"
                    onClick={() => setActive((previousState) => !previousState)}
                ></div>
                <section id="menuPasien" className="h-40 w-1/2 z-10">
                    <form className="w-full" onSubmit={handleSubmitForm}>
                        <div className="w-full flex flex-col gap-4 px-12 py-12 bg-white border-green-400 border-4 rounded-xl">
                            <div className="w-full flex flex-col gap-2">
                                <label
                                    htmlFor="nik"
                                    className="text-xl font-bold"
                                >
                                    Nomor Induk Kependudukan
                                </label>
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
                                    className="bg-[#388E3C]/20 border-green-500 border-2 w-full rounded-md"
                                />
                            </div>
                            <div className="w-full flex flex-row gap-6">
                                <div className="w-4/6 flex flex-col gap-2">
                                    <label
                                        htmlFor="nik"
                                        className="text-xl font-bold"
                                    >
                                        No. Handphone
                                    </label>
                                    <input
                                        // required="true"
                                        value={data.no_hp}
                                        onChange={(e) =>
                                            setData("nik", e.target.value)
                                        }
                                        type="number"
                                        name="contact"
                                        maxLength="16"
                                        placeholder="Masukkan Nomor HP Anda..."
                                        style={{
                                            appearance: "textfield",
                                        }}
                                        className="bg-[#388E3C]/20 border-green-500 border-2 w-full rounded-md placeholder:text-sm"
                                    />
                                </div>
                                <div className="w-2/6 flex flex-col gap-2">
                                    <label
                                        htmlFor="nik"
                                        className="text-xl font-bold"
                                    >
                                        Kode
                                    </label>
                                    <input
                                        // required="true"
                                        value={data.no_hp}
                                        onChange={(e) =>
                                            setData("nik", e.target.value)
                                        }
                                        type="number"
                                        name="contact"
                                        maxLength="16"
                                        placeholder="Masukkan Kode..."
                                        style={{
                                            appearance: "textfield",
                                        }}
                                        className="bg-[#388E3C]/20 border-green-500 border-2 w-full rounded-md placeholder:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="w-1/5">
                                <input
                                    className="bg-green-500 px-4 py-3 text-lg font-bold rounded-xl hover:cursor-pointer hover:bg-green-500  /80 focus:bg-green-500    /90"
                                    type="submit"
                                    value="Lanjut"
                                />
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
}
