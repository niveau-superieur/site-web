export type LinkItem = {
  label: string
  url: string
}

export type VideoList = {
  label: string
  items: LinkItem[]
}

export type Video = {
  title: string
  youtubeId: string
  description: string
  costs?: VideoList
  links?: VideoList
  misc?: string[]
}
