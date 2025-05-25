
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainLayout from "@/components/layout/MainLayout";
import { Calendar, Users, Clock, ChevronRight } from "lucide-react";
import CurrencyBadge from "@/components/ui/CurrencyBadge";
import { demoProjects } from "@/data/demoData";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { DrawIoEmbed } from 'react-drawio';
import { Project } from "@/types/project";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = demoProjects.find((p) => p.id === id) as Project | undefined;

  if (!project) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Проект не найден</h1>
          <p className="mb-8">
            Проект, который вы ищете, не существует или был удален.
          </p>
          <Link to="/projects">
            <Button>Вернуться к проектам</Button>
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
            <Link to="/projects" className="hover:text-brand">Проекты</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700 truncate">{project.title}</span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                <div className="flex items-center text-xl font-bold">
                  {project.budget.toLocaleString("ru-RU")}
                  <CurrencyBadge currency={project.currency} className="ml-2" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Опубликовано: {formatDistanceToNow(project.createdAt, { addSuffix: true, locale: ru })}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Команда: {project.teamSize} чел.</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Срок: {project.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">Описание проекта</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-3">Необходимые навыки</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                  <h2 className="text-lg font-medium mb-3">Структура проекта</h2>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="w-full" style={{ height: "800px" }}>
                      <DrawIoEmbed xml={project.diagram } />
                    </div>
                  </div>
                </div>
              {project.diagram && (
                <div className="mt-6">
                  <h2 className="text-lg font-medium mb-3">Структура проекта</h2>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="w-full" style={{ height: "400px" }}>
                      <DrawIoEmbed xml={project.diagram } />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-lg font-medium mb-4">Отклики на проект</h2>
              <div className="text-center py-8 text-gray-500">
                <p className="mb-4">У этого проекта пока нет откликов.</p>
                <p>Будьте первым, кто откликнется и предложит свои услуги!</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <h2 className="text-lg font-medium mb-4">О заказчике</h2>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={project.client.avatar} alt={project.client.name} />
                  <AvatarFallback>
                    {project.client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{project.client.name}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    Рейтинг: {project.client.rating.toFixed(1)}
                  </div>
                </div>
              </div>
              <Link to={`/client/${project.client.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Профиль заказчика
                </Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-20">
              <h2 className="text-lg font-medium mb-4">Действия</h2>
              <div className="space-y-3">
                <Button className="w-full">Откликнуться</Button>
                <Button variant="outline" className="w-full">
                  Сохранить проект
                </Button>
                <Button variant="ghost" className="w-full">
                  Пожаловаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetails;
