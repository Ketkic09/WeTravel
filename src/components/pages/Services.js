import React from 'react'
import '../../App.css';
import '../Cards.css'
import Footer from '../Footer';
import {MdHiking} from 'react-icons/md'
import { IconContext } from 'react-icons';
import {AiFillCar} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa'
import bgimg from './../../images/img-home.jpg' 


export default function Services() {
    
        return (
        <>
    <div className='cards' style={{ backgroundImage:`url(${bgimg})` }} > 
    <h1>Some of the services we provide</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <li className='cards__item'>
                        <div className="cards__item__link">
                            <figure className='cards__serviceitem__pic-wrap' >
                            <IconContext.Provider value={{ color: "white" ,className:"cards__item__img"}}>
                                <div>
                                    <MdHiking/>
                                </div>
                                </IconContext.Provider>
                            </figure>
                            <div className='cards__item__info'>
                                <h1 className='service-h1'>One day Hiking and Camping</h1>
                                    <h5 className='cards__serviceitem__text'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero nam, tempora quo voluptas dolorum aliquid fugiat quae quisquam esse officiis perferendis doloremque eos dolor molestiae magnam, adipisci est culpa!
                                    </h5>
                            </div>
                        </div>
                    </li>
                    
                    <li className='cards__item'>
                        <div className="cards__item__link">
                            <figure className='cards__serviceitem__pic-wrap' >
                            <IconContext.Provider value={{ color: "white" ,className:"cards__item__img"}}>
                                <div>
                                    <FaTelegramPlane />
                                </div>
                            </IconContext.Provider>
                            </figure>
                            <div className='cards__item__info'>
                                <h1 className='service-h1'>Planning long vacations</h1>
                                    <h5 className='cards__serviceitem__text'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero nam, tempora quo voluptas dolorum aliquid fugiat quae quisquam esse officiis perferendis doloremque eos dolor molestiae magnam, adipisci est culpa!
                                    </h5>
                            </div>
                        </div>
                    </li>

                    <li className='cards__item'>
                        <div className="cards__item__link">
                            <figure className='cards__serviceitem__pic-wrap' >
                            <IconContext.Provider value={{ color: "white" ,className:"cards__item__img"}}>
                                <div>
                                    <AiFillCar />
                                </div>
                            </IconContext.Provider>
                            </figure>
                            <div className='cards__item__info'>
                                <h1 className='service-h1'>Car Rental at cheaper price</h1>
                                    <h5 className='cards__serviceitem__text'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero nam, tempora quo voluptas dolorum aliquid fugiat quae quisquam esse officiis perferendis doloremque eos dolor molestiae magnam, adipisci est culpa!
                                    </h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
                
    </div>
    <Footer />
</>      
    
        );
   
}