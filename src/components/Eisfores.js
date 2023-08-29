import React from "react";

const Eisfores = () => {
  return (
    <div>
      <section>
        <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24">
          ΕΙΣΦΟΡΕΣ
        </h1>
        <body class=" p-4 mt-20 text-1xl">
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700 ">
                Κάθε μέλος υποχρεούται να καταβάλλει στο Ταμείο την εισφορά για
                κάθε ημερολογιακό μήνα. Το ποσό της μηνιαίας εισφοράς δεν μπορεί
                να είναι κατώτερο από 30€ ούτε ανώτερο από 500€.
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Κάθε μέλος επιλέγει το ποσό της μηνιαίας εισφοράς που καταβάλλει
                στο Ταμείο μεταξύ του ως άνω κατώτατου και ανώτατου ποσού
                μηνιαίας εισφοράς.
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Το δικαίωμα επιλογής του ποσού της εισφοράς ασκείται με έγγραφη
                δήλωση του μέλους που υποβάλλεται στο Διοικητικό Συμβούλιο του
                Ταμείου μαζί με την αίτηση εγγραφής του σε αυτό.
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Κάθε μέλος έχει το δικαίωμα να μεταβάλλει το ύψος της μηνιαίας
                εισφοράς που καταβάλλει στο Ταμείο, υπό τον περιορισμό του
                ισχύοντος κατώτατου και ανώτατου ποσού εισφορών.{" "}
                <span className="text-blue-500 hover:text-blue-700 underline">
                  <a
                    href="https://www.teaapl.gr/images/pdf/aitisi_metavolis_posou_miniaias_eisforas.pdf"
                    target="_blank"
                  >
                    <i class="fa-solid fa-circle-down"></i>Κατεβάστε εδώ το
                    σχετικό έντυπο.
                  </a>
                </span>
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Το δικαίωμα μεταβολής του ύψους της εισφοράς ασκείται μια φορά
                ανά ημερολογιακό έτος με έγγραφη δήλωση του μέλους, η οποία
                υποβάλλεται στο Διοικητικό Συμβούλιο του Ταμείου έως την 30η
                Οκτωβρίου. Η μεταβολή ισχύει από την 1η Ιανουαρίου του επόμενου
                έτους.
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Οι εισφορές των μελών κατανέμονται από το Ταμείο στους κλάδους
                Εφάπαξ και Αλληλεγγύης ανεξάρτητα από το ποσό της μηνιαίας
                εισφοράς. Στον κλάδο Αλληλεγγύης μεταφέρεται μόνο το ποσό των
                4,5€, αφού αφαιρεθεί 6% για λειτουργικά έξοδα και με το υπόλοιπο
                ποσό δημιουργείται ο ατομικός λογαριασμός του μέλους.
              </p>
            </div>
          </div>
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
                <tr>
                  <td>Α</td>
                  <td>30,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>25,50 €</td>
                  <td>6%</td>
                  <td>1,53 €</td>
                  <td>&nbsp;</td>
                  <td>23,97 €</td>
                </tr>
                <tr>
                  <td>Β</td>
                  <td>40,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>35,50 €</td>
                  <td>6%</td>
                  <td>2,13 €</td>
                  <td>&nbsp;</td>
                  <td>33,37 €</td>
                </tr>
                <tr>
                  <td>Γ</td>
                  <td>50,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>45,50 €</td>
                  <td>6%</td>
                  <td>2,73 €</td>
                  <td>&nbsp;</td>
                  <td>42,77 €</td>
                </tr>
                <tr>
                  <td>Δ</td>
                  <td>60,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>55,50 €</td>
                  <td>6%</td>
                  <td>3,33 €</td>
                  <td>&nbsp;</td>
                  <td>52,17 €</td>
                </tr>
                <tr>
                  <td>Ε</td>
                  <td>70,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>65,50 €</td>
                  <td>6%</td>
                  <td>3,93 €</td>
                  <td>&nbsp;</td>
                  <td>61,57 €</td>
                </tr>
                <tr>
                  <td>ΣΤ</td>
                  <td>80,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>75,50 €</td>
                  <td>6%</td>
                  <td>4,53 €</td>
                  <td>&nbsp;</td>
                  <td>70,97 €</td>
                </tr>
                <tr>
                  <td>Ζ</td>
                  <td>90,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>85,50 €</td>
                  <td>6%</td>
                  <td>5,13 €</td>
                  <td>&nbsp;</td>
                  <td>80,37 €</td>
                </tr>
                <tr>
                  <td>Η</td>
                  <td>100,00 €</td>
                  <td>Αλληλεγγύης</td>
                  <td>4,50 €</td>
                  <td>6%</td>
                  <td>0,27 €</td>
                  <td>4,23 €</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Εφάπαξ</td>
                  <td>95,50 €</td>
                  <td>6%</td>
                  <td>5,73 €</td>
                  <td>&nbsp;</td>
                  <td>89,77 €</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Eisfores;
