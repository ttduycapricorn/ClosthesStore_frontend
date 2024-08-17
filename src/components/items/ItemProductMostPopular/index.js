/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';

import styles from './ItemProductMostPopular.module.scss';

const cx = classNames.bind(styles);

function ItemProductMostPopular({ src, title, price }) {
    const [selectColor, setSelectColor] = useState('gray');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('position-relative')}>
                <Link href={'/'}>
                    <img src={src} />
                </Link>
            </div>

            <div className={cx('info-product')}>
                <h6 className={cx('title')}>
                    <Link href={'/'}>{title}</Link>
                </h6>
                <div className={cx('product-card-price')}>
                    <span className={cx('money-price')}>${price}</span>
                </div>
                <div className={cx('choose-color')}>
                    <a
                        className={selectColor === 'gray' ? cx('swatch-color', 'active') : cx('swatch-color')}
                        style={{ color: '#bababa' }}
                        onClick={() => {
                            setSelectColor('gray');
                        }}
                    />
                    <a
                        className={selectColor === 'red' ? cx('swatch-color', 'active') : cx('swatch-color')}
                        style={{ color: '#d76b67' }}
                        onClick={() => {
                            setSelectColor('red');
                        }}
                    />
                    <a
                        className={selectColor === 'green' ? cx('swatch-color', 'active') : cx('swatch-color')}
                        style={{ color: '#bfdcc4' }}
                        onClick={() => {
                            setSelectColor('green');
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ItemProductMostPopular;
