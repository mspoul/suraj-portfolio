function ProjectItem({ name, description, tools, githublink }) {
  return (
    <div className="
      w-90 p-6 rounded-xl 
      bg-white/5 backdrop-blur-md     /* Transparent glass effect */
      border border-gray-600/50      
      shadow-lg 
      text-gray-200
      hover:shadow-2xl hover:-translate-y-2
      transition-all duration-300
    ">

      <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>

      <p className="text-gray-300 text-sm leading-6 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tools.split(",").map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs
                       bg-white/10 text-gray-200 
                       rounded-full border border-gray-500/50"
          >
            {tool.trim()}
          </span>
          
        ))}
      </div>
      <a href={githublink}  className="flex items-center w-25 mt-5 px-4 py-2 bg-[oklch(98.5%_0_0)] 
                     hover:bg-green-600 rounded-lg text-black font-semibold">View Project</a>
      
    </div>
  );
}

export default ProjectItem;
