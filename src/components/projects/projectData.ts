export interface Project {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "Web Development",
      imageUrl: "https://img.freepik.com/free-vector/flat-design-shopping-center-landing-page_23-2149322441.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Mobile Fitness App",
      category: "App Development",
      imageUrl: "https://img.freepik.com/free-vector/flat-design-fitness-app-template_23-2151084922.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Product Landing Page",
      category: "UI/UX Design",
      imageUrl: "https://img.freepik.com/premium-vector/shoes-landing-page-template_752850-1133.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
  ];
  