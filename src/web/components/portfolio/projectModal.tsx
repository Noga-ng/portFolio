import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ project, onClose }: any) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-999 bg-black/80 backdrop-blur-xl flex items-center justify-center">

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-3xl w-full">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-3xl font-bold">
                        {project.title}
                    </h2>

                    <button onClick={onClose}>
                        <FaTimes />
                    </button>

                </div>

                <img
                    src={project.image}
                    className="rounded-2xl mb-6"
                    alt=""
                />

                <p className="text-slate-400">
                    {project.description}
                </p>

            </div>

        </div>
    );
}