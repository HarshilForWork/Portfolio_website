import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ThreeBackground from './components/ThreeBackground'
import CustomCursor from './components/CustomCursor'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. Built with React, Vite, Three.js & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
