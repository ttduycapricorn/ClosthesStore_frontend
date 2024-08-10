/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';

import styles from './itemProductRelate.module.scss';

const cx = classNames.bind(styles);

function ItemProductRelateComponent({ Image1, Image2, title, price }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img className={cx('back')} src={Image1} alt="Hình ảnh 1" />
                <img className={cx('font')} src={Image2} alt="Hình ảnh 2" />
                <button className={cx('btn-add-to-cart')}>Add To Cart</button>
            </div>

            <div className={cx('info')}>
                <p className={cx('category')}>{'Dresses'}</p>
                <h6 className={cx('title')}>{title || 'Cropped Faux Leather Jacket'}</h6>
                <div className={cx('price')}>
                    <span className={cx('money-price')}>${price || 29}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemProductRelateComponent;
