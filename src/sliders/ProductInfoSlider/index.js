'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Image from 'next/image';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductInfoSlider.module.scss';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    return (
        <div
            className={props.className}
            style={{
                ...props.style,
                display: 'block',
                backgroundColor: '#fff',
                border: '1px solid',
                position: 'absolute',
                right: '25px',
                width: '45px',
                height: '45px',
                borderRadius: '100%',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
            }}
            onClick={props.onClick}
        >
            <FontAwesomeIcon className={cx('IconFaSlick')} icon={faArrowRight} />
        </div>
    );
}

function SamplePrevArrow(props) {
    return (
        <div
            className={props.className}
            style={{
                ...props.style,
                display: 'block',
                border: '1px solid',
                position: 'absolute',
                left: '25px',
                width: '45px',
                height: '45px',
                borderRadius: '100%',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                zIndex: '1',
                backgroundColor: '#fff',
            }}
            onClick={props.onClick}
        >
            <FontAwesomeIcon className={cx('IconFaSlick')} icon={faArrowLeft} />
        </div>
    );
}

function ProductInfoSlider() {
    const settings = {
        customPaging: function (i) {
            return (
                <a className={cx('itemImage')}>
                    <Image src={`/product/product_${i}.webp`} width={78} height={78} alt="productItem" />
                </a>
            );
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: cx('dotClassName'),
        nextArrow: <SampleNextArrow className={cx('slickNextCustom')} />,
        prevArrow: <SamplePrevArrow className={cx('slickPreArrowCustom')} />,
    };
    return (
        <div className={cx('slider-container')}>
            <Slider {...settings}>
                <div>
                    <img className={cx('ImageItemSlider')} src={'/product/product_0.webp'} />
                </div>
                <div>
                    <img className={cx('ImageItemSlider')} src={'/product/product_1.webp'} />
                </div>
                <div>
                    <img className={cx('ImageItemSlider')} src={'/product/product_2.webp'} />
                </div>
                <div>
                    <img className={cx('ImageItemSlider')} src={'/product/product_3.webp'} />
                </div>
            </Slider>
        </div>
    );
}

export default ProductInfoSlider;
