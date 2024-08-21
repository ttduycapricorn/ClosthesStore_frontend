import { useState } from 'react';
import classNames from 'classnames/bind';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

function InputComponent({ classNameCustom, value, type, onChange, placeholder }) {
    const [seePassword, setSeePassword] = useState(false);

    const handleSeePassword = () => {
        setSeePassword(!seePassword);
    };

    return (
        <div className={cx('wrapper')}>
            <input
                className={cx(classNameCustom)}
                type={type !== 'password' || seePassword === true ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {type === 'password' && (
                <div className={cx('icon-see-password')} onClick={handleSeePassword}>
                    {seePassword === false ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </div>
            )}
        </div>
    );
}

export default InputComponent;
