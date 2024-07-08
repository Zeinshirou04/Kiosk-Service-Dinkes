export default function Identitas({ data }) {
    return (
        <div className="w-full shadow-md shadow-gray-400 rounded-md border-2 px-2 py-2">
            <div className="w-full overflow-x-auto">
                <table className="min-w-full w-auto text-left rounded-md text-nowrap">
                    <tbody>
                        <tr className="border-b-2 bg-gray-200/50">
                            <th className="pt-2 pl-3 pb-2 pr-2">NIK</th>
                            <td className="pt-2 pb-2 pr-8">: {data.nik}</td>
                            <th className="pt-2 pb-2 pr-2">No. HP</th>
                            <td className="pt-2 pb-2 pr-3">: {data.no_hp}</td>
                        </tr>
                        <tr className="border-b-2">
                            <th className="pt-2 pl-3 pb-2 pr-2">Nama</th>
                            <td className="pt-2 pb-2 pr-8">: {data.nama_pasien}</td>
                            <th className="pt-2 pb-2 pr-2">Alamat</th>
                            <td className="pt-2 pb-2 pr-3">: {data.alamat}</td>
                        </tr>
                        <tr className="border-b-2 bg-gray-200/50">
                            <th className="pt-2 pl-3 pb-2 pr-2">
                                Tanggal Lahir
                            </th>
                            <td className="pt-2 pb-2 pr-8">
                                : {data.tgl_lahir}
                            </td>
                            <th className="pt-2 pb-2 pr-2">Usia</th>
                            <td className="pt-2 pb-2 pr-3">: {data.umur}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
