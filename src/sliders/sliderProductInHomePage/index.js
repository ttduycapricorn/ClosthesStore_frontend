import ItemCartProduct from '@/components/items/itemCartProduct';
import React from 'react';
import Slider from 'react-slick';

import classNames from 'classnames/bind';

import styles from './sliderProductInHomePage.module.scss';

const cx = classNames.bind(styles);

function SliderProductHomePage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        customPaging: (i) => <div className={cx('ft-slick__dots--custom')}></div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <ItemCartProduct />
                </div>
                <div>
                    <ItemCartProduct />
                </div>
                <div>
                    <ItemCartProduct />
                </div>
                <div>
                    <ItemCartProduct />
                </div>
                <div>
                    <ItemCartProduct />
                </div>
            </Slider>
        </div>
    );
}

export default SliderProductHomePage;
