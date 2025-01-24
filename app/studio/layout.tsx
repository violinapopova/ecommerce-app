import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Ecommerce Backend',
    description: 'generated by nextjs, clerk, sanity, tailwindcss, typescript',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
