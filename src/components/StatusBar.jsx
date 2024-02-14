// import React from 'react';

const StatusBar = ({OurPrice, Mrp}) => {
    // Calculate percentage
    const percentage = (OurPrice / Mrp) * 100;
    console.log("Percentage:", percentage);

    // Set width for status bar
    const statusBarWidth = `${percentage}%`;
    console.log("StatusBarWidth:", statusBarWidth);

    return (
        <div className="w-full bg-gray-200 h-2">
            <div className="bg-blue-700 h-full" style={{ width: statusBarWidth }}></div>
        </div>
    );
};

export default StatusBar;
