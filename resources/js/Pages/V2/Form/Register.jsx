import Guest from "@/Layouts/V2/GuestLayout";
import PrimaryButton from "@/Components/V2/PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function Register({}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: undefined,
        nama_pasien: undefined,
        jenis_kelamin: "L",
        tgl_lahir: undefined,
        kecamatan: undefined,
        kelurahan: undefined,
        kabkota: undefined,
        alamat: undefined,
        no_hp: undefined,
        kode: undefined,
    });

    const prevPage = "/v2";
    console.log(errors.match);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("register.store"));
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
                    <section className="w-full grid grid-rows-2 gap-4 mb-4">
                        <header className="w-full">
                            <h2 className="text-6xl font-extrabold">Daftar</h2>
                        </header>
                        <caption className="w-full">
                            <p className="text-xl italic text-gray-700 text-left border-b-2 border-black pb-1">
                                Isikan NIK, No WA, dan Informasi yang Diperlukan{" "}
                                <strong>Sesuai KTP</strong> untuk Mendaftar
                            </p>
                        </caption>
                    </section>
                    <section className="w-full">
                        <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
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
                                minLength={16}
                                maxLength={16}
                                placeholder="Contoh: 357601********03"
                                value={data.nik}
                                onChange={(e) => {
                                    setData("nik", e.target.value);
                                }}
                            />
                            <label
                                htmlFor="nama_pasien"
                                className="col-span-6 text-xl font-bold"
                            >
                                Nama Lengkap
                            </label>
                            <input
                                className="col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="text"
                                name="nama_pasien"
                                id="nama_pasien"
                                placeholder="Contoh: Ahmad Yani"
                                value={data.nama_pasien}
                                onChange={(e) => {
                                    setData("nama_pasien", e.target.value);
                                }}
                            />
                            <label
                                htmlFor="tgl_lahir"
                                className="col-span-4 text-xl font-bold"
                            >
                                Tanggal Lahir
                            </label>
                            <label
                                htmlFor="jenis_kelamin"
                                className="col-span-2 text-xl font-bold"
                            >
                                Kelamin
                            </label>
                            <input
                                className="col-span-4 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="date"
                                name="tgl_lahir"
                                id="tgl_lahir"
                                placeholder="12/02/2004"
                                value={data.tgl_lahir}
                                onChange={(e) => {
                                    setData("tgl_lahir", e.target.value);
                                }}
                            />
                            <select
                                className="col-span-2 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                name="jenis_kelamin"
                                id="jenis_kelamin"
                                value={data.jenis_kelamin}
                                onChange={(e) => {
                                    setData("jenis_kelamin", e.target.value);
                                }}
                            >
                                <option value="L">Laki-Laki</option>
                                <option value="P">Perempuan</option>
                            </select>
                            <label
                                htmlFor="alamat"
                                className="col-span-6 text-xl font-bold"
                            >
                                Alamat
                            </label>
                            <div className="col-span-6 grid grid-cols-6 gap-2">
                                <input
                                    className="col-span-6 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    type="text"
                                    name="alamat"
                                    id="alamat"
                                    placeholder="Contoh: Jl. Imam Bonjol No. 30"
                                    value={data.alamat}
                                    onChange={(e) => {
                                        setData("alamat", e.target.value);
                                    }}
                                />
                                <p className="col-span-6 text-md text-red-500 italic">
                                    *Alamat hanya berisikan Jalan, Nomor Rumah
                                    ataupun RT RW tanpa Kelurahan hingga
                                    Provinsi
                                </p>
                            </div>
                            <label
                                htmlFor="kecamatan"
                                className="col-span-3 text-xl font-bold"
                            >
                                Kecamatan
                            </label>
                            <label
                                htmlFor="kelurahan"
                                className="col-span-3 text-xl font-bold"
                            >
                                Kelurahan/Desa
                            </label>
                            <input
                                className="col-span-3 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="text"
                                name="kecamatan"
                                id="kecamatan"
                                placeholder="Contoh: Kendal"
                                value={data.kecamatan}
                                onChange={(e) => {
                                    setData('kecamatan', e.target.value)
                                }}
                            />
                            <input
                                className="col-span-3 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="text"
                                name="kelurahan"
                                id="kelurahan"
                                placeholder="Contoh: Tembalang"
                                value={data.kelurahan}
                                onChange={(e) => {
                                    setData('kelurahan', e.target.value)
                                }}
                            />
                            <label
                                htmlFor="kabkota"
                                className="col-span-3 text-xl font-bold"
                            >
                                Kab/Kota
                            </label>
                            <label
                                htmlFor="no_hp"
                                className="col-span-3 text-xl font-bold"
                            >
                                No Whatsapp (WA)
                            </label>
                            <input
                                className="col-span-3 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="text"
                                name="kabkota"
                                id="kabkota"
                                placeholder="Contoh: Semarang Tengah"
                                value={data.kabkota}
                                onChange={(e) => {
                                    setData('kabkota', e.target.value)
                                }}
                            />
                            <input
                                className="col-span-3 border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                type="number"
                                name="no_hp"
                                id="no_hp"
                                placeholder="Contoh: 0812****1998"
                                value={data.no_hp}
                                onChange={(e) => {
                                    setData('no_hp', e.target.value)
                                }}
                            />
                            <PrimaryButton
                                className="col-span-2"
                                text={"Daftar"}
                            />
                        </form>
                    </section>
                </div>
            </section>
        </Guest>
    );
}
