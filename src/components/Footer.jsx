function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 md:px-20 ">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left - Name */}
        <h2 className="text-xl font-semibold tracking-wide">
          Mulkalapally Suraj Poul
          
        </h2>

        {/* Middle - Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-5 text-xl">
             
            
          <a href="https://github.com/mspoul" target="_blank" className="hover:text-gray-300 transition">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/suraj-poul-mulkalapally-038021326/" target="_blank" className="hover:text-gray-300 transition">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:mspoul8044@gmail.com" className="hover:text-gray-300 transition">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>

      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Suraj. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
