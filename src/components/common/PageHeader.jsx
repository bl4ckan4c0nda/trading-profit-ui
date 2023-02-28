import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PageHeader = ({ title, hasNotification, hasBackButton, onBackClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    };
    return (
        <div
            className="px-8 flex items-center justify-center relative z-10 pt-12"
        >
            {hasBackButton && <button
                onClick={handleClick}
                className="h-[60px] w-[60px] rounded-[15px] bg-[#31394C] flex items-center justify-center absolute right-0 mx-8"
            >
                <i className="flaticon-arrow-point-to-right text-white leading-[0]"></i>
            </button>}

            <div className="text-white text-[21px] font-semibold">{title}</div>

            {hasNotification && <div
                className="w-[60px] h-[60px] rounded-[15px] bg-[#31394C] flex items-center justify-center absolute left-0 mx-8"
            >
                <div
                    className="absolute w-2 h-2 rounded-full bg-[#FFC400] right-3 top-3"
                ></div>
                <img src="/svg/vuesax-bulk-lamp-charge.svg" />
            </div>}
        </div>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    hasNotification: PropTypes.bool,
    hasBackButton: PropTypes.bool,
    onBackClick: PropTypes.func
}

PageHeader.defaultProps = {
    hasNotification: false,
    hasBackButton: false
};

export default PageHeader;