import React, { useEffect } from 'react'
import "./Cart.css"
import ProductCards from './Product-Cards/ProductCards'
import Earphone from '../../Images/Earphone.png'
import Phone from '../../Images/phone.png'
import Stick from '../../Images/stick.png'
import GrandTotal from './GrandTotal/GrandTotal'


export default function Cart() {

    const data = {
        "products": [
            {
                "id": 1,
                "name": "Earphones",
                "price": 12690,
                "imageUrl": Earphone,
                "desc": "Silver"
            },
            {
                "id": 2,
                "tagline": "200 Cash back",
                "name": "Test 6X",
                "price": 14000,
                "imageUrl": Phone,
                "desc": "32GB Gold",
                "warranty": "Extended Warranty",
                "planLink": "http://pointstonothing.com/linktoplan",
                "gift": {
                    "name": "Glory Selfie Stick",
                    "desc": "Silver Moon",
                    "price": 175
                }
            },
            {
                "id": 3,
                "name": "Test 6X",
                "price": 18000,
                "imageUrl": Stick,
                "desc": "64GB Gold",
                "warranty": "Extended Warranty",
                "planLink": "http://pointstonothing.com/linktoplan",
                "gift": {
                    "name": "Glory Selfie Stick",
                    "desc": "Silver Moon",
                    "price": 175
                }
            }
        ],
        "pincode": {
            "560066": {
                "deliveryPrice": 50,
                "cashOnDelivery": false,
                "estimatedDays": {
                    "min": 2,
                    "max": 5
                }
            },
            "560067": {
                "deliveryPrice": 0,
                "cashOnDelivery": true,
                "estimatedDays": {
                    "min": 3,
                    "max": 5
                }
            },
            "560068": {
                "deliveryPrice": 0,
                "cashOnDelivery": false,
                "estimatedDays": {
                    "min": 5,
                    "max": 5
                }
            }
        },
        "discount": {
            "minTotal": 5000,
            "discountPercentage": 10
        }
    }


    let sum = 0;

    // useEffect(() => {
    //     const Cards = document.querySelectorAll('.product-cards');
    //     Cards.forEach((card) => {
    //         // const total = card.querySelector('total_result');
    //         // console.log(total.value)
    //     })
    // })


    return (
        <div className='cart-container'>
            <div className="card-container-box">

                {/* Discount Card  */}
                <div className='discount-card'>
                    <p>Shop for $5000 or more and get 10% discount on your order</p>
                </div>

                <h1>Shopping Cart</h1>
                <div className='shopping-list'>
                    <div className='shopping-list-title'>
                        <h5>Product</h5>
                        <h5>Price</h5>
                        <h5>Quantity</h5>
                        <h5>Subtotal</h5>
                    </div>
                    {data.products.map((data) => {
                        sum += data.price;
                        return <ProductCards key={data.id} tagline={data.tagline} gift={data.gift ? "Gift" : ""} image={data.imageUrl} name={data.name} desc={data.desc} warranty={data.warranty} plans={data.planLink} price={data.price} />
                    })}
                    <GrandTotal sumTotal={sum} discount={100} />
                </div>
            </div>
        </div>
    )
}
