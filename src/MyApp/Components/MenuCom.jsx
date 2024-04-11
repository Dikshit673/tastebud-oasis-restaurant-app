import React, { useEffect, useState } from 'react'
import MyMenuData from '../Api-folder/MenuApi'


const ArrayForIcons = [
    {
        name: 'breakfast',
        iconFontAwesome: 'fa-solid fa-mug-saucer'
    },
    {
        name: 'lunch',
        iconFontAwesome: 'fa-solid fa-cookie-bite'
    },
    {
        name: 'evening',
        iconFontAwesome: 'fa-solid fa-burger'
    },
    {
        name: 'dinner',
        iconFontAwesome: 'fa-solid fa-utensils'
    },
]


const UniqueNavbarList = [...new Set(MyMenuData.map((currData) => {
    return currData.category;
}))];

const MenuCom = () => {

    const [newMenu, setNewMenu] = useState(MyMenuData);
    const [newId, setNewId] = useState(0);

    useEffect(() => {
        let tempUser = MyMenuData.filter((curElem) => {
            return (curElem.category === "breakfast");
        });
        setNewMenu(tempUser);
    }, [])

    const filterItem = (category, index) => {
        let tempUser = MyMenuData.filter((curElem) => {
            return (curElem.category === category);
        });
        setNewMenu(tempUser);
        setNewId(index);
    }

    return (
        <>
            <section className='menu-main-section'>
                <div className="container">
                    <div className='menu-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>Food Menu</h5>
                        <h2 className=' text-center mb-4'>Most Popular Items</h2>
                        <br />
                    </div>

                    <div className="row  d-flex justify-content-center align-items-center">
                        <div className="col-11 col-md-8 col-lg-6">
                            <div className="row menu-nav-bot-row">

                                {
                                    UniqueNavbarList.map(
                                        (currElem, index) => {
                                            return (
                                                <div className={`col-4 col-md-3 menu-nav-botom-border ${newId === index ? "active" : ""}`} key={index} onClick={() => filterItem(currElem, index)}>
                                                    <div className="d-flex justify-content-center align-items-centers">

                                                        <div className=" me-1 d-flex justify-content-center align-items-center">
                                                            {
                                                                ArrayForIcons.filter((currVal) => {
                                                                    return currVal.name === currElem
                                                                }).map((newVal, index) => {
                                                                    return (
                                                                        <i className={newVal.iconFontAwesome} key={index}></i>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className=' ms-1 menu-nav-div'>
                                                            <small className=' text-capitalize m-0'>popular</small>
                                                            <h6 className=' text-capitalize m-0'>{currElem}</h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }

                            </div>
                        </div>
                    </div>


                    <div className="row mt-5 d-flex flex-wrap">

                        {newMenu.map((currData) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-3 mb-4" key={currData.id}>
                                    <div className='menu-card p-4'>

                                        <div className='menu-card-inner-div'>
                                            <div className=' menu-img-div'>
                                                <figure>
                                                    <img src={currData.image} alt='item-pic' className=' img-fluid' />
                                                </figure>
                                            </div>

                                            <div className='menu-card-datas mt-3'>

                                                <div className='menu-card-heading w-100'>
                                                    <h3 className='mb-0'>{currData.name}</h3>
                                                </div>

                                                <div>
                                                    <p className=' card-author subtle mb-2' style={{ color: "red" }}> {currData.category}</p>
                                                    <div className="subtle w-100 d-flex justify-content-between">
                                                        <span className="fs-3 fw-bolder" style={{ color: "#333333" }}>{currData.price}</span>
                                                        <span className="card-tag ">Order Now</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuCom
