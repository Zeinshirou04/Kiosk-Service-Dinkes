import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import InputError from "@/Components/InputError";

export default function Glucose({ isActive, className, error }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: undefined,
        no_hp: undefined,
        code: undefined,
        glucose: undefined,
        dev_id: "",
    });

    const fetchData = async () => {
        try {
            const response = await axios.get(
                route("device.show", {
                    device: "eec58e5e-cd44-319f-a1be-46dd38c5d01c",
                })
            );
            const temp = response.data.data;
            setData((data) => ({
                ...data,
                glucose: temp.gula,
                dev_id: temp.dev_id,
            }));
            // console.log(temp.gula);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (!isActive) return;
        const intervalId = setInterval(() => {
            console.log("Fetching data...");
            fetchData();
        }, 2000);

        return () => clearInterval(intervalId);
    }, [isActive]);

    const handleValueChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setData((data) => ({
            ...data,
            key: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("glucose.store"));
    };

    if (error != undefined) console.log(error);

    return (
        <div
            className={
                "w-full h-auto " + (isActive ? "" : " hidden ") + className
            }
        >
            <div className="w-full">
                <h6 className="text-4xl text-black text-center font-semibold">
                    Pemeriksaan Glukosa
                </h6>
            </div>
            {/* <div className="w-full border-b-2 border-black py-4"></div> */}
            <form
                className="w-full h-auto px-8 pt-12 pb-12 grid grid-cols-3 gap-7"
                onSubmit={handleFormSubmit}
            >
                <div className="flex flex-col col-span-3 gap-3">
                    <label htmlFor="nik" className="text-3xl">
                        Nomor Induk Kependudukan
                    </label>
                    <input
                        required={true}
                        type="number"
                        name="nik"
                        id="nik"
                        minLength={16}
                        className="text-3xl rounded-md"
                        value={data.nik}
                        onChange={(e) => setData("nik", e.target.value)}
                    />
                    <InputError message={errors.nik} />
                </div>
                <div className="flex flex-col col-span-2 gap-3">
                    <label htmlFor="no_hp" className="text-3xl">
                        Nomor Handphone
                    </label>
                    <input
                        required={true}
                        type="number"
                        name="no_hp"
                        id="no_hp"
                        className="text-3xl rounded-md"
                        value={data.no_hp}
                        onChange={(e) => setData("no_hp", e.target.value)}
                    />
                    <InputError message={errors.no_hp} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="code" className="text-3xl">
                        Kode
                    </label>
                    <input
                        required={true}
                        type="number"
                        name="code"
                        id="code"
                        className="text-3xl rounded-md"
                        value={data.code}
                        onChange={(e) => setData("code", e.target.value)}
                    />

                    <InputError message={errors.code} />
                </div>
                <div className="flex flex-col col-span-2 gap-3">
                    <label htmlFor="glucose" className="text-3xl">
                        Glukosa
                    </label>
                    <input
                        required={true}
                        maxLength={5}
                        type="number"
                        name="glucose"
                        id="glucose"
                        className="text-3xl rounded-md"
                        value={data.glucose}
                    />
                    <InputError message={errors.glucose} />
                </div>
                <div></div>
                <div className="flex flex-col gap-3">
                    <input
                        className="px-4 py-3 bg-gradient-to-tr from-green-500/80 via-green-500 to-green-500/70 hover:from-green-600/80 hover:via-green-600 hover:to-green-600/70 focus:from-green-700/80 focus:via-green-700 focus:to-green-700/70 active:from-green-700/80 active:via-green-700 active:to-green-700/70 rounded-lg text-white text-3xl"
                        type="submit"
                        value="Simpan"
                    />
                </div>
            </form>
        </div>
    );
}
