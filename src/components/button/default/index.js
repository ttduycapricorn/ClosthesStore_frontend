import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ className, tittle, onClickCustom, width }) {
    return (
        <button className={cx('default') || className} onClick={onClickCustom} style={{ width: width }}>
            {tittle}
        </button>
    );
}

export default Button;
