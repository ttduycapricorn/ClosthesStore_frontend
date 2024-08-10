import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './cartSidebar.module.scss';

import ItemCart from '@/components/items/itemCart';
import { dataShopping } from '@/data/cartShoppingData';

const cx = classNames.bind(styles);

function CartSidebar({ name, ...props }) {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState(dataShopping);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelRemoveItemCartFromList = (id) => {
        const newList = items.filter((item) => item.id !== id);
        setItems(newList);
    };

    return (
        <>
            <div className="item-action">
                <div className={'icon'} variant="primary" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton className={cx('header-side-bar')}>
                    <Offcanvas.Title className={cx('tittle')}>shopping bags ({items.length})</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={cx('body-bar')}>
                    <div className={cx('item-carts')}>
                        {items ? (
                            items.map((item) => {
                                return (
                                    <>
                                        <ItemCart
                                            key={item.id}
                                            src={item.src}
                                            title={item.title}
                                            price={item.price}
                                            color={item.color}
                                            size={item.size}
                                            onClick={handelRemoveItemCartFromList(item.id)}
                                        />
                                    </>
                                );
                            })
                        ) : (
                            <div className="fs-18 mt-5 px-5">Your cart is empty. Start shopping! </div>
                        )}
                    </div>

                    <div className={cx('action-cart')}>
                        <hr style={{ color: 'var(--color-hr)', width: '100%' }} />
                        <div className={cx('subtotal')}>
                            <h3 className={cx('text-subtotal')}>subtotal: </h3>
                            <span>${446}</span>
                        </div>

                        <button className={cx('btn-viewCart')}>View cart</button>
                        <button className={cx('btn-checkOut')}>Checkout</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CartSidebar;
