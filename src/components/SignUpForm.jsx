// import React from 'react';
import { useEffect, useState } from 'react';
import './SignUpForm.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {

    const btnDisabledStyle = {
        'width': '110px',
        'height': '40px',
        'border-radius': '2px',
        'border': 'none',
        'outline': 'none',
        'color': 'white',
        'background': 'gray',
    };

    const btnEnabledStyle = {
        width: '110px',
        height: '40px',
        border: 'none',
        outline: 'none',
        color: 'white',
        'border-radius': '2px',
        background: '#007bff',
        // 'box-shadow': '0 4px #bbb',
    };

    const notifyEmail = () => {
        toast.error('Invalid email format');
    };

    const notifyPasswd = () => {
        toast.error('Password must be at least 8 characters long');
    };

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        country: '',
        age: '',
        password: '',
    });

    const [isFormComplete, setIsFormComplete] = useState(false);

    useEffect(() => {
        const formComplete =
            formData.email !== '' &&
            formData.name !== '' &&
            formData.country !== '' &&
            formData.age !== '' &&
            formData.password !== '';
        setIsFormComplete(formComplete);
    }, [formData]);

    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        let isValid = true;

        // Validate email
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            notifyEmail();
            isValid = false;
        }

        // Validate password
        if (formData.password.length < 8) {
            notifyPasswd();
            isValid = false;
        }

        setIsFormValid(isValid);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (validateForm()) {
        //     console.log('Form submitted:', formData);
        // } else {
        //     console.log('Form has errors. Please fix them.');
        // }
        validateForm();
    };

    return (
        <>
            <div className="Container">
                <h1 className="title">Sign in</h1>

                <form onSubmit={handleSubmit} className="formContaner">
                    <div className="formField">
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <input
                            type="text"
                            name="country"
                            placeholder="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <input
                            type="text"
                            name="age"
                            placeholder="age"
                            value={formData.age}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* {isFormComplete && ( */}
                    <button
                        style={
                            isFormComplete
                                ? {...btnEnabledStyle}
                                : {...btnDisabledStyle}
                        }
                        disabled={!isFormComplete}
                    >
                        Submit
                    </button>
                    {/* )} */}
                    {isFormValid && "form is valid!"}
                </form>
            </div>
        </>
    );
};

export default SignUpForm;
