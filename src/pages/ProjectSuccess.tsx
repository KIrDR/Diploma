
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import CurrencyBadge from "@/components/ui/CurrencyBadge";
import { Badge } from "@/components/ui/badge";
import { DrawIoEmbed } from 'react-drawio';

interface ProjectDetails {
  title: string;
  description: string;
  budget: string;
  currency: "BYN" | "RUB" | "USD";
  teamSize: string;
  duration: string;
  skills: string;
  diagram?: string;
}

const ProjectSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state as ProjectDetails;

  if (!project) {
    navigate("/new-project");
    return null;
  }

  return (
    <MainLayout isLoggedIn={true}>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h1 className="text-3xl font-bold mb-6">Проект успешно создан</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Бюджет</h3>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold mr-2">
                      {parseInt(project.budget).toLocaleString("ru-RU")}
                    </span>
                    <CurrencyBadge currency={project.currency} />
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Размер команды</h3>
                  <p>{project.teamSize} человек</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Срок выполнения</h3>
                  <p>{project.duration}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Необходимые навыки</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.split(",").map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {project.diagram && (
                <div>
                  <h3 className="font-medium mb-2">Структура проекта</h3>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="max-w-full" style={{ height: "400px" }}>
                      <DrawIoEmbed xml={project.diagram} />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" onClick={() => navigate("/projects")}>
                  К списку проектов
                </Button>
                <Button onClick={() => navigate("/new-project")}>
                  Создать новый проект
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectSuccess;
