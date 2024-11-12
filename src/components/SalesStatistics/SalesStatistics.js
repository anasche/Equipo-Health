import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesStatistics = () => {
    // Data for the chart
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
            {
                label: 'Sales',
                data: [800, 1200, 2500, 1500, 1600, 2431, 1200, 1000, 2300, 1500],
                backgroundColor: 'rgba(66, 133, 244, 0.6)', // Light blue color similar to your chart
                borderRadius: 10,
            },
        ],
    };

    // Configuration options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
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
        <div
            style={{
                width: '100%',
                maxWidth: '400px', // Constrain the width
                height: '250px', // Constrain the height
                backgroundColor: '#f5f7fa',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div
                    style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#333',
                        borderRadius: '50%',
                        marginRight: '10px',
                    }}
                >
                    <i
                        style={{
                            color: 'white',
                            fontSize: '16px',
                            display: 'block',
                            textAlign: 'center',
                            lineHeight: '24px',
                        }}
                    >
                        📊
                    </i>
                </div>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#333' }}>Sales Statistics</h3>
            </div>
            <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 40px)' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default SalesStatistics;
