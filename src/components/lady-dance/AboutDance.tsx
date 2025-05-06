
import { Button } from "@/components/ui/button";
import InfoCard from "./InfoCard";

interface AboutDanceProps {
  handleCall: () => void;
}

const AboutDance = ({ handleCall }: AboutDanceProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-800">
          О направлении LADY DANCE
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            LADY DANCE — это танцевальное направление, основанное на женственной пластике, 
            чувственности и грации. На занятиях мы работаем над раскрытием женской энергии через танец.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Занятия включают в себя элементы разных стилей: хип-хоп, джаз-фанк, вог, стрип-пластика,
            которые адаптированы для создания женственного и чувственного образа.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Регулярные занятия помогут улучшить осанку, пластичность, координацию движений и
            подарят уверенность в себе.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
            <InfoCard iconName="Clock" title="Расписание">
              <p>Вторник и четверг: 19:00 - 20:30</p>
              <p>Суббота: 12:00 - 13:30</p>
            </InfoCard>
            
            <InfoCard iconName="BadgePercent" title="Стоимость">
              <p>Разовое занятие: 800 руб</p>
              <p>Абонемент на 8 занятий: 5600 руб</p>
            </InfoCard>
          </div>

          <Button 
            onClick={handleCall} 
            size="lg" 
            className="text-lg px-8 bg-purple-700 hover:bg-purple-800"
          >
            Записаться на пробное занятие
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutDance;
