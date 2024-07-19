import React, { useState, useEffect } from "react";
import { MdAddLink } from "react-icons/md";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [passwordList, setPasswordList] = useState([]);

  const getPasswords = async () => {
    try {
      let req = await fetch("http://localhost:3000/");
      let passwords = await req.json();
      console.log(passwords);
      setPasswordList(passwords);
    } catch (error) {
      console.error("Error fetching passwords:", error);
    }
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const [form, setForm] = useState({ url: "", username: "", password: "" });

  const savePassword = async () => {
    setPasswordList([...passwordList, { ...form, id: uuidv4() }]);
    // localStorage.setItem(
    //   "passwords",
    //   JSON.stringify([...passwordList, { ...form, id: uuidv4() }])
    // );
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: form.id }),
    });
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: uuidv4() }),
    });

    // Show toast after the promise resolves (updates complete)
    toast("Password Saved ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setForm({ url: "", username: "", password: "" });
  };

  const deletePassword = async (id) => {
    let confirm = window.confirm("Do you really want to delete this password?");
    if (confirm) {
      // Update the passwordList state
      setPasswordList(passwordList.filter((list) => list.id !== id));

      // Update the local storage
      // localStorage.setItem(
      //   "passwords",
      //   JSON.stringify(passwordList.filter((list) => list.id !== id))
      // );
      let res = await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      toast("Password Deleted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
    // console.log("clicked", id)
    setForm({...passwordList.filter((i) => i.id == id)[0], id:id });
    setPasswordList(passwordList.filter((list) => list.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copy = (text) => {
    toast.success("Text Copied!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <div className=" bg-[#031326] min-h-[83vh]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="md:mycontainer  py-16  ">
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
              onChange={handleChange}
              type="text"
              className="bg-[#1d283b] border-orange-200 border rounded-full px-5 py-2 text-[#e0e1e4] w-full focus:outline-none"
              placeholder="URL"
              value={form.url}
              name="url"
            />
            <div className="flex flex-col md:flex-row mt-2 gap-4 justify-between w-full">
              <input
                type="text"
                className="bg-[#1d283b] border-orange-200 border rounded-full py-2 px-5  text-[#e0e1e4]  focus:outline-none w-full"
                placeholder="EMIL OR USERNAME"
                value={form.username}
                name="username"
                onChange={handleChange}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-[#1d283b] border-orange-200 border rounded-full py-2 px-5 text-[#e0e1e4] focus:outline-none]"
                  placeholder="PASSWORD"
                  value={form.password}
                  name="password"
                  onChange={handleChange}
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
            <h2 className="text-xl font-bold">PASSWRODS </h2>
            {passwordList.length === 0 && <div> No passwords </div>}
            {passwordList.length != 0 && (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3 text-center">
                <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase dark:text-white  bg-[#f39912c5]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-gray-50 dark:bg-[#f39912c5]"
                      >
                        URL
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Username
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Passwords
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {passwordList.map((password) => (
                      <tr
                        key={password.url}
                        className="border-b border-gray-200  "
                      >
                        <th scope="row" className="px-6 py-4 font-medium ">
                          <div className="flex justify-center items-center gap-3">
                            <a href={password.url} target="_blank">
                              {password.url}
                            </a>
                            <FaRegCopy
                              className="text-white cursor-pointer hover:text-[#f39912c5]"
                              onClick={() => copy(password.url)}
                            />
                          </div>
                        </th>
                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center gap-3">
                            {password.username}
                            <FaRegCopy
                              className="text-white cursor-pointer hover:text-[#f39912c5]"
                              onClick={() => copy(password.username)}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 ">
                          <div className="flex justify-center items-center gap-3">
                            {"*".repeat(password.password.length)}
                            <FaRegCopy
                              className="text-white cursor-pointer hover:text-[#f39912c5]"
                              onClick={() => copy(password.password)}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4  cursor-pointer flex gap-2">
                          <div
                            className="flex justify-center items-center gap-3 text-white hover:text-[#f39912c5]"
                            onClick={() => {
                              deletePassword(password.id);
                            }}
                          >
                            Delete
                          </div>
                          |
                          <div
                            className="flex justify-center items-center gap-3 text-white hover:text-[#f39912c5]"
                            onClick={() => editPassword(password.id)}
                          >
                            Edit
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
