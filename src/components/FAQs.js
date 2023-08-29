import { useState } from "react";
import React from "react";

const faqData = [
  {
    question: "Έχω δικαίωμα εγγραφής στο Ταμείο;",
    answer:
      "Δικαίωμα να εγγραφούν στο Ταμείο, έχουν όλοι οι Αστυνομικοί, Πυροσβέστες και  Λιμενικοί καθώς και το πολιτικό προσωπικό που εργάζεται στα τρία Αρχηγεία.",
  },
  {
    question: "Με ποιον τρόπο μπορώ να καταβάλω τη μηνιαία μου εισφορά;",
    answer:
      "Η κράτηση της μηνιαίας εισφοράς γίνεται απευθείας από τη μισθοδοσία του μέλους. (Με την υποβολή της αίτησης εγγραφής, το μέλος ουσιαστικά εξουσιοδοτεί το Ταμείο να ζητάει κάθε μήνα από το αρμόδιο Τμήμα Μισθοδοσίας το αντίστοιχο ποσό).",
  },

  {
    question: "Πότε έχω δικαίωμα να λάβω το ποσό της Ατομικής μου Μερίδας;",
    answer:
      "Τα μέλη αφού υποβάλουν τη σχετική αίτηση διαγραφής, έχουν δικαίωμα να λάβουν την Ατομικής τους μερίδα όταν πληρούν μία από τις ακόλουθες προϋποθέσεις:\n\nΗλικία 50 ετών έχοντας χρόνο ασφάλισης στο Ταμείο 10 έτη\nΗλικία 55 ετών έχοντας χρόνο ασφάλισης στο Ταμείο 5 έτη\nΑνεξαρτήτως ηλικίας έχοντας χρόνο ασφάλισης στο Ταμείο 20 έτη\nΕπίσης Ανεξαρτήτως ηλικίας σε περίπτωση αποστρατείας, έχοντας χρόνο παραμονής στο Ταμείο τουλάχιστον ένα (1) έτος",
  },
  {
    question:
      "Τι προβλέπεται στην περίπτωση που υποβάλλω αίτηση διαγραφής αλλά δεν έχω κάποια από τις τέσσερις προϋποθέσεις που θέτει το καταστατικό για να λάβω τα χρήματα της Ατομικής μου Μερίδας;",
    answer:
      "Διαγράφεστε χωρίς τη λήψη της Ατομικής Μερίδας,\nαπό τη μισθοδοσία που διακόπτεται η κράτηση των εισφορών θεωρείστε Ανενεργό Μέλος,\nη ατομική σας μερίδα συμμετέχει στις επενδύσεις του Ταμείου και επανέρχεστε με νεώτερη αίτηση διαγραφής προκειμένου\nνα λάβετε την ατομική σας μερίδα μόλις γίνεται 50 χρονών.\nΓια το διάστημα που είστε ανενεργό μέλος δεν έχετε κάλυψη από τον κλάδο αλληλεγγύης.",
  },

  {
    question:
      "Πότε μπορώ να ζητήσω είτε ο ίδιος, είτε τα πρόσωπα που έχω ορίσει ως δικαιούχους εφάπαξ βοήθημα από τον κλάδο αλληλεγγύης (για θάνατο, Μ.Ο.Α. ή νοσηλεία);",
    answer:
      "Με τη συμπλήρωση δύο (2) ετών από την εγγραφή στην περίπτωση θανά-του ή Μόνιμης Ολικής Αναπηρίας (Μ.Ο.Α.) και ενός (1) έτους για νοσηλεία σε νοσοκομεία ή κλινικές (για περιπτώσεις όμως μετά την από την 8η ημέρα νοσηλείας).",
  },

  {
    question: "Ποιο είναι το ποσό της μηνιαίας εισφοράς;",
    answer:
      "Το ποσό της μηνιαίας εισφοράς που καταβάλουν τα μέλη του Ταμείου, δεν μπορεί να είναι μικρότερο από 30 € και μεγαλύτερο από 500 €.",
  },

  {
    question: "Έχω δικαίωμα να μεταβάλω το ύψος της μηνιαίας μου εισφοράς;",
    answer:
      "Το κάθε μέλος έχει το δικαίωμα να αυξήσει ή να μειώσει το ποσό της μηνιαίας του εισφοράς μια φορά το χρόνο.",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleToggleAll = () => {
    if (expandAll) {
      setExpandAll(false);
      setExpandedIndex(null);
    } else {
      setExpandAll(true);
      setExpandedIndex(null);
    }
  };

  return (
    <div className="p-2 sm:p-4 md:p-8 bg-white mt-[-20] flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-custom-new-blue">
        Συχνές Ερωτήσεις
      </h1>
      <button
        onClick={handleToggleAll}
        className="flex items-center inline-block text-dark border-2 border-blue-700 text-center px-4 sm:px-6 py-2 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-xs hover:bg-custom-new-blue mb-4"
      >
        {expandAll ? "Collapse All" : "Expand All"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`ml-2 w-4 sm:w-5 h-4 sm:h-5 transform transition-transform duration-200 ${
            expandAll ? "rotate-180" : ""
          }`}
        >
          <path d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {faqData.map((item, index) => (
        <div className="border-2 border-gray-300 rounded-lg mb-4" key={index}>
          <button
            className="w-full text-left cursor-pointer px-4 py-3 flex justify-between items-center border-b-2 border-gray-300"
            onClick={() => handleToggle(index)}
            aria-expanded={expandedIndex === index}
          >
            <div className="font-semibold text-blue-500">{item.question}</div>
          </button>
          {(expandedIndex === index || expandAll) && (
            <div className="px-4 py-2 bg-gray-200 border-t-2 border-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
