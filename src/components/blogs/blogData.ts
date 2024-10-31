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
    {
      id: 4,
      title: "Mastering JavaScript ES2024",
      date: "October 10, 2024",
      content:
        "JavaScript continues to evolve with exciting new features in ES2024. In this article, we’ll dive into the latest...",
      imageUrl: "https://img.freepik.com/free-photo/person-working-with-stock-market-finance-computer-broker-looking-data-charts-with-crypto-currency-financial-exchange-global-investment-entrepreneur-analyzing-trade-value_482257-28082.jpg?uid=R111143381&ga=GA1.1.983197529.1714832800&semt=ais_siglip",
    },
    {
      id: 5,
      title: "CSS Layout Techniques",
      date: "October 5, 2024",
      content:
        "CSS layouts are crucial in web development. Discover effective layout techniques that can enhance your web pages...",
      imageUrl: "https://img.freepik.com/premium-photo/programming-web-pages-with-html-css-code-desktop-computer_671359-114.jpg?uid=R111143381&ga=GA1.1.983197529.1714832800&semt=ais_siglip",
    },
    {
      id: 6,
      title: "Building Scalable Applications",
      date: "October 1, 2024",
      content:
        "Scalability is key to growing applications. Learn how to structure and plan your code for maximum efficiency...",
      imageUrl: "https://img.freepik.com/free-photo/man-holding-smartphone-with-apartment-buildings-hologram_23-2149369107.jpg?uid=R111143381&ga=GA1.1.983197529.1714832800&semt=ais_siglip",
    },
    // Add more blog posts as needed
  ];
  