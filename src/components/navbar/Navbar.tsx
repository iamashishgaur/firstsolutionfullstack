"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../../public/images/first.webp";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SideLogin } from "../auth/sidelogin";
// import { Sheet, SheetTrigger } from "../ui/sheet";
// import { Button } from "../ui/button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { ThemeToggle } from "../theame/themeToggel";
type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Jobs",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
        // iconImage: todoImage,
      },
      {
        label: "Calendar",
        link: "#",
        // iconImage: calendarImage,
      },
      {
        label: "Reminders",
        link: "#",
        // iconImage: remindersImage,
      },
      {
        label: "Planning",
        link: "#",
        // iconImage: planningImage,
      },
    ],
  },
  {
    label: "Pages",
    link: "/",
    children: [
      {
        label: "About Us",
        link: "/about",
      },
      {
        label: "About Owner",
        link: "/aboutowner",
      },
      {
        label: "Contact Us",
        link: "/contact",
      },
    ],
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const [header, setHeader] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  const scrollHeader = () => {
    if (window.scrollY > 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, [header]);

  return (
    <div
      className={
        header
          ? " fixed z-[9999] top-0 w-full bg-[#ffffff] border-b-[1px] border-gray-300 dark:border-gray-800 dark:bg-[#020817] dark:text-white text-[#0a0c16]"
          : "bg-[#ffffff]   text-[#0a0c16] dark:bg-[#020817] dark:text-white"
      }
    >
      <div className=" drop-shadow-lg mx-auto flex  w-full  justify-between items-center min-w-60 px-14  h-[80px] ">
        {/* left side  */}
        <section
          ref={animationParent}
          className="flex justify-between items-center gap-10"
        >
          {/* logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-5">
              <Image src={logo} alt=" logo" width={50} height={50} />
              <h2 className="text-2xl font-semibold">First Solution</h2>
            </div>
          </Link>
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          <div className="hidden md:flex items-center ml-[110px] gap-7 transition-all">
            {navItems.map((d, i) => (
              <Link
                key={i}
                href={d.link ?? "#"}
                className="relative group  px-2 py-3 transition-all "
              >
                <p className="flex cursor-pointer items-center gap-1  dark:text-white">
                  <span className="text-[18x] font-medium ">{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                  )}
                </p>

                {/* dropdown */}
                {d.children && (
                  <div className="absolute    top-12 hidden w-auto  flex-col gap-1 dark:bg-[#020817] dark:border   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                    {d.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className=" flex cursor-pointer items-center  py-1 pl-1 pr-8 hover:bg-[#e7f1ff] 
                        dark:text-white w-full hover:text-black dark:hover:bg-gray-900 "
                      >
                        {/* image */}
                        {ch.iconImage && (
                          <Image src={ch.iconImage} alt="item-icon" />
                        )}
                        {/* item */}
                        <span className="whitespace-nowrap   pl-3 ">
                          {ch.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
          {/* navitems */}
        </section>

        {/* right side data */}
        <section className=" hidden md:flex   items-center gap-3 ">
          {/* {authState?.user === null ? (
            <p className="mb-0">
              Log in <br /> My Account
            </p>
          ) : (
            <Profilelogin authState={authState} />
          )} */}
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Login</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="flex justify-between pt-8">
                  <SheetTitle>Login</SheetTitle>
                  <SheetTitle>
                    <SheetClose asChild>
                      <Link href="/signup" className="text-blue-700">
                        Register for free
                      </Link>
                    </SheetClose>
                  </SheetTitle>
                </div>
              </SheetHeader>
              <div className="mt-10">
                <div className="grid gap-10">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email ID / Username</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={user.password}
                      placeholder="*********"
                      onChange={(e: any) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" onClick={onLogin} className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href={"/signup"}>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5    dark:text-white dark:bg-[#020817]  border-2"
            >
              Register
            </button>
          </Link>
        </section>

        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-4xl md:hidden"
        />
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed z-[9999] left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-90"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
