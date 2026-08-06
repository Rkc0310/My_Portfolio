import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";
import { personalInfo } from "../data";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              My Journey
            </h3>
            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed">{personalInfo.about}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h3>
            <div className="space-y-8">
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.75 top-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{edu.institution} • {edu.year}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
