import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";

export default function GlucoseMeasure({
    state = "none",
    isActive,
    setActive,
    nik
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: nik,
        glucose: undefined,
        kategori: undefined,
        dev_id: undefined,
    });

    const handleGlucose = (glucose) => {
        if (glucose < 200) return "Normal";
        if (glucose >= 200) return "Diabetes";
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
            setData((data) => ({
                ...data,
                glucose: temp.gula,
                kategori: handleGlucose(temp.gula),
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

        post(route("glucose.store"));
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
                            <div className="w-full grid grid-cols-3 px-12 mt-8 gap-8">
                                <div className="col-span-3 grid grid-rows-2 grid-cols-3">
                                    <label
                                        htmlFor="nik"
                                        className="text-4xl col-span-3"
                                    >
                                        Hasil Pengukuran Gula Darah
                                    </label>
                                    <div className="col-span-3">
                                        <input
                                            required={true}
                                            type="number"
                                            name="glucose"
                                            id="glucose"
                                            value={data.glucose}
                                            onChange={(e) =>
                                                setData(
                                                    "glucose",
                                                    e.target.value
                                                )
                                            }
                                            className="text-4xl rounded-lg w-full border border-green-500"
                                        />
                                        <InputError />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 px-12 flex flex-row gap-6">
                                <p className="text-3xl"><strong>Keterangan:</strong> {data.kategori}</p>
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
