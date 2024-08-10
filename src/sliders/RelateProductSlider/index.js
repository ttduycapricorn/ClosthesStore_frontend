import ItemProductRelateComponent from '@/components/items/itemProductRelate';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick';

// import classNames from 'classnames/bind';
import dataItemProductRelate from '@/data/relatesItemProduct';

import './RelateProductSlider.scss';

// const cx = classNames.bind(styles);

function SampleNextArrow(props, data) {
    return (
        <div
            className={props.className}
            style={{
                ...props.style,
                position: 'absolute',
                display: 'block',
                backgroundColor: '#fff',
                border: '1px solid #e4e4e4',
                position: 'absolute',
                top: '150px',
                right: '0px',
                width: '45px',
                height: '45px',
                borderRadius: '100%',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
            }}
            onClick={props.onClick}
        >
            <FontAwesomeIcon className={'IconFaSlick'} icon={faArrowRight} />
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
                border: '1px solid #e4e4e4',
                position: 'absolute',
                top: '150px',
                left: '-22px',
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
            <FontAwesomeIcon className={'IconFaSlick'} icon={faArrowLeft} />
        </div>
    );
}

function RelateProductSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow className={'slickNextCustom'} />,
        prevArrow: <SamplePrevArrow className={'slickPreArrowCustom'} />,
        customPaging: (i) => <div className={'ft-slick__dots--custom'}></div>,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {dataItemProductRelate.map((item, index) => {
                    return (
                        <div key={index}>
                            <ItemProductRelateComponent
                                Image1={item.Image1}
                                Image2={item.Image2}
                                title={item.title}
                                price={item.price}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default RelateProductSlider;
