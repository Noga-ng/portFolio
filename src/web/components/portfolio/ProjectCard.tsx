import { motion } from "framer-motion";
import { type ReactElement } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectCard(props:any) {
  
       const views = props.views as boolean ? function():ReactElement{
      return(
        <>
        <a href="" className="px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3 hover:bg-white/5">
            <FaArrowRight /> Voir
            </a>
        </>
      );
              } : ():ReactElement=><></>;
  

    return (
        <>
      
        <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 p-4 gap-12 mb-5 items-center"
        >
            

            {/* IMAGE */}
            <motion.div whileHover={{ scale: 1.03 }} className="relative group ">

                <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                <img
                    src={props.image}
                    className="rounded-3xl border border-white/10 w-full"
                    alt=""
                />

            </motion.div>

            {/* CONTENT */}
            <div>

                <h3 className="md:text-4xl font-black">{props.title}</h3>

                <p className="text-slate-400 mt-6 leading-8">
                    {props.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    {props.technologies.map((t: string) => (
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            {t}
                        </span>
                        
                    ))}

                </div>

                <div className="flex gap-4 mt-10">

                    <a href={props.link} target="_blank" className="px-6 py-3 rounded-xl bg-indigo-600 flex items-center gap-3 hover:bg-indigo-500">
                        <FaGithub /> GitHub
                    </a>
                   
                   {views()}

                </div>

            </div>

        </motion.article>
          </>
    );
}