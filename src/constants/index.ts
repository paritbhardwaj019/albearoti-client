export const ALL_POSTS = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    slug: "understanding-javascript-closures",
    content:
      "A closure is the combination of a function bundled together with references to its surrounding state. In JavaScript, closures are created every time a function is created, at function creation time. This concept allows for powerful patterns like function factories, private data, and function currying. For instance, if you have a function `outerFunction` that defines a variable and then returns an `innerFunction` that has access to that variable, the returned function will maintain a reference to the variable even after the `outerFunction` has finished execution. This behavior is fundamental to JavaScript's function-based nature and is widely used in various design patterns, especially in functional programming. Understanding closures can help you write more efficient and cleaner code, avoid common pitfalls, and better understand how JavaScript manages memory.",
    author: "John Doe",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-08-05",
    tags: ["JavaScript", "Programming", "Web Development"],
  },
  {
    id: 2,
    title: "A Guide to Responsive Web Design",
    slug: "a-guide-to-responsive-web-design",
    content:
      "Responsive web design is a crucial aspect of modern web development, ensuring that websites provide an optimal viewing experience across a wide range of devices. This involves using flexible layouts, fluid grids, and media queries to adjust the design based on the device's screen size, orientation, and resolution. The goal is to make web pages look good and function well on desktops, tablets, and mobile phones. Techniques such as using relative units instead of fixed units, CSS media queries to apply different styles depending on the device's characteristics, and designing with a mobile-first approach are common practices in responsive design. Additionally, responsive design includes considerations for touch interfaces, high-density displays, and other device-specific features. By implementing responsive design, developers can create a seamless user experience that adapts to the user's context, improving accessibility and usability.",
    author: "Jane Smith",
    date: "2024-08-04",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    tags: ["Web Design", "CSS", "Responsive"],
  },
  {
    id: 3,
    title: "Introduction to React Hooks",
    slug: "introduction-to-react-hooks",
    content:
      "React Hooks were introduced in React 16.8 and have revolutionized how developers manage state and side effects in functional components. Hooks like `useState` and `useEffect` allow you to use state and lifecycle features without writing class components. `useState` lets you add state to a functional component, while `useEffect` lets you perform side effects, such as data fetching or DOM manipulation, in function components. Other hooks like `useContext` provide an easy way to share state across components, and `useReducer` offers a way to manage complex state logic. Custom hooks enable developers to extract and reuse logic across multiple components, leading to cleaner and more maintainable code. Hooks have simplified the React component model, making it easier to understand and reason about components, while also encouraging best practices like avoiding side effects in the component body.",
    author: "Alice Johnson",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-08-03",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 4,
    title: "Building a RESTful API with Node.js",
    slug: "building-a-restful-api-with-nodejs",
    content:
      "RESTful APIs are a crucial part of modern web development, allowing different software systems to communicate over HTTP. Node.js, with its non-blocking I/O and asynchronous nature, is a popular choice for building RESTful APIs. To create a RESTful API with Node.js, you typically start by setting up a server using a framework like Express.js. You'll define various routes that correspond to different endpoints, each handling specific HTTP methods like GET, POST, PUT, and DELETE. These methods map to CRUD (Create, Read, Update, Delete) operations, enabling you to perform actions on resources. Middleware functions can be used for tasks like authentication, logging, and data validation. To interact with a database, you can use an ORM like Sequelize or Mongoose, or opt for raw SQL queries. Proper error handling, request validation, and response formatting are essential to ensure the API is robust and user-friendly. By adhering to REST principles, such as statelessness and resource-based URLs, you can create scalable and maintainable APIs that clients can easily consume.",
    author: "Bob Lee",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-08-02",
    tags: ["Node.js", "API", "Backend Development"],
  },
  {
    id: 5,
    title: "Mastering Python for Data Science",
    slug: "mastering-python-for-data-science",
    content:
      "Python has become the go-to language for data science, thanks to its simplicity and powerful libraries. To master Python for data science, you need to familiarize yourself with libraries like NumPy for numerical computations, pandas for data manipulation and analysis, and Matplotlib and Seaborn for data visualization. Machine learning tasks can be tackled with libraries like scikit-learn, TensorFlow, and PyTorch, which provide tools for model training, evaluation, and deployment. Additionally, understanding data preprocessing techniques, such as normalization and feature engineering, is crucial for building accurate models. Python's integration with big data tools like Hadoop and Spark, along with its compatibility with databases and cloud platforms, makes it a versatile choice for data science projects. The Jupyter Notebook environment is often used for exploratory data analysis, allowing for interactive code execution and visualization. By mastering Python, you can efficiently analyze large datasets, build predictive models, and derive insights to drive decision-making.",
    author: "Eve Wright",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-08-01",
    tags: ["Python", "Data Science", "Machine Learning"],
  },
  {
    id: 6,
    title: "An Introduction to TypeScript",
    slug: "an-introduction-to-typescript",
    content:
      "TypeScript is a superset of JavaScript that adds static typing, enhancing the developer experience by catching type-related errors during development rather than at runtime. It provides a more robust codebase by allowing developers to define types for variables, function parameters, and return values. This feature helps in documenting the code and enables better tooling support, such as autocompletion and refactoring. TypeScript also introduces interfaces and type aliases, which help in defining complex types and ensuring consistent data structures. The TypeScript compiler can compile TypeScript code into JavaScript, making it compatible with any JavaScript runtime. It supports modern JavaScript features and can be configured to target specific ECMAScript versions. Adopting TypeScript can lead to more maintainable and scalable applications, especially in large codebases or teams where consistent data structures and type safety are crucial. Its popularity has grown significantly, and it's now widely used in both frontend and backend development.",
    author: "Frank Thompson",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-07-31",
    tags: ["TypeScript", "JavaScript", "Web Development"],
  },
  {
    id: 7,
    title: "Exploring the Basics of Docker",
    slug: "exploring-the-basics-of-docker",
    content:
      "Docker is a platform that simplifies the deployment and management of applications by packaging them in containers. These containers include everything needed to run an application, such as the code, runtime, libraries, and dependencies, ensuring that the application behaves the same regardless of the environment. This eliminates the common issue of 'it works on my machine' by providing a consistent runtime environment. Docker uses images as the blueprint for containers, which can be created using Dockerfiles that define the environment and instructions for building the image. Docker Hub is a repository where you can find and share Docker images. Docker Compose allows you to define and run multi-container Docker applications, making it easy to manage complex applications with multiple services. Docker has revolutionized the way developers build, ship, and run applications, offering benefits like isolation, portability, and efficient resource utilization. It's widely used in DevOps practices and is a key component in modern CI/CD pipelines.",
    author: "Grace Wilson",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-07-30",
    tags: ["Docker", "DevOps", "Containerization"],
  },
  {
    id: 8,
    title: "Understanding the Basics of Git and GitHub",
    slug: "understanding-the-basics-of-git-and-github",
    content:
      "Git is a distributed version control system that helps developers track changes to their code and collaborate with others. Unlike centralized version control systems, Git allows each developer to have a complete copy of the repository, including its history, on their local machine. This enables offline work and faster operations. Key concepts in Git include commits, branches, and merges. Commits represent snapshots of the project at a point in time, branches allow for parallel development without affecting the main codebase, and merges integrate changes from different branches. GitHub is a web-based platform that hosts Git repositories and provides tools for collaboration, such as pull requests, issues, and project boards. Pull requests are a way for developers to propose changes to a codebase, and they can be reviewed and discussed before being merged. GitHub also offers features like actions for CI/CD, package registries, and GitHub Pages for hosting static websites. Understanding Git and GitHub is essential for modern software development, enabling effective version control and collaboration.",
    author: "Henry Adams",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-07-29",
    tags: ["Git", "GitHub", "Version Control"],
  },
  {
    id: 9,
    title: "A Beginner's Guide to Kubernetes",
    slug: "a-beginners-guide-to-kubernetes",
    content:
      "Kubernetes is an open-source platform designed to automate the deployment, scaling, and management of containerized applications. It provides a robust set of tools and abstractions, such as pods, services, and deployments, to manage applications at scale. A pod is the smallest deployable unit in Kubernetes and can contain one or more containers. Services define how pods are exposed to the network, and deployments manage the desired state of applications, allowing for easy updates and rollbacks. Kubernetes also handles load balancing, service discovery, and self-healing by automatically restarting failed containers. It can scale applications up or down based on demand and can be integrated with various cloud providers for infrastructure management. Kubernetes' extensibility and rich ecosystem of tools and plugins make it a powerful choice for managing containerized workloads. However, its complexity can be challenging for beginners, requiring a solid understanding of concepts like containerization, orchestration, and networking.",
    author: "Isabella Martinez",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-07-28",
    tags: ["Kubernetes", "DevOps", "Container Orchestration"],
  },
  {
    id: 10,
    title: "Learning the Basics of GraphQL",
    slug: "learning-the-basics-of-graphql",
    content:
      "GraphQL is a query language for APIs and a runtime for executing those queries based on your data's schema. It allows clients to request exactly the data they need, making it more efficient than traditional REST APIs where over-fetching or under-fetching can occur. In GraphQL, the schema defines the structure of the data, including types, queries, and mutations. Queries allow clients to fetch data, while mutations let them modify data. The GraphQL server resolves these queries and mutations using resolvers, which contain the logic for fetching and modifying data. GraphQL's type system provides a clear contract between the client and server, reducing the likelihood of errors and improving documentation. It also supports real-time data with subscriptions, which notify clients of data changes. GraphQL can be used with any backend and integrates well with modern frontend frameworks like React and Vue. Learning GraphQL involves understanding its syntax, designing schemas, and implementing resolvers, offering a more flexible and efficient way to interact with APIs.",
    author: "Jack Brown",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    date: "2024-07-27",
    tags: ["GraphQL", "API", "Web Development"],
  },
];

export const API_BASE_URL = "https://albearto-server.onrender.com/api/v1";

export const KEYWORDS_OPTIONS = [
  { label: "JavaScript", value: "JavaScript" },
  { label: "Programming", value: "Programming" },
  { label: "Web Development", value: "Web Development" },
  { label: "Web Design", value: "Web Design" },
  { label: "CSS", value: "CSS" },
  { label: "Responsive", value: "Responsive" },
  { label: "React", value: "React" },
  { label: "Node.js", value: "Node.js" },
  { label: "API", value: "API" },
  { label: "Backend Development", value: "Backend Development" },
  { label: "Python", value: "Python" },
  { label: "Data Science", value: "Data Science" },
  { label: "Machine Learning", value: "Machine Learning" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "Docker", value: "Docker" },
  { label: "DevOps", value: "DevOps" },
  { label: "Containerization", value: "Containerization" },
  { label: "Git", value: "Git" },
  { label: "GitHub", value: "GitHub" },
  { label: "Version Control", value: "Version Control" },
  { label: "Kubernetes", value: "Kubernetes" },
  { label: "Container Orchestration", value: "Container Orchestration" },
];
