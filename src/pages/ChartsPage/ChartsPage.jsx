import react from "react";
import "./ChartsPage.css";
import { AreaChart, XAxis, YAxis, Area, Tooltip, LineChart, Line, CartesianGrid, Legend } from 'recharts';

const ChartsPage = () => {

    const data = [
        {
            "month": "март",
            "uv": 4000,
            "судебные дела": 0,
            //   "amt": 2400
        },
        {
            "month": "",
            "uv": 3000,
            "судебные дела": 70,
            "amt": 2210
        },
        {
            "month": "",
            "uv": 2000,
            "судебные дела": 60,
            "amt": 2290
        },
        {
            "month": "июнь",
            "uv": 2780,
            "судебные дела": 140,
            "amt": 2000
        },
        {
            "month": "",
            "uv": 2780,
            "судебные дела": 170,
            "amt": 2000
        },
        {
            "month": "",
            "uv": 2780,
            "судебные дела": 180,
            "amt": 2000
        },
        {
            "month": "сентябрь",
            "uv": 2780,
            "судебные дела": 190,
            "amt": 2000
        },
        {
            "month": "",
            "uv": 2780,
            "судебные дела": 125,
            "amt": 2000
        },
        {
            "month": "",
            "uv": 2780,
            "судебные дела": 50,
            "amt": 2000
        },
        {
            "month": "декабрь",
            "uv": 2780,
            "судебные дела": 0,
            "amt": 2000
        },

    ]

    return (
        <div className="chart_courts">
            <h3 className="chart-title">Как часто юрлица и персонал обвиняли в <br/> нарушении антиковидных норм</h3>
            <h2 className="chart-subtitle">Судебные дела за 2020 год</h2>
            <LineChart width={800} height={400} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="судебные дела" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

export default ChartsPage;