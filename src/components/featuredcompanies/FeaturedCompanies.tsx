"use client";
import * as React from "react";

import { Button } from "../ui/button";
import FeaturedJobFilter from "../multifillter/FeaturedJobFilter";

export default function FeaturedCompanies() {
  return (
    <div className="bg-[#f5f7fc] w-full h-auto mt-20 dark:bg-[#020817]">
      <div className=" w-full h-auto  px-14 sm:px-0  py-10 mb-5 ">
        <h1 className="text-2xl text-center  font-bold ">
          Featured Jobs actively hiring
        </h1>
        <div className="mt-12">
          <FeaturedJobFilter />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button className="text-lg cursor-pointer mx-auto px-7 py-6 dark:text-white dark:bg-[#020817]  border-2 rounded-full mt-7 mb-10">
          View All Jobs
        </Button>
      </div>
    </div>
  );
}
