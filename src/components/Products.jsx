import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  return (
    {/*<div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">{t('topOffers')}</h1>
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="w-full shadow-md"
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  className="w-full h-56 object-contain p-4 bg-white rounded-md"
                />
              }
            >
              <Meta
                title={<span className="font-semibold text-gray-800">{product.name}</span>}
                description={
                  <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                }
              />
              <div className="flex justify-center gap-6 mt-4">
                <Heart className="text-red-500 hover:scale-110 transition-transform cursor-pointer" />
                <ShoppingCart className="text-green-500 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>*/}
  );
};

export default Products;