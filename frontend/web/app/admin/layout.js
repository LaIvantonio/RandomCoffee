import React from 'react';
import Link from 'next/link';

const RootLayout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <nav className="block fixed left-1/2 -translate-x-1/2 bottom-[2rem] shadow-auth rounded-xl p-[1rem]">
                <ul className="flex justify-center items-center gap-[1rem]">
                    <li>
                        <Link
                            href="#"
                            className="block text-[2rem] bg-yellow rounded-x p-[1rem] hover:text-white">
                            Встречи
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="block text-[2rem] bg-yellow rounded-x p-[1rem] hover:text-white">
                            Пользователи
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default RootLayout;
