/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "RetroElkinTG's Portfolio",
  description:
    "A passionate and ambitious individual who thrives on developing sustainable and scalable technical systems to create a better future.",
  og: {
    title: "RetroElkinTG's Portfolio",
    type: "website",
    url: "http://retroelkintg.com/",
  },
};

//Home Page
const greeting = {
  title: "Elkin Franco",
  logo_name: "ElkinFranco",
  nickname: "RetroElkinTG",
  subTitle:
    "A passionate and ambitious individual who thrives on developing sustainable and scalable technical systems to create a better future.",
  resumeLink:
    "https://www.linkedin.com/in/elkin-franco/",
  portfolio_repository: "https://github.com/RetroElkinTG/RetroElkinTG",
  githubProfile: "https://github.com/RetroElkinTG",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/RetroElkinTG",
  // linkedin: "https://www.linkedin.com/in/elkin-franco/",
  // gmail: "RetroElkinTG@gmail.com",
  // gitlab: "https://gitlab.com/RetroElkinTG",
  // facebook: "https://www.facebook.com/elkin.franco.90281",
  // twitter: "https://x.com/RetroElkinTG",
  // instagram: "https://www.instagram.com/retroelkintg/"

  {
    name: "Github",
    link: "https://github.com/RetroElkinTG",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/elkin-franco/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@retroelkintg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:RetroElkinTG@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/RetroElkinTG",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/elkin.franco.90281",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/retroelkintg/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Learning about highly scalable production ready models for various deep learning and statistical use cases",
        "⚡ Experience working with Generative AI and MySQL projects",
        "⚡ A slightly high reliance on ChatGPT :)",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive front end for websites using React-Redux",
        "⚡ Developing mobile applications using Bootstrap, React Native and solo android apps using Anvil",
        "⚡ Creating back end for applications in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    /*{
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Aspiring for experience on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying websites such as this on the internet",
        "⚡ Pursuing certificates in AWS, Azure, and Google Cloud",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },*/
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/retroelkintg/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/retroelkintg",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/retroelkintg",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/RetroElkinTG",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@retroelkintg",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/retroelkintg",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "No degrees yet, I'm too young!",
      subtitle: "I would love a Bachelor of Software Engineering though.",
      logo_path: "unsw_logo.png",
      alt_name: "UNSW",
      duration: "2006 - 2024",
      descriptions: [
        "⚡ In my own time, I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I aim to complete courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I aspire to be accepted into scholarships and internships for a boost in my career.",
      ],
      website_link: "https://retroelkintg.com",
    },
    {
      title: "Harvard University",
      subtitle: "CS50's Introduction to Computer Science",
      logo_path: "harvard_logo.png",
      alt_name: "Harvard University",
      duration: "2024 - 2024",
      descriptions: [
        "⚡ I had taken on Harvard's intensive 10-week course and completed it over a 2-week school holiday period.",
        "⚡ In the course, I had learnt memory management and DSA using the C programming language, and artifical intelligence using Python.",
        "⚡ On the final weeks, I developed a few websites using Flask, and for my final project I created a 2D Zelda-Like RPG using Unity and C#.",
      ],
      website_link: "https://certificates.cs50.io/8920aa65-9460-442c-8ef9-4ef5cf3154ff",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  */],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with and volunteered for many organisations relating to the computer science field. I have been employed as an App Developer and Web Developer, and also am Co-Founder of a program that maintains an active community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Co-Founder",
          company: "PlantCord",
          company_url: "https://www.linkedin.com/company/plantcord/about/",
          logo_path: "plantcord_logo.png",
          duration: "May 2024 - Present",
          location: "Sydney, NSW, Australia",
          description:
            "Co-Founder of PlantCord, an economy bot hosted on Discord using Node.js, TypeScript, and MySQL.",
          color: "#000000",
        },
        {
          title: "Web Developer",
          company: "Help Elevate Youth - Website",
          company_url: "https://www.helpelevateyouth.org/",
          logo_path: "hey_logo.png",
          duration: "Feb 2024 - Present",
          location: "Sydney, NSW, Australia",
          description:
            "Applying DevOps principles to develop and maintain the company website.",
          color: "#0879bf",
        },
        {
          title: "Alumni",
          company: "Harvard University",
          company_url: "https://cs50.harvard.edu/x/2024/",
          logo_path: "harvard_logo.png",
          duration: "Apr 2024 - Present",
          location: "Cambridge, Massachusetts, USA",
          description:
            "Tutoring CS50 students on C, Python, and web development using JavaScript, SQL, and the Flask framework.",
          color: "#fc1f20",
        },
        {
          title: "App Developer",
          company: "Grok Academy",
          company_url: "https://groklearning.com/",
          logo_path: "grok_academy.png",
          duration: "Jan 2024 - Jan 2024",
          location: "Cambridge, Massachusetts, USA",
          description:
            "Assisted in the development of the Future Fixers TV show, where 6 high school students and I worked on projects in the areas of Generative AI, Robotics, and App/Web Development.",
          color: "#fc1f20",
        },
      ],
    },
    /*{
      title: "Internships",
      experiences: [
        {
          title: "Alumni",
          company: "Harvard University",
          company_url: "https://cs50.harvard.edu/x/2024/",
          logo_path: "harvard_logo.png",
          duration: "Apr 2024 - Present",
          location: "Cambridge, Massachusetts, USA",
          description:
            "Tutoring CS50 students on C, Python, and web development using JavaScript, SQL, and the Flask framework.",
          color: "#fc1f20",
        },
      ],
    },*/
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Ambassador",
          company: "Help Elevate Youth - GoFundMe",
          company_url: "https://www.gofundme.com/f/helpelevateyouth",
          logo_path: "hey_logo.png",
          duration: "Feb 2024 - Present",
          location: "Sydney, NSW, Australia",
          description:
            "Leading donation drives and advocating for disadvantaged youth/homelessness in my school and community, raising thousands with the support of my peers and mentors.",
          color: "#9b1578",
        },
        {
          title: "Student Project Researcher",
          company: "CSIRO",
          company_url: "https://www.csiro.au/en/",
          logo_path: "csiro.png",
          duration: "Mar 2022 - Nov 2022",
          location: "Sydney, NSW, Australia",
          description:
            "STEM-focused solutions to local problems surrounding environmental sustainability and climate change. Researched, developed and presented a prototype for a zero-emission public transport system to members of Blacktown City Council.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technologies available in our modern world. My biggest project was the creation of a 2D Zelda-Like RPG, namely Malevolent Shrine, which was produced using Unity and C#.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "", // Publications
  description: "", // Some of my published Articles, Blogs and Research.
  avatar_image_path: "", // projects_image.svg
};

const publications = {
  data: [/*
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  */],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "elkin_franco.png",
    description:
      "I am quite the busy individual, but if you need to contact me, I will mainly respond through LinkedIn. :)",
  },
  blogSection: {
    title: "Video Games",
    subtitle:
      "My largest hobby other than programming is playing video games.",
    link: "https://psnprofiles.com/RetroElkinTG",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sydney, NSW, Australia 2052",
    locality: "Sydney",
    country: "Australia",
    region: "New South Wales",
    postalCode: "2052",
    streetAddress: "Anzac Parade",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/KKLejUWbQ63Ykm866",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
