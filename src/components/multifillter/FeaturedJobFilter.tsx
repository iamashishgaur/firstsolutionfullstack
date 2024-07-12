// components/MultiFilter.js
"use client";
import { useState } from "react";

import jobdetails from "@/data/jobdetails";
import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { CiLocationOn } from "react-icons/ci";

const categories = ["All", "Recent Jobs", "Full time", "Part time"];

const FeaturedJobFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const toggleCategory = (category: any) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes(category)) {
          const newCategories = prev.filter((cat) => cat !== category);
          return newCategories.length === 0 ? ["All"] : newCategories;
        } else {
          return prev.filter((cat) => cat !== "All").concat(category);
        }
      });
    }
  };
  const filteredData = selectedCategories.includes("All")
    ? jobdetails
    : jobdetails.filter((item) => selectedCategories.includes(item.category));

  return (
    <div className="w-full px-16">
      <div className="mb-4 flex justify-center items-center gap-5 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            className={`m-1 p-2 px-3 rounded-full ${
              selectedCategories.includes(category)
                ? "bg-slate-900 text-white"
                : "bg-gray-500"
            } ${
              category === "All" && selectedCategories.includes("All")
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className=" w-full  gap-7 grid grid-cols-4  mt-7  flex-wrap">
        {filteredData.map((item) => (
          <Link href="/jobshomepage" key={item.id}>
            <Card className=" offcss   cursor-pointer">
              <div className="px-3 py-4 gap-3 min-w-[300px] h-[360px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col ">
                  <div className="flex justify-center items-center">
                    <Link href="#">
                      <Image
                        src={item.company_img}
                        className=""
                        alt="Company logo"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="flex justify-start flex-col mt-5 gap-1  ">
                    <div className="ml-3">
                      <Link href="#">
                        <h2 className="text-[1.1rem] text-gray-600 inline font-medium hover:text-blue-500">
                          {item.company_name}
                        </h2>
                      </Link>
                    </div>
                    <div className="flex justify-start items-center gap-4 ml-3">
                      <span>
                        <CiLocationOn size={16} />
                      </span>
                      <h3 className="text-sm text-gray-500 font-medium">
                        {item.job_location}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start flex-col mt-[14px] gap-1 ml-3">
                  <div>
                    <Link href="#">
                      <h2 className="text-[1.1rem] text-gray-600 inline font-medium hover:text-blue-500">
                        {item.job_sector}
                      </h2>
                    </Link>
                  </div>
                  <div className="">
                    <p className="text-sm text-gray-500 ">{item.job_dis}</p>
                  </div>
                </div>
                <hr className=" border-1 border-gray-200 mt-5" />
                <div className="flex justify-between  items-center mt-4 pd-4">
                  <div>
                    <h3 className="text-base bg-[#f2f7fd] p-2 rounded-lg text-gray-500 font-medium">
                      {item.job_type}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">
                      {item.job_post_time}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobFilter;
