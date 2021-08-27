import '../styles/Cart.css'
import { useState } from 'react'
function Cart() {
  const monsteraName = 'Monstera' 
  const monsteraPrice = 8
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (
      <div className='lmj-cart'>
          <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
          <h2>Panier</h2>
          <div className='lmj-cart-toggle-item'>
            <div> 
              {cart} x {monsteraName}<br />
              Prix : {monsteraPrice}€<br />
            </div>
            <div className='lmj-cart-toggle-item-button'>
              <button onClick={() => updateCart(cart + 1)}>
                  +1
              </button>
              <button onClick={() => updateCart(cart===0?(0):(cart-1))}>
                  -1
              </button>
            </div>

          </div>
          <h3>Total : {monsteraPrice * cart}€</h3>
          <button onClick={() => updateCart(0)}>
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