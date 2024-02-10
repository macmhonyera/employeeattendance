
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function Barchar() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Fruit and Veg',
                    backgroundColor: documentStyle.getPropertyValue('--blue-800'),
                    borderColor: documentStyle.getPropertyValue('--blue-800'),
                    data: [65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 40]
                },
                {
                    label: 'Dry Stock',
                    backgroundColor: documentStyle.getPropertyValue('#ad4577'),
                    borderColor: documentStyle.getPropertyValue('#ad4577'),
                    data: [28, 48, 40, 19, 86, 27, 90,80, 81, 56, 55, 40]
                }, {
                    label: 'Frozen Stock',
                    backgroundColor: documentStyle.getPropertyValue('--blue-800'),
                    borderColor: documentStyle.getPropertyValue('--blue-800'),
                    data: [65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 40]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        