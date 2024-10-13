import experiences from '../mocks/experience.json'
export function Experience({ id }) {
  return (
    <section id={id} className='w-full md:w-3/4 lg:w-3/5 mx-auto py-4'>
      <h2 className="text-white text-xl my-4">Experiencia</h2>
      {experiences.map((experience) => (
        <article key={experience.id} className='border-l-2 border-solid border-l-white px-4 pt-2 pb-8 mx-4 relative'>
          <span className='size-4 rounded-full -left-2 top-4 bg-yellowGray absolute'></span>
          <div className='flex gap-6 justify-around items-center'>
            <div className='w-full flex flex-col gap-4'>
              <h3 className='text-yellowGray/85 text-2xl'>{experience.position}</h3>
              <p className='text-white/75'>{experience.company}</p>
              <p className='text-white/75'>{experience.startDate.slice(0, 7)} - {experience.endDate.slice(0, 7)}</p>
            </div>
            <div className='grow'>
              <p className='text-white/75'>{experience.description}</p>
            </div>
          </div>
        </article>
      ))}

    </section>
  )
}