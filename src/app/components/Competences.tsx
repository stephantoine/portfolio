"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { skills } from "@/contents/comp"
import Link from "next/link"

const Competences = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // 🔹 On trie les compétences par ordre croissant
  // 🔹 On garde uniquement les 4 premières
  const topSkills = [...skills].sort((a, b) => a.order - b.order).slice(0, 4)

  return (
    <section className="py-16 sm:py-20 md:py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center tracking-tight">
        Principales compétences développées
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {topSkills.map((skill, index) => (
          <motion.article
            key={skill.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              borderColor:
                hoveredIndex === index ? skill.color : "transparent",
              boxShadow:
                hoveredIndex === index
                  ? `0 0 12px 2px ${skill.color}40`
                  : "none",
            }}
            className="relative overflow-hidden bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 sm:p-8 border 
                       transition-all duration-300 hover:-translate-y-1"
          >
            {/* Numéro décoratif */}
            <h1
              className="absolute top-3 right-4 sm:top-4 sm:right-6 text-7xl sm:text-8xl font-bold select-none transition-colors duration-300 z-0 pointer-events-none"
              style={{
                color:
                  hoveredIndex === index
                    ? skill.color
                    : "rgba(0,122,255,0.1)",
              }}
            >
              {skill.number}
            </h1>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
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
        ))}
      </div>

      {/* Bouton animé */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: topSkills.length * 0.1 + 0.2,
        }}
        viewport={{ once: true }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/competences"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 
                       transition-colors shadow-md hover:shadow-lg"
          >
            Voir toutes les compétences
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Competences
