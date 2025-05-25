
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import MainLayout from "@/components/layout/MainLayout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("specialist");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Имитация регистрации
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Регистрация успешна",
        description: "Аккаунт успешно создан. Добро пожаловать на ТимФинд!",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Создание аккаунта</h1>
            <p className="text-gray-600">
              Присоединяйтесь к сообществу ТимФинд
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Полное имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userType">Тип аккаунта</Label>
                <Select 
                  value={userType} 
                  onValueChange={(value) => setUserType(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип аккаунта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="specialist">Я специалист / фрилансер</SelectItem>
                    <SelectItem value="client">Я заказчик</SelectItem>
                    <SelectItem value="team">Я представитель команды</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-start space-x-2 mt-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Я согласен с{" "}
                  <Link to="/terms" className="text-brand hover:underline">
                    Условиями использования
                  </Link>{" "}
                  и{" "}
                  <Link to="/privacy" className="text-brand hover:underline">
                    Политикой конфиденциальности
                  </Link>
                </label>
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Регистрация..." : "Зарегистрироваться"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Уже есть аккаунт?{" "}
              <Link to="/login" className="text-brand hover:underline">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
