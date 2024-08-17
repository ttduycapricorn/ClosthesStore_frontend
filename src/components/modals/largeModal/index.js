/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import classNames from 'classnames/bind';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import styles from './largeModal.module.scss';

const cx = classNames.bind(styles);

const navItems = [
    {
        title: 'women',
    },
    {
        title: 'men',
    },
    {
        title: 'kids',
    },
];

const listLinks = [
    {
        title: 'women',
        children: [
            {
                title: 'New',
            },
            {
                title: 'Best Sellers',
            },
            {
                title: 'Collaborations®',
            },
            {
                title: 'Sets',
            },
            {
                title: 'Denim',
            },
            {
                title: 'Jackets & Coats',
            },
            {
                title: 'Overshirts',
            },
            {
                title: 'Trousers',
            },
            {
                title: 'Jeans',
            },
            {
                title: 'Sweatshirts and Hoodies',
            },
            {
                title: 'T-shirts & Tops',
            },
            {
                title: 'Shirts & Blouses',
            },
            {
                title: 'Shorts and Bermudas',
            },
            {
                title: 'Shoes',
            },
            {
                title: 'Accessories',
            },
            {
                title: 'Bags',
            },
            {
                title: 'Gift Card',
            },
        ],
    },
    {
        title: 'man',
        children: [
            {
                title: 'Best Sellers',
            },
            {
                title: 'New',
            },
            {
                title: 'Sets',
            },
            {
                title: 'Denim',
            },
            {
                title: 'Collaborations®',
            },
            {
                title: 'Trousers',
            },
            {
                title: 'Jackets & Coats',
            },
            {
                title: 'Overshirts',
            },
            {
                title: 'Dresses',
            },
            {
                title: 'Jeans',
            },
            {
                title: 'Sweatshirts and Hoodies',
            },
            {
                title: 'Gift Card',
            },
            {
                title: 'Shirts & Blouses',
            },
            {
                title: 'T-shirts & Tops',
            },
            {
                title: 'Shorts and Bermudas',
            },
            {
                title: 'Accessories',
            },
            {
                title: 'Shoes',
            },
            {
                title: 'Bags',
            },
        ],
    },
    {
        title: 'kids',
        children: [
            {
                title: 'New',
            },
            {
                title: 'Best Sellers',
            },
            {
                title: 'Collaborations®',
            },
            {
                title: 'New',
            },
            {
                title: 'New',
            },
            {
                title: 'New',
            },
            {
                title: 'New',
            },
            {
                title: 'New',
            },
            {
                title: 'New',
            },
            {
                title: 'New',
            },
        ],
    },
    {
        title: 'home',
    },
    {
        title: 'collection',
    },
    {
        title: 'sales up to 50% off',
        color: 'red',
    },
    {
        title: 'new',
    },
];

function MenuModal() {
    const [show, setShow] = useState(false);

    const [showItem, setShowItem] = useState('women');
    const [showItemList, setShowItemList] = useState('women');
    const [showLinkList, setShowLinkList] = useState(listLinks);

    function handleShow() {
        setShow(!show);
    }

    return (
        <>
            <div className={cx('icon')} onClick={() => handleShow()}>
                <FontAwesomeIcon icon={faBars} />
                {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </div>
            <Modal className={cx('wrapper-modal')} show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body className={cx('wrapper')}>
                    <img
                        className={cx('img')}
                        src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fnav-bg.jpg&w=1920&q=75"
                    />
                    <div className={cx('menu')}>
                        <div className={cx('header')}>
                            <div className={cx('nav')}>
                                {navItems.map((item, index) => {
                                    return (
                                        <div
                                            className={
                                                showItem === item.title ? cx('itemNav', 'active') : cx('itemNav')
                                            }
                                            key={index}
                                            onClick={() => {
                                                setShowItem(item.title);
                                            }}
                                        >
                                            {item.title}
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => {
                                    setShow(false);
                                }}
                            >
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        </div>

                        <div className={cx('content')}>
                            {showItem === 'women' && (
                                <div className="row" style={{ flexWrap: 'nowrap' }}>
                                    <div className={cx('site-map-links')}>
                                        {listLinks.map((item, index) => {
                                            return (
                                                <div
                                                    className={cx('itemList')}
                                                    key={index}
                                                    onClick={() => {
                                                        setShowItemList(item.title);
                                                    }}
                                                    style={{ color: item.color }}
                                                >
                                                    <a
                                                        className={
                                                            showItemList === item.title
                                                                ? cx('nav-link', 'activeLink')
                                                                : cx('nav-link')
                                                        }
                                                    >
                                                        <span className={cx('titleItem')}>{item.title}</span>
                                                    </a>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className={cx('submenu')}>
                                        {showItemList === 'women' &&
                                            showLinkList.at(0).children.map((item, index) => {
                                                return (
                                                    <div className={cx('submenu-item')} key={index}>
                                                        {item.title}
                                                    </div>
                                                );
                                            })}
                                        {showItemList === 'man' &&
                                            showLinkList.at(1).children.map((item, index) => {
                                                return (
                                                    <div className={cx('submenu-item')} key={index}>
                                                        {item.title}
                                                    </div>
                                                );
                                            })}
                                        {showItemList === 'kids' &&
                                            showLinkList.at(2).children.map((item, index) => {
                                                return (
                                                    <div className={cx('submenu-item')} key={index}>
                                                        {item.title}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            )}
                            {showItem === 'men' && (
                                <p className={showItem === 'men' ? cx('paragraph', 'show') : cx('hidden')}>
                                    It is very important for the customer to follow the coaching process, but I will
                                    give it this time They happened with some great labor and pain. To come to the
                                    smallest detail, who is ours? exercise of any kind of work, except that some
                                    advantage may be obtained from it.
                                    <br />
                                    <br />
                                    Or two inure pain in reprimands in pleasure he wants to be a hair of pain and no one
                                    flees be born The element of the bed from the door is convenient to hang from the
                                    bow, some bed throat
                                </p>
                            )}

                            {showItem === 'kids' && (
                                <p className={showItem === 'kids' ? cx('paragraph', 'show') : cx('hidden')}>
                                    But that you may see whence all this error is born of the pleasure of the accusers
                                    and the pain of those who praise, I will open the whole matter, and those very
                                    things from that inventor I will explain what was said about the truth and as an
                                    architect of a happy life. For no one knows her pleasure because it is pleasure he
                                    despises or hates or flees, but because it results great sorrows to those who do not
                                    know how to follow pleasure with reason.
                                    <br />
                                    <br />
                                    To come to the smallest details, which of us undertakes any physical exercise that
                                    is laborious, except as something from Will it be beneficial?
                                </p>
                            )}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MenuModal;
