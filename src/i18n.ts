export type Language = 'en' | 'nl';

export type ProjectCategory = 'own' | 'client' | 'wordpress';
export type VentureLogo = 'visoft' | 'metriks' | 'xuivi' | 'shop';

interface Stat {
  value: string;
  label: string;
}

interface Translations {
  nav: {
    work: string;
    experience: string;
    ventures: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    role: string;
    intro: string;
    cta: string;
    secondary: string;
    currentlyLabel: string;
    currentlyTitle: string;
    currentlyText: string;
    facts: { label: string; value: string; status?: 'on' | 'off' }[];
  };
  stats: Stat[];
  projects: {
    label: string;
    title: string;
    filters: Record<'all' | ProjectCategory, string>;
    categories: Record<ProjectCategory, string>;
    visit: string;
    showAll: string;
    showFewer: string;
    items: {
      name: string;
      category: ProjectCategory;
      description: string;
      url?: string;
      tech: string[];
    }[];
    cta: { title: string; text: string; action: string };
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    items: {
      period: string;
      company: string;
      role: string;
      description: string;
    }[];
    education: {
      period: string;
      degree: string;
      institution: string;
    }[];
  };
  ventures: {
    label: string;
    title: string;
    intro: string;
    items: {
      name: string;
      logo: VentureLogo;
      period: string;
      role: string;
      description: string;
      url?: string;
      stats: Stat[];
    }[];
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      work: '~/work',
      experience: '~/experience',
      ventures: '~/ventures',
      about: '~/about',
      contact: '~/contact',
      cta: 'Get in touch',
    },
    hero: {
      role: 'Software engineer & digital consultant',
      intro:
        'I design and build cloud platforms on .NET and Azure, from pipelines moving millions of messages to profitable SaaS, with a business degree to back the decisions.',
      cta: 'Get in touch',
      secondary: 'View projects',
      currentlyLabel: 'Currently',
      currentlyTitle: 'Building HPDX at ECT Rotterdam',
      currentlyText:
        'A cloud messaging platform processing millions of messages for sea terminals and shipping agencies worldwide.',
      facts: [
        { label: 'projects', value: 'Available', status: 'on' },
        { label: 'freelance hire', value: 'Not available', status: 'off' },
        { label: 'core stack', value: '.NET · Azure · React' },
        { label: 'based in', value: 'The Netherlands' },
      ],
    },
    stats: [
      { value: '18M+', label: 'pages scraped' },
      { value: '€10M+', label: 'revenue tracked' },
      { value: '406', label: 'webshops on Metriks' },
      { value: '10+', label: 'years .NET & Azure' },
    ],
    projects: {
      label: '01 / work',
      title: 'Things I’ve built',
      filters: { all: 'all', own: 'own products', client: 'client', wordpress: 'wordpress' },
      categories: { own: 'own product', client: 'client', wordpress: 'wordpress' },
      visit: 'Visit',
      showAll: '+ {n} more · show all projects',
      showFewer: 'show fewer',
      items: [
        {
          name: 'Metriks',
          category: 'own',
          description:
            'Paid Shopify SaaS for automatic profit calculation, ad-spend analysis and product performance. Connects with Google, Facebook, TikTok and Pinterest.',
          url: 'https://metriks.nl',
          tech: ['Shopify', '.NET', 'Azure', 'React'],
        },
        {
          name: 'Xuivi',
          category: 'own',
          description:
            'Turns any website into clean JSON: product pages, listings, paginated search and pages behind a login. JavaScript, proxies, bot walls and retries are handled. Pay per successful page.',
          url: 'https://xuivi.com',
          tech: ['.NET', 'Azure', 'Web scraping', 'API'],
        },
        {
          name: 'HartNetwerk',
          category: 'client',
          description:
            'Invoicing tool for a healthcare organization with 100+ employees across 10+ companies. Seven day- and time-based hourly rates reduced to a one-click export.',
          tech: ['.NET', 'Azure', 'Blazor'],
        },
        {
          name: 'Vieveen A.B.C.',
          category: 'client',
          description:
            'Website for an accounting and tax-advice firm in Nootdorp that has helped individuals and entrepreneurs for over 30 years.',
          url: 'https://abcvieveen.nl',
          tech: ['Next.js', 'React'],
        },
        {
          name: 'Elazorg',
          category: 'wordpress',
          description:
            'Website for a care organization providing small-scale living and daytime activities for people with disabilities.',
          url: 'https://elazorg.nl',
          tech: ['WordPress', 'Custom theme'],
        },
        {
          name: 'Close2U',
          category: 'wordpress',
          description:
            'Website for a vocal trio, with their repertoire, music samples and booking information for events.',
          url: 'https://close2u.eu',
          tech: ['WordPress', 'Custom theme'],
        },
      ],
      cta: {
        title: 'Your project next?',
        text: 'Let’s talk about what you want to build.',
        action: '$ start-conversation',
      },
    },
    experience: {
      label: '02 / experience',
      title: 'Where I’ve made impact',
      subtitle: 'Teams and clients I’ve worked in and for.',
      items: [
        {
          period: '2024 → now',
          company: 'ECT Rotterdam',
          role: 'freelance software engineer',
          description:
            'Building HPDX, a cloud messaging platform that processes millions of messages for sea terminals and shipping agencies worldwide. Azure, .NET, Orleans, Service Bus, Cosmos DB, Container Apps, Bicep, React.',
        },
        {
          period: '2022 → now',
          company: 'SYMSON',
          role: 'lead developer',
          description:
            'Software architecture for a scalable .NET and Azure cloud solution. Scrum Master during the team’s Scrum adoption. Competitor data sourcing and customer integrations.',
        },
        {
          period: '2019 → 2023',
          company: '4DotNet',
          role: 'medior → senior .net developer',
          description:
            'Consultancy at ANWB Reizen (ElasticSearch, Azure Functions, Cosmos DB, React), Agrifirm (microservices, Kubernetes, Angular), Level Software (Azure multi-tenancy, pipelines) and SLS Logistics (cloud migration, Azure AD B2C, Bicep).',
        },
        {
          period: '2015 → 2019',
          company: 'Divide / Stockbase',
          role: 'asp.net developer',
          description:
            'An omnichannel e-commerce platform for retail organizations at Divide. At Stockbase, the supplier-retailer portal from scratch: 247 retailers, 118 suppliers, 700M+ pieces of stock.',
        },
      ],
      education: [
        { period: '2025 — 2027', degree: 'Social Work (in progress)', institution: 'Capabel Onderwijs' },
        { period: '2019 — 2021', degree: 'MSc Digital Business', institution: 'University of Amsterdam' },
        { period: '2015 — 2019', degree: 'BSc Software Engineering', institution: 'The Hague University of Applied Sciences' },
        { period: 'certificate · microsoft', degree: 'AZ-204', institution: 'Developing Solutions for Microsoft Azure' },
      ],
    },
    ventures: {
      label: '03 / ventures',
      title: 'Businesses I’ve built and run',
      intro: 'Seven years of running my own companies: I know what it takes to ship, sell and support a product.',
      items: [
        {
          name: 'ViSoft Solutions',
          logo: 'visoft',
          period: '2019 → now',
          role: 'owner',
          description: 'My freelance company: software development for SMEs, building websites and SaaS applications.',
          stats: [
            { value: '7+', label: 'years' },
            { value: 'SMEs', label: 'clients' },
          ],
        },
        {
          name: 'Metriks',
          logo: 'metriks',
          period: '2020 → now',
          role: 'founder',
          description:
            'A paid Shopify app for profit calculation, ad analysis and product performance. Connects with Google, Facebook, TikTok and Pinterest.',
          url: 'https://metriks.nl',
          stats: [
            { value: '€10M+', label: 'revenue tracked' },
            { value: '4', label: 'ad platforms' },
          ],
        },
        {
          name: 'Xuivi',
          logo: 'xuivi',
          period: '2022 → now',
          role: 'founder',
          description:
            'Xuivi turns any website into clean JSON: product pages, listings, paginated search and pages behind a login, with proxies, bot walls and retries handled. Also the engine behind CompetitorScraping, for businesses that need competitor data.',
          url: 'https://xuivi.com',
          stats: [
            { value: '18M+', label: 'pages scraped' },
            { value: '15K+', label: 'scrape jobs' },
          ],
        },
        {
          name: 'E-commerce webshops',
          logo: 'shop',
          period: 'previously',
          role: 'owner',
          description:
            'Ran several webshops on Facebook advertising and managed a small team, which is where the hands-on e-commerce know-how comes from.',
          stats: [
            { value: '10K+', label: 'products sold' },
            { value: '±4.5', label: 'avg. ROAS' },
          ],
        },
      ],
    },
    about: {
      label: '04 / about',
      title: 'Between tech and business',
      p1: 'Over ten years of .NET and a Master’s in Digital Business from the University of Amsterdam. I architect new systems, optimize existing ones and lead teams, with a business-minded view on every decision.',
      p2: 'I use AI daily, from LLMs by OpenAI, Anthropic, Gemini and Grok to features on Azure AI Services, and help businesses adopt it where it adds measurable value.',
    },
    contact: {
      label: '05 / contact',
      title: 'Let’s build something that scales.',
      subtitle: 'Interested in working together? Feel free to reach out.',
      email: 'email',
      linkedin: 'linkedin',
    },
  },
  nl: {
    nav: {
      work: '~/werk',
      experience: '~/ervaring',
      ventures: '~/ondernemingen',
      about: '~/over',
      contact: '~/contact',
      cta: 'Neem contact op',
    },
    hero: {
      role: 'Software engineer & digital consultant',
      intro:
        'Ik ontwerp en bouw cloudplatformen op .NET en Azure, van pipelines die miljoenen berichten verwerken tot winstgevende SaaS, met een bedrijfskundige achtergrond achter elke keuze.',
      cta: 'Neem contact op',
      secondary: 'Bekijk projecten',
      currentlyLabel: 'Nu',
      currentlyTitle: 'Bouwen aan HPDX bij ECT Rotterdam',
      currentlyText:
        'Een cloud messaging platform dat miljoenen berichten verwerkt voor zeeterminals en scheepvaartagenten wereldwijd.',
      facts: [
        { label: 'projecten', value: 'Beschikbaar', status: 'on' },
        { label: 'freelance inhuur', value: 'Niet beschikbaar', status: 'off' },
        { label: 'kernstack', value: '.NET · Azure · React' },
        { label: 'gevestigd in', value: 'Nederland' },
      ],
    },
    stats: [
      { value: '18M+', label: 'pagina’s gescrapet' },
      { value: '€10M+', label: 'omzet gevolgd' },
      { value: '406', label: 'webshops op Metriks' },
      { value: '10+', label: 'jaar .NET & Azure' },
    ],
    projects: {
      label: '01 / werk',
      title: 'Wat ik heb gebouwd',
      filters: { all: 'alles', own: 'eigen producten', client: 'klant', wordpress: 'wordpress' },
      categories: { own: 'eigen product', client: 'klant', wordpress: 'wordpress' },
      visit: 'Bezoek',
      showAll: '+ {n} meer · toon alle projecten',
      showFewer: 'toon minder',
      items: [
        {
          name: 'Metriks',
          category: 'own',
          description:
            'Betaalde Shopify SaaS voor automatische winstberekening, analyse van advertentie-uitgaven en productprestaties. Koppelt met Google, Facebook, TikTok en Pinterest.',
          url: 'https://metriks.nl',
          tech: ['Shopify', '.NET', 'Azure', 'React'],
        },
        {
          name: 'Xuivi',
          category: 'own',
          description:
            'Zet elke website om in nette JSON: productpagina’s, overzichten, gepagineerde zoekresultaten en pagina’s achter een login. JavaScript, proxies, botmuren en retries worden afgehandeld. Betalen per geslaagde pagina.',
          url: 'https://xuivi.com',
          tech: ['.NET', 'Azure', 'Web scraping', 'API'],
        },
        {
          name: 'HartNetwerk',
          category: 'client',
          description:
            'Facturatietool voor een zorgorganisatie met 100+ medewerkers bij 10+ bedrijven. Zeven uurtarieven afhankelijk van dag en tijdstip, teruggebracht tot een export met één klik.',
          tech: ['.NET', 'Azure', 'Blazor'],
        },
        {
          name: 'Vieveen A.B.C.',
          category: 'client',
          description:
            'Website voor een administratie- en belastingadvieskantoor in Nootdorp dat particulieren en ondernemers al ruim 30 jaar helpt.',
          url: 'https://abcvieveen.nl',
          tech: ['Next.js', 'React'],
        },
        {
          name: 'Elazorg',
          category: 'wordpress',
          description:
            'Website voor een zorgorganisatie die kleinschalig wonen en dagbesteding biedt voor mensen met een beperking.',
          url: 'https://elazorg.nl',
          tech: ['WordPress', 'Custom theme'],
        },
        {
          name: 'Close2U',
          category: 'wordpress',
          description:
            'Website voor een zangtrio, met hun repertoire, muziekvoorbeelden en boekingsinformatie voor evenementen.',
          url: 'https://close2u.eu',
          tech: ['WordPress', 'Custom theme'],
        },
      ],
      cta: {
        title: 'Jouw project als volgende?',
        text: 'Laten we praten over wat je wilt bouwen.',
        action: '$ start-gesprek',
      },
    },
    experience: {
      label: '02 / ervaring',
      title: 'Waar ik impact heb gemaakt',
      subtitle: 'Teams en klanten waarin en waarvoor ik heb gewerkt.',
      items: [
        {
          period: '2024 → nu',
          company: 'ECT Rotterdam',
          role: 'freelance software engineer',
          description:
            'Bouwen aan HPDX, een cloud messaging platform dat miljoenen berichten verwerkt voor zeeterminals en scheepvaartagenten wereldwijd. Azure, .NET, Orleans, Service Bus, Cosmos DB, Container Apps, Bicep, React.',
        },
        {
          period: '2022 → nu',
          company: 'SYMSON',
          role: 'lead developer',
          description:
            'Softwarearchitectuur voor een schaalbare cloudoplossing met .NET en Azure. Scrum Master tijdens de invoering van Scrum in het team. Concurrentiedata en klantintegraties.',
        },
        {
          period: '2019 → 2023',
          company: '4DotNet',
          role: 'medior → senior .net developer',
          description:
            'Detachering bij ANWB Reizen (ElasticSearch, Azure Functions, Cosmos DB, React), Agrifirm (microservices, Kubernetes, Angular), Level Software (Azure multi-tenancy, pipelines) en SLS Logistics (cloudmigratie, Azure AD B2C, Bicep).',
        },
        {
          period: '2015 → 2019',
          company: 'Divide / Stockbase',
          role: 'asp.net developer',
          description:
            'Een omnichannel e-commerceplatform voor retailorganisaties bij Divide. Bij Stockbase het leveranciers-retailerportaal vanaf nul: 247 retailers, 118 leveranciers, 700M+ stuks voorraad.',
        },
      ],
      education: [
        { period: '2025 — 2027', degree: 'Social Work (in opleiding)', institution: 'Capabel Onderwijs' },
        { period: '2019 — 2021', degree: 'MSc Digital Business', institution: 'Universiteit van Amsterdam' },
        { period: '2015 — 2019', degree: 'HBO-ICT Software Engineering', institution: 'De Haagse Hogeschool' },
        { period: 'certificaat · microsoft', degree: 'AZ-204', institution: 'Developing Solutions for Microsoft Azure' },
      ],
    },
    ventures: {
      label: '03 / ondernemingen',
      title: 'Bedrijven die ik heb opgezet en run',
      intro: 'Zeven jaar eigen bedrijven runnen: ik weet wat erbij komt kijken om een product te bouwen, verkopen en ondersteunen.',
      items: [
        {
          name: 'ViSoft Solutions',
          logo: 'visoft',
          period: '2019 → nu',
          role: 'eigenaar',
          description: 'Mijn freelancebedrijf: softwareontwikkeling voor het mkb, van websites tot SaaS-applicaties.',
          stats: [
            { value: '7+', label: 'jaar' },
            { value: 'MKB', label: 'klanten' },
          ],
        },
        {
          name: 'Metriks',
          logo: 'metriks',
          period: '2020 → nu',
          role: 'oprichter',
          description:
            'Een betaalde Shopify-app voor winstberekening, advertentie-analyse en productprestaties. Koppelt met Google, Facebook, TikTok en Pinterest.',
          url: 'https://metriks.nl',
          stats: [
            { value: '€10M+', label: 'omzet gevolgd' },
            { value: '4', label: 'advertentieplatformen' },
          ],
        },
        {
          name: 'Xuivi',
          logo: 'xuivi',
          period: '2022 → nu',
          role: 'oprichter',
          description:
            'Xuivi zet elke website om in nette JSON: productpagina’s, overzichten, gepagineerde zoekresultaten en pagina’s achter een login, inclusief proxies, botmuren en retries. Ook de motor achter CompetitorScraping, voor bedrijven die concurrentiedata nodig hebben.',
          url: 'https://xuivi.com',
          stats: [
            { value: '18M+', label: 'pagina’s gescrapet' },
            { value: '15K+', label: 'scrape-jobs' },
          ],
        },
        {
          name: 'E-commerce webshops',
          logo: 'shop',
          period: 'eerder',
          role: 'eigenaar',
          description:
            'Meerdere webshops gerund op Facebook-advertenties en een klein team aangestuurd. Daar komt de praktische e-commercekennis vandaan.',
          stats: [
            { value: '10K+', label: 'producten verkocht' },
            { value: '±4.5', label: 'gem. ROAS' },
          ],
        },
      ],
    },
    about: {
      label: '04 / over',
      title: 'Tussen techniek en business',
      p1: 'Ruim tien jaar .NET en een Master in Digital Business aan de Universiteit van Amsterdam. Ik ontwerp nieuwe systemen, verbeter bestaande en leid teams, met een zakelijke blik op elke beslissing.',
      p2: 'Ik gebruik AI dagelijks, van LLM’s van OpenAI, Anthropic, Gemini en Grok tot features op Azure AI Services, en help bedrijven het in te zetten waar het meetbare waarde oplevert.',
    },
    contact: {
      label: '05 / contact',
      title: 'Laten we iets bouwen dat schaalt.',
      subtitle: 'Interesse om samen te werken? Neem gerust contact op.',
      email: 'e-mail',
      linkedin: 'linkedin',
    },
  },
};

export default translations;
