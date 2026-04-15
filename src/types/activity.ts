import type { ActivityTag } from '@/data/activity/activityTags'
import type { ProgramId } from '@/data/activity/programs'
import type { ColorTag800 } from '@/theme/colorTags'

export type Activity = {
  name: string
  date: string // YYYY-MM-DD
  duration?: number // minutes
  distance?: number // km
  tags?: ActivityTag[]
  programs: ProgramId[]
  description?: string
}

export type Program = {
  id: ProgramId
  name: string
  tagColor: ColorTag800
}
