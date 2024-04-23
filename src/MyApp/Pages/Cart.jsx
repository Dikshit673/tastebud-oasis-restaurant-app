import React from 'react'

import OtherHeroCom from '../Components/OtherHeroCom';
import MyCartCom from '../Components/MyCartCom';

const Cart = () => {
    return (
        <>
            <OtherHeroCom PagePathName="cart" PageName="cart" />
            <MyCartCom />
        </>
    )
}

export default Cart
