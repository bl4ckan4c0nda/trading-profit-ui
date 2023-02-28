import React from 'react';

import ActivePlanCards from "../components/ActivePlanCards";


function Dashboard() {






    return (
        <>
            <div className="px-8 pt-12 flex items-center justify-between">
                <div className="w-[60px] h-[60px] rounded-[15px] overflow-hidden relative">
                    <img src="/images/profile_user.jpg" />
                </div>

                <div
                    className="w-[60px] h-[60px] rounded-[15px] bg-[#31394C] flex items-center justify-center relative"
                >
                    <div
                        className="absolute w-2 h-2 rounded-full bg-[#FFC400] right-3 top-3"
                    ></div>
                    <img src="/svg/vuesax-bulk-lamp-charge.svg" />
                </div>
            </div>



            <ActivePlanCards />


            <div className="flex items-center justify-between px-8 min-[357px]:px-16">
                <a href="#" className="flex items-center">
                    <img src="/svg/vuesax-bulk-bag.svg" />
                    <div className="text-white text-[17px] font-semibold pr-2">خرید پلن</div>
                </a>

                <a href="#" className="flex items-center">
                    <img src="/svg/vuesax-bulk-wallet-add.svg" />
                    <div className="text-white text-[17px] font-semibold pr-2">
                        افزایش اعتبار
                    </div>
                </a>
            </div>

            <div className="px-8 mt-10">
                <div className="bg-[#31394C] p-6 rounded-[25px] relative">
                    <div className="bg-[#212735] p-2 rounded-[20px] grid grid-cols-2">
                        <div
                            id="tab1"
                            className="text-white text-center font-semibold py-3 rounded-[15px] bg-[#31394C] select-none"
                        >
                            اعتبار کلی
                        </div>
                        <div
                            id="tab2"
                            className="text-white text-center font-semibold py-3 rounded-[15px] opacity-50 select-none"
                        >
                            سود جاری
                        </div>
                    </div>

                    <div id="tabContent1">
                        <div
                            id="tradingprofitChart"
                            style={{ width: "100%", height: 300 }}
                        ></div>
                        <div className="flex items-center border-b-2 border-[#414B61] pb-6">
                            <div
                                className="rounded-full min-w-[55px] min-h-[55px] bg-[#414B61] flex items-center justify-center"
                            >
                                <img src="/svg/wallet2.svg" alt="" />
                            </div>
                            <div className="mr-4 w-full">
                                <div className="text-[#6F7582] text-[14px] font-semibold">
                                    اعتبار کلی حساب
                                </div>
                                <div className="min-[420px]:flex items-center justify-between">
                                    <div className="text-[#fff] text-[26px] font-semibold">
                                        $46,102.00
                                    </div>
                                    <div className="text-[#2CCD70] text-[14px] font-semibold">
                                        +2.5%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden" id="tabContent2">
                        <div
                            id="tradingprofitChart2"
                            style={{ width: "100%", height: 300 }}
                        ></div>
                        <div className="flex items-center border-b-2 border-[#414B61] pb-6">
                            <div
                                className="rounded-full min-w-[55px] min-h-[55px] bg-[#414B61] flex items-center justify-center"
                            >
                                <img src="/svg/wallet2.svg" alt="" />
                            </div>
                            <div className="mr-4 w-full">
                                <div className="text-[#6F7582] text-[14px] font-semibold">
                                    سود جاری حساب
                                </div>
                                <div className="min-[420px]:flex items-center justify-between">
                                    <div className="text-[#fff] text-[26px] font-semibold">
                                        $26,191.00
                                    </div>
                                    <div className="text-[#2CCD70] text-[14px] font-semibold">
                                        +8.5%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-6 mb-[30px]">
                        <div className="w-2 h-2 bg-[#FF004E] rounded-full"></div>
                        <div className="text-[14px] font-semibold text-[#6F7582] mr-2">
                            آخرین بروز رسانی 35 دقیقه پیش
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-2 gap-x-2 min-[357px]:gap-x-6 absolute inset-x-4 absolute min-[357px]:inset-x-8 bottom-[-30px]"
                    >
                        <a
                            href="#"
                            className="flex items-center justify-center py-4 px-3 rounded-xl bg-white w-full"
                        >
                            <img src="/svg/vuesax-bulk-arrow-up.svg" alt="" />
                            <div className="text-[17px] font-semibold text-[#212735] mr-2">
                                واریز
                            </div>
                        </a>

                        <a
                            href="#"
                            className="flex items-center justify-center py-4 px-3 rounded-xl bg-white w-full"
                        >
                            <img
                                src="/svg/vuesax-bulk-arrow-up.svg"
                                className="block rotate-180"
                                alt=""
                            />
                            <div className="text-[17px] font-semibold text-[#212735] mr-2">
                                برداشت
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="px-8 py-2 mt-16 mb-4 relative">
                <div
                    className="relative rounded-[25px] py-2 px-3 min-[386px]:px-8 help-gradient overflow-hidden"
                >
                    <div
                        className="bg-[#000] absolute w-[120px] h-[120px] rounded-full rotate-[65deg] opacity-5 right-[-10px] z-[1] top-[-50px]"
                    ></div>
                    <div
                        className="bg-[#000] absolute w-[180px] h-[180px] rounded-full rotate-45 opacity-5 right-[40px] z-[1] top-[-100px]"
                    ></div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white text-[23px] font-extrabold">
                                    به کمک نیاز دارید؟
                                </div>
                                <div className="text-[14px] text-white">ما پاسخگوی شما هستیم</div>
                            </div>

                            <img src="/images/chat.png" className="w-[100px]" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 py-2 mb-4 relative">
                <div
                    className="relative rounded-[25px] py-2 px-3 min-[386px]:px-8 popular-gradient overflow-hidden"
                >
                    <div
                        className="bg-[#000] absolute w-[120px] h-[120px] rounded-full rotate-[65deg] opacity-5 right-[-10px] z-[1] top-[-50px]"
                    ></div>
                    <div
                        className="bg-[#000] absolute w-[180px] h-[180px] rounded-full rotate-45 opacity-5 right-[40px] z-[1] top-[-100px]"
                    ></div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white text-[23px] font-extrabold">
                                    پلن های محبوب
                                </div>
                                <div className="text-[14px] text-white">
                                    به راحتی سرمایه گذاری کنید
                                </div>
                            </div>

                            <img
                                src="/images/valentine_chat.png"
                                className="w-[100px]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 py-2 mb-4 relative">
                <img
                    src="/images/label_discount_black_friday.png"
                    className="w-[130px] min-[386px]:w-[165px] block absolute z-10 left-2 min-[386px]:left-7 top-0 min-[386px]:top-[-30px]"
                    alt=""
                />
                <div className="relative rounded-[25px] black-gradient overflow-hidden">
                    <div
                        className="bg-[#000] absolute w-[120px] h-[120px] rounded-full rotate-[65deg] opacity-5 right-[-10px] z-[1] top-[-50px]"
                    ></div>
                    <div
                        className="bg-[#000] absolute w-[180px] h-[180px] rounded-full rotate-45 opacity-5 right-[40px] z-[1] top-[-100px]"
                    ></div>

                    <div className="relative z-10 mt-8">
                        <div className="relative px-3 min-[386px]:px-8">
                            <div>
                                <div className="text-white text-[23px] font-extrabold">
                                    حراجی آغاز شد
                                </div>
                                <div className="text-[14px] text-white">
                                    بلک فرایدی با 50 درصد تخفیف
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white mt-8 flex items-center justify-between px-3 min-[386px]:px-8 py-3"
                        >
                            <div className="text-[17px] text-[#212735]">مشاهده پلن ها</div>
                            <i
                                className="flaticon-arrow-point-to-right block rotate-180 text-[#212735]"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;