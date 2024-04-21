'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Start() {
    const router = useRouter();

    React.useEffect(() => {
        router.push('/auth');
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
}
