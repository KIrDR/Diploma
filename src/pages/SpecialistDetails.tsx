
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainLayout from "@/components/layout/MainLayout";
import { ChevronRight, Star, Briefcase, Clock } from "lucide-react";
import { demoSpecialists } from "@/data/demoData";

const SpecialistDetails = () => {
  const { id } = useParams<{ id: string }>();
  const specialist = demoSpecialists.find((s) => s.id === id);

  if (!specialist) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Специалист не найден</h1>
          <p className="mb-8">
            Специалист, которого вы ищете, не существует или был удален.
          </p>
          <Link to="/specialists">
            <Button>Вернуться к специалистам</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const currencySymbol = {
    BYN: "BYN",
    RUB: "₽",
    USD: "$"
  }[specialist.currency];

  const initials = specialist.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <MainLayout isLoggedIn={false}>
      <div className="bg-gray-50 py-4 border-b">
        <div className="container">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-brand">Главная</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/specialists" className="hover:text-brand">Специалисты</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700 truncate">{specialist.name}</span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={specialist.avatar} alt={specialist.name} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">{specialist.name}</h1>
                  <p className="text-lg text-gray-600">{specialist.position}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                    <span className="font-medium">{specialist.rating.toFixed(1)}</span>
                    <span className="text-gray-500">
                      ({specialist.completedProjects} выполненных проектов)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 text-sm mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Опыт: {specialist.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span>Ставка: {specialist.hourlyRate.toLocaleString("ru-RU")} {currencySymbol}/час</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">О специалисте</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {specialist.description}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-3">Навыки</h2>
                <div className="flex flex-wrap gap-2">
                  {specialist.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-lg font-medium mb-4">Портфолио и опыт работы</h2>
              <div className="text-center py-8 text-gray-500">
                <p>У этого специалиста пока нет публичного портфолио.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-20">
              <h2 className="text-lg font-medium mb-4">Действия</h2>
              <div className="space-y-3">
                <Button className="w-full">Пригласить в проект</Button>
                <Button variant="outline" className="w-full">
                  Отправить сообщение
                </Button>
                <Button variant="outline" className="w-full">
                  Сохранить контакт
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-3">Доступность</h3>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Статус:</span>
                  <span className="text-green-600 font-medium">Доступен для работы</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Загруженность:</span>
                  <span className="font-medium">Частичная</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">Предпочитаемые типы проектов</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Веб-приложения</li>
                  <li>Корпоративные сайты</li>
                  <li>Интернет-магазины</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SpecialistDetails;
