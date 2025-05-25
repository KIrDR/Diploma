
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <MainLayout isLoggedIn={false}>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Как работает платформа ТимФинд
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Эффективный поиск команд и специалистов для краткосрочных проектов
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Для заказчиков */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Для заказчиков: как нанять команду или специалистов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-brand-light h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-dark text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Разместите проект
              </h3>
              <p className="text-gray-600 mb-4">
                Создайте подробное описание вашего проекта, укажите необходимые навыки, 
                бюджет и сроки выполнения.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Бесплатное размещение проекта</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Детальное описание требований</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Выбор валюты оплаты (BYN, RUB, USD)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-brand-light h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-dark text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Выберите исполнителей
              </h3>
              <p className="text-gray-600 mb-4">
                Получайте отклики от специалистов и команд, изучайте их профили, 
                портфолио и отзывы, выбирайте лучших для вашего проекта.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Доступ к рейтингам и отзывам</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Общение с потенциальными исполнителями</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Сравнение и выбор лучших предложений</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-brand-light h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-dark text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Управляйте процессом
              </h3>
              <p className="text-gray-600 mb-4">
                Отслеживайте прогресс работы, общайтесь с исполнителями через платформу, 
                производите оплату после успешного выполнения заданий.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Отслеживание прогресса в реальном времени</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Безопасная система оплаты</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Оставление отзывов и рейтингов</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/new-project">
              <Button size="lg" className="bg-brand-accent hover:bg-opacity-90">
                Разместить проект
              </Button>
            </Link>
          </div>
        </div>

        {/* Для фрилансеров */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Для фрилансеров: как находить проекты и работать в команде
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-brand-light h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-dark text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Создайте профиль
              </h3>
              <p className="text-gray-600 mb-4">
                Зарегистрируйтесь и создайте профессиональный профиль, указав ваши навыки, 
                опыт работы и примеры выполненных проектов.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Подробное описание навыков</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Загрузка портфолио</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Указание желаемой почасовой ставки</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-brand-light h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-dark text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Находите проекты
              </h3>
              <p className="text-gray-600 mb-4">
                Ищите подходящие проекты, используя систему поиска и фильтрации, 
                откликайтесь на интересные предложения.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Удобная система поиска проектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Фильтрация по навыкам и бюджету</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Персональные уведомления о подходящих проектах</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-brand-light h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-dark text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Работайте и зарабатывайте
              </h3>
              <p className="text-gray-600 mb-4">
                Сотрудничайте с заказчиками и другими специалистами, выполняйте проекты 
                и получайте оплату через безопасную систему платформы.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Гарантированная оплата</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Инструменты для командной работы</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Повышение рейтинга с каждым успешным проектом</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/register">
              <Button size="lg" className="bg-brand">
                Создать профиль
              </Button>
            </Link>
          </div>
        </div>

        {/* Преимущества платформы */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Преимущества платформы ТимФинд
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-bold mb-3">Для заказчиков</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Быстрый доступ к проверенным специалистам</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Возможность найти уже сработанные команды</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Экономия времени на поиске и собеседованиях</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Выбор валюты расчетов (BYN, RUB, USD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Защита интересов заказчика</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-bold mb-3">Для фрилансеров и команд</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Постоянный поток проектов разного масштаба</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Возможность работать в команде</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Прозрачная система рейтингов и отзывов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Гарантированная и своевременная оплата</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Профессиональное развитие и рост</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Готовы начать работу с ТимФинд?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Присоединяйтесь к нашей платформе и начните находить проекты или специалистов уже сегодня!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-brand hover:bg-gray-100">
                Зарегистрироваться
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Войти
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowItWorks;
