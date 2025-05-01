import { Button } from '../components/Buttons/Button'
import projects from '../mocks/projects.json'
import Astropos from 'atropos/react'
import 'atropos/css'
export default function Projects({ id }) {
    return (
        <section id={id} className="mx-[10px] sm:mx-[25px] lg:w-4/5 xl:w-3/5 lg:mx-auto py-[40px]">
            <h2 className="dark:text-white text-black font-onest font-bold text-[24px] my-[20px]">Proyectos</h2>
            <div className='flex flex-col gap-[25px]'>
                {
                    projects.map((project) => (
                        <div key={project.id} className='flex flex-col md:grid md:grid-cols-2 md:place-content-evenly md:place-items-center gap-[20px] lg:my-4 lg:mx-8 lg:gap-12 w-full'>
                            <Astropos highlight={false} rotateYMax={8} className='relative group rounded-2xl w-full md:w-[320px] h-48 sm:h-64 md:h-48 transition duration-500 ease-in-out transform shadow-xl overflow-clip md:group-hover:shadow-2xl group-hover:scale-110'>
                                <img loading='lazy' className='rounded-2xl w-full h-full aspect-auto object-cover object-top transition duration-500 md:scale-110 md:group-hover:scale-105 border-2 border-solid dark:border-foreground border-secondaryBlue' src={project.image} alt={project.title} />
                                {project.url && <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 scale-105 group-hover:scale-110">
                                    <div className="flex justify-center items-center h-full text-white">
                                        <Button variant='border' className="!outline-none !shadow-none !text-white">
                                            <a href={project.url} className="flex justify-between items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                                Preview
                                            </a>
                                        </Button>
                                    </div>
                                </div>}
                            </Astropos>
                            <article className="p-2 rounded-lg flex flex-col justify-between w-full">
                                <h3 className="dark:text-white text-black text-xl font-semibold my-[12px]">{project.title}</h3>
                                <p className="dark:text-whiteSecondary text-blackSecondary my-[20px]">{project.description}</p>
                                <div className='flex flex-wrap gap-[5px]'>
                                    {project.technologies.map((technology, index) => (
                                        <Astropos key={index}
                                            className="rounded-full odd:dark:bg-foreground/40 even:dark:bg-foreground/80 odd:bg-secondaryBlue/40 even:bg-secondaryBlue/80"
                                            innerClassName="rounded-full shadow-md px-2.5 py-0.5 text-sm whitespace-nowrap dark:text-white text-black"
                                            data-atropos-opacity="0.1;0.5">
                                            {technology}
                                        </Astropos>
                                    ))}
                                </div>
                                <div className="flex flex-col min-[390px]:flex-row gap-4 my-[24px]">
                                    <Button variant='border'>
                                        <a href={project.github} className="flex justify-between items-center gap-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                            Repositorio
                                        </a>
                                    </Button>
                                </div>
                            </article>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}