"use client";
import * as React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Card } from "@/components/ui/card";

export default function CardData() {
  return (
    <Card className=" offcss w-[234px] h-[140px] cursor-pointer">
      <div className="p-4">
        <h3 className=" text-lg font-semibold  tracking-tight text-gray-900 dark:text-white flex items-center relative">
          MNCs <MdKeyboardArrowRight className="ml-1" size={20} color="gray" />
        </h3>
        <div className="flex items-center  mb-5">
          <p className="text-xs">165K+ this is the</p>
        </div>
        <div className="flex justify-between items-center gap-0.5">
          <span className="px-4 py-3 rounded-lg border-2 border-inherit">
            2
          </span>
          <span className="px-4 py-3 rounded-lg border-2 border-inherit">
            1
          </span>
          <span className="px-4 py-3 rounded-lg border-2 border-inherit">
            2
          </span>
          <span className="px-4 py-3 rounded-lg border-2 border-inherit">
            4
          </span>
        </div>
      </div>
    </Card>
  );
}
