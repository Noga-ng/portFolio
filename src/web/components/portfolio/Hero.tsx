import { FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import noga_ph from '../../../assets/noga_ph.jpg';
import { useTyping } from "./HeroAnimation";
import mycv from "../../../assets/cvEnFrançais.pdf";
import type { ReactElement } from "react";

export default function Hero(): ReactElement {

    return (
        <section id="home" className="min-h-screen flex items-center pt-24">

            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}
                    <motion.div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 mb-8">
                         🟢 Disponible
                        </div>

                        <h1 className="text-4xl md:text-7xl font-black leading-tight">
                          Bonjour,
                            <br />
                           je suis
                            
                            <span className="block bg-linear-to-r from-indigo-400 md:text-6xl via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                               {useTyping("ZAFININGELY NOGA Germainio")}
                            </span>
                        </h1>

                        <p className="mt-8 text-lg text-slate-400 max-w-xl">
                            Développeur Full-Stack spécialisé en architecture logicielle, performance et outils modernes.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <a href="#projects" className="px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 cursor-pointer flex items-center gap-3">
                                Voir projets <FaArrowRight />
                            </a>

                            <a href="https://github.com/noga-ng" target="_blank" className="px-7 py-4 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/5 flex items-center gap-3">
                                <FaGithub /> GitHub
                            </a>

                            <a href={mycv} download className="px-7 py-4 rounded-2xl border border-white/10 hover:bg-white/5 cursor-pointer flex items-center gap-3">
                                <FaDownload /> CV
                            </a>

                        </div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div className="flex justify-center items-center">

                        <div className="relative flex justify-center items-center">

                            <div className="absolute w-96 h-96 rounded-full bg-indigo-500/30 blur-[120px]" />

                            <div className="md:w-90 md:h-90 h-70 w-70 rounded-full p-2 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-400">

                                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                                    <img src={noga_ph} alt="" className="w-full h-full object-cover" />
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}
