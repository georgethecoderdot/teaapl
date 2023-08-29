import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import closed from "../images/closed.jpg";
import red from "../images/redMark.jpg";

const myList = [
  {
    id: 1,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΩΝ ΤΕΑΑΠΛ ΓΙΑ ΤΟ ΜΗΝΑ ΑΥΓΟΥΣΤΟ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 2,
    title: "ΕΚΤΑΚΤΗ ΑΝΑΚΟΙΝΩΣΗ",
    created: "  Δημιουργήθηκε : 23 Ιουνίου 2023",
  },
  {
    id: 3,
    title:
      "Μη ανανέωση Εκπτώσεων Ομίλου Ευρωκλινικής στα μέλη του Τ.Ε.Α.Α.Π.Λ.",
    created: " Δημιουργήθηκε : 16 Μαΐου 2023",
  },
  {
    id: 4,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΓΙΑ ΔΙΑΚΟΠΗ ΡΕΥΜΑΤΟΣ",
    created: "Δημιουργήθηκε : 12 Μαΐου 2023",
  },
  {
    id: 5,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΓΙΑ ΦΟΡΟΛΟΓΙΚΕΣ ΒΕΒΑΙΩΣΕΙΣ ΤΕΑΑΠΛ 2022",
    created: "Δημιουργήθηκε : 04 Απριλίου 2023",
  },
  {
    id: 6,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΩΝ ΤΕΑΑΠΛ ΓΙΑ ΤΗΝ ΕΟΡΤΑΣΤΙΚΗ ΠΕΡΙΟΔΟ",
    created: " Δημιουργήθηκε : 23 Δεκεμβρίου 2022",
  },
  {
    id: 7,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΩΝ ΤΕΑΑΠΛ ΓΙΑ ΤΟ ΜΗΝΑ ΑΥΓΟΥΣΤΟ",
    created: "Δημιουργήθηκε : 01 Αυγούστου 2022",
  },
  {
    id: 8,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΓΙΑ ΦΟΡΟΛΟΓΙΚΕΣ ΒΕΒΑΙΩΣΕΙΣ ΤΕΑΑΠΛ 2021",
    created: "Δημιουργήθηκε : 10 Μαΐου 2022",
  },
  {
    id: 9,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΟΥ ΚΑΤΑ ΤΗΝ ΕΟΡΤΑΣΤΙΚΗ ΠΕΡΙΟΔΟ",
    created: "Δημιουργήθηκε : 22 Δεκεμβρίου 2021",
  },
  {
    id: 10,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΩΝ ΤΕΑΑΠΛ ΓΙΑ ΤΟ ΜΗΝΑ ΑΥΓΟΥΣΤΟ",
    created: "Δημιουργήθηκε : 27 Ιουλίου 2021",
  },
  {
    id: 11,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΓΙΑ ΦΟΡΟΛΟΓΙΚΕΣ ΒΕΒΑΙΩΣΕΙΣ ΤΕΑΑΠΛ 2020",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 12,
    title: "ΛΕΙΤΟΥΡΓΙΑ ΓΡΑΦΕΙΟΥ ΕΟΡΤΑΣΤΙΚΗ ΠΕΡΙΟΔΟ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 13,
    title: "ΛΕΙΤΟΥΡΓΙΑ ΓΡΑΦΕΙΟΥ ΜΑΣ ΚΑΤΑ ΤΟ ΜΗΝΑ ΑΥΓΟΥΣΤΟ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 14,
    title: "Λειτουργία γραφείων ΤΕΑΑΠΛ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 15,
    title: "ΑΝΑΚΟΙΝΩΣΗ ΓΙΑ ΦΟΡΟΛΟΓΙΚΕΣ ΒΕΒΑΙΩΣΕΙΣ 2019",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 16,
    title: "Λειτουργία γραφείων ΤΕΑΑΠΛ λόγω κορονοϊου",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 17,
    title: "ΠΡΟΣΦΟΡΑ ΕΥΡΩΚΛΙΝΙΚΗΣ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 18,
    title: "ΓΕΝΙΚΟ ΨΗΦΟΔΕΛΤΙΟ ΕΚΛΟΓΩΝ 2019",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 19,
    title: "Εκλογές 2019",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 20,
    title: "Φορολογική αντιμετώπιση κρατήσεων υπέρ του Τ.Ε.Α.Ε.Τ.Δ.Ε.Α.Π.Λ.",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 21,
    title: "ΒΕΒΑΙΩΣΗ ΑΠΟΔΟΧΩΝ ΕΤΟΥΣ 2018 ΓΙΑ ΦΟΡΟΛΟΓΙΚΗ ΧΡΗΣΗ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 22,
    title: "ΕΝΗΜΕΡΩΤΙΚΗ ΕΠΙΣΤΟΛΗ ΓΙΑ ΔΗΛΩΣΕΙΣ ΠΟΘΕΝ ΕΣΧΕΣ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 23,
    title: "ΕΥΡΩΚΛΙΝΙΚΗ - ΔΩΡΕΑΝ ΟΡΘΟΔΟΝΤΙΚΟΣ ΕΛΕΓΧΟΣ",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 24,
    title: "7η Γενική Συνέλευση (2018)",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 25,
    title: "Προσχολικός Έλεγχος - Ευρωκλινική Παίδων",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 26,
    title: "Συνεργασία ΤΕΑΑΠΛ με όμιλο ΝΝ για ασφάλιση αυτοκινήτων",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 27,
    title: "Προσφορά Ομίλου Ευρωκλινικής για Ορθοδοντικό Έλεγχο",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 28,
    title: "ΕΞΑΙΡΕΤΙΚΑ ΕΠΕΙΓΟΝ - Φορολογικές Βεβαιώσεις Πυροσβεστικού Σώματος",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 29,
    title: "Όμιλος Ευρωκλινική - Προσφορά για ημέρα γυναίκας",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 30,
    title: "Όμιλος Ευρωκλινική - Προσφορά Μαστογραφίας",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 31,
    title: "Παροχές και Προνόμια Υγείας Ομίλου Ευρωκλινικής",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 32,
    title: "Δελτίο Τύπου - 9/5/2016",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 33,
    title:
      "Φορολογικές βεβαιώσεις και Ετήσια Ενημερωτικά Δελτία για το έτος 2015",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 34,
    title:
      "Εκλογές για την ανάδειξη νέου ΔΣ, Ελεγκτικής Επιτροπής και Αντιπροσώπων νομών Επικρατείας",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 35,
    title: "Σύγκληση 4ης Γενικής Συνέλευσης",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 36,
    title:
      "Φορολογικές βεβαιώσεις και Ετήσια Ενημερωτικά Δελτία για το έτος 2014",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 37,
    title: "Δελτίο Τύπου - Κοπή Πίτας 2014",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 38,
    title: "Δελτίο Τύπου - 10/03/2014",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 39,
    title: "Δελτίο Τύπου - 25/10/2011",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
  {
    id: 40,
    title: "Δελτίο Τύπου - 19/10/2011",
    created: " Δημιουργήθηκε : 02 Αυγούστου 2023",
  },
];

function Anakoinwseis() {
  const [data, setData] = useState(myList);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    smoothScrollToTop();
  };

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen main-container ">
      <div className="mx-auto container" style={{ maxWidth: "80%" }}>
        <div className="text-center pt-4">
          <h1 className="text-3xl text-custom-new-blue font-bold">
            Ανακοινώσεις
          </h1>
        </div>
        <div className={`flex justify-center pt-8`}>
          {/* ReactPaginate component */}
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="bg-blue-600 text-white"
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageClassName="cursor-pointer  inline-block px-3  hover:bg-blue-600 hover:text-white rounded-full"
            pageLinkClassName="page-link "
            previousClassName={` custom-previous inline-block px-2`}
            previousLinkClassName="page-link"
            nextClassName={` custom-next inline-block px-2`}
            nextLinkClassName="page-link"
            forcePage={currentPage}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {subset.map((card) => (
            <div
              key={card.id}
              style={{ backgroundColor: "rgb(37,63,91)" }}
              className="block mt-5 "
            >
              <div className="flex justify-center align-middle mt-5">
                <img
                  className="rounded-t-lg transition ease-in-out hover:scale-105 duration-1000"
                  src={closed}
                  alt=""
                  style={{ width: "90%" }}
                />
              </div>
              <div className="p-6 ml-5">
                <h5 className="mb-2 text-xl font-medium leading-tight text-white">
                  {card.title}
                </h5>
                <p>
                  <small className=" text-base text-white">{card.text}</small>
                </p>
                <button
                  type="button"
                  className="bg-white inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal mt-3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Συνεχιστε την αναγνωση
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="py-4">
          <div className={`flex justify-center pt-6`}>
            {/* ReactPaginate component */}
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={handlePageChange}
              containerClassName="pagination"
              activeClassName="bg-blue-600 text-white"
              previousLabel="<"
              nextLabel=">"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageClassName="cursor-pointer  inline-block px-3  hover:bg-blue-600 hover:text-white rounded-full"
              pageLinkClassName="page-link "
              previousClassName={` custom-previous inline-block px-2`}
              previousLinkClassName="page-link"
              nextClassName={` custom-next inline-block px-2`}
              nextLinkClassName="page-link"
              forcePage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anakoinwseis;
