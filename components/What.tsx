import Image from "next/image"

const What = () => {
  return (
    <div className="mt-20 p-3 md:p-20 font-patrick max-w-7xl 2xl:mx-auto 2xl:px-8">
        <h2 className="text-3xl mb-8 md:mb-12 text-center md:text-left">What You&apos;ll Get</h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-base md:text-xl">
            <div className="md:max-w-64">
                <Image src="/calendar.svg" alt="calendar" width={80} height={60} className="w-10 md:w-20 h-auto" />
                <p className="mt-5 mb-3">Early Access</p>
                <span>Be the first to discover new artwork and collections.</span>
            </div>
            <div className="md:max-w-64">
                <Image src="/tag.svg" alt="calendar" width={80} height={60} className="w-10 md:w-20 h-auto" />
                <p className="mt-5 mb-3">Exclusive Discounts</p>
                <span>Enjoy special offers and promotions as a waitlist member.</span>
            </div>
            <div className="md:max-w-64">
                <Image src="/star.svg" alt="calendar" width={80} height={60} className="w-10 md:w-20 h-auto" />
                <p className="mt-7 mb-3">VIP Status</p>
                <span>Receive personalized recommendations and concierge service.</span>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default What