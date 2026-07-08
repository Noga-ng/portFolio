import ScrollProgress from "../components/portfolio/scrollProgresse";
import Cursor from "../components/portfolio/Cursor";
import Portfolio from "./portfolio";
import type { ReactElement } from "react";

export default function Layout():ReactElement {
    return (
        <>
            <Cursor />
            <ScrollProgress />
            <Portfolio />
        </>
    );
}