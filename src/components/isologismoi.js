import React from "react";
import PDF from "../images/icon.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Element = ({ etos, alilegii, efapax, porisma }) => {
  return (
    <tr className="border-b border-custom-new-blue text-sm sm:text-base">
      <td className="text-left border-l border-gray-500 hover:bg-custom-new-blue hover:text-white p-2 sm:p-5">
        {etos}
      </td>
      <td className="pl-4 border-l border-gray-500 hover:bg-custom-new-blue hover:text-white p-2 sm:p-5 sm:pl-20">
        <a href={alilegii} target="_blank" rel="noreferrer">
          ΚΛΑΔΟΣ ΑΛΛΗΛΕΓΓΥΗΣ
          <div className="inline-block">
            <img src={PDF} width={30} height={30} alt="PDF Icon" />
          </div>
        </a>
      </td>
      <td className="border-l border-gray-500 hover:bg-custom-new-blue hover:text-white">
        {efapax && (
          <a href={efapax} target="_blank">
            {" "}
            ΚΛΑΔΟΣ ΕΦΑΠΑΞ{" "}
            <td>
              <img src={PDF} width={30} height={30} class />
            </td>
          </a>
        )}
      </td>
      <td className="border-l border-gray-500 hover:bg-custom-new-blue hover:text-white">
        {porisma && (
          <a href={porisma} target="_blank">
            ΠΟΡΙΣΜΑ
            <td>
              <img src={PDF} width={30} height={30} class />
            </td>
          </a>
        )}
      </td>
    </tr>
  );
};

const Isologismoi = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/isologismois"
      );
      setData(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-2 sm:p-0">
      <main className="table text-sm sm:text-base">
        <h1 className="text-center text-xl underline font-bold text-custom-new-blue mt-0 mb-10 sm:text-2xl sm:mt-[-20px]">
          ΙΣΟΛΟΓΙΣΜΟΙ
        </h1>

        <section className="table_body ">
          <table className="w-full border-collapse">
            <thead className="sticky top-16 z-10 bg-custom-new-blue text-white text-sm sm:text-base">
              <tr>
                <th className="p-2 text-left border-l border-gray-500 sm:p-5">
                  ΕΤΟΣ
                </th>
                <th className="p-2 border-l border-gray-500 sm:p-5">
                  ΚΛΑΔΟΣ ΑΛΛΗΛΕΓΓΥΗΣ
                </th>
                <th class=" p-5 text-left border-l border-gray-500">
                  ΚΛΑΔΟΣ ΕΦΑΠΑΞ
                </th>
                <th class=" p-5 text-left border-l border-gray-500">ΠΟΡΙΣΜΑ</th>
              </tr>
            </thead>
            <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg  border border-gray-300 py-2 px-4">
              {data.map((elem) => {
                return (
                  <Element
                    etos={elem.attributes.ETOS}
                    alilegii={elem.attributes.KladosAllhlegyhs}
                    efapax={elem.attributes.KladosEfapax}
                    porisma={elem.attributes.Porisma}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Isologismoi;
