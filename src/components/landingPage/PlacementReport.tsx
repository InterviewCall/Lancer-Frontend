export default function PlacementReport() {
    return (
        <div className='w-8/10'>
            <div className='rounded-2xl  flex flex-wrap items-stretch justify-center sm:grid sm:grid-cols-5 gap-3'>
                {[
                    {
                        heading: '826',
                        subHeading: 'students got jobs in 2025',
                    },
                    {
                        heading: '₹13.6 crore',
                        subHeading: 'highest CTC abroad',
                    },
                    {
                        heading: '₹89 Lakh',
                        subHeading: 'highest CTC in India',
                    },
                    {
                        heading: '681+',
                        subHeading: 'hiring partners',
                    },
                    {
                        heading: '128%',
                        subHeading: 'average salary hike',
                    },
                ].map((item, index) => (
                    <div key={index} className="w-[150px] bg-teal-50 sm:w-full">
                        <div className='p-5 text-center border-r last:border-0'>
                            <div className='font-bold text-2xl'>{item.heading}</div>
                            <div className='text-gray-600'>{item.subHeading}</div>
                        </div>
                    </div>
                ))}

            </div>
            <div className='sm:grid grid-cols-2 gap-3 sm:h-10 mt-6'>
                <div className='text-center rounded-lg  border-2 font-semibold px-6 py-4 mb-3 sm:mb-0'>
                    View our Placement Report
                </div>
                <div className='text-center rounded-lg bg-yellow-300 shadow-lg font-semibold px-6 py-4'>
                    Book a free demo class
                </div>
            </div>
        </div>
    );
}