import classNames from 'classnames/bind';

import styles from './original.module.scss';

const cx = classNames.bind(styles);

function InputOriginNal({ label, type, placeholder }) {
    return (
        <div className={cx('form-floating')}>
            <input className={cx('form-control')} type={type} placeholder={placeholder} />
            <label>{label}</label>
        </div>
    );
}

export default InputOriginNal;
