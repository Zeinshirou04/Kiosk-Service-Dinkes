import { useState } from "react";
import PrimaryButton from "@/Components/V2/PrimaryButton";
import ConfirmPopup from "./ConfirmationPopup";

export default function Confirm({
    isActive,
    setActive,
    state = "none",
    isAuthenticated = false,
    measure,
}) {
    let text = "";

    let preview = undefined;
    let title = undefined;
    let confirmMessage = undefined;

    switch (state) {
        case "weight":
            text =
                "Apakah anda ingin melakukan pengukuran Tinggi dan Berat Badan?";
            break;

        case "glucose":
            text =
                "Apakah anda ingin mengulang pengukuran atau melanjutkan pengukuran Gula Darah?";
            preview = (
                <article className="text-center flex flex-col gap-3 text-4xl">
                    <h4 className="font-bold">Data Berhasil Disimpan!</h4>
                    <p>Berat Badan: {measure.berat}kg</p>
                    <p>Tinggi Badan: {measure.tinggi}cm</p>
                </article>
            );
            break;

        case "blood":
            text =
                "Apakah anda ingin mengulang pengukuran atau melanjutkan pengukuran Tensi/Tekanan Darah?";
            preview = (
                <article className="text-center flex flex-col gap-3 text-4xl">
                    <h4 className="font-bold">Data Berhasil Disimpan!</h4>
                    <p>Kadar Gula Darah: {measure.glucose}mg/dL</p>
                </article>
            );
            break;

        case "confirmation":
            text = "Apakah anda ingin mengulang pengukuran? (Cetak)";
            preview = (
                <article className="text-center flex flex-col gap-3 text-4xl">
                    <h4 className="font-bold">Data Berhasil Disimpan!</h4>
                    <p>Sistole: {measure.b_atas}mmHg</p>
                    <p>Diastole: {measure.denyut}mmHg</p>
                    <p>Kesimpulan: Normal</p>
                </article>
            );
            break;

        case "finished":
            text =
                "Terima Kasih telah menggunakan layanan Anjungan Kesehatan Mandiri, Tetap Jaga Kesehatan Anda. Silahkan tekan LOG OUT.";
            title = (
                <header className="w-full text-5xl font-bold">
                    <h4 className="text-center">Pengukuran Selesai!</h4>
                </header>
            );
            confirmMessage = "Log Out"
            break;

        default:
            text = "Apakah anda sudah pernah mendaftar sebelumnya?";
            break;
    }

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
                                ConfirmActive: !prevState.ConfirmActive,
                            }));
                        }}
                    >
                        <i className="fa-solid fa-x text-4xl"></i>
                    </button>
                    <ConfirmPopup
                        title={title}
                        isActive={isActive}
                        setActive={setActive}
                        text={text}
                        confirmMessage="Ya"
                        declineMessage={confirmMessage ?? "Tidak"}
                        isAuthenticated={isAuthenticated}
                        state={state}
                        preview={preview}
                    />
                </div>
            </div>
        </div>
    );
}
