import React from 'react';
import { FaStore, FaCreditCard, FaTag, FaTruck, FaCertificate } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCreditCard size={32} />,
      title: 'PARCELAMENTO',
      description: 'Parcele em até 6x sem juros',
    },
    {
      icon: <FaTag size={32} />,
      title: 'PEDIDOS',
      description: 'Pedido mínimo de R$ 500,00',
    },
    {
      icon: <FaTruck size={32} />,
      title: 'FRETE GRÁTIS',
      description: 'A partir de R$ 1.499,00 para todo Brasil',
    },
    {
      icon: <FaCertificate size={32} />,
      title: '1 ANO DE GARANTIA',
      description: 'Em peças banhadas',
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4" // Adiciona espaçamento vertical entre os itens
          >
            <div className="text-primary mb-2">{feature.icon}</div>
            <h3 className="font-bold text-gray-700">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
