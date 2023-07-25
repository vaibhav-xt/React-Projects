import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'
import loading from '../../image/loading.svg'

export default function Categories() {

    const context = useContext(DataContext);
    const { allCategories, products } = context;

    // Check if allCategories is not available yet
    if (allCategories.length === 0) {
        return <div><img src={loading} alt="" className='w-20 m-auto' /></div>; // You can show a loader or other loading content
    }

    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center flex-wrap gap-5'>
            {
                allCategories.map((category) =>
                    <div key={category} className='relative p-10 h-[300px] overflow-hidden border-[1px] border-gray-400'>
                        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" className='absolute z-0 top-0 left-0 w-full h-full object-cover' alt="" />
                        <h2 className='relative z-1 text-3xl font-bold'>{category}</h2>
                        <p className='relative z-1 text-xs'>Spring 2018</p>
                    </div>)
            }
        </div>
    )
}
