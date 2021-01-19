import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

export function Monday() {
    return (
        <div>
            <h1>Monday</h1>
            <Outlet />
            <nav>
                <Link to="2">Tuesday</Link>
            </nav>
        </div>
    )
}

export function MondayWork() {
    return (
        <div>
            <h1>MondayWork</h1>
        </div>
    )
}

export function Tuesday() {
    return (
        <div>
            <h1>Tuesday</h1>
        </div>
    )
}

export function Woops404(){
    return (
        <div>
            <h1>Resource not found at {useLocation().pathname}</h1>
        </div>
    )
}