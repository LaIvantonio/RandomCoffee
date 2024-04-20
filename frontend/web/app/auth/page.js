import React from 'react';
import Image from 'next/image';

import GoogleAuthButton from '@/components/GoogleAuthButton';

const page = () => {
    return (
        <div className="relative w-[100%] h-[100vh] bg-gradient">
            <div className="bg-white inline-block top-[50%] absolute-center rounded-xl shadow-default px-[5rem] pb-[5rem]">
                <Image
                    className="mx-auto rotating-logo"
                    src="/circle-logo.png"
                    width={300}
                    height={300}
                    quality={100}
                    alt="оджетто"
                />
                <GoogleAuthButton />
				<div className='h-[.1rem] w-[100%] bg-gray mt-[3rem] mx-auto'/>
				<p className='text-wrap mt-[2rem] text-[1.6rem] text-center'>Если у тебя возникли проблемы с авторизацией, обязательно <br /> свяжись с администратором</p>
            </div>
        </div>
    );
};

export default page;
