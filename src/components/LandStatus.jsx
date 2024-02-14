// import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

const divEnabledStyle = 'flex flex-col gap-10 p-3 bg-white';
const divDisbledStyle = 'opacity-40 bg-transparent bg-gray-200';

const LandStatus = () => {
    return (
        <>
            {/* LandStatusdDiv */}
            <div className="flex flex-col gap-1 mt-10">
                <div className="bg-white">
                    <h1 className="text-xl font-semibold m-3 items-center">
                        Land Status
                    </h1>
                </div>

                <div className="flex flex-col gap-5 bg-white p-5">
                    <div className="flex left-0 gap-3 items-center">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-2 outline-0 bg-transparent"
                        />
                        <p className=" text-xl font-bold">Title</p>
                    </div>
                    <button className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto">
                        CTA
                    </button>
                </div>

                <div className="flex flex-row bg-white p-5 justify-between">
                    <div className="flex gap-7 items-center justify-center">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-2 outline-0 bg-transparent mt-[-70px]"
                        />
                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-base">Title</p>
                            <p className=" text-gray-400 font-thin text-sm">
                                Subtext
                            </p>
                            <h1 className="text-3xl text-blue-600 font-bold">
                                Completion Text
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <p className="font-medium text-base">12/12/2023</p>
                        <button className="flex items-center justify-center gap-2 border-2 border-blue-700 py-3 px-5 w-25 ml-auto">
                            <p className="text-blue-500">CTA</p>
                            <DownloadIcon
                                style={{
                                    color: 'blue',
                                    fontSize: '15px',
                                }}
                            />
                        </button>
                    </div>
                </div>

                <div className="flex flex-row bg-white p-5 justify-between">
                    <div className="flex gap-7 items-center justify-center">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-2 outline-0 bg-transparent mt-[-70px]"
                        />
                        <div className="flex flex-col gap-2 mb-auto">
                            <p className="font-medium text-base">Title</p>
                            {/* <p className=' text-gray-400 font-thin text-sm'>Subtext</p> */}
                            <h1 className="text-3xl text-blue-600 font-bold">
                                Completion Text
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <p className="font-medium text-base">12/12/2023</p>
                        <button className="flex items-center justify-center gap-2 border-2 border-blue-700 py-3 px-5 w-25 ml-auto">
                            <p className="text-blue-500">CTA</p>
                            <DownloadIcon
                                style={{
                                    color: 'blue',
                                    fontSize: '15px',
                                }}
                            />
                        </button>
                    </div>
                </div>

                <div className={divEnabledStyle && divDisbledStyle}>
                    <div className="flex left-0 gap-3 items-center">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-2 outline-0 bg-transparent"
                        />
                        <p className=" text-xl font-bold">Title</p>
                    </div>
                    <button className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto">
                        CTA
                    </button>
                </div>
            </div>
        </>
    );
};

export default LandStatus;
