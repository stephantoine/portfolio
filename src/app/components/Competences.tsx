"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { skills } from "@/contents/comp"
import Link from "next/link"

const Competences = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // 🔹 On trie les compétences par ordre croissant
  // 🔹 On garde uniquement les 4 premières
  const topSkills = [...skills].sort((a, b) => a.order - b.order).slice(0, 3)

  return (
    <section className="py-16 sm:py-20 2xl:py-32 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center tracking-tight">
        Principales compétences développées
      </h2>
      <p className="text-l sm:text-xl mb-6 sm:mb-8 text-center text-secondary">Lors de ma dernière année, je me spécialise en Data & IA. Je développe les trois compétences ci dessous parmis les six du BUT</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {topSkills.map((skill, index) => {
          const link = `/competences/competence-${skill.number}`;
          return (
            <Link key={index} href={link} className="h-full">
              <motion.article
                key={skill.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  borderColor:
                    hoveredIndex === index ? skill.color : "transparent",
                  boxShadow:
                    hoveredIndex === index
                      ? `0 0 12px 2px ${skill.color}40`
                      : "",
                }}
                className="relative overflow-hidden bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6 sm:p-8 border 
                          transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                {/* Numéro décoratif */}
                <h1
                  className="absolute top-3 right-4 sm:top-4 sm:right-6 text-7xl sm:text-8xl font-bold select-none transition-colors duration-300 z-0 pointer-events-none"
                  style={{
                    color:
                      hoveredIndex === index
                        ? skill.color
                        : "rgba(177, 173, 172, 0.1)",
                  }}
                >
                  {skill.number}
                </h1>

                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.projects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Link>
          );
        })}
      </div>


      {/* Bouton animé */}
      <div
        className="text-center mt-12"
      >
        <div>
          <Link
            href="/competences"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 
                       transition-colors shadow-md hover:shadow-lg"
          >
            Voir toutes les compétences
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Competences
