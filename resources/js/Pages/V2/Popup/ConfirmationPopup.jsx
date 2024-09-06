import { useState } from "react";
import PrimaryButton from "@/Components/V2/PrimaryButton";
import DangerButton from "@/Components/V2/DangerButton";
import { Inertia } from '@inertiajs/inertia';

export default function ConfirmPopup({
    title = "",
    isActive = false,
    className = "",
}) {
    const resetActive = (time) => {
        setTimeout(() => {
            setMenuActive(true);
            setGlucoseFormActive(false);
        }, time);
    };

    return (
        <div className={"h-auto w-full mt-8 " + (isActive ? "" : "hidden")}>
            <div className="w-full">
                <h6 className="text-4xl text-black text-center font-semibold">
                    Anjungan Kesehatan Mandiri
                </h6>
            </div>
            <div className="w-full gap-3 py-8 px-8">
                <header className="w-full px-8">
                    <h2 className="text-6xl font-bold text-center">{title}</h2>
                </header>
            </div>
            <div className="w-full px-12">
                <article className="text-center flex flex-col gap-3">
                    <h4 className="text-4xl">
                        Apakah anda sudah pernah mendaftar sebelumnya?
                    </h4>
                </article>
            </div>
            <div className="mx-auto mt-8">
                <div className="w-full flex flex-row justify-center gap-4">
                    <PrimaryButton onClick={() => {
                        Inertia.visit(route('login.create'));
                    }} className="text-3xl" text="Sudah" />
                    <DangerButton onClick={() => {
                        Inertia.visit(route('register.create'));
                    }} className="text-3xl" text="Belum" />
                </div>
            </div>
        </div>
    );
}
