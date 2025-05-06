
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  handleCall: () => void;
}

const Header = ({ handleCall }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl text-purple-800">LADY DANCE</div>
        <Button onClick={handleCall} variant="outline" className="gap-2 bg-white">
          <Icon name="Phone" size={16} />
          +7 929 904 6364
        </Button>
      </div>
    </header>
  );
};

export default Header;
