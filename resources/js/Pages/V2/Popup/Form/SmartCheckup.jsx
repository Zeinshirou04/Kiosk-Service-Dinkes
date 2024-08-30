import { useState } from "react";
import PrimaryButton from "@/Components/V2/PrimaryButton";
import ConfirmPopup from "../ConfirmationPopup";

export default function SmartCheckup({ isActive, setActive }) {
    const [menuActive, setMenuActive] = useState(true);
    const [confirmAuthPopup, setConfirmAuthPopup] = useState(false);

    const resetActive = (time) => {
        setTimeout(() => {
            setMenuActive(true);
            setConfirmAuthPopup(false);
        }, time);
    };

    return (
        <div
            className={
                "absolute h-full w-full top-0 bg-black/30 transition-all ease-in-out duration-100 " +
                (isActive ? " left-0" : "left-full")
            }
        >
            <div className="w-full h-full relative">
                <div className="absolute pb-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-auto w-3/5 rounded-md shadow-lg shadow-gray-500">
                    <button
                        className="absolute right-0 mr-8 mt-8"
                        onClick={() => {
                            setActive((prevState) => ({
                                ...prevState,
                                SmartCheckupActive:
                                    !prevState.SmartCheckupActive,
                            }));
                            resetActive(100);
                        }}
                    >
                        <i className="fa-solid fa-x text-4xl"></i>
                    </button>
                    <ConfirmPopup isActive={confirmAuthPopup} />
                    <div
                        className={
                            "h-auto w-full mt-8 " + (menuActive ? "" : "hidden")
                        }
                    >
                        <div className="w-full">
                            <h6 className="text-4xl text-black text-center font-semibold">
                                Anjungan Kesehatan Mandiri
                            </h6>
                        </div>
                        <div className="w-full gap-3 py-12 px-8">
                            <header className="w-full px-8">
                                <h2 className="text-6xl font-bold text-center">
                                    Cek Kesehatan Cerdas
                                </h2>
                            </header>
                        </div>
                        <div className="w-full px-12">
                            <article className="text-center flex flex-col gap-3">
                                <p className="text-3xl">
                                    Apakah anda sudah siap untuk memulai
                                    pengukuran? Jika anda sudah siap, silahkan
                                    tekan tombol Mulai.
                                </p>
                            </article>
                        </div>
                        <div className="w-full flex flex-row justify-center mt-8">
                            <PrimaryButton
                                className="text-3xl"
                                text="Mulai"
                                onClick={() => {
                                    setConfirmAuthPopup(
                                        (previousState) => !previousState
                                    );
                                    setMenuActive(
                                        (previousState) => !previousState
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
