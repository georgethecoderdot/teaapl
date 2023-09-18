import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "aos/dist/aos.css";

const Skopos = () => {
  const [skoposData, setSkoposData] = useState(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/skopos-kladoi-asfalisis"
        );
        console.log("Full Response:", response);

        setSkoposData(response.data.data.attributes.SkoposKladoiAsfalishs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-10 md:pt-0">
      <div className="flex-grow">
        <article className="flex justify-center py-5">
          <section className="bg-white py-4 md:py-16 w-full">
            <div className="px-4 md:px-0 max-w-4xl mx-auto text-center">
              <h1
                className="text-xl md:text-2xl font-bold text-custom-new-blue mb-4 md:mb-8 mt-2 md:mt-4"
                data-aos="fade-down"
                data-aos-duration="2500"
                data-aos-once="true"
              >
                ΣΚΟΠΟΣ - ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ
              </h1>
              <div
                className="text-base md:text-lg leading-6 md:leading-7 text-gray-700"
                data-aos="fade-down"
                data-aos-duration="2500"
                data-aos-once="true"
              >
                {skoposData ? (
                  <ReactMarkdown>{skoposData}</ReactMarkdown>
                ) : (
                  "Loading..."
                )}
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Skopos;
