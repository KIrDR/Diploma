
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainLayout from "@/components/layout/MainLayout";
import { ChevronRight, Star, Briefcase } from "lucide-react";
import { demoTeams } from "@/data/demoData";

const TeamDetails = () => {
  const { id } = useParams<{ id: string }>();
  const team = demoTeams.find((t) => t.id === id);

  if (!team) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Команда не найдена</h1>
          <p className="mb-8">
            Команда, которую вы ищете, не существует или была удалена.
          </p>
          <Link to="/teams">
            <Button>Вернуться к командам</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout isLoggedIn={false}>
      <div className="bg-gray-50 py-4 border-b">
        <div className="container">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-brand">Главная</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/teams" className="hover:text-brand">Команды</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700 truncate">{team.name}</span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">{team.name}</h1>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                  <span className="font-medium">{team.rating.toFixed(1)}</span>
                  <span className="text-gray-500">
                    ({team.completedProjects} выполненных проектов)
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">О команде</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {team.description}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">Специализация</h2>
                <div className="flex flex-wrap gap-2">
                  {team.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">Состав команды</h2>
                <div className="space-y-4">
                  {team.members.map((member) => (
                    <div 
                      key={member.id} 
                      className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <Link 
                          to={`/specialists/${member.id}`} 
                          className="font-medium hover:text-brand"
                        >
                          {member.name}
                        </Link>
                        <div className="text-sm text-gray-600">{member.position}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-lg font-medium mb-4">Портфолио команды</h2>
              <div className="text-center py-8 text-gray-500">
                <p>У этой команды пока нет публичного портфолио.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-20">
              <h2 className="text-lg font-medium mb-4">Действия</h2>
              <div className="space-y-3">
                <Button className="w-full">Пригласить на проект</Button>
                <Button variant="outline" className="w-full">
                  Отправить сообщение
                </Button>
                <Button variant="outline" className="w-full">
                  Сохранить команду
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-3">Доступность</h3>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Статус:</span>
                  <span className="text-green-600 font-medium">Доступны для работы</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Готовы начать:</span>
                  <span className="font-medium">В течение недели</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">Предпочитаемые типы проектов</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {team.skills.slice(0, 3).map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamDetails;
