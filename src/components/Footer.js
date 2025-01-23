import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10" style={{ backgroundColor: '#C19A7B' }}>
      <div className="container mx-auto px-4">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">CADASTRE-SE EM NOSSA NEWSLETTER</h3>
            <p className="text-gray-200 mb-4">E receba novidades e promoções</p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full md:w-2/3 p-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                type="submit"
                className="bg-gray-600 px-4 py-2 rounded-r-md hover:bg-gray-700 text-white transition-all"
              >
                CADASTRE-SE
              </button>
            </form>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">INSTITUCIONAL</h3>
            <ul className="text-gray-200 space-y-2">
              <li><a href="#" className="hover:underline">Sobre nós</a></li>
              <li><a href="#" className="hover:underline">Semijoias Sem Níquel</a></li>
              <li><a href="#" className="hover:underline">Política de Garantia</a></li>
              <li><a href="#" className="hover:underline">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:underline">Formas de Pagamento</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">ATENDIMENTO</h3>
            <ul className="text-gray-200 space-y-2">
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+552432121722" className="hover:underline">(41) 999999999</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a
                  href="mailto:atendimento@lumikesemijoias.com.br"
                  className="hover:underline"
                >
                  atendimento@lumikesemijoias.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">FORMAS DE PAGAMENTO</h3>
            <div className="flex space-x-2">
              <img src='/images/Footer/bandeira_visa.png' alt="Visa" className="w-10" />
              <img src='/images/Footer/bandeira_visa.png' alt="Mastercard" className="w-10" />
              <img src="/images/elo.png" alt="Elo" className="w-10" />
              <img src="/images/hipercard.png" alt="Hipercard" className="w-10" />
            </div>
          </div>

          {/* Selos de Segurança */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">SELOS DE SEGURANÇA</h3>
            <div className="space-y-2">
              <img src="/images/google.png" alt="Google Segurança" className="w-24" />
              <img src="/images/loja-segura.png" alt="Loja Segura" className="w-24" />
              <img src="/images/avaliacoes.png" alt="Avaliações" className="w-24" />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-all"
              aria-label="Acesse nosso Instagram"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-all"
              aria-label="Acesse nosso Facebook"
            >
              Facebook
            </a>
          </div>
          <p className="text-gray-200 text-sm mt-4 md:mt-0">
            © 2025 Lumike Semijoias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
