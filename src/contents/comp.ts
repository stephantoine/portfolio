import { Comp } from "@/types";


export const skills: Comp[] = [
    {
        name: 'Réaliser',
        number: '1',
        description: 'Développer (concevoir, coder, tester et intégrer) une solution informatique pour un client.',
        details: [
                    'Il s\'agit de l\'une des compétences fondamentales du BUT Informatique, car elle constitue la base sur laquelle reposent les autres. Au cours de ma formation, j\'ai été amené à concevoir et développer plusieurs sites web et applications répondant à des besoins variés.',
                    'Cette compétence m’a permis de progresser dans de nombreux domaines :',
                    'le design et l\’ergonomie, en développant ma créativité et mon sens de l\'expérience utilisateur', 
                    'la qualité du code, grâce à l\'utilisation de conventions, de commentaires pertinents et de documentations claires',
                    'le choix des technologies adaptées, selon le contexte et les objectifs du projet',
                    'Ces réalisations m\'ont également permis d\'acquérir une méthode de travail rigoureuse, du prototypage jusqu’à l\'intégration et aux tests, tout en respectant les bonnes pratiques du développement logiciel.'
                ],
        projects: ['SAE 2.01', 'SAE 3-4', 'Projet JS'],
        order: 4,
        color: 'rgba(219, 39, 119, 0.25)'
    },

    {
        name: 'Optimiser',
        number: '2',
        description: 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d\'exécution, précision, consommation de ressources...',
        details: [
                    'Cette compétence est étroitement liée à la compétence Réaliser. Optimiser, c\'est améliorer les solutions développées pour les rendre plus performantes, plus fiables et plus économes en ressources.',
                    'Au fil des projets et des exercices, j\'ai appris à :',
                    'analyser la complexité et les performances des algorithmes', 
                    'identifier les points de blocage dans un programme ou une architecture',
                    'proposer des optimisations adaptées (réécriture d\’algorithmes, gestion de la mémoire, requêtes plus efficaces, etc.)',
                    'Cette compétence m’a aidé à développer une réflexion algorithmique plus poussée et à adopter une approche axée sur l\'efficacité et la concision du code, tout en conservant la lisibilité et la maintenabilité.'
                ],
        projects: ['SAE 1.02', 'SAE 5-6', 'Projet JS'],
        order: 5,
        color: 'rgba(247, 101, 17, 0.25)'
    },

    {
        name: 'Administrer',
        number: '3',
        description: 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d’une organisation.',
        details: [
                    'Cette compétence joue un rôle essentiel dans la mise en place et la maintenance d\'environnements informatiques. Elle m\'a permis de comprendre en profondeur le fonctionnement d\'un système informatique, de la configuration d’un serveur jusqu’à la gestion d’un réseau.',
                    'Grâce à cette compétence, j\'ai pu :',
                    'installer et configurer des environnements de développement (serveurs web, bases de données, conteneurs, etc.)',
                    'assurer la disponibilité et la sécurité des services',
                    'comprendre les principes d\'architecture système et réseau, essentiels pour tout projet informatique',
                    'Cette compréhension globale m\'a aidé à mieux appréhender les interactions entre les différentes couches d’un projet (application, système, réseau) et à garantir des déploiements fiables et performants.'
                ],
        projects: ['SAE 1.03', 'SAE 3-4'],
        order: 6,
        color: 'rgba(253, 223, 18, 0.25)'
    },

    {
        name: 'Gérer',
        number: '4',
        description: 'Concevoir, gérer, administrer et exploiter les données de l\’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l\’entreprise',
        details: [
                    'Cette compétence est essentielle dans le domaine de l\'informatique, car elle concerne la gestion, le stockage et l\'exploitation des données, qui sont au cœur du fonctionnement de toute organisation. Au cours de ma formation, j\'ai été amené à concevoir et modéliser des bases de données, à les implémenter et les peupler avec des données réelles ou simulées, puis à les analyser afin d\'en extraire des informations pertinentes. En 3ème année j\'ai appris à manipuler et étudier des ensembles de données variés, parfois volumineux, en utilisant des techniques d\'analyse et d\'intelligence artificielle.',
                    'Ces expériences m\'ont permis de développer :',
                    'une bonne compréhension des modèles conceptuels, logiques et physiques de données, avec une maîtrise des langages de requêtes', 
                    'des compétences en traitement, nettoyage et visualisation des données',
                    'et une sensibilité à la qualité, la sécurité et la cohérence des informations stockées',
                    'Grâce à cette compétence, j\'ai acquis une vision complète du cycle de vie de la donnée, depuis sa conception jusqu\'à son exploitation, contribuant ainsi à un meilleur pilotage et à une prise de décision éclairée au sein d’un projet ou d’une entreprise.'
                ],
        projects: ['SAE 5-6', 'SAE 3-4', 'SAE 2.04'],
        order: 1,
        color: 'rgba(5, 150, 105, 0.25)'
    },

    {
        name: 'Conduire',
        number: '5',
        description: 'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles',
        details: [
                    'Cette compétence repose sur la gestion et la direction de projets informatiques, dans le but de répondre efficacement aux besoins exprimés par le client ou les utilisateurs. J\'ai eu l’occasion de piloter plusieurs projets, de durées et d’objectifs variés, en travaillant au sein d\'équipes de 2 à 8 étudiants sur des périodes allant de 3 semaines à 7 mois.',
                    'J\'ai appris à développer: ',
                    'une capacité à planifier et structurer un projet en fonction des objectifs et des ressources disponibles',
                    'des compétences en priorisation, suivi d’avancement et gestion des risques',
                    'une vision d’ensemble du projet, depuis la définition du besoin jusqu\'à la livraison finale',
                    'Grâce à cette compétence, j\'ai appris à organiser, piloter et encadrer efficacement un projet avec des méthodes classiques ou agiles, en conciliant contraintes techniques, humaines et temporelles pour garantir la réussite des livrables.'
                ],
        projects: ['SAE 2.01', 'SAE 3-4', 'SAE 5-6'],
        order: 2,
        color: 'rgba(79, 70, 229, 0.25)'
    },

    {
        name: 'Collaborer',
        number: '6',
        description: 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique',
        details: [
                    'Il s\'agit d\'une compétence essentielle du BUT Informatique, car elle permet de travailler efficacement en équipe et de communiquer de manière adaptée dans un environnement professionnel. Au cours de ma formation, j\'ai participé à de nombreux projets collectifs, qui m\'ont permis de développer mes capacités à coordonner, échanger et m’adapter à différents profils et situations.',
                    'Cette compétence m’a permis de progresser dans plusieurs domaines :',
                    'la communication et le management, grâce à l\'utilisation de techniques favorisant la répartition des tâches, la gestion des conflits et la prise de décision collective',
                    'la collaboration au sein d\'équipes pluridisciplinaires, en adoptant une attitude ouverte, constructive et orientée vers les objectifs communs',
                    'le développement des compétences humaines, à travers des projets variés tels que la réalisation de films, des études sur des entreprises ou la mise en place de politiques de communication sur des thèmes comme le changement en entreprise',
                    'Ces expériences m\'ont appris à écouter, comprendre et valoriser les idées de chacun, tout en contribuant activement à la cohésion et à la réussite du groupe.'
                ],
        projects: ['SAE 5-6', 'SAE 3-4', 'SAE 2.06'],
        order: 3,
        color: 'rgba(239, 68, 68, 0.25)'
    }
];

