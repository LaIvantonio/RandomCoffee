'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RootLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <header className="flex justify-between items-center py-[1rem] mx-[10%] border-b">
                <Link className="text-[2.4rem] font-bold cursor-pointer flex-1" href={'/home'}>Random Coffee ☕</Link>
                <div className="flex justify-end items-center gap-[2rem] flex-1">
                    <Link href="/home/profile" className="text-blue text-[2.4rem] hover:underline">
                        Анкета
                    </Link>
                    <p className="text-[3.6rem] cursor-default">🧑‍💻</p>
                </div>
            </header>
            <main className="mx-[10%] flex-grow flex justify-center items-center">{children}</main>
            <footer className="flex justify-center items-center py-[1rem] px-[10%] bg-black">
                <Image
                    className="rotating-logo"
                    src="/circle-logo.png"
                    width={80}
                    height={80}
                    quality={100}
                    alt="оджетто"
                />
                <h2 className="text-[3.8rem] text-white font-bold cursor-default">oggetto</h2>
            </footer>
        </div>
    );
};

export default RootLayout;
