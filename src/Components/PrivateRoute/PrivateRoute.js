import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto h-screen">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-gray-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-gray-200 rounded col-span-2"></div>
                                <div class="h-2 bg-gray-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
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