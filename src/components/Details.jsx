// import React from 'react'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import BoltIcon from '@mui/icons-material/Bolt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StatusBar from './StatusBar';


const Details = () => {
  return (
    <div className="flex p-10 justify-between h-120 bg-white gap-500">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-3xl">Theme Park Site</h1>
                    <div className="flex p-3 gap-2 items-center left-0 mb-[-30px] ml-[-13px]">
                        <AddLocationIcon style={{ fontSize: '30px' }} />
                        <p>Address of the site</p>
                    </div>
                    <div className="flex p-3 items-center justify-center gap-3 left-0 ml-[-13px]">
                        <div className="flex items-center justify-center gap-1 bg-gray-300">
                            <BoltIcon style={{ fontSize: '18px' }} />
                            <p className=" text-gray-600">Adult Rides</p>
                        </div>

                        <div className="flex items-center justify-center gap-1 bg-gray-300">
                            <WaterDropIcon style={{ fontSize: '18px' }} />
                            <p className=" text-gray-600">Family Rides</p>
                        </div>

                        <div className="flex items-center justify-center gap-1 bg-gray-300">
                            <TwoWheelerIcon style={{ fontSize: '18px' }} />
                            <p className=" text-gray-600">Restaurants</p>
                        </div>

                        <div className="flex items-center justify-center gap-1 bg-gray-300">
                            <WorkspacePremiumIcon
                                style={{ fontSize: '18px' }}
                            />
                            <p className=" text-gray-600">Premium</p>
                        </div>
                    </div>
                    <button className="flex p-2 items-center justify-evenly gap-2 border-2 border-blue-500 w-4/6">
                        <ArrowOutwardIcon
                            style={{ color: 'blue-500', fontSize: '22px' }}
                        />
                        <p className="underline text-blue-500">
                            View opportunity on polygon
                        </p>
                    </button>
                    <div className="flex gap-7 items-center justify-center left-0 ml-[-4px] mt-4">
                        <div className="flex flex-col justify-center">
                            <p className=" text-2xl font-bold">200 Acres</p>
                            <p className="left-0 text-gray-500">Area</p>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className=" text-2xl font-bold">5 Lacks</p>
                            <p className="left-0 text-gray-500">
                                Starting price
                            </p>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className=" text-2xl font-bold">10 days</p>
                            <p className="left-0 text-gray-500">
                                Remaning Days
                            </p>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className=" text-2xl font-bold">2.5 years</p>
                            <p className="left-0 text-gray-500">Next check</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col right-0 gap-2">
                    <button className=" bg-blue-700 text-white px-32 py-3">
                        Complete
                    </button>
                    <button className="flex items-center justify-center gap-2 border-2 border-blue-700 py-4 px-2 w-3/6 ml-auto">
                        <p className="text-blue-500">Site Visit</p>
                        <ArrowForwardIosIcon
                            style={{ color: 'blue', fontSize: '15px' }}
                        />
                    </button>

                    <div className="flex flex-col mt-5">
                        <div className="flex items-center justify-between">
                            <p className=" text-blue-700 font-bold text-2xl">
                                Rs 20,00,000
                            </p>
                            <p className=" text-gray-500 text-sm">
                                Rs 65,00,000
                            </p>
                        </div>
                        {/* bart */}
                        <StatusBar OurPrice={2000000} Mrp={6500000} />
                    </div>
                </div>
            </div>
  )
}

export default Details