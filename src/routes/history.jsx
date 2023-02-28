import React from 'react';
import PageHeader from '../components/common/PageHeader';

const History = () => {
    return (
        <>
            <PageHeader title="تاریخچه" hasNotification />

            <div className="px-8 mt-12">
                <div className="grid grid-cols-4">
                    <a href="#" className="history-tab block text-[16px] font-semibold text-white text-center border-b-[1px] border-white py-5">همه</a>
                    <a href="#" className="history-tab block text-[16px] font-semibold text-white text-center border-b-[1px] border-white py-5 opacity-30">واریز</a>
                    <a href="#" className="history-tab block text-[16px] font-semibold text-white text-center border-b-[1px] border-white py-5 opacity-30">برداشت</a>
                    <a href="#" className="history-tab block text-[16px] font-semibold text-white text-center border-b-[1px] border-white py-5 opacity-30">پلن ها</a>
                </div>


                <div
                    className="relative pr-[60px] mt-8 bg-transparent border-[2px] border-[#31394C] rounded-[20px] p-4 overflow-hidden"
                >

                    <div
                        className="w-[60px] rounded-r-[20px] right-0 inset-y-0 absolute flex items-center"
                    >
                        <img
                            src="/svg/vuesax-bulk-search-normal.svg"
                            className="mr-5"
                            id="copyToken"
                            alt=""
                        />
                    </div>
                    <input
                        type="text"
                        id="token"
                        placeholder="جستجو"
                        className="!border-0 outline-none focus:!border-0 !outline-0 text-[#6F7582] text-[17px] font-semibold block w-full bg-transparent"
                    />
                </div>

                {/* <!-- tab1 --> */}
                <div className="history-content mb-16">
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- tab2 --> */}
                <div className="history-content mb-16 hidden">
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">سال قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- tab3 --> */}
                <div className="history-content mb-16 hidden">
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل2</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- tab4 --> */}
                <div className="history-content mb-16 hidden">
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">سال بعد</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#6F7582] text-[14px] font-semibold">هفته قبل</div>
                            <div className="text-[#6F7582] text-[14px] font-semibold">1376/10/11</div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#EB876B] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" className="block rotate-180" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">انتقال به پلن گوهر</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#EB876B] text-left">250/000 -</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#0078FF] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-bookmark-2.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">خرید پلن</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">250/000 +</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b-[1px] border-[#31394C]">

                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-[#2CCD70] rounded-full flex items-center justify-center">
                                    <img src="/svg/vuesax-bulk-arrow-up-white.svg" alt="" />
                                </div>
                                <div className="mr-3">
                                    <div className="text-white text-[17px] font-semibold">واریزی پلن فیروز</div>
                                    <div className="text-[14px] text-[#6F7582] mt-2">پرداخت موفق</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[17px] font-semibold text-[#2CCD70] text-left">+ 250/000</div>
                                <div className="text-[14px] text-[#6F7582] text-left mt-2">تومان</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;