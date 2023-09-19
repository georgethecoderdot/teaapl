import React, { useEffect, useState } from "react";
import axios from "axios";

const headers = { "Content-Type": "application/json" };

const Antiprosopoi = () => {
  const [error, setError] = useState(null);
  const [antiprosopoi, setAntiprosopoi] = useState([]);
  const [isFired, setIsFired] = useState(false);
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
        const response = await axios.get(
          "http://localhost:1337/api/antiprosopoi-ana-nomous",
          { headers }
        );

        const { data } = response.data;
        setAntiprosopoi(data);
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

  if (!antiprosopoi) {
    return <div>Loading...</div>;
  }

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.PUBLIC_URL + "/antiprosopoi.ods";
    downloadLink.download = "antiprosopoi.ods";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const toggleView = () => {
    setView((prevView) => (prevView === "table" ? "cards" : "table"));
  };

  return (
    <main className="table">
      <section className="table_header mt-[-50px]">
        <h1 className="text-2xl font-bold text-custom-new-blue p-4 m-0">
          ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ
        </h1>
        {windowWidth > 768 && (
          <div className="text-right p-4">
            <button onClick={toggleView} className="mr-2 flex items-center">
              {view === "table" ? (
                <i className="fas fa-th-large text-blue-500 mr-2"></i>
              ) : (
                <i className="fas fa-list text-green-500 mr-2"></i>
              )}
            </button>
          </div>
        )}
      </section>
      <section className="table_body">
        {view === "table" && windowWidth > 768 ? (
          <table className="w-full border-collapse">
            <thead className="sticky top-16 z-10 bg-custom-new-blue text-white">
              <tr>
                <th class=" p-5">Α/Α</th>
                <th class=" p-5 ">ΝΟΜΟΣ</th>
                <th class=" p-5">ΑΝΤΙΠΡΟΣΩΠΟΣ</th>
                <th class=" p-5">ΤΗΛΕΦΩΝΟ</th>
                <th class=" p-5">ΕMAIL</th>
              </tr>
            </thead>
            <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4">
              {antiprosopoi.map((item) => (
                <tr>
                  <td>{item.attributes.AA}</td>
                  <td>{item.attributes.Prefecture}</td>
                  <td>{item.attributes.Representative}</td>
                  <td>
                    <a href="tel:+{item.attributes.PhoneNumber}">
                      {item.attributes.PhoneNumber}
                    </a>
                  </td>
                  <td>
                    <a href={"mailto:${item.attributes.email}"}>
                      {item.attributes.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-w-5xl xl:mx-auto gap-6 p-4">
            {antiprosopoi.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-2 text-custom-new-blue">
                  {item.attributes.Representative}
                </h3>
                <p className="mb-2">
                  <span className="font-bold">Α/Α:</span> {item.attributes.AA}
                </p>
                <p className="mb-2">
                  <span className="font-bold">ΝΟΜΟΣ:</span>{" "}
                  {item.attributes.Prefecture}
                </p>
                <p className="mb-2">
                  <span className="font-bold">ΤΗΛΕΦΩΝΟ:</span>{" "}
                  <a
                    href={`tel:+${item.attributes.PhoneNumber}`}
                    className="text-custom-new-blue"
                  >
                    {item.attributes.PhoneNumber}
                  </a>
                </p>
                <p className="mb-2">
                  <span className="font-bold">EMAIL:</span>{" "}
                  <a
                    href={`mailto:${item.attributes.email}`}
                    className="text-custom-new-blue"
                  >
                    {item.attributes.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
      <div className="my-8 text-center">
        {isFired ? (
          <div
            className="inline-block text-white font-bold py-5 px-6 rounded-full focus:outline-none focus:shadow-outline"
            style={{ width: "fit-content", backgroundColor: "#0582ca" }}
          >
            <i className="fa-solid fa-circle-check"></i>
            Completed
          </div>
        ) : (
          <button
            onClick={handleDownload}
            className="relative bg-transparent text-black font-bold py-5 px-6 rounded-full focus:outline-none focus:shadow-outline overflow-hidden "
          >
            <span className="fill-effect"></span>
            <i class="fa-solid fa-download"></i>
            <span className="z-10 relative hover:text-white">
              Download File
            </span>
          </button>
        )}
      </div>
    </main>
  );
};

export default Antiprosopoi;
