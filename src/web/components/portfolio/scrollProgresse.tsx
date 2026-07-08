import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.body.scrollHeight - window.innerHeight;

            setProgress((scrollTop / docHeight) * 100);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-0.75 z-999 bg-transparent">
            <div
                className="h-full bg-indigo-500 transition-all"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}