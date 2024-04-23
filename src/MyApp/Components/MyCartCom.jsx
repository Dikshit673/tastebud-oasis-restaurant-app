import React from 'react'

import { useCart } from '../MyContextAPI';


const MyCartCom = () => {

    const { cartItems, cartPricing, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();

    return (
        <>
            <section className='cart-main-section'>
                <div className="container">

                    <div className='cart-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>Cart</h5>
                        <h2 className=' text-center mb-4'>Explore our Services</h2>
                        <br />
                    </div>

                    <div className="row">

                        <div className="col-12 col-lg-9 ">
                            {/* <div className='cart-left-indiv p-3'>
                                <div className="row">
                                    <div className="col-2">
                                        <div className='cart-img-div cart-display-center h-100'>
                                            <img src="images/Api-image-data/maggi.jpg" alt="maggi-pic" className=' img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className='cart-data-div cart-display-center flex-column h-100'>
                                            <h4>Maggi</h4>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className='cart-quantity-div cart-display-center h-100'>
                                            <div className='cart-quantity-minus cart-display-center'>
                                                <i className="fa-solid fa-minus"></i>
                                            </div>
                                            <div className='cart-quantity-number cart-display-center'>
                                                2
                                            </div>
                                            <div className='cart-quantity-plus cart-display-center'>
                                                <i className="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className='cart-price-div cart-display-center h-100'>
                                            ₹1283
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='cart-delete-item cart-display-center h-100 '>
                                            <div className=' cart-delete-indiv cart-display-center'>
                                                <i className="fa-solid fa-xmark"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {cartItems.length === 0 ? (
                                <div className='cart-left-indiv p-3 cart-display-center'>
                                    <p className=' my-2'>Your cart is empty.</p>
                                </div>
                            ) :
                                (
                                    cartItems.map((item, index) => {
                                        let x = parseInt(item.quantity);
                                        let y = parseInt(item.price);
                                        let totalThisAmount = x * y;
                                        return (
                                            <div className='cart-left-indiv p-3' key={index}>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <div className='cart-img-div cart-display-center h-100'>
                                                            <img src={item.image} alt="maggi-pic" className=' img-fluid' />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className='cart-data-div cart-display-center flex-column h-100'>
                                                            <h4>{item.name}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className='cart-quantity-div cart-display-center h-100'>
                                                            <div className='cart-quantity-minus cart-display-center' onClick={() => decreaseQuantity(item.id)}>
                                                                <i className="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div className='cart-quantity-number cart-display-center'>
                                                                {item.quantity}
                                                            </div>
                                                            <div className='cart-quantity-plus cart-display-center' onClick={() => increaseQuantity(item.id)}>
                                                                <i className="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div className='cart-price-div cart-display-center h-100'>
                                                            ₹{totalThisAmount}
                                                        </div>
                                                    </div>
                                                    <div className='col-2'>
                                                        <div className='cart-delete-item cart-display-center h-100 '>
                                                            <div className=' cart-delete-indiv cart-display-center' onClick={() => removeFromCart(item.id)}>
                                                                <i className="fa-solid fa-xmark"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                )}

                        </div>

                        <div className="col-12 col-lg-3">
                            <div className='cart-right-indiv p-4'>
                                <div className=' cart-display-center justify-content-between'>
                                    <div>Price</div>
                                    <div>₹{cartPricing.totalPrice}</div>
                                </div>
                                <div className=' cart-display-center justify-content-between'>
                                    <div>Discount</div>
                                    <div>₹{cartPricing.discount}</div>
                                </div>
                                <hr />
                                <div className=' cart-display-center justify-content-between'>
                                    <div>Total Amount</div>
                                    <div>₹{cartPricing.totalPrice - cartPricing.discount}</div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default MyCartCom
