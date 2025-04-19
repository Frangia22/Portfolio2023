import aboutText from '../mocks/about.json'
export function About({ id }) {
  return (
    <section id={id} className="w-full md:w-3/4 lg:w-3/5 mx-auto py-[40px]">
      <h2 className="dark:text-white text-black font-onest font-bold text-[24px] my-[24px]">Sobre mi</h2>
      <article className='py-2 px-4'>
        {aboutText.content.map((content, index) => (
          <p className='dark:text-whiteSecondary text-blackSecondary prose max-w-full text-[18px]' key={index}>{content}</p>
        ))}
      </article>
    </section>
  )
}