import { BarChart, Code2, Database, LineChart, PieChart, Terminal } from "lucide-react";
import { img } from "motion/react-client";

export const personalInfo = {
  name: "Roshan Chandravanshi",
  title: "Data Analyst & Visualization Expert",
  location: "Raipur,Chhattisgardh,India",
  email: "rkchandra09@gmail.com",
  phone:"+91 9630644173 , +91 9302966172",
  about:
    "I am a passionate Data Analyst with over 5 years of experience in transforming complex data into actionable insights. I specialize in predictive modeling, interactive dashboards, and statistical analysis to drive strategic business decisions. My goal is to bridge the gap between raw data and human understanding through elegant visualizations and robust analytical frameworks.",
  education: [
    {
      degree: "B.tech. in Computer Science Application",
      institution: "Cloumbia institute of enginnering & technology",
      year: "2019-2023",
      details: "Detail-oriented Data Analyst skilled in SQL, Excel, Power BI, and Python, with hands-on experience in data cleaning, visualization, and dashboard creation. Passionate about transforming raw data into actionable business insights to support informed decision-making.",
    },
  ],
};

export const skills = {
  languages: [
    { name: "Excel", level: 80 },
    { name: "Power-Bi", level: 80 },
    { name: "SQL", level: 90 },
     { name: "Python", level: 95 },
    { name: "Tableau", level: 80 },
    { name: "JavaScript/TypeScript", level: 75 },
  ],
  frameworks: ["Pandas", "NumPy", "React", "Node.js"],
  tools: ["Tableau", "Power BI", "Jupyter", "Git", "Docker", "AWS", "Google Cloud",],
  expertise: [
    {
      title: "Data Visualization",
      description: "Creating interactive and intuitive dashboards to communicate complex insights.",
      icon: PieChart,
    },
    {
      title: "Predictive Analytics",
      description: "Building machine learning models to forecast trends and outcomes.",
      icon: LineChart,
    },
    {
      title: "Data Engineering",
      description: "Designing robust ETL pipelines and optimizing data architectures.",
      icon: Database,
    },
  ],
};

export const projects = [
  {
    id: "p1",
    title: "Customer Behavior Dashboard",
    description:
      "Understanding customer shopping behavior is essential for improving customer experience, increasing revenue, and building effective marketing strategies. In this project, I analyzed a transactional dataset containing 3,900 customer purchases across multiple product categories. The analysis focuses on customer demographics, purchasing patterns, subscription behavior, discounts, product preferences, and revenue generation.",
    image: "/images/power_bi_ss.png",
    tags: ["Excel","Python","SQL","Power-bi"],
    githubUrl: "https://github.com/Rkc0310/Customer-Behavior-Dashboard",
    liveUrl: "https://www.kaggle.com/code/roshanchandravanshi/customer-behavior",
  },

  {
    id: "p2",
    title: "E-Commerce Sales Analytics",
    description:
      "The primary objective of this project is to convert raw transactional, customer, seller, product, and review data into strategic operational intelligence. The technical pipeline encompasses data cleaning and exploratory data analysis (EDA) in Python, complex analytical transactional querying using SQL, dimensional star-schema modeling and visualization in Power BI, and executive-level recommendations.",
     image: "/images/Dashboard Pages & Design Layout.png",
    tags: ["Excel","Python","SQL","Power-bi"],
    githubUrl: "https://github.com/Rkc0310/ecommerce-sales-powerbi-dashboard",
    liveUrl: "https://www.kaggle.com/code/roshanchandravanshi/e-commerce-sales-analytics",
  },

  {
    id: "p3",
    title: "Global Supply Chain Dashboard",
    description:
      "Built an interactive real-time dashboard tracking global shipments, identifying bottlenecks, and optimizing logistics routes. Handled over 10M+ rows of data.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["Power BI", "SQL", "Azure", "Python"],
    githubUrl: "#",
    liveUrl: "#",
  },
  
];

