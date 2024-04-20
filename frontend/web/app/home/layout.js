'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useAuthStore from '@/store/AuthStore';

const RootLayout = ({ children }) => {
    const { setIsAuthenticated, setUserData } = useAuthStore();

    React.useEffect(() => {
        const token = localStorage.getItem('authToken') || getCookie('authToken');

        if (token) {
            // Если токен существует, отправляем запрос на API-endpoint FastAPI для проверки токена и получения данных пользователя
            fetch('/api/auth/verify', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setIsAuthenticated(true);
                    setUserData(data.userData);
                })
                .catch((error) => {
                    console.error('Ошибка при проверке токена авторизации:', error);
                });
        }
    }, [setIsAuthenticated, setUserData]);

    return (
        <>
            <header>
                <h1>Random Coffee ☕</h1>
                <Image
                    src="/ogetto-logo.png"
                    width={200}
                    height={200}
                    quality={100}
                    alt="оджетто"
                />
                <div>
                    <Link href="home/profile">✏️ Анкета</Link>
                    <div></div>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
};

export default RootLayout;
