import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import products from '../utils/product.json'

const Highlights = () => {
  const whatsappNumber = '5541991493618';

 /*  const products = [
    {
      id: 1,
      images: [
        '/images/destaqueSemana/022794006000_02.jpg',
        '/images/destaqueSemana/022794006000.jpg',
      ],
      name: 'Brinco 2 em 1 Banho Dourado com Pedra Branca e Pêndulo Gota 4x7mm',
      discount: '27% OFF',
      priceOld: 'R$ 199,90',
      priceNew: 'R$ 144,90',
      installments: '6x de R$ 24,15',
      rating: 4,
    },
    {
      id: 2,
      images: [
        '/images/destaqueSemana/022981506000_02.jpg',
        '/images/destaqueSemana/022981506000.jpg',
      ],
      name: 'Brinco Meia Argola Lisa Dourada Classica 24x6mm',
      discount: '60% OFF',
      priceOld: 'R$ 199,90',
      priceNew: 'R$ 144,90',
      installments: '6x de R$ 24,15',
      rating: 5,
    },
    {
      id: 3,
      images: [
        '/images/destaqueSemana/023108406015_02.jpg',
        '/images/destaqueSemana/023108406015.jpg',
      ],
      name: 'Brinco Botão Zircônia Redondo Dourado 8mm',
      discount: '25% OFF',
      priceOld: 'R$ 79,90',
      priceNew: 'R$ 59,90',
      installments: '6x de R$ 9,98',
      rating: 5,
    },
    {
      id: 4,
      images: [
        '/images/destaqueSemana/023424006024_02.jpg',
        '/images/destaqueSemana/023424006024.jpg',
      ],
      name: 'Brinco Médio Ametista Retangular com Zircônia Dourado 19x14mm',
      discount: '60% OFF',
      priceOld: 'R$ 199,90',
      priceNew: 'R$ 159,00',
      installments: '6x de R$ 16,65',
      rating: 5,
    },
  ]; */

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-thin text-center mb-2"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          DESTAQUES DA SEMANA
        </h2>
        <p className="text-center text-gray-500 mb-8">Confira os mais vendidos !!</p>
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true, 
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px] h-[500px] mx-auto flex flex-col">
                <div className="relative h-[350px] w-full">
                  {/* Carrossel interno para imagens do produto */}
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={7}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    className="h-full"
                  >
                    {product.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`${product.name} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-sm font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="line-through mr-2">{product.priceOld}</span>
                    <span className="text-green-600 font-bold">{product.priceNew}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{product.installments} sem juros</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Olá, gostaria de saber mais sobre o ${product.name}!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-green-500 text-white text-sm font-bold py-2 rounded block text-center hover:bg-green-600"
                  >
                    VERIFICAR DISPONIBILIDADE
                  </a>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Highlights;
