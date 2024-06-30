function GoodsItem (props) {
    const {
        id, 
        name, 
        description, 
        price, 
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img className="activator" src={full_background} alt={name} />                
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div class="card-action">
                <button className="btn btn-buy" onClick={() => addToBasket({
                    id, 
                    name, 
                    price,
                }
                )
                } >Buy</button>
                <span className="right">{price}</span>
            </div>
        </div>
    )
    
}

export { GoodsItem }