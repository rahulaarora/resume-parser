const skillsData = {
  "Cyber Security Specialist":["System administration", "Network security", "Firewall administration"],
  "mern developer": ["mongodb", "express", "react", "nodejs"],
  "mean developer": ["mongodb", "express", "angular", "nodejs"],
  "fullstack developer": [
    "mongodb",
    "express",
    "react",
    "React",
    "nodejs",
    "angular",
  ],
  "java developer": ["java", "Java", "oops", "dsa"],
  "Azure ADF Developer": ["Azure Fundamentals", " ADF", " SQL", " ETL"],
  "Azure Data Bricks Developer": [
    "Big data processing",
    " Spark",
    " Python/Scala/R",
  ],
  "Azure Data Engineer": [
    "Azure data factory",
    " Azure Data Bricks",
    " PowerBI analytics",
    " Synapse Analytics",
    " blob storage",
  ],
  "Azure Data Modeler": [
    "Sufficient experience using database systems\nConceptual",
    " logical & Physical Design\n" +
      "Abstract Thinking\n" +
      "Adapt to new modeling methods\n" +
      "Familiarity with modeling tools\n" +
      "Exemplary communication skills\n" +
      "Experience in creating modeling solutions using relational",
    " dimensional",
    " and NoSQL databases\nSQL language and its implementation -- Good to have",
  ],
  "Solution Architect - Digital": ["Azure"],
  "Solution Architect - Data": [
    "Understanding of Data Warehouse architecture and different models used;\n" +
      "Understanding of Data Quality",
    " Metadata management",
    " governance of data\n" +
      "Understanding of all aspects of enterprise warehouse - from ingestion to consumption\n" +
      "Understanding of data and infra security",
  ],
  "AWS Data Engineer ": ["Python; AWS Glue; Spark; EMR; RDS/Redshift"],
  "AWS Glue Studio Developer": ["Glue Studio; RDS/Redshift"],
  "GCP Data Engineer": ["GCP Fundamentals"],
  "Hydrograph Developer": ["DW Concepts"],
  "Ab Initio Developer": ["AB-INITIO"],
  "Core Java Developer": ["Core Java", " OOP concepts"],
  "Talend Developer": ["Unix", " Shell", " SQL", " Talend"],
  "Kafka Developer": ["Kafka"],
  "Machine Learning Developer": [
    "Understanding of Machine Learning",
    " Deep Learning concepts",
    " and algorithms\n1. Statistics",
  ],
  "Informatica - IICS Developer": [
    "Informatica Power Center",
    " Informatica Cloud services",
    " Unix",
    " SQL",
  ],
  "DevOps Engineer": ["Jenkins", " Unix"],
  "SSIS Developer": ["SSIS", " SQL"],
  "PL SQL / T SQL Developer": ["PL SQL"],
  "ETL Tester": ["Testing Concepts"],
  "Informatica - Power Center Developer": [
    "Informatica Power Center",
    " Unix",
    " SQL",
  ],
  "iOS Developer": [
    "Swift",
    " Xcode IDE",
    " Grand Central Dispatch",
    " Core Data",
  ],
  "Scala - Beginner": ["Functional Programming Principles in Scala"],
  "Scala- Advanced": ["Functional Program Design in Scala"],
  "Informatica Admin": [
    "Informatica Power Center Administration",
    " Unix",
    " Shell scripting",
  ],
  "PowerBI Developer": [
    "SQL",
    " UNIX Scripting",
    " PowerBI",
    " Cloud Fundamentals",
  ],
  "Tableau Developer": [
    "SQL",
    " UNIX Scripting",
    " Tableau",
    " Cloud Fundamentals",
  ],
  "Qlikview Developer": ["Qlikview", " QlickSense"],
  "AWS Quick Sight Developer": [
    "SQL",
    " UNIX Scripting",
    "AWS Quick Sight",
    " Cloud Fundamentals",
  ],
  "Looker Developer": ["SQL", " UNIX Scripting", " Looker Cloud Fundamentals"],
  "Oracle DBA": [
    "Database backup/restore Using RMAN",
    " RAC cluster",
    " Import/Export of data",
    " Security",
    " Database patching",
    " Automatic storage management",
    " Installation & configuration of Oracle instance using windows/Linux",
    " Performance tuning",
    " Regular database housekeeping and trouble shooting",
  ],
  "UI Developer - Angular": [
    "NPM",
    " HTML & CSS",
    " Angular CLI",
    " Angular",
    " TypeScript",
  ],
  "UI Developer - React": [
    "NPM",
    " HTML & CSS",
    " Redux",
    " JavaScript Fundamentals + ES6",
    " JSX",
  ],
  ".Net Developer": ["ASP.Net"],
  ".NET Fullstack Developer": ["HTML & CSS", " jQuery"],
  "Sharepoint Developer": ["SPFX"],
  "SharePoint Administrator": [
    "SharePoint installation",
    " architectire",
    " configuration",
    " backup & restore",
    " upgrade & migrate",
    " monitoring & optimization",
  ],
  "Android Developer": [
    "Core Java",
    " Android Studio",
    " XML",
    " Android SDK",
    " Material Design",
  ],
  "APIGEE Developer": ["APIGEE Edge", " Core Java"],
  "Hybrid Mobile Developer": [
    "React Native",
    " JavaScript + ES6 ",
    " JSX",
    " Virtual DOM",
    " Redux ",
  ],
  "Google Analytics GTM Developer": ["Basic CSS/JavaScript/HTML/SQL"],
  "UI/UX Developer": ["Sketch/Photoshop/Illustrator"],
  "Automation Tester": [
    "Selinium/TestNG",
    " Core Java",
    " Mockito",
    " REST Assured",
    " Cucumber",
  ],
  "Web/Mobile  Manual Tester": [
    "UI Testing",
    " Usablity and Performance Testing (JMeter)",
    " Security Testing",
  ],
  "API Tester": ["SOAP UI", " Postman"],
  "Software Development Engineer in Test (SDET)": [
    "Core Java",
    " Selinium/ Node JS",
    " API and UI testing",
  ],
  "Pyspark Developer": ["pyspark"],
  "Java backend with Microservices": ["Microservices"],
};

export default skillsData;


//for transformation from JSON format to JS object
// data.forEach(element => {
//   transform[element.Role] = element.Skills.split(",");
// });