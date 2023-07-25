import React, { useState } from 'react'
import pizza from '../img/bgPizza.jpg'
import image from '../img/pizza_maker.jpg'
import { custom } from '../customPizza'

export default function CustomPizza() {
    const [size, setSize] = useState('small')
    const [base, setBase] = useState('regular')
    const [sauce, setSauce] = useState('mozilla')
    const [quantity, setQuantity] = useState(1)
    const price = (custom.priceSize[size] + custom.baseSize[base] + custom.sauceSize[sauce]) * quantity

    const detail = [{ small: 100, medium: 200, large: 300 }]

    let id = 0;
    const formSubmit = (e) => {
        e.preventDefault()

        // Get the existing items from localStorage
        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Add a new item to the array
        const newItem = {
            image: "https://th.bing.com/th/id/R.42371f428400947fdfb68cb9d4860494?rik=2AeIFJq8Oz1W5w&riu=http%3a%2f%2fthelistlove.com%2fwp-content%2fuploads%2f2014%2f12%2fdominos-pepperoni-pizza.jpg&ehk=Oef4qishiYTTxr6AwemwDV6YmhgcdIt%2fK7et5vN8Hks%3d&risl=&pid=ImgRaw&r=0",
            name: `${base.charAt(0).toUpperCase() + base.slice(1)} Pizza`,
            price: price,
            prices: detail,
            quantity: quantity,
            varient: size,
            _id: `${id}`
        };
        existingItems.push(newItem);
        // Set the updated array back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(existingItems));

        window.location.reload()
        id = id + 1
    }


    return (
        <div className="h-[calc(100vh-80px)] w-full bg-red-30 relative flex justify-end items-center bg-no-repeat" style={{ backgroundImage: `url(${pizza})` }}>
            <div className='max-w-[800px] overflow-hidden w-full m-auto h-[calc(100vh-80px)] sm:h-auto bg-white z-40 sm:rounded-xl sm:border-2 md:my-12 border-red-500'>
                <div>
                    <img src={image} alt="" />
                </div>
                <h1 className='px-4 text-center text-2xl font-semibold py-8'>Create Your Own Pizza!</h1>
                <form className='w-full px-4 py-8' onSubmit={formSubmit}>
                    <h3 className='text-xl font-medium'>Size:</h3>
                    <div className='flex gap-4'>
                        <label htmlFor="small">
                            <input type="radio" name="radio-options" onChange={(e) => setSize(e.target.value)} checked={size === "small"} value="small" id="small" />
                            <span> Small</span>
                        </label>
                        <label htmlFor="medium">
                            <input type="radio" name="radio-options" onChange={(e) => setSize(e.target.value)} checked={size === 'medium'} value="medium" id="medium" />
                            <span> Medium</span>
                        </label>
                        <label htmlFor="large">
                            <input type="radio" name="radio-options" onChange={(e) => setSize(e.target.value)} checked={size === 'large'} value="large" id="large" />
                            <span> Large</span>
                        </label>
                    </div>
                    <h3 className='text-xl font-medium pt-4 w-full'>Select One Base:</h3>
                    <select name="base" value={base} onChange={e => setBase(e.target.value)} id="" className='bg-slate-50 w-full'>
                        <option value="thin">Thin Crust | 20/-</option>
                        <option value="regular">Regular | 0/-</option>
                        <option value="fresh">Fresh Pan | 30/-</option>
                        <option value="wheat">Wheat Crust | 20/-</option>
                        <option value="cheers">Cheers Burst | 40/-</option>
                    </select>
                    <h3 className='text-xl font-medium pt-4 w-full'>Select Sauce:</h3>
                    <select name="base" id="" className='bg-slate-50 w-full' value={sauce} onChange={e => setSauce(e.target.value)}>
                        <option value="mozilla">Mozzilla</option>
                        <option value="chedda">Chedda</option>
                        <option value="parmesan">Parmesan</option>
                    </select>
                    <h3 className='text-xl font-medium'>Quantity</h3>
                    <select name="base" id="" className='bg-slate-50 w-full' value={quantity} onChange={e => setQuantity(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="9">8</option>
                        <option value="10">10</option>
                    </select>
                    <div className='flex justify-between w-full items-center mt-8'>
                        <p><span className='text-xl font-medium'>Total: </span> <span> {price} /-</span></p>
                        <button type="submit" className='text-xl font-medium bg-red-800 hover:bg-red-500 text-white px-4 py-2 rounded-full'>Add to Cart</button>
                    </div>
                </form>
            </div>
            <div className='absolute top-0 h-full w-full z-30 bg-gradient-to-l from-black/100 to-transparent'></div>
        </div>
    )
}
