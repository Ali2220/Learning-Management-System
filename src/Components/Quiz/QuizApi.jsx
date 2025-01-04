const quizApi = [
  {
    id: 1,
    question: {
      title: 'React Component Life Cycle',
      description:
        'Explain the different phases of a React component lifecycle and their significance.',
    },
  },
  {
    id: 2,
    question: {
      title: 'JavaScript Closures',
      description:
        'Describe what a closure is in JavaScript and provide an example of how it can be used.',
    },
  },
  {
    id: 3,
    question: {
      title: 'CSS Flexbox',
      description:
        'What is Flexbox in CSS? Explain the main properties used for flex containers and flex items.',
    },
  },
  {
    id: 4,
    question: {
      title: 'Semantic HTML',
      description:
        'Why is semantic HTML important in web development? Give examples of semantic HTML tags.',
    },
  },
  {
    id: 5,
    question: {
      title: 'RESTful API Design',
      description:
        'Explain the principles of REST architecture and how to design a RESTful API.',
    },
  },
  {
    id: 6,
    question: {
      title: 'Git Branching',
      description:
        'What is the purpose of branching in Git? Describe how to create and merge branches.',
    },
  },
  {
    id: 7,
    question: {
      title: 'Event Loop in Node.js',
      description:
        'Explain the event loop in Node.js and how it handles asynchronous operations.',
    },
  },
  {
    id: 8,
    question: {
      title: 'Python Decorators',
      description:
        'What are decorators in Python? Provide an example of a decorator and its use case.',
    },
  },
  {
    id: 9,
    question: {
      title: 'Angular Directives',
      description:
        'What are directives in Angular? Discuss the different types of directives available in Angular.',
    },
  },
  {
    id: 10,
    question: {
      title: 'Vue.js Reactive Data Binding',
      description:
        'How does Vue.js implement reactive data binding? Explain with an example.',
    },
  },
  {
    id: 11,
    question: {
      title: 'TypeScript Types',
      description:
        'What are the benefits of using TypeScript over JavaScript? Discuss the different types available in TypeScript.',
    },
  },
  {
    id: 12,
    question: {
      title: 'Building REST APIs with Express',
      description:
        'How do you create a REST API using Express.js? Describe the steps and provide an example.',
    },
  },
  {
    id: 13,
    question: {
      title: 'Django Models',
      description:
        'What are Django models? Explain how to create and use models in a Django application.',
    },
  },
  {
    id: 14,
    question: {
      title: 'MongoDB Aggregation',
      description:
        'What is the aggregation framework in MongoDB? Describe how to use it with an example.',
    },
  },
  {
    id: 15,
    question: {
      title: 'Supervised vs Unsupervised Learning',
      description:
        'Compare and contrast supervised and unsupervised learning. Provide examples of each.',
    },
  },
  {
    id: 16,
    question: {
      title: 'React Native Navigation',
      description:
        'How do you handle navigation in React Native applications? Discuss the different navigation libraries available.',
    },
  },
  {
    id: 17,
    question: {
      title: 'Kotlin Coroutines',
      description:
        'What are coroutines in Kotlin? Explain how to use coroutines for asynchronous programming in Android development.',
    },
  },
  {
    id: 18,
    question: {
      title: 'Flutter Widgets',
      description:
        'What are widgets in Flutter? Describe the different types of widgets and their use cases.',
    },
  },
  {
    id: 19,
    question: {
      title: 'PHP Session Management',
      description:
        'How do you manage user sessions in PHP? Provide an example of session handling in a PHP application.',
    },
  },
  {
    id: 20,
    question: {
      title: 'AWS IAM',
      description:
        'What is AWS IAM? Explain the role of IAM in AWS and how to manage users and permissions.',
    },
  },
  {
    id: 21,
    question: {
      title: 'UI/UX Design Principles',
      description:
        'What are the core principles of UI/UX design? Discuss how these principles impact user experience.',
    },
  },
  {
    id: 22,
    question: {
      title: 'SQL Joins',
      description:
        'What are SQL joins? Explain the different types of joins and provide examples of each.',
    },
  },
  {
    id: 23,
    question: {
      title: 'Server-Side Rendering with Next.js',
      description:
        'How does server-side rendering work in Next.js? Discuss its benefits and provide an example.',
    },
  },
  {
    id: 24,
    question: {
      title: 'Bootstrap Grid System',
      description:
        'What is the Bootstrap grid system? Explain how it works and provide an example of its usage.',
    },
  },
  {
    id: 25,
    question: {
      title: 'GraphQL Queries',
      description:
        'What is GraphQL? Describe how to write queries in GraphQL and provide an example.',
    },
  },
  {
    id: 26,
    question: {
      title: 'WordPress Custom Themes',
      description:
        'How do you create a custom theme in WordPress? Discuss the steps and provide an example.',
    },
  },
  {
    id: 27,
    question: {
      title: 'SASS Variables and Mixins',
      description:
        'What are variables and mixins in SASS? Explain their usage with examples.',
    },
  },
  {
    id: 28,
    question: {
      title: 'SEO Best Practices',
      description:
        'What are the best practices for SEO in digital marketing? Discuss key strategies and techniques.',
    },
  },
  {
    id: 29,
    question: {
      title: 'Cybersecurity Threats',
      description:
        'What are common cybersecurity threats? Explain how to protect against these threats.',
    },
  },
  {
    id: 30,
    question: {
      title: 'Blockchain Consensus Algorithms',
      description:
        'What are consensus algorithms in blockchain? Describe different types of consensus algorithms and their significance.',
    },
  },
  {
    id: 31,
    question: {
      title: 'Building Machine Learning Models',
      description:
        'Describe the steps involved in building a machine learning model using Python, from data preprocessing to evaluation.',
    },
  },
  {
    id: 32,
    question: {
      title: 'Implementing Web Accessibility',
      description:
        'What are the key considerations for making a website accessible? Discuss the importance and implementation of ARIA roles.',
    },
  },
  {
    id: 33,
    question: {
      title: 'Responsive Design Techniques',
      description:
        'Explain the concept of responsive web design. How do media queries work to adapt layouts for different screen sizes?',
    },
  },
  {
    id: 34,
    question: {
      title: 'Java Data Types and Variables',
      description:
        'What are the different data types available in Java? Explain with examples how to declare and use variables in Java.',
    },
  },
  {
    id: 35,
    question: {
      title: 'C++ Pointers',
      description:
        'What are pointers in C++? Describe their use cases and provide examples of pointer operations.',
    },
  },
  {
    id: 36,
    question: {
      title: 'Understanding Data Structures',
      description:
        'Compare and contrast different data structures such as arrays, linked lists, and trees. Discuss their applications.',
    },
  },
  {
    id: 37,
    question: {
      title: 'Cloud Computing Models',
      description:
        'What are the different service models in cloud computing? Describe IaaS, PaaS, and SaaS with examples.',
    },
  },
  {
    id: 38,
    question: {
      title: 'Flask Routing',
      description:
        'How does routing work in Flask? Explain the process of defining routes and handling requests in a Flask application.',
    },
  },
  {
    id: 39,
    question: {
      title: 'Securing Web Applications',
      description:
        'What are common security vulnerabilities in web applications? Describe methods to secure applications against these threats.',
    },
  },
  {
    id: 40,
    question: {
      title: 'Data Analysis with Pandas',
      description:
        'How do you perform data manipulation and analysis using Pandas in Python? Provide examples of common operations.',
    },
  },
  {
    id: 41,
    question: {
      title: 'Basic Photography Techniques',
      description:
        'What are the essential elements of digital photography? Discuss techniques such as rule of thirds, lighting, and exposure.',
    },
  },
  {
    id: 42,
    question: {
      title: 'Virtual Reality Applications',
      description:
        'What are the key components of a virtual reality system? Discuss the potential applications and challenges of VR technology.',
    },
  },
  {
    id: 43,
    question: {
      title: 'AR Development',
      description:
        'How do augmented reality applications work? Explain the process of developing an AR app and the tools involved.',
    },
  },
  {
    id: 44,
    question: {
      title: 'Introduction to Robotics',
      description:
        'What are the basic components of a robotic system? Discuss the different types of robots and their applications.',
    },
  },
  {
    id: 45,
    question: {
      title: 'Ethical Hacking Techniques',
      description:
        'What are the phases of an ethical hacking lifecycle? Describe techniques used in penetration testing and vulnerability assessment.',
    },
  },
  {
    id: 46,
    question: {
      title: 'Unity Game Development',
      description:
        'How do you create a simple game using Unity? Discuss the main components and workflow of game development in Unity.',
    },
  },
  {
    id: 47,
    question: {
      title: 'Building iOS Apps with Swift',
      description:
        'What are the key features of Swift for iOS development? Provide an example of creating a basic iOS app using Swift.',
    },
  },
  {
    id: 48,
    question: {
      title: 'AI and Machine Learning Fundamentals',
      description:
        'What are the core concepts of artificial intelligence and machine learning? Discuss different types of learning algorithms.',
    },
  },
  {
    id: 49,
    question: {
      title: 'IoT Architecture',
      description:
        'What is the architecture of an IoT system? Describe the main components and communication protocols used in IoT.',
    },
  },
  {
    id: 50,
    question: {
      title: 'Blockchain Development Basics',
      description:
        'How do you develop a blockchain application? Explain the steps involved in creating a simple blockchain and its transactions.',
    },
  },
  {
    id: 51,
    question: {
      title: 'D3.js Data Visualization',
      description:
        'What is D3.js and how is it used for data visualization? Provide an example of creating a basic chart using D3.js.',
    },
  },
  {
    id: 52,
    question: {
      title: 'Computer Vision Techniques',
      description:
        'How do computer vision algorithms work? Discuss common techniques and libraries used for computer vision in Python.',
    },
  },
  {
    id: 53,
    question: {
      title: 'Deep Learning with TensorFlow',
      description:
        'What are the key components of a deep learning model in TensorFlow? Describe the process of training and evaluating a model.',
    },
  },
  {
    id: 54,
    question: {
      title: 'Building Chatbots',
      description:
        'What are the steps involved in creating a chatbot with Python? Discuss the use of natural language processing and machine learning.',
    },
  },
  {
    id: 55,
    question: {
      title: 'Natural Language Processing (NLP)',
      description:
        'What are the key tasks in natural language processing? Provide examples of common NLP applications and techniques.',
    },
  },
  {
    id: 56,
    question: {
      title: 'Quantum Computing Basics',
      description:
        'What is quantum computing and how does it differ from classical computing? Discuss the principles and potential applications of quantum computing.',
    },
  },
  {
    id: 57,
    question: {
      title: 'Data Science Fundamentals',
      description:
        'What are the key stages of a data science project? Discuss the process from data collection to model deployment.',
    },
  },
  {
    id: 58,
    question: {
      title: 'Web Scraping with Python',
      description:
        'How do you perform web scraping using Python? Discuss the libraries and techniques used for extracting data from websites.',
    },
  },
  {
    id: 59,
    question: {
      title: 'API Development with Node.js',
      description:
        'What are the steps involved in creating an API with Node.js? Provide an example of building a RESTful API using Express.js.',
    },
  },
  {
    id: 60,
    question: {
      title: 'Serverless Computing with AWS Lambda',
      description:
        'What is serverless computing and how does AWS Lambda support it? Explain the benefits and use cases of serverless architecture.',
    },
  },
  {
    id: 61,
    question: {
      title: 'React Native Components',
      description:
        'Describe how to create and style components in React Native. Provide an example.',
    },
  },
  {
    id: 62,
    question: {
      title: 'CSS Grid vs Flexbox',
      description:
        'Compare CSS Grid and Flexbox. When would you use one over the other? Provide examples.',
    },
  },
  {
    id: 63,
    question: {
      title: 'Docker and Kubernetes',
      description:
        'Explain the roles of Docker and Kubernetes in a DevOps workflow. How do they complement each other?',
    },
  },
  {
    id: 64,
    question: {
      title: 'CI/CD Pipelines',
      description:
        'What is a CI/CD pipeline? Discuss the benefits and provide an example of a CI/CD workflow.',
    },
  },
  {
    id: 65,
    question: {
      title: 'AWS Services Overview',
      description:
        'List and describe the key services provided by AWS. How can they be used in a typical web application?',
    },
  },
  {
    id: 66,
    question: {
      title: 'Unity Game Development',
      description:
        'What are the main components of a Unity project? Explain how to create a simple mobile game using Unity.',
    },
  },
  {
    id: 67,
    question: {
      title: 'Writing Smart Contracts with Solidity',
      description:
        'Describe the process of writing and deploying a smart contract using Solidity on the Ethereum blockchain.',
    },
  },
  {
    id: 68,
    question: {
      title: 'Docker Fundamentals',
      description:
        'Explain the basics of Docker. How do you create and manage Docker containers?',
    },
  },
  {
    id: 69,
    question: {
      title: 'Unreal Engine Basics',
      description:
        'What are the key features of Unreal Engine for game development? Provide an example of creating a game environment.',
    },
  },
  {
    id: 70,
    question: {
      title: 'Microservices with Spring Boot',
      description:
        'How do you develop microservices using Spring Boot? Discuss the advantages and provide an example.',
    },
  },
  {
    id: 71,
    question: {
      title: 'Automating Tasks with Python',
      description:
        'What are some common use cases for automation with Python? Provide examples and explain the libraries used.',
    },
  },
  {
    id: 72,
    question: {
      title: 'Cloud-Native Applications',
      description:
        'Define cloud-native applications. How do you design and deploy cloud-native applications?',
    },
  },
  {
    id: 73,
    question: {
      title: 'AI in Healthcare',
      description:
        'How is AI transforming healthcare? Discuss the applications and challenges of implementing AI in the healthcare industry.',
    },
  },
  {
    id: 74,
    question: {
      title: 'Cloud Computing Basics',
      description:
        'What are the key characteristics of cloud computing? Discuss the different types of cloud deployment models.',
    },
  },
  {
    id: 75,
    question: {
      title: 'Data Analytics Process',
      description:
        'Describe the data analytics process. What tools and techniques are commonly used in data analytics?',
    },
  },
  {
    id: 76,
    question: {
      title: 'Getting Started with Angular',
      description:
        'What is Angular and how is it used for building web applications? Explain the core concepts of Angular.',
    },
  },
  {
    id: 77,
    question: {
      title: 'Machine Learning Algorithms',
      description:
        'Describe different types of machine learning algorithms. Provide examples of supervised and unsupervised learning.',
    },
  },
  {
    id: 78,
    question: {
      title: 'DevOps Principles',
      description:
        'What are the core principles of DevOps? Discuss how DevOps practices improve software development and deployment.',
    },
  },
  {
    id: 79,
    question: {
      title: 'Getting Started with Vue.js',
      description:
        'Explain the basics of Vue.js. How do you create and manage components in a Vue.js application?',
    },
  },
  {
    id: 80,
    question: {
      title: 'JavaScript Basics',
      description:
        'What are the fundamental concepts of JavaScript programming? Discuss variables, functions, and events in JavaScript.',
    },
  },
  {
    id: 81,
    question: {
      title: 'Introduction to React.js',
      description:
        'Explain the core concepts of React.js. How do you create and manage components in a React.js application?',
    },
  },
  {
    id: 82,
    question: {
      title: 'Flutter for Mobile Development',
      description:
        'How do you build cross-platform mobile apps using Flutter? Discuss the main features and advantages of Flutter.',
    },
  },
  {
    id: 83,
    question: {
      title: 'PostgreSQL Fundamentals',
      description:
        'What are the key features of PostgreSQL? Explain how to perform basic database operations in PostgreSQL.',
    },
  },
  {
    id: 84,
    question: {
      title: 'Getting Started with MongoDB',
      description:
        'Describe the basics of MongoDB. How do you create and manage collections and documents in MongoDB?',
    },
  },
  {
    id: 85,
    question: {
      title: 'Data Structures in Python',
      description:
        'What are the common data structures used in Python? Explain their use cases and provide examples.',
    },
  },
  {
    id: 86,
    question: {
      title: 'Advanced Python Concepts',
      description:
        'Discuss advanced concepts in Python programming. Provide examples of decorators, generators, and context managers.',
    },
  },
  {
    id: 87,
    question: {
      title: 'Docker for Beginners',
      description:
        'How do you get started with Docker? Explain the process of creating and managing Docker containers.',
    },
  },
  {
    id: 88,
    question: {
      title: 'Getting Started with Laravel',
      description:
        'What is Laravel and how is it used for web development? Explain the core concepts of the Laravel framework.',
    },
  },
  {
    id: 89,
    question: {
      title: 'Building REST APIs with Express.js',
      description:
        'How do you create RESTful APIs using Express.js? Discuss the steps involved and provide an example.',
    },
  },
  {
    id: 90,
    question: {
      title: 'Full Stack Development Basics',
      description:
        'What are the key skills required for full stack development? Explain how to build a simple full stack application.',
    },
  },
  {
    id: 91,
    question: {
      title: 'Blockchain Technology',
      description:
        'What is blockchain technology and how does it work? Discuss the key components and applications of blockchain.',
    },
  },
  {
    id: 92,
    question: {
      title: 'C Programming Basics',
      description:
        'What are the fundamental concepts of C programming? Provide examples of basic programs and data structures in C.',
    },
  },
  {
    id: 93,
    question: {
      title: 'React Native for Mobile Development',
      description:
        'How do you build cross-platform mobile apps using React Native? Explain the advantages and provide an example.',
    },
  },
  {
    id: 94,
    question: {
      title: 'Machine Learning with TensorFlow',
      description:
        'What are the key components of TensorFlow? Explain how to build and train a machine learning model using TensorFlow.',
    },
  },
  {
    id: 95,
    question: {
      title: 'Building Progressive Web Apps (PWAs)',
      description:
        'What are Progressive Web Apps and how do they work? Discuss the benefits and provide an example of building a PWA.',
    },
  },
  {
    id: 96,
    question: {
      title: 'Ruby on Rails Basics',
      description:
        'What is Ruby on Rails and how is it used for web development? Explain the core concepts and provide an example.',
    },
  },
  {
    id: 97,
    question: {
      title: 'Vue.js with Vuetify',
      description:
        'How do you use Vuetify with Vue.js for building UIs? Explain the advantages and provide an example.',
    },
  },
  {
    id: 98,
    question: {
      title: 'Understanding TypeScript',
      description:
        'What are the key features of TypeScript? Explain the benefits of using TypeScript over JavaScript with examples.',
    },
  },
  {
    id: 99,
    question: {
      title: 'Web Security Fundamentals',
      description:
        'What are the common security vulnerabilities in web applications? Discuss methods to secure web applications.',
    },
  },
  {
    id: 100,
    question: {
      title: 'Getting Started with Django',
      description:
        'What is Django and how is it used for web development? Explain the core concepts and provide an example.',
    },
  },
];


export default quizApi