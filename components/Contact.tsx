"use client"
import { motion } from 'framer-motion';
import Image from "next/image"
import Link from 'next/link';

const Contact = () => {
  const contactLinkVariants = {
    initial: { x: 0, scale: 1 },
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };

  return (
    <div className="flex gap-40 p-3 md:p-0 mt-20 md:mt-0 md:mt-0 max-w-7xl 2xl:mx-auto 2xl:px-8">
      <div className='hidden md:block w-1/3'>
        <Image src="/contact.jpg" alt="contact" width={800} height={400} />
      </div>
      <div className='flex flex-col justify-center font-patrick items-start'>
        <h2 className='text-3xl md:text-5xl mb-5 md:mb-10'>Contact Us</h2>
        <p>Have questions or need assistance? Our dedicated team is here to help.               {" "}
          <motion.span variants={contactLinkVariants} className="text-lg font-bold underline underline-offset-4">
            <Link href="mailto:visitartful@gmail.com">
              Contact us
            </Link>
          </motion.span> today.</p>
      </div>
    </div>
  )
}

export default Contact