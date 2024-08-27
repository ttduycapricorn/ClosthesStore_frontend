import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './loginSidebar.module.scss';

import { dataShopping } from '@/data/cartShoppingData';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function LoginSidebar({ name, ...props }) {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState(dataShopping);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelRemoveItemCartFromList = (id) => {
        const newList = items.filter((item) => id !== item.id);
        setItems(newList);
    };

    return (
        <>
            <div className="item-action">
                <div className={'icon'} variant="primary" onClick={handleShow}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton className={cx('header-side-bar')}>
                    <Offcanvas.Title className={cx('tittle')}>Login Form</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={cx('body-bar')}></Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default LoginSidebar;
