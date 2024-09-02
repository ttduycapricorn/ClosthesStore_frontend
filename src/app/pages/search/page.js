/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import RangeSlider from 'react-range-slider-input';

import styles from './searchPage.module.scss';

const cx = classNames.bind(styles);

const ListItemProductCategories = [
    {
        title: 'Dresses',
        href: '#',
    },
    {
        title: 'Shorts',
        href: '#',
    },
    {
        title: 'Sweatshirts',
        href: '#',
    },
    {
        title: 'Swimwear',
        href: '#',
    },
    {
        title: 'Jackets',
        href: '#',
    },
    {
        title: 'T-Shirts &amp; Tops',
        href: '#',
    },
    {
        title: 'Jeans',
        href: '#',
    },
    {
        title: 'Trousers',
        href: '#',
    },
    {
        title: 'Men',
        href: '#',
    },
    {
        title: 'Jumpers &amp; Cardigans',
        href: '#',
    },
];

const ListColor = [
    {
        color: 'blue',
        rgb: 'rgb(10, 36, 114)',
    },
    {
        color: 'yellow',
        rgb: 'rgb(215, 187, 79);',
    },
    {
        color: 'black',
        rgb: 'rgb(40, 40, 40)',
    },
    {
        color: 'blue-white',
        rgb: 'rgb(177, 214, 232)',
    },
    {
        color: 'grown',
        rgb: 'rgb(156, 117, 57)',
    },
    {
        color: 'grown-white',
        rgb: 'rgb(210, 155, 72)',
    },
    {
        color: 'human-skin',
        rgb: 'rgb(230, 174, 149)',
    },
    {
        color: 'red',
        rgb: 'rgb(215, 107, 103)',
    },
    {
        color: 'gray',
        rgb: 'rgb(186, 186, 186)',
    },
    {
        color: 'green-white ',
        rgb: 'rgb(191, 220, 196)',
    },
];

const listBrandData = [
    {
        brand: 'Adidas',
        count: 2,
        choose: false,
    },
    {
        brand: 'Balmain',
        count: 7,
        choose: false,
    },
    {
        brand: 'Balenciaga',
        count: 10,
        choose: false,
    },
    {
        brand: 'Burberry',
        count: 39,
        choose: false,
    },
    {
        brand: 'Kenzo',
        count: 95,
        choose: false,
    },
    {
        brand: 'Givenchy',
        count: 1092,
        choose: false,
    },
    {
        brand: 'Zara',
        count: 48,
        choose: false,
    },
];

