
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import { supabase } from "@/integrations/supabase/client";
import { Chrome } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Успешный вход",
        description: "Добро пожаловать обратно!",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Ошибка входа",
        description: error.message || "Неверный email или пароль. Попробуйте снова.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      
      if (error) {
        throw error;
      }
      
      // The redirect will happen automatically, no need for navigation here
    } catch (error: any) {
      toast({
        title: "Ошибка входа через Google",
        description: error.message || "Произошла ошибка при входе через Google. Попробуйте позже.",
        variant: "destructive",
      });
      setGoogleLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Вход в аккаунт</h1>
            <p className="text-gray-600">
              Войдите, чтобы продолжить работу на ТимФинд
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Пароль</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-brand hover:underline"
                  >
                    Забыли пароль?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Вход..." : "Войти"}
              </Button>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Или войдите через</span>
            </div>
          </div>

          <Button
            variant="outline"
            type="button"
            disabled={googleLoading}
            className="w-full"
            onClick={handleGoogleLogin}
          >
            <Chrome className="mr-2 h-4 w-4" />
            {googleLoading ? "Вход..." : "Войти через Google"}
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Нет аккаунта?{" "}
              <Link to="/register" className="text-brand hover:underline">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
