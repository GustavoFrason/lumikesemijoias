import React from 'react';

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      image: '/images/brincos/prata/022806509050_03.jpg', // Substitua pelo caminho correto
      title: 'Brincos',
      buttonText: 'Ver Modelos',
    },
    {
      id: 2,
      image: '/images/colar/050779506_02.jpg', // Substitua pelo caminho correto
      title: 'Colares',
      buttonText: 'Ver Modelos',
    },
    {
        id: 3,
        image: '/images/pulseira/050942506024_02.jpg', // Substitua pelo caminho correto
        title: 'Pulseiras',
        buttonText: 'Ver Modelos',
      },
      {
        id: 4,
        image: '/images/Anel/010001809015_02.jpg', // Substitua pelo caminho correto
        title: 'Anel',
        buttonText: 'Ver Modelos',
      },
  ];

  return (
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
    {categories.map((category) => (
      <div
        key={category.id}
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
      >
        {/* Imagem */}
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-[400px] object-cover"
        />
        
        {/* Conteúdo do Cartão */}
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end items-center text-center p-6">
          {/* Título */}
          <h2 className="text-white text-3xl font-bold mb-4">{category.title}</h2>
          
          {/* Botão */}
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
            {category.buttonText}
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default CategoryCards;
