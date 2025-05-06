
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface InfoCardProps {
  iconName: string;
  title: string;
  children: React.ReactNode;
}

const InfoCard = ({ iconName, title, children }: InfoCardProps) => {
  return (
    <Card className="border-purple-100">
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-2 flex items-center">
          <Icon name={iconName} className="mr-2 text-purple-600" />
          {title}
        </h3>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
