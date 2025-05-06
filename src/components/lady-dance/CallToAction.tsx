import { Button } from "@/components/ui/button";

interface CallToActionProps {
  handleCall: () => void;
}

const CallToAction = ({ handleCall }: CallToActionProps) => {
  return (
    <section className="py-16 bg-ladydance-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Начните танцевать прямо сейчас!</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к нашим занятиям LADY DANCE и откройте для себя новый мир чувственности 
          и уверенности в себе.
        </p>
        <Button 
          onClick={handleCall} 
          size="lg" 
          variant="outline" 
          className="text-lg px-8 border-ladydance-pink text-white hover:bg-ladydance-pink hover:text-white"
        >
          Позвонить: +7 929 904 6364
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;