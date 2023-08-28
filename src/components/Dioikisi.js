import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dioikisoi = () => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isParagraphVisible1, setIsParagraphVisible1] = useState(false);
  const [isParagraphVisible2, setIsParagraphVisible2] = useState(false);
  const [isParagraphVisible3, setIsParagraphVisible3] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const ReadMore = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };
  const ReadMore1 = () => {
    setIsParagraphVisible1(!isParagraphVisible1);
  };
  const ReadMore2 = () => {
    setIsParagraphVisible2(!isParagraphVisible2);
  };
  const ReadMore3 = () => {
    setIsParagraphVisible3(!isParagraphVisible3);
  };

  return (
    <div>
      <section className="p-5">
        <h1 className="text-3xl font-bold text-custom-new-blue underline pb-5 text-center">
          ΔΙΟΙΚΗΣΗ:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          <div className="max-w-md mx-auto">
            <h2 className="name">Γουσιας Θεόδωρος</h2>
            <p className="additional-text">Πρόεδρος</p>
          </div>
          <div className="employee">
            <h2 className="name">Τσαγανος Ιωάννης</h2>
            <p className="additional-text">Αντιπρόεδρος</p>
            <button
              onClick={ReadMore}
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Read More
            </button>

            {isParagraphVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 sm:pt-24">
                <div
                  className="bg-white rounded-lg shadow-md p-4 w-11/12 sm:w-3/4 md:w-auto md:max-w-md md:rounded-lg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <button
                    onClick={ReadMore}
                    className="py-1 px-3 text-custom-new-blue rounded absolute top-2 right-2 md:py-2 md:px-4 md:top-4 md:right-4"
                  >
                    X
                  </button>

                  <div className="text-sm sm:text-base md:text-lg">
                    {/* ... rest of the modal content ... */}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg"></div>
                  <h1 className="name">Τσαγανος Ιωάννης</h1>
                  <p className="additional-text">Αντιπρόεδρος</p>
                  <p className="">
                    Γεννήθηκε στη Θεσσαλονίκη το έτος 1980. Αποφοίτησε από το
                    Γενικό Λύκειο Νέας Τρίγλιας Χαλκιδικής το έτος 1997.
                    Κατατάχθηκε στο Σώμα της ΕΛ.ΑΣ. το έτος 1998 και αποφοίτησε
                    από τη Σχολή Αστυφυλάκων το έτος 2000. Είναι πτυχιούχος
                    Οικονομικών Επιστημών του Αριστοτελείου Πανεπιστημίου
                    Θεσσαλονίκης του Τμήματος Νομικών Οικονομικών και Πολιτικών
                    Επιστημών. Κάτοχος πτυχίου καλής γνώσης Αγγλικής γλώσσας
                    επιπέδου Certificate of Competency in English του University
                    oF Michigan. Κάτοχος άδειας λογιστή – φοροτεχνικού και
                    άδειας ασκήσεως οικονομολογικού επαγγέλματος. Έχει
                    υπηρετήσει σε διάφορες Υπηρεσίες της Διεύθυνσης Αστυνομίας
                    Χαλκιδικής και από το έτος 2007 έχει οριστεί Διαχειριστής
                    Χρηματικού – Υλικού (Δημόσιος Υπόλογος) της Διεύθυνσης
                    Αστυνομίας Χαλκιδικής. Είναι έγγαμος και πατέρας τριών (3)
                    τέκνων.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="employee">
            <h2 className="name">Αρζιμανογλου Μιχαήλ</h2>
            <p className="additional-text">Γεν. Γραμματέας</p>
            <button
              onClick={ReadMore1}
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Read More
            </button>
            {isParagraphVisible1 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 sm:pt-24">
                <div
                  className="bg-white rounded-lg shadow-md p-4 w-11/12 sm:w-3/4 md:w-auto md:max-w-md md:rounded-lg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <button
                    onClick={ReadMore1}
                    className="py-1 px-3 text-custom-new-blue rounded absolute top-2 right-2 md:py-2 md:px-4 md:top-4 md:right-4"
                  >
                    X
                  </button>

                  <div className="text-sm sm:text-base md:text-lg">
                    {/* ... rest of the modal content ... */}
                  </div>
                  <h1 className="name">Αρζιμανογλου Μιχαήλ</h1>
                  <p className="additional-text">Γεν. Γραμματέας</p>
                  <p className="">
                    Γεννήθηκε στoν Κορυδαλλό Αττικής το1979. Αποφοίτησε από
                    σχολή Αστυφυλάκων το 1998, από τη Σχολή διοίκησης και
                    Οικονομίας Τμ. Λογιστικής του ΤΕΙ Πειραιά το 2011. Είναι
                    κάτοχος πιστοποιητικού γνώσης χειρισμού Η/Υ και μεταξύ άλλων
                    έχει συμμετάσχει σε σεμινάρια του Εθνικού Κέντρου Δημόσιας
                    Διοίκησης τόσο σε θεματικές ενότητες Οικονομικού
                    περιεχομένου όσο και δικτύων Ηλεκτρονικών υπολογιστών.
                    Γνωρίζει την Αγγλική γλώσσα σε επίπεδο B2 (Lower) Από το
                    2009 ως σήμερα υπηρετεί ως λογιστής στο Τ.Ε.Α.Π.Α.Σ.Α. Είναι
                    έγγαμος και πατέρας δύο παιδιών.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="employee">
            <h2 className="name">Λιτσιος Απόστολος</h2>
            <p className="additional-text">Οργαν. Γραμματέας</p>
            <button
              onClick={ReadMore2}
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Read More
            </button>
            {isParagraphVisible2 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 sm:pt-24">
                <div
                  className="bg-white rounded-lg shadow-md p-4 w-11/12 sm:w-3/4 md:w-auto md:max-w-md md:rounded-lg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <button
                    onClick={ReadMore2}
                    className="py-1 px-3 text-custom-new-blue rounded absolute top-2 right-2 md:py-2 md:px-4 md:top-4 md:right-4"
                  >
                    X
                  </button>

                  <div className="text-sm sm:text-base md:text-lg">
                    {/* ... rest of the modal content ... */}
                  </div>
                  <h1 className="name">Λιτσιος Απόστολος</h1>
                  <p className="additional-text">Οργαν. Γραμματέας</p>
                  <p className="">
                    Γεννήθηκε στην Κοζάνη το έτος 1968. Είναι απόφοιτος Λυκείου.
                    Κάτοχος πιστοποιητικού γνώσης χειρισμού Η/Υ (CAMBRIDGE).
                    Προσλήφθηκε στην Ελληνική Αστυνομία τον Ιούνιο του 1993 και
                    έχει υπηρετήσει σε υπηρεσίες της Αθήνας, της Καστοριάς και
                    της Κοζάνης. Παρακολούθησε αρκετά σεμινάρια, υπηρεσιακά και
                    μη και μεταξύ αυτών τα εξειδικευμένα: «Επενδύσεις για μη
                    Οικονομικούς» και «Εκτίμηση Κινδύνου – Στρατηγική ανάλυση»
                    Σήμερα ανήκει στη δύναμη της Τροχαίας Κοζάνης και είναι
                    αποσπασμένος στο Τ.Π.Π.Π. Είναι έγγαμος και πατέρας τεσσάρων
                    παιδιών.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="employee">
            <h2 className="name">Συρσυρης Φώτιος</h2>
            <p className="additional-text">Διαχειριστής</p>
          </div>
          <div className="employee">
            <h2 className="name">Αθανασιου Παναγιώτης</h2>
            <p className="additional-text">Μέλος</p>
            <button
              onClick={ReadMore3}
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Read More
            </button>
            {isParagraphVisible3 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 sm:pt-24">
                <div
                  className="bg-white rounded-lg shadow-md p-4 w-11/12 sm:w-3/4 md:w-auto md:max-w-md md:rounded-lg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <button
                    onClick={ReadMore3}
                    className="py-1 px-3 text-custom-new-blue rounded absolute top-2 right-2 md:py-2 md:px-4 md:top-4 md:right-4"
                  >
                    X
                  </button>

                  <div className="text-sm sm:text-base md:text-lg">
                    {/* ... rest of the modal content ... */}
                  </div>
                  <h1 className="name">Αθανασιου Παναγιώτης</h1>
                  <p className="additional-text">Μέλος</p>
                  <p className="">
                    Γεννήθηκε στην Αθήνα το έτος 1979. Είναι απόφοιτος της
                    Σχολής Αστυφυλάκων, στην οποία εισήχθη με το σύστημα των
                    Πανελλαδικών Εξετάσεων το έτος 1998. Έχει υπηρετήσει σε
                    μάχιμες υπηρεσίες των Νομών Αττικής και Θεσπρωτίας. Από το
                    έτος 2014 υπηρετεί στο Επιτελείο της Διεύθυνσης Αστυνομίας
                    Θεσπρωτίας. Έχει παρακολουθήσει πλήθος εκπαιδεύσεων και
                    σεμιναρίων, τόσο μέσω των Σχολών Μετεκπαίδευσης και
                    Επιμόρφωσης της Ελληνικής Αστυνομίας, όσο και Δημόσιων -
                    Ιδιωτικών Φορέων, σε οικονομικά - κοινωνικά θέματα, μεταξύ
                    των οποίων «Επενδύσεις για μη Οικονομικούς» και «Εκτίμηση
                    Κινδύνου – Στρατηγική ανάλυση».
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="employee">
            <h2 className="name">Βλαχοπουλος Κωνσταντίνος</h2>
            <p className="additional-text">Μέλος </p>
          </div>
          <p>
            <br></br>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <table>
            <thead className="text-3xl font-bold text-customBlue p-4 text-lg leading-7  border-b-2 border-custom-new-blue pb-2 cursor-pointer ">
              <tr className="text-custom-new-blue">ΕΞΕΛΕΓΚΤΙΚΗ ΕΠΙΤΡΟΠΗ:</tr>
            </thead>
            <thead className="bg-gray-200">
              <th className="p-5">Θέση</th>
              <th className="p-5">Ονοματεπώνυμο</th>
            </thead>
            <tbody className="border border-gray-300">
              <tr>
                <td>Πρόεδρος</td>
                <td>Μαυρογιωργος Σωκράτης</td>
              </tr>
              <tr>
                <td>Μέλος</td>
                <td>Μινογιαννης Κοσμάς</td>
              </tr>
              <tr>
                <td>Μέλος</td>
                <td>Παπουλιας Μιχαήλ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dioikisoi;