export const certificates = [
  // Local uploaded certificate images (from public/images). These are shown in the Certificates section only.
   {
    id: "img-1",
    name: "Foundations Data, Data, Everywhere",
    issuer: "Google",
    url: "https://coursera.org/share/3d1718c28dbbb121a6607115477be0af",
    image: "/images/Foundations Data, Data, Everywhere_page-0001.jpg",
    imageAlt: "Foundations Data, Data, Everywhere",
    imageSize: { width: 520, height: 320 },
  },

  {
    id: "img-2",
    name: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    date: "May 24,2026",
    url: "https://coursera.org/share/0711a8b5cf40b6f818a5e3d0a71d49f4",
    image: "/images/Ask Questions to Make Data-Driven Decisions_page-0001.jpg",
    imageAlt: "Ask Questions to Make Data-Driven Decisions",
    imageSize: { width: 520, height: 320 },
  },

   {
    id: "img-3",
    name: "Prepare Data for Exploration",
    issuer: "Google",
    date: "May 27,2026",
    url: "https://www.coursera.org/account/accomplishments/verify/VQMKQKZST4G4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    image: "/images/Prepare Data for Exploration_page-0001.jpg",
    imageAlt: "Prepare Data for Exploration",
    imageSize: { width: 520, height: 320 },
  },

    {
    id: "img-4",
    name: "Process Data from Dirty to Clean",
    issuer: "Google",
    date: "May 31,2026",
    url: "https://coursera.org/share/a599a546ccda4fc07b9d9af0425edff3",
    image: "/images/Process Data from Dirty to Clean_page-0001.jpg",
    imageAlt: "Process Data from Dirty to Clean",
    imageSize: { width: 520, height: 320 },
  },

  {
    id: "img-5",
    name: "Analyze Data to Answer Questions",
    issuer: "Google",
    url: "https://www.coursera.org/account/accomplishments/verify/6N96WEMEMLD6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    image: "/images/Analyze Data to Answer Questions_page-0001.jpg",
    imageAlt: "Analyze Data to Answer Questions",
    imageSize: { width: 520, height: 320 },
  },

  {
    id: "img-6",
    name: "Share Data Through the Art of Visualization",
    issuer: "Google",
    url: "https://coursera.org/share/4a497ac19ac26460d8a7059ed02ebd07",
    image: "/images/Share Data Through the Art of Visualization_page-0001.jpg",
    imageAlt: "Share Data Through the Art of Visualization",
    imageSize: { width: 520, height: 320 },
  },

   {
    id: "img-7",
    name: "Introduction to Data Analysis Using Python",
    issuer: "Google",
    url: "https://coursera.org/share/ef82e7b90692a3fe7117764102fc93bc",
    image: "/images/Introduction to Data Analysis Using Python_page-0001.jpg",
    imageAlt: "Introduction to Data Analysis Using Python",
    imageSize: { width: 520, height: 320 },
  },

   {
    id: "img-8",
    name: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Google",
    url: "https://coursera.org/share/b03e428c3de78be84ed733ce66034716",
    image: "/images/Preparing Data for Analysis with Microsoft Excel_page-0001.jpg",
    imageAlt: "Preparing Data for Analysis with Microsoft Excel",
    imageSize: { width: 520, height: 320 },
  },

   {
    id: "img-9",
    name: "Harnessing the Power of Data with Power BI",
    issuer: "Google",
    url: "https://coursera.org/share/7e9832cd8c0d1a2ff3b63e3b90f83191",
    image: "/images/Harnessing the Power of Data with Power BI_page-0001.jpg",
    imageAlt: "Harnessing the Power of Data with Power BI",
    imageSize: { width: 520, height: 320 },
  },

  {
    id: "img-10",
    name: "Extract, Transform and Load Data in Power BI",
    issuer: "Google",
    url: "https://coursera.org/share/be83d5da11167f13081646ec4cf20d27",
    image: "/images/Extract, Transform and Load Data in Power BI_page-0001.jpg",
    imageAlt: "ETL in Power BI",
    imageSize: { width: 520, height: 320 },
  },

  {
    id: "img-11",
    name: "Data Modeling in Power BI",
    issuer: "Google",
    url: "https://coursera.org/share/20d94a06f4882ef0121fc955cb2e5c9b",
    image: "/images/Data Modeling in Power BI_page-0001.jpg",
    imageAlt: "Data Modeling in Power BI",
    imageSize: { width: 520, height: 320 },
  },
];

// Mock data for interactive visualization gallery
export const salesData = [
  { month: "Jan", sales: 4000, profit: 2400 },
  { month: "Feb", sales: 3000, profit: 1398 },
  { month: "Mar", sales: 2000, profit: 9800 },
  { month: "Apr", sales: 2780, profit: 3908 },
  { month: "May", sales: 1890, profit: 4800 },
  { month: "Jun", sales: 2390, profit: 3800 },
  { month: "Jul", sales: 3490, profit: 4300 },
];

export const segmentData = [
  { name: "Enterprise", value: 400 },
  { name: "SMB", value: 300 },
  { name: "Consumer", value: 300 },
  { name: "Public Sector", value: 200 },
];
