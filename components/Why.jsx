import Image from 'next/image';

const Why = () => {
  return (
    <div className="flex justify-between mt-20 font-patrick">
      <div className='p-10 pr-4'>
        <h2 className='text-3xl mb-12'>Why Join the Waitlist?</h2>
        <div className='grid grid-cols-2 text-xl gap-10'>
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
      <div className="hidden md:block w-1/4">
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
