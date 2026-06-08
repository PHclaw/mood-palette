import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { format } from 'date-fns'

export interface MoodEntry {
  date: string
  color: string
  emoji: string
  label: string
  note: string
  createdAt: number
}

interface MoodStore {
  entries: MoodEntry[]
  addEntry: (entry: Omit<MoodEntry, 'date' | 'createdAt'>) => void
  getTodayEntry: () => MoodEntry | undefined
  getEntryByDate: (date: string) => MoodEntry | undefined
  exportData: () => string
}

export const useMoodStore = create<MoodStore>()(
  persist(
    (set, get) => ({
      entries: [],

      addEntry: (entry) => {
        const today = format(new Date(), 'yyyy-MM-dd')
        set((state) => {
          const existing = state.entries.findIndex((e) => e.date === today)
          if (existing >= 0) {
            const updated = [...state.entries]
            updated[existing] = { ...entry, date: today, createdAt: Date.now() }
            return { entries: updated }
          }
          return { entries: [...state.entries, { ...entry, date: today, createdAt: Date.now() }] }
        })
      },

      getTodayEntry: () => {
        const today = format(new Date(), 'yyyy-MM-dd')
        return get().entries.find((e) => e.date === today)
      },

      getEntryByDate: (date) => {
        return get().entries.find((e) => e.date === date)
      },

      exportData: () => {
        return JSON.stringify(get().entries, null, 2)
      },
    }),
    {
      name: 'mood-palette-storage',
    }
  )
)
