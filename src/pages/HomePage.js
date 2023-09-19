import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import red from "../images/redMark.jpg";
import closed from "../images/closed.jpg";
import AboutMe from "../components/aboutMe";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";
import log from "../images/log_in.png";
import FundFigures from "../components/Impo";
import FullScreenSlider from "../components/slider";
import doc from "../images/doc.png";
import { Link } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      // offset: 0,
      // anchorPlacement: "top-bottom",
    });
  }, []);

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollButton && window.pageYOffset > 400) {
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 400) {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollButton]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      <FullScreenSlider />
      <div
        className="container mx-auto px-4 sm:px-8 max-w-7xl"
        style={{ backgroundColor: "#FFFFFF" }}
        data-aos="fade-left"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-bold w-full pb-4 text-custom-new-blue ">
          Τελευταίες Ανακοινώσεις
        </h1>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 w-full">
          <div
            className="w-full rounded-t-lg rounded-b-lg sm:w-5/12 p-4 sm:p-9"
            style={{ backgroundColor: "#035280", color: "#4F728E" }}
          >
            <a href="#!">
              <img
                className="rounded-t-lg rounded-b-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out hover:filter hover:brightness-90"
                src={closed}
                alt=""
              />
            </a>
            <div className="p-6">
              <h5
                className="mb-2 text-xl font-medium leading-tight"
                style={{ color: "#ffffff" }}
              >
                ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΩΝ ΤΕΑΑΠΛ ΓΙΑ ΤΟ ΜΗΝΑ ΑΥΓΟΥΣΤΟ 2023
              </h5>
              <p className="text-sm" style={{ color: "#ffffff" }}>
                Σας γνωρίζουμε ότι το γραφείο του Ταμείου μας θα παραμείνει
                κλειστό...
              </p>
              <button
                type="button"
                className="inline-block rounded px-6 py-2.5 mt-4 text-xs font-medium  leading-normal lg:ml-20 ml-12 hover:bg-custom-new-blue"
                style={{ color: "#ffffff" }}
              >
                Διαβάστε περισσότερα
              </button>
            </div>
          </div>
          <div
            className="w-full rounded-t-lg rounded-b-lg sm:w-5/12 p-4 sm:p-9"
            style={{ backgroundColor: "#035280", color: "#4F728E" }}
          >
            <a href="#!">
              <img
                className="rounded-t-lg rounded-b-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out hover:filter hover:brightness-90"
                src={red}
                alt=""
              />
            </a>
            <div className="p-6">
              <h5
                className="mb-2 text-xl font-medium leading-tight"
                style={{ color: "#ffffff" }}
              >
                ΕΚΤΑΚΤΗ ΑΝΑΚΟΙΝΩΣΗ
              </h5>
              <p className="text-sm" style={{ color: "#ffffff" }}>
                {" "}
                Λόγω αναβάθμισης του συστήματος σας γνωρίζουμε ότι...
              </p>
              <button
                type="button"
                className="inline-block rounded px-6 py-2.5 mt-4 text-xs font-medium  leading-normal lg:ml-20 ml-12 hover:bg-custom-new-blue"
                style={{ color: "#ffffff" }}
              >
                Διαβάστε περισσότερα
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center lg:text-left lg:ml-20 w-full">
          <a
            href="#"
            className="announcement-btn inline-block text-center px-10 py-3 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-sm border-2 border-custom-new-blue  hover:bg-custom-new-blue hover:text-white"
          >
            Ανακοινώσεις
          </a>
        </div>

        <div
          className="py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-8 w-full lg:ml-32 flex flex-col items-start"
          data-aos="fade-right"
        >
          <div className="mt-8 lg:mt-16 ml-[-16px] lg:ml-[-96px]">
            <AboutMe />
          </div>
          <div className="mt-4 lg:mt-8 lg:ml-[-16px]">
            <Timeline />
          </div>
          <div className="lg:ml-[-72px]" data-aos="flip-up">
            <FundFigures />
          </div>
          <div className="mt-16 sm:mt-16 md:-ml-16 w-full" data-aos="fade-down">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 left-10 z-50 group hover:bg-blue-600 rounded-full w-12 h-12">
        {/* Base icon link */}
        <Link
          to="/teaapl/Entipa"
          className="absolute bottom-0 left-0 bg-blue-500 w-12 h-12 rounded-full focus:outline-none p-0 overflow-hidden z-10"
        >
          <img src={doc} alt="Connect" className="w-full h-full object-cover" />
        </Link>

        {/* Hover icon link */}
        <a
          href={process.env.PUBLIC_URL + "/LoginForm.html"}
          className="absolute bottom-0 left-0 bg-blue-500 w-12 h-12 rounded-full focus:outline-none p-0 overflow-hidden transform group-hover:translate-y-8 transition-transform duration-300 z-20"
        >
          <img
            src={log}
            alt="Hover Icon"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollTop}
          className="scroll-button fixed bottom-10 right-10 z-50 bg-blue-500 text-white w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600 hidden sm:block"
          title="Back to top"
        >
          <i class="fa fa-chevron-up cursor-pointer"></i>
        </button>
      )}
    </div>
  );
}

export default HomePage;
