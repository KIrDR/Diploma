
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  position: string;
}

interface TeamCardProps {
  id: string;
  name: string;
  description: string;
  skills: string[];
  members: TeamMember[];
  completedProjects: number;
}

const TeamCard = ({
  id,
  name,
  description,
  skills,
  members,
  completedProjects,
}: TeamCardProps) => {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4 truncate-2-lines">{description}</p>
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
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {members.slice(0, 4).map((member) => (
                <Avatar key={member.id} className="h-8 w-8 border-2 border-white">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              ))}
              {members.length > 4 && (
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 border-2 border-white text-xs font-medium">
                  +{members.length - 4}
                </div>
              )}
            </div>
            <div className="text-sm text-gray-600">
              {completedProjects} завершенных проектов
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TeamCard;
