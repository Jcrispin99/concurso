import type { Fighters } from '@/types/fighters'
import Instagram from '@/assets/svg/instagram.svg'
import Youtube from '@/assets/svg/youtube.svg'
import TikTok from '@/assets/svg/tiktok.svg'
import Facebook from '@/assets/svg/facebook.svg'

export const FIGHTERS: Fighters[] = [
  {
    id: 'miss_pioner',
    name: 'Miss Pioner',
    slug: 'candidato4',
    bio: 'Nací en la hermosa ciudad de Huánuco, tengo 25 años y desde niña descubrí mis dos grandes pasiones: el baile y la lectura. Actualmente estudio Medicina, una carrera que me permite unir vocación y servicio. A pesar de las exigencias académicas, en mis tiempos libres continúo bailando, porque es el espacio donde vuelvo a mi esencia, libero mi energía y recuerdo a la niña que soñaba en grande. Soy una mujer que cree en el equilibrio entre la mente, el cuerpo y el corazón, y que trabaja cada día por convertirse en una profesional, una artista y una persona que inspire a los demás a seguir sus propios sueños.',
    realName: 'Rosamady Alexandra Acuña Rojas',
    gender: 'femenino',
    birthDate: new Date(2000, 4, 11),
    height: 1.65,
    age: 25,
    weight: 50,
    country: 'pe',
    gallery: true,
    city: 'Huánuco, Perú',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/rosamady.ale',
        label: 'Visitar perfil en Instagram',
        followers: '4.4K',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        url: 'https://www.tiktok.com/@rosamady',
        label: 'Visitar perfil en TikTok',
        followers: '26K',
        image: {
          logo: TikTok,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/rosamadyalexandra.acunarojas',
        label: 'Visitar perfil en Facebook',
        followers: '3.6M',
        image: {
          logo: Facebook,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Mi objetivo es dar lo mejor en este concurso.',
      },
    ],
  },
  {
    id: 'miss_soda',
    name: 'Miss Soda',
    slug: 'candidato3',
    bio: 'Nacida en la histórica ciudad de Lima, Jackeline Solange Avendaño Falcon, a sus 27 años, es una profesional multifacética que fusiona la lógica del mundo empresarial con la pasión por las artes escénicas. Con una base en Marketing y Negocios Internacionales, canaliza su energía emprendedora y su pasión por las ventas en su propio proyecto: Fagriel. Trabajando arduamente para que su negocio prospere, encuentra un propósito constante y un equilibrio en su vida,ya sea cerrando una venta, planificando estrategias de mercado o sumergiéndose en el mundo de la actuación, cada paso está motivado por su "pequeño amor", la luz que guía su camino y el motor de su dedicación diaria.',
    realName: 'Jackeline Solange Avendaño Falcon',
    gender: 'femenino',
    birthDate: new Date(1998, 1, 8),
    height: 1.68,
    age: 27,
    weight: 54,
    country: 'pe',
    gallery: true,
    city: 'Huánuco, Perú',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/solangeavenda',
        label: 'Visitar perfil en Instagram',
        followers: '13.9M',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        url: 'https://www.tiktok.com/@solangeavendano08',
        label: 'Visitar perfil en TikTok',
        followers: '2.3K',
        image: {
          logo: TikTok,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/solange.avendano.351',
        label: 'Visitar perfil en Facebook',
        followers: '2K',
        image: {
          logo: Facebook,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Yo soy Miss Soda y estoy lista para demostrar que soy capaz de dar lo mejor en este concurso.',
      },
    ],
  },
  {
    id: 'perxitaa',
    name: 'Perxitaa',
    slug: 'candidato1',
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
      },
    ],
  },
  {
    id: 'roro',
    name: 'Roro',
    slug: 'candidato2',
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
      },
    ],
  },
]
