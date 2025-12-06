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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "project1",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered prioritization and natural language processing for task creation.",
      tech: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind"],
      image: "project2",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Chat App",
      description: "Scalable chat application with WebSocket support, file sharing, and end-to-end encryption.",
      tech: ["React", "Socket.io", "Express", "Redis"],
      image: "project3",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance with interactive charts and real-time data updates.",
      tech: ["React", "D3.js", "Firebase", "Material-UI"],
      image: "project4",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, post management, and real-time notifications.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "project5",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and severe weather alerts.",
      tech: ["React Native", "OpenWeather API", "Redux", "Maps"],
      image: "project6",
      color: "from-cyan-500 to-blue-500"
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
