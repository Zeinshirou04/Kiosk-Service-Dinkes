export default function AboutAkmModal({ isActive, setActive }) {
    if (!isActive) return null;

    const close = () =>
        setActive((prev) => ({
            ...prev,
            AboutAkmActive: false,
        }));

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <button
                className="absolute inset-0 bg-black/50"
                onClick={close}
                aria-label="Tutup"
            />

            {/* Modal */}
            <div className="relative w-[92%] max-w-3xl rounded-2xl bg-white shadow-2xl">
                <div className="flex items-start justify-between border-b px-6 py-4">
                    <div>
                        <h3 className="text-2xl font-bold">Tentang AKM</h3>
                        <p className="text-sm text-slate-600 mt-1">
                            Anjungan Kesehatan Mandiri (AKM)
                        </p>
                    </div>

                    <button
                        onClick={close}
                        className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
                    >
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                <div className="px-6 py-5 space-y-4 text-slate-800">
                    <p>
                        ANJASWARA (Anjungan Kesehatan Mandiri Warga Kota Semarang) merupakan alat skrining kesehatan berbasis IOT yang terdiri dari tiga komponen yaitu, tinggi badan, berat badan dan pemeriksaan gula, dan selanjutnya akan dikembangkan oleh berbagai skrining Kesehatan. Deteksi Penyakit sedini mungkin adalah salah satu tujuan dilakukannya skrining Kesehatan.
                    </p>

                    <p>
                        Sistem Anjungan ini menggunakan :
                    </p>

                    <p>
                        Aplikasi antarmuka pengguna untuk desktop yang memungkinkan interaksi dengan perangkat keras dan memproses data pengguna
                        Sistem analisis berbasis kecerdasan buatan untuk pengolahan data glukosa yang mampu memberikan hasil analisis yang akurat dan cepat secara non Invasif atau tanpa proses pengambilan darah.
                        Pengembangan back end server dan aplikasi web untuk mengelola data, menyediakan layanan API, dan antarmuka web yang memungkinkan akses jarak jauh ke sistem.
                    </p>
                </div>

                <div className="flex justify-end gap-3 border-t px-6 py-4">
                    <button
                        onClick={close}
                        className="rounded-xl px-5 py-2 font-semibold bg-slate-200 hover:bg-slate-300"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
}
