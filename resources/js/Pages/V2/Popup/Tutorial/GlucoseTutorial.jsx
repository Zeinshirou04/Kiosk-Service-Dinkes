import PopupLayout from "../BasePopup";
import PrimaryButton from "@/Components/V2/PrimaryButton";

export default function GlucoseTutorial({
    state,
    isActive = false,
    setActive,
    nik,
}) {
    return (
        <PopupLayout
            isActive={isActive}
            setActive={setActive}
            title="Cara Penggunaan Alat Glucometer"
        >
            <div className="w-full flex flex-col justify-center">
                <article className="text-3xl">
                    <ol className="list-decimal list-inside leading-normal">
                        <li>
                            Taruh jari telunjuk pada alat (glucometer) yang ada
                            di samping kiri.
                        </li>
                        <li className="mt-2">
                            Masukan jari telunjuk hingga lampu indicator bewarna
                            hijau.
                        </li>
                        <li className="mt-2">
                            Tekan tombol dan tunggu sesaat hingga muncul hasil
                            pengukuran.
                        </li>
                        <li className="mt-2">
                            Pengukuran selesai, silahkan lepas tangan anda.
                        </li>
                    </ol>
                </article>
            </div>
            <div className="w-full flex flex-row justify-center">
                <PrimaryButton
                    className="text-3xl"
                    text="Mulai"
                    onClick={() => {
                        setActive((prevState) => ({
                            ...prevState,
                            GlucoseTutorialActive:
                                !prevState.GlucoseTutorialActive,
                        }));
                        setTimeout(() => {
                            setActive((prevState) => ({
                                ...prevState,
                                GlucoseMeasureActive:
                                    !prevState.GlucoseMeasureActive,
                            }));
                        }, 500);
                    }}
                />
            </div>
        </PopupLayout>
    );
}
