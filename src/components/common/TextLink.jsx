import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TextLink = ({ text, linkText, linkUrl }) => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center mt-[100px] mb-14 text-[15px]">
            <div className="text-[#6F7582]">{text}</div>
            <a onClick={() => navigate(linkUrl)} className="font-semibold text-[#2CCD70] mr-1 cursor-pointer">{linkText}</a>
        </div>
    );
}

TextLink.propTypes = {
    text: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired
};

export default TextLink;