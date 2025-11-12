"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { skills } from '@/contents/comp'
import { Map } from "lucide-react";
import Link from "next/link";


const Competences = () => {
  const imageUrl = "/mind_map.png";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container max-w-7xl mx-auto pt-10 pb-14">
      <h1 className="text-4xl font-bold mb-4 text-center">Compétences</h1>

      <p className="text-lg text-secondary mb-24 text-center">Voici l&apos;ensemble des compétences du BUT</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {skills.map((skill, index) => {
            const link = `/competences/competence-${skill.number}`;
            return (
              <Link key={index} href={link} className="h-full">
                <motion.article
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    borderColor: hoveredIndex === index ? skill.color : "transparent",
                    boxShadow:
                      hoveredIndex === index ? `0 0 12px 2px ${skill.color}40` : "",
                  }}
                  className="relative h-full bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 sm:p-8 border 
                            transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <h1
                    className="absolute top-3 right-4 sm:top-4 sm:right-6 text-7xl sm:text-8xl font-bold select-none transition-colors duration-300"
                    style={{
                      color:
                        hoveredIndex === index
                          ? skill.color
                          : "rgba(177, 173, 172, 0.1)",
                    }}
                  >
                    {skill.number}
                  </h1>

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
                          className="px-2 sm:px-3 py-1 bg-primary/10 text-primary
                                    rounded-full text-xs sm:text-sm font-medium shadow-sm"
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

      <div className="flex justify-center mt-10">
        <button
          onClick={() => window.open(imageUrl, "_blank")}
          className="flex gap-2 bg-primary w-full md:w-auto justify-center text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
        >
          <Map className="w-5 h-5" />
          Voir la carte mentale des compétences
        </button>
      </div>
    </div>
  )
}

export default Competences