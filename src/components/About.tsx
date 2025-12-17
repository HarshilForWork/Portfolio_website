import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Core values data
  const coreValues = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Clean Code",
      description: "Maintainable & scalable solutions"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "Creative problem solving"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "Teamwork & communication"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance",
      description: "Fast & optimized apps"
    }
  ]

  // Education data
  const education = [
    {
      degree: "B.Tech CSE: Data Science",
      institution: "DJ Sanghvi College of Engineering",
      year: "May 2023 – Present",
      cgpa: "8.3"
    }
  ]

  // Stats with animation
  const stats = [
    { label: "Experience", value: 1, suffix: " Year" },
    { label: "Projects", value: 10, suffix: "+" },
    { label: "Hackathons Won", value: 3, suffix: "" }
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  useEffect(() => {
    if (statsInView) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounters(prev => {
              const newCounters = [...prev]
              newCounters[index] = end
              return newCounters
            })
            clearInterval(timer)
          } else {
            setCounters(prev => {
              const newCounters = [...prev]
              newCounters[index] = Math.floor(start)
              return newCounters
            })
          }
        }, 16)
      })
    }
  }, [statsInView])

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Column Grid */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN - Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="glass rounded-2xl p-6 text-center">
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent-500/30">
                <div className="w-full h-full bg-gradient-to-br from-accent-500/20 to-primary-500/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Name */}
              <h2 className="text-2xl font-bold mb-1">Harshil Bhanushali</h2>
              <p className="text-purple-400 font-semibold mb-3">AI/ML Engineer</p>
              
              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-4">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span>Mumbai, India</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center gap-3">
                <a href="https://github.com/HarshilForWork" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-accent-400 flex items-center justify-center transition-all hover:scale-110 group">
                  <svg className="w-4 h-4 text-white group-hover:text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/harshil-bhanushali-4b55a22b5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-accent-400 flex items-center justify-center transition-all hover:scale-110 group">
                  <svg className="w-4 h-4 text-white group-hover:text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/u/Harshil_B7910/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-accent-400 flex items-center justify-center transition-all hover:scale-110 group">
                  <svg className="w-4 h-4 text-white group-hover:text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.863l4.332-4.332c.466-.467 1.111-.662 1.823-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10 10.1c-1.15 1.15-1.824 2.727-1.824 4.423s.675 3.274 1.824 4.4l4.332 4.394c1.15 1.15 2.727 1.824 4.423 1.824s3.274-.675 4.4-1.824l2.606-2.67c.514-.514.497-1.365-.039-1.9s-1.386-.553-1.9-.039z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient-bold">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent-500/30 pl-4">
                    <h4 className="font-bold text-sm text-white">{edu.degree}</h4>
                    <p className="text-xs text-purple-400">{edu.institution}</p>
                    <p className="text-xs text-gray-400">{edu.year}</p>
                    {edu.cgpa && (
                      <p className="text-xs text-accent-400 font-semibold mt-1">CGPA: {edu.cgpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div ref={statsRef} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient-bold">By the Numbers</h3>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-gradient-bold mb-1">
                      {counters[index]}{stat.suffix}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MIDDLE COLUMN - Story & Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Story Card */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  I'm an <span className="text-white font-semibold">AI/ML Engineer</span> and Data Science student passionate about building 
                  intelligent systems that solve real-world problems. Currently working as an AI/ML Intern at PGAGI.
                </p>
                <p>
                  My expertise spans across building RAG systems, developing FastAPI microservices, and creating 
                  production-ready ML pipelines. I've won multiple hackathons and led technical teams in college societies.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new AI technologies, participating in hackathons, 
                  or leading initiatives at Society for Data Science.
                </p>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient-bold">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div
                    key={value.title}
                    className="glass-hover rounded-xl p-4 text-center"
                  >
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-xl flex items-center justify-center mb-2 text-accent-400">{value.icon}</div>
                    <h4 className="text-sm font-bold text-white mb-1">{value.title}</h4>
                    <p className="text-xs text-gray-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Interests & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Interests Card */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient-bold">Beyond Code</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    ),
                    label: "Coffee" 
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Gaming" 
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                    label: "Reading" 
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    ),
                    label: "Music" 
                  }
                ].map((interest) => (
                  <div
                    key={interest.label}
                    className="glass-hover rounded-xl p-3 text-center"
                  >
                    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-lg flex items-center justify-center mb-2 text-accent-400">{interest.icon}</div>
                    <p className="text-xs text-gray-300">{interest.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Stack Card */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient-bold">Favorite Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Python', color: 'from-blue-500 to-yellow-500' },
                  { name: 'FastAPI', color: 'from-teal-500 to-emerald-600' },
                  { name: 'LangChain', color: 'from-green-500 to-teal-600' },
                  { name: 'MongoDB', color: 'from-green-600 to-green-700' },
                  { name: 'PyTorch', color: 'from-orange-500 to-red-500' },
                  { name: 'Streamlit', color: 'from-red-500 to-pink-500' }
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="glass-hover rounded-xl p-3 text-center group"
                  >
                    <div className={`w-10 h-10 mx-auto bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform`}>
                      <span className="text-white font-bold text-xs">{tech.name.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <p className="text-xs text-gray-300 font-semibold">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
