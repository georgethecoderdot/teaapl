import React, { useEffect, useState } from "react";
import LocationIcon from "./Location";
import PhoneIcon from "./PhoneIcon";
import HoursIcon from "./HoursIcon";
import Logo from "./logo";
import SearchIcon from "./search";
import FullScreenSlider from "./slider";
import AOS from "aos";
import "aos/dist/aos.css";
import red from "./images/redMark.jpg";
import closed from "./images/closed.jpg";
import AboutMe from "./aboutMe";
import Timeline from "./Timeline";
import Footer from "./Footer";
import UsefulLinks from "./UsefulLinkCard";
import ContactForm from "./ContactForm";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [showSubMenuTameio, setShowSubMenuTameio] = useState(false);
  const [showSubMenuSymmetoxi, setShowSubMenuSymmetoxi] = useState(false);
  const [showSubMenuOikonomika, setShowSubMenuOikonomika] = useState(false);
  const [showSubMenuEnimerosi, setShowSubMenuEnimerosi] = useState(false);

  return (
    <>
      <div className="bg-custom-blue min-h-screen overflow-x-hidden ">
        <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
          <div className="py-3 flex justify-between items-center">
            <div className="flex justify-start">
              <Logo />
            </div>
            <div className="flex justify-end">
              <div className="hidden md:flex items-center ml-4">
                <div className="hidden md:flex items-center ml-4">
                  <a
                    href="#"
                    className="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                  >
                    ΑΡΧΙΚΗ
                  </a>
                  {/* Start of Submenu */}
                  <div
                    onMouseEnter={() => setShowSubMenuTameio(true)}
                    onMouseLeave={() => setShowSubMenuTameio(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΤΟ ΤΑΜΕΙΟ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuTameio ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuTameio && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        {/* Submenu items */}
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΙΣΤΟΡΙΚΟ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΣΚΟΠΟΣ-ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΔΙΟΙΚΗΣΗ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΚΑΤΑΣΤΑΤΙΚΟ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΣΩΤΕΡΙΚΟΣ ΚΑΝΟΝΙΣΜΟΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΝΗΜΕΡΩΤΙΚΑ ΦΥΛΛΑΔΙΑ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΝΟΜΟΘΕΣΙΑ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ
                        </a>
                      </div>
                    )}
                  </div>

                  <div
                    onMouseEnter={() => setShowSubMenuSymmetoxi(true)}
                    onMouseLeave={() => setShowSubMenuSymmetoxi(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΣΥΜΜΕΤΟΧΗ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuSymmetoxi ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuSymmetoxi && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        {/* Submenu items */}
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΠΛΕΟΝΕΚΤΗΜΑΤΑ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΓΓΡΑΦΗ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΙΣΦΟΡΕΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΠΑΡΟΧΕΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΔΙΑΓΡΑΦΗ
                        </a>
                      </div>
                    )}
                  </div>
                  <div
                    onMouseEnter={() => setShowSubMenuOikonomika(true)}
                    onMouseLeave={() => setShowSubMenuOikonomika(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΟΙΚΟΝΟΜΙΚΑ ΣΤΟΙΧΕΙΑ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuOikonomika ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuOikonomika && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΠΕΝΔΥΣΕΙΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΜΟΙΒΑΙΟ ΚΕΦΑΛΑΙΟ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΚΑΝΟΝΙΣΜΟΣ ΕΠΕΝΔΥΣΕΩΝ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΙΣΟΛΟΓΙΣΜΟΙ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΝΑΛΟΓΙΣΤΙΚΕΣ ΜΕΛΕΤΕΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΠΡΟΥΠΟΛΟΓΙΣΜΟΙ
                        </a>
                      </div>
                    )}
                  </div>
                  <div
                    onMouseEnter={() => setShowSubMenuEnimerosi(true)}
                    onMouseLeave={() => setShowSubMenuEnimerosi(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΕΝΗΜΕΡΩΣΗ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuEnimerosi ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuEnimerosi && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΝΑΚΟΙΝΩΣΕΙΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΓΕΝΙΚΕΣ ΣΥΝΕΛΕΥΣΕΙΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΤΟ ΕΡΓΟ ΤΟΥ ΤΑΜΕΙΟΥ
                        </a>
                      </div>
                    )}
                  </div>
                  <a
                    href="#"
                    className="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                  >
                    ΕΠΙΚΟΙΝΩΝΙΑ
                  </a>
                </div>
              </div>
              <div className="flex items-center ml-4">
                <LocationIcon />
                <PhoneIcon />
                <HoursIcon />
                <SearchIcon />
              </div>
            </div>
          </div>
        </nav>
        <FullScreenSlider />

        <div
          className="py-16 px-8 flex flex-col items-center w-full"
          data-aos="fade-left"
        >
          <h1 className="text-center text-4xl font-bold w-full pb-8 text-custom-new-blue">
            Latest Articles
          </h1>
          <div className="flex justify-center space-x-8 w-full">
            <div className="w-5/12 bg-blue-800 p-9 text-blue-200">
              <a href="#!">
                <img
                  className="rounded-t-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={closed}
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-custom-new-blue">
                  ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΩΝ ΤΕΑΑΠΛ ΓΙΑ ΤΟ ΜΗΝΑ ΑΥΓΟΥΣΤΟ
                  2023
                </h5>
                <p className="text-sm">
                  Σας γνωρίζουμε ότι το γραφείο του Ταμείου μας θα παραμείνει
                  κλειστό...
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 py-2.5 mt-4 text-xs font-medium uppercase leading-normal text-white hover:text-custom-new-blue transition-colors duration-300"
                >
                  Συνεχίστε την ανάγνωση
                </button>
              </div>
            </div>
            <div className="w-5/12 bg-blue-800 p-9 text-blue-200">
              <a href="#!">
                <img
                  className="rounded-t-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={red}
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-custom-new-blue">
                  ΕΚΤΑΚΤΗ ΑΝΑΚΟΙΝΩΣΗ
                </h5>
                <p className="text-sm">
                  Λόγω αναβάθμισης του συστήματος σας γνωρίζουμε ότι...
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 py-2.5 mt-4 text-xs font-medium uppercase leading-normal text-white hover:text-custom-new-blue transition-colors duration-300"
                >
                  Συνεχίστε την ανάγνωση
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 ml-32 w-full">
          <a
            href="#"
            className="inline-block text-white border-2 border-blue-700 text-center px-10 py-3 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-sm hover:bg-blue-700"
          >
            Ανακοινώσεις
          </a>
        </div>

        <div
          className="py-16 px-8 flex flex-col items-start w-full ml-32"
          data-aos="fade-right"
        >
          <div className="mt-16">
            <AboutMe />
          </div>
          <div className="mt-8" data-aos="fade-left">
            <Timeline />
          </div>
          <div className="mt-16 -ml-16 w-full" data-aos="fade-down">
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Navbar;
