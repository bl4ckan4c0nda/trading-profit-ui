import React from 'react';
import PageHeader from '../components/common/PageHeader';

const Support = () => {
    return (
        <>
            <PageHeader title="پشتیبانی" hasNotification />


            <div className="px-8 mt-[130px]">

                <div className="bg-[#31394C] p-4 min-[355px]:p-8 rounded-[25px]">
                    <div className="flex items-center">
                        <img src="/svg/vuesax-bulk-headphone.svg" alt="" />
                        <div className="text-[17px] text-white mr-3">به پشتیبانی نیاز دارید ؟</div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 my-6">
                        <a
                            href="#"
                            className="block border-[1px] rounded-[12px] border-[#3B465E] px-3 py-3 flex items-center justify-center"
                        >
                            <img src="/svg/vuesax-bulk-send-2.svg" alt="" />
                            <div className="text-white text-[17px] font-semibold mr-3">
                                تلگرام
                            </div>
                        </a>

                        <a
                            href="#"
                            className="block border-[1px] rounded-[12px] border-[#3B465E] px-3 py-3 flex items-center justify-center"
                        >
                            <img src="/svg/vuesax-bulk-whatsapp.svg" alt="" />
                            <div className="text-white text-[17px] font-semibold mr-3">
                                واتساپ
                            </div>
                        </a>
                    </div>


                    <div className="py-2 mb-4 relative">
                        <div
                            className="relative rounded-[25px] py-2 px-3 min-[386px]:px-6 help-gradient overflow-hidden"
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
                                        <div className="text-white text-[21px] font-extrabold">
                                            به کمک نیاز دارید؟
                                        </div>
                                        <div className="text-[14px] text-white">ما پاسخگوی شما هستیم</div>
                                    </div>

                                    <img src="/images/chat.png" className="w-[100px]" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#2CCD70]"></div>
                        <div className="text-[14px] font-semibold text-[#6F7582] mr-2">پشتیبانی آنلاین است</div>
                    </div>

                </div>

                <a href="#" className="bg-[#31394C] p-8 rounded-[25px] mt-6 flex items-center justify-between">
                    <div className="text-[17px] text-white">راهنمای استفاده</div>
                    <i className="flaticon-arrow-point-to-right block rotate-180 text-[#6F7582]"></i>
                </a>

                <a href="#" className="bg-[#31394C] p-8 rounded-[25px] mt-6 flex items-center justify-between">
                    <div className="text-[17px] text-white">سوالات متداول</div>
                    <i className="flaticon-arrow-point-to-right block rotate-180 text-[#6F7582]"></i>
                </a>


            </div>
        </>
    );
}

export default Support;