'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';

import styles from './page.module.scss';
import ItemCartProduct from '@/components/items/itemCartProduct';
import { useCountdown } from '@/hooks/CountDownHook';
import SliderProductHomePage from '@/sliders/sliderProductInHomePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faHeadset, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Items_product = [
    {
        title: 'all',
    },
    {
        title: 'new arrivals',
    },
    {
        title: 'best seller',
    },
    {
        title: 'top rated',
    },
];

const List_instagram = [
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
    {
        src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
    },
];

export default function Home() {
    const [selectProductGift, setSelectProductGift] = useState('all');
    const [days, hours, minutes, seconds] = useCountdown('Aug 5, 2025 00:00:00');

    const MyArray = [
        {
            src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
            title: 'T-shirt',
            price: '66',
            quality: '2',
        },
        {
            src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
            title: 'T-shirt',
            price: '66',
            quality: '2',
        },
        {
            src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
            title: 'T-shirt',
            price: '66',
            quality: '2',
        },
        {
            src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
            title: 'T-shirt',
            price: '66',
            quality: '2',
        },
        {
            src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
            title: 'T-shirt',
            price: '66',
            quality: '2',
        },
        {
            src: 'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75',
            title: 'T-shirt',
            price: '66',
            quality: '2',
        },
    ];

    // let String = JSON.stringify(MyArray);

    // localStorage.setItem('key', String);

    return (
        <div className="wrapper">
            <div className={cx('swiper-wrapper')}>
                <div className={cx('swiper-bg')}>
                    <img src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fslideshow-pattern.png&w=3840&q=75" />
                </div>
                <div className={cx('slideShow-character')}>
                    <img src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fslideshow-character1.png&w=828&q=75" />
                </div>
                <div className={cx('slideShow-text')}>
                    <h6 className={cx('text-NewTrend')}>new trend</h6>
                    <h2 className={cx('text-summerSaleStylish')}>Summer Sale Stylish</h2>
                    <h2 className={cx('text-women')}>womens</h2>
                    <Link className={cx('link-discoverMore')} href={'./'}>
                        Discover More
                    </Link>
                </div>
            </div>
            <div className="mb-3 pb-3 mb-md-4 pb-md-4 mb-xl-5 pb-xl-5"></div>
            <section className={cx('collections-grid_masonry')}>
                <div className="container h-md-100" style={{ height: '100%' }}>
                    <div className="row h-md-100" style={{ height: '100%' }}>
                        <div className="col-lg-6 h-md-100" style={{ height: '100%' }}>
                            <div className="position-relative h-md-100" style={{ height: '100%' }}>
                                <div className={cx('background-img')} />
                                <div className={cx('hot-list-wrapper')}>
                                    <p className="text-uppercase mb-1">hot list</p>
                                    <h3 className="text-uppercase">
                                        <strong>women </strong>
                                        collection
                                    </h3>
                                    <Link className={cx('btn-link')} href={'/'}>
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex flex-column">
                            <div className={cx('collection-gid_item')}>
                                <div className={cx('back-ground-img')} />
                                <div className={cx('hot-list-wrapper')}>
                                    <p className="text-uppercase mb-1">hot list</p>
                                    <h3 className="text-uppercase">
                                        <strong>men </strong>
                                        collection
                                    </h3>
                                    <Link className={cx('btn-link')} href={'/'}>
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('collection-gid-item-second')}>
                                <div className="row h-md-100" style={{ height: '100%' }}>
                                    <div className="col-md-6 h-md-100">
                                        <div className="h-md-100 position-relative" style={{ height: '100%' }}>
                                            <div className={cx('background-img-2')} />
                                            <div className={cx('hot-list-wrapper')}>
                                                <p className="text-uppercase mb-1">hot list</p>
                                                <h3 className="text-uppercase">
                                                    <strong>kids </strong>
                                                    <hr />
                                                    collection
                                                </h3>
                                                <Link className={cx('btn-link')} href={'/'}>
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 h-md-100">
                                        <div className="h-md-100 position-relative" style={{ height: '100%' }}>
                                            <div className={cx('background-img-3')} />
                                            <div className={cx('hot-list-wrapper')}>
                                                <h3 className="text-uppercase">
                                                    <strong>e-gift </strong>
                                                    cards
                                                </h3>
                                                <p className="mb-1">Surprise someone with the gift they really want.</p>
                                                <Link className={cx('btn-link')} href={'/'}>
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mb-4 pb-4 mb-xl-5 pb-xl-5"></div>

            <section className="container" style={{ padding: '0px 15px', maxWidth: '1140px' }}>
                <div className={cx('products-grid')}>
                    <h2 className={cx('section-title')}>
                        Our Trendy <strong>Products</strong>
                    </h2>
                    <ul
                        className="nav nav-tabs mb-3 text-uppercase justify-content-center"
                        style={{ border: 'none', alignItems: 'center', display: 'flex', gap: '3rem' }}
                    >
                        {Items_product.map((item, index) => {
                            return (
                                <li className={cx('nav-item')} key={index}>
                                    <a
                                        className={
                                            selectProductGift === item.title ? cx('nav-link', 'active') : cx('nav-link')
                                        }
                                        onClick={() => {
                                            setSelectProductGift(item.title);
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className={cx('tab-content')} style={{ paddingTop: '.5rem' }}>
                        <div
                            className={selectProductGift === 'all' ? cx('tab-pane', 'show') : cx('tab-pane', 'hidden')}
                        >
                            {/* using mapping from server and database to display this page */}
                            <div className="row">
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <ItemCartProduct />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-3 mb-xl-5 pb-1 pb-xl-5" />
            <section
                className="position-relative d-flex align-items-end overflow-hidden"
                style={{ backgroundColor: 'transparent', margin: '0 0.9375rem' }}
            >
                <div className={cx('deal-timer')}>
                    <div className={cx('backGround_deal_timer')}></div>

                    <div className={cx('deal-timer-wrapper')}>
                        <div className={cx('deal-timer-content')}>
                            <p className={cx('text-dash')} style={{ textTransform: 'uppercase', color: '#c32929' }}>
                                Deal of the week
                            </p>

                            <h1 className="text-uppercase">
                                <strong>spring </strong>
                                collection
                            </h1>

                            <a className={cx('btn-link')}>shop now</a>
                        </div>
                        <div className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown">
                            <div className={cx('countdown-unit')}>
                                <span className="countdown-num d-block">{days}</span>
                                <span
                                    className="fw-bold text-uppercase text-secondary"
                                    style={{ fontSize: '1rem', color: '#767676' }}
                                >
                                    Days
                                </span>
                            </div>
                            <div className={cx('countdown-unit')}>
                                <span className="countdown-num d-block">{hours}</span>
                                <span
                                    className="fw-bold text-uppercase text-secondary"
                                    style={{ fontSize: '1rem', color: '#767676' }}
                                >
                                    Hours
                                </span>
                            </div>
                            <div className={cx('countdown-unit')}>
                                <span className="countdown-num d-block">{minutes}</span>
                                <span
                                    className="fw-bold text-uppercase text-secondary"
                                    style={{ fontSize: '1rem', color: '#767676' }}
                                >
                                    Mins
                                </span>
                            </div>
                            <div className={cx('countdown-unit-seconds')}>
                                <span className="countdown-num d-block">{seconds}</span>
                                <span
                                    className="fw-bold text-uppercase text-secondary"
                                    style={{ fontSize: '1rem', color: '#767676' }}
                                >
                                    Sec
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-3 mb-xl-5 pb-1 pb-xl-5" />
            <section className="container mb-3" style={{ padding: '0 15px' }}>
                <div className={cx('grid-banner')}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={cx('grid-banner-item')}>
                                <div className={cx('backGround-Img')} />
                                <div className={cx('content_abs')}>
                                    <h6 className="text-uppercase text-white fw-medium mb-3">starting at $19</h6>
                                    <h3 className="text-white mb-3">Women's T-Shirts</h3>
                                    <a className={cx('btn-link')} style={{ color: '#fff' }}>
                                        shop now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={cx('grid-banner-item')}>
                                <div className={cx('backGround-Img2')} />
                                <div className={cx('content_abs')}>
                                    <h6 className="text-uppercase text-black fw-medium mb-3">starting at $39</h6>
                                    <h3 className="text-black mb-3">Women's T-Shirts</h3>
                                    <a className={cx('btn-link')}>shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mb-3 mb-xl-5 pb-1 pb-xl-5" />

            <section className="container mb-3" style={{ padding: '0 15px' }}>
                <div className={cx('products-carousel')}>
                    <h2 className={cx('section-title')}>
                        limited <strong>edition</strong>
                    </h2>

                    <div className="position-relative">
                        <SliderProductHomePage />
                    </div>
                </div>
            </section>

            <section className="container mb-3">
                <h2 className="section-title text-uppercase text-center mb-4 pb-xl-2 mb-xl-4">@UOMO</h2>

                <div
                    className="row row-cols-3 row-cols-md-4 row-cols-xl-6 section-container"
                    // style={{ width: '1116px', margin: '0 9.844rem' }}
                >
                    {List_instagram.map((item, index) => {
                        return (
                            <div
                                className="instagram__tile col"
                                key={index}
                                style={{ position: 'relative', display: 'flex' }}
                            >
                                <a className={cx('item-instagram')} href="/">
                                    <img className={cx('img_instagram')} src={item.src} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className="mb-3 mb-xl-5 pb-1 pb-xl-5" />

            <div className="big-white">
                <section className="service-promotion container mb-md-4 pb-md-4 mb-xl-5">
                    <div className="row">
                        <div className="col-md-4 text-center mb-5 mb-md-0">
                            <div className="service-promotion__icon mb-4">
                                <FontAwesomeIcon icon={faCartFlatbed} style={{ height: '52px', width: '52px' }} />
                            </div>
                            <h3 className="service-promotion__title h5 text-uppercase">Fast And Free Delivery</h3>
                            <p className="service-promotion__content text-secondary">
                                Free delivery for all orders over $140
                            </p>
                        </div>
                        <div className="col-md-4 text-center mb-5 mb-md-0">
                            <div className="service-promotion__icon mb-4">
                                <FontAwesomeIcon icon={faHeadset} style={{ height: '52px', width: '52px' }} />
                            </div>
                            <h3 className="service-promotion__title h5 text-uppercase">24/7 Customer Support</h3>
                            <p className="service-promotion__content text-secondary">Friendly 24/7 customer support</p>
                        </div>
                        <div className="col-md-4 text-center mb-5 mb-md-0">
                            <div className="service-promotion__icon mb-4">
                                <FontAwesomeIcon icon={faShieldHalved} style={{ height: '52px', width: '52px' }} />
                            </div>
                            <h3 className="service-promotion__title h5 text-uppercase">Money Back Guarantee</h3>
                            <p className="service-promotion__content text-secondary">We return money within 30 days</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
