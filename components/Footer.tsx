'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className="text-white">
            <div className="flex bg-[#18212E] p-20 justify-between">
                <div className="flex gap-20">
                    <h1 className="font-snell text-5xl pl-6">Artful</h1>
                    <ul className="font-sans text-lg font-bold flex gap-10 items-center">
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="flex gap-10">
                    <Link href="https://www.facebook.com/people/Visit-Artful/61561640190416/">
                        <Image alt="facebook logo" src={'/FB.svg'} width={32} height={32} />
                    </Link>
                    <Link href="https://x.com/visitartful">
                        <Image
                            alt="twitter logo"
                            src={'/Twitter.svg'}
                            width={32}
                            height={32}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/visitartful/">
                        <Image alt="instagram logo" src={'/IG.svg'} width={32} height={32} />
                    </Link>
                </div>
            </div>
            <div className="bg-[#000000] p-8 font-sans text-center">
                <p>{`© ${year} Artful`}</p>
            </div>
        </div>
    );
};

export default Footer;
