import React from 'react';
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import Table from '../components/table/Table'
import customerList from '../assets/JsonData/customers-list.json'


export default function Analytics() {
    const chartOptions = {
        series: [{
            name: 'Online Customers',
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
        }, {
            name: 'Store Customers',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
        }],
        options: {
            color: ['#6ab04c', '#2980b9'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: false
            }
        }
    }


    const customerTableHead = [
        '',
        'name',
        'email',
        'phone',
        'total orders',
        'total spend',
        'location'
    ]

    const renderHead = (item, index) => <th key={index}>{item}</th>

    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.total_orders}</td>
            <td>{item.total_spend}</td>
            <td>{item.location}</td>
        </tr>
    )


    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <>
            <div className="col-12">
                <div className="card full-height">
                    {/* chart */}
                    <Chart
                        options={themeReducer === 'theme-mode-dark' ? {
                            ...chartOptions.options,
                            theme: { mode: 'dark' }
                        } : {
                            ...chartOptions.options,
                            theme: { mode: 'light' }
                        }}
                        series={chartOptions.series}
                        type='line'
                        height='300px'
                    />
                </div>
            </div>

            <div>
                <h2 className="page-header">
                    customers Analytics
                </h2>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">
                                <Table
                                    limit='10'
                                    headData={customerTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={customerList}
                                    renderBody={(item, index) => renderBody(item, index)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
