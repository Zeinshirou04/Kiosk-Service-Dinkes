import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Tensi({ nik, active, setActive }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: 0,
        b_atas: 0,
        b_bawah: 0,
        denyut: 0,
        dev_id: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    route("tension.show", {
                        tension: "fe5110fa-4b69-3c21-acfa-4c5830af6b10",
                    })
                );
                const temp = response.data.data;
                setData({
                    nik: nik,
                    b_atas: temp.b_atas,
                    b_bawah: temp.b_bawah,
                    denyut: temp.denyut,
                    dev_id: temp.dev_id,
                });
                // console.log(temp.gula);
            } catch (err) {
                console.error(err);
            }
        };

        setInterval(() => {
            fetchData();
        }, 2000);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        post(route("pengukuran.store"));
    };

    // console.log(data);

    return (
        <div
            className={
                "w-full h-full absolute duration-150 ease-in-out " +
                (active ? "block" : "hidden")
            }
        >
            <div className="w-full h-full flex flex-row justify-center items-center relative">
                <div
                    onClick={() => {
                        setActive((previousState) => !previousState);
                    }}
                    className="w-full h-full bg-black/30 absolute"
                />
                <div className="w-1/3 h-auto bg-white px-6 py-4 rounded-md z-10">
                    <h1 className="text-3xl font-bold">Pengukuran</h1>
                    <form className="mt-4" onSubmit={handleFormSubmit}>
                        <div className="flex flex-col gap-2 py-2">
                            <label className="text-lg" htmlFor="b_atas">
                                Sistole
                            </label>
                            <input
                                className="bg-[#388E3C]/30 border-0 rounded-md w-full"
                                type="number"
                                value={data.b_atas}
                                name="b_atas"
                                style={{
                                    appearance: "textfield",
                                }}
                            />
                        </div>
                        <div className="flex flex-col gap-2 py-2">
                            <label className="text-lg" htmlFor="b_bawah">
                                Diastole
                            </label>
                            <input
                                className="bg-[#388E3C]/30 border-0 rounded-md w-full"
                                type="number"
                                value={data.b_bawah}
                                name="b_bawah"
                                style={{
                                    appearance: "textfield",
                                }}
                            />
                        </div>
                        <div className="flex flex-col gap-2 py-2">
                            <label className="text-lg" htmlFor="denyut">
                                Tekanan Darah
                            </label>
                            <input
                                className="bg-[#388E3C]/30 border-0 rounded-md w-full"
                                type="number"
                                value={data.denyut}
                                name="denyut"
                                style={{
                                    appearance: "textfield",
                                }}
                            />
                        </div>
                        <div className="py-2">
                            <input
                                onClick={() => {
                                    setActive(
                                        (previousState) => !previousState
                                    );
                                }}
                                className="px-4 py-3 bg-[#388E3C]/80 rounded-lg text-white"
                                type="submit"
                                value="Simpan"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
