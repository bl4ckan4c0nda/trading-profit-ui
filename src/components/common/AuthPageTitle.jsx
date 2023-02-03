import React from 'react';
import PropTypes from 'prop-types';

const AuthPageTitle = ({ primaryText, secondaryText }) => {
    return (
        <>
            {primaryText && <h1 className="text-white font-bold text-[26px] mt-6 mb-2">{primaryText}</h1>}
            {secondaryText && <h2 className="text-white text-[17px]">{secondaryText}</h2>}
        </>
    );
}

AuthPageTitle.propTypes = {
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
}

export default AuthPageTitle;