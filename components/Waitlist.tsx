import Image from 'next/image'

const Waitlist = () => {
  return (
    <div className='flex gap-40 mt-20'>
        <div className='w-1/3'>
            <Image src="/waitlist.jpg" alt="Waitlist" width={800} height={400} />
        </div>
        <div className='flex flex-col justify-center font-patrick items-start'>
            <p className='text-5xl mb-10'>Sign Up for the Waitlist</p>
            <button className='px-6 text-white text-lg py-4 rounded-xl bg-[#18212E]'>Join the Waitlist</button>
        </div>
    </div>
  )
}

export default Waitlist