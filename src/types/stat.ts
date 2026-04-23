import type { ProgramId } from '@/data/activity/programs'
import type { Activity } from './activity'

export type Stat = {
  name: string
  startDate: string //YYYY-MM-DD
  endDate: string // YYYY-MM-DD
  totalDuration: number // minutes
  totalDistance: number // km
  totalActivities: number
  program: ProgramId
  highlights?: StatHighlight[]
}

export type StatHighlight = {
  label: string
  value: number | string
  activities?: Activity[]
}
