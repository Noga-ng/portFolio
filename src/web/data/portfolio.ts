import msbcImage from '../../assets/msbc1.png';
import queryBuilderImage from '../../assets/Noga_se.png';
import routerImage from '../../assets/Routerhttp.png';
import httpImage from '../../assets/httpClient.png';

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  source?: string;
  website?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'msbc',
    title: 'MSBC · Plateforme de gestion',
    category: 'Application métier · Projet phare',
    description: 'Une solution utilisée pour organiser les adhésions, les familles, les cotisations et les opérations de gestion d’une association.',
    contribution: 'Développement de modules métier, maintenance, amélioration de l’expérience utilisateur et optimisation des échanges avec la base de données.',
    technologies: ['PHP', 'MariaDB', 'JavaScript', 'React', 'TypeScript', 'API REST'],
    highlights: ['Gestion des membres et des ayants droit', 'Paiements, statistiques et accès par rôles', 'Optimisation du traitement des inscriptions et des images'],
    image: msbcImage,
    website: 'https://msbc-toamasina.mg/',
    featured: true,
  },
  {
    slug: 'ncache',
    title: 'NCache',
    category: 'Bibliothèque open source · PHP',
    description: 'Une bibliothèque de cache multi-driver pour PHP avec une API commune pour plusieurs moteurs de stockage.',
    contribution: 'Conception des drivers, de la gestion du TTL, des tags, des espaces de noms et du support PSR-6 / PSR-16.',
    technologies: ['PHP 8.1+', 'Redis', 'SQLite', 'Memcached', 'PHPUnit', 'CI'],
    highlights: ['253 tests et 849 assertions lors de la campagne d’août 2026', 'Analyse statique PHPStan niveau 9', 'Tests automatisés et intégration continue'],
    source: 'https://github.com/Noga-ng/NCache',
    featured: true,
  },
  {
    slug: 'noga-se',
    title: 'Noga_SE · Query Builder',
    category: 'Bibliothèque open source · SQL',
    description: 'Un constructeur de requêtes SQL fluide et immuable, conçu pour simplifier la création de requêtes complexes.',
    contribution: 'Construction des requêtes, liaisons de paramètres, jointures, sous-requêtes et support de plusieurs dialectes SQL.',
    technologies: ['PHP 8.1+', 'PDO', 'MySQL', 'PostgreSQL', 'SQLite'],
    highlights: ['API fluide', 'Paramètres liés automatiquement', 'CRUD, jointures et CTE'],
    image: queryBuilderImage,
    source: 'https://github.com/Noga-ng/Noga_SE',
  },
  {
    slug: 'noga-http',
    title: 'Noga_HTTP · Framework MVC',
    category: 'Framework expérimental · Backend',
    description: 'Un micro-framework HTTP pour mieux comprendre les mécanismes internes des frameworks PHP.',
    contribution: 'Routage dynamique, résolution de contrôleurs, injection de dépendances et pipeline de middlewares.',
    technologies: ['PHP', 'MVC', 'Routing', 'Middleware', 'DI'],
    highlights: ['Cycle Request / Response', 'Routes paramétrées', 'Architecture extensible'],
    image: routerImage,
    source: 'https://github.com/Noga-ng/Noga_Http',
  },
  {
    slug: 'noga-ch',
    title: 'Noga_CH · Client HTTP',
    category: 'Bibliothèque · TypeScript',
    description: 'Un client HTTP léger pour appeler des API dans les applications JavaScript et TypeScript.',
    contribution: 'Développement de la gestion des timeouts, retries, intercepteurs et cache GET avec AbortSignal.',
    technologies: ['TypeScript', 'JavaScript', 'Fetch API'],
    highlights: ['API typée', 'Intercepteurs de requêtes', 'Gestion des erreurs et de l’annulation'],
    image: httpImage,
    source: 'https://github.com/Noga-ng/Noga_CH',
  },
];

export const stack = [
  { title: 'Backend & API', details: 'PHP, Go, API REST, architecture MVC, middleware, authentification, PDO' },
  { title: 'Frontend', details: 'React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, responsive design' },
  { title: 'Données & SQL', details: 'MySQL, MariaDB, PostgreSQL, SQLite, Query Builder, modélisation, optimisation SQL' },
  { title: 'Qualité & outils', details: 'Git, GitHub, Composer, PHPUnit, tests unitaires, GitHub Actions, PHPStan' },
];
