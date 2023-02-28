import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment-jalaali";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { getPlans, getActivePlans } from "../fakeData/plans"

const ActivePlanCards = () => {
    // Reference to the Swiper instance
    const swiperRef = useRef(null);
    // Router hook to navigate to a different page
    const navigate = useNavigate();
    // State for the list of active plans, all plans, selected active plan ID, and card gradient color
    const [activePlans, setActivePlans] = useState([]);
    const [allPlans, setAllPlans] = useState([]);
    const [selectedActivePlanId, setSelectedActivePlanId] = useState();
    const [cardGradient, setCardGradient] = useState();

    // List of available card gradient colors
    const cardGradients = [
        'panel-gradient',
        'panel-gradient2',
        'panel-gradient3',
        'panel-gradient4',
        'panel-gradient5',
        'panel-gradient6',
        'panel-gradient7',
        'panel-gradient8',
        'panel-gradient9',
        'panel-gradient10'
    ];

    useEffect(() => {
        // Set the active and all plans lists and select the first active plan and set the first active plan gradient
        setActivePlans(getActivePlans());
        setAllPlans(getPlans());
        setSelectedActivePlanId(getActivePlans()[0]?.id);
        setCardGradient(cardGradients[0])
    }, []);

    // Converts a timestamp to a Persian date string
    const calculateActivationDate = (timestamp) => {
        const persianDate = moment(timestamp).locale('fa').format('jYYYY/jMM/jDD');
        return persianDate;
    };

    // Stores the Swiper instance in the swiperRef
    function handleSwiper(swiper) {
        swiperRef.current = swiper;
    }

    // Updates the selected active plan and card gradient based on the current active slide
    function handleSlideChange() {
        const currentActivePlanId = swiperRef.current.slides[swiperRef.current.activeIndex].getAttribute('data-id');
        const currentActivePlanGradient = swiperRef.current.slides[swiperRef.current.activeIndex].getAttribute('class').split(' ').find(value => /^panel-/.test(value));
        setSelectedActivePlanId(currentActivePlanId);
        setCardGradient(currentActivePlanGradient);
    }

    // Returns the details of the selected active plan, including the plan details and the card gradient color
    const getActivePlanDetails = () => {
        const activePlan = activePlans.filter(activePlan => activePlan.id == selectedActivePlanId);
        const planDetails = allPlans.filter(plans => plans.id == activePlan[0]?.planId);
        return { ...activePlan[0], ...planDetails[0], ...{ cardGradient } };
    }

    return (
        <>
            <div className="px-8 pt-12 flex items-center justify-end">
                <Link
                    to={`/my/plan-management/${selectedActivePlanId}`}
                    state={{ data: getActivePlanDetails() }}
                    className="flex items-center text-white text-[17px]">
                    مدیریت پلن
                    <i
                        className="flaticon-arrow-point-to-right rotate-180 block text-[9px] mr-2 leading-[0]"
                    ></i>
                </Link>
            </div>
            <div className="px-8 py-12 mb-16 relative overflow-hidden flex flex-col justify-center">
                <div className="panelSwiper">
                    <Swiper effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        direction="vertical"
                        className="h-[220px] max-h-[220px] mySwiper swiper-wrapper"
                        onSwiper={handleSwiper}
                        onSlideChange={handleSlideChange}

                    >
                        {
                            activePlans.map(
                                (activePlan, index) =>
                                    <SwiperSlide
                                        key={activePlan.id}
                                        data-id={activePlan.id}
                                        onClick={() => navigate(`/my/plan-management/${selectedActivePlanId}`, { state: { data: getActivePlanDetails() } })}
                                        className={`swiper-slide relative rounded-[25px] py-6 px-8 min-h-[220px] overflow-hidden ${cardGradients[index % cardGradients.length]}`}>
                                        <div
                                            className="bg-[#000] absolute w-[110px] h-[110px] rounded-[20px] rotate-[65deg] opacity-5 left-[-10px] z-[1] top-[-10px]"
                                        ></div>
                                        <div
                                            className="bg-[#000] absolute w-[180px] h-[180px] rounded-[20px] rotate-45 opacity-5 left-[-40px] z-[1] top-[-30px]"
                                        ></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center">
                                                <img src="/svg/vuesax-bulk-bookmark-2.svg" />
                                                <div className="text-white mr-2 text-[17px]">
                                                    پلن&nbsp;
                                                    {allPlans.map(plan => plan.id === activePlan.planId ? plan.holdingTime : '')}
                                                    &nbsp;روزه
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center my-10">
                                                <div className="text-white text-[26px] font-bold">انقضا :</div>
                                                <div className="text-white text-[26px] font-bold mx-1">63</div>
                                                <div className="text-white text-[26px] font-bold">روز دیگر</div>
                                            </div>

                                            <div className="flex">
                                                <div className="text-white text-[14px]">تاریخ فعالسازی :</div>
                                                <div className="text-white text-[14px] mr-1">{calculateActivationDate(activePlan.activationDate)}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </>

    );
}

export default ActivePlanCards;