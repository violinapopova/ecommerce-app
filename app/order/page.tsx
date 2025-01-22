import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const OrdersPage = async () => {
    const user = await currentUser();
    if (!user) {
        redirect('/');
    }
    return (
        <div>
            Orders Page
        </div>
    )
}

export default OrdersPage;
