'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'sonner';
import axios from 'axios';

import InputComponent from '@/components/input/original';
import Button from '@/components/button/default';
import { GlobalBackEndURL } from '@/configs/axios';

import styles from './registerPage.scss';

const cx = classNames.bind(styles);

function RegisterPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [validPassword, setValidPassword] = useState(true);

    const handelOnChangeUsername = (e) => {
        setUserName(e.target.value);
    };

    const handelOnChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handelOnchangeEmail = (e) => {
        setEmail(e.target.value);
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
            } else {
                toast.success('Login successfully!');
            }
        } else {
            if (!email) {
                toast.error('please enter you email!');
            } else if (!password) {
                toast.error('please enter your password!');
            }
        }
        return axios
            .post(GlobalBackEndURL, {
                username: userName,
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('label-form')}>
                    <h3 className={cx('label')}>register</h3>
                </div>
                <div className={cx('input-wrapper')}>
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
                </div>

                <Button tittle={'register'} width={'500px'} onClickCustom={handleRegister} />
            </div>
        </div>
    );
}

export default RegisterPage;
