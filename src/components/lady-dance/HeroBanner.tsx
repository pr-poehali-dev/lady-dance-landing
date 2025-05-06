import { Button } from "@/components/ui/button";

interface HeroBannerProps {
  handleCall: () => void;
}

const HeroBanner = ({ handleCall }: HeroBannerProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545128485-c400ce7b17d0?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-ladydance-black">LADY DANCE</span><br/>
            <span className="text-ladydance-pink font-cursive">с Анастасией Голубевой</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Раскрой свою женственность в танце. Занятия для всех уровней подготовки
            в ЖК Самоцветы, Люберцы.
          </p>
          <Button 
            onClick={handleCall} 
            size="lg" 
            className="text-lg px-8 bg-ladydance-pink hover:bg-ladydance-pink/90 text-white"
          >
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;