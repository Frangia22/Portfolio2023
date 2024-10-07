import { Link } from 'react-router-dom'
import resume from '../mocks/resume.json'
export default function Resume () {
    return (
        <header className='w-full md:w-3/4 lg:w-3/5 mx-auto flex justify-around items-center py-8'>
            {resume.map((section) => (
            <>
                <img className='size-52 drop-shadow-2xl' src={section.image} alt="" />
                <article>
                    <h2 className='text-white text-4xl text-balance'>{section.gretting}</h2>
                    <p className='text-yellowGray text-2xl'>{section.workstation}</p>
                    <p className='text-white text-base'>{section.specialty}</p>
                    <div className='flex gap-4 my-4'>
                        <Link to={`mailto:${section.email}`} className='py-2 px-3 rounded-full text-white bg-secondaryBlue flex justify-between items-center gap-2 shadow-md shadow-primary hover:outline hover:outline-1 hover:outline-white hover:scale-105'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            Contáctame
                        </Link>
                        <Link to={section.linkedin} className='py-2 px-3 rounded-full text-white bg-secondaryBlue flex justify-between items-center gap-2 shadow-md shadow-primary hover:outline hover:outline-1 hover:outline-white hover:scale-105'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            Linkedin
                        </Link>
                    </div>
                </article>
            </>
            ))}
        </header>
    )
}