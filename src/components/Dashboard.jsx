import React from "react";
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

const Dashboard = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Patient Appointments",
        data: [50, 60, 70, 80, 90, 100, 120],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.3)",
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ["Doctors", "Nurses", "Admins", "Technicians", "Support Staff"],
    datasets: [
      {
        label: "Staff Count",
        data: [30, 50, 20, 10, 15],
        backgroundColor: ["#4F46E5", "#22C55E", "#E11D48", "#F97316", "#6366F1"],
      },
    ],
  };

  const pieChartData = {
    labels: ["OPD", "Inpatient", "Emergency", "Surgeries"],
    datasets: [
      {
        label: "Department Usage",
        data: [40, 30, 20, 10],
        backgroundColor: ["#4F46E5", "#22C55E", "#E11D48", "#F97316"],
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Earnings (Jan)", "Earnings (Feb)", "Earnings (Mar)", "Earnings (Apr)"],
    datasets: [
      {
        label: "Earnings",
        data: [12000, 15000, 17000, 20000],
        backgroundColor: ["#4F46E5", "#22C55E", "#E11D48", "#F97316"],
      },
    ],
  };

  const radarChartData = {
    labels: ["Cleanliness", "Staff Behavior", "Facilities", "Waiting Time", "Overall Satisfaction"],
    datasets: [
      {
        label: "Patient Feedback",
        data: [8, 9, 7, 6, 8],
        backgroundColor: "rgba(79, 70, 229, 0.3)",
        borderColor: "#4F46E5",
      },
    ],
  };

  const polarChartData = {
    labels: ["Pediatrics", "Cardiology", "Orthopedics", "Neurology", "General Medicine"],
    datasets: [
      {
        label: "Patient Distribution",
        data: [20, 30, 25, 15, 10],
        backgroundColor: ["#4F46E5", "#22C55E", "#E11D48", "#F97316", "#6366F1"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Chart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Monthly Appointments</h3>
          <Line data={lineChartData} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Staff Distribution</h3>
          <Bar data={barChartData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Department Usage</h3>
          <Pie data={pieChartData} />
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Monthly Earnings</h3>
          <Doughnut data={doughnutChartData} />
        </div>

        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Patient Feedback</h3>
          <Radar data={radarChartData} />
        </div>

        {/* Polar Area Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Patient Distribution by Department</h3>
          <PolarArea data={polarChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
