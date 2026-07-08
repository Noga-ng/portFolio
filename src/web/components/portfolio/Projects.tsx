
import ProjectCard from "./ProjectCard";
import noga_se from '../../../assets/Noga_se.png';
import gDashboard from '../../../assets/g_appImg.png';
import Routerhttp from '../../../assets/Routerhttp.png';
import httpC from '../../../assets/httpClient.png';
import type { ReactElement } from "react";

const descriptSe = `
C'est un constructeur de requêtes SQL moderne, fluide et immuable, développé en PHP 8.1+.
 Il fournit une API élégante et sécurisée pour construire des requêtes
  SELECT, INSERT, UPDATE et DELETE, avec liaison automatique des paramètres 
  pour prévenir les injections SQL. 
`;

const descriptRoute = `
Un micro-framework HTTP PHP personnalisé et léger, développé de A à Z,
 conçu pour explorer des concepts modernes d'architecture back-end tels que la compilation des routes,
  l'injection de dépendances et les pipelines de middlewares.

Ce projet vise à apprendre comment des frameworks réels comme Laravel et Symfony sont structurés en interne.
`;
const descriptHt = `
Une petite bibliothèque HTTP légère en TypeScript (avec le JS compilé inclus) qui fournit 
un client HTTP singleton (http) avec gestion des timeouts, retries, cache, interceptors et support d'AbortSignal.
 Utile pour appeler des APIs depuis un navigateur ou Node (avec Fetch/structuredClone disponibles).
`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const values:Array<any> =  [
    {title:"NOGA_SE",description:descriptSe,technologies:["PHP"],image:noga_se,link:"https://github.com/Noga-ng/Noga_SE",views:false},
    {title:"NOGA_Router",description:descriptRoute,technologies:["PHP"],image:Routerhttp,link:"https://github.com/Noga-ng/Noga_Http",views:false},
    {title:"NOGA_http",description:descriptHt,technologies:["Typescript","Javascript"],image:httpC,link:"https://github.com/Noga-ng/Noga_CH",views:false},
    {title:"G_APP",description:"c'est un application web specialisé dans les gestions des membres.",technologies:["PHP","JS","HTML5","CSS3"],image:gDashboard,link:"",views:true},
];


export default function Project():ReactElement{
 
    return (
        <section id="projects">
   <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-indigo-400 font-semibold">
                        Mes Projets
                    </p>

                    <h2 className="md:text-5xl text-3xl font-black mt-4">
                         Projets realisés
                    </h2>
                </div>
        {
            values.map((v)=>(
                <ProjectCard title ={v.title}
                description={v.description}
                technologies={v.technologies}
                image={v.image}
                reverse={false}
                views={v.views}
                link={v.link}
                />
            ))
        }
        
        </section>
    );
}