'use client';

import Image from 'next/image';
import avatar from '../../public/images/placeholder/avatar.jpg';

const Avatar = () => {
    return (
        <Image
            className="rounded-full"
            alt="Avatar"
            height='30'
            width="30"
            src={avatar}
            priority={true}
        />
    );
}

export default Avatar;
