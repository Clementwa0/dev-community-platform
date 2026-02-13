import { Blog } from "@/types/blog";

export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const events = [
  {
    image: "/images/event1.png",
    title: "React Summit US 2025",
    slug: "react-summit-us-2025",
    location: "San Francisco, CA, USA",
    date: "2025-11-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-cloudnativecon-eu-2026",
    location: "Vienna, Austria",
    date: "2026-03-18",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "2025-12-01",
    time: "08:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Next.js Conf 2025",
    slug: "nextjs-conf-2025",
    location: "Los Angeles, CA, USA (Hybrid)",
    date: "2025-11-12",
    time: "09:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "San Jose, CA, USA",
    date: "2026-04-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "ETHGlobal Hackathon: Paris 2026",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "2026-07-10",
    time: "10:00 AM",
  },
];

export default events;

export const posts: Blog[] = [
  {
    id: "1",
    slug: "introduction-to-nextjs",
    title: "Introduction to Next.js",
    content: `
Built on top of React 
Supports Server-Side Rendering (SSR)  
Supports Static Site Generation (SSG)  
Includes built-in API routes  
Optimized for performance and SEO  
Great developer experience out of the box
`,
    published: true,
    author: "John Doe",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-01",
  },
  {
    id: "2",
    slug: "understanding-the-app-router",
    title: "Understanding the App Router",
    content: `
• Introduced in Next.js 13  
• Uses folder-based routing system  
• Supports nested layouts  
• Built-in loading and error states  
• Encourages use of Server Components  
• Improves scalability and structure
`,
    published: true,
    author: "John Doe",
    createdAt: "2025-01-02",
    updatedAt: "2025-01-02",
  },
  {
    id: "3",
    slug: "static-vs-server-rendering",
    title: "Static vs Server Rendering",
    content: `
• Static Generation builds pages at compile time  
• Server-Side Rendering builds pages per request  
• SSG is faster for mostly static content  
• SSR is better for dynamic real-time data  
• Both improve SEO compared to client-side rendering  
• Choose based on your application needs
`,
    published: true,
    author: "John Doe",
    createdAt: "2025-01-03",
    updatedAt: "2025-01-03",
  },
  {
    id: "4",
    slug: "dynamic-routes-in-nextjs",
    title: "Dynamic Routes in Next.js",
    content: `
• Uses bracket notation like [slug]  
• Ideal for blogs and product pages  
• Works with file-based routing  
• Can fetch data based on route parameter  
• Supports generateStaticParams  
• Easy to scale for large applications
`,
    published: true,
    author: "karen smith",
    createdAt: "2025-01-04",
    updatedAt: "2025-01-04",
  },
  {
    id: "5",
    slug: "api-routes-explained",
    title: "API Routes Explained",
    content: `
• Create backend endpoints inside Next.js  
• No separate server required  
• Handles authentication logic  
• Processes form submissions  
• Connects to databases  
• Runs securely on the server
`,
    published: false,
    author: "chris johnson",
    createdAt: "2025-01-05",
    updatedAt: "2025-01-05",
  },
  {
    id: "6",
    slug: "using-typescript-with-nextjs",
    title: "Using TypeScript with Next.js",
    content: `
• Built-in TypeScript support  
• Automatic type checking  
• Improves code reliability  
• Better IntelliSense support  
• Prevents runtime errors  
• Recommended for production apps
`,
    published: true,
    author: "gina lee",
    createdAt: "2025-01-06",
    updatedAt: "2025-01-06",
  },
  {
    id: "7",
    slug: "optimizing-performance",
    title: "Optimizing Performance",
    content: `
• Automatic code splitting  
• Image optimization with next/image  
• Built-in caching strategies  
• Supports dynamic imports  
• Reduces client-side JavaScript  
• Improves page loading speed
`,
    published: true,
    author: "Frank Miller",
    createdAt: "2025-01-07",
    updatedAt: "2025-01-07",
  },
  {
    id: "8",
    slug: "environment-variables-in-nextjs",
    title: "Environment Variables in Next.js",
    content: `
Store API keys securely  \n
Keep database URLs private  
Use NEXT_PUBLIC_ for client variables  
Prevent exposing sensitive data  
Easy configuration with .env files  
Recommended for production apps
`,
    published: false,
    author: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "9",
    slug: "deploying-to-vercel",
    title: "Deploying to Vercel",
    content: `
• Official platform for Next.js  
• Automatic CI/CD integration  
• Global edge network  
• Preview deployments  
• Optimized performance  
• Easy custom domain setup
`,
    published: true,
    author: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "10",
    slug: "middleware-in-nextjs",
    title: "Middleware in Next.js",
    content: `
• Runs before request completion  
• Used for authentication checks  
• Handles redirects  
• Supports A/B testing  
• Executes at the edge  
• Improves response time
`,
    published: true,
    author: "",
    createdAt: "",
    updatedAt: "",
  },
];
