import { MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/5521989365166"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={t('talkOnWhatsapp')}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
        <div className="relative p-4 rounded-full shadow-2xl transition-all hover:scale-110 animate-float">
          <img src="/imagem/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.webp" alt="WhatsApp" className="h-12 w-12 rounded-full object-contain" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
