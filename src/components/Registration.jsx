import React, { useState } from "react";

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [registrations, setRegistrations] = useState([
    {
      name: "John Doe",
      age: 25,
      gender: "Male",
      contact: "1234567890",
      address: "123 Main Street",
      symptoms: "Fever",
    },
    {
      name: "Jane Smith",
      age: 30,
      gender: "Female",
      contact: "9876543210",
      address: "456 Elm Street",
      symptoms: "Cough",
    },
    {
      name: "Michael Johnson",
      age: 35,
      gender: "Male",
      contact: "4567891230",
      address: "789 Oak Avenue",
      symptoms: "Headache",
    },
    {
      name: "Emily Davis",
      age: 28,
      gender: "Female",
      contact: "3216549870",
      address: "321 Pine Lane",
      symptoms: "Nausea",
    },
    {
      name: "David Wilson",
      age: 40,
      gender: "Male",
      contact: "6549873210",
      address: "987 Cedar Street",
      symptoms: "Chest Pain",
    },
    {
      name: "Sophia Taylor",
      age: 22,
      gender: "Female",
      contact: "7893216540",
      address: "654 Maple Court",
      symptoms: "Fatigue",
    },
    {
      name: "James Anderson",
      age: 45,
      gender: "Male",
      contact: "8529637410",
      address: "258 Willow Drive",
      symptoms: "Back Pain",
    },
    {
      name: "Olivia Brown",
      age: 32,
      gender: "Female",
      contact: "1472583690",
      address: "369 Birch Avenue",
      symptoms: "Shortness of Breath",
    },
    {
      name: "Benjamin Martin",
      age: 27,
      gender: "Male",
      contact: "9637418520",
      address: "159 Chestnut Street",
      symptoms: "Fever",
    },
    {
      name: "Chloe Garcia",
      age: 33,
      gender: "Female",
      contact: "2587419630",
      address: "753 Cypress Lane",
      symptoms: "Cough",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    contact: "",
    address: "",
    symptoms: "Fever",
  });


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

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrations([...registrations, formData]);
    setFormData({
      name: "",
      age: "",
      gender: "Male",
      contact: "",
      address: "",
      symptoms: "Fever",
    });
    toggleModal();
  };

  return (
    <div className="relative">
      <div
        className={`container mx-auto p-4 transition-all duration-300 ${
          isModalOpen ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={toggleModal}
          >
            Add New Registration
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 sm:px-6">Patient Name</th>
                <th className="px-4 py-3 sm:px-6">Age</th>
                <th className="px-4 py-3 sm:px-6">Gender</th>
                <th className="px-4 py-3 sm:px-6">Contact</th>
                <th className="px-4 py-3 sm:px-6">Address</th>
                <th className="px-4 py-3 sm:px-6">Symptoms</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td className="px-4 py-3 sm:px-6">{registration.name}</td>
                  <td className="px-4 py-3 sm:px-6">{registration.age}</td>
                  <td className="px-4 py-3 sm:px-6">{registration.gender}</td>
                  <td className="px-4 py-3 sm:px-6">{registration.contact}</td>
                  <td className="px-4 py-3 sm:px-6">{registration.address}</td>
                  <td className="px-4 py-3 sm:px-6">{registration.symptoms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Add New Registration</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
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
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <select
              name="symptoms"
              value={formData.symptoms}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            >
              <option value="Fever">Fever</option>
              <option value="Cough">Cough</option>
              <option value="Headache">Headache</option>
              <option value="Chest Pain">Chest Pain</option>
              <option value="Fatigue">Fatigue</option>
            </select>
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

export default Registration;
