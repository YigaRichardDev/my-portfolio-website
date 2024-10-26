// blogData.ts
export interface BlogPost {
    id: number;
    title: string;
    date: string;
    content: string;
    imageUrl: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Exploring the Future of AI",
      date: "October 26, 2024",
      content:
        "Artificial intelligence is transforming various sectors, including healthcare, finance, and education...",
      imageUrl: "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151675009.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "React Tips and Tricks",
      date: "October 20, 2024",
      content:
        "React's ecosystem is vast, and with it comes numerous tips and tricks to streamline your development...",
      imageUrl: "https://img.freepik.com/premium-photo/yellow-note-that-says-tips-tricks-it_777576-1783.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Design Principles for 2024",
      date: "October 15, 2024",
      content:
        "Design trends come and go, but some principles remain constant. Let's explore the key principles...",
      imageUrl: "https://img.freepik.com/free-vector/page-curl-style-2024-lettering-background-new-year-occasion-vector_1017-48632.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    // Add more blog posts as needed
  ];
  