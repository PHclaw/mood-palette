import { useState } from 'react'
import { format } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'
import { useMoodStore } from './store/moodStore'
import { moodColors, MoodColor } from './utils/palette'
import { MoodCanvas } from './components/MoodCanvas'
import { MoodHistory } from './components/MoodHistory'

function App() {
  const [selectedColor, setSelectedColor] = useState<MoodColor | null>(null)
  const [note, setNote] = useState('')
  const [showCanvas, setShowCanvas] = useState(false)
  const { addEntry, getTodayEntry } = useMoodStore()
  const todayEntry = getTodayEntry()

  const handleSave = () => {
    if (!selectedColor || !note.trim()) return
    addEntry({
      color: selectedColor.hex,
      emoji: selectedColor.emoji,
      label: selectedColor.name,
      note: note.trim(),
    })
    setShowCanvas(true)
  }

  return (
    <div className="min-h-screen bg-mood-bg p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-2">🎨 MoodPalette</h1>
          <p className="text-gray-400">{format(new Date(), 'yyyy年MM月dd日 · EEEE')}</p>
        </motion.header>

        {/* Today's Entry */}
        {todayEntry && !showCanvas && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mood-card mb-6"
          >
            <p className="text-sm text-gray-400 mb-2">今日心情</p>
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl shadow-lg"
                style={{ backgroundColor: todayEntry.color }}
              />
              <div>
                <p className="text-2xl">{todayEntry.emoji} {todayEntry.label}</p>
                <p className="text-gray-300 mt-1">{todayEntry.note}</p>
              </div>
            </div>
            <button
              onClick={() => setShowCanvas(true)}
              className="mt-4 w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              查看艺术画布
            </button>
          </motion.div>
        )}

        {/* Color Picker */}
        <AnimatePresence mode="wait">
          {!todayEntry || showCanvas ? (
            <motion.div
              key="picker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {!showCanvas && (
                <>
                  <h2 className="text-xl font-semibold mb-4">选择今日心情</h2>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3 mb-6">
                    {moodColors.map((color) => (
                      <motion.button
                        key={color.hex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedColor(color)}
                        className={`aspect-square rounded-xl border-2 transition-all ${
                          selectedColor?.hex === color.hex
                            ? 'border-white scale-110 shadow-lg'
                            : 'border-transparent'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>

                  {/* Selected Color Info */}
                  <AnimatePresence>
                    {selectedColor && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mood-card mb-6"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-20 h-20 rounded-xl shadow-lg"
                            style={{ backgroundColor: selectedColor.hex }}
                          />
                          <div>
                            <p className="text-3xl">{selectedColor.emoji}</p>
                            <p className="text-xl font-semibold">{selectedColor.name}</p>
                            <p className="text-gray-400">{selectedColor.description}</p>
                          </div>
                        </div>

                        <textarea
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          placeholder="用一句话描述今天..."
                          maxLength={100}
                          className="w-full p-4 rounded-xl bg-white/5 border border-mood-border text-white placeholder-gray-500 resize-none focus:outline-none focus:border-white/30"
                          rows={3}
                        />
                        <p className="text-right text-gray-500 text-sm mt-1">{note.length}/100</p>

                        <button
                          onClick={handleSave}
                          disabled={!note.trim()}
                          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                        >
                          保存并生成画布
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}

              {/* Canvas */}
              {showCanvas && selectedColor && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <MoodCanvas
                    entry={{
                      date: format(new Date(), 'yyyy-MM-dd'),
                      color: selectedColor.hex,
                      emoji: selectedColor.emoji,
                      label: selectedColor.name,
                      note: note || todayEntry?.note || '',
                      createdAt: Date.now(),
                    }}
                  />
                  <button
                    onClick={() => setShowCanvas(false)}
                    className="w-full mt-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    返回编辑
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* History */}
        {!showCanvas && <MoodHistory />}
      </div>
    </div>
  )
}

export default App
