import type { ReactElement } from "react";
import {
    SiPhp,
    SiTypescript,
    SiJavascript,
    SiReact,
    SiHtml5,
    SiTailwindcss,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiDocker,
    SiGit,
    SiLinux,
    SiGithub,
    SiNodedotjs,
    SiCss,
    SiGoland
} from "react-icons/si";

const groups = [
    {
        title: "Backend",
        skills: [
            { icon: SiPhp, name: "PHP",star:"⭐⭐⭐⭐" },
            { icon: SiNodedotjs, name: "Node.js",star:"⭐⭐" },
            { icon: SiGoland, name: "Go(Golang)",star:"⭐⭐⭐" },
            { icon: SiPostgresql, name: "PostgreSQL",star:"⭐⭐⭐" },
            { icon: SiMysql, name: "MySQL",star:"⭐⭐⭐⭐" },
            { icon: SiSqlite, name: "SQLite",star:"⭐⭐⭐" }
        ]
    },

    {
        title: "Frontend",
        skills: [
            { icon: SiReact, name: "React",star:"⭐⭐"},
            { icon: SiTypescript, name: "TypeScript",star:"⭐⭐⭐"},
            { icon: SiJavascript, name: "JavaScript",star:"⭐⭐⭐⭐" },
            { icon: SiHtml5, name: "HTML5",star:"⭐⭐⭐" },
            { icon: SiCss, name: "CSS3",star:"⭐⭐⭐⭐" },
            { icon: SiTailwindcss, name: "TailwindCSS",star:"⭐⭐" }
        ]
    },

    {
        title: "DevOps",
        skills: [
            { icon: SiDocker, name: "Docker",star:"⭐" },
            { icon: SiGit, name: "Git",star:"⭐⭐⭐" },
            { icon: SiGithub, name: "GitHub",star:"⭐⭐⭐" },
            { icon: SiLinux, name: "Linux",star:"⭐⭐" }
        ]
    }
];

export default function Skills():ReactElement {

    return (

        <section
            id="skills"
            className="py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-indigo-400 font-semibold">

                        Stack Technique

                    </p>

                    <h2 className="md:text-5xl text-3xl font-black mt-4">

                        Les technologies que j'utilise

                    </h2>

                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto">

                        Je développe principalement des applications web
                        modernes avec un accent sur les performances,
                        la maintenabilité et une architecture propre.

                    </p>

                </div>

                <div className="space-y-12">

                    {

                        groups.map(group => (

                            <div
                                key={group.title}
                                data-aos="fade-up"
                            >

                                <h3 className="text-2xl font-bold mb-8">

                                    {group.title}

                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

                                    {
                        
                                        group.skills.map(skill => {

                                            const Icon = skill.icon;

                                            return (

                                                <div

                                                    key={skill.name}

                                                    className="
                                                    group

                                                    rounded-3xl

                                                    border

                                                    border-white/10

                                                    bg-white/5

                                                    backdrop-blur-xl

                                                    p-8

                                                    flex

                                                    flex-col

                                                    items-center

                                                    gap-5

                                                    hover:border-indigo-500

                                                    hover:-translate-y-2

                                                    transition-all

                                                    duration-500"

                                                >

                                                    <Icon

                                                        size={48}

                                                        className="
                                                        text-slate-200

                                                        group-hover:scale-110

                                                        transition"

                                                    />

                                                    <span className="font-semibold">

                                                        {skill.name}

                                                    </span>
                                                <span className="font-semibold">

                                                        {skill.star}

                                                    </span>
                                                </div>

                                            );

                                        })

                                    }

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}