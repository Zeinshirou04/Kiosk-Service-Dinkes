import react from "react";
import Guest from "@/Layouts/V2/GuestLayout";
import Menu from "@/Components/V2/MenuItemsButton";

export default function Home() {
    return (
        <Guest
            className="flex flex-col px-4 pt-24 pb-10"
            title="Anjungan Kesehatan Mandiri"
        >
            <div className="w-full flex flex-col justify-center gap-12">
                <div className="w-full">
                    <h4 className="text-center font-header font-normal text-3xl">
                        Selamat Datang di Puskesmas Poncol
                    </h4>
                    <h1 className="text-8xl font-header font-extrabold text-center leading-snug">
                        ANJUNGAN KESEHATAN MANDIRI
                    </h1>
                </div>
                <div className="w-full">
                    <p className="text-center text-2xl text-wrap mx-auto mb-6">
                        Cuaca di Poncol, Semarang Tengah saat ini adalah{" "}
                        <b>Cerah Berawan</b>
                    </p>
                    <div className="flex flex-row w-full justify-center text-4xl gap-4">
                        <div className="flex flex-col w-1/2 items-end gap-3">
                            <div className="w-auto">
                                <p className="text-xl">Temperatur Saat Ini</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <i class="fa-solid fa-temperature-quarter"></i>
                                <p>28&deg;C</p>
                            </div>
                        </div>
                        <div className="w-1 h-auto bg-black"></div>
                        <div className="flex flex-col w-1/2 items-start gap-3">
                            <div className="w-auto">
                                <p className="text-xl">
                                    Kecepatan Angin Rata-Rata
                                </p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <i class="fa-solid fa-wind"></i>
                                <p>12.8km/h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-5/6">
                <div className="my-12 border-b-2 mx-auto w-full border-b-black"></div>
                <div className="grid grid-cols-3 gap-4 w-full">
                    <Menu
                        title={"Cek Kesehatan Mandiri"}
                        icon={"fa-suitcase-medical"}
                    />
                    <Menu
                        title={"Daftar Pasien Baru"}
                        icon={"fa-user-plus"}
                        className={"from-blue-500/80 via-blue-500 to-blue-500/70 hover:from-blue-600/80 hover:via-blue-600 hover:to-blue-600/70 focus:from-blue-700/80 focus:via-blue-700 focus:to-blue-700/70 active:from-blue-700/80 active:via-blue-700 active:to-blue-700/70"}
                    />
                    <Menu
                        title={"Cek Informasi Pasien"}
                        icon={"fa-user"}
                        className={"from-blue-500/80 via-blue-500 to-blue-500/70 hover:from-blue-600/80 hover:via-blue-600 hover:to-blue-600/70 focus:from-blue-700/80 focus:via-blue-700 focus:to-blue-700/70 active:from-blue-700/80 active:via-blue-700 active:to-blue-700/70"}
                    />
                </div>
            </div>
        </Guest>
    );
}
