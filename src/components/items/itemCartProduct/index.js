/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import styles from './itemCartProduct.module.scss';

const cx = classNames.bind(styles);

function ItemCartProduct() {
    return (
        <div className={cx('product-cart')}>
            <div className="mb-3 mb-md-4 mb-xxl-5" style={{ position: 'relative' }}>
                <div className={cx('pc_image_wrapper')}>
                    <img
                        className={cx('pc_image_1')}
                        src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct_1.jpg&w=750&q=75"
                        alt="pc_image"
                    />
                    <img
                        className={cx('pc_image_2')}
                        src="https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct_1-1.jpg&w=750&q=75"
                        alt="pc_image"
                    />
                    <button className={cx('pc-act')}>Add To Cart</button>
                </div>

                <div className={cx('pc_info')}>
                    <p className={cx('pc_category')}>Dresses</p>
                    <h6 className={cx('pc_title')}>Cropped Faux Leather Jacket</h6>
                    <div className={cx('pc_price')}>
                        <span>$29</span>
                    </div>
                    <div className={cx('pc_review')}>
                        <div className={cx('review-group')}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span className={cx('review-note')}>8k+ reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCartProduct;
