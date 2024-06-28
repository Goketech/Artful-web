import Image from 'next/image'
import Link from 'next/link';

const Waitlist = () => {
  return (
    <div className='flex gap-20 md:gap-40 mt-5 md:mt-10 md:mt-20 p-10 md:p-0'>
        <div className='hidden md:block w-1/3'>
            <Image src="/waitlist.jpg" alt="Waitlist" width={800} height={400} />
        </div>
        <div className='flex flex-col justify-center font-patrick items-start'>
            <p className='text-3xl md:text-5xl mb-10'>Sign Up for the Waitlist</p>
            <Link target="_blank" href='https://tally.so/r/nG12oO'><button className='px-6 text-white text-lg py-4 rounded-xl bg-[#18212E]'>Join the Waitlist</button></Link>
        </div>
    </div>
  )
}

export default Waitlist