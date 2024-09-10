import classNames from 'classnames/bind';

import styles from './original.module.scss';

const cx = classNames.bind(styles);

function InputOriginNal({ label, type, placeholder, value, onChange, onFocus }) {
    return (
        <div className={value && onFocus ? cx('form-floating', 'focus') : cx('form-floating')}>
            <input
                className={cx('form-control')}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                autoFocus={onFocus ? true : false}
            />
            <label>{label}</label>
        </div>
    );
}

export default InputOriginNal;
