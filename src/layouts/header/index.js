'use client';
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

import CartSidebar from '@/components/sidebar/cartSidebar';
import { dataShopping } from '@/data/cartShoppingData';
import LargeModal from '@/components/modals/largeModal';
import SearchModal from '@/components/modals/SearchModal';
import LoginSidebar from '@/components/sidebar/loginSidebar';

const cx = classNames.bind(styles);

const ListMenuItem = [
    {
        tittle: 'home',
        src: '/',
    },
    {
        tittle: 'shop',
        src: '/shop',
    },
    {
        tittle: 'blog',
        src: '/blog',
    },
    {
        tittle: 'pages',
        src: '/pages',
    },
    {
        tittle: 'about',
        src: '/about',
    },
    {
        tittle: 'contact',
        src: '/contact',
    },
];

function HeaderComponent() {
    const [cartMount, setCartMount] = useState();

    const [openSearch, setOpenSearch] = useState(false);

    const pathName = usePathname();

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
                        <div className={pathName === item.src ? cx('MenuItem', 'active') : cx('MenuItem')} key={index}>
                            <Link href={item.src}>{item.tittle}</Link>
                        </div>
                    );
                })}
            </div>

            <div className={cx('actions')}>
                <div className={cx('item-action')}>
                    <div className={cx('icon')} onClick={() => setOpenSearch(!openSearch)}>
                        <FontAwesomeIcon icon={openSearch === false ? faMagnifyingGlass : faX} />
                        <SearchModal />
                    </div>
                </div>
                <div className={cx('item-action')}>
                    <div className={cx('icon')}>
                        {/* <Link href={'/login'}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link> */}
                        <LoginSidebar
                            name={<FontAwesomeIcon icon={faUser} style={{ width: '52px' }} />}
                            placement={'end'}
                            data={dataShopping}
                        />
                    </div>
                </div>
                <div className={cx('item-action')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div className={cx('item-action')}>
                    {/* <Link href={'/cart'} className={cx('icon')} onClick={() => {}}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </Link> */}
                    <CartSidebar
                        name={<FontAwesomeIcon icon={faBagShopping} style={{ width: '52px' }} />}
                        placement={'end'}
                        data={dataShopping}
                    />
                    <span className={cx('cart-amount')}>{cartMount || 0}</span>
                </div>
                <div className={cx('item-action')}>
                    <LargeModal />
                    {/* <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faBars} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
