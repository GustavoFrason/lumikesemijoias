import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = '5541991493618';
  const defaultMessage = 'Olá, gostaria de saber mais sobre este produto!';

  return (
    <div className="fixed bottom-4 right-4">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
        style={{
          width: '60px',
          height: '60px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        aria-label="Entre em contato pelo WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
