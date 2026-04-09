import type { ActivityTag } from '@/data/programs/activityTags'
import type { ColorTag800 } from '@/data/programs/colorTags'

export type Activity = {
  name: string
  date: string // YYYY-MM-DD
  duration?: number // minutes
  distance?: number // km
  tags?: ActivityTag[]
  description?: string
}

export type Program = {
  name: string
  tagColor?: ColorTag800
  activities: Activity[]
}
