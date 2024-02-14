import { useState } from 'react';

const customCheckBoxStyle = {
    init: {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        width: '1rem',
        height: '1rem',
        border: '2px solid #202328', // Initial border is transparent
        // borderRadius: '0.25rem',
        outline: 'none',
        backgroundColor: 'transparent', // Initial background color is transparent
    },
    checked: {
        backgroundColor: '#202328', // Background color changes to gray when checked
        borderColor: '#4a5568', // Border color changes to gray when checked
        width: '1rem',
        height: '1rem',
        border: '2px solid #4a5568', // Initial border is transparent
        // borderRadius: '0.25rem',
        outline: 'none',
    },
};

const divEnabledStyle = 'flex flex-col gap-10 p-3 bg-white';
const divDisbledStyle = 'opacity-40 bg-transparent bg-gray-200';

const ProfileComplete = () => {
    const [isChecked, setIsChecked] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleChange = (index) => {
        setIsChecked((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
    return (
        <>
            <div className="flex flex-col gap-10 bg-white p-3">
                <div className="flex left-0 gap-3 items-center">
                    <input
                        type="checkbox"
                        style={
                            isChecked[0]
                                ? customCheckBoxStyle.checked
                                : customCheckBoxStyle.init
                        }
                        checked={isChecked[0]}
                        // onChange={() => handleChange(0)}
                    />
                    <p className=" text-xl font-bold">Complete Profile</p>
                </div>
                <button
                    onClick={() => handleChange(0)}
                    className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto"
                >
                    Complete
                </button>
            </div>

            <div
                className={
                    (!isChecked[0] && divDisbledStyle) || divEnabledStyle
                }
            >
                <div className="flex left-0 gap-3 items-center">
                    <input
                        type="checkbox"
                        style={
                            isChecked[1]
                                ? customCheckBoxStyle.checked
                                : customCheckBoxStyle.init
                        }
                        checked={isChecked[1]}
                        // onChange={() => handleChange(1)}
                    />
                    <p className=" text-xl font-bold">Step 1</p>
                </div>
                <button
                    onClick={() =>
                        isChecked[0] && !isChecked[2] && handleChange(1)
                    }
                    className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto"
                >
                    Pay
                </button>
            </div>

            <div
                className={
                    (!isChecked[1] && divDisbledStyle) || divEnabledStyle
                }
            >
                <div className="flex left-0 gap-3 items-center">
                    <input
                        type="checkbox"
                        style={
                            isChecked[2]
                                ? customCheckBoxStyle.checked
                                : customCheckBoxStyle.init
                        }
                        checked={isChecked[2]}
                        // onChange={() => handleChange(2)}
                    />
                    <p className=" text-xl font-bold">Step 2</p>
                </div>
                <button
                    onClick={() =>
                        isChecked[1] && !isChecked[3] && handleChange(2)
                    }
                    className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto"
                >
                    Pay
                </button>
            </div>

            <div
                className={
                    (!isChecked[2] && divDisbledStyle) || divEnabledStyle
                }
            >
                <div className="flex left-0 gap-3 items-center">
                    <input
                        type="checkbox"
                        style={
                            isChecked[3]
                                ? customCheckBoxStyle.checked
                                : customCheckBoxStyle.init
                        }
                        checked={isChecked[3]}
                        // onChange={() => handleChange(3)}
                    />
                    <p className=" text-xl font-bold">Step 3</p>
                </div>
                <button
                    onClick={() =>
                        isChecked[2] && !isChecked[4] && handleChange(3)
                    }
                    className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto"
                >
                    Complete
                </button>
            </div>

            <div
                className={
                    (!isChecked[3] && divDisbledStyle) || divEnabledStyle
                }
            >
                <div className="flex left-0 gap-3 items-center">
                    <input
                        type="checkbox"
                        style={
                            isChecked[4]
                                ? customCheckBoxStyle.checked
                                : customCheckBoxStyle.init
                        }
                        checked={isChecked[4]}
                        // onChange={() => handleChange(4)}
                    />
                    <p className=" text-xl font-bold">Step 4</p>
                </div>
                <button
                    onClick={() =>
                        isChecked[3] && !isChecked[5] && handleChange(4)
                    }
                    className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto"
                >
                    Complete
                </button>
            </div>

            <div
                className={
                    (!isChecked[4] && divDisbledStyle) || divEnabledStyle
                }
            >
                <div className="flex left-0 gap-3 items-center">
                    <input
                        type="checkbox"
                        style={
                            isChecked[5]
                                ? customCheckBoxStyle.checked
                                : customCheckBoxStyle.init
                        }
                        checked={isChecked[5]}
                        // onChange={() => handleChange(5)}
                    />
                    <p className=" text-xl font-bold">Step 5</p>
                </div>
                <button
                    onClick={() => isChecked[4] && handleChange(5)}
                    className="flex items-center justify-center bg-blue-700 text-white gap-2 p-3 w-3/6 ml-auto"
                >
                    Complete
                </button>
            </div>
        </>
    );
};

export default ProfileComplete;
