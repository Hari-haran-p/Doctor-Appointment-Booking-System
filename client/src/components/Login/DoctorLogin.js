import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export const DoctorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const userData = {
    DoctorId:"",
    DoctorName: "",
    DoctorQualification: "",
    DoctorDesignation: "",
    DoctorMobile: "",
    DoctorStatus: "",
    DoctorRole:"",
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/doctor/login", { username, password });
      if (response.data.success) {
        setMessage(response.data.message);
        const user = (response.data.user);
        userData.DoctorId = user.DoctorId;
        userData.DoctorName =  user.DoctorName;
        userData.DoctorQualification = user.DoctorQualification;
        userData.DoctorDesignation = user.DoctorDesignation;
        userData.DoctorMobile = user.DoctorMobile;
        userData.DoctorStatus = user.DoctorStatus;
        userData.DoctorRole = user.DoctorRole;
        sessionStorage.setItem("doctor_key", JSON.stringify(userData));
        setTimeout(() => {
          navigate("/doctor/dashboard");
        }, 2000);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <>
      <div class="mt-7">

        <form onSubmit={handleLogin} class="space-y-4 w-full md:space-y-6">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              name="email"
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>

          <button
            type="submit"
            class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </button>
        </form>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          target="_blank"
          class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
        >
          <span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </span>
          <span class="ml-2">You don't have an account?</span>
        </a>

      </div>
      <div className="pt-5">
        {message ? (
          <div
            class="bg-green-100 border text-center border-green-400 text-green-700 px-4 py-3 rounded"
            role="alert"
          >
            <span class="block sm:inline">{message}</span>
          </div>
        ) : null}
        {error ? (
          <div
            class="bg-red-100 border text-center border-red-400 text-red-700 px-4 py-3 rounded"
            role="alert"
          >
            <span class="block sm:inline">{error}</span>
          </div>
        ) : null}
      </div>
    </>
  );
};
