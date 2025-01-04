const coursesApi = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn the basics of React.',
    image: 'https://via.placeholder.com/150/0000FF/808080?text=React',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JS concepts.',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=JavaScript',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
  },
  {
    id: 3,
    title: 'CSS Mastery',
    description: 'Master the art of styling websites.',
    image: 'https://via.placeholder.com/150/FFFF00/000000?text=CSS',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
  },
  {
    id: 4,
    title: 'HTML Essentials',
    description: 'Understand the foundation of web development.',
    image: 'https://via.placeholder.com/150/00FF00/000000?text=HTML',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
  },
  {
    id: 5,
    title: 'Full-Stack Development',
    description: 'Become a proficient full-stack developer.',
    image: 'https://via.placeholder.com/150/00FFFF/000000?text=Full-Stack',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=Cu5RDZGE7aA',
  },
  {
    id: 6,
    title: 'Git and GitHub',
    description: 'Learn version control with Git and GitHub.',
    image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Git',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
  },
  {
    id: 7,
    title: 'Node.js Fundamentals',
    description: 'Learn backend development with Node.js.',
    image: 'https://via.placeholder.com/150/0000FF/808080?text=Node.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=RLtyhwFtXQA',
  },
  {
    id: 8,
    title: 'Python for Data Science',
    description: 'Explore data science using Python.',
    image: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Python',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI',
  },
  {
    id: 9,
    title: 'Angular Basics',
    description: 'Learn the basics of Angular framework.',
    image: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Angular',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=3qBXWUpoPHo',
  },
  {
    id: 10,
    title: 'Vue.js for Beginners',
    description: "A beginner's guide to Vue.js.",
    image: 'https://via.placeholder.com/150/7FFF00/000000?text=Vue.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c',
  },
  {
    id: 11,
    title: 'Introduction to TypeScript',
    description: 'Understand the basics of TypeScript.',
    image: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=TypeScript',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=30LWjhZzgOw',
  },
  {
    id: 12,
    title: 'Building REST APIs',
    description: 'Learn to build RESTful APIs.',
    image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=APIs',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=fgTGADljAeg',
  },
  {
    id: 13,
    title: 'Django for Web Development',
    description: 'Learn Django for building web apps.',
    image: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Django',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=F5mRW0jo-U4',
  },
  {
    id: 14,
    title: 'MongoDB Essentials',
    description: 'Get started with MongoDB.',
    image: 'https://via.placeholder.com/150/00CED1/FFFFFF?text=MongoDB',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=excAOvwF_Wk',
  },
  {
    id: 15,
    title: 'Introduction to Machine Learning',
    description: 'Begin your journey in Machine Learning.',
    image: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=ML',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
  },
  {
    id: 16,
    title: 'React Native Basics',
    description: 'Build mobile apps with React Native.',
    image: 'https://via.placeholder.com/150/FF7F50/FFFFFF?text=React+Native',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
  },
  {
    id: 17,
    title: 'Kotlin for Android Development',
    description: 'Learn Kotlin to build Android apps.',
    image: 'https://via.placeholder.com/150/FFD700/000000?text=Kotlin',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=F9UC9DY-vIU',
  },
  {
    id: 18,
    title: 'Flutter for Cross-Platform Apps',
    description: 'Build cross-platform apps with Flutter.',
    image: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=Flutter',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
  },
  {
    id: 19,
    title: 'PHP for Web Development',
    description: 'Get started with PHP programming.',
    image: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=PHP',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=OK_JCtrrv-c',
  },
  {
    id: 20,
    title: 'AWS Cloud Basics',
    description: 'Learn the basics of AWS Cloud.',
    image: 'https://via.placeholder.com/150/B0C4DE/000000?text=AWS',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=ulprqHHWlng',
  },
  {
    id: 21,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the basics of UI/UX design.',
    image: 'https://via.placeholder.com/150/6A5ACD/FFFFFF?text=UI/UX',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=T1rHjt0xdS4',
  },
  {
    id: 22,
    title: 'SQL for Beginners',
    description: 'Learn SQL for database management.',
    image: 'https://via.placeholder.com/150/708090/FFFFFF?text=SQL',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
  },
  {
    id: 23,
    title: 'Next.js for Beginners',
    description: 'Start with server-side rendering using Next.js.',
    image: 'https://via.placeholder.com/150/00FA9A/000000?text=Next.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=jtN08FrvO2Y',
  },
  {
    id: 24,
    title: 'Bootstrap Framework',
    description: 'Learn to design with Bootstrap.',
    image: 'https://via.placeholder.com/150/20B2AA/FFFFFF?text=Bootstrap',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=5GcQtLDGXy8',
  },
  {
    id: 25,
    title: 'GraphQL Basics',
    description: 'Explore GraphQL for APIs.',
    image: 'https://via.placeholder.com/150/8B0000/FFFFFF?text=GraphQL',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=ed8SzALpx1Q',
  },
  {
    id: 26,
    title: 'WordPress Essentials',
    description: 'Build websites with WordPress.',
    image: 'https://via.placeholder.com/150/A52A2A/FFFFFF?text=WordPress',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=jK_eH0qU6NE',
  },
  {
    id: 27,
    title: 'SASS for Styling',
    description: 'Learn SASS for advanced CSS.',
    image: 'https://via.placeholder.com/150/5F9EA0/FFFFFF?text=SASS',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=_a5j7KoflTs',
  },
  {
    id: 28,
    title: 'Digital Marketing Basics',
    description: 'Learn the fundamentals of digital marketing.',
    image: 'https://via.placeholder.com/150/556B2F/FFFFFF?text=Marketing',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=n0k3QrxDwRg',
  },
  {
    id: 29,
    title: 'Cybersecurity Fundamentals',
    description: 'Understand cybersecurity principles.',
    image: 'https://via.placeholder.com/150/D2691E/FFFFFF?text=Cybersecurity',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=waD2C1aIhZs',
  },
  {
    id: 30,
    title: 'Blockchain Basics',
    description: 'Learn the basics of blockchain technology.',
    image: 'https://via.placeholder.com/150/9932CC/FFFFFF?text=Blockchain',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=kFt1DJdAuRY',
  },

  {
    id: 31,
    title: 'Machine Learning with Python',
    description: 'Build machine learning models using Python.',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=ML+Python',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
  },
  {
    id: 32,
    title: 'Web Accessibility',
    description: 'Learn how to make websites accessible for all.',
    image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Accessibility',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=9oXnCjwDFRk',
  },
  {
    id: 33,
    title: 'Responsive Web Design',
    description: 'Create responsive websites that work on all devices.',
    image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Responsive',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=srvUrASNj0s',
  },
  {
    id: 34,
    title: 'Java Programming Basics',
    description: 'Learn the fundamentals of Java programming.',
    image: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=Java',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=eIrMbAQSU34',
  },
  {
    id: 35,
    title: 'C++ for Beginners',
    description: 'Understand the basics of C++ programming.',
    image: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=C++',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=QnTpHp7KM7k',
  },
  {
    id: 36,
    title: 'Introduction to Data Structures',
    description: 'Learn about common data structures and algorithms.',
    image: 'https://via.placeholder.com/150/FFD700/000000?text=Data+Structures',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=bum_19loj9A',
  },
  {
    id: 37,
    title: 'Cloud Computing Essentials',
    description: 'Understand the fundamentals of cloud computing.',
    image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Cloud',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=13P-f1Ys9eA',
  },
  {
    id: 38,
    title: 'Web Development with Flask',
    description: 'Learn web development with Flask in Python.',
    image: 'https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Flask',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=Z1RJmh_OqeA',
  },
  {
    id: 39,
    title: 'Cybersecurity for Developers',
    description: 'Learn to secure your applications from hackers.',
    image:
      'https://via.placeholder.com/150/B0C4DE/000000?text=Cybersecurity+Dev',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=1sY9jO0l8fY',
  },
  {
    id: 40,
    title: 'Data Analysis with Pandas',
    description: 'Learn data analysis techniques using Pandas.',
    image: 'https://via.placeholder.com/150/FF1493/FFFFFF?text=Pandas',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=vmEHCJofslg',
  },
  {
    id: 41,
    title: 'Digital Photography Basics',
    description: 'Learn the fundamentals of digital photography.',
    image: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Photography',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=9p7OK64PA6I',
  },
  {
    id: 42,
    title: 'Introduction to Virtual Reality',
    description: 'Start learning about virtual reality and its applications.',
    image: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=VR',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=OlRY-jIkGZk',
  },
  {
    id: 43,
    title: 'Introduction to Augmented Reality',
    description: 'Learn the basics of augmented reality (AR) development.',
    image: 'https://via.placeholder.com/150/FFFF00/000000?text=AR',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=AJQ-j_zl0_g',
  },
  {
    id: 44,
    title: 'Robotics for Beginners',
    description: 'An introduction to robotics and automation.',
    image: 'https://via.placeholder.com/150/008B8B/FFFFFF?text=Robotics',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=ugzk-hw8pEw',
  },
  {
    id: 45,
    title: 'Ethical Hacking',
    description: 'Learn about ethical hacking and cybersecurity practices.',
    image: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=Ethical+Hacking',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=V1lG1vQwEqE',
  },
  {
    id: 46,
    title: 'Game Development with Unity',
    description: 'Learn to develop games using Unity.',
    image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Unity',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=IlKaB1MX4oI',
  },
  {
    id: 47,
    title: 'iOS Development with Swift',
    description: 'Start building iOS apps with Swift.',
    image: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=Swift',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=FcsYLRHhP7k',
  },
  {
    id: 48,
    title: 'Introduction to AI and Machine Learning',
    description:
      'Explore the world of Artificial Intelligence and Machine Learning.',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=AI+ML',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI',
  },
  {
    id: 49,
    title: 'Introduction to Internet of Things (IoT)',
    description: 'Understand the fundamentals of IoT and its applications.',
    image: 'https://via.placeholder.com/150/FF1493/FFFFFF?text=IoT',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=QSd8jeXmcHw',
  },
  {
    id: 50,
    title: 'Blockchain Development',
    description: 'Learn how to build blockchain applications.',
    image: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=Blockchain+Dev',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
  },
  {
    id: 51,
    title: 'Data Visualization with D3.js',
    description: 'Create stunning data visualizations using D3.js.',
    image: 'https://via.placeholder.com/150/8B0000/FFFFFF?text=D3.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=8jvoTV5W7oE',
  },
  {
    id: 52,
    title: 'Computer Vision with Python',
    description: 'Learn computer vision techniques using Python.',
    image: 'https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Computer+Vision',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0f5S9MGzzEc',
  },
  {
    id: 53,
    title: 'Deep Learning with TensorFlow',
    description: 'Build deep learning models using TensorFlow.',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=TensorFlow',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=tPYj3fFJGjk',
  },
  {
    id: 54,
    title: 'Building Chatbots with Python',
    description: 'Learn how to create AI-powered chatbots with Python.',
    image: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=Chatbot',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=1lwddNyG7j8',
  },
  {
    id: 55,
    title: 'Data Science with R',
    description: 'Analyze data and build models using R.',
    image: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=R+Data+Science',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=G0yH7kcqB40',
  },

  {
    id: 56,
    title: 'Introduction to Quantum Computing',
    description: 'Explore the basics of quantum computing.',
    image: 'https://via.placeholder.com/150/00008B/FFFFFF?text=Quantum',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=JhHMJCUmq28',
  },
  {
    id: 57,
    title: 'Introduction to Data Science',
    description: 'Learn the fundamentals of data science.',
    image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Data+Science',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=uoXgJvXkv7g',
  },
  {
    id: 58,
    title: 'Building Web Scrapers with Python',
    description: 'Learn how to scrape data from websites using Python.',
    image: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=Web+Scraping',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=XQgXKtPSzUI',
  },
  {
    id: 59,
    title: 'API Development with Node.js',
    description: 'Learn how to create APIs using Node.js.',
    image: 'https://via.placeholder.com/150/7FFF00/000000?text=API+Node.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=1G7h0AlddzA',
  },
  {
    id: 60,
    title: 'Serverless Architecture with AWS Lambda',
    description: 'Understand serverless computing with AWS Lambda.',
    image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Serverless',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=eOBa3qSo_z4',
  },
  {
    id: 61,
    title: 'Mobile App Development with React Native',
    description: 'Create mobile apps using React Native.',
    image: 'https://via.placeholder.com/150/1E90FF/FFFFFF?text=React+Native',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
  },
  {
    id: 62,
    title: 'Advanced CSS Grid and Flexbox',
    description: 'Master CSS Grid and Flexbox layouts.',
    image:
      'https://via.placeholder.com/150/FF1493/FFFFFF?text=CSS+Grid+Flexbox',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0J4kqH5Ml2k',
  },
  {
    id: 63,
    title: 'DevOps with Docker and Kubernetes',
    description: 'Learn DevOps principles using Docker and Kubernetes.',
    image: 'https://via.placeholder.com/150/FF8C00/FFFFFF?text=DevOps',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=8xGBO3ejoS4',
  },
  {
    id: 64,
    title: 'Continuous Integration and Continuous Deployment',
    description: 'Learn CI/CD pipeline concepts and tools.',
    image: 'https://via.placeholder.com/150/00BFFF/FFFFFF?text=CI/CD',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=1t2OeQLyRSo',
  },
  {
    id: 65,
    title: 'Introduction to AWS',
    description: 'Start learning Amazon Web Services (AWS).',
    image: 'https://via.placeholder.com/150/008000/FFFFFF?text=AWS',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=Ia-UEYYR44s',
  },
  {
    id: 66,
    title: 'Building Mobile Games with Unity',
    description: 'Create mobile games with Unity game engine.',
    image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Mobile+Games',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=IlKaB1etrik',
  },
  {
    id: 67,
    title: 'Smart Contracts with Solidity',
    description: 'Learn to write smart contracts on the Ethereum blockchain.',
    image: 'https://via.placeholder.com/150/FF1493/FFFFFF?text=Solidity',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=ipwxYa-F1uY',
  },
  {
    id: 68,
    title: 'Getting Started with Docker',
    description: 'Learn the basics of Docker for containerization.',
    image: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=Docker',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=G3RGP_5igbc',
  },
  {
    id: 69,
    title: 'Game Design and Development with Unreal Engine',
    description: 'Learn game development using Unreal Engine.',
    image: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=Unreal+Engine',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=F6iQ7q5bO3I',
  },
  {
    id: 70,
    title: 'Building Microservices with Spring Boot',
    description: 'Learn how to create microservices using Spring Boot.',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Spring+Boot',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=eDwYQmYgZPo',
  },
  {
    id: 71,
    title: 'Python for Automation',
    description: 'Learn how to automate tasks using Python.',
    image:
      'https://via.placeholder.com/150/00FFFF/000000?text=Python+Automation',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=6JtP6Kcdj0I',
  },
  {
    id: 72,
    title: 'Introduction to Cloud-Native Applications',
    description: 'Learn to build cloud-native applications.',
    image: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Cloud-Native',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=GJZC12nDGGs',
  },
  {
    id: 73,
    title: 'AI in Healthcare',
    description: 'Explore how AI is used in the healthcare industry.',
    image: 'https://via.placeholder.com/150/708090',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=VtJ-CT2ybwY',
  },
  {
    id: 74,
    title: 'Introduction to Cloud Computing',
    description: 'Learn the fundamentals of cloud computing.',
    image: 'https://via.placeholder.com/150/7B68EE/FFFFFF?text=Cloud+Computing',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=7tYOk5fQnNU',
  },
  {
    id: 75,
    title: 'Introduction to Data Analytics',
    description: 'Learn data analytics basics and tools.',
    image: 'https://via.placeholder.com/150/20B2AA/FFFFFF?text=Data+Analytics',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=xxXr9W2p0K4',
  },
  {
    id: 76,
    title: 'Angular for Beginners',
    description: 'Get started with Angular for building web apps.',
    image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Angular',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=htPYk6QxacQ',
  },
  {
    id: 77,
    title: 'Machine Learning with Python',
    description: 'Learn machine learning using Python.',
    image: 'https://via.placeholder.com/150/800080/FFFFFF?text=ML+Python',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
  },
  {
    id: 78,
    title: 'Intro to DevOps',
    description: 'Understand DevOps principles and practices.',
    image: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=DevOps+Intro',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0Qb4M2Jtdu8',
  },
  {
    id: 79,
    title: 'Vue.js Basics',
    description: 'Learn Vue.js to build interactive web apps.',
    image: 'https://via.placeholder.com/150/000080/FFFFFF?text=Vue.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=FXpIoQ_rT7w',
  },

  {
    id: 80,
    title: 'Learning React.js',
    description: "A beginner's guide to learning React.js.",
    image: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=React.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
  },
  {
    id: 81,
    title: 'Building REST APIs with Node.js',
    description: 'Learn how to build REST APIs using Node.js.',
    image: 'https://via.placeholder.com/150/008080/FFFFFF?text=REST+API',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=1-IKhmXEkwM',
  },
  {
    id: 82,
    title: 'Introduction to JavaScript',
    description: 'Get started with JavaScript fundamentals.',
    image: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=JavaScript',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
  },
  {
    id: 83,
    title: 'Advanced React Concepts',
    description: 'Learn advanced concepts in React.js.',
    image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Advanced+React',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0kXwHuXkxd8',
  },
  {
    id: 84,
    title: 'Python for Data Science',
    description: 'Learn Python for data science applications.',
    image:
      'https://via.placeholder.com/150/FF6347/FFFFFF?text=Python+Data+Science',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=H1xqwW7d4hs',
  },
  {
    id: 85,
    title: 'Introduction to MongoDB',
    description: 'Learn the basics of MongoDB for NoSQL databases.',
    image: 'https://via.placeholder.com/150/1E90FF/FFFFFF?text=MongoDB',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=6FOq4JxN-Bk',
  },
  {
    id: 86,
    title: 'Introduction to TensorFlow',
    description: 'Learn how to use TensorFlow for machine learning.',
    image: 'https://via.placeholder.com/150/800080/FFFFFF?text=TensorFlow',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0pX0ik61j4Q',
  },
  {
    id: 87,
    title: 'Vue.js Fundamentals',
    description: 'Learn Vue.js framework for building web apps.',
    image: 'https://via.placeholder.com/150/FF8C00/FFFFFF?text=Vue.js',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=FXpIoQ_rT7w',
  },
  {
    id: 88,
    title: 'Building Real-Time Apps with Socket.IO',
    description: 'Learn how to build real-time applications with Socket.IO.',
    image: 'https://via.placeholder.com/150/00FFFF/000000?text=Socket.IO',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=Qn-UM0ZImqk',
  },
  {
    id: 89,
    title: 'Intro to SQL',
    description: 'Learn the basics of SQL for database management.',
    image: 'https://via.placeholder.com/150/7FFF00/FFFFFF?text=SQL',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
  },
  {
    id: 90,
    title: 'Building Mobile Apps with Flutter',
    description: 'Learn how to build mobile apps using Flutter.',
    image: 'https://via.placeholder.com/150/8B0000/FFFFFF?text=Flutter',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=1gDhl4leEzA',
  },
  {
    id: 91,
    title: 'Exploring Kubernetes',
    description: 'Learn about Kubernetes for container orchestration.',
    image: 'https://via.placeholder.com/150/FF1493/FFFFFF?text=Kubernetes',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=X48VuDVv0do',
  },
  {
    id: 92,
    title: 'Docker for Beginners',
    description: 'Learn how to use Docker for containerization.',
    image: 'https://via.placeholder.com/150/00008B/FFFFFF?text=Docker',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
  },
  {
    id: 93,
    title: 'Java for Beginners',
    description: 'Learn the fundamentals of Java programming.',
    image: 'https://via.placeholder.com/150/00BFFF/FFFFFF?text=Java',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=eIrMbAQSU34',
  },
  {
    id: 94,
    title: 'Introduction to PHP',
    description: 'Get started with PHP for web development.',
    image: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=PHP',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=OK_JCtrrv-c',
  },
  {
    id: 95,
    title: 'Building APIs with Django',
    description: 'Learn how to build APIs using Django.',
    image: 'https://via.placeholder.com/150/7B68EE/FFFFFF?text=Django',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=YpDmvEjsHGo',
  },
  {
    id: 96,
    title: 'Exploring React Hooks',
    description: 'Learn how to use React hooks in your applications.',
    image: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=React+Hooks',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=dpw9EHD0dJQ',
  },
  {
    id: 97,
    title: 'GraphQL for Beginners',
    description: 'Learn how to use GraphQL for API queries.',
    image: 'https://via.placeholder.com/150/000000/FFFFFF?text=GraphQL',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=ed8SzALpx1Q',
  },
  {
    id: 98,
    title: 'Advanced Python Programming',
    description: 'Learn advanced concepts in Python programming.',
    image: 'https://via.placeholder.com/150/800000/FFFFFF?text=Advanced+Python',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=HGOBQPFzWKo',
  },
  {
    id: 99,
    title: 'React Native for Beginners',
    description:
      "A beginner's guide to building mobile apps with React Native.",
    image: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=React+Native',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
  },
  {
    id: 100,
    title: 'Machine Learning with TensorFlow',
    description: 'Learn machine learning with TensorFlow.',
    image: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=TensorFlow+ML',
    price: 'Free',
    link: 'https://www.youtube.com/watch?v=8t4tQqDPs3k',
  },
];

export default coursesApi;
