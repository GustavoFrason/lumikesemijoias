import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Kits = () => {
  const products = [
    {
      id: 1,
      image: '/images/brincos/prata/prata4.jpg',
      name: 'Conjunto de Colar e Brincos de Coração Vazado com Ponto de Luz folheado em ouro 18k',
      priceOld: 'R$ 159,90',
      priceNew: 'R$ 79,90',
      installments: '6x de R$ 13,32',
      discount: '50% OFF',
      rating: 0,
    },
    {
      id: 2,
      image: '/images/brincos/prata/prata4.jpg',
      name: 'Conjunto de Colar e Brincos de Gato com Zircônia folheado em ouro 18k',
      priceOld: 'R$ 159,90',
      priceNew: 'R$ 79,90',
      installments: '6x de R$ 13,32',
      discount: '50% OFF',
      rating: 4,
    },
    {
      id: 3,
      image: '/images/brincos/prata/prata4.jpg',
      name: 'Conjunto de Colar e Brincos de Concha do Mar Cravejada folheado em ouro 18k',
      priceOld: 'R$ 159,90',
      priceNew: 'R$ 79,90',
      installments: '6x de R$ 13,32',
      discount: '50% OFF',
      rating: 0,
    },
    {
      id: 4,
      image: '/images/brincos/prata/prata4.jpg',
      name: 'Conjunto de Colar e Brincos de Estrela do Mar Cravejada folheado em ouro 18k',
      priceOld: 'R$ 159,90',
      priceNew: 'R$ 79,90',
      installments: '6x de R$ 13,32',
      discount: '50% OFF',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">MAIS VENDIDOS</h2>
        <p className="text-gray-500 mb-6">Conjunto de Colar e Brincos</p>
        <Swiper
          spaceBetween={15} // Espaçamento entre os slides
          slidesPerView={1} // Quantos slides por vez
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Lançamento
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-700">{product.name}</h3>
                <div className="flex items-center mt-2">
                  {'★'.repeat(product.rating)}
                  {'☆'.repeat(5 - product.rating)}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="line-through mr-2">{product.priceOld}</span>
                  <span className="text-green-600 font-bold">{product.priceNew}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{product.installments} sem juros</p>
                <button className="mt-4 bg-green-500 text-white text-sm font-bold py-2 rounded hover:bg-green-600 transition">
                  COMPRE JÁ
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Kits;
