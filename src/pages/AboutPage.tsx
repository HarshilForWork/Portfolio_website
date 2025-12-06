import About from '../components/About'

const AboutPage = () => {
  return (
    <main className="relative z-10">
      <About />

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

export default AboutPage
