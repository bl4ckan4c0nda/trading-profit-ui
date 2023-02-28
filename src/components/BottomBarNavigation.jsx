import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const BottomBarNavigation = () => {

    const navLinkClasses = (isActive) => {
        let classes = "block max-w-[65px] min-w-[65px] text-center "
        return isActive ? classes : classes += "opacity-40"
    }

    return (
        <div
            className="fixed menu bottom-0 inset-x-0 h-[95px] z-20 max-w-[600px] mx-auto flex items-center justify-center"
        >
            <NavLink
                to="/my/plans"
                className="absolute z-20 top-[-15px] min-[328px]:top-[-20px] min-[345px]:top-[-25px] min-[382px]:top-[-30px] min-[440px]:top-[-40px]"
            >
                {({ isActive }) => (
                    <>
                        <div
                            className="w-[57px] h-[57px] min-[440px]:h-[70px] min-[440px]:w-[70px] min-[550px]:h-[80px] min-[550px]:w-[80px] rounded-full bg-[#2CCD70] flex items-center justify-center"
                        >
                            <img src="/svg/vuesax-bulk-bag2.svg" alt="" />
                        </div>
                        <div
                            className={`text-[14px] text-white mt-[9px] min-[328px]:mt-[14px] min-[345px]:mt-[19px] min-[382px]:mt-[17px] min-[500px]:mt-[22px] min-[550px]:mt-[20px] text-center ${isActive ? '' : 'opacity-40'}`}
                        >
                            خرید پلن
                        </div>
                    </>
                )}

            </NavLink>

            <div
                className="absolute inset-x-0 z-10 flex grid grid-cols-2 gap-x-16 min-[340px]:gap-x-[80px] min-[360px]:gap-x-[100px] min-[390px]:gap-x-[120px] min-[440px]:gap-x-[140px] min-[500px]:gap-x-[170px] min-[500px]:px-6 min-[382px]:top-4 min-[500px]:top-6 min-[550px]:top-8"
            >
                <div className="flex items-center justify-between">
                    <NavLink to="/my/dashboard" className={({ isActive }) => navLinkClasses(isActive)}>
                        <img
                            src="/svg/vuesax-bulk-home.svg"
                            className="mx-auto block"
                            alt=""
                        />
                        <div className="text-[14px] text-white mt-1">خانه</div>
                    </NavLink>

                    <NavLink to="/my/history" className={({ isActive }) => navLinkClasses(isActive)}>
                        <img
                            src="/svg/vuesax-bulk-home-trend-up.svg"
                            className="block mx-auto"
                            alt=""
                        />
                        <div className="text-[14px] text-white mt-1">تاریخچه</div>
                    </NavLink>
                </div>

                <div className="flex items-center justify-between">
                    <NavLink to="/my/support" className={({ isActive }) => navLinkClasses(isActive)}>
                        <img
                            src="/svg/vuesax-bulk-headphone.svg"
                            className="mx-auto block"
                            alt=""
                        />
                        <div className="text-[14px] text-white mt-1">پشتیبانی</div>
                    </NavLink>

                    <NavLink to="/my/settings" className={({ isActive }) => navLinkClasses(isActive)}>
                        <img
                            src="/svg/vuesax-bulk-profile.svg"
                            className="mx-auto block"
                            alt=""
                        />
                        <div className="text-[14px] text-white mt-1">پروفایل</div>
                    </NavLink>
                </div>
            </div>

            <img
                src="/svg/menu.svg"
                className="absolute w-full bottom-0 min-[382px]:top-0 min-[382px]:bottom-[unset] opacity-[0.96]"
                alt=""
            />
        </div>
    );
}

export default BottomBarNavigation;