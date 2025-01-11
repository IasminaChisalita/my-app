'use client';

import clsx from "clsx";
import { group } from "console";
import { Smokum } from "next/font/google";
import Link from "next/link";
import { GiFlexibleLamp } from "react-icons/gi";
import { Md10K } from "react-icons/md";

interface DesktopItemProps {
    label: string;
    icon:any;
    href:string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
 label,
 icon: Icon, 
 href,
 onClick,
 active
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };

    return (
        <li onClick={handleClick}>
            <Link 
            href={href}
            className={clsx(`
                group
                flex
                gap-x-3
                rounded-md
                p-3
                text-sm
                leading-6
                font-semibold
                text-gray-500
                hover:text-black
                hover:bg-gray-100
                `,
                active && 'bg-gray-100 text-black'
            )}
            >
            <Icon className="h-6 w-6 shrink-0" />
            <span className="sr-only">{label}</span>
            </Link>
        </li>
    );
}

export default DesktopItem;