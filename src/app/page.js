/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';

import Button from '@/components/button';
import MultipleItems from '@/sliders/simpleSlider';
import BrandsSlider from '@/sliders/brandsSlider';
import MostPopularSlider from '@/sliders/sliderProductMostPopular';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
    return (
        <div className="wrapper">
            <div className={cx('Image1')}>
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
            </section>
        </div>
    );
}
