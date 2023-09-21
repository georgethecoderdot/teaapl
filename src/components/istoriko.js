import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "aos/dist/aos.css";

const Tameio = () => {
  const [textData, setTextData] = useState(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/istoriko");
        console.log("Full Response:", response);

        setTextData(response.data.data.attributes.istoriko);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 md:pt-0">
      {" "}
      {/* Padding applied only for mobile screens */}
      <article>
        <section className="bg-white-100 py-6 md:py-32 flex items-center">
          <div className="max-w-xs md:max-w-3xl mx-auto text-center">
            <h1
              className="text-xl md:text-2xl font-bold text-custom-new-blue mb-4 md:mb-6 -mt-4 md:-mt-8"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              ΙΣΤΟΡΙΚΟ
            </h1>
            <div
              className="text-base md:text-lg leading-7 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              {textData ? (
                <ReactMarkdown>{textData}</ReactMarkdown>
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Tameio;
