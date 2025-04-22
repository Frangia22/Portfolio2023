import { useEffect } from "react";
import { useState } from "react";

export function ButtonToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollPosition = () => {
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, [showButton])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    showButton &&
    <button className="rounded-[50%] dark:bg-foreground/40 bg-secondaryBlue/40 transition-all duration-300 ease-in-out animate-bounce hover:animate-none hover:-translate-y-[20px] hover:dark:bg-foreground hover:bg-secondaryBlue size-[36px] fixed bottom-[72px] z-[1] md:bottom-[30px] right-[10px] md:right-4 flex items-center justify-center" onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-white text-black size-[24px]" viewBox="0 0 24 24"><path fill="currentColor" d="m11 7.825l-4.9 4.9q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7l6.6-6.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l6.6 6.6q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L13 7.825V19q0 .425-.288.713T12 20t-.712-.288T11 19z"></path></svg>
    </button>
  )
}