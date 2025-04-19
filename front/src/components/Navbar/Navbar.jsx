import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export function Navbar() {
    return (
        <nav className='dark:bg-[#253645] bg-[#abacaf] w-full mb-5 md:w-3/4 lg:w-3/5 top-5 md:top-3 mx-auto sticky rounded-full shadow-lg md:px-4 z-10'>
            <ul className="flex justify-evenly items-center w-full">
                <ScrollLink smooth={true} offset={-50} duration={500} to='#experience' className='inline-block p-2 md:p-4 dark:text-dark-whiteSecondary text-blackSecondary dark:hover:text-dark-white hover:text-black font-onest font-semibold hover:font-bold hover:scale-105'>Experiencia</ScrollLink>
                <ScrollLink smooth={true} offset={-50} duration={500} to='#projects' className='inline-block p-2 md:p-4 dark:text-dark-whiteSecondary text-blackSecondary dark:hover:text-dark-white hover:text-black font-onest font-semibold hover:font-bold hover:scale-105'>Proyectos</ScrollLink>
                <ScrollLink smooth={true} offset={-50} duration={500} to='#about' className='inline-block p-2 md:p-4 dark:text-dark-whiteSecondary text-blackSecondary dark:hover:text-dark-white hover:text-black font-onest font-semibold hover:font-bold hover:scale-105'>Sobre mí</ScrollLink>
                <Link className='hidden md:inline-block p-2 md:p-4 dark:text-dark-whiteSecondary text-blackSecondary dark:hover:text-dark-white hover:text-black font-onest font-semibold hover:font-bold hover:scale-105'>Contacto</Link>
            </ul>
        </nav>
    )
}