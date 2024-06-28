import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="w-full md:w-1/2">
                <Image
                    alt="image of an art piece"
                    src={'/art.jpg'}
                    className="w-full h-auto"
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full md:w-1/2 pt-20 md:pt-20 p-10 md:p-20 font-patrick flex flex-col"> 
                <h1 className="text-5xl mb-4">Welcome to our Art Marketplace</h1>
                <p className='text-2xl mt-6'>Discover a curated collection of stunning artwork from talented artists around the world. Explore and collect the pieces that speak to you.</p>
                <Link target="_blank" href='https://tally.so/r/nG12oO'><button className='mt-10 px-6 text-white text-lg py-4 rounded-xl bg-[#18212E]'>Join the Waitlist</button></Link>
            </div>
        </div>
    )
}

export default Hero