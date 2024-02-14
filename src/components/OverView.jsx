// import React from 'react';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import MapImg from '../assets/map.png';

const OverView = () => {
    return (
        <>
            {/* left div... */}
            <div className="flex-1 flex flex-col gap-1">
                <div className="flex flex-col gap-5 bg-white p-10">
                    <h1 className="text-3xl font-medium">Overview</h1>
                    <p className=" font-medium">
                        empty throw allow parts think limited if top foreign
                        brick library cook dried ahead tiny harbor steam shorter
                        practice valley society ball bound struck vowel today
                        age molecular sun voice appearance jet balloon
                        immediately clothes row heading wear voyage radio sale
                        fall baseball ill industry cloud among anyway
                    </p>
                </div>

                <div className="flex flex-col gap-5 bg-white p-10">
                    <h1 className="text-3xl font-medium">Why ?</h1>
                    <p className=" font-medium">
                        empty throw allow parts think limited if top foreign
                        brick library cook dried ahead tiny harbor steam shorter
                        practice valley society ball bound struck vowel today
                        age molecular sun voice appearance jet balloon
                        immediately clothes row heading wear voyage radio sale
                        fall baseball ill industry cloud among anyway
                    </p>
                </div>

                <div className="flex flex-col gap-5 bg-white p-10">
                    <h1 className="text-3xl font-medium">What ?</h1>
                    <p className=" font-medium">
                        empty throw allow parts think limited if top foreign
                        brick library cook dried ahead tiny harbor steam shorter
                        practice valley society ball bound struck vowel today
                        age molecular sun voice appearance jet balloon
                        immediately clothes row heading wear voyage radio sale
                        fall baseball ill industry cloud among anyway
                    </p>
                </div>

                <div className="flex flex-col gap-3 bg-white p-10">
                    <h1 className="text-3xl font-medium">Landmarks</h1>

                    <div className="flex gap-2 items-center justify-between">
                        <div className="flex gap-2 items-center justify-between">
                            {/* logo */}
                            <LocalAirportIcon style={{ color: 'blue' }} />
                            <p className="text-xl text-blue-700">Airport</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-medium">100 km</p>
                            <p className="text-xs text-gray-400 ml-auto">
                                Airport 1
                            </p>
                        </div>
                    </div>

                    <hr className="border-b-2 border-gray-200" />

                    <div className="flex gap-2 items-center justify-between">
                        <div className="flex gap-2 items-center justify-between">
                            {/* logo */}
                            <LocalAirportIcon style={{ color: 'blue' }} />
                            <p className="text-xl text-blue-700">Airport</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-medium ml-auto">25 km</p>
                            <p className="text-xs text-gray-400 ml-auto">
                                Green Which Terminal
                            </p>
                        </div>
                    </div>

                    <hr className="border-b-2 border-gray-200" />

                    <div className="flex gap-2 items-center justify-between">
                        <div className="flex gap-2 items-center justify-between">
                            {/* logo */}
                            <AddRoadIcon style={{ color: 'blue' }} />
                            <p className="text-xl text-blue-700">Highway</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-medium ml-auto">25 km</p>
                            <p className="text-xs text-gray-400 ml-auto">
                                Highway number 5
                            </p>
                        </div>
                    </div>

                    <hr className="border-b-2 border-gray-200" />
                </div>
                <div className="flex flex-col gap-5 bg-white p-10">
                    <h1 className="text-3xl font-medium">Map</h1>
                    {/* image */}
                    <div className="w-50 h-50 overflow-hidden">
                        <img
                            src={MapImg}
                            alt="Map"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* button */}
                    <button className="flex items-center justify-center gap-2 border-2 border-blue-700 py-4 px-2 w-2/6 ml-auto">
                        <p className="text-blue-500">Schedule a call</p>
                        <ArrowForwardIosIcon
                            style={{ color: 'blue', fontSize: '15px' }}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default OverView;
