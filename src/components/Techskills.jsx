function Techskills() {
  const categories = [
    
    {
      iconText: "bi-code-slash",
      title: "Programming",
      skills: ["Java", "Python", "JavaScript", "SQL", "C++"],
    },
    {
      iconText: "bi-window",
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "React.js"],
    },
    {
      iconText: "bi-hdd-network",
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      iconText: "bi-tools",
      title: "Tools & Platforms",
      skills: ["Streamlit", "Git", "GitHub", "Netlify"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-transparent px-6 md:px-20 py-20"

    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 underline underline-offset-8">
        Technical <span className="text-gray-500">Skills</span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-md rounded-3xl p-8 
                       border border-gray-300
                       hover:shadow-xl hover:-translate-y-2
                       transition-all duration-300"
          >
            {/* Icon */}
            <div
                className="w-14 h-14 bg-black text-white-800 
                            rounded-xl flex justify-center items-center 
                            text-2xl"
            >
                <i className={cat.iconText}></i>
            </div>


            {/* Title */}
            <h2 className="text-2xl font-bold text-black mt-4 mb-4">
              {cat.title}
            </h2>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-800 
                             rounded-lg text-sm border border-gray-200
                             hover:bg-black hover:text-white
                             transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techskills;
