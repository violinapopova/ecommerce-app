import React, { FC } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialMediaProps {
    className?: string;
    iconClassName?: string;
    tooltipClassname?: string;
}

const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com",
        icon: <Youtube className="w-5 h-5" />,
    },
    {
        title: "Github",
        href: "https://www.youtube.com/",
        icon: <Github className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        href: "https://www.youtube.com/",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        title: "Facebook",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        title: "Slack",
        href: "https://www.youtube.com/",
        icon: <Slack className="w-5 h-5" />,
    },
];

const SocialMedia: FC<SocialMediaProps> = ({ className, iconClassName, tooltipClassname }) => {
    return (
        <TooltipProvider>
            <div className={cn('flex items-center gap-3.5', className)} >

                {socialLink.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <Link 
                                href={item?.href} 
                                target='_blank' rel='noopener noreferrer' 
                                className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect",
                                iconClassName)}>
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent 
                            className={cn('bg-white text-darkColor font-semibold', tooltipClassname)}>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}


            </div>
        </TooltipProvider>
    )
}

export default SocialMedia;
