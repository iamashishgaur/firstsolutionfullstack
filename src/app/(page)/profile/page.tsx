"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/breadcrumb/breadcrumb";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div>
      <Breadcrumbs heading="Candidate Profile" title="Candidate Profile" />
      <section className="relative lg:mt-4 mt-[74px]">
        <div className="lg:container container-fluid">
          <div className="relative shrink-0">
            <Image
              src="/images/candidate.jpg"
              className="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700"
              alt=""
              height={200}
              width={200}
            />
          </div>

          <div className="md:flex mx-4 -mt-12">
            <div className="md:w-full">
              <div className="relative flex items-end justify-between">
                <div className="relative flex items-end">
                  <Image
                    src="/images/jio.gif"
                    className="size-28 rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <div className="ms-4">
                    <h5 className="text-lg font-semibold">Mr. Calvin carlo</h5>
                    <p className="text-slate-400">Web Designer</p>
                  </div>
                </div>

                <div className="">
                  <Link
                    href="candidate-profile-setting.html"
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-settings size-4"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mt-12 md:pb-24 pb-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7">
              <h5 className="text-xl font-semibold">Calvin Carlo</h5>
              <p className="text-slate-400 mt-4">
                Obviously I AM Web Developer. Web Developer with over 3 years of
                experience. Experienced with all stages of the development cycle
                for dynamic web projects. The as opposed to using Content here,
                content here, making it look like readable English.
              </p>
              <p className="text-slate-400 mt-4">
                Data Structures and Algorithms are the heart of programming.
                Initially most of the developers do not realize its importance
                but when you will start your career in software development, you
                will find your code is either taking too much time or taking too
                much space.
              </p>

              <h4 className="mt-6 text-xl font-semibold">Skills :</h4>
              <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">WordPress</span>
                    <span className="text-slate-400">84%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div className="bg-emerald-600 h-[6px] rounded-full w-[84%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">JavaScript</span>
                    <span className="text-slate-400">79%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div className="bg-emerald-600 h-[6px] rounded-full  w-[79%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">HTML</span>
                    <span className="text-slate-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div className="bg-emerald-600 h-[6px] rounded-full  w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">Figma</span>
                    <span className="text-slate-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div className="bg-emerald-600 h-[6px] rounded-full  w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">Photoshop</span>
                    <span className="text-slate-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div className="bg-emerald-600 h-[6px] rounded-full w-[70%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">Illustration</span>
                    <span className="text-slate-400">65%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div className="bg-emerald-600 h-[6px] rounded-full  w-[65%]"></div>
                  </div>
                </div>
              </div>

              <h4 className="mt-6 text-xl font-semibold">Experience :</h4>

              <div className="flex mt-6">
                <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                  <Image
                    src="/images/jio.gif"
                    className="size-16 mx-auto mb-2 block"
                    alt=""
                    height={50}
                    width={50}
                  />{" "}
                  2019-22
                </div>

                <div className="ms-4">
                  <h5 className="text-lg font-medium mb-0">
                    Full Stack Developer
                  </h5>
                  <span className="text-slate-400 company-university">
                    Shreethemes - India
                  </span>
                  <p className="text-slate-400 mt-2 mb-0">
                    It seems that only fragments of the original text remain in
                    the Lorem Ipsum texts used today. One may speculate that
                    over the course of time certain letters were added or
                    deleted at various positions within the text.{" "}
                  </p>
                </div>
              </div>

              <div className="flex mt-6">
                <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                  <Image
                    src="/images/jio.gif"
                    className="size-16 mx-auto mb-2 block"
                    alt=""
                    height={50}
                    width={50}
                  />{" "}
                  2017-19
                </div>

                <div className="ms-4">
                  <h5 className="text-lg font-medium mb-0">
                    Back-end Developer
                  </h5>
                  <span className="text-slate-400 company-university">
                    CircleCI - U.S.A.
                  </span>
                  <p className="text-slate-400 mt-2 mb-0">
                    It seems that only fragments of the original text remain in
                    the Lorem Ipsum texts used today. One may speculate that
                    over the course of time certain letters were added or
                    deleted at various positions within the text.{" "}
                  </p>
                </div>
              </div>

              {/* <Card className="rounded-md shadow dark:shadow-gray-700 p-6 mt-6">
                <h5 className="text-xl font-semibold">Contact Me:</h5>

                <form method="post" name="myForm" id="myForm" className="mt-4">
                  <p className="mb-0" id="error-msg"></p>
                  <div id="simple-msg"></div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="md:col-span-6 col-span-12">
                      <label aria-label="name" className="font-semibold">
                        Your Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="p-2  dark:border-slate-800 mt-2"
                        placeholder="Name "
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <label aria-label="email" className="font-semibold">
                        Your Email:
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-input border border-slate-100 dark:border-slate-800 mt-2"
                        placeholder="Email :"
                      />
                    </div>

                    <div className="col-span-12">
                      <label aria-label="subject" className="font-semibold">
                        Your Question:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        className="form-input border border-slate-100 dark:border-slate-800 mt-2"
                        placeholder="Subject :"
                        data-ms-editor="true"
                      />
                    </div>

                    <div className="col-span-12">
                      <label aria-label="comments" className="font-semibold">
                        Your Comment:
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        className="form-input border border-slate-100 dark:border-slate-800 mt-2 textarea"
                        placeholder="Message :"
                        data-ms-editor="true"
                      ></textarea>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                  >
                    Send Message
                  </Button>
                </form>
              </Card> */}
              <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                  </h2>

                  <form action="#" className="space-y-8">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Your message
                      </label>
                      <textarea
                        id="message"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 md:col-span-5">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                <h5 className="text-lg font-semibold">Personal Detail:</h5>
                <ul className="list-none mt-4">
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-mail size-4 text-slate-400 me-3 inline"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span className="text-slate-400 me-3">Email :</span>
                    </span>

                    <span>thomas@mail.com</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-gift size-4 text-slate-400 me-3 inline"
                      >
                        <polyline points="20 12 20 22 4 22 4 12"></polyline>
                        <rect x="2" y="7" width="20" height="5"></rect>
                        <line x1="12" y1="22" x2="12" y2="7"></line>
                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                      </svg>
                      <span className="text-slate-400 me-3">D.O.B. :</span>
                    </span>

                    <span>31st Dec, 1996</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-home size-4 text-slate-400 me-3 inline"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span className="text-slate-400 me-3">Address :</span>
                    </span>

                    <span>15 Razy street</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-map-pin size-4 text-slate-400 me-3 inline"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="text-slate-400 me-3">City :</span>
                    </span>

                    <span>London</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-globe size-4 text-slate-400 me-3 inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      <span className="text-slate-400 me-3">Country :</span>
                    </span>

                    <span>UK</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-server size-4 text-slate-400 me-3 inline"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <rect
                          x="2"
                          y="14"
                          width="20"
                          height="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                      <span className="text-slate-400 me-3">Postal Code :</span>
                    </span>

                    <span>521452</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-phone size-4 text-slate-400 me-3 inline"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span className="text-slate-400 me-3">Mobile :</span>
                    </span>

                    <span>(+125) 1542-8452</span>
                  </li>

                  <li className="flex justify-between mt-3">
                    <span className="text-slate-400 font-medium">Social:</span>

                    <ul className="list-none text-end space-x-0.5">
                      <li className="inline">
                        <Link
                          href="https://dribbble.com/shreethemes"
                          target="_blank"
                          className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                        >
                          <i
                            className="uil uil-dribbble align-middle"
                            title="dribbble"
                          ></i>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.behance.net/shreethemes"
                          target="_blank"
                          className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                        >
                          <i className="uil uil-behance" title="Behance"></i>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="http://linkedin.com/company/shreethemes"
                          target="_blank"
                          className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                        >
                          <i className="uil uil-linkedin" title="Linkedin"></i>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.facebook.com/shreethemes"
                          target="_blank"
                          className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                        >
                          <i
                            className="uil uil-facebook-f align-middle"
                            title="facebook"
                          ></i>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.instagram.com/shreethemes/"
                          target="_blank"
                          className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                        >
                          <i
                            className="uil uil-instagram align-middle"
                            title="instagram"
                          ></i>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://x.com/shreethemes"
                          target="_blank"
                          className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                        >
                          <i
                            className="uil uil-twitter align-middle"
                            title="twitter"
                          ></i>
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="mailto:support@shreethemes.in"
                          className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                        >
                          <i
                            className="uil uil-envelope align-middle"
                            title="email"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3 w-full bg-white p-3 rounded-md shadow dark:shadow-gray-700">
                    <div className="flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-file-text size-8 text-slate-400"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span className="font-medium ms-2">
                        calvin-carlo-resume.pdf
                      </span>
                    </div>

                    <Link
                      href="/data/resume.pdf"
                      className="text-white rounded-md w-full"
                      download
                      target="_blank"
                    >
                      <Button>Download CV</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
