import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  discountPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, price, discountPrice }) => {
  return (
    <div className="product-card bg-white p-4 rounded-lg shadow-md">
      <Image src={image} alt={name} width={300} height={300} className="rounded-lg" />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-center mt-2">
          {discountPrice && <span className="text-red-500 mr-2">{discountPrice}</span>}
          <span className={discountPrice ? 'line-through text-gray-500' : 'text-black'}>{price}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
