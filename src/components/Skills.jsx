function Skills() {
  const skillCategories = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js"],
    "Database": ["MySQL", "MongoDB"],
    "AI & NLP": ["Sentence Transformers", "Cosine Similarity"],
    "Tools": ["Git", "GitHub", "Postman", "VS Code"]
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-orange-400 mb-6">Technical Skills</h3>

      <div className="grid gap-6">
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx}>
            <h4 className="text-xl text-white mb-2">{category}</h4>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/10 text-gray-200 border border-white/20
                             rounded-full text-sm hover:bg-[#8D6E63]/40 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
