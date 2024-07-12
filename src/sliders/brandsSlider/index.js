'use client';
import Slider from 'react-slick';
import classNames from 'classnames/bind';

import styles from './brandsSlider.module.scss';
import ItemBrandSlider from '@/components/itemBrandSlider';

const cx = classNames.bind(styles);

function BrandsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 7,
        slidesToScroll: 3,
        className: cx('wrapper-slider'),
        Slider: cx('sliderCustom'),
        dotsClass: cx('dostClasses'),
        variableWidth: true,
        Infinity: true,
        autoplay: true,
        arrows: false,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className={cx('item-slider')}>
                    <ItemBrandSlider
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbrand6.png&w=384&q=75'
                        }
                    />
                </div>
                <div className={cx('item-slider')}>
                    <ItemBrandSlider
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbrand1.png&w=256&q=75'
                        }
                    />
                </div>
                <div className={cx('item-slider')}>
                    <ItemBrandSlider
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbrand2.png&w=256&q=75'
                        }
                    />
                </div>
                <div className={cx('item-slider')}>
                    <ItemBrandSlider
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbrand4.png&w=256&q=75'
                        }
                    />
                </div>
                <div className={cx('item-slider')}>
                    <ItemBrandSlider
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbrand5.png&w=256&q=75'
                        }
                    />
                </div>
                <div className={cx('item-slider')}>
                    <ItemBrandSlider
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbrand6.png&w=384&q=75'
                        }
                    />
                </div>
                <div className={cx('item-slider')}>
                    <ItemBrandSlider
                        src={
                            'https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbrand2.png&w=256&q=75'
                        }
                    />
                </div>
            </Slider>
        </div>
    );
}

export default BrandsSlider;
