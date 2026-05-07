export type Game = {
  label: string
  playtime: number
  achievements: Achievement[]
  startDate: string // au format YYYY-MM-DD
  endDate?: string // au format YYYY-MM-DD
  image: string
}

export type Achievement = {
  label: string
  image: string
  unlockPercentage?: number // valeur entre 0 et 100
  description?: string
  category: AchievementCategory
  unlockDate?: string // au format YYYY-MM-DD
}

export type AchievementCategory = 'Histoire' | 'Manquable' | 'Collectibles' | 'Divers'
