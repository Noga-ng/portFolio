
import type { ReactElement } from "react";
import { FaCode, FaDatabase, FaServer, FaRocket } from "react-icons/fa";

const cards = [
    {
        icon: <FaCode size={26} />,
        title: "Développement",
        text: "Applications web modernes en PHP,GoLang, React et TypeScript."
    },
    {
        icon: <FaServer size={26} />,
        title: "Architecture",
        text: "MVC, Routing, Middleware, Dependency Injection, REST API."
    },
    {
        icon: <FaDatabase size={26} />,
        title: "Bases de données",
        text: "PostgreSQL, MySQL et SQLite avec optimisation des requêtes."
    },
    {
        icon: <FaRocket size={26} />,
        title: "Performance",
        text: "Code maintenable, sécurisé et conçu pour évoluer."
    }
];

export default function About(): ReactElement {

    return (

        <section
            id="about"
            className="py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}

                    <div data-aos="fade-right">

                        <p className="uppercase tracking-[5px] text-indigo-400 font-semibold">

                            À propos

                        </p>

                        <h2 className="md:text-5xl text-3xl font-black mt-4">

                            Je conçois des applications robustes
                            avec une architecture pensée pour durer.

                        </h2>

                        <p className="text-slate-400 mt-8 leading-8">

                            Je suis un developpeur full-stack autodidact passionné par le développement logiciel,
                            j'aime construire des solutions modernes,
                            performantes et évolutives.

                            Mon objectif est d'écrire un code propre,
                            réutilisable et facile à maintenir.

                        </p>

                        <p className="text-slate-400 mt-6 leading-8">

                            Je travaille principalement avec PHP, Go(GoLang), JavaScript
                            React, TypeScript, PostgreSQL, MySQL,SQLite.

                            J'accorde une attention particulière
                            aux performances, à la sécurité
                            et à la qualité de l'expérience utilisateur.

                        </p>

                    </div>

                    {/* RIGHT */}

                    <div
                        className="grid sm:grid-cols-2 gap-6"
                        data-aos="fade-left"
                    >

                        {

                            cards.map((card) => (

                                <div
                                    key={card.title}
                                    className="
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-8
                                    hover:-translate-y-2
                                    hover:border-indigo-500
                                    transition-all
                                    duration-500"
                                >

                                    <div
                                        className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-indigo-500/20
                                        flex
                                        items-center
                                        justify-center
                                        text-indigo-400"
                                    >

                                        {card.icon}

                                    </div>

                                    <h3 className="mt-6 text-xl font-bold">

                                        {card.title}

                                    </h3>

                                    <p className="text-slate-400 mt-4">

                                        {card.text}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </div>

        </section>

    );

}