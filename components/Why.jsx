import Image from 'next/image';

const Why = () => {
  return (
    <div className="flex justify-between mt-20 font-patrick max-w-7xl 2xl:mx-auto 2xl:px-8">
      <div className='p-3 md:p-10 text-center md:text-left md:pr-4'>
        <h2 className='text-3xl mb-12'>Why Join the Waitlist?</h2>
        <div className='grid grid-cols-2 text-base md:text-xl gap-10 text-left'>
          <div className='bg-gray-200 max-w-64 p-5 rounded-xl'>
            <p className="mb-3">Early Access</p>
            <span>
              Be among the first to discover and collect the finest artworks
              before they&apos;re available to the general public.
            </span>
          </div>
          <div className='bg-gray-200 max-w-64 p-5 rounded-xl'>
            <p className="mb-3">Exclusive Perks</p>
            <span>
              Enjoy special discounts, early-bird promotions, and curated
              recommendations as a waitlist member.
            </span>
          </div>
          <div className='bg-gray-200 p-5 rounded-xl col-span-2'>
            <p className="mb-3">VIP Treatment</p>
            <span>
              Receive personalized attention and white-glove service from our
              dedicated art concierge team.
            </span>
          </div>
        </div>
      </div>
      <div className="hidden w-1/4">
        <Image
          src="/why.jpg"
          alt="Join the Waitlist"
          width={800}
          height={600}
          className="h-full"
        />
      </div>
    </div>
  );
};

export default Why;
