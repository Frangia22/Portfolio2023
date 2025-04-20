import experiences from '../mocks/experience.json'
export function Experience({ id }) {
  return (
    <section id={id} className='mx-[10px] md:mx-[25px] lg:w-4/5 xl:w-3/5 lg:mx-auto py-[20px] md:py-[40px]'>
      <h2 className="dark:text-white text-black font-onest font-bold text-[24px] pb-[24px] my-[24px]">Experiencia</h2>
      {experiences.toReversed().map((experience) => (
        <article key={experience.id} className='border-l-2 border-solid dark:border-l-white border-l-black px-4 pt-[16px] pb-[40px] mx-4 relative group'>
          <span className='size-4 transition-all duration-300 ease-in-out group-hover:size-5 group-hover:-left-[10px] rounded-full -left-2 top-[24px] dark:bg-yellow bg-primary brightness-110 absolute'></span>
          <div className='flex flex-col md:flex-row gap-6 justify-evenly md:items-center'>
            <div className='md:w-1/2 flex flex-col mx-[10px] md:mx-6 gap-4'>
              <h3 className='dark:text-yellow text-primary font-onest text-2xl'>{experience.position}</h3>
              <p className='dark:text-dark-white text-black italic font-medium'>{experience.company}</p>
              <p className='dark:text-dark-whiteSecondary text-blackSecondary'>{experience.startDate.slice(0, 7)} - {experience.endDate.slice(0, 7)}</p>
            </div>
            <div className='grow p-[24px] hover:transition-transform shadow-md hover:ease-linear hover:duration-500 hover:-translate-y-2 rounded-[12px] dark:bg-dark-secondaryBlue/30 bg-secondaryBlue/30'>
              <p className='dark:text-dark-whiteSecondary text-blackSecondary prose'>{experience.description}</p>
            </div>
          </div>
        </article>
      ))}

    </section>
  )
}