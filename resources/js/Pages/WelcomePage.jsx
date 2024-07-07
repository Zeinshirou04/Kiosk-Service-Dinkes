import { Head } from "@inertiajs/react";
import NavAside from "@/Components/AsideMenu";

export default function Welcome({ news }) {
    return (
        <section id="wrapper" className="w-svw h-svh">
            <Head title="Anjungan Kios Mandiri" />
            <div
                id="menuWrapper"
                className="w-full h-full bg-[#F2F9F1] mx-auto flex flex-row"
                style={{
                    maxWidth: "1080px",
                    maxHeight: "1920px",
                }}
            >
                <NavAside />
                <main className="w-4/6 h-full px-8 py-12 flex flex-col gap-16">
                    <header className="px-2 py-2 max-h-32 h-full">
                        <h1 className="font-extrabold text-6xl text-center text-[#388E3C]">
                            Anjungan Kesehatan Mandiri
                        </h1>
                    </header>
                    <section id="menuPasien" className="h-full w-full">
                        <div className="w-full max-h-80 h-full relative">
                            <div className="absolute w-full h-full bg-black/60"></div>
                            <figure className="w-full h-full">
                                <img
                                    className="w-full h-full object-cover"
                                    src='assets/img/building/puskesmas_poncol.jpg'
                                    alt="Gambar Puskesmas Poncol"
                                />
                            </figure>
                            <figcaption className="absolute bottom-0 px-4 py-4 text-6xl text-white font-bold">
                                <h2>
                                    Selamat Datang
                                </h2>
                                <h6 className="text-lg font-light mt-2">
                                    Di Anjungan Kesehatan Mandiri Puskesmas Poncol
                                </h6>
                            </figcaption>
                        </div>
                        <div className="flex flex-row gap-4 w-full h-1/3 mt-4">
                            <div className="w-full max-h-80 h-full relative">
                                <a href={news[3]["source_url"]}>
                                    <figure className="w-full h-full">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={news[3]["image_url"]}
                                            alt={
                                                "Gambar Header Berita " +
                                                news[3]["title"]
                                            }
                                        />
                                    </figure>
                                </a>
                                <div className="absolute bottom-0 w-full h-24 flex flex-col justify-center px-4 bg-[#DDEEDF]/80">
                                    <figcaption className="text-black w-full">
                                        <a
                                            href={news[3]["link"]}
                                            target="_blank"
                                        >
                                            <p className="text-md font-extrabold hover:underline">
                                                {news[3]["title"]}
                                            </p>
                                        </a>
                                        <a href={news[3]["source_url"]}>
                                            <p className="text-sm font-normal hover:underline">
                                                {" "}
                                                Sumber: {news[3]["source_id"]}
                                            </p>
                                        </a>
                                    </figcaption>
                                </div>
                            </div>
                            <div className="w-full max-h-80 h-full relative">
                                <a href={news[7]["source_url"]}>
                                    <figure className="w-full h-full">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={news[7]["image_url"]}
                                            alt={
                                                "Gambar Header Berita " +
                                                news[7]["title"]
                                            }
                                        />
                                    </figure>
                                </a>
                                <div className="absolute bottom-0 w-full h-24 flex flex-col justify-center px-4 bg-[#DDEEDF]/80">
                                    <figcaption className="text-black w-full">
                                        <a
                                            href={news[7]["link"]}
                                            target="_blank"
                                        >
                                            <p className="text-md font-extrabold hover:underline">
                                                {news[7]["title"]}
                                            </p>
                                        </a>
                                        <a href={news[7]["source_url"]}>
                                            <p className="text-sm font-normal hover:underline">
                                                {" "}
                                                Sumber: {news[7]["source_id"]}
                                            </p>
                                        </a>
                                    </figcaption>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}
