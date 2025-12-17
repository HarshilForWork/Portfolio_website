import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BlurFade, GradientText } from './AnimatedUI'

interface ProjectsProps {
  limit?: number
  showMoreButton?: boolean
}

const Projects = ({ limit, showMoreButton = false }: ProjectsProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Insurance Policy RAG System",
      description: "Improved policy query efficiency by 70% and reduced manual analysis time by 60%. Production-ready RAG system that parses PDFs, creates embeddings, and provides AI-powered query interface with context-aware reasoning.",
      tech: ["Python", "FastAPI", "Pinecone", "LangChain", "Gemini", "Streamlit"],
      image: "project1",
      color: "from-purple-500 to-pink-500",
      link: "https://github.com/HarshilForWork/JBBR-Backend",
      badge: "HackRx 2024"
    },
    {
      title: "QuizEasy - AI Learning Assistant",
      description: "Enabled 85% faster revision and improved learning efficiency by 60% through AI-generated flashcards and adaptive MCQs. Built with RAG-powered Q&A system for personalized learning.",
      tech: ["Python", "LangChain", "Ollama", "FastAPI", "Streamlit"],
      image: "project2",
      color: "from-blue-500 to-cyan-500",
      link: "https://github.com/HarshilForWork/CO-CODE_Project_JBBR/tree/Harshil"
    },
    {
      title: "TerraShield - Earthquake Prediction",
      description: "Predicted SIG, MMI, and CDI with 90%+ accuracy and R² score of 0.84 using LightGBM and XGBoost. Created Power BI dashboard for real-time earthquake impact visualization and regional alerts.",
      tech: ["Python", "XGBoost", "LightGBM", "Power BI", "Scikit-learn"],
      image: "project3",
      color: "from-green-500 to-teal-500",
      link: "https://earthquakepredictor.streamlit.app/"
    },
    {
      title: "ExpenSure - Expense Management",
      description: "Automated 95% of expense receipt analysis and fraud detection using OCR and LLM-based retrieval systems. Smart expense management system leveraging OCR and LLMs.",
      tech: ["Python", "LangChain", "PaddleOCR", "Ollama", "Streamlit"],
      image: "project4",
      color: "from-orange-500 to-red-500",
      link: "https://github.com/JayGuri/JBBR_LOC7/tree/harshil"
    }
  ]

  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent software development work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <BlurFade key={project.title} delay={index * 0.1} duration={0.6}>
              <motion.div
                className="group relative glass glass-hover rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(index)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gradient">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <button className="px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </button>
              </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* More Projects Button */}
        {showMoreButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
              >
                More Projects →
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
