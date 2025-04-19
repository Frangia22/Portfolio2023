
export function Button({ variant = 'primary', children, className }) {
  if (variant === 'border') {
    return (
      <button className={`py-[15px] px-[30px] rounded-[25px] dark:text-[#F8F9FB] text-[#0F172A] bg-transparent flex justify-between items-center gap-2 shadow-md shadow-[#0F172A] outline outline-[3px] outline-dark-secondaryBlue font-semibold hover:outline-white hover:scale-105 ${className}`}>
        {children}
      </button>
    )
  }

  if (variant === 'secondary') {
    return (
      <button className={`py-[15px] px-[30px] rounded-[25px] dark:text-[#141C24] dark:bg-[#F4C753] flex justify-between items-center gap-2 shadow-md hover:outline hover:outline-1 hover:outline-white font-semibold hover:scale-105 ${className}`}>
        {children}
      </button>
    )
  }

  return (
    <button className={`py-[15px] px-[30px] rounded-[25px] dark:text-[#F8F9FB] text-[#0F172A] dark:bg-[#29374C] bg-[#4F46E5] flex justify-between items-center gap-2 shadow-md shadow-[#0F172A] hover:outline hover:outline-1 font-semibold hover:outline-white hover:scale-105 ${className}`}>
      {children}
    </button>
  )
}