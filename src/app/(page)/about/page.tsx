import Image from "next/image";
import RecruitmentProcess from "@/data/recruitmentProcess";
import firstsolutionprocess from "@/data/firstsolutionprocess";
import { FaCheckCircle } from "react-icons/fa";
import OurTeam from "@/components/ourteam/OurTeam";

export default function About() {
  return (
    <div className="w-full px-20 py-20 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-5xl font-semibold ">
              About First Solution Career
            </h2>
          </div>
          <div className=" pt-16 px-18 flex flex-col gap-20">
            <div className=" grid grid-cols-2  gap-10 border p-5 rounded">
              <div>
                <p className="p-7 text-[18px] dark:text-slate-300   text-justify">
                  A team of first generation entrepreneurs promotes First
                  Solution globally in recruitment & resourcing, solution
                  development, people management, administration and marketing
                  organizations. First Solution understand what it takes a
                  company to hire the right professional for the right position.
                </p>
              </div>
              <div>
                <Image
                  src="/images/team.webp"
                  alt=""
                  height={800}
                  width={800}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-2  gap-10 border p-5 rounded">
              <div>
                <Image
                  src="/images/skills.webp"
                  alt=""
                  height={500}
                  width={500}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="p-7 text-[18px] dark:text-slate-300  text-justify ">
                  Given the mix of collective skills & experience, commitment to
                  deadlines and a strong culture of ethics. In keeping with the
                  current industry requirements, First Solution has developed a
                  mix of professionals with domain and functional experience,
                  who act a like-minded sounding board to the customer.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2  gap-10 border p-5 rounded ">
              <div>
                <p className="p-7 text-[18px] dark:text-slate-300  text-justify ">
                  who could be an organization or a candidate. In keeping with
                  the current industry requirements, First Solution has
                  developed a mix of professionals with domain and functional
                  experience, who act as a like-minded sounding board to the
                  customer - who could be an organization or a candidate.
                </p>
              </div>
              <div>
                <Image
                  src="/images/comited.webp"
                  alt=""
                  height={500}
                  width={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-24 mt-14 gap-10 dark:text-white">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold ">
              What Business are we into ?
            </h2>
            <div>
              <p className="text-[18px]  dark:text-slate-300 ">
                First Solution is an eminent placement firm that is committed to
                provide superior value-added service to our clients and
                candidates like thereby becoming the most respected and
                effective recruitment/search firm for permanent placements in
                the Insurance, Non-insurance, Retail, IT, BPO, Telecom, Pharma
                and Finance industries. We are focused on delivering complete
                quality solutions for organizational Human Resource needs. With
                the right combination of robust delivery models and measured
                processes, we are committed to a long-term partnership with our
                clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold ">
              Resources how do we search ?
            </h2>
            <div className="flex flex-col justify-center gap-5">
              <p className="text-[18px] dark:text-slate-300  ">
                Our talent search is simply another methodology that identifies
                First Solution consultants from others. Our consultants
                undertake a preliminary market study to determine the specific
                search universe from which suitable candidates can be sourced.
                We then decide which one or more methods to use for sourcing the
                candidates - through advertisements, referrals, headhunting, and
                referring to our extensive database.
              </p>
              <p className="text-[18px] dark:text-slate-300  ">
                We take pride in our ability to recruit and evaluate quality
                professionals that our clients demand. We are focused on finding
                the right opportunities for individuals based on their talent
                and aspirations. We excel in locating and hiring exceptional
                talent to enhance the development and retention of the skilled
                professionals that companies need today to retain their
                competitive edge.
              </p>
              <p className="text-[18px]  dark:text-slate-300 ">
                The first Solution is a team-based work culture that ensures
                that employees have the opportunity to learn, develop new
                skills, or pick up new competencies relevant to the company
                growth. First Solution respects the stringent expectations of
                highly competitive, new economy firms that value commitment and
                quality from their business partners. The first Solution strives
                to meet their expectations and are proud to be associated with
                such clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="text-3xl font-semibold ">Recruitment Process 🙂</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {RecruitmentProcess.map((item) => (
                <li className="mb-10 ms-6" key={item.id}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8  dark:ring-gray-900 border dark:bg-blue-900 ">
                    <FaCheckCircle size={20} className=" text-green-500" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-medium text-gray-700 dark:text-slate-300 ml-2">
                    {item.data}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex flex-col items-center mt-7">
          <div>
            <h2 className="text-5xl font-semibold ">
              About First Solution Career
            </h2>
          </div>
          <div className="w-[700px] flex flex-col justify-center space-y-8 py-20  mt-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[11.70rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {firstsolutionprocess.map((item) => (
              <div className="relative" key={item.id}>
                <div className="md:flex items-center md:space-x-4 mb-3">
                  <div className="flex items-center space-x-6 md:space-x-8 md:space-x-reverse ">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-[#020817] bg-white shadow md:order-1 border">
                      <svg
                        className="fill-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                      </svg>
                    </div>
                    <time className="font-caveat font-medium text-base bg-black hover:bg-purple-900 dark:bg-[#020817] border rounded-full py-2 px-4 text-white  ">
                      {item.year}
                    </time>
                  </div>
                  <div className="text-slate-500 ml-14">
                    <span className="text-slate-900 dark:text-white font-bold">
                      {item.heading}
                    </span>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#020817] p-4 rounded border text-slate-300 shadow ml-14 md:ml-56">
                  {item.data}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurTeam />
    </div>
  );
}
