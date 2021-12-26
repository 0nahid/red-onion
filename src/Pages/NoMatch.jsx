import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function NoMatch() {
  const location = useLocation();
  return (
    <>
      <div className="md:flex text-center justify-center items-center h-screen">
        <h1 className="text-4xl m-2 border-r-2">404 &nbsp; </h1>
        <p className="text-lg">
          The requested page {location.pathname} not found. &nbsp;{" "}
        </p>
        <div className="border-l-2">
          <Link className="text-indigo-500 no-underline hover:underline" to="/">
            &nbsp; Go to home page &nbsp;
          </Link>
        </div>
      </div>
    </>
  );
}
