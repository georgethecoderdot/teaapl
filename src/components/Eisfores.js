import React, { useEffect, useState } from "react";
import axios from "axios";

const headers = { "Content-Type": "application/json" };

const Eisfores = () => {
  const [error, setError] = useState(null);
  const [eisfores, setEisfores] = useState([]);
  const cards = eisfores.find((item) => item.id === 52)?.attributes;
  const [view, setView] = useState("table");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const toggleView = () => {
    setView((prevView) => (prevView === "table" ? "cards" : "table"));
  };

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
        <main className="table">
          <section className="table_header mt-[-50px]">
            <h1 className="text-2xl font-bold text-custom-new-blue p-4 m-0">
              ΕΝΔΕΙΚΤΙΚΟΣ ΠΙΝΑΚΑΣ ΚΛΑΣΕΩΣ ΕΙΣΦΟΡΩΝ
            </h1>
            {windowWidth > 768 && (
              <div className="text-right p-4">
                <button
                  onClick={toggleView}
                  className="ml-60 flex items-center"
                >
                  {view === "table" ? (
                    <i className="fas fa-th-large text-blue-500"></i>
                  ) : (
                    <i className="fas fa-list text-green-500"></i>
                  )}
                </button>
              </div>
            )}
          </section>
          <section className="table_body">
            {view === "table" && windowWidth > 768 ? (
              <div>
                <table className="w-full border-collapse">
                  <thead className="sticky top-16 z-10 bg-custom-new-blue text-white">
                    <tr>
                      <th className="p-5">Κλάση</th>
                      <th className="p-5">Ποσό Εισφοράς</th>
                      <th className="p-5">Κλάδος</th>
                      <th className="p-5">Ποσό</th>
                      <th className="p-5">Ποσοστό Κράτησης Ιδ. Κεφαλ.</th>
                      <th className="p-5">Ίδια Κεφάλαια</th>
                      <th className="p-5">Κλάδος Αλληλεγγύης</th>
                      <th className="p-5">Ατομική Μερίδα Κλ. Εφάπαξ</th>
                    </tr>
                  </thead>
                  <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4">
                    {eisfores.map((item, index) => (
                      <tr key={index}>
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
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:max-w-5xl xl:mx-auto gap-6 p-4">
                {eisfores.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200"
                  >
                    {/* Card details */}
                    <h3 className="text-xl font-bold mb-2 text-custom-new-blue">
                      {item.attributes.KLASH}
                    </h3>
                    <p className="mb-2">
                      <span className="font-bold">Ποσό Εισφοράς:</span>{" "}
                      {item.attributes.PosoEisforas}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">Κλάδος:</span>{" "}
                      {item.attributes.KLADOS}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">Ποσό:</span>{" "}
                      {item.attributes.POSO}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">
                        Ποσοστό Κράτησης Ιδ. Κεφαλ.:
                      </span>{" "}
                      {item.attributes.PosostoKrathshsIdKefal}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">Ίδια Κεφάλαια:</span>{" "}
                      {item.attributes.IdiaKefalaia}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">Κλάδος Αλληλεγγύης:</span>{" "}
                      {item.attributes.KladosAllyleghs}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">
                        Ατομική Μερίδα Κλ. Εφάπαξ:
                      </span>{" "}
                      {item.attributes.AtomikhMeridaKlEfapaks}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </section>
    </div>
  );
};

export default Eisfores;
