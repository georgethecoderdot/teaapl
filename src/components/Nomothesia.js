import React, { useEffect, useState } from "react";
import axios from "axios";
import PDF from "../images/icon.png";

const Nomothesia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the server
    axios
      .get("http://localhost:1337/api/nomothesias")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <section className="mb-10 justify-center items-center min-h-screen bg-white-100 px-4 lg:px-0">
        <table className="lg:w-1/2 w-full max-w-2xl mx-auto bg-white border-collapse border border-gray-300 mt-28">
          <thead className="sticky top-16 z-10  text-xl font-bold text-custom-new-blue p-4  leading-10  border-b-2 border-custom-new-blue pb-2 bg-custom-new-blue text-white">
            <tr className="border-b">
              <th className="text-center py-2 pl-2" colSpan="2">
                ΝΟΜΟΘΕΣΙΑ
              </th>
            </tr>
          </thead>
          <tbody className="w-full lg:w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4">
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-custom-new-blue hover:text-white"
              >
                <td className="text-left">
                  <span className="underline">{item.attributes.Nomos}</span>{" "}
                  {item.attributes.Description}
                </td>
                <td>
                  <a
                    href={item.attributes.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={PDF} className="lg:w-24 lg:h-8 w-24 h-8"></img>
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

export default Nomothesia;
