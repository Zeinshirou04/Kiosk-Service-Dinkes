import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import NavAside from "@/Components/AsideMenu";
import Identitas from "@/Components/IdentitasPasien";
import Glukosa from "@/Components/FormPengukuranGlukosa";
import Tensi from "@/Components/FormPengukuranTensi";
import { FileforgeClient } from "@fileforge/client";
import { compile } from "@fileforge/react-print";
import Raport from "@/Others/Pdf/Raport";

export default function Pasien({ pasien, rekap, tensi }) {
    const ff = new FileforgeClient({
        apiKey: () => "f1d0be55-c5d6-44c8-bbeb-2e76a2327fe8",
    });

    let d = {
        nama: pasien.nama_pasien,
        alamat: pasien.alamat,
        no_hp: pasien.no_hp,
    };

    const printPdf = async () => {
        await import("react-dom/server");
        const HTML = await compile(<Raport data={d} />);
        try {
            const pdf = await ff.pdf.generate(
                [new File([HTML], "index.html", { type: "text/html" })],

                {
                    options: {
                        host: true,
                    },
                },

                {
                    timeoutInSeconds: 30,
                }
            );

            console.log(pdf.url);
        } catch (error) {
            console.error("Error during PDF conversion:", error);
        }
    };

    console.log(ff.getStatus());

    const [popupGlucose, setPopupGlucose] = useState(false);
    const [popupTension, setPopupTension] = useState(false);
    console.log(rekap.length);

    return (
        <section id="wrapper" className="w-svw h-svh relative">
            <Head title="Pasien Umum" />
            <Glukosa
                nik={pasien.nik}
                active={popupGlucose}
                setActive={setPopupGlucose}
            />
            <Tensi
                nik={pasien.nik}
                active={popupTension}
                setActive={setPopupTension}
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
                        <div className="w-full px-2 py-2 mt-8 flex flex-col gap-8">
                            <div className="w-full">
                                <div className="w-full max-w-full flex flex-row justify-between items-end">
                                    <h2 className="text-md font-bold text-nowrap">
                                        Riwayat Pengukuran Glukosa dan BB/TB
                                    </h2>
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
                                            {rekap.length != 0 ? (
                                                Object.values(rekap).map(
                                                    (item, index) => (
                                                        <tr
                                                            className={
                                                                "border-b-2 border-b-gray-300 " +
                                                                (index % 2 == 0
                                                                    ? "bg-gray-200"
                                                                    : "")
                                                            }
                                                        >
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
                                                                {
                                                                    item.created_at
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            ) : (
                                                <tr>
                                                    <td
                                                        className="px-4 py-2 border-r-2 border-r-gray-500 text-center"
                                                        rowSpan={6}
                                                        colSpan={5}
                                                    >
                                                        Belum ada pengukuran
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="w-full max-w-full flex flex-row justify-between items-end">
                                    <h2 className="text-md font-bold text-nowrap">
                                        Riwayat Pengukuran Tensi
                                    </h2>
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
                                            {tensi.length != 0 ? (
                                                Object.values(tensi).map(
                                                    (item, index) => (
                                                        <tr
                                                            className={
                                                                "border-b-2 border-b-gray-300 " +
                                                                (index % 2 == 0
                                                                    ? "bg-gray-200"
                                                                    : "")
                                                            }
                                                        >
                                                            <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                                {++index}
                                                            </td>
                                                            <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                                {item.b_atas}
                                                                <span className="text-sm">
                                                                    
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                                {item.b_bawah}
                                                                <span className="text-sm">
                                                                    
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-1 border-r-2 border-r-gray-500">
                                                                {item.denyut}
                                                                <span className="text-sm">
                                                                    
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-1">
                                                                {
                                                                    item.created_at
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            ) : (
                                                <tr>
                                                    <td
                                                        className="px-4 py-2 border-r-2 border-r-gray-500 text-center"
                                                        rowSpan={6}
                                                        colSpan={5}
                                                    >
                                                        Belum ada pengukuran
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <div className="w-full flex flex-row gap-4">
                                    <div
                                        className="px-4 w-2/4 h-20 bg-green-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-green-600 focus:bg-green-700/70 active:bg-green-700 duration-150"
                                        onClick={() =>
                                            setPopupGlucose(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                    >
                                        <i class="fa-solid fa-weight-scale fa-2xl text-white"></i>
                                        <div className="w-full font-bold text-white text-lg">
                                            Pengukuran Baru Glukosa
                                        </div>
                                    </div>
                                    <div
                                        className="px-4 w-2/4 h-20 bg-red-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-red-600 focus:bg-red-700/70 active:bg-red-700 duration-150"
                                        onClick={() =>
                                            setPopupTension(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                    >
                                        <i class="fa-solid fa-droplet fa-2xl text-white"></i>
                                        <div className="w-full font-bold text-white text-lg">
                                            Pengukuran Baru Tensi
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row gap-4">
                                    <div
                                        className="px-4 w-2/4 h-20 bg-green-500 rounded-md flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-green-600 focus:bg-green-700/70 active:bg-green-700 duration-150"
                                        onClick={printPdf}
                                    >
                                        <i class="fa-solid fa-print fa-2xl text-white"></i>
                                        <div className="w-full font-bold text-white text-lg">
                                            Print Laporan Pengukuran
                                        </div>
                                    </div>
                                    <div className="w-2/4"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}
