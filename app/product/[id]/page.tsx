import React from 'react';

interface IProductPageProps {
  className?: string;
  params: {
    id: string;
  };
}

export default function ProductPage({ className, params }: IProductPageProps) {
  return <div className={className}>Product {params.id}</div>;
}
