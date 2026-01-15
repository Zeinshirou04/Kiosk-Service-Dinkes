import { useEffect, useState } from "react";
import Guest from "@/Layouts/V2/GuestLayout";
import Menu from "@/Components/V2/MenuItemsButton";
import MeasureMenu from "./Popup/Menu/MeasureMenu";
import PatientForm from "./Popup/Form/Auth/PatientRegisterForm";
import PatientInfo from "./Popup/Dashboard/PatientInfo";
import SmartCheckup from "./Popup/Form/SmartCheckup";
import Confirm from "./Popup/Confirm";
import GlucoseMeasure from "./Popup/Form/Measure/SmartGlucoseMeasure";
import WeightMeasure from "./Popup/Form/Measure/SmartWeightMeasure";
import BloodMeasure from "./Popup/Form/Measure/SmartBloodMeasure";
import Guide from "./Popup/GuidePopup";
import WeightTutorial from "./Popup/Tutorial/WeightTutorial";
import GlucoseTutorial from "./Popup/Tutorial/GlucoseTutorial";
import BloodTutorial from "./Popup/Tutorial/BloodTutorial";
import AboutAkmModal from "./Popup/Form/Help/AboutAkmModal";
import HowToUseModal from "./Popup/Form/Help/HowToUseModal";
import { Inertia } from "@inertiajs/inertia";

export default function Home({
    nik = undefined,
    no_hp = undefined,
    state = "none",
    measure = undefined,
}) {
    const isAuthenticated = nik != undefined ? true : false;
    const [popups, setPopups] = useState({
        SmartCheckupActive: false,
        MeasureActive: false,
        PatientRegisterActive: false,
        InfoActive: false,
        ConfirmActive: isAuthenticated,
        GlucoseMeasureActive: false,
        WeightMeasureActive: false,
        BloodMeasureActive: false,
        GuideActive: false,
        WeightTutorialActive: false,
        GlucoseTutorialActive: false,
        BloodTutorialActive: false,

        AboutAkmActive: false,
        HowToUseActive: false,
    });

    console.log(popups.AboutAkmActive);

    const fetchWeather = () => {
        const success = async (position) => {
            const { latitude, longitude } = position.coords;
            const API_URL = `https://api.openweathermap.org/geo/1.0/reverse`;
            try {
                const response = await axios.get(API_URL, {
                    lat: latitude,
                    lon: longitude,
                    limit: 1,
                    appid: import.meta.env.VITE_OPEN_WEATHER_KEY,
                });
                let data = response.data;
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        navigator.geolocation.getCurrentPosition(success);
    };

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         console.log("Fetching data...");
    //         fetchWeather();
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, []);

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
            <Confirm
                state={state}
                isActive={popups.ConfirmActive}
                setActive={setPopups}
                isAuthenticated={isAuthenticated}
                measure={measure}
                no_hp={no_hp}
                nik={nik}
            />
            <Guide
                state={state}
                isActive={popups.WeightMeasureActive}
                setActive={setPopups}
                nik={nik}
            />
            <WeightMeasure
                state={state}
                isActive={popups.WeightMeasureActive}
                setActive={setPopups}
                nik={nik}
            />
            <GlucoseMeasure
                state={state}
                isActive={popups.GlucoseMeasureActive}
                setActive={setPopups}
                nik={nik}
            />
            <BloodMeasure
                state={state}
                isActive={popups.BloodMeasureActive}
                setActive={setPopups}
                nik={nik}
            />
            <WeightTutorial
                state={state}
                isActive={popups.WeightTutorialActive}
                setActive={setPopups}
                nik={nik}
            />
            <GlucoseTutorial
                state={state}
                isActive={popups.GlucoseTutorialActive}
                setActive={setPopups}
                nik={nik}
            />
            <BloodTutorial
                state={state}
                isActive={popups.BloodTutorialActive}
                setActive={setPopups}
                nik={nik}
            />
            <AboutAkmModal isActive={popups.AboutAkmActive} setActive={setPopups} />
            <HowToUseModal isActive={popups.HowToUseActive} setActive={setPopups} />
            <div className="w-full flex flex-col justify-center gap-8">
                <div className="w-full">
                    <h4 className="text-center font-header font-normal text-3xl">
                        Selamat Datang di
                    </h4>
                    <h1 className="text-8xl font-header font-extrabold text-center leading-snug">
                        ANJUNGAN KESEHATAN MANDIRI
                    </h1>
                </div>
                <div className="w-full">
                    {/* <div className="flex flex-row w-full justify-center text-4xl gap-4">
                        <div className="flex flex-col items-end gap-3">
                            <div className="w-auto">
                                <p className="text-xl">Temperatur Saat Ini</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <i className="fa-solid fa-temperature-quarter"></i>
                                <p>28&deg;C</p>
                            </div>
                        </div>
                        <div className="w-1 h-auto bg-black"></div>
                        <div className="flex flex-col items-start gap-3">
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
                    </div> */}
                </div>
            </div>
            <div className="mx-auto w-5/6">
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
                            onClick={() => {
                                setPopups((prevState) => ({
                                    ...prevState,
                                    SmartCheckupActive:
                                        !prevState.SmartCheckupActive,
                                }));
                            }}
                        />
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="mt-12 mb-6 border-b-2 mx-auto w-full border-b-black"></div>
                    <div className="w-full my-6">
                        <h5 className="text-3xl font-bold text-center">
                            Menu Pintasan
                        </h5>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <Menu
                            title={"Daftar Pasien Baru"}
                            icon={"fa-user-plus"}
                            className={
                                "from-blue-500/80 via-blue-500 to-blue-500/70 hover:from-blue-600/80 hover:via-blue-600 hover:to-blue-600/70 focus:from-blue-700/80 focus:via-blue-700 focus:to-blue-700/70 active:from-blue-700/80 active:via-blue-700 active:to-blue-700/70"
                            }
                            onClick={() => {
                                Inertia.visit(route("register.create"));
                            }}
                        />
                        <Menu
                            title={"Menu Form Pengukuran"}
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
                            disabled={true}
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
                            disabled={true}
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
                                setPopups((prev) => ({ ...prev, AboutAkmActive: true }));
                            }}
                            disabled={false}
                        />

                        <Menu
                            title={"Cara Penggunaan"}
                            icon={"fa-circle-info"}
                            className={
                                "from-orange-500/80 via-orange-500 to-orange-500/70 hover:from-orange-600/80 hover:via-orange-600 hover:to-orange-600/70 focus:from-orange-700/80 focus:via-orange-700 focus:to-orange-700/70 active:from-orange-700/80 active:via-orange-700 active:to-orange-700/70"
                            }
                            onClick={() => {
                                setPopups((prev) => ({ ...prev, HowToUseActive: true }));
                            }}
                            disabled={false}
                        />

                    </div>
                </div>
            </div>
        </Guest>
    );
}
