import React from "react";

function SoftSkills() {
  const skills = [
    { icon: "bi-people", title: "Teamwork" },
    { icon: "bi-chat-dots", title: "Communication" },
    { icon: "bi-lightbulb", title: "Problem Solving" },
    { icon: "bi-flag", title: "Leadership" },
    { icon: "bi-speedometer2", title: "Time Management" },
    { icon: "bi-bullseye", title: "Critical Thinking" },
    { icon: "bi-lightbulb-fill", title: "Creativity" },
    
    { icon: "bi-graph-up", title: "Adaptability" },
  ];

  return (
    <section
      id="softskills"
      className="min-h-screen w-full px-6 md:px-20 py-20 
                 bg-transparent flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        Soft{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
          Skills
        </span>
      </h1>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                   gap-10 w-full max-w-6xl"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-lg 
                       border border-white/10 
                       shadow-lg hover:shadow-2xl
                       hover:border-white/40 
                       rounded-2xl p-8 flex flex-col items-center 
                       text-center transition-all duration-500 
                       opacity-0 translate-y-10 animate-[fadeInUp_1s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full bg-white/10 
                         flex justify-center items-center text-white 
                         text-3xl mb-4 shadow-md 
                         group-hover:scale-110 group-hover:bg-white/20
                         transition-all duration-300"
            >
              <i className={skill.icon}></i>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition">
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SoftSkills;
