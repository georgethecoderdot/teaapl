import React from "react";

const Fact = ({ icon, number, title }) => (
  <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-2xl m-4">
    <div className="text-white text-5xl mb-4">{icon}</div>
    <h2 className="text-white text-3xl font-bold mb-2 font-sans text-rendering-optimizeLegibility leading-none tracking-normal">
      {number}
    </h2>
    <h3 className="text-white text-opacity-80">{title}</h3>
  </div>
);

const FundFigures = () => (
  <div className=" py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <h3 className="text-center sm:text-left pb-0 text-2xl sm:text-3xl leading-tight m-0 mb-4 pt-0 font-semibold text-custom-new-blue">
          ΣΗΜΑΝΤΙΚΑ ΜΕΓΕΘΗ ΤΟΥ ΤΑΜΕΙΟΥ
        </h3>
      </div>

      <div className="flex flex-wrap justify-around">
        <Fact icon="👥" number="6.661" title="ασφαλισμένοι" />
        <Fact
          icon="💶"
          number="26.482.283 €"
          title="σύνολο εφάπαξ ατομικών λογαριασμών"
        />
        <Fact icon="💶" number="987.550 €" title="ποσό παροχών αλληλεγγύης" />
        <Fact icon="💶" number="8.467.993 €" title="ποσό παροχών εφάπαξ" />
      </div>
    </div>
  </div>
);

export default FundFigures;
