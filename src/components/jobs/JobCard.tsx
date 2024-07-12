import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
// import clg from "@/images/jio.gif";
import { PiGraduationCapLight } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlineBook } from "react-icons/md";

export default function JobCard() {
  return (
    <>
      <div>
        <Link href="/jobdetails">
          <Card className=" offcss w-[100%] cursor-pointer ">
            <div className=" p-7   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="w-[70%]">
                <a href="#">
                  <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                    Associate
                  </h5>
                </a>
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
                    Kolkata,Mumbai...
                  </p>
                </span>
              </div>
              <div className="flex items-center justify-start mt-2">
                <span className="flex gap-3 justify-start items-center ">
                  <MdOutlineBook />
                  <p className="text-sm  tracking-tight text-gray-700">
                    Ford Global Business Services is looking for Associate to
                    join our dynamic
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
                  src=""
                  className="w-[60px] h-[60px] ml-[450px] relative  bottom-40"
                  alt="Company logo"
                />
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-xs text-gray-500">30+ Day Ago</p>
                <span className="flex justify-center items-center gap-2 text-sm">
                  <CiBookmark size={18} />
                  Save
                </span>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </>
  );
}
import { CiBookmark } from "react-icons/ci";
