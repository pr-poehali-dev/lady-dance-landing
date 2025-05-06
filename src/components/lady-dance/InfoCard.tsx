import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface InfoCardProps {
  iconName: string;
  title: string;
  children: React.ReactNode;
}

const InfoCard = ({ iconName, title, children }: InfoCardProps) => {
  return (
    <Card className="border-ladydance-pink/20">
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-2 flex items-center">
          <Icon name={iconName} className="mr-2 text-ladydance-pink" />
          <span className="text-ladydance-black">{title}</span>
        </h3>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;