'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';

import InputComponent from '@/components/input';
import Button from '@/components/button/default';

import styles from './registerPage.scss';

const cx = classNames.bind(styles);

function RegisterPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [validUsername, setValidUsername] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validEmail, setValidEmail] = useState(true);

    const handelOnChangeUsername = (e) => {
        setUserName(e.target.value);
    };

    const handelOnChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handelOnchangeEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('label-form')}>
                    <h3 className={cx('label')}>register</h3>
                </div>
                <div className={cx('input-wrapper')}>
                    <InputComponent
                        classNameCustom={validUsername === true ? 'default' : 'ErrorInput'}
                        title={'Enter user name'}
                        type={'text'}
                        value={userName}
                        onChange={handelOnChangeUsername}
                        placeholder={'Enter your user name*'}
                    />
                </div>
                <div className={cx('input-wrapper')}>
                    <InputComponent
                        classNameCustom={validEmail === true ? 'default' : 'ErrorInput'}
                        title={'Enter email'}
                        type={'email'}
                        value={email}
                        onChange={handelOnchangeEmail}
                        placeholder={'Enter your email*'}
                    />
                </div>

                <div className={cx('input-wrapper')}>
                    <InputComponent
                        classNameCustom={validPassword === true ? 'default' : 'ErrorInput'}
                        title={'Enter password'}
                        type={'password'}
                        value={password}
                        onChange={handelOnChangePassword}
                        placeholder={'Enter your password*'}
                    />
                </div>

                <Button tittle={'register'} width={'500px'} />
            </div>
        </div>
    );
}

export default RegisterPage;
