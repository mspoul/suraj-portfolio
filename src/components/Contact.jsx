function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full 
                 bg-[url('/marblebg.jpg')] bg-cover bg-center
                 text-black px-6 py-16 flex flex-col items-center"
    >
      {/* ================= HEADER LINKS LIKE MAX-MILKIN ================= */}
      

      {/* ================= CONTACT FORM ================= */}
      <div className="w-full max-w-2xl mt-10">
        <form className="space-y-12">

          {/* NAME */}
          <div>
            <label className="uppercase text-gray-700 font-bold text-sm tracking-wide">
              Your Name*
            </label>
            <input
              type="text"
              className="block w-full bg-transparent border-b border-black mt-1
                         focus:outline-none text-black py-2 tracking-wide"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="uppercase text-gray-700 font-bold text-sm tracking-wide">
              Your Email*
            </label>
            <input
              type="email"
              className="block w-full bg-transparent border-b border-black mt-1
                         focus:outline-none text-black py-2 tracking-wide"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="uppercase text-gray-700 font-bold text-sm tracking-wide">
              Your Message*
            </label>
            <textarea
              rows="4"
              className="block w-full bg-transparent border-b border-black mt-1
                         focus:outline-none text-black py-2 tracking-wide"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-10 py-3 bg-black text-white font-semibold
                         rounded-lg hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </div>

        </form>
        
      </div>
      <nav className="mt-20 flex gap-10 text-sm md:text-base font-semibold mb-10 tracking-wide">
        <a href="#about" className="hover:underline">ABOUT</a>
        <a href="#projects" className="hover:underline">PROJECTS</a>
        <a href="#skills" className="hover:underline">SKILLS</a>
        <a href="#contact" className="hover:underline">CONTACT</a>
      </nav>

      {/* ================= BIG TITLE ================= */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest mb-6">
        SURAJ POUL
      </h1>

      {/* ================= SOCIAL LINKS ================= */}
      <div className="flex gap-10 text-sm md:text-base mb-4">
        <a href="https://www.linkedin.com/in/suraj-poul-mulkalapally-038021326/" target="_blank" className="hover:underline">
          Linkedin
        </a>
        <a href="https://github.com/mspoul" target="_blank" className="hover:underline">
          Github
        </a>
        <a href="https://www.leetcode.com/u/surajpoul01/" target="_blank" className="hover:underline">
          LeetCode
        </a>
      </div>

      {/* ================= EMAIL ================= */}
       
      <a href="mailto:mspoul8044@gmail.com" className="hover:text-white-300 transition">
             <p className="font-bold tracking-wide text-lg mb-16 hover:tracking-widest  transition-all duration-700 ease-in-out">
        EMAIL: SURAJPOULMULKALAPALLY@GMAIL.COM
      </p>
          </a>
    </section>
  );
}

export default Contact;
