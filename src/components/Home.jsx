import React, { useEffect, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";
import { FaEye, FaUserMd, FaProcedures, FaUsers } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement
);

const Home = ({ isDarkMode }) => {
  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Appointments",
        data: [120, 140, 100, 180, 200, 150, 210, 190, 220, 230, 240, 250],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.3)",
        fill: true,
      },
      {
        label: "Admissions",
        data: [80, 100, 90, 150, 170, 120, 180, 160, 190, 200, 210, 220],
        borderColor: "#22C55E",
        backgroundColor: "rgba(34, 197, 94, 0.3)",
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Patients Admitted",
        data: [40, 30, 50, 60, 70, 80, 90],
        backgroundColor: "#4F46E5",
      },
      {
        label: "Outpatient Visits",
        data: [30, 20, 40, 50, 60, 70, 80],
        backgroundColor: "#22C55E",
      },
    ],
  };

  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } min-h-screen p-6 overflow-x-hidden `}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center dark:bg-gray-800">
          <FaEye className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Total Appointments
            </h3>
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
              12,345
            </h2>
            <p className="text-green-500 text-sm">+3.5% ↑</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center dark:bg-gray-800">
          <FaUserMd className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Doctors on Duty
            </h3>
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
              120
            </h2>
            <p className="text-green-500 text-sm">+5% ↑</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center dark:bg-gray-800">
          <FaProcedures className="text-purple-500 text-3xl mr-4" />
          <div>
            <h3 className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Patients Admitted
            </h3>
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
              450
            </h2>
            <p className="text-green-500 text-sm">+2.2% ↑</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center dark:bg-gray-800">
          <FaUsers className="text-gray-900 text-3xl mr-4" />
          <div>
            <h3 className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Total Staff
            </h3>
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
              350
            </h2>
            <p className="text-green-500 text-sm">+1.8% ↑</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-gray-600 dark:text-gray-300 text-lg font-medium mb-4">
            Monthly Overview
          </h3>
          <Line ref={chartRef} data={lineChartData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-gray-600 dark:text-gray-300 text-lg font-medium mb-4">
            Weekly Patient Activity
          </h3>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
