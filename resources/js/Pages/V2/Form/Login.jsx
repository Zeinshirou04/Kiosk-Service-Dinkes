import Guest from "@/Layouts/V2/GuestLayout";
import PrimaryButton from "@/Components/V2/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: null,
        no_hp: null,
        kode: undefined,
    });

    const prevPage = "/v2";

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("login.attempt"));
    };

    return (
        <Guest
            className="flex flex-col justify-center items-center"
            title="Anjungan Kesehatan Mandiri"
        >
            <section className="w-1/2 flex flex-col justify-start px-2 py-2 gap-4">
                <div className="w-min">
                    <a href={prevPage} className="flex flex-row gap-4">
                        <i class="fa-solid fa-arrow-left text-black text-4xl"></i>
                        <p className="text-4xl font-bold">Kembali</p>
                    </a>
                </div>
                <div className="w-full border-4 border-green-400 rounded-2xl overflow-hidden px-8 py-8 grid grid-flow-row">
                    <section className="w-full grid grid-rows-2 gap-3">
                        <header className="w-full">
                            <h2 className="text-6xl font-extrabold">Masuk</h2>
                        </header>
                        <caption className="w-full">
                            <p className="text-xl italic text-gray-700 text-left border-b-2 border-black pb-1">
                                Isikan NIK, No WA, dan kode OTP untuk Masuk
                            </p>
                            {errors.match && (
                                <p className="text-xl italic text-red-500 text-left pt-1 pb-2">
                                    {errors.match}
                                </p>
                            )}
                        </caption>
                    </section>
                    <section className="w-full">
                        <form
                            className="grid grid-cols-6 gap-4"
                            onSubmit={handleSubmit}
                        >
                            <label
                                htmlFor="nik"
                                className="col-span-6 text-xl font-bold"
                            >
                                Nomor Induk Kependudukan
                            </label>
                            <input
                                className="col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="number"
                                name="nik"
                                id="nik"
                                value={data.nik}
                                onChange={updateData}
                                placeholder="Contoh: 357601********03"
                                required
                            />
                            <InputError
                                className="col-span-6"
                                message={errors.nik ? errors.nik : errors.match}
                            />
                            <label
                                htmlFor="no_hp"
                                className="col-span-6 text-xl font-bold"
                            >
                                Nomor WhatsApp (WA)
                            </label>
                            <input
                                className="col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="number"
                                name="no_hp"
                                id="no_hp"
                                value={data.no_hp}
                                onChange={updateData}
                                placeholder="Contoh: 0812****1998"
                                required
                            />
                            <InputError
                                className="col-span-6"
                                message={errors.no_hp ? errors.no_hp : errors.match}
                            />
                            <label
                                htmlFor="nik"
                                className="col-span-6 text-xl font-bold"
                            >
                                Kode OTP
                            </label>
                            <input
                                className="col-span-2 border-2 border-green-400 rounded-xl text-xl bg-gray-200 tex"
                                type="number"
                                maxLength="6"
                                name="kode"
                                id="kode"
                                value={data.kode}
                                onChange={updateData}
                                placeholder="Contoh: 123456"
                            />
                            <div className="col-span-4"></div>
                            <PrimaryButton
                                className="col-span-2"
                                text={"Masuk"}
                            />
                        </form>
                    </section>
                </div>
            </section>
        </Guest>
    );
}
