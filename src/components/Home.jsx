function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row min-h-screen w-full 
                 bg-[url('/bgcode.png')] bg-cover bg-center pt-5"
    >
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 md:py-48 md:ml-32 text-center md:text-left">

        <h1 className="text-4xl md:text-6xl text-orange-600 font-mono font-medium">
          Hi..
        </h1>

        <h2 className="text-2xl md:text-4xl font-mono font-bold italic">
          I'm Suraj Poul
        </h2>

        <h3 className="text-2xl md:text-4xl font-mono font-bold italic">
          a Full Stack Developer
        </h3>

        <p className="mt-6 text-base md:text-xl font-thin leading-7 tracking-wide">
          I’m a Computer Science student passionate about web development and
          problem-solving. I specialize in HTML, CSS, JavaScript, Tailwind CSS,
          Node.js, Express, MongoDB, MySQL, and AI-powered applications.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-5 mt-8">
          {/* GitHub */}
          <a
            href="https://github.com/mspoul"
            target="_blank"
            className="w-12 h-12 flex justify-center items-center
                      bg-white/20 backdrop-blur-md
                      rounded-full shadow-md shadow-black/30
                      transition-all duration-300 ease-out
                      hover:scale-110 hover:shadow-lg hover:shadow-black/30 "
          >
            <img src="/github.png" alt="GitHub" className="w-7" />
          </a>
 


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/suraj-poul-mulkalapally-038021326/"
            target="_blank"
            className="w-12 h-12 flex justify-center items-center
                      bg-white/20 backdrop-blur-md
                      rounded-full shadow-md shadow-black/30
                      transition-all duration-300 ease-out
                      hover:scale-110 hover:shadow-lg hover:shadow-black/30 "
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-7" />
          </a>

          {/* Instagram */}
           
          <a
            href="https://leetcode.com/u/surajpoul01/"
            target="_blank"
            className="w-12 h-12 flex justify-center items-center text-orange-600 font-bold
                      bg-white/20 backdrop-blur-md
                      rounded-full shadow-md shadow-black/30
                      transition-all duration-300 ease-out
                      hover:scale-110 hover:shadow-lg hover:shadow-black/30 "
          >
            LC
          </a>
          <a
            href="mailto:mspoul8044@gmail.com"
            className="w-12 h-12 flex justify-center items-center text-xl
                      bg-white/20 backdrop-blur-md
                      rounded-full shadow-md shadow-black/30
                      transition-all duration-300 ease-out
                      hover:scale-110 hover:shadow-lg hover:shadow-black/30  "
          >
            <i className="bi bi-envelope-fill"></i>
          </a>


        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center md:justify-start gap-4 mt-10">
          <a
            href="#projects"
            className="px-6 py-2 rounded-xl bg-orange-500 text-white
                       hover:bg-orange-600 transition font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            
            className="px-6 py-2 rounded-xl bg-gray-900/60 border border-white/20 
                       text-white hover:bg-gray-700 transition font-medium"
          >
            Contact Me
          </a>

          
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className=" w-full md:w-1/2 flex justify-center items-center pb-10 md:pb-0">
        <img
          src="/poul.png"
          alt="Suraj Poul"
          className="shadow-md shadow-black/50 w-48 h-48 md:w-80 md:h-80 rounded-full object-cover transition-all duration-300 ease-out
    hover:scale-110 hover:shadow-lg hover:shadow-black/60 hover:shadow-xl animate-[float_6s_ease-in-out_infinite]"
        />
      </div>
    </section>
  );
}

export default Home;
