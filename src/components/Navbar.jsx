import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 
                      bg-transparent backdrop-blur-sm px-6 py-3 
                      flex items-center justify-between">

        {/* LEFT – LOGO */}
        <h1 className="text-2xl text-black font-semibold tracking-wide">
          Mulkalapally Suraj Poul
        </h1>

        {/* MOBILE MENU BUTTON */}
        <div
          className="text-3xl text-black md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>

        {/* CENTER – LINKS */}
        <ul
          className={`absolute md:static left-0 top-full md:flex 
                      md:flex-row flex-col md:items-center 
                      bg-white/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-0
                      md:w-auto w-full md:rounded-none rounded-lg shadow-md md:shadow-none
                      text-black gap-6 md:gap-10 p-4 md:p-0 transition-all duration-300
                      ${open ? "block" : "hidden"} md:block`}
        >
          {["home", "projects", "about", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="text-lg font-medium text-black relative group"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black 
                                 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT – RESUME BUTTONS */}
        <div className="hidden md:flex items-center gap-4">

          {/* PREVIEW BUTTON */}
          <button
            onClick={() => setShowPreview(true)}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg 
                       hover:bg-gray-300 transition duration-300"
          >
            See Resume
          </button>

          {/* DOWNLOAD BUTTON */}
          <a
            href="/SurajPoul_Mulkalapally.pdf"
            download="Suraj_Resume.pdf"
            className="px-4 py-2 bg-black text-white rounded-lg
                       hover:bg-gray-900 transition-all duration-300 hover:tracking-wider"
          >
            Download Resume
          </a>
        </div>

      </nav>

      {/* RESUME PREVIEW MODAL */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]">

          <div className="bg-white/10 border border-white/20 rounded-xl p-4 
                          w-[90%] h-[90%] relative">

            {/* Close Button */}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/SurajPoul_Mulkalapally.pdf"
              className="w-full h-full rounded-lg"
              title="Resume Preview"
            ></iframe>
          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;
