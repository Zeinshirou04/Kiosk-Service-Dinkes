import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";

export default function WeightMeasure({
    isActive,
    setActive,
    state = "none",
    nik,
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: nik,
        berat: undefined,
        tinggi: undefined,
        bmi: undefined,
        kategori: "Tidak Terdefinisi",
        dev_id: undefined,
    });

    const handleBmi = (bmi) => {
        if (bmi < 17) return "Sangat Kurus";
        if (bmi < 18.5) return "Kurus";
        if (bmi <= 25) return "Normal";
        if (bmi <= 27) return "Gemuk";
        if (bmi > 27) return "Obesitas";
        return "Tidak Terdefinisi";
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(
                route("device.show", {
                    device: "eec58e5e-cd44-319f-a1be-46dd38c5d01c",
                })
            );
            const temp = response.data.data;
            let bmi = (temp.berat / Math.pow(temp.tinggi / 100, 2)).toFixed(1);
            setData((data) => ({
                ...data,
                berat: temp.berat,
                tinggi: temp.tinggi,
                bmi: bmi,
                kategori: handleBmi(bmi),
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
        }, 3000);

        return () => clearInterval(intervalId);
    }, [isActive]);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("weight.store"));
    };

    return (
        <div
            className={
                "absolute h-full w-full top-0 bg-black/30 transition-all ease-in-out duration-100 " +
                (isActive ? " left-0" : "left-full")
            }
        >
            <div className="w-full h-full relative">
                <div className="absolute pb-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-auto w-3/5 rounded-md shadow-lg shadow-gray-500">
                    <button
                        className="absolute right-0 mr-8 mt-8"
                        onClick={() => {
                            setActive((prevState) => ({
                                ...prevState,
                                WeightMeasureActive:
                                    !prevState.WeightMeasureActive,
                            }));
                        }}
                    >
                        <i className="fa-solid fa-x text-4xl"></i>
                    </button>
                    <div
                        className={
                            "h-auto w-full mt-8 " + (isActive ? "" : "hidden")
                        }
                    >
                        <div className="w-full">
                            <h6 className="text-4xl text-black text-center font-semibold">
                                Anjungan Kesehatan Mandiri
                            </h6>
                        </div>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="w-full grid grid-cols-3 grid-rows-2 px-12 mt-8 gap-8">
                                <div className="col-span-3 grid grid-rows-2 grid-cols-3">
                                    <label
                                        htmlFor="nik"
                                        className="text-4xl col-span-3"
                                    >
                                        Tinggi Badan Anda
                                    </label>
                                    <div className="col-span-3">
                                        <input
                                            required={true}
                                            type="number"
                                            name="tinggi"
                                            id="tinggi"
                                            minLength={16}
                                            value={data.tinggi}
                                            onChange={(e) =>
                                                setData(
                                                    "tinggi",
                                                    e.target.value
                                                )
                                            }
                                            className="text-4xl rounded-lg w-full border border-green-500"
                                        />
                                        <InputError />
                                    </div>
                                </div>
                                <div className="col-span-3 grid grid-rows-2 grid-cols-3">
                                    <label
                                        htmlFor="nik"
                                        className="text-4xl col-span-3"
                                    >
                                        Berat Badan Anda
                                    </label>
                                    <div className="col-span-3">
                                        <input
                                            required={true}
                                            type="number"
                                            name="berat"
                                            id="berat"
                                            minLength={16}
                                            value={data.berat}
                                            onChange={(e) =>
                                                setData("berat", e.target.value)
                                            }
                                            className="text-4xl rounded-lg w-full border border-green-500"
                                        />
                                        <InputError />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 px-12 flex flex-row gap-6">
                                <div className="flex flex-row">
                                    <p className="text-3xl">
                                        <strong>BMI:</strong> {data.bmi}
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-3xl">
                                        <strong>Kategori:</strong>
                                        {" " + data.kategori}
                                    </p>
                                </div>
                            </div>
                            <div className="px-12 mt-8 w-full grid grid-cols-4">
                                <div className="w-full col-span-4">
                                    <input
                                        className="bg-green-500 px-6 py-3 rounded-xl text-white text-4xl w-full"
                                        type="submit"
                                        value="Simpan dan Lanjutkan"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
