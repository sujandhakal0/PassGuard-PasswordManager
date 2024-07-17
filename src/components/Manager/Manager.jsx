import React, { useState } from "react";
import { MdAddLink } from "react-icons/md";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [form, setForm] = useState({ url: "", username: "", password: " " });
  const savePassword = () => {};

  return (
    <>
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#031326_40%,#505867_100%)]"></div>
      </div>

      <div className="mycontainer py-16 ">
        <div className="logo font-bold text-[#e0e1e4] text-2xl relative text-center flex justify-center">
          <span className="absolute -left-4 text-3xl text-[#F39C12]">
            &lsaquo;
          </span>
          PASS<span className="text-[#F39C12]">GUARD</span>
          <span className="absolute -right-4 text-3xl text-[#e0e1e4]">
            &rsaquo;
          </span>
        </div>

        <p className="text-[#f39d12e0] text-center">
          Emphasizes the "guarding" or protection of your passwords.
        </p>
        <div className="text-[#e0e1e4] flex flex-col p-4 mt-4 g">
          <form action="" className="flex flex-col gap-3 items-center">
            <input
              type="text"
              className="bg-[#1d283b] border-orange-200 border rounded-full px-5 py-2 text-[#e0e1e4] w-full focus:outline-none"
              placeholder="URL"
              value={form.url}
            />
            <div className="flex  mt-2 gap-4 justify-between w-full">
              <input
                type="text"
                className="bg-[#1d283b] border-orange-200 border rounded-full py-2 px-5  text-[#e0e1e4]  focus:outline-none w-full"
                placeholder="EMIL OR USERNAME"
                value={form.username}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-[#1d283b] border-orange-200 border rounded-full py-2 px-5 text-[#e0e1e4] focus:outline-none w-full"
                  placeholder="PASSWORD"
                  value={form.password}
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <GoEyeClosed /> : <GoEye />}
                </span>
              </div>
            </div>
            <button
              className="flex justify-center items-center bg-[#f3a812c8] hover:bg-[#f39d12e0] border  hover:border-2 hover:border-x-[#031326] rounded-full py-3 px-5 mt-4 gap-2 text-white w-[190px] font-bold"
              onClick={savePassword}
            >
              ADD <MdAddLink className="text-2xl " />
            </button>
          </form>

          <div className="passwords mt-3">
            <h2 className="text-xl font-bold">PASSWRODS  </h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3 text-center">
              <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase dark:text-white  bg-[#f39912c5]" >
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-[#f39912c5]"
                    >
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-[#f39912c5]"
                    >
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Laptop PC
                    </td>
                    <td className="px-6 py-4">$1999</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Accessories
                    </td>
                    <td className="px-6 py-4">$99</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      Google Pixel Phone
                    </th>
                    <td className="px-6 py-4">Gray</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">Phone</td>
                    <td className="px-6 py-4">$799</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Wearables
                    </td>
                    <td className="px-6 py-4">$999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
