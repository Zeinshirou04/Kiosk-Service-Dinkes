import PopupLayout from "../BasePopup";
import PrimaryButton from "@/Components/V2/PrimaryButton";

export default function BloodTutorial({
    state,
    isActive = false,
    setActive,
    nik,
}) {
    return (
        <PopupLayout
            isActive={isActive}
            setActive={setActive}
            title="Cara Penggunaan Alat Tesimeter"
        >
            <div className="w-full flex flex-col justify-center">
                <article className="text-3xl">
                    <ol className="list-decimal list-inside leading-normal">
                        <li>
                            Ambil alat tesi meter yg berada pada disamping kiri
                            anda.
                        </li>
                        <li>
                            Ambillah posisi duduk dengan kursi yang tersedia.
                        </li>
                        <li className="mt-2">
                            Rekatkan tensi meter pada. pergelangan tangan.
                        </li>
                        <li className="mt-2">
                            Posisikan alat menghadap arah yang sama dengan
                            telapak tangan atau searah dengan nadi.
                        </li>
                        <li className="mt-2">Tekan tombol OK.</li>
                        <li className="mt-2">
                            Dekatkan alat ke area dada dengan menekuk tangan.
                        </li>
                        <li className="mt-2">
                            Tunggu hingga pengukuran selesai dan muncul
                            hasilnya.
                        </li>
                        <li className="mt-2">
                            Lepaskan alat dan dan kembalikan ke tempat semula.
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
                            BloodTutorialActive:
                                !prevState.BloodTutorialActive,
                        }));
                        setTimeout(() => {
                            setActive((prevState) => ({
                                ...prevState,
                                BloodMeasureActive:
                                    !prevState.BloodMeasureActive,
                            }));
                        }, 500);
                    }}
                />
            </div>
        </PopupLayout>
    );
}
