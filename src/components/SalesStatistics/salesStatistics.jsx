import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaChartSimple } from "react-icons/fa6";

// Register the components
ChartJS?.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesStatistics = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          stepSize: 500,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.raw.toLocaleString()}`, // Format tooltip values
        },
      },
    },
  };

  return (
    <div className="bg-[#f5f7fa] rounded-[20px] h-full p-3 flex flex-col justify-between">
      <div className="flex bg-white w-fit py-[6px] pl-2 pr-3 rounded-3xl items-center space-x-2 mb-2">
        <div className="bg-black p-2 rounded-full">
          <FaChartSimple className="h-4 w-4 text-white" />
        </div>
        <span className="text-[16px] font-medium">Sales Statistics</span>
      </div>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesStatistics;
