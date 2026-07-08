import { useEffect, useState } from "react";

export default function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-9999"
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
        >
            <div className="w-6 h-6 rounded-full bg-indigo-400/50 blur-sm" />
        </div>
    );
}