import React, { useEffect, useState } from "react";
import Axios from "axios";
import PDF from "../images/icon.png";

const Katastatiko = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:1337/api/katastatikos"
        );
        console.log("Full Response:", response);
        setData(response.data.data);
        setActiveIndex(response.data.data.map((_, index) => index)); // Set all indices to activeIndex array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pb-10 md:pb-16">
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center px-4 md:px-0 pt-10 md:pt-16">
        <h1 className="text-xl md:text-2xl text-center font-bold text-custom-new-blue mb-10 uppercase mt-10 md:mt-0">
          ΚΑΤΑΣΤΑΤΙΚΟ
        </h1>
        {data.map((item, index) => (
          <div
            key={item.id}
            className="rounded-sm w-full md:w-1/2 bg-white border border-blue-400 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform cursor-pointer"
            onClick={() => {
              setActiveIndex((prevIndices) =>
                prevIndices.includes(index)
                  ? prevIndices.filter((i) => i !== index)
                  : [...prevIndices, index]
              );
            }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <img src={PDF} className="w-8 h-8"></img>
                <p className="text-blue-600 font-semibold">
                  {item.attributes.Label}
                </p>
              </div>
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-2 transform transition-transform duration-300 ${
                    activeIndex.includes(index) ? "rotate-180" : ""
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
              </span>
            </div>
            {activeIndex.includes(index) && (
              <div className="mt-2 text-gray-700">
                {item.attributes.Summary && (
                  <p className="mb-2">{item.attributes.Summary}</p>
                )}
                <div className="flex">
                  <a
                    href={item.attributes.Url}
                    className="announcement-btn inline-block text-center px-10 py-3 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-sm border-2 border-custom-new-blue mx-auto  hover:bg-custom-new-blue font-bold hover:text-white"
                  >
                    Περισσότερα
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Katastatiko;
