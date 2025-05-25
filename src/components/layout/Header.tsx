
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

const Header = ({ isLoggedIn = false }) => {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-brand">
            ТимФинд
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/projects" className="text-sm font-medium hover:text-brand">
              Проекты
            </Link>
            <Link to="/specialists" className="text-sm font-medium hover:text-brand">
              Специалисты
            </Link>
            <Link to="/teams" className="text-sm font-medium hover:text-brand">
              Команды
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium hover:text-brand">
              Как это работает
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/search" className="md:hidden">
            <Button size="icon" variant="ghost">
              <Search className="h-5 w-5" />
              <span className="sr-only">Поиск</span>
            </Button>
          </Link>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/new-project">
                <Button className="bg-brand-accent hover:bg-opacity-90">
                  Новый проект
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/user1.jpg" alt="Иван Петров" />
                      <AvatarFallback>ИП</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Профиль</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">Личный кабинет</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings" className="w-full">Настройки</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/logout" className="w-full">Выйти</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline">Войти</Button>
              </Link>
              <Link to="/register">
                <Button>Регистрация</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
