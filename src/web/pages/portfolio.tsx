import Background from "../components/portfolio/Background";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import { type ReactElement } from "react";
import Project from "../components/portfolio/Projects";

export default function Portfolio():ReactElement {

    return (

        <>

            <Background />

            <Navbar />

            <main className="text-white">

                <Hero />

                <About />

                <Skills />

                <Project />

                <Contact />

            </main>

            <Footer />

        </>

    );

}