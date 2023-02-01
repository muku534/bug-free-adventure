import React from 'react';
import { Box } from "@mui/material";
import Header from "../../Componets/Header";
import LineChart from "../../Componets/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;