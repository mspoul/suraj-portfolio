import Techskills from "./Techskills";
import SoftSkills from "./SoftSkills";
function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full 
                 bg-[url('/blackmarble.jpg')] text-[#DCE1D9]
                 flex flex-col items-center 
                 px-6 md:px-20 py-20"
    >

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-16 tracking-widest text-[#DCE1D9]/90">
        ABOUT ME
      </h1>

      {/* ================= HERO SECTION ================= */}
      <div
        className="flex flex-col items-center text-center mb-20
                   opacity-0 translate-y-10 
                   animate-[fadeIn_2s_ease-out_forwards]"
      >
        {/* Premium Rounded Image Frame */}
        <div
          className="
            group
            w-40 h-40 md:w-[260px] md:h-[360px]
            rounded-3xl overflow-hidden
            border border-[#DCE1D9]/20
            bg-white/5 backdrop-blur-xl
            shadow-[0_15px_40px_rgba(0,0,0,0.4)]
            animate-[float_6s_ease-in-out_infinite]
            transition-all duration-500
            hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
            hover:scale-[1.03]
            flex justify-center items-center
          "
        >
          <img
            src="/poul.png"
            alt="Suraj Poul"
            className="
              w-full h-full object-cover
              transition-all duration-700 
              group-hover:scale-110
            "
          />
        </div>

        {/* NAME */}
        <h1 className="text-4xl md:text-6xl font-bold mt-10 tracking-tight text-[#DCE1D9]">
          Suraj Poul Mulkalapally
        </h1>

        {/* TITLE */}
        <h2 className="text-lg md:text-2xl text-[#DCE1D9]/70 font-semibold mt-3">
          Full Stack Developer • AI Enthusiast
        </h2>

        {/* SHORT INTRO */}
        <p className="text-[#DCE1D9]/60 text-lg max-w-2xl mt-4 leading-7 font-light">
          Building modern web applications, interactive UIs, and AI-powered tools  
          that solve real-world problems.
        </p>
      </div>

      {/* ================= ABOUT ME CARD ================= */}
      <div
        className="w-full max-w-4xl 
                   bg-white/5 backdrop-blur-xl
                   border border-[#DCE1D9]/10 
                   shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                   rounded-3xl p-10 mb-16
                   opacity-0 translate-y-10 
                   animate-[fadeIn_2.5s_ease-out_forwards]"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#DCE1D9]">About Me</h2>

        <p className="text-[#DCE1D9]/80 leading-8 text-lg tracking-wide font-light">
          I’m a passionate Computer Science student and full-stack developer who 
          loves turning ideas into beautiful, functional digital experiences.
          <br /><br />
          I specialize in creating clean UIs, solving problems using data structures, 
          and developing AI/NLP-powered tools such as resume screeners, automation scripts, 
          and intelligent applications.
        </p>
      </div>

      {/* ================= PERSONAL DETAILS ================= */}
      <div className="w-full max-w-4xl mx-auto">

  <div className="relative w-full h-60 group [perspective:1200px]">

    {/* FRONT SIDE */}
    <div
      className="absolute inset-0 bg-white/10 backdrop-blur-xl
                 border border-white/20 rounded-3xl shadow-xl 
                 flex items-center justify-center
                 transition-transform duration-700 
                 [transform-style:preserve-3d] 
                 group-hover:[transform:rotateY(180deg)]
                 [backface-visibility:hidden]"
    >
      <h2 className="text-3xl font-bold text-white ">
        Personal Details
      </h2>
    </div>

    {/* BACK SIDE */}
    <div
      className=" absolute inset-0 bg-white/10 backdrop-blur-xl
                 border border-white/20 rounded-3xl shadow-xl p-10
                 transition-transform duration-700 
                 [transform-style:preserve-3d]
                 [transform:rotateY(180deg)]
                 group-hover:[transform:rotateY(360deg)]
                 [backface-visibility:hidden]"
    >
      <div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-white">

        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Languages Known</h3>
          <ul className="text-white/80 leading-7">
            <li>English</li>
            <li>Telugu</li>
            <li>Hindi</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Hobbies</h3>
          <ul className="text-white/80 leading-7">
             
            <li>Playing cricket</li>
            <li>Listening to music</li>
            <li>Reading Books</li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</div>

<Techskills />
<SoftSkills/>


       
      

    </section>
  );
}

export default About;
