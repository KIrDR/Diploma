import fs from 'fs';
import path from 'path';

function loadXmlFromFile(filePath: string): string {
  try {
    const absolutePath = path.resolve(filePath);
    const xmlString = fs.readFileSync(absolutePath, 'utf-8');
    return xmlString;
  } catch (err) {
    console.error("Ошибка при чтении XML-файла:", err);
    return '';
  }
}

const xmlDiagram = loadXmlFromFile("C:/Users/Кирилл Алексеевич/Downloads/diagram.xml") ; 

export const demoProjects = [
  {
    id: "p1",
    title: "Разработка интернет-магазина косметики",
    description: "Требуется разработать полноценный интернет-магазин косметических товаров с функцией фильтрации, корзиной, личным кабинетом и интеграцией платежных систем. Сайт должен быть адаптивным и с современным дизайном.",
    budget: 75000,
    currency: "RUB" as const,
    skills: ["React", "Node.js", "MongoDB", "Redux", "Адаптивный дизайн"],
    createdAt: new Date(2023, 9, 28),
    teamSize: 3,
    diagram: xmlDiagram,
    duration: "30 дней",
    status: "active",
    client: {
      id: "c1",
      name: "Ольга Смирнова",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.8,
    }
  },
  {
    id: "p2",
    title: "Редизайн корпоративного сайта",
    description: "Необходимо обновить существующий сайт компании. Новый дизайн должен быть в минималистичном стиле с использованием корпоративных цветов. Требуется также улучшить UX сайта и ускорить его загрузку.",
    budget: 2500,
    currency: "USD" as const,
    skills: ["UI/UX", "Figma", "HTML", "CSS", "JavaScript"],
    createdAt: new Date(2023, 9, 30),
    teamSize: 2,
    duration: "15 дней",
    status: "active",
    client: {
      id: "c2",
      name: "Александр Иванов",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4.5,
    }
  },
  {
    id: "p3",
    title: "Мобильное приложение для доставки еды",
    description: "Требуется разработка мобильного приложения для службы доставки еды. Приложение должно работать на iOS и Android, иметь функции заказа, отслеживания доставки, оплаты и программы лояльности.",
    budget: 3800,
    currency: "BYN" as const,
    skills: ["React Native", "Firebase", "Redux", "Платежные API"],
    createdAt: new Date(2023, 10, 2),
    teamSize: 4,
    duration: "45 дней",
    status: "active",
    client: {
      id: "c3",
      name: "Екатерина Новикова",
      avatar: "https://randomuser.me/api/portraits/women/19.jpg",
      rating: 5.0,
    }
  },
  {
    id: "p4",
    title: "CRM система для автосервиса",
    description: "Нужна доработка существующей CRM системы для автосервиса. Требуется добавить модуль учета запчастей, интеграцию с бухгалтерией и систему уведомлений клиентов.",
    budget: 120000,
    currency: "RUB" as const,
    skills: ["PHP", "Laravel", "MySQL", "Vue.js", "API"],
    createdAt: new Date(2023, 10, 5),
    teamSize: 2,
    duration: "20 дней",
    status: "active",
    client: {
      id: "c4",
      name: "Дмитрий Петров",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.2,
    }
  },
  {
    id: "p5",
    title: "Разработка чат-бота для службы поддержки",
    description: "Требуется создание чат-бота с использованием искусственного интеллекта для автоматизации работы службы поддержки интернет-магазина. Бот должен отвечать на типовые вопросы и эскалировать сложные обращения оператору.",
    budget: 1800,
    currency: "USD" as const,
    skills: ["Python", "NLP", "Machine Learning", "API Integration"],
    createdAt: new Date(2023, 10, 7),
    teamSize: 2,
    duration: "25 дней",
    status: "active",
    client: {
      id: "c5",
      name: "Артём Соколов",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      rating: 4.7,
    }
  },
  {
    id: "p6",
    title: "Система онлайн-бронирования для отеля",
    description: "Разработка системы бронирования для сети отелей. Должна быть интеграция с платежной системой, календарь доступности номеров, система лояльности и отзывов.",
    budget: 4200,
    currency: "BYN" as const,
    skills: ["JavaScript", "Node.js", "React", "PostgreSQL", "Docker"],
    createdAt: new Date(2023, 10, 9),
    teamSize: 3,
    duration: "40 дней",
    status: "active",
    client: {
      id: "c6",
      name: "Наталья Кузнецова",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 4.9,
    }
  }
];

