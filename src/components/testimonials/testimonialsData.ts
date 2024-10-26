// testimonialsData.ts
export interface Testimonial {
    id: number;
    name: string;
    message: string;
    imageUrl: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      message: "The service provided was exceptional and beyond expectations!",
      imageUrl: "https://img.freepik.com/premium-photo/handsome-black-man-with-beard-wearing-white-shirt-blur-office-background_977484-7724.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "A great experience! Highly recommended.",
      imageUrl: "https://img.freepik.com/free-photo/medium-shot-woman-working-as-lawyer_23-2151202445.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Samuel Green",
      message: "Their attention to detail is outstanding, and I loved the end result!",
      imageUrl: "https://img.freepik.com/free-photo/african-american-man-wearing-stylish-hat_23-2148634061.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid",
    },
    // Add more testimonials as needed
  ];
  