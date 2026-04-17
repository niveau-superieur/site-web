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

/**
 * Transforme une note de 0 à 5 en note sous forme d'étoiles
 * @param rating - la note au format numérique
 * @returns un string au format étoiles
 */
export function formatRating(rating: number): string {
  const stars = []

  for (let i = 0; i < 5; i++) {
    const diff = rating - i

    if (diff >= 1) stars.push('★')
    else if (diff >= 0.5) stars.push('½')
  }

  return stars.join(' ')
}

/**
 * Transforme un type d'outils au format technique en format fonctionnel
 * @param type - le type à transformer
 * @returns un string au format fonctionnel du type
 */
export function formatToolType(type: string): string {
  return type === 'material' ? 'Matériel' : 'Logiciel'
}

/**
 * Transforme un type d'outils au format technique en format fonctionnel
 * @param type - le type à transformer
 * @returns un string au format fonctionnel du type
 */
export function formatPrice(price: number): string {
  return price === 0 ? 'Gratuit' : price.toString().concat('€')
}

/**
 * Tronque un texte après un nombre défini de caractères, en ajoutant …
 * @param text - le texte à tronquer
 * @param maxLength - la taille au-delà de laquelle le texte sera tronqué (par défaut : 50)
 * @returns le texte tronqué avec …
 */
export function truncateText(text: string, maxLength = 50): string {
  if (!text) return ''

  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text
}
