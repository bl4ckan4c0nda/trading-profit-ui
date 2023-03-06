import React from 'react';
import PropTypes from 'prop-types';

const PlanList = ({ title, term, profit, min, max }) => {
    return (
        <div
            className="rounded-[25px] border-[2px] border-[#414B61] p-6 w-full"
        >
            <div
                className="flex items-center justify-between border-b-[2px] border-[#414B61] pb-4 mb-5"
            >
                <div>
                    <div
                        className="text-[18px] font-semibold text-white text-right mb-2"
                    >
                        {title}
                    </div>
                    <div className="text-[#6F7582] text-[14px]">سود تعلق گرفته</div>
                </div>

                <div className="text-[40px] text-white font-bold">%{profit}</div>
            </div>

            <div className="flex items-center">
                <div
                    className="w-[50px] h-[50px] rounded-full bg-[#414B61] flex items-center justify-center"
                >
                    <img
                        src="/svg/vuesax-bulk-home-trend-down.svg"
                        alt=""
                    />
                </div>
                <div className="mr-3">
                    <div className="text-right text-[14px] text-white opacity-50">
                        حداقل سرمایه
                    </div>
                    <div className="text-right text-[18px] font-semibold text-white">
                        %{min}
                    </div>
                </div>
            </div>

            <div
                className="flex items-center border-b-[2px] border-[#414B61] pb-4 mb-5 mt-5"
            >
                <div
                    className="w-[50px] h-[50px] rounded-full bg-[#414B61] flex items-center justify-center"
                >
                    <img
                        src="/svg/vuesax-bulk-home-trend-up2.svg"
                        alt=""
                    />
                </div>
                <div className="mr-3">
                    <div className="text-right text-[14px] text-white opacity-50">
                        حداکثر سرمایه
                    </div>
                    <div className="text-right text-[18px] font-semibold text-white">
                        %{max}
                    </div>
                </div>
            </div>

            <div className="text-right text-[14px] text-white opacity-50">
                مدت زمان هولد سرمایه
            </div>
            <div className="text-right text-[18px] font-semibold text-white">
                {term} روز
            </div>
        </div>
    );
}

PlanList.propTypes = {
    title: PropTypes.string.isRequired,
    term: PropTypes.number.isRequired,
    profit: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
}

export default PlanList;