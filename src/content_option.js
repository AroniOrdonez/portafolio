import fybImage from "./imagenes/autor.png";
import s1 from "./imagenes/s1.jpg";
import s2 from "./imagenes/s2.jpeg";
import s3 from "./imagenes/s3.jpg";
import s4 from "./imagenes/s4.jpg";
import s5 from "./imagenes/s5.jpg";
import s6 from "./imagenes/s6.jpg";
import s7 from "./imagenes/s7.jpg";
import s9 from "./imagenes/s9.png";
import s10 from "./imagenes/s10.jpg";
import s11 from "./imagenes/s11.jpg";
import s12 from "./imagenes/s12.jpg";
import s13 from "./imagenes/s13.jpg";
import s14 from "./imagenes/s14.jpg";
import s15 from "./imagenes/s15.jpg";
const logotext = "";
const meta = {
  title: "Aroni Ordoñez ",
  description:
    "Soy luis estudiante de la UNCP y estoy en el 9no ciclo de la carrera de Ingenieria de Sistemas, me gusta el desarrollo web y la programacion en general.",
};

const introdata = {
  title: "Soy Aroni Ordoñez Luis ",
  animated: {
    first: "Disfruto programando",
    second: "Creo sitios web fascinantes",
    third: "Desarrollo aplicaciones web",
  },
  description:
    "Transformo líneas de código en soluciones que dan vida a la tecnología web.",
  your_img_url: fybImage,
};

const dataabout = {
  title: "Un poco sobre mi mismo",
  aboutme:
    "Estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú, apasionado por el aprendizaje continuo. Busco oportunidades para expandir mis conocimientos, especialmente en desarrollo de software y tecnologías de la información",
};
const worktimeline = [
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "Javascript",
    value: 70,
  },

  {
    name: "Jquery",
    value: 42,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: s1,
    description: "SEMANA 1 ",
    title: "FUNDAMENTOS DE LA TECNOLOGÍA WEB",
    link: "/portfolio/week/week1",
  },
  {
    img: s2,
    description: "SEMANA 2",
    title: "HTML Y XML COMO LENGUAJES MARCADOS PARA LA WEB",
    link: "/portfolio/week/week2",
  },
  {
    img: s3,
    description: "SEMANA 3",
    link: "/portfolio/week/week3",
    title: "PROFUNDIZANDO EN FLEXBOX Y GRID LAYOUT CON CSS PURO",
  },
  {
    img: s4,
    description: "SEMANA 4",
    link: "/portfolio/week/week4",
    title: "DESARROLLO WEB DINÁMICO CON JAVASCRIPT, DOM Y CANVAS",
  },
  {
    img: s5,
    description: "SEMANA 5",
    link: "/portfolio/week/week5",
    title: "DESARROLLO FRONTEND: SPAS, REACT, SASS Y NEXT.JS",
  },
  {
    img: s6,
    description: "SEMANA 6",
    link: "/portfolio/week/week6",
    title:
      "EXPLORANDO EVENTOS, CONDICIONALES Y BUCLES CON FRAMEWORKS JAVASCRIPT",
  },
  {
    img: s7,
    description: "SEMANA 7",
    link: "/portfolio/week/week7",
    title: "EXPLORANDO LOS HOOKS EN REACT",
  },

  {
    img: s9,
    description: "SEMANA 9",
    link: "/portfolio/week/week9",
    title: "NEXT.JS Y TYPESCRIPT,CSR/SSR, CREACIÓN DE PROYECTO Y ESTILOS",
  },
  {
    img: s10,
    description: "SEMANA 10",
    link: "/portfolio/week/week10",
    title: "API EN NEXT.JS,CSR/SSR, ESTILOS, FORMULARIOS Y TYPESCRIPT",
  },
  {
    img: s11,
    description: "SEMANA 11",
    link: "/portfolio/week/week11",
    title:
      "FORMULARIO CON NEXT.JS: SERVER SIDE PROPS, NEXT AUTH, INSTALACIÓN Y CONFIGURACIÓN",
  },
  {
    img: s12,
    description: "SEMANA 12",
    link: "/portfolio/week/week12",
    title: "CONSUMO DE API DE POKÉMON CON REACT: UTILIZANDO JSON Y USEEFFECT",
  },
  {
    img: s13,
    description: "SEMANA 13",
    link: "/portfolio/week/week13",
    title: "DESARROLLO DE CRUD DE USUARIOS EN REACT",
  },
  {
    img: s14,
    description: "SEMANA 14",
    link: "/portfolio/week/week14",
    title:
      "CONSTRUYENDO UNA API DE MARVEL CON ENCRIPTACIÓN: DESAFÍOS Y APRENDIZAJES",
  },
  {
    img: s15,
    description: "SEMANA 15",
    link: "/portfolio/week/week15",
    title:
      "EXPLORANDO EL DESARROLLO FULL STACK CON SPRING BOOT DESDE LA ARQUITECTURA BACKEND HASTA LA IMPLEMENTACIÓN DE CRUD Y AUTENTICACIÓN",
  },
];

const contactConfig = {
  YOUR_EMAIL: "andreyyl02@gmail.com",
  YOUR_FONE: "931322567",
  description:
    "Transformemos tu visión en realidad digital. Convierte tu presencia en línea en una experiencia única con una página web diseñada a medida para destacar tu marca y alcanzar tus objetivos ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
