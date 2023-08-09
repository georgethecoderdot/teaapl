import React from "react";

const Timeline = () => {
  return (
    <section className="bg-custom-blue dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="text-center mb-6">
              <h3 className="text-3xl text-custom-new-blue font-semibold mr-96">
                ΤΕΑΑΠΛ
              </h3>
            </div>
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              {/* Event 1 */}
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-custom-new-blue">
                <div className="absolute -left-20 top-1 text-dark">1994</div>
                <h3 className="text-xl font-semibold tracking-wide mb-6">
                  Ίδρυση ΛΑΜΔΕΑ
                </h3>
              </div>

              {/* Event 2 */}
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-custom-new-blue">
                <div class="absolute -left-20 top-1 text-dark">2009</div>
                <h3 class="text-xl font-semibold tracking-wide mb-6">
                  Ίδρυση ΤΕΑΕΤΔΕΑ
                </h3>
              </div>

              {/* Event 3 */}
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-custom-new-blue">
                <div class="absolute -left-20 top-1 text-dark">2014</div>
                <h3 class="text-xl font-semibold tracking-wide mb-6">
                  Έναρξη καταβολής εισφορών από Πυροσβέστες
                </h3>
              </div>

              {/* Event 4 */}
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-custom-new-blue">
                <div class="absolute -left-20 top-1 text-dark">2016</div>
                <h3 class="text-xl font-semibold tracking-wide mb-6">
                  Σύσταση Αμοιβαίου Κεφαλαίου κλάδου Εφάπαξ
                </h3>
              </div>

              {/* Event 5 */}
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-custom-new-blue">
                <div class="absolute -left-20 top-1 text-dark">2019</div>
                <h3 class="text-xl font-semibold tracking-wide ">
                  Έναρξη καταβολής εισφορών από Λιμενικούς
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
