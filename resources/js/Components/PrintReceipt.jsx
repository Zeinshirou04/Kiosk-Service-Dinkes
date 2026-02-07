import React from "react";

export const PrintReceipt = React.forwardRef(({ data }, ref) => {
	// Data Dummy (Bypass)
	const safeData =
		data && data.nama
			? data
			: {
					nama: "PASIEN TEST",
					tanggal: new Date().toLocaleString("id-ID"),
					tinggi: "0",
					berat: "0",
					bmi: "0",
					bmi_ket: "-",
					gula: "0",
					gula_ket: "-",
					tensi: "-",
				};

	return (
		// UBAH DISINI: w-[80mm] JADI w-[58mm]
		<div ref={ref} className="p-1 text-black font-mono text-xs w-[58mm] bg-white">
			{/* Header */}
			<div className="text-center mb-2 border-b border-dashed border-black pb-2">
				<h2 className="font-bold text-sm uppercase">Anjungan Kesehatan</h2>
				<p className="text-[10px] mt-1">{safeData.tanggal}</p>
			</div>

			{/* Info Pasien */}
			<div className="mb-2 text-[10px] border-b border-dashed border-black pb-1">
				<p>N: {safeData.nama}</p>
			</div>

			{/* Hasil Pengukuran */}
			<table className="w-full text-left mb-2 text-[10px]">
				<tbody>
					<tr>
						<td>TB/BB</td>
						<td className="text-right font-bold">
							{safeData.tinggi}/{safeData.berat}
						</td>
					</tr>
					<tr>
						<td>BMI</td>
						<td className="text-right font-bold">{safeData.bmi}</td>
					</tr>
					<tr>
						<td className="text-[9px] italic" colSpan="2">
							({safeData.bmi_ket})
						</td>
					</tr>
					<tr className="border-t border-dashed border-gray-400">
						<td className="pt-1">Gula</td>
						<td className="text-right font-bold pt-1">{safeData.gula}</td>
					</tr>
					<tr>
						<td className="text-[9px] italic" colSpan="2">
							Ket: {safeData.gula_ket}
						</td>
					</tr>
					<tr className="border-t border-dashed border-gray-400">
						<td className="pt-1">Tensi</td>
						<td className="text-right font-bold pt-1">{safeData.tensi}</td>
					</tr>
				</tbody>
			</table>

			{/* Footer */}
			<div className="text-center mt-4 border-t border-dashed border-black pt-1">
				<p className="text-[10px]">Tetap Jaga Kesehatan!</p>
			</div>

			{/* CSS Print: Ubah size ke 58mm */}
			<style type="text/css" media="print">
				{`
                    @page { size: 58mm auto; margin: 0mm; }
                    body { margin: 2mm; }
                `}
			</style>
		</div>
	);
});

PrintReceipt.displayName = "PrintReceipt";
