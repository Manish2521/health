import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Select from "react-select";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    contact: "",
    email: "",
    doctor: "",
    date: "",
    time: "",
  });
  const [appointments, setAppointments] = useState([
    { patientName: "John Doe", contact: "1234567890", email: "john@example.com", doctor: "Dr. John Doe", date: "2024-12-01", time: "10:00 AM" },
    { patientName: "Jane Smith", contact: "9876543210", email: "jane@example.com", doctor: "Dr. Jane Smith", date: "2024-12-01", time: "11:00 AM" },
    { patientName: "Michael Johnson", contact: "4567891230", email: "michael@example.com", doctor: "Dr. Emily Davis", date: "2024-12-02", time: "12:00 PM" },
    { patientName: "Emily Davis", contact: "3216549870", email: "emily@example.com", doctor: "Dr. Mark Wilson", date: "2024-12-02", time: "02:00 PM" },
    { patientName: "David Wilson", contact: "6549873210", email: "david@example.com", doctor: "Dr. Mark Wilson", date: "2024-12-03", time: "03:00 PM" },
  ]);

  const doctorOptions = [
    { value: "Dr. John Doe", label: "Dr. John Doe (Cardiologist)" },
    { value: "Dr. Jane Smith", label: "Dr. Jane Smith (Neurologist)" },
    { value: "Dr. Emily Davis", label: "Dr. Emily Davis (Orthopedist)" },
    { value: "Dr. Mark Wilson", label: "Dr. Mark Wilson (Pediatrician)" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDoctorChange = (selectedOption) => {
    setFormData({ ...formData, doctor: selectedOption.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, formData]);
    setFormData({
      patientName: "",
      contact: "",
      email: "",
      doctor: "",
      date: "",
      time: "",
    });
    toggleModal();
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Appointments</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          onClick={toggleModal}
        >
          <FaPlus className="mr-2" />
          New Appointment
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-12">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Doctor</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{appointment.patientName}</td>
                <td className="px-6 py-4">{appointment.contact}</td>
                <td className="px-6 py-4">{appointment.email}</td>
                <td className="px-6 py-4">{appointment.doctor}</td>
                <td className="px-6 py-4">{appointment.date}</td>
                <td className="px-6 py-4">{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">New Appointment</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <Select
              options={doctorOptions}
              onChange={handleDoctorChange}
              placeholder="Select Doctor"
              className="mb-4"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />

            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleModal}
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
          onClick={toggleModal}
        ></div>
      )}
    </div>
  );
};

export default Appointment;
