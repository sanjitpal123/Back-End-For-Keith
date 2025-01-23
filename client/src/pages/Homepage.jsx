import React from "react";
import logo from "../assets/logo.jpeg"
import teamGif from "../assets/team-management-gif.gif"

const Homepage = () => {
  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <header>
          <div className="w-full h-[100px] fixed z-[20] flex items-center justify-between px-4 md:px-8 bg-[#02245B]">
            {/* Logo Section */}
            <div className="bg-white w-[90px] h-[50px] sm:w-[160px] sm:h-auto">
              <img src={logo} className="w-full h-full" alt="Website Logo" />
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex w-[80%] justify-end">
              <ul className="text-white flex gap-6 items-center text-sm font-medium">
                <li>
                  <a
                    href="index.html"
                    className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="about.html"
                    className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="products.html"
                    className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="infrastructure.html"
                    className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                  >
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    href="quality.html"
                    className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                  >
                    Quality
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden flex right-0 items-center">
              <div
                className="container"
                onClick={() => toggleMenu()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 200 200"
                >
                  <g strokeWidth="6.5" strokeLinecap="round">
                    <path
                      d="M72 82.286h28.75"
                      fill="#009100"
                      fillRule="evenodd"
                      stroke="#fff"
                    />
                    <path
                      d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                      fill="none"
                      stroke="#fff"
                    />
                    <path
                      d="M72 125.143h28.75"
                      fill="#009100"
                      fillRule="evenodd"
                      stroke="#fff"
                    />
                    <path
                      d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                      fill="none"
                      stroke="#fff"
                    />
                    <path
                      d="M100.75 82.286h28.75"
                      fill="#009100"
                      fillRule="evenodd"
                      stroke="#fff"
                    />
                    <path
                      d="M100.75 125.143h28.75"
                      fill="#009100"
                      fillRule="evenodd"
                      stroke="#fff"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="hidden md:hidden z-[50] top-[100px] w-full min-h-[100vh] bg-[#02245B] fade-in fixed left-0"
          >
            <ul className="text-white flex flex-col items-center p-4 gap-4 text-xl sm:text-3xl font-medium">
              <li>
                <a
                  href="index.html"
                  className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="products.html"
                  className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="infrastructure.html"
                  className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="quality.html"
                  className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                >
                  Quality
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="hover:text-[#FD5D14] cursor-pointer transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </header>
      </nav>

      {/* Video Section */}
      <div className="video-container z-[-10] min-h-[90%]">
        <video autoPlay muted loop>
          <source src="https://videos.pexels.com/video-files/30321342/12998011_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
        <div className="content">
          <h1 className="text-xl sm:text-3xl md:text-6xl font-bold">
            Welcome to Our Website
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mt-4">
            Experience excellence and innovation
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-[50vh] w-[100vw] py-6 px-2 flex items-center justify-center bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around items-center mt-10 px-2 md:px-8 md:gap-8">
          {/* Text Section */}
          <div className="max-w-[700px] md:text-left">
            <h1 className="text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">
              A LEGACY OF CASTING PROGRESS
            </h1>
            <ul className="space-y-2 text-left text-gray-700 text-sm md:text-md font-medium leading-loose">
              <li>
                &#9635; KEITH CERAMIC (KTC): LEADING & WELL-ESTABLISHED
                MANUFACTURER & EXPORTER OF GREY IRON CASTINGS SINCE 1992
              </li>
              <li>
                &#9635; STRATEGIC LOCATION FOR EFFICIENT OPERATIONS
              </li>
              <li>
                <button className="flex bg-[#FD5D14] p-1 sm:p-2 rounded-md text-white">
                  <a
                    className="flex gap-2 items-center"
                    href="about.html"
                  >
                    <span>See more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </button>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="mt-6 max-w-[500px]">
            <img
              className="rounded-lg w-full"
              src={teamGif}
              alt="Who we are"
            />
          </div>
        </div>
      </div>
      <div class="video-container z-[-10] min-h-[90%]">
        <video autoplay muted loop>
          <source src="https://videos.pexels.com/video-files/4430493/4430493-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          LASTING IMPRESSIONS CAST IN IRON
        </video>
        <div class="video-overlay"></div>
        <div class="content">
          <h1 class="text-xl sm:text-3xl md:text-6xl font-bold">Welcome to Our Website</h1>
          <p class="text-sm sm:text-lg md:text-xl mt-4">Experience excellence and innovation</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

    
   