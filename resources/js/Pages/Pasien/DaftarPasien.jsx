import { Head, Link } from "@inertiajs/react";
import NavAside from "@/Components/AsideMenu";

export default function DaftarPasien() {
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
                            <form className="w-full" action="#">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="pb-6 max-w-20">
                                                <label
                                                    htmlFor="nik"
                                                    className="mr-4 font-bold"
                                                >
                                                    NIK
                                                </label>
                                            </td>
                                            <td colSpan={3} className="pb-6">
                                                <input
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
                                            <td className="pb-6 max-w-20">
                                                <label
                                                    htmlFor="nama"
                                                    className="mr-4 font-bold"
                                                >
                                                    Nama
                                                </label>
                                            </td>
                                            <td colSpan={3} className="pb-6">
                                                <input
                                                    type="text"
                                                    name="nama"
                                                    placeholder="Masukkan Nama Lengkap Anda..."
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-6 max-w-20">
                                                <label
                                                    htmlFor="tglLahir"
                                                    className="mr-4 font-bold"
                                                >
                                                    Tanggal Lahir
                                                </label>
                                            </td>
                                            <td className="pb-6 pr-6">
                                                <input
                                                    type="date"
                                                    name="tglLahir"
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                            <td className="pb-6 max-w-20">
                                                <label
                                                    htmlFor="tempatLahir"
                                                    className="mr-4 font-bold"
                                                >
                                                    Tempat Lahir
                                                </label>
                                            </td>
                                            <td className="pb-6">
                                                <input
                                                    type="text"
                                                    name="tempatLahir"
                                                    placeholder="Masukkan Tempat Lahir Anda..."
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-6 max-w-20">
                                                <label
                                                    htmlFor="alamat"
                                                    className="mr-4 font-bold"
                                                >
                                                    Alamat
                                                </label>
                                            </td>
                                            <td colSpan={3} className="pb-6">
                                                <input
                                                    type="text"
                                                    name="alamat"
                                                    placeholder="Masukkan Alamat Anda..."
                                                    className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-5/6"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                        <td className="pb-6 max-w-20">
                                                <label
                                                    htmlFor="no_hp"
                                                    className="mr-4 font-bold"
                                                >
                                                    No. HP
                                                </label>
                                            </td>
                                            <td className="pb-6 pr-6">
                                                <input
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
                                            <td className="pb-6 max-w-20">
                                                <label
                                                    htmlFor="kelamin"
                                                    className="mr-4 font-bold"
                                                >
                                                    Jenis Kelamin
                                                </label>
                                            </td>
                                            <td className="pb-6">
                                                <select name="kelamin" id="kelamin" className="bg-[#388E3C]/20 rounded-t-sm border-0 border-b-2 w-full hover:bg-[#388E3C]/40 duration-150">
                                                    <option value="L" className="hover:bg-[#388E3C]/40 active:bg-[#388E3C]/40">Laki-Laki</option>
                                                    <option value="P" className="hover:bg-[#388E3C]/40 active:bg-[#388E3C]/40">Perempuan</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}
