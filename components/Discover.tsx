
const Discover = () => {
  return (
    <div className="flex flex-col mt-20 justify-center items-center p-3 md:p-20 font-patrick max-w-7xl 2xl:mx-auto 2xl:px-8">
        <h2 className="text-3xl">Discover Unique Art</h2>
        <div className="flex gap-10 mt-10">
            <div className="max-w-64 text-base md:text-xl">
                <p className="mb-5">Painting</p>
                <span className="mt-10">Browse an array of captivating paintings in various styles and mediums.</span>
            </div>
            <div className="max-w-64 text-base md:text-xl">
                <p className="mb-5">Photography</p>
                <span>Discover breathtaking photographs that capture the world in new and inspiring ways.</span>
            </div>
            <div className="max-w-64 text-base md:text-xl">
                <p className="mb-5">Sculpture</p>
                <span>Explore three-dimensional artworks that bring a unique perspective to your space.</span>
            </div>
        </div>
    </div>
  )
}

export default Discover