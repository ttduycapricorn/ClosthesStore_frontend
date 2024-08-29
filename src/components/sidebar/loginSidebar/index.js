import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './loginSidebar.module.scss';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import InputOriginNal from '@/components/input/original';
import ButtonOrigin from '@/components/button/origin';
import { toast } from 'sonner';
import axios from 'axios';

const cx = classNames.bind(styles);

function LoginSidebar({ name, ...props }) {
    const [show, setShow] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    const handelLogIn = () => {
        if (email && password) {
            if (!validEmail(email)) toast.error('email in valid!');
        } else {
            if (!email) toast.error('please enter you email!');
            if (!password) toast.error('please enter your password!');
        }
        return axios.post('', {
            email: email,
            password: password,
        });
    };

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
                        <InputOriginNal
                            label={'User name or email address *'}
                            type={'text'}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <div className="pb-3" />
                        <InputOriginNal
                            label={'password'}
                            type={'password'}
                            placeholder={'********'}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />

                        <div className="d-flex  mb-3 pb-2">
                            <div className={cx('form-check')}>
                                <input className={cx('checkBox-Layout')} type="checkbox" />
                                <label>Remember me</label>
                            </div>
                            <a className={cx('text-lostPassword')} href="/">
                                Lost password?
                            </a>
                        </div>

                        <ButtonOrigin label={'LOG IN'} width={'100%'} onClick={handelLogIn} />
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default LoginSidebar;
