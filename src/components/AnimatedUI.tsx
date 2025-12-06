import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export const GradientText = ({ children, className = '', animate = true }: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-primary-400 to-neon-cyan ${
        animate ? 'bg-[length:200%_auto] animate-gradient' : ''
      } ${className}`}
      initial={{ backgroundPosition: '0% center' }}
      animate={animate ? { backgroundPosition: ['0% center', '100% center', '0% center'] } : {}}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.span>
  )
}

interface BlurFadeProps {
  children: ReactNode
  delay?: number
  duration?: number
  blur?: string
  className?: string
}

export const BlurFade = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  blur = '10px',
  className = '' 
}: BlurFadeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${blur})` }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FlipButtonProps {
  frontText: string
  backText: string
  onClick?: () => void
  className?: string
}

export const FlipButton = ({ frontText, backText, onClick, className = '' }: FlipButtonProps) => {
  return (
    <div className={`group relative cursor-pointer ${className}`} onClick={onClick}>
      <div className="relative w-full min-h-[56px] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl font-semibold text-white flex items-center justify-center whitespace-nowrap">
          {frontText}
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)] px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white flex items-center justify-center whitespace-nowrap">
          {backText}
        </div>
      </div>
    </div>
  )
}

interface AvatarGroupProps {
  avatars: { name: string; image?: string }[]
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export const AvatarGroup = ({ avatars, max = 5, size = 'md' }: AvatarGroupProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const displayAvatars = avatars.slice(0, max)
  const remaining = Math.max(0, avatars.length - max)

  return (
    <div className="flex -space-x-3">
      {displayAvatars.map((avatar, index) => (
        <motion.div
          key={index}
          className={`${sizeClasses[size]} rounded-full border-2 border-gray-950 bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center text-white font-semibold text-sm relative z-0 hover:z-10 transition-all duration-300`}
          whileHover={{ scale: 1.1, x: 5 }}
          title={avatar.name}
        >
          {avatar.image ? (
            <img src={avatar.image} alt={avatar.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span>{avatar.name.charAt(0).toUpperCase()}</span>
          )}
        </motion.div>
      ))}
      {remaining > 0 && (
        <div className={`${sizeClasses[size]} rounded-full border-2 border-gray-950 bg-gray-800 flex items-center justify-center text-white font-semibold text-sm`}>
          +{remaining}
        </div>
      )}
    </div>
  )
}
