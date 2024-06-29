function BasketItem (props) {
    const {
        id, 
        name, 
        price, 
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props

    return <li className="collection-item">
                {name} x 
                <button className="btn btn-decr" onClick={() => decQuantity(id)}>
                    <i
                    className="material-icons basket-quantity"    
                    >remove</i>
                </button>
                {quantity}
                <button className="btn btn-incr" onClick={() => incQuantity(id)}>
                    <i
                    className="material-icons basket-quantity"                 
                    >add</i> 
                </button>
                    = {price*quantity}
                <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">close</i>
                </span>
            </li>
}

export {BasketItem}