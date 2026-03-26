export type Language = 'en' | 'nl';

interface Translations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    ai: string;
    skillsLabel: string;
  };
  projects: {
    title: string;
    categories: {
      name: string;
      items: {
        name: string;
        description: string;
        url?: string;
        tech: string[];
      }[];
    }[];
  };
  experience: {
    title: string;
    items: {
      period: string;
      company: string;
      role: string;
      description: string;
    }[];
    educationTitle: string;
    education: {
      period: string;
      institution: string;
      degree: string;
    }[];
    certificatesTitle: string;
    certificates: {
      name: string;
      issuer: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Thomas Vieveen',
      tagline: 'Software Engineer & Digital Consultant',
      cta: 'Get in touch',
    },
    about: {
      title: 'About me',
      p1: 'I\'m a software engineer with a strong background in both technology and business. With over 10 years of experience in .NET development and a Master\'s in Digital Business from the University of Amsterdam, I bridge the gap between technical solutions and business strategy.',
      p2: 'I specialize in building web applications, cloud-native solutions, and e-commerce platforms. Whether it\'s architecting a new system, optimizing existing processes, or leading a development team — I bring both technical depth and a business-minded perspective.',
      ai: 'I actively leverage AI in my daily workflow and know how to integrate it into real-world applications — from using LLMs (OpenAI, Anthropic, Gemini, Grok) and AI-assisted development tools to building intelligent features powered by Azure AI Services. I help businesses adopt AI pragmatically, turning hype into measurable value.',
      skillsLabel: 'Technologies I work with',
    },
    projects: {
      title: 'Projects',
      categories: [
        {
          name: 'Own Projects',
          items: [
            {
              name: 'Metriks',
              description: 'A paid Shopify SaaS plugin for automatic profit calculation, ad spend analysis, and product performance analytics. Connects with Google, Facebook, TikTok, and Pinterest.',
              url: 'https://metriks.nl',
              tech: ['Shopify', '.NET', 'Azure', 'React'],
            },
            {
              name: 'CompetitorScraping',
              description: 'A platform that connects businesses in need of competitor data with a curated network of scraping services, offering a full range of web scraping solutions.',
              url: 'https://competitorscraping.com',
              tech: ['.NET', 'Azure', 'Web Scraping'],
            },
          ],
        },
        {
          name: 'Client Projects',
          items: [
            {
              name: 'HartNetwerk',
              description: 'An invoicing tool for a healthcare organization with 100+ employees across 10+ companies. Automated complex hourly rate calculations (7 different rates based on day/time) into a one-click export.',
              tech: ['.NET', 'Azure', 'Blazor'],
            },
          ],
        },
        {
          name: 'WordPress',
          items: [
            {
              name: 'Elazorg',
              description: 'Website for a care organization providing small-scale living and daytime activities for people with disabilities.',
              url: 'https://elazorg.nl',
              tech: ['WordPress', 'Custom Theme'],
            },
            {
              name: 'Close2U',
              description: 'Website for a vocal trio, showcasing their repertoire, music samples, and booking information for events and performances.',
              url: 'https://close2u.eu',
              tech: ['WordPress', 'Custom Theme'],
            },
          ],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: '2024 — Present',
          company: 'ECT Rotterdam',
          role: 'Freelance Software Engineer',
          description: 'Building HPDX, a cloud messaging platform that processes millions of messages for sea terminals and shipping agencies worldwide. Tech: Azure, C#, .NET, Orleans, Azure Service Bus, Cosmos DB, Container Apps, Bicep, React.',
        },
        {
          period: '2022 — Present',
          company: 'SYMSON',
          role: 'Lead Developer & Competitor Data Expert',
          description: 'Responsible for software architecture, building a scalable cloud solution with .NET and Azure. Served as Scrum Master, leading the team through their Scrum adoption. Also handling competitor data sourcing and customer integrations.',
        },
        {
          period: '2020 — Present',
          company: 'Metriks',
          role: 'Founder',
          description: 'Founded a paid Shopify SaaS plugin offering automatic profit calculation, ad analysis, and product performance analytics. Connects with Google, Facebook, TikTok, and Pinterest advertising platforms.',
        },
        {
          period: '2019 — Present',
          company: 'ViSoft Solutions',
          role: 'Freelance .NET Developer & Owner',
          description: 'Freelance software development for SMEs, building websites and SaaS applications. Previously ran multiple e-commerce webshops with Facebook advertising (avg. ROAS ±4.5) and managed a small team.',
        },
        {
          period: '2019 — 2023',
          company: '4DotNet (Consultancy)',
          role: 'Senior .NET Developer',
          description: 'Consultancy roles at ANWB Reizen (ElasticSearch, Azure Functions, Cosmos DB, React), Agrifirm (Microservices, Kubernetes, Angular), Level Software (Azure multi-tenancy, pipelines), and SLS Logistics (cloud migration, Azure AD B2C, Bicep).',
        },
        {
          period: '2015 — 2019',
          company: 'Divide / Stockbase',
          role: 'ASP.NET Developer',
          description: 'Built an omnichannel e-commerce platform for retail organizations at Divide. At Stockbase, built the supplier-retailer portal from scratch in ASP.NET — serving 247 retailers, 118 suppliers, and 700M+ pieces of stock.',
        },
      ],
      educationTitle: 'Education',
      education: [
        {
          period: '2025 — 2027',
          institution: 'Capabel Onderwijs',
          degree: 'Social Work (in progress)',
        },
        {
          period: '2019 — 2021',
          institution: 'University of Amsterdam',
          degree: 'Business Administration: Digital Business (MSc)',
        },
        {
          period: '2015 — 2019',
          institution: 'The Hague University of Applied Sciences',
          degree: 'ICT — Software Engineering (BSc)',
        },
      ],
      certificatesTitle: 'Certificates',
      certificates: [
        {
          name: 'AZ-204: Developing Solutions for Microsoft Azure',
          issuer: 'Microsoft',
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Interested in working together? Feel free to reach out.',
      email: 'thomas@visoftsolutions.nl',
    },
  },
  nl: {
    nav: {
      about: 'Over mij',
      projects: 'Projecten',
      experience: 'Ervaring',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hallo, ik ben',
      name: 'Thomas Vieveen',
      tagline: 'Software Engineer & Digital Consultant',
      cta: 'Neem contact op',
    },
    about: {
      title: 'Over mij',
      p1: 'Ik ben een software engineer met een sterke achtergrond in zowel technologie als business. Met meer dan 10 jaar ervaring in .NET-ontwikkeling en een Master in Digital Business van de Universiteit van Amsterdam, overbrug ik de kloof tussen technische oplossingen en bedrijfsstrategie.',
      p2: 'Ik specialiseer mij in het bouwen van webapplicaties, cloud-native oplossingen en e-commerce platformen. Of het nu gaat om het ontwerpen van een nieuw systeem, het optimaliseren van bestaande processen of het leiden van een development team — ik breng zowel technische diepgang als een zakelijk perspectief.',
      ai: 'Ik maak dagelijks gebruik van AI en weet hoe ik het integreer in echte applicaties — van LLMs (OpenAI, Anthropic, Gemini, Grok) en AI-ondersteunde ontwikkeltools tot het bouwen van intelligente features met Azure AI Services. Ik help bedrijven AI pragmatisch in te zetten en hype om te zetten in meetbare waarde.',
      skillsLabel: 'Technologieën waar ik mee werk',
    },
    projects: {
      title: 'Projecten',
      categories: [
        {
          name: 'Eigen Projecten',
          items: [
            {
              name: 'Metriks',
              description: 'Een betaalde Shopify SaaS-plugin voor automatische winstberekening, advertentie-analyse en productanalytics. Koppelt met Google, Facebook, TikTok en Pinterest.',
              url: 'https://metriks.nl',
              tech: ['Shopify', '.NET', 'Azure', 'React'],
            },
            {
              name: 'CompetitorScraping',
              description: 'Een platform dat bedrijven die concurrentiedata nodig hebben verbindt met een netwerk van scraping-diensten voor een compleet aanbod aan web scraping.',
              url: 'https://competitorscraping.com',
              tech: ['.NET', 'Azure', 'Web Scraping'],
            },
          ],
        },
        {
          name: 'Klantprojecten',
          items: [
            {
              name: 'HartNetwerk',
              description: 'Een facturatietool voor een zorgorganisatie met 100+ medewerkers bij 10+ bedrijven. Geautomatiseerde complexe uurtariefberekeningen (7 tarieven afhankelijk van dag en tijdstip) tot een export met één klik.',
              tech: ['.NET', 'Azure', 'Blazor'],
            },
          ],
        },
        {
          name: 'WordPress',
          items: [
            {
              name: 'Elazorg',
              description: 'Website voor een zorgorganisatie die kleinschalig wonen en dagbesteding biedt voor mensen met een beperking.',
              url: 'https://elazorg.nl',
              tech: ['WordPress', 'Custom Theme'],
            },
            {
              name: 'Close2U',
              description: 'Website voor een zangtrio, met hun repertoire, muziekvoorbeelden en boekingsinformatie voor evenementen en optredens.',
              url: 'https://close2u.eu',
              tech: ['WordPress', 'Custom Theme'],
            },
          ],
        },
      ],
    },
    experience: {
      title: 'Ervaring',
      items: [
        {
          period: '2024 — Heden',
          company: 'ECT Rotterdam',
          role: 'Freelance Software Engineer',
          description: 'Bouwen aan HPDX, een cloud messaging platform dat miljoenen berichten verwerkt voor zeeterminals en scheepvaartagentschappen wereldwijd. Tech: Azure, C#, .NET, Orleans, Azure Service Bus, Cosmos DB, Container Apps, Bicep, React.',
        },
        {
          period: '2022 — Heden',
          company: 'SYMSON',
          role: 'Lead Developer & Competitor Data Expert',
          description: 'Verantwoordelijk voor de softwarearchitectuur en het bouwen van een schaalbare cloudoplossing met .NET en Azure. Daarnaast actief als Scrum Master bij het invoeren van Scrum binnen het team. Ook verantwoordelijk voor concurrentiedata en klantintegraties.',
        },
        {
          period: '2020 — Heden',
          company: 'Metriks',
          role: 'Oprichter',
          description: 'Een betaalde Shopify SaaS-plugin voor automatische winstberekening, advertentie-analyse en productanalytics. Koppelt met Google, Facebook, TikTok en Pinterest.',
        },
        {
          period: '2019 — Heden',
          company: 'ViSoft Solutions',
          role: 'Freelance .NET Developer & Eigenaar',
          description: 'Freelance softwareontwikkeling voor het MKB, bouwen van websites en SaaS-applicaties. Eerder meerdere e-commerce webshops gerund met Facebook-advertenties (gem. ROAS ±4.5) en een klein team aangestuurd.',
        },
        {
          period: '2019 — 2023',
          company: '4DotNet (Detachering)',
          role: 'Senior .NET Developer',
          description: 'Detacheringsrollen bij ANWB Reizen (ElasticSearch, Azure Functions, Cosmos DB, React), Agrifirm (Microservices, Kubernetes, Angular), Level Software (Azure multi-tenancy, pipelines) en SLS Logistics (cloudmigratie, Azure AD B2C, Bicep).',
        },
        {
          period: '2015 — 2019',
          company: 'Divide / Stockbase',
          role: 'ASP.NET Developer',
          description: 'Gebouwd aan een omnichannel e-commerce platform voor retailorganisaties bij Divide. Bij Stockbase het leveranciers-retailerportaal from scratch gebouwd in ASP.NET — voor 247 retailers, 118 leveranciers en 700M+ stuks voorraad.',
        },
      ],
      educationTitle: 'Opleidingen',
      education: [
        {
          period: '2025 — 2027',
          institution: 'Capabel Onderwijs',
          degree: 'Social Work (in opleiding)',
        },
        {
          period: '2019 — 2021',
          institution: 'Universiteit van Amsterdam',
          degree: 'Business Administration: Digital Business (MSc)',
        },
        {
          period: '2015 — 2019',
          institution: 'De Haagse Hogeschool',
          degree: 'HBO-ICT — Software Engineering (BSc)',
        },
      ],
      certificatesTitle: 'Certificaten',
      certificates: [
        {
          name: 'AZ-204: Developing Solutions for Microsoft Azure',
          issuer: 'Microsoft',
        },
      ],
    },
    contact: {
      title: 'Neem contact op',
      subtitle: 'Interesse om samen te werken? Neem gerust contact op.',
      email: 'thomas@visoftsolutions.nl',
    },
  },
};

export default translations;
