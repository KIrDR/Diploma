
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProjectCard from "@/components/projects/ProjectCard";
import SpecialistCard from "@/components/specialists/SpecialistCard";
import TeamCard from "@/components/teams/TeamCard";
import { demoProjects, demoSpecialists, demoTeams } from "@/data/demoData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout isLoggedIn={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Найдите идеальную команду для вашего проекта
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              ТимФинд — это платформа, которая помогает находить специалистов и 
              собирать команды для краткосрочных проектов быстро и просто.
            </p>
            <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Поиск проектов, специалистов и команд"
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="bg-brand-accent hover:bg-opacity-90">
                Найти
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/projects">
                <Button variant="outline">Найти проект</Button>
              </Link>
              <Link to="/specialists">
                <Button variant="outline">Найти специалиста</Button>
              </Link>
              <Link to="/teams">
                <Button variant="outline">Найти команду</Button>
              </Link>
              <Link to="/new-project">
                <Button variant="outline">Разместить проект</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Последние проекты</h2>
            <Link to="/projects" className="text-brand hover:underline">
              Все проекты
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Specialists */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Топ специалисты</h2>
            <Link to="/specialists" className="text-brand hover:underline">
              Все специалисты
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoSpecialists.slice(0, 4).map((specialist) => (
              <SpecialistCard key={specialist.id} {...specialist} />
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Проверенные команды</h2>
            <Link to="/teams" className="text-brand hover:underline">
              Все команды
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {demoTeams.slice(0, 2).map((team) => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-dark text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Разместите проект</h3>
              <p className="text-gray-600">
                Опишите задачи, укажите бюджет и сроки, и начните получать отклики от специалистов.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-dark text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Соберите команду</h3>
              <p className="text-gray-600">
                Выбирайте лучших специалистов или готовые команды для вашего проекта.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-dark text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Управляйте проектом</h3>
              <p className="text-gray-600">
                Общайтесь, контролируйте ход работ и производите оплату через платформу.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/how-it-works">
              <Button size="lg">Узнать больше</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Готовы начать свой проект?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Разместите проект бесплатно и получите предложения от квалифицированных специалистов и команд.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/new-project">
              <Button size="lg" className="bg-white text-brand hover:bg-gray-100">
                Разместить проект
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
