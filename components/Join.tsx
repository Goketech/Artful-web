import Image from "next/image"

const Join = () => {
    return (
        <div className="flex justify-between font-patrick">
            <div className="p-10 pr-4">
                <h2 className="text-3xl mb-12">Join the Waitlist</h2>
                <div className="grid grid-cols-2 text-xl gap-10">
                    <div className="flex gap-4">
                        <div className="px-5 py-2 border-2 border-gray-600 self-start bg-gray-200 rounded">1</div>
                        <div>
                            <p className="mb-3">Be the First to Access</p>
                            <span>Get early access to our exclusive art marketplace before it opens to the public.</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-5 py-2 border-2 border-gray-600 self-start bg-gray-200 rounded">2</div>
                        <div>
                            <p className="mb-3">Exclusive Offers</p>
                            <span>Receive special discounts and limited-time promotions as a waitlist member.</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-5 py-2 border-2 border-gray-600 self-start bg-gray-200 rounded">3</div>
                        <div>
                            <p className="mb-3">Curator's Picks</p>
                            <span>Get personalized recommendations from our expert curators tailored to your tastes.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4">
                <Image src="/join.jpg" alt="Join the Waitlist" width={800} height={600} className="h-full" />
            </div>
        </div>
    )
}

export default Join