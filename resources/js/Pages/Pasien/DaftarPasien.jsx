import { Head, Link, useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import NavAside from "@/Components/AsideMenu";
import axios from "axios";
import InputError from "@/Components/InputError";

export default function DaftarPasien({ csrfToken, session }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: null,
        nama_pasien: "",
        tgl_lahir: "",
        tempat_lahir: "",
        alamat: "",
        no_hp: null,
        jenis_kelamin: "L",
        umur: null
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        post(route("pendaftaran.store"));
    };

    return (
        <section id="wrapper" className="w-svw h-svh">
            <Head title="Pasien Umum" />
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
                    <section id="menuPasien" className="h-full w-5/6 mx-auto">
                        <header className="w-full mx-auto">
                            <h2 className="text-4xl font-semibold text-center">
                                Silahkan isi form pendaftaran
                            </h2>
                        </header>
                        <div className="w-full flex flex-row gap-12 mt-8">
                            <form
                                className="w-full"
                                onSubmit={handleFormSubmit}
                            >
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="nik"
                                                    className="mr-4 font-bold"
                                                >
                                                    NIK
                                                </label>
                                            </td>
                                            <td colSpan={4}>
                                                <input
                                                    required="true"
                                                    value={data.nik}
                                                    onChange={(e) =>
                                                        setData(
                                                            "nik",
                                                            e.target.value
                                                        )
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
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="pb-4" colSpan={4}>
                                                <InputError
                                                    message={errors.nik}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="nama_pasien"
                                                    className="mr-4 font-bold"
                                                >
                                                    Nama
                                                </label>
                                            </td>
                                            <td colSpan={4} className="">
                                                <input
                                                    required="true"
                                                    value={data.nama_pasien}
                                                    onChange={(e) =>
                                                        setData(
                                                            "nama_pasien",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    name="nama_pasien"
                                                    placeholder="Masukkan Nama Lengkap Anda..."
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="pb-4" colSpan={4}>
                                                <InputError
                                                    message={errors.nama}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="tgl_lahir"
                                                    className="mr-4 font-bold"
                                                >
                                                    Tanggal Lahir
                                                </label>
                                            </td>
                                            <td className="pr-6">
                                                <input
                                                    required="true"
                                                    value={data.tgl_lahir}
                                                    onChange={(e) =>
                                                        setData(
                                                            "tgl_lahir",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="date"
                                                    name="tgl_lahir"
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="tempat_lahir"
                                                    className="mr-4 font-bold"
                                                >
                                                    Tempat Lahir
                                                </label>
                                            </td>
                                            <td colSpan={2}>
                                                <input
                                                    required="true"
                                                    value={data.tempat_lahir}
                                                    onChange={(e) =>
                                                        setData(
                                                            "tempat_lahir",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    name="tempat_lahir"
                                                    placeholder="Masukkan Tempat Lahir Anda..."
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="pb-4">
                                                <InputError
                                                    message={errors.tgl_lahir}
                                                />
                                            </td>
                                            <td></td>
                                            <td colSpan={2} className="pb-4">
                                                <InputError
                                                    message={errors.tempat_lahir}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="alamat"
                                                    className="mr-4 font-bold"
                                                >
                                                    Alamat
                                                </label>
                                            </td>
                                            <td colSpan={2} className="pr-6">
                                                <input
                                                    required="true"
                                                    value={data.alamat}
                                                    onChange={(e) =>
                                                        setData(
                                                            "alamat",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    name="alamat"
                                                    placeholder="Masukkan Alamat Anda..."
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="umur"
                                                    className="mr-4 font-bold"
                                                >
                                                    Umur
                                                </label>
                                            </td>
                                            <td className="">
                                                <input
                                                    required="true"
                                                    value={data.umur}
                                                    onChange={(e) =>
                                                        setData(
                                                            "umur",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="number"
                                                    name="umur"
                                                    placeholder="Masukkan umur Anda..."
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="pb-4" colSpan={2}>
                                                <InputError
                                                    message={errors.alamat}
                                                />
                                            </td>
                                            <td></td>
                                            <td className="pb-4">
                                                <InputError
                                                    message={errors.umur}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="no_hp"
                                                    className="mr-4 font-bold"
                                                >
                                                    No. HP
                                                </label>
                                            </td>
                                            <td className="pr-6" colSpan={2}>
                                                <input
                                                    required="true"
                                                    value={data.no_hp}
                                                    onChange={(e) =>
                                                        setData(
                                                            "no_hp",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="number"
                                                    name="no_hp"
                                                    maxLength="13"
                                                    placeholder="Masukkan Nomor HP Anda..."
                                                    style={{
                                                        appearance: "textfield",
                                                    }}
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                            <td className="max-w-20">
                                                <label
                                                    htmlFor="jenis_kelamin"
                                                    className="mr-4 font-bold"
                                                >
                                                    Jenis Kelamin
                                                </label>
                                            </td>
                                            <td className="">
                                                <select
                                                    required="true"
                                                    name="jenis_kelamin"
                                                    id="jenis_kelamin"
                                                    value={
                                                        null
                                                            ? setData(
                                                                  "jenis_kelamin",
                                                                  "L"
                                                              )
                                                            : data.jenis_kelamin
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "jenis_kelamin",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full hover:bg-[#388E3C]/40 duration-150"
                                                >
                                                    <option
                                                        value="L"
                                                        className="hover:bg-[#388E3C]/40 active:bg-[#388E3C]/40"
                                                    >
                                                        Laki-Laki
                                                    </option>
                                                    <option
                                                        value="P"
                                                        className="hover:bg-[#388E3C]/40 active:bg-[#388E3C]/40"
                                                    >
                                                        Perempuan
                                                    </option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="pb-4" colSpan={2}>
                                                <InputError
                                                    message={errors.no_hp}
                                                />
                                            </td>
                                            <td></td>
                                            <td className="pb-4">
                                                <InputError
                                                    message={errors.jenis_kelamin}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="w-full flex flex-row gap-4 justify-center">
                                    <Link
                                        className="w-1/5"
                                        href={route("menu.umum")}
                                    >
                                        <input
                                            type="button"
                                            className="px-2 py-4 bg-red-600 text-xl rounded-xl text-white w-full"
                                            value="Kembali"
                                        />
                                    </Link>
                                    <input
                                        type="submit"
                                        className="px-2 py-4 bg-green-600 text-xl rounded-xl text-white w-1/5"
                                        value="Daftar"
                                    />
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}
