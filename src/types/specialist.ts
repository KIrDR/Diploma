
export interface Specialist {
  id: string;
  name: string;
  position: string;
  hourly_rate?: number;
  hourlyRate?: number;
  currency: "RUB" | "USD" | "BYN";
  avatar_url?: string;
  avatar?: string;
  rating: number;
  skills: string[];
  experience_years?: number;
  completedProjects?: number;
  experience?: string;
}