export const demoSpecialists = [
  {
    id: "s1",
    name: "Иван Петров",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    position: "Frontend-разработчик",
    skills: ["React", "TypeScript", "Redux", "Tailwind CSS", "Next.js"],
    rating: 4.9,
    hourlyRate: 35,
    currency: "USD" as const,
    completedProjects: 47,
    experience: "6 лет",
    description: "Опытный frontend-разработчик со специализацией на React и TypeScript. Создаю эффективные и элегантные пользовательские интерфейсы с фокусом на производительности и пользовательском опыте."
  },
  {
    id: "s2",
    name: "Мария Сидорова",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    position: "UI/UX дизайнер",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems"],
    rating: 4.8,
    hourlyRate: 2500,
    currency: "RUB" as const,
    completedProjects: 38,
    experience: "5 лет",
    description: "UI/UX дизайнер с опытом в проектировании пользовательских интерфейсов в различных сферах от e-commerce до финтеха. Создаю дизайн, который одновременно эстетичен и функционален."
  },
  {
    id: "s3",
    name: "Алексей Козлов",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    position: "Backend-разработчик",
    skills: ["Python", "Django", "Flask", "SQL", "API Design"],
    rating: 4.7,
    hourlyRate: 40,
    currency: "BYN" as const,
    completedProjects: 29,
    experience: "4 года",
    description: "Backend-разработчик с опытом создания высоконагруженных сервисов. Специализируюсь на построении масштабируемых API и работе с базами данных."
  },
  {
    id: "s4",
    name: "Елена Новикова",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    position: "Project Manager",
    skills: ["Agile", "Scrum", "Jira", "Trello", "Team Management"],
    rating: 5.0,
    hourlyRate: 3000,
    currency: "RUB" as const,
    completedProjects: 42,
    experience: "7 лет",
    description: "Project Manager с опытом управления IT-проектами разной сложности. Умею эффективно организовывать работу команды, следить за сроками и бюджетом."
  },
  {
    id: "s5",
    name: "Дмитрий Смирнов",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    position: "DevOps инженер",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
    rating: 4.6,
    hourlyRate: 45,
    currency: "USD" as const,
    completedProjects: 31,
    experience: "5 лет",
    description: "DevOps инженер, специализирующийся на автоматизации процессов развертывания и обеспечении бесперебойной работы сервисов. Опыт работы с различными облачными платформами."
  },
  {
    id: "s6",
    name: "Ольга Иванова",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    position: "QA инженер",
    skills: ["Manual Testing", "Automated Testing", "Selenium", "TestRail", "JIRA"],
    rating: 4.8,
    hourlyRate: 32,
    currency: "BYN" as const,
    completedProjects: 35,
    experience: "4 года",
    description: "QA инженер с опытом в тестировании web и мобильных приложений. Провожу как ручное, так и автоматизированное тестирование для обеспечения высокого качества продукта."
  },
  {
    id: "s7",
    name: "Никита Морозов",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    position: "Мобильный разработчик",
    skills: ["Flutter", "Dart", "Swift", "iOS", "Android"],
    rating: 4.9,
    hourlyRate: 2800,
    currency: "RUB" as const,
    completedProjects: 27,
    experience: "3 года",
    description: "Разработчик мобильных приложений для iOS и Android. Создаю быстрые и удобные приложения, уделяя особое внимание пользовательскому опыту и оптимизации."
  },
  {
    id: "s8",
    name: "Анна Кузнецова",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    position: "Content Manager",
    skills: ["Copywriting", "SEO", "Content Strategy", "Social Media", "Editing"],
    rating: 4.7,
    hourlyRate: 25,
    currency: "USD" as const,
    completedProjects: 45,
    experience: "6 лет",
    description: "Content Manager с опытом создания и управления контентом для различных платформ. Специализируюсь на создании SEO-оптимизированных текстов и контент-стратегий."
  }
];

