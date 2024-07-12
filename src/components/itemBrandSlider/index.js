/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';

import styles from './itemBrandSlider.module.scss';

const cx = classNames.bind(styles);

function ItemBrandSlider({ src }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src={src} />
        </div>
    );
}

export default ItemBrandSlider;
