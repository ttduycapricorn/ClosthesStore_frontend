import classNames from 'classnames/bind';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import styles from './SearchModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { toast } from 'sonner';

const cx = classNames.bind(styles);

const menuItems = [
    {
        title: 'New Arrivals',
        link: './',
    },
    {
        title: 'Dresses',
        link: './',
    },
    {
        title: 'Accessories',
        link: './',
    },
    {
        title: 'Foot ware',
        link: './',
    },
    {
        title: 'Sweatshirt',
        link: './',
    },
];

function ModalSearch({ content }) {
    const [show, setShow] = useState(false);
    const [SearchData, setSearchData] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>{content}</div>
            <Modal
                className={cx('wrapper')}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className={cx('title-search')}>What are you looking for?</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="position-relative">
                        <form>
                            <div className="position-relative">
                                <input
                                    className={cx('search-input-popup')}
                                    type="text"
                                    placeholder="Search products"
                                    value={SearchData}
                                    onChange={(e) => {
                                        setSearchData(e.target.value);
                                    }}
                                />
                                <div
                                    className={cx('icon')}
                                    onClick={() => {
                                        if (SearchData === '') {
                                            toast.error('please insert what do you want to search!');
                                        } else {
                                            toast.success('Search ' + `"` + SearchData + `"` + ' successful!');
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </div>
                            <div className={cx('result')}>
                                <div className={cx('sub-menu')}>
                                    <h6 className={cx('title')}>Quicklinks</h6>
                                    <ul className={cx('list-unstyled')}>
                                        {menuItems.map((item, index) => {
                                            return (
                                                <li className={cx('item-menu')} key={index}>
                                                    <Link href={item.link}>{item.title}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalSearch;
