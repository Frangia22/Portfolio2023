import aboutText from '../mocks/about.json'
export function About({ id }) {
  return (
    <section id={id} className="mx-[10px] md:mx-[25px] lg:w-4/5 xl:w-3/5 lg:mx-auto py-[40px]">
      <h2 className="dark:text-white text-black font-onest font-bold text-[24px] my-[24px]">Sobre mi</h2>
      <article className='py-2 px-4'>
        {aboutText.content.map((content, index) => (
          <p className='dark:text-whiteSecondary text-blackSecondary prose max-w-full text-[18px]' key={index}>{content}</p>
        ))}
      </article>
    </section>
  )
}