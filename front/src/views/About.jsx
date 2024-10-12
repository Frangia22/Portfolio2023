import aboutText from '../mocks/about.json'
export function About() {
  return (
    <section className="w-full md:w-3/4 lg:w-3/5 mx-auto py-4">
      <h2 className="text-white text-xl my-4">Sobre mi</h2>
      <article className='py-2 px-4'>
        <p className='text-white/75 prose'>{aboutText.content}</p>
      </article>
    </section>
  )
}