import { useState } from "react";
import Guest from "@/Layouts/V2/GuestLayout";
import Menu from "@/Components/V2/MenuItemsButton";
import MeasureMenu from "./Popup/Menu/MeasureMenu";
import PatientForm from "./Popup/Form/Auth/PatientRegisterForm";
import PatientInfo from "./Popup/Dashboard/PatientInfo";
import SmartCheckup from "./Popup/Form/SmartCheckup";

export default function Home() {
    const [popups, setPopups] = useState({
        SmartCheckupActive: false,
        MeasureActive: false,
        PatientRegisterActive: false,
        InfoActive: false,
    });

    return (
        <Guest
            className="flex flex-col px-4 pt-24 pb-10"
            title="Anjungan Kesehatan Mandiri"
        >
            <SmartCheckup
                isActive={popups.SmartCheckupActive}
                setActive={setPopups}
            />
            <MeasureMenu
                isActive={popups.MeasureActive}
                setActive={setPopups}
            />
            <PatientForm
                isActive={popups.PatientRegisterActive}
                setActive={setPopups}
            />
            <PatientInfo isActive={popups.InfoActive} setActive={setPopups} />
            <div className="w-full flex flex-col justify-center gap-8">
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
                                <i className="fa-solid fa-temperature-quarter"></i>
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
                                <i className="fa-solid fa-wind"></i>
                                <p>12.8km/h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-5/6">
                <div className="w-full h-auto">
                    <div className="mt-12 mb-6 border-b-2 mx-auto w-full border-b-black"></div>
                    <div className="w-full my-6">
                        <h5 className="text-3xl font-bold text-center">
                            Menu Cerdas
                        </h5>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <Menu
                            title={"Cek Kesehatan Cerdas"}
                            icon={"fa-robot"}
                            onClick={() => {
                                setPopups((prevState) => ({
                                    ...prevState,
                                    SmartCheckupActive: !prevState.SmartCheckupActive,
                                }));
                            }}
                        />
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="mt-12 mb-6 border-b-2 mx-auto w-full border-b-black"></div>
                    <div className="w-full my-6">
                        <h5 className="text-3xl font-bold text-center">
                            Menu Utama
                        </h5>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <Menu
                            title={"Cek Kesehatan Mandiri"}
                            icon={"fa-suitcase-medical"}
                            className={
                                "from-blue-500/80 via-blue-500 to-blue-500/70 hover:from-blue-600/80 hover:via-blue-600 hover:to-blue-600/70 focus:from-blue-700/80 focus:via-blue-700 focus:to-blue-700/70 active:from-blue-700/80 active:via-blue-700 active:to-blue-700/70"
                            }
                            onClick={() => {
                                setPopups((prevState) => ({
                                    ...prevState,
                                    MeasureActive: !prevState.MeasureActive,
                                }));
                            }}
                        />
                        <Menu
                            title={"Daftar Pasien Baru"}
                            icon={"fa-user-plus"}
                            className={
                                "from-blue-500/80 via-blue-500 to-blue-500/70 hover:from-blue-600/80 hover:via-blue-600 hover:to-blue-600/70 focus:from-blue-700/80 focus:via-blue-700 focus:to-blue-700/70 active:from-blue-700/80 active:via-blue-700 active:to-blue-700/70"
                            }
                            onClick={() => {
                                setPopups((prevState) => ({
                                    ...prevState,
                                    PatientRegisterActive:
                                        !prevState.PatientRegisterActive,
                                }));
                            }}
                        />
                        <Menu
                            title={"Cek Informasi Pasien"}
                            icon={"fa-user"}
                            className={
                                "from-blue-500/80 via-blue-500 to-blue-500/70 hover:from-blue-600/80 hover:via-blue-600 hover:to-blue-600/70 focus:from-blue-700/80 focus:via-blue-700 focus:to-blue-700/70 active:from-blue-700/80 active:via-blue-700 active:to-blue-700/70"
                            }
                            onClick={() => {
                                setPopups((prevState) => ({
                                    ...prevState,
                                    InfoActive: !prevState.InfoActive,
                                }));
                            }}
                        />
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="mt-12 mb-6 border-b-2 mx-auto w-full border-b-black"></div>
                    <div className="w-full my-6">
                        <h5 className="text-3xl font-bold text-center">
                            Menu Bantuan
                        </h5>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <Menu
                            title={"Tentang AKM"}
                            icon={"fa-question"}
                            className={
                                "from-orange-500/80 via-orange-500 to-orange-500/70 hover:from-orange-600/80 hover:via-orange-600 hover:to-orange-600/70 focus:from-orange-700/80 focus:via-orange-700 focus:to-orange-700/70 active:from-orange-700/80 active:via-orange-700 active:to-orange-700/70"
                            }
                            onClick={() => {
                                setPopups((prevState) => ({
                                    ...prevState,
                                    MeasureActive: !prevState.MeasureActive,
                                }));
                            }}
                        />
                        <Menu
                            title={"Cara Penggunaan"}
                            icon={"fa-circle-info"}
                            className={
                                "from-orange-500/80 via-orange-500 to-orange-500/70 hover:from-orange-600/80 hover:via-orange-600 hover:to-orange-600/70 focus:from-orange-700/80 focus:via-orange-700 focus:to-orange-700/70 active:from-orange-700/80 active:via-orange-700 active:to-orange-700/70"
                            }
                            onClick={() => {
                                setPopups((prevState) => ({
                                    ...prevState,
                                    MeasureActive: !prevState.MeasureActive,
                                }));
                            }}
                        />
                    </div>
                </div>
            </div>
        </Guest>
    );
}
