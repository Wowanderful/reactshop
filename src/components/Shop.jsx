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

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? <Preloader /> : 
            <Goodslist goods={goods} addToBasket={addToBasket} />}
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} />
            }
        </main>
    )
}

export { Shop }