import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return 'Loading...';
    }
    return user?.email ? (
        children
    ) : (
        <Navigate
            to={{
                pathname: "/login",
            }}
        />
    );
}