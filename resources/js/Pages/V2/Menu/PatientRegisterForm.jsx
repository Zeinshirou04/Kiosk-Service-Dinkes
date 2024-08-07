export default function PatientForm({ isActive, setActive }) {
    return (
        <div
            className={
                "absolute h-full w-full top-0 bg-black/30 transition-all ease-in-out duration-100 " +
                (isActive ? " left-0" : "left-full")
            }
        >
            <div className="w-full h-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-1/2 w-3/5 rounded-md shadow-lg shadow-gray-500">
                    <div className="relative h-auto w-full py-8">
                        <button
                            className="absolute right-4 top-4"
                            onClick={() => {
                                setActive((previousState) => !previousState)
                            }}
                        >
                            <i class="fa-solid fa-x text-4xl"></i>
                        </button>
                    </div>
                    <div className="h-auto w-full">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
