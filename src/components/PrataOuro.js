import React from 'react';
import { Link } from 'react-router-dom';

const PrataOuro = () => {
  const cards = [
    {
      image: '/images/comSemBrilho/com/023108406015_02.jpg', // Substitua pelo caminho correto
      title: 'Com Brilho',
      buttonText: 'CONFIRA',
      route: '/acessorios-prata',
    },
    {
      image: '/images/comSemBrilho/sem/022867506000_02.jpg', // Substitua pelo caminho correto
      title: 'Acessórios em ouro',
      buttonText: 'CONFIRAa',
      route: '/acessorios-ouro',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-5xl font-bold text-center mb-2">COM OU SEM BRILHO?</h2>
      <br />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[500px] object-cover" // Aumenta a altura do card
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end items-center p-6">
              <h3 className="text-white text-lg font-bold mb-2">{card.title}</h3>
              <Link to={card.route}>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition">
                  {card.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrataOuro;
