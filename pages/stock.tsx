import { Spacer } from "@chakra-ui/react";

export default function Stock() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8 ">
      <form>
        <div className="space-y-12 my-24 ">
          <div className=" border-gray-900/10 pb-12">
            <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
              Not Sure About Which Vehicle to Pick? Find it Here!
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-7">
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

      <div className="space-y-12 my-18 ">
        <div className=" border-gray-900/10 pb-12">
          <div className="mt-14 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4 lg:grid-cols-8">
            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="car-card mt-2 p-2.5 border bg-white">
                <div className="flex card-header">
                  <div>
                    <p className="text-sm font-semibold">BMW XZ-520 Auto</p>
                    <p className="text-xs font-semibold text-gray-400">BMW</p>
                  </div>
                  <Spacer />
                  <div>
                    <div className="rounded-md bg-white py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      AED 20000
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src="/bmw.png" alt="car" width={350} height={350} />
                </div>
                <div className="card-footer flex justify-between text-sm">
                  <li className="list-none">2020</li>
                  <li>Automatic</li>
                  <li>Dubai</li>
                  <li>Petrol</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
