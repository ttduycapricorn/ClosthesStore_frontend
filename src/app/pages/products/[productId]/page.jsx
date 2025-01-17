/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { toast } from 'sonner';
import Image from 'next/image';

import ProductInfoSlider from '@/sliders/ProductInfoSlider';
import Button from '@/components/button/default';
import RelateProductsSlider from '@/sliders/RelateProductSlider';

import styles from './product.module.scss';

const cx = classNames.bind(styles);

function ProductPage(data) {
    const [numberCart, setNumberCart] = useState(0);
    const [numberReviews, setNumberReview] = useState(0);
    // const [infoReview, setInfoReview] = useState(infoForPersonSubmitReview);
    const [toggleSize, setToggleSize] = useState('XS');
    const [toggleColor, setToggleColor] = useState('black');
    const [toggle, setToggle] = useState('tab-description');

    var infoForPersonSubmitReview = {
        name: '',
        email: '',
        description: '',
    };

    const handelChangeToggleSize = (size) => {
        setToggleSize(size);
    };

    const handelChangeColor = (color) => {
        setToggleColor(color);
    };

    const handelChangeTab = (id) => {
        setToggle(id);
    };

    // setInfoProduct(
    //     useEffect(() => {
    //         return axios.get(`localhost:8080/product${id}`);
    //     }, []),
    // );

    const handleSubmitReview = () => {};

    return (
        <div className={cx('wrapper')}>
            <section className={cx('product-single')}>
                <div className={cx('row-productPage')}>
                    <div className="col-lg-7">
                        <div className={cx('product-single-media')}>
                            <ProductInfoSlider />
                        </div>
                    </div>

                    <div className="col-lg-5" style={{ padding: '0px 30px' }}>
                        <h1 className={cx('product-single-name')}>New Wayfarer Classic</h1>

                        <div className={cx('rating')}>
                            <div className={cx('review-group')}>
                                <FontAwesomeIcon className={cx('StartIcon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('StartIcon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('StartIcon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('StartIcon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('StartIcon')} icon={faStar} />
                            </div>
                            <span className={cx('reviews-nots')}>8k+ reviews</span>
                        </div>

                        <div className={cx('price')}>
                            <span>$ {data.price} 429</span>
                        </div>

                        <div className={cx('short-desc')}>
                            <p>
                                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui.
                                Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra
                                nunc, ut aliquet magna posuere eget.
                            </p>
                        </div>

                        <from method="POST">
                            <div className={cx('swatches')}>
                                <div className={cx('text-swatches')}>
                                    <label>SIZES</label>
                                    <div className={cx('swatch-list')}>
                                        <Tippy content="Extra Small">
                                            <label
                                                className={
                                                    toggleSize === 'XS'
                                                        ? cx('js-swatch', 'active-js-swatch')
                                                        : cx('js-swatch')
                                                }
                                                htmlFor="swatch-1"
                                                onClick={() => {
                                                    handelChangeToggleSize('XS');
                                                }}
                                            >
                                                XS
                                                <input
                                                    type="radio"
                                                    id="swatch-1"
                                                    value={toggleSize}
                                                    onChange={() => {
                                                        handelChangeToggleSize('XS');
                                                    }}
                                                />
                                            </label>
                                        </Tippy>
                                        <Tippy content="Small">
                                            <label
                                                className={
                                                    toggleSize === 'S'
                                                        ? cx('js-swatch', 'active-js-swatch')
                                                        : cx('js-swatch')
                                                }
                                                htmlFor="swatch-2"
                                                onClick={() => {
                                                    handelChangeToggleSize('S');
                                                }}
                                            >
                                                S
                                                <input type="radio" id="swatch-2" />
                                            </label>
                                        </Tippy>
                                        <Tippy content="Middle">
                                            <label
                                                className={
                                                    toggleSize === 'M'
                                                        ? cx('js-swatch', 'active-js-swatch')
                                                        : cx('js-swatch')
                                                }
                                                htmlFor="swatch-3"
                                                onClick={() => {
                                                    handelChangeToggleSize('M');
                                                }}
                                            >
                                                M
                                                <input type="radio" id="swatch-3" />
                                            </label>
                                        </Tippy>
                                        <Tippy content="Large">
                                            <label
                                                className={
                                                    toggleSize === 'L'
                                                        ? cx('js-swatch', 'active-js-swatch')
                                                        : cx('js-swatch')
                                                }
                                                onClick={() => {
                                                    handelChangeToggleSize('L');
                                                }}
                                                htmlFor="swatch-4"
                                            >
                                                L
                                                <input type="radio" id="swatch-4" />
                                            </label>
                                        </Tippy>
                                        <Tippy content="Extra Large">
                                            <label
                                                className={
                                                    toggleSize === 'XL'
                                                        ? cx('js-swatch', 'active-js-swatch')
                                                        : cx('js-swatch')
                                                }
                                                htmlFor="swatch-5"
                                                onClick={() => {
                                                    handelChangeToggleSize('XL');
                                                }}
                                            >
                                                XL
                                                <input type="radio" id="swatch-5" />
                                            </label>
                                        </Tippy>
                                    </div>
                                    <a className={cx('size-guide')}>size guide</a>
                                </div>
                            </div>
                            <div>
                                <div className={cx('colors-swatches')}>
                                    <p className={cx('tittle-color-check')}>colors</p>
                                    <Tippy content="black">
                                        <label
                                            className={
                                                toggleColor === 'black'
                                                    ? cx('js-swatch-color', 'active-color')
                                                    : cx('js-swatch-color')
                                            }
                                            style={{ color: 'black' }}
                                            onClick={() => {
                                                handelChangeColor('black');
                                            }}
                                        />
                                    </Tippy>
                                    <input
                                        className={cx('input-check-color')}
                                        type="radio"
                                        name="swatch-color"
                                        defaultChecked
                                        value={toggleColor}
                                        onChange={() => {
                                            handelChangeColor('black');
                                        }}
                                    />
                                    <Tippy content={'red'}>
                                        <label
                                            className={
                                                toggleColor === 'red'
                                                    ? cx('js-swatch-color', 'active-color')
                                                    : cx('js-swatch-color')
                                            }
                                            style={{ color: 'red' }}
                                            onClick={() => {
                                                handelChangeColor('red');
                                            }}
                                        />
                                    </Tippy>
                                    <input
                                        className={cx('input-check-color')}
                                        type="radio"
                                        name="swatch-color"
                                        value={toggleColor}
                                        onChange={() => {
                                            handelChangeColor('red');
                                        }}
                                    />
                                    <Tippy content="grey">
                                        <label
                                            className={
                                                toggleColor === 'grey'
                                                    ? cx('js-swatch-color', 'active-color')
                                                    : cx('js-swatch-color')
                                            }
                                            style={{ color: 'grey' }}
                                            onClick={() => {
                                                handelChangeColor('grey');
                                            }}
                                        />
                                    </Tippy>
                                    <input
                                        className={cx('input-check-color')}
                                        type="radio"
                                        name="swatch-color"
                                        value={toggleColor}
                                        onChange={() => {
                                            handelChangeColor('gray');
                                        }}
                                    />
                                </div>
                            </div>

                            <div className={cx('addToCart')}>
                                <div className={cx('qty-control')}>
                                    <input
                                        type="text"
                                        className={cx('number')}
                                        min={'0'}
                                        value={numberCart}
                                        onChange={(e) => {
                                            setNumberCart(e.target.value);
                                        }}
                                        name="quantity"
                                    />
                                    <div
                                        className={cx('reduce')}
                                        onClick={() => {
                                            setNumberCart(numberCart - 1);
                                            if (numberCart <= 0) {
                                                setNumberCart(0);
                                            }
                                        }}
                                        htmlFor={'quantity'}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </div>
                                    <div
                                        className={cx('increase')}
                                        onClick={() => {
                                            setNumberCart(numberCart + 1);
                                        }}
                                        htmlFor={'quantity'}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                </div>
                                <button
                                    className={cx('btn-addToCart')}
                                    onClick={() => {
                                        toast.success('add a product in cart success!');
                                    }}
                                >
                                    add to cart
                                </button>
                            </div>
                        </from>

                        <div className={cx('meta-info')}>
                            <div className={cx('meta-item')}>
                                <label>sku: </label>
                                <span>{data.sku || `N / A`}</span>
                            </div>
                            <div className={cx('meta-item')}>
                                <label>Categories: </label>
                                <span>{data.Categories || `Casual & Urban Wear, Jackets, Men`}</span>
                            </div>
                            <div className={cx('meta-item')}>
                                <label>Tags: </label>
                                <span>{data.tag || `biker, black, bomber, leather`}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('details-tab')}>
                    <ul className={cx('nav-tabs')}>
                        <li className={cx('nav-item')}>
                            <a
                                className={
                                    toggle === 'tab-description' ? cx('nav-link', 'active-nav-tab') : cx('nav-link')
                                }
                                onClick={() => {
                                    handelChangeTab('tab-description');
                                }}
                            >
                                Description
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a
                                className={
                                    toggle === 'tab-additional-info' ? cx('nav-link', 'active-nav-tab') : cx('nav-link')
                                }
                                onClick={() => {
                                    handelChangeTab('tab-additional-info');
                                }}
                            >
                                additional information
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a
                                className={toggle === 'tab-reviews' ? cx('nav-link', 'active-nav-tab') : cx('nav-link')}
                                onClick={() => {
                                    handelChangeTab('tab-reviews');
                                }}
                            >
                                reviews ({numberReviews})
                            </a>
                        </li>
                    </ul>

                    <div className={cx('tab-content')}>
                        <div
                            className={
                                toggle === 'tab-description' ? cx('tab-pane', 'show') : cx('display-none', 'fade')
                            }
                            id="tab-description"
                        >
                            <div className={cx('description')}>
                                <h3 className="block-title mb-4" style={{ fontSize: '1rem' }}>
                                    {data.title || `Sed do eiusmod tempor incididunt ut labore`}
                                </h3>
                                <p className={cx('content')}>
                                    {data.description ||
                                        `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 className={cx('block-title')}>Why choose product?</h3>
                                    <ul className={cx('text-list')}>
                                        <li>Creat by cotton fibric with soft and smooth</li>
                                        <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                        <li>Downloadable/Digital Products, Virtual Products</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <h3 className={cx('block-title')}>Sample Number List</h3>
                                    <ol className={cx('text-list')}>
                                        <li>Create Store-specific attrittbutes on the fly</li>
                                        <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                        <li>Downloadable/Digital Products, Virtual Products</li>
                                    </ol>
                                </div>
                            </div>

                            <h3 className={cx('block-title')}>Lining</h3>
                            <p className={cx('content')}>100% Polyester, Main: 100% Polyester.</p>
                        </div>

                        <div
                            className={
                                toggle === 'tab-additional-info' ? cx('tab-pane', 'show') : cx('display-none', 'fade')
                            }
                            id="tab-additional-info"
                        >
                            <div className={cx('additional-info')}>
                                <div className={cx('item')}>
                                    <label className="h6">Weight</label>
                                    <span>1.25 kg</span>
                                </div>
                                <div className={cx('item')}>
                                    <label className="h6">Dimensions</label>
                                    <span>90 x 60 x 90 cm</span>
                                </div>
                                <div className={cx('item')}>
                                    <label className="h6">Size</label>
                                    <span>XS, S, M, L, XL</span>
                                </div>
                                <div className={cx('item')}>
                                    <label className="h6">Color</label>
                                    <span>Black, Orange, White</span>
                                </div>
                                <div className={cx('item')}>
                                    <label className="h6">Storage</label>
                                    <span>Relaxed fit shirt-style dress with a rugged</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className={toggle === 'tab-reviews' ? cx('tab-pane', 'show') : cx('display-none', 'fade')}
                            id="tab-reviews"
                        >
                            <h2 className={cx('review-title')}>Reviews</h2>
                            <div className={cx('review-list')}>
                                <div className={cx('review-item')}>
                                    <div className={cx('customer-avatar')}>
                                        <Image
                                            src={data.avatar ? data.avatar : '/avatarDefault.png'}
                                            width={60}
                                            height={60}
                                            alt="avatar"
                                        />
                                    </div>

                                    <div className={cx('customer-review')}>
                                        <div className={cx('customer-name')}>
                                            <h6>{data.nameCustomer ? data.nameCustomer : 'Janice Miller'}</h6>
                                        </div>

                                        <div className={cx('review-date')}>April 06, 2023</div>

                                        <div className={cx('review-text')}>
                                            <p>
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                                assumenda est…
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('review-item')}>
                                    <div className={cx('customer-avatar')}>
                                        <Image
                                            src={data.avatar ? data.avatar : '/avatarDefault.png'}
                                            width={60}
                                            height={60}
                                            alt="avatar"
                                        />
                                    </div>

                                    <div className={cx('customer-review')}>
                                        <div className={cx('customer-name')}>
                                            <h6>{data.nameCustomer ? data.nameCustomer : 'Janice Miller'}</h6>
                                        </div>

                                        <div className={cx('review-date')}>April 06, 2023</div>

                                        <div className={cx('review-text')}>
                                            <p>
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                                assumenda est…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('review-item')}>
                                    <div className={cx('customer-avatar')}>
                                        <Image
                                            src={data.avatar ? data.avatar : '/avatarDefault.png'}
                                            width={60}
                                            height={60}
                                            alt="avatar"
                                        />
                                    </div>

                                    <div className={cx('customer-review')}>
                                        <div className={cx('customer-name')}>
                                            <h6>{data.nameCustomer ? data.nameCustomer : 'Janice Miller'}</h6>
                                        </div>

                                        <div className={cx('review-date')}>April 06, 2023</div>

                                        <div className={cx('review-text')}>
                                            <p>
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                                assumenda est…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('review-form')}>
                                <form method="POST">
                                    <h5>Be the first to review “Message Cotton T-Shirt”</h5>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <div className="mb-4" style={{ minHeight: 'auto' }}>
                                        <textarea
                                            className="form-control form-control_gray"
                                            placeholder="Your Review"
                                            style={{ height: '100%' }}
                                        />
                                    </div>
                                    <div className="form-label-fixed mb-4" style={{ position: 'relative' }}>
                                        <label className={cx('form-label')}>Name *</label>
                                        <input className={'form-control form-control-md form-control_gray'} />
                                    </div>
                                    <div className="form-label-fixed mb-4" style={{ position: 'relative' }}>
                                        <label className={cx('form-label')}>Email *</label>
                                        <input
                                            className={'form-control form-control-md form-control_gray'}
                                            type="email"
                                        />
                                    </div>

                                    <div
                                        className="form-check mb-4"
                                        style={{ paddingLeft: '0px', display: 'flex', alignItems: 'center' }}
                                    >
                                        <input className={cx('form-check-input')} type="checkbox" />
                                        <label className={cx('form-check-label')}>
                                            Save my name, email, and website in this browser for the next time I
                                            comment.
                                        </label>
                                    </div>

                                    <div className="form-action">
                                        <Button
                                            className={'default'}
                                            width={'200px'}
                                            tittle={'SUBMIT'}
                                            onClickCustom={() => {
                                                toast.success('submit your review success!');
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={cx('product-carousel')}>
                <h2 className={cx('title-product-carousel')}>
                    Related <strong>products</strong>
                </h2>

                <div className={cx('relates-product')}>
                    <RelateProductsSlider />
                </div>
            </section>
        </div>
    );
}

export default ProductPage;
