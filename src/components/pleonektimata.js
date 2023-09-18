import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Pleonekthmata = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/pleonektimats")
      .then((response) => {
        if (response.data.data && response.data.data.length > 1) {
          const combinedData = {
            ...response.data.data[0].attributes,
            simmetoxi: response.data.data[1].attributes.simmetoxi,
          };
          setData(combinedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 main-container mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5">
        <h1 className="text-center text-3xl font-semibold  text-custom-new-blue mb-6">
          ΠΛΕΟΝΕΚΤΗΜΑΤΑ
        </h1>
        <p className="text-lg text-gray-700 mb-5 pl-6 border-l-4 border-blue-500">
          {data ? data.pleonektimata : "Loading..."}
        </p>

        <div className="grid gap-10 md:grid-cols-2 mb-10 ">
          <BenefitCard title="Μέσω του κλάδου αλληλεγγύης">
            {data &&
              data.MesoKladou.split("\n\n").map((benefit, index) => (
                <Benefit key={index}>{benefit}</Benefit>
              ))}
          </BenefitCard>

          <BenefitCard title="Μέσω του κλάδου εφ’ άπαξ">
            {data &&
              data.MesoEfapax.split("\n\n").map((benefit, index) => (
                <Benefit key={index}>{benefit}</Benefit>
              ))}
          </BenefitCard>
        </div>

        <p
          className="text-lg text-center text-black  px-6 py-4 rounded-lg mb-5 transition-transform transform hover:scale-105"
          data-aos="zoom-in"
        >
          {data ? data.simmetoxi : "Loading..."}
        </p>
      </div>
    </div>
  );
};

const BenefitCard = ({ title, children }) => (
  <div className="bg-gradient-to-t from-gray-100 to-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-medium text-custom-new-blue mb-6">{title}</h2>
    <ul className="space-y-4">{children}</ul>
  </div>
);

const Benefit = ({ children }) => (
  <li className="flex items-start space-x-4">
    <span className="material-icons text-blue-500">check_circle</span>
    <p className="flex-1">{children}</p>
  </li>
);

export default Pleonekthmata;
