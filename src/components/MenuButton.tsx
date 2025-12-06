import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { name: 'Main', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 w-14 h-14 glass rounded-full flex flex-col items-center justify-center gap-1.5 group hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Hamburger Icon */}
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white rounded-full transition-all"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-white rounded-full transition-all"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white rounded-full transition-all"
        />
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-gray-950/95 backdrop-blur-xl z-40"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed inset-y-0 right-0 w-full sm:w-96 z-40 flex flex-col items-center justify-center"
            >
              <nav className="space-y-8">
                {menuItems.map((item, index) => {
                  const isActive = location.pathname === item.path
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`block text-4xl md:text-5xl font-bold font-display transition-all duration-300 hover:scale-110 ${
                          isActive
                            ? 'text-gradient-bold'
                            : 'text-white hover:text-gradient-bold'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-gray-500 text-sm">Navigate through pages</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuButton
