import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { useLocation } from 'react-router-dom';

const PlanManagement = () => {
    const location = useLocation()
    const { data: plan } = location.state
    return (
        <>
            <PageHeader title="مدیریت پلن" hasNotification hasBackButton />

            <div className="px-8 py-2 mt-16 relative">
                <div
                    className={`relative rounded-[25px] py-6 px-8 min-h-[220px] overflow-hidden ${plan.cardGradient}`}
                >
                    <div
                        className="bg-[#000] absolute w-[110px] h-[110px] rounded-[20px] rotate-[65deg] opacity-5 left-[-10px] z-[1] top-[-10px]"
                    ></div>
                    <div
                        className="bg-[#000] absolute w-[180px] h-[180px] rounded-[20px] rotate-45 opacity-5 left-[-40px] z-[1] top-[-30px]"
                    ></div>
                    <div className="relative z-10">
                        <div className="flex items-center">
                            <img src="/svg/vuesax-bulk-bookmark-2.svg" />
                            <div className="text-white mr-2 text-[17px]">پلن {plan.holdingTime} روزه</div>
                        </div>

                        <div className="flex items-center justify-center my-10">
                            <div className="text-white text-[26px] font-bold">انقضا :</div>
                            <div className="text-white text-[26px] font-bold mx-1">63</div>
                            <div className="text-white text-[26px] font-bold">روز دیگر</div>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <div className="text-[14px] text-white opacity-50">
                                    مدت زمان هولد سرمایه
                                </div>
                                <div className="text-[17px] text-white font-semibold">
                                    {plan.holdingTime} روز
                                </div>
                            </div>

                            <div>
                                <div className="text-[14px] text-white opacity-50">
                                    میزان سود دریافتی
                                </div>
                                <div className="text-[17px] text-white font-semibold">
                                    {plan.profit} درصد
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 mt-9">
                    <div
                        className="rounded-[25px] bg-[#31394C] flex items-center justify-center p-6"
                    >
                        <div>
                            <div
                                className="bg-[#414B61] w-[55px] h-[55px] flex items-center mx-auto justify-center rounded-full"
                            >
                                <img src="/svg/vuesax-bulk-home-trend-up2.svg" alt="" />
                            </div>

                            <div
                                className="text-[14px] font-semibold text-[#6F7582] my-3 text-center"
                            >
                                مقدار سرمایه گذاری
                            </div>
                            <div className="text-[26px] text-white font-semibold text-center">
                                ${plan.amountOfInvestment}
                            </div>
                        </div>
                    </div>

                    <div
                        className="rounded-[25px] bg-[#31394C] flex items-center justify-center p-6"
                    >
                        <div>
                            <div
                                className="bg-[#414B61] w-[55px] h-[55px] flex items-center mx-auto justify-center rounded-full"
                            >
                                <img
                                    src="/svg/vuesax-bulk-home-trend-down.svg"
                                    alt=""
                                />
                            </div>

                            <div
                                className="text-[14px] font-semibold text-[#6F7582] my-3 text-center"
                            >
                                مقدار سود دریافتی
                            </div>
                            <div className="text-[26px] text-white font-semibold text-center">
                                ${plan.amountOfInvestment * plan.profit / 100}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="flex items-center justify-between mt-10 border-b-2 border-[#31394C] pb-6"
                >
                    <div className="pl-2">
                        <div className="text-[17px] font-semibold text-white">
                            تمدید خودکار پلن
                        </div>
                        <div className="text-[14px] font-semibold text-[#6F7582] mt-2">
                            تمدید خودکار پس از اتمام بازه زمانی پلن
                        </div>
                    </div>

                    <div>
                        <input className="tgl tgl-light" id="cb1" type="checkbox" />
                        <label className="tgl-btn" htmlFor="cb1"></label>
                    </div>
                </div>

                <div
                    className="text-[17px] text-[#6F7582] text-center mt-[120px] leading-8"
                >
                    تسویه حساب پلن فیروز بصورت روزانه و یک نوبت <br />
                    انجام می گیرد
                </div>
                <a
                    id="openModalBtn"
                    href="#"
                    className="mt-5 block rounded-[14px] bg-[#3F353D] text-[#EB876B] py-4 text-center text-[20px] font-semibold mb-6"
                >
                    حذف پلن
                </a>
            </div>

            <div id="cover" className="fixed transition-all inset-0 max-w-[600px] mx-auto bg-[#212735] opacity-70 z-20 opacity-0 invisible">
            </div>

            <div
                id="deleteModal"
                className="fixed max-w-[600px] inset-x-0 mx-auto transition-all duration-40 text-center -bottom-[140px] opacity-0 invisible bg-[#31394C] z-40 px-8 pt-16 pb-10 rounded-t-[25px]"
            >
                <div
                    className="flex items-center justify-center w-[95px] h-[95px] bg-[#EB876B] rounded-full mx-auto"
                >
                    <img src="/svg/vuesax-bulk-danger.svg" alt="" />
                </div>
                <div className="text-white text-[21px] font-semibold my-4">مدیریت پنل</div>
                <div className="text-[17px] text-[#6F7582] text-center mb-16 leading-8">
                    با حذف پلن اطلاعات آن غیرقابل برگشت بوده و <br /> مبلغ حداکثر تا 3 روز به
                    حسابتان واریز میگردد
                </div>

                <a
                    href="#"
                    className="mt-5 block rounded-[14px] bg-[#EB876B] text-white py-4 text-center text-[20px] font-semibold mb-4"
                >
                    تایید و حذف
                </a>

                <a
                    id="backwardToPanelBtn"
                    href="#"
                    className="mt-5 block rounded-[14px] bg-[#414B61] text-white py-4 text-center text-[20px] font-semibold"
                >
                    بازگشت
                </a>
            </div>
        </>
    );
}

export default PlanManagement;