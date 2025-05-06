import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
}

const FeatureCard = ({ iconName, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-ladydance-pink/20">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-ladydance-pink/10 flex items-center justify-center mb-4">
            <Icon name={iconName} size={28} className="text-ladydance-pink" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-ladydance-black">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;