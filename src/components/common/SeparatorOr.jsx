import React from 'react';
import PropTypes from 'prop-types';

const SeparatorOr = ({ separatorText }) => {
    return (
        <div className="h-[1px] my-8 bg-[#31394C] flex justify-center items-center relative">
            <div className="text-center text-[17px] text-[#6F7582] bg-[#212735] px-3">{separatorText}</div>
        </div>
    );
}

SeparatorOr.propTypes = {
    separatorText: PropTypes.string
};

SeparatorOr.defaultProps = {
    separatorText: 'یا'
};

export default SeparatorOr;