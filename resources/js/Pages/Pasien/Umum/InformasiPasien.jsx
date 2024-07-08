import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import NavAside from "@/Components/AsideMenu";
import Identitas from "@/Components/IdentitasPasien";
import Pengukuran from "@/Components/FormPengukuran";

export default function Pasien({ pasien, rekap, data }) {
    const [active, setActive] = useState(false);
    console.log(rekap.length);

    return (
        <section id="wrapper" className="w-svw h-svh relative">
            <Head title="Pasien Umum" />
            <Pengukuran
                nik={pasien.nik}
                active={active}
                setActive={setActive}
            />
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
                    <section id="menuPasien" className="h-full w-3/4 mx-auto">
                        <Identitas data={pasien} />
                        <div className="w-full px-2 py-2 mt-8">
                            <div className="w-full max-w-full flex flex-row justify-between items-end">
                                <h2 className="text-md font-bold text-nowrap">
                                    Rekapitulasi Pengukuran
                                </h2>
                                <div className="w-full flex flex-row justify-end">
                                    <button
                                        onClick={() => {
                                            setActive(
                                                (previousState) =>
                                                    !previousState
                                            );
                                        }}
                                        className="px-2 py-1 bg-green-400 rounded-lg text-sm focus:bg-green-500 active:bg-green-500 duration-100"
                                    >
                                        Pengukuran Baru
                                    </button>
                                </div>
                            </div>
                            <div className="w-full max-w-full h-60 overflow-x-auto overflow-y-auto mt-2">
                                <table className="min-w-full text-nowrap text-left">
                                    <thead>
                                        <tr className="border-b-2 border-b-gray-200 bg-gray-600 text-white">
                                            <th className="px-4 py-1 border-r-2 border-r-gray-500">
                                                No
                                            </th>
                                            <th className="px-4 py-1 border-r-2 border-r-gray-500">
                                                Glukosa
                                            </th>
                                            <th className="px-4 py-1 border-r-2 border-r-gray-500">
                                                Berat badan
                                            </th>
                                            <th className="px-4 py-1 border-r-2 border-r-gray-500">
                                                Tinggi badan
                                            </th>
                                            <th className="px-4 py-1 border-r-2 border-r-gray-500">
                                                Tanggal Ukur
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rekap.length != 0 ? Object.values(rekap).map((item, index) => (
                                            <tr className={"border-b-2 border-b-gray-300 " + (index % 2 == 0 ? 'bg-gray-200' : '')}>
                                                <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                    {++index}
                                                </td>
                                                <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                    {item.gula}
                                                    <span className="text-sm">
                                                        mg/dL
                                                    </span>
                                                </td>
                                                <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                    {item.berat}
                                                    <span className="text-sm">
                                                        kg
                                                    </span>
                                                </td>
                                                <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                    {item.tinggi}
                                                    <span className="text-sm">
                                                        cm
                                                    </span>
                                                </td>
                                                <td className="px-4 py-1">
                                                    {item.created_at}
                                                </td>
                                            </tr>
                                        )) : (<tr>
                                            <td className="px-4 py-2 border-r-2 border-r-gray-500 text-center" rowSpan={6} colSpan={5}>Belum ada pengukuran</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}
