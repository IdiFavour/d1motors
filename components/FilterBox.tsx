/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function FilterBox() {
  return (
    <form>
      <div className="space-y-12 py-8 ">
        <div className=" border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-7">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Search Cars
            </h2>
            <div className="sm:col-span-2 sm:col-start-1">
              <div className="mt-2">
                <input
                  type="text"
                  name="car"
                  id="car"
                  placeholder="Car Name"
                  autoComplete="Cars"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Select Brands</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Select Model</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <div className="mt-2">
                <button
                  type="button"
                  className="rounded-md bg-white py-3.5 w-full text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