export const demoTeams = [
  {
    id: "t1",
    name: "Web Masters",
    description: "Команда опытных веб-разработчиков и дизайнеров, специализирующаяся на создании современных веб-приложений и сайтов.",
    skills: ["React", "Node.js", "UI/UX", "Frontend", "Backend"],
    members: [
      {
        id: "s1",
        name: "Иван Петров",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        position: "Frontend-разработчик"
      },
      {
        id: "s2",
        name: "Мария Сидорова",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        position: "UI/UX дизайнер"
      },
      {
        id: "s3",
        name: "Алексей Козлов",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        position: "Backend-разработчик"
      }
    ],
    completedProjects: 24,
    rating: 4.8
  },
  {
    id: "t2",
    name: "Mobile Ninja",
    description: "Команда специалистов по разработке мобильных приложений для iOS и Android с опытом в создании высококачественных продуктов.",
    skills: ["Flutter", "React Native", "Swift", "Kotlin", "Mobile Design"],
    members: [
      {
        id: "s7",
        name: "Никита Морозов",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        position: "Мобильный разработчик"
      },
      {
        id: "s2",
        name: "Мария Сидорова",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        position: "UI/UX дизайнер"
      },
      {
        id: "s6",
        name: "Ольга Иванова",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        position: "QA инженер"
      }
    ],
    completedProjects: 18,
    rating: 4.9
  },
  {
    id: "t3",
    name: "Data Squad",
    description: "Команда аналитиков и разработчиков, специализирующаяся на проектах, связанных с анализом данных, машинным обучением и AI.",
    skills: ["Python", "Data Analysis", "Machine Learning", "AI", "Big Data"],
    members: [
      {
        id: "s3",
        name: "Алексей Козлов",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        position: "Backend-разработчик"
      },
      {
        id: "s5",
        name: "Дмитрий Смирнов",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        position: "DevOps инженер"
      },
      {
        id: "s4",
        name: "Елена Новикова",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        position: "Project Manager"
      },
      {
        id: "s9",
        name: "Павел Волков",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        position: "Data Scientist"
      }
    ],
    completedProjects: 15,
    rating: 4.7
  },
  {
    id: "t4",
    name: "E-commerce Experts",
    description: "Команда профессионалов, специализирующихся на разработке и оптимизации интернет-магазинов и e-commerce платформ.",
    skills: ["Shopify", "WooCommerce", "Payment Integration", "SEO", "E-commerce"],
    members: [
      {
        id: "s1",
        name: "Иван Петров",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        position: "Frontend-разработчик"
      },
      {
        id: "s8",
        name: "Анна Кузнецова",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        position: "Content Manager"
      },
      {
        id: "s10",
        name: "Сергей Лебедев",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        position: "E-commerce консультант"
      }
    ],
    completedProjects: 22,
    rating: 4.6
  }
];

export const demoUser = {
  id: "u1",
  name: "Иван Петров",
  email: "ivan@example.com",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  position: "Frontend-разработчик",
  skills: ["React", "TypeScript", "Redux", "Tailwind CSS", "Next.js"],
  rating: 4.9,
  hourlyRate: 35,
  currency: "USD" as const,
  completedProjects: 47,
  experience: "6 лет",
  description: "Опытный frontend-разработчик со специализацией на React и TypeScript. Создаю эффективные и элегантные пользовательские интерфейсы с фокусом на производительности и пользовательском опыте."
};

export const currencyOptions = [
  { value: "BYN", label: "BYN - Белорусский рубль" },
  { value: "RUB", label: "RUB - Российский рубль" },
  { value: "USD", label: "USD - Доллар США" }
];
