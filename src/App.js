import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Apenas importamos Routes e Route
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Categories from './components/Categories';
import PrataOuro from './components/PrataOuro';
import Kits from './components/Kits';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AcessoriosPrata from './components/AcessoriosPrata'; // Novo componente
import AcessoriosOuro from './components/AcessoriosOuro'; // Novo componente

const App = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Rotas */}
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              {/* Banner */}
              <Banner />

              {/* Features */}
              <Features />

              {/* Destaques da Semana */}
              <Highlights />

              {/* Prata ou Ouro */}
              <PrataOuro />

              {/* Kits */}
              <Kits />

              {/* Escolha por Categoria */}
              <Categories />
            </>
          }
        />

        {/* Rota para Acessórios em Prata */}
        <Route path="/acessorios-prata" element={<AcessoriosPrata />} />

        {/* Rota para Acessórios em Ouro */}
        <Route path="/acessorios-ouro" element={<AcessoriosOuro />} />
      </Routes>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
