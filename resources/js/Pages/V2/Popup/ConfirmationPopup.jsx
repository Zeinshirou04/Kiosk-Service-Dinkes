import PrimaryButton from "@/Components/V2/PrimaryButton";
import DangerButton from "@/Components/V2/DangerButton";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import axios from "axios";
import printJS from "print-js";

// HAPUS: import { useReactToPrint } from "react-to-print";
// HAPUS: import { PrintReceipt } from "@/Components/PrintReceipt";

export default function ConfirmPopup({
	title = undefined,
	isActive = false,
	setActive,
	text,
	no_hp,
	nik,
	confirmMessage = "Sudah",
	declineMessage = "Belum",
	isAuthenticated = false,
	state = "none",
	preview = undefined,
}) {
	const [isPrinting, setIsPrinting] = useState(false);

	// --- FUNGSI CETAK MANUAL (PERBAIKAN FINAL: PAS 58MM & TINGGI OTOMATIS) ---
	const printThermalManual = (data) => {
		const iframe = document.createElement("iframe");
		// Sembunyikan iframe dari pandangan
		iframe.style.position = "fixed";
		iframe.style.right = "0";
		iframe.style.bottom = "0";
		iframe.style.width = "0";
		iframe.style.height = "0";
		iframe.style.border = "0";
		document.body.appendChild(iframe);

		const content = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Struk-${nik}</title>
                <style>
                    /* 1. RESET TOTAL HALAMAN */
                    @page { 
                        size: 58mm auto; /* Lebar 58mm, Tinggi menyesuaikan isi */
                        margin: 0mm;     /* Hilangkan margin bawaan printer */
                    }

                    /* 2. RESET BODY AGAR TIDAK ADA JARAK */
                    html, body {
                        width: 58mm;         /* Paksa lebar body pas 58mm */
                        margin: 0 !important; /* Pastikan tidak ada margin */
                        padding: 0 !important; /* PENTING: Hapus padding agar tidak geser */
                        background-color: #fff;
                        font-family: 'Courier New', monospace;
                        font-size: 9pt;       /* Ukuran font standar struk */
                    }

                    /* 3. CONTAINER UTAMA */
                    .wrapper {
                        width: 100%;
                        box-sizing: border-box; /* Agar padding tidak menambah lebar */
                        /* TIPS: Jika hasil print terlalu mepet kiri atau kanan, 
                           atur margin-left di sini. Contoh: margin-left: 2px;
                        */
                        margin: 0; 
                        padding: 2px 5px 10px 2px; /* Sedikit jarak aman di dalam: Atas Kanan Bawah Kiri */
                    }

                    /* 4. CSS TAMBAHAN UNTUK KONTEN */
                    .center { text-align: center; }
                    .right { text-align: right; }
                    .bold { font-weight: bold; }
                    
                    .line { 
                        border-bottom: 1px dashed #000; 
                        margin: 5px 0; 
                        width: 100%; 
                    }
                    
                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                    }
                    
                    td { 
                        vertical-align: top; 
                        padding: 0; 
                    }
                    
                    .small { font-size: 8pt; }
                </style>
            </head>
            <body>
                <div class="wrapper">
                    <div class="center bold" style="font-size: 11pt; margin-bottom: 2px;">ANJUNGAN KESEHATAN <br>MANDIRI</div>
                    <div class="center small">Dinas Kesehatan</div>
                    <div class="center small">${data.tanggal || "-"}</div>
                    <div class="line"></div>
                    
                    <div style="margin: 5px 0;">
                        <div class="small">Nama: ${data.nama || "Pasien"}</div>
                    </div>
                    <div class="line"></div>

                    <table>
                        <tr>
                            <td>TB/BB</td>
                            <td class="right bold">${data.tinggi || 0}/${data.berat || 0}</td>
                        </tr>
                        <tr>
                            <td>BMI</td>
                            <td class="right bold">${data.bmi || 0}</td>
                        </tr>
                        <tr><td colspan="2" class="small italic" style="text-align:right; padding-bottom: 5px;">(${data.bmi_ket || "-"})</td></tr>
                        
                        <tr><td colspan="2" class="line"></td></tr>
                        
                        <tr>
                            <td style="padding-top: 5px;">Gula Darah</td>
                            <td class="right bold" style="padding-top: 5px;">${data.gula || "-"}</td>
                        </tr>
                        <tr><td colspan="2" class="small italic" style="text-align:right; padding-bottom: 5px;">Ket: ${data.gula_ket || "-"}</td></tr>
                        
                        <tr><td colspan="2" class="line"></td></tr>

                        <tr>
                            <td style="padding-top: 5px;">Tensi</td>
                            <td class="right bold" style="padding-top: 5px;">${data.tensi || "-"}</td>
                        </tr>
                    </table>

                    <div class="line"></div>
                    <div class="center small" style="margin-top: 10px;">Tetap Jaga Kesehatan!</div>
                    <div class="center small">Terima Kasih</div>
                    <br/>
                    <div class="center">.</div> </div>
            </body>
            </html>
        `;

		const doc = iframe.contentWindow.document;
		doc.open();
		doc.write(content);
		doc.close();

		setTimeout(() => {
			iframe.contentWindow.focus();
			iframe.contentWindow.print();

			// Hapus iframe setelah selesai
			setTimeout(() => {
				document.body.removeChild(iframe);
				setIsPrinting(false);
			}, 1000);
		}, 500);
	};

	// --- LOGIKA TOMBOL CETAK ---
	const processPrintOnly = async () => {
		if (isPrinting) return;
		setIsPrinting(true);

		try {
			// Ambil data dari server
			const response = await axios.get(route("v2.print.summary"));

			// Langsung panggil fungsi cetak manual
			printThermalManual(response.data);
		} catch (error) {
			console.error("Gagal ambil data, cetak dummy.", error);
			// Data Dummy Fallback
			printThermalManual({
				nama: "PASIEN TEST",
				tanggal: new Date().toLocaleString(),
				tinggi: "170",
				berat: "65",
				bmi: "22.5",
				bmi_ket: "Normal",
				gula: "110",
				gula_ket: "Normal",
				tensi: "120/80",
			});
		}
	};

	// --- LOGIKA LAINNYA (SAMA SEPERTI SEBELUMNYA) ---
	const messageWhatsapp = async () => {
		try {
			const response = await axios.get(route("patient.print.pdf", { nik: nik }));
			await axios
				.post(
					"https://api.watzap.id/v1/send_message",
					{
						api_key: import.meta.env.VITE_WATZAPP_API_KEY,
						number_key: import.meta.env.VITE_WATZAPP_NUMBER_KEY,
						phone_no: no_hp.toString().indexOf("8") == 0 ? `62${no_hp}` : no_hp.toString(),
						message: `Halo.. Link Hasil Pengukuran: ${response.data.url}`,
					},
					{ headers: { "Content-Type": "application/json" } },
				)
				.then(() => {
					const pdfURL = `https://kiosk.robotlintang.id/pdf/report/patient/Laporan-${nik}.pdf`;
					try {
						printJS(pdfURL);
						setTimeout(() => {
							Inertia.visit(route("v2.home.index", { _query: { state: "finished" } }));
						}, 3000);
					} catch (error) {
						console.error(error);
					}
				});
		} catch (err) {
			Inertia.visit(route("v2.home.index", { _query: { state: "finished" } }));
		}
	};

	const handleConfirm = () => {
		if (!isAuthenticated) return Inertia.visit(route("login.create"));
		switch (state) {
			case "weight":
			case "glucose":
				setActive((prevState) => ({ ...prevState, ConfirmActive: !prevState.ConfirmActive }));
				setTimeout(() => setActive((prev) => ({ ...prev, WeightTutorialActive: !prev.WeightTutorialActive })), 500);
				break;
			case "blood":
				Inertia.visit(route("v2.home.index", { _query: { state: "glucose" } }));
				break;
			case "confirmation":
				Inertia.visit(route("v2.home.index", { _query: { state: "blood" } }));
				break;
			case "finished":
				// TOMBOL CETAK
				processPrintOnly();
				break;
			default:
				break;
		}
	};

	const handleDecline = () => {
		if (!isAuthenticated) return Inertia.visit(route("register.create"));
		switch (state) {
			case "weight":
			case "glucose":
				setActive((prevState) => ({ ...prevState, ConfirmActive: !prevState.ConfirmActive }));
				setTimeout(() => setActive((prev) => ({ ...prev, GlucoseTutorialActive: !prev.GlucoseTutorialActive })), 500);
				break;
			case "blood":
				setActive((prevState) => ({ ...prevState, ConfirmActive: !prevState.ConfirmActive }));
				setTimeout(() => setActive((prev) => ({ ...prev, BloodTutorialActive: !prev.BloodTutorialActive })), 500);
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
		// Tidak perlu lagi ada div tersembunyi untuk struk
		<div className={"h-auto w-full mt-8 " + (isActive ? "" : "hidden")}>
			<div className="w-full">
				<h6 className="text-4xl text-black text-center font-semibold">Anjungan Kesehatan Mandiri</h6>
			</div>
			<div className="w-full px-12 mt-8">{preview ?? title}</div>
			<div className="w-full px-12 mt-8">
				<article className="text-center flex flex-col gap-3">
					<h4 className="text-4xl">{text}</h4>
				</article>
			</div>
			<div className="mx-auto mt-8">
				<div className="w-full flex flex-row justify-center gap-4">
					<PrimaryButton
						onClick={handleConfirm}
						className="text-3xl"
						text={isPrinting ? "Mencetak..." : confirmMessage}
						disabled={isPrinting}
					/>

					<DangerButton onClick={handleDecline} className="text-3xl" text={declineMessage} />
				</div>
			</div>
		</div>
	);
}
