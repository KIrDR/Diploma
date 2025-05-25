
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";
import { ChevronRight, Star, Briefcase, Clock } from "lucide-react";
import { demoUser } from "@/data/demoData";

const UserProfile = () => {
  const user = demoUser;
  
  const currencySymbol = {
    BYN: "BYN",
    RUB: "₽",
    USD: "$"
  }[user.currency];

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
    
  return (
    <MainLayout isLoggedIn={true}>
      <div className="bg-gray-50 py-4 border-b">
        <div className="container">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-brand">Главная</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/dashboard" className="hover:text-brand">Личный кабинет</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700 truncate">Профиль</span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex flex-col items-center">
              <Avatar className="h-32 w-32">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
              </Avatar>
              <div className="mt-4 flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                  <span className="font-medium">{user.rating.toFixed(1)}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {user.completedProjects} выполненных проектов
                </span>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-lg text-gray-600">{user.position}</p>
                </div>
                <div className="mt-2 md:mt-0 space-x-2">
                  <Button variant="outline">Редактировать профиль</Button>
                  <Button>Статус: Доступен</Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Опыт: {user.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span>Ставка: {user.hourlyRate.toLocaleString("ru-RU")} {currencySymbol}/час</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-medium mb-2">О себе</h2>
                <p className="text-gray-700">{user.description}</p>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-medium mb-2">Навыки</h2>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="portfolio">
          <TabsList className="mb-4">
            <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
            <TabsTrigger value="projects">Мои проекты</TabsTrigger>
            <TabsTrigger value="teams">Мои команды</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="portfolio" className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium mb-2">Портфолио пусто</h3>
              <p className="text-gray-600 mb-4">
                Добавьте примеры своих работ, чтобы продемонстрировать свои навыки клиентам.
              </p>
              <Button>Добавить работу</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="projects" className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium mb-2">У вас пока нет проектов</h3>
              <p className="text-gray-600 mb-4">
                Найдите интересные проекты или разместите свой собственный.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/projects">
                  <Button variant="outline">Найти проекты</Button>
                </Link>
                <Link to="/new-project">
                  <Button>Создать проект</Button>
                </Link>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="teams" className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium mb-2">Вы не состоите ни в одной команде</h3>
              <p className="text-gray-600 mb-4">
                Присоединитесь к существующей команде или создайте свою собственную.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/teams">
                  <Button variant="outline">Найти команду</Button>
                </Link>
                <Button>Создать команду</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium mb-2">У вас пока нет отзывов</h3>
              <p className="text-gray-600">
                Отзывы появятся после завершения ваших первых проектов.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default UserProfile;
