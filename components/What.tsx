import Image from "next/image"

const What = () => {
  return (
    <div className="mt-20 p-20 font-patrick">
        <h2 className="text-3xl mb-12">What You'll Get</h2>
        <div className="flex gap-20 text-xl">
            <div className="max-w-64">
                <Image src="/calendar.svg" alt="calendar" width={80} height={60} />
                <p className="mt-5 mb-3">Early Access</p>
                <span>Be the first to discover new artwork and collections.</span>
            </div>
            <div className="max-w-64">
                <Image src="/tag.svg" alt="calendar" width={80} height={60} />
                <p className="mt-5 mb-3">Exclusive Discounts</p>
                <span>Enjoy special offers and promotions as a waitlist member.</span>
            </div>
            <div className="max-w-64">
                <Image src="/star.svg" alt="calendar" width={80} height={60} />
                <p className="mt-7 mb-3">VIP Status</p>
                <span>Receive personalized recommendations and concierge service.</span>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default What