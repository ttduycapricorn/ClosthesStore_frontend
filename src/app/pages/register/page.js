'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'sonner';
import axios from 'axios';

import Button from '@/components/button/default';
import { GlobalBackEndURL } from '@/configs/axios';
import InputOriginNal from '@/components/input/original';

import styles from './registerPage.scss';

const cx = classNames.bind(styles);

function RegisterPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [validPassword, setValidPassword] = useState(true);

    const handelOnChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handelOnchangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const isValidEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    const handleRegister = () => {
        if (email && password) {
            if (!isValidEmail(email)) {
                toast.error('email in valid!');
                return;
            } else if (confirmPassword !== password) {
                toast.error(`confirm password don't match with password`);
                return;
            } else {
                toast.success('Register successfully!');
                return;
            }
        } else {
            if (!email) {
                toast.error('please enter your email!');
                return;
            } else if (!password) {
                toast.error('please enter your password!');
                return;
            } else if (confirmPassword !== password) {
                toast.error(`Conform password don't match with password!`);
                return;
            }
        }
        return axios
            .post(`${GlobalBackEndURL}/users/register`, {
                username: userName,
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <div className={cx('container', 'login-register')} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className={cx('mb-4 pb-4')} />
            <h3 className={cx('label')}>register</h3>
            {/* <div className={cx('input-wrapper')}>
                    <InputComponent
                        classNameCustom={'default'}
                        title={'Enter user name'}
                        type={'text'}
                        value={userName}
                        onChange={handelOnChangeUsername}
                        placeholder={'Enter your username*'}
                    />
                </div>
                <div className={cx('input-wrapper')}>
                    <InputComponent
                        classNameCustom={'default'}
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
                </div> */}

            <InputOriginNal
                label={'User name or email address *'}
                type={'email'}
                value={email}
                onChange={(e) => {
                    handelOnchangeEmail(e);
                }}
            />
            <div className="pb-3" />
            <InputOriginNal
                label={'Password *'}
                type={'password'}
                value={password}
                onChange={(e) => {
                    handelOnChangePassword(e);
                }}
            />
            <div className="pb-3" />
            <InputOriginNal
                label={'Confirm Password *'}
                type={'password'}
                value={confirmPassword}
                onChange={(e) => {
                    handleConfirmPassword(e);
                }}
            />

            <div className={cx('d-flex algin-items-center mb-3 pb-2')}>
                <p className={cx('m-0')}>
                    Your personal data will be used to support your experience throughout this website, to manage access
                    to your account, and for other purposes described in our privacy policy.
                </p>
            </div>

            <Button tittle={'register'} width={'500px'} onClickCustom={handleRegister} />
        </div>
    );
}

export default RegisterPage;
