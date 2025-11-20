import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/55{{SEU_NUMERO_COM_DDD}}"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale comigo no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
        <div className="relative bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-2xl transition-all hover:scale-110 animate-float">
          <MessageCircle className="h-7 w-7" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
