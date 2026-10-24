import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import type { Project } from '../../data/portfolio';

type Props = { project: Project; number: number };

export default function ProjectCard({ project, number }: Props) {
  return (
    <article className={`project-card group ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__visual" aria-hidden="true">
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" decoding="async" className="project-card__image" />
        ) : (
          <div className="project-card__placeholder">
            <span className="text-xs tracking-[0.3em] uppercase text-teal-200/60">Cache · PHP</span>
            <span className="text-5xl sm:text-6xl font-black tracking-tight text-white">NCache</span>
            <span className="font-mono text-sm text-teal-100/70">get() · set() · invalidate()</span>
          </div>
        )}
      </div>
      <div className="flex h-full flex-col gap-5 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="section-kicker text-xs">{project.category}</span>
          <span className="font-mono text-xs text-slate-500">{String(number).padStart(2, '0')}</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
          <p className="mt-3 text-sm leading-7 text-slate-400"><strong className="text-slate-200">Mon travail :</strong> {project.contribution}</p>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {project.highlights.map(point => <li key={point} className="flex items-start gap-2"><span className="mt-1 text-teal-300" aria-hidden="true">✓</span>{point}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.map(technology => <span key={technology} className="tech-pill">{technology}</span>)}
        </div>
        {(project.source || project.website) && (
          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">
            {project.source && <a className="project-link" href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`Code source de ${project.title} sur GitHub`}><FaGithub aria-hidden="true" /> Code source <span aria-hidden="true">↗</span></a>}
            {project.website && <a className="project-link" href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`Consulter le site du projet ${project.title}`}><FaArrowUpRightFromSquare aria-hidden="true" /> Site du projet</a>}
          </div>
        )}
      </div>
    </article>
  );
}
