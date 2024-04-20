'use client';

import React from 'react';
import Image from 'next/image';

const GoogleAuthButton = () => {

    const handleGoogleAuth = async () => {
        try {
            const response = await fetch('http://localhost:8000/auth/login');
            const data = await response.json();
            window.location.href = data.login_url;
        } catch (error) {
            console.error('Error during Google authentication:', error);
        }
    };

    return (
        <button
            onClick={handleGoogleAuth}
            className="flex shadow-auth gap-[2rem] px-[3rem] py-[1rem] rounded-x mx-auto">
            <Image src="/Google.svg" width={60} height={60} quality={100} alt="google.com" />
            <p className="transition-all text-[2.8rem] uppercase font-bold text-black text-start hover:text-orange">
                Войти через <br /> Google
            </p>
        </button>
    );
};

export default GoogleAuthButton;
