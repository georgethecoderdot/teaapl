import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, x: -50, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

const TimelineEvent = ({ year, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
      className="flex flex-col items-start relative"
    >
      <div className="mb-2 text-sm sm:text-base relative group">
        <motion.span
          className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-custom-new-blue transition-transform transform group-hover:scale-150"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
        ></motion.span>
        <motion.span
          className="text-custom-new-blue group-hover:text-custom-new-blue-hover transition-transform transform group-hover:scale-105"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          {year}
        </motion.span>
      </div>
      <motion.h3
        className="text-lg sm:text-xl font-semibold text-white tracking-wide mb-6 shadow-lg p-2 rounded-lg bg-white dark:bg-custom-new-blue"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="bg-white dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className=" lg:ml-[-96px] mb-10">
              <h3 className="text-2xl sm:text-3xl text-custom-new-blue font-semibold">
                ΣΗΜΕΙΑ ΟΡΟΣΗΜΟ
              </h3>
            </div>
            <div className="col-span-12 space-y-8 relative px-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              {[
                { year: "1994", title: "Ίδρυση ΛΑΜΔΕΑ" },
                { year: "2009", title: "Ίδρυση ΤΕΑΕΤΔΕΑ" },
                {
                  year: "2014",
                  title: "Έναρξη καταβολής εισφορών από Πυροσβέστες",
                },
                {
                  year: "2016",
                  title: "Σύσταση Αμοιβαίου Κεφαλαίου κλάδου Εφάπαξ",
                },
                {
                  year: "2019",
                  title: "Έναρξη καταβολής εισφορών από Λιμενικούς",
                },
              ].map((event) => (
                <TimelineEvent
                  key={event.year}
                  year={event.year}
                  title={event.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
