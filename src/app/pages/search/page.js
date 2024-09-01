'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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

const ListSize = [
    {
        size: 'XS',
    },
    {
        size: 'XS',
    },
    {
        size: 'XS',
    },
    {
        size: 'XS',
    },
    {
        size: 'XS',
    },
    {
        size: 'XS',
    },
    {
        size: 'XS',
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

    const handleShow = (item) => {
        for (let i = 0; i > setItem.length; i++) {
            if (setItem[i].title === item) setShowItem(!setItem[i].show);
        }
        for (let i = 0; i > setItem.length; i++) {
            console.log(setItem[i]);
        }
    };

    const handleChooseColor = (color) => {
        setColor(color);
    };

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
                            <a className={cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')}>XS </a>
                            <a className={cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')}>XS </a>
                            <a className={cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')}>XS </a>
                            <a className={cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')}>XS </a>
                            <a className={cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')}>XS </a>
                            <a className={cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')}>XS </a>
                            <a className={cx('swatch-size', 'btn btn-sm btn-outline-light mb-3 me-3 js-filter')}>XS </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content')}>content component</div>
        </div>
    );
}

export default SearchPage;
