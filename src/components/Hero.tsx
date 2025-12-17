import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "AI/ML Engineer"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const codeSnippet = `const developer = {
  name: "Harshil Bhanushali",
  role: "${text}",
  skills: [
    "Python", "FastAPI",
    "LangChain", "TensorFlow"
  ],
  passion: "Building AI systems
            that matter"
};

export default developer;`

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                Available for work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-4 leading-tight">
                Creative
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-8 leading-tight">
                <span className="text-gradient-bold">Developer</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-400 mb-8 max-w-lg"
            >
              I build exceptional digital experiences that combine clean code with bold design. 
              Specializing in modern web applications and creative interfaces.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/50 inline-flex items-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 glass glass-hover rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-4"
            >
              {[
                { icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/HarshilForWork' },
                { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/in/harshil-bhanushali-4b55a22b5' },
                { icon: 'M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.863l4.332-4.332c.466-.467 1.111-.662 1.823-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10 10.1c-1.15 1.15-1.824 2.727-1.824 4.423s.675 3.274 1.824 4.4l4.332 4.394c1.15 1.15 2.727 1.824 4.423 1.824s3.274-.675 4.4-1.824l2.606-2.67c.514-.514.497-1.365-.039-1.9s-1.386-.553-1.9-.039z', url: 'https://leetcode.com/u/Harshil_B7910/' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-accent-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl p-6 relative">
              {/* Terminal Dots */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Code */}
              <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
