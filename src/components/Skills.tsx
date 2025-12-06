import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const techStacks = [
    // Frontend
    { name: 'React', icon: 'react', category: 'Frontend' },
    { name: 'Next.js', icon: 'nextjs', category: 'Frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
    { name: 'JavaScript', icon: 'javascript', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' },
    { name: 'HTML5', icon: 'html', category: 'Frontend' },
    { name: 'CSS3', icon: 'css', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
    { name: 'Python', icon: 'python', category: 'Backend' },
    { name: 'Express', icon: 'express', category: 'Backend' },
    { name: 'PostgreSQL', icon: 'postgresql', category: 'Backend' },
    { name: 'MongoDB', icon: 'mongodb', category: 'Backend' },
    { name: 'Redis', icon: 'redis', category: 'Backend' },
    
    // Tools & Others
    { name: 'Git', icon: 'git', category: 'Tools' },
    { name: 'GitHub', icon: 'github', category: 'Tools' },
    { name: 'Docker', icon: 'docker', category: 'Tools' },
    { name: 'AWS', icon: 'aws', category: 'Tools' },
    { name: 'Firebase', icon: 'firebase', category: 'Tools' },
    { name: 'Figma', icon: 'figma', category: 'Tools' },
  ]

  const categories = ['Frontend', 'Backend', 'Tools']

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* All Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mb-16"
        >
          {techStacks.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="glass glass-hover rounded-2xl p-6 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent-500/20">
                {/* Tech Icon using skill-icons.dev */}
                <img 
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.name}
                  className="w-12 h-12 mb-3"
                />
                <p className="text-sm font-medium text-gray-300 text-center">{tech.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Breakdown */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const categoryTechs = techStacks.filter(tech => tech.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-gradient mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categoryTechs.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
