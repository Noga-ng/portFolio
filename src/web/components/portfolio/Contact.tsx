import { type ReactElement } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaEnvelope,
    FaPhoneAlt,
    FaPaperPlane
} from "react-icons/fa";

export default function Contact(): ReactElement {

    return (

        <section
            id="contact"
            className="py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-indigo-400">

                        Contact

                    </p>

                    <h2 className="md:text-5xl text-3xl font-black mt-4">

                        Construisons quelque chose ensemble.

                    </h2>

                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto">

                        Vous avez un projet, une collaboration ou une opportunité ?
                        N'hésitez pas à me contacter.

                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Informations */}

                    <div className="space-y-8">

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                            <h3 className="text-2xl font-bold mb-6">

                                Restons en contact

                            </h3>

                            <div className="space-y-5">

                                <div className="flex items-center gap-4">

                                    <FaEnvelope className="text-indigo-400" />

                                    <span>

                                        nogagerma122@gmail.com

                                    </span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <FaPhoneAlt className="text-indigo-400" />

                                    <span>

                                        +261 32 80 766 99

                                    </span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <FaPhoneAlt className="text-indigo-400" />

                                    <span>

                                        +261 34 04 880 21

                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <a
                                href="https://github.com/noga-ng" target="_blank"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/noga-germainio-9173552bb" target="_blank"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://facebook.com/nogagermainio" target="_blank"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
                            >
                                <FaFacebook />
                            </a>

                        </div>

                    </div>

                    {/* Formulaire */}

                    <form
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6"
                    >

                        <input
                            type="text"
                            placeholder="Votre nom"
                            className="w-full rounded-xl bg-slate-900 border border-white/10 p-4 outline-none focus:border-indigo-500"
                        />

                        <input
                            type="email"
                            placeholder="Votre email"
                            className="w-full rounded-xl bg-slate-900 border border-white/10 p-4 outline-none focus:border-indigo-500"
                        />

                        <textarea
                            rows={6}
                            placeholder="Votre message..."
                            className="w-full rounded-xl bg-slate-900 border border-white/10 p-4 outline-none resize-none focus:border-indigo-500"
                        />

                        <button
                            className="
                            w-full
                            py-4
                            rounded-xl
                            bg-indigo-600
                            hover:bg-indigo-500
                            transition
                            flex
                            justify-center
                            items-center
                            gap-3"
                        >

                            Envoyer

                            <FaPaperPlane />

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}