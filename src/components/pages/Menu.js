import React from 'react'
import "../styling/Menu.css"
import MenuItem from "./Menuitem"
import data from "../files/menuitems.json"


function Menu() {

const {appetizers, maincourses, desserts, drinks } = data;



  return (
    <div className='menu-page'>
      <h1>Appetizers</h1>
      <div className="appetizers d-flex">
      {appetizers.map((item) => ( 
      <MenuItem 
      title={item.title}
      image={item.image}
      description={item.description}
      price={item.price}
      />
      ))}
      </div>

  

<h1>Maincourse</h1>
      <div className="maincourses d-flex">
      {maincourses.map((item) => ( 
      <MenuItem 
      title={item.title}
      image={item.image}
      description={item.description}
      price={item.price}
      />
      ))}
      </div>

      <h1>Desserts</h1>
      <div className="desserts d-flex">
      {desserts.map((item) => ( 
      <MenuItem 
      title={item.title}
      image={item.image}
      description={item.description}
      price={item.price}
      />
      ))}
      </div>

      <h1>Drinks</h1>
      <div className="drinks d-flex">
      {drinks.map((item) => ( 
      <MenuItem 
      title={item.title}
      image={item.image}
      description={item.description}
      price={item.price}
      />
      ))}
      </div>
    </div>
  )
}

export default Menu