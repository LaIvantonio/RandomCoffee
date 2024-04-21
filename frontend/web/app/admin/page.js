'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const RootPage = () => {
    const router = useRouter();

    React.useEffect(() => {
        router.push('/admin/matches');
    }, [router]);
    return (
        <Image
            className="mx-auto my-[25vh] rotating-logo"
            src="/circle-logo.png"
            width={300}
            height={300}
            quality={100}
            alt="оджетто"
        />
    );
};

export default RootPage;
