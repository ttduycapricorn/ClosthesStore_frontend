'use client';
import ItemProductInHomePage from '@/components/ItemProduct/ItemProductInHomePage';
import Slider from 'react-slick';
import classNames from 'classnames/bind';

import styles from './simpleSlider.module.scss';

const cx = classNames.bind(styles);

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: cx('wrapper-slider'),
        Slider: cx('sliderCustom'),
        dotsClass: cx('dostClasses'),
        variableWidth: true,
        Infinity: true,
        autoplay: true,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className={cx('slick-slide')}>
                    <ItemProductInHomePage
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fcategory-6.jpg&w=640&q=75'
                        }
                        title={'oval'}
                    />
                </div>
                <div className={cx('slick-slide')}>
                    <ItemProductInHomePage
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fcategory-5.jpg&w=640&q=75'
                        }
                        title={'geometric'}
                    />
                </div>
                <div className={cx('slick-slide')}>
                    <ItemProductInHomePage
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fcategory-1.jpg&w=640&q=75'
                        }
                        title={'square'}
                    />
                </div>
                <div className={cx('slick-slide')}>
                    <ItemProductInHomePage
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fcategory-4.jpg&w=640&q=75'
                        }
                        title={'ROUND'}
                    />
                </div>
                <div className={cx('slick-slide')}>
                    <ItemProductInHomePage
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fcategory-2.jpg&w=640&q=75'
                        }
                        title={'AVIATOR'}
                    />
                </div>
                <div className={cx('slick-slide')}>
                    <ItemProductInHomePage
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo13%2Fcategory-2.jpg&w=640&q=75'
                        }
                        title={'RECTANGULAR'}
                    />
                </div>
            </Slider>
        </div>
    );
}

export default MultipleItems;
