import { BasketItem } from './Basketitem'

function BasketList (props) {
    const {order =[], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incQuantity, decQuantity} = props 

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection">
            <li  className="collection-item active my-collection">Cart</li>
                { order.length ? order.map(item => (
                    <BasketItem 
                        key={item.id} 
                        {...item} 
                        removeFromBasket={removeFromBasket} 
                        incQuantity={incQuantity} 
                        decQuantity={decQuantity}
                    />
                )) : <li  className="collection-item">Basket is empty</li>
                }
            <li className="collection-item active my-collection">Total price: ${totalPrice}
               <button className="btn secondary-content btn-order">Order</button>           
            </li> 
            
            <i className="material-icons button-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export { BasketList }

