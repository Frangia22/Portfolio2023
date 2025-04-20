import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AboutMeIcon, AboutMeIconActive, ProjectsIcon, ProjectsIconActive, WorkExperienceIcon, WorkExperienceIconActive } from "../../assets/Icons/Icons";
import { useState } from "react";
import { useEffect } from "react";

const LINKS = [
    {
        name: 'Proyectos',
        icon: <ProjectsIcon className="size-[20px] md:hidden" />,
        iconActive: <ProjectsIconActive className="size-[20px] md:hidden" />,
        to: '#projects',
    },
    {
        name: 'Sobre mí',
        icon: <AboutMeIcon className="size-[20px] md:hidden" />,
        iconActive: <AboutMeIconActive className="size-[20px] md:hidden" />,
        to: '#about',
    },
    {
        name: 'Experiencia',
        icon: <WorkExperienceIcon className="size-[20px] md:hidden" />,
        iconActive: <WorkExperienceIconActive className="size-[20px] md:hidden" />,
        to: '#experience',
    },
]

export function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['#resume', '#experience', '#projects', '#about'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificar al cargar la página

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className='dark:bg-[#253645] bg-[#abacaf] md:mb-5 w-full md:w-auto lg:w-4/5 xl:w-3/5 md:top-3 md:mx-[25px] lg:mx-auto fixed bottom-0 md:sticky rounded-t-[20px] md:rounded-full shadow-lg py-[16px] md:py-0 md:px-4 z-10'>
            <ul className="flex justify-evenly items-center w-full">
                {LINKS.map((link, index) => (
                    <ScrollLink key={index} smooth={true} offset={-50} duration={500} to={link.to} className={`md:inline-block md:p-4 ${activeSection === `${link.to}` ? 'text-black dark:text-dark-white dark:fill-white fill-black transition-opacity duration-500' : 'dark:text-dark-whiteSecondary text-blackSecondary'} dark:hover:text-dark-white hover:text-black font-onest font-semibold hover:font-bold hover:scale-105 text-[12px] md:text-[16px] flex flex-col gap-[5px] items-center`}>
                        {activeSection === `${link.to}` ? link.iconActive : link.icon}
                        {link.name}
                    </ScrollLink>
                ))}
                <Link className='hidden md:inline-block p-2 md:p-4 dark:text-dark-whiteSecondary text-blackSecondary dark:hover:text-dark-white hover:text-black font-onest font-semibold hover:font-bold hover:scale-105'>Contacto</Link>
            </ul>
        </nav>
    )
}