import classNames from 'classnames/bind';

import styles from './contactPage.module.scss';
import SimpleMap from '@/components/map/googleMap';

const cx = classNames.bind(styles);

function ContactPage() {
    return (
        <>
            <div className="mb-4 pb-4" />
            <section className={cx('container', 'contactUs')}>
                <div className={cx('mw-930')}>
                    <h2 className={cx('page-title')}>contact us</h2>
                </div>
            </section>
            <section className={cx('google-map', 'mb-5')}>
                <SimpleMap />
            </section>
        </>
    );
}

export default ContactPage;
