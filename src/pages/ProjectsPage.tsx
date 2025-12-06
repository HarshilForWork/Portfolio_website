import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Projects from '../components/Projects'

const ProjectsPage = () => {
  return (
    <main className="relative z-10">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 glass glass-hover rounded-xl font-semibold text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </motion.button>
        </Link>
      </div>

      <Projects />

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. Built with React, Vite, Three.js &amp; Framer Motion
          </p>
        </div>
      </footer>
    </main>
  )
}

export default ProjectsPage
