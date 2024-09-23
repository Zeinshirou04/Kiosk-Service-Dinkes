import PrimaryButton from "@/Components/V2/PrimaryButton";

export default function Guide({ state = "none", isActive, setActive, nik }) {
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
                                WeightMeasureActive:
                                    !prevState.WeightMeasureActive,
                            }));
                        }}
                    >
                        <i className="fa-solid fa-x text-4xl"></i>
                    </button>
                    <div
                        className={
                            "h-auto w-full mt-8 " + (isActive ? "" : "hidden")
                        }
                    >
                        <div className="w-full">
                            <h6 className="text-4xl text-black text-center font-semibold">
                                Anjungan Kesehatan Mandiri
                            </h6>
                        </div>
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
    );
}
