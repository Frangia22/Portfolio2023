import { Link } from "react-router-dom";

export function Navbar () {
    return (
        <nav className='bg-yellowGray/90 w-full md:w-3/4 lg:w-3/5 top-5 md:top-3 mx-auto sticky rounded-full text-white md:px-4'>
            <ul className="flex justify-evenly items-center w-full">
                <Link className='inline-block p-2 md:p-4 text-foreground font-onest font-semibold hover:text-secondaryBlue hover:font-bold hover:scale-105'>Experiencia</Link>
                <Link className='inline-block p-2 md:p-4 text-foreground font-onest font-semibold hover:text-secondaryBlue hover:font-bold hover:scale-105'>Proyectos</Link>
                <Link className='inline-block p-2 md:p-4 text-foreground font-onest font-semibold hover:text-secondaryBlue hover:font-bold hover:scale-105'>Sobre mí</Link>
                <Link className='hidden md:inline-block p-2 md:p-4 text-foreground font-onest font-semibold hover:text-secondaryBlue hover:font-bold hover:scale-105'>Contacto</Link>
            </ul>
        </nav>
    )
}