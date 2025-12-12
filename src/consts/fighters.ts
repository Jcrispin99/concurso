import type { Fighters } from '@/types/fighters'
import Instagram from '@/assets/svg/instagram.svg'
import TikTok from '@/assets/svg/tiktok.svg'
import Facebook from '@/assets/svg/facebook.svg'

export const FIGHTERS: Fighters[] = [
  {
    id: 'miss_zuari',
    name: 'Miss Zuari',
    slug: 'candidato1',
    bio: 'Soy Sofía Rengifo, tengo 24 años. Nací y crecí en la ciudad de Tocache, pero fue la ciudad del mejor clima del mundo la que me brindó oportunidades que hoy me permiten ejercer con orgullo la profesión de abogada. Defendiendo causas justas, y siendo una voz firme y empática para quienes lo necesitan. Con disciplina, sensibilidad, autenticidad y un compromiso inquebrantable con la verdad. Desde niña, el modelaje y los concursos de belleza me ayudaron a vencer miedos y a descubrir que puedo enfrentar cualquier desafío con determinación. Hoy camino con la convicción de que los sueños florecen cuando se trabajan con amor, disciplina y fe, y que cada paso, ya sea en un escenario, o en una sala jurídica, es parte del maravilloso camino de convertirme en la mujer que aspiro ser.',
    realName: 'Claudia Sofia Rengifo Romero',
    gender: 'femenino',
    birthDate: new Date(2001, 8, 23),
    height: 1.63,
    age: 24,
    weight: 53,
    country: 'pe',
    gallery: true,
    city: 'Huánuco, Perú',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/soff.rengifo',
        label: 'Visitar perfil en Instagram',
        followers: '2.9K',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        url: 'https://www.tiktok.com/@sofia.rengifo23',
        label: 'Visitar perfil en TikTok',
        followers: '1.1K',
        image: {
          logo: TikTok,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/claudia.rengifo2309',
        label: 'Visitar perfil en Facebook',
        followers: '1.1K',
        image: {
          logo: Facebook,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Este es mi momento y voy a demostrarlo.',
      },
    ],
  },
  {
    id: 'miss_evolution_jeans',
    name: 'Miss Evolution Jeans',
    slug: 'candidato2',
    bio: 'Soy Joisse Chávez, tengo 24 años. Licenciada en Ciencias de la Comunicación Social,Me desempeño en el Área de Imagen de la Dirección Regional de Agricultura del Gobierno Regional Huánuco, y también trabajo en publicidad y modelo.Soy una mujer que ha pasado por momentos difíciles, pero que aprendió a levantarse, sanar y avanzar con más fuerza. Amo la danza urbana, el arte que me recuerda que el movimiento también es libertad. Además, lidero mi proyecto social “Dejando Huellas de Amor”, desde donde apoyo a animales, niños y adultos mayores. Amadrino a una perrita del albergue “Salvando Patitas”, porque creo en el poder de los actos pequeños que nacen del corazón.',
    realName: 'Joisse Trinidad Chávez',
    gender: 'femenino',
    birthDate: new Date(2001, 1, 17),
    height: 1.6,
    age: 24,
    weight: 56,
    country: 'pe',
    gallery: true,
    city: 'Huánuco, Perú',
    socials: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/joissechavezz',
        label: 'Visitar perfil en Instagram',
        followers: '1.4K',
        image: {
          logo: Instagram,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        url: 'https://www.tiktok.com/@joissechavezz',
        label: 'Visitar perfil en TikTok',
        followers: '454',
        image: {
          logo: TikTok,
          width: 200,
          height: 200,
        },
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/joissechavez17',
        label: 'Visitar perfil en Facebook',
        followers: '626',
        image: {
          logo: Facebook,
          width: 200,
          height: 200,
        },
      },
    ],
    clips: [
      {
        text: 'Voy a demostrar que soy una mujer fuerte y capaz.',
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
        followers: '13.9K',
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
        followers: '3.6K',
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
]
