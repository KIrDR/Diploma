
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CurrencyBadge from "@/components/ui/CurrencyBadge";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { Project } from "@/types/project";

export type ProjectCardProps = Omit<Project, 'client' | 'status' | 'diagram'>;

const ProjectCard = ({
  id,
  title,
  description,
  budget,
  currency,
  skills,
  createdAt,
  teamSize,
  duration,
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{title}</CardTitle>
            <div className="flex items-center gap-2">
              <span className="font-bold">{budget.toLocaleString("ru-RU")}</span>
              <CurrencyBadge currency={currency} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-gray-600 mb-4 truncate-3-lines">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
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
        </CardContent>
        <CardFooter className="flex justify-between text-xs text-gray-500">
          <div>Команда: {teamSize} чел.</div>
          <div>Срок: {duration}</div>
          <div>{formatDistanceToNow(createdAt, { addSuffix: true, locale: ru })}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
