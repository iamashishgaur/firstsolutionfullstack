import React from "react";
import { Button } from "../ui/button";
import { CiLocationOn, CiSearch } from "react-icons/ci";

export default function JobSearchFilter() {
  return (
    <div className=" w-full flex items-center justify-center gap-4 divide-x bg-white dark:bg-[#020817] border-2  rounded-full px-4 py-2 ">
      <div className="flex items-center justify-center  ">
        <CiSearch size={22} className="text-gray-500" />
        <input
          type="text"
          placeholder="Enter skills / companies name"
          className="px-4 w-[300px]   focus:outline-none text-[16px] text-gray-500 dark:bg-[#020817]  font-medium "
        />
      </div>
      <div>
        <select
          title="Select"
          className="w-full px-6 text-[16px] text-gray-500 font-medium dark:bg-[#020817] focus:outline-none "
        >
          <option value="Select Experience">Select Experience</option>
          <option value="Select Experience">Fresher</option>
          <option value="Select Experience">1 year</option>
        </select>
      </div>
      <div className="flex items-center justify-center ml-2">
        <CiLocationOn size={22} className="text-gray-500 ml-2" />
        <input
          type="text"
          placeholder="Enter location"
          className="px-4  w-[190px] text-[16px] text-gray-500 font-medium dark:bg-[#020817]  focus:outline-none  "
        />
      </div>

      <Button
        type="submit"
        className="rounded-full py-6 dark:text-white dark:bg-[#020817]  border-2"
      >
        Search Jobs
      </Button>
    </div>
  );
}
