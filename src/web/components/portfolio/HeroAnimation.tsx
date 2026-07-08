import { useEffect, useState } from "react";

export function useTyping(text: string, speed = 60) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setDisplay(text.slice(0, i));
            i++;

            if (i > text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text]);

    return display;
}