'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchModal from '@/modals/searchModal';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const ListMenuItem = [
    {
        tittle: 'home',
        src: '/',
    },
    {
        tittle: 'shop',
        src: '/',
    },
    {
        tittle: 'blog',
        src: '/',
    },
    {
        tittle: 'pages',
        src: '/',
    },
    {
        tittle: 'about',
        src: '/',
    },
    {
        tittle: 'contact',
        src: '/',
    },
];

function HeaderComponent() {
    const [cartMount, setCartMount] = useState(0);

    const [openSearch, setOpenSearch] = useState(false);

    const [openModalSearch, setOpenModalSearch] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('Logo')} href={'/'}>
                <img
                    src={
                        'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=256&q=75'
                    }
                    alt="Logo"
                />
            </Link>

            <div className={cx('menus')}>
                {ListMenuItem.map((item, index) => {
                    return (
                        <div className={cx('MenuItem')} key={index}>
                            <Link href={item.src}>{item.tittle}</Link>
                        </div>
                    );
                })}
            </div>

            <div className={cx('actions')}>
                <div className={cx('item-action')}>
                    <div className={cx('icon')} onClick={() => setOpenSearch(!openSearch)}>
                        <FontAwesomeIcon icon={openSearch === false ? faMagnifyingGlass : faX} />
                        {/* <SearchModal show={openModalSearch} onHide={setOpenModalSearch(false)} /> */}
                    </div>
                </div>
                <div className={cx('item-action')}>
                    <div className={cx('icon')}>
                        <Link href={'/login'}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>
                </div>
                <div className={cx('item-action')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div className={cx('item-action')}>
                    <Link href={'/cart'} className={cx('icon')}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                    <span className={cx('cart-amount')}>{cartMount || 0}</span>
                </div>
                <div className={cx('item-action')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
