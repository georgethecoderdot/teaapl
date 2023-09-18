import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Dioikisoi = () => {
  const [visiblePopupIndex, setVisiblePopupIndex] = useState(null);
  const [membersData, setMembersData] = useState([]);
  const [tableMembersData, setTableMembersData] = useState([]);
  const popupRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/dioikisis");
        const formattedData = response.data.data.map((item) => {
          return {
            name: item.attributes.Name,
            role: item.attributes.Name.split(" - ")[0],
            description: item.attributes.Description || "Δεν υπάρχει περιγραφή",
            position: item.attributes.Position,
          };
        });

        const tableMembers = formattedData.filter(
          (member) => member.position !== null
        );
        setMembersData(formattedData);
        setTableMembersData(tableMembers);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData();
    AOS.init();
    AOS.refresh();
  }, []);

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setVisiblePopupIndex(null);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const Popup = ({ isVisible, member }) => {
    const handlePopupClick = (event) => {
      event.stopPropagation();
    };

    return (
      <div
        onClick={() => setVisiblePopupIndex(null)}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div
          onClick={handlePopupClick}
          className="popup bg-white rounded-lg shadow-md p-8 w-100 max-w-md"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <button
            onClick={() => setVisiblePopupIndex(null)}
            className="py-1 px-3 text-custom-new-blue rounded absolute top-0 right-0"
          >
            X
          </button>
          <h1 className="name">{member.name}</h1>
          <p className="additional-text">{member.role}</p>
          <p className="">{member.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section>
        <h1 className="absolute left-32 top-24 text-3xl font-bold text-custom-new-blue border-b-2 border-custom-new-blue pb-2 md:left-32 md:top-24">
          ΔΙΟΙΚΗΣΗ:
        </h1>
        <div className="flex justify-center mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {membersData.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-12 mb-15 w-full md:w-4/5 max-w-md"
              >
                <h2 className="m-0 text-2xl text-custom-new-blue">
                  {member.name}
                </h2>
                <p className="mt-2 text-custom-new-blue text-sm">
                  {member.role}
                </p>
                <button
                  onClick={() => setVisiblePopupIndex(index)}
                  className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
        {visiblePopupIndex !== null && (
          <Popup
            isVisible={visiblePopupIndex !== null}
            member={membersData[visiblePopupIndex]}
          />
        )}
        <div className="flex flex-col items-center mt-10 mb-8 md:ml-[-100px]">
          <div className="font-bold text-custom-new-blue text-lg leading-7 border-b-2 border-custom-new-blue pb-2 cursor-pointer mb-4">
            ΕΞΕΛΕΓΚΤΙΚΗ ΕΠΙΤΡΟΠΗ:
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full md:max-w-2xl">
            {tableMembersData.map((member, index) => {
              console.log("Member name: ", member.name);
              return (
                <div
                  key={index}
                  className="border p-4 bg-white shadow-md rounded-lg hover:bg-custom-new-blue hover:text-white transition-all duration-300 w-full md:w-1/2"
                >
                  <div className="font-bold mb-2">{member.position}</div>
                  <div>{member.name ? member.name.split(" - ")[0] : "N/A"}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dioikisoi;
