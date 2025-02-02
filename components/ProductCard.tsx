import { Product } from '@/sanity.types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }: { product: Product }) => {
    console.log(product);
    return (
        <div className="group text-sm rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative">
                {product?.images && (
                    <Link href={`/products`}>
                        <Image
                            src={urlFor(product?.images[0]).url()}
                            width={500}
                            height={500}
                            alt={"productImage"}
                            priority
                            className={`w-full h-72 object-contain overflow-hidden hoverEffect ${product?.stock !== 0 && "group-hover:scale-105"}`}
                        />
                    </Link>
                )}
            </div>
            <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
                <h2 className="font-semibold line-clamp-1">{product?.name}</h2>
                <p>{product?.intro}</p>
                <PriceView
                    className="text-lg"
                    price={product?.price}
                    discount={product?.discount}
                />
                <AddToCartButton product={product} />
            </div>
        </div>
    )
}

export default ProductCard;
