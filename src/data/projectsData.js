// src/data/projectsData.js

const projects = [
  {
    id: 1,
    title: "Cloud-Native Full CI/CD Pipeline with Jenkins, GitLab & SonarQube",
    description: `Designed and deployed a cloud-based CI/CD pipeline for a Spring Boot application using industry-standard tools. The pipeline includes stages for build, test, static code analysis, containerization, and automated deployment. Integrated SonarQube to enhance code quality through static analysis. Deployed the app and supporting tools securely to AWS EC2 with domain and SSL configurations.`,
    features: [
      "Automated CI/CD Pipeline using Jenkins triggered via GitLab webhook",
      "Containerized Spring Boot App using Docker",
      "Remote Deployment to AWS EC2 via SSH",
      "Static Code Analysis using SonarQube (hosted on dedicated EC2 with PostgreSQL)",
      "NGINX Reverse Proxy for both the app and SonarQube",
      "Custom Subdomains managed through Cloudflare with SSL via Certbot",
      "Continuous Delivery from code push → Docker Hub → live deployment"
    ],
    techStack: [
      "Jenkins", "GitLab", "Docker", "Spring Boot", "AWS EC2", "SonarQube",
      "NGINX", "PostgreSQL", "Cloudflare", "Certbot SSL", "Node.js", "Maven"
    ],
    links: [
      {
        label: "GitLab CI/CD Activity",
        url: "https://www.linkedin.com/posts/isuru-indrajith-387ab7278_devops-cicd-gitlab-activity-7340644534885732353-QPk3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPLZFcBxoOtvs0Swhj_u3qmdix5634CbYY",
      },
      {
        label: "SonarQube Static analysis",
        url: "https://www.linkedin.com/posts/isuru-indrajith-387ab7278_devops-cicd-jenkins-activity-7341411933092225024-hIv3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPLZFcBxoOtvs0Swhj_u3qmdix5634CbYY",
      }
    ]
  },

  {
    id: 2,
    title: "Target Strike Sensor Shooting Game (ESP32 & Firebase)",
    description: ` Built a real-time shooting game to detect and display target hit counts on the game console circuit and also in a mobile app
 at the same time. Integrated backend data streaming to a mobile app using React Native and Expo Gained experience with
            real-time debugging and system monitoring`,
    features: [
      "Real-Time Scoring on a seven-segment display",
      "Dynamic Difficulty Levels (Easy, Medium, Hard)",
      "Smart Target Movement with Ultrasonic Sensor",
      "Mobile App Integration with Firebase"
    ],
    techStack: ["Espressif", "C++", "ESP32", "ESP-NOW", "React Native", "Firebase"],
    links: [
      {
        label: "Target Strike Game",
        url: "https://www.linkedin.com/posts/isuru-indrajith-387ab7278_innovation-embeddedsystems-teamwork-activity-7318233889859162113-qorb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPLZFcBxoOtvs0Swhj_u3qmdix5634CbYY",
      }
    ]
  },

  {
    id: 3,
    title: " Automated Exam System (Coursework Project)",
    description: `  Contributed to frontend and QA for an online exam system where students are able to take exams, quizzes and
 assignments online. Used Git for version control, inspected the in code reviews for bug tracking and test case
 documentation`,
    features: [
      "User Authentication and Role Management",
      "Exam Creation and Scheduling",
      "Real-Time Exam Monitoring",
      "Automated Grading and Feedback"
    ],
    techStack: [" React Vite", "Spring boot", "Manual testing", "Selenium", "GitHub version control"],
    links: [
      {
        label: "Git Hub repo",
        url: "https://github.com/Dinith132/Automated-Examination-System",
      }
    ]
  },

  {
    id: 4,
    title: "  AI/ML Traffic Congestion Detection System",
    description: `  Built a machine learning app to predict traffic congestion levels (Low/Medium/High) using time, location, and vehicle data.
 Trained a Random Forest Classifier and visualized insights with Matplotlib and Seaborn. Deployed an interactive frontend
 with Streamlit on Azure App Services using Gunicorn, and exposed the model via a REST API.`,
    features: [
      "Data Preprocessing and Feature Engineering",
      "Random Forest Classifier for Traffic Prediction",
      "Interactive Frontend with Streamlit",
      "Deployment on Azure App Services"
    ],
    techStack: [" Python", "Scikit-learn", "Streamlit", "Azure"],
    links: [
      {
        label: "Git Hub repo",
        url: "https://github.com/IsuruIndrajith/Ai-Traffic-congestion-solution",
      }
    ]
  }


];

export default projects;
