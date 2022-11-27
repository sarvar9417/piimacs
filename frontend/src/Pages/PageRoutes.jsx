import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import Loader from "../Components/Loader/Loader";
import Navbar from "../Components/Navbar/Navbar";

const PageRoutes = () => {
  return (
    <section className="w-full h-screen overflow-hidden bg-neutral-200">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <div className="container m-auto">
          <Routes>{protectedRoutes()}</Routes>
        </div>
      </Suspense>
    </section>
  );
};

export default PageRoutes;
