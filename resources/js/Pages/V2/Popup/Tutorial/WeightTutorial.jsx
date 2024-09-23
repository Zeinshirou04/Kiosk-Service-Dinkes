import PopupLayout from "../BasePopup";
import PrimaryButton from "@/Components/V2/PrimaryButton";

export default function WeightTutorial({
    state,
    isActive = false,
    setActive,
    nik,
}) {
    return (
        <PopupLayout
            isActive={isActive}
            setActive={setActive}
            title="Cara Penggunaan Alat Berat dan Tinggi"
        >
            <div className="w-full flex flex-col justify-center">
                <article className="text-3xl">
                    <ol className="list-decimal list-inside leading-normal">
                        <li>
                            Silahkan Berdiri dengan Tegak di atas timbangan.
                        </li>
                        <li className="mt-2">
                            Ambil mika pembatas di sebelah kanan Perangkat.
                        </li>
                        <li className="mt-2">
                            Taruh mika pembatas diatas kepala anda.
                        </li>
                        <li className="mt-2">
                            Posisikan Plat untuk tetap rata.
                        </li>
                        <li className="mt-2">
                            Silahkan tekan tombol lanjut untuk memulai
                            pengukuran.
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
                            WeightTutorialActive: !prevState.WeightTutorialActive,
                        }));
                        setTimeout(() => {
                            setActive((prevState) => ({
                                ...prevState,
                                WeightMeasureActive:
                                    !prevState.WeightMeasureActive,
                            }));
                        }, 500);
                    }}
                />
            </div>
        </PopupLayout>
    );
}
