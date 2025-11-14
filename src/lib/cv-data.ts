export const cvData = {
  profile: {
    name: "Emanuel Nestian",
    role: "Programator",
    city: "Iași",
    email: "paulnestian@gmail.com",
    phone: "+40764365654",
    available: true,
    videoSrc: "/profile.mp4", // îl pui în /public
  },
  stats: [
    { label: "Ani experiență", value: "3+" },
    { label: "Companii", value: "3" },
    { label: "Proiecte personale", value: "6+" },
    { label: "Integrări AI", value: "4+" },
  ],
  experience: [
    {
      role: "Programator",
      company: "IST Gmbh",
      period: "iunie 2022 – iunie 2025",
      bullets: [
        "Aplicații .NET, C# și Xamarin pentru Commerce/Retail",
        "Stack: C#, SQL Server, Visual Studio, .NET, Fork, TeamCity, Azure DevOps",
        "Video: https://youtu.be/ZVIDrhP_9Uc",
        "Salariu net 1500 EUR",
      ],
    },
    {
      role: "Programator",
      company: "Softone1",
      period: "februarie 2021 – octombrie 2021",
      bullets: [
        "Proiecte IT pentru Comerț/Retail cu JavaScript, TypeScript și C#",
        "Aplicații pentru traduceri automate și operații cu imprimantă fiscală",
        "SQL, TypeScript, rapoarte și UI clienți",
        "Salariu net 1500 EUR",
      ],
    },
    {
      role: "Programator",
      company: "Axes Software",
      period: "august 2019 – iulie 2020",
      bullets: [
        "Unity 3D și C#, WPF, ASP.NET MVC, SQL Server",
        "Hartă de vizualizare 3D pentru depozit (Unity 3D + C#)",
        "Video: https://youtu.be/qFor3k8qAGE",
      ],
    },
  ],
  education: [
    { title: "Licență în Electrotehnică", school: "Universitatea Gh. Asachi, Iași", period: "2005 – 2010" },
    { title: "Liceul de Informatică Iași", school: "Specializarea Informatică", period: "1995 – 1999" },
  ],
  skills: {
    general: [
      "C/C++/C#, Python, PHP, HTML, CSS, SASS, LESS, JavaScript, jQuery",
      ".NET, .NET Core, MVC5, Entity Framework, Bootstrap, Docker, Git, Azure Cloud",
      "ASP.NET, MySQL/MS SQL, React, Unity 3D, WPF, WCF, LINQ to SQL, Angular 10",
    ],
    aiLibs: [
      "fastapi, sqlalchemy, torch (PyTorch), numpy, pandas, scikit-learn",
      "opencv-python, transformers (HF), streamlit, flask",
    ],
    extras: [
      "Design web responsiv, Principii SOLID",
      "Google Agent Development Kit (ADK), Vertex AI, Cloud Run",
      "Google Opal – AI App Builder",
      "Office, VS Code, Postman, GitHub, SQL Server, MySQL, SQLite",
    ],
    languages: [
      "Engleză – Intermediar",
      "Italiană – Începător",
      "Germană – Începător",
    ],
  },
  projects: [
    { title: "Reddit Automation", desc: "Sistem autonom, Kafka, Redis, Playwright, Docker", href: "https://github.com/NestianEmanuelPaul/reddit-automation.git" },
    { title: "AR Unity + Google Maps", desc: "Hărți + AR, Unity 3D", href: "https://www.youtube.com/watch?v=vx9KKJIDHrg&t=186s" },
    { title: "AR Demo", desc: "Demo vizualizare", href: "https://www.youtube.com/watch?v=KAdaWYEYgxw&t=66s" },
    { title: "AI Projects", desc: "Diverse proiecte AI", href: "https://youtu.be/NL4Oxcydq9Q" },
    { title: "Zapier Automatizare", desc: "Fluxuri automate", href: "https://youtu.be/wl6J7V-pMlY" },
  ],
};
