
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencyOptions } from "@/data/demoData";
import SpecialistCard, { SpecialistCardProps } from "@/components/specialists/SpecialistCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Specialist } from "@/types/specialist";

const Specialists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [allSkills, setAllSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch specialists and skills
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // For now, let's use the demo data until the database is properly set up
        import("@/data/demoData").then(({ demoSpecialists }) => {
          // Convert to our Specialist type
          const typedSpecialists = demoSpecialists.map(specialist => ({
            ...specialist,
            hourly_rate: specialist.hourlyRate,
            avatar_url: specialist.avatar
          })) as Specialist[];
          
          setSpecialists(typedSpecialists);
          
          // Extract all unique skills from specialists
          const skills = Array.from(
            new Set(demoSpecialists.flatMap((specialist) => specialist.skills))
          ).sort();
          
          setAllSkills(skills);
          setIsLoading(false);
        });
        
      } catch (error) {
        console.error("Error fetching specialists:", error);
        toast({
          title: "Ошибка загрузки",
          description: "Не удалось загрузить данные специалистов",
          variant: "destructive",
        });
      } finally {
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

  const filteredSpecialists = specialists.filter((specialist) => {
    // Search by name, position and skills
    const matchesSearch =
      searchTerm === "" ||
      specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      specialist.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      specialist.skills.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Filter by currency
    const matchesCurrency =
      !selectedCurrency || selectedCurrency === 'all' || 
      specialist.currency === selectedCurrency;

    // Filter by skills
    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => specialist.skills.includes(skill));

    return matchesSearch && matchesCurrency && matchesSkills;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCurrency(null);
    setSelectedSkills([]);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Специалисты</h1>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Поиск по специалистам..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <Select
                value={selectedCurrency || ""}
                onValueChange={(value) => setSelectedCurrency(value || null)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Валюта" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая валюта</SelectItem>
                  {currencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">Навыки:</span>
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

          {(searchTerm || selectedCurrency || selectedSkills.length > 0) && (
            <div className="flex justify-between mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">
                Найдено специалистов: {filteredSpecialists.length}
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

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading state
            Array.from({ length: 8 }).map((_, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-6 animate-pulse border h-64"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))
          ) : filteredSpecialists.length > 0 ? (
            filteredSpecialists.map((specialist) => (
              <SpecialistCard 
                key={specialist.id}
                id={specialist.id}
                name={specialist.name}
                avatar={specialist.avatar || specialist.avatar_url || ''}
                position={specialist.position}
                skills={specialist.skills}
                rating={specialist.rating}
                hourlyRate={specialist.hourlyRate || specialist.hourly_rate || 0}
                currency={specialist.currency as "RUB" | "USD" | "BYN"}
                completedProjects={specialist.completedProjects || 0}
              />
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

export default Specialists;
