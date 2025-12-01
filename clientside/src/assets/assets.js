import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import barb1 from './barb1.png'
import barb2 from './barb2.png'
import barb3 from './barb3.png'
import barb4 from './barb4.png'
import barb5 from './barb5.png'
import barb6 from './barb6.png'
import barb7 from './barb7.png'
import barb8 from './barb8.png'
import Corte from './Corte.svg'
import Barba from './Barba.svg'
import Sobrancelha from './Sobrancelha.svg'
import Infantil from './Corte_infantil.svg'
import Coloracao from './Coloracao.svg'
import Hidratacao from './Hidratacao_capilar.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
}

export const specialityData = [
    {
        speciality: 'Corte',
        image: Corte
    },
    {
        speciality: 'Barba',
        image: Barba
    },
    {
        speciality: 'Sobrancelha',
        image: Sobrancelha
    },
    {
        speciality: 'Corte Infantil',
        image: Infantil
    },
    {
        speciality: 'Coloração',
        image: Coloracao
    },
    {
        speciality: 'Hidratação Capilar',
        image: Hidratacao
    },
]

export const barbers = [
  {
    _id: 'barb1',
    name: 'Carlos Henrique Silva',
    image: barb1,
    speciality: 'Corte',
    degree: 'Especialista em Cortes Masculinos',
    experience: '6 Anos',
    about: 'Carlos é conhecido pela precisão em cortes degradê e barba completa, oferecendo um atendimento detalhado e personalizado. Seu foco é proporcionar estilo moderno aliado ao conforto do cliente.',
    fees: 50,
    address: {
      line1: 'Av. João Naves de Ávila, 2350',
      line2: 'Santa Mônica, Uberlândia - MG'
    }
  },
  {
    _id: 'barb2',
    name: 'Victor Almeida Rocha',
    image: barb2,
    speciality: 'Corte',
    degree: 'Formação em Visagismo Masculino',
    experience: '8 Anos',
    about: 'Victor combina técnica e criatividade para transformar o visual dos clientes. É especialista em design de barba e cortes alinhados ao formato do rosto.',
    fees: 50,
    address: {
      line1: 'Rua Timbiras, 412',
      line2: 'Centro, Uberlândia - MG'
    }
  },
  {
    _id: 'barb3',
    name: 'Felipe Moreira Santos',
    image: barb3,
    speciality: 'Barba',
    degree: 'Curso Avançado de Barbearia',
    experience: '5 Anos',
    about: 'Felipe oferece uma experiência premium, com cortes modernos, beard care e técnicas de finalização que deixam o visual impecável.',
    fees: 40,
    address: {
      line1: 'Rua Acre, 190',
      line2: 'Osvaldo Rezende, Uberlândia - MG'
    }
  },
  {
    _id: 'barb4',
    name: 'Leonardo Batista Freitas',
    image: barb4,
    speciality: 'Barba',
    degree: 'Técnico em Cortes Masculinos',
    experience: '7 Anos',
    about: 'Leonardo é reconhecido pela habilidade com fades e cortes modernos. Seu atendimento é focado em precisão e alto padrão de acabamento.',
    fees: 40,
    address: {
      line1: 'Rua Marciano Santos, 75',
      line2: 'Luizote de Freitas, Uberlândia - MG'
    }
  },
  {
    _id: 'barb5',
    name: 'Rafael Costa Menezes',
    image: barb5,
    speciality: 'Sobrancelha',
    degree: 'Certificação Internacional em Barbearia',
    experience: '10 Anos',
    about: 'Rafael tem ampla experiência em cortes clássicos e modernos, proporcionando um atendimento cuidadoso e profissional para todos os estilos.',
    fees: 20,
    address: {
      line1: 'Av. Rondon Pacheco, 3500',
      line2: 'Saraiva, Uberlândia - MG'
    }
  },
  {
    _id: 'barb6',
    name: 'Eduardo Prado Martins',
    image: barb6,
    speciality: 'Corte Infantil',
    degree: 'Profissional Certificado em Barbearia',
    experience: '4 Anos',
    about: 'Eduardo domina desde cortes tradicionais até os mais atuais, sempre prezando por um acabamento limpo e atendimento de qualidade.',
    fees: 50,
    address: {
      line1: 'Rua da Carioca, 122',
      line2: 'Patrimônio, Uberlândia - MG'
    }
  },
  {
    _id: 'barb7',
    name: 'Matheus Ribeiro Andrade',
    image: barb7,
    speciality: 'Coloração',
    degree: 'Curso Profissionalizante de Barbearia',
    experience: '3 Anos',
    about: 'Matheus é especialista em design de barba e cuidados faciais masculinos, criando estilos personalizados para cada cliente.',
    fees: 100,
    address: {
      line1: 'Rua Andrelândia, 55',
      line2: 'Jaraguá, Uberlândia - MG'
    }
  },
  {
    _id: 'barb8',
    name: 'André Luiz Queiroz',
    image: barb8,
    speciality: 'Hidratação Capilar',
    degree: 'Especialização em Cortes Modernos',
    experience: '9 Anos',
    about: 'André oferece uma experiência diferenciada com técnicas avançadas de corte, barba e finalização, sempre garantindo estilo e conforto.',
    fees: 120,
    address: {
      line1: 'Av. Cesário Alvim, 980',
      line2: 'Lídice, Uberlândia - MG'
    }
  }
];