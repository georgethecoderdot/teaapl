import { useState } from "react";
import Anesti from "../images/anesti_small.jpg";
import Vasdekis from "../images/vasdekis_small.jpg";
import Giannarakis from "../images/gianarakis_small.jpg";
import Skiadas from "../images/skiadas_small.jpg";
import Tsakalis from "../images/tsakalis_small.jpg";
import Dwrea from "../images/dwrea.jpg";
import Eustathiou from "../images/eustathiou.jpg";
import Giakoumi from "../images/giakoumi.jpg";
import Kapageridi from "../images/kapageridi.jpg";
import Karampelia from "../images/karampelia.jpg";
import Mitropoulou from "../images/mitropoulou.jpg";
import Mpomponis from "../images/mpomponis.jpg";
import Oikonomidou from "../images/oikonimidou.jpg";
import Savva from "../images/savva.jpg";
import Dimotakis from "../images/dimotakis.jpg";

const Ergo = () => {
  const handleDownload = () => {
    const fileContent = "..."; // Replace with your file content
    const blob = new Blob([fileContent], {
      type: "application/vnd.oasis.opendocument.spreadsheet",
    });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and simulate a click event
    const link = document.createElement("a");
    link.href = url;
    link.download = "epistolh.DOC"; // Set the desired file name
    link.click();

    // Clean up the URL and link
    URL.revokeObjectURL(url);
    link.remove();
  };

  return (
    <div>
      <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24 ">
        ΤΟ ΕΡΓΟ ΤΟΥ ΤΑΜΕΙΟΥ
      </h1>
      <div className="mx-auto bg-white  rounded-lg  p-4 grid lg:grid-cols-5 lg:gap-8 mb-10 mt-10 ">
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%91%CE%9D%CE%95%CE%A3%CE%A4%CE%97%20%CE%91%CE%A1%CE%93%CE%A5%CE%A1%CE%A9.jpg"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold ">
              ΑΝΕΣΤΗ ΑΡΓΥΡΩ
            </p>
            <img src={Anesti}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%92%CE%91%CE%A3%CE%94%CE%95%CE%9A%CE%97%CE%A3%20%CE%93%CE%95%CE%A9%CE%A1%CE%93%CE%99%CE%9F%CE%A3.jpg"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΒΑΣΔΕΚΗΣ ΓΕΩΡΓΙΟΣ
            </p>
            <img src={Vasdekis}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%93%CE%99%CE%91%CE%9D%CE%9D%CE%91%CE%A1%CE%91%CE%9A%CE%97%CE%A3%20%CE%9D%CE%99%CE%9A%CE%9F%CE%A3.jpg"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΓΙΑΝΝΑΡΑΚΗΣ ΝΙΚΟΣ
            </p>
            <img src={Giannarakis}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%A3%CE%9A%CE%99%CE%91%CE%94%CE%91%CE%A3%20%CE%9A%CE%A9%CE%9D%CE%A3%CE%A4%CE%91%CE%9D%CE%A4%CE%99%CE%9D%CE%9F%CE%A3.jpg"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΣΚΙΑΔΑΣ ΚΩΝΣΤΑΝΤΙΝΟΣ
            </p>
            <img src={Skiadas}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%A4%CE%A3%CE%91%CE%9A%CE%91%CE%9B%CE%97%CE%A3%20%CE%A0%CE%91%CE%9D%CE%91%CE%93%CE%99%CE%A9%CE%A4%CE%97%CE%A3.jpg"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΤΣΑΚΑΛΗΣ ΠΑΝΑΓΙΩΤΗΣ
            </p>
            <img src={Tsakalis}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%93%CE%99%CE%91%20%CE%94%CE%A9%CE%A1%CE%95%CE%91%20%CE%A3%CE%A4%CE%9F%20%CE%A4%CE%91%CE%9C%CE%95%CE%99%CE%9F.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΓΙΑ ΔΩΡΕΑ ΣΤΟ ΤΑΜΕΙΟ
            </p>
            <img src={Dwrea}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%95%CE%A5%CE%A3%CE%A4%CE%91%CE%98%CE%99%CE%9F%CE%A5%20%CE%99%CE%A9%CE%91%CE%9D%CE%9D%CE%97.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΕΥΣΤΑΘΙΟΥ ΙΩΑΝΝΗ
            </p>
            <img src={Eustathiou}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%93%CE%99%CE%91%CE%9A%CE%9F%CE%A5%CE%9C%CE%97.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΓΙΑΚΟΥΜΗ
            </p>
            <img src={Giakoumi}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9A%CE%91%CE%A0%CE%91%CE%93%CE%95%CE%A1%CE%99%CE%94%CE%97.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΚΑΠΑΓΕΡΙΔΗ
            </p>
            <img src={Kapageridi}></img>
          </a>
        </div>
        <div className="border">
          <button onClick={handleDownload}>
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ (10-02-2015) ΓΙΑ ΚΑΡΑΜΠΕΛΙΑ
            </p>
            <img src={Karampelia}></img>
          </button>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9C%CE%97%CE%A4%CE%A1%CE%9F%CE%A0%CE%9F%CE%A5%CE%9B%CE%9F%CE%A5.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΜΗΤΡΟΠΟΥΛΟΥ
            </p>
            <img src={Mitropoulou}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9C%CE%A0%CE%9F%CE%9C%CE%A0%CE%9F%CE%9D%CE%97%CE%A3.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΜΠΟΜΠΟΝΗΣ
            </p>
            <img src={Mpomponis}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9F%CE%99%CE%9A%CE%9F%CE%9D%CE%9F%CE%9C%CE%99%CE%94%CE%9F%CE%A5.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΟΙΚΟΝΟΜΙΔΟΥ
            </p>
            <img src={Oikonomidou}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%A3%CE%91%CE%92%CE%92%CE%91.JPG"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΣΑΒΒΑ
            </p>
            <img src={Savva}></img>
          </a>
        </div>
        <div className="border">
          <a
            href="https://teaapl.gr/images/epistoles/EYXARISTIRIA-KARTA-DHMOTAKH.jpg"
            target="_blank"
          >
            <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
              ΕΥΧΑΡΙΣΤΗΡΙΑ ΚΑΡΤΑ ΔΗΜΟΤΑΚΗ
            </p>
            <img src={Dimotakis}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ergo;
