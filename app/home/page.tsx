'use client'
import { poppins } from '@/app/ui/fonts';


export default function Page() {
    return (
        <main className="flex min-h-screen flex-col justify-start px-4">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:w-2/3">
                    <section className="mt-4 mb-10">
                        <h1 className={`${poppins.className} text-xl lg:text-3xl mb-2 text-left`}>
                            <strong>Misión</strong>
                        </h1>
                        <p className={`${poppins.className} text-xl lg:text-3xl text-left`}>
                            Ofrecer a nuestros clientes una experiencia única con café de alta calidad, reflejando nuestra pasión por el café mexicano. Nos comprometemos a fomentar el comercio justo, creando un impacto positivo en cada paso de nuestra cadena de suministro.
                        </p>
                    </section>
                    <section className="mb-10">
                        <h1 className={`${poppins.className} text-xl lg:text-3xl mb-2 text-left`}>
                            <strong>Visión</strong>
                        </h1>
                        <p className={`${poppins.className} text-xl lg:text-3xl text-left`}>
                            Ser reconocidos como líderes en la industria del café, no solo por la calidad de nuestros productos, sino también por nuestro compromiso con la sostenibilidad y el desarrollo de las comunidades productoras. Aspiramos a establecer una conexión más profunda entre los amantes del café y el origen de sus granos, promoviendo una apreciación más consciente y responsable del café.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}