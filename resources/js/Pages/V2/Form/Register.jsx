import Guest from "@/Layouts/V2/GuestLayout";
import PrimaryButton from "@/Components/V2/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Register({ kabkota, kecamatan, kelurahan, provinsi }) {

    const [prov, setProv] = useState('')
    const [kota, setKota] = useState('')
    const [kec, setKec] = useState('')
    const [kel, setKel] = useState('')

    const [loading, setLoading] = useState(false)

    const [provinsiPilihan, setProvinsiPilihan] = useState("0")
    const [kotaPilihan, setKotaPilihan] = useState()
    const [kecamatanPilihan, setKecamatanPilihan] = useState()
    const [kelurahaPilihan, setKelurahanPilihan] = useState()

    const { data, setData, post, processing, errors, reset } = useForm({
        nik: null,
        nama_pasien: '',
        jenis_kelamin: "L",
        tgl_lahir: '',
        kecamatan: '',
        kelurahan: '',
        kabkota: '',
        alamat: '',
        no_hp: null,
    });

    const prevPage = "/v2";

    const changeData = (e) => {
        setData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const getKota = (chosen) => {
        const kotaRaw = []
        kabkota.forEach(element => {
            if (element.kode_parent == chosen) {
                kotaRaw.push(element)
            }
        })
        setKota(kotaRaw)
    }

    const getKecamatan = (chosen) => {
        const kotaRaw = []
        kecamatan.forEach(element => {
            if (element.kode_parent == chosen) {
                kotaRaw.push(element)
            }
        })
        setKec(kotaRaw)
    }

    const getKelurahan = (chosen) => {
        const kotaRaw = []
        kelurahan.forEach(element => {
            if (element.kode_parent == chosen) {
                kotaRaw.push(element)
            }
        })
        setKel(kotaRaw)
    }

    useEffect(() => {
        const selectedProvinsi = provinsi.find((prov) => prov.nama === 'Jawa Tengah');
        if (selectedProvinsi) {
            setProvinsiPilihan(selectedProvinsi.kode_provinsi);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("register.store"));
        setLoading(false);
    };

    return (
        <Guest
            className="flex flex-col justify-center items-center"
            title="Anjungan Kesehatan Mandiri"
        >
            <section className="w-1/2 flex flex-col justify-start px-2 py-2 gap-4">
                <div className="w-min">
                    <a href={prevPage} className="flex flex-row gap-4">
                        <i className="fa-solid fa-arrow-left text-black text-4xl"></i>
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
                            {errors.exception && (
                                <p className="text-xl italic text-red-500 text-left pt-1 pb-2">
                                    {errors.exception}
                                </p>
                            )}
                        </caption>
                    </section>
                    <section className="w-full">
                        <form
                            className="grid grid-cols-6 gap-2"
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
                                minLength={16}
                                maxLength={16}
                                placeholder="Contoh: 357601********03"
                                value={data.nik}
                                onChange={changeData}
                            />
                            <InputError
                                className="col-span-6"
                                message={errors.nik ? errors.nik : errors.match}
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
                                onChange={changeData}
                            />
                            <InputError
                                className="col-span-6"
                                message={errors.nama_pasien}
                            />
                            <div className="col-span-4 flex flex-col gap-2">
                                <label
                                    htmlFor="tgl_lahir"
                                    className="w-full text-xl font-bold"
                                >
                                    Tanggal Lahir
                                </label>
                                <input
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    type="date"
                                    name="tgl_lahir"
                                    id="tgl_lahir"
                                    placeholder="12/02/2004"
                                    value={data.tgl_lahir}
                                    onChange={changeData}
                                />

                                <InputError
                                    className="w-full"
                                    message={errors.tgl_lahir}
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <label
                                    htmlFor="jenis_kelamin"
                                    className="w-full text-xl font-bold"
                                >
                                    Kelamin
                                </label>
                                <select
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    name="jenis_kelamin"
                                    id="jenis_kelamin"
                                    value={data.jenis_kelamin}
                                    onChange={changeData}
                                >
                                    <option value="L">Laki-Laki</option>
                                    <option value="P">Perempuan</option>
                                </select>
                                <InputError
                                    className="w-full"
                                    message={errors.jenis_kelamin}
                                />
                            </div>
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
                                    onChange={changeData}
                                />
                                <p className="col-span-6 text-md text-red-500 italic">
                                    *Alamat hanya berisikan Jalan, Nomor Rumah
                                    ataupun RT RW tanpa Kelurahan hingga
                                    Provinsi
                                </p>
                            </div>
                            <div className="col-span-3 flex flex-col gap-2">
                                <label
                                    htmlFor="provinsi"
                                    className="w-full text-xl font-bold"
                                >
                                    Provinsi
                                </label>
                                <select
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    name="provinsi"
                                    id="provinsi"
                                >
                                    {provinsi.map((docs) => (
                                        docs.nama == 'Jawa Tengah' ? <option value={docs.kode_provinsi} key={docs.kode_provinsi}>{docs.nama}</option> : null
                                    ))}
                                </select>
                                <InputError
                                    className="w-full"
                                    message={errors.kabkota}
                                />
                            </div>
                            <div className="col-span-3 flex flex-col gap-2">
                                <label
                                    htmlFor="kabkota"
                                    className="w-full text-xl font-bold"
                                >
                                    Kab/Kota
                                </label>
                                <select
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    name="kabkota"
                                    id="kabkota"
                                    value={data.kabkota}
                                    onChange={(e) => {
                                        changeData(e);
                                    }}
                                    disabled={provinsiPilihan == "0"}
                                >
                                    <option value="">-- Pilih Kota --</option>
                                    {kabkota.map((docs) => (
                                        docs.kode_parent == provinsiPilihan ? <option value={docs.kode_kota_kab} key={docs.kode_kota_kab}>{docs.nama}</option> : null
                                    ))}
                                </select>
                                <InputError
                                    className="w-full"
                                    message={errors.kabkota}
                                />
                            </div>
                            <div className="col-span-3 flex flex-col gap-2">
                                <label
                                    htmlFor="kecamatan"
                                    className="w-full text-xl font-bold"
                                >
                                    Kecamatan
                                </label>
                                <select
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    name="kecamatan"
                                    id="kecamatan"
                                    value={data.kecamatan}
                                    onChange={(e) => {
                                        changeData(e);
                                    }}
                                    disabled={data.kabkota == ''}
                                >
                                    <option value="">-- Pilih Kecamatan --</option>
                                    {kecamatan.map((docs) => (
                                        docs.kode_parent == data.kabkota ? <option value={docs.kode_kecamatan} key={docs.kode_kecamatan}>{docs.nama}</option> : null
                                    ))}
                                </select>
                                <InputError
                                    className="w-full"
                                    message={errors.kecamatan}
                                />
                            </div>
                            <div className="col-span-3 flex flex-col gap-2">
                                <label
                                    htmlFor="kelurahan"
                                    className="w-full text-xl font-bold"
                                >
                                    Kelurahan/Desa
                                </label>
                                <select
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    name="kelurahan"
                                    id="kelurahan"
                                    value={data.kelurahan}
                                    onChange={(e) => {
                                        changeData(e, e.target.value);
                                        setData((prevData) => ({
                                            ...prevData,
                                            kelurahan: e.target.value,
                                        }));
                                    }}
                                    disabled={data.kecamatan == ''}
                                >
                                    <option value="">-- Pilih kelurahan --</option>
                                    {kelurahan.map((docs) => (
                                        docs.kode_parent == data.kecamatan ? <option value={docs.kode_kelurahan} key={docs.kode_kelurahan}>{docs.nama}</option> : null
                                    ))}
                                </select>
                                {/* <input type="text"
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    name="kelurahan"
                                    id="kelurahan"
                                    value={data.kelurahan}
                                    onChange={(e) => {
                                        changeData(e);
                                    }}
                                    disabled={!kecamatan || kecamatan.length === 0}
                                /> */}
                                {/* <option value="">-- Pilih kelurahan --</option>
                                    {kel?.map((docs) => (
                                        <option value={docs.kode_kelurahan} key={docs.kode_kelurahan}>{docs.nama}</option>
                                    ))} */}
                                <InputError
                                    className="w-full"
                                    message={errors.kelurahan}
                                />
                            </div>

                            <div className="col-span-3 flex flex-col gap-2">
                                <label
                                    htmlFor="no_hp"
                                    className="w-full text-xl font-bold"
                                >
                                    No Whatsapp (WA)
                                </label>
                                <input
                                    className="w-full border-2 border-green-400 rounded-xl text-xl bg-gray-200"
                                    type="number"
                                    name="no_hp"
                                    id="no_hp"
                                    placeholder="Contoh: 0812****1998"
                                    value={data.no_hp}
                                    onChange={changeData}
                                />
                                <InputError
                                    className="w-full"
                                    message={errors.no_hp}
                                />
                            </div>
                            <PrimaryButton
                                className="col-span-2"
                                text={"Daftar"}
                                onClick={() => {
                                    setLoading(true)
                                }}
                            />
                        </form>
                    </section>
                </div>
                {loading ? (
                    <div className='fixed flex justify-center items-center inset-0 z-50 bg-black/50 min-h-screen w-full'>
                        <div className="w-40 rounded-full animate-spin aspect-square border-4 border-white"></div>
                    </div>
                ) : (null)}
            </section>
        </Guest>
    );
}
