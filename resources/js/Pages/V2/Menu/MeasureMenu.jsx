import Menu from "@/Components/V2/MenuItemsButton";
import { useState } from "react";
import Glucose from "../Measure/GlucoseMeasure";

export default function MeasureMenu({ isActive, setActive }) {
    const [menuActive, setMenuActive] = useState(true);
    const [glucoseFormActive, setGlucoseFormActive] = useState(false);

    const resetActive = (time) => {
        setTimeout(() => {
            setMenuActive(true);
            setGlucoseFormActive(false);
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
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-auto w-3/5 rounded-md shadow-lg shadow-gray-500">
                    <button
                        className="absolute right-0 mr-8 mt-8"
                        onClick={() => {
                            setActive((previousState) => !previousState);
                            resetActive(100);
                        }}
                    >
                        <i class="fa-solid fa-x text-4xl"></i>
                    </button>
                    <Glucose
                        isActive={glucoseFormActive}
                        setActive={setGlucoseFormActive}
                        className={"mt-8"}
                    />
                    <div
                        className={
                            "h-auto w-full mt-8 " + (menuActive ? "" : "hidden")
                        }
                    >
                        <div className="w-full">
                            <h6 className="text-4xl text-black text-center font-semibold">
                                Menu Pengukuran
                            </h6>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-3 py-12 px-8">
                            <Menu
                                title={"Pemeriksaan Glukosa"}
                                icon={"fa-cubes-stacked"}
                                onClick={() => {
                                    setMenuActive(
                                        (previousState) => !previousState
                                    );
                                    setTimeout(() => {
                                        setGlucoseFormActive(
                                            (previousState) => !previousState
                                        );
                                    }, 50);
                                }}
                            />
                            <Menu
                                title={"Pengukuran Badan"}
                                icon={"fa-child"}
                                className={
                                    "from-orange-500/80 via-orange-500 to-orange-500/70 hover:from-orange-600/80 hover:via-orange-600 hover:to-orange-600/70 focus:from-orange-700/80 focus:via-orange-700 focus:to-orange-700/70 active:from-orange-700/80 active:via-orange-700 active:to-orange-700/70"
                                }
                                onClick={() => {
                                    setMenuActive(
                                        (previousState) => !previousState
                                    );
                                }}
                            />
                            <Menu
                                title={"Pengukuran Tensi"}
                                icon={"fa-droplet"}
                                className={
                                    "from-red-500/80 via-red-500 to-red-500/70 hover:from-red-600/80 hover:via-red-600 hover:to-red-600/70 focus:from-red-700/80 focus:via-red-700 focus:to-red-700/70 active:from-red-700/80 active:via-red-700 active:to-red-700/70"
                                }
                                onClick={() => {
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
