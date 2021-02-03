import React from 'react'
import Carditem from './Carditem'
// import HeroSection from './HeroSection'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Investments, Tax Savings, All you need is here</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Carditem
                        src="images/img-1.jpg"
                        text1="Finance is life"
                        text="Finance is life Finance is life Finance is life Finance is life"
                        label="Finance"
                        path='/blog'
                        />
                      <Carditem
                        src="images/img-2.jpg"
                        text1="Finance is life"
                        text="Finance is life Finance is life Finance is life Finance is life"
                        label="Finance"
                        path='/blog'
                        />
                      <Carditem
                        src="images/img-1.jpg"
                        text1="Finance is life"
                        text="Finance is life Finance is life Finance is life Finance is life"
                        label="Finance"
                        path='/blog'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Carditem
                        src="images/img-2.jpg"
                        text1="Finance is life"
                        text="Finance is life Finance is life Finance is life Finance is life"
                        label="Finance"
                        path='/blog'
                        />
                        <Carditem
                        src="images/img-1.jpg"
                        text1="Finance is life"
                        text="Finance is life Finance is life Finance is life Finance is life"
                        label="Finance"
                        path='/blog'
                        />
                      <Carditem
                        src="images/img-2.jpg"
                        text1="Finance is life"
                        text="Finance is life Finance is life Finance is life Finance is life"
                        label="Finance"
                        path='/blog'
                        />
                   
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
