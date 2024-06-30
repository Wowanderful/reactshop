import { BasketItem } from './Basketitem'

function BasketList (props) {
    const {order =[], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incQuantity, decQuantity} = props 

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <div className="collection">
            <li  className="collection-item active">Cart</li>
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
            <li className="collection-item active">Total price: ${totalPrice}
                <button className="btn secondary-content">Order</button>           
            </li>
            <i className="material-icons button-close" onClick={handleBasketShow}>close</i>
        </div>
    )
}

export { BasketList }

