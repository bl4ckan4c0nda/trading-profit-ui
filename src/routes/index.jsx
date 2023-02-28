import React from 'react';
import { Outlet } from "react-router-dom"
import BottomBarNavigation from "../components/BottomBarNavigation"

const Index = () => {
    return (
        <>
            <BottomBarNavigation />
            <Outlet />
        </>
    );
}

export default Index;