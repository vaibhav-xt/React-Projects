import React, { useEffect, useState } from 'react'

const data = [
    {
        "aria-label": "Slide 1",
        "small-text-hero": "Men-New Season",
        "big-text-hero": "New Arrival",
        "image": "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
    },
    {
        "aria-label": "Slide 2",
        "small-text-hero": "Laptop Season",
        "big-text-hero": "New Arrival",
        "image": "https://images.pexels.com/photos/6446678/pexels-photo-6446678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "aria-label": "Slide 3",
        "small-text-hero": "Women-New Season",
        "big-text-hero": "New Arrival",
        "image": "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
    },
    {
        "aria-label": "Slide 4",
        "small-text-hero": "Grocery Season",
        "big-text-hero": "New Arrival",
        "image": "https://images.pexels.com/photos/4033001/pexels-photo-4033001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "aria-label": "Slide 5",
        "small-text-hero": "Bags Season",
        "big-text-hero": "New Arrival",
        "image": "https://images.pexels.com/photos/7009501/pexels-photo-7009501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]


export default function Carousel() {

    const [carouselData, setCarouselData] = useState(data[0])

    useEffect(() => {
        const buttons = document.querySelectorAll('button[aria-current]');
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'aria-current') {
                    const ariaLabel = mutation.target.getAttribute('aria-label');
                    const newData = data.find((item) => item['aria-label'] === ariaLabel);
                    if (newData) {
                        setCarouselData(newData);
                    }
                }
            }
        });
        buttons.forEach((button) => {
            observer.observe(button, { attributes: true });
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="default-carousel" className="relative top-0 md:top-[-6rem] h-[100vh] z-0" data-carousel="slide">
            <div className="relative overflow-hidden h-full">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={data[0].image} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={data[1].image} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={data[2].image} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={data[3].image} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={data[4].image} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

                {/* Data */}
                <div className='absolute left-[10%] top-1/2 transform -translate-y-1/2 z-20'>
                    <h3 className='font-semibold text-[2rem]'>{carouselData['small-text-hero']}</h3>
                    <h1 className='font-bold text-[4rem] font-roboto'>{carouselData['big-text-hero']}</h1>
                    <button className='bg-blue-500 text-white rounded-full py-2 px-6'>SHOW NOW</button>
                </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            {/* Slider Control */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}
