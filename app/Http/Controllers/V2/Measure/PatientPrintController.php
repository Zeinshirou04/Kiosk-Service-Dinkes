<?php

namespace App\Http\Controllers\V2\Measure;

use Carbon\Carbon;
use Dompdf\Dompdf;
use Illuminate\Support\Str;
use App\Models\Patient\Measure;
use App\Models\Patient\Patients;
use App\Http\Controllers\Controller;
use App\Models\Patient\MeasureGlucose;
use App\Models\Patient\MeasureTension;
use Illuminate\Support\Facades\Storage;

class PatientPrintController extends Controller
{
    public function printPDF(string $nik) {
        $patient = Patients::where('nik', $nik)->select('nama_pasien', 'jenis_kelamin', 'tgl_lahir', 'kecamatan', 'alamat')->latest()->first();
        $glucose = MeasureGlucose::where('nik', $nik)->select('glucose')->latest()->first();
        $tension = MeasureTension::where('nik', $nik)->select('b_atas', 'b_bawah', 'denyut')->latest()->first();
        $weight = Measure::where('nik', $nik)->select('berat', 'tinggi')->latest()->first();
        $date = Carbon::now();
        $data = [
            'glucose' => ['glukosa' => $glucose->glucose, 'keterangan' => $this->getCategoryGlucose($glucose->glucose)],
            'weight' => [
                'berat' => $weight->berat,
                'tinggi' => $weight->tinggi,
            ],
            'tension' => [
                'sistole' => $tension->b_atas,
                'diastole' => $tension->b_bawah,
                'keterangan' => $this->getCategoryTension($tension->b_atas, $tension->b_bawah),
            ],
            'date' => sprintf("Semarang, %d %s %d", $date->day, $date->monthName, $date->year),
            'patient' => $patient
        ];

        // return view("raport.pdf", $data);

        // dd($data);

        $dompdf = new Dompdf();

        $dompdf->loadHtml(view("raport.pdf", $data));
        $dompdf->render();
        $output = $dompdf->output();
        $filename = "Laporan-" . $nik . ".pdf";
        // dd($filename);
        Storage::put('public/pdf/report/patient/' . $filename, $output);
        return response()->json([
            "status" => "Report Successfully Generated",
            "url" => url("https://kiosk.robotlintang.id/pdf/report/patient/" . $filename)
        ]);

    }

    public function getCategoryTension(int $sistole, int $diastole) {
        if (($sistole == 0) & ($diastole == 0)) return "Tidak Terdefinisi";
        if ($sistole < 120 && $diastole < 80) return "Normal";
        if ($sistole < 139 && $diastole < 89) return "Pra Hipertensi";
        if ($sistole < 159 && $diastole < 99) return "Hipertensi Tingkat 1";
        if ($sistole >= 160 && $diastole >= 100) return "Hipertensi Tingkat 2";
        if ($sistole > 140 && $diastole < 90) return "Hipertensi Sistolik Terisolasi";
        return "Tidak Terdefinisi";
    }

    public function getCategoryGlucose(int $glucose) {
        if ($glucose < 200) return "Normal";
        if ($glucose >= 200) return "Diabetes";
        return "Tidak Terdefinisi";
    }
}