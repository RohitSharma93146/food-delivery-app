import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate, useRoutes } from 'react-router-dom'

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
    const navigate = useNavigate();

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
            ?<img className='add' src={assets.add_icon_white} onClick={()=>addToCart(id)} alt="" />
            :<div className='food-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <div className='price-btn-container'>
                    <p className="food-item-price">${price}</p>
                    {
                        cartItems[id] > 0 ? (
                            <button className='go-crt-btn' onClick={() => navigate("/cart")}>Go To cart</button>
                        ):(
                            <button className='add-crt-btn' onClick={() => addToCart(id)}>Add to cart</button>
                        )

                    }
            </div>

        </div>
      
    </div>
  )
}

export default FoodItem
