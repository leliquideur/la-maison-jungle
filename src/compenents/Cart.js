import '../styles/Cart.css'
import { useState } from 'react'
function Cart({cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  const totalPrice = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0)

    function removeToCart(name, price) {
      const currentPlantSaved = cart.find((plant) => plant.name === name)
      if (currentPlantSaved) {
        const cartFilteredCurrentPlant = cart.filter(
          (plant) => plant.name !== name
        )
        if (currentPlantSaved.amount===1) {
          updateCart([
            ...cartFilteredCurrentPlant
          ])
        }else{
          updateCart([
            ...cartFilteredCurrentPlant,
            { name, price, amount: currentPlantSaved.amount - 1 }
          ])
        }
      } 
    }

  return isOpen ? (
      <div className='lmj-cart'>
          <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
          <h2>Panier</h2>

          <div className='lmj-cart-toggle-item'>
            <ul>
              {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                  {name} {price}€ x {amount}
                  <button onClick={() => removeToCart(name,price)}>-1</button>
                </div>

              ))}

            </ul>
            {/*
            <div> 
              {monsteraName} Prix : {monsteraPrice}€ x {cart}<br />
            </div>
            <div className='lmj-cart-toggle-item-button'>
              <button onClick={() => updateCart(cart + 1)}>
                  +1
              </button>

            </div>*/}

          </div>
          <h3>Total : {totalPrice}€</h3>
          <button onClick={() => updateCart([])}>
                  Vider le pannier
          </button>
      </div>
  ) : (		
        <div className='lmj-cart-closed'>
          <button
            className='lmj-cart-toggle-button'
            onClick={() => setIsOpen(true)}
          >
            Ouvrir le Panier
          </button>
        </div>)
}
export default Cart