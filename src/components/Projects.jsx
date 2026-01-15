import { useState } from "react";

function Projects() {
  const projects = [
    {
      name:"AI Resume Screening Tool",
      description:"A Streamlit-based AI Resume Screening Tool that automates resume analysis using NLP and machine learning. It extracts text from PDF/DOCX files using PyMuPDF, python-docx, and OCR for scanned resumes, then evaluates candidate suitability using SentenceTransformer embeddings. The system generates Match Scores, extracts experience, email, and phone details, and produces a Final Score through a weighted algorithm combining JD similarity and experience. It presents ranked candidates in a clean, interactive dashboard, showcasing skills in NLP, AI model usage, text extraction, regex, and full app development with Streamlit.",
      tools:"Python, Streamlit, NLP, SentenceTransformer, PyMuPDF, python-docx, OCR, Pandas",

      github: "https://github.com/mspoul/AI_Resume_Screening_Tool",
      link:"https://airesumescreeningtool-ffbsu9eg8atzdhyafafihf.streamlit.app/",
    },
    {
      name: "Personal Portfolio Website",
      description:"A modern and fully responsive personal portfolio website built using React.js, Tailwind CSS, and custom components. The site showcases my projects, technical skills, soft skills, resume preview, and contact details in a clean and interactive UI. It includes smooth animations, a dynamic navbar, project cards, responsive sections, resume download feature, and glass-morphism effects. This project demonstrates strong front-end development skills using React, Tailwind CSS, reusable components, responsive design, and UI/UX optimization.",
      tools: "React.js, Tailwind CSS, JavaScript, HTML",
      github: "https://github.com/mspoul/suraj-portfolio",
      link: "https://surajpoul.netlify.app/"       
},  


    {
      name: "Charity Management System",
      description:"A full-stack Charity Management System designed to manage donors, volunteers, events, and fund tracking efficiently. Built using Node.js, Express.js, MySQL, HTML, CSS, and JavaScript, the system provides a seamless workflow for recording donations, tracking charity activities, managing volunteer information, and organizing events. It includes secure backend APIs, database integration, form validations, dynamic UI, and real-time data handling. This project demonstrates strong backend development skills, SQL database design, REST API creation, and full-stack implementation for a real-world charity workflow.",

      tools: "HTML, CSS, JavaScript, Node.js, Express.js, MySQL, REST APIs",
      github: "#",
      link:"#",
    },
    {
      name: "Interactive Simon Says Memory Game",
      description:
        "The Simon Says Game is an interactive memory-based challenge built using HTML, CSS, and JavaScript.The game generates random color sequences that the user must repeat correctly. Each correct step increases the difficulty level by extending the sequence.It includes smooth button animations, visual feedback, user input tracking, high-score saving, and a clean UI.This project demonstrates skills in event handling, animation techniques, DOM manipulation, and building real-time interactive logic from scratch..",
      tools: "HTML, CSS, JavaScript",
      github: "https://github.com/mspoul/Siman-Says-Game",
      link:"https://lively-malabi-b5862a.netlify.app/",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[url('/white.png')] bg-cover bg-center bg-no-repeat pt-24 px-10 flex flex-col md:flex-row gap-10"

    >
      {/* LEFT SIDE — TITLES */}
      <div className="w-full md:w-1/3 space-y-4">
        <h1 className="text-4xl font-bold mb-6 text-black ">My Projects</h1>

        {projects.map((p, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            className={`
              p-4 rounded-xl cursor-pointer border 
              backdrop-blur-sm
              transition-all duration-700

              ${
                active === index
                  ? "bg-black/10 border-black text-black font-semibold"
                  : "bg-black/5 border-gray-300 text-gray-700 hover:bg-black/10"
              }
            `}
          >
            <h2 className="text-xl">{p.name}</h2>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE — DETAILS PANEL */}
      <div className="w-full md:w-2/3 flex items-start">
        {active !== null && (
          <div
            className="
              w-full p-8 rounded-xl
              bg-white/30 backdrop-blur-lg
              border border-black/20 shadow-2xl

              opacity-0 translate-y-6
              animate-[fadeMove_3s_ease-out_forwards]
            "
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              {projects[active].name}
            </h2>

            <p className="text-black/80 leading-7 mb-6 font-thin">
              {projects[active].description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[active].tools.split(",").map((t, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-xs rounded-full
                    bg-black/10 border border-black/20 
                    text-black
                    backdrop-blur-sm
                  "
                >
                  {t.trim()}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={projects[active].github}
                target="_blank"
                className="
                  px-4 py-2 bg-black text-white 
                  rounded-lg font-semibold 
                  hover:bg-black/80 
                  transition-all duration-700
                "
              >
                🔗 GitHub
              </a>

              <a
                href={projects[active].link}
                target="_blank"
                className="
                  px-4 py-2 border border-black
                  text-black rounded-lg
                  hover:bg-black hover:text-white
                  transition-all duration-700
                "
              >
                🚀 View Project
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Slow animation keyframes */}
      <style>
        {`
          @keyframes fadeMove {
            0%   { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}

export default Projects;
