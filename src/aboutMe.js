import React from "react";

function AboutMe() {
  return (
    <div className="font-poppins text-sm leading-[30px] font-normal text-customColor mx-auto max-w-[1300px]">
      <h2
        id="about-me"
        className="pb-0 text-3xl leading-none m-0 mb-4 pt-0 font-semibold text-custom-new-blue"
      >
        ΙΣΤΟΡΙΚΟ
      </h2>
      <p className="text-white ">
        Το Ταμείο Επαγγελματικής Ασφάλισης Αστυνομικών Πυροσβεστών Λιμενικών
        (Τ.Ε.Α.Α.Π.Λ.) είναι αυτοδιαχειριζόμενο, Νομικό Πρόσωπο Ιδιωτικού
        Δικαίου μη κερδοσκοπικού χαρακτήρα, που συστάθηκε τον Σεπτέμβριο του
        2009 (ΦΕΚ Αρ.Φ.1903τΒ/4.9.2009 όπως τροπ. με την Αρ.
        Φ.51020/7334/157/04.04.2013) για τους υπηρετούντες στα Σώματα Ασφαλείας,
        σύμφωνα με τις διατάξεις του Ν.3029/2002 και αποτελεί την μετεξέλιξη του
        Λογαριασμού Αλληλοβοήθειας μελών της Διεθνούς Ένωσης Αστυνομικών
        (Λ.Α.Μ.Δ.Ε.Α.) που ιδρύθηκε το 1994.
      </p>
      <br />

      <div className="">
        <a
          href="#"
          className="inline-block text-white border-2 border-blue-700 text-center px-10 py-3 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-sm hover:bg-blue-700"
        >
          Ιστορικό
        </a>
      </div>
      <h2
        id="about-me"
        className=" mt-16 pb-0 text-3xl leading-none m-0 mb-4 pt-0 text-custom-new-blue font-semibold"
      >
        ΣΚΟΠΟΣ
      </h2>
      <p className="text-white ">
        Εποπτεύεται από το Υπουργείο Απασχόλησης και Κοινωνικής Προστασίας, την
        Εθνική Αναλογιστική Αρχή και την Επιτροπή Κεφαλαιαγοράς. Λειτουργεί
        συμπληρωματικά στην υποχρεωτική ασφάλιση και αποτελείται από δύο
        αυτοτελείς κλάδους: α) τον Κλάδο Εφάπαξ ο οποίος χορηγεί εφάπαξ
        βοηθήματα, είτε μετά τα 20 έτη ασφάλισης είτε με την συμπλήρωση του 50ου
        έτους της ηλικίας, με χρόνο ασφάλισης στο Ταμείο 10 έτη είτε με την
        συμπλήρωση του 55ου έτους της ηλικίας, με χρόνο ασφάλισης στο Ταμείο 5
        έτη είτε και σε περίπτωση αποστρατείας με 1 έτος ασφάλισης στο Ταμείο.
      </p>
      <br />

      <div className="">
        <a
          href="#"
          className="inline-block text-white border-2 border-blue-700 text-center px-10 py-3 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-sm hover:bg-blue-700"
        >
          Σκοπός
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
