import React from "react";
import Marquee from "react-fast-marquee";
import { Card } from "@/components/ui/card";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Brand from "../../../public/images/logo/SBI.jpg";
import { Fullscreen } from "lucide-react";

const BrandData = [
  {
    id: "1",
    img: "/images/logo/SBI.jpg",
  },
  //   {
  //     id: "2",
  //     img: "/images/logo/aditya.webp",
  //   },
  //   {
  //     id: "3",
  //     img: "/images/logo/edelweiss.gif",
  //   },
  {
    id: "4",
    img: "/images/logo/edelwise.png",
  },
  {
    id: "5",
    img: "/images/logo/future-generali.png",
  },
  //   {
  //     id: "6",
  //     img: "/images/logo/hdfc-ergo.png",
  //   },
  //   {
  //     id: "7",
  //     img: "/images/logo/hdfc-sales.svg",
  //   },
  //   {
  //     id: "8",
  //     img: "/images/logo/ICICI_Lombard.png",
  //   },
  {
    id: "9",
    img: "/images/logo/IndiaFirst.png",
  },
  {
    id: "10",
    img: "/images/logo/kotak.png",
  },
  {
    id: "11",
    img: "/images/logo/ManipalCigna.png",
  },
  //   {
  //     id: "12",
  //     img: "/images/logo/max.png",
  //   },
  //   {
  //     id: "13",
  //     img: "/images/logo/niva.png",
  //   },
  {
    id: "14",
    img: "/images/logo/reliance.png",
  },
  {
    id: "15",
    img: "/images/logo/star-helth.png",
  },
  //   {
  //     id: "16",
  //     img: "/images/logo/TATA_AIG.png",
  //   },
];

export default function OurBrands() {
  return (
    <>
      <div className="w-full px-16  py-10 sm:px-12 xs:pax-2 ">
        <h2 className="mb-4 text-center py-10 text-4xl tracking-tight font-extrabold dark:text-white text-gray-900 ">
          Our Brands
        </h2>
        <Marquee className="mt-15 " pauseOnHover="true">
          <div className="flex  gap-2 ">
            {BrandData.map((item, index) => (
              <Card
                className=" offcss w-[180px] h-[80px] cursor-pointer flex justify-center dark:hover:bg-[#020817]  items-center "
                key={index}
              >
                <div className=" ">
                  <Image
                    src={item.img}
                    className="offcss dark:hover:bg-[#020817]"
                    alt="Our Brand"
                    width={150}
                    height={110}
                  />
                </div>
              </Card>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}
