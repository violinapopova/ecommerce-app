import { requiredUser } from '@/hooks/requiredUser';
import React from 'react'

const OrdersPage = async () => {
    await requiredUser();
    
    return (
        <div>
            Orders Page
        </div>
    )
}

export default OrdersPage;
