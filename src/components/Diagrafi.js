import React from "react";

const Diagrafh = () => {
  return (
    <div>
      <section>
        <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-20 ">
          ΔΙΑΓΡΑΦΗ
        </h1>
        <h2 className="text-center text-xl underline font-bold text-custom-new-blue mt-20 ">
          Διαγραφή μέλους από το Ταμείο επέρχεται στις ακόλουθες περιπτώσεις:
        </h2>
        <div className="mt-20">
          <div className="mb-6 p-4 ml-4 mr-4 rounded-lg shadow-md border border-blue-400">
            <p className="text-left text-xl text-gray-700 mb-2">
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Μετά την υποβολή, από τον ασφαλισμένο,{" "}
                  <span className="text-blue-600 font-bold underline hover:text-blue-700">
                    <a
                      href="https://teaapl.gr/images/pdf/aitisi_diagrafis.pdf"
                      target="_blank"
                    >
                      <i class="fa-solid fa-user-xmark"></i>αίτησης διαγραφής
                    </a>
                  </span>{" "}
                  του από το Ταμείο.
                </li>
                <li>
                  Μετά την καταβολή της εφάπαξ παροχής στο μέλος από τον κλάδο
                  Εφάπαξ του Ταμείου.
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-6 ml-4 mr-4 p-4 rounded-lg shadow-md border border-blue-400 order-3">
            <p className="text-left text-xl text-gray-700 mb-2">
              Η απονομή εφάπαξ βοηθήματος ΜΟΑ (Μόνιμης Ολικής Αναπηρίας) από τον
              κλάδο Αλληλεγγύης του Ταμείου δεν συνεπάγεται τη διαγραφή του από
              το Ταμείο, αλλά μόνον την λήξη της ασφάλισης στον κλάδο
              Αλληλεγγύης.
            </p>
          </div>
          <div className="mb-6 p-4  ml-4 mr-4 rounded-lg shadow-md border border-blue-400">
            <p className="text-left text-xl text-gray-700 mb-2">
              Η διαγραφή από το Ταμείο επέρχεται στις ανωτέρω περιπτώσεις από
              την ημερομηνία έκδοσης της απόφασης του Διοικητικού Συμβουλίου του
              Ταμείου περί διαγραφής.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diagrafh;
