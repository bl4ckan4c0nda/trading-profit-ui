import React from 'react';
import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <div className="container mx-auto bg-[212735] max-h-[100vh] h-[100vh] relative overflow-y-auto pb-[120px]">
            <Outlet />
        </div>
    )
}