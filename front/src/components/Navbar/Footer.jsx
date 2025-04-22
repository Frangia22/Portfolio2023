import { Link } from "react-router-dom";
import { Button } from "../Buttons/Button";

export function Footer({ id }) {
  return (
    <footer id={id} className='mx-[10px] mb-[50px] md:mb-0 md:mx-[25px] lg:w-4/5 xl:w-3/5 lg:mx-auto py-4 flex flex-wrap justify-around items-center'>
      <img className="size-12 drop-shadow-xl" src="https://raw.githubusercontent.com/Frangia22/Portfolio/5be067ff404d04846a7bac7f9a3f6d8af12e76f2/static/img/fg-dev.svg" alt="Logo devfg" />
      <p className="dark:text-white text-black grow order-3 md:order-none text-center py-[20px] md:py-0">Derechos reservados 2024</p>
      <div className="flex gap-2 items-center">
        <Button>
          <Link to={`mailto:contacto@devfg.com.ar`} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          </Link>
        </Button>
        <Button>
          <Link to='https://github.com/Frangia22'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </Link>
        </Button>
      </div>
    </footer>
  )
}