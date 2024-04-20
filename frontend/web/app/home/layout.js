'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RootLayout = ({ children }) => {
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
