import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skopos = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <article className="flex justify-center items-center min-h-screen py-5">
        <section className="bg-white-100 py-32 flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-3xl font-bold text-custom-new-blue mb-6 -mt-6"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              ΣΚΟΠΟΣ - ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ
            </h1>
            <p
              className="text-lg leading-7 text-gray-700 "
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Στο Ταμείο έχουν συσταθεί δύο κλάδοι επαγγελματικής ασφάλισης:
            </p>
            <p
              className="text-lg leading-10 text-gray-700 "
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <span>
                <strong>Κλάδος Εφάπαξ</strong>
              </span>
            </p>
            <p
              className="text-lg leading-10 text-gray-700 "
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Χορηγείται εφάπαξ το ποσό της ατομικής μερίδας του κάθε μέλους.
            </p>
            <p
              className="text-lg leading-10 text-gray-700 "
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <span>
                <strong>Κλάδος Αλληλεγγύης</strong>
              </span>
            </p>
            <p
              className="text-lg leading-10 text-gray-700 "
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Χορηγείται εφάπαξ βοήθημα για την αντιμετώπιση των κινδύνων
              μόνιμης ολικής αναπηρίας με ποσοστό άνω του 67% και του θανάτου
              στους νόμιμους κληρονόμους. Επίσης, χορηγείται βοήθημα για την
              νοσηλεία για όλες τις ημέρες πλέον των 8 ημερών.
            </p>
            <p
              className="text-lg leading-10 text-gray-700 "
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Για περισσότερες πληροφορίες, δείτε σχετικά τις ενότητες Εισφορές
              και Παροχές.
            </p>
            <p
              className="text-lg leading-10 text-gray-700 "
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Οι ως άνω κλάδοι έχουν οργανωτική, λογιστική και οικονομική
              αυτοτέλεια. Η υπαγωγή στην ασφάλιση του Ταμείου είναι προαιρετική.
              Όμως αν υποβληθεί αίτηση, η ασφάλιση του Μέλους είναι υποχρεωτική
              και για τους δύο κλάδους. Αίτηση για υπαγωγή στην ασφάλιση ενός
              μόνο από τους δύο κλάδους του Ταμείου, δεν γίνεται δεκτή.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Skopos;
