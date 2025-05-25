
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { Specialist } from "@/types/specialist";

export type CurrencyType = "BYN" | "RUB" | "USD";

export interface SpecialistCardProps {
  id: string;
  name: string;
  avatar: string;
  position: string;
  skills: string[];
  rating: number;
  hourlyRate: number;
  currency: CurrencyType;
  completedProjects: number;
  experience?: string;
}

const SpecialistCard = ({
  id,
  name,
  avatar,
  position,
  skills,
  rating,
  hourlyRate,
  currency,
  completedProjects,
}: SpecialistCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const currencySymbol = {
    BYN: "BYN",
    RUB: "₽",
    USD: "$"
  }[currency];

  return (
    <Link to={`/specialists/${id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-sm text-gray-600">{position}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1 mb-2">
            <StarIcon className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-sm text-gray-600 ml-2">
              {completedProjects} проектов
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{skills.length - 4}
              </Badge>
            )}
          </div>
          <div className="text-sm font-bold">
            {hourlyRate.toLocaleString("ru-RU")} {currencySymbol}/час
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SpecialistCard;
