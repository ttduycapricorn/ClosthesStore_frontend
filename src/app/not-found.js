/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';

import styles from './not-found.module.scss';

import { ImgScarecrow } from '../../public/Scarecrow.png';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(styles);

function NotFoundCustom() {
    return (
        <div className={cx('display')}>
            <div className={cx('display__img')}>
                <Image src="/Scarecrow.png" width={200} height={400} alt="not found 404" />
            </div>
            <div className={cx('display__content')}>
                <h2 className={cx('display__content--info')}>I have bad news for you</h2>
                <p className={cx('display__content--text')}>
                    The page you are looking for might be removed or is temporarily unavailable
                </p>
                <Link className={cx('btn')} href={'./'}>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
}

export default NotFoundCustom;
