import React, { useEffect, useState } from 'react';
import useApi from "../hooks/useApi"
import PageHeader from '../components/common/PageHeader';
import PlanList from '../components/planList';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


const Plans = () => {
    const { data, isLoading, error } = useApi("http://195.201.82.205:8080/api/v1/");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <>
            <PageHeader title="خرید پلن" hasNotification />

            <div className="swiper mySwiper2 !h-auto px-8 mt-[130px]">
                <Swiper slidesPerView={1.2} spaceBetween={35} grabCursor={true} className="swiper-wrapper">
                    {
                        data.plans.map(
                            plan => <SwiperSlide key={plan.id} className="swiper-slide flex items-center justify-center">
                                <PlanList title={plan.title} term={plan.term} profit={plan.profit} min={plan.min} max={plan.max} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

            <div className="px-8">
                <div className="text-[17px] text-[#6F7582] text-center mt-[100px] leading-8">
                    تسویه حساب پلن فیروز بصورت روزانه و یک نوبت انجام می گیرد
                </div>
                <a
                    id="deletePlanBtn"
                    href="#"
                    className="mt-5 block rounded-[14px] bg-[#2CCD70] text-white py-4 text-center text-[20px] font-semibold mb-6"
                >
                    ادامه خرید پلن
                </a>
            </div>
        </>
    );
}

export default Plans;