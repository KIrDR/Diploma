
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import TeamCard from "@/components/teams/TeamCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  skills: string[];
  members: TeamMember[];
  completedProjects: number;
  rating: number;
}

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [allSkills, setAllSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // For now, let's use the demo data until we implement teams in Supabase
        // This is a placeholder for future implementation
        import("@/data/demoData").then(({ demoTeams }) => {
          setTeams(demoTeams);
          
          // Extract all unique skills from teams
          const skills = Array.from(
            new Set(demoTeams.flatMap((team) => team.skills))
          ).sort();
          
          setAllSkills(skills);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error fetching teams:", error);
        toast({
          title: "Ошибка загрузки",
          description: "Не удалось загрузить данные команд",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };

    fetchData();
  }, [toast]);
  
  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const filteredTeams = teams.filter((team) => {
    // Поиск по названию и описанию
    const matchesSearch =
      searchTerm === "" ||
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.skills.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Фильтр по навыкам
    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => team.skills.includes(skill));

    return matchesSearch && matchesSkills;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSkills([]);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Команды</h1>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Поиск по командам..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">Специализация:</span>
              {selectedSkills.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 text-xs ml-auto"
                  onClick={() => setSelectedSkills([])}
                >
                  <X className="h-3 w-3 mr-1" /> Сбросить
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleSkillToggle(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {(searchTerm || selectedSkills.length > 0) && (
            <div className="flex justify-between mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">
                Найдено команд: {filteredTeams.length}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={clearFilters}
              >
                <X className="h-3 w-3 mr-1" /> Сбросить все фильтры
              </Button>
            </div>
          )}
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            // Loading state
            Array.from({ length: 4 }).map((_, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-6 animate-pulse border h-64"
              >
                <div className="flex flex-col">
                  <div className="h-5 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </div>
            ))
          ) : filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
              <TeamCard key={team.id} {...team} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">
                По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Teams;
