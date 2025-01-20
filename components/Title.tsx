import { cn } from '@/lib/utils';
import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <div>
        <h2 className={cn('text-2xl font-semibold', className)}>{children}</h2>
    </div>
  )
}

export default Title