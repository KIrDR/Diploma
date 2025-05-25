
export interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  currency: "RUB" | "USD" | "BYN";
  skills: string[];
  createdAt: Date;
  teamSize: number;
  duration: string;
  status: string;
  client: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
  diagram?: string; // Making diagram optional
}
