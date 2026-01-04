import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
    >
      <Languages className="h-4 w-4 mr-2" />
      {i18n.language === 'en' ? 'PT' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;