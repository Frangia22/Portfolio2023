import experiences from '../mocks/experience.json'
export function Experience({ id }) {
  return (
    <section id={id} className='w-full md:w-3/4 lg:w-3/5 mx-auto py-[40px]'>
      <h2 className="text-white font-onest font-bold text-[24px] pb-[24px] my-[24px]">Experiencia</h2>
      {experiences.toReversed().map((experience) => (
        <article key={experience.id} className='border-l-2 border-solid border-l-white px-4 pt-[16px] pb-[40px] mx-4 relative group'>
          <span className='size-4 transition-all duration-300 ease-in-out group-hover:size-5 group-hover:-left-[10px] rounded-full -left-2 top-[24px] bg-yellow brightness-110 absolute'></span>
          <div className='flex gap-6 justify-evenly items-center'>
            <div className='w-1/2 flex flex-col mx-6 gap-4'>
              <h3 className='text-yellow font-onest text-2xl'>{experience.position}</h3>
              <p className='text-dark-white italic font-medium'>{experience.company}</p>
              <p className='text-dark-whiteSecondary'>{experience.startDate.slice(0, 7)} - {experience.endDate.slice(0, 7)}</p>
            </div>
            <div className='grow p-[24px] hover:transition-transform hover:ease-linear hover:duration-500 hover:-translate-y-2 rounded-[12px] bg-dark-secondaryBlue/30'>
              <p className='text-dark-whiteSecondary prose'>{experience.description}</p>
            </div>
          </div>
        </article>
      ))}

    </section>
  )
}