export const examDetails = {
  JEE: {
    fields: [
      {
        name: "category",
        type: "radio",
        options: [
          "OPEN",
          "EWS",
          "OBC-NCL",
          "SC",
          "ST",
          "OPEN (PWD)",
          "EWS (PWD)",
          "OBC-NCL (PWD)",
          "SC (PWD)",
          "ST (PWD)",
        ],
      },
      {
        name: "jee_rank",
        type: "text",
      },
      {
        name: "gender",
        type: "radio",
        options: ["Gender-Neutral", "Female-Only (including supernumerary)"],
      },
      {
        name: "programs",
        type: "dropdown",
        options: [
          "Bio Technology",
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Science and Engineering",
          "Electrical Engineering",
          "Electronics and Communication Engineering",
          "Industrial and Production Engineering",
          "Information Technology",
          "Instrumentation and Control Engineering",
          "Mechanical Engineering",
          "Textile Technology",
          "Architecture",
          "Metallurgical and Materials Engineering",
          "Materials Science and Metallurgical Engineering",
          "Mathematics and Data Science",
          "Planning",
          "Production and Industrial Engineering",
          "Biotechnology and Biochemical Engineering",
          "Chemistry",
          "Computational Mathematics",
          "Electronics and Instrumentation Engineering",
          "Engineering Physics",
          "Mathematics & Computing",
          "Physics",
          "Production Engineering",
          "Electrical and Electronics Engineering",
          "Engineering Physics",
          "Materials Science and Engineering",
          "Biotechnology",
          "Chemical Engineering",
          "Chemistry",
          "Computer Science and Engineering",
          "Electronics and Communication Engineering",
          "Mathematics and Computing",
          "Artificial Intelligence",
          "Mining Engineering",
          "Biomedical Engineering",
          "Computer Engineering",
          "Ceramic Engineering",
          "Ceramic Engineering and M.Tech Industrial Ceramic",
          "Food Process Engineering",
          "Industrial Design",
          "Life Science",
          "Mathematics",
          "Metallurgical and Materials Engineering",
          "Mining Engineering",
          "Physics",
          "Aerospace Engineering",
          "Electronics and Telecommunication Engineering",
          "Metallurgy and Materials Engineering",
        ]
      },
    ],
    API: "http://techathon-backend-ovf9.onrender.com/recommend/JEE",
  },
  CET: {
    fields: [
      {
        name: "category",
        type: "menu",
        options: [
          "DT/VJ", "DT/VJ/DEF1", "DT/VJ/DEF2", "DT/VJ/PH1",
          "NT 1 (NT-B)", "NT 1 (NT-B)/DEF1", "NT 1 (NT-B)/DEF2", "NT 1 (NT-B)/PH1",
          "NT 2 (NT-C)", "NT 2 (NT-C)/DEF1", "NT 2 (NT-C)/DEF2", "NT 2 (NT-C)/PH1",
          "NT 3 (NT-D)", "NT 3 (NT-D)#", "NT 3 (NT-D)$", "NT 3 (NT-D)/DEF1", "NT 3 (NT-D)/DEF2", "NT 3 (NT-D)/PH1",
          "OBC","OBC/DEF1", "OBC/DEF2", "OBC/DEF3", "OBC/PH1", "OPEN", "Open/DEF1", "Open/DEF2", "Open/DEF3", "Open/PH1",
          "SBC", "SBC/DEF1", "SBC/DEF2", "SBC/PH1", "SC", "SC/DEF1", "SC/DEF2", "SC/DEF3", "SC/PH1", "ST", "ST/DEF1", "ST/DEF2", "ST/PH1",
        ],
      },
      {
        name: "gender",
        type: "radio",
        options: ["F", "M"],
      },
      {
        name: "rank",
        type: "text",
      },
      {
        name: "preferred_branches",
        type: "dropdown",
        options: [
          "Aeronautical Engineering", "Agricultural Engineering", "Agriculture Engineering", "Artificial Intelligence", "Artificial Intelligence (AI) and Data Science", "Artificial Intelligence and Data Science", "Artificial Intelligence and Data Science University , Jalgaon", "Artificial Intelligence and Machine Learning", "Automation and Robotics", "Automobile Engineering", "Automotive Technology", "Bio Medical Engineering", "Bio Technology", "Chemical Engineering", "Civil Engineering", "Civil and Environmental Engineering", "Civil and infrastructure Engineering", "Computer Engineering", "Computer Engineering (Regional Language)", "Computer Science and Business Systems", "Computer Science and Design", "Computer Science and Engineering", "Computer Science and Engineering (Artificial Intelligence and Data Science)", "Computer Science and Engineering (Artificial Intelligence)", "Computer Science and Engineering (Cyber Security)", "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain Technology)", "Computer Science and Engineering (IoT)", "Computer Science and Engineering University , Jalgaon", "Computer Science and Engineering(Artificial Intelligence and Machine Learning)", "Computer Science and Engineering(Cyber Security)", "Computer Science and Engineering(Data Science)", "Computer Science and Information Technology", "Computer Science and Technology", "Computer Technology", "Cyber Security", "Data Engineering", "Data Science", "Dyestuff Technology", "Electrical Engg [Electrical and Power]", "Electrical Engg[Electronics and Power]", "Electrical Engineering", "Electrical and ComputerEngineering", "Electrical and Electronics Engineering", "Electronics Engineering", "Electronics Engineering ( VLSI Design and Technology)", "Electronics and Communication Engineering", "Electronics and Computer Engineering", "Electronics and Computer Science", "Electronics and Telecommunication Engg", "Electronics and Telecommunication Engg University , Jalgaon", "Fashion Technology", "Fibres and Textile Processing Technology", "Food Engineering and Technology", "Food Technology", "Food Technology And Management", "Industrial IoT", "Information Technology", "Instrumentation Engineering", "Instrumentation and Control Engineering", "Internet of Things (IoT)", "Man Made Textile Technology", "Manufacturing Science and Engineering", "Mechanical & Automation Engineering", "Mechanical Engineering", "Mechanical Engineering[Sandwich]", "Mechanical and Mechatronics Engineering (Additive Manufacturing)", "Mechatronics Engineering", "Metallurgy and Material Technology", "Mining Engineering", "Oil Technology", "Oil and Paints Technology", "Oil,Oleochemicals and Surfactants Technology", "Paints Technology", "Paper and Pulp Technology", "Petro Chemical Engineering", "Petro Chemical Technology", "Pharmaceutical and Fine Chemical Technology", "Pharmaceuticals Chemistry and Technology", "Plastic Technology", "Plastic and Polymer Engineering", "Plastic and Polymer Technology", "Polymer Engineering and Technology", "Printing Technology", "Production Engineering", "Production Engineering[Sandwich]", "Robotics", "Robotics and Artificial Intelligence", "Robotics and Automation", "Safety and Fire Engineering", "Structural Engineering", "Surface Coating Technology", "Textile Chemistry", "Textile Engineering / Technology", "Textile Plant Engineering", "Textile Technology",
        ],
      },
    ],
    API: "http://techathon-backend-ovf9.onrender.com/recommend/CET",
  },
  CAT: {
    fields: [
      {
        name: "category",
        type: "menu",
        options: ["General", "OBC", "SC", "ST", "PWD"],
      },
      {
        name: "lrdi",
        type: "text",
      },
      {
        name: "qa",
        type: "text",
      },
      {
        name: "varc",
        type: "text",
      },
      {
        name: "overall",
        type: "text",
      },
    ],
    API: "http://techathon-backend-ovf9.onrender.com/recommend/CAT",
  },
  NEET: {
    fields: [
      {
        name: "category",
        type: "menu",
        options: ["General", "EWS", "OBC", "SC", "ST"],
      },
      {
        name:"rank",
        type: "text"
      }
    ],
    API: "http://techathon-backend-ovf9.onrender.com/recommend/NEET",
  },
  BITSAT: {
    fields:[
      {
        name: 'marks',
        type: 'text'
      },
      {
        name: 'branch_interests',
        type: 'dropdown',
        options: [
          'Chemical',
          'Civil',
          'Electrical & Electronics',
          'Mechanical',
          'Computer Science',
          'Electronics & Instrumentation',
          'Electronics & Communication',
          'Manufacturing',
          'B. Pharm',
          'Biological Sciences',
          'Chemistry',
          'Economics',
          'Mathematics',
          'Physics'
        ]
      }
    ],
    API:"http://techathon-backend-ovf9.onrender.com/recommend/BITSAT"
  },
  LAW: {
    fields: [
      {
        name: "category",
        type: "menu",
        options: ["General", "OBC", "SC", "ST"],
      },
      {
        name:"rank",
        type: "text"
      }
    ],
    API: "http://techathon-backend-ovf9.onrender.com/recommend/LAW",
  },
};
