import classNames from 'classnames/bind';

import styles from './default.module.scss';

const cx = classNames.bind(styles);

function InputDefault({ className, type, width }) {
    return <input className={cx(className)} type={type} style={{ width: width }} />;
}

export default InputDefault;
