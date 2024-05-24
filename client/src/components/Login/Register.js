import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";

export const Register = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientDOB: "",
    patientGender: "",
    patientAge: "",
    patientBloodGroup:"",
    patientContactInfo: "",
    patientEmail: "",
    patientAddress: "",
    patientPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      if (response.data.success) {
        setMessage(response.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setTimeout(() => {
        setError(""); 
      }, 2000);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center max-h-screen">
        <Navbar />
        <div className="mt-10 overflow-y-auto h-screen">
          <section className="bg-red dark:bg-gray-900 font">
            <div className="flex flex-col items-center justify-center py-10 pb-2"></div>
            <div className="py-4 px-2 pb-6 md:py-0 md:pb-6 md:px-2 mx-auto max-w-4xl lg:py-18">
              <div className="shadow-2xl border-2 border-gray-400  rounded px-5 py-1 bg-white">
                <h2 className="mb-7 mt-5 text-2xl text-center font-bold text-gray-900 dark:text-white">
                  Welcome Patient 🏥
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="patientName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="patientName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                        value={formData.patientName}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="patientDOB"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="patientDOB"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Date of Birth"
                        required
                        onChange={handleChange}
                        value={formData.patientDOB}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="patientGender"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Gender
                      </label>
                      <select
                        id="patientGender"
                        name="patientGender"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                        value={formData.patientGender}
                      >
                        <option>select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="patientAge"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        name="patientAge"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Age"
                        required
                        onChange={handleChange}
                        value={formData.patientAge}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="patientBloodGroup"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Blood Group
                      </label>
                      <input
                        type="text"
                        name="patientBloodGroup"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Blood Group"
                        required
                        onChange={handleChange}
                        value={formData.patientBloodGroup}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="patientContactInfo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contact No
                      </label>
                      <input
                        type="number"
                        name="patientContactInfo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Mobile Number"
                        required
                        onChange={handleChange}
                        value={formData.patientContactInfo}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="patientEmail"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="patientEmail"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email Address"
                        required
                        onChange={handleChange}
                        value={formData.patientEmail}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="patientPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="patientPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                        value={formData.patientPassword}
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="patientAddress"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                      </label>
                      <textarea
                        id="patientAddress"
                        rows="5"
                        name="patientAddress"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                        onChange={handleChange}
                        value={formData.patientAddress}
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-5 pb-3">
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Register
                    </button>
                  </div>
                </form>
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
            </div>
          </section>
        </div>
      </div>

    </>
  );
};

export default Register;
