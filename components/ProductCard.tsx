import { Product } from '@/sanity.types';
import React from 'react';

interface ProductCardProps {
    product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div>
            ProductCard
        </div>
    )
}

export default ProductCard;
