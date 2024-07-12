"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardData from "../card/CardData";

export default function TopCompany() {
  return (
    <>
      <div className="px-20  py-10 mt-7  ">
        <h1 className="text-2xl text-center  font-bold ">
          Top companies hiring now
        </h1>
        <Carousel className="  mt-10 mb-10 w-full ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex gap-3">
                  <CardData />
                  <CardData />
                  <CardData />
                  <CardData />
                  <CardData />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
