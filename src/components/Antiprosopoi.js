import React, { useEffect, useState } from "react";
import axios from "axios";

const headers = { "Content-Type": "application/json" };

const Antiprosopoi = () => {
  const [error, setError] = useState(null);
  const [antiprosopoi, setAntiprosopoi] = useState([]);
  const [isFired, setIsFired] = useState(false);

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

  return (
    <main className="table">
      <section className="table_header mt-[-50px]">
        <h1 className="text-2xl font-bold text-custom-new-blue  p-4 m-0 ">
          ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ
        </h1>
      </section>
      <section className="table_body">
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
