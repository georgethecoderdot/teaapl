import React from "react";

function UsefulLinks() {
  const links = [
    {
      title: "Διεθνής Ένωση Αστυνομικών – Ελληνικό Εθνικό Τμήμα",
      description: "Icon: Police badge or shield",
      link: "#",
    },
    {
      title:
        "Υπουργείο Εργασίας, Κοινωνικής Ασφάλισης και Κοινωνικής Αλληλεγγύης",
      description: "Icon: Group of people or handshake",
      link: "#",
    },
    {
      title: "Γενική Γραμματεία Κοινωνικών Ασφαλίσεων",
      description: "Icon: Shield with a cross or health symbol",
      link: "#",
    },
    {
      title: "Επαγγελματική ασφάλιση",
      description: "Icon: Briefcase or helmet",
      link: "#",
    },
    {
      title: "EIOPA – Ευρωπαϊκή Αρχή Ασφαλίσεων και Επαγγελματικών Συντάξεων",
      description: "Icon: EU flag or symbol with shield",
      link: "#",
    },
    {
      title: "Επιτροπή Κεφαλαιαγοράς",
      description: "Icon: Bar chart or graph",
      link: "#",
    },
    {
      title: "Ελληνική Ένωση Ταμείων Επαγγελματικής Ασφάλισης",
      description: "Icon: Piggy bank or savings icon",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-wrap mt-16">
      {links.map((link, index) => (
        <div key={index} className="w-1/4 p-4">
          <div className="border rounded p-4 hover:border-blue-500 transition-border duration-300 hover:bg-gray-100">
            <img className="h-10 w-10 mb-2" src={link.icon} alt="Link icon" />
            <h4 className="text-blue-600">{link.title}</h4>
            <p className="text-gray-600 text-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
              {link.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsefulLinks;
