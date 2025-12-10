import type { Fighters } from '@/types/fighters'
import X from '@/assets/svg/x.svg'
import Instagram from '@/assets/svg/instagram.svg'
import Youtube from '@/assets/svg/youtube.svg'
import TikTok from '@/assets/svg/tiktok.svg'
import Twitch from '@/assets/svg/twitch.svg'

export const FIGHTERS: Fighters[] = [
  {
    id: 'peereira',
    name: 'Peereira',
    bio: 'Participante del concurso. Creador de contenido conocido por su autenticidad y carisma.',
    realName: 'Pablo Pereira',
    gender: 'masculino',
    birthDate: new Date(1998, 11, 21),
    height: 1.63,
    age: 26,
    weight: 63,
    country: 'es',
    gallery: true,
    city: 'A Coruña, Galicia',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        label: 'Visitar perfil en Instagram',
        followers: '220k',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'twitch',
        name: 'Twitch',
        url: 'https://www.twitch.tv/',
        label: 'Visitar perfil en Twitch',
        followers: '1.3M',
        image: {
          logo: Twitch,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Mi objetivo es dar lo mejor en este concurso.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
  },
  {
    id: 'abby',
    name: 'Abby',
    bio: 'Participante con gran experiencia en creación de contenido. Conocida por su profesionalismo.',
    realName: 'Abril Gené',
    gender: 'femenino',
    birthDate: new Date(2000, 11, 28),
    height: 1.72,
    age: 24,
    weight: 62,
    country: 'es',
    gallery: true,
    city: 'Palma, Mallorca',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        label: 'Visitar perfil en Instagram',
        followers: '332k',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        url: 'https://www.tiktok.com/',
        label: 'Visitar perfil en TikTok',
        followers: '794k',
        image: {
          logo: TikTok,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Estoy lista para mostrar de lo que soy capaz.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
  },
  {
    id: 'perxitaa',
    name: 'Perxitaa',
    bio: 'Creador versátil con gran trayectoria. Su dedicación y pasión son inspiradoras.',
    realName: 'Jaume Cremades',
    gender: 'masculino',
    birthDate: new Date(1991, 6, 9),
    height: 1.86,
    age: 33,
    weight: 102,
    country: 'es',
    gallery: true,
    city: 'Catarroja, Valencia',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        label: 'Visitar perfil en Instagram',
        followers: '1.1M',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'youtube',
        name: 'Youtube',
        url: 'https://www.youtube.com/',
        label: 'Visitar canal en Youtube',
        followers: '2.53M',
        image: {
          logo: Youtube,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Este es el momento que he estado esperando.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
  },
  {
    id: 'roro',
    name: 'Roro',
    bio: 'Creadora conocida por su versatilidad y habilidades excepcionales. Una verdadera estrella.',
    realName: 'Rocío López',
    gender: 'femenino',
    birthDate: new Date(2002, 2, 1),
    height: 1.49,
    age: 23,
    weight: 47,
    country: 'es',
    gallery: true,
    city: 'Barcelona, Cataluña',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        label: 'Visitar perfil en Instagram',
        followers: '3.3M',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        url: 'https://www.tiktok.com/',
        label: 'Visitar perfil en TikTok',
        followers: '8.1M',
        image: {
          logo: TikTok,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Voy a demostrar todo lo que he aprendido.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
  },
]
