
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone } from "lucide-react";

interface FooterProps {
  handleCall: () => void;
}

const Footer = ({ handleCall }: FooterProps) => {
  return (
    <footer className="bg-ladydance-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/logo.jpg" 
              alt="Lady Dance с Анастасией Голубевой" 
              className="h-16 md:h-20" 
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-ladydance-pink text-white hover:bg-ladydance-pink hover:text-white"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-4 w-4" />
              +7 929 904 6364
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-ladydance-pink text-white hover:bg-ladydance-pink hover:text-white"
              onClick={() => window.open('mailto:ladydance@example.com')}
            >
              <Mail className="mr-2 h-4 w-4" />
              ladydance@example.com
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-ladydance-pink text-white hover:bg-ladydance-pink hover:text-white"
              onClick={() => window.open('https://instagram.com/ladydance', '_blank')}
            >
              <Instagram className="mr-2 h-4 w-4" />
              @ladydance
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} LADY DANCE с Анастасией Голубевой. Все права защищены.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-ladydance-pink text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-ladydance-pink text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
