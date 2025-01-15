import classNames from 'classnames/bind';

import styles from './buttonOrigin.module.scss';

const cx = classNames.bind(styles);

function ButtonOrigin({ label, width, onClick }) {
    return (
        <div className={cx('wrapper')} style={{ width: { width } }} onClick={onClick}>
            {label}
        </div>
    );
}

export default ButtonOrigin;
