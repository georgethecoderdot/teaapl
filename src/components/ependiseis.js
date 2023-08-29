import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Kefailaio from "../images/amoibaio_kefalaio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faHandHolding, faEuroSign } from "@fortawesome/free-solid-svg-icons";

const formatNumber = (num, decimalPlaces) => {
  const wholePart = Math.floor(num);
  const decimalPart = Math.round(
    (num - wholePart) * Math.pow(10, decimalPlaces)
  );

  return (
    wholePart.toLocaleString("de-DE") +
    "," +
    decimalPart.toString().padStart(decimalPlaces, "0")
  );
};

const animateValue = (start, end, duration, setter) => {
  const incrementTime = 30;
  const totalIncrements = Math.ceil(duration / incrementTime);
  const incrementValue = (end - start) / totalIncrements;

  let currentValue = start;
  const timer = setInterval(() => {
    currentValue += incrementValue;
    if (currentValue >= end) {
      currentValue = end;
      setter(currentValue);
      clearInterval(timer);
    } else {
      setter(currentValue);
    }
  }, incrementTime);
};

const Oikonomika = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [netAsset, setNetAsset] = useState(0);
  const [numberOfShares, setNumberOfShares] = useState(0);
  const [sharePrice, setSharePrice] = useState(0);
  const [dailyChange, setDailyChange] = useState(0);
  const [yearlyChange, setYearlyChange] = useState(0);

  useEffect(() => {
    animateValue(0, 30118362.54, 2000, setNetAsset);
    animateValue(0, 2275677.379, 2000, setNumberOfShares);
    animateValue(0, 13.2349, 2000, setSharePrice);
    animateValue(0, 0.29, 2000, setDailyChange);
    animateValue(0, 6.56, 2000, setYearlyChange);
  }, []);

  return (
    <div>
      <section className="bg-white p-6 rounded-lg shadow-md  mt-20 ">
        <h1 className="text-center text-2xl font-bold underline  text-custom-new-blue mb-10">
          ΕΠΕΝΔΥΣΕΙΣ
        </h1>
        <div className="text-left text-lg px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
          <p>
            Το Ταμείο επενδύει τα αποθεματικά του σύμφωνα με τη ρητή διάταξη του
            άρθρου 23 του Καταστατικού του Τ.Ε.Α.Α.Π.Λ., «Α. Για την κάλυψη του
            μαθηματικού αποθέματος με ασφαλιστική τοποθέτηση το Ταμείο επενδύει
            τα περιουσιακά του στοιχεία μέσω μιας ή περισσοτέρων δια χειριστικών
            εταιρειών. Β. Οι τοποθετήσεις του ενεργητικού του Ταμείου ακολουθούν
            τους ποσοτικούς επενδυτικούς περιορισμούς που προβλέπονται από το
            άρθρο 7 παράγραφος 15 του ν. 3029/2002 όπως αυτό αντικαταστάθηκε με
            το άρ. 12 του ν. 3385/2005 και όπως εκάστοτε ισχύει, κατ’ εφαρμογή
            της Φ Επαγ. Ασφ. Οικ. 16/9.4.2003 απόφασης του Υφυπουργού
            Απασχόλησης και Κοινωνικής Προστασίας και του Κοινοτικού Δικαίου
            όπως ενσωματώνεται στην Εθνική Νομοθεσία.»
          </p>
        </div>
        <div className="text-left text-lg px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
          <p>
            Μετά την 01/07/2016 το Τ.Ε.Α.Α.Π.Λ. σύμφωνα με το καταστατικό του
            επενδύει τα αποθεματικά του Κλάδου Εφάπαξ στο Αμοιβαίο Κεφάλαιο του
            Τ.Ε.Α.Α.Π.Λ., το οποίο έχει σχηματιστεί ειδικά για το σκοπό αυτό με
            την επωνυμία «ΤΕΑ ΑΣΤΥΝΟΜΙΚΩΝ ΠΥΡΟΣΒΕΣΤΩΝ ΛΙΜΕΝΙΚΩΝ MΙΚΤΟ (TAPLM)».
            Διαχειριστής του Αμοιβαίου Κεφαλαίου, μετά από διαδικασία επιλογής,
            έχει οριστεί η ALPHA TRUST.
          </p>
        </div>
        <div className="text-left text-lg px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
          <p>
            Μέχρι την 30/06/2016 τα αποθεματικά του Κλάδου Εφάπαξ επενδύονταν σε
            Τραπεζικές Καταθέσεις, μικρής διάρκειας ομόλογα και έντοκα
            γραμμάτια.
          </p>
        </div>
        <div className="text-left text-lg px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
          <p>
            Το Ταμείο έχει ορίσει την ίδια εταιρεία ως Διαχειριστή και του
            Κλάδου Αλληλεγγύης, τα αποθεματικά του οποίου επενδύονται σε
            βραχυπρόθεσμες επενδύσεις, όπως Τραπεζικές Καταθέσεις, μικρής
            διάρκειας ομόλογα και άλλα προϊόντα περιορισμένου κινδύνου.
          </p>
        </div>
        <div className="text-left text-lg  px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5 ">
          <p>
            Παρακάτω ακολουθεί ανάλυση του ενεργητικού του Α/Κ του κλάδου εφάπαξ
            με την πιο πρόσφατη αποτίμηση:
          </p>
        </div>
        <h1 className="text-center text-2xl underline font-bold text-custom-new-blue  mt-20">
          ΤΕΑ Αστυνομικών-Πυροσβεστών-Λιμενικών Mικτό
        </h1>
        <div>
          <div class="py-8">
            {" "}
            {/* Reduce padding here */}
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap justify-between items-center mb-12"></div>
              <div class="flex flex-wrap justify-around">
                <div class="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-2xl m-2">
                  <div class="text-black text-5xl mb-4">
                    <FontAwesomeIcon
                      icon={faCoins}
                      style={{ color: "goldenrod" }}
                    />
                  </div>
                  <h2 class="text-white text-3xl font-bold mb-2 font-sans text-rendering-optimizeLegibility leading-none tracking-normal">
                    {formatNumber(netAsset, 2)} €
                  </h2>
                  <h3 class="text-white text-opacity-80">Καθαρό Ενεργητικό</h3>
                </div>
                <div class="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-2xl m-2">
                  <div class="text-black text-5xl mb-4">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      style={{ color: "red" }}
                    />
                  </div>
                  <h2 class="text-white text-3xl font-bold mb-2 font-sans text-rendering-optimizeLegibility leading-none tracking-normal">
                    {formatNumber(numberOfShares, 3)} €
                  </h2>
                  <h3 class="text-white text-opacity-80">Αριθμός Μεριδίων</h3>
                </div>
                <div class="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-2xl m-2">
                  <div class="text-black text-5xl mb-4">
                    <div style={{ position: "relative", fontSize: "50px" }}>
                      <FontAwesomeIcon icon={faHandHolding} />
                      <span
                        style={{
                          position: "absolute",
                          top: "-1px",
                          left: "50%",
                          fontSize: "20px",
                          transform: "translateX(-50%)",
                          zIndex: 2,
                        }}
                      >
                        <FontAwesomeIcon
                          className="text-amber-400"
                          icon={faEuroSign}
                        />
                      </span>
                    </div>
                  </div>
                  <h2 class="text-white text-3xl font-bold mb-2 font-sans text-rendering-optimizeLegibility leading-none tracking-normal">
                    {formatNumber(sharePrice, 4)} €
                  </h2>
                  <h3 class="text-white text-opacity-80">
                    Καθαρή τιμή μεριδίου
                  </h3>
                </div>
                <div class="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-2xl m-2">
                  <div class="text-black text-5xl mb-4">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      style={{ color: "Yellow" }}
                    />
                  </div>
                  <h2 class="text-white text-3xl font-bold mb-2 font-sans text-rendering-optimizeLegibility leading-none tracking-normal">
                    {formatNumber(dailyChange, 2)}%
                  </h2>
                  <h3 class="text-white text-opacity-80">
                    Ημερήσια % μεταβολή
                  </h3>
                </div>
                <div class="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-2xl m-1">
                  {" "}
                  {/* Reduce margin here */}
                  <div class="text-black text-5xl mb-4">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      style={{ color: "Yellow" }}
                    />
                  </div>
                  <h2 class="text-white text-3xl font-bold mb-2 font-sans text-rendering-optimizeLegibility leading-none tracking-normal">
                    {formatNumber(yearlyChange, 2)}%
                  </h2>
                  <h3 class="text-white text-opacity-80">
                    Μεταβολή από αρχή του έτους έως ημ. Αποτίμησης
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <a
            href="https://www.naftemporiki.gr/amoivaia/?id=TAPLM.MTF"
            target="_blank"
          >
            <p className="text-left text-2xl underline  text-custom-new-blue mb-10">
              Δείτε εδώ την ημερήσια εξέλιξη της τιμής του αμοιβαίου κεφαλαίου:
            </p>
            <img src={Kefailaio}></img>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Oikonomika;
