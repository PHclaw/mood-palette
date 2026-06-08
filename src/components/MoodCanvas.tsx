import { motion } from 'framer-motion'
import type { MoodEntry } from '../store/moodStore'

interface Props {
  entry: MoodEntry
}

export function MoodCanvas({ entry }: Props) {
  // Generate random seed from date for consistent patterns
  const seed = entry.date.split('-').reduce((a, b) => a + parseInt(b), 0)
  
  // Simple seeded random
  const random = (i: number) => {
    const x = Math.sin(seed + i) * 10000
    return x - Math.floor(x)
  }

  // Generate grid cells
  const cells = Array.from({ length: 64 }, (_, i) => ({
    size: 20 + random(i) * 20,
    opacity: 0.3 + random(i + 100) * 0.7,
    offset: random(i + 200) * 10 - 5,
    color: random(i + 300) > 0.7 ? entry.color : '#1a1a2e',
  }))

  return (
    <div className="mood-card overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">🎨 今日画布</h2>
        <span className="text-sm text-gray-400">{entry.date}</span>
      </div>

      {/* Canvas */}
      <div className="relative aspect-square bg-[#0a0a14] rounded-xl overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(circle at 30% 30%, ${entry.color}, transparent)` }}
        />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {cells.map((cell, i) => (
            <motion.rect
              key={i}
              x={(i % 8) * 40 + cell.offset}
              y={Math.floor(i / 8) * 40 + cell.offset}
              width={cell.size}
              height={cell.size}
              rx={4}
              fill={cell.color}
              opacity={cell.opacity}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: cell.opacity, scale: 1 }}
              transition={{ delay: i * 0.01, duration: 0.3 }}
              filter={cell.color !== '#1a1a2e' ? 'url(#glow)' : undefined}
            />
          ))}
        </svg>

        {/* Center glow */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="w-24 h-24 rounded-full blur-xl opacity-60"
            style={{ backgroundColor: entry.color }}
          />
        </motion.div>
      </div>

      {/* Mood info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 flex items-center gap-4"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: entry.color + '20' }}
        >
          {entry.emoji}
        </div>
        <div>
          <p className="font-semibold">{entry.label}</p>
          <p className="text-sm text-gray-400">{entry.note}</p>
        </div>
      </motion.div>
    </div>
  )
}
