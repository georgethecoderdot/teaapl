import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const MemberCard = ({ id, fullName, pos }) => {
  return (
    <div className="border rounded-lg p-6 mb-6 shadow-md hover:bg-custom-new-blue hover:text-white transition-all duration-300 h-48 w-80 flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-2">{`${id}. ${fullName}`}</h2>
      <p className="text-center">{pos}</p>
    </div>
  );
};

const Ependytiki = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const results = await axios.get(
        "http://localhost:1337/api/ependytiki-epitropis"
      );
      console.log(results.data.data);
      setData(results.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section>
        <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24">
          ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ
        </h1>
        <div className="flex flex-col items-center mt-20 mb-96">
          {data.map((elem, index) => {
            return (
              <MemberCard
                id={index + 1}
                fullName={elem.attributes.Fullname}
                pos={elem.attributes.Position}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Ependytiki;
