import { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ToolBar = () => {
    const [index, setIndex] = useState(1);
    return (
        <div className="flex flex-row p-10 items-center justify-between bg-white h-24">
            <p className="text-3xl font-bold">Choose your new site</p>
            <div className="flex p-2 gap-20 items-center justify-center">
                <div
                    className="flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => setIndex(1)}
                >
                    <div className="flex justify-center items-center cursor-pointer">
                        {index === 1 && (
                            <FiberManualRecordIcon
                                style={{ fontSize: '18px' }}
                            />
                        )}
                        <p>1</p>
                    </div>
                    <p className="text-black mt-[-10px]">____</p>
                </div>

                <div
                    className="flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => setIndex(2)}
                >
                    <div className="flex justify-center items-center cursor-pointer">
                        {index === 2 && (
                            <FiberManualRecordIcon
                                style={{ fontSize: '18px' }}
                            />
                        )}
                        <p>2</p>
                    </div>
                    <p className="text-black mt-[-10px]">____</p>
                </div>

                <div
                    className="flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => setIndex(3)}
                >
                    <div className="flex justify-center items-center cursor-pointer">
                        {index === 3 && (
                            <FiberManualRecordIcon
                                style={{ fontSize: '18px' }}
                            />
                        )}
                        <p>3</p>
                    </div>
                    <p className="text-black mt-[-10px]">____</p>
                </div>
            </div>
        </div>
    );
};

export default ToolBar;
