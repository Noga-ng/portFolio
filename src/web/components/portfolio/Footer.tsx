import { type ReactElement } from "react";

export default function Footer(): ReactElement {

    return (

        <footer className="border-t border-white/10 py-10">

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                <div>

                    <h2 className="text-2xl text-white font-bold">

                        Noga Germainio

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Full-Stack Developer

                    </p>

                </div>

                <p className="text-slate-500 mt-6 md:mt-0">

                    © 2026 Tous droits réservés.

                </p>

            </div>

        </footer>

    );

}