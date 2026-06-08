import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format, subDays, parseISO, differenceInDays } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { useMoodStore } from '../store/moodStore'

export function MoodHistory() {
  const { entries, exportData } = useMoodStore()
  const [showAll, setShowAll] = useState(false)
  const [exported, setExported] = useState(false)

  const sortedEntries = [...entries].sort((a, b) => b.createdAt - a.createdAt)
  const displayEntries = showAll ? sortedEntries : sortedEntries.slice(0, 7)

  const handleExport = () => {
    const data = exportData()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mood-palette-${format(new Date(), 'yyyy-MM-dd')}.json`
    a.click()
    URL.revokeObjectURL(url)
    setExported(true)
    setTimeout(() => setExported(false), 2000)
  }

  // Generate last 30 days for the calendar view
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(new Date(), 29 - i)
    const dateStr = format(date, 'yyyy-MM-dd')
    const entry = entries.find((e) => e.date === dateStr)
    return { date: dateStr, entry }
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mood-card mt-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">📅 情绪日历</h2>
        <button
          onClick={handleExport}
          className="text-sm px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          {exported ? '✓ 已导出' : '导出数据'}
        </button>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-10 gap-1 mb-6">
        {last30Days.map((day) => (
          <motion.div
            key={day.date}
            whileHover={{ scale: 1.1 }}
            title={`${day.date}${day.entry ? ` - ${day.entry.emoji} ${day.entry.label}` : ' - 未记录'}`}
            className="aspect-square rounded-md cursor-pointer transition-colors"
            style={{
              backgroundColor: day.entry?.color || '#2d2d44',
              opacity: day.entry ? 1 : 0.3,
            }}
          />
        ))}
      </div>

      {/* Entry list */}
      {displayEntries.length > 0 ? (
        <>
          <div className="space-y-3">
            <AnimatePresence>
              {displayEntries.map((entry) => (
                <motion.div
                  key={entry.date}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{ backgroundColor: entry.color + '30' }}
                  >
                    {entry.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{entry.label}</span>
                      <span className="text-sm text-gray-500">
                        {format(parseISO(entry.date), 'MM/dd', { locale: zhCN })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">{entry.note}</p>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: entry.color }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {sortedEntries.length > 7 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full mt-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              {showAll ? '收起' : `查看全部 (${sortedEntries.length})`}
            </button>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500 py-8">
          还没有记录，开始记录你的第一个心情吧 ✨
        </p>
      )}

      {/* Stats */}
      {entries.length > 0 && (
        <div className="mt-6 pt-4 border-t border-mood-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{entries.length}</p>
              <p className="text-sm text-gray-400">记录天数</p>
            </div>
            <div>
              <p className="text-2xl font-bold">
                {entries.filter((e) => differenceInDays(new Date(), parseISO(e.date)) <= 7).length}
              </p>
              <p className="text-sm text-gray-400">本周记录</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{new Set(entries.map((e) => e.color)).size}</p>
              <p className="text-sm text-gray-400">使用颜色</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
