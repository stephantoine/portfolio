"use client"

import React from "react"
import {
  FaCode,
  FaLaptopCode,
  FaUbuntu,
} from "react-icons/fa"
import { FaPeopleRoof } from "react-icons/fa6"

const About = () => {
  return (
    <div className="container max-w-3xl 2xl:max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      {/* 🔸 Titre principal */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        À propos
      </h1>

      {/* 🔸 Introduction */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center leading-relaxed">
          Passionné par le développement web, j&apos;étudie en 3ème année de BUT
          informatique à l&apos;IUT de Lannion, et me spécialise actuellement dans le
          domaine de la Data & IA (parcours administration, gestion et exploitation des données). Je recherche activement un stage pour le
          23 mars, d&apos;une durée de 14 semaines, dans l&apos;un de ces domaines.
        </p>
      </section>

      {/* 🔸 Langages, outils et techniques */}
      <section className="mb-16">
        <h2 className="section-title text-2xl font-semibold mb-10 text-center">
          Langages, outils et techniques
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaCode className="h-8 w-8 text-primary mb-4" />,
              title: "Web",
              items: [
                "HTML5 / CSS3 & Tailwind CSS",
                "PHP / JavaScript",
                "React / Next.js",
                "Figma",
              ],
            },
            {
              icon: <FaLaptopCode className="h-8 w-8 text-primary mb-4" />,
              title: "Data & IA",
              items: [
                "MySQL / PostgreSQL",
                "Cassandra / MongoDB",
                "Python",
                "Visual Paradigm (UML)",
              ],
            },
            {
              icon: <FaUbuntu className="h-8 w-8 text-primary mb-4" />,
              title: "Système & DevOps",
              items: ["Windows / Linux", "Docker", "Bash"],
            },
            {
              icon: <FaPeopleRoof className="h-8 w-8 text-primary mb-4" />,
              title: "Gestion et communication",
              items: [
                "Agile Scrum / Kanban avec Jira",
                "Git / GitHub",
                "Présentation avec Canva ou Genially",
                "Montage vidéo avec DaVinci Resolve",
              ],
            },
          ].map((block) => (
            <div
              key={block.title}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md transition-all duration-300"
            >
              {block.icon}
              <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
              <ul className="text-secondary space-y-2">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 🔸 Expériences professionnelles */}
      <section className="mb-16">
        <h2
          className="section-title text-2xl font-semibold mb-10 text-center"
        >
          Expériences professionnelles
        </h2>

        <div
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Stage développement web
            </h3>
            <p className="text-primary mb-2">
              2025 - Groupement de Gendarmerie Départementale des Côtes d&apos;Armor
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Conception et développement de la page d&apos;accueil d&apos;un intranet
              </li>
              <li>
                Développement de modules de réservation et de communication
              </li>
              <li>Documentation utilisateur et technique</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔸 Formations */}
      <section className="mb-16">
        <h2
          className="section-title text-2xl font-semibold mb-10 text-center"
        >
          Formations
        </h2>

        <div
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">BUT informatique</h3>
            <p className="text-primary mb-2">2023 - Aujourd&apos;hui — IUT Lannion</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>3ème année : Parcours Data & IA</li>
              <li>2ème année : Parcours Développement d&apos;applications</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Bac général</h3>
            <p className="text-primary mb-2">
              2020 - 2023 — Lycée Rabelais Saint-Brieuc
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Diplômé avec mention Bien</li>
              <li>Spécialités Maths et NSI (Physique en 1ère)</li>
              <li>Option sport + 1ère année Bachibac</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
