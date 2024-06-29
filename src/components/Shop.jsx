import React, {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import { Preloader } from "./Preloader";
import { Goodslist } from "./Goodslist.jsx";
import { Cart } from "./Cart";
import { BasketList } from "./Basketlist";

function Shop () {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderitem => orderitem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
            ...item, 
            quantity: 1,
        };
        setOrder([...order, newItem])
        }  else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                }
                else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    useEffect (function getGoods () {
        fetch(API_URL, {
            headers: {
                'Authorization': 'f6a14bbb-afbc2175-86b82f83-d51f54e2',
            }
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        })
    }, [])

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                } }
            else {
                return el;
                }
        })
        setOrder(newOrder);
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >=0 ? newQuantity : 0,
                } }
            else {
                return el;
                }
        })
        setOrder(newOrder);
    };

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? <Preloader /> : 
            <Goodslist goods={goods} addToBasket={addToBasket} />}
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity = {incQuantity} decQuantity = {decQuantity}/>
            }
        </main>
    )
}

export { Shop }