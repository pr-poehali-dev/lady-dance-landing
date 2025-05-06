import { Button } from "@/components/ui/button";

interface TeacherSectionProps {
  handleCall: () => void;
}

const TeacherSection = ({ handleCall }: TeacherSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-ladydance-pink/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1974" 
              alt="Анастасия Голубева" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-ladydance-pink">
              Анастасия Голубева
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Профессиональный хореограф и преподаватель LADY DANCE с многолетним опытом.
              Помогает раскрыть индивидуальность каждой ученицы через танец.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Анастасия создает комфортную и поддерживающую атмосферу на занятиях, где каждая
              женщина может чувствовать себя уверенно и раскрепощенно.
            </p>
            <Button 
              onClick={handleCall} 
              className="bg-ladydance-pink hover:bg-ladydance-pink/90 text-white"
            >
              Задать вопрос преподавателю
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;