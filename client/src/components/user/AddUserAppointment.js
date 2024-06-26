import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserDoctorSearch } from "./UserDoctorSearch";
import { UserSidebar } from "../navbar/UserSidebar";


export const AddUserAppointment = () => {
  const navigate = useNavigate();

  const [profile, setprofile] = useState();
  const today = new Date().toISOString().split("T")[0]; // Get current date in yyyy-mm-dd format
  const [selectedDate, setSelectedDate] = useState("");

  const [doctor, setDoctor] = useState("");

  const [DoctorshowModal, setDoctorshowModal] = React.useState(false);

  const handleDateChange = (event) => {
    const selected = new Date(event.target.value);
    if (selected.getDay() === 0) {
      event.target.value = "";
      setSelectedDate("");
      alert("Sundays are holiday 🎉. Please select another date. 📅");
    } else {
      setFormData({
        ...formData,
        appointmentDate: event.target.value,
      });
    }
  };

  const [formData, setFormData] = useState({
    appointmentStatus: "booked",
    appointmentRemark: "booked by patient",

    // paymentStatus: "not paid",
    medicalrecordStatus: false,
  });

  function submitpatient(e) {
    console.log(formData);
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/appointment", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data);
        toast.success("Appointment Created 📅", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate("/user/appointment");
        }, 3000);
      })

      .catch((error) => {
        // Handle any errors that occurred during the request
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log(error.response.status);

          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          //console.log(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        //console.log(error.config);
      });
  }

  useEffect(() => {
    const profile = () => {
      var item_value = JSON.parse(sessionStorage.getItem("student_key"));
      const patientdata = {
        patient: {
          PatientId: item_value.PatientId,
          PatientName: item_value.PatientName
        },
      };
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...patientdata
      }));
      setprofile(item_value);
    };
    profile();
  }, []);

  function selecteddoctor(data) {
    // console.log(data);
    const doctordata = {
      appointmentFees: data.doctorFees,
      doctor: {
        DoctorId: data.DoctorId,
        DoctorName: data.DoctorName,
      },
    };
    // console.log(data);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...doctordata,
    }));
    setDoctorshowModal(false);
  }
console.log(formData);
  return (
    <>
      <UserSidebar />

      <div class="p-2 md:p-4 min-h-screen bg-gray-200 sm:ml-64">
        <div class=" p-2 md:p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {/* bread crumbs  */}
          <div class="flex w-full mb-4 rounded bg-white dark:bg-gray-800">
            <nav
              class="flex w-full px-5 py-3 text-gray-700 border border-white rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
              aria-label="Breadcrumb"
            >
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center ">
                  <a
                    href="#"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Appointments
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      New
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* form */}
          <div class="flex mb-4 rounded bg-white dark:bg-gray-800 ">
            <div className="w-full p-3 border border-white rounded-lg">
              <h1 className="text-2xl font-bold mb-6 dark:text-white">Appointment Schedule</h1>

              <form onSubmit={(e) => submitpatient(e)}>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="name" className="w-full md:w-1/4 dark:text-white">
                    Name:{" "}
                    <p className="text-sm	 text-gray-400">
                      <small> [ Full Name ] </small>
                    </p>
                  </label>
                  <input
                    type="text"
                    name=""
                    disabled
                    value={profile ? profile.PatientName : ""}
                    placeholder={profile ? profile.PatientName : ""}
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="email" className="w-full md:w-1/4 dark:text-white">
                    Mobile number:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={profile ? profile.PatientMobile : ""}
                    disabled
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                  <label htmlFor="email" className="w-full md:w-1/4 dark:text-white">
                    Doctor:
                  </label>

                  <div className="flex w-full md:w-3/4">
                    <input
                      type="text"
                      id="username-success"
                      disabled
                      placeholder={
                        formData.doctor
                          ? formData.doctor.DoctorName
                          : "select doctor"
                      }
                      className="flex-grow px-2 py-1 border border-gray-300 rounded"
                    />

                    <a
                      onClick={() => setDoctorshowModal(true)}
                      className="ml-3 w-34 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      select doctor
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap mb-4">
                  <label htmlFor="date" className="w-full md:w-1/4 dark:text-white">
                    Date:
                    <p className="text-sm	 text-red-400">
                      <small>[ Sunday are holiday ]</small>
                    </p>
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    min={today}
                    onChange={handleDateChange}
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="time" className="w-full md:w-1/4 dark:text-white">
                    Time:
                    <p className="text-sm	 text-red-400">
                      <small>[ working hours are 9am to 6pm ]</small>
                    </p>
                  </label>
                  <input
                    type="time"
                    id="time"
                    min="08:00"
                    required
                    max="20:00"
                    disabled={!formData.appointmentDate}
                    step="1800" // 30-minute interval
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointmentTime: e.target.value,
                      })
                    }
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="email" className="w-full md:w-1/4 dark:text-white">
                    Reason:
                  </label>
                  <textarea
                    type="email"
                    id="email"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointmentReason: e.target.value,
                      })
                    }
                    row="3"
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* select doctor modal */}
      {DoctorshowModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full max-w-3xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => setDoctorshowModal(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="pt-4 py-3 lg:px-5">
                  <h3 className="pb-2 text-xl font-medium border-b text-gray-900 dark:text-white">
                    Search Doctor
                  </h3>
                  <div>
                    <UserDoctorSearch selecteddoctor={selecteddoctor} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* end of select doctor modal */}
    </>
  );
};