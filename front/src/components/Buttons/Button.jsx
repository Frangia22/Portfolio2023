
export function Button({ variant = 'primary', children, className }) {
  if (variant === 'border') {
    return (
      <button className={`py-[15px] px-[30px] rounded-[25px] dark:text-white text-blackSecondary bg-transparent flex justify-between items-center gap-2 shadow-md outline outline-[3px] dark:outline-dark-secondaryBlue outline-blackSecondary font-semibold dark:hover:outline-white hover:outline-black hover:scale-105 ${className}`}>
        {children}
      </button>
    )
  }

  if (variant === 'secondary') {
    return (
      <button className={`py-[15px] px-[30px] rounded-[25px] dark:text-[#141C24] text-white dark:bg-dark-yellow bg-primary flex justify-between items-center gap-2 shadow-md hover:outline hover:outline-1 hover:outline-white font-semibold hover:scale-105 ${className}`}>
        {children}
      </button>
    )
  }

  return (
    <button className={`py-[15px] px-[30px] rounded-[25px] dark:text-white text-blackSecondary dark:bg-dark-secondaryBlue bg-secondaryBlue flex justify-between items-center gap-2 shadow-md hover:outline hover:outline-2 font-semibold dark:hover:outline-white hover:outline-black hover:scale-105 ${className}`}>
      {children}
    </button>
  )
}