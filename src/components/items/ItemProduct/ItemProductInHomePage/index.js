/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';

import styles from './ItemProductInHomePage.module.scss';

const cx = classNames.bind(styles);

function ItemProductInHomePage({ src, title }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img')} width={218} height={147} src={src} />

            <hr />
            <div className={cx('text-center')}>{title}</div>
        </div>
    );
}

export default ItemProductInHomePage;
