<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans+Display:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <title>Document</title>
    <style>
        * {
            margin: 0px;
        }

        table {
            font-family: "Lato", sans-serif;
            width: 100%;
            padding: 1rem 2rem;
        }

        table tr:nth-child(1) th {
            color: slategrey;
        }

        table tr:nth-child(1) th:nth-child(1) {
            text-align: left;
        }

        table tr:nth-child(1) th:nth-child(2) {
            text-align: right;
        }

        table tr td {
            text-align: left;
            padding: 0.5rem 0rem;
            margin: 0px;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <th colspan="3">Anjungan Kesehatan Mandiri</th>
            <th colspan="3">{{ $date }}</th>
        </tr>
        <tr>
            <td colspan="6" style="margin-bottom: 3rem"></td>
        </tr>
        <tr>
            <td colspan="6">
                <h1 style="color: green; font-size: 64px;">LAPORAN HASIL PEMERIKSAAN PASIEN</h1>
            </td>
        </tr>
        <tr>
            <td colspan="6">
                <div style="width: 100%; height: 6px; background-color: green;"></div>
            </td>
        </tr>
        <tr>
            <td style="height: 12px;" colspan="6">

            </td>
        </tr>
        <tr>
            <td colspan="6" rowspan="1">
                <h6 style="color: green; font-size: 32px; margin-top: 3rem;">Informasi Pribadi</h6>
            </td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Nama
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $patient->nama_pasien }}
            </td>
            <td colspan="3"></td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Kelamin
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $patient->jenis_kelamin == 'L' ? 'Laki-Laki' : 'Perempuan' }}
            </td>
            <td colspan="3"></td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Tanggal Lahir
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $patient->tgl_lahir }}
            </td>
            <td colspan="3"></td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Alamat
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $patient->alamat }}
            </td>
            <td colspan="3"></td>
        </tr>
        <tr>
            <td colspan="6" rowspan="1">
                <h6 style="color: green; font-size: 32px; margin-top: 3rem;">Hasil Pengukuran</h6>
            </td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Berat Badan
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $weight['berat'] }}kg
            </td>
            <td colspan="3"></td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Tinggi Badan
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $weight['tinggi'] }}cm
            </td>
            <td colspan="3"></td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Glukosa
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $glucose['glukosa'] }}mg/dL
            </td>
            <td style="font-weight: 700;">
                Keterangan
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $glucose['keterangan'] }}
            </td>
        </tr>
        <tr>
            <td style="font-weight: 700;">
                Tekanan Darah
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $tension['sistole'] }} / {{ $tension['diastole'] }}mmHg
            </td>
            <td style="font-weight: 700;">
                Keterangan
            </td>
            <td style="width: 6px; font-weight: 700;">
                :
            </td>
            <td>
                {{ $tension['keterangan'] }}
            </td>
        </tr>
    </table>
</body>

</html>
