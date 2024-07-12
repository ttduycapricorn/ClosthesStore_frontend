'use client';
import Slider from 'react-slick';
import classNames from 'classnames/bind';

import styles from './simpleSlider.module.scss';
import ItemProductMostPopular from '@/components/ItemProductMostPopular';

const cx = classNames.bind(styles);

function MostPopularSlider({ data }) {
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
                    <ItemProductMostPopular
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct-46.png&w=640&q=75'
                        }
                        title={'New Wayfarer Classic'}
                        price={'429'}
                    />
                </div>
                <div className={cx('slick-slide')}>
                    <ItemProductMostPopular
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct-45.png&w=640&q=75'
                        }
                        title={'New Wayfarer Classic'}
                        price={'429'}
                    />
                </div>

                <div className={cx('slick-slide')}>
                    <ItemProductMostPopular
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct-45.png&w=640&q=75'
                        }
                        title={'New Wayfarer Classic'}
                        price={'429'}
                    />
                </div>

                <div className={cx('slick-slide')}>
                    <ItemProductMostPopular
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct-45.png&w=640&q=75'
                        }
                        title={'New Wayfarer Classic'}
                        price={'429'}
                    />
                </div>

                <div className={cx('slick-slide')}>
                    <ItemProductMostPopular
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct-45.png&w=640&q=75'
                        }
                        title={'New Wayfarer Classic'}
                        price={'429'}
                    />
                </div>

                <div className={cx('slick-slide')}>
                    <ItemProductMostPopular
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct-45.png&w=640&q=75'
                        }
                        title={'New Wayfarer Classic'}
                        price={'429'}
                    />
                </div>

                <div className={cx('slick-slide')}>
                    <ItemProductMostPopular
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct-45.png&w=640&q=75'
                        }
                        title={'New Wayfarer Classic'}
                        price={'429'}
                    />
                </div>
            </Slider>
        </div>
    );
}

export default MostPopularSlider;
