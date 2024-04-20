'use client';

import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/AuthStore';

const GoogleAuthButton = () => {
    const router = useRouter();
    const { setIsAuthenticated, setUserData } = useAuthStore();

    const handleGoogleLogin = async () => {
        try {
            const response = await fetch('/api/auth/google');
            const data = await response.json();

            window.location.href = data.authUrl;
        } catch (error) {
            console.error('Ошибка при инициировании авторизации через Google:', error);
        }
    };

    React.useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');

        if (code) {
            // Отправляем код авторизации на API для получения токена и данных пользователя
            fetch('/api/auth/callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('authToken', data.token);

                    setIsAuthenticated(true);
                    setUserData(data.userData);
                    router.push('/home'); // Перенаправляем на главную страницу после успешной авторизации
                })
                .catch((error) => {
                    console.error('Ошибка при обработке авторизации через Google:', error);
                });
        }
    }, [router, setIsAuthenticated, setUserData]);

    return (
        <button
            onClick={handleGoogleLogin}
            className="flex shadow-auth gap-[2rem] px-[3rem] py-[1rem] rounded-x mx-auto">
            <Image src="/Google.svg" width={60} height={60} quality={100} alt="google.com" />
            <p className="transition-all text-[2.8rem] uppercase font-bold text-black text-start hover:text-orange">
                Войти через <br /> Google
            </p>
        </button>
    );
};

export default GoogleAuthButton;
