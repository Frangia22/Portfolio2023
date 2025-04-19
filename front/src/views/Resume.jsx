import { Link } from 'react-router-dom'
import resume from '../mocks/resume.json'
import { Button } from '../components/Buttons/Button'
export default function Resume({ id }) {
    return (
        <header id={id} className='w-full md:w-3/4 lg:w-3/5 mx-auto pt-[60px] pb-[30px]'>
            {resume.map((section, index) => (
                <div className='flex justify-around items-center' key={index}>
                    <img className='size-52 drop-shadow-2xl' src={section.image} alt="" />
                    <article className='flex flex-col gap-[10px]'>
                        <h2 className='dark:text-dark-white text-black text-4xl text-balance'>{section.gretting}</h2>
                        <p className='dark:text-dark-yellow text-primary  text-2xl'>{section.workstation}</p>
                        <p className='dark:text-dark-whiteSecondary text-blackSecondary text-base'>{section.specialty}</p>
                        <div className='flex gap-4 my-4'>
                            <Button>
                                <Link className='flex items-center justify-between gap-2' to={`mailto:${section.email}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    Contáctame
                                </Link>
                            </Button>
                            <Button variant='secondary'>
                                <Link to={section.linkedin} className='flex justify-between items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    Linkedin
                                </Link>
                            </Button>
                        </div>
                    </article>
                </div>
            ))}
        </header>
    )
}