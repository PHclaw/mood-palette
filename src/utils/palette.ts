export interface MoodColor {
  name: string
  emoji: string
  hex: string
  gradient: string
  description: string
}

export const moodColors: MoodColor[] = [
  { name: '热情红', emoji: '🔥', hex: '#FF6B6B', gradient: 'from-[#FF6B6B] to-[#ee5a5a]', description: '充满活力' },
  { name: '活力橙', emoji: '🍊', hex: '#FFA94D', gradient: 'from-[#FFA94D] to-[#ff9537]', description: '积极向上' },
  { name: '阳光黄', emoji: '☀️', hex: '#FFE066', gradient: 'from-[#FFE066] to-[#ffd84d]', description: '开心愉悦' },
  { name: '生机绿', emoji: '🌿', hex: '#69DB7C', gradient: 'from-[#69DB7C] to-[#5cc96e]', description: '平静自然' },
  { name: '天空蓝', emoji: '💙', hex: '#74C0FC', gradient: 'from-[#74C0FC] to-[#5fb3fb]', description: '冷静思考' },
  { name: '梦幻紫', emoji: '✨', hex: '#B197FC', gradient: 'from-[#B197FC] to-[#a387f9]', description: '浪漫神秘' },
  { name: '温柔粉', emoji: '💗', hex: '#F783AC', gradient: 'from-[#F783AC] to-[#f5709d]', description: '温暖关爱' },
  { name: '沉稳灰', emoji: '🌫️', hex: '#868E96', gradient: 'from-[#868E96] to-[#768186]', description: '沉稳内敛' },
  { name: '清新白', emoji: '🤍', hex: '#F1F3F5', gradient: 'from-[#F1F3F5] to-[#e4e7ea]', description: '清新简单' },
  { name: '大地棕', emoji: '🪵', hex: '#D0BFFF', gradient: 'from-[#D0BFFF] to-[#c4aeff]', description: '踏实安定' },
  { name: '治愈青', emoji: '🌊', hex: '#38D9A9', gradient: 'from-[#38D9A9] to-[#26c496]', description: '清新治愈' },
  { name: '深邃黑', emoji: '🌑', hex: '#495057', gradient: 'from-[#495057] to-[#3d4248]', description: '神秘深邃' },
]
