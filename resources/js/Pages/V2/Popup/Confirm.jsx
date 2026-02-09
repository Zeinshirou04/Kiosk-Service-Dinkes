import { useState } from "react";
import PrimaryButton from "@/Components/V2/PrimaryButton";
import ConfirmPopup from "./ConfirmationPopup";

export default function Confirm({ isActive, setActive, no_hp, nik, state = "none", isAuthenticated = false, measure }) {
	let text = "";
	let preview = undefined;
	let title = undefined;
	let confirmMessage = undefined;
	let declineMessage = undefined;
	let keterangan = undefined;

	const handleGlucose = (glucose) => {
		if (glucose < 70) return "Rendah"; // Revisi logika sedikit biar aman
		if (glucose < 200) return "Normal";
		if (glucose >= 200) return "Tinggi"; // "Diabetes" mungkin terlalu menakutkan, "Tinggi" lebih umum
		return "Tidak Terdefinisi";
	};

	const handleBlood = (sistole, diastole) => {
		if ((sistole == 0) & (diastole == 0)) return "Tidak Terdefinisi";
		if (sistole < 120 && diastole < 80) return "Normal";
		if (sistole < 139 && diastole < 89) return "Pra Hipertensi";
		if (sistole < 159 && diastole < 99) return "Hipertensi Tingkat 1";
		if (sistole >= 160 && diastole >= 100) return "Hipertensi Tingkat 2";
		if (sistole > 140 && diastole < 90) return "Hipertensi Sistolik Terisolasi";
		return "Tidak Terdefinisi";
	};

	switch (state) {
		case "weight":
			text = "Apakah anda ingin melakukan pengukuran Tinggi dan Berat Badan?";
			break;

		case "glucose":
			text = "Apakah anda ingin mengulang pengukuran atau melanjutkan pengukuran Gula Darah?";
			preview = (
				<article className="text-center flex flex-col gap-3 text-4xl">
					<h4 className="font-bold">Data Berhasil Disimpan!</h4>
					<p>Berat Badan: {measure.berat}kg</p>
					<p>Tinggi Badan: {measure.tinggi}cm</p>
				</article>
			);
			confirmMessage = "Ya, Ulangi";
			declineMessage = "Tidak, Lanjutkan";
			break;

		case "blood":
			text = "Apakah anda ingin mengulang pengukuran atau melanjutkan pengukuran Tensi/Tekanan Darah?";
			keterangan = handleGlucose(measure.glucose);
			preview = (
				<article className="text-center flex flex-col gap-3 text-4xl">
					<h4 className="font-bold">Data Berhasil Disimpan!</h4>
					<p>Kadar Gula Darah: {measure.glucose}mg/dL</p>
					<p>Keterangan: {keterangan}</p>
				</article>
			);
			confirmMessage = "Ya, Ulangi";
			declineMessage = "Tidak, Lanjutkan";
			break;

		case "confirmation":
			let no_hp_sent = no_hp.toString().indexOf("8") == 0 ? `62${no_hp}` : no_hp.toString();
			text = `Apakah anda ingin mengulang pengukuran atau melakukan kirim wa ke +${no_hp_sent}?`;
			keterangan = handleBlood(parseInt(measure.b_atas), parseInt(measure.b_bawah));
			preview = (
				<article className="text-center flex flex-col gap-3 text-4xl">
					<h4 className="font-bold">Data Berhasil Disimpan!</h4>
					<p>Sistole: {measure.b_atas}mmHg</p>
					<p>Diastole: {measure.b_bawah}mmHg</p>
					<p>Kesimpulan: {keterangan}</p>
				</article>
			);
			confirmMessage = "Ya, Ulangi";
			declineMessage = "Tidak, Kirim WA";
			break;

		case "finished":
			text =
				"Terima Kasih telah menggunakan layanan Anjungan Kesehatan Mandiri. Silahkan Cetak Struk lalu tekan LOG OUT.";
			title = (
				<header className="w-full text-5xl font-bold">
					<h4 className="text-center">Pengukuran Selesai!</h4>
				</header>
			);
			// INI BAGIAN PENTINGNYA: Kita aktifkan kedua tombol
			confirmMessage = "Cetak Struk"; // Tombol Kiri (Hijau)
			declineMessage = "Log Out"; // Tombol Kanan (Merah)
			break;

		default:
			text = "Apakah anda sudah pernah mendaftar sebelumnya?";
			break;
	}

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
								ConfirmActive: !prevState.ConfirmActive,
							}));
						}}
					>
						<i className="fa-solid fa-x text-4xl"></i>
					</button>
					<ConfirmPopup
						title={title}
						isActive={isActive}
						setActive={setActive}
						text={text}
						confirmMessage={confirmMessage ?? "Ya"}
						declineMessage={declineMessage ?? "Tidak"}
						isAuthenticated={isAuthenticated}
						state={state}
						preview={preview}
						no_hp={no_hp}
						nik={nik}
					/>
				</div>
			</div>
		</div>
	);
}
