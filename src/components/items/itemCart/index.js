/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './itemCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ItemCart(props) {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(props.price);

    return (
        <div key={props.id}>
            <div className={cx('wrapper')}>
                <img className={cx('image')} src={props.src} />

                <div className={cx('info')}>
                    <button onClick={props.onClick(props.id)}>
                        <FontAwesomeIcon icon={faX} className={cx('iconRemove')} />
                    </button>
                    <h6 className={cx('title-product')}>{props.title}</h6>
                    <p className={cx('text-color')}>color: {props.color}</p>
                    <p className={cx('text-size')}>size: {props.size}</p>

                    <div className={cx('price-change-by-count')}>
                        <div className={cx('select-price')}>
                            <button
                                className={cx('btn-down')}
                                onClick={() => {
                                    setCount(count - 1 === 0 ? 1 : count - 1);
                                    setPrice(props.price * count);
                                }}
                            >
                                -
                            </button>

                            <input
                                className={cx('input-count')}
                                type="text"
                                value={count}
                                min={1}
                                onChange={(e) => {
                                    setCount(e.target.value);
                                }}
                                disabled
                            />

                            <button
                                className={cx('btn-up')}
                                onClick={() => {
                                    setCount(count + 1);
                                    setPrice(props.price * count);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <div className={cx('item-price')}>${price}</div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default ItemCart;
