import React from "react";
import GlobeComponent from "./GlobeComponent";

const ContactForm = () => {
  return (
    <div className="pt-12 pb-12 bg-gradient-to-r from-[#051923] to-[#032a4a] relative font-poppins text-base leading-[30px] font-medium text-white">
      <div className="px-5 md:px-20 block">
        <div className="mx-auto max-w-[1300px] clearfix">
          <h2 className="text-3xl pt-5 pb-10 text-[#0582ca]">ΕΠΙΚΟΙΝΩΝΙΑ</h2>
          <div className="w-full md:w-1/2 mb-12 float-left relative pr-5">
            <p className="text-xl leading-[35px] mb-6">
              Είτε θέλετε να δουλέψετε μαζί μας , είτε έχετε κάποια απορρία που
              θα θέλατε να σας λύσουμε ή οτιδήποτε άλλο έχετε στο μυαλό σας ,
              αφήστε μας ενα μήνυμα και θα επικοινωνήσουμε μαζί σας το
              συντομότερο δυνατό.
              <i className="fa fa-smile-o"></i>{" "}
            </p>
            <p className="text-lg">
              <b>ΔΙΕΥΘΥΝΣΗ:</b> Βερανζέρου 30 , Αθηνα , 10432 <br />
              <b>E-MAIL:</b> info@teaapl.gr <br />
              <b>ΤΗΛΕΦΩΝΟ:</b> 210 5202638 <br />
            </p>
          </div>
          <div className="text-xl leading-[35px] mb-6 w-full md:w-1/2 float-left pl-5">
            <form
              id="contact"
              className="p-10 md:p-16 bg-gradient-to-r from-[#024a80] to-[#013b5e] rounded-lg shadow-lg"
            >
              <p className="mb-5">
                <input
                  id="name"
                  type="text"
                  name="your-name"
                  placeholder="Όνομα"
                  required
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white"
                />
              </p>
              <p className="mb-5">
                <input
                  id="contact-email"
                  type="email"
                  name="your-email"
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white"
                />
              </p>
              <p className="mb-5">
                <input
                  id="subject"
                  type="text"
                  name="your-subject"
                  placeholder="Θέμα"
                  required
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white"
                />
              </p>
              <p className="mb-5">
                <textarea
                  id="message"
                  name="your-message"
                  placeholder="Μήνυμα"
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white h-40"
                ></textarea>
              </p>
              <p className="mb-0">
                <input
                  type="submit"
                  value="ΑΠΟΣΤΟΛΗ"
                  className="bg-[#0582ca] hover:bg-[#036aa1] text-white py-3 px-6 rounded-md cursor-pointer transition-all duration-300"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
