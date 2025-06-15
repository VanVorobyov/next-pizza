import React from 'react';

interface IProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<IProductPageProps> = ({ params }) => {
  return <div>Product {params.id}</div>;
};

export default ProductPage;
