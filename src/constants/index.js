export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ReactJS and Nodejs, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using MongoDB and Nodejs.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "ReactJS",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 3,
        name: "Nodejs",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
 {
  id: 2,
  title: "Resume Builder",
  description:
    "A user-friendly Resume Builder that allows users to generate professional resumes with customizable templates and secure account access.",
  subDescription: [
    "Implemented secure user authentication using JWT and role-based access control.",
    "Developed an intuitive React frontend with Tailwind CSS for a modern and responsive design.",
    "Added multiple resume templates with dynamic sections like experience, skills, and education.",
    "Built REST APIs using Node.js and Express for managing user data and resume content.",
    "Integrated MySQL for structured and reliable data storage.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/resume-builder.jpg",
  tags: [
    {
      id: 1,
      name: "JavaScript",
      path: "/assets/logos/javascript.svg",
    },
    {
      id: 2,
      name: "React",
      path: "/assets/logos/react.svg",
    },
    {
      id: 3,
      name: "MySQL",
      path: "/assets/logos/mysql.svg",
    },
    {
      id: 4,
      name: "TailwindCSS",
      path: "/assets/logos/tailwindcss.svg",
    },
  ],
},
{
  id: 3,
  title: "Sorting Visualizer",
  description:
    "An interactive web application that visually demonstrates how different sorting algorithms work in real time.",
  subDescription: [
    "Implemented popular sorting algorithms such as Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.",
    "Built a clean and responsive interface using HTML, CSS, and vanilla JavaScript.",
    "Added real-time animations to show comparisons and swaps between array elements.",
    "Included adjustable speed and array size controls for a fully customizable experience.",
    "Designed the project to be lightweight, fast, and beginner-friendly for learning algorithm behavior.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/sorting-visualizer.jpg",
  tags: [
    {
      id: 1,
      name: "JavaScript",
      path: "/assets/logos/javascript.svg",
    },
    {
      id: 2,
      name: "HTML5",
      path: "/assets/logos/html5.svg",
    },
    {
      id: 3,
      name: "CSS3",
      path: "/assets/logos/css3.svg",
    },
  ],
},
{
  id: 4,
  title: "Food Delivery App (MERN Stack)",
  description:
    "A full-featured food delivery platform built using the MERN stack, enabling users to browse restaurants, place orders, track delivery status in real time, and make secure payments.",
  
  subDescription: [
    "Implemented user and restaurant authentication using JWT along with protected routes.",
    "Created separate user roles — customer and shop owner — each with different dashboards and permissions.",
    "Integrated real-time order updates using Socket.io (order creation, status update, live notifications).",
    "Developed a fully functional cart system with quantity updates, total calculation, and checkout flow.",
    "Built REST APIs using Node.js and Express to handle orders, menus, authentication, payments, and delivery logic.",
    "Used MongoDB for storing users, restaurants, menus, and order history with optimized schema design.",
    "Added responsive UI with React and Tailwind CSS for smooth experience across mobile and desktop.",
    "Implemented owner dashboard to manage menu items, view live orders, and update order status.",
    "Integrated Razorpay  for secure online payments"
  ],

  href: "", 
  logo: "", 
  image: "/assets/projects/food-delivery.jpg", 
  
  tags: [
    {
      id: 1,
      name: "React.js",
      path: "/assets/logos/react.svg",
    },
    {
      id: 2,
      name: "Node.js",
      path: "/assets/logos/nodejs.svg",
    },
    {
      id: 3,
      name: "Express",
      path: "/assets/logos/express.svg",
    },
    {
      id: 4,
      name: "MongoDB",
      path: "/assets/logos/mongodb.svg",
    },
    {
      id: 5,
      name: "Socket.io",
      path: "/assets/logos/socketio.svg",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      path: "/assets/logos/tailwind.svg",
    }
  ],
}


];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/dipak-zende",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Freelancer",
    job: "Full Stack Developer (MERN & Laravel)",
    date: "2023 – October 2024",
    contents: [
      "Developed and delivered full-stack web applications using MERN and Laravel frameworks.",
      "Built scalable backend APIs and authentication systems using Node.js, Express, and Laravel.",
      "Designed responsive and user-friendly UI/UX using React.js and Tailwind CSS.",
      "Implemented secure JWT-based authentication and role-based access control.",
      "Integrated third-party APIs (payment gateways, email services, storage solutions).",
      "Optimized application performance and improved SEO for client websites.",
    ],
  },
  {
    title: "Software Developer",
    job: "Software Development Engineer at Wepro Solutions",
    date: "2024 October – Present",
    contents: [
      "Developed scalable backend services and REST APIs using Node.js, Express, and MongoDB.",
      "Built interactive and responsive frontend applications using React.js.",
      "Designed database schemas and optimized queries for high-performance data handling.",
      "Implemented real-time features such as notifications and live updates using Socket.io.",
      "Integrated secure payment gateways (Razorpay/Stripe) and improved checkout workflows.",
      "Collaborated with cross-functional teams to deliver end-to-end product features on time.",
    ],
  },
];

export const reviews = [
  {
    name: "Pralhad",
    username: "@pralhad",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Ajay",
    username: "@ajay",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
