import { Head } from "@inertiajs/react";

export default function Guest({
    children,
    title,
    className = ""
}) {
    return (
        <main
            className="h-screen w-screen mx-auto text-gray-800 relative overflow-x-hidden"
            style={{
                maxWidth: "1080px",
                maxHeight: "1920px",
            }}
        >
            <Head title={title} />
            <section className="h-full w-full flex flex-col">
                <header className="w-full h-9 bg-gradient-to-b from-green-400 to-green-400/90 flex flex-col justify-center shadow-md shadow-black">
                    <h1 className="text-lg font-header text-center">
                        Dinas Kesehatan Kota Semarang
                    </h1>
                </header>
                <section className="grow h-full bg-gray-50 flex flex-col justify-between">
                    <section className={"h-full grow " + className}>
                        {children}
                    </section>
                    <footer className="h-8"></footer>
                </section>
            </section>
        </main>
    );
}
