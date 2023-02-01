import React from "react";
import { Box } from "@mui/material";
import Header from "../../Componets/Header";
import PieChart from "../../Componets/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    );
};

export default Pie;