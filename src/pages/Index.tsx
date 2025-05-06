
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:+79299046364";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Хедер */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-purple-800">LADY DANCE</div>
          <Button onClick={handleCall} variant="outline" className="gap-2 bg-white">
            <Icon name="Phone" size={16} />
            +7 929 904 6364
          </Button>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545128485-c400ce7b17d0?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-900">
              LADY DANCE с Анастасией Голубевой
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Раскрой свою женственность в танце. Занятия для всех уровней подготовки
              в ЖК Самоцветы, Люберцы.
            </p>
            <Button 
              onClick={handleCall} 
              size="lg" 
              className="text-lg px-8 bg-purple-700 hover:bg-purple-800"
            >
              Записаться на занятие
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
            Почему выбирают LADY DANCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Icon name="Heart" size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Женственность</h3>
                  <p className="text-gray-600">
                    Раскрытие женственности через пластику и грацию движений
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Icon name="Users" size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Для всех</h3>
                  <p className="text-gray-600">
                    Подходит для любого уровня подготовки и возраста
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Icon name="MapPin" size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Удобное расположение</h3>
                  <p className="text-gray-600">
                    Занятия проходят в ЖК Самоцветы, Люберцы
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О преподавателе */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
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
              <h2 className="text-3xl font-bold mb-6 text-purple-800">
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
                className="bg-purple-700 hover:bg-purple-800"
              >
                Задать вопрос преподавателю
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* О занятиях */}
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
              <Card className="border-purple-100">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Icon name="Clock" className="mr-2 text-purple-600" />
                    Расписание
                  </h3>
                  <p>Вторник и четверг: 19:00 - 20:30</p>
                  <p>Суббота: 12:00 - 13:30</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-100">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Icon name="BadgePercent" className="mr-2 text-purple-600" />
                    Стоимость
                  </h3>
                  <p>Разовое занятие: 800 руб</p>
                  <p>Абонемент на 8 занятий: 5600 руб</p>
                </CardContent>
              </Card>
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

      {/* CTA */}
      <section className="py-16 bg-purple-900 text-white">
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
            className="text-lg px-8 border-white text-white hover:bg-white hover:text-purple-900"
          >
            Позвонить: +7 929 904 6364
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 LADY DANCE с Анастасией Голубевой</p>
          <p>ЖК Самоцветы, Люберцы</p>
          <p className="mt-2">Телефон: <a href="tel:+79299046364" className="text-purple-700">+7 929 904 6364</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
