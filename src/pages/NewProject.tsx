
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DrawIoEmbed } from "react-drawio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import { currencyOptions } from "@/data/demoData";

interface DrawioSaveEvent {
  xml: string;
}

const NewProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("RUB");
  const [teamSize, setTeamSize] = useState("1");
  const [duration, setDuration] = useState("");
  const [skills, setSkills] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [diagramData, setDiagramData] = useState<string | undefined>(undefined);

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDiagramSave = (event: DrawioSaveEvent) => {
    setDiagramData(event.xml);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const projectData = {
      title,
      description,
      budget,
      currency,
      teamSize,
      duration,
      skills,
      diagram: diagramData
    };

    // Имитация отправки формы
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Проект опубликован",
        description: "Ваш проект успешно опубликован на платформе.",
      });
      navigate("/project-success", { state: projectData });
    }, 1500);
  };

  return (
    <MainLayout isLoggedIn={true}>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Новый проект</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Название проекта</Label>
                <Input
                  id="title"
                  placeholder="Например: Разработка интернет-магазина косметики"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Описание проекта</Label>
                <Textarea
                  id="description"
                  placeholder="Подробно опишите, что нужно сделать, какие технологии использовать, и какой результат вы ожидаете получить..."
                  rows={8}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Бюджет</Label>
                  <div className="flex">
                    <Input
                      id="budget"
                      type="number"
                      placeholder="1000"
                      required
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger className="w-24 rounded-l-none">
                        <SelectValue placeholder="Валюта" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencyOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Размер команды</Label>
                  <Select value={teamSize} onValueChange={setTeamSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите размер команды" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 человек</SelectItem>
                      <SelectItem value="2">2 человека</SelectItem>
                      <SelectItem value="3">3 человека</SelectItem>
                      <SelectItem value="4">4 человека</SelectItem>
                      <SelectItem value="5">5 человек</SelectItem>
                      <SelectItem value="5+">Более 5 человек</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Срок выполнения</Label>
                <Input
                  id="duration"
                  placeholder="Например: 30 дней, 2 месяца и т.д."
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="skills">Необходимые навыки</Label>
                <Textarea
                  id="skills"
                  placeholder="Перечислите навыки через запятую, например: React, Node.js, MongoDB, UI/UX дизайн"
                  required
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Структура проекта</Label>
                <div className="border rounded-lg overflow-hidden h-[500px]">
                  <DrawIoEmbed onSave={handleDiagramSave} />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-4">
                <Button variant="outline" onClick={() => navigate("/projects")}>
                  Отмена
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Публикация..." : "Опубликовать проект"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewProject;
