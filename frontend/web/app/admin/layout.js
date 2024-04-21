import React from 'react';
import Link from 'next/link';

const RootLayout = ({ children }) => {
    return (
        <>
            <Link href="/auth" className="block text-blue text-[2rem] hover:underline text-end absolute right-[2rem] top-[1rem]">
                Выйти
            </Link>
            <main className="mx-[10%] flex-grow flex flex-col justify-center items-center">
                {children}
            </main>
            <nav className="block fixed left-1/2 -translate-x-1/2 bottom-[2rem] shadow-auth rounded-xl p-[1rem] bg-white">
                <ul className="flex justify-center items-center gap-[1rem]">
                    <li>
                        <Link
                            href="/admin/matches"
                            className="block text-[2rem] bg-yellow rounded-x p-[1rem] hover:text-white">
                            Встречи
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin/users"
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
