import React from 'react';
import PageHeader from '../components/common/PageHeader';

const Settings = () => {
    return (
        <>
            <PageHeader title="پروفایل" hasNotification />

            <div className="px-8 mt-[130px]">

                <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden mx-auto">
                    <img src="/images/profile_user.jpg" className="w-full h-full inset-0 absolute object-cover" alt="" />
                </div>

                <div className="font-semibold text-white text-[21px] text-center mt-4">احسان غلام پور</div>

                <a href="#" className="mt-10 mb-4 relative block">
                    <div
                        className="relative rounded-[25px] py-8 px-3 min-[386px]:px-6 profile-gradient overflow-hidden"
                    >
                        <div
                            className="bg-[#000] absolute w-[120px] h-[120px] rounded-full rotate-[65deg] opacity-5 left-[-30px] z-[1] top-[-50px]"
                        ></div>
                        <div
                            className="bg-[#000] absolute w-[180px] h-[180px] rounded-full rotate-45 opacity-5 left-[20px] z-[1] top-[-100px]"
                        ></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between">

                                <div className="flex items-center">
                                    <div className="min-h-[50px] min-w-[50px] rounded-full bg-[#414B61] flex items-center justify-center">
                                        <img src="/svg/vuesax-bulk-crown.svg" alt="" />
                                    </div>

                                    <div className="mr-4">
                                        <div className="text-white text-[23px] font-extrabold">
                                            پلن های محبوب
                                        </div>
                                        <div className="text-[14px] text-white mt-1">مشاهده و خرید</div>
                                    </div>

                                </div>

                                <i className="flaticon-arrow-point-to-right block rotate-180 text-[#6F7582] text-[19px] text-left"></i>

                            </div>
                        </div>

                    </div>
                </a>

                <div className="text-[#6F7582] text-[14px] font-semibold mt-8">عمومی</div>

                <a href="#" className="block py-6 border-b-[1px] border-[#31394C]">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center">
                            <div className="min-w-[45px] min-h-[45px] rounded-full bg-[#31394C] flex items-center justify-center">
                                <i className="text-white flaticon-vuesax-bold-lock text-[18px] leading-none"></i>
                            </div>
                            <div className="text-white text-[17px] font-semibold mr-6 pl-4">تغییر رمز عبور</div>
                        </div>

                        <div>
                            <i className="flaticon-arrow-point-to-right block rotate-180 text-[#6F7582] text-[17px] text-left"></i>
                        </div>
                    </div>
                </a>

                <a href="#" className="block py-6 border-b-[1px] border-[#31394C]">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center">
                            <div className="min-w-[45px] min-h-[45px] rounded-full bg-[#31394C] flex items-center justify-center">
                                <i className="text-white flaticon-vuesax-bold-empty-wallet-1 text-[18px] leading-none"></i>
                            </div>
                            <div className="text-white text-[17px] font-semibold mr-6 pl-4">مدیریت کیف پول</div>
                        </div>

                        <div>
                            <i className="flaticon-arrow-point-to-right block rotate-180 text-[#6F7582] text-[17px] text-left"></i>
                        </div>
                    </div>
                </a>

                <a href="#" className="block py-6">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center">
                            <div className="min-w-[45px] min-h-[45px] rounded-full bg-[#31394C] flex items-center justify-center">
                                <i className="text-white flaticon-vuesax-bold-minus-square text-[18px] leading-none"></i>
                            </div>
                            <div className="text-white text-[17px] font-semibold mr-6 pl-4">فعالسازی ورود دو مرحله ای</div>
                        </div>

                        <div>
                            <i className="flaticon-arrow-point-to-right block rotate-180 text-[#6F7582] text-[17px] text-left"></i>
                        </div>
                    </div>
                </a>

                <a
                    href="#"
                    className="my-16 block rounded-[14px] bg-[#3F353D] text-[#EB876B] py-4 text-center text-[20px] font-semibold"
                >
                    خروج از حساب
                </a>

            </div>
        </>
    );
}

export default Settings;