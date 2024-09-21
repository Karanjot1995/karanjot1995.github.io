import {
  Github,
  Linkedin,
  Stackoverflow,
  Twitter,
  Youtube,
  Leetcode,
} from './images';


const work = {
  education: [
    {
      timePeriod: '2021 - 2023',
      company: 'University of Texas at Arlington (UTA)',
      title: 'MS in Computer Science',
      description: "",
    },
    {
      timePeriod: '2013 - 2017',
      company: 'Guru Gobind Singh Indraprastha University',
      title: 'B.Tech in Electronics & Comm. Engg.',
      description: '',
    },
  ],
  experience: [
    {
      timePeriod: '2023 - Current',
      company: 'Megger, Dallas',
      title: 'Software Developer',
      description:
        'Functioned and designed Megger web portal(demoassets.com) for handling equipment delivery, management and tracking and the rental platform utilizing Vuejs for frontend development and built RESTful APIs using Java Spring Boot and MYSQL.',
    },
    {
      timePeriod: '2022 - 2023',
      company: 'Megger, Dallas',
      title: 'Software Developer Intern',
      description:
        'Rolled out a fully functional Megger online interface for equipment administration and tracking incorporating distributed systems and reducing manual entry time by 50%. Validated, tested, and wrote code following the Software Development Life Cycle (SDLC) to enhance performance, improve user experience, and save operational costs by 60% while reducing time by 25%.Tech Stack: Java, Spring Boot, Vuejs, JavaScript and MySQL',
    },
    {
      timePeriod: '2021 - 2021',
      company: 'Collegedunia.com',
      title: 'Software Engineer',
      description:
        'Spearheaded the integration and development of collegedunia.com as a software engineer on the education portal and led a team of 10. Achieved a 15% reduction in software development cycle time by optimizing the deployment pipeline and implementing automated testing. Tech Stack: Nextjs, React, Nodejs, HTML and CSS.',
    },
    {
      timePeriod: '2018 - 2021',
      company: 'Hogarth Worldwide',
      title: 'Software Engineer',
      description:
        "Oversaw the development and launch of the discernliving.com web application leading a team of 4 and assisted them in generating over $1 million in revenue in only the first year of business. \nAchieved a 20% improvement in website loading speed by optimizing frontend code and implementing caching strategies. \nAuthored and Maintained BMW India website as a team lead on AEM Platform (Java), Spring-Boot and Angular, and increased user engagement by 25% through the implementation of responsive design and interactive user interface. \nOrchestrated the development of a cutting-edge Workplace Management Tool for HR and employee management resulting reduction in manual intervention and cut down employee management time by a significant 60%. \nAutomated the SEO process by creating an SEO Tool. \nTech Stack: React, JavaScript, Redux, Nodejs, MongoDB, Swift, Selenium, CI/CD, Docker Containers, XML, Java, Python, TypeScript, Couchbase, SQL Server, Swift",
    },
  ],
};

const about = {
  title: 'Karanjot Singh',
  description:
    "👋 there! I love to build cool stuff. I design and build Web and Mobile Applications.. \n\n Feel free to contact me if you've any questions!",
  social: [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/karanjotsingh1995/',
      image: Linkedin,
    },
    {
      name: 'Github',
      link: 'https://github.com/Karanjot1995',
      image: Github,
    },
    {
      name: 'Leetcode',
      link: 'https://leetcode.com/Karanjot1995/',
      image: Leetcode,
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/sleepy_singh',
      image: Twitter,
    },
  ],
};




