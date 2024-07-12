"use client";
import { CardTitle } from "@/components/ui/card";
import Link from "next/link";
import JobSearchFilter from "../jobs/JobSearchFilter";
import Image from "next/image";
export default function HomeBanner() {
  return (
    <>
      <div className="homepage w-full bg-[#f2f7fd] dark:bg-[#020817]  h-[calc(100vh-4.4rem)] flex flex-col items-center  ">
        <div className="flex flex-col items-center gap-1 pt-[7rem]">
          <CardTitle className="text-6xl md:text-4xl text-center">
            Find your dream job now
          </CardTitle>
          <h4 className="text-lg mt-2">Never Ending Solution.​​</h4>
        </div>
        <div className="mt-10 ">
          <JobSearchFilter />
        </div>
      </div>
    </>
  );
}
