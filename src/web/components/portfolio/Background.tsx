import type { ReactElement } from "react";

export default function Background(): ReactElement {

    return (

        <div className="fixed inset-0 -z-50 overflow-hidden">

            {/* Gradient */}

            <div className="absolute inset-0 bg-linear-to-br
            from-slate-950
            via-slate-900
            to-indigo-950" />

            {/* Glow */}

            <div
                className="
                absolute
                top-20
                left-20
                w-80
                h-80
                rounded-full
                bg-indigo-500/20
                blur-[120px]
                animate-pulse"
            />

            <div
                className="
                absolute
                bottom-10
                right-20
                w-96
                h-96
                rounded-full
                bg-purple-500/20
                blur-[140px]
                animate-pulse"
            />

            {/* Grid */}

            <div
                className="
                absolute
                inset-0
                bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
                bg-size-[60px_60px]"
            />

        </div>

    );

}