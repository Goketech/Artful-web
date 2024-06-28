import Image from "next/image"

const Future = () => {

    return (
        <div className="flex">
            <div className="hidden md:block w-1/4 mt-20">
                <Image src="/future.jpg" alt="future" width={100} height={100} className="h-full w-full" />
            </div>
            <div className="font-patrick p-20">
                <h2 className="text-3xl mb-12">The Art Marketplace of the Future</h2>
                <div className="flex flex-col gap-10 md:gap-20  text-xl">
                    <div className="flex gap-10 md:gap-20">
                        <div className="relative">
                            <div className="hidden md:block line-connector-right"></div>
                            <div className="hidden md:block line-connector-top"></div>
                            <div className="hidden md:block line-connector-bottom"></div>
                            <div className="px-5 py-2 border-2 border-gray-600 self-start bg-gray-200 rounded">1</div>
                        </div>
                        <div>
                            <p>Discover</p>
                            <span>Browse a curated collection of exceptional artworks from around the world.</span>
                        </div>
                    </div>
                    <div className="flex gap-10 md:gap-20">
                    <div className="relative">
                            <div className="hidden md:block line-connector-right"></div>
                            <div className="hidden md:block line-connector-bottom"></div>
                            <div className="px-5 py-2 border-2 border-gray-600 self-start bg-gray-200 rounded">2</div>
                        </div>
                        <div>
                            <p>Collect</p>
                            <span>Easily purchase and securely own your favorite pieces through our platform.</span>
                        </div>
                    </div>
                    <div className="flex gap-10 md:gap-20">
                    <div className="relative">
                            <div className="hidden md:block line-connector-right"></div>
                            <div className="hidden md:block line-connector-tip"></div>
                            <div className="px-5 py-2 border-2 border-gray-600 self-start bg-gray-200 rounded">3</div>
                        </div>
                        <div>
                            <p>Experience</p>
                            <span>Enjoy a seamless, immersive art experience with innovative features like AR integration.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Future