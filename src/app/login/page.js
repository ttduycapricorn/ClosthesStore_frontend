'use client';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { toast } from 'sonner';
import { useState } from 'react';

import Button from '@/components/button';
import InputComponent from '@/components/input/iconic';

import styles from './loginPage.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validUsername, setValidUsername] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const handelOnChangeUsername = (e) => {
        setUserName(e.target.value);
    };

    const handelOnChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handelSubmitLogin = () => {
        var EMAIL_REGEX = /(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i;

        var valueEmail = EMAIL_REGEX.test(userName);

        if (valueEmail === false) {
            setValidUsername(false);
            toast.error('Your Email not correct valid');
        } else if (userName === '') {
            setValidUsername(false);
            setValidPassword(true);
            toast.error('Please Enter your user name!');
        } else if (password === '') {
            setValidPassword(false);
            setValidUsername(true);
            toast.error('Please enter you password!');
        } else {
            setValidPassword(true);
            setValidUsername(true);
            toast.success('Login success!');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('label-form')}>
                    <h3 className={cx('label')}>login</h3>
                </div>
                <div className={cx('input-wrapper')}>
                    <InputComponent
                        classNameCustom={validUsername === true ? 'default' : 'ErrorInput'}
                        title={'Enter email'}
                        type={'email'}
                        value={userName}
                        onChange={handelOnChangeUsername}
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

                <div className={cx('check-remember-and-lostPassword')}>
                    <div className={cx('form-check')}>
                        <input className={cx('form-check-input')} type="checkbox" name="remember" />
                        <label className={cx('label-form-check')}>remember me?</label>
                    </div>

                    <div className={cx('lostPassword')}>
                        <Link href={'/'}>Lost Password?</Link>
                    </div>
                </div>

                <Button tittle={'submit'} width={'500px'} onClickCustom={handelSubmitLogin} />
            </div>
        </div>
    );
}

export default LoginPage;