const projects = {
  "all":[
    {
      "title": "DSA Prep",
      "description":"Data Structures and Algorithms preperations app with file storage and code editor with ability to import questions from other users",
      "tech_stack": "Reactjs, Express, Nodejs, MySQL",
      "url":"https://dsa-progress-tracker.vercel.app/",
      "github_url":"https://github.com/Karanjot1995/dsa-progress-tracker",
      "thumbnail":"../images/images/dsa/1.png",
      "images":[ 
        "../images/images/dsa/1.png",  
        "../images/images/dsa/2.png", 
        "../images/images/dsa/3.png", 
        "../images/images/dsa/4.png", 
        "../images/images/dsa/5.png"
      ]
    },
    {
      "title": "Netflix",
      "description":"Netflix Clone Video Management System",
      "tech_stack": "Reactjs, Express, Nodejs, MySQL",
      "url":"https://netflix-49393.web.app/",
      "github_url":"https://github.com/Karanjot1995/Netflix-VMS",
      "thumbnail":"../images/images/netflix/1.png",
      "images":[ 
        "../images/images/netflix/1.png",  
        "../images/images/netflix/2.png", 
        "../images/images/netflix/3.png", 
        "../images/images/netflix/4.png", 
        "../images/images/netflix/5.png"
      ]
    },
    {
      "title": "groomers.co.in",
      "description":"E-commerce website for Indian business purposes",
      "tech_stack": "Reactjs, Express, Nodejs, MongoDB",
      "url":"https://groomers.co.in/",
      "github_url":"https://github.com/Karanjot1995/groomers-server",
      "thumbnail":"../images/images/groomers/groomers-1.png",
      "images":[ 
        "../images/images/groomers/groomers-1.png",  
        "../images/images/groomers/groomers-2.png", 
        "../images/images/groomers/groomers-3.png"
      ]
    },
    {
      "title": "social-web.co.in",
      "description":"Post, like comment, chat, add Friend, signup, google Authentication etc.",
      "tech_stack": "Ejs, Express, Nodejs, MongoDB",
      "url":"https://netflix-49393.web.app/",
      "github_url":"https://github.com/Karanjot1995/Social",
      "thumbnail":"../images/images/social/social-1.png",
      "images":[ 
        "../images/images/social/social-1.png",  
        "../images/images/social/social-2.png",  
        "../images/images/social/social-3.png"
      ]
    },
    {
      "title": "Workplace Management Tool",
      "description":"Post, like comment, chat, add Friend, signup, google Authentication etc.",
      "tech_stack": "Reactjs, Java, Spring Boot, MongoDB",
      "github_url":"https://github.com/Karanjot1995/Workplace-Management-Tool",
      "url":"https://github.com/Karanjot1995/Workplace-Management-Tool",
      "thumbnail":"../images/images/wmt/wmt-1.png",
      "images":[ 
        "../images/images/wmt/wmt-1.png",  
        "../images/images/wmt/wmt-2.png",  
        "../images/images/wmt/wmt-3.png"
      ]
    },
    {
      "title": "SEO Automation Tool",
      "description":"An automation tool for SEO",
      "tech_stack": "Reactjs, Express, Nodejs, MongoDB",
      "github_url":"https://github.com/Karanjot1995/SEO_tool",
      "url":"https://github.com/Karanjot1995/SEO_tool",
      "thumbnail":"../images/images/seo-1.png",
      "images":[ 
        "../images/images/seo-1.png",  
        "../images/images/seo-2.png",  
        "../images/images/seo-3.png"
      ]
    }

  ],
  "work":[
    {
      "title": "collegedunia.com",
      "description":"Company: Collegedunia web Pvt. Ltd.",
      "tech_stack": "Reactjs, Express, Nodejs, MongoDB",
      "url":"https://collegedunia.com/",
      "thumbnail":"../images/images/collegedunia.png"
    },
    {
      "title": "BMW.in",
      "description":"Company: Hogarth Worldwide",
      "tech_stack": "HTML, CSS, Java, Spring Boot (Full Stack), AEM",
      "url":"https://discernliving.com ",
      "thumbnail":"../images/images/BMW_1.png"
    },
    {
      "title": "discernliving.com",
      "description":"Company: Hogarth Worldwide",
      "tech_stack": "Reactjs, Nodejs, Java, Spring Boot (Full Stack)",
      "url":"https://discernliving.com ",
      "thumbnail":"../images/images/discernliving.png"
    },
    {
      "title": "Workplace Management Tool",
      "description":"Company: Hogarth Worldwide",
      "tech_stack": "MongoDb, Reactjs, Java, Spring Boot (Full Stack)",
      "thumbnail":"../images/images/wmt/wmt-1.png"
    },
    {
      "title": "Corporate Gurukul",
      "description":"Company: Hogarth Worldwide",
      "tech_stack": "HTML, CSS, JQuery (Frontend)",
      "url":"https://www.corporategurukul.com/",
      "thumbnail":"../images/images/cg.png"
    },
    {
      "title": "Lentra.ai",
      "description":"Company: Hogarth Worldwide",
      "tech_stack": "HTML, CSS, Javascript (Frontend)",
      "url":"https://lentra.ai/",
      "thumbnail":"../images/images/lentra.png"
    }

  ]
}

const skills = [
  {
    "name": "Java",
    "icon": "../images/logos/java.png"
  },
  {
    "name": "ReactJS",
    "icon": "../images/logos/react.png"
  },
  {
      "name": "ExpressJS",
      "icon": "../images/logos/express.png"
  },
  {
      "name": "NodeJS",
      "icon": "../images/logos/node.png"
  },
  {
      "name": "Redux",
      "icon": "../images/logos/redux.png"
  },
  {
      "name": "Firebase",
      "icon": "../images/logos/firebase.png"
  },
  {
      "name": "Android",
      "icon": "../images/logos/android.png"
  },
  {
      "name": "MaterialUI",
      "icon": "../images/logos/material.png"
  },
  {
      "name": "TailwindCSS",
      "icon": "../images/logos/tailwind.png"
  },
  {
      "name": "Bootstrap",
      "icon": "../images/logos/bootstrap.png"
  },
  {
      "name": "Sass",
      "icon": "../images/logos/sass.png"
  },
  {
      "name": "HTML5",
      "icon": "../images/logos/html.png"
  },
  {
      "name": "CSS3",
      "icon": "../images/logos/css.png"
  },
  {
      "name": "JavaScript",
      "icon": "../images/logos/javascript.png"
  },
  {
      "name": "PHP",
      "icon": "../images/logos/php.png"
  },
  {
    "name": "Laravel",
    "icon": "../images/logos/laravel.png"
  },
  {
      "name": "Python",
      "icon": "../images/logos/python.png"
  },
  {
      "name": "C++",
      "icon": "../images/logos/c.png"
  },
  {
      "name": "MongoDB",
      "icon": "../images/logos/mongodb.png"
  },
  {
      "name": "MySQL",
      "icon": "../images/logos/mysql.png"
  },
  {
      "name": "PostgreSQL",
      "icon": "../images/logos/postgresql.png"
  },
  {
      "name": "AWS",
      "icon": "../images/logos/aws.png"
  },
  {
      "name": "Heroku",
      "icon": "../images/logos/heroku.png"
  },
  {
      "name": "GCP",
      "icon": "../images/logos/gcp.png"
  },
  {
      "name": "jQuery",
      "icon": "../images/logos/jquery.png"
  },
  {
      "name": "Git",
      "icon": "../images/logos/git.png"
  },
  {
      "name": "GitHub",
      "icon": "../images/logos/github.png"
  }
]

export { work, about, projects, skills };
