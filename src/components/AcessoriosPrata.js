import React, { useState } from 'react';

const AcessorioPrata = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para categoria selecionada
  const [maxPrice, setMaxPrice] = useState(699); // Estado para preço máximo

  const products = [
    {
      id: 1,
      image: '/images/brinco1.jpg',
      name: 'Brinco Hailey Gota Grande',
      price: 289.99,
      category: 'Brincos Ear Hook',
    },
    {
      id: 2,
      image: '/images/brinco2.jpg',
      name: 'Brinco Vanessa Flor Pérola',
      price: 189.90,
      category: 'Brincos Ear Line',
    },
    {
      id: 3,
      image: '/images/brinco3.jpg',
      name: 'Brinco Vintage Paloma',
      price: 249.90,
      category: 'Brincos de Argolas',
    },
    {
      id: 4,
      image: '/images/brinco4.jpg',
      name: 'Brinco Botão Luara',
      price: 159.90,
      category: 'Brincos de Argolas de Tubo',
    },
  ];

  const categories = [
    'Brincos Ear Hook',
    'Brincos Ear Line',
    'Brincos de Argolas',
    'Brincos de Argolas de Tubo',
  ];

  // Filtragem dos produtos com base no preço máximo e na categoria selecionada
  const filteredProducts = products.filter(
    (product) =>
      product.price <= maxPrice &&
      (selectedCategory === '' || product.category === selectedCategory)
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filtros */}
        <aside>
          <h3 className="font-bold text-gray-700 mb-4">CATEGORIA</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? '' : category
                  )
                }
                className={`px-3 py-2 rounded-full text-sm ${
                  selectedCategory === category
                    ? 'bg-gray-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <h3 className="font-bold text-gray-700 mt-6 mb-4">PREÇO</h3>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="300"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full"
            />
            <span className="text-sm font-bold text-gray-700">
              R$ {maxPrice},00
            </span>
          </div>
        </aside>

        {/* Produtos */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-700">{product.name}</h3>
                <p className="text-gray-500 font-bold text-lg">R$ {product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <button className="mt-4 bg-gray-500 text-white w-full py-2 rounded hover:bg-gray-600">
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              Nenhum produto encontrado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AcessorioPrata;
