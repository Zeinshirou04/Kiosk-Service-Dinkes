import PrimaryButton from "@/Components/V2/PrimaryButton";
import DangerButton from "@/Components/V2/DangerButton";
import { Inertia } from "@inertiajs/inertia";

export default function ConfirmPopup({
    title = undefined,
    isActive = false,
    setActive,
    text,
    no_hp,
    confirmMessage = "Sudah",
    declineMessage = "Belum",
    isAuthenticated = false,
    state = "none",
    preview = undefined,
}) {
    const isWeightMeasure = () => {
        setActive((prevState) => ({
            ...prevState,
            ConfirmActive: !prevState.ConfirmActive,
        }));
        setTimeout(() => {
            setActive((prevState) => ({
                ...prevState,
                WeightTutorialActive: !prevState.WeightTutorialActive,
            }));
        }, 500);
    };

    const isGlucoseMeasure = () => {
        setActive((prevState) => ({
            ...prevState,
            ConfirmActive: !prevState.ConfirmActive,
        }));
        setTimeout(() => {
            setActive((prevState) => ({
                ...prevState,
                GlucoseTutorialActive: !prevState.GlucoseTutorialActive,
            }));
        }, 500);
    };

    const isBloodMeasure = () => {
        setActive((prevState) => ({
            ...prevState,
            ConfirmActive: !prevState.ConfirmActive,
        }));
        setTimeout(() => {
            setActive((prevState) => ({
                ...prevState,
                BloodTutorialActive: !prevState.BloodTutorialActive,
            }));
        }, 500);
    };

    const messageWhatsapp = async () => {
        try {
            const response = await axios
                .post(
                    "https://api.watzap.id/v1/send_message",
                    {
                        api_key: import.meta.env.VITE_WATZAPP_API_KEY,
                        number_key: import.meta.env.VITE_WATZAPP_NUMBER_KEY,
                        phone_no: no_hp.toString().replace(/^0/, "62"),
                        message:
                            "Halo, Permisi Sobat Pasien! Silahkan akses link berikut untuk melihat hasil pengukuran anda! Link Hasil Pengukuran: https://***/",
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then(() => {
                    Inertia.visit(
                        route("v2.home.index", {
                            _query: {
                                state: "finished",
                            },
                        })
                    );
                });
        } catch (err) {
            console.error(err);
        }
    };

    const handleConfirm = () => {
        if (!isAuthenticated) Inertia.visit(route("login.create"));
        switch (state) {
            case "weight":
                isWeightMeasure();
                break;

            case "glucose":
                isWeightMeasure();
                break;

            case "blood":
                Inertia.visit(
                    route("v2.home.index", {
                        _query: {
                            state: "glucose",
                        },
                    })
                );
                break;

            case "confirmation":
                Inertia.visit(
                    route("v2.home.index", {
                        _query: {
                            state: "blood",
                        },
                    })
                );
                break;

            default:
                break;
        }
    };

    const handleDecline = () => {
        if (!isAuthenticated) Inertia.visit(route("register.create"));
        switch (state) {
            case "weight":
                isGlucoseMeasure();
                break;

            case "glucose":
                isGlucoseMeasure();
                break;

            case "blood":
                isBloodMeasure();
                break;

            case "confirmation":
                messageWhatsapp();
                break;

            case "finished":
                Inertia.visit(route("logout.attempt"));
                break;

            default:
                break;
        }
    };

    return (
        <div className={"h-auto w-full mt-8 " + (isActive ? "" : "hidden")}>
            <div className="w-full">
                <h6 className="text-4xl text-black text-center font-semibold">
                    Anjungan Kesehatan Mandiri
                </h6>
            </div>
            <div className="w-full px-12 mt-8">{preview ?? title}</div>
            <div className="w-full px-12 mt-8">
                <article className="text-center flex flex-col gap-3">
                    <h4 className="text-4xl">{text}</h4>
                </article>
            </div>
            <div className="mx-auto mt-8">
                <div className="w-full flex flex-row justify-center gap-4">
                    {state != "finished" ? (
                        <PrimaryButton
                            onClick={handleConfirm}
                            className="text-3xl"
                            text={confirmMessage}
                        />
                    ) : (
                        ""
                    )}
                    <DangerButton
                        onClick={handleDecline}
                        className="text-3xl"
                        text={declineMessage}
                    />
                </div>
            </div>
        </div>
    );
}
