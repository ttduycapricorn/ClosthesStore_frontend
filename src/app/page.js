/* eslint-disable react/no-unescaped-entities */
'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';

// import Button from '@/components/button';
// import MultipleItems from '@/sliders/simpleSlider';
// import BrandsSlider from '@/sliders/brandsSlider';
// import MostPopularSlider from '@/sliders/sliderProductMostPopular';

import styles from './page.module.scss';
import ItemCartProduct from '@/components/items/itemCartProduct';
import { useCountdown } from '@/hooks/CountDownHook';
import SliderProductHomePage from '@/sliders/sliderProductInHomePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faHeadset, faShieldAlt, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

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

    let String = JSON.stringify(MyArray);

    localStorage.setItem('key', String);

    return (
        <div className="wrapper">
            {/* <div className={cx('Image1')}>
                <img src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fslider1.jpg&w=3840&q=75" />
            </div>

            <div className={cx('slide-show-text')}>
                <h4 className={cx('text_dash')}>EYEWEAR</h4>
                <h2 className={cx('Upto_')}>UP TO $60 OFF POLARISED</h2>
                <h2 className={cx('Upto_')}>SUNGLASSES</h2>
                <Button className={'shopNow'} tittle={'SHOP NOW'} />
            </div>
            <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>

            <div className={cx('shop-by-shape-wrapper')}>
                <h2 className={cx('tittle_shop-by-shape-wrapper')}>
                    SHOP BY <strong>SHAPE</strong>
                </h2>
                <div className={cx('sliderProductHomePage')}>
                    <MultipleItems />
                </div>
            </div>

            <div className={cx('bgImgWrapper')}>
                <div className={cx('bgImg1')}>
                    <img src="https://uomo-nextjs-ecommerce.vercel.app/assets/images/home/demo13/banner-1.jpg" />

                    <div className={cx('content-bgImg')}>
                        <h6 className={cx('textCollection')}>collection</h6>
                        <h3 className={cx('textSungLasses')}>Sunglasses Men’s</h3>
                        <Link className={cx('textShopNow')} href={'/'}>
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className={cx('bgImg2')}>
                    <img src="https://uomo-nextjs-ecommerce.vercel.app/assets/images/home/demo13/banner-2.jpg" />
                    <div className={cx('content-bgImg2')}>
                        <h6 className={cx('textCollection')}>collection</h6>
                        <h3 className={cx('textSungLasses')}>Sunglasses women’s</h3>
                        <Link className={cx('textShopNow')} href={'/'}>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>

            <div className={cx('shop-by-shape-wrapper')}>
                <h2 className={cx('tittle_shop-by-shape-wrapper')}>
                    most <strong>popular</strong>
                </h2>

                <MostPopularSlider data={''} />
            </div>

            <div className={cx('shop-by-shape-wrapper2')}>
                <h2 className={cx('tittle_shop-by-shape-wrapper')}>
                    new <strong>arrivals</strong>
                </h2>

                <MostPopularSlider data={''} />
            </div>

            <div className={cx('slider-show-bg')}>
                <img
                    className={cx('img-slider-show-bg')}
                    src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fnewsletter_bg.jpg&w=3840&q=75"
                />
                <h3 className={cx('block-title')}>DON‘T MISS THE CHANGE TO GET 40% OFF</h3>
                <p className={cx('text-Get-the-latest')}>Get the latest products and news update daily in fastest.</p>

                <form className={cx('block-newsletter__form')}>
                    <input className={cx('form-control')} type="text" placeholder="Your email address" />
                    <button className={cx('btn-JOIN')}>JOIN</button>
                </form>
            </div>

            <section className={cx('slider-brand')}>
                <h3 className={cx('title-slider-brand')}>brands</h3>
                <BrandsSlider />
            </section>

            <section className={cx('section-shop-our-instagram')}>
                <h2 className={cx('title-shop-out-instagram')}>
                    shop our <strong style={{ fontWeight: 'bold', fontStyle: 'normal' }}>instagram</strong>
                </h2>

                <div className={cx('wrapper-section-shop-our-instagram')}>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta1.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta2.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta3.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta4.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta5.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta6.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta7.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                    <div className={cx('instagram-title')}>
                        <Link className={cx('overlay-plus')} href={'/.'}>
                            <img
                                className={cx('img-link')}
                                src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2Finsta8.jpg&w=640&q=75"
                            />
                        </Link>
                    </div>
                </div>
            </section> */}
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
