"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import JobCard from "@/components/jobs/JobCard";
import Paginations from "@/components/pagination/Pagination";
import JobSearchFilter from "@/components/jobs/JobSearchFilter";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import jobdetails from "@/data/jobdetails";
import { Card } from "@/components/ui/card";
import { PiGraduationCapLight } from "react-icons/pi";
import {
  MdOutlineBook,
  MdOutlineCurrencyRupee,
  MdOutlineLocationOn,
} from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
function CheckboxFilter() {
  return (
    <>
      <div className="flex gap-3 flex-col">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms
          </label>
        </div>
        <Link href="#" className="ml-7 font-medium text-sm mt-2 text-blue-500">
          View More
        </Link>
      </div>
    </>
  );
}

export default function JobsHomePage() {
  return (
    <>
      <div className="w-full px-24 py-10 bg-slate-100">
        <div className="  flex justify-center items-center ">
          <JobSearchFilter />
        </div>
        <div className=" flex mt-7 gap-5 py-5">
          <div className="w-[300px] h-auto bg-white border-2 rounded-lg border-inherit p-5">
            <Accordion type="single" collapsible className="w-full">
              <h4 className="font-semibold text-base">All Filters</h4>
              <hr className="border-gray-200 mt-3" />
              <AccordionItem value="item-1">
                <AccordionTrigger>Department</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Experience</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Salary</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Location</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Company type</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Work mode</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Top companies</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Industry</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Role category</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Education</AccordionTrigger>
                <AccordionContent>
                  <CheckboxFilter />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[580px] flex  gap-3 flex-col">
            <div className="flex justify-between items-center">
              <span>1 - 20 of 32250 It Jobs</span>
              <span>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort by:</SelectLabel>
                      <SelectItem value="apple">Relevent</SelectItem>
                      <SelectItem value="banana">Date</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {jobdetails.map((item) => (
                <Link href="/jobdetails" key={item.id}>
                  <Card className=" offcss w-[100%] cursor-pointer ">
                    <div className=" px-7 py-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <div className="w-[70%]">
                        <Link href="#">
                          <h2 className="text-[1.1rem] text-gray-600 font-medium inline hover:text-blue-500 dark:text-white">
                            {item.company_name}
                          </h2>
                        </Link>

                        <div className="flex  items-center  mb-5">
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <h4 className="text-sm font-medium tracking-tight text-gray-500">
                              Ford
                            </h4>
                            <svg
                              className="w-3 h-3 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                          <span className=" text-xs font-normal px-2 py-0.5  ">
                            5.0
                          </span>
                          <span>
                            <p className="text-xs ">(15K+ reviews)</p>
                          </span>
                        </div>
                      </div>
                      <div className="flex w-[75%] gap-7">
                        <span className="flex gap-3 justify-start items-center ">
                          <PiGraduationCapLight />
                          <p className="text-sm font-medium tracking-tight text-gray-500">
                            0-3 Yrs
                          </p>
                        </span>
                        <span className="flex gap-3 justify-start items-center ">
                          <MdOutlineCurrencyRupee />
                          <p className="text-sm font-medium tracking-tight text-gray-500">
                            Not disclosed
                          </p>
                        </span>
                        <span className="flex gap-3 justify-start items-center ">
                          <MdOutlineLocationOn />
                          <p className="text-sm font-medium tracking-tight text-gray-500">
                            {item.job_location}
                          </p>
                        </span>
                      </div>
                      <div className="flex items-center justify-start mt-2">
                        <span className="flex gap-3 justify-start items-center ">
                          <MdOutlineBook />
                          <p className="text-sm  tracking-tight text-gray-700">
                            {item.job_dis}
                          </p>
                        </span>
                      </div>
                      <div className="flex gap-3 mt-4 ">
                        <Link href="#">
                          <p className="text-xs text-gray-500">Business</p>
                        </Link>
                        <Link href="#">
                          <li className="text-xs text-gray-500">Business</li>
                        </Link>
                        <Link href="#">
                          <li className="text-xs text-gray-500">Business</li>
                        </Link>
                        <Link href="#">
                          <li className="text-xs text-gray-500">Business</li>
                        </Link>
                        <Link href="#">
                          <li className="text-xs text-gray-500">Business</li>
                        </Link>
                      </div>
                      <div className="absolute">
                        <Image
                          src={item.company_img}
                          className=" ml-[450px] relative  bottom-40"
                          alt="Company logo"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="flex justify-between mt-5">
                        <p className="text-sm bg-[#f2f7fd] p-2 rounded-lg text-gray-500 font-medium">
                          {item.job_post_time} Ago
                        </p>
                        <span className="flex justify-center items-center gap-2 bg-[#f9fcff] p-1 rounded-lg text-sm">
                          <CiBookmark size={18} />
                          Save
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <Paginations />
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
