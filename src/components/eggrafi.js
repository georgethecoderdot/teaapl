import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PDF from "../images/icon.png";

const Eggrafh = () => {
  return (
    <div>
      <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24">
        ΕΓΓΡΑΦΗ
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 ml-5 mr-5">
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p className="text-left text-1xl ">
            <h1 className="underline text-gray-700">
              Α) Δικαίωμα εγγραφής στο Ταμείο έχουν όλοι:
            </h1>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>οι εν ενεργεία αστυνομικοί,</li>
              <li>οι εν ενεργεία πυροσβέστες,</li>
              <li>οι εν ενεργεία λιμενικοί,</li>
              <li>
                οι υπάλληλοι των Αρχηγείων της Ελληνικής Αστυνομίας, του
                Πυροσβεστικού Σώματος και του Λιμενικού Σώματος και Ελληνικής
                Ακτοφυλακής.
              </li>
            </ul>
          </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p className="text-left text-1xl  ">
            <span className="text-gray-700 underline">Β)</span>Η ασφάλιση στο
            Ταμείο είναι προαιρετική και συμπεριλαμβάνει την ένταξη τόσο στον
            Κλάδο Εφάπαξ όσο και στον Κλάδο Αλληλεγγύης, πλην των ευρισκομένων
            σε κατάσταση μόνιμης Πολεμικής Διαθεσιμότητας προ της εγγραφής τους
            στο ταμείο οι οποίοι ασφαλίζονται αποκλειστικά και μόνο στον κλάδο
            εφάπαξ για όσο διάστημα βρίσκονται σε κατάσταση πολεμικής
            διαθεσιμότητας.
          </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p className="text-left text-1xl    ">
            <span className="text-gray-700 underline">Γ)</span> Για την υπαγωγή
            των αιτούντων στην ασφάλιση του Ταμείου αποφασίζει το ΔΣ και
            καθορίζεται δια αυτής και η ημερομηνία έναρξης της εγκρινόμενης
            ασφάλισης η οποία συμπίπτει με την ημερομηνία της έναρξης καταβολής
            εισφορών στο Ταμείο.
          </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p class="text-left text-1xl  ">
            <h1 class="underline">
              Δ) Το υποψήφιο μέλος υποβάλλει για την εγγραφή του στο Ταμείο{" "}
              <span class="text-blue-500 hover:text-blue-900">
                <a
                  href="https://www.teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf"
                  target="_blank"
                >
                  σχετική αίτηση
                </a>
              </span>{" "}
              υπογεγραμμένη:
            </h1>
            <ul class="list-disc pl-6 mt-3 space-y-2">
              <li>
                μέσω της{" "}
                <span class="text-blue-500 hover:text-blue-900 underline">
                  <a
                    href="https://www.teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf"
                    target="_blank"
                  >
                    ηλεκτρονικής φόρμας εγγραφής
                  </a>
                </span>
              </li>
              <li>
                μέσω του τοπικού αντιπροσώπου{" "}
                <span class="text-blue-500 hover:text-blue-900 underline">
                  <a href="/Antiprosopoi"> (πίνακας αντιπροσώπων)</a>
                </span>
              </li>
              <li>με fax στο 210-5248397,</li>
              <li>
                με e-mail στο{" "}
                <span class="text-blue-500 hover:text-blue-900 underline">
                  <a href="mailto:info@teaapl.gr">info@teaapl.gr</a>
                </span>
              </li>
              <li>αυτοπροσώπως στα γραφεία του ταμείου.</li>
              <li>
                Η υποβολή της αίτησης συνεπάγεται ανεπιφύλακτα την αποδοχή του
                παρόντος καταστατικού από τον αιτούντα.
              </li>
            </ul>
          </p>
        </div>
        <div class="p-4 col-span-2 rounded-lg shadow-md border border-blue-400 mb-5">
          <p className="text-left text-1xl ">
            <h1 className="underline text-gray-700">
              Ε) Λοιπά έντυπα αιτήσεων:
            </h1>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href="https://www.teaapl.gr/images/pdf/4)%20%CE%91%CE%AF%CF%84%CE%B7%CF%83%CE%B7%20%CE%B1%CE%BB%CE%BB%CE%B1%CE%B3%CE%AE%CF%82%20%CE%B4%CE%B9%CE%BA%CE%B1%CE%B9%CE%BF%CF%8D%CF%87%CF%89%CE%BD.pdf"
                  target="_blank"
                >
                  <i class="fa-solid fa-link "></i>Αίτηση αλλαγής δικαιούχων
                  <img src={PDF} className="w-8 h-8 inline " />
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href="https://www.teaapl.gr/images/pdf/5)%20%CE%91%CE%AF%CF%84%CE%B7%CF%83%CE%B7%20%CE%B5%CF%80%CE%B1%CE%BD%CE%B5%CE%B3%CE%B3%CF%81%CE%B1%CF%86%CE%AE%CF%82%20%CE%BC%CE%AD%CE%BB%CE%BF%CF%85%CF%82%20%CF%80%CE%BF%CF%85%20%CE%AD%CF%87%CE%B5%CE%B9%20%CE%B4%CE%B9%CE%B1%CE%B3%CF%81%CE%B1%CF%86%CE%B5%CE%AF%20(%CF%87%CF%89%CF%81%CE%AF%CF%82%20%CE%BB%CE%AE%CF%88%CE%B7%20%CE%91%CF%84%CE%BF%CE%BC.%20%CE%9C%CE%B5%CF%81%CE%AF%CE%B4....pdf"
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>Αίτηση επανεγγραφής μέλους που
                  έχει διαγραφεί{" "}
                  <img src={PDF} className="w-8 h-8 inline"></img>
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href="https://www.teaapl.gr/images/pdf/6)%20%CE%91%CF%80%CE%BF%CE%B3%CF%81%CE%B1%CF%86%CE%B9%CE%BA%CF%8C%20%CE%B4%CE%B5%CE%BB%CF%84%CE%AF%CE%BF%20-%20%CE%B5%CF%80%CE%B9%CE%BA%CE%B1%CE%B9%CF%81%CE%BF%CF%80%CE%BF%CE%AF%CE%B7%CF%83%CE%B7%20%CF%83%CF%84%CE%BF%CE%B9%CF%87%CE%B5%CE%AF%CF%89%CE%BD.pdf"
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>Απογραφικό δελτίο -
                  επικαιροποίηση στοιχείων{" "}
                  <img src={PDF} className="w-8 h-8 inline"></img>
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href="https://www.teaapl.gr/images/pdf/%CE%91%CE%AF%CF%84%CE%B7%CF%83%CE%B7%20%CE%B5%CE%BD%CE%B7%CE%BC%CE%AD%CF%81%CF%89%CF%83%CE%B7%CF%82%20%CE%BC%CE%AD%CE%BB%CE%BF%CF%85%CF%82.pdf"
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>Αίτηση ενημέρωσης μέλους{" "}
                  <img src={PDF} className="w-8 h-8 inline"></img>
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eggrafh;
