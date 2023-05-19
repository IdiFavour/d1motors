import { Spacer } from "@chakra-ui/react";

export default function Featured() {
  return (
    <div className="space-y-12 my-24 ">
      <div className=" border-gray-900/10 pb-12">
        <h1 className="text-4xl text-center font-semibold leading-7 text-gray-900">
          Featured Cars
        </h1>
        <div className="mt-14 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4 lg:grid-cols-8">
          <div className="sm:col-span-2 sm:col-start-1">
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
                  <div className="rounded-md bg-sec py-1.5 px-1.5 w-full text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
  );
}
