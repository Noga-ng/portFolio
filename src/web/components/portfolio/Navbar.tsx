import { type ReactElement, useEffect, useState } from "react";
import noga from "../../../assets/noga.png";

export default function Navbar(): ReactElement {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const scroll = () => {

            setScrolled(window.scrollY > 30);

        };

        window.addEventListener("scroll", scroll);

        return () => window.removeEventListener("scroll", scroll);

    }, []);

    return (

        <header
            className={`

            fixed

            top-0

            left-0

            right-0

            z-50

            transition-all

            duration-500

            ${
                scrolled
                    ? "backdrop-blur-xl bg-slate-950/70 border-b border-white/10"
                    : "bg-transparent"
            }

            `}
        >

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

                <div className="flex items-center gap-4">

                    <img
                        src={noga}
                        alt="logo"
                        className="w-11 h-11 rounded-full object-cover"
                    />

                    <div>

                        <h1 className="font-bold text-xl text-white">
                            Noga Germainio
                        </h1>

                        <p className="text-xs text-slate-400">
                            Full-Stack Developer
                        </p>

                    </div>

                </div>

                <nav className="hidden md:flex gap-8">

                    {[
                        "Home",
                        "About",
                        "Skills",
                        "Projects",
                        "Contact"
                    ].map((item) => (

                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="
                            text-slate-300
                            hover:text-white
                            transition
                            relative

                            after:absolute
                            after:left-0
                            after:-bottom-1
                            after:h-0.5
                            after:w-0
                            after:bg-indigo-400
                            hover:after:w-full
                            after:transition-all"
                        >

                            {item}

                        </a>

                    ))}

                </nav>

            </div>

        </header>

    );

}