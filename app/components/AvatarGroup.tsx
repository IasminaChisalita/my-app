"use client";

import { User } from "@prisma/client";

interface AvatarGroupProps {
    users?: User[]
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
    users =[]
}) => {
    const slicedUsers = users.slice(0,3);

    const positionMap = {
        0: 'top-0 left-[12px]',
        1: 'bottom-0',
        2: 'bottom-0 right-0'
    };

    return (
        <div>
            Avatar Group
        </div>
    );
}

export default AvatarGroup;