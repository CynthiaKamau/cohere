import React from "react";

export const Donate = () => {
  return (
    <>
      <div className="w-full max-w-sm m-6">
        <div className="bg-gray-700 p-2">
          <p className="text-white">$167 still needed for this project </p>
        </div>

        <div className="w-full bg-grey-light mt-2 border border-gray-200">
          <div
            className="bg-orange-600 text-xs leading-none py-1 text-center text-white"
            style={{ width: "65%" }}
          ></div>
        </div>
        <div className="w-full max-w-sm mb-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-3 mt-3 ml-0 mr-0 pl-0 pr-0 ">
            <span className="text-orange-600 m-0 font-bold">Only 3 days left </span> to fund
            this project.
          </p>

          <p className="mb-3">
            Join the 42 other donors who have already supported this project.
            Every dollar helps.
          </p>

          <div className="px-8 pb-5">
            <div className="flex justify-between">
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300  w-24 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="$50"
                required
              />
              <a
                href="/"
                className="text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Give Now
              </a>
            </div>
          </div>

          <div className="m-2 ml-8 text-left">
            <a href="/" className="text-blue-500">
              Why give $50?
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a
            href="/"
            className="border border-gray-300 text-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Save for later
          </a>
          <a
            href="/"
            className="border border-gray-300 text-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Tell yout friends
          </a>
        </div>
      </div>
    </>
  );
};
