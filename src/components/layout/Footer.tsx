
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ТимФинд</h3>
            <p className="text-gray-600 text-sm">
              Площадка для поиска команды на краткосрочные проекты.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">О платформе</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand">О нас</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-brand">Как это работает</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-brand">Цены</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-brand">Частые вопросы</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Для клиентов</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/post-project" className="text-gray-600 hover:text-brand">Разместить проект</Link>
              </li>
              <li>
                <Link to="/find-specialist" className="text-gray-600 hover:text-brand">Найти специалиста</Link>
              </li>
              <li>
                <Link to="/create-team" className="text-gray-600 hover:text-brand">Собрать команду</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-600 hover:text-brand">Истории успеха</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Для фрилансеров</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/find-projects" className="text-gray-600 hover:text-brand">Найти проекты</Link>
              </li>
              <li>
                <Link to="/join-team" className="text-gray-600 hover:text-brand">Присоединиться к команде</Link>
              </li>
              <li>
                <Link to="/create-profile" className="text-gray-600 hover:text-brand">Создать профиль</Link>
              </li>
              <li>
                <Link to="/freelancer-tips" className="text-gray-600 hover:text-brand">Советы фрилансерам</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} ТимФинд. Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-xs text-gray-600 hover:text-brand">Условия использования</Link>
            <Link to="/privacy" className="text-xs text-gray-600 hover:text-brand">Политика конфиденциальности</Link>
            <Link to="/cookies" className="text-xs text-gray-600 hover:text-brand">Политика использования файлов cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
