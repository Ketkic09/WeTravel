import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these epic Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore the hidden places of the Amazon jungle"
                    label="adventure"
                    path="/services"/>
                    <CardItem 
                    src="images/img-2.jpg"
                    text="Relax on the islands of Bali"
                    label="luxury"
                    path="/services"/>
                    
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-3.jpg"
                    text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                    label="mystery"
                    path="/services"/>
                    <CardItem 
                    src="images/img-4.jpg"
                    text="Experience Football on Top of the Himilayan Mountains"
                    label="exciting"
                    path="/services"/>
                     <CardItem 
                    src="images/img-8.jpg"
                    text="Ride through the Sahara Desert on a guided camel tour"
                    label="adventure"
                    path="/services"/>
                </ul>
               
            </div>
        </div>
    </div>
  )
}

export default Cards