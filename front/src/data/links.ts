interface linksProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  href: string;
  target?: string;
}

export const navLinks: linksProps[] = [
  {
    name: "Proyectos",
    href: "/projects",
  },
  {
    name: "Stack",
    href: "/stack",
  },
  {
    name: "Sobre mí",
    href: "/about",
  },
  {
    name: "Experiencia",
    href: "/experience",
  },
  {
    name: "Servicios",
    href: "/services",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];

export const socialLinks: linksProps[] = [
  {
    name: "GitHub",
    href: "https://github.com/frangia22",
    target: "_blank",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/frangia22/",
    target: "_blank",
  },
];
