export default function Glucose({ isActive, setActive, className }) {
    return (
        <div
            className={
                "w-full h-auto " + (isActive ? "" : " hidden ") + className
            }
        >
            <div className="w-full">
                <h6 className="text-4xl text-black text-center font-semibold">
                    Pemeriksaan Glukosa
                </h6>
            </div>
            <div className="w-full border-b-2 border-black py-4"></div>
            <form className="w-full h-auto px-8 py-8">
                <label htmlFor="nik" className="text-2xl">
                    Nomor Induk Kependudukan
                </label>
            </form>
        </div>
    );
}
