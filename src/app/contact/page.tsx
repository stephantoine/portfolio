"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";


interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Erreur lors de l'envoi du message: ", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      {/* 🔸 Titre principal */}
      <h1 className="text-4xl font-bold mb-20 text-center">
        Contactez-moi
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 🔹 Bloc gauche : infos */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Liens externes</h2>
          <p className="text-secondary md:w-2/3">
            Pour me contacter par mail (envoi de fichiers) ou par téléphone
            durant la semaine après 18h.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link
                  href="mailto:stephane.antoine.pro@gmail.com"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  stephane.antoine.pro@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <Link
                  href="tel:+33631574597"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  06 31 57 45 97
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Localisation</h3>
                <p className="text-secondary">Lannion, Bretagne, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Bloc droit : formulaire */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Nom
              </label>
              <input
                required
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                placeholder="Entrez votre nom"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:placeholder-white/50 bg-white dark:bg-dark focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                required
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Entrez votre email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:placeholder-white/50 bg-white dark:bg-dark focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                name="message"
                id="message"
                placeholder="Entrez votre message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:placeholder-white/50 bg-white dark:bg-dark focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2.5 rounded-md hover:bg-primary/90 transition-colors"
            >
              {status === "loading" ? "Envoi..." : "Envoyer"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center">Message envoyé ✅</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">
                Erreur lors de l’envoi du message. Réessayez.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
