import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'

const MainPage = () => {
  return (
    <main className="relative z-10">
      <Hero />
      <Skills />
      <Projects limit={4} showMoreButton={true} />
      <Timeline />
      <Contact />

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

export default MainPage
