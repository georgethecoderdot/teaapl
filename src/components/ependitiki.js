import React from "react";

const Ependytiki = () => {
  return (
    <div>
      <section>
        <h1 className=" text-center text-2xl underline font-bold text-custom-new-blue mt-24 ">
          ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ
        </h1>
        <div className="flex flex-col items-center">
          <table className="mb-40 mt-20">
            <thead className="bg-gray-200">
              <th className="p-5"></th>
              <th className="p-5">Ονοματεπώνυμο</th>
              <th className="p-5">Θέση</th>
            </thead>
            <tbody className=" border border-gray-300">
              <tr className="hover:bg-custom-new-blue hover:text-white">
                <td>1.</td>
                <td>ΧΡΥΣΑΦΗΣ Σωτήριος</td>
                <td>Πρόεδρος</td>
              </tr>
              <tr className="hover:bg-custom-new-blue hover:text-white">
                <td>2.</td>
                <td>ΛΑΓΟΣ Δημήτριος</td>
                <td>Μέλος</td>
              </tr>
              <tr className="hover:bg-custom-new-blue hover:text-white">
                <td>3.</td>
                <td>ΣΥΜΕΩΝΙΔΗΣ Παναγιώτης</td>
                <td>Μέλος</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Ependytiki;
