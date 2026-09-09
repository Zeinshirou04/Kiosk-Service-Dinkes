export default function HowToUseModal({ isActive, setActive }) {
    if (!isActive) return null;

    const close = () =>
        setActive((prev) => ({
            ...prev,
            HowToUseActive: false,
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
                        <h3 className="text-2xl font-bold">Cara Penggunaan</h3>
                        <p className="text-sm text-slate-600 mt-1">
                            Tata cara menggunakan Anjaswara (AKM)
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
                    {/* Scroll container biar nyaman */}
                    <div className="max-h-[65vh] overflow-y-auto pr-1">
                        <ol className="list-decimal pl-5 space-y-3 text-base leading-relaxed">
                            <li>
                                Pada menu utama, klik <b>“Cek Kesehatan Mandiri”</b> untuk memulai
                                skrining kesehatan.
                            </li>
                            <li>
                                Sebelum memulai skrining, pengguna wajib melakukan pendaftaran
                                dengan mengisi identitas sesuai KTP, meliputi <b>NIK</b>,{" "}
                                <b>nama lengkap</b>, <b>tanggal lahir</b>, <b>jenis kelamin</b>,{" "}
                                <b>alamat</b> (kabupaten/kota dan provinsi), serta{" "}
                                <b>nomor WhatsApp</b>.
                            </li>
                            <li>
                                Apabila pengguna sudah pernah mendaftar di Anjaswara, pengguna
                                dapat langsung klik <b>“Masuk”</b> dengan memasukkan <b>NIK</b>{" "}
                                dan <b>nomor WhatsApp</b>.
                            </li>
                            <li>
                                Pemeriksaan skrining kesehatan diawali dengan pemeriksaan{" "}
                                <b>BB</b> dan <b>TB</b>
                            </li>
                            <li>
                                Lakukan pemeriksaan dengan berdiri tegak di atas timbangan yang
                                telah tersedia, kemudian ambil <b>mika pembatas</b> dan letakkan
                                di atas kepala untuk pengukuran tinggi badan.
                            </li>
                            <li>
                                Tunggu hingga hasil berat badan dan tinggi badan menunjukkan
                                angka yang konstan, selanjutnya sistem akan menampilkan kategori{" "}
                                <b>Indeks Massa Tubuh (IMT)</b>, yaitu <b>kurus</b>, <b>normal</b>
                                , atau <b>obesitas</b>.
                            </li>
                            <li>
                                Setelah hasil muncul, klik <b>“Simpan dan Lanjutkan”</b> untuk
                                melanjutkan ke pemeriksaan berikutnya. Jika ingin mengulangi
                                pemeriksaan berat badan dan tinggi badan, klik{" "}
                                <b>“Ya dan Ulangi”</b>.
                            </li>
                            <li>
                                Pemeriksaan selanjutnya adalah pemeriksaan <b>gula darah</b>,
                                dilakukan dengan meletakkan jari telunjuk pada alat glukometer
                                yang berada di sisi kiri.
                            </li>
                            <li>
                                Masukkan jari telunjuk hingga indikator berwarna <b>hijau</b>,
                                kemudian tekan tombol di samping alat dan tunggu beberapa saat
                                hingga hasil pemeriksaan gula darah beserta kategorinya muncul (
                                <b>hipoglikemia</b>, <b>normal</b>, atau <b>hiperglikemia</b>).
                            </li>
                            <li>
                                Klik <b>“Simpan dan Lanjutkan”</b> untuk melanjutkan ke
                                pemeriksaan berikutnya. Jika ingin mengulangi pemeriksaan gula
                                darah, klik <b>“Ya dan Ulangi”</b>.
                            </li>
                            <li>
                                Pemeriksaan selanjutnya adalah pemeriksaan <b>tekanan darah</b>{" "}
                                sesuai dengan petunjuk yang ditampilkan pada Anjaswara.
                            </li>
                            <li>
                                Hasil pemeriksaan tekanan darah akan muncul di layar beserta
                                kategorinya, yaitu <b>hipotensi</b>, <b>normal</b>,{" "}
                                <b>prahipertensi</b>, atau <b>hipertensi</b>.
                            </li>
                            <li>
                                Klik <b>“Simpan dan Lanjutkan”</b> untuk melanjutkan. Jika ingin
                                mengulangi pemeriksaan tekanan darah, klik <b>“Ya dan Ulangi”</b>.
                            </li>
                            <li>
                                Setelah seluruh rangkaian pemeriksaan selesai, klik{" "}
                                <b>“Tidak, Kirim WhatsApp”</b> untuk mengirimkan hasil
                                pemeriksaan kesehatan mandiri ke WhatsApp.
                            </li>
                            <li>
                                Terakhir, klik <b>“Logout”</b> untuk keluar dari sistem
                                Anjaswara.
                            </li>
                        </ol>
                    </div>

                    <div className="rounded-xl bg-slate-50 border p-4 text-sm text-slate-700">
                        <b>Catatan:</b> Pastikan mengikuti petunjuk di layar dan posisi tubuh
                        sesuai arahan agar hasil pengukuran lebih akurat.
                    </div>
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
