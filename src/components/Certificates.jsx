import React from "react";
import { motion } from "motion/react";
import { Award } from "lucide-react";
import { certificates } from "../data";

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24 py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition p-5 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">{cert.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  {cert.date && <p className="text-sm text-gray-400">{cert.date}</p>}
                </div>
              </div>

              {cert.image && (
                <div className="flex items-center justify-center mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-100 dark:border-gray-800">
                  <img
                    src={cert.image}
                    alt={cert.imageAlt ?? cert.name}
                    className="max-h-36 object-contain"
                  />
                </div>
              )}

              <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between gap-4">
                  <a
                    href={cert.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    View certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

