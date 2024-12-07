'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';

import { dataShopping } from '@/data/cartShoppingData';

import styles from './cartPage.module.scss';
import axios from 'axios';
import data from '@/data/relatesItemProduct';

const cx = classNames.bind(styles);

function CartPage() {
    const [items, setItems] = useState(dataShopping);
    const [item, setItem] = useState([
        {
            price: '',
            title: '',
        },
    ]);
    const [quantity, setQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleReduce = () => {
        setQuantity(quantity - 1);
        if (quantity === 1) {
            setQuantity(1);
        }
    };

    const handleRemoveItem = (id) => {
        axios.delete('', data);
    };

    return (
        <div className="container">
            <h1 className={cx('title-cart-page')}>CART</h1>

            {dataShopping.length !== 0 ? (
                <div className={cx('content')}>
                    <div className={cx('cart-item')}>
                        <table className={cx('table-carts')}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {items.map((item) => {
                                    return (
                                        <tr className={cx('item-cartItem')} key={item.id}>
                                            <td>
                                                <img className={cx('Img-cartItem')} src={item.src} />
                                            </td>
                                            <td>
                                                <div className={cx('info-itemCart')}>{item.title}</div>
                                                <div className={cx('color-cartItem')}>Color: {item.color}</div>
                                                <div className={cx('size-cartItem')}>Size: {item.size}</div>
                                            </td>

                                            <td>
                                                <div className={cx('price-cartItem')}>$ {item.price}</div>
                                            </td>
                                            <td>
                                                <div className={cx('position-relative')}>
                                                    <input
                                                        className={cx('controlNumber')}
                                                        type="number"
                                                        min={'1'}
                                                        name="quantity"
                                                        value={quantity}
                                                        onChange={handleIncrease || handleReduce}
                                                        style={{ userSelect: 'none' }}
                                                    />
                                                    <div className={cx('reduce')} onClick={handleReduce}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </div>
                                                    <div className={cx('increase')} onClick={handleIncrease}>
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={cx('subtotal-itemCart')} style={{ userSelect: 'none' }}>
                                                    <span className={cx('subtotal-itemCart')}>
                                                        $ {quantity * item.price}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    className={cx('deleteIcon-cartItem')}
                                                    onClick={handleRemoveItem(item.id)}
                                                >
                                                    <FontAwesomeIcon icon={faX} />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('shoppingCart-total')}>
                        <div className={cx('sticky-content')}>
                            <h3>Cart Totals</h3>

                            <table>
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>$ 99</td>
                                    </tr>
                                    <tr>
                                        <th>shipping</th>
                                        <td style={{ padding: '.875rem 0' }}>
                                            <div className={cx('from-check')}>
                                                <input
                                                    className={cx('form-check-input-fill', 'checked')}
                                                    type="checked"
                                                />
                                                <label>Free shipping</label>
                                            </div>
                                            <div className={cx('from-check')}>
                                                <input
                                                    className={cx('form-check-input-fill', 'checked')}
                                                    type="checked"
                                                />
                                                <label>Flat rate: $49</label>
                                            </div>
                                            <div className={cx('from-check')}>
                                                <input
                                                    className={cx('form-check-input-fill', 'checked')}
                                                    type="checked"
                                                />
                                                <label>Local pickup: $8</label>
                                            </div>
                                            <div className={cx('form-check')}>Shipping to AL.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="fs-20">Shop cart is empty</div>
                    <button className="btn mt-3 btn-light">Explore Products</button>
                </div>
            )}

            <div className="mb-5 pb-xl-5"></div>
        </div>
    );
}

export default CartPage;
