import type { Social } from '@/types/social'

type fighterId =
| 'miss_zuari'
  | 'miss_pioner'
  | 'miss_soda'
  | 'miss_evolution_jeans'

type fighterName =
| 'Miss Zuari'
  | 'Miss Pioner'
  | 'Miss Soda'
  | 'Miss Evolution Jeans'

interface Clips {
  text: string
}

export interface Fighters {
  id: fighterId
  name: fighterName
  slug?: string
  fightName?: string
  city?: string
  realName: string
  gender: 'masculino' | 'femenino' | 'otro'
  targetWeight?: number
  targetGloves?: string
  birthDate: Date
  height: number
  age: number
  weight: number
  country: string
  gallery?: boolean
  versus?: fighterId
  socials: Social[]
  clips: Clips[]
  workout?: {
    videoID: string
    thumbnail: string
  }
  bio: string
}
