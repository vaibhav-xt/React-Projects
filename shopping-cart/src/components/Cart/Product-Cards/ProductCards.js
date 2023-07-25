import './ProductCards.css'
import Delete from '../../../icon/DELETE.png'
import React, { useState } from 'react'


export default function ProductCards(props) {
    const [quantity, setQuantity] = useState(1)

    const valueOnChange = (event) => {
        setQuantity(event.target.value)
    }

    return (
        <>
            {
                <div className="product-cards">
                    <div className='product-details'>
                        <div className='product-img'>
                            <img src={props.image} alt="" />
                        </div>
                        <div className='product-title'>
                            <span>{props.tagline} {props.gift}</span>
                            <h3>{props.name}</h3>
                            <p>{props.desc}</p>
                            <p>{props.warranty} <a href={props.plans}>view Plans</a></p>
                        </div>
                    </div>
                    <div className='product-price width-common'>
                        <p>{props.price} $</p>
                    </div>
                    <div className='product-quantity width-common'>
                        <p>
                            <span onClick={() => setQuantity(quantity - 1)}>➖</span>
                            <input type="text" placeholder="0" value={quantity >= 1 ? quantity : setQuantity(1)} onChange={valueOnChange} />
                            <span onClick={() => setQuantity(quantity + 1)}>➕</span>
                        </p>
                    </div>
                    <div className='product-subtotal width-common'>
                        <p><span className='total_result'>{props.price * quantity}</span> $</p>
                        <span><img src={Delete} alt="delete" className='delete' /></span>
                    </div>
                </div>
            }
        </>
    )
}
