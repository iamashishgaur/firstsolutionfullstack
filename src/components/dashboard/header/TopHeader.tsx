import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/images/first.webp";
type Props = {};
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theame/themeToggel";
import { CiSearch } from "react-icons/ci";

export default function TopHeader({}: Props) {
  return (
    <div className=" ">
      {/* <Link href="/">
        <Image src={logo} alt="" width={40} />
      </Link> */}
      <div className=" flex justify-between ">
        <div className="flex items-center justify-center  ">
          <CiSearch size={18} className="text-gray-500 " />
          <input
            type="text"
            placeholder="search..."
            className="px-4 py-2 md:w-60 border rounded-lg  focus:outline-none text-[14px] text-gray-500 dark:bg-[#020817]  font-medium "
          />
        </div>
        <div className="flex justify-center gap-4 items-center">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>BT</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-[20px]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
