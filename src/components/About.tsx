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
      degree: "B.S. Computer Science",
      institution: "University Name",
      year: "2015-2019"
    },
    {
      degree: "Full Stack Bootcamp",
      institution: "Coding Academy",
      year: "2019"
    }
  ]

  // Stats with animation
  const stats = [
    { label: "Years", value: 5, suffix: "+" },
    { label: "Projects", value: 50, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" }
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
              <p className="text-purple-400 font-semibold mb-3">Full Stack Developer</p>
              
              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-4">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span>Your City, Country</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-accent-400 flex items-center justify-center transition-all hover:scale-110 group">
                  <svg className="w-4 h-4 text-white group-hover:text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-accent-400 flex items-center justify-center transition-all hover:scale-110 group">
                  <svg className="w-4 h-4 text-white group-hover:text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-accent-400 flex items-center justify-center transition-all hover:scale-110 group">
                  <svg className="w-4 h-4 text-white group-hover:text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
                  I'm a <span className="text-white font-semibold">full-stack developer</span> with a passion for building 
                  web applications that make a difference. My journey started with curiosity about how websites work.
                </p>
                <p>
                  Over the years, I've worked on diverse projects—from startups to enterprise applications, 
                  always focusing on creating intuitive user experiences backed by robust code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                  or sharing knowledge with the developer community.
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
                  { name: 'React', color: 'from-cyan-500 to-blue-500' },
                  { name: 'Node.js', color: 'from-green-500 to-emerald-600' },
                  { name: 'TypeScript', color: 'from-blue-500 to-blue-600' },
                  { name: 'MongoDB', color: 'from-green-600 to-green-700' },
                  { name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Next.js', color: 'from-gray-700 to-gray-900' }
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
