function Cart (props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return (
    <div className="z-depth-2 cart" onClick={handleBasketShow}>
        <i className="large material-icons cart-i">shopping_cart</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null }
    </div>
    )
};

export { Cart }