/**
 * Transforme une date au format ISo en date au format DD/MM/YYYY
 * @param date - la date à transformer
 * @returns un string de la date au format DD/MM/YYYY
 */
export function formatDateFR(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fr-FR').format(d)
}

/**
 * Transforme une durée en minutes en un string au format HH h MM min
 * @param minutes - le nombre de minutes à transformer
 * @returns un string au format HH h MM min
 */
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  const hPart = h > 0 ? `${h} h` : ''
  const mPart = m > 0 ? `${m} min` : ''
  return [hPart, mPart].filter(Boolean).join(' ')
}
