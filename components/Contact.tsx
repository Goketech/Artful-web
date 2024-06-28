import Image from "next/image"

const Contact = () => {
  return (
    <div className="flex gap-40 mt-20">
        <div className='w-1/3'>
            <Image src="/contact.jpg" alt="contact" width={800} height={400} />
        </div>
        <div className='flex flex-col justify-center font-patrick items-start'>
            <h2 className='text-5xl mb-10'>Contact Us</h2>
            <p>Have questions or need assistance? Our dedicated team is here to help. <span className="text-lg font-bold underline underline-offset-4">Contact us</span> today.</p>
        </div>
    </div>
  )
}

export default Contact