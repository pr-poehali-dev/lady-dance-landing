import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-ladydance-black">
          Почему выбирают <span className="text-ladydance-pink">LADY DANCE</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            iconName="Heart" 
            title="Женственность" 
            description="Раскрытие женственности через пластику и грацию движений"
          />
          
          <FeatureCard 
            iconName="Users" 
            title="Для всех" 
            description="Подходит для любого уровня подготовки и возраста"
          />
          
          <FeatureCard 
            iconName="MapPin" 
            title="Удобное расположение" 
            description="Занятия проходят в ЖК Самоцветы, Люберцы"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;