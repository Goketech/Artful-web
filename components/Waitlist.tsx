"use client"
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';

const Waitlist = () => {
  const buttonVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <div className='flex justify-between mt-20 p-3 md:p-0 max-w-7xl 2xl:mx-auto 2xl:px-8'>
      <div className='flex flex-col justify-center font-patrick items-start md:p-20'>
        <p className='text-3xl md:text-5xl mb-5 md:mb-10'>Sign Up for the Waitlist</p>
        <Link target="_blank" href='https://tally.so/r/nG12oO'><motion.button className='mt-4 md:mt-10 px-4 md:px-6 text-white text-lg py-2 md:py-4 rounded-xl bg-[#18212E]' variants={buttonVariants}
                    whileHover="hover">Join the Waitlist</motion.button></Link>
      </div>
      <div className='hidden md:block w-1/3'>
        <Image src="/waitlist.jpg" alt="Waitlist" width={800} height={400} />
      </div>
    </div>
  )
}

export default Waitlist