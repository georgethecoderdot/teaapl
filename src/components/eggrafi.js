import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import PDF from "../images/icon.png";

const Eggrafh = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Strapi
    axios
      .get("http://localhost:1337/api/eggrafis")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24">
        ΕΓΓΡΑΦΗ
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-14 ml-5 mr-5">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <React.Fragment key={index}>
              <div className="p-4 rounded-lg shadow-md border border-blue-400">
                <div className="underline text-black">
                  <ReactMarkdown>{item.attributes.eggrafi}</ReactMarkdown>
                </div>
                <ReactMarkdown
                  children={item.attributes.Eggrafh}
                  components={{
                    ul: ({ node, children }) => (
                      <ul style={{ listStyleType: "disc" }}>{children}</ul>
                    ),
                    li: ({ node, children }) => (
                      <li style={{ marginLeft: "20px" }}>{children}</li>
                    ),
                  }}
                />
              </div>
              <div className="p-4 rounded-lg shadow-md border border-blue-400">
                <p className="text-left text-1xl">
                  {item.attributes.Eggrafi_B}
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-md border border-blue-400">
                <p className="text-left text-1xl">
                  {item.attributes.Eggrafi_C}
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-md border border-blue-400">
                <ReactMarkdown
                  children={item.attributes.Eggrafi_D}
                  components={{
                    a: ({ node, children, ...props }) => {
                      // Check if the link is a mailto link
                      const isMailto =
                        props.href && props.href.startsWith("mailto:");

                      return (
                        <a
                          {...props}
                          style={{ color: isMailto ? "red" : "blue" }}
                          target={isMailto ? "_self" : "_blank"}
                          rel={isMailto ? "" : "noopener noreferrer"}
                        >
                          {children}
                        </a>
                      );
                    },
                    ul: ({ node, children }) => (
                      <ul style={{ listStyleType: "disc" }}>{children}</ul>
                    ),
                    li: ({ node, children }) => (
                      <li style={{ marginLeft: "20px" }}>{children}</li>
                    ),
                  }}
                />
              </div>
              <div className="p-4 col-span-2 rounded-lg shadow-md border border-blue-400 mb-5">
                <ReactMarkdown
                  children={item.attributes.Eggrafi_E}
                  components={{
                    a: ({ node, children, ...props }) => {
                      const isElectronicSubmission =
                        children[0] === "Ηλεκτρονική Υποβολή";
                      const colorClass = isElectronicSubmission
                        ? "text-red-500"
                        : "text-blue-500";
                      const hoverColorClass = isElectronicSubmission
                        ? "hover:text-blue-900"
                        : "hover:text-red-900";

                      return (
                        <a
                          {...props}
                          className={`${colorClass} ${hoverColorClass} hover:underline`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      );
                    },
                    ul: ({ node, children }) => (
                      <ul style={{ listStyleType: "disc" }}>{children}</ul>
                    ),
                    li: ({ node, children }) => (
                      <li style={{ marginLeft: "20px" }}>
                        <i
                          className="fa-solid fa-link text-blue-500"
                          style={{ marginRight: "8px" }}
                        ></i>
                        {children}
                      </li>
                    ),
                  }}
                />
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Eggrafh;
