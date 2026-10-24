import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolio';

export default function ProjectList() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => <ProjectCard key={project.slug} project={project} number={index + 1} />)}
    </div>
  );
}
