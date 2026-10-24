import { useState } from 'react';
import {
  FaArrowRight, FaArrowUpRightFromSquare, FaBars, FaCheck, FaCode,
  FaDatabase, FaDownload, FaEnvelope, FaGithub, FaLocationDot,
  FaPhone, FaServer, FaXmark,
} from 'react-icons/fa6';
import ProjectList from '../components/portfolio/Projects';
import { stack } from '../data/portfolio';

const navigation = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
];

const email = 'nogagerma122@gmail.com';
const github = 'https://github.com/Noga-ng';
const cv = '/CV-Noga-Germainio.pdf';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container-wide flex min-h-20 items-center justify-between gap-4">
        <a href="#accueil" className="group flex items-center gap-3" aria-label="Noga Germainio, revenir à l’accueil" onClick={() => setOpen(false)}>
          <span className="flex size-11 items-center justify-center rounded-xl border border-teal-300/25 bg-teal-400/10 font-black tracking-tight text-teal-200 group-hover:bg-teal-400/20">NG.</span>
          <span className="hidden flex-col sm:flex"><strong className="text-sm tracking-wide text-white">NOGA GERMAINIO</strong><span className="text-xs text-slate-400">Backend & Full-Stack</span></span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navigation.map(link => <a key={link.href} href={link.href} className="nav-link">{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="button button--primary hidden sm:inline-flex">Me contacter <FaArrowRight aria-hidden="true" /></a>
          <button type="button" className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(value => !value)}>
            {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Navigation mobile" className="border-t border-white/10 bg-[#0a1221] px-6 py-4 lg:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-1">
          {navigation.map(link => <a key={link.href} href={link.href} className="rounded-lg px-4 py-3 text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>{link.label}</a>)}
          <a href="#contact" className="rounded-lg px-4 py-3 font-semibold text-teal-200 hover:bg-white/10" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </nav>}
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
        <div>
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-teal-300/25 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-200"><span className="size-2 rounded-full bg-teal-300" aria-hidden="true" />Ouvert aux opportunités · Madagascar</p>
          <p className="section-kicker mb-4">Bonjour, je suis Noga Germainio</p>
          <h1 className="max-w-3xl text-[clamp(2.7rem,6vw,5.6rem)] font-extrabold leading-[1.07] tracking-[-0.055em] text-white">
            Je construis des <span className="text-gradient">applications web fiables.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Développeur <strong className="font-semibold text-white">backend & full-stack</strong>, spécialisé en PHP, React, TypeScript, SQL et API REST. J’aime transformer des besoins métier complexes en produits utiles, performants et maintenables.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button button--primary" href="#projets">Découvrir mes projets <FaArrowRight aria-hidden="true" /></a>
            <a className="button button--secondary" href={cv} target="_blank" rel="noopener noreferrer"><FaDownload aria-hidden="true" /> Voir mon CV</a>
            <a className="button button--icon" href={github} target="_blank" rel="noopener noreferrer" aria-label="Visiter mon profil GitHub"><FaGithub aria-hidden="true" /></a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div><strong className="block text-sm font-semibold text-white">Applications métier</strong><span className="text-xs leading-5 text-slate-400">Usages réels</span></div>
            <div><strong className="block text-sm font-semibold text-white">Open source</strong><span className="text-xs leading-5 text-slate-400">Bibliothèques PHP / TS</span></div>
            <div><strong className="block text-sm font-semibold text-white">Qualité</strong><span className="text-xs leading-5 text-slate-400">Tests & CI</span></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="portrait-frame">
            <img src="/portrait-professionnel.jpg" alt="Portrait professionnel de Noga Germainio" className="aspect-[4/5] w-full object-cover" fetchPriority="high" width="640" height="800" />
          </div>
          <div className="absolute -bottom-6 -left-3 rounded-2xl border border-white/15 bg-[#101d31]/95 px-5 py-4 shadow-2xl backdrop-blur sm:-left-9">
            <span className="block font-mono text-xs text-teal-300">// ma spécialité</span>
            <strong className="mt-1 block text-sm text-white">Backend · API · SQL</strong>
          </div>
          <div className="absolute -right-2 top-8 rounded-2xl border border-white/15 bg-[#101d31]/95 px-4 py-3 text-sm text-slate-200 shadow-xl backdrop-blur sm:-right-8">
            <FaCode className="mr-2 inline text-teal-300" aria-hidden="true" /> PHP + TypeScript + Go
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="apropos" className="section-spacing border-t border-white/10">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-kicker">01 / Mon profil</p>
          <h2 className="section-title">Au-delà du code, <span className="text-gradient">résoudre des problèmes.</span></h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>Je suis un développeur autodidacte basé à Toamasina, Madagascar. Mon travail couvre l’interface utilisateur, les API, la conception des données et la maintenance de solutions web.</p>
          <p>Avec l’application MSBC, j’ai participé à la construction d’outils pour les membres, les paiements, les statistiques et la gestion des accès. En parallèle, je développe des composants techniques personnels comme <strong className="text-white">NCache</strong>, <strong className="text-white">Noga_SE</strong> et un micro-framework HTTP PHP.</p>
          <p>J’accorde une attention particulière aux contrats API, aux performances SQL, à la lisibilité du code, aux tests et à l’expérience des utilisateurs.</p>
          <a className="inline-flex items-center gap-2 font-semibold text-teal-300 hover:text-teal-200" href="#experience">Découvrir mon parcours <FaArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-spacing bg-white/[0.025]">
      <div className="container-wide">
        <div className="mb-12 max-w-3xl"><p className="section-kicker">02 / Expérience</p><h2 className="section-title">Un projet concret, <span className="text-gradient">des responsabilités réelles.</span></h2></div>
        <div className="panel grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-semibold text-teal-300">Depuis 2025 · Toamasina, Madagascar</span>
            <h3 className="mt-3 text-3xl font-bold text-white">Association MSBC</h3>
            <p className="mt-2 text-slate-300">Développement web · Maintenance et gestion des données</p>
            <p className="mt-5 text-sm leading-7 text-slate-400">Participation au développement et à l’évolution d’une application de gestion associative, avec des besoins concrets de suivi, fiabilité et performance.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ['Applications métier', 'Modules de membres, conjoints, enfants et adhésions.'],
              ['Gestion & reporting', 'Cotisations, tableaux de bord et statistiques.'],
              ['Données', 'Requêtes SQL, sauvegardes et intégrité des données.'],
              ['Évolution produit', 'Authentification, API et améliorations des formulaires.'],
            ].map(([title, detail]) => <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><FaCheck className="mb-3 text-teal-300" aria-hidden="true" /><strong className="block text-white">{title}</strong><p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projets" className="section-spacing">
      <div className="container-wide">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl"><p className="section-kicker">03 / Réalisations</p><h2 className="section-title">Du produit métier aux <span className="text-gradient">outils développeur.</span></h2><p className="mt-5 max-w-xl leading-7 text-slate-400">Des exemples concrets de ce que j’ai développé, amélioré et appris.</p></div>
          <a className="button button--secondary" href={`${github}?tab=repositories`} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> Tous mes dépôts</a>
        </div>
        <ProjectList />
      </div>
    </section>
  );
}

function Skills() {
  const icons = [FaServer, FaCode, FaDatabase, FaCheck];
  return (
    <section id="competences" className="section-spacing border-y border-white/10 bg-white/[0.025]">
      <div className="container-wide">
        <div className="mb-12 max-w-3xl"><p className="section-kicker">04 / Compétences</p><h2 className="section-title">Une stack au service de <span className="text-gradient">la solution.</span></h2><p className="mt-5 leading-7 text-slate-400">Je privilégie la maîtrise des fondamentaux aux notes arbitraires sous forme d’étoiles.</p></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, index) => {
            const Icon = icons[index];
            return <div className="panel p-7" key={group.title}><span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-teal-400/10 text-xl text-teal-300"><Icon aria-hidden="true" /></span><h3 className="text-xl font-bold text-white">{group.title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{group.details}</p></div>;
          })}
        </div>
        <p className="mt-7 text-sm leading-7 text-slate-400">Je développe également mes compétences en Go et en PostgreSQL pour faire évoluer mes projets backend.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-wide">
        <div className="contact-panel relative overflow-hidden rounded-[2rem] border border-teal-300/20 p-8 sm:p-14">
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div><p className="section-kicker">05 / Contact</p><h2 className="section-title max-w-xl">Un projet ou un poste à pourvoir ? <span className="text-gradient">Échangeons.</span></h2><p className="mt-5 max-w-xl leading-8 text-slate-300">Disponible pour échanger sur un CDI, un CDD ou une collaboration freelance rémunérée, à Madagascar ou à distance.</p>
              <div className="mt-8 flex flex-wrap gap-3"><a className="button button--primary" href={`mailto:${email}?subject=Opportunit%C3%A9%20de%20collaboration`}><FaEnvelope aria-hidden="true" /> Envoyer un e-mail</a><a className="button button--secondary" href={cv} download><FaDownload aria-hidden="true" /> Télécharger le CV</a></div>
            </div>
            <address className="not-italic">
              <ul className="space-y-5 text-sm sm:text-base">
                <li><a className="contact-link" href={`mailto:${email}`}><FaEnvelope aria-hidden="true" />{email}</a></li>
                <li><a className="contact-link" href="tel:+261340488021"><FaPhone aria-hidden="true" />+261 34 04 880 21</a></li>
                <li><a className="contact-link" href={github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" />github.com/Noga-ng <FaArrowUpRightFromSquare className="text-xs" aria-hidden="true" /></a></li>
                <li className="contact-link"><FaLocationDot aria-hidden="true" />Toamasina, Madagascar · Mobilité nationale</li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <Navbar />
    <main id="contenu"><Hero /><About /><Experience /><Projects /><Skills /><Contact /></main>
    <footer className="border-t border-white/10 py-9"><div className="container-wide flex flex-col justify-between gap-4 text-sm text-slate-400 sm:flex-row"><p><strong className="text-white">Noga Germainio</strong> · Développeur backend & full-stack</p><p>Portfolio · Toamasina, Madagascar</p></div></footer>
  </>;
}
