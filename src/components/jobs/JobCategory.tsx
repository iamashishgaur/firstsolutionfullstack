"use client";

import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Card } from "@/components/ui/card";
import jobdata from "@/data/jobdata";

export default function JobCategory() {
  return (
    <>
      <div className=" mt-20 mb-5">
        <h1 className="text-2xl text-center mb-10 font-bold ">
          Find Jobs by Categories
        </h1>
        <div className="w-full mt-[50px]   flex justify-center  items-start  gap-5  flex-wrap">
          {jobdata?.map((item) => {
            return (
              <>
                <Link href={"/"} key={item.id}>
                  <Card className="offcss w-[186px] h-[100px] flex justify-center flex-col items-center cursor-pointer hover:text-gray-600 dark:hover:bg-gray-900">
                    <div className="p-7 flex justify-center  items-start gap-4 dark:border-gray-700 ">
                      <div className="flex justify-center items-center">
                        {item.c_img}
                      </div>
                      <h3 className=" text-lg font-semibold  tracking-tight text-gray-900 dark:text-white  flex items-center relative">
                        {item.job_c_n}
                        <MdKeyboardArrowRight
                          className="ml-1"
                          size={30}
                          color="gray"
                        />
                      </h3>
                      {/* <span className="font-medium text-gray-400">
                        ({item.number_jobs})
                      </span> */}
                    </div>
                  </Card>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
