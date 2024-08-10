import classNames from 'classnames/bind';

import styles from './cartItem.module.scss';

const cx = classNames.bind(styles);

function CartItem(props) {
    return <div className={cx('wrapper')}></div>;
}

export default CartItem;
