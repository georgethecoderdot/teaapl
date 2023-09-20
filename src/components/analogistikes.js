import React, { useEffect, useState } from "react";
import axios from "axios";
import PDF from "../images/icon.png";

const Analogistikes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Strapi
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/analogistikes-meletes"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="mt-10 mb-10 flex justify-center items-center min-h-screen bg-white-100">
        <table className="w-1/2 max-w-2xl mx-auto bg-white border-collapse border border-gray-300 mt-20">
          <thead className="sticky top-16 z-10 text-xl font-bold p-4 leading-10 border-b-2 border-customBlue pb-2 bg-custom-new-blue text-white">
            <tr className="border-b">
              <th className="text-center py-2 pl-2" colSpan="2">
                ΑΝΑΛΟΓΙΣΤΙΚΕΣ ΜΕΛΕΤΕΣ
              </th>
            </tr>
          </thead>
          <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4">
            {data.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-custom-new-blue hover:text-white"
              >
                <td className="text-left underline">{item.attributes.Title}</td>
                <td>
                  <a
                    href={item.attributes.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={PDF}
                      alt="PDF"
                      className="w-24 h-8 sm:w-auto sm:h-auto"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Analogistikes;
