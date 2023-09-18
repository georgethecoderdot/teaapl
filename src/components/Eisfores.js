import React, { useEffect, useState } from "react";
import axios from "axios";

const headers = { "Content-Type": "application/json" };

const Eisfores = () => {
  const [error, setError] = useState(null);
  const [eisfores, setEisfores] = useState([]);
  const cards = eisfores.find((item) => item.id === 52)?.attributes;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/klasis", {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response);

        const { data } = response.data;
        setEisfores(data);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!eisfores.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24">
          ΕΙΣΦΟΡΕΣ
        </h1>
        <body className=" p-4 mt-20 text-1xl">
          {cards ? (
            <React.Fragment>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
                  <p className="text-left text-gray-700">{cards?.firstCard}</p>
                </div>
                <div className="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
                  <p className="text-left text-gray-700">{cards?.secondCard}</p>
                </div>
                <div className="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
                  <p className="text-left text-gray-700">{cards?.thirdCard}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <div className="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
                  <p className="text-left text-gray-700">
                    {cards.fourthCard}
                    <span className="text-blue-500 hover:text-blue-700 underline">
                      <a
                        href="https://www.teaapl.gr/images/pdf/aitisi_metavolis_posou_miniaias_eisforas.pdf"
                        target="_blank"
                      >
                        <i className="fa-solid fa-circle-down"></i>Κατεβάστε εδώ
                        το σχετικό έντυπο.
                      </a>
                    </span>
                  </p>
                </div>
                <div className="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
                  <p className="text-left text-gray-700">{cards?.fifthCard}</p>
                </div>
                <div className="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
                  <p className="text-left text-gray-700">{cards?.sixthCard}</p>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div>No card data available.</div>
          )}
        </body>
        <main className="table mr-40">
          <section className="text-center bg-gray-300 p-5">
            <h1 className="text-2xl text-gray-700 border-4 border-black p-4 m-0">
              ΕΝΔΕΙΚΤΙΚΟΣ ΠΙΝΑΚΑΣ ΚΛΑΣΕΩΣ ΕΙΣΦΟΡΩΝ
            </h1>
            <hr class="my-6 border-t-2 border-gray-700"></hr>
            <h1>Ανάλυση Εισφοράς σε Αποθ/κά και Ι.Κ.</h1>
            <hr class="my-6 border-t-2 border-gray-700"></hr>
          </section>
          <section className="table_body">
            <table className="w-full border-collapse ">
              <thead className="sticky top-16 z-10 bg-gray-200">
                <tr>
                  <th class=" p-5">Κλάση </th>
                  <th class=" p-5 ">Ποσό Εισφοράς</th>
                  <th class=" p-5">Κλάδος </th>
                  <th class=" p-5">Ποσό</th>
                  <th class=" p-5">Ποσοστό Κράτησης Ιδ. Κεφαλ.</th>
                  <th class=" p-5">Ίδια Κεφάλαια </th>
                  <th class=" p-5">Κλάδος Αλληλεγγύης</th>
                  <th class=" p-5">Ατομική Μερίδα Κλ. Εφάπαξ</th>
                </tr>
              </thead>
              <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4 mb-10">
                {eisfores.map((item) => (
                  <tr>
                    <td>{item.attributes.KLASH}</td>
                    <td>{item.attributes.PosoEisforas}</td>
                    <td>{item.attributes.KLADOS}</td>
                    <td>{item.attributes.POSO}</td>
                    <td>{item.attributes.PosostoKrathshsIdKefal}</td>
                    <td>{item.attributes.IdiaKefalaia}</td>
                    <td>{item.attributes.KladosAllyleghs}</td>
                    <td>{item.attributes.AtomikhMeridaKlEfapaks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Eisfores;
