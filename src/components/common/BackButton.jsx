import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    };

    return (
        <button className="h-[52px] w-[52px] rounded-[15px] bg-[#31394C] flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <i className="flaticon-arrow-point-to-right text-white leading-[0]"></i>
        </button>
    );
};

export default BackButton;