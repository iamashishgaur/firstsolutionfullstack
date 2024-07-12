import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import clg from "../../../public/images/jio.gif";
import { PiGraduationCapLight } from "react-icons/pi";
import { MdOutlineBook, MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function JobDetails() {
  return (
    <>
      <div className="bg-white w-full px-[7rem] py-10 flex gap-5">
        <div className="w-[62%] flex flex-col gap-5">
          <div className="  w-[100%]  ">
            <div className=" p-7   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="w-[70%]">
                <a href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    Associate
                  </h5>
                </a>
                <div className="flex  items-center  mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <h4 className="text-sm font-medium tracking-tight text-gray-700">
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
                  <p className="text-sm font-medium tracking-tight text-gray-700">
                    0-3 Yrs
                  </p>
                </span>
                <span className="flex gap-3 justify-start items-center ">
                  <MdOutlineCurrencyRupee />
                  <p className="text-sm font-medium tracking-tight text-gray-700">
                    Not disclosed
                  </p>
                </span>
              </div>
              <div className="flex items-center justify-start mt-2">
                <span className="flex gap-3 justify-start items-center ">
                  <MdOutlineLocationOn />
                  <p className="text-sm font-medium tracking-tight text-gray-700">
                    Kolkata, Mumbai, Prayagraj...
                  </p>
                </span>
              </div>
              <hr className="mt-6 " />
              <div className="absolute">
                <Image
                  src={clg}
                  className="w-[60px] h-[60px] ml-[550px] relative  bottom-36"
                  alt="Company logo"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2 ">
                  <p className="text-xs text-gray-700">
                    <strong>Posted: </strong>30+ Day Ago
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>Opening: </strong>(7)
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>Applicants: </strong>(177)
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href="/signup">
                    <Button className="border border-purple-600 bg-transparent text-black  py-2 px-4 rounded-full">
                      Register to apply
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button className="text-white cursor-pointer py-2 px-4 rounded-full">
                      Login to apply
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Card className="  w-[100%]">
            <div className=" p-7   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <CardTitle className="text-lg underline">
                Job description
              </CardTitle>
              <span className=" flex flex-col gap-3 ml-4 mt-3">
                <li className="text-sm text-gray-700 text-justify">
                  A Haskell developer that will help us build new products in
                  the blockchain space and help us add new features for some of
                  our current projects, like our Cardano SPOT, and some new
                  stealth projects that we are starting to work on
                </li>
                <li className="text-sm text-gray-700">
                  A talented Haskell developer is needed to expand our team
                </li>
                <li className="text-sm text-gray-700">
                  You will be responsible for creating, testing, and maintaining
                  applications built with Haskell as a Haskell Developer
                </li>
                <li className="text-sm text-gray-700">
                  Youll work with project managers and other developers to
                  provide top-notch software solutions
                </li>
              </span>
              <CardTitle className="text-lg mt-4 underline">
                Roles and Responsibilities
              </CardTitle>

              <span className=" flex flex-col gap-3 ml-4 mt-3">
                <li className="text-sm text-gray-700 text-justify">
                  Develop, test, and maintain Haskell-based applications
                </li>
                <li className="text-sm text-gray-700">
                  Collaborate with other developers and project managers to
                  ensure timely delivery of projects
                </li>
                <li className="text-sm text-gray-700">
                  Write clean, well-documented, and efficient code
                </li>
                <li className="text-sm text-gray-700">
                  Test and debug software applications
                </li>
                <li className="text-sm text-gray-700">
                  Participate in code reviews to maintain code quality
                </li>
                <li className="text-sm text-gray-700">
                  Stay up-to-date with emerging software technologies and
                  frameworks
                </li>
                <li className="text-sm text-gray-700">
                  Communicate effectively with clients and project stakeholders
                </li>
              </span>
              <CardTitle className="text-lg mt-4 underline">
                Requirements and Skills
              </CardTitle>

              <span className=" flex flex-col gap-3 ml-4 mt-3">
                <li className="text-sm text-gray-700 ">
                  Strong knowledge of Haskell programming language and its
                  libraries
                </li>
                <li className="text-sm text-gray-600 ">
                  Experience with functional programming principles
                </li>
                <li className="text-sm text-gray-600 ">
                  Familiarity with database systems such as PostgreSQL or MySQL
                </li>
                <li className="text-sm text-gray-600 ">
                  Familiarity with development tools such as Git and continuous
                  integration systems
                </li>
                <li className="text-sm text-gray-600 ">
                  Strong problem-solving
                </li>
                <li className="text-sm text-gray-600 ">
                  skills Excellent communication skills
                </li>
              </span>
              <div className=" mt-7 flex flex-col gap-2">
                <span className=" flex  gap-3 ">
                  <strong className="font-semibold text-sm">Role: </strong>
                  <p className="text-sm text-gray-700">Full Stack Developer</p>
                </span>
                <span className=" flex  gap-3 ">
                  <strong className="font-semibold text-sm">
                    Industry Type:{" "}
                  </strong>
                  <p className="text-sm text-gray-700">Education / Training</p>
                </span>
                <span className=" flex  gap-3 ">
                  <strong className="font-semibold text-sm">
                    Department:{" "}
                  </strong>
                  <p className="text-sm text-gray-700">
                    Engineering - Software & QA
                  </p>
                </span>
                <span className=" flex  gap-3 ">
                  <strong className="font-semibold text-sm">
                    Employment Type:{" "}
                  </strong>
                  <p className="text-sm text-gray-700">Full Time, Permanent</p>
                </span>
                <span className=" flex  gap-3 ">
                  <strong className="font-semibold text-sm">
                    Job Category:{" "}
                  </strong>
                  <p className="text-sm text-gray-700">Software Development</p>
                </span>
              </div>
              <CardTitle className="text-sm mt-4 mb-2 ">Education</CardTitle>
              <span className=" flex  gap-3 ">
                <strong className="font-semibold text-sm">UG: </strong>
                <p className="text-sm text-gray-700">Any Graduate</p>
              </span>
              <span className=" flex  gap-3 ">
                <strong className="font-semibold text-sm">PG:</strong>
                <p className="text-sm text-gray-700">Any Postgraduate</p>
              </span>
              <CardTitle className="text-sm mt-4  ">Key Skills</CardTitle>
              <div className="flex mt-3 flex-wrap justify-start gap-2">
                <button className="bg-white text-xs hover:bg-gray-200 text-gray-800  p-2 border border-gray-400 rounded-full shadow">
                  Database
                </button>
                <button className="bg-white text-xs hover:bg-gray-200 text-gray-800  p-2 border border-gray-400 rounded-full shadow">
                  Programming
                </button>
                <button className="bg-white text-xs hover:bg-gray-200 text-gray-800  p-2 border border-gray-400 rounded-full shadow">
                  Button
                </button>
                <button className="bg-white text-xs hover:bg-gray-200 text-gray-800  p-2 border border-gray-400 rounded-full shadow">
                  Button
                </button>
              </div>
            </div>
          </Card>
          <Card className="  w-[100%] cursor-pointer ">
            <div className=" p-7   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <CardTitle className="text-base ">About Company</CardTitle>
              <p className="text-sm mt-2 text-gray-900">
                EMURGO Academy has designed courses for individuals, businesses,
                and universities to create a talent pool adept at blockchain
                technology and all relevant topics.
              </p>
            </div>
          </Card>
          <CardTitle className="text-base mt-4">Similar Jobs!</CardTitle>
          <Card className=" offcss w-[100%] cursor-pointer ">
            <div className=" p-7   bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700">
              <div className="w-[70%]">
                <a href="#">
                  <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                    Associate
                  </h5>
                </a>
                <div className="flex  items-center  mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <h4 className="text-sm font-medium tracking-tight text-gray-700">
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
                  <MdOutlineLocationOn />
                  <p className="text-sm font-medium tracking-tight text-gray-700">
                    Kolkata, Mumbai...
                  </p>
                </span>
              </div>

              <div className="flex justify-between gap-3 mt-4 ">
                <div className="flex justify-start gap-3  ">
                  <Link href="#">
                    <p className="text-xs text-gray-700">Business</p>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                </div>
                <div className="">
                  <p className="text-xs text-gray-700">Posted 30+ day ago</p>
                </div>
              </div>
              <div className="absolute ml-[550px] bottom-24 ">
                <Image src={clg} className="w-[60px]  " alt="Company logo" />
              </div>
            </div>
          </Card>
          <Card className=" offcss w-[100%] cursor-pointer ">
            <div className=" p-7   bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700">
              <div className="w-[70%]">
                <a href="#">
                  <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                    Associate
                  </h5>
                </a>
                <div className="flex  items-center  mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <h4 className="text-sm font-medium tracking-tight text-gray-700">
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
                  <MdOutlineLocationOn />
                  <p className="text-sm font-medium tracking-tight text-gray-700">
                    Kolkata, Mumbai...
                  </p>
                </span>
              </div>

              <div className="flex justify-between gap-3 mt-4 ">
                <div className="flex justify-start gap-3  ">
                  <Link href="#">
                    <p className="text-xs text-gray-700">Business</p>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                  <Link href="#">
                    <li className="text-xs text-gray-700">Business</li>
                  </Link>
                </div>
                <div className="">
                  <p className="text-xs text-gray-700">Posted 30+ day ago</p>
                </div>
              </div>
              <div className="absolute ml-[550px] bottom-24 ">
                <Image src={clg} className="w-[60px]  " alt="Company logo" />
              </div>
            </div>
          </Card>
        </div>
        <div className="w-[38%]">
          <Card className="px-5 py-4">
            <CardTitle className="text-sm ">
              Jobs you might be interested in!
            </CardTitle>
            <div className="mt-4">
              <a href="#">
                <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Associate
                </h5>
              </a>
              <div className="flex  items-center  mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <h4 className="text-sm font-medium tracking-tight text-gray-700">
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
                <span className=" text-xs font-normal px-2 py-0.5  ">5.0</span>
                <span>
                  <p className="text-xs ">(15K+ reviews)</p>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-7">
              <span className="flex gap-3 justify-start items-center ">
                <MdOutlineLocationOn />
                <p className="text-sm font-medium tracking-tight text-gray-700">
                  Kolkata, Mumbai...
                </p>
              </span>
              <div className="">
                <p className="text-[10px] text-gray-700">Posted 30+ day ago</p>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="mt-4">
              <a href="#">
                <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Associate
                </h5>
              </a>
              <div className="flex  items-center  mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <h4 className="text-sm font-medium tracking-tight text-gray-700">
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
                <span className=" text-xs font-normal px-2 py-0.5  ">5.0</span>
                <span>
                  <p className="text-xs ">(15K+ reviews)</p>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-7">
              <span className="flex gap-3 justify-start items-center ">
                <MdOutlineLocationOn />
                <p className="text-sm font-medium tracking-tight text-gray-700">
                  Kolkata, Mumbai...
                </p>
              </span>
              <div className="">
                <p className="text-[10px] text-gray-700">Posted 30+ day ago</p>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="mt-4">
              <a href="#">
                <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Associate
                </h5>
              </a>
              <div className="flex  items-center  mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <h4 className="text-sm font-medium tracking-tight text-gray-700">
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
                <span className=" text-xs font-normal px-2 py-0.5  ">5.0</span>
                <span>
                  <p className="text-xs ">(15K+ reviews)</p>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-7">
              <span className="flex gap-3 justify-start items-center ">
                <MdOutlineLocationOn />
                <p className="text-sm font-medium tracking-tight text-gray-700">
                  Kolkata, Mumbai...
                </p>
              </span>
              <div className="">
                <p className="text-[10px] text-gray-700">Posted 30+ day ago</p>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="mt-4">
              <a href="#">
                <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Associate
                </h5>
              </a>
              <div className="flex  items-center  mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <h4 className="text-sm font-medium tracking-tight text-gray-700">
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
                <span className=" text-xs font-normal px-2 py-0.5  ">5.0</span>
                <span>
                  <p className="text-xs ">(15K+ reviews)</p>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-7">
              <span className="flex gap-3 justify-start items-center ">
                <MdOutlineLocationOn />
                <p className="text-sm font-medium tracking-tight text-gray-700">
                  Kolkata, Mumbai...
                </p>
              </span>
              <div className="">
                <p className="text-[10px] text-gray-700">Posted 30+ day ago</p>
              </div>
            </div>
            <hr className="mt-4" />
          </Card>
        </div>
      </div>
    </>
  );
}
