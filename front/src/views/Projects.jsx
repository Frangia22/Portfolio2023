import { Button } from '../components/Buttons/Button'
import projects from '../mocks/projects.json'
export default function Projects({ id }) {
    return (
        <section id={id} className="w-full md:w-3/4 lg:w-3/5 mx-auto py-[40px]">
            <h2 className="text-white font-onest font-bold text-[24px] my-[20px]">Proyectos</h2>
            <div className='flex flex-col gap-[25px]'>
                {
                    projects.map((project) => (
                        <div key={project.id} className='flex justify-evenly items-center my-4 mx-8 gap-12 w-full'>
                            <img className='rounded-2xl w-72 h-48 aspect-auto object-cover' src={project.image} alt="" />
                            <article className="p-2 rounded-lg flex flex-col justify-between w-full">
                                <h3 className="text-white text-xl font-semibold my-[12px]">{project.title}</h3>
                                <p className="text-whiteSecondary my-[20px]">{project.description}</p>
                                <div className="flex gap-4 my-[24px]">
                                    <Button variant='border'>
                                        <a href={project.github} className="flex justify-between items-center gap-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                            Repositorio
                                        </a>
                                    </Button>
                                    <Button>
                                        <a href={project.url} className="flex justify-between items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                            Preview
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