function SearchPage() {
    const [setItem, setShowItem] = useState([
        {
            title: 'Product Categories',
            show: true,
        },
        {
            title: 'color',
            show: true,
        },
        {
            title: 'Product Categories',
            show: true,
        },
        {
            title: 'Product Categories',
            show: true,
        },
    ]);

    const [color, setColor] = useState('blue');

    const [sizeProduct, setSizeProduct] = useState([
        {
            title: 'XS',
            active: false,
        },
        {
            title: 'S',
            active: false,
        },
        {
            title: 'm',
            active: false,
        },
        {
            title: 'l',
            active: false,
        },
        {
            title: 'xl',
            active: false,
        },
        {
            title: 'xxl',
            active: false,
        },
    ]);

    const [listBrand, setListBrand] = useState(listBrandData);

    const handleShow = (item) => {};

    const handleChooseColor = (color) => {
        setColor(color);
    };

    const handleChooseSize = (size_IsChoose) => {
        setSizeProduct((prevSizeProduct) =>
            prevSizeProduct.map((item) => (item.title === size_IsChoose ? { ...item, active: !item.active } : item)),
        );
    };

    const getDataFromSizeProduct = () => {
        return sizeProduct.filter((item) => item.active === true);
    };

    const handleChangeBrand = (brand) => {
        setListBrand((prevBrand) => {
            prevBrand.map((item) => (item.brand === brand ? { ...item, choose: !item.choose } : item));
        });
    };

    useEffect(() => {
        console.log(getDataFromSizeProduct());
    }, [getDataFromSizeProduct, sizeProduct]);

    return (
        <div className="container d-flex shop-main container pt-4 pt-xl-5">
            <div className={cx('side-bar')}>
                <div className={cx('accordion-item')}>
                    <h5 className="text-uppercase">
                        <button
                            className={cx('accordion-btn')}
                            onClick={() => {
                                handleShow('Product Categories');
                            }}
                        >
                            Product Categories
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={setItem[0].show ? faMinus : faPlus} />
                            </div>
                        </button>
                    </h5>
                    <ul className="list list-inline row row-cols-2 mb-0">
                        {ListItemProductCategories.map((item, index) => {
                            return (
                                <li className="list-item" key={index}>
                                    <Link className="menu-link py-1" href={item.href}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={cx('accordion-item', 'mb-4')}>
                    <h5 className="text-uppercase">
                        <button
                            className={cx('accordion-btn')}
                            onClick={() => {
                                handleShow('color');
                            }}
                        >
                            color
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={setItem[1].show === true ? faMinus : faPlus} />
                            </div>
                        </button>
                    </h5>
                    <div className="accordion-collapse border-0 collapse show">
                        <div className={cx('accordion-body', 'border-0 collapse show')}>
                            <div className="d-flex flex-wrap">
                                {ListColor.map((item, index) => {
                                    return (
                                        <div
                                            className={
                                                color === item.color
                                                    ? cx('swatch-color', 'js-filter', 'swatch-active')
                                                    : cx('swatch-color', 'js-filter')
                                            }
                                            style={{ color: item.rgb }}
                                            key={index}
                                            onClick={() => {
                                                handleChooseColor(item.color);
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('accordion-item', 'mb-4')}>
                    <h5 className="text-uppercase">
                        <button
                            className={cx('accordion-btn')}
                            onClick={() => {
                                handleShow('color');
                            }}
                        >
                            size
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={setItem[2].show === true ? faMinus : faPlus} />
                            </div>
                        </button>
                    </h5>
                    <div className={cx('accordion-body', 'px-0 pb-0')}>
                        <div className={cx('d-flex flex-wrap')}>
                            {sizeProduct.map((item, index) => {
                                return (
                                    <a
                                        className={
                                            item.active === true
                                                ? cx(
                                                      'swatch-size',
                                                      'btn btn-sm btn-outline-light mb-3 me-3 js-filter',
                                                      'active',
                                                  )
                                                : cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')
                                        }
                                        key={index}
                                        onClick={() => {
                                            handleChooseSize(item.title);
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={cx('accordion-item', 'mb-4')}>
                    <h5 className="text-uppercase">
                        <button
                            className={cx('accordion-btn')}
                            onClick={() => {
                                handleShow('color');
                            }}
                        >
                            brands
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={setItem[2].show === true ? faMinus : faPlus} />
                            </div>
                        </button>
                    </h5>

                    <div className={cx('search-field', 'multi-select accordion-body px-0 pb-0')}>
                        <ul className={cx('multi-select__list list-unstyled')}>
                            {listBrand.map((item, index) => {
                                return (
                                    <li
                                        className={
                                            item.choose === true
                                                ? cx(
                                                      'search-suggestion__item',
                                                      'multi-select__item',
                                                      'text-primary',
                                                      'js-search-select js-multi-select',
                                                      'active-multi-select',
                                                  )
                                                : cx(
                                                      'search-suggestion__item',
                                                      'multi-select__item',
                                                      'text-primary',
                                                      'js-search-select js-multi-select',
                                                  )
                                        }
                                        key={index}
                                        onClick={() => {
                                            handleChangeBrand(item.brand);
                                        }}
                                    >
                                        <span className={cx('me-auto')}>{item.brand}</span>
                                        <span className={cx('text-secondary')}>{item.count}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="accordion-item mb-4">
                    <h5 className="text-uppercase">
                        <button
                            className={cx('accordion-btn')}
                            onClick={() => {
                                handleShow('color');
                            }}
                        >
                            price
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={setItem[2].show === true ? faMinus : faPlus} />
                            </div>
                        </button>
                    </h5>

                    <div className={cx('')}>
                        <RangeSlider min={0} max={100} step={5} />
                    </div>
                </div>
            </div>

            <div className={cx('content')}>content component</div>
        </div>
    );
}

export default SearchPage;
