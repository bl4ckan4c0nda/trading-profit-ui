import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, type, icon, onClick }) => {
    const colors = {
        primary: { bg: 'bg-[#2CCD70]', text: 'text-white' },
        secondary: { bg: 'bg-[#31394C]', text: 'text-white' },
        tertiary: { bg: 'bg-white', text: 'text-[#12192C]' },
        danger: { bg: 'bg-[#3F353D]', text: 'text-[#EB876B]' }
    };
    const color = colors[type];
    return (
        <button onClick={onClick} className={`z-10 w-full flex items-center justify-center rounded-[14px] py-4 text-center text-[20px] font-semibold ${color.bg} ${color.text}`} >
            {icon && <img src={icon} className="ml-6" />}
            {title}
        </button >
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
    icon: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'primary'
};

export default Button;