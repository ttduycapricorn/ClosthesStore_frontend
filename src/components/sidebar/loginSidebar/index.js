import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './loginSidebar.module.scss';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import InputOriginNal from '@/components/input/original';

const cx = classNames.bind(styles);

function LoginSidebar({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="hidden-scrollbar">
            <div className="item-action">
                <div className={'icon'} variant="primary" onClick={handleShow}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton className={cx('header-side-bar')}>
                    <Offcanvas.Title className={cx('tittle')}>Login</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={cx('body-bar')}>
                    <form className={cx('form-login')}>
                        <InputOriginNal label={'User name or email address *'} type={'text'} />
                        <div className="pb-3" />
                        <InputOriginNal label={'password'} type={'password'} placeholder={'********'} />

                        <div className="d-flex  mb-3 pb-2">
                            <div className={cx('form-check')}>
                                <input className={cx('checkBox-Layout')} type="checkbox" />
                                <label>Remember me</label>
                            </div>
                            <a className={cx('text-lostPassword')} href="/">
                                Lost password?
                            </a>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default LoginSidebar;
