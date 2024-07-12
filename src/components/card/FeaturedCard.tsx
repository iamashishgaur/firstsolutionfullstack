import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import clg from "../../../public/images/jio.gif";
import { CiLocationOn } from "react-icons/ci";

export default function FeaturedCard() {
  return (
    <>
      <Link href="/jobshomepage">
        <Card className=" offcss w-[280px]  cursor-pointer">
          <div className="px-3 py-4 gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col ">
              <div className="flex justify-center items-center">
                <Link href="#">
                  <Image src={clg} className="w-[80px]" alt="Company logo" />
                </Link>
              </div>
              <div className="flex justify-start flex-col mt-5 gap-1  ">
                <div>
                  <Link href="#">
                    <h2 className="text-[1.1rem] text-gray-600 font-medium hover:text-blue-500">
                      Company Name
                    </h2>
                  </Link>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    <CiLocationOn size={16} />
                  </span>
                  <h3 className="text-sm text-gray-500 font-medium">
                    Mumbai, Panjab
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex justify-start flex-col mt-[14px] gap-1">
              <div>
                <Link href="#">
                  <h2 className="text-[1.1rem] text-gray-600 font-medium hover:text-blue-500">
                    Company Name
                  </h2>
                </Link>
              </div>
              <div className="">
                <p className="text-sm text-gray-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa quis facere earum.{" "}
                </p>
              </div>
            </div>
            <hr className=" border-1 border-gray-200 mt-5" />
            <div className="flex justify-between  items-center mt-4 pd-4">
              <div>
                <h3 className="text-base bg-[#f2f7fd] p-2 rounded-lg text-gray-500 font-medium">
                  Job Type
                </h3>
              </div>
              <div>
                <p className="text-xs text-gray-500">30+ Day Ago</p>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
}
