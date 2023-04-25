import React from 'react'
import { Link } from 'react-router-dom'
import image from "../images/Cheeseburger.jpeg"
import "../styling/Menuitem.css"
 


function Menuitem({image, title, description, price}) {
  return (
    <div className='menu-item'>

        <div className="pic">
                <img src={image} alt="" />
          </div> 
        <div className="title-desc">
                <h2>{title}</h2>
                <p>{description}</p>
          </div>  
        <div className="price">
                <h2>${price}</h2>
          </div>  
           

      
    </div>
  )
}

export default Menuitem
