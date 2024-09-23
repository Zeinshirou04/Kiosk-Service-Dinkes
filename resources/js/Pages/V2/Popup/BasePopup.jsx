import PrimaryButton from "@/Components/V2/PrimaryButton";

export default function PopupLayout({
    title = "",
    children,
    isActive = false,
    setActive,
}) {
    return (
        <div
            className={
                "absolute h-full w-full top-0 bg-black/30 transition-all ease-in-out duration-100 " +
                (isActive ? " left-0" : "left-full")
            }
        >
            <div className="w-full h-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-auto w-3/5 rounded-md shadow-lg shadow-gray-500 flex flex-col px-4 py-8 gap-8">
                    <div className="flex flex-row">
                        <button
                            className="absolute right-0 mr-8"
                            onClick={() => {
                                setActive((prevState) =>
                                    Object.keys(prevState).reduce(
                                        (acc, key) => {
                                            acc[key] = false;
                                            return acc;
                                        },
                                        {}
                                    )
                                );
                            }}
                        >
                            <i className="fa-solid fa-x text-4xl"></i>
                        </button>
                        <div className={"h-auto w-full"}>
                            <div className="w-full">
                                <h6 className="text-4xl text-black text-center font-semibold">
                                    Anjungan Kesehatan Mandiri
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/5 flex flex-col gap-6 mx-auto">
                        <header className="text-5xl font-bold">
                            <h2 className="text-center leading-normal">
                                {title}
                            </h2>
                        </header>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
